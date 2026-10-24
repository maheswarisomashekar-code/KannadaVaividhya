import os
from pptx import Presentation
from pptx.util import Inches, Pt
from pptx.dml.color import RGBColor
from pptx.enum.text import PP_ALIGN
from pptx.enum.shapes import MSO_SHAPE

def create_deck():
    prs = Presentation()
    # 16:9 Widescreen dimensions
    prs.slide_width = Inches(13.333)
    prs.slide_height = Inches(7.5)

    blank_layout = prs.slide_layouts[6]

    # Theme colors
    BG_DARK = RGBColor(11, 15, 25)       # Slate 950
    CARD_DARK = RGBColor(23, 32, 54)     # Slate 900
    GOLD = RGBColor(234, 179, 8)         # Mysore Amber Gold
    WHITE = RGBColor(255, 255, 255)
    GRAY = RGBColor(156, 163, 175)       # Slate 400
    CRIMSON = RGBColor(225, 29, 72)      # Karnataka Flag Crimson
    CYAN = RGBColor(6, 182, 212)

    def set_slide_background(slide):
        bg = slide.shapes.add_shape(MSO_SHAPE.RECTANGLE, 0, 0, prs.slide_width, prs.slide_height)
        bg.fill.solid()
        bg.fill.fore_color.rgb = BG_DARK
        bg.line.fill.background() # no border
        return bg

    def add_header(slide, tag_text, title_text, kannada_subtitle=""):
        # Category Tag
        tag_box = slide.shapes.add_textbox(Inches(0.8), Inches(0.4), Inches(11.5), Inches(0.4))
        tf_tag = tag_box.text_frame
        tf_tag.word_wrap = True
        p_tag = tf_tag.paragraphs[0]
        p_tag.text = tag_text.upper()
        p_tag.font.size = Pt(11)
        p_tag.font.bold = True
        p_tag.font.color.rgb = GOLD

        # Main Title
        title_box = slide.shapes.add_textbox(Inches(0.8), Inches(0.7), Inches(11.5), Inches(0.8))
        tf_title = title_box.text_frame
        tf_title.word_wrap = True
        p_title = tf_title.paragraphs[0]
        p_title.text = title_text
        p_title.font.size = Pt(26)
        p_title.font.bold = True
        p_title.font.color.rgb = WHITE

        if kannada_subtitle:
            run_kn = p_title.add_run()
            run_kn.text = f"  ({kannada_subtitle})"
            run_kn.font.size = Pt(20)
            run_kn.font.color.rgb = GOLD

    # =========================================================================
    # SLIDE 1: TITLE SLIDE
    # =========================================================================
    slide1 = prs.slides.add_slide(blank_layout)
    set_slide_background(slide1)

    # Accent decorative bar
    bar = slide1.shapes.add_shape(MSO_SHAPE.RECTANGLE, Inches(0.8), Inches(1.8), Inches(0.15), Inches(3.8))
    bar.fill.solid()
    bar.fill.fore_color.rgb = GOLD
    bar.line.fill.background()

    # Title box
    tbox = slide1.shapes.add_textbox(Inches(1.2), Inches(1.7), Inches(11.0), Inches(3.8))
    tf1 = tbox.text_frame
    tf1.word_wrap = True

    p0 = tf1.paragraphs[0]
    p0.text = "KANNADA DIGITAL INNOVATION HACKATHON 2026"
    p0.font.size = Pt(14)
    p0.font.bold = True
    p0.font.color.rgb = GOLD

    p1 = tf1.add_paragraph()
    p1.text = "KannadaVaividhya (ಕನ್ನಡ ವೈವಿಧ್ಯ)"
    p1.font.size = Pt(40)
    p1.font.bold = True
    p1.font.color.rgb = WHITE
    p1.space_before = Pt(8)

    p2 = tf1.add_paragraph()
    p2.text = "Regional Language Explorer & Living Cultural Dialect Engine"
    p2.font.size = Pt(22)
    p2.font.color.rgb = CYAN
    p2.space_before = Pt(4)

    p3 = tf1.add_paragraph()
    p3.text = "Problem Statement 04: Namma Kannada — Regional Language Explorer"
    p3.font.size = Pt(15)
    p3.font.color.rgb = GRAY
    p3.space_before = Pt(16)

    # Footer banner
    footer_box = slide1.shapes.add_textbox(Inches(0.8), Inches(6.0), Inches(11.5), Inches(0.8))
    tf_f = footer_box.text_frame
    p_f = tf_f.paragraphs[0]
    p_f.text = "Organized by HackerRank Campus Crew & The National Institute of Engineering (NIE), Mysuru\nTheme: Code. Create. Celebrate Kannada."
    p_f.font.size = Pt(12)
    p_f.font.color.rgb = GRAY

    # =========================================================================
    # SLIDE 2: PROBLEM STATEMENT & SIGNIFICANCE
    # =========================================================================
    slide2 = prs.slides.add_slide(blank_layout)
    set_slide_background(slide2)
    add_header(slide2, "Section 1", "Problem Statement & Significance", "ಸಮಸ್ಯೆಯ ವಿವರಣೆ")

    # Left Card: Who is affected
    c1 = slide2.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, Inches(0.8), Inches(1.8), Inches(5.6), Inches(5.0))
    c1.fill.solid()
    c1.fill.fore_color.rgb = CARD_DARK
    c1.line.color.rgb = GOLD

    tf_c1 = c1.text_frame
    tf_c1.word_wrap = True
    p_c1_t = tf_c1.paragraphs[0]
    p_c1_t.text = "The Linguistic Disconnect in Karnataka"
    p_c1_t.font.size = Pt(18)
    p_c1_t.font.bold = True
    p_c1_t.font.color.rgb = GOLD

    points1 = [
        ("Textbook vs Reality: ", "Traditional Kannada education teaches standardized formal Kannada, yet everyday life in Karnataka is governed by vivid regional dialects (Mysuru, Dharwad, Kundapura, Kalaburagi, Bengaluru)."),
        ("Misunderstanding & Isolation: ", "Non-native speakers, tech migrants in Bengaluru, and students traveling to North Karnataka or coastal regions struggle to understand colloquial local idioms and phonetic cadences."),
        ("Vanishing Oral Heritage: ", "Grandmother's idioms, regional agricultural metaphors, and unique folk expressions are undocumented digitally and risk extinction among younger generations.")
    ]
    for b_title, b_desc in points1:
        p = tf_c1.add_paragraph()
        p.space_before = Pt(14)
        run_bold = p.add_run()
        run_bold.text = b_title
        run_bold.font.bold = True
        run_bold.font.color.rgb = WHITE
        run_bold.font.size = Pt(13)
        run_body = p.add_run()
        run_body.text = b_desc
        run_body.font.color.rgb = GRAY
        run_body.font.size = Pt(13)

    # Right Card: Target Audience & Impact
    c2 = slide2.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, Inches(6.8), Inches(1.8), Inches(5.6), Inches(5.0))
    c2.fill.solid()
    c2.fill.fore_color.rgb = CARD_DARK
    c2.line.color.rgb = CYAN

    tf_c2 = c2.text_frame
    tf_c2.word_wrap = True
    p_c2_t = tf_c2.paragraphs[0]
    p_c2_t.text = "Who is Affected & Why It Matters"
    p_c2_t.font.size = Pt(18)
    p_c2_t.font.bold = True
    p_c2_t.font.color.rgb = CYAN

    points2 = [
        ("Migrants & New Residents: ", "Over 1.5 million people move to Karnataka yearly for tech, education, and jobs. They need authentic, conversational everyday Kannada, not just grammar drills."),
        ("Linguistic Diversity: ", "Karnataka has 31 districts across 5 primary dialect zones, each with distinct phonetics, verb markers, and historical influences (Wadiyar court, Vachanas, Tulu/Konkani confluence)."),
        ("Cultural Preservation: ", "Digital documentation bridges generational divides and celebrates linguistic diversity under the hackathon vision: 'Code. Create. Celebrate Kannada.'")
    ]
    for b_title, b_desc in points2:
        p = tf_c2.add_paragraph()
        p.space_before = Pt(14)
        run_bold = p.add_run()
        run_bold.text = b_title
        run_bold.font.bold = True
        run_bold.font.color.rgb = WHITE
        run_bold.font.size = Pt(13)
        run_body = p.add_run()
        run_body.text = b_desc
        run_body.font.color.rgb = GRAY
        run_body.font.size = Pt(13)

    # =========================================================================
    # SLIDE 3: EXISTING SYSTEM & CRITICAL GAPS
    # =========================================================================
    slide3 = prs.slides.add_slide(blank_layout)
    set_slide_background(slide3)
    add_header(slide3, "Section 2", "Existing Systems & Critical Gaps", "ಪ್ರಸ್ತುತ ವ್ಯವಸ್ಥೆ ಮತ್ತು ಕೊರತೆಗಳು")

    gaps = [
        ("Current Solutions", "Existing Limitations", "Impact on Learners"),
        ("Generic Machine Translation\n(Google Translate / DeepL)", "Only supports standardized formal Kannada.\nCompletely fails at regional variations ('Enri' vs 'En maga').", "Users sound robotic and alien in real-world everyday interactions."),
        ("Language Learning Apps\n(Duolingo / Babbel)", "Monolithic textbook vocabulary.\nZero coverage of regional slang, local auto bargaining, or idioms.", "Learners cannot decipher colloquial conversations in Hubballi or Mangaluru."),
        ("Printed Dictionaries & Folk Books", "Static paper format, no audio pronunciation.\nInaccessible to youth, no interactive search or crowd updates.", "Rich oral nuances, rhythm, and dialect tonalities remain unheard and lost.")
    ]

    # Create table for clear, punchy comparison
    table_shape = slide3.shapes.add_table(4, 3, Inches(0.8), Inches(1.8), Inches(11.7), Inches(4.8))
    table = table_shape.table
    table.columns[0].width = Inches(3.6)
    table.columns[1].width = Inches(4.5)
    table.columns[2].width = Inches(3.6)

    for row_idx, row_data in enumerate(gaps):
        for col_idx, cell_text in enumerate(row_data):
            cell = table.cell(row_idx, col_idx)
            cell.text = cell_text
            p = cell.text_frame.paragraphs[0]
            p.font.size = Pt(13 if row_idx > 0 else 14)
            p.font.bold = (row_idx == 0 or col_idx == 0)
            if row_idx == 0:
                p.font.color.rgb = GOLD
                cell.fill.solid()
                cell.fill.fore_color.rgb = CARD_DARK
            else:
                p.font.color.rgb = WHITE if col_idx == 0 else GRAY
                cell.fill.solid()
                cell.fill.fore_color.rgb = RGBColor(18, 24, 38)

    # =========================================================================
    # SLIDE 4: HOW OUR SOLUTION IS DIFFERENT
    # =========================================================================
    slide4 = prs.slides.add_slide(blank_layout)
    set_slide_background(slide4)
    add_header(slide4, "Section 3", "How KannadaVaividhya Is Different", "ನಮ್ಮ ಪರಿಹಾರದ ವಿಶಿಷ್ಟತೆಗಳು")

    pillars = [
        ("Interactive Geo-Explorer", "Visual SVG map of Karnataka displaying 5 dialect zones across 31 districts with instant phonetic breakdowns.", GOLD),
        ("5-Way Dialect Morph", "Multi-dialect translator transforming common daily scenarios into Mysuru, Dharwad, Kundapra, Kalaburagi & Bengaluru slang.", CYAN),
        ("Voice Waveform Lab", "Real-time Web Audio API frequency visualizer and pronunciation coach analyzing acoustic authenticity.", CRIMSON),
        ("Gamified Detective Quiz", "'Yava Kannada?' trivia engine testing listening comprehension and awarding cultural proficiency badges.", GOLD),
        ("Crowdsourced Folk Vault", "Living 'Janapada Kosha' preserving native proverbs (Gaadegalu) and local idioms with community upvotes.", CYAN)
    ]

    for idx, (p_title, p_desc, col) in enumerate(pillars):
        x = Inches(0.8 + (idx % 3) * 3.95 if idx < 3 else 2.8 + (idx - 3) * 3.95)
        y = Inches(1.8 if idx < 3 else 4.5)
        card = slide4.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, x, y, Inches(3.7), Inches(2.3))
        card.fill.solid()
        card.fill.fore_color.rgb = CARD_DARK
        card.line.color.rgb = col

        tf = card.text_frame
        tf.word_wrap = True
        p_t = tf.paragraphs[0]
        p_t.text = f"0{idx+1}. {p_title}"
        p_t.font.size = Pt(16)
        p_t.font.bold = True
        p_t.font.color.rgb = col

        p_b = tf.add_paragraph()
        p_b.text = p_desc
        p_b.font.size = Pt(12)
        p_b.font.color.rgb = GRAY
        p_b.space_before = Pt(8)

    # =========================================================================
    # SLIDE 5: METHODOLOGY & WORKFLOW
    # =========================================================================
    slide5 = prs.slides.add_slide(blank_layout)
    set_slide_background(slide5)
    add_header(slide5, "Section 4", "Approach & Technical Methodology", "ವಿಧಾನ ಮತ್ತು ಕಾರ್ಯಾಚರಣೆ")

    steps = [
        ("Step 1: Linguistic Taxonomy", "Systematically categorized Karnataka's dialects into 5 zones: Old Mysuru (courtly), Uttara Karnataka (vachana/rhythmic), Karavali (marine/sing-song), Kalyana (Deccani), Bengaluru (urban slang)."),
        ("Step 2: Dual Cross-Translation Engine", "Engineered comparative phrase matrices across 6 situational domains (Auto, Dining, Greetings, Work) paired with a contextual rule simulator for custom user sentences."),
        ("Step 3: Web Audio Frequency Analysis", "Implemented browser-native Web Audio API AnalyserNode to capture live microphone input, calculate frequency bands, and draw a real-time oscilloscope waveform."),
        ("Step 4: Gamification & Crowdsourced Persistence", "Integrated local storage sync, upvoting mechanisms, audio hint playback, and canvas-confetti celebration triggers for an engaging user loop.")
    ]

    for idx, (s_title, s_desc) in enumerate(steps):
        y = Inches(1.8 + idx * 1.25)
        # Number marker
        marker = slide5.shapes.add_shape(MSO_SHAPE.OVAL, Inches(0.8), y + Inches(0.1), Inches(0.8), Inches(0.8))
        marker.fill.solid()
        marker.fill.fore_color.rgb = GOLD
        marker.line.fill.background()
        tf_m = marker.text_frame
        p_m = tf_m.paragraphs[0]
        p_m.text = str(idx + 1)
        p_m.font.size = Pt(16)
        p_m.font.bold = True
        p_m.font.color.rgb = BG_DARK
        p_m.alignment = PP_ALIGN.CENTER

        # Content card
        box = slide5.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, Inches(1.8), y, Inches(10.7), Inches(1.05))
        box.fill.solid()
        box.fill.fore_color.rgb = CARD_DARK
        box.line.color.rgb = RGBColor(40, 50, 75)
        tf_b = box.text_frame
        tf_b.word_wrap = True
        p_bt = tf_b.paragraphs[0]
        p_bt.text = s_title
        p_bt.font.size = Pt(14)
        p_bt.font.bold = True
        p_bt.font.color.rgb = WHITE

        p_bd = tf_b.add_paragraph()
        p_bd.text = s_desc
        p_bd.font.size = Pt(11)
        p_bd.font.color.rgb = GRAY
        p_bd.space_before = Pt(3)

    # =========================================================================
    # SLIDE 6: TECH STACK & ARCHITECTURE DIAGRAM
    # =========================================================================
    slide6 = prs.slides.add_slide(blank_layout)
    set_slide_background(slide6)
    add_header(slide6, "Section 5", "Tech Stack & System Architecture", "ತಂತ್ರಜ್ಞಾನ ವಿನ್ಯಾಸ")

    # Architecture Box Left
    arch_box = slide6.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, Inches(0.8), Inches(1.8), Inches(7.0), Inches(5.0))
    arch_box.fill.solid()
    arch_box.fill.fore_color.rgb = CARD_DARK
    arch_box.line.color.rgb = GOLD
    tf_arch = arch_box.text_frame
    tf_arch.word_wrap = True
    p_arch_t = tf_arch.paragraphs[0]
    p_arch_t.text = "System Architecture Pipeline"
    p_arch_t.font.size = Pt(18)
    p_arch_t.font.bold = True
    p_arch_t.font.color.rgb = GOLD

    arch_layers = [
        ("Presentation Layer: ", "React 18 SPA + Vite + Tailwind CSS + Lucide Icons for responsive 60fps glassmorphism interface."),
        ("Audio & Speech Subsystem: ", "Web Speech API (Kannada SpeechSynthesis with dialect-tuned pitch/tempo) + Web Audio API (AnalyserNode & Oscilloscope Canvas)."),
        ("Linguistic Engine: ", "Structured JSON datasets for multi-dialect matrix, phonetics, cultural heritage & proverb repositories."),
        ("Crowdsourced Storage: ", "Client-side LocalStorage cache with upvote ledger and dynamic user contribution publishing."),
        ("Deployment: ", "Optimized production build deployed with zero downtime on Vercel / Netlify edge networks.")
    ]
    for l_title, l_desc in arch_layers:
        p = tf_arch.add_paragraph()
        p.space_before = Pt(12)
        r_t = p.add_run()
        r_t.text = l_title
        r_t.font.bold = True
        r_t.font.color.rgb = WHITE
        r_t.font.size = Pt(12)
        r_d = p.add_run()
        r_d.text = l_desc
        r_d.font.color.rgb = GRAY
        r_d.font.size = Pt(12)

    # Stack Box Right
    stack_box = slide6.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, Inches(8.1), Inches(1.8), Inches(4.4), Inches(5.0))
    stack_box.fill.solid()
    stack_box.fill.fore_color.rgb = CARD_DARK
    stack_box.line.color.rgb = CYAN
    tf_stack = stack_box.text_frame
    tf_stack.word_wrap = True
    p_st_t = tf_stack.paragraphs[0]
    p_st_t.text = "Technology Stack"
    p_st_t.font.size = Pt(18)
    p_st_t.font.bold = True
    p_st_t.font.color.rgb = CYAN

    stack_items = [
        ("Framework: ", "React 18 / Vite 8"),
        ("Styling: ", "Tailwind CSS v4 (Glassmorphism)"),
        ("Audio Engine: ", "Web Audio API + SpeechSynthesis"),
        ("Visualization: ", "HTML5 Canvas (Waveform) + Interactive SVG"),
        ("Gamification: ", "Canvas-Confetti + Web Synthesizer FX"),
        ("Hosting: ", "Vercel / Netlify Edge CDN"),
        ("Icons: ", "Lucide React")
    ]
    for s_label, s_val in stack_items:
        p = tf_stack.add_paragraph()
        p.space_before = Pt(12)
        r_l = p.add_run()
        r_l.text = s_label
        r_l.font.bold = True
        r_l.font.color.rgb = WHITE
        r_l.font.size = Pt(13)
        r_v = p.add_run()
        r_v.text = s_val
        r_v.font.color.rgb = GOLD
        r_v.font.size = Pt(13)

    # =========================================================================
    # SLIDE 7: LIVE FEATURES & PRODUCT DEMO
    # =========================================================================
    slide7 = prs.slides.add_slide(blank_layout)
    set_slide_background(slide7)
    add_header(slide7, "Section 6", "Live Features & Demonstration Highlights", "ಪ್ರಾತ್ಯಕ್ಷಿಕೆಯ ಮುಖ್ಯ ಅಂಶಗಳು")

    features = [
        ("Karnataka Interactive Map", "Clickable SVG state map with 5 color-coded dialect zones, district listings, audio greetings, and proverbs.", "🗺️"),
        ("Real-Time AI Dialect Mitra", "Translates ANY arbitrary sentence or word into 5 regional dialects with instant audio & etiquette tips.", "🧠"),
        ("5-Way Dialect Morph", "Curated side-by-side comparative matrices across key domains with authentic audio pacing & transliteration.", "✨"),
        ("Acoustic Frequency Lab", "Live microphone waveform visualizer on HTML5 canvas with automated pronunciation match scoring.", "🎙️"),
        ("Dynamic Detective Quiz", "Endless randomized trivia rounds with shuffled options, sound effects, and 3 cultural badge tiers.", "🎮"),
        ("Janapada Kosha Vault", "Searchable archive of regional proverbs & slang with real-time upvoting and community submission modal.", "📚")
    ]

    for idx, (f_title, f_desc, icon) in enumerate(features):
        x = Inches(0.8 + (idx % 3) * 3.95)
        y = Inches(1.8 + (idx // 3) * 2.5)
        f_card = slide7.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, x, y, Inches(3.7), Inches(2.2))
        f_card.fill.solid()
        f_card.fill.fore_color.rgb = CARD_DARK
        f_card.line.color.rgb = GOLD if idx % 2 == 0 else CYAN

        tf = f_card.text_frame
        tf.word_wrap = True
        p_t = tf.paragraphs[0]
        p_t.text = f"{icon}  {f_title}"
        p_t.font.size = Pt(15)
        p_t.font.bold = True
        p_t.font.color.rgb = WHITE

        p_d = tf.add_paragraph()
        p_d.text = f_desc
        p_d.font.size = Pt(11)
        p_d.font.color.rgb = GRAY
        p_d.space_before = Pt(8)

    # =========================================================================
    # SLIDE 8: IMPACT, CONCLUSION & FUTURE SCOPE
    # =========================================================================
    slide8 = prs.slides.add_slide(blank_layout)
    set_slide_background(slide8)
    add_header(slide8, "Section 7", "Impact, Conclusion & Future Roadmap", "ಉಪಸಂಹಾರ ಮತ್ತು ಮುಂದಿನ ಗುರಿ")

    # Left Card: Impact & Value
    c_imp = slide8.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, Inches(0.8), Inches(1.8), Inches(5.6), Inches(5.0))
    c_imp.fill.solid()
    c_imp.fill.fore_color.rgb = CARD_DARK
    c_imp.line.color.rgb = GOLD
    tf_imp = c_imp.text_frame
    tf_imp.word_wrap = True
    p_it = tf_imp.paragraphs[0]
    p_it.text = "Cultural & Educational Impact"
    p_it.font.size = Pt(18)
    p_it.font.bold = True
    p_it.font.color.rgb = GOLD

    impacts = [
        ("Bridging the Regional Divide: ", "Empowers students, travelers, and professionals to communicate respectfully across Karnataka with local confidence."),
        ("Linguistic Heritage Archive: ", "Creates an authentic, open digital repository preserving endangered rural dialects and folk wisdom."),
        ("Fulfilling Hackathon Mission: ", "Truly embodies 'Code. Create. Celebrate Kannada.' by bringing cutting-edge web intelligence to native culture.")
    ]
    for b_title, b_desc in impacts:
        p = tf_imp.add_paragraph()
        p.space_before = Pt(16)
        r_b = p.add_run()
        r_b.text = b_title
        r_b.font.bold = True
        r_b.font.color.rgb = WHITE
        r_b.font.size = Pt(13)
        r_d = p.add_run()
        r_d.text = b_desc
        r_d.font.color.rgb = GRAY
        r_d.font.size = Pt(13)

    # Right Card: Future Scope
    c_fut = slide8.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, Inches(6.8), Inches(1.8), Inches(5.6), Inches(5.0))
    c_fut.fill.solid()
    c_fut.fill.fore_color.rgb = CARD_DARK
    c_fut.line.color.rgb = CYAN
    tf_fut = c_fut.text_frame
    tf_fut.word_wrap = True
    p_ft = tf_fut.paragraphs[0]
    p_ft.text = "Future Scope & Evolution"
    p_ft.font.size = Pt(18)
    p_ft.font.bold = True
    p_ft.font.color.rgb = CYAN

    futures = [
        ("Kannada Dialect LLM Fine-Tuning: ", "Fine-tune open-source models (like Llama / Gemma) on regional Kannada conversational corpora for automated dialect adaptation."),
        ("Crowdsourced Voice Datasets: ", "Partner with universities across Karnataka to record and benchmark native audio samples for phoneme analysis."),
        ("Mobile Offline App: ", "Package as a Progressive Web App (PWA) with offline audio caching for rural teachers and travelers.")
    ]
    for b_title, b_desc in futures:
        p = tf_fut.add_paragraph()
        p.space_before = Pt(16)
        r_b = p.add_run()
        r_b.text = b_title
        r_b.font.bold = True
        r_b.font.color.rgb = WHITE
        r_b.font.size = Pt(13)
        r_d = p.add_run()
        r_d.text = b_desc
        r_d.font.color.rgb = GRAY
        r_d.font.size = Pt(13)

    # Output file path
    output_path = os.path.join(os.getcwd(), "KannadaVaividhya_Presentation.pptx")
    prs.save(output_path)
    print(f"Presentation successfully created at: {output_path}")

if __name__ == "__main__":
    create_deck()
