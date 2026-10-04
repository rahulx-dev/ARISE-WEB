import os
import colorsys
import numpy as np
from PIL import Image, ImageDraw, ImageFont

OUTPUT_DIR = "public/visuals"
os.makedirs(OUTPUT_DIR, exist_ok=True)

# Fonts
FONT_BOLD = ImageFont.truetype(r"C:\Windows\Fonts\segoeuib.ttf", 26)
FONT_SM_BOLD = ImageFont.truetype(r"C:\Windows\Fonts\segoeuib.ttf", 11)
FONT_MONO_BOLD = ImageFont.truetype(r"C:\Windows\Fonts\consolab.ttf", 10)
FONT_MONO_SM = ImageFont.truetype(r"C:\Windows\Fonts\consolab.ttf", 8)
FONT_MONO_REG = ImageFont.truetype(r"C:\Windows\Fonts\consola.ttf", 9)

base_ref = Image.open(os.path.join(OUTPUT_DIR, "hunter_card_reference.jpg")).convert("RGB")

RANKS = [
    {
        "rank": "S",
        "name": "S-RANK",
        "hue": 0.0, # Pure Red 0 deg
        "color_rgb": (239, 68, 68),
        "hex": "#EF4444",
        "avatar_img": "rank_s.jpg",
        "banner_img": "rank_banner_s.jpg",
        "role": "SHADOW MONARCH",
        "quote": '"I ALONE LEVEL UP IN SHADOWS."',
    },
    {
        "rank": "A",
        "name": "A-RANK",
        "hue": 195.0 / 360.0, # Cyan 195 deg (original)
        "color_rgb": (0, 229, 255),
        "hex": "#00E5FF",
        "avatar_img": "rank_a.jpg",
        "banner_img": "rank_banner_a.jpg",
        "role": "VOID BLADE",
        "quote": '"DISCIPLINE TURNS POTENTIAL INTO REALITY."',
    },
    {
        "rank": "B",
        "name": "B-RANK",
        "hue": 208.0 / 360.0, # Sky Blue 208 deg
        "color_rgb": (56, 189, 248),
        "hex": "#38BDF8",
        "avatar_img": "female_hunter_shadow.jpg",
        "banner_img": "rank_banner_b.jpg",
        "role": "LIGHTNING VALKYRIE",
        "quote": '"THUNDER STRIKES BEFORE THEY HEAR."',
    },
    {
        "rank": "C",
        "name": "C-RANK",
        "hue": 348.0 / 360.0, # Crimson Ruby 348 deg
        "color_rgb": (244, 63, 94),
        "hex": "#F43F5E",
        "avatar_img": "female_hunter_crimson.jpg",
        "banner_img": "rank_banner_c.jpg",
        "role": "CRIMSON SOVEREIGN",
        "quote": '"CRIMSON STEEL NEVER BENDS."',
    },
    {
        "rank": "D",
        "name": "D-RANK",
        "hue": 38.0 / 360.0, # Topaz Amber Gold 38 deg
        "color_rgb": (245, 158, 11),
        "hex": "#F59E0B",
        "avatar_img": "bloodred_commander.jpg",
        "banner_img": "rank_banner_d.jpg",
        "role": "BLOODRED KNIGHT",
        "quote": '"DEFEND THE PROTOCOL AT ALL COSTS."',
    },
    {
        "rank": "E",
        "name": "E-RANK",
        "hue": 0.0,
        "color_rgb": (161, 161, 170),
        "hex": "#A1A1AA",
        "avatar_img": "rank_e.jpg",
        "banner_img": "rank_banner_e.jpg",
        "role": "SHADOW INITIATE",
        "quote": '"FROM WEAKEST TO THE UNSTOPPABLE."',
        "desaturate": True,
    },
]

def draw_diamond(draw, cx, cy, radius, fill):
    draw.polygon([(cx, cy - radius), (cx + radius, cy), (cx, cy + radius), (cx - radius, cy)], fill=fill)

def build_card_template(rk):
    rank_letter = rk["rank"]
    print(f"Building polished master card template for {rank_letter}-Rank...")

    # Start with base reference card
    card_arr = np.array(base_ref.copy())

    # 1. Clean out the top HUD area (ID, Name, and Blue Tick) seamlessly:
    # y: 116 to 186, x: 382 to 734
    y0, y1 = 116, 186
    x0, x1 = 382, 734
    top_row = card_arr[y0 - 1, x0:x1].astype(float)
    bot_row = card_arr[y1 + 1, x0:x1].astype(float)
    h_box = y1 - y0 + 1
    w_box = x1 - x0

    for i in range(h_box):
        alpha = i / float(h_box - 1)
        row = (1.0 - alpha) * top_row + alpha * bot_row
        noise = np.random.normal(0, 0.35, (w_box, 3))
        card_arr[y0 + i, x0:x1] = np.clip(row + noise, 0, 255).astype(np.uint8)

    # Clean out the old subtitle line "VOID BLADE • A-RANK HUNTER"
    y0_sub, y1_sub = 187, 206
    top_sub = card_arr[y0_sub - 1, x0:650].astype(float)
    bot_sub = card_arr[y1_sub + 1, x0:650].astype(float)
    h_sub = y1_sub - y0_sub + 1
    w_sub = 650 - x0
    for i in range(h_sub):
        alpha = i / float(h_sub - 1)
        row = (1.0 - alpha) * top_sub + alpha * bot_sub
        noise = np.random.normal(0, 0.35, (w_sub, 3))
        card_arr[y0_sub + i, x0:650] = np.clip(row + noise, 0, 255).astype(np.uint8)

    # 2. Recolor HUD accents and chassis LEDs (if not original cyan)
    if rank_letter != "A":
        norm = card_arr.astype(float) / 255.0
        r_c, g_c, b_c = norm[:, :, 0], norm[:, :, 1], norm[:, :, 2]
        mask = (b_c > r_c + 0.04) & (b_c > 0.08)
        h, w, _ = card_arr.shape
        desat = rk.get("desaturate", False)
        t_hue = rk["hue"]

        for y in range(h):
            for x in range(w):
                # Don't touch avatar zone (x < 375)
                if x < 375:
                    continue
                if mask[y, x]:
                    hv, sv, vv = colorsys.rgb_to_hsv(norm[y, x, 0], norm[y, x, 1], norm[y, x, 2])
                    if 0.44 <= hv <= 0.72:
                        if desat:
                            nr, ng, nb = vv, vv, vv
                        else:
                            nr, ng, nb = colorsys.hsv_to_rgb(t_hue, min(sv * 1.15, 1.0), vv)
                        card_arr[y, x, 0] = int(np.clip(nr * 255.0, 0, 255))
                        card_arr[y, x, 1] = int(np.clip(ng * 255.0, 0, 255))
                        card_arr[y, x, 2] = int(np.clip(nb * 255.0, 0, 255))

    card_img = Image.fromarray(card_arr)

    # 3. Paste Right 3D Chrome Rank Totem Banner (x: 742, y: 76, w: 220, h: 404)
    banner_path = os.path.join(OUTPUT_DIR, rk["banner_img"])
    if os.path.exists(banner_path):
        banner_raw = Image.open(banner_path).convert("RGB")
        banner = banner_raw.resize((220, 404), Image.Resampling.LANCZOS)
        card_img.paste(banner, (742, 76))

    # 4. Composite Left Avatar Character
    av_path = os.path.join(OUTPUT_DIR, rk["avatar_img"])
    if os.path.exists(av_path):
        av_raw = Image.open(av_path).convert("RGB")
        target_w, target_h = 314, 384
        rw, rh = av_raw.size
        aspect = target_w / float(target_h)
        if rw / float(rh) > aspect:
            new_w = int(rh * aspect)
            crop_x = (rw - new_w) // 2
            av_crop = av_raw.crop((crop_x, 0, crop_x + new_w, rh))
        else:
            new_h = int(rw / aspect)
            av_crop = av_raw.crop((0, 0, rw, new_h))
        av_resized = av_crop.resize((target_w, target_h), Image.Resampling.LANCZOS)

        # Apply dark obsidian vignette on bottom 46% of avatar for clean space
        av_arr = np.array(av_resized, dtype=float)
        for y in range(target_h):
            if y > target_h * 0.50:
                factor = (y - target_h * 0.50) / (target_h * 0.50)
                fade_rgb = np.array([3.0, 5.0, 9.0])
                av_arr[y, :] = av_arr[y, :] * (1.0 - factor * 0.95) + fade_rgb * (factor * 0.95)
        for y in range(int(target_h * 0.15)):
            factor = 1.0 - (y / (target_h * 0.15))
            av_arr[y, :] = av_arr[y, :] * (1.0 - factor * 0.5)

        av_final = Image.fromarray(np.clip(av_arr, 0, 255).astype(np.uint8))
        card_img.paste(av_final, (58, 92))

    # 5. Draw Sci-Fi Accents, Borders & Clean HUD Subtitle
    draw = ImageDraw.Draw(card_img)
    crgb = rk["color_rgb"]

    # Avatar inner neon border
    draw.rectangle([(58, 92), (58 + 314, 92 + 384)], outline=crgb, width=2)
    # Avatar top-left chamfer notch
    draw.line([(58, 92), (58 + 24, 92)], fill=crgb, width=3)
    draw.line([(58, 92), (58, 92 + 24)], fill=crgb, width=3)
    # Avatar bottom-right angled LED tab
    cx, cy = 58 + 314, 92 + 384
    draw.polygon([(cx, cy - 28), (cx, cy), (cx - 28, cy)], fill=crgb)

    # Avatar top-left class badge (crisp 4-point diamond icon):
    draw_diamond(draw, 78, 114, 5, crgb)
    role_parts = rk["role"].split(" ")
    draw.text((90, 106), role_parts[0], fill=(255, 255, 255), font=FONT_MONO_BOLD)
    if len(role_parts) > 1:
        draw.text((90, 118), role_parts[1], fill=(255, 255, 255), font=FONT_MONO_BOLD)
    draw.text((90, 130), "CLASS", fill=(130, 143, 158), font=FONT_MONO_SM)

    # Avatar bottom rank label & quote:
    draw.text((78, 436), f"{rk['name']} HUNTER", fill=crgb, font=FONT_MONO_BOLD)
    draw.text((78, 452), rk["quote"], fill=(130, 143, 158), font=FONT_MONO_SM)

    # Triangular rank crest in bottom right of avatar:
    tri_x = 58 + 314 - 40
    tri_y = 92 + 384 - 36
    draw.polygon([(tri_x, tri_y), (tri_x + 9, tri_y - 17), (tri_x + 18, tri_y)], fill=crgb)
    draw.text((tri_x + 5, tri_y + 2), rk["rank"], fill=crgb, font=FONT_MONO_SM)

    # Top HUD ID label:
    draw.text((398, 124), "HUNTER ID", fill=(130, 143, 158), font=FONT_MONO_REG)

    # Subtitle: ✦ ROLE • RANK HUNTER
    draw_diamond(draw, 404, 194, 4, crgb)
    draw.text((414, 188), f"{rk['role']}  •  {rk['name']} HUNTER", fill=crgb, font=FONT_MONO_BOLD)

    # Corner Chassis LED highlights
    draw.line([(8, 8), (28, 8)], fill=crgb, width=2)
    draw.line([(8, 8), (8, 28)], fill=crgb, width=2)
    draw.line([(1024 - 8, 8), (1024 - 28, 8)], fill=crgb, width=2)
    draw.line([(1024 - 8, 8), (1024 - 8, 28)], fill=crgb, width=2)
    draw.line([(8, 564 - 8), (28, 564 - 8)], fill=crgb, width=2)
    draw.line([(8, 564 - 8), (8, 564 - 28)], fill=crgb, width=2)
    draw.line([(1024 - 8, 564 - 8), (1024 - 28, 564 - 8)], fill=crgb, width=2)
    draw.line([(1024 - 8, 564 - 8), (1024 - 8, 564 - 28)], fill=crgb, width=2)

    out_file = os.path.join(OUTPUT_DIR, f"card_base_{rank_letter.lower()}.jpg")
    card_img.save(out_file, quality=97)
    print(f"Generated master card template: {out_file}")

for r in RANKS:
    build_card_template(r)

print("ALL 6 MASTER CARD TEMPLATES POLISHED SUCCESSFULLY!")
