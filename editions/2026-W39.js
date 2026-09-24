window.HELIX_EDITIONS = window.HELIX_EDITIONS || {};
window.HELIX_EDITIONS["2026-W39"] = {
 "id": "2026-W39",
 "editorNote": "Welcome to the first edition. Your Field leads this week, with chromatin and multi-omics work in type 1 diabetes, followed by four general desks. Every citation has been checked against PubMed, but summaries are written from abstracts and full texts, so read the paper before you quote a number. Preprints are flagged.",
 "frontPage": {
  "top": "field"
 },
 "desks": {
  "field": {
   "stories": [
    {
     "kind": "lead",
     "headline": "Inflammatory enhancer programs erode beta-cell identity within weeks",
     "dek": "Paired snATAC and snRNA profiling of mouse islets on a high-fat diet finds NF-κB and type I interferon regulons switching on as identity regulons fade. The signature is strongest in T1D donor beta cells.",
     "body": [
      "A single-nucleus multiome study of mouse islets suggests beta-cell identity can start to slip within days of metabolic stress, and that the slippage tracks a gain of inflammatory enhancer activity. Ernst and colleagues fed C57BL/6J mice a high-fat diet (HFD) for one or three weeks. They then profiled chromatin accessibility and gene expression in the same nuclei, keeping 20,566 islet nuclei after QC.",
      "Beta cells moved the most. Genes tied to identity, glucose sensing and circadian rhythm dropped early, and inflammatory genes rose more slowly. SCENIC+ inference kept 16 high-quality enhancer-driven regulons. The ones losing activity included beta-cell regulators such as RFX3. The ones gaining activity were driven by NF-κB family members, with a transient rise, and by type I interferon mediators, which rose later. NicheNet named immune-derived TNF and IFNβ as likely upstream ligands, and many of their predicted targets were the inflammatory transcription factors themselves, which points to a feed-forward loop.",
      "The response was uneven across cells. Using a TNF/IFNβ target-gene module, the authors identified a high-inflammation beta-cell subpopulation. It made up roughly 0% of beta cells on control diet, about 3% after one week of HFD and about 33% after three weeks.",
      "Next, the team scored the same module in public human islet scRNA-seq data. In an HPAP-derived cohort (38 non-diabetic, 10 T1D and 17 T2D donors), high-inflammation beta cells were significantly more common in both diabetes types. The rise was much larger in T1D."
     ],
     "whyItMatters": "This is a direct multiome readout of the model many chromatin-erosion projects start from: inflammatory transcription factors take over enhancers while identity regulons lose accessibility and output. It supplies a regulon-level signature (NF-κB and type I IFN rising, RFX3-type identity factors falling) and an HPAP link showing the state is enriched in T1D beta cells. Both can be tested directly against human islet scATAC or CUT&Tag data.",
     "caveats": "The multiome was done in mice with very few animals (one or two per diet and time point), and all were male. The human analysis used transcriptome data only, with a module defined in mouse, so it cannot show that the chromatin changes are conserved. The model is diet-induced stress, not autoimmunity.",
     "tags": [
      "snMultiome",
      "beta-cell identity",
      "SCENIC+",
      "type I interferon",
      "NF-κB",
      "HPAP"
     ],
     "source": {
      "title": "Single nucleus multiomics reveals an early inflammatory response to high-fat diet in mouse islets.",
      "authors": "Ernst et al.",
      "venue": "Life Science Alliance",
      "date": "2026-09-01",
      "doi": "10.26508/lsa.202603840",
      "pmid": "42680559",
      "url": "https://pubmed.ncbi.nlm.nih.gov/42680559/",
      "peerReviewed": true
     },
     "figure": {
      "title": "Inflammatory regulons displace beta-cell identity",
      "caption": "a, Male C57BL/6J mice on control diet or high-fat diet (HFD) for 1 or 3 weeks; snATAC-seq and snRNA-seq from the same nuclei (timeline to scale). b, SCENIC+ regulons: identity regulons such as RFX3 lose activity early, NF-κB regulons rise transiently and type I interferon regulons later; curves are schematic. NicheNet places immune-derived TNF and IFNβ upstream, with the inflammatory TFs among their predicted targets. c, Share of beta cells in the high-inflammation state (bars to scale, approximate values). d, Human scRNA-seq only, with a mouse-defined module; bar lengths schematic. Data: Ernst et al., Life Science Alliance, 2026.",
      "steps": [
       "Islets from mice fed control diet or HFD for one or three weeks were profiled by snATAC-seq and snRNA-seq in the same nuclei, 20,566 after QC.",
       "SCENIC+ kept 16 enhancer-driven regulons: identity regulons such as RFX3 fell early, NF-κB rose transiently and type I IFN later, fed by immune TNF and IFNβ.",
       "A high-inflammation beta-cell subpopulation grew from roughly 0% on control diet to about 3% after one week and about 33% after three weeks of HFD.",
       "In HPAP human islets (38 non-diabetic, 10 T1D, 17 T2D donors), these cells were more common in both diabetes types, with a much larger rise in T1D."
      ],
      "svg": "<svg viewBox=\"0 0 680 340\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"a, paired snATAC-seq and snRNA-seq of mouse islets after control diet or 1 or 3 weeks of high-fat diet, 20,566 nuclei. b, schematic of SCENIC+ regulon activity: identity regulons such as RFX3 fall early, NF-kB rises transiently, type I interferon rises later; NicheNet names immune TNF and IFN-beta as upstream ligands in a feed-forward loop. c, high-inflammation beta cells: about 0, 3 and 33 percent. d, schematic: in HPAP human islets these cells are more common in T2D and much more in T1D.\"><g data-step=\"1\"><text x=\"0\" y=\"16\" class=\"p-l\">a</text><text x=\"18\" y=\"16\" class=\"t-b\">Paired snATAC-seq + snRNA-seq in the same nuclei, mouse islets</text><line x1=\"40\" y1=\"44\" x2=\"340\" y2=\"44\" class=\"ln-m\"/><circle cx=\"40\" cy=\"44\" r=\"5\" class=\"f-ink\"/><circle cx=\"140\" cy=\"44\" r=\"5\" class=\"f-ink\"/><circle cx=\"340\" cy=\"44\" r=\"5\" class=\"f-ink\"/><text x=\"40\" y=\"64\" text-anchor=\"middle\" class=\"t-s\">control diet</text><text x=\"140\" y=\"64\" text-anchor=\"middle\" class=\"t-s\">HFD 1 wk</text><text x=\"340\" y=\"64\" text-anchor=\"middle\" class=\"t-s\">HFD 3 wk</text><text x=\"662\" y=\"48\" text-anchor=\"end\" class=\"t-s\"><tspan class=\"t-b\">20,566</tspan> islet nuclei after QC</text><text x=\"662\" y=\"66\" text-anchor=\"end\" class=\"t-s t-m\">C57BL/6J, male, 1–2 mice per diet and time point</text></g><g data-step=\"2\"><text x=\"0\" y=\"96\" class=\"p-l\">b</text><text x=\"18\" y=\"96\" class=\"t-b\">16 SCENIC+ enhancer-driven regulons in beta cells (schematic)</text><line x1=\"130\" y1=\"108\" x2=\"130\" y2=\"170\" class=\"ln\"/><line x1=\"130\" y1=\"170\" x2=\"290\" y2=\"170\" class=\"ln\"/><text x=\"18\" y=\"122\" class=\"t-s t-m\">regulon activity</text><text x=\"18\" y=\"140\" class=\"t-s t-m\">shape only</text><path d=\"M130,112 L180,150 L280,160\" class=\"ln\"/><path d=\"M130,164 L180,122 L280,140\" class=\"ln-d\"/><path d=\"M130,166 L180,160 L280,114\" class=\"ln-a\"/><text x=\"292\" y=\"118\" class=\"t-s t-a t-b\">type I IFN, rises later</text><text x=\"292\" y=\"142\" class=\"t-s\">NF-κB, transient rise</text><text x=\"292\" y=\"164\" class=\"t-s\">identity, e.g. RFX3</text><line x1=\"130\" y1=\"170\" x2=\"130\" y2=\"174\" class=\"ln\"/><text x=\"130\" y=\"188\" text-anchor=\"middle\" class=\"t-s\">ctrl</text><line x1=\"180\" y1=\"170\" x2=\"180\" y2=\"174\" class=\"ln\"/><text x=\"180\" y=\"188\" text-anchor=\"middle\" class=\"t-s\">1 wk</text><line x1=\"280\" y1=\"170\" x2=\"280\" y2=\"174\" class=\"ln\"/><text x=\"280\" y=\"188\" text-anchor=\"middle\" class=\"t-s\">3 wk</text><line x1=\"452\" y1=\"108\" x2=\"452\" y2=\"184\" class=\"ln-m\"/><text x=\"466\" y=\"118\" class=\"t-s t-b\">NicheNet upstream ligands</text><text x=\"466\" y=\"136\" class=\"t-s\">immune-derived TNF, IFNβ</text><text x=\"466\" y=\"154\" class=\"t-s\">targets: inflammatory TFs</text><text x=\"466\" y=\"172\" class=\"t-s t-m\">→ feed-forward loop</text></g><g data-step=\"3\"><text x=\"0\" y=\"212\" class=\"p-l\">c</text><text x=\"18\" y=\"212\" class=\"t-b\">High-inflammation beta-cell subpopulation, % of beta cells</text><line x1=\"150\" y1=\"222\" x2=\"150\" y2=\"280\" class=\"ln\"/><text x=\"18\" y=\"238\" class=\"t-s\">Control diet</text><text x=\"158\" y=\"238\" class=\"t-s t-b\">≈0%</text><text x=\"18\" y=\"256\" class=\"t-s\">HFD 1 wk</text><rect x=\"150\" y=\"247\" width=\"30\" height=\"11\" class=\"f-ink\"/><text x=\"188\" y=\"256\" class=\"t-s t-b\">≈3%</text><text x=\"18\" y=\"274\" class=\"t-s\">HFD 3 wk</text><rect x=\"150\" y=\"265\" width=\"330\" height=\"11\" class=\"f-a\"/><text x=\"488\" y=\"274\" class=\"t-s t-b t-a\">≈33%</text><text x=\"662\" y=\"238\" text-anchor=\"end\" class=\"t-s t-m\">TNF/IFNβ target-gene module</text></g><g data-step=\"4\"><text x=\"0\" y=\"304\" class=\"p-l\">d</text><text x=\"18\" y=\"304\" class=\"t-b\">Same module in human islet scRNA-seq, HPAP (schematic)</text><text x=\"18\" y=\"328\" class=\"t-s\">Non-diabetic<tspan class=\"t-m\"> n=38</tspan></text><rect x=\"130\" y=\"319\" width=\"10\" height=\"11\" class=\"f-m\"/><text x=\"200\" y=\"328\" class=\"t-s\">T2D<tspan class=\"t-m\"> n=17</tspan></text><rect x=\"258\" y=\"319\" width=\"36\" height=\"11\" class=\"f-ink\"/><text x=\"360\" y=\"328\" class=\"t-s\">T1D<tspan class=\"t-m\"> n=10</tspan></text><rect x=\"418\" y=\"319\" width=\"110\" height=\"11\" class=\"f-a\"/><text x=\"536\" y=\"328\" class=\"t-s t-b t-a\">much larger rise</text></g></svg>"
     }
    },
    {
     "kind": "feature",
     "headline": "T1D pancreatic lymph nodes hold stem-like, less exhausted CD8 T cells",
     "dek": "CyTOF, scRNA-seq with paired TCRs, and multiplex imaging of nPOD donor tissue describe a CD8 compartment that stays undifferentiated in the lymph node and matures into effectors in the pancreas.",
     "body": [
      "Peters and colleagues profiled pancreatic draining lymph nodes (pLNs) from nPOD organ donors, the tissue where islet-reactive T cells are thought to be primed. CyTOF of 10 T1D and 12 non-diabetic donors found more stem-cell-memory-like CD8 T cells (CD45RA+CD27+CD28+CCR7+CXCR3+) in T1D. An independent flow cohort of 23 donors, including autoantibody-positive donors, confirmed an expanded CXCR3+ naive-phenotype CD8 pool in T1D.",
      "Single-cell RNA-seq with TCR sequencing covered 122,300 cells from 9 T1D and 7 control donors. T1D CD8 cells showed higher inflammatory genes (IFITM3, LTB) and terminal-differentiation regulators (BCL6, BCL3), and lower exhaustion-linked genes such as NR4A2 and DUSP2. Cytokine-signature analysis pointed to IL-15 as a likely driver. Effector clones were shared between pLN and pancreatic slices and looked more terminally differentiated in the pancreas. Near islets, multiplex imaging found TCF1+TOX+ cells with a mix of activation and exhaustion features."
     ],
     "whyItMatters": "The authors start from the observation that T1D risk variants concentrate in T- and B-cell enhancers. This atlas identifies which tissue-resident CD8 states those enhancers probably act in, and suggests a failure to engage exhaustion programs. For T1D epigenome work, it gives a target for scATAC or multiome follow-up: test whether the TSCM-like and TCF1+TOX+ states carry the expected chromatin signatures of stemness versus exhaustion, and whether risk variants sit in their accessible regions.",
     "caveats": "The cohorts are small, and organ-donor tissue captures a single time point, mostly after diagnosis. There is no chromatin assay here, so the epigenetic questions remain inference. IL-15 involvement comes from computational enrichment and was not tested functionally.",
     "tags": [
      "CD8 T cells",
      "pancreatic lymph node",
      "nPOD",
      "scRNA-seq",
      "TCR",
      "exhaustion"
     ],
     "source": {
      "title": "Immune dysregulation and stem-like CD8+ T cell enrichment in type 1 diabetes pancreatic lymph nodes.",
      "authors": "Peters et al.",
      "venue": "Journal of Clinical Investigation",
      "date": "2026-09-15",
      "doi": "10.1172/JCI196445",
      "pmid": "42741944",
      "url": "https://pubmed.ncbi.nlm.nih.gov/42741944/",
      "peerReviewed": true
     },
     "figure": {
      "title": "Stem-like CD8 T cells in T1D lymph nodes",
      "caption": "a, Donors per assay (bars to scale, 1 donor per unit); the flow cohort's T1D/control split is not given. b, Genes higher or lower in T1D pLN CD8 T cells from scRNA-seq; IL-15 inferred computationally, not tested. c, Paired TCR sequencing links pLN clones to pancreatic slices; multiplex imaging near islets. Schematic; single post-diagnosis time point. Data: Peters et al., Journal of Clinical Investigation, 2026.",
      "steps": [
       "pLNs from nPOD donors were profiled by CyTOF (10 T1D, 12 non-diabetic), scRNA-seq with TCRs (122,300 cells, 9 T1D, 7 control) and a 23-donor flow cohort.",
       "T1D CD8 T cells had higher IFITM3, LTB, BCL6 and BCL3, lower exhaustion-linked NR4A2 and DUSP2, and a cytokine signature pointing to IL-15.",
       "Stem-like CD8 clones in the pLN were shared with more terminally differentiated effectors in pancreas; TCF1+TOX+ cells near islets mixed activation and exhaustion."
      ],
      "svg": "<svg viewBox=\"0 0 680 292\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"a, cohorts of nPOD pancreatic lymph node donors: CyTOF 10 T1D and 12 non-diabetic; scRNA-seq with TCR 9 T1D and 7 control, 122,300 cells; flow cohort of 23 donors. b, direction of change in T1D CD8 T cells: IFITM3, LTB, BCL6, BCL3 up; exhaustion-linked NR4A2 and DUSP2 down; IL-15 signature. c, schematic: stem-like CD8 cells in the lymph node share clones with more terminally differentiated effectors in pancreas; TCF1+TOX+ cells near islets.\"><defs><marker id=\"ah\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" class=\"f-ink\"/></marker></defs><g data-step=\"1\"><text x=\"0\" y=\"16\" class=\"p-l\">a</text><text x=\"18\" y=\"16\" class=\"t-b\">nPOD pancreatic draining lymph nodes (pLNs): donors per assay</text><text x=\"18\" y=\"38\" class=\"t-s\">CyTOF</text><rect x=\"140\" y=\"28\" width=\"79\" height=\"12\" class=\"f-ink\"/><rect x=\"220\" y=\"28\" width=\"95\" height=\"12\" class=\"f-m\"/><text x=\"340\" y=\"38\" class=\"t-s\"><tspan class=\"t-b\">10 T1D</tspan> + 12 non-diabetic</text><text x=\"18\" y=\"58\" class=\"t-s\">scRNA-seq + TCR</text><rect x=\"140\" y=\"48\" width=\"71\" height=\"12\" class=\"f-ink\"/><rect x=\"212\" y=\"48\" width=\"55\" height=\"12\" class=\"f-m\"/><text x=\"340\" y=\"58\" class=\"t-s\"><tspan class=\"t-b\">9 T1D</tspan> + 7 control; <tspan class=\"t-b\">122,300</tspan> cells</text><text x=\"18\" y=\"78\" class=\"t-s\">Flow, validation</text><rect x=\"140\" y=\"68\" width=\"183\" height=\"12\" class=\"f-m\"/><text x=\"340\" y=\"78\" class=\"t-s\"><tspan class=\"t-b\">23</tspan> donors, incl. autoantibody-positive</text></g><g data-step=\"2\"><text x=\"0\" y=\"110\" class=\"p-l\">b</text><text x=\"18\" y=\"110\" class=\"t-b\">pLN CD8 T cells, T1D vs control: direction of change only</text><path d=\"M18,132 L22.5,124 L27,132 Z\" class=\"f-ink\"/><text x=\"33\" y=\"134\" class=\"t-s\"><tspan class=\"t-b\">IFITM3, LTB</tspan><tspan class=\"t-m\">  inflammatory</tspan></text><path d=\"M340,132 L344.5,124 L349,132 Z\" class=\"f-ink\"/><text x=\"355\" y=\"134\" class=\"t-s\"><tspan class=\"t-b\">BCL6, BCL3</tspan><tspan class=\"t-m\">  terminal-differentiation regulators</tspan></text><path d=\"M18,146 L22.5,154 L27,146 Z\" class=\"f-a\"/><text x=\"33\" y=\"156\" class=\"t-s\"><tspan class=\"t-b t-a\">NR4A2, DUSP2</tspan>  exhaustion-linked, lower</text><circle cx=\"344.5\" cy=\"152\" r=\"4\" class=\"f-m\"/><text x=\"355\" y=\"156\" class=\"t-s\"><tspan class=\"t-b\">IL-15</tspan><tspan class=\"t-m\">  likely driver, cytokine signature</tspan></text></g><g data-step=\"3\"><text x=\"0\" y=\"188\" class=\"p-l\">c</text><text x=\"18\" y=\"188\" class=\"t-b\">Shared clones: stem-like in pLN, more terminal in pancreas (schematic)</text><circle cx=\"24\" cy=\"222\" r=\"6\" class=\"ln\"/><circle cx=\"40\" cy=\"222\" r=\"6\" class=\"ln\"/><circle cx=\"56\" cy=\"222\" r=\"6\" class=\"ln\"/><line x1=\"70\" y1=\"222\" x2=\"244\" y2=\"222\" class=\"ln\" marker-end=\"url(#ah)\"/><text x=\"157\" y=\"212\" text-anchor=\"middle\" class=\"t-s t-m\">shared TCR clones</text><circle cx=\"262\" cy=\"222\" r=\"6\" class=\"f-ink\"/><circle cx=\"278\" cy=\"222\" r=\"6\" class=\"f-ink\"/><circle cx=\"294\" cy=\"222\" r=\"6\" class=\"f-ink\"/><line x1=\"308\" y1=\"222\" x2=\"460\" y2=\"222\" class=\"ln-m\"/><circle cx=\"478\" cy=\"222\" r=\"6\" class=\"f-ink\"/><circle cx=\"478\" cy=\"222\" r=\"3\" class=\"f-m\"/><path d=\"M500,222 m-14,0 a14,9 0 1,0 28,0 a14,9 0 1,0 -28,0\" class=\"ln-m\"/><text x=\"18\" y=\"248\" class=\"t-s\"><tspan class=\"t-b\">pLN</tspan>  TSCM-like CD8</text><text x=\"18\" y=\"266\" class=\"t-s t-m\">CD45RA+CD27+CD28+CCR7+CXCR3+</text><text x=\"256\" y=\"248\" class=\"t-s\"><tspan class=\"t-b\">Pancreas</tspan>  effector clones</text><text x=\"256\" y=\"266\" class=\"t-s t-m\">more terminally differentiated</text><text x=\"472\" y=\"248\" class=\"t-s\"><tspan class=\"t-b\">Near islets</tspan>  TCF1+TOX+</text><text x=\"472\" y=\"266\" class=\"t-s t-m\">mixed activation/exhaustion</text></g></svg>"
     }
    },
    {
     "kind": "feature",
     "headline": "Multi-ancestry T1D GWAS ties non-HLA risk to islet chromatin",
     "dek": "A 63,000-person meta-analysis adds three loci, fine-maps 136 candidate functional variants and names ADCY7 as a cytokine-sensitive beta-cell gene.",
     "body": [
      "Fu and colleagues meta-analysed T1D GWAS data across ancestries (26,198 cases, 36,733 controls). They found 69 non-HLA risk regions, including new signals in AHI1, near TRAF1 and near ADCY7. Over a third of the lead variants (26 of 69) were also associated with indices of insulin secretion or insulin resistance. The authors read this as a genetic overlap between autoimmune risk and beta-cell or metabolic function.",
      "Bayesian fine-mapping combined with three annotation strategies prioritised 136 candidate functional variants. In Roadmap Epigenomics data, these variants were enriched for DNase hypersensitivity, active histone marks and active chromatin states in islets, liver, muscle and fat. At the new 16q12.1 locus, the variant rs1872691 was linked to ADCY7. In beta cells, proinflammatory cytokines lowered Adcy7 expression, and raising or lowering Adcy7 shifted both insulin secretion and cytokine-induced apoptosis in opposite directions."
     ],
     "whyItMatters": "This puts non-HLA T1D variants into islet regulatory chromatin as well as immune enhancers, which supports looking at beta-cell-intrinsic risk. The 136-variant set is a ready-made list to overlap with human islet scATAC, CUT&Tag or Hi-C data. It can also be used to ask whether risk enhancers are the ones that lose accessibility as beta-cell identity erodes.",
     "caveats": "The annotation relies on bulk Roadmap tissue epigenomes, not single-cell islet or immune chromatin maps. Most functional work on ADCY7 used rodent cell models. The effect sizes at the new loci are modest (odds ratios around 1.07 to 1.09).",
     "tags": [
      "GWAS",
      "fine-mapping",
      "T1D genetics",
      "regulatory variants",
      "ADCY7",
      "islet epigenome"
     ],
     "source": {
      "title": "Shared non-HLA genetic architecture across diverse ancestries links insulin secretion and resistance to type 1 diabetes.",
      "authors": "Fu et al.",
      "venue": "Diabetologia",
      "date": "2026-09-22",
      "doi": "10.1007/s00125-026-06865-5",
      "pmid": "42771182",
      "url": "https://pubmed.ncbi.nlm.nih.gov/42771182/",
      "peerReviewed": true
     },
     "figure": {
      "title": "Non-HLA T1D risk maps to islet chromatin",
      "caption": "a, Cases and controls (bar to scale). b, Each cell is one non-HLA risk region; red, lead variants also associated with insulin-secretion or insulin-resistance indices. c, Bayesian fine-mapping with three annotation strategies; enrichment for DNase hypersensitivity, active histone marks and chromatin states in bulk Roadmap tissues; schematic. d, Functional work mostly in rodent beta-cell models. Data: Fu et al., Diabetologia, 2026.",
      "steps": [
       "Fu and colleagues meta-analysed T1D GWAS across ancestries: 26,198 cases and 36,733 controls.",
       "They found 69 non-HLA risk regions, new signals at AHI1, near TRAF1 and near ADCY7; 26 lead variants also tracked insulin secretion or resistance.",
       "Fine-mapping prioritised 136 candidate functional variants, enriched for DNase HS, active histone marks and active states in islets, liver, muscle and fat.",
       "At 16q12.1, rs1872691 links to ADCY7; cytokines lower Adcy7 in beta cells, and changing it shifts insulin secretion and cytokine-induced apoptosis."
      ],
      "svg": "<svg viewBox=\"0 0 680 334\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"a, meta-analysis of 26,198 T1D cases and 36,733 controls across ancestries. b, 69 non-HLA risk regions, 26 also associated with insulin secretion or resistance indices; new signals AHI1, near TRAF1, near ADCY7. c, schematic: 136 fine-mapped candidate functional variants enriched in active chromatin in islets, liver, muscle and fat. d, rs1872691 at 16q12.1 linked to ADCY7, a cytokine-sensitive beta-cell gene.\"><g data-step=\"1\"><text x=\"0\" y=\"16\" class=\"p-l\">a</text><text x=\"18\" y=\"16\" class=\"t-b\">Multi-ancestry T1D GWAS meta-analysis, 62,931 people</text><rect x=\"18\" y=\"28\" width=\"267.3\" height=\"20\" class=\"f-ink\"/><rect x=\"287.3\" y=\"28\" width=\"374.7\" height=\"20\" class=\"f-m\"/><text x=\"18\" y=\"66\" class=\"t-s\"><tspan class=\"t-b\">26,198</tspan> cases</text><text x=\"662\" y=\"66\" text-anchor=\"end\" class=\"t-s\"><tspan class=\"t-b\">36,733</tspan> controls</text></g><g data-step=\"2\"><text x=\"0\" y=\"96\" class=\"p-l\">b</text><text x=\"18\" y=\"96\" class=\"t-b\">69 non-HLA risk regions; 26 also tied to insulin traits</text><path d=\"M18,108 h7 v12 h-7 Z M27,108 h7 v12 h-7 Z M36,108 h7 v12 h-7 Z M45,108 h7 v12 h-7 Z M54,108 h7 v12 h-7 Z M63,108 h7 v12 h-7 Z M72,108 h7 v12 h-7 Z M81,108 h7 v12 h-7 Z M90,108 h7 v12 h-7 Z M99,108 h7 v12 h-7 Z M108,108 h7 v12 h-7 Z M117,108 h7 v12 h-7 Z M126,108 h7 v12 h-7 Z M135,108 h7 v12 h-7 Z M144,108 h7 v12 h-7 Z M153,108 h7 v12 h-7 Z M162,108 h7 v12 h-7 Z M171,108 h7 v12 h-7 Z M180,108 h7 v12 h-7 Z M189,108 h7 v12 h-7 Z M198,108 h7 v12 h-7 Z M207,108 h7 v12 h-7 Z M216,108 h7 v12 h-7 Z M225,108 h7 v12 h-7 Z M234,108 h7 v12 h-7 Z M243,108 h7 v12 h-7 Z\" class=\"f-a\"/><path d=\"M252,108 h7 v12 h-7 Z M261,108 h7 v12 h-7 Z M270,108 h7 v12 h-7 Z M279,108 h7 v12 h-7 Z M288,108 h7 v12 h-7 Z M297,108 h7 v12 h-7 Z M306,108 h7 v12 h-7 Z M315,108 h7 v12 h-7 Z M324,108 h7 v12 h-7 Z M333,108 h7 v12 h-7 Z M342,108 h7 v12 h-7 Z M351,108 h7 v12 h-7 Z M360,108 h7 v12 h-7 Z M369,108 h7 v12 h-7 Z M378,108 h7 v12 h-7 Z M387,108 h7 v12 h-7 Z M396,108 h7 v12 h-7 Z M405,108 h7 v12 h-7 Z M414,108 h7 v12 h-7 Z M423,108 h7 v12 h-7 Z M432,108 h7 v12 h-7 Z M441,108 h7 v12 h-7 Z M450,108 h7 v12 h-7 Z M459,108 h7 v12 h-7 Z M468,108 h7 v12 h-7 Z M477,108 h7 v12 h-7 Z M486,108 h7 v12 h-7 Z M495,108 h7 v12 h-7 Z M504,108 h7 v12 h-7 Z M513,108 h7 v12 h-7 Z M522,108 h7 v12 h-7 Z M531,108 h7 v12 h-7 Z M540,108 h7 v12 h-7 Z M549,108 h7 v12 h-7 Z M558,108 h7 v12 h-7 Z M567,108 h7 v12 h-7 Z M576,108 h7 v12 h-7 Z M585,108 h7 v12 h-7 Z M594,108 h7 v12 h-7 Z M603,108 h7 v12 h-7 Z M612,108 h7 v12 h-7 Z M621,108 h7 v12 h-7 Z M630,108 h7 v12 h-7 Z\" class=\"f-m\"/><text x=\"18\" y=\"138\" class=\"t-s\"><tspan class=\"t-b t-a\">26 of 69</tspan> lead variants also associated with insulin-secretion or insulin-resistance indices</text><text x=\"18\" y=\"156\" class=\"t-s\"><tspan class=\"t-b\">New signals</tspan>  AHI1, near TRAF1, near ADCY7<tspan class=\"t-m\">   odds ratios ≈1.07–1.09</tspan></text></g><g data-step=\"3\"><text x=\"0\" y=\"186\" class=\"p-l\">c</text><text x=\"18\" y=\"186\" class=\"t-b\">136 candidate functional variants sit in active chromatin (schematic)</text><rect x=\"150\" y=\"202\" width=\"100\" height=\"20\" class=\"f-m\"/><line x1=\"18\" y1=\"209\" x2=\"380\" y2=\"209\" class=\"ln\"/><line x1=\"18\" y1=\"215\" x2=\"380\" y2=\"215\" class=\"ln\"/><line x1=\"172\" y1=\"200\" x2=\"172\" y2=\"224\" class=\"ln\"/><line x1=\"200\" y1=\"200\" x2=\"200\" y2=\"224\" class=\"ln\"/><line x1=\"228\" y1=\"200\" x2=\"228\" y2=\"224\" class=\"ln\"/><text x=\"18\" y=\"238\" class=\"t-s\">fine-mapped variants</text><text x=\"150\" y=\"238\" class=\"t-s t-m\">DNase HS, active histone marks, active states</text><text x=\"400\" y=\"208\" class=\"t-s\"><tspan class=\"t-b\">islets</tspan>, liver, muscle and fat</text><text x=\"400\" y=\"226\" class=\"t-s t-m\">bulk Roadmap Epigenomics tissues</text></g><g data-step=\"4\"><text x=\"0\" y=\"266\" class=\"p-l\">d</text><text x=\"18\" y=\"266\" class=\"t-b\">New 16q12.1 locus: rs1872691 links to ADCY7</text><line x1=\"18\" y1=\"287\" x2=\"200\" y2=\"287\" class=\"ln\"/><line x1=\"18\" y1=\"293\" x2=\"200\" y2=\"293\" class=\"ln\"/><rect x=\"110\" y=\"284\" width=\"90\" height=\"12\" class=\"f-ink\"/><line x1=\"50\" y1=\"280\" x2=\"50\" y2=\"300\" class=\"ln-a\"/><text x=\"50\" y=\"314\" text-anchor=\"middle\" class=\"t-s t-b t-a\">rs1872691</text><text x=\"155\" y=\"314\" text-anchor=\"middle\" class=\"t-s t-b\">ADCY7</text><text x=\"230\" y=\"290\" class=\"t-s\">Proinflammatory cytokines lower Adcy7 in beta cells</text><text x=\"230\" y=\"308\" class=\"t-s\">Raising vs lowering Adcy7 shifts insulin secretion and</text><text x=\"230\" y=\"326\" class=\"t-s\">cytokine-induced apoptosis in opposite directions</text></g></svg>"
     }
    },
    {
     "kind": "feature",
     "headline": "m6A loss erodes alpha-cell identity and pushes cells toward beta fate",
     "dek": "Deleting Mettl14 in alpha cells raises YY1, weakens the PAX6/MAFB identity program and drives alpha-to-beta conversion that stops at incompletely mature states.",
     "body": [
      "De Jesus and colleagues show that alpha cells rely on N6-methyladenosine (m6A) mRNA methylation to hold their identity. Stimuli that trigger glucagon release, such as L-arginine, raised METTL3, METTL14 and m6A levels. Losing m6A weakened amino-acid-stimulated glucagon secretion and disrupted alpha-cell identity programs. In mice, alpha-cell-specific deletion of Mettl14 shrank alpha-cell mass, expanded beta-cell mass and promoted alpha-to-beta conversion. Some of the converted cells ended up in late beta-like states that were not fully mature.",
      "Mechanistically, m6A-eCLIP identified the Yy1 transcript as a direct target. Normally, m6A on Yy1 makes the mRNA less stable, apparently via the YTHDF2 reader. When m6A is lost, YY1 rises. That lowers PAX6 and MAFB and switches on IRS2, mTOR and MAPK/ERK signalling."
     ],
     "whyItMatters": "YY1 is a chromatin-organizing factor, so this work links an epitranscriptomic layer to an identity-erosion cascade in an islet cell type that T1D leaves alive. For multi-omics studies of T1D, it suggests adding m6A (or its writers and readers) as a layer when modelling identity loss. It also flags that alpha-to-beta conversion strategies may produce immature cells unless the identity network is fully rewired.",
     "caveats": "The in vivo work is in mouse, and the human relevance of the YY1 axis was not established here. The study does not directly profile the chromatin effects of the rise in YY1.",
     "tags": [
      "m6A",
      "alpha-cell plasticity",
      "cell identity",
      "YY1",
      "transdifferentiation",
      "epitranscriptome"
     ],
     "source": {
      "title": "m6A mRNA methylation regulates pancreatic α-cell plasticity.",
      "authors": "De Jesus et al.",
      "venue": "Nature Metabolism",
      "date": "2026-09-18",
      "doi": "10.1038/s42255-026-01591-z",
      "pmid": "42760315",
      "url": "https://pubmed.ncbi.nlm.nih.gov/42760315/",
      "peerReviewed": true
     },
     "figure": {
      "title": "m6A loss tips alpha cells toward beta fate",
      "caption": "a, Stimuli of glucagon release such as L-arginine raise METTL3, METTL14 and m6A. b, m6A on the Yy1 transcript, apparently read by YTHDF2, destabilises it; without m6A, YY1 rises and the PAX6/MAFB identity program weakens. c, Alpha-cell-specific Mettl14 deletion shrinks alpha-cell mass, expands beta-cell mass and yields some incompletely mature beta-like cells. All panels schematic; mouse data, chromatin effects of YY1 not profiled. Data: De Jesus et al., Nature Metabolism, 2026.",
      "steps": [
       "Stimuli that trigger glucagon release, such as L-arginine, raise METTL3, METTL14 and m6A; losing m6A weakens amino-acid-stimulated glucagon secretion.",
       "m6A on Yy1 mRNA makes it less stable, apparently via YTHDF2; without it YY1 rises, lowering PAX6 and MAFB and switching on IRS2, mTOR and MAPK/ERK.",
       "Alpha-cell Mettl14 deletion shrank alpha-cell mass, expanded beta-cell mass and drove alpha-to-beta conversion, some cells stalling in immature beta-like states."
      ],
      "svg": "<svg viewBox=\"0 0 680 300\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"a, schematic: L-arginine raises METTL3, METTL14 and m6A in alpha cells, supporting glucagon secretion. b, m6A on Yy1 mRNA, read by YTHDF2, keeps YY1 low; with Mettl14 deleted YY1 rises, PAX6 and MAFB fall and IRS2, mTOR and MAPK/ERK signalling switch on. c, schematic: alpha cells convert toward beta cells, some stalling in late beta-like states that are not fully mature.\"><defs><marker id=\"ah\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" class=\"f-ink\"/></marker></defs><g data-step=\"1\"><text x=\"0\" y=\"16\" class=\"p-l\">a</text><text x=\"18\" y=\"16\" class=\"t-b\">Glucagon-release stimuli raise the m6A machinery (schematic)</text><circle cx=\"26\" cy=\"44\" r=\"7\" class=\"f-m\"/><line x1=\"40\" y1=\"44\" x2=\"116\" y2=\"44\" class=\"ln\" marker-end=\"url(#ah)\"/><path d=\"M125,44 L136,37 L147,44 L136,51 Z\" class=\"f-ink\"/><path d=\"M149,44 L160,37 L171,44 L160,51 Z\" class=\"f-ink\"/><line x1=\"178\" y1=\"44\" x2=\"254\" y2=\"44\" class=\"ln\" marker-end=\"url(#ah)\"/><line x1=\"270\" y1=\"44\" x2=\"390\" y2=\"44\" class=\"ln\"/><circle cx=\"290\" cy=\"38\" r=\"3\" class=\"f-ink\"/><circle cx=\"320\" cy=\"38\" r=\"3\" class=\"f-ink\"/><circle cx=\"350\" cy=\"38\" r=\"3\" class=\"f-ink\"/><line x1=\"406\" y1=\"44\" x2=\"470\" y2=\"44\" class=\"ln\" marker-end=\"url(#ah)\"/><text x=\"18\" y=\"66\" class=\"t-s\">L-arginine</text><text x=\"124\" y=\"66\" class=\"t-s\">METTL3, METTL14</text><text x=\"270\" y=\"66\" class=\"t-s\">m6A on mRNA rises</text><text x=\"484\" y=\"48\" class=\"t-s t-b\">glucagon secretion</text><text x=\"18\" y=\"88\" class=\"t-s t-m\">Losing m6A weakens amino-acid-stimulated glucagon secretion and disrupts identity programs</text></g><g data-step=\"2\"><text x=\"0\" y=\"120\" class=\"p-l\">b</text><text x=\"18\" y=\"120\" class=\"t-b\">m6A-eCLIP target: m6A on Yy1 mRNA keeps YY1 low</text><text x=\"18\" y=\"146\" class=\"t-s t-b\">Intact m6A</text><line x1=\"130\" y1=\"142\" x2=\"220\" y2=\"142\" class=\"ln\"/><circle cx=\"148\" cy=\"136\" r=\"3\" class=\"f-ink\"/><circle cx=\"172\" cy=\"136\" r=\"3\" class=\"f-ink\"/><circle cx=\"196\" cy=\"136\" r=\"3\" class=\"f-ink\"/><path d=\"M235,142 L246,135 L257,142 L246,149 Z\" class=\"f-ink\"/><text x=\"264\" y=\"146\" class=\"t-s\"><tspan class=\"t-b\">YTHDF2</tspan>  less stable mRNA, YY1 low</text><text x=\"18\" y=\"172\" class=\"t-s t-b\">Mettl14 deleted</text><line x1=\"130\" y1=\"168\" x2=\"220\" y2=\"168\" class=\"ln\"/><text x=\"236\" y=\"172\" class=\"t-s t-b t-a\">YY1 rises</text><line x1=\"302\" y1=\"168\" x2=\"334\" y2=\"168\" class=\"ln\" marker-end=\"url(#ah)\"/><text x=\"344\" y=\"172\" class=\"t-s\"><tspan class=\"t-b\">PAX6, MAFB</tspan> down;  <tspan class=\"t-b\">IRS2, mTOR, MAPK/ERK</tspan> up</text><text x=\"130\" y=\"190\" class=\"t-s t-m\">Yy1 mRNA</text></g><g data-step=\"3\"><text x=\"0\" y=\"222\" class=\"p-l\">c</text><text x=\"18\" y=\"222\" class=\"t-b\">Alpha-cell Mettl14 deletion in mice: alpha-to-beta conversion (schematic)</text><circle cx=\"30\" cy=\"246\" r=\"9\" class=\"f-m\"/><line x1=\"44\" y1=\"246\" x2=\"150\" y2=\"246\" class=\"ln\" marker-end=\"url(#ah)\"/><circle cx=\"170\" cy=\"246\" r=\"9\" class=\"ln\"/><line x1=\"184\" y1=\"246\" x2=\"290\" y2=\"246\" class=\"ln\" marker-end=\"url(#ah)\"/><circle cx=\"310\" cy=\"246\" r=\"9\" class=\"f-a\"/><line x1=\"324\" y1=\"246\" x2=\"432\" y2=\"246\" class=\"ln-d\"/><circle cx=\"450\" cy=\"246\" r=\"9\" class=\"f-ink\"/><text x=\"18\" y=\"272\" class=\"t-s\">alpha cell</text><text x=\"170\" y=\"272\" text-anchor=\"middle\" class=\"t-s\">converting</text><text x=\"310\" y=\"272\" text-anchor=\"middle\" class=\"t-s t-b t-a\">late beta-like</text><text x=\"310\" y=\"290\" text-anchor=\"middle\" class=\"t-s t-a\">not fully mature</text><text x=\"450\" y=\"272\" text-anchor=\"middle\" class=\"t-s t-m\">mature beta cell</text><text x=\"530\" y=\"250\" class=\"t-s\">alpha-cell mass<tspan class=\"t-b\"> down</tspan></text><text x=\"530\" y=\"268\" class=\"t-s\">beta-cell mass<tspan class=\"t-b\"> up</tspan></text></g></svg>"
     }
    },
    {
     "kind": "brief",
     "headline": "NF-κB p65 ChIP-seq maps direct cytokine targets expressed in T1D islets",
     "dek": "Bulk and single-cell RNA-seq, plus p65 and Pol II ChIP-seq, define IL-1β's immediate-early program in beta cells.",
     "body": [
      "Martin and colleagues exposed beta-cell lines and rodent and human islets to IL-1β, then used ChIP-seq to find where p65/RelA and RNA polymerase II bind. The immediate-early genes they identified are conserved across mouse, rat and human, and many are direct p65 targets that are also dysregulated in islets from T1D donors. This supports sustained NF-κB activity as a feature of beta cells in T1D."
     ],
     "tags": [
      "NF-κB",
      "ChIP-seq",
      "IL-1β",
      "T1D islets"
     ],
     "source": {
      "title": "Multiomics approaches reveal direct NF-κB p65 target genes in pancreatic islets during cytokine exposure and in type 1 diabetes.",
      "authors": "Martin et al.",
      "venue": "American Journal of Physiology. Endocrinology and Metabolism",
      "date": "2026-08-09",
      "doi": "10.1152/ajpendo.00498.2025",
      "pmid": "42572286",
      "url": "https://pubmed.ncbi.nlm.nih.gov/42572286/",
      "peerReviewed": true
     }
    },
    {
     "kind": "brief",
     "headline": "Four PDX1 residues are required for chromatin occupancy",
     "dek": "Deleting a short disordered segment next to the homeodomain leaves protein levels intact but loses target binding.",
     "body": [
      "Wokasch and colleagues deleted residues 207-223 of Pdx1 in mice. The protein was made at normal levels and stayed mostly nuclear, yet it lost occupancy at target genes, activated the Ins2 promoter less and caused severe pancreatic hypoplasia with poor endocrine differentiation. Truncation mapping narrowed the requirement to four conserved residues, 207-210. Structure predictions place them in a helix extending from the homeodomain."
     ],
     "tags": [
      "PDX1",
      "transcription factor",
      "chromatin occupancy",
      "pancreas development"
     ],
     "source": {
      "title": "Conserved C-terminal residues adjacent to the canonical PDX1 homeodomain are required for chromatin occupancy and pancreas development.",
      "authors": "Wokasch et al.",
      "venue": "Development",
      "date": "2026-09-22",
      "doi": "10.1242/dev.205842",
      "pmid": "42768965",
      "url": "https://pubmed.ncbi.nlm.nih.gov/42768965/",
      "peerReviewed": true
     }
    },
    {
     "kind": "brief",
     "headline": "Beta-cell identity erosion varies by type 2 diabetes subtype",
     "dek": "An islet scRNA-seq map of 131,083 cells ranks severe insulin-deficient diabetes as the most disrupted subtype.",
     "body": [
      "Xie and colleagues assigned 43 islet donors with T2D to the four clinical clusters. Using single-cell data from 32 of these donors, they found that severe insulin-deficient diabetes showed the most beta-cell damage: mature beta subclusters were depleted, global identity was eroded, and autophagy, apoptosis and ER-stress programs were active. Severe insulin-resistant diabetes largely kept beta-cell maturity. Clinical subtype is therefore a confounder that islet omics studies should record."
     ],
     "tags": [
      "scRNA-seq",
      "T2D subtypes",
      "beta-cell identity",
      "human islets"
     ],
     "source": {
      "title": "Single-cell profiling of pancreatic islets maps subtype-associated molecular alterations in type 2 diabetes.",
      "authors": "Xie et al.",
      "venue": "Diabetologia",
      "date": "2026-09-01",
      "doi": "10.1007/s00125-026-06842-y",
      "pmid": "42678439",
      "url": "https://pubmed.ncbi.nlm.nih.gov/42678439/",
      "peerReviewed": true
     }
    },
    {
     "kind": "brief",
     "headline": "Nardilysin recruits ISLET1 to a conserved Slc2a2 enhancer",
     "dek": "Combining public islet ATAC-seq and ChIP-seq with reporter assays traces GLUT2 regulation to a +39 kb enhancer.",
     "body": [
      "Using public islet ATAC-seq and ChIP-seq data, Nishi and colleagues identified four active enhancers around the mouse Slc2a2 (GLUT2) locus. Two are conserved in human islets. In MIN6 cells, nardilysin controlled the activity of one conserved enhancer 39 kb downstream of the transcription start site. It bound that enhancer and was needed for ISLET1 recruitment there, regulating GLUT2 in a way that does not depend on MafA."
     ],
     "tags": [
      "enhancer",
      "GLUT2",
      "ISLET1",
      "beta cells"
     ],
     "source": {
      "title": "Nardilysin regulates Slc2a2 expression via an ISLET1-dependent enhancer mechanism in pancreatic β-cells.",
      "authors": "Nishi et al.",
      "venue": "Biochemistry and Biophysics Reports",
      "date": "2026-09-02",
      "doi": "10.1016/j.bbrep.2026.102772",
      "pmid": "42733620",
      "url": "https://pubmed.ncbi.nlm.nih.gov/42733620/",
      "peerReviewed": true
     }
    },
    {
     "kind": "brief",
     "headline": "FORGE pipeline automates snMultiome analysis from fragments to regulons",
     "dek": "A containerised Nextflow workflow links paired snRNA and snATAC data through integration, network inference and differential testing.",
     "body": [
      "Solano and colleagues describe FORGE, a Nextflow pipeline with provenance tracking. It runs each modality separately, integrates them with linear and nonlinear latent models, and then carries the data through footprinting, co-accessibility and eRegulon inference. They benchmarked it on human and mouse blood, brain and kidney datasets across two multiome chemistries. For labs running islet or immune multiome cohorts, it could help standardise analyses."
     ],
     "tags": [
      "snMultiome",
      "pipeline",
      "Nextflow",
      "preprint",
      "methods"
     ],
     "source": {
      "title": "Flow Orchestrated Regulatory Genomics Engine (FORGE): A Configurable Nextflow Pipeline for End-to-End snMultiome Analysis.",
      "authors": "Solano et al.",
      "venue": "bioRxiv",
      "date": "2026-09-16",
      "doi": "10.64898/2026.09.10.750690",
      "pmid": "42780179",
      "url": "https://pubmed.ncbi.nlm.nih.gov/42780179/",
      "peerReviewed": false
     }
    },
    {
     "kind": "brief",
     "headline": "Reprogramming PBMCs to iPSCs largely resets methylation age",
     "dek": "Array profiling of 99 donor-matched pairs from the GESTALT cohort finds epigenetic-clock age wiped back toward zero.",
     "body": [
      "Reed and colleagues reprogrammed PBMCs from 99 healthy GESTALT participants into iPSCs and compared genome-wide methylation before and after. Epigenetic clocks put the iPSCs at an early methylation age, meaning most age-associated drift was erased. Each cell type kept its own set of genotype-driven methylation QTLs. The result matters for iPSC-derived islet or immune models of erosion: donor age is not carried over."
     ],
     "tags": [
      "DNA methylation",
      "epigenetic clock",
      "iPSC",
      "reprogramming"
     ],
     "source": {
      "title": "Characterization of DNA methylation in PBMCs and donor-matched iPSCs shows age-related methylation is reset during stem cell reprogramming.",
      "authors": "Reed et al.",
      "venue": "PLoS One",
      "date": "2026-09-08",
      "doi": "10.1371/journal.pone.0356501",
      "pmid": "42709743",
      "url": "https://pubmed.ncbi.nlm.nih.gov/42709743/",
      "peerReviewed": true
     }
    }
   ]
  },
  "genomics": {
   "stories": [
    {
     "kind": "lead",
     "headline": "An inherited EGFR mutation, traced to Appalachia, raises lung-cancer risk",
     "dek": "A study of more than 3.3 million people finds that germline T790M carriers face lung-cancer risk exceeding that of smoking, especially if they never smoked.",
     "body": [
      "Oncologists know EGFR T790M as the mutation that lets lung tumours shrug off first-generation targeted drugs. Far rarer is inheriting it. A new analysis in Science, drawing on genetic data from more than 3.3 million people, argues that being born with this variant is a potent and specific cause of lung cancer in its own right.",
      "The association was strikingly narrow. Carriers were significantly more likely to develop lung cancer, yet showed no excess risk across 17 other cancer types. The size of the effect is what stands out: the authors report that it exceeds the risk conferred by smoking, and that it is several times greater among people who have never smoked. The variant's effect also did not interact with polygenic risk, suggesting it acts largely independently of the many small-effect variants that shape common-disease susceptibility.",
      "The team then asked where the variant came from. Carriers are more common in the United States than among British- and Irish-descended populations elsewhere, a pattern the authors attribute to a founder event in Southern Appalachia roughly 200 to 225 years ago. That single origin has pushed up the variant's frequency regionally, and it now appears in people of British, Irish and African descent.",
      "The finding matters because lung-cancer screening in most countries is gated on smoking history, which by design misses never-smokers. If carriers can be identified, the authors suggest, targeted genetic testing and dedicated screening could catch cancers that current rules overlook."
     ],
     "whyItMatters": "It identifies a single inherited variant that confers high lung-cancer risk largely outside smoking-based screening criteria, pointing to a concrete group who might benefit from genetic testing and surveillance.",
     "caveats": "The abstract does not report absolute risks or carrier counts, and the variant is rare, so risk estimates may carry wide uncertainty; how screening should change for carriers remains to be tested.",
     "tags": [
      "cancer genetics",
      "germline risk",
      "founder effect",
      "lung cancer"
     ],
     "source": {
      "title": "Germline T790M mutation and lung cancer risk.",
      "authors": "LoPiccolo et al.",
      "venue": "Science",
      "date": "2026-09-17",
      "doi": "10.1126/science.aec0473",
      "pmid": "42752144",
      "url": "https://doi.org/10.1126/science.aec0473",
      "peerReviewed": true
     },
     "figure": {
      "title": "An inherited EGFR variant and lung-cancer risk",
      "caption": "a, The germline EGFR T790M variant, sought in genetic data from more than 3.3 million people. b, Carriers had higher lung-cancer risk, exceeding that of smoking and several times greater in never-smokers, but no excess across 17 other cancer types; schematic, as absolute risks were not reported. c, Timeline to scale: a founder event roughly 200–225 years ago. Data: LoPiccolo et al., Science, 2026.",
      "steps": [
       "Genetic data from more than 3.3 million people were searched for carriers of the rare inherited (germline) EGFR T790M variant.",
       "Carriers had higher lung-cancer risk, exceeding smoking's and several times greater in never-smokers, but no excess across 17 other cancer types.",
       "The variant traces to a founder event in Southern Appalachia about 200–225 years ago and now appears in people of British, Irish and African descent."
      ],
      "svg": "<svg viewBox=\"0 0 680 324\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"a, germline EGFR T790M sought in more than 3.3 million people. b, schematic: higher lung-cancer risk, greatest in never-smokers, no excess in 17 other cancers. c, founder event in Southern Appalachia about 200 to 225 years ago.\"><g data-step=\"1\"><text x=\"0\" y=\"16\" class=\"p-l\">a</text><text x=\"18\" y=\"16\" class=\"t-b\">Genetic data from more than 3.3 million people</text><rect x=\"250\" y=\"35\" width=\"180\" height=\"12\" class=\"f-m\"/><line x1=\"18\" y1=\"38\" x2=\"662\" y2=\"38\" class=\"ln\"/><line x1=\"18\" y1=\"44\" x2=\"662\" y2=\"44\" class=\"ln\"/><line x1=\"360\" y1=\"29\" x2=\"360\" y2=\"53\" class=\"ln-a\"/><text x=\"250\" y=\"68\" class=\"t-s\">EGFR gene</text><text x=\"368\" y=\"68\" class=\"t-s\"><tspan class=\"t-b t-a\">T790M</tspan>  inherited (germline)</text><text x=\"662\" y=\"68\" text-anchor=\"end\" class=\"t-s t-m\">rare variant</text></g><g data-step=\"2\"><text x=\"0\" y=\"106\" class=\"p-l\">b</text><text x=\"18\" y=\"106\" class=\"t-b\">Cancer risk in carriers vs non-carriers (schematic, not to scale)</text><line x1=\"250\" y1=\"118\" x2=\"250\" y2=\"186\" class=\"ln-d\"/><text x=\"18\" y=\"134\" class=\"t-s\">Lung cancer, all carriers</text><line x1=\"250\" y1=\"130\" x2=\"380\" y2=\"130\" class=\"ln\"/><rect x=\"375\" y=\"125\" width=\"10\" height=\"10\" class=\"f-ink\"/><text x=\"392\" y=\"134\" class=\"t-s\">exceeds the risk from smoking</text><text x=\"18\" y=\"156\" class=\"t-s\">Lung cancer, never-smokers</text><line x1=\"250\" y1=\"152\" x2=\"490\" y2=\"152\" class=\"ln-a\"/><rect x=\"485\" y=\"147\" width=\"10\" height=\"10\" class=\"f-a\"/><text x=\"502\" y=\"156\" class=\"t-s t-a t-b\">several times greater</text><text x=\"18\" y=\"178\" class=\"t-s\">17 other cancer types</text><rect x=\"245\" y=\"169\" width=\"10\" height=\"10\" class=\"f-m\"/><text x=\"262\" y=\"178\" class=\"t-s t-m\">no excess risk</text><text x=\"250\" y=\"202\" text-anchor=\"middle\" class=\"t-s t-m\">no excess</text><text x=\"662\" y=\"202\" text-anchor=\"end\" class=\"t-s t-m\">higher risk →</text></g><g data-step=\"3\"><text x=\"0\" y=\"234\" class=\"p-l\">c</text><text x=\"18\" y=\"234\" class=\"t-b\">Traced to a founder event in Southern Appalachia</text><line x1=\"18\" y1=\"266\" x2=\"662\" y2=\"266\" class=\"ln-m\"/><line x1=\"160.0\" y1=\"266\" x2=\"640.0\" y2=\"266\" class=\"ln\"/><rect x=\"100.0\" y=\"261\" width=\"60.0\" height=\"10\" class=\"f-a\"/><text x=\"100.0\" y=\"254\" class=\"t-s t-a t-b\">founder event</text><text x=\"662\" y=\"254\" text-anchor=\"end\" class=\"t-s\">now in people of British, Irish and African descent</text><line x1=\"100.0\" y1=\"271\" x2=\"100.0\" y2=\"276\" class=\"ln\"/><line x1=\"160.0\" y1=\"271\" x2=\"160.0\" y2=\"276\" class=\"ln\"/><line x1=\"640.0\" y1=\"266\" x2=\"640.0\" y2=\"276\" class=\"ln\"/><text x=\"100.0\" y=\"290\" text-anchor=\"middle\" class=\"t-s\">225</text><text x=\"160.0\" y=\"290\" text-anchor=\"middle\" class=\"t-s\">200</text><text x=\"180.0\" y=\"290\" class=\"t-s t-m\">years ago</text><text x=\"640.0\" y=\"290\" text-anchor=\"end\" class=\"t-s\">today</text><text x=\"420\" y=\"290\" text-anchor=\"middle\" class=\"t-s t-m\">frequency pushed up regionally</text><text x=\"18\" y=\"312\" class=\"t-s t-m\">Carriers are more common in the US than among British- and Irish-descended populations elsewhere</text></g></svg>"
     }
    },
    {
     "kind": "feature",
     "headline": "How gene switches remodelled the human skeleton, and our joints",
     "dek": "Testing more than half a million human-specific DNA changes reveals a coordinated dampening of cartilage sugar production that may explain human joint fragility.",
     "body": [
      "Bipedal walking, a big braincase and a birth canal to match all required a reshaped skeleton, but the genetic edits behind it have been hard to pin down. Writing in Nature, an international team screened 561,410 human-derived substitutions in promoters and enhancers using massively parallel reporter assays in chondrocytes, flagging 15,077 loci with human-specific regulatory activity. They then fused human and ape cells into hybrids, turned them into osteochondral progenitors, and combined the two datasets into genome-wide maps of human-specific changes in cis-regulation.",
      "The standout pattern was a broad rewiring of the extracellular matrix, above all a suppression of glycosaminoglycan synthesis. Human joints hold roughly three to four times less glycosaminoglycan than those of other apes. The shift carries signatures of natural selection, and the authors propose it helps explain why humans are unusually prone to degenerative joint disease."
     ],
     "whyItMatters": "It connects specific evolutionary regulatory changes to a measurable tissue trait that bears on osteoarthritis, offering a mechanistic view of why human joints wear out.",
     "caveats": "Reporter assays and hybrid cells in culture may not capture regulation in developing tissue, and the link to degenerative disease is inferred rather than directly shown.",
     "tags": [
      "human evolution",
      "MPRA",
      "gene regulation",
      "skeleton"
     ],
     "source": {
      "title": "The gene-regulatory evolution of the human skeleton.",
      "authors": "Yan et al.",
      "venue": "Nature",
      "date": "2026-09-23",
      "doi": "10.1038/s41586-026-11053-x",
      "pmid": "42778609",
      "url": "https://doi.org/10.1038/s41586-026-11053-x",
      "peerReviewed": true
     },
     "figure": {
      "title": "How gene switches reshaped human joints",
      "caption": "a, Massively parallel reporter assays in chondrocytes: of 561,410 human-derived substitutions tested, 15,077 loci showed human-specific regulatory activity (bar to scale). b, Human–ape hybrid cells, differentiated into osteochondral progenitors, were combined with the screen into genome-wide maps; schematic. c, Human joints hold roughly three to four times less glycosaminoglycan than other apes’. Data: Yan et al., Nature, 2026.",
      "steps": [
       "561,410 human-derived substitutions in promoters and enhancers were tested in chondrocytes; 15,077 loci showed human-specific regulatory activity.",
       "Human–ape hybrid cells, turned into osteochondral progenitors, were combined with the screen into genome-wide maps of human-specific cis-regulatory change.",
       "The standout signal was suppressed glycosaminoglycan synthesis: human joints hold roughly 3–4× less than other apes’, a shift that bears signs of selection."
      ],
      "svg": "<svg viewBox=\"0 0 680 302\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"a, 15,077 of 561,410 tested human-derived substitutions showed human-specific activity. b, schematic of human-ape hybrid cells yielding genome-wide cis-regulatory maps. c, human joints hold roughly 3 to 4 times less glycosaminoglycan than other apes.\"><g data-step=\"1\"><text x=\"0\" y=\"16\" class=\"p-l\">a</text><text x=\"18\" y=\"16\" class=\"t-b\">Reporter assays in chondrocytes flag human-specific activity</text><rect x=\"18\" y=\"30\" width=\"17.3\" height=\"20\" class=\"f-a\"/><rect x=\"37.3\" y=\"30\" width=\"624.7\" height=\"20\" class=\"f-m\"/><text x=\"18\" y=\"68\" class=\"t-s\"><tspan class=\"t-b t-a\">15,077 loci</tspan>  human-specific activity</text><text x=\"662\" y=\"68\" text-anchor=\"end\" class=\"t-s\"><tspan class=\"t-b\">561,410</tspan>  substitutions tested</text><text x=\"662\" y=\"86\" text-anchor=\"end\" class=\"t-s t-m\">human-derived, in promoters and enhancers</text></g><g data-step=\"2\"><text x=\"0\" y=\"118\" class=\"p-l\">b</text><text x=\"18\" y=\"118\" class=\"t-b\">Human–ape hybrid cells map changes in cis-regulation (schematic)</text><line x1=\"18\" y1=\"150\" x2=\"548\" y2=\"150\" class=\"ln-m\"/><circle cx=\"34\" cy=\"150\" r=\"9\" class=\"ln\"/><circle cx=\"48\" cy=\"150\" r=\"9\" class=\"ln\"/><circle cx=\"212\" cy=\"150\" r=\"8\" class=\"f-m\"/><circle cx=\"212\" cy=\"150\" r=\"8\" class=\"ln\"/><path d=\"M384,156 V144 M392,156 V138 M400,156 V147\" class=\"ln\"/><line x1=\"548\" y1=\"147\" x2=\"662\" y2=\"147\" class=\"ln\"/><line x1=\"548\" y1=\"153\" x2=\"662\" y2=\"153\" class=\"ln\"/><path d=\"M572,142 V158 M606,142 V158 M640,142 V158\" class=\"ln-a\"/><text x=\"18\" y=\"176\" class=\"t-s\">human × ape hybrid cells</text><text x=\"200\" y=\"176\" class=\"t-s\">osteochondral progenitors</text><text x=\"378\" y=\"176\" class=\"t-s\">+ reporter-assay data</text><text x=\"548\" y=\"176\" class=\"t-s t-b\">genome-wide maps</text></g><g data-step=\"3\"><text x=\"0\" y=\"210\" class=\"p-l\">c</text><text x=\"18\" y=\"210\" class=\"t-b\">Glycosaminoglycan in joints, humans vs other apes</text><line x1=\"110\" y1=\"220\" x2=\"110\" y2=\"268\" class=\"ln\"/><rect x=\"110\" y=\"224\" width=\"480\" height=\"16\" class=\"f-m\"/><text x=\"18\" y=\"236\" class=\"t-s\">Other apes</text><rect x=\"110\" y=\"250\" width=\"120\" height=\"16\" class=\"f-a\"/><line x1=\"230\" y1=\"258\" x2=\"270\" y2=\"258\" class=\"ln-a\"/><line x1=\"270\" y1=\"253\" x2=\"270\" y2=\"263\" class=\"ln-a\"/><text x=\"18\" y=\"262\" class=\"t-s\">Humans</text><text x=\"280\" y=\"262\" class=\"t-s t-a t-b\">roughly 3–4× less</text><text x=\"18\" y=\"290\" class=\"t-s t-m\">The shift bears signatures of natural selection and may help explain degenerative joint disease</text></g></svg>"
     }
    },
    {
     "kind": "feature",
     "headline": "CRISPR's ancestor read DNA in a gapped code",
     "dek": "Newly described VIPR systems, descended from a precursor of the first CRISPR effectors, pick out DNA targets with interspersed guide letters, and seem to have evolved for phage-on-phage warfare.",
     "body": [
      "CRISPR-Cas guide RNAs work by straightforward base-pairing along a continuous stretch of target. A study in Science describes what may be the evolutionary starting point: Viral Interference Programmable Repeat (VIPR) systems, built around a Vipr protein that is ancestral to the earliest CRISPR-Cas effectors. Their RNAs are made of alternating GGY and NN motifs, and only the variable NN dinucleotides specify the target, together encoding a gapped sequence on double-stranded DNA.",
      "The natural targets of these RNAs suggest VIPR systems are weapons that phages deploy against competing phages. The researchers also reprogrammed the complex to repress transcription, showing it can be steered to defend against phage. An accompanying commentary frames the finding as evidence that RNA-guided immunity may have originated in ancient viral conflict."
     ],
     "whyItMatters": "It suggests a new origin story for CRISPR immunity and shows a previously unknown way of encoding target information, which could expand the toolkit for programmable DNA recognition.",
     "caveats": "The evolutionary account rests on phylogenetic inference, and the programmable repression was demonstrated in a phage-defence setting, not in eukaryotic cells.",
     "tags": [
      "CRISPR",
      "evolution",
      "phage",
      "RNA-guided proteins"
     ],
     "source": {
      "title": "A noncontiguous code for RNA-guided DNA recognition at the origin of CRISPR-Cas.",
      "authors": "Yoon et al.",
      "venue": "Science",
      "date": "2026-09-17",
      "doi": "10.1126/science.aei0498",
      "pmid": "42752133",
      "url": "https://doi.org/10.1126/science.aei0498",
      "peerReviewed": true
     },
     "figure": {
      "title": "How VIPR RNAs read DNA in a gapped code",
      "caption": "a, A CRISPR-Cas guide RNA base-pairs along a continuous stretch of target. b, A VIPR RNA alternates GGY and NN motifs; only the variable NN dinucleotides specify the target, together encoding a gapped sequence on double-stranded DNA. c, The Vipr protein is ancestral to the earliest CRISPR-Cas effectors. All panels schematic. Data: Yoon et al., Science, 2026.",
      "steps": [
       "A CRISPR-Cas guide RNA works by straightforward base-pairing along one continuous stretch of its target.",
       "A VIPR RNA alternates GGY and NN motifs; only the variable NN dinucleotides specify the target, encoding a gapped sequence on double-stranded DNA.",
       "Vipr is ancestral to the earliest CRISPR-Cas effectors; VIPR systems look like phage-versus-phage weapons and can be reprogrammed to repress transcription."
      ],
      "svg": "<svg viewBox=\"0 0 680 290\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"a, a CRISPR guide pairs continuously with DNA. b, a VIPR RNA alternates GGY and NN motifs and only NN letters specify a gapped DNA target. c, Vipr is ancestral to the earliest CRISPR-Cas effectors; used by phages against phages, reprogrammable to repress transcription.\"><g data-step=\"1\"><text x=\"0\" y=\"16\" class=\"p-l\">a</text><text x=\"18\" y=\"16\" class=\"t-b\">CRISPR-Cas guide: one continuous stretch of base-pairing</text><line x1=\"150\" y1=\"38\" x2=\"470\" y2=\"38\" class=\"ln\"/><path d=\"M154,40 V52 M162,40 V52 M170,40 V52 M178,40 V52 M186,40 V52 M194,40 V52 M202,40 V52 M210,40 V52 M218,40 V52 M226,40 V52 M234,40 V52 M242,40 V52 M250,40 V52 M258,40 V52 M266,40 V52 M274,40 V52 M282,40 V52 M290,40 V52 M298,40 V52 M306,40 V52 M314,40 V52 M322,40 V52 M330,40 V52 M338,40 V52 M346,40 V52 M354,40 V52 M362,40 V52 M370,40 V52 M378,40 V52 M386,40 V52 M394,40 V52 M402,40 V52 M410,40 V52 M418,40 V52 M426,40 V52 M434,40 V52 M442,40 V52 M450,40 V52 M458,40 V52 M466,40 V52\" class=\"ln-m\"/><line x1=\"150\" y1=\"52\" x2=\"470\" y2=\"52\" class=\"ln\"/><line x1=\"150\" y1=\"58\" x2=\"470\" y2=\"58\" class=\"ln\"/><text x=\"18\" y=\"42\" class=\"t-s\">guide RNA</text><text x=\"18\" y=\"60\" class=\"t-s\">target DNA</text><text x=\"484\" y=\"42\" class=\"t-s\">every letter pairs</text><text x=\"484\" y=\"60\" class=\"t-s t-m\">continuous target</text></g><g data-step=\"2\"><text x=\"0\" y=\"100\" class=\"p-l\">b</text><text x=\"18\" y=\"100\" class=\"t-b\">VIPR RNA: only the NN letters specify the target (schematic)</text><text x=\"165.0\" y=\"120\" text-anchor=\"middle\" class=\"t-s t-m\">GGY</text><text x=\"197.0\" y=\"120\" text-anchor=\"middle\" class=\"t-s t-a t-b\">NN</text><path d=\"M150,126 h30 v10 h-30 Z M214,126 h30 v10 h-30 Z M278,126 h30 v10 h-30 Z M342,126 h30 v10 h-30 Z M406,126 h30 v10 h-30 Z\" class=\"f-m\"/><path d=\"M182,126 h30 v10 h-30 Z M246,126 h30 v10 h-30 Z M310,126 h30 v10 h-30 Z M374,126 h30 v10 h-30 Z M438,126 h30 v10 h-30 Z\" class=\"f-a\"/><path d=\"M192,136 V150 M204,136 V150 M256,136 V150 M268,136 V150 M320,136 V150 M332,136 V150 M384,136 V150 M396,136 V150 M448,136 V150 M460,136 V150\" class=\"ln-a\"/><line x1=\"150\" y1=\"150\" x2=\"470\" y2=\"150\" class=\"ln\"/><line x1=\"150\" y1=\"156\" x2=\"470\" y2=\"156\" class=\"ln\"/><text x=\"18\" y=\"135\" class=\"t-s\">VIPR RNA</text><text x=\"18\" y=\"158\" class=\"t-s\">double-stranded DNA</text><text x=\"484\" y=\"135\" class=\"t-s t-a\">NN letters read the target</text><text x=\"484\" y=\"158\" class=\"t-s t-m\">a gapped sequence</text></g><g data-step=\"3\"><text x=\"0\" y=\"192\" class=\"p-l\">c</text><text x=\"18\" y=\"192\" class=\"t-b\">Vipr predates CRISPR-Cas and arms phages against phages</text><path d=\"M18.0,220 L30,212.0 L42.0,220 L30,228.0 Z\" class=\"f-a\"/><text x=\"50\" y=\"224\" class=\"t-s t-b t-a\">Vipr protein</text><line x1=\"140\" y1=\"220\" x2=\"244\" y2=\"220\" class=\"ln\"/><text x=\"192\" y=\"212\" text-anchor=\"middle\" class=\"t-s t-m\">ancestral to</text><path d=\"M244.0,220 L256,212.0 L268.0,220 L256,228.0 Z\" class=\"f-ink\"/><text x=\"276\" y=\"224\" class=\"t-s\">earliest CRISPR-Cas effectors</text><text x=\"18\" y=\"252\" class=\"t-s\"><tspan class=\"t-b\">Natural role</tspan>  phages deploy VIPR against competing phages</text><text x=\"18\" y=\"274\" class=\"t-s\"><tspan class=\"t-b\">Reprogrammed</tspan>  represses transcription, defending against phage</text></g></svg>"
     }
    },
    {
     "kind": "feature",
     "headline": "A 5.6-million-nucleus map of how DNA variants act in the brain",
     "dek": "A multi-ancestry, single-nucleus eQTL atlas of the prefrontal cortex exposes cell-type-specific disease genes that bulk tissue studies miss.",
     "body": [
      "Most risk variants for common disease sit outside genes and adjust expression, often in just one cell type. To resolve which, a Mount Sinai-led team profiled 5.6 million nuclei from the prefrontal cortex of 1,384 donors of diverse ancestry, reporting in Nature Genetics. Across eight major cell classes and 27 subclasses they found genetic regulation for 14,258 genes, with 981 showing cell-type-specific effects at the class level and 857 at the subclass level.",
      "Colocalizing these signals with disease associations turned up new cell-type-specific candidate genes for Alzheimer's disease, schizophrenia and other disorders that were invisible in bulk tissue. Because donors spanned a broad age range, the team also found 2,073 genes whose regulation shifts along developmental trajectories, and 1,655 with trans effects. Companion papers in Nature from the same group add a disease atlas, a lifespan atlas and a cell-type-resolved transcriptome-wide association study."
     ],
     "whyItMatters": "Knowing which brain cell type a risk variant acts in narrows the search for causal genes and drug targets in neuropsychiatric and neurodegenerative disease.",
     "caveats": "The tissue is postmortem and limited to one cortical region; developmental dynamics are inferred from donors of different ages, not tracked in individuals.",
     "tags": [
      "eQTL",
      "single-cell",
      "brain",
      "psychiatric genetics"
     ],
     "source": {
      "title": "Single-nucleus atlas of cell-type specific genetic regulation in the human brain.",
      "authors": "Zeng et al.",
      "venue": "Nature Genetics",
      "date": "2026-09-23",
      "doi": "10.1038/s41588-026-02733-5",
      "pmid": "42778721",
      "url": "https://doi.org/10.1038/s41588-026-02733-5",
      "peerReviewed": true
     },
     "figure": {
      "title": "How a brain atlas maps variants to cell types",
      "caption": "a, 5.6 million nuclei from the prefrontal cortex of 1,384 donors, grouped into 8 major cell classes and 27 subclasses. b, Genes with genetic regulation (bars to scale): 14,258 in total, 2,073 shifting along developmental trajectories, 1,655 with trans effects, 981 cell-type-specific at class level and 857 at subclass level. c, Colocalization with disease signals revealed cell-type-specific candidates missed in bulk tissue; schematic. Data: Zeng et al., Nature Genetics, 2026.",
      "steps": [
       "5.6 million nuclei were profiled from the prefrontal cortex of 1,384 donors of diverse ancestry, across 8 major cell classes and 27 subclasses.",
       "Genetic regulation was found for 14,258 genes; 981 were cell-type-specific at class level, 857 at subclass level, 2,073 shifted with development, 1,655 in trans.",
       "Matching signals to disease associations revealed new cell-type-specific candidate genes for Alzheimer's, schizophrenia and other disorders, invisible in bulk tissue."
      ],
      "svg": "<svg viewBox=\"0 0 680 332\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"a, 5.6 million nuclei from 1,384 donors, 8 cell classes and 27 subclasses. b, bar chart: 14,258 regulated genes, 2,073 developmental, 1,655 trans, 981 class-specific, 857 subclass-specific. c, schematic: cell-type-resolved disease candidates missed in bulk tissue.\"><g data-step=\"1\"><text x=\"0\" y=\"16\" class=\"p-l\">a</text><text x=\"18\" y=\"16\" class=\"t-b\">5.6 million nuclei from 1,384 donors of diverse ancestry</text><path d=\"M18,35 h12 v12 h-12 Z M34,35 h12 v12 h-12 Z M50,35 h12 v12 h-12 Z M66,35 h12 v12 h-12 Z M82,35 h12 v12 h-12 Z M98,35 h12 v12 h-12 Z M114,35 h12 v12 h-12 Z M130,35 h12 v12 h-12 Z\" class=\"f-ink\"/><text x=\"250\" y=\"46\" class=\"t-s\"><tspan class=\"t-b\">8</tspan>  major cell classes</text><path d=\"M18,57 h4 v12 h-4 Z M26,57 h4 v12 h-4 Z M34,57 h4 v12 h-4 Z M42,57 h4 v12 h-4 Z M50,57 h4 v12 h-4 Z M58,57 h4 v12 h-4 Z M66,57 h4 v12 h-4 Z M74,57 h4 v12 h-4 Z M82,57 h4 v12 h-4 Z M90,57 h4 v12 h-4 Z M98,57 h4 v12 h-4 Z M106,57 h4 v12 h-4 Z M114,57 h4 v12 h-4 Z M122,57 h4 v12 h-4 Z M130,57 h4 v12 h-4 Z M138,57 h4 v12 h-4 Z M146,57 h4 v12 h-4 Z M154,57 h4 v12 h-4 Z M162,57 h4 v12 h-4 Z M170,57 h4 v12 h-4 Z M178,57 h4 v12 h-4 Z M186,57 h4 v12 h-4 Z M194,57 h4 v12 h-4 Z M202,57 h4 v12 h-4 Z M210,57 h4 v12 h-4 Z M218,57 h4 v12 h-4 Z M226,57 h4 v12 h-4 Z\" class=\"f-m\"/><text x=\"250\" y=\"68\" class=\"t-s\"><tspan class=\"t-b\">27</tspan>  subclasses</text><text x=\"662\" y=\"46\" text-anchor=\"end\" class=\"t-s t-m\">postmortem prefrontal cortex</text></g><g data-step=\"2\"><text x=\"0\" y=\"100\" class=\"p-l\">b</text><text x=\"18\" y=\"100\" class=\"t-b\">Number of genes, by type of genetic effect</text><line x1=\"210\" y1=\"110\" x2=\"210\" y2=\"222\" class=\"ln\"/><text x=\"18\" y=\"126\" class=\"t-s\">Genes with genetic regulation</text><rect x=\"210\" y=\"116\" width=\"400.0\" height=\"12\" class=\"f-ink\"/><text x=\"618.0\" y=\"126\" class=\"t-s t-b\">14,258</text><text x=\"18\" y=\"148\" class=\"t-s\">Shift along development</text><rect x=\"210\" y=\"138\" width=\"58.2\" height=\"12\" class=\"f-ink\"/><text x=\"276.2\" y=\"148\" class=\"t-s t-b\">2,073</text><text x=\"18\" y=\"170\" class=\"t-s\">Trans effects</text><rect x=\"210\" y=\"160\" width=\"46.4\" height=\"12\" class=\"f-ink\"/><text x=\"264.4\" y=\"170\" class=\"t-s t-b\">1,655</text><text x=\"18\" y=\"192\" class=\"t-s\">Cell-type-specific, class</text><rect x=\"210\" y=\"182\" width=\"27.5\" height=\"12\" class=\"f-a\"/><text x=\"245.5\" y=\"192\" class=\"t-s t-b t-a\">981</text><text x=\"18\" y=\"214\" class=\"t-s\">Cell-type-specific, subclass</text><rect x=\"210\" y=\"204\" width=\"24.0\" height=\"12\" class=\"f-a\"/><text x=\"242.0\" y=\"214\" class=\"t-s t-b t-a\">857</text></g><g data-step=\"3\"><text x=\"0\" y=\"254\" class=\"p-l\">c</text><text x=\"18\" y=\"254\" class=\"t-b\">Disease genes resolved by cell type, missed in bulk (schematic)</text><text x=\"18\" y=\"278\" class=\"t-s\">Bulk tissue</text><rect x=\"210\" y=\"269\" width=\"124\" height=\"10\" class=\"f-m\"/><text x=\"352\" y=\"278\" class=\"t-s t-m\">candidates invisible</text><text x=\"18\" y=\"300\" class=\"t-s\">Single nucleus, by cell type</text><path d=\"M210,291 h12 v10 h-12 Z M226,291 h12 v10 h-12 Z M242,291 h12 v10 h-12 Z M258,291 h12 v10 h-12 Z M274,291 h12 v10 h-12 Z M306,291 h12 v10 h-12 Z M322,291 h12 v10 h-12 Z\" class=\"f-m\"/><rect x=\"290\" y=\"291\" width=\"12\" height=\"10\" class=\"f-a\"/><text x=\"352\" y=\"300\" class=\"t-s t-a t-b\">new cell-type-specific candidates</text><text x=\"352\" y=\"320\" class=\"t-s t-m\">Alzheimer's, schizophrenia and other disorders</text></g></svg>"
     }
    },
    {
     "kind": "brief",
     "headline": "Cancer's circular DNA has an Achilles' heel at TA repeats",
     "dek": "Blocking microhomology-mediated end joining selectively strips tumours of oncogene-laden extrachromosomal DNA.",
     "body": [
      "Extrachromosomal DNA circles often carry amplified oncogenes. A Nature study finds that TA-rich sites on these circles are break hotspots, and that the damage is repaired by microhomology-mediated end joining. Inhibiting that pathway, but not the other two main break-repair routes, depleted ecDNA and weakened dependent cancer cells, which points to polymerase theta inhibitors as a possible therapy."
     ],
     "tags": [
      "ecDNA",
      "DNA repair",
      "cancer"
     ],
     "source": {
      "title": "MMEJ repair of breaks at TA repeats maintains ecDNA and cancer fitness.",
      "authors": "Billing et al.",
      "venue": "Nature",
      "date": "2026-09-23",
      "doi": "10.1038/s41586-026-11048-8",
      "pmid": "42778593",
      "url": "https://doi.org/10.1038/s41586-026-11048-8",
      "peerReviewed": true
     }
    },
    {
     "kind": "brief",
     "headline": "Jumping genes that hop between cells",
     "dek": "Fly retrotransposons without an envelope protein reach the germline through cellular protrusions.",
     "body": [
      "Retrotransposons are usually thought to stay inside the cell that expresses them. In the Drosophila ovary, a Cell study finds LTR elements that pass from somatic cells into the oocyte using a small transmembrane protein, sORF2, which resembles viral fusogens and sits on invasive protrusions carrying capsids. Similar proteins turn up across insect retrotransposons and in some non-enveloped viruses."
     ],
     "tags": [
      "transposons",
      "germline",
      "Drosophila"
     ],
     "source": {
      "title": "Direct cell-to-cell transmission of retrotransposons.",
      "authors": "Voichek et al.",
      "venue": "Cell",
      "date": "2026-09-23",
      "doi": "10.1016/j.cell.2026.08.047",
      "pmid": "42777706",
      "url": "https://doi.org/10.1016/j.cell.2026.08.047",
      "peerReviewed": true
     }
    },
    {
     "kind": "brief",
     "headline": "Bat genomes place the origin of flight in Europe",
     "dek": "Genome assemblies from 103 species, combined with fossils, redraw the bat family tree.",
     "body": [
      "Using chromosome-level genomes from 103 bat species spanning all 21 families, together with morphological data covering 44 fossils, a Nature study rebuilds bat phylogeny and reconstructs 26 ancestral chromosomes. The analysis places the origin of bats, and so of powered flight, in late-Palaeocene Europe, and suggests laryngeal echolocation arose before the crown group diversified."
     ],
     "tags": [
      "evolutionary genomics",
      "phylogenetics",
      "bats"
     ],
     "source": {
      "title": "Reference genomes and fossils revise bat family phylogeny and biogeography.",
      "authors": "Morales et al.",
      "venue": "Nature",
      "date": "2026-09-23",
      "doi": "10.1038/s41586-026-11007-3",
      "pmid": "42778608",
      "url": "https://doi.org/10.1038/s41586-026-11007-3",
      "peerReviewed": true
     }
    },
    {
     "kind": "brief",
     "headline": "An ancient lupus haplotype trades autoimmunity for viral defence",
     "dek": "A common IRF7 variant boosts interferon-alpha, helping fight viruses while raising autoantibodies.",
     "body": [
      "Fine-mapping of a lupus risk locus points to a common coding haplotype in IRF7 that ancient DNA shows has stayed frequent for millennia. In AJHG, researchers show it strengthens IRF7's DNA binding and raises interferon-alpha output. Mice engineered to carry the variant controlled viral infection better but also made more autoantibodies."
     ],
     "tags": [
      "autoimmunity",
      "interferon",
      "balancing selection"
     ],
     "source": {
      "title": "A highly prevalent lupus risk haplotype increases IRF7-dependent induction of IFN-α, enhancing antiviral defense and exacerbating autoimmunity.",
      "authors": "Virolainen et al.",
      "venue": "American Journal of Human Genetics",
      "date": "2026-09-11",
      "doi": "10.1016/j.ajhg.2026.08.016",
      "pmid": "42727579",
      "url": "https://doi.org/10.1016/j.ajhg.2026.08.016",
      "peerReviewed": true
     }
    },
    {
     "kind": "brief",
     "headline": "For polygenic scores, more data is not always better",
     "dek": "All of Us genomes improve prediction in under-represented groups, but pooling biobanks can backfire.",
     "body": [
      "Using 245,388 All of Us whole genomes plus UK Biobank data, a Nature Genetics study built multiancestry risk scores for 32 traits. Diversity improved accuracy, especially in under-represented groups. For less polygenic traits, though, All of Us-only training beat meta-analysis in African-ancestry participants, and accuracy fell as ancestry diverged from the discovery cohort."
     ],
     "tags": [
      "polygenic risk",
      "biobanks",
      "ancestry"
     ],
     "source": {
      "title": "All of Us diversity and scale yield context-dependent improvements in polygenic prediction.",
      "authors": "Tsuo et al.",
      "venue": "Nature Genetics",
      "date": "2026-09-14",
      "doi": "10.1038/s41588-026-02734-4",
      "pmid": "42736379",
      "url": "https://doi.org/10.1038/s41588-026-02734-4",
      "peerReviewed": true
     }
    }
   ]
  },
  "proteomics": {
   "stories": [
    {
     "kind": "lead",
     "headline": "Menopause leaves a protein fingerprint in blood tied to later dementia",
     "dek": "Blood proteomics across roughly 15,000 women links the menopausal transition to inflammatory and synaptic shifts that track with brain aging and cognitive decline decades on.",
     "body": [
      "Clinicians have long suspected that menopause shapes a woman's later risk of neurodegenerative disease, but the biology connecting the two has been hard to pin down. A multi-cohort study in Nature Medicine now offers a molecular bridge, using blood protein profiles to chart what changes as women pass through menopause and whether those changes echo in the ageing brain.",
      "The team, led from Sunnybrook Research Institute in Toronto, began with 80 women aged 43 to 58 whose reproductive stage had been carefully classified using the STRAW+10 staging system. Serum profiling with the NULISAseq platform showed that spontaneous menopause coincided with disturbances in proteins tied to inflammation, synaptic function, metabolism and Alzheimer's disease pathways. Notably, these shifts followed hormone levels more closely than chronological age, hinting that the transition itself, not simply getting older, drives the signal.",
      "The researchers then checked their findings in 2,814 age-matched women with plasma Olink data. The same proteomic shifts reappeared, alongside a broader rise in inflammatory and catabolic processes and signs of faster ageing across organs and cell types, including the brain. Finally, they built a menopause proteomic score and applied it to four independent cohorts of older women, totalling 11,925 people with mean ages between about 61 and 72. Across all four, higher scores went hand in hand with greater cognitive ageing and higher dementia risk.",
      "The authors suggest the signature could help identify biomarkers, or even drug targets, for protecting brain health in midlife women, a group that is often underrepresented in dementia research."
     ],
     "whyItMatters": "It gives a measurable, blood-based handle on a long-suspected link between menopause and dementia, opening a window for studying and eventually intervening in midlife, well before symptoms appear.",
     "caveats": "The discovery cohort was small (80 women) and the associations in older cohorts are observational, so they do not show that menopausal protein changes cause cognitive decline; the two affinity-based proteomics platforms also measure different protein panels.",
     "tags": [
      "plasma proteomics",
      "menopause",
      "dementia",
      "biomarkers"
     ],
     "source": {
      "title": "Blood proteomics of menopause map to brain aging and dementia risk.",
      "authors": "Wood Alexander et al.",
      "venue": "Nature Medicine",
      "date": "2026-09-22",
      "doi": "10.1038/s41591-026-04648-4",
      "pmid": "42773212",
      "url": "https://doi.org/10.1038/s41591-026-04648-4",
      "peerReviewed": true
     },
     "figure": {
      "title": "A menopause protein score and dementia risk",
      "caption": "a, Number of women profiled at each stage (bar lengths to scale). b, Protein pathways disturbed at spontaneous menopause; the shifts followed hormone levels more closely than age and reappeared in the replication cohort. c, Schematic of the association in four older cohorts; observational, and the discovery cohort was small. Data: Wood Alexander et al., Nature Medicine, 2026.",
      "steps": [
       "Proteins were profiled in 80 women aged 43–58 (serum), 2,814 age-matched women (plasma) and 11,925 older women in four cohorts.",
       "Menopause shifted proteins tied to inflammation, synaptic function, metabolism and Alzheimer's pathways, tracking hormones more than age.",
       "In all four older cohorts, a higher menopause proteomic score went with greater cognitive ageing and dementia risk, an association, not proof of cause."
      ],
      "svg": "<svg viewBox=\"0 0 680 326\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"a, bar chart of women studied: 80 in discovery, 2,814 in replication, 11,925 in four older cohorts. b, menopause shifted proteins in inflammation, synaptic function, metabolism and Alzheimer's pathways. c, schematic: higher menopause proteomic score went with greater cognitive ageing and dementia risk.\"><g data-step=\"1\"><text x=\"0\" y=\"16\" class=\"p-l\">a</text><text x=\"18\" y=\"16\" class=\"t-b\">Women profiled at each stage of the study</text><text x=\"18\" y=\"40\" class=\"t-s\"><tspan class=\"t-b\">Discovery</tspan><tspan class=\"t-m\">  serum, NULISAseq, aged 43–58</tspan></text><rect x=\"300\" y=\"31\" width=\"2\" height=\"10\" class=\"f-ink\"/><text x=\"308\" y=\"40\" class=\"t-s t-b\">80</text><text x=\"18\" y=\"60\" class=\"t-s\"><tspan class=\"t-b\">Replication</tspan><tspan class=\"t-m\">  plasma, Olink, age-matched</tspan></text><rect x=\"300\" y=\"51\" width=\"70.4\" height=\"10\" class=\"f-ink\"/><text x=\"376.4\" y=\"60\" class=\"t-s t-b\">2,814</text><text x=\"18\" y=\"80\" class=\"t-s\"><tspan class=\"t-b\">Four older cohorts</tspan><tspan class=\"t-m\">  mean ages ≈61–72</tspan></text><rect x=\"300\" y=\"71\" width=\"298.1\" height=\"10\" class=\"f-ink\"/><text x=\"604.1\" y=\"80\" class=\"t-s t-b\">11,925</text><line x1=\"300\" y1=\"90\" x2=\"600\" y2=\"90\" class=\"ln\"/><line x1=\"300\" y1=\"90\" x2=\"300\" y2=\"95\" class=\"ln\"/><text x=\"300\" y=\"108\" text-anchor=\"middle\" class=\"t-s\">0</text><line x1=\"400\" y1=\"90\" x2=\"400\" y2=\"95\" class=\"ln\"/><text x=\"400\" y=\"108\" text-anchor=\"middle\" class=\"t-s\">4,000</text><line x1=\"500\" y1=\"90\" x2=\"500\" y2=\"95\" class=\"ln\"/><text x=\"500\" y=\"108\" text-anchor=\"middle\" class=\"t-s\">8,000</text><line x1=\"600\" y1=\"90\" x2=\"600\" y2=\"95\" class=\"ln\"/><text x=\"600\" y=\"108\" text-anchor=\"middle\" class=\"t-s\">12,000</text><text x=\"288\" y=\"108\" text-anchor=\"end\" class=\"t-s t-m\">women</text></g><g data-step=\"2\"><text x=\"0\" y=\"140\" class=\"p-l\">b</text><text x=\"18\" y=\"140\" class=\"t-b\">Menopause shifted blood proteins in four pathways</text><line x1=\"18\" y1=\"164\" x2=\"662\" y2=\"164\" class=\"ln-m\"/><path d=\"M80,158 L86,164 L80,170 L74,164 z\" class=\"f-ink\"/><text x=\"80\" y=\"186\" text-anchor=\"middle\" class=\"t-s\">inflammation</text><path d=\"M240,158 L246,164 L240,170 L234,164 z\" class=\"f-ink\"/><text x=\"240\" y=\"186\" text-anchor=\"middle\" class=\"t-s\">synaptic function</text><path d=\"M400,158 L406,164 L400,170 L394,164 z\" class=\"f-ink\"/><text x=\"400\" y=\"186\" text-anchor=\"middle\" class=\"t-s\">metabolism</text><path d=\"M560,158 L566,164 L560,170 L554,164 z\" class=\"f-ink\"/><text x=\"560\" y=\"186\" text-anchor=\"middle\" class=\"t-s\">Alzheimer's pathways</text><text x=\"18\" y=\"206\" class=\"t-s\">Tracked hormone levels more than age; <tspan class=\"t-m\">replicated, with signs of faster organ and brain ageing</tspan></text></g><g data-step=\"3\"><text x=\"0\" y=\"238\" class=\"p-l\">c</text><text x=\"18\" y=\"238\" class=\"t-b\">Higher score, greater cognitive ageing and dementia risk (schematic)</text><line x1=\"60\" y1=\"252\" x2=\"60\" y2=\"300\" class=\"ln\"/><line x1=\"60\" y1=\"300\" x2=\"300\" y2=\"300\" class=\"ln\"/><line x1=\"72\" y1=\"294\" x2=\"292\" y2=\"268\" class=\"ln-a\"/><text x=\"68\" y=\"258\" class=\"t-s t-m\">dementia risk, cognitive ageing</text><text x=\"60\" y=\"316\" class=\"t-s t-m\">menopause proteomic score →</text><text x=\"340\" y=\"272\" class=\"t-s\"><tspan class=\"t-b\">Seen in all four cohorts</tspan> of older women</text><text x=\"340\" y=\"292\" class=\"t-s t-m\">Observational: an association, not proof of cause</text></g></svg>"
     }
    },
    {
     "kind": "feature",
     "headline": "Human cells carry thousands of protein variants their genes never specified",
     "dek": "A proteogenomic survey of 29 healthy tissues finds single amino-acid substitutions, many arising from mistranslation, coexisting with reference proteins.",
     "body": [
      "The genome is usually treated as the blueprint for the proteome, but errors and variation at every step from DNA to protein mean a cell's actual protein population is more varied. Researchers at the Weizmann Institute of Science mined a large proteogenomic dataset spanning 29 healthy human tissues and confidently located 13,910 variant peptides, representing 7,215 distinct single amino-acid substitutions, sitting alongside the standard forms of the same proteins.",
      "Both inherited and somatic variants, as well as substitutions produced by mistranslation, appeared at abundances that mirrored their frequencies in the human population. The team argues that non-genetic substitutions let proteins sample sequence changes that the genetic code would otherwise make hard to reach. They confirmed several substitutions in purified proteins, saw recurring patterns in cancer cell lines starved of amino acids, and identified hundreds of non-genetic variants that recurred across healthy individuals or fell at annotated functional sites."
     ],
     "whyItMatters": "If these variants are functional, the human proteome is considerably larger than gene annotations imply, with implications for how proteomics data are searched and interpreted.",
     "caveats": "The functional importance of most substitutions is proposed rather than demonstrated, and experimental validation covered only selected proteins.",
     "tags": [
      "proteogenomics",
      "mistranslation",
      "proteoforms"
     ],
     "source": {
      "title": "Encoded and non-genetic protein variants expand human functional proteome.",
      "authors": "Tretyachenko et al.",
      "venue": "Nature",
      "date": "2026-09-14",
      "doi": "10.1038/s41586-026-11124-z",
      "pmid": "42742175",
      "url": "https://doi.org/10.1038/s41586-026-11124-z",
      "peerReviewed": true
     },
     "figure": {
      "title": "Protein variants the genes never specified",
      "caption": "a, Sources of single amino-acid substitutions (schematic). b, Variant peptides and distinct substitutions identified in proteogenomic data from 29 healthy tissues (bar lengths to scale). c, Reference and variant forms of a protein coexist (schematic); functional importance is mostly proposed rather than shown. Data: Tretyachenko et al., Nature, 2026.",
      "steps": [
       "A single amino acid can change through inherited or somatic DNA variants, or without any genetic change, through mistranslation.",
       "Proteogenomic data from 29 healthy tissues yielded 13,910 variant peptides representing 7,215 distinct single amino-acid substitutions.",
       "Variants sat alongside reference proteins at abundances mirroring population frequencies; hundreds of non-genetic ones recurred across people or at functional sites."
      ],
      "svg": "<svg viewBox=\"0 0 680 304\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"a, amino-acid substitutions arise from inherited or somatic DNA changes or from mistranslation. b, bar chart: 13,910 variant peptides and 7,215 distinct substitutions across 29 healthy tissues. c, variants coexist with reference proteins; hundreds of non-genetic variants recur.\"><defs><marker id=\"ah\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" class=\"f-ink\"/></marker></defs><g data-step=\"1\"><text x=\"0\" y=\"16\" class=\"p-l\">a</text><text x=\"18\" y=\"16\" class=\"t-b\">Single amino-acid substitutions arise at two levels</text><line x1=\"18\" y1=\"44\" x2=\"150\" y2=\"44\" class=\"ln\"/><line x1=\"18\" y1=\"50\" x2=\"150\" y2=\"50\" class=\"ln\"/><line x1=\"162\" y1=\"47\" x2=\"216\" y2=\"47\" class=\"ln\" marker-end=\"url(#ah)\"/><line x1=\"230\" y1=\"47\" x2=\"360\" y2=\"47\" class=\"ln\"/><line x1=\"372\" y1=\"47\" x2=\"428\" y2=\"47\" class=\"ln\" marker-end=\"url(#ah)\"/><line x1=\"444\" y1=\"47\" x2=\"634\" y2=\"47\" class=\"ln-m\"/><circle cx=\"450\" cy=\"47\" r=\"5\" class=\"f-m\"/><circle cx=\"480\" cy=\"47\" r=\"5\" class=\"f-m\"/><circle cx=\"510\" cy=\"47\" r=\"5\" class=\"f-m\"/><circle cx=\"540\" cy=\"47\" r=\"5\" class=\"f-a\"/><circle cx=\"570\" cy=\"47\" r=\"5\" class=\"f-m\"/><circle cx=\"600\" cy=\"47\" r=\"5\" class=\"f-m\"/><circle cx=\"630\" cy=\"47\" r=\"5\" class=\"f-m\"/><text x=\"400\" y=\"35\" text-anchor=\"middle\" class=\"t-s\">non-genetic: mistranslation</text><text x=\"18\" y=\"70\" class=\"t-s t-b\">DNA</text><text x=\"18\" y=\"88\" class=\"t-s t-m\">genetic: inherited or somatic</text><text x=\"230\" y=\"70\" class=\"t-s t-b\">mRNA</text><text x=\"444\" y=\"70\" class=\"t-s t-b\">protein</text><text x=\"444\" y=\"88\" class=\"t-s t-a\">one amino acid swapped</text></g><g data-step=\"2\"><text x=\"0\" y=\"122\" class=\"p-l\">b</text><text x=\"18\" y=\"122\" class=\"t-b\">Variants found across 29 healthy human tissues</text><text x=\"18\" y=\"148\" class=\"t-s\">variant peptides</text><rect x=\"170\" y=\"139\" width=\"417.3\" height=\"10\" class=\"f-m\"/><text x=\"593.3\" y=\"148\" class=\"t-s t-b\">13,910</text><text x=\"18\" y=\"168\" class=\"t-s\">distinct substitutions</text><rect x=\"170\" y=\"159\" width=\"216.4\" height=\"10\" class=\"f-a\"/><text x=\"392.4\" y=\"168\" class=\"t-s t-b t-a\">7,215</text><line x1=\"170\" y1=\"178\" x2=\"590\" y2=\"178\" class=\"ln\"/><line x1=\"170\" y1=\"178\" x2=\"170\" y2=\"183\" class=\"ln\"/><text x=\"170\" y=\"196\" text-anchor=\"middle\" class=\"t-s\">0</text><line x1=\"380\" y1=\"178\" x2=\"380\" y2=\"183\" class=\"ln\"/><text x=\"380\" y=\"196\" text-anchor=\"middle\" class=\"t-s\">7,000</text><line x1=\"590\" y1=\"178\" x2=\"590\" y2=\"183\" class=\"ln\"/><text x=\"590\" y=\"196\" text-anchor=\"middle\" class=\"t-s\">14,000</text></g><g data-step=\"3\"><text x=\"0\" y=\"228\" class=\"p-l\">c</text><text x=\"18\" y=\"228\" class=\"t-b\">Variants sit alongside reference forms</text><line x1=\"18\" y1=\"252\" x2=\"110\" y2=\"252\" class=\"ln-m\"/><circle cx=\"24\" cy=\"252\" r=\"4.5\" class=\"f-m\"/><circle cx=\"44\" cy=\"252\" r=\"4.5\" class=\"f-m\"/><circle cx=\"64\" cy=\"252\" r=\"4.5\" class=\"f-m\"/><circle cx=\"84\" cy=\"252\" r=\"4.5\" class=\"f-m\"/><circle cx=\"104\" cy=\"252\" r=\"4.5\" class=\"f-m\"/><line x1=\"18\" y1=\"274\" x2=\"110\" y2=\"274\" class=\"ln-m\"/><circle cx=\"24\" cy=\"274\" r=\"4.5\" class=\"f-m\"/><circle cx=\"44\" cy=\"274\" r=\"4.5\" class=\"f-m\"/><circle cx=\"64\" cy=\"274\" r=\"4.5\" class=\"f-a\"/><circle cx=\"84\" cy=\"274\" r=\"4.5\" class=\"f-m\"/><circle cx=\"104\" cy=\"274\" r=\"4.5\" class=\"f-m\"/><text x=\"150\" y=\"252\" class=\"t-s\">Abundances mirrored population frequencies</text><text x=\"150\" y=\"272\" class=\"t-s\"><tspan class=\"t-b\">Hundreds</tspan> of non-genetic variants recur across people or at functional sites</text><text x=\"150\" y=\"292\" class=\"t-s t-m\">Several confirmed in purified proteins; most functions remain unproven</text></g></svg>"
     }
    },
    {
     "kind": "feature",
     "headline": "Molecular glue degrader targets drug-resistant ALK lung cancers, including brain tumours",
     "dek": "TRI-611 recruits the cereblon ligase to a novel surface on ALK fusion proteins, clearing both normal and inhibitor-resistant forms in preclinical models.",
     "body": [
      "Kinase inhibitors have transformed treatment of ALK fusion-positive non-small-cell lung cancer, but patients who progress on approved drugs have few options. Scientists at Triana Biomedicines describe TRI-611, a molecular glue that brings the ALK kinase domain into contact with CRBN, the substrate adaptor of the CRL4 ubiquitin ligase, so that the fusion protein is tagged for destruction. The contact forms at a degron interface away from the kinase's active site.",
      "That unusual interface appears to confer selectivity: across the proteome, the compound spared known CRBN neosubstrates and other kinases. TRI-611 degraded every ALK fusion form tested, including versions resistant to kinase inhibitors, and shrank tumours in cell-line and patient-derived models grown under the skin and inside the skull. Pairing it with conventional ALK inhibitors produced synergistic, lasting regressions. The authors describe it as the first clinical-stage molecular glue degrader aimed at an oncogenic gene fusion."
     ],
     "whyItMatters": "It shows that molecular glues can be designed against a specific oncogenic driver rather than discovered by chance, and offers a mechanism orthogonal to inhibitors for resistant disease, including brain metastases.",
     "caveats": "The data reported are preclinical; clinical safety and efficacy in patients remain to be shown, and the work comes from the company developing the drug.",
     "tags": [
      "targeted protein degradation",
      "molecular glue",
      "lung cancer"
     ],
     "source": {
      "title": "TRI-611, a selective, brain-penetrant molecular glue degrader of ALK.",
      "authors": "Conery et al.",
      "venue": "Nature",
      "date": "2026-09-09",
      "doi": "10.1038/s41586-026-10998-3",
      "pmid": "42717093",
      "url": "https://doi.org/10.1038/s41586-026-10998-3",
      "peerReviewed": true
     },
     "figure": {
      "title": "How the TRI-611 molecular glue works",
      "caption": "a, TRI-611 bridges the ALK kinase domain and CRBN, the substrate adaptor of the CRL4 ubiquitin ligase, at a degron interface away from the active site (schematic, not to scale). b, Ubiquitin tagging leads to destruction of the fusion protein. c, Summary of preclinical findings; clinical safety and efficacy are untested, and the work is from the developer. Data: Conery et al., Nature, 2026.",
      "steps": [
       "TRI-611 glues the ALK fusion's kinase domain to CRBN, the adaptor of the CRL4 ubiquitin ligase, at a degron interface away from the active site.",
       "The ligase tags the fusion protein with ubiquitin for destruction; every ALK fusion form tested was degraded, including inhibitor-resistant ones.",
       "In preclinical models tumours shrank under the skin and in the skull, ALK inhibitor combinations gave lasting regressions, and other kinases were spared."
      ],
      "svg": "<svg viewBox=\"0 0 680 296\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"a, TRI-611 joins the ALK kinase domain to CRBN, part of the CRL4 ubiquitin ligase, away from the active site. b, the ligase tags ALK with ubiquitin and the fusion protein is degraded, including inhibitor-resistant forms. c, preclinical results: tumours shrank, combinations gave lasting regressions, other kinases were spared.\"><defs><marker id=\"ah\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" class=\"f-ink\"/></marker></defs><g data-step=\"1\"><text x=\"0\" y=\"16\" class=\"p-l\">a</text><text x=\"18\" y=\"16\" class=\"t-b\">TRI-611 glues ALK to CRBN at a degron away from the active site</text><line x1=\"18\" y1=\"57\" x2=\"100\" y2=\"57\" class=\"ln\"/><rect x=\"100\" y=\"50\" width=\"140\" height=\"14\" class=\"f-ink\"/><line x1=\"150\" y1=\"44\" x2=\"150\" y2=\"50\" class=\"ln\"/><text x=\"150\" y=\"39\" text-anchor=\"middle\" class=\"t-s t-m\">active site</text><path d=\"M248,50 L255,57 L248,64 L241,57 z\" class=\"f-a\"/><text x=\"248\" y=\"39\" text-anchor=\"middle\" class=\"t-s t-b t-a\">TRI-611</text><rect x=\"256\" y=\"50\" width=\"90\" height=\"14\" class=\"f-m\"/><rect x=\"348\" y=\"50\" width=\"112\" height=\"14\" class=\"f-ink\"/><text x=\"18\" y=\"84\" class=\"t-s t-m\">fusion partner</text><text x=\"110\" y=\"84\" class=\"t-s\">ALK kinase domain</text><text x=\"262\" y=\"84\" class=\"t-s\">CRBN</text><text x=\"348\" y=\"84\" class=\"t-s\">CRL4 ubiquitin ligase</text></g><g data-step=\"2\"><text x=\"0\" y=\"118\" class=\"p-l\">b</text><text x=\"18\" y=\"118\" class=\"t-b\">The ligase tags ALK with ubiquitin and it is destroyed</text><rect x=\"18\" y=\"146\" width=\"102\" height=\"12\" class=\"f-ink\"/><circle cx=\"46\" cy=\"137\" r=\"4\" class=\"ln\"/><circle cx=\"58\" cy=\"137\" r=\"4\" class=\"ln\"/><circle cx=\"70\" cy=\"137\" r=\"4\" class=\"ln\"/><circle cx=\"82\" cy=\"137\" r=\"4\" class=\"ln\"/><text x=\"100\" y=\"141\" class=\"t-s t-m\">ubiquitin</text><line x1=\"166\" y1=\"152\" x2=\"214\" y2=\"152\" class=\"ln\" marker-end=\"url(#ah)\"/><rect x=\"226\" y=\"146\" width=\"20\" height=\"12\" class=\"f-m\"/><rect x=\"252\" y=\"146\" width=\"12\" height=\"12\" class=\"f-m\"/><rect x=\"270\" y=\"146\" width=\"24\" height=\"12\" class=\"f-m\"/><text x=\"18\" y=\"176\" class=\"t-s\">tagged ALK fusion</text><text x=\"226\" y=\"176\" class=\"t-s\">degraded</text><text x=\"340\" y=\"148\" class=\"t-s\">Every ALK fusion form tested was degraded,</text><text x=\"340\" y=\"166\" class=\"t-s t-a t-b\">including inhibitor-resistant forms</text></g><g data-step=\"3\"><text x=\"0\" y=\"210\" class=\"p-l\">c</text><text x=\"18\" y=\"210\" class=\"t-b\">Preclinical results; no patient data yet</text><line x1=\"18\" y1=\"222\" x2=\"662\" y2=\"222\" class=\"ln\"/><text x=\"18\" y=\"236\" class=\"t-s t-b\">Tumour models</text><text x=\"118\" y=\"236\" class=\"t-s\">cell-line and patient-derived, under skin and in skull: tumours shrank</text><text x=\"18\" y=\"258\" class=\"t-s t-b\">Combination</text><text x=\"118\" y=\"258\" class=\"t-s\">with ALK inhibitors: <tspan class=\"t-a t-b\">synergistic, lasting regressions</tspan></text><text x=\"18\" y=\"280\" class=\"t-s t-b\">Selectivity</text><text x=\"118\" y=\"280\" class=\"t-s\">spared other kinases and known CRBN neosubstrates</text><line x1=\"18\" y1=\"246.5\" x2=\"662\" y2=\"246.5\" class=\"ln-m\"/><line x1=\"18\" y1=\"268.5\" x2=\"662\" y2=\"268.5\" class=\"ln-m\"/></g></svg>"
     }
    },
    {
     "kind": "feature",
     "headline": "AlphaFold mining uncovers hidden receptor-like proteins that regulate autophagy",
     "dek": "Structural searches reveal two 'superdark' human protein families that resemble GPCRs; one, TM184C, builds bridges between cells and restrains autophagy.",
     "body": [
      "Most protein functions are inferred from sequence similarity, leaving many proteins unannotated. A University of Miami team instead searched millions of AlphaFold2 structural models and found two human seven-transmembrane families, TM184 and PRRT, whose shapes resemble G-protein-coupled receptors even though their sequences give little away. The proteins displayed classic receptor behaviours, recruiting beta-arrestin and undergoing phosphorylation by GPCR kinases.",
      "The researchers focused on TM184C, the most widely expressed and evolutionarily conserved member. Rather than sitting at the cell surface, it rides on mobile intracellular vesicles along microtubules and promotes nanotube-like connections through which cells share organelles, a process that depends on its C-terminal tail and an arrestin-binding motif. TM184C also limits autophagic flux by curbing LC3B lipidation, and the human protein can rescue autophagy defects in yeast lacking its counterpart, Hfl1."
     ],
     "whyItMatters": "It demonstrates structure-first annotation as a practical route into the 'dark proteome' and adds a new, potentially druggable GPCR-like regulator of autophagy.",
     "caveats": "Findings come largely from cell and yeast experiments; the physiological ligands, if any, and roles in tissues or disease are not yet established.",
     "tags": [
      "structure prediction",
      "dark proteome",
      "autophagy",
      "GPCR"
     ],
     "source": {
      "title": "TM184C is a GPCR-like regulator of intercellular exchange and autophagy.",
      "authors": "Lee et al.",
      "venue": "Nature",
      "date": "2026-09-09",
      "doi": "10.1038/s41586-026-10993-8",
      "pmid": "42717083",
      "url": "https://doi.org/10.1038/s41586-026-10993-8",
      "peerReviewed": true
     },
     "figure": {
      "title": "How TM184C was found and what it does",
      "caption": "a, Structure-first search of AlphaFold2 models. b, Receptor-like behaviours of TM184 and PRRT proteins. c, TM184C on intracellular vesicles and nanotube-like connections between cells. d, TM184C limits autophagic flux (bar-ended line, inhibition). All panels schematic; findings are from cell and yeast experiments. Data: Lee et al., Nature, 2026.",
      "steps": [
       "Searching millions of AlphaFold2 models by shape found two seven-transmembrane families, TM184 and PRRT, that resemble GPCRs though their sequences give little away.",
       "Like receptors, they recruit beta-arrestin and are phosphorylated by GPCR kinases.",
       "TM184C rides mobile vesicles along microtubules and promotes nanotube-like bridges through which cells share organelles, using its C-terminal tail and an arrestin-binding motif.",
       "TM184C limits autophagic flux by curbing LC3B lipidation, and the human protein rescues autophagy defects in yeast lacking its counterpart, Hfl1."
      ],
      "svg": "<svg viewBox=\"0 0 680 340\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"a, a shape search of AlphaFold2 models finds GPCR-like seven-transmembrane families TM184 and PRRT. b, they recruit beta-arrestin and are phosphorylated by GPCR kinases. c, TM184C rides vesicles and builds nanotube-like bridges between cells. d, TM184C curbs LC3B lipidation, limiting autophagic flux.\"><defs><marker id=\"ah\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" class=\"f-ink\"/></marker></defs><g data-step=\"1\"><text x=\"0\" y=\"16\" class=\"p-l\">a</text><text x=\"18\" y=\"16\" class=\"t-b\">A shape search of AlphaFold2 models, not a sequence search</text><text x=\"18\" y=\"52\" class=\"t-s\">millions of AlphaFold2 models</text><line x1=\"206\" y1=\"48\" x2=\"246\" y2=\"48\" class=\"ln\" marker-end=\"url(#ah)\"/><line x1=\"256\" y1=\"34\" x2=\"348\" y2=\"34\" class=\"ln-m\"/><line x1=\"256\" y1=\"62\" x2=\"348\" y2=\"62\" class=\"ln-m\"/><path d=\"M266,29 V67 M278,29 V67 M290,29 V67 M302,29 V67 M314,29 V67 M326,29 V67 M338,29 V67\" class=\"ln\"/><text x=\"362\" y=\"44\" class=\"t-s t-b\">TM184 and PRRT families</text><text x=\"362\" y=\"62\" class=\"t-s t-m\">7-TM, GPCR-like fold; 'superdark' sequences</text></g><g data-step=\"2\"><text x=\"0\" y=\"100\" class=\"p-l\">b</text><text x=\"18\" y=\"100\" class=\"t-b\">They behave like receptors</text><line x1=\"18\" y1=\"118\" x2=\"100\" y2=\"118\" class=\"ln-m\"/><line x1=\"18\" y1=\"146\" x2=\"100\" y2=\"146\" class=\"ln-m\"/><path d=\"M24,113 V151 M36,113 V151 M48,113 V151 M60,113 V151 M72,113 V151 M84,113 V151 M96,113 V151\" class=\"ln\"/><line x1=\"96\" y1=\"151\" x2=\"160\" y2=\"160\" class=\"ln\"/><circle cx=\"118\" cy=\"154\" r=\"4\" class=\"f-ink\"/><circle cx=\"138\" cy=\"157\" r=\"4\" class=\"f-ink\"/><ellipse cx=\"158\" cy=\"145\" rx=\"14\" ry=\"6\" class=\"f-m\"/><text x=\"190\" y=\"134\" class=\"t-s\">recruit beta-arrestin<tspan class=\"t-m\"> (grey)</tspan></text><text x=\"190\" y=\"154\" class=\"t-s\">phosphorylated<tspan class=\"t-m\"> (black dots)</tspan> by GPCR kinases</text></g><g data-step=\"3\"><text x=\"0\" y=\"188\" class=\"p-l\">c</text><text x=\"18\" y=\"188\" class=\"t-b\">TM184C rides vesicles and builds bridges between cells</text><circle cx=\"50\" cy=\"225\" r=\"24\" class=\"ln\"/><circle cx=\"250\" cy=\"225\" r=\"24\" class=\"ln\"/><line x1=\"74\" y1=\"221\" x2=\"226\" y2=\"221\" class=\"ln\"/><line x1=\"74\" y1=\"229\" x2=\"226\" y2=\"229\" class=\"ln\"/><circle cx=\"150\" cy=\"225\" r=\"3\" class=\"f-a\"/><text x=\"150\" y=\"214\" text-anchor=\"middle\" class=\"t-s t-m\">nanotube</text><text x=\"300\" y=\"216\" class=\"t-s\"><tspan class=\"t-a t-b\">TM184C</tspan> on mobile vesicles along microtubules</text><text x=\"300\" y=\"234\" class=\"t-s\">nanotube-like bridges let cells share organelles</text><text x=\"300\" y=\"252\" class=\"t-s t-m\">needs its C-terminal tail and arrestin-binding motif</text></g><g data-step=\"4\"><text x=\"0\" y=\"284\" class=\"p-l\">d</text><text x=\"18\" y=\"284\" class=\"t-b\">TM184C restrains autophagy by curbing LC3B lipidation</text><text x=\"18\" y=\"310\" class=\"t-s t-b t-a\">TM184C</text><line x1=\"72\" y1=\"306\" x2=\"128\" y2=\"306\" class=\"ln-a\"/><line x1=\"128\" y1=\"300\" x2=\"128\" y2=\"312\" class=\"ln-a\"/><text x=\"138\" y=\"310\" class=\"t-s\">LC3B lipidation</text><line x1=\"240\" y1=\"306\" x2=\"286\" y2=\"306\" class=\"ln\" marker-end=\"url(#ah)\"/><text x=\"296\" y=\"310\" class=\"t-s\">autophagic flux</text><text x=\"18\" y=\"330\" class=\"t-s t-m\">Human TM184C rescues autophagy defects in yeast lacking its counterpart, Hfl1</text></g></svg>"
     }
    },
    {
     "kind": "brief",
     "headline": "Time-resolved proteomics powers a 'virtual cell' for drug discovery",
     "dek": "Westlake University's ProteinTalks model learns from 38 million protein measurements in perturbed breast cancer cells.",
     "body": [
      "Researchers generated more than 38 million time-stamped protein-abundance measurements from systematically perturbed breast cancer cell lines and used them to pretrain ProteinTalks, an AI virtual cell model. The model predicted drug efficacy and synergy, flagged resistance-linked proteins, and carried over to patient-derived organoids and clinical biopsies, generally outperforming the benchmark methods tested."
     ],
     "tags": [
      "proteomics",
      "AI",
      "drug discovery"
     ],
     "source": {
      "title": "An operational perturbation proteomics-based virtual cell model.",
      "authors": "Sun et al.",
      "venue": "Nature",
      "date": "2026-09-09",
      "doi": "10.1038/s41586-026-11001-9",
      "pmid": "42717098",
      "url": "https://doi.org/10.1038/s41586-026-11001-9",
      "peerReviewed": true
     }
    },
    {
     "kind": "brief",
     "headline": "Cryo-electron tomography maps the cilium's gatekeeper and links it to disease",
     "dek": "Two linker proteins in the ciliary transition zone are tied to primary ciliary dyskinesia.",
     "body": [
      "Using in situ cryo-electron tomography of human multiciliated cells, a Harvard-led team resolved the ciliary transition zone's microtubule doublets at subnanometre resolution and identified nine component proteins. ECT2L and DZANK1 form the main linkers between neighbouring doublets; loss-of-function variants in either gene cause primary ciliary dyskinesia, disrupting zone architecture and mucociliary clearance."
     ],
     "tags": [
      "cryo-EM",
      "cilia",
      "rare disease"
     ],
     "source": {
      "title": "In situ structure of the human ciliary transition zone links linker defects to primary ciliary dyskinesia.",
      "authors": "Zhou et al.",
      "venue": "Science",
      "date": "2026-09-10",
      "doi": "10.1126/science.aei5957",
      "pmid": "42721274",
      "url": "https://doi.org/10.1126/science.aei5957",
      "peerReviewed": true
     }
    },
    {
     "kind": "brief",
     "headline": "PD-1 blocks T cell signalling without needing phosphorylation, study finds",
     "dek": "Unphosphorylated tyrosines in the checkpoint receptor directly suppress LAT condensate formation.",
     "body": [
      "Genentech researchers found that PD-1's cytoplasmic tail directly prevents condensation of the T cell scaffold LAT, and that this depends on tyrosines in its inhibitory motifs remaining unphosphorylated. Phosphorylation abolished the effect, and swapping tyrosine for tryptophan preserved inhibition in T cells, challenging the prevailing phosphorylation-centred view of how PD-1 works."
     ],
     "tags": [
      "post-translational modification",
      "immune checkpoints",
      "condensates"
     ],
     "source": {
      "title": "Unphosphorylated tyrosines mediate PD-1 inhibition of T cell signaling condensate formation.",
      "authors": "Sharma et al.",
      "venue": "Science",
      "date": "2026-09-10",
      "doi": "10.1126/science.adt9365",
      "pmid": "42721241",
      "url": "https://doi.org/10.1126/science.adt9365",
      "peerReviewed": true
     }
    },
    {
     "kind": "brief",
     "headline": "Urine test detects misfolded alpha-synuclein in Parkinson's and MSA",
     "dek": "A seed amplification assay on neuron-derived vesicles from urine offers a non-invasive alternative to spinal taps.",
     "body": [
      "Korean researchers captured neuronal extracellular vesicles from urine and ran an RT-QuIC seed amplification assay for aggregated alpha-synuclein. In 26 Parkinson's patients, 13 with multiple system atrophy and 25 controls, the test separated Parkinson's from controls with 73.1% sensitivity and 84% specificity, with similar results for MSA; larger validation is needed."
     ],
     "tags": [
      "protein aggregation",
      "Parkinson's disease",
      "biomarkers"
     ],
     "source": {
      "title": "Urine-Derived Neuronal Extracellular Vesicle α-Synuclein Seed Amplification Assay for Synucleinopathies: A Non-Invasive Biomarker Study.",
      "authors": "Tran et al.",
      "venue": "Movement Disorders",
      "date": "2026-09-21",
      "doi": "10.1002/mds.70533",
      "pmid": "42768739",
      "url": "https://doi.org/10.1002/mds.70533",
      "peerReviewed": true
     }
    },
    {
     "kind": "brief",
     "headline": "Ubiquitin switch drives kidney cancer resistance to mTOR drugs",
     "dek": "SPOP-mediated modification of ZMYND8 reroutes signalling, and a NEK7 degrader restores drug sensitivity in mice.",
     "body": [
      "In clear cell renal carcinoma, the E3 ligase adaptor SPOP adds K63-linked ubiquitin chains to ZMYND8 at lysine 398, keeping it out of phase-separated compartments and switching on NEK7 transcription. That reactivates p70S6K and blunts everolimus. A NEK7-targeting PROTAC overcame resistance in cells and mice."
     ],
     "tags": [
      "ubiquitination",
      "PROTAC",
      "kidney cancer"
     ],
     "source": {
      "title": "SPOP-mediated ZMYND8 ubiquitination and phase separation exclusion drives mTOR inhibitor resistance in kidney cancer.",
      "authors": "Tang et al.",
      "venue": "Nature Communications",
      "date": "2026-08-25",
      "doi": "10.1038/s41467-026-77043-9",
      "pmid": "42778578",
      "url": "https://doi.org/10.1038/s41467-026-77043-9",
      "peerReviewed": true
     }
    }
   ]
  },
  "technology": {
   "stories": [
    {
     "kind": "lead",
     "headline": "Designed proteins learn to grab sugars, not just surfaces",
     "dek": "A generative model that invents sequence and structure together produced the first de novo proteins reported to bind a free carbohydrate, one of them able to tell blood-group antigens apart.",
     "body": [
      "Computational protein design has had a good few years, but its successes have clustered on the easy targets: rigid protein surfaces with greasy pockets where a designed binder can wedge itself in. Polar, water-covered epitopes and small floppy molecules such as sugars have largely defeated the field. A new preprint from a large team led by Kieran Didi describes a way around the problem, and reports binders against target classes that previous methods have not reached.",
      "The approach, called latent generative search, wraps a reward-guided search around a generative model of protein complexes at the moment of generation rather than after it. Crucially, the model produces sequence and backbone structure jointly in a shared continuous latent space, which removes the separate inverse-folding step that most current pipelines depend on to decide which amino acids should occupy a designed fold.",
      "The authors then did something unusual for a design paper: they tested at industrial scale. More than a million designs were screened by multiplexed phage display. Latent generative search yielded more validated binders than any other method in the comparison, and the jointly designed sequences outperformed sequences that were redesigned onto the same backbones afterwards. Validated binders included ones against therapeutic receptors, a viral attachment protein and intracellular signalling proteins.",
      "The headline result is the carbohydrate. The team reports de novo proteins that bind a free sugar, including one that discriminates between blood-group antigens. If that holds up, it opens a target class - glycans, which coat essentially every human cell and most pathogens - that has been effectively off-limits to computational binder design, and where the existing reagents are mostly antibodies and plant lectins of uneven specificity."
     ],
     "whyItMatters": "Reagents that recognise specific sugars are scarce and hard to raise by conventional means, yet glycans carry much of the information on cell surfaces. A design route to them would touch diagnostics, glycobiology and biologics alike.",
     "caveats": "This is a bioRxiv preprint and has not been peer reviewed. Phage-display validation reports binding, not therapeutic specificity or behaviour in cells, and the carbohydrate binders are a small number of examples.",
     "tags": [
      "protein design",
      "generative models",
      "glycobiology"
     ],
     "source": {
      "title": "Latent generative search unlocks de novo design of untapped biomolecular interactions at scale",
      "authors": "Didi et al.",
      "venue": "bioRxiv",
      "date": "2026-09-18",
      "doi": "10.64898/2026.09.12.751118",
      "pmid": "42779796",
      "url": "https://doi.org/10.64898/2026.09.12.751118",
      "peerReviewed": false
     },
     "figure": {
      "title": "Designed binders reach a free sugar",
      "caption": "a, One generative model writes sequence and backbone in a shared latent space while a reward steers the search. b, Screen of more than a million designs by multiplexed phage display; bar lengths are schematic, not to scale, as counts are not given. c, Validated target classes, including a free carbohydrate. Data: Didi et al., bioRxiv, 2026.",
      "steps": [
       "A single model generates sequence and backbone together in one latent space, with a reward steering the search during generation rather than filtering designs afterwards.",
       "More than a million designs were screened by multiplexed phage display, and the method yielded more validated binders than any other in the comparison.",
       "Validated binders include therapeutic receptors, a viral attachment protein, intracellular signalling proteins, and a de novo protein that binds a free sugar."
      ],
      "svg": "<svg viewBox=\"0 0 680 300\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"a, one model generates sequence and backbone together in a latent space under a reward-guided search. b, more than a million designs screened by phage display; schematic bars show more validated binders than other methods. c, validated target classes including a free sugar that tells blood-group antigens apart.\"><defs><marker id=\"ah\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" class=\"f-ink\"/></marker></defs><g data-step=\"1\"><text x=\"0\" y=\"16\" class=\"p-l\">a</text><text x=\"18\" y=\"16\" class=\"t-b\">Sequence and backbone generated together</text><text x=\"290\" y=\"36\" text-anchor=\"middle\" class=\"t-s t-a\">reward-guided search, during generation</text><path d=\"M366,62 C366,46 214,46 214,62\" class=\"ln-a\" marker-end=\"url(#ah)\"/><circle cx=\"60\" cy=\"72\" r=\"9\" class=\"f-m\"/><line x1=\"74\" y1=\"72\" x2=\"116\" y2=\"72\" class=\"ln\" marker-end=\"url(#ah)\"/><rect x=\"130\" y=\"58\" width=\"9\" height=\"9\" class=\"f-ink\"/><rect x=\"145\" y=\"58\" width=\"9\" height=\"9\" class=\"f-ink\"/><rect x=\"160\" y=\"58\" width=\"9\" height=\"9\" class=\"f-ink\"/><rect x=\"175\" y=\"58\" width=\"9\" height=\"9\" class=\"f-ink\"/><rect x=\"190\" y=\"58\" width=\"9\" height=\"9\" class=\"f-ink\"/><rect x=\"205\" y=\"58\" width=\"9\" height=\"9\" class=\"f-ink\"/><rect x=\"220\" y=\"58\" width=\"9\" height=\"9\" class=\"f-ink\"/><rect x=\"235\" y=\"58\" width=\"9\" height=\"9\" class=\"f-ink\"/><path d=\"M130,84 q14,-9 28,0 t28,0 t28,0 t28,0\" class=\"ln\"/><line x1=\"258\" y1=\"72\" x2=\"298\" y2=\"72\" class=\"ln\" marker-end=\"url(#ah)\"/><ellipse cx=\"340\" cy=\"72\" rx=\"32\" ry=\"16\" class=\"f-m\"/><text x=\"60\" y=\"104\" text-anchor=\"middle\" class=\"t-s\">latent space</text><text x=\"187\" y=\"104\" text-anchor=\"middle\" class=\"t-s\">sequence + backbone</text><text x=\"340\" y=\"104\" text-anchor=\"middle\" class=\"t-s\">designed complex</text><text x=\"430\" y=\"68\" class=\"t-s\">no separate inverse-folding step</text><text x=\"430\" y=\"86\" class=\"t-s t-m\">most pipelines need one</text></g><g data-step=\"2\"><text x=\"0\" y=\"134\" class=\"p-l\">b</text><text x=\"18\" y=\"134\" class=\"t-b\">More than 1,000,000 designs screened by phage display</text><text x=\"18\" y=\"152\" class=\"t-s t-m\">Validated binders per method — schematic, not to scale</text><rect x=\"18\" y=\"163\" width=\"80\" height=\"12\" class=\"f-m\"/><text x=\"106\" y=\"173\" class=\"t-s\">other methods in the comparison</text><rect x=\"18\" y=\"183\" width=\"200\" height=\"12\" class=\"f-a\"/><text x=\"226\" y=\"193\" class=\"t-s t-a t-b\">latent generative search</text><text x=\"18\" y=\"215\" class=\"t-s\">Jointly designed sequences beat the same backbones redesigned afterwards.</text></g><g data-step=\"3\"><text x=\"0\" y=\"242\" class=\"p-l\">c</text><text x=\"18\" y=\"242\" class=\"t-b\">Validated target classes</text><rect x=\"18\" y=\"258\" width=\"9\" height=\"9\" class=\"f-ink\"/><text x=\"33\" y=\"266\" class=\"t-s\">therapeutic receptors</text><rect x=\"350\" y=\"258\" width=\"9\" height=\"9\" class=\"f-ink\"/><text x=\"365\" y=\"266\" class=\"t-s\">a viral attachment protein</text><rect x=\"18\" y=\"280\" width=\"9\" height=\"9\" class=\"f-ink\"/><text x=\"33\" y=\"288\" class=\"t-s\">intracellular signalling proteins</text><rect x=\"350\" y=\"280\" width=\"9\" height=\"9\" class=\"f-a\"/><text x=\"365\" y=\"288\" class=\"t-s t-a t-b\">a free sugar, telling blood groups apart</text></g></svg>"
     }
    },
    {
     "kind": "feature",
     "headline": "A hundred million cells, eleven hundred drug conditions",
     "dek": "Tahoe-100M profiles 100 million single-cell transcriptomes across 50 cancer cell lines and 1,100 drug-dose conditions, and the whole thing is public.",
     "body": [
      "Perturbation atlases have been growing steadily; Tahoe-100M, published in Cell, jumps a scale. The dataset comprises 100 million single-cell transcriptomes from 50 cancer cell lines exposed to 1,100 drug-dose conditions. The trick that makes it feasible is the Mosaic platform, which pools genetically distinct cell models into balanced 'cell villages' so that thousands of perturbations are profiled in parallel with, the authors report, minimal batch effects.",
      "Beyond cataloguing expression shifts, the atlas quantifies phenotypes that transcriptomes alone often obscure: proliferation, cytotoxicity, lineage-specific vulnerabilities and cell-cycle changes. It also captures whether a drug pushes a population toward divergent fates or converges it on one state. Pathway-level signatures were used to classify mechanisms of action, flag off-target activity and expose adaptive stress responses linked to resistance. The release is explicitly framed as training material for predictive models of cell behaviour."
     ],
     "whyItMatters": "Models that predict how cells respond to drugs have been starved of large, uniformly generated perturbation data; this is the kind of resource that changes what can be trained.",
     "caveats": "Everything here is cancer cell lines in culture, multiplexed into pooled villages - not primary tissue, and not an in vivo readout of drug response.",
     "tags": [
      "single-cell",
      "drug response",
      "datasets"
     ],
     "source": {
      "title": "Tahoe-100M: Mapping drug-induced molecular phenotypes at single-cell resolution",
      "authors": "Zhang et al.",
      "venue": "Cell",
      "date": "2026-09-17",
      "doi": "10.1016/j.cell.2026.08.035",
      "pmid": "42753697",
      "url": "https://doi.org/10.1016/j.cell.2026.08.035",
      "peerReviewed": true
     },
     "figure": {
      "title": "What is inside Tahoe-100M",
      "caption": "a, 50 cancer cell lines pooled into balanced cell villages on the Mosaic platform. b, Scale of the release: 1,100 drug-dose conditions read out as 100 million single-cell transcriptomes. c, Phenotypes and pathway-level signatures scored beyond expression shifts. Data: Zhang et al., Cell, 2026.",
      "steps": [
       "50 genetically distinct cancer cell lines are pooled into balanced cell villages on the Mosaic platform, so thousands of perturbations run in parallel with minimal batch effects.",
       "The villages are exposed to 1,100 drug-dose conditions, giving 100 million single-cell transcriptomes that are released publicly as training material for predictive models.",
       "Beyond expression shifts the atlas scores proliferation, cytotoxicity, cell-cycle and lineage-specific effects, and uses pathway signatures for mechanism of action and resistance."
      ],
      "svg": "<svg viewBox=\"0 0 680 312\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"a, 50 genetically distinct cancer cell lines pooled into one village on the Mosaic platform. b, 1,100 drug-dose conditions read out as 100 million single-cell transcriptomes. c, phenotypes and pathway signatures scored beyond expression.\"><g data-step=\"1\"><text x=\"0\" y=\"16\" class=\"p-l\">a</text><text x=\"18\" y=\"16\" class=\"t-b\">50 cancer cell lines pooled into one cell village</text><circle cx=\"30\" cy=\"44\" r=\"7\" class=\"f-ink\"/><circle cx=\"58\" cy=\"44\" r=\"7\" class=\"f-m\"/><circle cx=\"86\" cy=\"44\" r=\"7\" class=\"f-ink\"/><circle cx=\"114\" cy=\"44\" r=\"7\" class=\"f-m\"/><circle cx=\"142\" cy=\"44\" r=\"7\" class=\"f-ink\"/><circle cx=\"170\" cy=\"44\" r=\"7\" class=\"f-m\"/><circle cx=\"198\" cy=\"44\" r=\"7\" class=\"f-ink\"/><circle cx=\"226\" cy=\"44\" r=\"7\" class=\"f-m\"/><circle cx=\"254\" cy=\"44\" r=\"7\" class=\"f-ink\"/><circle cx=\"282\" cy=\"44\" r=\"7\" class=\"f-m\"/><line x1=\"23\" y1=\"62\" x2=\"289\" y2=\"62\" class=\"ln-m\"/><text x=\"18\" y=\"84\" class=\"t-s\">genetically distinct models pooled on the Mosaic platform</text><text x=\"18\" y=\"104\" class=\"t-s t-m\">profiled in parallel, with minimal batch effects reported</text></g><g data-step=\"2\"><text x=\"0\" y=\"136\" class=\"p-l\">b</text><text x=\"18\" y=\"136\" class=\"t-b\">1,100 drug-dose conditions, 100 million single cells</text><text x=\"560\" y=\"164\" text-anchor=\"middle\" class=\"t-s t-a\">released publicly</text><line x1=\"18\" y1=\"182\" x2=\"662\" y2=\"182\" class=\"ln-m\"/><circle cx=\"108\" cy=\"182\" r=\"5\" class=\"f-ink\"/><circle cx=\"330\" cy=\"182\" r=\"5\" class=\"f-ink\"/><circle cx=\"560\" cy=\"182\" r=\"6\" class=\"f-a\"/><line x1=\"108\" y1=\"177\" x2=\"108\" y2=\"187\" class=\"ln\"/><line x1=\"330\" y1=\"177\" x2=\"330\" y2=\"187\" class=\"ln\"/><text x=\"108\" y=\"204\" text-anchor=\"middle\" class=\"t-s\">50 cell lines</text><text x=\"330\" y=\"204\" text-anchor=\"middle\" class=\"t-s\">1,100 drug-dose conditions</text><text x=\"560\" y=\"204\" text-anchor=\"middle\" class=\"t-s t-a t-b\">100M single cells</text></g><g data-step=\"3\"><text x=\"0\" y=\"238\" class=\"p-l\">c</text><text x=\"18\" y=\"238\" class=\"t-b\">What the atlas scores beyond expression</text><rect x=\"18\" y=\"256\" width=\"9\" height=\"9\" class=\"f-ink\"/><text x=\"33\" y=\"264\" class=\"t-s\">proliferation, cytotoxicity, cell cycle</text><rect x=\"350\" y=\"256\" width=\"9\" height=\"9\" class=\"f-ink\"/><text x=\"365\" y=\"264\" class=\"t-s\">lineage-specific vulnerabilities</text><rect x=\"18\" y=\"278\" width=\"9\" height=\"9\" class=\"f-ink\"/><text x=\"33\" y=\"286\" class=\"t-s\">divergent vs converged cell fates</text><rect x=\"350\" y=\"278\" width=\"9\" height=\"9\" class=\"f-ink\"/><text x=\"365\" y=\"286\" class=\"t-s\">mechanism of action, off-target activity</text><rect x=\"18\" y=\"300\" width=\"9\" height=\"9\" class=\"f-ink\"/><text x=\"33\" y=\"308\" class=\"t-s\">adaptive stress responses tied to resistance</text></g></svg>"
     }
    },
    {
     "kind": "feature",
     "headline": "Prime assembly slots large DNA into cells that aren't dividing",
     "dek": "A CRISPR method that synthesises DNA from two flaps installs medium-to-large sequences without double-strand breaks, donor DNA or cell-cycle dependence.",
     "body": [
      "Putting a whole gene into a chosen genomic site is still the awkward middle ground of genome editing. Homology-directed repair does it, but needs dividing cells and a double-stranded donor. Writing in Nature, Sebastien Levesque and colleagues describe prime assembly, which uses CRISPR-targeted dual flap synthesis to assemble and integrate DNA sequences directly in human cells, programmed by RNA.",
      "The method takes single- or double-stranded DNA fragments and is reported to work comparably in dividing and non-dividing cells - a meaningful difference for tissues such as neurons and muscle. The authors used it for targeted exon recoding, transgene integration and rearrangements on a megabase scale, including at therapeutically relevant loci in primary human cells, all without nuclease-driven double-strand breaks."
     ],
     "whyItMatters": "Break-free installation of gene-sized cargo in post-mitotic primary cells is the capability gap standing between prime-editing chemistry and many candidate genetic therapies.",
     "caveats": "The work is a proof of capability in cells; efficiencies, delivery and off-target behaviour in a living organism are not settled by it.",
     "tags": [
      "genome editing",
      "CRISPR",
      "gene therapy"
     ],
     "source": {
      "title": "Targeted genomic integration and rearrangement using prime assembly",
      "authors": "Levesque et al.",
      "venue": "Nature",
      "date": "2026-09-16",
      "doi": "10.1038/s41586-026-11024-2",
      "pmid": "42749803",
      "url": "https://doi.org/10.1038/s41586-026-11024-2",
      "peerReviewed": true
     },
     "figure": {
      "title": "How prime assembly installs DNA",
      "caption": "Schematic; no quantities are implied. a, Two RNA-programmed CRISPR nicks on opposite strands write complementary DNA flaps, with no double-strand break. b, The flaps pair with an incoming single- or double-stranded fragment, which is assembled in place. c, The sequence is installed at the target, reported to work comparably in dividing and non-dividing cells. Data: Levesque et al., Nature, 2026.",
      "steps": [
       "Two RNA-programmed CRISPR prime edits nick opposite strands of the target site and synthesise complementary DNA flaps, with no double-strand break.",
       "The flaps pair with an incoming single- or double-stranded DNA fragment, assembling the new sequence in place.",
       "The sequence is integrated at the target, reported to work comparably in dividing and non-dividing cells, for exon recoding, transgenes and megabase-scale rearrangements."
      ],
      "svg": "<svg viewBox=\"0 0 680 310\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Schematic. a, two RNA-programmed nicks on opposite strands write complementary DNA flaps with no double-strand break. b, the flaps pair with an incoming single- or double-stranded fragment. c, the sequence is installed at the target in dividing and non-dividing cells.\"><g data-step=\"1\"><text x=\"0\" y=\"16\" class=\"p-l\">a</text><text x=\"18\" y=\"16\" class=\"t-b\">Two RNA-programmed nicks, no double-strand break (schematic)</text><line x1=\"18\" y1=\"56\" x2=\"500\" y2=\"56\" class=\"ln\"/><line x1=\"18\" y1=\"76\" x2=\"500\" y2=\"76\" class=\"ln\"/><line x1=\"170\" y1=\"49\" x2=\"170\" y2=\"63\" class=\"ln-a\"/><line x1=\"290\" y1=\"69\" x2=\"290\" y2=\"83\" class=\"ln-a\"/><path d=\"M170,56 C150,56 142,42 126,40\" class=\"ln-a\"/><path d=\"M290,76 C310,76 318,90 334,92\" class=\"ln-a\"/><text x=\"18\" y=\"112\" class=\"t-s\">CRISPR nicks opposite strands and writes two complementary DNA flaps</text><text x=\"530\" y=\"60\" class=\"t-s t-m\">target site</text><text x=\"530\" y=\"78\" class=\"t-s t-m\">in the genome</text></g><g data-step=\"2\"><text x=\"0\" y=\"142\" class=\"p-l\">b</text><text x=\"18\" y=\"142\" class=\"t-b\">The flaps capture an incoming DNA fragment</text><line x1=\"170\" y1=\"172\" x2=\"200\" y2=\"172\" class=\"ln-a\"/><line x1=\"380\" y1=\"186\" x2=\"410\" y2=\"186\" class=\"ln-a\"/><line x1=\"200\" y1=\"172\" x2=\"380\" y2=\"172\" class=\"ln\"/><line x1=\"200\" y1=\"186\" x2=\"380\" y2=\"186\" class=\"ln\"/><text x=\"18\" y=\"182\" class=\"t-s t-m\">flap</text><text x=\"424\" y=\"182\" class=\"t-s t-m\">flap</text><text x=\"18\" y=\"212\" class=\"t-s\">A single- or double-stranded fragment pairs with both flaps and is assembled in place</text></g><g data-step=\"3\"><text x=\"0\" y=\"242\" class=\"p-l\">c</text><text x=\"18\" y=\"242\" class=\"t-b\">Installed at the target, in dividing and non-dividing cells</text><text x=\"285\" y=\"262\" text-anchor=\"middle\" class=\"t-s t-a\">installed sequence</text><line x1=\"18\" y1=\"278\" x2=\"500\" y2=\"278\" class=\"ln\"/><rect x=\"230\" y=\"272\" width=\"110\" height=\"10\" class=\"f-a\"/><text x=\"18\" y=\"300\" class=\"t-s\">exon recoding, transgene integration, megabase-scale rearrangements</text><text x=\"662\" y=\"282\" text-anchor=\"end\" class=\"t-s t-m\">in primary human cells</text></g></svg>"
     }
    },
    {
     "kind": "feature",
     "headline": "A neural network trained on one patient, in five minutes",
     "dek": "xvr builds a patient-specific model from a preoperative scan using simulated X-rays, then aligns 3D volumes to live fluoroscopy in seconds.",
     "body": [
      "Image-guided intervention depends on lining up a preoperative CT or MRI with the two-dimensional fluoroscopy the surgeon is actually watching. Existing solutions split badly: optimisation methods need per-patient hyperparameter fiddling, while deep-learning ones need large hand-labelled datasets and stay stuck on the anatomy they were trained on. Vivek Gopalakrishnan and colleagues, reporting in Nature, sidestep both by generating training data from the patient's own scan through physics-based simulation of X-ray formation - no manual annotation anywhere.",
      "A foundation model pretrained on thousands of whole-body scans adapts to a new anatomical region with about five minutes of fine-tuning, after which registration runs in seconds. In what the authors describe as the largest evaluation of 2D/3D registration on real fluoroscopy so far, spanning different anatomical structures, imaging modalities and hospitals, accuracy improved on existing methods by an order of magnitude. The software is released open source."
     ],
     "whyItMatters": "Registration accuracy is the quiet bottleneck in surgical navigation and robotics; a self-supervised, anatomy-agnostic method removes the per-site engineering that has kept these systems specialised.",
     "caveats": "Evaluation is retrospective on real fluoroscopy data rather than prospective in the operating room, and the five-minute fine-tuning step assumes a suitable preoperative volume exists.",
     "tags": [
      "medical imaging",
      "deep learning",
      "surgical navigation"
     ],
     "source": {
      "title": "Rapid patient-specific neural networks for X-ray to volume registration",
      "authors": "Gopalakrishnan et al.",
      "venue": "Nature",
      "date": "2026-09-16",
      "doi": "10.1038/s41586-026-11045-x",
      "pmid": "42749809",
      "url": "https://doi.org/10.1038/s41586-026-11045-x",
      "peerReviewed": true
     },
     "figure": {
      "title": "How xvr aligns a scan in seconds",
      "caption": "a, The patient’s own preoperative scan is turned into training X-rays by physics-based simulation, with no manual annotation. b, A model pretrained on thousands of whole-body scans is fine-tuned to the new region in about five minutes, after which registration runs in seconds. c, Registration error relative to xvr; accuracy improved on existing methods by an order of magnitude. Data: Gopalakrishnan et al., Nature, 2026.",
      "steps": [
       "The patient’s own preoperative scan is turned into training X-rays by physics-based simulation of X-ray formation, with no manual annotation anywhere.",
       "A foundation model pretrained on thousands of whole-body scans adapts to a new anatomical region with about five minutes of fine-tuning, and then registers in seconds.",
       "In the largest evaluation of 2D/3D registration on real fluoroscopy so far, accuracy improved on existing methods by an order of magnitude; the software is open source."
      ],
      "svg": "<svg viewBox=\"0 0 680 324\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"a, the patient preoperative scan is turned into simulated X-rays by physics-based simulation with no manual annotation. b, a pretrained model is fine-tuned in about five minutes and then registers in seconds. c, registration error is an order of magnitude lower than existing methods.\"><g data-step=\"1\"><text x=\"0\" y=\"16\" class=\"p-l\">a</text><text x=\"18\" y=\"16\" class=\"t-b\">Training data simulated from the patient’s own scan</text><rect x=\"38\" y=\"40\" width=\"44\" height=\"44\" class=\"f-m\"/><line x1=\"86\" y1=\"62\" x2=\"194\" y2=\"44\" class=\"ln-m\"/><line x1=\"86\" y1=\"62\" x2=\"194\" y2=\"62\" class=\"ln-m\"/><line x1=\"86\" y1=\"62\" x2=\"194\" y2=\"80\" class=\"ln-m\"/><rect x=\"200\" y=\"40\" width=\"40\" height=\"44\" class=\"f-m\"/><rect x=\"248\" y=\"40\" width=\"40\" height=\"44\" class=\"f-m\"/><rect x=\"296\" y=\"40\" width=\"40\" height=\"44\" class=\"f-m\"/><text x=\"18\" y=\"104\" class=\"t-s\">preoperative CT</text><text x=\"200\" y=\"104\" class=\"t-s\">simulated X-rays</text><text x=\"400\" y=\"56\" class=\"t-s\">physics-based X-ray simulation</text><text x=\"400\" y=\"76\" class=\"t-s t-m\">no manual annotation</text></g><g data-step=\"2\"><text x=\"0\" y=\"136\" class=\"p-l\">b</text><text x=\"18\" y=\"136\" class=\"t-b\">Pretrain once, fine-tune per patient in about five minutes</text><text x=\"234\" y=\"166\" text-anchor=\"middle\" class=\"t-s t-a t-b\">~5 min fine-tuning</text><line x1=\"18\" y1=\"184\" x2=\"662\" y2=\"184\" class=\"ln-m\"/><line x1=\"108\" y1=\"184\" x2=\"360\" y2=\"184\" class=\"ln-a\"/><circle cx=\"108\" cy=\"184\" r=\"5\" class=\"f-ink\"/><circle cx=\"360\" cy=\"184\" r=\"5\" class=\"f-a\"/><circle cx=\"580\" cy=\"184\" r=\"5\" class=\"f-ink\"/><line x1=\"580\" y1=\"178\" x2=\"580\" y2=\"190\" class=\"ln\"/><text x=\"108\" y=\"206\" text-anchor=\"middle\" class=\"t-s\">thousands of whole-body scans</text><text x=\"360\" y=\"206\" text-anchor=\"middle\" class=\"t-s\">new anatomical region</text><text x=\"580\" y=\"206\" text-anchor=\"middle\" class=\"t-s\">registration in seconds</text></g><g data-step=\"3\"><text x=\"0\" y=\"240\" class=\"p-l\">c</text><text x=\"18\" y=\"240\" class=\"t-b\">Registration error on real fluoroscopy (xvr = 1)</text><line x1=\"150\" y1=\"252\" x2=\"150\" y2=\"298\" class=\"ln\"/><rect x=\"150\" y=\"258\" width=\"400\" height=\"14\" class=\"f-m\"/><text x=\"18\" y=\"269\" class=\"t-s\">existing methods</text><text x=\"558\" y=\"269\" class=\"t-s\">10×</text><rect x=\"150\" y=\"284\" width=\"40\" height=\"14\" class=\"f-a\"/><text x=\"18\" y=\"295\" class=\"t-s t-a t-b\">xvr</text><text x=\"198\" y=\"295\" class=\"t-s t-a t-b\">1×, an order of magnitude lower</text><text x=\"18\" y=\"318\" class=\"t-s t-m\">largest evaluation of 2D/3D registration on real fluoroscopy so far; retrospective</text><text x=\"662\" y=\"318\" text-anchor=\"end\" class=\"t-s t-m\">open source</text></g></svg>"
     }
    },
    {
     "kind": "brief",
     "headline": "An AI agent tidies up half a billion cells",
     "dek": "scBaseCount mines the Sequence Read Archive with an AI agent and reprocesses everything uniformly.",
     "body": [
      "Public single-cell data is abundant and nearly unusable in bulk, because the metadata is a free-text mess. scBaseCount, reported in Cell, puts an AI agent to work finding 10x Genomics datasets in the Sequence Read Archive, standardising their metadata and reprocessing the reads uniformly: more than 502 million cells across 27 organisms and 75 tissues."
     ],
     "tags": [
      "databases",
      "single-cell",
      "AI agents"
     ],
     "source": {
      "title": "scBaseCount: An AI agent-curated, standardized, auto-updated single-cell data repository",
      "authors": "Youngblut et al.",
      "venue": "Cell",
      "date": "2026-09-17",
      "doi": "10.1016/j.cell.2026.08.025",
      "pmid": "42753696",
      "url": "https://doi.org/10.1016/j.cell.2026.08.025",
      "peerReviewed": true
     }
    },
    {
     "kind": "brief",
     "headline": "Bayesian phylogenetics, now running in a browser tab",
     "dek": "Delphy reproduces outbreak analyses two to three orders of magnitude faster than standard tools.",
     "body": [
      "Bayesian phylogenetics is the gold standard for outbreak genomics and far too slow for routine use. Delphy reformulates it around an explicit mutation-annotated tree that exploits sequence similarity within epidemics. Reanalysing Ebola, Zika, SARS-CoV-2, mpox and H5N1 data, it matched accuracy two to three orders of magnitude faster, and runs locally in a browser."
     ],
     "tags": [
      "phylogenetics",
      "outbreak response",
      "software"
     ],
     "source": {
      "title": "Scalable near-real-time Bayesian phylogenetics for outbreaks with Delphy",
      "authors": "Varilly et al.",
      "venue": "Nature",
      "date": "2026-09-16",
      "doi": "10.1038/s41586-026-11012-6",
      "pmid": "42749814",
      "url": "https://doi.org/10.1038/s41586-026-11012-6",
      "peerReviewed": true
     }
    },
    {
     "kind": "brief",
     "headline": "Calling variants from noisy nanopore RNA reads",
     "dek": "NanoTS pushes SNP detection in long-read transcriptomes to clinically interesting accuracy.",
     "body": [
      "Nanopore transcriptome sequencing is good at isoforms and historically poor at single nucleotide variants. NanoTS, a deep-learning caller in Nature Methods, reports F-scores above 0.980 on direct RNA and 0.966 on cDNA for variants with five or more supporting reads, improving most on allelically imbalanced variants, and genotypes pathogenic Mendelian variants."
     ],
     "tags": [
      "nanopore",
      "variant calling",
      "deep learning"
     ],
     "source": {
      "title": "NanoTS: a deep learning tool for accurate SNP calling in nanopore long-read transcriptome data",
      "authors": "Liu et al.",
      "venue": "Nature Methods",
      "date": "2026-09-22",
      "doi": "10.1038/s41592-026-03225-4",
      "pmid": "42773294",
      "url": "https://doi.org/10.1038/s41592-026-03225-4",
      "peerReviewed": true
     }
    },
    {
     "kind": "brief",
     "headline": "Cells swap barcodes to reveal who their neighbours are",
     "dek": "match-seq turns cell-cell proximity into sequenceable information, enabling CRISPR screens on tumour-immune interactions.",
     "body": [
      "match-seq uses virus-like particles to ferry barcoded mRNAs from cells to their neighbours, so spatial relationships survive tissue dissociation and can be read out by sequencing. Coupled to CRISPR screens in a mouse tumour, it flagged deletions that recruit distinct effector arms - Tgfb1 loss engaging T cells and macrophages, Nectin3 loss NK cells."
     ],
     "tags": [
      "CRISPR screens",
      "spatial biology",
      "tumour immunology"
     ],
     "source": {
      "title": "In vivo intercellular CRISPR screens using viral proximity barcoding reveal regulators of tumor-immune interactions",
      "authors": "Du et al.",
      "venue": "bioRxiv",
      "date": "2026-09-18",
      "doi": "10.64898/2026.09.16.752238",
      "pmid": "42779810",
      "url": "https://doi.org/10.64898/2026.09.16.752238",
      "peerReviewed": false
     }
    },
    {
     "kind": "brief",
     "headline": "Your single-cell model may be grading its own homework",
     "dek": "Random train-test splits leak labels between related cells, sometimes enough to reverse a clinical conclusion.",
     "body": [
      "Cells are not independent: clones, patients and batches share labels, so a random train-test split lets a model score well by recognising a sibling. This preprint quantifies the risk before training using two measures, exposure and retrievability, and reports one patient cohort where the inflation was enough to overturn a clinical conclusion."
     ],
     "tags": [
      "machine learning",
      "benchmarking",
      "single-cell"
     ],
     "source": {
      "title": "Cell-level random splits leak group-owned answers in single-cell benchmarks",
      "authors": "Cang et al.",
      "venue": "bioRxiv",
      "date": "2026-09-15",
      "doi": "10.64898/2026.09.09.750484",
      "pmid": "42780116",
      "url": "https://doi.org/10.64898/2026.09.09.750484",
      "peerReviewed": false
     }
    }
   ]
  },
  "health": {
   "stories": [
    {
     "kind": "lead",
     "headline": "A blood test for many cancers fails its first big trial",
     "dek": "In England's 142,000-person NHS-Galleri trial, annual multicancer screening did not reduce late-stage diagnoses, though a hint of fewer stage IV cancers keeps the question open.",
     "body": [
      "The promise of multicancer early-detection tests is simple: a single blood draw that spots tumours from circulating DNA before they spread. The first large randomised test of that promise, published in the New England Journal of Medicine, has come back mostly negative.",
      "Researchers led by Peter Sasieni of Queen Mary University of London enrolled 142,250 people aged 50 to 77 in England, collecting blood at up to three annual visits. Half had their samples analysed with the Grail test; the other half had samples banked, untested. The main question was whether screening would lower the rate of stage III or IV disease across 12 prespecified cancer types. After three rounds and at least a year of further follow-up, it did not: the incidence rate ratio was 1.03, with a confidence interval of 0.92 to 1.14.",
      "There was a flicker of something. For stage IV cancers alone, a key secondary endpoint, the ratio was 0.86, with an upper confidence bound sitting right at 1.00. That is suggestive, not conclusive, and the authors call for longer follow-up to see whether the gap widens or evaporates. Harms were few: fewer than 1% of participants reported trial-related adverse events, none serious.",
      "The result lands at a sensitive moment for a field that has attracted heavy investment and enthusiastic marketing. Shifting diagnoses from late to early stage is widely seen as the minimum a screening test must achieve before anyone can hope it will reduce cancer deaths. On this trial's primary yardstick, that bar was not cleared."
     ],
     "whyItMatters": "This is the first large randomised evidence on whether a multicancer blood test changes stage at diagnosis, the outcome most likely to translate into mortality benefit. Health systems weighing adoption now have a sobering benchmark.",
     "caveats": "Follow-up is still short, and the stage IV signal is a secondary endpoint at the edge of significance. The trial was funded by Grail, the test's maker, and tested one assay in one country.",
     "tags": [
      "cancer screening",
      "liquid biopsy",
      "randomised trial"
     ],
     "source": {
      "title": "Effect of Screening with Multicancer Early-Detection Test on Late-Stage Cancer Diagnosis.",
      "authors": "Sasieni et al.",
      "venue": "The New England Journal of Medicine",
      "date": "2026-09-22",
      "doi": "10.1056/NEJMoa2505723",
      "pmid": "42776074",
      "url": "https://doi.org/10.1056/NEJMoa2505723",
      "peerReviewed": true
     },
     "figure": {
      "title": "How the NHS-Galleri trial worked",
      "caption": "a, Trial population and randomisation. b, Screening schedule. c, Main result: no reduction in stage III–IV cancer; a possible reduction in stage IV that needs longer follow-up. Lower confidence bound for stage IV not reported in the summary. Data: Sasieni et al., NEJM, 2026.",
      "steps": [
       "142,250 people aged 50–77 in England gave blood at up to three yearly visits.",
       "They were randomised 1:1. One arm's samples were run through the Grail multicancer test; the other arm's were stored untested.",
       "After three rounds and a further year of follow-up, stage III–IV cancer rates were no different (ratio 1.03, CI 0.92–1.14). Stage IV alone hinted at a benefit (0.86, upper bound 1.00)."
      ],
      "svg": "<svg viewBox=\"0 0 680 312\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"a, 142,250 adults randomised 1:1 to screening or control. b, three yearly blood draws then at least a year of follow-up. c, forest plot: stage III–IV rate ratio 1.03 (0.92–1.14); stage IV 0.86, upper bound 1.00.\"> <g data-step=\"1\"> <text x=\"0\" y=\"16\" class=\"p-l\">a</text><text x=\"18\" y=\"16\" class=\"t-b\">142,250 adults aged 50–77, England, randomised 1:1</text> <rect x=\"18\" y=\"30\" width=\"321\" height=\"20\" class=\"f-a\"/><rect x=\"341\" y=\"30\" width=\"321\" height=\"20\" class=\"f-m\"/> <text x=\"18\" y=\"68\" class=\"t-s\"><tspan class=\"t-b t-a\">Screening</tspan>  blood analysed with the Grail test</text> <text x=\"662\" y=\"68\" text-anchor=\"end\" class=\"t-s\"><tspan class=\"t-b\">Control</tspan>  blood banked, untested</text> </g> <g data-step=\"2\"> <text x=\"0\" y=\"106\" class=\"p-l\">b</text><text x=\"18\" y=\"106\" class=\"t-b\">Three yearly blood draws, then at least a year of follow-up</text> <line x1=\"18\" y1=\"138\" x2=\"662\" y2=\"138\" class=\"ln-m\"/> <circle cx=\"70\" cy=\"138\" r=\"5\" class=\"f-ink\"/><circle cx=\"210\" cy=\"138\" r=\"5\" class=\"f-ink\"/><circle cx=\"350\" cy=\"138\" r=\"5\" class=\"f-ink\"/> <line x1=\"350\" y1=\"138\" x2=\"580\" y2=\"138\" class=\"ln-a\"/><line x1=\"580\" y1=\"131\" x2=\"580\" y2=\"145\" class=\"ln-a\"/> <text x=\"70\" y=\"160\" text-anchor=\"middle\" class=\"t-s\">draw 1</text><text x=\"210\" y=\"160\" text-anchor=\"middle\" class=\"t-s\">draw 2</text><text x=\"350\" y=\"160\" text-anchor=\"middle\" class=\"t-s\">draw 3</text> <text x=\"465\" y=\"128\" text-anchor=\"middle\" class=\"t-s t-a\">follow-up ≥ 1 year</text><text x=\"580\" y=\"160\" text-anchor=\"middle\" class=\"t-s\">stage at diagnosis</text> </g> <g data-step=\"3\"> <text x=\"0\" y=\"196\" class=\"p-l\">c</text><text x=\"18\" y=\"196\" class=\"t-b\">Incidence rate ratio, screening vs control</text> <text x=\"445\" y=\"216\" text-anchor=\"end\" class=\"t-s t-m\">← fewer if screened</text><text x=\"455\" y=\"216\" class=\"t-s t-m\">more if screened →</text> <line x1=\"450\" y1=\"222\" x2=\"450\" y2=\"278\" class=\"ln-d\"/> <text x=\"18\" y=\"238\" class=\"t-s\">Stage III–IV, 12 cancers <tspan class=\"t-m\">(primary)</tspan></text> <line x1=\"410\" y1=\"234\" x2=\"520\" y2=\"234\" class=\"ln\"/><line x1=\"410\" y1=\"229\" x2=\"410\" y2=\"239\" class=\"ln\"/><line x1=\"520\" y1=\"229\" x2=\"520\" y2=\"239\" class=\"ln\"/> <rect x=\"460\" y=\"229\" width=\"10\" height=\"10\" class=\"f-ink\"/><text x=\"530\" y=\"238\" class=\"t-s t-b\">1.03 (0.92–1.14)</text> <text x=\"18\" y=\"266\" class=\"t-s\">Stage IV only <tspan class=\"t-m\">(secondary)</tspan></text> <line x1=\"350\" y1=\"262\" x2=\"380\" y2=\"262\" class=\"ln-d\"/><line x1=\"380\" y1=\"262\" x2=\"450\" y2=\"262\" class=\"ln-a\"/><line x1=\"450\" y1=\"257\" x2=\"450\" y2=\"267\" class=\"ln-a\"/> <rect x=\"375\" y=\"257\" width=\"10\" height=\"10\" class=\"f-a\"/><text x=\"460\" y=\"266\" class=\"t-s t-a t-b\">0.86 (upper bound 1.00)</text> <line x1=\"300\" y1=\"282\" x2=\"600\" y2=\"282\" class=\"ln\"/> <line x1=\"300\" y1=\"282\" x2=\"300\" y2=\"287\" class=\"ln\"/><line x1=\"375\" y1=\"282\" x2=\"375\" y2=\"287\" class=\"ln\"/><line x1=\"450\" y1=\"282\" x2=\"450\" y2=\"287\" class=\"ln\"/><line x1=\"525\" y1=\"282\" x2=\"525\" y2=\"287\" class=\"ln\"/><line x1=\"600\" y1=\"282\" x2=\"600\" y2=\"287\" class=\"ln\"/> <text x=\"300\" y=\"302\" text-anchor=\"middle\" class=\"t-s\">0.70</text><text x=\"375\" y=\"302\" text-anchor=\"middle\" class=\"t-s\">0.85</text><text x=\"450\" y=\"302\" text-anchor=\"middle\" class=\"t-s\">1.00</text><text x=\"525\" y=\"302\" text-anchor=\"middle\" class=\"t-s\">1.15</text><text x=\"600\" y=\"302\" text-anchor=\"middle\" class=\"t-s\">1.30</text> </g></svg>"
     }
    },
    {
     "kind": "feature",
     "headline": "Immunotherapy displaces toxic chemotherapy for children with leukaemia",
     "dek": "Swapping two chemotherapy cycles for the bispecific antibody blinatumomab raised four-year event-free survival in high-risk childhood B-cell leukaemia, with far fewer infections.",
     "body": [
      "In the AIEOP-BFM ALL 2017 trial, 709 children with newly diagnosed high-risk B-cell acute lymphoblastic leukaemia were randomised after consolidation to two cycles of blinatumomab, which directs T cells against CD19, or two cycles of standard chemotherapy. At a planned interim analysis, after a median of 2.9 years, estimated four-year event-free survival was 83.0% with blinatumomab versus 70.3% with chemotherapy, a hazard ratio of 0.51.",
      "The antibody was also gentler in most respects. Treatment-related infections struck 23.9% of the blinatumomab group against 69.4% of controls, and life-threatening adverse events were rarer (0.5% versus 4.7%). The trade-off was neurotoxicity, reported in 12.0% of blinatumomab recipients compared with 3.2% on chemotherapy; serious cytokine release syndrome was uncommon."
     ],
     "whyItMatters": "The result supports replacing some of the most toxic parts of paediatric leukaemia treatment with a targeted immunotherapy that both works better and causes fewer infections.",
     "caveats": "These are interim results with under three years of median follow-up, and the higher rate of neurotoxic events needs longer-term scrutiny.",
     "tags": [
      "paediatric oncology",
      "leukaemia",
      "immunotherapy"
     ],
     "source": {
      "title": "Blinatumomab for Replacing Chemotherapy in Pediatric Acute Lymphoblastic Leukemia.",
      "authors": "Schrappe et al.",
      "venue": "The New England Journal of Medicine",
      "date": "2026-09-17",
      "doi": "10.1056/NEJMoa2604166",
      "pmid": "42748428",
      "url": "https://doi.org/10.1056/NEJMoa2604166",
      "peerReviewed": true
     },
     "figure": {
      "title": "Blinatumomab in high-risk childhood leukaemia",
      "caption": "a, Trial design: after consolidation, 709 children were randomised to two cycles of blinatumomab or two of standard chemotherapy (schematic; cycle lengths not to scale). b, Estimated four-year event-free survival at a planned interim analysis; hazard ratio 0.51. c, Treatment-related infections, life-threatening adverse events and neurotoxicity. Interim results; neurotoxicity needs longer follow-up. Data: Schrappe et al., NEJM, 2026.",
      "steps": [
       "In AIEOP-BFM ALL 2017, 709 children with high-risk B-cell leukaemia were randomised after consolidation to two cycles of blinatumomab or of chemotherapy.",
       "At interim analysis (median 2.9 years), estimated four-year event-free survival was 83.0% with blinatumomab versus 70.3% with chemotherapy (HR 0.51).",
       "Infections (23.9% vs 69.4%) and life-threatening events (0.5% vs 4.7%) were rarer on blinatumomab, but neurotoxicity was commoner (12.0% vs 3.2%)."
      ],
      "svg": "<svg viewBox=\"0 0 680 310\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"a, 709 children randomised to two cycles of blinatumomab or chemotherapy. b, four-year event-free survival 83.0% vs 70.3%, HR 0.51. c, infections 23.9% vs 69.4%; life-threatening events 0.5% vs 4.7%; neurotoxicity 12.0% vs 3.2%.\"><g data-step=\"1\"><text x=\"0\" y=\"16\" class=\"p-l\">a</text><text x=\"18\" y=\"16\" class=\"t-b\">709 children with high-risk B-cell ALL, randomised after consolidation</text><text x=\"18\" y=\"44\" class=\"t-s\"><tspan class=\"t-b\">Blinatumomab</tspan></text><path d=\"M182,34 h60 v12 h-60 z M248,34 h60 v12 h-60 z\" class=\"f-ink\"/><text x=\"320\" y=\"44\" class=\"t-s\">2 cycles <tspan class=\"t-m\">· antibody directing T cells against CD19</tspan></text><text x=\"18\" y=\"66\" class=\"t-s\"><tspan class=\"t-b\">Chemotherapy</tspan></text><path d=\"M182,56 h60 v12 h-60 z M248,56 h60 v12 h-60 z\" class=\"f-m\"/><text x=\"320\" y=\"66\" class=\"t-s\">2 cycles <tspan class=\"t-m\">· standard chemotherapy</tspan></text></g><g data-step=\"2\"><text x=\"0\" y=\"100\" class=\"p-l\">b</text><text x=\"18\" y=\"100\" class=\"t-b\">Estimated four-year event-free survival <tspan class=\"t-m\">(interim, median 2.9 years)</tspan></text><text x=\"18\" y=\"121\" class=\"t-s\">Blinatumomab</text><rect x=\"182\" y=\"110\" width=\"265.6\" height=\"14\" class=\"f-a\"/><text x=\"453.6\" y=\"121\" class=\"t-s t-b t-a\">83.0%</text><text x=\"18\" y=\"141\" class=\"t-s\">Chemotherapy</text><rect x=\"182\" y=\"130\" width=\"224.96\" height=\"14\" class=\"f-m\"/><text x=\"412.96\" y=\"141\" class=\"t-s t-b\">70.3%</text><text x=\"520\" y=\"131\" class=\"t-b t-a\">HR 0.51</text><line x1=\"182\" y1=\"152\" x2=\"502\" y2=\"152\" class=\"ln\"/><path d=\"M182,152 v5 M342,152 v5 M502,152 v5\" class=\"ln\"/><text x=\"182\" y=\"169\" text-anchor=\"middle\" class=\"t-s\">0</text><text x=\"342\" y=\"169\" text-anchor=\"middle\" class=\"t-s\">50</text><text x=\"502\" y=\"169\" text-anchor=\"middle\" class=\"t-s\">100</text><text x=\"18\" y=\"169\" class=\"t-s t-m\">% of children</text></g><g data-step=\"3\"><text x=\"0\" y=\"202\" class=\"p-l\">c</text><text x=\"18\" y=\"202\" class=\"t-b\">Adverse events</text><circle cx=\"460\" cy=\"198\" r=\"4\" class=\"f-ink\"/><text x=\"469\" y=\"202\" class=\"t-s\">blinatumomab</text><circle cx=\"570\" cy=\"198\" r=\"4\" class=\"ln\"/><text x=\"579\" y=\"202\" class=\"t-s\">chemotherapy</text><text x=\"18\" y=\"226\" class=\"t-s\">Infections</text><line x1=\"277.6\" y1=\"222\" x2=\"459.6\" y2=\"222\" class=\"ln\"/><circle cx=\"459.6\" cy=\"222\" r=\"4\" class=\"ln\"/><circle cx=\"277.6\" cy=\"222\" r=\"4\" class=\"f-ink\"/><text x=\"520\" y=\"226\" class=\"t-s\"><tspan class=\"t-b\">23.9%</tspan> vs 69.4%</text><text x=\"18\" y=\"248\" class=\"t-s\">Life-threatening</text><line x1=\"184\" y1=\"244\" x2=\"200.8\" y2=\"244\" class=\"ln\"/><circle cx=\"200.8\" cy=\"244\" r=\"4\" class=\"ln\"/><circle cx=\"184\" cy=\"244\" r=\"4\" class=\"f-ink\"/><text x=\"520\" y=\"248\" class=\"t-s\"><tspan class=\"t-b\">0.5%</tspan> vs 4.7%</text><text x=\"18\" y=\"270\" class=\"t-s\">Neurotoxicity</text><line x1=\"194.8\" y1=\"266\" x2=\"230\" y2=\"266\" class=\"ln\"/><circle cx=\"194.8\" cy=\"266\" r=\"4\" class=\"ln\"/><circle cx=\"230\" cy=\"266\" r=\"4\" class=\"f-ink\"/><text x=\"520\" y=\"270\" class=\"t-s\"><tspan class=\"t-b\">12.0%</tspan> vs 3.2%</text><line x1=\"182\" y1=\"284\" x2=\"502\" y2=\"284\" class=\"ln\"/><path d=\"M182,284 v5 M262,284 v5 M342,284 v5 M422,284 v5 M502,284 v5\" class=\"ln\"/><text x=\"182\" y=\"301\" text-anchor=\"middle\" class=\"t-s\">0</text><text x=\"262\" y=\"301\" text-anchor=\"middle\" class=\"t-s\">20</text><text x=\"342\" y=\"301\" text-anchor=\"middle\" class=\"t-s\">40</text><text x=\"422\" y=\"301\" text-anchor=\"middle\" class=\"t-s\">60</text><text x=\"502\" y=\"301\" text-anchor=\"middle\" class=\"t-s\">80</text><text x=\"18\" y=\"301\" class=\"t-s t-m\">% of patients</text></g></svg>"
     }
    },
    {
     "kind": "feature",
     "headline": "A B7-H3 drug conjugate extends survival in relapsed lung cancer",
     "dek": "In a phase 3 trial, tambotatug pelitecan beat topotecan on overall survival, progression and response in small-cell lung cancer that had returned after platinum chemotherapy.",
     "body": [
      "Small-cell lung cancer that relapses after platinum chemotherapy has long had few good options; topotecan has been a standard for decades. In the TAISHAN-302 trial, 451 patients were randomised to topotecan or tambotatug pelitecan, an antibody-drug conjugate aimed at the checkpoint protein B7-H3. At a prespecified interim analysis, median overall survival was 13.3 months with the conjugate against 9.4 months with topotecan, a hazard ratio for death of 0.46.",
      "Other measures moved the same way. Median progression-free survival was 7.4 versus 2.8 months, and confirmed tumour responses occurred in 59.1% of patients on the new drug versus 9.7% on topotecan. Unusually for a head-to-head against chemotherapy, severe (grade 3 or higher) adverse events were less common with the conjugate: 55.4% versus 77.9%."
     ],
     "whyItMatters": "B7-H3 is emerging as a major target in small-cell lung cancer, and this is phase 3 evidence of a survival gain over the long-standing second-line standard.",
     "caveats": "The trial was open-label, the analysis is interim, response was investigator-assessed, and it was conducted by Chinese investigators with industry co-funding; generalisability to other populations is untested.",
     "tags": [
      "lung cancer",
      "antibody-drug conjugate",
      "phase 3"
     ],
     "source": {
      "title": "Tambotatug Pelitecan in Small-Cell Lung Cancer after Platinum-Based Therapy.",
      "authors": "Zhao et al.",
      "venue": "The New England Journal of Medicine",
      "date": "2026-09-12",
      "doi": "10.1056/NEJMoa2610229",
      "pmid": "42734213",
      "url": "https://doi.org/10.1056/NEJMoa2610229",
      "peerReviewed": true
     },
     "figure": {
      "title": "B7-H3 conjugate versus topotecan",
      "caption": "a, Trial design of TAISHAN-302 in small-cell lung cancer relapsed after platinum chemotherapy (schematic). b, Median overall and progression-free survival at a prespecified interim analysis; hazard ratio for death 0.46. c, Confirmed tumour response (investigator-assessed) and grade 3 or higher adverse events. Open-label, interim. Data: Zhao et al., NEJM, 2026.",
      "steps": [
       "In TAISHAN-302, 451 patients with relapsed small-cell lung cancer were randomised to tambotatug pelitecan, a B7-H3-directed conjugate, or topotecan.",
       "At interim analysis, median overall survival was 13.3 vs 9.4 months (HR for death 0.46) and progression-free survival 7.4 vs 2.8 months.",
       "Confirmed responses were 59.1% vs 9.7%, and grade 3 or higher adverse events were less common with the conjugate: 55.4% vs 77.9%."
      ],
      "svg": "<svg viewBox=\"0 0 680 340\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"a, 451 patients randomised to tambotatug pelitecan or topotecan. b, median overall survival 13.3 vs 9.4 months, HR 0.46; progression-free survival 7.4 vs 2.8 months. c, confirmed response 59.1% vs 9.7%; grade 3 or higher adverse events 55.4% vs 77.9%.\"><g data-step=\"1\"><text x=\"0\" y=\"16\" class=\"p-l\">a</text><text x=\"18\" y=\"16\" class=\"t-b\">451 patients, small-cell lung cancer relapsed after platinum, randomised</text><text x=\"18\" y=\"42\" class=\"t-s\"><tspan class=\"t-b\">Tambotatug pelitecan</tspan></text><path d=\"M182,38 l8,-6 l8,6 l-8,6 z\" class=\"f-ink\"/><circle cx=\"204\" cy=\"38\" r=\"3\" class=\"f-ink\"/><text x=\"216\" y=\"42\" class=\"t-s\">antibody-drug conjugate aimed at B7-H3</text><text x=\"18\" y=\"60\" class=\"t-s\"><tspan class=\"t-b\">Topotecan</tspan></text><rect x=\"184\" y=\"51\" width=\"12\" height=\"12\" class=\"f-m\"/><text x=\"216\" y=\"60\" class=\"t-s\">chemotherapy <tspan class=\"t-m\">· a standard for decades</tspan></text></g><g data-step=\"2\"><text x=\"0\" y=\"86\" class=\"p-l\">b</text><text x=\"18\" y=\"86\" class=\"t-b\">Median survival, months</text><rect x=\"440\" y=\"77\" width=\"10\" height=\"10\" class=\"f-ink\"/><text x=\"454\" y=\"86\" class=\"t-s\">tambotatug pelitecan</text><rect x=\"592\" y=\"77\" width=\"10\" height=\"10\" class=\"f-m\"/><text x=\"606\" y=\"86\" class=\"t-s\">topotecan</text><text x=\"18\" y=\"108\" class=\"t-s\">Overall</text><text x=\"18\" y=\"126\" class=\"t-s\">survival</text><rect x=\"182\" y=\"97\" width=\"266\" height=\"12\" class=\"f-a\"/><text x=\"454\" y=\"108\" class=\"t-s t-b t-a\">13.3</text><rect x=\"182\" y=\"115\" width=\"188\" height=\"12\" class=\"f-m\"/><text x=\"376\" y=\"126\" class=\"t-s\">9.4</text><text x=\"18\" y=\"152\" class=\"t-s\">Progression-free</text><text x=\"18\" y=\"170\" class=\"t-s\">survival</text><rect x=\"182\" y=\"141\" width=\"148\" height=\"12\" class=\"f-ink\"/><text x=\"336\" y=\"152\" class=\"t-s t-b\">7.4</text><rect x=\"182\" y=\"159\" width=\"56\" height=\"12\" class=\"f-m\"/><text x=\"244\" y=\"170\" class=\"t-s\">2.8</text><text x=\"520\" y=\"117\" class=\"t-b t-a\">HR 0.46</text><line x1=\"182\" y1=\"180\" x2=\"482\" y2=\"180\" class=\"ln\"/><path d=\"M182,180 v5 M282,180 v5 M382,180 v5 M482,180 v5\" class=\"ln\"/><text x=\"182\" y=\"197\" text-anchor=\"middle\" class=\"t-s\">0</text><text x=\"282\" y=\"197\" text-anchor=\"middle\" class=\"t-s\">5</text><text x=\"382\" y=\"197\" text-anchor=\"middle\" class=\"t-s\">10</text><text x=\"482\" y=\"197\" text-anchor=\"middle\" class=\"t-s\">15</text><text x=\"18\" y=\"197\" class=\"t-s t-m\">months</text></g><g data-step=\"3\"><text x=\"0\" y=\"224\" class=\"p-l\">c</text><text x=\"18\" y=\"224\" class=\"t-b\">Tumour response and severe adverse events</text><text x=\"18\" y=\"246\" class=\"t-s\">Confirmed</text><text x=\"18\" y=\"264\" class=\"t-s\">response</text><rect x=\"182\" y=\"235\" width=\"177.3\" height=\"12\" class=\"f-ink\"/><text x=\"365.3\" y=\"246\" class=\"t-s t-b\">59.1</text><rect x=\"182\" y=\"253\" width=\"29.1\" height=\"12\" class=\"f-m\"/><text x=\"217.1\" y=\"264\" class=\"t-s\">9.7</text><text x=\"520\" y=\"255\" class=\"t-s t-m\">investigator-assessed</text><text x=\"18\" y=\"286\" class=\"t-s\">Grade ≥3</text><text x=\"18\" y=\"304\" class=\"t-s\">adverse events</text><rect x=\"182\" y=\"275\" width=\"166.2\" height=\"12\" class=\"f-ink\"/><text x=\"354.2\" y=\"286\" class=\"t-s t-b\">55.4</text><rect x=\"182\" y=\"293\" width=\"233.7\" height=\"12\" class=\"f-m\"/><text x=\"421.7\" y=\"304\" class=\"t-s\">77.9</text><line x1=\"182\" y1=\"314\" x2=\"482\" y2=\"314\" class=\"ln\"/><path d=\"M182,314 v5 M257,314 v5 M332,314 v5 M407,314 v5 M482,314 v5\" class=\"ln\"/><text x=\"182\" y=\"331\" text-anchor=\"middle\" class=\"t-s\">0</text><text x=\"257\" y=\"331\" text-anchor=\"middle\" class=\"t-s\">25</text><text x=\"332\" y=\"331\" text-anchor=\"middle\" class=\"t-s\">50</text><text x=\"407\" y=\"331\" text-anchor=\"middle\" class=\"t-s\">75</text><text x=\"482\" y=\"331\" text-anchor=\"middle\" class=\"t-s\">100</text><text x=\"18\" y=\"331\" class=\"t-s t-m\">% of patients</text></g></svg>"
     }
    },
    {
     "kind": "feature",
     "headline": "Injections every eight weeks outperform daily pills for African teenagers with HIV",
     "dek": "Long-acting cabotegravir-rilpivirine proved superior to daily oral therapy at keeping virus suppressed in adolescents in Kenya, South Africa, Uganda and Zimbabwe.",
     "body": [
      "Adolescents living with HIV fare worse on treatment than other age groups, often because daily pills are hard to sustain. The LATA trial randomised 476 virally suppressed 12- to 19-year-olds, nearly all infected at birth and with a median of almost 12 years on therapy, to intramuscular cabotegravir-rilpivirine every eight weeks or to the standard daily dolutegravir-based pill.",
      "By week 96, confirmed viral rebound had occurred in two participants on injections (an estimated 0.9%) versus 15 on pills (6.4%). The injectable regimen met the non-inferiority criterion and went on to show superiority. Serious and severe adverse events were broadly similar between groups; there was one treatment-related serious hypersensitivity reaction, and a handful of participants stopped injections for various reasons."
     ],
     "whyItMatters": "The trial provides randomised evidence from sub-Saharan Africa, where most adolescents with HIV live, that long-acting therapy can beat oral treatment for this age group.",
     "caveats": "The trial was open-label and enrolled only adolescents already suppressed with no prior treatment failure; cost and delivery at scale were not addressed.",
     "tags": [
      "HIV",
      "adolescent health",
      "long-acting therapy"
     ],
     "source": {
      "title": "Switch to injectable cabotegravir-rilpivirine given every 8 weeks in adolescents living with HIV with virological suppression in sub-Saharan Africa (LATA): a randomised, open-label, multicentre, 96-week non-inferiority trial.",
      "authors": "Bwakura-Dangarembizi et al.",
      "venue": "The Lancet",
      "date": "2026-09-17",
      "doi": "10.1016/S0140-6736(26)01537-0",
      "pmid": "42753775",
      "url": "https://doi.org/10.1016/S0140-6736(26)01537-0",
      "peerReviewed": true
     },
     "figure": {
      "title": "8-weekly HIV injections vs daily pills",
      "caption": "a, LATA trial population in sub-Saharan Africa. b, Randomised regimens: intramuscular cabotegravir-rilpivirine every eight weeks or a daily dolutegravir-based pill (schematic). c, Confirmed viral rebound by week 96 (estimated percentages); serious and severe adverse events were broadly similar. Open-label. Data: Bwakura-Dangarembizi et al., The Lancet, 2026.",
      "steps": [
       "LATA enrolled 476 virally suppressed 12- to 19-year-olds in Kenya, South Africa, Uganda and Zimbabwe, with a median of almost 12 years on therapy.",
       "They were randomised to cabotegravir-rilpivirine injections every eight weeks or to the standard daily dolutegravir-based pill.",
       "By week 96, virus rebounded in 2 on injections (0.9%) vs 15 on pills (6.4%): non-inferior, then superior, with similar serious side effects."
      ],
      "svg": "<svg viewBox=\"0 0 680 296\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"a, 476 virally suppressed adolescents aged 12 to 19 in four African countries. b, injections every 8 weeks versus a daily pill over 96 weeks. c, confirmed viral rebound 0.9% (2 participants) vs 6.4% (15).\"><g data-step=\"1\"><text x=\"0\" y=\"16\" class=\"p-l\">a</text><text x=\"18\" y=\"16\" class=\"t-b\">476 adolescents with HIV aged 12–19, virally suppressed, randomised</text><text x=\"18\" y=\"38\" class=\"t-s\">Kenya, South Africa, Uganda and Zimbabwe <tspan class=\"t-m\">· median of almost 12 years on therapy</tspan></text></g><g data-step=\"2\"><text x=\"0\" y=\"72\" class=\"p-l\">b</text><text x=\"18\" y=\"72\" class=\"t-b\">Dosing over 96 weeks <tspan class=\"t-m\">(schematic)</tspan></text><text x=\"18\" y=\"94\" class=\"t-s\"><tspan class=\"t-b\">Injection</tspan> every 8 weeks</text><text x=\"18\" y=\"112\" class=\"t-s t-m\">cabotegravir-rilpivirine</text><line x1=\"182\" y1=\"95\" x2=\"642.8\" y2=\"95\" class=\"ln-m\"/><path d=\"M182,88 v14 M220.4,88 v14 M258.8,88 v14 M297.2,88 v14 M335.6,88 v14 M374,88 v14 M412.4,88 v14 M450.8,88 v14 M489.2,88 v14 M527.6,88 v14 M566,88 v14 M604.4,88 v14 M642.8,88 v14\" class=\"ln\"/><text x=\"18\" y=\"136\" class=\"t-s\"><tspan class=\"t-b\">Daily pill</tspan></text><text x=\"18\" y=\"154\" class=\"t-s t-m\">dolutegravir-based</text><rect x=\"182\" y=\"127\" width=\"460.8\" height=\"10\" class=\"f-m\"/><line x1=\"182\" y1=\"166\" x2=\"642.8\" y2=\"166\" class=\"ln\"/><path d=\"M182,166 v5 M297.2,166 v5 M412.4,166 v5 M527.6,166 v5 M642.8,166 v5\" class=\"ln\"/><text x=\"182\" y=\"183\" text-anchor=\"middle\" class=\"t-s\">0</text><text x=\"297.2\" y=\"183\" text-anchor=\"middle\" class=\"t-s\">24</text><text x=\"412.4\" y=\"183\" text-anchor=\"middle\" class=\"t-s\">48</text><text x=\"527.6\" y=\"183\" text-anchor=\"middle\" class=\"t-s\">72</text><text x=\"642.8\" y=\"183\" text-anchor=\"middle\" class=\"t-s\">96</text><text x=\"18\" y=\"183\" class=\"t-s t-m\">week</text></g><g data-step=\"3\"><text x=\"0\" y=\"214\" class=\"p-l\">c</text><text x=\"18\" y=\"214\" class=\"t-b\">Confirmed viral rebound by week 96</text><text x=\"18\" y=\"236\" class=\"t-s\">Injections</text><rect x=\"182\" y=\"225\" width=\"36\" height=\"14\" class=\"f-a\"/><text x=\"224\" y=\"236\" class=\"t-s\"><tspan class=\"t-b t-a\">0.9%</tspan><tspan class=\"t-m\">  2 participants</tspan></text><text x=\"18\" y=\"256\" class=\"t-s\">Daily pill</text><rect x=\"182\" y=\"245\" width=\"256\" height=\"14\" class=\"f-m\"/><text x=\"444\" y=\"256\" class=\"t-s\"><tspan class=\"t-b\">6.4%</tspan><tspan class=\"t-m\">  15 participants</tspan></text><text x=\"662\" y=\"214\" text-anchor=\"end\" class=\"t-s t-b t-a\">non-inferior, then superior</text><line x1=\"182\" y1=\"268\" x2=\"502\" y2=\"268\" class=\"ln\"/><path d=\"M182,268 v5 M262,268 v5 M342,268 v5 M422,268 v5 M502,268 v5\" class=\"ln\"/><text x=\"182\" y=\"285\" text-anchor=\"middle\" class=\"t-s\">0</text><text x=\"262\" y=\"285\" text-anchor=\"middle\" class=\"t-s\">2</text><text x=\"342\" y=\"285\" text-anchor=\"middle\" class=\"t-s\">4</text><text x=\"422\" y=\"285\" text-anchor=\"middle\" class=\"t-s\">6</text><text x=\"502\" y=\"285\" text-anchor=\"middle\" class=\"t-s\">8</text><text x=\"18\" y=\"285\" class=\"t-s t-m\">% of participants</text></g></svg>"
     }
    },
    {
     "kind": "brief",
     "headline": "Waiting five years for a follow-up colonoscopy looks safe",
     "dek": "An interim analysis of the European EPoS II trial finds later surveillance after high-risk adenoma removal is non-inferior to the guideline three years.",
     "body": [
      "Among 10,799 patients with high-risk adenomas across eight European countries, five-year colorectal cancer incidence was 0.77% when the first surveillance colonoscopy came at five years and 0.82% when it came at three, meeting the trial's non-inferiority margin. Cancer stage looked similar. The final ten-year analysis is still to come."
     ],
     "tags": [
      "colorectal cancer",
      "screening"
     ],
     "source": {
      "title": "Colonoscopy Intervals and Colorectal Cancer Incidence after Adenoma Removal.",
      "authors": "Jover et al.",
      "venue": "The New England Journal of Medicine",
      "date": "2026-09-17",
      "doi": "10.1056/NEJMoa2603816",
      "pmid": "42748427",
      "url": "https://doi.org/10.1056/NEJMoa2603816",
      "peerReviewed": true
     }
    },
    {
     "kind": "brief",
     "headline": "A week of antibiotics suffices after bone-infection surgery",
     "dek": "When local antibiotics are implanted during surgery, short systemic courses match long ones.",
     "body": [
      "In the SOLARIO trial of 500 adults operated on for orthopaedic infection with an implanted local-antibiotic carrier, seven days or less of systemic antibiotics was non-inferior to four weeks or more: treatment failure by 12 months was 11.1% versus 14.1%. Possible treatment-related symptoms by week six fell from 45.2% to 17.2% with the short course."
     ],
     "tags": [
      "infectious disease",
      "antibiotic stewardship"
     ],
     "source": {
      "title": "Short or Long Antibiotic Regimens in Orthopedics.",
      "authors": "McNally et al.",
      "venue": "The New England Journal of Medicine",
      "date": "2026-09-16",
      "doi": "10.1056/NEJMoa2506756",
      "pmid": "42748421",
      "url": "https://doi.org/10.1056/NEJMoa2506756",
      "peerReviewed": true
     }
    },
    {
     "kind": "brief",
     "headline": "Eating more eggs and peanuts in pregnancy does not prevent infant allergy",
     "dek": "An Australian trial of 2,137 high-risk pregnancies found no protective effect of a maternal allergen-rich diet.",
     "body": [
      "In the PrEggNut trial, women whose babies had a strong family history of allergy ate at least six eggs and 60 peanuts weekly, or a low-allergen diet, from mid-pregnancy through four months of breastfeeding. IgE-mediated egg or peanut allergy at age one affected 7.8% versus 8.4% of infants, a non-significant difference. Safety was similar."
     ],
     "tags": [
      "allergy",
      "maternal health"
     ],
     "source": {
      "title": "Trial of a Maternal Diet Rich in Eggs and Peanuts to Reduce Infant Allergy.",
      "authors": "Palmer et al.",
      "venue": "The New England Journal of Medicine",
      "date": "2026-09-17",
      "doi": "10.1056/NEJMoa2605659",
      "pmid": "42748429",
      "url": "https://doi.org/10.1056/NEJMoa2605659",
      "peerReviewed": true
     }
    },
    {
     "kind": "brief",
     "headline": "A would-be stroke neuroprotectant posts a positive phase 3",
     "dek": "Loberamisal, which targets PSD-95 signalling and alpha2-GABA-A receptors, improved 90-day recovery in a Chinese trial.",
     "body": [
      "In the LAIS trial of 998 patients with moderate ischaemic stroke treated within 48 hours, ten days of intravenous loberamisal raised the share reaching a near-normal outcome (modified Rankin 0-1) at 90 days to 69.7%, from 56.3% on placebo. Adverse events were similar. The authors say validation in broader populations is needed, a caution given neuroprotection's history of failed replications."
     ],
     "tags": [
      "stroke",
      "neurology",
      "neuroprotection"
     ],
     "source": {
      "title": "Loberamisal for Acute Ischemic Stroke: The LAIS Randomized Clinical Trial.",
      "authors": "Li et al.",
      "venue": "JAMA",
      "date": "2026-09-10",
      "doi": "10.1001/jama.2026.16557",
      "pmid": "42721021",
      "url": "https://doi.org/10.1001/jama.2026.16557",
      "peerReviewed": true
     }
    },
    {
     "kind": "brief",
     "headline": "Clot-buster before thrombectomy adds nothing in late basilar strokes",
     "dek": "The ATTENTION LATE trial finds tenecteplase does not improve outcomes 4.5 to 24 hours after basilar artery occlusion.",
     "body": [
      "Across 40 Chinese stroke centres, 330 patients with moderate-to-severe basilar artery occlusion were randomised to intravenous tenecteplase plus thrombectomy or thrombectomy alone. Functional independence at 90 days was 30% in both arms. Symptomatic brain haemorrhage (5% versus 4%) and mortality (40% versus 43%) were similar, so the drug offered no clear benefit in this late window."
     ],
     "tags": [
      "stroke",
      "thrombolysis"
     ],
     "source": {
      "title": "Tenecteplase Before Thrombectomy at 4.5 to 24 Hours for Basilar Artery Occlusion: The ATTENTION LATE Randomized Clinical Trial.",
      "authors": "Li et al.",
      "venue": "JAMA",
      "date": "2026-09-23",
      "doi": "10.1001/jama.2026.15496",
      "pmid": "42776543",
      "url": "https://doi.org/10.1001/jama.2026.15496",
      "peerReviewed": true
     }
    }
   ]
  }
 }
};
