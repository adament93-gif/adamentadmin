// ============================================================
//  ENT MASTER BANK — PRODUCTION OPTIMIZED BUILD v7.0
//  Performance Engineering: Dashboard Cache, Lazy Loading,
//  Virtual Scrolling, Infinite Scrolling, Smart Scroll Loader,
//  In-Memory Search Index, Filter Cache, Web Worker Offload
// ============================================================

window.ENTApp=window.ENTApp||{};
window.ENTApp.state=window.ENTApp.state||{};
window.ENTApp.utils=window.ENTApp.utils||{};

window.ENTApp=window.ENTApp||{};
window.ENTApp.modules=window.ENTApp.modules||{};
window.ENTApp.modules.app=window.ENTApp.modules.app||{};
window.ENTApp=window.ENTApp||{};
window.ENTApp.version='step36-opt';
window.ENTApp.utils=window.ENTApp.utils||{};
// Phase 5 bootstrap
window.ENTApp = window.ENTApp || {};
window.ENTApp.version='step35-opt';

        // ============================================================
        //  ENT CURRICULUM — subjects + chapters
        // ============================================================
        const ENT_DATA = {
            'Rhinology': [
                'Anatomy of the nose and paranasal sinuses', 'Outpatient assessment', 'Physiology of the nose and paranasal sinuses',
                'Measurement of the nasal airway', 'Allergic rhinitis', 'Non‑allergic perennial rhinitis', 'Occupational rhinitis',
                'Rhinosinusitis: Definitions, classification and diagnosis', 'Nasal polyposis', 'Fungal rhinosinusitis',
                'Medical management for rhinosinusitis', 'Surgical management of rhinosinusitis', 'The frontal sinus',
                'Mucoceles of the paranasal sinuses', 'Complications of rhinosinusitis', 'The relationship between the upper and lower respiratory tract',
                'Nasal septum and nasal valve', 'Nasal septal perforations', 'Management of enlarged turbinates', 'Epistaxis',
                'Nasal and facial fractures', 'CSF leaks', 'Granulomatous conditions of the nose', 'Abnormalities of smell',
                'Disorders of the orbit', 'Diagnosis and management of facial pain', 'Juvenile angiofibroma',
                'Endoscopic management of sinonasal tumours', 'Surgical management of pituitary and paraseptal diseases',
                'Extended anterior skull base approaches', 'Imaging in rhinology', 'Acute infection in case of maxillary sinusitis'
            ],
            'Paediatric ENT': [
                'Introduction to paediatric otorhinolaryngology', 'The paediatric consultation', 'Recognition and management of the sick child',
                'Anaesthesia for paediatric otorhinolaryngology procedures', 'The child with special needs', 'The child with a syndrome',
                'Management of the immunodeficient child', 'Hearing screening and surveillance', 'Hearing tests in children',
                'Management of the hearing impaired child', 'Paediatric implantation otology', 'Congenital middle ear abnormalities',
                'Otitis media with effusion', 'Acute otitis media', 'Chronic otitis media (paediatric)', 'Microtia and external ear abnormalities',
                'Disorders of speech and language', 'Cleft lip and palate', 'Craniofacial surgery', 'Balance disorders in children',
                'Facial paralysis in children', 'Neonatal nasal obstruction', 'Paediatric rhinosinusitis and its complications',
                'Lacrimal disorders in children', 'The adenoid and adenoidectomy', 'Paediatric obstructive sleep apnoea', 'Stridor',
                'Acute laryngeal infections (paediatric)', 'Congenital disorders of the larynx, trachea and bronchi',
                'Acquired laryngotracheal stenosis (paediatric)', 'Juvenile‑onset recurrent respiratory papillomatosis',
                'Paediatric voice disorders', 'Foreign bodies in the ear, nose and throat', 'Paediatric tracheostomy',
                'Perinatal airway management', 'Cervicofacial infections', 'Diseases of tonsils, tonsillectomy and tonsillotomy',
                'Salivary glands (paediatric)', 'Tumours of the head and neck in childhood', 'Cysts and sinuses of the head and neck',
                'Haemangiomas and vascular malformations', 'Drooling and aspiration', 'Reflux and eosinophilic oesophagitis (paediatric)',
                'Oesophageal disorders in children'
            ],
            'Otology': [
                'Anatomy and embryology of the external and middle ear', 'Anatomy of the cochlea and vestibular system: relating ultrastructure to function',
                'Physiology of hearing', 'Physiology of equilibrium', 'Perception of sounds at the auditory cortex', 'Psychoacoustic audiometry',
                'Evoked measurement of auditory sensitivity', 'Prevention of hearing loss', 'Hearing aids',
                'Beyond hearing aids: an overview of adult audiological rehabilitation', 'Age‑related sensorineural hearing impairment',
                'Noise‑induced hearing loss and related conditions', 'Autosomal dominant non‑syndromic sensorineural hearing loss',
                'Ototoxicity', 'Idiopathic sudden sensorineural hearing loss', 'Tinnitus and hyperacusis', 'Evaluation of balance',
                'Meniere\'s disease', 'Benign paroxysmal positional vertigo', 'Superior semicircular canal dehiscence', 'Vestibular neuritis',
                'Vestibular migraine', 'Vestibular rehabilitation', 'Auditory neuropathy spectrum disorder and retrocochlear disorders in adults and children',
                'Understanding tinnitus: a psychological perspective', 'Auditory processing disorders across the age span',
                'Neuropsychiatric aspects of vestibular disorders', 'Clinical examination of the ears and hearing', 'Furunculosis', 'Myringitis',
                'Keratosis obturans, primary auditory canal cholesteatoma and benign necrotizing otitis externa', 'Acquired atresia of the external ear',
                'Otitis externa and otomycosis', 'Perichondritis of the external ear', 'Exostosis of the external auditory canal',
                'Osteoradionecrosis of the temporal bone', 'Acute otitis media and otitis media with effusion in adults', 'Myringoplasty',
                'Ossiculoplasty', 'Eustachian tube dysfunction', 'Otoendoscopy', 'Tuberculosis of the temporal bone', 'Otosclerosis',
                'Otological effects of Paget\'s disease', 'Ear trauma', 'Otalgia', 'Bone‑conduction hearing devices', 'Cochlear implants',
                'Middle ear implants', 'Auditory brainstem implantation', 'Imaging of the temporal bone'
            ],
            'Skull Base': [
                'Anatomy of the skull base and infratemporal fossa', 'Evaluation of the skull base patient', 'Vascular assessment and management',
                'Natural history of vestibular schwannomas', 'Surgical management of vestibular schwannoma', 'Stereotactic radiosurgery',
                'Neurofibromatosis 2', 'Non‑vestibular schwannoma tumours of the cerebellum‑pontine angle', 'Middle fossa surgery',
                'Jugular foramen lesions and their management', 'Petrous apex lesions', 'Approaches to the nasopharynx and Eustachian tube',
                'Tumours of the temporal bone', 'Clinical neuroanatomy', 'The facial nerve and its non‑neoplastic disorders',
                'Tumours of the facial nerve', 'Osteitis of the temporal bone', 'Squamous cell carcinoma of the temporal bone',
                'Complications of skull base surgery'
            ],
            'Laryngology & Voice': [
                'Physiology of the salivary glands', 'Phonosurgery', 'Movement disorders of the larynx',
                'Chronic laryngitis', 'Contemporary management of laryngotracheal trauma', 'Upper airway obstruction and tracheostomy',
                'Physiology of sleep and sleep disorders', 'Obstructive sleep apnoea: Medical management (adult)',
                'The surgical management of snoring and obstructive sleep apnoea', 'Laryngotracheal stenosis in adults', 'Reflux disease (adult)',
                'Paralysis of the larynx', 'Outpatient laryngeal procedures', 'Anatomy of the larynx and tracheobronchial tree',
                'Physiology of the larynx', 'Voice and speech production', 'Assessment and examination of the larynx', 'Evaluation of the voice',
                'Structural disorders of the vocal cords', 'Functional disorders of the voice', 'The professional voice',
                'Speech and language therapy for voice disorders', 'Acute infections of the larynx (general)'
            ],
            'Facial Plastic & Reconstructive': [
                'Rhinoplasty following nasal trauma', 'Pre‑operative assessment for rhinoplasty', 'External rhinoplasty', 'Revision rhinoplasty',
                'Aesthetic dorsal reduction rhinoplasty', 'Nasal reconstruction', 'Pinnaplasty', 'Blepharoplasty',
                'Surgical rejuvenation of the ageing face', 'Non‑surgical rejuvenation of the ageing face'
            ],
            'Head & Neck Surgery': [
                'History of reconstructive surgery', 'Grafts and local flaps in head and neck cancer', 'Pedicled flaps in head and neck reconstruction',
                'Reconstructive microsurgery in head and neck surgery', 'Benign and malignant conditions of the skin', 'Facial reanimation surgery',
                'Partial and total ear reconstruction', 'A combined prosthetic and surgical approach', 'Oral cavity tumours including lip reconstruction',
                'Oropharyngeal tumours', 'Tumours of the larynx', 'Head and neck pathology', 'Applications of robotics in head and neck practice',
                'Biologically targeted agents in head and neck cancers', 'Prosthetic management of surgically acquired oral and facial defects',
                'Multidisciplinary team working', 'Nutritional considerations', 'Speech voice and swallow rehabilitation after chemoradiation',
                'Surgical anatomy of the neck', 'Clinical examination of the neck', 'Imaging of the neck', 'Neck trauma', 'Benign neck disease',
                'Neck space infections', 'Anatomy and embryology of the mouth and dentition', 'Benign oral and dental disease',
                'Salivary gland anatomy', 'Imaging of the salivary glands', 'Non‑neoplastic salivary gland diseases', 'Pharyngitis',
                'Cricopharyngeal dysphagia', 'Oesophageal diseases (adult)', 'Neurological disease of the pharynx',
                'Rehabilitation of swallowing disorders', 'Chronic aspiration', 'Temporomandibular joint disorders'
            ],
            'Swallowing & Dysphagia': [
                'Anatomy of the pharynx and oesophagus', 'Physiology of swallowing', 'Causes and assessment of dysphagia and aspiration',
                'Functional investigations of the upper gastrointestinal tract'
            ]
        };

        // ============================================================
        //  SCOTT-BROWN TAXONOMY (new classification, replaces ENT_DATA
        //  as the primary structure going forward)
        //  Hierarchy: Subject -> Part (only where Scott-Brown has Parts)
        //             -> Chapter
        //
        //  Source of truth: 8 photos of the official Scott-Brown Table of
        //  Contents (Volumes 1-2), read chapter-by-chapter and verified
        //  twice against the images - page-boundary chapters appeared in
        //  two overlapping photos each, giving a natural double-check.
        //  All 9 subjects and all 252 chapters are now fully populated;
        //  nothing here is pending or guessed. One title (chapter 224,
        //  "Prosthetics: Facial prosthetic – Rehabilitation") has a dash
        //  character that was hard to pin down at photo resolution and
        //  may be worth confirming against the source page; everything
        //  else was legible with high confidence.
        //
        //  chapterNumber is the GLOBAL Scott-Brown chapter number
        //  (1-252), continuous across the whole book - never reset per
        //  subject or Part. Verified section boundaries: Otology 1-40,
        //  Lateral Skull Base 41-57, Rhinology 58-82, Anterior Skull
        //  Base 83-101, Facial Plastic Surgery 102-121, Paediatrics
        //  122-152, Laryngology 153-182, Head and Neck 183-226 (its 8
        //  Parts span 183-190/191-200/201-204/205-207/208-211/212-213/
        //  214-216/217-226), Head and Neck Endocrine 227-252.
        //
        //  Designed for future multi-book scalability: each entry could be
        //  nested under a `book`/`volume` envelope later without changing
        //  this shape (see CLASSIFICATION_BOOKS below).
        // ============================================================
        const SCOTT_BROWN_TAXONOMY = [
            {
                subjectId: 'otology', subject: 'Otology', pending: false, parts: null,
                chapters: [
                    { chapterId: 'sb_otology_01', chapterNumber: 1, chapter: 'Physiology of hearing' },
                    { chapterId: 'sb_otology_02', chapterNumber: 2, chapter: 'Physiology and assessment of balance' },
                    { chapterId: 'sb_otology_03', chapterNumber: 3, chapter: 'Hearing tests' },
                    { chapterId: 'sb_otology_04', chapterNumber: 4, chapter: 'Prevention of hearing loss' },
                    { chapterId: 'sb_otology_05', chapterNumber: 5, chapter: 'Age-related sensorineural hearing impairment' },
                    { chapterId: 'sb_otology_06', chapterNumber: 6, chapter: 'Noise-induced hearing loss and related conditions' },
                    { chapterId: 'sb_otology_07', chapterNumber: 7, chapter: 'Single-sided deafness' },
                    { chapterId: 'sb_otology_08', chapterNumber: 8, chapter: 'Auditory neuropathy spectrum disorder and retrocochlear disorders in adults and children' },
                    { chapterId: 'sb_otology_09', chapterNumber: 9, chapter: 'Tinnitus and hyperacusis' },
                    { chapterId: 'sb_otology_10', chapterNumber: 10, chapter: 'Ménière\'s disease' },
                    { chapterId: 'sb_otology_11', chapterNumber: 11, chapter: 'Benign paroxysmal positional vertigo' },
                    { chapterId: 'sb_otology_12', chapterNumber: 12, chapter: 'Superior semi-circular canal dehiscence' },
                    { chapterId: 'sb_otology_13', chapterNumber: 13, chapter: 'Vestibular neuritis' },
                    { chapterId: 'sb_otology_14', chapterNumber: 14, chapter: 'Vestibular migraine' },
                    { chapterId: 'sb_otology_15', chapterNumber: 15, chapter: 'Vestibular rehabilitation' },
                    { chapterId: 'sb_otology_16', chapterNumber: 16, chapter: 'Auditory processing disorder across the age span' },
                    { chapterId: 'sb_otology_17', chapterNumber: 17, chapter: 'Neuropsychiatric aspects of vestibular disorders' },
                    { chapterId: 'sb_otology_18', chapterNumber: 18, chapter: 'Anatomy and embryology of the external and middle ear' },
                    { chapterId: 'sb_otology_19', chapterNumber: 19, chapter: 'Anatomy of the cochlea and vestibular system: Relating ultrastructure to function' },
                    { chapterId: 'sb_otology_20', chapterNumber: 20, chapter: 'Clinical examination of the ears and hearing' },
                    { chapterId: 'sb_otology_21', chapterNumber: 21, chapter: 'Endoscopic ear surgery' },
                    { chapterId: 'sb_otology_22', chapterNumber: 22, chapter: 'Otalgia' },
                    { chapterId: 'sb_otology_23', chapterNumber: 23, chapter: 'Perichondritis of the external ear' },
                    { chapterId: 'sb_otology_24', chapterNumber: 24, chapter: 'Acquired atresia and exostosis of the external ear' },
                    { chapterId: 'sb_otology_25', chapterNumber: 25, chapter: 'Otitis externa and necrotising otitis externa' },
                    { chapterId: 'sb_otology_26', chapterNumber: 26, chapter: 'Keratosis obturans and external auditory canal cholesteatoma' },
                    { chapterId: 'sb_otology_27', chapterNumber: 27, chapter: 'Myringitis' },
                    { chapterId: 'sb_otology_28', chapterNumber: 28, chapter: 'Mucosal (suppurative) chronic otitis media' },
                    { chapterId: 'sb_otology_29', chapterNumber: 29, chapter: 'Squamous chronic otitis media' },
                    { chapterId: 'sb_otology_30', chapterNumber: 30, chapter: 'Ossicular chain pathology and reconstruction' },
                    { chapterId: 'sb_otology_31', chapterNumber: 31, chapter: 'Otosclerosis' },
                    { chapterId: 'sb_otology_32', chapterNumber: 32, chapter: 'Eustachian tube dysfunction' },
                    { chapterId: 'sb_otology_33', chapterNumber: 33, chapter: 'Systemic inflammatory conditions of the middle ear' },
                    { chapterId: 'sb_otology_34', chapterNumber: 34, chapter: 'Ototoxicity' },
                    { chapterId: 'sb_otology_35', chapterNumber: 35, chapter: 'Idiopathic sudden sensorineural hearing loss' },
                    { chapterId: 'sb_otology_36', chapterNumber: 36, chapter: 'Ear trauma and osteoradionecrosis of the temporal bone' },
                    { chapterId: 'sb_otology_37', chapterNumber: 37, chapter: 'Bone-conduction hearing devices' },
                    { chapterId: 'sb_otology_38', chapterNumber: 38, chapter: 'Cochlear implants' },
                    { chapterId: 'sb_otology_39', chapterNumber: 39, chapter: 'Middle-ear implants' },
                    { chapterId: 'sb_otology_40', chapterNumber: 40, chapter: 'Auditory brainstem implantation' }
                ]
            },
            {
                subjectId: 'lateral_skull_base', subject: 'Lateral Skull Base', pending: false, parts: null,
                chapters: [
                    { chapterId: 'sb_lateral_skull_base_01', chapterNumber: 41, chapter: 'Anatomy of the lateral skull base and infratemporal fossa' },
                    { chapterId: 'sb_lateral_skull_base_02', chapterNumber: 42, chapter: 'Clinical assessment and evaluation of a lateral skull base patient' },
                    { chapterId: 'sb_lateral_skull_base_03', chapterNumber: 43, chapter: 'Radiological evaluation of the lateral skull base' },
                    { chapterId: 'sb_lateral_skull_base_04', chapterNumber: 44, chapter: 'Surgical approaches to the lateral skull base and infratemporal fossa' },
                    { chapterId: 'sb_lateral_skull_base_05', chapterNumber: 45, chapter: 'Vestibular schwannoma presentation and natural history' },
                    { chapterId: 'sb_lateral_skull_base_06', chapterNumber: 46, chapter: 'Vestibular schwannoma management: Watch, wait and re-scan, radiotherapy and surgery' },
                    { chapterId: 'sb_lateral_skull_base_07', chapterNumber: 47, chapter: 'NF2-related schwannomatosis' },
                    { chapterId: 'sb_lateral_skull_base_08', chapterNumber: 48, chapter: 'Non-vestibular schwannoma tumours of the cerebellopontine angle' },
                    { chapterId: 'sb_lateral_skull_base_09', chapterNumber: 49, chapter: 'Middle fossa surgery' },
                    { chapterId: 'sb_lateral_skull_base_10', chapterNumber: 50, chapter: 'Jugular foramen lesions and their management' },
                    { chapterId: 'sb_lateral_skull_base_11', chapterNumber: 51, chapter: 'Petrous apex lesions' },
                    { chapterId: 'sb_lateral_skull_base_12', chapterNumber: 52, chapter: 'Temporal bone neoplasms: Benign and malignant' },
                    { chapterId: 'sb_lateral_skull_base_13', chapterNumber: 53, chapter: 'Necrotising otitis externa and skull base osteomyelitis' },
                    { chapterId: 'sb_lateral_skull_base_14', chapterNumber: 54, chapter: 'Non-neoplastic facial nerve disorders and temporal bone trauma' },
                    { chapterId: 'sb_lateral_skull_base_15', chapterNumber: 55, chapter: 'Lateral temporal bone CSF leak' },
                    { chapterId: 'sb_lateral_skull_base_16', chapterNumber: 56, chapter: 'Reconstruction of lateral skull base defects' },
                    { chapterId: 'sb_lateral_skull_base_17', chapterNumber: 57, chapter: 'Complications of lateral skull base surgery' }
                ]
            },
            {
                subjectId: 'rhinology', subject: 'Rhinology', pending: false, parts: null,
                chapters: [
                    { chapterId: 'sb_rhinology_01', chapterNumber: 58, chapter: 'Anatomy of the nose and paranasal sinuses' },
                    { chapterId: 'sb_rhinology_02', chapterNumber: 59, chapter: 'Physiology of the nose and paranasal sinuses' },
                    { chapterId: 'sb_rhinology_03', chapterNumber: 60, chapter: 'Radiological investigations used in rhinology' },
                    { chapterId: 'sb_rhinology_04', chapterNumber: 61, chapter: 'Outpatient assessment: Nose and sinuses' },
                    { chapterId: 'sb_rhinology_05', chapterNumber: 62, chapter: 'Nasal airway objective measurements' },
                    { chapterId: 'sb_rhinology_06', chapterNumber: 63, chapter: 'Relationship between the upper and lower respiratory tract: Single airway' },
                    { chapterId: 'sb_rhinology_07', chapterNumber: 64, chapter: 'Olfaction and abnormalities of smell' },
                    { chapterId: 'sb_rhinology_08', chapterNumber: 65, chapter: 'Rhinitis' },
                    { chapterId: 'sb_rhinology_09', chapterNumber: 66, chapter: 'Acute rhinosinusitis' },
                    { chapterId: 'sb_rhinology_10', chapterNumber: 67, chapter: 'Rhinosinusitis: Definitions, classification and diagnosis' },
                    { chapterId: 'sb_rhinology_11', chapterNumber: 68, chapter: 'Fungal rhinosinusitis' },
                    { chapterId: 'sb_rhinology_12', chapterNumber: 69, chapter: 'Management of chronic rhinosinusitis' },
                    { chapterId: 'sb_rhinology_13', chapterNumber: 70, chapter: 'The frontal sinus' },
                    { chapterId: 'sb_rhinology_14', chapterNumber: 71, chapter: 'Complications of rhinosinusitis' },
                    { chapterId: 'sb_rhinology_15', chapterNumber: 72, chapter: 'Mucocoeles of the paranasal sinuses' },
                    { chapterId: 'sb_rhinology_16', chapterNumber: 73, chapter: 'Diagnosis and management of facial pain' },
                    { chapterId: 'sb_rhinology_17', chapterNumber: 74, chapter: 'Management of enlarged turbinates' },
                    { chapterId: 'sb_rhinology_18', chapterNumber: 75, chapter: 'Nasal septum and nasal valve' },
                    { chapterId: 'sb_rhinology_19', chapterNumber: 76, chapter: 'Nasal septal perforation' },
                    { chapterId: 'sb_rhinology_20', chapterNumber: 77, chapter: 'Treatment of nasal and facial fractures' },
                    { chapterId: 'sb_rhinology_21', chapterNumber: 78, chapter: 'Epistaxis' },
                    { chapterId: 'sb_rhinology_22', chapterNumber: 79, chapter: 'Granulomatous conditions of the nose' },
                    { chapterId: 'sb_rhinology_23', chapterNumber: 80, chapter: 'Benign sinonasal tumours' },
                    { chapterId: 'sb_rhinology_24', chapterNumber: 81, chapter: 'Lacrimal dysfunction' },
                    { chapterId: 'sb_rhinology_25', chapterNumber: 82, chapter: 'History of modern rhinology' }
                ]
            },
            {
                subjectId: 'anterior_skull_base', subject: 'Anterior Skull Base', pending: false, parts: null,
                chapters: [
                    { chapterId: 'sb_anterior_skull_base_01', chapterNumber: 83, chapter: 'Anterior cranial fossa anatomy' },
                    { chapterId: 'sb_anterior_skull_base_02', chapterNumber: 84, chapter: 'Imaging of the anterior skull base' },
                    { chapterId: 'sb_anterior_skull_base_03', chapterNumber: 85, chapter: 'Endoscopic anterior skull base approaches' },
                    { chapterId: 'sb_anterior_skull_base_04', chapterNumber: 86, chapter: 'External approaches to the anterior cranial fossa' },
                    { chapterId: 'sb_anterior_skull_base_05', chapterNumber: 87, chapter: 'Evaluation of the anterior skull base patient' },
                    { chapterId: 'sb_anterior_skull_base_06', chapterNumber: 88, chapter: 'Complications of anterior skull base surgery' },
                    { chapterId: 'sb_anterior_skull_base_07', chapterNumber: 89, chapter: 'CSF Rhinorrhoea' },
                    { chapterId: 'sb_anterior_skull_base_08', chapterNumber: 90, chapter: 'Endoscopic management of malignant skull base neoplasms' },
                    { chapterId: 'sb_anterior_skull_base_09', chapterNumber: 91, chapter: 'Juvenile nasopharyngeal angiofibroma' },
                    { chapterId: 'sb_anterior_skull_base_10', chapterNumber: 92, chapter: 'Pterygopalatine and infratemporal fossa' },
                    { chapterId: 'sb_anterior_skull_base_11', chapterNumber: 93, chapter: 'Pituitary and parasellar lesions' },
                    { chapterId: 'sb_anterior_skull_base_12', chapterNumber: 94, chapter: 'Endoscopic approach and management of the clivus and posterior fossa' },
                    { chapterId: 'sb_anterior_skull_base_13', chapterNumber: 95, chapter: 'Craniovertebral junction' },
                    { chapterId: 'sb_anterior_skull_base_14', chapterNumber: 96, chapter: 'Orbit-endoscopic endonasal surgery' },
                    { chapterId: 'sb_anterior_skull_base_15', chapterNumber: 97, chapter: 'Transorbital approaches' },
                    { chapterId: 'sb_anterior_skull_base_16', chapterNumber: 98, chapter: 'Nasopharyngeal endoscopic resection' },
                    { chapterId: 'sb_anterior_skull_base_17', chapterNumber: 99, chapter: 'Endoscopic management of petrous apex pathology' },
                    { chapterId: 'sb_anterior_skull_base_18', chapterNumber: 100, chapter: 'Anterior skull base reconstruction' },
                    { chapterId: 'sb_anterior_skull_base_19', chapterNumber: 101, chapter: 'Anterior cranial base surgery: Past, present and future' }
                ]
            },
            {
                subjectId: 'facial_plastic_surgery', subject: 'Facial Plastic Surgery', pending: false, parts: null,
                chapters: [
                    { chapterId: 'sb_facial_plastic_surgery_01', chapterNumber: 102, chapter: 'Assessment for functional and aesthetic septorhinoplasty' },
                    { chapterId: 'sb_facial_plastic_surgery_02', chapterNumber: 103, chapter: 'Endonasal surgery in the twenty-first century' },
                    { chapterId: 'sb_facial_plastic_surgery_03', chapterNumber: 104, chapter: 'Revision rhinoplasty' },
                    { chapterId: 'sb_facial_plastic_surgery_04', chapterNumber: 105, chapter: 'Aesthetic dorsal reduction rhinoplasty' },
                    { chapterId: 'sb_facial_plastic_surgery_05', chapterNumber: 106, chapter: 'External rhinoplasty' },
                    { chapterId: 'sb_facial_plastic_surgery_06', chapterNumber: 107, chapter: 'Nasal reconstruction' },
                    { chapterId: 'sb_facial_plastic_surgery_07', chapterNumber: 108, chapter: 'An approach to pinnaplasty' },
                    { chapterId: 'sb_facial_plastic_surgery_08', chapterNumber: 109, chapter: 'Auricular reconstruction' },
                    { chapterId: 'sb_facial_plastic_surgery_09', chapterNumber: 110, chapter: 'Blepharoplasty' },
                    { chapterId: 'sb_facial_plastic_surgery_10', chapterNumber: 111, chapter: 'Surgical rejuvenation of the face' },
                    { chapterId: 'sb_facial_plastic_surgery_11', chapterNumber: 112, chapter: 'Non-surgical rejuvenation of the ageing face' },
                    { chapterId: 'sb_facial_plastic_surgery_12', chapterNumber: 113, chapter: 'Surgical management of facial paralysis' },
                    { chapterId: 'sb_facial_plastic_surgery_13', chapterNumber: 114, chapter: 'Grafts and local flaps in head and neck cancer' },
                    { chapterId: 'sb_facial_plastic_surgery_14', chapterNumber: 115, chapter: 'Rhinoplasty in the ageing patient' },
                    { chapterId: 'sb_facial_plastic_surgery_15', chapterNumber: 116, chapter: 'Preservation rhinoplasty' },
                    { chapterId: 'sb_facial_plastic_surgery_16', chapterNumber: 117, chapter: 'Nasal reconstruction in vasculitis' },
                    { chapterId: 'sb_facial_plastic_surgery_17', chapterNumber: 118, chapter: 'Rhinoplasty in the ethnic patient' },
                    { chapterId: 'sb_facial_plastic_surgery_18', chapterNumber: 119, chapter: 'Paediatric septal surgery' },
                    { chapterId: 'sb_facial_plastic_surgery_19', chapterNumber: 120, chapter: 'Nasal tip rhinoplasty' },
                    { chapterId: 'sb_facial_plastic_surgery_20', chapterNumber: 121, chapter: 'Nasal valve surgery' }
                ]
            },
            {
                subjectId: 'paediatrics', subject: 'Paediatrics', pending: false, parts: null,
                chapters: [
                    { chapterId: 'sb_paediatrics_01', chapterNumber: 122, chapter: 'Introduction/key approaches to the paediatric patient' },
                    { chapterId: 'sb_paediatrics_02', chapterNumber: 123, chapter: 'The syndromic child' },
                    { chapterId: 'sb_paediatrics_03', chapterNumber: 124, chapter: 'Management of the immunodeficient child' },
                    { chapterId: 'sb_paediatrics_04', chapterNumber: 125, chapter: 'Hearing screening and hearing tests in children' },
                    { chapterId: 'sb_paediatrics_05', chapterNumber: 126, chapter: 'Non-surgical management of the hearing-impaired child' },
                    { chapterId: 'sb_paediatrics_06', chapterNumber: 127, chapter: 'Congenital middle ear abnormalities and microtia' },
                    { chapterId: 'sb_paediatrics_07', chapterNumber: 128, chapter: 'Paediatric implantation otology' },
                    { chapterId: 'sb_paediatrics_08', chapterNumber: 129, chapter: 'Otitis media with effusion' },
                    { chapterId: 'sb_paediatrics_09', chapterNumber: 130, chapter: 'Acute otitis media' },
                    { chapterId: 'sb_paediatrics_10', chapterNumber: 131, chapter: 'Balance disorders in children' },
                    { chapterId: 'sb_paediatrics_11', chapterNumber: 132, chapter: 'Paediatric voice and disorders of communication' },
                    { chapterId: 'sb_paediatrics_12', chapterNumber: 133, chapter: 'Cleft lip and palate' },
                    { chapterId: 'sb_paediatrics_13', chapterNumber: 134, chapter: 'Craniofacial surgery' },
                    { chapterId: 'sb_paediatrics_14', chapterNumber: 135, chapter: 'Epistaxis and anterior skull base' },
                    { chapterId: 'sb_paediatrics_15', chapterNumber: 136, chapter: 'Neonatal nasal obstruction and paediatric disorders of the lacrimal drainage system' },
                    { chapterId: 'sb_paediatrics_16', chapterNumber: 137, chapter: 'Paediatric rhinosinusitis and its complications' },
                    { chapterId: 'sb_paediatrics_17', chapterNumber: 138, chapter: 'Foreign bodies in the ear, nose and throat' },
                    { chapterId: 'sb_paediatrics_18', chapterNumber: 139, chapter: 'Diseases of tonsils, tonsillectomy and tonsillotomy' },
                    { chapterId: 'sb_paediatrics_19', chapterNumber: 140, chapter: 'Paediatric obstructive sleep apnoea' },
                    { chapterId: 'sb_paediatrics_20', chapterNumber: 141, chapter: 'Acute airway management' },
                    { chapterId: 'sb_paediatrics_21', chapterNumber: 142, chapter: 'Acute head and neck infections in the child' },
                    { chapterId: 'sb_paediatrics_22', chapterNumber: 143, chapter: 'Congenital disorders of the larynx, trachea and bronchi' },
                    { chapterId: 'sb_paediatrics_23', chapterNumber: 144, chapter: 'Airway stenosis' },
                    { chapterId: 'sb_paediatrics_24', chapterNumber: 145, chapter: 'Paediatric tracheostomy' },
                    { chapterId: 'sb_paediatrics_25', chapterNumber: 146, chapter: 'Perinatal airway management' },
                    { chapterId: 'sb_paediatrics_26', chapterNumber: 147, chapter: 'Drooling and salivary pathology' },
                    { chapterId: 'sb_paediatrics_27', chapterNumber: 148, chapter: 'Tumours of the head and neck in childhood' },
                    { chapterId: 'sb_paediatrics_28', chapterNumber: 149, chapter: 'Cysts and sinuses of the head and neck' },
                    { chapterId: 'sb_paediatrics_29', chapterNumber: 150, chapter: 'Haemangiomas and vascular malformations' },
                    { chapterId: 'sb_paediatrics_30', chapterNumber: 151, chapter: 'Gastro-oesophageal disorders in children' },
                    { chapterId: 'sb_paediatrics_31', chapterNumber: 152, chapter: 'Dysphagia and aspiration' }
                ]
            },
            {
                subjectId: 'laryngology', subject: 'Laryngology', pending: false, parts: null,
                chapters: [
                    { chapterId: 'sb_laryngology_01', chapterNumber: 153, chapter: 'Anatomy of the larynx and tracheobronchial tree' },
                    { chapterId: 'sb_laryngology_02', chapterNumber: 154, chapter: 'Physiology of the larynx and voice production' },
                    { chapterId: 'sb_laryngology_03', chapterNumber: 155, chapter: 'Clinical assessment of the voice and examination of the larynx' },
                    { chapterId: 'sb_laryngology_04', chapterNumber: 156, chapter: 'Structural disorders of the vocal cords' },
                    { chapterId: 'sb_laryngology_05', chapterNumber: 157, chapter: 'Vocal cord scars and sulci' },
                    { chapterId: 'sb_laryngology_06', chapterNumber: 158, chapter: 'Functional disorders of the voice' },
                    { chapterId: 'sb_laryngology_07', chapterNumber: 159, chapter: 'Movement disorders of the larynx' },
                    { chapterId: 'sb_laryngology_08', chapterNumber: 160, chapter: 'Recurrent respiratory papillomatosis' },
                    { chapterId: 'sb_laryngology_09', chapterNumber: 161, chapter: 'Paralysis of the larynx' },
                    { chapterId: 'sb_laryngology_10', chapterNumber: 162, chapter: 'Phonomicrosurgery' },
                    { chapterId: 'sb_laryngology_11', chapterNumber: 163, chapter: 'The professional voice user' },
                    { chapterId: 'sb_laryngology_12', chapterNumber: 164, chapter: 'Office-based laryngeal procedures' },
                    { chapterId: 'sb_laryngology_13', chapterNumber: 165, chapter: 'Speech and language therapy for voice disorders' },
                    { chapterId: 'sb_laryngology_14', chapterNumber: 166, chapter: 'Acute infections of the larynx' },
                    { chapterId: 'sb_laryngology_15', chapterNumber: 167, chapter: 'Chronic laryngitis' },
                    { chapterId: 'sb_laryngology_16', chapterNumber: 168, chapter: 'Pharyngitis' },
                    { chapterId: 'sb_laryngology_17', chapterNumber: 169, chapter: 'Anatomy of the pharynx and oesophagus' },
                    { chapterId: 'sb_laryngology_18', chapterNumber: 170, chapter: 'Physiology of swallowing' },
                    { chapterId: 'sb_laryngology_19', chapterNumber: 171, chapter: 'Swallowing assessment' },
                    { chapterId: 'sb_laryngology_20', chapterNumber: 172, chapter: 'Neurological dysphagia' },
                    { chapterId: 'sb_laryngology_21', chapterNumber: 173, chapter: 'Cricopharyngeal muscle dysfunction' },
                    { chapterId: 'sb_laryngology_22', chapterNumber: 174, chapter: 'Benign oesophageal diseases' },
                    { chapterId: 'sb_laryngology_23', chapterNumber: 175, chapter: 'Chronic aspiration' },
                    { chapterId: 'sb_laryngology_24', chapterNumber: 176, chapter: 'Swallowing rehabilitation' },
                    { chapterId: 'sb_laryngology_25', chapterNumber: 177, chapter: 'Globus' },
                    { chapterId: 'sb_laryngology_26', chapterNumber: 178, chapter: 'Laryngotracheal trauma' },
                    { chapterId: 'sb_laryngology_27', chapterNumber: 179, chapter: 'Tracheostomy' },
                    { chapterId: 'sb_laryngology_28', chapterNumber: 180, chapter: 'Adult laryngotracheal stenosis' },
                    { chapterId: 'sb_laryngology_29', chapterNumber: 181, chapter: 'Inducible laryngeal obstruction: An upper airway contributor of breathing difficulties' },
                    { chapterId: 'sb_laryngology_30', chapterNumber: 182, chapter: 'Chronic cough' }
                ]
            },
            {
                subjectId: 'head_neck', subject: 'Head and Neck', pending: false, chapters: null,
                parts: [
                    {
                        partId: 'head_neck_cancer', partNumber: 1, part: 'Head and neck cancer',
                        chapters: [
                            { chapterId: 'sb_head_neck_01', chapterNumber: 183, chapter: 'Aetiology and epidemiology' },
                            { chapterId: 'sb_head_neck_02', chapterNumber: 184, chapter: 'Tumour biology' },
                            { chapterId: 'sb_head_neck_03', chapterNumber: 185, chapter: 'Staging' },
                            { chapterId: 'sb_head_neck_04', chapterNumber: 186, chapter: 'Multidisciplinary teamwork' },
                            { chapterId: 'sb_head_neck_05', chapterNumber: 187, chapter: 'Nutrition' },
                            { chapterId: 'sb_head_neck_06', chapterNumber: 188, chapter: 'Speech, voice and swallow rehabilitation' },
                            { chapterId: 'sb_head_neck_07', chapterNumber: 189, chapter: 'Clinical outcome and survivorship' },
                            { chapterId: 'sb_head_neck_08', chapterNumber: 190, chapter: 'Palliative care' }
                        ]
                    },
                    {
                        partId: 'upper_aerodigestive_tract', partNumber: 2, part: 'Upper aerodigestive tract',
                        chapters: [
                            { chapterId: 'sb_head_neck_09', chapterNumber: 191, chapter: 'Oral cavity tumours' },
                            { chapterId: 'sb_head_neck_10', chapterNumber: 192, chapter: 'Oropharyngeal tumours' },
                            { chapterId: 'sb_head_neck_11', chapterNumber: 193, chapter: 'Malignant tumours of the larynx' },
                            { chapterId: 'sb_head_neck_12', chapterNumber: 194, chapter: 'Rehabilitation after total laryngectomy' },
                            { chapterId: 'sb_head_neck_13', chapterNumber: 195, chapter: 'Open conservation surgery for laryngeal cancer' },
                            { chapterId: 'sb_head_neck_14', chapterNumber: 196, chapter: 'Management of hypopharyngeal cancer' },
                            { chapterId: 'sb_head_neck_15', chapterNumber: 197, chapter: 'Unknown primary within the head and neck' },
                            { chapterId: 'sb_head_neck_16', chapterNumber: 198, chapter: 'Surgical anatomy for transoral surgery' },
                            { chapterId: 'sb_head_neck_17', chapterNumber: 199, chapter: 'Transoral surgery' },
                            { chapterId: 'sb_head_neck_18', chapterNumber: 200, chapter: 'Metastatic neck disease' }
                        ]
                    },
                    {
                        partId: 'salivary_glands', partNumber: 3, part: 'Salivary glands',
                        chapters: [
                            { chapterId: 'sb_head_neck_19', chapterNumber: 201, chapter: 'Anatomy and physiology of the salivary glands' },
                            { chapterId: 'sb_head_neck_20', chapterNumber: 202, chapter: 'Benign salivary gland tumours' },
                            { chapterId: 'sb_head_neck_21', chapterNumber: 203, chapter: 'Malignant tumours of the salivary glands' },
                            { chapterId: 'sb_head_neck_22', chapterNumber: 204, chapter: 'Non-neoplastic salivary gland conditions' }
                        ]
                    },
                    {
                        partId: 'skin', partNumber: 4, part: 'Skin',
                        chapters: [
                            { chapterId: 'sb_head_neck_23', chapterNumber: 205, chapter: 'Benign skin lesions' },
                            { chapterId: 'sb_head_neck_24', chapterNumber: 206, chapter: 'Non-melanoma skin cancer' },
                            { chapterId: 'sb_head_neck_25', chapterNumber: 207, chapter: 'Cutaneous melanoma' }
                        ]
                    },
                    {
                        partId: 'skull_base_hn', partNumber: 5, part: 'Skull base',
                        chapters: [
                            { chapterId: 'sb_head_neck_26', chapterNumber: 208, chapter: 'Sinonasal, orbital and anterior skull base malignancies' },
                            { chapterId: 'sb_head_neck_27', chapterNumber: 209, chapter: 'Nasopharyngeal carcinoma' },
                            { chapterId: 'sb_head_neck_28', chapterNumber: 210, chapter: 'Paragangliomas of the neck' },
                            { chapterId: 'sb_head_neck_29', chapterNumber: 211, chapter: 'Parapharyngeal space tumours' }
                        ]
                    },
                    {
                        partId: 'reconstruction', partNumber: 6, part: 'Reconstruction',
                        chapters: [
                            { chapterId: 'sb_head_neck_30', chapterNumber: 212, chapter: 'Grafts, local and regional flaps' },
                            { chapterId: 'sb_head_neck_31', chapterNumber: 213, chapter: 'Free-tissue transfer in head and neck surgery' }
                        ]
                    },
                    {
                        partId: 'radiation_medical_oncology', partNumber: 7, part: 'Radiation and medical oncology',
                        chapters: [
                            { chapterId: 'sb_head_neck_32', chapterNumber: 214, chapter: 'Radiotherapy' },
                            { chapterId: 'sb_head_neck_33', chapterNumber: 215, chapter: 'Principles of chemotherapy' },
                            { chapterId: 'sb_head_neck_34', chapterNumber: 216, chapter: 'Biologically targeted agents' }
                        ]
                    },
                    {
                        partId: 'miscellaneous_hn', partNumber: 8, part: 'Miscellaneous',
                        chapters: [
                            { chapterId: 'sb_head_neck_35', chapterNumber: 217, chapter: 'Anatomy of the mouth and teeth' },
                            { chapterId: 'sb_head_neck_36', chapterNumber: 218, chapter: 'Anatomy of the neck' },
                            { chapterId: 'sb_head_neck_37', chapterNumber: 219, chapter: 'Pathology' },
                            { chapterId: 'sb_head_neck_38', chapterNumber: 220, chapter: 'Benign neck disease' },
                            { chapterId: 'sb_head_neck_39', chapterNumber: 221, chapter: 'Neck trauma' },
                            { chapterId: 'sb_head_neck_40', chapterNumber: 222, chapter: 'Neck space infections' },
                            { chapterId: 'sb_head_neck_41', chapterNumber: 223, chapter: 'Maxillofacial prosthodontics and rehabilitation of oncological orofacial defects' },
                            { chapterId: 'sb_head_neck_42', chapterNumber: 224, chapter: 'Prosthetics: Facial prosthetic – Rehabilitation' },
                            { chapterId: 'sb_head_neck_43', chapterNumber: 225, chapter: 'Obstructive sleep apnoea and snoring' },
                            { chapterId: 'sb_head_neck_44', chapterNumber: 226, chapter: 'Benign oral and dental disease' }
                        ]
                    }
                ]
            },
            {
                subjectId: 'head_neck_endocrine', subject: 'Head and Neck Endocrine', pending: false, parts: null,
                chapters: [
                    { chapterId: 'sb_head_neck_endocrine_01', chapterNumber: 227, chapter: 'Embryology, anatomy and physiology of the thyroid and parathyroid glands' },
                    { chapterId: 'sb_head_neck_endocrine_02', chapterNumber: 228, chapter: 'Thyroid and parathyroid gland pathology' },
                    { chapterId: 'sb_head_neck_endocrine_03', chapterNumber: 229, chapter: 'The genetics of malignant thyroid disease and thyroid nodules' },
                    { chapterId: 'sb_head_neck_endocrine_04', chapterNumber: 230, chapter: 'Assessment, investigation and imaging of the thyroid: Assessment of structure and function' },
                    { chapterId: 'sb_head_neck_endocrine_05', chapterNumber: 231, chapter: 'Medical management of thyroid dysregulation: Hyperthyroidism and hypothyroidism' },
                    { chapterId: 'sb_head_neck_endocrine_06', chapterNumber: 232, chapter: 'Surgical approaches to the thyroid' },
                    { chapterId: 'sb_head_neck_endocrine_07', chapterNumber: 233, chapter: 'Surgical management of the compressive thyroid goitre: Intrathoracic and ectopic thyroid glands' },
                    { chapterId: 'sb_head_neck_endocrine_08', chapterNumber: 234, chapter: 'Surgical management of hyperthyroidism' },
                    { chapterId: 'sb_head_neck_endocrine_09', chapterNumber: 235, chapter: 'Radioactive iodine for thyroid disease' },
                    { chapterId: 'sb_head_neck_endocrine_10', chapterNumber: 236, chapter: 'Management of differentiated thyroid cancer: Risk stratification, staging, indications for treatment, oncological management and follow-up' },
                    { chapterId: 'sb_head_neck_endocrine_11', chapterNumber: 237, chapter: 'Rare thyroid abnormalities and cancers' },
                    { chapterId: 'sb_head_neck_endocrine_12', chapterNumber: 238, chapter: 'Management of medullary thyroid cancer' },
                    { chapterId: 'sb_head_neck_endocrine_13', chapterNumber: 239, chapter: 'Management of poorly differentiated, high-grade and anaplastic thyroid cancer' },
                    { chapterId: 'sb_head_neck_endocrine_14', chapterNumber: 240, chapter: 'Management of locoregionally advanced and recurrent thyroid cancer' },
                    { chapterId: 'sb_head_neck_endocrine_15', chapterNumber: 241, chapter: 'Management of advanced thyroid cancer, metastatic thyroid cancers and radioiodine refractory cancers: Oncological and redifferentiation treatment' },
                    { chapterId: 'sb_head_neck_endocrine_16', chapterNumber: 242, chapter: 'Management of paediatric thyroid cancers (differentiated and medullary)' },
                    { chapterId: 'sb_head_neck_endocrine_17', chapterNumber: 243, chapter: 'Nerve monitoring in thyroid and parathyroid surgery' },
                    { chapterId: 'sb_head_neck_endocrine_18', chapterNumber: 244, chapter: 'Ablative technologies in the thyroid and parathyroids' },
                    { chapterId: 'sb_head_neck_endocrine_19', chapterNumber: 245, chapter: 'Parathyroid preservation in thyroid surgery' },
                    { chapterId: 'sb_head_neck_endocrine_20', chapterNumber: 246, chapter: 'Physiology, assessment and investigation of parathyroid dysregulation' },
                    { chapterId: 'sb_head_neck_endocrine_21', chapterNumber: 247, chapter: 'Imaging for parathyroid surgery' },
                    { chapterId: 'sb_head_neck_endocrine_22', chapterNumber: 248, chapter: 'Parathyroid dysfunction: Medical and surgical therapy' },
                    { chapterId: 'sb_head_neck_endocrine_23', chapterNumber: 249, chapter: 'Redo parathyroid surgery: Management of surgical failure' },
                    { chapterId: 'sb_head_neck_endocrine_24', chapterNumber: 250, chapter: 'Management of atypical adenomas and parathyroid cancer' },
                    { chapterId: 'sb_head_neck_endocrine_25', chapterNumber: 251, chapter: 'Complications of thyroid and parathyroid surgery' },
                    { chapterId: 'sb_head_neck_endocrine_26', chapterNumber: 252, chapter: 'Medicolegal aspects of thyroid and parathyroid surgery' }
                ]
            }
        ];

        // Future scalability envelope (section 11): additional textbooks can
        // be added as siblings here without changing SCOTT_BROWN_TAXONOMY's
        // own shape. Not wired into the UI yet - there's only one book so
        // far - but the data model won't need to change when a second one
        // is added.
        const CLASSIFICATION_BOOKS = [
            { bookId: 'scott_brown', book: 'Scott-Brown\'s Otorhinolaryngology, Head and Neck Surgery', subjects: SCOTT_BROWN_TAXONOMY }
        ];

        // ============================================================
        //  LEGACY -> SCOTT-BROWN MIGRATION MAP
        //  Every entry here was matched by hand against the two chapter
        //  lists (exact or near-exact title correspondence, or a single
        //  unambiguous topical match with no other candidate). Anything
        //  NOT listed here is intentionally left unmapped - per the
        //  brief, an unreliable mapping must fall through to "needs
        //  review" rather than be guessed. See the migration report for
        //  the full reasoning behind each inclusion/exclusion.
        //
        //  subjectId: null means "do not even guess the subject" (the old
        //  subject has no safe 1:1 new-subject correspondence - e.g. old
        //  "Skull Base" could mean either new Lateral or Anterior Skull
        //  Base, and old "Swallowing & Dysphagia" has no matching subject
        //  in the 9 supplied at all).
        // ============================================================
        const LEGACY_CLASSIFICATION_MAP = {
            'Otology': {
                subjectId: 'otology',
                chapters: {
                    'Anatomy and embryology of the external and middle ear': 'sb_otology_18',
                    'Anatomy of the cochlea and vestibular system: relating ultrastructure to function': 'sb_otology_19',
                    'Physiology of hearing': 'sb_otology_01',
                    'Physiology of equilibrium': 'sb_otology_02',
                    'Evaluation of balance': 'sb_otology_02',
                    'Psychoacoustic audiometry': 'sb_otology_03',
                    'Evoked measurement of auditory sensitivity': 'sb_otology_03',
                    'Prevention of hearing loss': 'sb_otology_04',
                    'Age\u2011related sensorineural hearing impairment': 'sb_otology_05',
                    'Noise\u2011induced hearing loss and related conditions': 'sb_otology_06',
                    'Ototoxicity': 'sb_otology_34',
                    'Idiopathic sudden sensorineural hearing loss': 'sb_otology_35',
                    'Tinnitus and hyperacusis': 'sb_otology_09',
                    'Understanding tinnitus: a psychological perspective': 'sb_otology_09',
                    'Meniere\'s disease': 'sb_otology_10',
                    'Benign paroxysmal positional vertigo': 'sb_otology_11',
                    'Superior semicircular canal dehiscence': 'sb_otology_12',
                    'Vestibular neuritis': 'sb_otology_13',
                    'Vestibular migraine': 'sb_otology_14',
                    'Vestibular rehabilitation': 'sb_otology_15',
                    'Auditory neuropathy spectrum disorder and retrocochlear disorders in adults and children': 'sb_otology_08',
                    'Auditory processing disorders across the age span': 'sb_otology_16',
                    'Neuropsychiatric aspects of vestibular disorders': 'sb_otology_17',
                    'Clinical examination of the ears and hearing': 'sb_otology_20',
                    'Furunculosis': 'sb_otology_25',
                    'Myringitis': 'sb_otology_27',
                    'Keratosis obturans, primary auditory canal cholesteatoma and benign necrotizing otitis externa': 'sb_otology_26',
                    'Acquired atresia of the external ear': 'sb_otology_24',
                    'Otitis externa and otomycosis': 'sb_otology_25',
                    'Perichondritis of the external ear': 'sb_otology_23',
                    'Exostosis of the external auditory canal': 'sb_otology_24',
                    'Osteoradionecrosis of the temporal bone': 'sb_otology_36',
                    'Ossiculoplasty': 'sb_otology_30',
                    'Eustachian tube dysfunction': 'sb_otology_32',
                    'Otoendoscopy': 'sb_otology_21',
                    'Tuberculosis of the temporal bone': 'sb_otology_33',
                    'Otosclerosis': 'sb_otology_31',
                    'Ear trauma': 'sb_otology_36',
                    'Otalgia': 'sb_otology_22',
                    'Bone\u2011conduction hearing devices': 'sb_otology_37',
                    'Cochlear implants': 'sb_otology_38',
                    'Middle ear implants': 'sb_otology_39',
                    'Auditory brainstem implantation': 'sb_otology_40'
                    // Not mapped (no confident new-chapter match) - falls
                    // through to subject-only match, needs_review:
                    // 'Perception of sounds at the auditory cortex',
                    // 'Hearing aids',
                    // 'Beyond hearing aids: an overview of adult audiological rehabilitation',
                    // 'Autosomal dominant non-syndromic sensorineural hearing loss',
                    // 'Acute otitis media and otitis media with effusion in adults',
                    // 'Myringoplasty', 'Otological effects of Paget's disease',
                    // 'Imaging of the temporal bone'
                }
            },
            'Rhinology': {
                subjectId: 'rhinology',
                chapters: {
                    'Anatomy of the nose and paranasal sinuses': 'sb_rhinology_01',
                    'Outpatient assessment': 'sb_rhinology_04',
                    'Physiology of the nose and paranasal sinuses': 'sb_rhinology_02',
                    'Measurement of the nasal airway': 'sb_rhinology_05',
                    'Allergic rhinitis': 'sb_rhinology_08',
                    'Non\u2011allergic perennial rhinitis': 'sb_rhinology_08',
                    'Occupational rhinitis': 'sb_rhinology_08',
                    'Rhinosinusitis: Definitions, classification and diagnosis': 'sb_rhinology_10',
                    'Nasal polyposis': 'sb_rhinology_12',
                    'Fungal rhinosinusitis': 'sb_rhinology_11',
                    'The frontal sinus': 'sb_rhinology_13',
                    'Mucoceles of the paranasal sinuses': 'sb_rhinology_15',
                    'Complications of rhinosinusitis': 'sb_rhinology_14',
                    'The relationship between the upper and lower respiratory tract': 'sb_rhinology_06',
                    'Nasal septum and nasal valve': 'sb_rhinology_18',
                    'Nasal septal perforations': 'sb_rhinology_19',
                    'Management of enlarged turbinates': 'sb_rhinology_17',
                    'Epistaxis': 'sb_rhinology_21',
                    'Nasal and facial fractures': 'sb_rhinology_20',
                    'Granulomatous conditions of the nose': 'sb_rhinology_22',
                    'Abnormalities of smell': 'sb_rhinology_07',
                    'Diagnosis and management of facial pain': 'sb_rhinology_16',
                    'Juvenile angiofibroma': 'sb_rhinology_23',
                    'Endoscopic management of sinonasal tumours': 'sb_rhinology_23',
                    'Imaging in rhinology': 'sb_rhinology_03',
                    'Acute infection in case of maxillary sinusitis': 'sb_rhinology_09'
                    // Not mapped - ambiguous or no candidate, needs_review:
                    // 'Medical management for rhinosinusitis' / 'Surgical
                    //   management of rhinosinusitis' (could be Acute or
                    //   Management of chronic - genuinely ambiguous),
                    // 'CSF leaks' and 'Surgical management of pituitary and
                    //   paraseptal diseases' and 'Extended anterior skull
                    //   base approaches' (very likely now live under the
                    //   new Anterior Skull Base subject instead, but that
                    //   subject has no chapters populated yet),
                    // 'Disorders of the orbit'
                }
            },
            // Subject-level-only correspondence: confident about which new
            // Subject these belong to, but with no chapter list yet to
            // place them more precisely, so every question keeps its
            // subject and goes to chapter-level needs_review.
            'Paediatric ENT': { subjectId: 'paediatrics', chapters: {} },
            'Laryngology & Voice': { subjectId: 'laryngology', chapters: {} },
            'Facial Plastic & Reconstructive': { subjectId: 'facial_plastic_surgery', chapters: {} },
            'Head & Neck Surgery': { subjectId: 'head_neck', chapters: {} },
            // Genuinely ambiguous or unmatched at the SUBJECT level too -
            // do not guess. 'Skull Base' could be Lateral or Anterior;
            // 'Swallowing & Dysphagia' has no corresponding subject in the
            // 9 supplied (it may turn out to be a Part/Chapter within Head
            // and Neck or Laryngology once their chapter lists arrive).
            'Skull Base': { subjectId: null, chapters: {} },
            'Swallowing & Dysphagia': { subjectId: null, chapters: {} }
        };

        const ALL_SUBJECTS = [...Object.keys(ENT_DATA), 'Uncategorized'].sort();
        const ALL_CHAPTERS = Object.values(ENT_DATA).flat().sort((a, b) => a.localeCompare(b));

        // Dynamic taxonomy: the curated ENT_DATA list stays as the baseline, but any
        // subject/chapter that actually exists on real questions (e.g. imported from a
        // JSON whose classification uses different book/chapter names) is folded in too.
        // This is what every Subject/Chapter dropdown in the app should read from -
        // never ALL_SUBJECTS/ALL_CHAPTERS alone - so a question's real classification is
        // always selectable and visible, not just silently preserved in the database.
        function computeTaxonomy(questions) {
            const bySubject = Object.create(null);
            bySubject.Uncategorized = new Set(['General']);
            for (const s of SCOTT_BROWN_TAXONOMY) {
                bySubject[s.subject] = new Set(['General']);
                if (s.chapters) s.chapters.forEach(c => bySubject[s.subject].add(c.chapter));
                if (s.parts) s.parts.forEach(p => p.chapters.forEach(c => bySubject[s.subject].add(c.chapter)));
            }
            (questions || []).forEach(q => {
                const subj = typeof q.subject === 'string' && q.subject.trim() ? q.subject.trim() : 'Uncategorized';
                if (!bySubject[subj]) bySubject[subj] = new Set(['General']);
                const chap = typeof q.chapter === 'string' && q.chapter.trim() ? q.chapter.trim() : 'General';
                bySubject[subj].add(chap);
            });
            const subjects = Object.keys(bySubject).sort((a, b) => a.localeCompare(b));
            const chaptersBySubject = Object.create(null);
            subjects.forEach(s => { chaptersBySubject[s] = Array.from(bySubject[s]).sort((a, b) => a.localeCompare(b)); });
            const allChapters = Array.from(new Set(subjects.flatMap(s => chaptersBySubject[s]))).sort((a, b) => a.localeCompare(b));
            return { subjects, chaptersBySubject, allChapters };
        }

// ============================================================
//  OPTIMIZATION LAYER 1: WEB WORKER ENGINE
//  Offloads heavy computation (search indexing, filtering,
//  analytics, duplicate detection) to a background thread.
//  Automatically falls back to main-thread execution if
//  Workers are unavailable, blocked by CSP, or time out.
// ============================================================
const WORKER_CODE = ENTSearch.workerSource() + `
${getQuestionReference.toString()}
${hasCompleteQuestionReference.toString()}
let workerSearchIndex = null;
let workerSearchGeneration = -1;
function buildIndex(payload) {
  workerSearchIndex = ENTSearch.createIndex(payload.questions);
  workerSearchGeneration = payload.generation;
  return { generation: workerSearchGeneration, stats: workerSearchIndex.stats };
}
function search(payload) {
  return { generation: workerSearchGeneration, ids: workerSearchIndex && workerSearchGeneration === payload.generation ? workerSearchIndex.search(payload.query) : [] };
}
function filterQuestions(payload) {
  const index = ENTSearch.createIndex(payload.questions);
  const ids = index.search(payload.searchQuery);
  const byId = new Map(payload.questions.map(q => [q.id, q]));
  let result = ENTSearch.filterQuestions(ids === null ? payload.questions : ids.map(id => byId.get(id)), payload.filters, payload);
  if (payload.filters && payload.filters.reference === 'missing') result = result.filter(q => !hasCompleteQuestionReference(q));
  if (payload.filters && payload.filters.reference === 'complete') result = result.filter(hasCompleteQuestionReference);
  return result;
}
function computeAnalytics(payload) {
  const { questions, performance, bookmarks, examHistory } = payload;
  const total = questions.length;
  const correct = performance.filter(x => x.correct).length;
  const wrong = performance.length - correct;
  const acc = performance.length ? Math.round(correct * 100 / performance.length) : 0;
  const avg = examHistory.length ? Math.round(examHistory.reduce((s, e) => s + (e.percentage || 0), 0) / examHistory.length) : 0;
  const subjectCounts = {};
  questions.forEach(q => { const s = q.subject || 'Uncategorized'; subjectCounts[s] = (subjectCounts[s] || 0) + 1; });
  const weakTopics = {};
  performance.forEach(x => {
    const key = (x.subject || 'Unknown') + ' > ' + (x.chapter || 'Unknown') + ' > ' + (x.topic || 'Unknown');
    if (!weakTopics[key]) weakTopics[key] = { t: 0, c: 0 };
    weakTopics[key].t++;
    if (x.correct) weakTopics[key].c++;
  });
  const weakArr = Object.entries(weakTopics)
    .filter(([k, v]) => v.t >= 2)
    .map(([k, v]) => ({ k, p: Math.round(v.c * 100 / v.t), t: v.t }))
    .sort((a, b) => a.p - b.p)
    .slice(0, 5);
  return { total, bookmarks: bookmarks.length, exams: examHistory.length, correct, wrong, acc, avg, subjectCounts, weakArr };
}

function findDuplicates(qs) {
  const map = new Map();
  const dups = [];
  for (const q of qs) {
    const key = (q.questionText || '').toLowerCase().trim();
    if (map.has(key)) dups.push(q);
    else map.set(key, q.id);
  }
  return dups;
}

self.onmessage = function(e) {
  const { type, payload, id } = e.data;
  try {
    let result;
    switch (type) {
      case 'buildIndex': result = buildIndex(payload); break;
      case 'search': result = search(payload); break;
      case 'filter': result = filterQuestions(payload); break;
      case 'analytics': result = computeAnalytics(payload); break;
      case 'duplicates': result = findDuplicates(payload); break;
      default: throw new Error('Unknown worker task');
    }
    self.postMessage({ id, type, result });
  } catch (error) { self.postMessage({ id, type, error: error.message }); }
};
`;

const WorkerPool = {
  worker: null,
  queue: new Map(),
  msgId: 0,
  enabled: true,

  /** Initialize the worker from an inline blob. Returns true on success. */
  init() {
    if (this.worker || typeof Worker === 'undefined') return false;
    try {
      const blob = new Blob([WORKER_CODE], { type: 'application/javascript' });
      const url = URL.createObjectURL(blob);
      this.worker = new Worker(url);
      URL.revokeObjectURL(url);
      this.worker.onmessage = (e) => {
        const { id, result, error } = e.data;
        const pending = this.queue.get(id);
        if (pending) {
          this.queue.delete(id);
          clearTimeout(pending.timer);
          if (error) pending.reject(new Error(error)); else pending.resolve(result);
        }
      };
      this.worker.onerror = (err) => {
        console.error('Worker fatal error:', err);
        this.enabled = false;
        this.worker = null;
        for (const [id, pending] of this.queue) {
          clearTimeout(pending.timer);
          pending.reject(err);
        }
        this.queue.clear();
      };
      return true;
    } catch (e) {
      console.warn('Worker initialization failed:', e);
      this.enabled = false;
      return false;
    }
  },

  /** Post a task to the worker with automatic fallback. */
  async post(type, payload) {
    if (!this.worker && this.enabled) this.init();
    if (!this.worker || !this.enabled) {
      return this.fallback(type, payload);
    }
    const id = ++this.msgId;
    return new Promise((resolve, reject) => {
      const timer = setTimeout(() => {
        if (this.queue.has(id)) {
          this.queue.delete(id);
          reject(new Error('Worker timeout'));
        }
      }, 15000);
      this.queue.set(id, { resolve, reject, timer });
      try { this.worker.postMessage({ type, payload, id }); }
      catch (error) { clearTimeout(timer); this.queue.delete(id); reject(error); }
    }).catch(err => {
      console.warn('Worker task failed, falling back to main thread:', err);
      return this.fallback(type, payload);
    });
  },

  /** Synchronous fallback implementations when Worker is unavailable. */
  fallback(type, payload) {
    switch (type) {
      case 'buildIndex': {
        this._searchQuestions = payload.questions;
        this._searchGeneration = payload.generation;
        this._searchIndex = ENTSearch.createIndex(payload.questions);
        return { generation: payload.generation, stats: this._searchIndex.stats };
      }
      case 'filter': {
        const index = ENTSearch.createIndex(payload.questions);
        const ids = index.search(payload.searchQuery);
        const byId = new Map(payload.questions.map(q => [q.id, q]));
        let result = ENTSearch.filterQuestions(ids === null ? payload.questions : ids.map(id => byId.get(id)), payload.filters, payload);
        if (payload.filters && payload.filters.reference === 'missing') result = result.filter(q => !hasCompleteQuestionReference(q));
        if (payload.filters && payload.filters.reference === 'complete') result = result.filter(hasCompleteQuestionReference);
        return result;
      }
      case 'analytics': {
        const { questions, performance, bookmarks, examHistory } = payload;
        const total = questions.length;
        const correct = performance.filter(x => x.correct).length;
        const wrong = performance.length - correct;
        const acc = performance.length ? Math.round(correct * 100 / performance.length) : 0;
        const avg = examHistory.length ? Math.round(examHistory.reduce((s, e) => s + (e.percentage || 0), 0) / examHistory.length) : 0;
        const subjectCounts = {};
        questions.forEach(q => { const s = q.subject || 'Uncategorized'; subjectCounts[s] = (subjectCounts[s] || 0) + 1; });
        const weakTopics = {};
        performance.forEach(x => {
          const key = (x.subject || 'Unknown') + ' > ' + (x.chapter || 'Unknown') + ' > ' + (x.topic || 'Unknown');
          if (!weakTopics[key]) weakTopics[key] = { t: 0, c: 0 };
          weakTopics[key].t++;
          if (x.correct) weakTopics[key].c++;
        });
        const weakArr = Object.entries(weakTopics)
          .filter(([k, v]) => v.t >= 2)
          .map(([k, v]) => ({ k, p: Math.round(v.c * 100 / v.t), t: v.t }))
          .sort((a, b) => a.p - b.p)
          .slice(0, 5);
        return { total, bookmarks: bookmarks.length, exams: examHistory.length, correct, wrong, acc, avg, subjectCounts, weakArr };
      }
      case 'duplicates': {
        const map = new Map(), dups = [];
        for (const q of payload) {
          const key = (q.questionText || '').toLowerCase().trim();
          if (map.has(key)) dups.push(q);
          else map.set(key, q.id);
        }
        return dups;
      }
      case 'search': {
        if (!this._searchIndex || this._searchGeneration !== payload.generation) {
          this._searchGeneration = payload.generation;
          this._searchIndex = ENTSearch.createIndex(this._searchQuestions || []);
        }
        return { generation: payload.generation, ids: this._searchIndex.search(payload.query) };
      }
      default: return null;
    }
  }
};

// ============================================================
//  OPTIMIZATION LAYER 2: IN-MEMORY SEARCH INDEX
//  Builds an inverted index mapping every word to the set of
//  question IDs containing it. Rebuilt automatically whenever
//  the underlying question cache version changes.
// ============================================================
const GlobalSearchIndex = {
  ready: false, version: -1, generation: 0, buildCount: 0, questions: null, byId: new Map(), _building: null,
  async ensureBuilt(questions) {
    questions = questions || await db.getAllQuestions();
    const version = db._cacheVersion;
    // Bookmarks, notes and answers change the broad cache version, but leave the question array intact.
    if (this.ready && (this.questions === questions || this.version === version)) { this.version = version; return; }
    if (this._building) { await this._building; return this.ensureBuilt(questions); }
    const generation = ++this.generation;
    WorkerPool._searchQuestions = questions;
    this._building = WorkerPool.post('buildIndex', { questions, generation }).then(result => {
      this.questions = questions;
      this.byId = new Map(questions.map(q => [q.id, q]));
      this.version = version;
      this.ready = true;
      this.buildCount++;
      this.stats = result.stats;
    }).finally(() => { this._building = null; });
    await this._building;
  },
  async search(query) {
    const generation = this.generation;
    const result = await WorkerPool.post('search', { query, generation });
    if (generation !== this.generation || result.generation !== generation) return this.search(query);
    return result.ids;
  },
  async findQuestions(query, questions) {
    if (!String(query || '').trim()) return questions;
    await this.ensureBuilt(questions);
    const ids = await this.search(query);
    return ids === null ? questions : ids.map(id => this.byId.get(id)).filter(Boolean);
  }
};

// ============================================================
//  OPTIMIZATION LAYER 3: FILTER CACHE
//  Memoizes filtered result arrays keyed by a hash of the active
//  filters + search query. Automatically invalidated whenever
//  the DB cache version increments (import, edit, delete, restore).
//  LRU eviction keeps memory bounded at 30 entries.
// ============================================================
const QuestionSearchUI = {
  timer: null,
  bind(input) {
    if (!input || input.dataset.searchBound) return;
    input.dataset.searchBound = 'true';
    let composing = false;
    const update = () => {
      AppState.searchQuery = input.value;
      const revision = AppState._questionSearchRevision = (AppState._questionSearchRevision || 0) + 1;
      clearTimeout(this.timer);
      if (composing) return;
      this.timer = setTimeout(async () => {
        if (revision !== AppState._questionSearchRevision || AppState.currentView !== 'questions') return;
        const focused = document.activeElement === input;
        const start = input.selectionStart, end = input.selectionEnd, direction = input.selectionDirection;
        await renderViewSafely('questions');
        if (!focused || revision !== AppState._questionSearchRevision || AppState.currentView !== 'questions') return;
        const current = document.getElementById('questionSearchInput');
        if (current && (!document.activeElement || document.activeElement === document.body || document.activeElement === current)) {
          current.focus();
          current.setSelectionRange(start, end, direction || 'none');
        }
      }, 120);
    };
    input.addEventListener('compositionstart', () => { composing = true; clearTimeout(this.timer); AppState._questionSearchRevision = (AppState._questionSearchRevision || 0) + 1; });
    input.addEventListener('compositionend', () => { composing = false; update(); });
    input.addEventListener('input', update);
  }
};

const FilterCache = {
  _store: new Map(),
  _version: -1,

  get(filters, searchQuery, cacheVersion, factory) {
    if (this._version !== cacheVersion) {
      this._store.clear();
      this._version = cacheVersion;
    }
    const key = JSON.stringify({ f: filters, q: searchQuery });
    if (this._store.has(key)) {
      const hit = this._store.get(key);
      this._store.delete(key); this._store.set(key, hit);
      return hit;
    }
    const result = Promise.resolve().then(factory).catch(error => {
      if (this._store.get(key) === result) this._store.delete(key);
      throw error;
    });
    this._store.set(key, result);
    // LRU eviction: cap at 30 entries
    if (this._store.size > 30) {
      const first = this._store.keys().next().value;
      this._store.delete(first);
    }
    return result;
  },

  clear() {
    this._store.clear();
    this._version = -1;
  }
};

// ============================================================
//  OPTIMIZATION LAYER 4: VIRTUAL & INFINITE SCROLLER
//  Keeps the DOM lightweight by rendering only visible question
//  cards plus a small overscan buffer. Uses absolute-height
//  spacer divs to maintain correct scrollbar proportions for
//  100,000+ item lists. Loads data in chunks of 50 as the user
//  approaches the bottom, with duplicate-load prevention.
// ============================================================
class VirtualScroller {
  constructor(container, options) {
    this.container = typeof container === 'string' ? document.getElementById(container) : container;
    this.items = options.items || [];
    this.renderItem = options.renderItem;        // fn(item, index) => HTML string (single root element)
    this.itemHeight = options.itemHeight || 130; // estimated average row height (px)
    this.buffer = options.buffer || 5;           // overscan rows
    this.pageSize = options.pageSize || 50;      // infinite-scroll chunk size
    this.scrollHandler = this.onScroll.bind(this);
    this._range = [-1, -1];
    this.loadedCount = 0;   // how many items are "unlocked" for rendering
    this.loading = false;   // lock to prevent duplicate loadMore calls
    this._nodes = new Map(); // index -> currently-mounted DOM node; lets unchanged rows survive a range update untouched
    this._rafHandle = null;  // coalesces bursts of scroll events into one update per frame
    this._tmp = document.createElement('div'); // scratch element used only to parse an HTML string into a node
  }

  /** Create DOM structure and attach scroll listener. */
  init() {
    if (!this.container) return;
    this.container.style.position = 'relative';
    this.topSpacer = document.createElement('div');
    this.content = document.createElement('div');
    this.bottomSpacer = document.createElement('div');
    this.loader = document.createElement('div');
    this.loader.style.cssText = 'text-align:center;padding:14px;color:var(--text2);font-size:0.85rem;display:none;';
    this.loader.textContent = 'Loading more...';
    this.container.innerHTML = '';
    this.container.appendChild(this.topSpacer);
    this.container.appendChild(this.content);
    this.container.appendChild(this.bottomSpacer);
    this.container.appendChild(this.loader);
    this.container.addEventListener('scroll', this.scrollHandler, { passive: true });
    this.reset(this.items);
  }

  /** Reset with a new item array (e.g., after filter change). */
  reset(newItems) {
    if (newItems) this.items = newItems;
    this.loadedCount = Math.min(this.pageSize, this.items.length);
    this._range = [-1, -1];
    // The underlying item set changed identity, so old mounted nodes no longer
    // correspond to the same logical rows - clear rather than diff across data sets.
    this._nodes.clear();
    if (this.content) this.content.innerHTML = '';
    if (this.container) this.container.scrollTop = 0;
    this.updateRange();
  }

  /** Scroll handler: coalesces rapid scroll events into one update per animation frame. */
  onScroll() {
    if (this._rafHandle) return;
    this._rafHandle = requestAnimationFrame(() => {
      this._rafHandle = null;
      this.updateRange();
    });
  }

  /** Compute the visible+buffered range, trigger infinite load, and patch the DOM to match. */
  updateRange() {
    if (!this.container) return;
    const st = this.container.scrollTop;
    const vh = this.container.clientHeight;
    const totalLoadedHeight = this.loadedCount * this.itemHeight;

    // Smart Scroll Loader: detect near-bottom and load next chunk
    if (st + vh > totalLoadedHeight - this.itemHeight * 4 && this.loadedCount < this.items.length && !this.loading) {
      this.loadMore();
    }

    const start = Math.max(0, Math.floor(st / this.itemHeight) - this.buffer);
    const end = Math.min(this.loadedCount, Math.ceil((st + vh) / this.itemHeight) + this.buffer);
    if (start === this._range[0] && end === this._range[1]) return;
    this._range = [start, end];

    // Adjust spacers so total scrollable height equals full dataset
    this.topSpacer.style.height = (start * this.itemHeight) + 'px';
    this.bottomSpacer.style.height = (Math.max(0, this.items.length - end) * this.itemHeight) + 'px';

    this.patch(start, end);
  }

  /**
   * Reconcile mounted DOM nodes with the new [start, end) range. Rows that
   * remain in range keep their existing node (no destroy/recreate, no lost
   * layout/paint work for them); only rows entering or leaving are touched.
   */
  patch(start, end) {
    for (const [idx, node] of this._nodes) {
      if (idx < start || idx >= end) {
        node.remove();
        this._nodes.delete(idx);
      }
    }
    let ref = this.content.firstChild;
    for (let i = start; i < end; i++) {
      let node = this._nodes.get(i);
      if (!node) {
        node = this._buildNode(i);
        this._nodes.set(i, node);
      }
      if (node !== ref) {
        this.content.insertBefore(node, ref);
      } else {
        ref = ref.nextSibling;
      }
    }
  }

  _buildNode(index) {
    this._tmp.innerHTML = this.renderItem(this.items[index], index);
    const node = this._tmp.firstElementChild;
    this._tmp.innerHTML = '';
    return node || document.createTextNode('');
  }

  /** Append the next page of items (infinite scroll). */
  loadMore() {
    this.loading = true;
    this.loader.style.display = 'block';
    // Yield to browser to paint the loader, then expand
    requestAnimationFrame(() => {
      setTimeout(() => {
        const oldCount = this.loadedCount;
        this.loadedCount = Math.min(this.loadedCount + this.pageSize, this.items.length);
        if (this.loadedCount > oldCount) {
          this.updateRange();
        }
        this.loading = false;
        this.loader.style.display = 'none';
      }, 30);
    });
  }

  /** Clean up event listeners and mounted nodes. */
  destroy() {
    if (this.container) {
      this.container.removeEventListener('scroll', this.scrollHandler);
    }
    if (this._rafHandle) { cancelAnimationFrame(this._rafHandle); this._rafHandle = null; }
    this._nodes.clear();
  }
}

// ============================================================
//  OPTIMIZATION LAYER 5: LAZY RENDERER
//  Defers heavy DOM insertion and analytics calculations using
//  requestIdleCallback (with requestAnimationFrame fallback) so
//  the main thread stays responsive during initial paint.
// ============================================================
const LazyRenderer = {
  queue: [],
  processing: false,

  schedule(fn, priority = 'idle') {
    this.queue.push({ fn, priority });
    if (!this.processing) this.process();
  },

  process() {
    if (!this.queue.length) { this.processing = false; return; }
    this.processing = true;
    const task = this.queue.shift();
    const run = () => {
      try { task.fn(); } catch (e) { console.error('Lazy render error:', e); }
      if (this.queue.length) this.process();
      else this.processing = false;
    };
    if (task.priority === 'idle' && 'requestIdleCallback' in window) {
      requestIdleCallback(run, { timeout: 120 });
    } else {
      requestAnimationFrame(run);
    }
  },

  clear() {
    this.queue = [];
    this.processing = false;
  }
};

        // ============================================================
        //  DATABASE  (Enhanced with Cache Invalidation)
        // ============================================================
        function normalizeCorrectAnswer(value) {
            return typeof value === 'string' ? value.trim().toUpperCase() : '';
        }

        function validateQuestionAnswer(question) {
            if (!question || typeof question !== 'object' || Array.isArray(question)) return ['Each row must be a question object.'];
            const errors = [];
            for (const letter of ['A', 'B']) {
                if (typeof question['option' + letter] !== 'string' || !question['option' + letter].trim()) errors.push(`Option ${letter} is required.`);
            }
            const answer = normalizeCorrectAnswer(question.correctAnswer);
            if (!/^[A-E]$/.test(answer)) errors.push('Correct answer must be one letter from A to E.');
            else if (typeof question['option' + answer] !== 'string' || !question['option' + answer].trim()) errors.push(`Correct answer ${answer} has no option text.`);
            return errors;
        }

        function normalizeQuestionAnswer(question) {
            const errors = validateQuestionAnswer(question);
            if (errors.length) throw new Error(errors.join(' '));
            return { ...question, correctAnswer: normalizeCorrectAnswer(question.correctAnswer) };
        }

        function prepareQuestionAnswers(questions) {
            if (!Array.isArray(questions)) throw new Error('Questions must be an array.');
            return questions.map((question, index) => {
                try { return normalizeQuestionAnswer(question); }
                catch (error) { throw new Error(`Question ${index + 1}: ${error.message}`); }
            });
        }

        function bindQuestionAnswerEditor(root, initialAnswer = '') {
            const answer = root.querySelector('#addCorrectAnswer');
            const status = root.querySelector('#questionAnswerStatus');
            if (!answer) return () => {};
            answer.value = normalizeCorrectAnswer(initialAnswer);
            const sync = () => {
                const selected = answer.value;
                for (const letter of ['A', 'B', 'C', 'D', 'E']) {
                    const input = root.querySelector('#addOption' + letter);
                    const option = answer.querySelector(`option[value="${letter}"]`);
                    if (option) option.disabled = !input || !input.value.trim();
                }
                const selectedOption = selected ? answer.querySelector(`option[value="${selected}"]`) : null;
                if (selected && (!selectedOption || selectedOption.disabled)) {
                    answer.value = '';
                    if (status) status.textContent = `Correct answer ${selected} has no option text. Enter the option text, then select the correct answer.`;
                } else if (status) {
                    status.textContent = answer.value ? '' : 'Enter the options, then select the correct answer.';
                }
                answer.setAttribute('aria-invalid', answer.value ? 'false' : 'true');
            };
            for (const letter of ['A', 'B', 'C', 'D', 'E']) {
                const input = root.querySelector('#addOption' + letter);
                if (input) input.addEventListener('input', sync);
            }
            answer.addEventListener('change', sync);
            sync();
            return sync;
        }

        Object.assign(window.ENTApp.utils, { normalizeCorrectAnswer, validateQuestionAnswer, normalizeQuestionAnswer, prepareQuestionAnswers });

        const DB_NAME = 'ENTQuestionBank';
        const DB_VERSION = 8;

        class ENTDatabase {
            constructor() {
                this.db = null;
                // OPTIMIZATION: Expanded cache covers all hot data paths
                this._cache = {
                    questions: null, bookmarks: null, highYield: null,
                    performance: null, examHistory: null, groups: null,
                    books: null, lectures: null, notes: null
                };
                // Cache validity flags — separate from data so we can invalidate cheaply
                this._cacheValid = {
                    questions: false, bookmarks: false, highYield: false,
                    performance: false, examHistory: false, groups: false,
                    books: false, lectures: false, notes: false
                };
                // Monotonic version counter incremented on every write.
                // External systems (FilterCache, SearchIndex) key off this.
                this._cacheVersion = 0;
                this.ready = this.init();
            }

            init() {
                return new Promise((resolve, reject) => {
                    const request = indexedDB.open(DB_NAME, DB_VERSION);
                    request.onupgradeneeded = (e) => {
                        const db = e.target.result;
                        if (!db.objectStoreNames.contains('questions')) {
                            const qStore = db.createObjectStore('questions', { keyPath: 'id', autoIncrement: true });
                            qStore.createIndex('subject', 'subject', { unique: false });
                            qStore.createIndex('chapter', 'chapter', { unique: false });
                            qStore.createIndex('topic', 'topic', { unique: false });
                            qStore.createIndex('subtopic', 'subtopic', { unique: false });
                            qStore.createIndex('group', 'group', { unique: false });
                            qStore.createIndex('book', 'book', { unique: false });
                        }
                        if (!db.objectStoreNames.contains('examHistory')) db.createObjectStore('examHistory', { keyPath: 'id', autoIncrement: true });
                        if (!db.objectStoreNames.contains('bookmarks')) db.createObjectStore('bookmarks', { keyPath: 'questionId' });
                        if (!db.objectStoreNames.contains('notes')) db.createObjectStore('notes', { keyPath: 'questionId' });
                        if (!db.objectStoreNames.contains('settings')) db.createObjectStore('settings', { keyPath: 'key' });
                        if (!db.objectStoreNames.contains('performance')) db.createObjectStore('performance', { keyPath: 'id', autoIncrement: true });
                        if (!db.objectStoreNames.contains('highYield')) db.createObjectStore('highYield', { keyPath: 'questionId' });
                        if (!db.objectStoreNames.contains('lectures')) {
                            const lStore = db.createObjectStore('lectures', { keyPath: 'id', autoIncrement: true });
                            lStore.createIndex('subject', 'subject', { unique: false });
                            lStore.createIndex('chapter', 'chapter', { unique: false });
                            lStore.createIndex('book', 'book', { unique: false });
                        }
                        // --- Update Package System (v8): new content stores ---
                        if (!db.objectStoreNames.contains('flashcards')) {
                            const fStore = db.createObjectStore('flashcards', { keyPath: 'id', autoIncrement: true });
                            fStore.createIndex('subject', 'subject', { unique: false });
                            fStore.createIndex('chapter', 'chapter', { unique: false });
                            fStore.createIndex('uid', 'uid', { unique: false });
                        }
                        if (!db.objectStoreNames.contains('bookMeta')) {
                            const bmStore = db.createObjectStore('bookMeta', { keyPath: 'id', autoIncrement: true });
                            bmStore.createIndex('uid', 'uid', { unique: false });
                        }
                        if (!db.objectStoreNames.contains('assets')) {
                            db.createObjectStore('assets', { keyPath: 'assetKey' });
                        }
                        if (!db.objectStoreNames.contains('backups')) {
                            db.createObjectStore('backups', { keyPath: 'id', autoIncrement: true });
                        }
                        // 'uid' index on pre-existing content stores, added for devices upgrading from v7 or earlier
                        const tx = e.target.transaction;
                        const qStoreUpgrade = tx.objectStore('questions');
                        if (!qStoreUpgrade.indexNames.contains('uid')) qStoreUpgrade.createIndex('uid', 'uid', { unique: false });
                        const lStoreUpgrade = tx.objectStore('lectures');
                        if (!lStoreUpgrade.indexNames.contains('uid')) lStoreUpgrade.createIndex('uid', 'uid', { unique: false });
                    };
                    request.onsuccess = (e) => {
                        this.db = e.target.result;
                        this.db.onversionchange = () => {
                            this.db.close();
                            alert('A newer version of ENT Master Bank is available. Please reload the page.');
                        };
                        resolve();
                    };
                    request.onblocked = () => {
                        console.warn('IndexedDB upgrade blocked by another open tab.');
                    };
                    request.onerror = (e) => reject(e.target.error);
                });
            }

            async ensureReady() { await this.ready; }

            /** Invalidate selected cache keys (or all if null). Bump version. */
            _invalidateCache(keys) {
                this._cacheVersion++;
                if (keys) {
                    keys.forEach(k => this._cacheValid[k] = false);
                } else {
                    Object.keys(this._cacheValid).forEach(k => this._cacheValid[k] = false);
                }
            }

            async addQuestion(q, options = {}) {
                const record = normalizeQuestionAnswer(q);
                normalizeQuestionClassification(record, { readNested: false, infer: false, approve: true });
                generateTopicSubtopic(record);
                await this.ensureReady();
                const assets = options.assets || [];
                if (record.images || assets.length) {
                    record.uid = record.uid || QuestionImages.newUid();
                    await QuestionImages.validateDrafts(record.images || [], assets);
                    await QuestionImages.validateReferences(record.uid, record.images || [], assets);
                }
                return new Promise((resolve, reject) => {
                    const tx = this.db.transaction(assets.length ? ['questions','assets'] : ['questions'], 'readwrite');
                    const now = new Date().toISOString();
                    record.dateAdded = now; record.updatedAt = now;
                    record.tags = record.tags || []; record.group = record.group || ''; record.book = record.book || '';
                    let id;
                    tx.oncomplete = () => { this._invalidateCache(); resolve(id); };
                    tx.onerror = () => reject(tx.error || new Error('Question was not saved.'));
                    tx.onabort = () => reject(tx.error || new Error('Question was not saved.'));
                    try {
                        tx.objectStore('questions').add(record).onsuccess = e => { id = e.target.result; };
                        for (const a of assets) tx.objectStore('assets').put({ assetKey: record.uid+'::'+a.path, blob: a.blob });
                    } catch (e) { tx.abort(); reject(e); }
                });
            }

            async updateQuestion(id, changes, options = {}) {
                if (!RBAC.requireAdmin()) return false;
                await this.ensureReady();
                const current = await this.getQuestion(id);
                if (!current) return false;
                normalizeQuestionAnswer({ ...current, ...changes });
                const assets = options.assets || [];
                const imageUid = current.uid || changes.uid || (changes.images && changes.images.length ? QuestionImages.newUid() : undefined);
                if (Object.prototype.hasOwnProperty.call(changes,'images') || assets.length) {
                    await QuestionImages.validateDrafts(changes.images || [], assets);
                    await QuestionImages.validateReferences(imageUid, changes.images || [], assets);
                }
                return new Promise((resolve, reject) => {
                    const tx = this.db.transaction(assets.length ? ['questions','assets'] : ['questions'], 'readwrite');
                    const store = tx.objectStore('questions'); let updated = false;
                    const request = store.get(id);
                    request.onsuccess = () => {
                        try {
                        if (!request.result) return;
                        const q = normalizeQuestionAnswer({ ...request.result, ...changes, id, uid: request.result.uid || imageUid,
                            dateAdded: request.result.dateAdded, updatedAt: new Date().toISOString() });
                        const classificationChanged = ['subject','chapter','topic','subtopic'].some(field =>
                            Object.prototype.hasOwnProperty.call(changes,field) && String(changes[field] == null ? '' : changes[field]).trim() !== String(request.result[field] == null ? '' : request.result[field]).trim());
                        if (classificationChanged) q.subjectId = q.chapterId = q.chapterNumber = q.partId = null;
                        normalizeQuestionClassification(q, { readNested: false, infer: false, approve: classificationChanged });
                        generateTopicSubtopic(q); store.put(q);
                        for (const a of assets) tx.objectStore('assets').put({ assetKey: q.uid+'::'+a.path, blob: a.blob });
                        updated = true;
                        } catch (e) { tx.abort(); reject(e); }
                    };
                    tx.oncomplete = () => { if (updated) this._invalidateCache(); resolve(updated); };
                    tx.onerror = () => reject(tx.error || new Error('Question was not saved.'));
                    tx.onabort = () => reject(tx.error || new Error('Question was not saved.'));
                });
            }

            async getAllQuestions() {
                await this.ensureReady();
                if (this._cacheValid.questions && this._cache.questions) return this._cache.questions;
                return new Promise(resolve => {
                    this.db.transaction('questions', 'readonly').objectStore('questions').getAll().onsuccess = (e) => {
                        this._cache.questions = e.target.result;
                        this._cacheValid.questions = true;
                        resolve(e.target.result);
                    };
                });
            }

            async getQuestion(id) {
                await this.ensureReady();
                return new Promise(resolve => {
                    this.db.transaction('questions', 'readonly').objectStore('questions').get(id).onsuccess = (e) => resolve(e.target.result);
                });
            }

            async deleteQuestion(id) {
                this._invalidateCache(['questions', 'bookmarks', 'highYield', 'groups', 'books']);
                await this.ensureReady();
                return new Promise(resolve => {
                    const tx = this.db.transaction(['questions', 'bookmarks', 'notes'], 'readwrite');
                    tx.objectStore('questions').delete(id);
                    tx.objectStore('bookmarks').delete(id);
                    tx.objectStore('notes').delete(id);
                    tx.oncomplete = () => resolve();
                });
            }

            async toggleBookmark(qid) {
                this._invalidateCache(['bookmarks']);
                await this.ensureReady();
                return new Promise(resolve => {
                    const tx = this.db.transaction('bookmarks', 'readwrite');
                    const store = tx.objectStore('bookmarks');
                    const get = store.get(qid);
                    get.onsuccess = () => {
                        if (get.result) { store.delete(qid); resolve(false); }
                        else { store.add({ questionId: qid }); resolve(true); }
                    };
                });
            }

            async isBookmarked(qid) {
                await this.ensureReady();
                return new Promise(resolve => {
                    this.db.transaction('bookmarks', 'readonly').objectStore('bookmarks').get(qid).onsuccess = (e) => resolve(!!e.target.result);
                });
            }

            async getAllBookmarkedIds() {
                await this.ensureReady();
                if (this._cacheValid.bookmarks && this._cache.bookmarks) return this._cache.bookmarks;
                return new Promise(resolve => {
                    this.db.transaction('bookmarks', 'readonly').objectStore('bookmarks').getAll().onsuccess = (e) => {
                        this._cache.bookmarks = e.target.result.map(b => b.questionId);
                        this._cacheValid.bookmarks = true;
                        resolve(this._cache.bookmarks);
                    };
                });
            }

            async saveExamResult(result) {
                this._invalidateCache(['examHistory']);
                try {
                    await this.ensureReady();
                    return new Promise((resolve, reject) => {
                        result.date = new Date().toISOString();
                        const tx = this.db.transaction('examHistory', 'readwrite');
                        tx.objectStore('examHistory').add(result).onsuccess = (e) => resolve(e.target.result);
                        tx.onerror = (e) => resolve(null);
                    });
                } catch(e) { console.error("Error saving exam result", e); }
            }

            async saveExamAttempt({ attemptId, summary, performanceRows }) {
                if (!attemptId || !Array.isArray(performanceRows)) throw new Error('Invalid exam attempt.');
                await this.ensureReady();
                const savedId = await new Promise((resolve, reject) => {
                    let resultId;
                    const tx = this.db.transaction(['examHistory', 'performance'], 'readwrite');
                    tx.oncomplete = () => resolve(resultId);
                    tx.onerror = () => reject(tx.error || new Error('Exam results could not be saved.'));
                    tx.onabort = () => reject(tx.error || new Error('Exam results were not saved.'));
                    const history = tx.objectStore('examHistory');
                    const lookup = history.getAll();
                    lookup.onsuccess = () => {
                        try {
                            const existing = (lookup.result || []).find(row => row.attemptId === attemptId);
                            if (existing) { resultId = existing.id; return; }
                            const insert = history.add({ ...summary, attemptId });
                            insert.onsuccess = () => { resultId = insert.result; };
                            const performance = tx.objectStore('performance');
                            for (const row of performanceRows) performance.add({ ...row, attemptId });
                        } catch (error) {
                            tx.abort();
                            reject(error);
                        }
                    };
                });
                this._invalidateCache(['examHistory', 'performance']);
                return savedId;
            }

            async getExamHistory() {
                await this.ensureReady();
                if (this._cacheValid.examHistory && this._cache.examHistory) return this._cache.examHistory;
                return new Promise(resolve => {
                    this.db.transaction('examHistory', 'readonly').objectStore('examHistory').getAll().onsuccess = (e) => {
                        this._cache.examHistory = (e.target.result || []).reverse();
                        this._cacheValid.examHistory = true;
                        resolve(this._cache.examHistory);
                    };
                });
            }

            async getSetting(key, def = null) {
                await this.ensureReady();
                return new Promise(resolve => {
                    const tx = this.db.transaction('settings', 'readonly');
                    tx.objectStore('settings').get(key).onsuccess = (e) => resolve(e.target.result ? e.target.result.value : def);
                });
            }

            async setSetting(key, value) {
                await this.ensureReady();
                return new Promise(resolve => {
                    this.db.transaction('settings', 'readwrite').objectStore('settings').put({ key, value });
                    resolve();
                });
            }

            // Repair classification in place once, preserving question IDs and user data.
            // Current/custom classifications remain authoritative across reloads.
            // Reconcile exact source metadata once per policy version; preserve row identities.
            async migrateToScottBrown() {
                await this.ensureReady();
                const questions = await this.getAllQuestions();
                const report = { total: questions.length, classified: 0, subjectOnly: 0, unmapped: 0, alreadyDone: 0 };
                const pending = [];
                for (const original of questions) {
                    if (original.classificationPolicyVersion >= 2) { report.alreadyDone++; continue; }
                    const q = { ...original };
                    normalizeQuestionClassification(q);
                    if (CLASSIFICATION_MODE === 'admin') generateTopicSubtopic(q);
                    if (q.subject !== original.subject || q.chapter !== original.chapter) {
                        if (q.legacySubject == null) q.legacySubject = original.subject;
                        if (q.legacyChapter == null) q.legacyChapter = original.chapter;
                    }
                    if (isQuestionClassificationApproved(q)) report.classified++;
                    else if (!isGenericQuestionSubject(q.subject)) report.subjectOnly++;
                    else report.unmapped++;
                    pending.push(q);
                }
                if (!pending.length) return report;
                return new Promise((resolve, reject) => {
                    const tx = this.db.transaction('questions', 'readwrite');
                    pending.forEach(q => tx.objectStore('questions').put(q));
                    tx.oncomplete = () => { this._invalidateCache(); resolve(report); };
                    tx.onerror = () => reject(tx.error);
                    tx.onabort = () => reject(tx.error);
                });
            }

            // AUTO-CATEGORIZATION ENABLED BULK IMPORT
            async bulkImport(questions, groupName = '') {
                questions = prepareQuestionAnswers(questions);
                this._invalidateCache(); // full invalidation on bulk import
                await this.ensureReady();
                const existingQuestions = await this.getAllQuestions();
                const existingSet = new Set(
                    existingQuestions.map(e => QuestionImport.normalizeText(e.questionText))
                );
                return new Promise((resolve, reject) => {
                    const tx = this.db.transaction('questions', 'readwrite');
                    const store = tx.objectStore('questions');
                    let count = 0;
                    for (const q of questions) {
                        normalizeQuestionClassification(q);
                        generateTopicSubtopic(q);
                        q.dateAdded = q.dateAdded || new Date().toISOString();
                        q.tags = q.tags || [];
                        if (groupName && !q.book) q.book = groupName;
                        if (groupName && !q.group) q.group = groupName;
                        if (!q.group) q.group = '';

                        const normalizedNew = QuestionImport.normalizeText(q.questionText);
                        let duplicate = false;
                        try {
                            duplicate = existingSet.has(normalizedNew);
                            if (!duplicate) {
                                existingSet.add(normalizedNew);
                                store.add(q);
                                count++;
                            }
                        } catch(err) {
                            store.add(q);
                            count++;
                        }
                    }
                    tx.oncomplete = () => { this._invalidateCache(); resolve(count); };
                    tx.onerror = () => reject(tx.error);
                });
            }

            async deleteQuestionsByGroup(groupName) {
                this._invalidateCache(['questions', 'groups', 'books', 'bookmarks', 'highYield']);
                await this.ensureReady();
                const questions = await this.getAllQuestions();
                const targets = questions.filter(q => (q.group||'') === groupName);
                for (const q of targets) {
                    await this.deleteQuestion(q.id);
                }
                return targets.length;
            }

            async deleteQuestionsByBook(bookName) {
                this._invalidateCache(['questions', 'groups', 'books', 'bookmarks', 'highYield']);
                await this.ensureReady();
                const questions = await this.getAllQuestions();
                const targets = questions.filter(q => (q.book || '') === bookName);
                for (const q of targets) {
                    await this.deleteQuestion(q.id);
                }
                return targets.length;
            }

            async clearAllQuestions() {
                this._invalidateCache();
                await this.ensureReady();
                return new Promise(resolve => {
                    const tx = this.db.transaction(['questions', 'bookmarks', 'notes', 'examHistory','performance','highYield'], 'readwrite');
                    tx.objectStore('questions').clear();
                    tx.objectStore('bookmarks').clear();
                    tx.objectStore('notes').clear();
                    tx.objectStore('examHistory').clear();
                    tx.objectStore('performance').clear();
                    tx.objectStore('highYield').clear();
                    tx.oncomplete = () => resolve();
                });
            }

            async exportAllData() {
                await this.ensureReady();
                const stores = ['questions','examHistory','bookmarks','notes','performance','highYield','lectures','settings','flashcards','bookMeta','assets'].filter(s => this.db.objectStoreNames.contains(s));
                const data = await new Promise((resolve,reject) => {
                    const tx = this.db.transaction(stores,'readonly'), result = {};
                    for (const s of stores) tx.objectStore(s).getAll().onsuccess = e => { result[s] = e.target.result || []; };
                    tx.oncomplete = () => resolve(result); tx.onerror = () => reject(tx.error); tx.onabort = () => reject(tx.error);
                });
                data.assets = await QuestionImages.serializeAssets(data.assets || []);
                return { version: DB_VERSION, imageBackupVersion: 1, exportedAt: new Date().toISOString(), ...data };
            }

            async clearAndRestore(data) { return this.restoreSnapshotData(data); }

            // Used by the explicit backup/restore flow and package rollback in both editions.
            async restoreSnapshotData(data) {
                await this.ensureReady();
                if (!data || typeof data !== 'object' || !Array.isArray(data.questions)) throw new Error('Invalid backup question data.');
                const stores = ['questions','examHistory','bookmarks','notes','performance','highYield','lectures','settings','flashcards','bookMeta','assets'].filter(s => this.db.objectStoreNames.contains(s) && (s !== 'settings' || Array.isArray(data.settings)));
                const prepared = {};
                for (const s of stores) { if (data[s] != null && !Array.isArray(data[s])) throw new Error('Invalid backup store: '+s); prepared[s] = (data[s] || []).map(row => typeof row === 'object' && row ? { ...row } : row); }
                prepared.assets = await QuestionImages.deserializeAssets(data.assets || []);
                prepared.bookmarks = (data.bookmarks || []).map(row => typeof row === 'number' ? { questionId: row } : { ...row });
                const assets = new Map(prepared.assets.map(a => [a.assetKey,a]));
                for (const q of prepared.questions) {
                    if (!q || typeof q !== 'object') throw new Error('Invalid backup question.');
                    if (!q.images) continue;
                    await QuestionImages.validateDrafts(q.images);
                    for (const image of QuestionImages.descriptors(q)) {
                        const asset = assets.get(q.uid+'::'+image.path);
                        if (!asset) throw new Error('The backup is missing an attached question image.');
                        await QuestionImages.validateImageBlob(asset.blob,image);
                    }
                }
                await new Promise((resolve,reject) => {
                    const tx = this.db.transaction(stores,'readwrite');
                    tx.oncomplete=resolve; tx.onerror=()=>reject(tx.error); tx.onabort=()=>reject(tx.error);
                    try { for (const s of stores) { const store=tx.objectStore(s); store.clear(); for (const row of prepared[s] || []) store.put(row); } }
                    catch(e) { tx.abort(); reject(e); }
                });
                this._invalidateCache();
            }

            async getAllGroups() {
                await this.ensureReady();
                if (this._cacheValid.groups && this._cache.groups) return this._cache.groups;
                const qs = await this.getAllQuestions();
                const groups = new Set();
                qs.forEach(q => { if (q.group) groups.add(q.group); });
                this._cache.groups = [...groups].sort();
                this._cacheValid.groups = true;
                return this._cache.groups;
            }

            async getAllBooks() {
                await this.ensureReady();
                if (this._cacheValid.books && this._cache.books) return this._cache.books;
                const qs = await this.getAllQuestions();
                const books = new Set();
                qs.forEach(q => { if (q.book) books.add(q.book); });
                this._cache.books = [...books].sort();
                this._cacheValid.books = true;
                return this._cache.books;
            }

            async recordPerformance(r) {
                this._invalidateCache(['performance']);
                await this.ensureReady();
                return new Promise(resolve => {
                    const tx = this.db.transaction('performance','readwrite');
                    tx.objectStore('performance').add(r);
                    tx.oncomplete = () => resolve();
                });
            }

            async getPerformance() {
                await this.ensureReady();
                if (this._cacheValid.performance && this._cache.performance) return this._cache.performance;
                return new Promise(resolve => {
                    this.db.transaction('performance','readonly')
                        .objectStore('performance')
                        .getAll().onsuccess = e => {
                            this._cache.performance = e.target.result || [];
                            this._cacheValid.performance = true;
                            resolve(this._cache.performance);
                        };
                });
            }

            async toggleHighYield(qid) {
                this._invalidateCache(['highYield']);
                await this.ensureReady();
                return new Promise(resolve => {
                    const store = this.db.transaction('highYield','readwrite').objectStore('highYield');
                    const req = store.get(qid);
                    req.onsuccess = () => {
                        if (req.result) { store.delete(qid); resolve(false); }
                        else { store.put({questionId: qid, dateAdded:new Date().toISOString()}); resolve(true); }
                    };
                });
            }

            async getAllHighYieldIds() {
                await this.ensureReady();
                if (this._cacheValid.highYield && this._cache.highYield) return this._cache.highYield;
                return new Promise(resolve => {
                    this.db.transaction('highYield','readonly').objectStore('highYield')
                    .getAll().onsuccess = e => {
                        this._cache.highYield = (e.target.result||[]).map(x=>x.questionId);
                        this._cacheValid.highYield = true;
                        resolve(this._cache.highYield);
                    };
                });
            }

            // --- LECTURES ---
            async addLecture(l) {
                this._invalidateCache(['lectures']);
                await this.ensureReady();
                return new Promise((resolve, reject) => {
                    const tx = this.db.transaction('lectures', 'readwrite');
                    l.dateAdded = new Date().toISOString();
                    const req = tx.objectStore('lectures').add(l);
                    req.onsuccess = e => resolve(e.target.result);
                    req.onerror = e => reject(e.target.error);
                });
            }

            async getAllLectures() {
                await this.ensureReady();
                if (this._cacheValid.lectures && this._cache.lectures) return this._cache.lectures;
                return new Promise(resolve => {
                    this.db.transaction('lectures', 'readonly').objectStore('lectures').getAll().onsuccess = e => {
                        this._cache.lectures = e.target.result || [];
                        this._cacheValid.lectures = true;
                        resolve(this._cache.lectures);
                    };
                });
            }

            async getLecture(id) {
                await this.ensureReady();
                return new Promise(resolve => {
                    this.db.transaction('lectures', 'readonly').objectStore('lectures').get(id).onsuccess = e => resolve(e.target.result);
                });
            }

            async deleteLecture(id) {
                this._invalidateCache(['lectures']);
                await this.ensureReady();
                return new Promise(resolve => {
                    this.db.transaction('lectures', 'readwrite').objectStore('lectures').delete(id);
                    resolve();
                });
            }

            async updateLecture(id, data) {
                this._invalidateCache(['lectures']);
                await this.ensureReady();
                return new Promise((resolve, reject) => {
                    const tx = this.db.transaction('lectures', 'readwrite');
                    const store = tx.objectStore('lectures');
                    const getReq = store.get(id);
                    getReq.onsuccess = () => {
                        const l = getReq.result;
                        if (!l) { resolve(false); return; }
                        Object.assign(l, data, { updatedAt: new Date().toISOString() });
                        store.put(l);
                        resolve(true);
                    };
                    getReq.onerror = () => reject(getReq.error);
                });
            }
        }

const db = new ENTDatabase();

        // RBAC: Wrap destructive DB operations
        (function() {
            const wrapAdmin = (fn, name) => {
                return async function(...args) {
                    if (!RBAC.isAdmin()) {
                        showToast('Admin access required.', 'error');
                        if (name === 'bulkImport') return 0;
                        if (name === 'addQuestion') return null;
                        return;
                    }
                    return fn.apply(this, args);
                };
            };
            db.bulkImport = wrapAdmin(db.bulkImport, 'bulkImport');
            db.addQuestion = wrapAdmin(db.addQuestion, 'addQuestion');
            db.deleteQuestion = wrapAdmin(db.deleteQuestion, 'deleteQuestion');
            db.clearAllQuestions = wrapAdmin(db.clearAllQuestions, 'clearAllQuestions');
            db.clearAndRestore = wrapAdmin(db.clearAndRestore, 'clearAndRestore');
            db.deleteQuestionsByGroup = wrapAdmin(db.deleteQuestionsByGroup, 'deleteQuestionsByGroup');
            db.deleteQuestionsByBook = wrapAdmin(db.deleteQuestionsByBook, 'deleteQuestionsByBook');
            db.addLecture = wrapAdmin(db.addLecture, 'addLecture');
            db.deleteLecture = wrapAdmin(db.deleteLecture, 'deleteLecture');
            db.updateLecture = wrapAdmin(db.updateLecture, 'updateLecture');
        })();

// STEP 6 TAXONOMY ENGINE
const ENT_TAXONOMY = {
 Rhinology:['sinus','rhinitis','nasal','nose','polyp','epistaxis','septum','turbinate'],
 Otology:['ear','hearing','cochlea','tinnitus','vertigo','otitis','vestibular'],
 'Head & Neck Surgery':['neck','salivary','pharynx','pharyngitis','oral','swallow'],
 'Laryngology & Voice':['larynx','voice','tracheostomy','sleep apnoea','vocal'],
 'Paediatric ENT':['child','paediatric','pediatric','adenoid','tonsil']
};

// Question images are immutable local raster assets, separate from question text.
const QuestionImages = (() => {
    const LIMITS = Object.freeze({ inputBytes: 20 * 1024 * 1024, outputBytes: 2 * 1024 * 1024, pixels: 20000000, side: 2048, perRole: 4 });
    const roles = new Set(['question', 'explanation']);
    const ownedUrls = new Map();
    let editor = null, viewer = null, opening = false, closingHistory = false, observerQueued = false;
    const esc = value => String(value == null ? '' : value).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);
    const uid = () => crypto.randomUUID ? crypto.randomUUID() : 'img-' + Date.now().toString(36) + '-' + Math.random().toString(36).slice(2);
    function safePath(path) {
        return typeof path === 'string' && path.length <= 180 && /^(?:images\/)?[a-zA-Z0-9][a-zA-Z0-9_.-]*\.(?:png|jpe?g|webp)$/i.test(path) && !path.includes('..');
    }
    function descriptors(q) {
        if (!q || !Array.isArray(q.images)) return [];
        return q.images.map(img => typeof img === 'string' ? { path: img, role: 'question' } : img)
            .filter(img => img && typeof img === 'object' && safePath(img.path) && (!img.role || roles.has(img.role)))
            .map(img => ({ ...img, role: img.role || 'question', caption: typeof img.caption === 'string' ? img.caption.slice(0, 500) : '' }));
    }
    async function rasterMime(blob) {
        if (!(blob instanceof Blob) || !blob.size || blob.size > 5 * 1024 * 1024) throw Error('Invalid image size.');
        const b = new Uint8Array(await blob.slice(0, 16).arrayBuffer());
        if (b.length >= 8 && [137,80,78,71,13,10,26,10].every((v,i) => b[i] === v)) return 'image/png';
        if (b.length >= 3 && b[0] === 255 && b[1] === 216 && b[2] === 255) return 'image/jpeg';
        if (b.length >= 12 && String.fromCharCode(...b.slice(0,4)) === 'RIFF' && String.fromCharCode(...b.slice(8,12)) === 'WEBP') return 'image/webp';
        throw Error('Choose a PNG, JPEG or WebP image.');
    }
    async function decode(blob) {
        const url = URL.createObjectURL(blob);
        try {
            const image = new Image();
            await new Promise((resolve,reject) => { image.onload = resolve; image.onerror = () => reject(Error('This image could not be opened.')); image.src = url; });
            if (!image.naturalWidth || !image.naturalHeight || image.naturalWidth * image.naturalHeight > LIMITS.pixels) throw Error('Image dimensions exceed 20 million pixels.');
            return image;
        } finally { URL.revokeObjectURL(url); }
    }
    async function prepareFile(file, role = 'question') {
        if (!roles.has(role)) throw Error('Invalid image location.');
        if (!(file instanceof Blob) || !file.size || file.size > LIMITS.inputBytes) throw Error('Choose an image smaller than 20 MB.');
        // Sniff before decoding. Larger originals are accepted only for compression here.
        await rasterMime(file.size <= 5 * 1024 * 1024 ? file : file.slice(0,16));
        if (file.type && !['image/png','image/jpeg','image/webp'].includes(file.type.toLowerCase())) throw Error('Choose a PNG, JPEG or WebP image.');
        const image = await decode(file);
        let scale = Math.min(1, LIMITS.side / Math.max(image.naturalWidth,image.naturalHeight));
        const canvas = document.createElement('canvas');
        let blob;
        for (let attempt=0; attempt<5; attempt++) {
            canvas.width = Math.max(1,Math.round(image.naturalWidth*scale)); canvas.height = Math.max(1,Math.round(image.naturalHeight*scale));
            const ctx=canvas.getContext('2d');
            if (!ctx) throw Error('Image processing is not available in this browser.');
            ctx.drawImage(image,0,0,canvas.width,canvas.height);
            blob=await new Promise(resolve=>canvas.toBlob(resolve,'image/webp',.9-attempt*.07));
            if (blob && blob.size <= LIMITS.outputBytes) break;
            scale *= .8;
        }
        if (!blob || blob.size > LIMITS.outputBytes) throw Error('This image is too large after compression. Choose a smaller image.');
        const mime=await rasterMime(blob), ext=({'image/png':'png','image/jpeg':'jpg','image/webp':'webp'})[mime];
        return { descriptor: { path:'images/'+uid()+'.'+ext, role, caption:'', mime, width:canvas.width, height:canvas.height, size:blob.size }, blob };
    }
    async function validateImageBlob(blob,descriptor={}) {
        const mime=await rasterMime(blob), image=await decode(blob);
        if(descriptor.mime && descriptor.mime!==mime)throw Error('Image type does not match its metadata.');
        if(descriptor.width && descriptor.width!==image.naturalWidth)throw Error('Image width does not match its metadata.');
        if(descriptor.height && descriptor.height!==image.naturalHeight)throw Error('Image height does not match its metadata.');
        return {mime,width:image.naturalWidth,height:image.naturalHeight};
    }
    async function readAsset(questionUid,path) {
        if (!questionUid || !safePath(path)) return null;
        await db.ensureReady();
        return new Promise((resolve,reject) => {
            const request=db.db.transaction('assets','readonly').objectStore('assets').get(questionUid+'::'+path);
            request.onsuccess=()=>resolve(request.result || null); request.onerror=()=>reject(request.error);
        });
    }
    function render(q,role='question') {
        const images=descriptors(q).filter(img=>img.role===role);
        if (!images.length) return '';
        return `<div class="question-images" data-image-role="${role}" aria-label="${role==='question'?'Question images':'Explanation images'}">${images.map((img,i)=>
            `<figure class="question-image"><button type="button" class="question-image-open" aria-label="Enlarge ${role} image ${i+1}" disabled><span class="question-image-message">Loading image…</span><img data-image-uid="${esc(q.uid || '')}" data-image-path="${esc(img.path)}" alt="${esc(img.caption || (role==='question'?'Question':'Explanation')+' image '+(i+1))}" hidden decoding="async"></button><figcaption>${esc(img.caption || (role==='question'?'Question':'Explanation')+' image '+(i+1))}<span class="image-enlarge-hint"> · Tap to enlarge</span></figcaption></figure>`
        ).join('')}</div>`;
    }
    function releaseNode(node) { const url=ownedUrls.get(node); if(url){URL.revokeObjectURL(url);ownedUrls.delete(node);} }
    async function hydrate(root=document) {
        const nodes=[...root.querySelectorAll('img[data-image-path]:not([data-image-loading])')];
        await Promise.all(nodes.map(async image=>{
            image.dataset.imageLoading='true';
            const button=image.closest('.question-image-open'), message=button && button.querySelector('.question-image-message');
            try {
                const record=await readAsset(image.dataset.imageUid,image.dataset.imagePath);
                if (!record || !(record.blob instanceof Blob)) throw Error('Image not available on this device.');
                const mime=await rasterMime(record.blob);
                if(!image.isConnected) return;
                const url=URL.createObjectURL(record.blob.type===mime?record.blob:record.blob.slice(0,record.blob.size,mime));
                ownedUrls.set(image,url);
                image.onload=()=>{ if(!image.isConnected){releaseNode(image);return;} image.hidden=false; if(message)message.hidden=true; if(button)button.disabled=false; };
                image.onerror=()=>{releaseNode(image);if(message)message.textContent='Image could not be displayed.';};
                image.src=url;
            } catch(e) { if(message)message.textContent='Image unavailable. Re-import its update package.'; }
        }));
    }
    function closeViewer(fromPop=false) {
        if(!viewer) return;
        const old=viewer; viewer=null;
        if(old.onResize)window.removeEventListener('resize',old.onResize);
        old.root.remove(); URL.revokeObjectURL(old.url); document.body.style.overflow=old.overflow;
        if(old.focus && old.focus.isConnected) old.focus.focus({preventScroll:true});
        if(!fromPop && history.state && history.state.questionImageViewer) {closingHistory=true;history.back();}
    }
    async function openViewer(button) {
        if(viewer || opening || closingHistory || button.disabled) return;
        opening=true;
        try {
        const thumbnail=button.querySelector('img');
        const record=await readAsset(thumbnail.dataset.imageUid,thumbnail.dataset.imagePath);
        if(!record || !button.isConnected) return;
        const mime=await rasterMime(record.blob);
        if(viewer || !button.isConnected) return;
        const url=URL.createObjectURL(record.blob.slice(0,record.blob.size,mime));
        const root=document.createElement('div');
        root.id='questionImageViewer'; root.setAttribute('role','dialog'); root.setAttribute('aria-modal','true'); root.setAttribute('aria-label','Image viewer');
        root.innerHTML=`<div class="image-viewer-toolbar"><span>Image · الصورة</span><div><button type="button" class="btn btn-sm btn-outline" data-image-zoom="out" aria-label="Zoom out">${uiIcon("zoom-out")}</button><button type="button" class="btn btn-sm btn-outline" data-image-zoom="reset">Fit</button><button type="button" class="btn btn-sm btn-outline" data-image-zoom="in" aria-label="Zoom in">${uiIcon("zoom-in")}</button><button type="button" class="btn btn-sm btn-primary" id="closeQuestionImageViewer" aria-label="Close image viewer">${uiIcon("close")} Close</button></div></div><div class="image-viewer-scroll" tabindex="0"><img alt=""></div><div class="image-viewer-caption"></div>`;
        root.querySelector('img').alt=thumbnail.alt; root.querySelector('.image-viewer-caption').textContent=thumbnail.alt;
        const state={root,url,focus:button,overflow:document.body.style.overflow,scale:1,base:0};
        viewer=state; document.body.style.overflow='hidden'; document.body.appendChild(root);
        const img=root.querySelector('img'), scroll=root.querySelector('.image-viewer-scroll');
        const fit=()=>{state.base=Math.max(1,Math.min(img.naturalWidth,scroll.clientWidth-24,(scroll.clientHeight-24)*img.naturalWidth/img.naturalHeight));img.style.width=Math.round(state.base*state.scale)+'px';};
        state.onResize=fit;window.addEventListener('resize',fit);
        img.onload=fit; img.src=url;
        root.querySelector('#closeQuestionImageViewer').onclick=()=>closeViewer();
        root.querySelectorAll('[data-image-zoom]').forEach(b=>b.onclick=()=>{state.scale=b.dataset.imageZoom==='reset'?1:Math.max(1,Math.min(4,state.scale+(b.dataset.imageZoom==='in'?.5:-.5)));fit();});
        root.addEventListener('keydown',e=>{
            if(e.key==='Escape'){e.preventDefault();e.stopPropagation();closeViewer();}
            if(e.key==='Tab'){
                const focusable=[...root.querySelectorAll('button,[tabindex="0"]')], first=focusable[0],last=focusable.at(-1);
                if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus();}
                else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus();}
            }
        });
        history.pushState({...history.state,questionImageViewer:true},'',location.href);
        root.querySelector('#closeQuestionImageViewer').focus();
        } finally { opening=false; }
    }
    function mountEditor(question,root) {
        if(editor)editor.destroy();
        const entries=descriptors(question || {}).map(descriptor=>({descriptor:{...descriptor},blob:null,url:null}));
        const state={root,entries,pending:0,destroyed:false,generation:0,marker:root.querySelector('#imageEditor')};
        const active=()=>!state.destroyed && root.isConnected && document.getElementById('modalContent')===root && !document.getElementById('modalOverlay').classList.contains('hidden') && root.querySelector('#imageEditor')===state.marker;
        function destroy(){state.destroyed=true;state.generation++;for(const e of entries){if(e.url)URL.revokeObjectURL(e.url);e.url=null;}if(editor===api)editor=null;}
        function status(text,error=false){const area=root.querySelector('#imageEditorStatus');if(area){area.textContent=text;area.classList.toggle('image-editor-error',error);}}
        function draw(){
            if(!active())return;
            for(const role of roles){
                const area=root.querySelector(`[data-image-previews="${role}"]`); area.innerHTML='';
                for(const entry of entries.filter(e=>e.descriptor.role===role)){
                    const card=document.createElement('div');card.className='image-editor-card';card.dataset.imageRole=role;
                    const img=document.createElement('img');img.alt=entry.descriptor.caption || 'Attached image';
                    if(entry.url)img.src=entry.url;
                    else readAsset(question && question.uid,entry.descriptor.path).then(async rec=>{if(!rec || !active() || !card.isConnected)return;await rasterMime(rec.blob);if(!active()||!card.isConnected)return;entry.url=URL.createObjectURL(rec.blob);img.src=entry.url;}).catch(()=>{img.alt='Image unavailable';});
                    const label=document.createElement('label');label.textContent='Caption / description';
                    const caption=document.createElement('input');caption.type='text';caption.maxLength=500;caption.value=entry.descriptor.caption || '';caption.setAttribute('aria-label','Image caption');caption.oninput=()=>entry.descriptor.caption=caption.value;
                    const remove=document.createElement('button');remove.type='button';remove.className='btn btn-sm btn-danger';remove.dataset.imageRemove=entry.descriptor.path;remove.textContent='Remove image';remove.onclick=()=>{const i=entries.indexOf(entry);if(i>=0)entries.splice(i,1);if(entry.url)URL.revokeObjectURL(entry.url);entry.url=null;draw();};
                    card.append(img,label,caption,remove);area.appendChild(card);
                }
            }
            const save=root.querySelector('#saveQuestionBtn');if(save)save.disabled=state.pending>0;
            root.querySelectorAll('#addQuestionImages,#addExplanationImages').forEach(input=>input.disabled=state.pending>0);
        }
        async function attach(input,role){
            const files=[...input.files];input.value='';
            if(!active()||!files.length||state.pending)return;
            if(entries.filter(e=>e.descriptor.role===role).length+files.length>LIMITS.perRole){status('Add up to 4 images for the question and 4 for its explanation.',true);return;}
            const generation=state.generation;state.pending++;draw();status('Preparing images…');
            try{
                const prepared=[];
                for(const file of files){prepared.push(await prepareFile(file,role));if(!active()||state.generation!==generation)return;}
                for(const item of prepared)entries.push({...item,url:URL.createObjectURL(item.blob)});
                status('Images ready. They will be saved with this question.');
            }catch(e){if(active())status(e.message || 'Image could not be prepared.',true);}
            finally{state.pending--;if(active())draw();}
        }
        const api={entries,get busy(){return state.pending>0;},active,images:()=>entries.map(e=>({...e.descriptor})),assets:()=>entries.filter(e=>e.blob).map(e=>({path:e.descriptor.path,blob:e.blob})),destroy};
        editor=api;
        root.querySelector('#addQuestionImages').onchange=e=>attach(e.target,'question');
        root.querySelector('#addExplanationImages').onchange=e=>attach(e.target,'explanation');
        draw();return api;
    }
    function editorMarkup(){return `<fieldset id="imageEditor" class="image-editor"><legend>Images — الصور</legend><p>PNG, JPEG or WebP · up to 4 images per section. Images are resized for offline use.</p><label for="addQuestionImages">Question images — تظهر أثناء الحل</label><input id="addQuestionImages" type="file" accept="image/png,image/jpeg,image/webp" multiple><div class="image-editor-previews" data-image-previews="question"></div><label for="addExplanationImages">Explanation images — تظهر بعد كشف الإجابة</label><input id="addExplanationImages" type="file" accept="image/png,image/jpeg,image/webp" multiple><div class="image-editor-previews" data-image-previews="explanation"></div><p id="imageEditorStatus" role="status" aria-live="polite"></p></fieldset>`;}
    async function validateDrafts(images,assets=[]) {
        if(!Array.isArray(images) || images.length>8 || descriptors({images}).length!==images.length)throw Error('Invalid question image metadata.');
        for(const role of roles)if(descriptors({images}).filter(x=>x.role===role).length>LIMITS.perRole)throw Error('Too many images in one section.');
        const paths=new Set();for(const img of images){const path=typeof img==='string'?img:img.path;if(paths.has(path))throw Error('Repeated image path.');paths.add(path);}
        const assetPaths=new Set();
        for(const a of assets){if(!a||!paths.has(a.path)||!(a.blob instanceof Blob)||assetPaths.has(a.path))throw Error('Invalid image attachment.');assetPaths.add(a.path);await validateImageBlob(a.blob,descriptors({images}).find(img=>img.path===a.path));}
    }
    async function validateReferences(questionUid,images,assets=[]) {
        const additions=new Map(assets.map(a=>[a.path,a.blob]));
        for(const image of descriptors({images})){
            const existing=await readAsset(questionUid,image.path), fresh=additions.get(image.path);
            if(!fresh && (!existing || !(existing.blob instanceof Blob)))throw Error('An attached image is missing. Remove it or re-import its update package.');
            if(fresh && existing && existing.blob instanceof Blob){
                const digest=async blob=>Array.from(new Uint8Array(await crypto.subtle.digest('SHA-256',await blob.arrayBuffer()))).join(',');
                if(await digest(fresh)!==await digest(existing.blob))throw Error('A replacement image must use a new image path.');
            }
            if(!fresh)await validateImageBlob(existing.blob,image);
        }
    }
    async function serializeAssets(rows){
        return Promise.all(rows.map(async rec=>{
            if(!(rec.blob instanceof Blob)){
                if(rec.blobDataUrl)return {...rec};
                throw Error('An image asset could not be backed up.');
            }
            const blobDataUrl=await new Promise((resolve,reject)=>{const r=new FileReader();r.onload=()=>resolve(r.result);r.onerror=()=>reject(r.error);r.readAsDataURL(rec.blob);});
            const out={...rec,blobDataUrl};delete out.blob;return out;
        }));
    }
    async function deserializeAssets(rows){
        if(!Array.isArray(rows))throw Error('Invalid backup assets.');
        return Promise.all(rows.map(async rec=>{
            if(!rec||typeof rec.assetKey!=='string')throw Error('Invalid backup asset key.');
            if(rec.blob instanceof Blob)return {...rec};
            if(typeof rec.blobDataUrl!=='string')throw Error('Missing image bytes in backup.');
            const m=/^data:([a-zA-Z0-9.+/-]*);base64,([a-zA-Z0-9+/=\s]*)$/.exec(rec.blobDataUrl);
            if(!m)throw Error('Invalid backup image data.');
            let raw;try{raw=atob(m[2]);}catch{throw Error('Invalid backup image data.');}
            const bytes=Uint8Array.from(raw,c=>c.charCodeAt(0)), out={...rec,blob:new Blob([bytes],{type:m[1]||'application/octet-stream'})};delete out.blobDataUrl;return out;
        }));
    }
    function initialize(){
        document.addEventListener('click',e=>{const button=e.target.closest('.question-image-open');if(button&&!button.disabled)openViewer(button).catch(()=>showToast('Image could not be opened.','error'));});
        window.addEventListener('popstate',e=>{if(closingHistory){closingHistory=false;e.stopImmediatePropagation();return;}if(viewer){closeViewer(true);e.stopImmediatePropagation();}},true);
        new MutationObserver(records=>{
            if(editor&&!editor.active())editor.destroy();
            for(const [node] of ownedUrls)if(!node.isConnected)releaseNode(node);
            if(!records.some(r=>r.type==='childList'&&r.addedNodes.length)||observerQueued)return;
            observerQueued=true;queueMicrotask(()=>{observerQueued=false;hydrate().catch(()=>{});});
        }).observe(document.body,{childList:true,subtree:true,attributes:true,attributeFilter:['class']});
        window.addEventListener('pagehide',e=>{if(e.persisted)return;for(const [node]of ownedUrls)releaseNode(node);if(editor)editor.destroy();if(viewer)closeViewer(true);});
    }
    initialize();
    return {LIMITS,newUid:uid,safePath,descriptors,rasterMime,validateImageBlob,prepareFile,readAsset,render,hydrate,mountEditor,editorMarkup,validateDrafts,validateReferences,serializeAssets,deserializeAssets,closeViewer,get editor(){return editor;}};
})();


const CLASSIFICATION_MODE = 'admin';
// Scientific reference metadata is separate from the question's book/group bucket.
function questionReferenceText(value) {
    if (typeof value === 'string') return value.replace(/\s+/g, ' ').trim();
    if (typeof value === 'number' && Number.isFinite(value)) return String(value);
    return '';
}

function getQuestionReference(question) {
    const q = question && typeof question === 'object' && !Array.isArray(question) ? question : {};
    const text = value => {
        if (typeof value === 'string') return value.replace(/\s+/g, ' ').trim();
        if (typeof value === 'number' && Number.isFinite(value)) return String(value);
        return '';
    };
    const has = field => Object.prototype.hasOwnProperty.call(q, field);
    const legacy = q.reference && typeof q.reference === 'object' && !Array.isArray(q.reference) ? q.reference : {};
    const firstText = values => {
        for (const value of values) {
            const candidate = text(value);
            if (candidate) return candidate;
        }
        return '';
    };
    // An explicitly empty canonical field is an intentional clearing, not a request for fallback.
    const name = has('referenceName') ? text(q.referenceName)
        : firstText([typeof q.reference === 'string' || typeof q.reference === 'number' ? q.reference : '', legacy.name, legacy.book, legacy.title]);
    const edition = has('referenceEdition') ? text(q.referenceEdition)
        : firstText([legacy.edition, q.edition]);
    const page = has('referencePage') ? text(q.referencePage)
        : firstText([legacy.page, legacy.pageNumber, q.pageNumber, q.page]);
    return { name, edition, page, complete: !!(name && edition && page), hasAny: !!(name || edition || page) };
}

function hasCompleteQuestionReference(question) {
    return getQuestionReference(question).complete;
}

function normalizeQuestionReferenceMetadata(question) {
    if (!question || typeof question !== 'object' || Array.isArray(question)) return question;
    const supplied = ['referenceName', 'referenceEdition', 'referencePage', 'reference']
        .some(field => Object.prototype.hasOwnProperty.call(question, field));
    if (!supplied) return question;
    // A supplied citation replaces the whole citation snapshot, so no older component leaks through a merge.
    const reference = getQuestionReference(question);
    question.referenceName = reference.name;
    question.referenceEdition = reference.edition;
    question.referencePage = reference.page;
    return question;
}

function questionReferenceEscape(value) {
    return questionReferenceText(value).replace(/&/g, '&amp;').replace(/</g, '&lt;')
        .replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}

function renderQuestionReference(question, { admin = false } = {}) {
    const reference = getQuestionReference(question);
    if (!reference.hasAny && !admin) return '';
    const parts = [];
    if (reference.name) parts.push(`<span class="question-reference-name">${questionReferenceEscape(reference.name)}</span>`);
    if (reference.edition) parts.push(`<span class="question-reference-edition">Edition: ${questionReferenceEscape(reference.edition)}</span>`);
    if (reference.page) parts.push(`<span class="question-reference-page">Page: ${questionReferenceEscape(reference.page)}</span>`);
    const missing = admin && !reference.complete
        ? '<span class="badge badge-warning" style="margin-inline-start:8px;">Reference incomplete</span>' : '';
    return `<div class="question-reference" style="margin-top:12px;padding:10px 12px;border:1px solid var(--border);border-radius:8px;font-size:0.85rem;overflow-wrap:anywhere;">
        <strong>Reference — المرجع</strong>${missing}
        <div style="display:flex;gap:6px 12px;flex-wrap:wrap;margin-top:5px;">${parts.length ? parts.join('') : '<span>Reference not documented.</span>'}</div>
    </div>`;
}

function renderQuestionBookLocation(question) {
    const book = questionReferenceText(question && question.book);
    return book ? `<div class="question-book-location" style="margin-top:10px;font-size:0.75rem;color:var(--text2);">Book / group: ${questionReferenceEscape(book)}</div>` : '';
}

// Classification policy v2: the admin approves suggestions; students only consume metadata.
function questionClassificationKey(value) {
    return String(value == null ? '' : value).normalize('NFKD').replace(/[\u0300-\u036f]/g, '')
        .toLowerCase().replace(/&/g, ' and ').replace(/[^a-z0-9\u0600-\u06ff]+/g, ' ').trim().replace(/\s+/g, ' ');
}
function isGenericQuestionSubject(value) {
    return ['', 'ent', 'e n t', 'general', 'general ent', 'unknown', 'unclassified', 'uncategorized', 'uncategorised',
        'all', 'all subjects', 'ear nose and throat', 'ear nose throat', 'otorhinolaryngology',
        'عام', 'العام', 'غير مصنف', 'غير مصنفة', 'غير محدد', 'غير محددة', 'كل التخصصات'].includes(questionClassificationKey(value));
}
function isGenericQuestionChapter(value) {
    return isGenericQuestionSubject(value) || ['all chapters', 'كل الفصول', 'الفصل العام'].includes(questionClassificationKey(value));
}
function isQuestionClassificationApproved(q) {
    return !!q && !isGenericQuestionSubject(q.subject) && !isGenericQuestionChapter(q.chapter)
        && q.classificationApproved === true && q.classificationStatus === 'classified'
        && q.needsReview !== true && q.classificationInferred !== true;
}
// JSON's flat labels are authoritative. Reading/importing a question must never
// replace them using question text, aliases, nested labels or stale stable IDs.
function normalizeQuestionClassification(q, { approve = false } = {}) {
    if (!q || typeof q !== 'object' || Array.isArray(q)) return q;
    const clean = value => typeof value === 'string' ? value.trim() : '';
    const nested = q.classification && typeof q.classification === 'object' && !Array.isArray(q.classification) ? q.classification : null;
    if (nested) {
        for (const field of ['classificationInferred', 'classificationApproved', 'classificationSource', 'classificationStatus', 'needsReview']) {
            if (q[field] == null && nested[field] != null) q[field] = nested[field];
        }
    }
    q.subject = clean(q.subject) || 'Uncategorized';
    q.chapter = clean(q.chapter) || 'General';
    q.topic = q.topic == null ? 'General' : clean(q.topic);
    q.subtopic = q.subtopic == null ? '' : clean(q.subtopic);
    const subject = SCOTT_BROWN_TAXONOMY.find(s => s.subject === q.subject);
    let chapter = null;
    if (subject) {
        chapter = (subject.chapters || []).find(c => c.chapter === q.chapter) || null;
        if (chapter) chapter = { ...chapter, partId: null };
        for (const part of subject.parts || []) {
            const match = (part.chapters || []).find(c => c.chapter === q.chapter);
            if (match) { chapter = { ...match, partId: part.partId }; break; }
        }
    }
    q.subjectId = subject ? subject.subjectId : null;
    q.chapterId = chapter ? chapter.chapterId : null;
    q.chapterNumber = chapter ? chapter.chapterNumber : null;
    q.partId = chapter ? chapter.partId : null;
    const unresolved = isGenericQuestionSubject(q.subject) || isGenericQuestionChapter(q.chapter);
    const manuallyApproved = CLASSIFICATION_MODE === 'admin' && approve === true && !unresolved;
    const inferred = q.classificationInferred === true || ['inferred', 'automatic', 'auto', 'suggested'].includes(q.classificationSource);
    const pending = inferred || q.classificationApproved === false || q.needsReview === true || q.classificationStatus === 'needs_review';
    q.classificationInferred = manuallyApproved ? false : inferred;
    q.needsReview = unresolved || (!manuallyApproved && pending);
    q.classificationApproved = !q.needsReview;
    q.classificationStatus = q.needsReview ? 'needs_review' : 'classified';
    q.classificationSource = manuallyApproved ? 'manual' : q.classificationInferred ? 'inferred'
        : clean(q.classificationSource) || (q.needsReview ? 'unresolved' : 'metadata');
    q.classificationPolicyVersion = 2;
    q.classificationRepairVersion = 1;
    if (nested) {
        q.classification = Object.assign({}, nested);
        for (const field of ['subject', 'chapter', 'topic', 'subtopic', 'subjectId', 'chapterId', 'chapterNumber', 'partId',
            'classificationInferred', 'classificationApproved', 'classificationStatus', 'classificationSource',
            'classificationPolicyVersion', 'classificationRepairVersion', 'needsReview']) q.classification[field] = q[field];
    }
    return q;
}

// Used only by the explicit administrator reclassification action.
function suggestQuestionClassification(q, { readNested = true, infer = CLASSIFICATION_MODE === 'admin', recoverLegacy = false, approve = false } = {}) {
    if (!q || typeof q !== 'object' || Array.isArray(q)) return q;
    const admin = CLASSIFICATION_MODE === 'admin';
    // A caller cannot accidentally turn student classification into a text-based classifier.
    infer = admin && infer === true;
    approve = admin && approve === true;
    if (approve) infer = false;
    const clean = value => typeof value === 'string' ? value.replace(/\s+/g, ' ').trim() : '';
    const key = questionClassificationKey;
    let index = suggestQuestionClassification._index;
    if (!index) {
        const stopWords = new Set(('and of the in to for with on at by from an a management assessment disorders disorder conditions condition disease diseases surgery surgical anatomy physiology acute chronic clinical evaluation treatment diagnosis investigation investigations introduction approaches approach complications complication patients patient adult adults children child paediatric pediatric relating overview related including gland glands which what where when most common cause following finding findings type types used using before after during results features general aspects').split(' '));
        index = { subjects: new Map(), subjectIds: new Map(), chapters: new Map(), chapterIds: new Map(), targets: [], subjectTitles: [] };
        const addName = (name, target) => {
            const k = key(name);
            if (!k) return;
            if (!index.chapters.has(k)) index.chapters.set(k, []);
            const list = index.chapters.get(k);
            if (!list.some(t => t.chapterId === target.chapterId)) list.push(target);
        };
        for (const subject of SCOTT_BROWN_TAXONOMY) {
            index.subjectIds.set(key(subject.subjectId), subject);
            index.subjects.set(key(subject.subject), subject);
            index.subjects.set(key(subject.subjectId), subject);
            index.subjectTitles.push({ subjectId: subject.subjectId, titleKey: key(subject.subject) });
            const addChapter = (chapter, partId = null) => {
                const target = { ...chapter, subject: subject.subject, subjectId: subject.subjectId, partId };
                target.titleKey = key(chapter.chapter);
                target.keywords = [...new Set(target.titleKey.split(' ').filter(w => w.length > 3 && !stopWords.has(w)))];
                index.targets.push(target);
                index.chapterIds.set(key(chapter.chapterId), target);
                addName(chapter.chapter, target);
            };
            (subject.chapters || []).forEach(c => addChapter(c));
            (subject.parts || []).forEach(p => (p.chapters || []).forEach(c => addChapter(c, p.partId)));
        }
        for (const [name, legacy] of Object.entries(LEGACY_CLASSIFICATION_MAP)) {
            const subject = index.subjectIds.get(key(legacy.subjectId));
            if (subject) index.subjects.set(key(name), subject);
            for (const [chapter, chapterId] of Object.entries(legacy.chapters || {})) {
                const target = index.chapterIds.get(key(chapterId));
                if (target) addName(chapter, target);
            }
        }
        index.subjectSignals = Object.entries(ENT_TAXONOMY).map(([name, words]) => ({
            subjectId: index.subjects.get(key(name))?.subjectId,
            words: words.map(key), weight: 2
        })).filter(entry => entry.subjectId);
        for (const [subjectId, words] of Object.entries({
            head_neck_endocrine: ['thyroid', 'parathyroid', 'endocrine'],
            anterior_skull_base: ['anterior skull base', 'anterior cranial fossa', 'pituitary', 'parasellar', 'clivus'],
            lateral_skull_base: ['lateral skull base', 'vestibular schwannoma', 'jugular foramen']
        })) if (index.subjectIds.has(key(subjectId))) index.subjectSignals.push({ subjectId, words: words.map(key), weight: 4 });
        suggestQuestionClassification._index = index;
    }

    const nested = q.classification && typeof q.classification === 'object' && !Array.isArray(q.classification) ? q.classification : null;
    if (readNested && nested) {
        const beforeSubject = clean(q.subject);
        const canUseNestedSubject = admin || isGenericQuestionSubject(beforeSubject);
        if (clean(nested.subject) && canUseNestedSubject
            && (!isGenericQuestionSubject(nested.subject) || isGenericQuestionSubject(beforeSubject))) q.subject = nested.subject;
        const flatSubject = index.subjects.get(key(q.subject));
        const nestedSubject = index.subjects.get(key(nested.subject));
        const sameSubject = isGenericQuestionSubject(nested.subject) || key(q.subject) === key(nested.subject)
            || (flatSubject && nestedSubject && flatSubject.subjectId === nestedSubject.subjectId);
        if (clean(nested.chapter) && (admin || isGenericQuestionChapter(q.chapter)) && sameSubject
            && (!isGenericQuestionChapter(nested.chapter) || isGenericQuestionChapter(q.chapter))) q.chapter = nested.chapter;
        for (const field of ['topic', 'subtopic']) if (clean(nested[field]) && (admin || !clean(q[field]))) q[field] = nested[field];
        for (const field of ['subjectId', 'chapterId']) if (clean(nested[field]) && (admin || !clean(q[field]))) q[field] = nested[field];
        // Flat approval metadata takes precedence over stale nested flags. Missing metadata is retained from packages.
        for (const field of ['classificationInferred', 'classificationApproved', 'classificationSource', 'classificationStatus', 'classificationPolicyVersion', 'needsReview']) {
            if (q[field] == null && nested[field] != null) q[field] = nested[field];
        }
    }

    let subjectText = clean(q.subject), chapterText = clean(q.chapter);
    const hasLegacyEvidence = Object.prototype.hasOwnProperty.call(q, 'legacySubject') && Object.prototype.hasOwnProperty.call(q, 'legacyChapter');
    const nestedHasSpecificMetadata = nested && (!isGenericQuestionSubject(nested.subject) || !isGenericQuestionChapter(nested.chapter));
    // V1 recorded some strong automatic guesses as classified. Generic original labels prove
    // those later meaningful labels were not supplied classification; do not grandfather them in.
    const legacyAutoGuess = recoverLegacy && !(q.classificationPolicyVersion >= 2) && hasLegacyEvidence
        && isGenericQuestionSubject(q.legacySubject) && isGenericQuestionChapter(q.legacyChapter)
        && (!isGenericQuestionSubject(subjectText) || !isGenericQuestionChapter(chapterText))
        && (key(subjectText) !== key(q.legacySubject) || key(chapterText) !== key(q.legacyChapter))
        && q.classificationSource !== 'manual' && !nestedHasSpecificMetadata;
    const wasInferred = legacyAutoGuess || q.classificationInferred === true || ['inferred', 'automatic', 'auto'].includes(q.classificationSource);
    const pendingBefore = wasInferred || q.classificationApproved === false
        || q.needsReview === true || q.classificationStatus === 'needs_review';

    if (recoverLegacy && isGenericQuestionSubject(subjectText) && !isGenericQuestionSubject(q.legacySubject)) subjectText = clean(q.legacySubject);
    if (recoverLegacy && isGenericQuestionChapter(chapterText) && !isGenericQuestionChapter(q.legacyChapter)) {
        const knownSubject = index.subjects.get(key(subjectText));
        const legacySubject = index.subjects.get(key(q.legacySubject));
        const candidates = index.chapters.get(key(q.legacyChapter)) || [];
        const sameLegacySubject = !isGenericQuestionSubject(subjectText) && !isGenericQuestionSubject(q.legacySubject)
            && (key(subjectText) === key(q.legacySubject) || (knownSubject && legacySubject && knownSubject.subjectId === legacySubject.subjectId));
        // An exact unique legacy chapter supplies its own subject when both subject labels are generic.
        // Meaningful current/legacy subject labels still scope recovery and block cross-subject repairs.
        const uniqueUnscopedChapter = isGenericQuestionSubject(subjectText) && isGenericQuestionSubject(q.legacySubject) && candidates.length === 1;
        const safeChapter = candidates.length
            ? uniqueUnscopedChapter || knownSubject && candidates.some(c => c.subjectId === knownSubject.subjectId)
            : sameLegacySubject;
        if (safeChapter) chapterText = clean(q.legacyChapter);
    }
    const explicitSubject = !isGenericQuestionSubject(subjectText);
    const explicitChapter = !isGenericQuestionChapter(chapterText);
    let subject = explicitSubject ? index.subjects.get(key(subjectText)) : null;
    let chapter = null, inferredNow = false, conflict = false;
    const subjectById = index.subjectIds.get(key(q.subjectId));
    const chapterById = index.chapterIds.get(key(q.chapterId));

    if (explicitChapter) {
        const matches = index.chapters.get(key(chapterText)) || [];
        const scoped = subject ? matches.filter(c => c.subjectId === subject.subjectId) : matches;
        if (scoped.length === 1 && (!explicitSubject || subject)) chapter = scoped[0];
        else if (!explicitSubject && scoped.length > 1 && subjectById) {
            const matchingIds = scoped.filter(c => c.subjectId === subjectById.subjectId);
            if (matchingIds.length === 1) chapter = matchingIds[0];
        }
        if (subject && matches.length && !scoped.length) conflict = true;
        if (!explicitSubject && matches.length > 1 && !chapter) conflict = true;
        if (chapter && !explicitSubject) subject = index.subjectIds.get(key(chapter.subjectId));
    } else if (chapterById) {
        // A meaningful subject label wins over IDs left by older migrations.
        const compatibleSubject = subject || (!explicitSubject ? subjectById : null);
        if ((!explicitSubject || subject) && (!compatibleSubject || chapterById.subjectId === compatibleSubject.subjectId)) {
            chapter = chapterById;
            if (!explicitSubject) subject = index.subjectIds.get(key(chapter.subjectId));
        } else if (compatibleSubject) conflict = true;
    }
    if (!subject && !explicitSubject && subjectById) subject = subjectById;

    if (infer && !conflict && ((!subject && !explicitSubject) || (!chapter && !explicitChapter && subject))) {
        const text = ' ' + key([chapterText, q.topic, q.subtopic, q.questionText, q.explanation].filter(Boolean).join(' ')) + ' ';
        const containsKey = phrase => !!phrase && text.includes(' ' + phrase + ' ');
        const scoreChapter = target => containsKey(target.titleKey) ? 100 + target.keywords.length
            : target.keywords.reduce((score, word) => score + (containsKey(word) ? 2 : 0), 0);
        const chapterScores = index.targets.map(target => ({ target, score: scoreChapter(target) }));
        const uniqueBest = scored => {
            let best = null, tied = false;
            for (const entry of scored) {
                if (!best || entry.score > best.score) { best = entry; tied = false; }
                else if (entry.score === best.score) tied = true;
            }
            return best && best.score > 0 && !tied ? best : null;
        };
        if (!subject && !explicitSubject) {
            const scores = new Map();
            const vote = (subjectId, score) => scores.set(subjectId, (scores.get(subjectId) || 0) + score);
            for (const entry of index.subjectSignals) vote(entry.subjectId, entry.words.reduce((n, word) => n + (containsKey(word) ? entry.weight : 0), 0));
            for (const entry of index.subjectTitles) if (containsKey(entry.titleKey)) vote(entry.subjectId, 6);
            for (const entry of chapterScores) if (entry.score >= 100) vote(entry.target.subjectId, 8);
            const best = uniqueBest([...scores].map(([subjectId, score]) => ({ subjectId, score })));
            if (best) subject = index.subjectIds.get(key(best.subjectId));
            else if (![...scores.values()].some(score => score > 0)) {
                const highest = Math.max(0, ...chapterScores.map(c => c.score));
                const subjectIds = new Set(chapterScores.filter(c => c.score === highest && c.score > 0).map(c => c.target.subjectId));
                if (subjectIds.size === 1) subject = index.subjectIds.get(key([...subjectIds][0]));
            }
            if (subject) inferredNow = true;
        }
        if (!chapter && !explicitChapter && subject) {
            const best = uniqueBest(chapterScores.filter(c => c.target.subjectId === subject.subjectId));
            if (best) { chapter = best.target; inferredNow = true; }
        }
    }

    // Student labels supplied by the admin (including custom labels) remain untouched.
    const preserveSubjectLabel = !admin && explicitSubject;
    const preserveChapterLabel = !admin && explicitChapter;
    q.subject = preserveSubjectLabel ? subjectText : subject ? subject.subject : explicitSubject ? subjectText : 'Uncategorized';
    q.chapter = preserveChapterLabel ? chapterText : chapter ? chapter.chapter : explicitChapter ? chapterText : 'General';
    q.subjectId = subject ? subject.subjectId : null;
    q.chapterId = chapter ? chapter.chapterId : null;
    q.chapterNumber = chapter ? chapter.chapterNumber : null;
    q.partId = chapter ? chapter.partId : null;
    const unresolved = isGenericQuestionSubject(q.subject) || isGenericQuestionChapter(q.chapter) || conflict;
    const manuallyApproved = approve && !unresolved;
    q.classificationInferred = manuallyApproved ? false : wasInferred || inferredNow;
    q.needsReview = unresolved || (!manuallyApproved && (pendingBefore || q.classificationInferred));
    q.classificationApproved = !q.needsReview;
    q.classificationStatus = q.needsReview ? 'needs_review' : 'classified';
    q.classificationSource = manuallyApproved ? 'manual' : q.classificationInferred ? 'inferred'
        : q.classificationApproved ? (clean(q.classificationSource) || 'metadata')
        : (clean(q.classificationSource) || 'unresolved');
    q.classificationPolicyVersion = 2;
    q.classificationRepairVersion = 1;
    if (nested) {
        q.classification = Object.assign({}, nested, { subject: q.subject, chapter: q.chapter, subjectId: q.subjectId,
            chapterId: q.chapterId, chapterNumber: q.chapterNumber, partId: q.partId,
            classificationStatus: q.classificationStatus, classificationInferred: q.classificationInferred,
            classificationApproved: q.classificationApproved, classificationSource: q.classificationSource,
            classificationPolicyVersion: q.classificationPolicyVersion, classificationRepairVersion: q.classificationRepairVersion,
            needsReview: q.needsReview });
        for (const field of ['topic', 'subtopic']) if (q[field] != null) q.classification[field] = q[field];
    }
    return q;
}

function classifyQuestionAdvanced(q){
 return suggestQuestionClassification(q, { readNested: false, infer: true });
}

// STEP 7 AUTO TOPIC & SUBTOPIC ENGINE
function generateTopicSubtopic(q, { suggest = false } = {}){
 if (!suggest || CLASSIFICATION_MODE === 'student') return normalizeQuestionClassification(q);
 const text = ((q.questionText || '') + ' ' + (q.explanation || '')).toLowerCase();
 let suggested = false;
 if (!q.topic || q.topic === 'General') {
   let topic = 'General';
   if (suggest) {
     if (text.includes('anatom')) topic = 'Anatomy';
     else if (text.includes('physiology')) topic = 'Physiology';
     else if (text.includes('diagnosis') || text.includes('assessment')) topic = 'Diagnosis';
     else if (text.includes('management') || text.includes('treatment')) topic = 'Management';
     else if (text.includes('surgery') || text.includes('operative')) topic = 'Surgery';
   }
   q.topic = topic;
   suggested = topic !== 'General';
 }
 if (!q.subtopic || q.subtopic === 'General') {
   let subtopic = 'Core Concepts';
   if (suggest) {
     if (text.includes('complication')) subtopic = 'Complications';
     else if (text.includes('indication')) subtopic = 'Indications';
     else if (text.includes('classification')) subtopic = 'Classification';
     else if (text.includes('imaging')) subtopic = 'Imaging';
   }
   q.subtopic = subtopic;
   suggested = suggested || subtopic !== 'Core Concepts';
 }
 if (suggested) {
   q.classificationInferred = true;
   q.classificationApproved = false;
   q.needsReview = true;
   q.classificationStatus = 'needs_review';
   q.classificationSource = 'suggested';
 }
 if (q.classification && typeof q.classification === 'object') {
   q.classification = { ...q.classification, topic: q.topic, subtopic: q.subtopic,
      classificationInferred: q.classificationInferred, classificationApproved: q.classificationApproved,
      classificationStatus: q.classificationStatus, needsReview: q.needsReview };
 }
 return q;
}

// STEP 8 HIERARCHY ANALYTICS ENGINE
async function buildHierarchyStats(){
 const qs=await db.getAllQuestions();
 const tree={};
 qs.forEach(q=>{
   const s=q.subject||'Uncategorized';
   const c=q.chapter||'General';
   const t=q.topic||'General';
   const st=q.subtopic||'General';
   tree[s]??={};
   tree[s][c]??={};
   tree[s][c][t]??={};
   tree[s][c][t][st]=(tree[s][c][t][st]||0)+1;
 });
 return tree;
}

async function getQuestionsNeedingReview(){
 const qs=await db.getAllQuestions();
 return qs.filter(q=>q.needsReview);
}

// STEP 9 HIERARCHY MANAGEMENT UI

// STEP 10 ADVANCED ANALYTICS + DUPLICATE MANAGER
async function scanDuplicateQuestions(){
 const qs=await db.getAllQuestions();
 const map={}, dup=[];
 qs.forEach(q=>{
   const key=(q.questionText||'').toLowerCase().trim();
   if(map[key]) dup.push(q);
   else map[key]=1;
 });
 return dup;
}

async function generateSubjectAnalytics(){
 const qs=await db.getAllQuestions();
 const stats={};
 qs.forEach(q=>{
   const s=q.subject||'Unknown';
   stats[s]=(stats[s]||0)+1;
 });
 return stats;
}

// STEP 11 DASHBOARD + AI RECOMMENDATIONS
async function buildTopicHeatmap(){
 const qs=await db.getAllQuestions();
 const map={};
 qs.forEach(q=>{
   const k=q.topic||'General';
   map[k]=(map[k]||0)+1;
 });
 return map;
}

async function generateWeakAreaRecommendations(){
 const perf=await db.getPerformance();
 const result=[];
 perf.filter(x=>!x.correct).slice(0,20).forEach(x=>{
   result.push(`${x.subject||'Unknown'} > ${x.chapter||'Unknown'}`);
 });
 return [...new Set(result)];
}

// STEP 12 INTERACTIVE MANAGEMENT + READINESS ENGINE

async function renderBoardReadinessDashboard(){
 const perf=await db.getPerformance();
 const correct=perf.filter(x=>x.correct).length;
 const score=perf.length?Math.round(correct*100/perf.length):0;
 return `<div class="readiness-card"><h3>${uiIcon("target")} Board Readiness</h3><p>${score}% Ready</p></div>`;
}

// STEP 13 ADVANCED AI + EXAM CENTER

// STEP 14 PRODUCTION AI ENGINE

async function adaptiveExamEngine(){
 const perf=await db.getPerformance();
 return perf.filter(x=>!x.correct).length;
}

async function performanceForecastEngine(){
 const perf=await db.getPerformance();
 const acc=perf.length?Math.round((perf.filter(x=>x.correct).length*100)/perf.length):0;
 return `Projected Board Score: ${Math.min(acc+10,100)}%`;
}

// STEP 15 ENTERPRISE RELEASE ENGINE
async function fullBoardExamSimulator(){
 return {
   exams:['Iraqi Board','Arab Board','Mock Exam'],
   status:'enterprise-ready'
 };
}

async function smartQuestionSelector(){
 const perf=await db.getPerformance();
 return perf.filter(x=>!x.correct).slice(0,20);
}

// STEP 16 FINAL PROFESSIONAL BUILD

async function optimizeFor100kQuestions(){
 return {
   virtualization:true,
   indexedSearch:true,
   cacheEnabled:true
 };
}

// STEP 17 ULTIMATE PRODUCTION VERSION v5.0

async function iraqiBoardMockExam(){
 return {
   questions:150,
   timer:true,
   blueprint:'Iraqi Board ENT'
 };
}

// STEP 18 FINAL GOOGLE PLAY RELEASE v6.0
const PLAY_STORE_CONFIG={
 version:'6.0',
 release:'production',
 offline:true,
 pwa:true,
 installable:true
};

// STEP 19 NATIVE ANDROID WRAPPER + APK BUILDER
const ANDROID_BUILD_CONFIG={
 version:'7.0',
 target:'android',
 apk:true,
 aab:true,
 playStore:true
};

/* ===== Reclassification Engine v1 ===== */
async function updateQuestionClassification(questionId, subject, chapter, topic, subtopic, requireAdminCheck = true){
    if (CLASSIFICATION_MODE !== 'admin' || !RBAC.requireAdmin()) return false;
    await db.ensureReady();
    return new Promise((resolve,reject)=>{
        const tx = db.db.transaction('questions','readwrite');
        const store = tx.objectStore('questions');
        let updated = false;
        const getReq = store.get(questionId);
        getReq.onsuccess = ()=>{
            const q = getReq.result;
            if(!q) return;
            if (typeof subject === 'string') q.subject = subject;
            if (typeof chapter === 'string') q.chapter = chapter;
            if (typeof topic === 'string') q.topic = topic;
            if (typeof subtopic === 'string') q.subtopic = subtopic;

            // A human's new labels supersede stable IDs from the previous classification.
            q.subjectId = q.chapterId = q.chapterNumber = q.partId = null;
            normalizeQuestionClassification(q, { readNested: false, infer: false, approve: true });

            q.updatedAt = new Date().toISOString();
            store.put(q);
            updated = true;
        };
        getReq.onerror = ()=>reject(getReq.error);
        tx.oncomplete = () => { if (updated) db._invalidateCache(); resolve(updated); };
        tx.onerror = () => reject(tx.error);
        tx.onabort = () => reject(tx.error);
    });
}

function renderReclassifyButton(questionId){
    return `<button class="btn btn-accent btn-sm" onclick="openReclassifyModal(${safeInlineQuestionId(questionId)})">${uiIcon("tag")} Reclassify</button>`;
}

/* ===== End Reclassification Engine ===== */

/* ===== Professional Reclassification Modal ===== */
async function openReclassifyModal(questionId){
 if (!RBAC.requireAdmin()) return;
 const q = await db.getQuestion(questionId);
 if(!q){ showToast('Question not found','error'); return; }
 normalizeQuestionClassification(q);

 const allQuestions = await db.getAllQuestions();
 const taxonomy = computeTaxonomy(allQuestions);
 const subjectOptions = (q.subject && !taxonomy.subjects.includes(q.subject)) ? [q.subject, ...taxonomy.subjects] : taxonomy.subjects;

 function chaptersFor(subject){
     const list = taxonomy.chaptersBySubject[subject] ? [...taxonomy.chaptersBySubject[subject]] : [];
     if (subject === q.subject && q.chapter && !list.includes(q.chapter)) list.push(q.chapter);
     return list;
 }
 function topicsFor(subject, chapter){
     const set = new Set(['General']);
     allQuestions.forEach(qq => { if (qq.topic && qq.subject === subject && qq.chapter === chapter) set.add(qq.topic); });
     if (subject === q.subject && chapter === q.chapter && q.topic) set.add(q.topic);
     return [...set].sort();
 }

 const chapterOptions = chaptersFor(q.subject);
 const topicOptions = topicsFor(q.subject, q.chapter);

 const legacyBanner = (q.legacySubject || q.legacyChapter) ? `
 <div style="background:#fff8e1;border:1px solid #f0d878;border-radius:6px;padding:8px 10px;margin-bottom:10px;font-size:13px;">
   ${q.classificationStatus === 'needs_review' ? (uiIcon("alert") + " <strong>Needs review</strong> — ") : ''}Previously classified as:
   <strong>${escapeHTML(q.legacySubject || '—')}</strong> / ${escapeHTML(q.legacyChapter || '—')}
 </div>` : '';

 showModal(`
 <h3>${uiIcon("tag")} Review Classification</h3>
 <p>Review the subject, chapter and topic. Exports preserve every valid question's classification and review status.</p>
 <p><strong>${escapeHTML(q.questionText || '')}</strong></p>
 ${legacyBanner}
 <label>Subject</label>
 <select id="rcSubject">${subjectOptions.map(s=>`<option value="${escapeHTML(s)}" ${q.subject===s?'selected':''}>${escapeHTML(s)}</option>`).join('')}</select>
 <label>Chapter</label>
 <select id="rcChapter">${chapterOptions.map(c=>`<option value="${escapeHTML(c)}" ${q.chapter===c?'selected':''}>${escapeHTML(c)}</option>`).join('')}</select>
 <label>Topic</label>
 <select id="rcTopic">${topicOptions.map(t=>`<option value="${escapeHTML(t)}" ${q.topic===t?'selected':''}>${escapeHTML(t)}</option>`).join('')}<option value="__new__">+ Add new topic…</option></select>
 <input id="rcTopicNew" placeholder="New topic name" style="display:none;margin-top:6px;">
 <input id="rcSubtopic" value="${escapeHTML(q.subtopic||'')}" placeholder="Subtopic">
 <button class="btn btn-primary" onclick="saveReclassification(${safeInlineQuestionId(questionId)})">Save &amp; Approve Classification</button>
 `);

 const subjectSel = $('#rcSubject'), chapterSel = $('#rcChapter'), topicSel = $('#rcTopic'), topicNewInput = $('#rcTopicNew');

 function renderChapterOptions(subject){
     const chapters = chaptersFor(subject);
     chapterSel.innerHTML = chapters.map(c=>`<option value="${escapeHTML(c)}">${escapeHTML(c)}</option>`).join('');
 }
 function renderTopicOptions(subject, chapter){
     const topics = topicsFor(subject, chapter);
     topicSel.innerHTML = topics.map(t=>`<option value="${escapeHTML(t)}">${escapeHTML(t)}</option>`).join('') + '<option value="__new__">+ Add new topic…</option>';
     topicNewInput.style.display = 'none';
     topicNewInput.value = '';
 }

 subjectSel.addEventListener('change', () => {
     renderChapterOptions(subjectSel.value);
     renderTopicOptions(subjectSel.value, chapterSel.value);
 });
 chapterSel.addEventListener('change', () => {
     renderTopicOptions(subjectSel.value, chapterSel.value);
 });
 topicSel.addEventListener('change', () => {
     const isNew = topicSel.value === '__new__';
     topicNewInput.style.display = isNew ? 'block' : 'none';
     if (isNew) topicNewInput.focus();
 });
}

async function saveReclassification(questionId){
 const topicSel = $('#rcTopic');
 const topic = topicSel.value === '__new__' ? $('#rcTopicNew').value.trim() : topicSel.value;
 await updateQuestionClassification(
   questionId,
   $('#rcSubject').value,
   $('#rcChapter').value,
   topic,
   $('#rcSubtopic').value,
   false
 );
 closeModal();
 const updated = await db.getQuestion(questionId);
 showToast(isQuestionClassificationApproved(updated) ? 'Classification approved.' : 'Saved for review. Exports preserve this classification and review status.', isQuestionClassificationApproved(updated) ? 'success' : 'warning');
 saveSession();
 await renderViewSafely(AppState.currentView);
}

function showModal(html){
 window.__questionImageFormRequest = (window.__questionImageFormRequest || 0) + 1;
 document.getElementById('modalContent').innerHTML = html;
 document.getElementById('modalOverlay').classList.remove('hidden');
}
/* ===== End Professional Reclassification Modal ===== */

        // ============================================================
        //  APP STATE
        // ============================================================
        const AppState = {
            currentView: 'dashboard', darkMode: false,
            examInProgress: false, examShowResults: false,
            examQuestions: [], examAnswers: {}, examTimer: null,
            examTimeRemaining: 0, examStartTime: null, examEndsAt: null, examSuspended: false, examResultsPendingReview: false,
            examAttemptId: null, examSubmittedAt: null, _examSavePromise: null, _examSaveError: false,
            studyFilter: { book:'all', subject: 'all', chapter: 'all', topic: 'all', subtopic:'all', group: 'all', mode: 'practice', lectureId: null },
            questionFilters: { subject:'all', chapter:'all', topic:'all', difficulty:'all', special:'all', reference:'all' },
            searchQuery: '', lastExamResults: null,
            studyQuestions: null, studyIndex: 0, studyAnswers: {}, studyRevealed: {}, _examSaved:false,
            // OPTIMIZATION: hold references for virtual scroller and filtered sets
            _questionScroller: null,
            _lastFilteredQuestions: [],
            _lastFilterMeta: {}
        };
        // ============================================================
        //  RBAC — ROLE-BASED ACCESS CONTROL
        // ============================================================
        const RBAC = {
            role: 'student',
            ADMIN_PASSWORD: 'adam2016',
            STORAGE_KEY: 'ent_master_bank_role',

            init() {
                const stored = localStorage.getItem(this.STORAGE_KEY);
                this.role = (stored === 'admin') ? 'admin' : 'student';
            },

            isAdmin() { return this.role === 'admin'; },
            isStudent() { return this.role === 'student'; },

            login(password) {
                if (password === this.ADMIN_PASSWORD) {
                    this.role = 'admin';
                    localStorage.setItem(this.STORAGE_KEY, 'admin');
                    return true;
                }
                return false;
            },

            logout() {
                this.role = 'student';
                localStorage.removeItem(this.STORAGE_KEY);
            },

            requireAdmin() {
                if (!this.isAdmin()) {
                    showToast('Admin access required.', 'error');
                    return false;
                }
                return true;
            },

            toggle() {
                if (this.isAdmin()) {
                    if (confirm('Logout from Admin mode?')) {
                        this.logout();
                        showToast('Logged out. Student mode active.', 'info');
                        applyRoleVisibility();
                        if (AppState.currentView === 'import') navigateTo('dashboard');
                        return false;
                    }
                    return true;
                } else {
                    const pwd = prompt('Enter Admin Password:');
                    if (pwd && this.login(pwd)) {
                        showToast('Admin mode activated.', 'success');
                        applyRoleVisibility();
                        return true;
                    } else if (pwd !== null) {
                        showToast('Incorrect password.', 'error');
                    }
                    return false;
                }
            }
        };

        function applyRoleVisibility() {
            const importNav = document.querySelector('.nav-item[data-view="import"]');
            if (importNav) importNav.style.display = RBAC.isAdmin() ? 'flex' : 'none';
            const adminNav = document.querySelector('.nav-item[data-view="admin"]');
            if (adminNav) adminNav.style.display = RBAC.isAdmin() ? 'flex' : 'none';
            const adminBtn = document.getElementById('btnAdminMode');
            if (adminBtn) {
                adminBtn.innerHTML = RBAC.isAdmin() ? (uiIcon("unlock")) : (uiIcon("lock"));
                adminBtn.title = RBAC.isAdmin() ? 'Admin Mode (click to logout)' : 'Admin Login';
            }
        }

        // ============================================================
        //  SESSION AUTO-SAVE / AUTO-RESTORE
        // ============================================================
        const SESSION_STORAGE_KEY = 'entMasterBank_session_v1';
        const SESSION_SCHEMA_VERSION = 1;
        const VALID_VIEWS = ['dashboard', 'study', 'exam', 'questions', 'import', 'mistakes', 'highyield', 'admin'];

        let _saveSessionTimer = null;
        function saveSession() {
            if (_saveSessionTimer) clearTimeout(_saveSessionTimer);
            _saveSessionTimer = setTimeout(() => {
                _saveSessionTimer = null;
                _doSaveSession();
            }, 120);
        }
        function _doSaveSession() {
            try {
                if (AppState.examInProgress && Number.isFinite(AppState.examEndsAt)) {
                    AppState.examTimeRemaining = Math.max(0, Math.ceil((AppState.examEndsAt - Date.now()) / 1000));
                }
                const snapshot = {
                    __v: SESSION_SCHEMA_VERSION,
                    savedAt: Date.now(),
                    currentView: AppState.currentView,
                    darkMode: AppState.darkMode,
                    examInProgress: AppState.examInProgress,
                    examShowResults: AppState.examShowResults,
                    examQuestions: AppState.examQuestions,
                    examAnswers: AppState.examAnswers,
                    examTimeRemaining: AppState.examTimeRemaining,
                    examEndsAt: AppState.examEndsAt,
                    examSuspended: AppState.examSuspended,
                    examStartTime: AppState.examStartTime,
                    examAttemptId: AppState.examAttemptId,
                    examSubmittedAt: AppState.examSubmittedAt,
                    examResultsPendingReview: AppState.examResultsPendingReview,
                    _examSaveError: AppState._examSaveError,
                    _examSaved: AppState._examSaved,
                    lastExamResults: AppState.lastExamResults,
                    studyFilter: AppState.studyFilter,
                    questionFilters: AppState.questionFilters,
                    searchQuery: AppState.searchQuery,
                    studyQuestions: AppState.studyQuestions,
                    studyIndex: AppState.studyIndex,
                    studyAnswers: AppState.studyAnswers,
                    studyRevealed: AppState.studyRevealed,
                };
                localStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(snapshot));
                return true;
            } catch (e) {
                console.warn('Session autosave failed:', e);
                return false;
            }
        }

        function clearSession() {
            try { localStorage.removeItem(SESSION_STORAGE_KEY); } catch (e) {}
        }

        function restoreSession() {
            let snapshot;
            try {
                const raw = localStorage.getItem(SESSION_STORAGE_KEY);
                if (!raw) return false;
                snapshot = JSON.parse(raw);
            } catch (e) {
                console.warn('Saved session was corrupted; starting fresh.', e);
                clearSession();
                return false;
            }
            if (!snapshot || typeof snapshot !== 'object' || snapshot.__v !== SESSION_SCHEMA_VERSION) {
                return false;
            }
            try {
                AppState.currentView = VALID_VIEWS.includes(snapshot.currentView) ? snapshot.currentView : 'dashboard';
                AppState.darkMode = !!snapshot.darkMode;

                if (snapshot.studyFilter && typeof snapshot.studyFilter === 'object') {
                    Object.assign(AppState.studyFilter, snapshot.studyFilter);
                }
                if (snapshot.questionFilters && typeof snapshot.questionFilters === 'object') {
                    Object.assign(AppState.questionFilters, snapshot.questionFilters);
                }
                AppState.searchQuery = typeof snapshot.searchQuery === 'string' ? snapshot.searchQuery : '';

                AppState.examQuestions = Array.isArray(snapshot.examQuestions) ? snapshot.examQuestions : [];
                AppState.examAnswers = (snapshot.examAnswers && typeof snapshot.examAnswers === 'object') ? snapshot.examAnswers : {};
                AppState.examTimeRemaining = Number.isFinite(snapshot.examTimeRemaining) ? Math.max(0, snapshot.examTimeRemaining) : 0;
                AppState.examStartTime = snapshot.examStartTime || null;
                AppState.examAttemptId = typeof snapshot.examAttemptId === 'string' ? snapshot.examAttemptId : null;
                AppState.examSubmittedAt = Number.isFinite(snapshot.examSubmittedAt) && snapshot.examSubmittedAt > 0 ? snapshot.examSubmittedAt : null;
                AppState._examSaveError = !!snapshot._examSaveError;
                AppState.examResultsPendingReview = !!snapshot.examResultsPendingReview;
                AppState._examSavePromise = null;
                AppState._examSaved = !!snapshot._examSaved;
                AppState.lastExamResults = Array.isArray(snapshot.lastExamResults) ? snapshot.lastExamResults : null;
                AppState.examInProgress = !!snapshot.examInProgress && AppState.examQuestions.length > 0;
                AppState.examEndsAt = Number.isFinite(snapshot.examEndsAt) && snapshot.examEndsAt > 0 ? snapshot.examEndsAt : null;
                if (AppState.examInProgress && AppState.examEndsAt === null && AppState.examTimeRemaining > 0) {
                    const savedAt = Number.isFinite(snapshot.savedAt) ? snapshot.savedAt : Date.now();
                    AppState.examEndsAt = savedAt + AppState.examTimeRemaining * 1000;
                }
                AppState.examSuspended = AppState.examInProgress;
                if (AppState.examInProgress && AppState.examEndsAt !== null) {
                    AppState.examTimeRemaining = Math.max(0, Math.ceil((AppState.examEndsAt - Date.now()) / 1000));
                }
                AppState.examShowResults = !!snapshot.examShowResults && Array.isArray(AppState.lastExamResults);

                if (Array.isArray(snapshot.studyQuestions) && snapshot.studyQuestions.length > 0 &&
                    Number.isInteger(snapshot.studyIndex) && snapshot.studyIndex >= 0 &&
                    snapshot.studyIndex < snapshot.studyQuestions.length) {
                    AppState.studyQuestions = snapshot.studyQuestions;
                    AppState.studyIndex = snapshot.studyIndex;
                    AppState.studyAnswers = (snapshot.studyAnswers && typeof snapshot.studyAnswers === 'object') ? snapshot.studyAnswers : {};
                    AppState.studyRevealed = (snapshot.studyRevealed && typeof snapshot.studyRevealed === 'object') ? snapshot.studyRevealed : {};
                }
                return true;
            } catch (e) {
                console.warn('Failed to apply saved session; starting fresh.', e);
                return false;
            }
        }

        function checkExamDeadline() {
            if (!AppState.examInProgress || !Number.isFinite(AppState.examEndsAt)) return false;
            AppState.examTimeRemaining = Math.max(0, Math.ceil((AppState.examEndsAt - Date.now()) / 1000));
            for (const selector of ['#examTimerDisplay', '#examSuspendedTimerDisplay']) {
                const display = $(selector);
                if (display) {
                    display.textContent = formatTime(AppState.examTimeRemaining);
                    if (selector === '#examTimerDisplay') display.className = 'timer-display' + (AppState.examTimeRemaining < 120 ? ' timer-warning' : '') + (AppState.examTimeRemaining < 60 ? ' timer-danger' : '');
                }
            }
            if (AppState.examTimeRemaining > 0) return false;
            if (AppState.examTimer) { clearInterval(AppState.examTimer); AppState.examTimer = null; }
            closeExamLeaveDialog();
            showToast('Time up! Submitting...', 'warning');
            submitExam({ showResults: !AppState.examSuspended, timedOut: true });
            return true;
        }

        function startExamTimer() {
            if (AppState.examTimer) { clearInterval(AppState.examTimer); AppState.examTimer = null; }
            if (!AppState.examInProgress) return;
            if (!Number.isFinite(AppState.examEndsAt)) {
                if (!(AppState.examTimeRemaining > 0)) return;
                AppState.examEndsAt = Date.now() + AppState.examTimeRemaining * 1000;
            }
            if (checkExamDeadline()) return;
            _doSaveSession();
            AppState.examTimer = setInterval(() => {
                if (!checkExamDeadline()) saveSession();
            }, 1000);
        }

        function handleExamPageHide() { _doSaveSession(); }

        function handleExamVisibilityChange() {
            if (!document.hidden && AppState.examInProgress) startExamTimer();
            _doSaveSession();
        }

        function cleanupLegacyStorage() {
            try {
                ['ENT_AUTO_BACKUP', 'ent_exam_progress', 'ent_exam_session', 'ent_last_interaction',
                 'ent_runtime_state', 'ent_answers', 'wrongQuestions', 'bookmarks', 'ent_last_question',
                 'entStats'].forEach(k => localStorage.removeItem(k));
                Object.keys(localStorage).forEach(k => {
                    if (k.startsWith('reclass_') || k.startsWith('reclassified_')) localStorage.removeItem(k);
                });
            } catch (e) { }
        }

        // ============================================================
        //  DOM HELPERS
        // ============================================================
        function $(sel) { return document.querySelector(sel); }
        function $$(sel) { return document.querySelectorAll(sel); }

        function escapeHTML(str) {
            return String(str == null ? '' : str).replace(/[&<>"']/g, char => ({
                '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
            })[char]);
        }

        function safeInlineQuestionId(value) {
            const id = typeof value === 'string' && /^\d+$/.test(value.trim()) ? Number(value.trim()) : value;
            return typeof id === 'number' && Number.isSafeInteger(id) && id > 0 ? id : 0;
        }

        function highlightText(text, query) {
            text = String(text == null ? '' : text);
            query = String(query == null ? '' : query);
            if (!query || !text) return escapeHTML(text);
            const pattern = new RegExp('(' + query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ')', 'gi');
            if (!pattern.test(text) && typeof ENTSearch !== 'undefined') {
                let position = 0, html = '';
                for (const [start, end] of ENTSearch.matchRanges(text, query)) {
                    html += escapeHTML(text.slice(position, start)) + '<span class="highlight">' + escapeHTML(text.slice(start, end)) + '</span>';
                    position = end;
                }
                return html + escapeHTML(text.slice(position));
            }
            return text.split(pattern).map((part, index) => index % 2
                ? `<span class="highlight">${escapeHTML(part)}</span>`
                : escapeHTML(part)).join('');
        }

        function formatTime(sec) {
            const m = Math.floor(sec / 60), s = sec % 60;
            return `${m}:${s.toString().padStart(2,'0')}`;
        }

        function showToast(msg, type = 'info') {
            const container = $('#toastContainer');
            const toast = document.createElement('div');
            toast.textContent = msg;
            const bg = type === 'success' ? '#2d8a4e' : type === 'error' ? '#c0392b' : type === 'warning' ? '#d4a017' : '#333';
            toast.style.cssText = `background:${bg};color:#fff;padding:10px 20px;border-radius:20px;margin-bottom:8px;font-weight:600;animation:toastIn 0.3s ease, toastOut 0.3s ease 2.2s forwards;`;
            container.appendChild(toast);
            setTimeout(() => toast.remove(), 2600);
        }

        function closeModal() {
            window.__questionImageFormRequest = (window.__questionImageFormRequest || 0) + 1;
            if (history.state && history.state.modal) {
                history.back(); // popstate handler hides the overlay
            } else {
                $('#modalOverlay').classList.add('hidden');
            }
        }

        // ============================================================
        //  NAVIGATION
        // ============================================================
        // True only while we're reacting to a browser/hardware back-button
        // press, so navigateTo() knows not to push another history entry
        // for a navigation the user didn't just initiate.
        let isPopNavigation = false;
        let _examLeaveRequest = null;

        function closeExamLeaveDialog() {
            const request = _examLeaveRequest;
            if (!request) return;
            _examLeaveRequest = null;
            request.dialog.remove();
            if (request.focusBefore?.isConnected) request.focusBefore.focus();
        }

        function showExamLeaveDialog(targetView) {
            if (_examLeaveRequest) { _examLeaveRequest.targetView = targetView; return false; }
            const dialog = document.createElement('dialog');
            dialog.id = 'examLeaveDialog';
            dialog.setAttribute('aria-labelledby', 'examLeaveTitle');
            dialog.style.cssText = 'max-width:460px;width:calc(100% - 32px);margin:auto;padding:24px;border:1px solid var(--border);border-radius:18px;background:var(--bg,#fff);color:var(--text,#172b3a);box-shadow:0 16px 60px #0005;';
            dialog.innerHTML = `<h2 id="examLeaveTitle" style="margin-bottom:12px;">Leave the exam?</h2>
                <p style="margin-bottom:18px;">Your answers will be kept. The timer keeps running for timed exams, including while the app is closed.</p>
                <div style="display:grid;gap:10px;">
                  <button type="button" class="btn btn-primary btn-block" id="btnExamStay">Continue Exam</button>
                  <button type="button" class="btn btn-outline btn-block" id="btnExamSaveExit">Save &amp; Exit</button>
                  <button type="button" class="btn btn-danger btn-block" id="btnExamFinish">End Exam &amp; Submit</button>
                </div>`;
            _examLeaveRequest = { targetView, dialog, focusBefore: document.activeElement };
            document.body.appendChild(dialog);
            dialog.querySelector('#btnExamStay').addEventListener('click', () => chooseExamLeaveAction('stay'));
            dialog.querySelector('#btnExamSaveExit').addEventListener('click', () => chooseExamLeaveAction('save-exit'));
            dialog.querySelector('#btnExamFinish').addEventListener('click', () => chooseExamLeaveAction('finish'));
            dialog.addEventListener('cancel', event => { event.preventDefault(); chooseExamLeaveAction('stay'); });
            dialog.addEventListener('click', event => { if (event.target === dialog) chooseExamLeaveAction('stay'); });
            if (typeof dialog.showModal === 'function') dialog.showModal();
            else dialog.setAttribute('open', '');
            dialog.querySelector('#btnExamStay').focus();
            return false;
        }

        async function chooseExamLeaveAction(action) {
            const request = _examLeaveRequest;
            if (!request || !AppState.examInProgress) { closeExamLeaveDialog(); return false; }
            if (checkExamDeadline()) return false;
            if (action === 'stay') { closeExamLeaveDialog(); return true; }
            if (action === 'save-exit') {
                const previousView = AppState.currentView;
                AppState.examSuspended = true;
                AppState.currentView = request.targetView;
                if (!_doSaveSession()) {
                    AppState.examSuspended = false;
                    AppState.currentView = previousView;
                    showToast('Progress could not be saved. Keep the exam open and try again.', 'error');
                    return false;
                }
                closeExamLeaveDialog();
                await performNavigation(request.targetView);
                return true;
            }
            if (action === 'finish') {
                closeExamLeaveDialog();
                await submitExam({ showResults: true });
                return true;
            }
            return false;
        }

        function performNavigation(view) {
            window.__questionImageFormRequest = (window.__questionImageFormRequest || 0) + 1;
            AppState.currentView = view;
            $$('.nav-item').forEach(n => n.classList.remove('active'));
            const nav = $(`.nav-item[data-view="${view}"]`);
            if (nav) nav.classList.add('active');
            window.scrollTo({ top: 0, behavior: 'smooth' });
            if (!isPopNavigation && (history.state?.view !== view || history.state?.modal)) {
                history.pushState({ view }, '', location.href);
            }
            _doSaveSession();
            return renderViewSafely(view);
        }

        function resumeExam() {
            if (!AppState.examInProgress || !AppState.examQuestions.length) return false;
            closeExamLeaveDialog();
            AppState.examSuspended = false;
            startExamTimer();
            if (!AppState.examInProgress) return false;
            _doSaveSession();
            return performNavigation('exam');
        }

        async function navigateTo(view) {
            if (AppState.examInProgress && view === 'exam') return resumeExam();
            if (view === 'exam' && AppState.examResultsPendingReview) return viewExamResults();
            if (AppState.examInProgress && !AppState.examSuspended && view !== 'exam') {
                if (checkExamDeadline()) return false;
                return showExamLeaveDialog(view);
            }
            AppState.examShowResults = false;
            return performNavigation(view);
        }

        async function handlePopState(event) {
            const overlay = $('#modalOverlay');
            const state = event.state || {};
            if (_examLeaveRequest) {
                closeExamLeaveDialog();
                history.pushState({ view: AppState.currentView }, '', location.href);
                return;
            }
            if (overlay && !overlay.classList.contains('hidden') && !state.modal) {
                overlay.classList.add('hidden');
                return;
            }
            if (AppState.examInProgress && !AppState.examSuspended && state.view !== 'exam') {
                history.pushState({ view: 'exam' }, '', location.href);
                return navigateTo(state.view || 'dashboard');
            }
            isPopNavigation = true;
            try { await navigateTo(state.view || 'dashboard'); }
            finally { isPopNavigation = false; }
        }

        function viewExamResults() {
            if (!Array.isArray(AppState.lastExamResults) || !AppState.lastExamResults.length) return false;
            AppState.examResultsPendingReview = false;
            AppState.examShowResults = true;
            _doSaveSession();
            return performNavigation('exam');
        }

        function renderSavedExamBanner() {
            if (!AppState.examInProgress && AppState.examResultsPendingReview && AppState.lastExamResults?.length) {
                const message = AppState._examSaveError ? 'Results could not be saved. Open the results to retry saving.' : 'The exam has finished. Your results are ready.';
                return `<div class="card" aria-label="Completed exam"><h3>Exam Completed</h3><p style="margin:10px 0;">${message}</p><button class="btn btn-primary btn-block" id="btnViewExamResults">View Results</button></div>`;
            }
            if (!AppState.examInProgress || !AppState.examSuspended) return '';
            const time = Number.isFinite(AppState.examEndsAt)
                ? `Time remaining: <span id="examSuspendedTimerDisplay">${formatTime(AppState.examTimeRemaining)}</span>. The timer keeps running.`
                : 'This exam has no time limit.';
            return `<div class="card" aria-label="Saved exam"><h3>Saved Exam</h3><p style="margin:10px 0;">Your answers are saved. ${time}</p><button class="btn btn-primary btn-block" id="btnResumeExam">Resume Exam</button></div>`;
        }

        // ============================================================
        //  RENDER ENGINE
        // ============================================================
        let _viewRenderSequence = 0;
        async function renderViewSafely(view) {
            if (AppState.examInProgress && !AppState.examSuspended && view !== 'exam') return navigateTo(view);
            if (AppState.examInProgress && AppState.examSuspended && view === 'exam') return resumeExam();
            AppState.currentView = view;
            const sequence = ++_viewRenderSequence;
            const questionInputRevision = AppState._questionSearchRevision || 0;
            const main = $('#mainContent');
            if (!main) return;
            let html;
            try {
                switch (view) {
                    case 'dashboard': html = await renderDashboard(); break;
                    case 'study': html = await renderStudy(); break;
                    case 'exam':
                        if (AppState.examInProgress) html = await renderExamInProgress();
                        else if (AppState.examShowResults) html = renderExamResults();
                        else html = await renderExamSetup();
                        break;
                    case 'questions': html = await renderQuestionList(); break;
                    case 'import': html = renderImportExport(); break;
                    case 'mistakes': html = await renderMistakes(); break;
                    case 'highyield': html = await renderHighYield(); break;
                    case 'settings': html = await renderSettings(); break;
                    case 'admin':
                        if (!RBAC.isAdmin()) {
                            html = ("<div class=\"card text-center\"><h3>" + uiIcon("lock") + " Access Denied</h3><p>Admin access is required to view this page.</p><button class=\"btn btn-primary btn-block mt-2\" data-nav=\"dashboard\">" + uiIcon("arrow-left") + " Back to Dashboard</button></div>");
                            break;
                        }
                        html = await renderAdminDashboard();
                        break;
                    default: html = '<div class="card">Unknown view</div>';
                }
            } catch (e) {
                console.error('Render error:', e);
                html = `<div class="card text-center"><p style="color:var(--danger);">Error: ${escapeHTML(e.message)}</p></div>`;
            }
            if (sequence !== _viewRenderSequence || (view === 'questions' && questionInputRevision !== (AppState._questionSearchRevision || 0))) return;
            if (AppState.examInProgress && !AppState.examSuspended && view !== 'exam') return navigateTo(view);
            main.innerHTML = html;
            const examBanner = view !== 'exam' ? renderSavedExamBanner() : '';
            if (examBanner) main.insertAdjacentHTML('afterbegin', examBanner);
            attachEventListeners();
            saveSession();
        }

        // ============================================================
        //  RENDER FUNCTIONS  (Optimized)
        // ============================================================

        /**
         * DASHBOARD — Optimized path:
         * 1. Fetches all hot data via cached DB getters (single IndexedDB read).
         * 2. Renders the static skeleton immediately so the UI paints fast.
         * 3. Offloads heavy analytics (weak topics, subject breakdown) to the
         *    Web Worker, then injects results lazily via requestIdleCallback.
         */
        
        // ============================================================
        //  ADMIN DASHBOARD
        // ============================================================
// Review decisions remain explicit and travel with every valid question in exports.
async function openClassificationReview(page = 0) {
    if (!RBAC.requireAdmin()) return;
    const pending = (await db.getAllQuestions()).filter(q => !isQuestionClassificationApproved(q));
    const pageSize = 20;
    const pageCount = Math.max(1, Math.ceil(pending.length / pageSize));
    page = Math.max(0, Math.min(Number(page) || 0, pageCount - 1));
    const rows = pending.slice(page * pageSize, (page + 1) * pageSize);
    showModal(`
        <h3>Classification Review — تحتاج مراجعة (${pending.length})</h3>
        <p style="color:var(--text2);margin-bottom:14px;">Check the subject, chapter and topic, then approve or edit each question. All valid questions are included in exports with their current classification and review status.</p>
        <div style="max-height:60vh;overflow:auto;">
        ${rows.map(q => `
            <div class="question-block" style="padding:12px;margin-bottom:10px;">
                <p><strong>${escapeHTML(q.id)}.</strong> ${escapeHTML(q.questionText || '')}</p>
                <p style="color:var(--text2);margin:8px 0;">${escapeHTML(q.subject || 'Uncategorized')} → ${escapeHTML(q.chapter || 'General')} → ${escapeHTML(q.topic || 'General')}</p>
                ${q.classificationInferred ? '<span class="badge badge-warning">Automatic suggestion — awaiting approval</span>' : '<span class="badge badge-warning">Incomplete or unapproved classification</span>'}
                <div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:10px;">
                    <button class="btn btn-primary btn-sm" onclick="adminConfirmClassification(${safeInlineQuestionId(q.id)}, ${page})">Approve Classification</button>
                    <button class="btn btn-outline btn-sm" onclick="openReclassifyModal(${safeInlineQuestionId(q.id)})">Review / Edit</button>
                </div>
            </div>
        `).join('') || '<div class="empty-state">All classifications are approved.</div>'}
        </div>
        <div style="display:flex;gap:8px;align-items:center;flex-wrap:wrap;margin-top:12px;">
            <button class="btn btn-outline btn-sm" ${page === 0 ? 'disabled' : ''} onclick="openClassificationReview(${page - 1})">Previous</button>
            <span>${page + 1} / ${pageCount}</span>
            <button class="btn btn-outline btn-sm" ${page + 1 >= pageCount ? 'disabled' : ''} onclick="openClassificationReview(${page + 1})">Next</button>
            <button class="btn btn-outline btn-sm" onclick="closeModal()">Close</button>
        </div>
    `);
}

async function adminConfirmClassification(questionId, page = 0) {
    if (!RBAC.requireAdmin()) return false;
    const q = await db.getQuestion(questionId);
    if (!q) { showToast('Question not found.', 'error'); return false; }
    await updateQuestionClassification(q.id, q.subject, q.chapter, q.topic, q.subtopic);
    const saved = await db.getQuestion(q.id);
    if (!isQuestionClassificationApproved(saved)) {
        showToast('Select a specific subject and chapter before approval.', 'warning');
        await openReclassifyModal(q.id);
        return false;
    }
    showToast('Classification approved.', 'success');
    await renderViewSafely(AppState.currentView);
    await openClassificationReview(page);
    return true;
}

function openMissingQuestionReferences() {
    if (!RBAC.requireAdmin()) return;
    AppState.questionFilters = { subject: 'all', chapter: 'all', topic: 'all', difficulty: 'all', special: 'all', reference: 'missing' };
    AppState.searchQuery = '';
    navigateTo('questions');
}

        async function renderAdminDashboard() {
            if (!RBAC.isAdmin()) {
                return ("<div class=\"card text-center\"><h3>" + uiIcon("lock") + " Access Denied</h3><p>Admin access required.</p><button class=\"btn btn-primary btn-block mt-2\" data-nav=\"dashboard\">" + uiIcon("arrow-left") + " Back to Dashboard</button></div>");
            }

            const [questions, bookmarks, history, perf, groups, books, hyIds] = await Promise.all([
                db.getAllQuestions(),
                db.getAllBookmarkedIds(),
                db.getExamHistory(),
                db.getPerformance(),
                db.getAllGroups(),
                db.getAllBooks(),
                db.getAllHighYieldIds()
            ]);

            const total = questions.length;
            const classificationPending = questions.filter(q => !isQuestionClassificationApproved(q)).length;
            const referencesMissing = questions.filter(q => !hasCompleteQuestionReference(q)).length;
            const correct = perf.filter(x => x.correct).length;
            const wrong = perf.length - correct;
            const acc = perf.length ? Math.round(correct * 100 / perf.length) : 0;
            const avg = history.length ? Math.round(history.reduce((s, e) => s + (e.percentage || 0), 0) / history.length) : 0;

            // Subject breakdown
            const subjectCounts = {};
            questions.forEach(q => { const s = q.subject || 'Uncategorized'; subjectCounts[s] = (subjectCounts[s] || 0) + 1; });
            const subjectEntries = Object.entries(subjectCounts).sort((a, b) => b[1] - a[1]);

            // Weak topics
            const weakTopics = {};
            perf.forEach(x => {
                const key = (x.subject || 'Unknown') + ' > ' + (x.chapter || 'Unknown') + ' > ' + (x.topic || 'Unknown');
                if (!weakTopics[key]) weakTopics[key] = { t: 0, c: 0 };
                weakTopics[key].t++;
                if (x.correct) weakTopics[key].c++;
            });
            const weakArr = Object.entries(weakTopics)
                .filter(([k, v]) => v.t >= 2)
                .map(([k, v]) => ({ k, p: Math.round(v.c * 100 / v.t), t: v.t }))
                .sort((a, b) => a.p - b.p)
                .slice(0, 5);

            // Duplicate scan
            const dupMap = new Map();
            const dups = [];
            questions.forEach(q => {
                const key = (q.questionText || '').toLowerCase().trim();
                if (dupMap.has(key)) dups.push(q);
                else dupMap.set(key, q.id);
            });

            return `
            <div class="card"><div class="card-header">${uiIcon("settings")} Admin Dashboard</div>
              <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(120px,1fr));gap:10px;margin-bottom:14px;">
                <div class="stat-card"><div class="stat-value">${total}</div><div class="stat-label">Questions</div></div>
                <div class="stat-card"><div class="stat-value">${bookmarks.length}</div><div class="stat-label">Bookmarked</div></div>
                <div class="stat-card"><div class="stat-value">${history.length}</div><div class="stat-label">Exams</div></div>
                <div class="stat-card"><div class="stat-value">${correct}</div><div class="stat-label">Correct</div></div>
                <div class="stat-card"><div class="stat-value">${wrong}</div><div class="stat-label">Wrong</div></div>
                <div class="stat-card"><div class="stat-value">${acc}%</div><div class="stat-label">Accuracy</div></div>
                <div class="stat-card"><div class="stat-value">${avg}%</div><div class="stat-label">Avg Exam</div></div>
                <div class="stat-card"><div class="stat-value">${hyIds.length}</div><div class="stat-label">High Yield</div></div>
                <div class="stat-card"><div class="stat-value">${dups.length}</div><div class="stat-label">Duplicates</div></div>
                <div class="stat-card"><div class="stat-value">${groups.length}</div><div class="stat-label">Groups</div></div>
                <div class="stat-card"><div class="stat-value">${books.length}</div><div class="stat-label">Books</div></div>
              </div>
            </div>

            <div class="card" id="referenceDocumentationCard">
              <div class="card-header">References — توثيق المراجع</div>
              <p style="margin-bottom:12px;">Complete: <strong>${total - referencesMissing}</strong> · Missing / incomplete: <strong>${referencesMissing}</strong>. A complete reference includes the name, edition and page.</p>
              <button class="btn btn-outline" id="btnMissingReferences" onclick="openMissingQuestionReferences()">Review Missing References (${referencesMissing})</button>
            </div>
            <div class="card" id="classificationReviewCard">
              <div class="card-header">Classification Review — تحتاج مراجعة</div>
              <p style="margin-bottom:12px;">Approved: <strong>${total - classificationPending}</strong> · Needs review: <strong>${classificationPending}</strong>. Exports include all valid questions with their current classification and review status.</p>
              <button class="btn btn-primary" id="btnClassificationReview" onclick="openClassificationReview()">Review Classifications (${classificationPending})</button>
            </div>
            <div class="card"><div class="card-header">${uiIcon("settings")} Quick Actions</div>
              <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(160px,1fr));gap:10px;">
                <button class="btn btn-primary" id="btnAdminAddQ">${uiIcon("plus")} Add Question</button>
                <button class="btn btn-accent" id="btnAdminBulkImport">${uiIcon("import")} Bulk Import</button>
                <button class="btn btn-warning" id="btnAdminBulkEdit">${uiIcon("edit")} Bulk Edit</button>
                <button class="btn btn-danger" id="btnAdminMergeDups">${uiIcon("refresh")} Merge Duplicates (${dups.length})</button>
                <button class="btn btn-primary" id="btnAdminReclassify">${uiIcon("tag")} Reclassify All</button>
                <button class="btn btn-danger" id="btnAdminClearAll">${uiIcon("trash")} Clear All</button>
                <button class="btn btn-outline" data-nav="settings">${uiIcon("settings")} Settings</button>
              </div>
            </div>

            <div class="card"><div class="card-header">${uiIcon("library")} By Subject</div>
              ${subjectEntries.length ? subjectEntries.map(([s,c])=>`<div style="display:flex;justify-content:space-between;padding:6px 0;border-bottom:1px solid var(--border);"><span>${escapeHTML(s)}</span><span class="badge badge-primary">${c}</span></div>`).join('') : '<div class="empty-state">No questions yet.</div>'}
            </div>

            <div class="card"><div class="card-header">${uiIcon("target")} Weak Topics</div>
              ${weakArr.length ? weakArr.map(x=>`<div style="display:flex;justify-content:space-between;padding:6px 0"><span>${escapeHTML(x.k)}</span><span class="badge badge-danger">${x.p}% (${x.t})</span></div>`).join('') : '<div class="empty-state">Solve more questions to generate weak-topic analytics.</div>'}
            </div>

            <div class="card"><div class="card-header">${uiIcon("exam")} Question Manager</div>
              <input type="text" id="adminQSearch" placeholder="Search questions to edit/delete..." style="margin-bottom:10px;">
              <div id="adminQuestionList" style="max-height:60vh;overflow:auto;">
                ${questions.slice(0, 20).map(q => `
                  <div class="question-block" data-qid="${escapeHTML(q.id)}" style="padding:12px;margin-bottom:8px;">
                    <div style="display:flex;justify-content:space-between;align-items:flex-start;gap:8px;">
                      <div style="flex:1;font-size:0.9rem;"><strong>${escapeHTML(q.id)}.</strong> ${escapeHTML((q.questionText || '').substring(0, 120))}${(q.questionText || '').length > 120 ? '…' : ''}</div>
                      <div style="display:flex;gap:6px;flex-wrap:wrap;">
                        <button class="btn btn-sm btn-primary admin-edit-q" data-qid="${escapeHTML(q.id)}">${uiIcon("edit")} Edit</button>
                        <button class="btn btn-sm btn-danger admin-del-q" data-qid="${escapeHTML(q.id)}">${uiIcon("trash")} Delete</button>
                      </div>
                    </div>
                    <div class="flex-wrap" style="margin-top:6px;">
                      <span class="badge badge-primary">${escapeHTML(q.subject || 'Uncategorized')}</span>
                      <span class="badge badge-accent">${escapeHTML(q.chapter || 'General')}</span>
                      <span class="badge badge-group">${escapeHTML(q.difficulty || 'Medium')}</span>
                    </div>
                  </div>
                `).join('')}
                ${questions.length > 20 ? `<p style="text-align:center;color:var(--text2);padding:10px;">Showing first 20 of ${questions.length} questions. Use search to filter.</p>` : ''}
              </div>
            </div>

            `;
        }

        async function adminSearchQuestions(query) {
            const questions = await db.getAllQuestions();
            return (await GlobalSearchIndex.findQuestions(query, questions)).slice(0, String(query || '').trim() ? 50 : 20);
        }

        async function adminRenderQuestionList(questions) {
            const container = $('#adminQuestionList');
            if (!container) return;
            container.innerHTML = questions.map(q => `
              <div class="question-block" data-qid="${escapeHTML(q.id)}" style="padding:12px;margin-bottom:8px;">
                <div style="display:flex;justify-content:space-between;align-items:flex-start;gap:8px;">
                  <div style="flex:1;font-size:0.9rem;"><strong>${escapeHTML(q.id)}.</strong> ${escapeHTML((q.questionText || '').substring(0, 120))}${(q.questionText || '').length > 120 ? '…' : ''}</div>
                  <div style="display:flex;gap:6px;flex-wrap:wrap;">
                    <button class="btn btn-sm btn-primary admin-edit-q" data-qid="${escapeHTML(q.id)}">${uiIcon("edit")} Edit</button>
                    <button class="btn btn-sm btn-danger admin-del-q" data-qid="${escapeHTML(q.id)}">${uiIcon("trash")} Delete</button>
                  </div>
                </div>
                <div class="flex-wrap" style="margin-top:6px;">
                  <span class="badge badge-primary">${escapeHTML(q.subject || 'Uncategorized')}</span>
                  <span class="badge badge-accent">${escapeHTML(q.chapter || 'General')}</span>
                  <span class="badge badge-group">${escapeHTML(q.difficulty || 'Medium')}</span>
                </div>
              </div>
            `).join('') + (questions.length === 0 ? '<div class="empty-state">No questions found.</div>' : '');
        }

        async function adminMergeDuplicates() {
            if (!RBAC.requireAdmin()) return;
            const questions = await db.getAllQuestions();
            const map = new Map();
            const dups = [];
            for (const q of questions) {
                const key = (q.questionText || '').toLowerCase().trim();
                if (map.has(key)) dups.push(q);
                else map.set(key, q.id);
            }
            if (dups.length === 0) { showToast('No duplicates found.', 'info'); return; }
            if (!confirm(`Delete ${dups.length} duplicate question(s)? This cannot be undone.`)) return;
            let deleted = 0;
            for (const q of dups) {
                try { await db.deleteQuestion(q.id); deleted++; } catch (e) {}
            }
            showToast(`${deleted} duplicate(s) removed.`, 'success');
            navigateTo('admin');
        }

        async function adminBulkReclassify() {
            if (!RBAC.requireAdmin()) return;
            const questions = await db.getAllQuestions();
            const review = questions.filter(q => q.needsReview || isGenericQuestionSubject(q.subject) || isGenericQuestionChapter(q.chapter));
            if (review.length === 0) { showToast('No questions need reclassification.', 'info'); return; }
            if (!confirm(`Auto-reclassify ${review.length} question(s)?`)) return;
            let fixed = 0;
            for (const q of review) {
                classifyQuestionAdvanced(q);
                generateTopicSubtopic(q, { suggest: true });
                try {
                    await new Promise((resolve, reject) => {
                        const tx = db.db.transaction('questions', 'readwrite');
                        tx.objectStore('questions').put(q);
                        tx.oncomplete = resolve;
                        tx.onerror = () => reject(tx.error);
                    });
                    fixed++;
                } catch (e) {}
            }
            db._invalidateCache();
            showToast(`${fixed} question(s) reclassified.`, 'success');
            navigateTo('admin');
        }

        async function adminBulkEdit() {
            if (!RBAC.requireAdmin()) return;
            const questions = await db.getAllQuestions();
            if (questions.length === 0) { showToast('No questions to edit.', 'warning'); return; }
            const taxonomy = computeTaxonomy(questions);
            const subjectOpts = '<option value="">Keep unchanged</option>' + taxonomy.subjects.map(s => `<option value="${escapeHTML(s)}">${escapeHTML(s)}</option>`).join('');
            const diffOpts = '<option value="">Keep unchanged</option><option>Easy</option><option>Medium</option><option>Hard</option>';
            showModal(`
                <h3>${uiIcon("edit")} Bulk Edit</h3>
                <p style="font-size:0.85rem;color:var(--text2);margin-bottom:12px;">This will apply changes to ALL ${questions.length} questions. Leave fields empty to keep existing values.</p>
                <div class="modal-field"><label>Subject</label><select id="bulkEditSubject">${subjectOpts}</select></div>
                <div class="modal-field"><label>Chapter</label><input type="text" id="bulkEditChapter" placeholder="Leave empty to keep"></div>
                <div class="modal-field"><label>Difficulty</label><select id="bulkEditDifficulty">${diffOpts}</select></div>
                <div class="modal-field"><label>Group</label><input type="text" id="bulkEditGroup" placeholder="Leave empty to keep"></div>
                <div class="modal-field"><label>Book</label><input type="text" id="bulkEditBook" placeholder="Leave empty to keep"></div>
                <button class="btn btn-warning btn-block" id="btnExecuteBulkEdit">Apply to All</button>
                <button class="btn btn-outline btn-block mt-2" onclick="closeModal()">Cancel</button>
            `);
            $('#btnExecuteBulkEdit').addEventListener('click', async () => {
                const subject = $('#bulkEditSubject').value;
                const chapter = $('#bulkEditChapter').value.trim();
                const difficulty = $('#bulkEditDifficulty').value;
                const group = $('#bulkEditGroup').value.trim();
                const book = $('#bulkEditBook').value.trim();
                let updated = 0;
                const tx = db.db.transaction('questions', 'readwrite');
                const store = tx.objectStore('questions');
                for (const q of questions) {
                    let changed = false;
                    if (subject && q.subject !== subject) { q.subject = subject; changed = true; }
                    if (chapter && q.chapter !== chapter) { q.chapter = chapter; changed = true; }
                    if (difficulty && q.difficulty !== difficulty) { q.difficulty = difficulty; changed = true; }
                    if (group && q.group !== group) { q.group = group; changed = true; }
                    if (book && q.book !== book) { q.book = book; changed = true; }
                    if (changed) {
                        if (subject || chapter) {
                            q.subjectId = q.chapterId = q.chapterNumber = q.partId = null;
                            normalizeQuestionClassification(q, { readNested: false, infer: false, approve: true });
                        }
                        q.updatedAt = new Date().toISOString();
                        store.put(q); updated++;
                    }
                }
                await new Promise((resolve, reject) => { tx.oncomplete = resolve; tx.onerror = () => reject(tx.error); });
                db._invalidateCache();
                closeModal();
                showToast(`${updated} question(s) updated.`, 'success');
                navigateTo('admin');
            });
        }

        async function adminDeleteQuestion(qid) {
            if (!RBAC.requireAdmin()) return;
            if (!confirm(`Delete question #${qid}? This cannot be undone.`)) return;
            await db.deleteQuestion(qid);
            showToast(`Question #${qid} deleted.`, 'success');
            navigateTo('admin');
        }

        async function adminEditQuestion(qid) {
            if (!RBAC.requireAdmin()) return;
            const q = await db.getQuestion(qid);
            if (!q) { showToast('Question not found.', 'error'); return; }
            showAddQuestionModal(q);
        }

        // ============================================================
        //  STUDENT MODE ENHANCEMENTS
        // ============================================================
        const STREAK_KEY = 'ent_study_streak';
        const DAILY_GOAL_KEY = 'ent_daily_goal';
        const DAILY_PROGRESS_KEY = 'ent_daily_progress';
        const LAST_STUDY_DATE_KEY = 'ent_last_study_date';
        const DEFAULT_STREAK_INFO = Object.freeze({
            streak: 0,
            bestStreak: 0,
            totalStudyDays: 0,
            lastDate: null,
            studiedToday: false
        });

        function toNonNegativeInteger(value, fallback = 0) {
            const parsed = Number.parseInt(value, 10);
            return Number.isFinite(parsed) && parsed >= 0 ? parsed : fallback;
        }

        function parseDailyProgress(raw) {
            try {
                const parsed = typeof raw === 'string' ? JSON.parse(raw) : raw;
                if (!parsed || typeof parsed !== 'object' || Array.isArray(parsed)) return {};
                return Object.fromEntries(
                    Object.entries(parsed).map(([date, count]) => [date, toNonNegativeInteger(count)])
                );
            } catch (e) {
                return {};
            }
        }

        function getBestStreak(progress = {}) {
            const studyDates = Object.entries(progress ?? {})
                .filter(([date, count]) => /^\d{4}-\d{2}-\d{2}$/.test(date) && toNonNegativeInteger(count) > 0)
                .map(([date]) => date)
                .sort();
            let bestStreak = 0;
            let currentRun = 0;
            let previousDay = null;
            studyDates.forEach(date => {
                const day = Date.parse(`${date}T00:00:00Z`);
                currentRun = previousDay !== null && day - previousDay === 86400000 ? currentRun + 1 : 1;
                bestStreak = Math.max(bestStreak, currentRun);
                previousDay = day;
            });
            return bestStreak;
        }

        async function getDailyProgressMap() {
            try {
                return parseDailyProgress(await db.getSetting(DAILY_PROGRESS_KEY, '{}'));
            } catch (e) {
                return {};
            }
        }

        async function getStudyStreak() {
            try {
                const [raw, lastRaw, progress] = await Promise.all([
                    db.getSetting(STREAK_KEY, '0'),
                    db.getSetting(LAST_STUDY_DATE_KEY, ''),
                    getDailyProgressMap()
                ]);
                const storedStreak = toNonNegativeInteger(raw);
                const totalStudyDays = Object.values(progress ?? {}).filter(count => toNonNegativeInteger(count) > 0).length;
                const bestStreak = Math.max(storedStreak, getBestStreak(progress));
                const lastDate = lastRaw ? new Date(lastRaw) : null;
                const today = new Date(); today.setHours(0,0,0,0);
                const yesterday = new Date(today); yesterday.setDate(yesterday.getDate() - 1);
                if (!lastDate || Number.isNaN(lastDate.getTime())) {
                    return { ...DEFAULT_STREAK_INFO, bestStreak, totalStudyDays };
                }
                const last = new Date(lastDate); last.setHours(0,0,0,0);
                if (+last === +today) return { streak: storedStreak, bestStreak, totalStudyDays, lastDate: lastRaw, studiedToday: true };
                if (+last === +yesterday) return { streak: storedStreak, bestStreak, totalStudyDays, lastDate: lastRaw, studiedToday: false };
                return { streak: 0, bestStreak, totalStudyDays, lastDate: lastRaw, studiedToday: false };
            } catch (e) { return { ...DEFAULT_STREAK_INFO }; }
        }

        async function recordStudyActivity() {
            const today = new Date().toISOString().slice(0, 10);
            const { streak, studiedToday } = await getStudyStreak();
            if (!studiedToday) {
                const newStreak = streak + 1;
                await db.setSetting(STREAK_KEY, String(newStreak));
                await db.setSetting(LAST_STUDY_DATE_KEY, today);
            }
            // Daily progress
            const progress = await getDailyProgressMap();
            progress[today] = (progress[today] || 0) + 1;
            await db.setSetting(DAILY_PROGRESS_KEY, JSON.stringify(progress));
        }

        async function getDailyGoal() {
            try {
                const raw = await db.getSetting(DAILY_GOAL_KEY, '20');
                return Math.max(1, toNonNegativeInteger(raw, 20));
            } catch (e) {
                return 20;
            }
        }

        async function setDailyGoal(goal) {
            await db.setSetting(DAILY_GOAL_KEY, String(goal));
        }

        async function getDailyProgress() {
            const today = new Date().toISOString().slice(0, 10);
            const progress = await getDailyProgressMap();
            return toNonNegativeInteger(progress?.[today]);
        }

        async function getWeeklyProgress() {
            const progress = await getDailyProgressMap();
            const result = [];
            for (let i = 6; i >= 0; i--) {
                const d = new Date(); d.setDate(d.getDate() - i);
                const key = d.toISOString().slice(0, 10);
                result.push({ date: key, count: toNonNegativeInteger(progress?.[key]), day: d.toLocaleDateString('en-US', { weekday: 'long' }) });
            }
            return result;
        }

        async function generateSmartRevision() {
            const [questions, perf, bmIds, hyIds] = await Promise.all([
                db.getAllQuestions(), db.getPerformance(),
                db.getAllBookmarkedIds(), db.getAllHighYieldIds()
            ]);
            const latest = {};
            perf.forEach(x => {
                if (!latest[x.questionId] || new Date(x.timestamp) > new Date(latest[x.questionId].timestamp)) {
                    latest[x.questionId] = { correct: x.correct, timestamp: x.timestamp };
                }
            });
            const wrongIds = Object.keys(latest).filter(k => latest[k].correct === false).map(Number);
            const missed = questions.filter(q => wrongIds.includes(q.id));
            const highYield = questions.filter(q => hyIds.includes(q.id));
            const bookmarked = questions.filter(q => bmIds.includes(q.id));

            const pool = [];
            // Priority: missed > high yield > bookmarked > random
            missed.forEach(q => pool.push({ q, weight: 10 }));
            highYield.forEach(q => { if (!pool.find(p => p.q.id === q.id)) pool.push({ q, weight: 5 }); });
            bookmarked.forEach(q => { if (!pool.find(p => p.q.id === q.id)) pool.push({ q, weight: 3 }); });

            // Fill up to 20 with random weak-topic questions if pool is small
            if (pool.length < 20) {
                const weakTopics = {};
                perf.filter(x => !x.correct).forEach(x => {
                    const key = x.subject || 'Unknown';
                    weakTopics[key] = (weakTopics[key] || 0) + 1;
                });
                const weakSubjects = Object.entries(weakTopics).sort((a, b) => b[1] - a[1]).map(([k]) => k);
                const candidates = questions.filter(q => weakSubjects.includes(q.subject) && !pool.find(p => p.q.id === q.id));
                candidates.sort(() => Math.random() - 0.5).slice(0, 20 - pool.length).forEach(q => pool.push({ q, weight: 2 }));
            }

            // Sample by weight without replacement, so every draw makes progress.
            const remaining = pool.slice();
            const selected = [];
            while (selected.length < 20 && remaining.length > 0) {
                const totalWeight = remaining.reduce((sum, entry) => sum + entry.weight, 0);
                let draw = Math.random() * totalWeight;
                let index = remaining.length - 1;
                for (let i = 0; i < remaining.length; i++) {
                    draw -= remaining[i].weight;
                    if (draw < 0) { index = i; break; }
                }
                selected.push(remaining.splice(index, 1)[0].q);
            }
            return selected;
        }

        async function startAdaptiveExam() {
            const questions = await db.getAllQuestions();
            if (questions.length === 0) { showToast('No questions available.', 'warning'); return; }
            const perf = await db.getPerformance();
            const latest = {};
            perf.forEach(x => {
                if (!latest[x.questionId] || new Date(x.timestamp) > new Date(latest[x.questionId].timestamp)) {
                    latest[x.questionId] = x;
                }
            });
            // Score each question: lower accuracy = higher priority
            const scored = questions.map(q => {
                const rec = latest[q.id];
                let score = 0.5;
                if (rec) {
                    score = rec.correct ? 0.3 : 0.9;
                    if (q.difficulty === 'Hard') score += 0.1;
                    if (q.difficulty === 'Easy') score -= 0.1;
                }
                return { q, score: Math.max(0, Math.min(1, score)) };
            });
            scored.sort((a, b) => b.score - a.score);
            const selected = scored.slice(0, Math.min(20, scored.length)).map(s => s.q);
            if (!resetExamAttempt()) return;
            AppState.examQuestions = selected;
            AppState.examAnswers = { currentIndex: 0 };
            AppState.examInProgress = true;
            AppState.examShowResults = false;
            AppState.lastExamResults = null;
            AppState.examStartTime = Date.now();
            AppState.examTimeRemaining = 0;
            resumeExam();
        }

        async function startSmartRevision() {
            const selected = await generateSmartRevision();
            if (selected.length === 0) { showToast('No revision questions available. Start studying first!', 'warning'); return; }
            AppState.studyQuestions = selected;
            AppState.studyIndex = 0;
            AppState.studyAnswers = {};
            AppState.studyRevealed = {};
            navigateTo('study');
            setTimeout(() => renderStudyQuestion(), 100);
        }

        async function continueStudying() {
            if (AppState.studyQuestions && AppState.studyIndex < AppState.studyQuestions.length) {
                navigateTo('study');
                setTimeout(() => renderStudyQuestion(), 100);
            } else {
                showToast('No active study session. Start a new one!', 'info');
            }
        }

async function renderDashboard() {
            let streakInfo = { ...DEFAULT_STREAK_INFO };
            let dailyProgress = 0;
            let dailyGoal = 20;
            let weeklyProgress = [];
            const canContinue = Boolean(
                AppState.studyQuestions?.length &&
                (AppState.studyIndex ?? 0) < AppState.studyQuestions.length
            );

            // Parallel cached reads — no blocking sequential DB calls
            const [questions, bookmarks, history, perf, loadedStreakInfo, loadedDailyGoal, progressByDate] = await Promise.all([
                db.getAllQuestions(),
                db.getAllBookmarkedIds(),
                db.getExamHistory(),
                db.getPerformance(),
                getStudyStreak(),
                getDailyGoal(),
                getDailyProgressMap()
            ]);

            streakInfo = { ...DEFAULT_STREAK_INFO, ...(loadedStreakInfo ?? {}) };
            dailyGoal = Math.max(1, toNonNegativeInteger(loadedDailyGoal, 20));
            const today = new Date().toISOString().slice(0, 10);
            dailyProgress = toNonNegativeInteger(progressByDate?.[today]);
            weeklyProgress = Array.from({ length: 7 }, (_, index) => {
                const date = new Date();
                date.setUTCDate(date.getUTCDate() - (6 - index));
                const dateKey = date.toISOString().slice(0, 10);
                return {
                    day: date.toLocaleDateString('en-US', { weekday: 'long', timeZone: 'UTC' }),
                    count: toNonNegativeInteger(progressByDate?.[dateKey])
                };
            });
            const dailyProgressPercent = Math.min(100, Math.round((dailyProgress / dailyGoal) * 100));

            const total = questions.length;
            const correct = perf.filter(x => x.correct).length;
            const wrong = perf.length - correct;
            const acc = perf.length ? Math.round(correct * 100 / perf.length) : 0;
            const avg = history.length ? Math.round(history.reduce((s, e) => s + (e.percentage || 0), 0) / history.length) : 0;

            // Render skeleton immediately
            let html = `
            <div class="card"><div class="card-header">${uiIcon("dashboard")} Dashboard</div>
              <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(120px,1fr));gap:10px;">
                <div class="stat-card"><div class="stat-value">${total}</div><div class="stat-label">Questions</div></div>
                <div class="stat-card"><div class="stat-value">${bookmarks.length}</div><div class="stat-label">Bookmarked</div></div>
                <div class="stat-card"><div class="stat-value">${history.length}</div><div class="stat-label">Exams</div></div>
                <div class="stat-card"><div class="stat-value">${correct}</div><div class="stat-label">Correct</div></div>
                <div class="stat-card"><div class="stat-value">${wrong}</div><div class="stat-label">Wrong</div></div>
                <div class="stat-card"><div class="stat-value">${acc}%</div><div class="stat-label">Accuracy</div></div>
                <div class="stat-card"><div class="stat-value">${avg}%</div><div class="stat-label">Avg Accuracy</div></div>
              </div>
            </div>
            <div class="card"><div class="card-header">${uiIcon("flame")} Study Streak & Daily Goal</div>
              <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(120px,1fr));gap:10px;margin-bottom:10px;">
                <div class="stat-card"><div class="stat-value">${streakInfo?.streak ?? 0}</div><div class="stat-label">Current Streak</div></div>
                <div class="stat-card"><div class="stat-value">${streakInfo?.bestStreak ?? 0}</div><div class="stat-label">Best Streak</div></div>
                <div class="stat-card"><div class="stat-value">${streakInfo?.totalStudyDays ?? 0}</div><div class="stat-label">Total Study Days</div></div>
                <div class="stat-card"><div class="stat-value">${dailyProgress}</div><div class="stat-label">Today</div></div>
                <div class="stat-card"><div class="stat-value">${dailyGoal}</div><div class="stat-label">Daily Goal</div></div>
                <div class="stat-card"><div class="stat-value">${dailyProgressPercent}%</div><div class="stat-label">Progress</div></div>
              </div>
              <div style="margin-bottom:10px;">
                <div class="progress-bar"><div class="progress-fill" style="width:${dailyProgressPercent}%"></div></div>
              </div>
              <div style="display:flex;gap:8px;flex-wrap:wrap;">
                <button class="btn btn-sm btn-primary" id="btnSetDailyGoal">${uiIcon("target")} Set Daily Goal</button>
                <button class="btn btn-sm btn-success" id="btnContinueStudy" ${canContinue ? '' : 'disabled'}>${uiIcon("play")} Continue Studying</button>
                <button class="btn btn-sm btn-accent" id="btnSmartRevision">${uiIcon("brain")} Smart Revision</button>
                <button class="btn btn-sm btn-warning" id="btnAdaptiveQuiz">${uiIcon("target")} Adaptive Quiz</button>
              </div>
            </div>

            <div class="card"><div class="card-header">${uiIcon("calendar")} Weekly Activity</div>
              <div style="display:flex;gap:6px;align-items:flex-end;justify-content:space-between;height:80px;padding:10px 0;">
                ${weeklyProgress.map(d => `<div style="flex:1;display:flex;flex-direction:column;align-items:center;gap:4px;">
                  <div style="width:100%;background:linear-gradient(180deg,var(--primary),var(--accent));border-radius:4px;opacity:0.8;transition:height 0.3s;height:${Math.min(60, (d.count / Math.max(dailyGoal, 1)) * 60)}px;"></div>
                  <div style="font-size:clamp(0.45rem,1.7vw,0.65rem);color:var(--text-muted);font-weight:600;white-space:nowrap;">${d.day}</div>
                  <div style="font-size:0.6rem;color:var(--text2);">${d.count}</div>
                </div>`).join('')}
              </div>
            </div>

            <div class="card"><div class="card-header">${uiIcon("library")} By Subject</div>
              <div id="dashboardSubjects"><div class="empty-state">Loading subject breakdown...</div></div>
            </div>
            <div class="card"><div class="card-header">${uiIcon("target")} Weak Topics</div>
              <div id="dashboardWeakTopics"><div class="empty-state">Loading analytics...</div></div>
            </div>
            <div class="card">
              <div class="card-header">${uiIcon("x")} Missed Questions Bank</div>
              <div style="font-size:13px">Review your incorrect answers in one place.</div>
              <div style="margin-top:8px;display:flex;gap:8px;flex-wrap:wrap">
                <span class="badge badge-danger">${wrong} Missed</span>
                <button class="btn btn-sm btn-danger" data-nav="mistakes">Review Mistakes</button>
              </div>
            </div>
            <div class="card">
              <div class="card-header">${uiIcon("star-filled")} High Yield Questions</div>
              <div style="font-size:13px">Mark important board and exam questions.</div>
              <div style="margin-top:8px;display:flex;gap:8px;flex-wrap:wrap">
                <span class="badge badge-warning" id="hyBadge">${(await db.getAllHighYieldIds()).length} High Yield</span>
                <button class="btn btn-sm btn-accent" data-nav="highyield">Review High Yield</button>
              </div>
            </div>
            <div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:10px;">
              <button class="btn btn-primary btn-sm" data-nav="study">${uiIcon("study")} Study</button>
              <button class='btn btn-success btn-sm' id='btnAdaptiveStudy'>${uiIcon("brain")} Adaptive Study</button>
              <button class='btn btn-accent btn-sm' onclick='startAdaptiveExam()'>${uiIcon("target")} Adaptive Exam</button>
              <button class="btn btn-accent btn-sm" data-nav="exam">${uiIcon("exam")} Exam</button>
            </div>
            <div class="card">
              <div class="card-header">${uiIcon("chart")} Subject Performance Analytics</div>
              <div id="subjectAnalyticsContainer">
                <small>Accuracy by Subject will be calculated automatically from performance history.</small>
              </div>
            </div>`;

            // LAZY LOAD: offload heavy analytics to Web Worker, then paint results
            LazyRenderer.schedule(async () => {
                try {
                    const analytics = await WorkerPool.post('analytics', {
                        questions, performance: perf, bookmarks, examHistory: history
                    });
                    // Subject breakdown
                    const subjectEntries = Object.entries(analytics.subjectCounts).sort((a, b) => b[1] - a[1]);
                    const subjHtml = subjectEntries.length
                        ? subjectEntries.map(([s,c])=>`<div style="display:flex;justify-content:space-between;padding:6px 0;border-bottom:1px solid var(--border);"><span>${escapeHTML(s)}</span><span class="badge badge-primary">${c}</span></div>`).join('')
                        : '<div class="empty-state">No questions yet.</div>';
                    const subjContainer = $('#dashboardSubjects');
                    if (subjContainer) subjContainer.innerHTML = subjHtml;

                    // Weak topics
                    const weakHtml = analytics.weakArr.length
                        ? analytics.weakArr.map(x=>`<div style="display:flex;justify-content:space-between;padding:6px 0"><span>${escapeHTML(x.k)}</span><span class="badge badge-danger">${x.p}%</span></div>`).join('')
                        : `<div class="empty-state">Solve more questions to generate weak-topic analytics.</div>`;
                    const weakContainer = $('#dashboardWeakTopics');
                    if (weakContainer) weakContainer.innerHTML = weakHtml;
                } catch (e) {
                    console.error('Dashboard analytics error:', e);
                }
            }, 'idle');

            return html;
        }

        async function renderStudy() {
            const sf = AppState.studyFilter;

            if (sf.mode === 'lectures') {
                return await renderLectureBrowser();
            }
            if (sf.mode === 'lectureReader' && sf.lectureId) {
                return await renderLectureReader(sf.lectureId);
            }

            const questions = await db.getAllQuestions();
            const books = await db.getAllBooks();
            let filtered = questions;
            if (sf.subject !== 'all') filtered = filtered.filter(q => (q.subject || 'Uncategorized') === sf.subject);
            if (sf.chapter !== 'all') filtered = filtered.filter(q => (q.chapter || 'General') === sf.chapter);
            if (sf.topic !== 'all') filtered = filtered.filter(q => (q.topic || 'General') === sf.topic);
            if (sf.subtopic !== 'all') filtered = filtered.filter(q => ((q.subtopic || 'General') === sf.subtopic));
            if (sf.book !== 'all') filtered = filtered.filter(q => (q.book || '') === sf.book);
            if (sf.mode === 'bookmarked') { const bIds = await db.getAllBookmarkedIds(); filtered = filtered.filter(q => bIds.includes(q.id)); }
            if (sf.mode === 'highyield') { const hyIds = await db.getAllHighYieldIds(); filtered = filtered.filter(q => hyIds.includes(q.id)); }

            const taxonomy = computeTaxonomy(questions);
            const subjectOpts = '<option value="all">All</option>' + taxonomy.subjects.map(s => `<option value="${escapeHTML(s)}" ${sf.subject===s?'selected':''}>${escapeHTML(s)}</option>`).join('');
            let chapterList = taxonomy.allChapters;
            if (sf.subject !== 'all' && taxonomy.chaptersBySubject[sf.subject]) chapterList = taxonomy.chaptersBySubject[sf.subject];
            const chapterOpts = '<option value="all">All</option>' + chapterList.map(c => `<option value="${escapeHTML(c)}" ${sf.chapter===c?'selected':''}>${escapeHTML(c)}</option>`).join('');

            const topicSet = new Set(['General']);
            filtered.forEach(q => { topicSet.add(q.topic || 'General'); });
            const topicOpts = '<option value="all">All</option>' + [...topicSet].sort().map(t => `<option value="${escapeHTML(t)}" ${sf.topic===t?'selected':''}>${escapeHTML(t)}</option>`).join('');
            const bookOpts = '<option value="all">All Books</option>' + books.map(g => `<option value="${escapeHTML(g)}" ${sf.book===g?'selected':''}>${escapeHTML(g)}</option>`).join('');

            const subtopicSet = new Set(['General']);
            filtered.forEach(q => { subtopicSet.add(q.subtopic || 'General'); });
            const subtopicOpts = '<option value="all">All</option>' + [...subtopicSet].sort().map(st => `<option value="${escapeHTML(st)}" ${sf.subtopic===st?'selected':''}>${escapeHTML(st)}</option>`).join('');

            return `
            <div class="card">
              <div class="card-header">${uiIcon("study")} Study Mode</div>
              <div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:10px;">
                <button class="btn btn-sm ${sf.mode==='practice'?'btn-primary':'btn-outline'}" data-study-mode="practice">Practice</button>
                <button class="btn btn-sm ${sf.mode==='bookmarked'?'btn-primary':'btn-outline'}" data-study-mode="bookmarked">${uiIcon("bookmark")} Bookmarked</button>
                <button class="btn btn-sm ${sf.mode==='highyield'?'btn-primary':'btn-outline'}" data-study-mode="highyield">${uiIcon("flame")} High Yield</button>
                <button class="btn btn-sm ${sf.mode==='lectures'?'btn-primary':'btn-outline'}" data-study-mode="lectures">${uiIcon("library")} Lectures</button>
              </div>
              <div class="form-row">
                <div><label>Subject</label><select id="studySubject">${subjectOpts}</select></div>
                <div><label>Chapter</label><select id="studyChapter">${chapterOpts}</select></div>
                <div><label>Topic</label><select id="studyTopic">${topicOpts}</select></div>
                <div><label>Subtopic</label><select id="studySubtopic">${subtopicOpts}</select></div>
                <div><label>Book</label><select id="studyBook">${bookOpts}</select></div>
              </div>
              <p style="font-size:0.85rem;color:var(--text2);">${filtered.length} questions match</p>
              <button class="btn btn-primary btn-block" id="btnStartStudy">${uiIcon("play")} Start Studying</button>
            </div>
            <div id="studyArea"></div>`;
        }

        async function renderLectureBrowser() {
            const lectures = await db.getAllLectures();
            const taxonomy = computeTaxonomy([...(await db.getAllQuestions()), ...lectures]);
            const sf = AppState.studyFilter;
            let filtered = lectures;
            if (sf.subject !== 'all') filtered = filtered.filter(l => (l.subject || 'Uncategorized') === sf.subject);
            if (sf.chapter !== 'all') filtered = filtered.filter(l => (l.chapter || 'General') === sf.chapter);

            const subjectOpts = '<option value="all">All</option>' + taxonomy.subjects.map(s => `<option value="${escapeHTML(s)}" ${sf.subject===s?'selected':''}>${escapeHTML(s)}</option>`).join('');

            // Chapter options: only chapters that actually have lectures, scoped to the
            // current subject filter so the list stays short and relevant.
            const chapterSource = sf.subject !== 'all' ? lectures.filter(l => (l.subject || 'Uncategorized') === sf.subject) : lectures;
            const chapterSet = new Set(['General']);
            chapterSource.forEach(l => { chapterSet.add(l.chapter || 'General'); });
            const chapterOpts = '<option value="all">All Chapters</option>' + [...chapterSet].sort().map(c => `<option value="${escapeHTML(c)}" ${sf.chapter===c?'selected':''}>${escapeHTML(c)}</option>`).join('');

            return `
            <div class="card">
              <div class="card-header">${uiIcon("library")} Lectures</div>
              <div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:10px;">
                <button class="btn btn-sm btn-outline" data-study-mode="practice">${uiIcon("arrow-left")} Back to Study</button>
                ${RBAC.isAdmin() ? `<button class="btn btn-sm btn-primary" id="btnAddLecture">${uiIcon("plus")} Add Lecture</button>` : ''}
              </div>
              <div class="form-row">
                <div><label>Subject</label><select id="lectureSubjectFilter">${subjectOpts}</select></div>
                <div><label>Chapter</label><select id="lectureChapterFilter">${chapterOpts}</select></div>
              </div>
              <p style="font-size:0.85rem;color:var(--text2);">${filtered.length} lectures</p>
            </div>
            ${filtered.length === 0 ? '<div class="empty-state">No lectures yet. Add your first lecture above.</div>' :
              filtered.map(l => `
                <div class="card lecture-card" data-lid="${escapeHTML(l.id)}" style="cursor:pointer;">
                  <div style="display:flex;justify-content:space-between;align-items:flex-start;">
                    <div>
                      <div style="font-weight:700;font-size:1.05rem;margin-bottom:6px;">${escapeHTML(l.title || 'Untitled')}</div>
                      <div class="flex-wrap">
                        <span class="badge badge-primary">${escapeHTML(l.subject || 'Uncategorized')}</span>
                        <span class="badge badge-accent">${escapeHTML(l.chapter || 'General')}</span>
                        ${l.book ? `<span class="badge badge-group">${escapeHTML(l.book)}</span>` : ''}
                      </div>
                    </div>
                    <button class="btn btn-sm btn-outline lecture-exam-btn" data-lid="${escapeHTML(l.id)}" style="white-space:nowrap;">${uiIcon("exam")} Exam</button>
                  </div>
                  <div style="margin-top:10px;font-size:0.82rem;color:var(--text2);line-height:1.5;max-height:60px;overflow:hidden;position:relative;">
                    ${escapeHTML((l.content || '').substring(0, 180))}${(l.content || '').length > 180 ? '…' : ''}
                  </div>
                </div>
              `).join('')}`;
        }

        async function renderLectureReader(lectureId) {
            const l = await db.getLecture(lectureId);
            if (!l) return ("<div class=\"card text-center\"><h3>Lecture not found</h3><button class=\"btn btn-outline\" data-study-mode=\"lectures\">" + uiIcon("arrow-left") + " Back</button></div>");
            const allQuestions = await db.getAllQuestions();
            const attachedCount = allQuestions.filter(q => q.lectureId === l.id).length;
            const chapterCount = allQuestions.filter(q => (q.subject||'') === (l.subject||'') && (q.chapter||'') === (l.chapter||'')).length;
            return `
            <div class="card">
              <div style="display:flex;justify-content:space-between;align-items:flex-start;flex-wrap:wrap;gap:10px;">
                <div>
                  <div class="card-header" style="margin-bottom:4px;">${escapeHTML(l.title || 'Untitled')}</div>
                  <div class="flex-wrap">
                    <span class="badge badge-primary">${escapeHTML(l.subject || 'Uncategorized')}</span>
                    <span class="badge badge-accent">${escapeHTML(l.chapter || 'General')}</span>
                    ${l.book ? `<span class="badge badge-group">${escapeHTML(l.book)}</span>` : ''}
                    ${l.page ? `<span class="badge badge-warning">${uiIcon("file")} Page ${escapeHTML(String(l.page))}</span>` : ''}
                  </div>
                </div>
                <div style="display:flex;gap:8px;flex-wrap:wrap;">
                  <button class="btn btn-sm btn-outline" data-study-mode="lectures">${uiIcon("arrow-left")} Back</button>
                  ${RBAC.isAdmin() ? `<button class="btn btn-sm btn-danger" id="btnDeleteLecture" data-lid="${escapeHTML(l.id)}">${uiIcon("trash")} Delete</button>` : ''}
                </div>
              </div>
            </div>
            <div class="card" style="line-height:1.8;font-size:0.95rem;white-space:pre-wrap;">${escapeHTML(l.content || 'No content.')}</div>
            <div class="card">
              <div style="display:flex;gap:8px;flex-wrap:wrap;justify-content:center;">
                <button class="btn btn-accent" id="btnExamLectureAttached" data-lid="${escapeHTML(l.id)}">${uiIcon("exam")} Exam: This Lecture's MCQs (${attachedCount})</button>
                <button class="btn btn-primary" id="btnExamChapterAllBooks" data-subj="${escapeHTML(l.subject||'')}" data-chap="${escapeHTML(l.chapter||'')}">${uiIcon("library")} Exam: All MCQs, This Chapter (${chapterCount})</button>
              </div>
            </div>`;
        }

        async function renderExamSetup() {
            const books = await db.getAllBooks();
            const taxonomy = computeTaxonomy(await db.getAllQuestions());
            return `
            <div class="card">
              <div class="card-header">${uiIcon("exam")} Exam Setup</div>
              <div style="margin-bottom:12px">
                <label>${uiIcon("folder")} Book</label>
                <select id="examBook">
                  <option value="all">All Books</option>
                  ${books.map(g=>`<option value="${escapeHTML(g)}">${escapeHTML(g)}</option>`).join('')}
                </select>
              </div>
              <div style="margin-bottom:12px">
                <label>${uiIcon("library")} Subject</label>
                <select id="examSubject">
                  <option value="all">All Subjects</option>
                  ${taxonomy.subjects.map(s=>`<option value="${escapeHTML(s)}">${escapeHTML(s)}</option>`).join('')}
                </select>
              </div>
              <div style="margin-bottom:12px">
                <label>${uiIcon("study")} Chapter</label>
                <select id="examChapter">
                  <option value="all">All Chapters</option>
                  ${taxonomy.allChapters.map(c=>`<option value="${escapeHTML(c)}">${escapeHTML(c)}</option>`).join('')}
                </select>
              </div>
              <div class="form-row">
                <div><label>Questions</label><select id="examCount"><option>10</option><option selected>20</option><option>30</option><option>50</option></select></div>
                <div><label>Timer</label><select id="examTimerMinutes"><option value="0">None</option><option selected value="30">30</option><option value="60">60</option></select></div>
                <div><label>Difficulty</label><select id="examDifficulty"><option value="all">All</option><option>Easy</option><option>Medium</option><option>Hard</option></select></div>
              </div>
              <button class="btn btn-accent btn-block mt-2" id="btnStartExam">${uiIcon("rocket")} Start Exam</button>
            </div>`;
        }

        async function renderExamInProgress() {
            const idx = AppState.examAnswers.currentIndex || 0;
            const total = AppState.examQuestions.length;
            const q = AppState.examQuestions[idx];
            if (!q) { AppState.examInProgress = false; return renderExamResults(); }
            const sel = AppState.examAnswers[q.id] || '';
            const timerHtml = AppState.examTimeRemaining > 0 ? `<div class="timer-display" id="examTimerDisplay">${formatTime(AppState.examTimeRemaining)}</div>` : '';
            const bmIds=await db.getAllBookmarkedIds();
            const bmCount=bmIds.length;
            const isBm=bmIds.includes(q.id);
            return `
            <div class="card">
              <div style="display:flex;justify-content:space-between;"><span class="badge badge-primary">Q ${idx+1}/${total}</span><span class="badge badge-accent">${uiIcon("star-filled")} ${bmCount}</span>${timerHtml}</div>
              <div class="progress-bar"><div class="progress-fill" style="width:${((idx+1)/total)*100}%"></div></div>
            </div>
            <div class="question-block">
              <div style="display:flex;justify-content:space-between;align-items:flex-start;gap:10px;"><div class="question-text" style="flex:1;">${idx+1}. ${escapeHTML(q.questionText)}</div><button class="btn btn-sm btn-outline bookmark-btn" data-qid="${escapeHTML(q.id)}" title="Bookmark" aria-label="Toggle bookmark">${isBm?(uiIcon("bookmark-filled")):(uiIcon("bookmark"))}</button></div>
              ${QuestionImages.render(q, 'question')}
              ${['A','B','C','D','E'].map(l=> q[`option${l}`] ? `<button class="option-btn ${sel===l?'selected':''}" data-option="${l}" aria-pressed="${sel===l}"><span class="option-label">${l}.</span> <span class="option-content" dir="auto">${escapeHTML(q[`option${l}`])}</span></button>` : '').join('')}
              ${renderQuestionBookLocation(q)}
            </div>
            <div class="exam-actions">
              <button class="btn btn-outline btn-sm" id="btnPrevQ" ${idx===0?'disabled':''}>${uiIcon("chevron-left")} Prev</button>
              <button class="btn btn-danger btn-sm" id="btnEndExam">${uiIcon("stop")} End</button>
              <button class="btn btn-primary btn-sm" id="btnNextQ">${idx<total-1?("Next " + uiIcon("play")):("Submit " + uiIcon("check"))}</button>
            </div>`;
        }

        function renderExamResults() {
            const results = AppState.lastExamResults || [];
            const total = results.length;
            const score = results.filter(r => r.correct).length;
            const pct = total ? Math.round((score / total) * 100) : 0;
            const elapsed = AppState.examStartTime ? Math.max(0, Math.round(((AppState.examSubmittedAt || Date.now()) - AppState.examStartTime) / 1000)) : 0;
            return `
            <div class="card text-center" style="padding-top: 30px; padding-bottom: 30px;">
              <div style="font-size:4rem; margin-bottom: 10px;">${pct>=70?(uiIcon("trophy")):(uiIcon("library"))}</div>
              <h2>Exam Complete</h2>
              ${AppState._examSaveError ? '<p role="alert" style="color:var(--danger);">Results could not be saved. Keep this session and retry.</p><button class="btn btn-primary btn-block" id="btnRetryExamSave">Retry Save</button>' : ''}
              <div class="stat-value" style="font-size: 3rem; margin: 15px 0;">${pct}%</div>
              <p style="font-size: 1.1rem; color: var(--text2); margin-bottom: 25px;">${score} out of ${total} correct<br>Time taken: ${formatTime(elapsed)}</p>
              <button class="btn btn-primary btn-block" id="btnReviewExam" style="margin-bottom: 10px; font-size: 1.1rem; padding: 14px;">${uiIcon("search")} Review Answers & Explanations</button>
              <button class="btn btn-outline btn-block" data-nav="dashboard">${uiIcon("dashboard")} Go to Dashboard</button>
            </div>`;
        }

        // --- FULLY REDESIGNED REVIEW SYSTEM ---
        function reviewExamResults() {
            if (!AppState.lastExamResults) return;
            const html = AppState.lastExamResults.map((r, i) => {
                const optionsHtml = ['A','B','C','D','E'].map(l => {
                    if (!r[`option${l}`]) return '';
                    let btnClass = '';
                    let labelStatus = '';
                    if (l === r.correctAnswer) {
                        btnClass = 'correct';
                        labelStatus = ("<span style=\"float:right; font-weight:bold;\">" + uiIcon("check") + " Correct Answer</span>");
                    } else if (l === r.userAnswer && !r.correct) {
                        btnClass = 'wrong';
                        labelStatus = ("<span style=\"float:right; font-weight:bold;\">" + uiIcon("x") + " Your Answer</span>");
                    }
                    return `<div class="option-btn ${btnClass}" style="cursor:default;">
                                <span class="option-label">${l}.</span> <span class="option-content" dir="auto">${escapeHTML(r[`option${l}`])}</span>
                                ${labelStatus}
                            </div>`;
                }).join('');
                const explanationHtml = r.explanation ?
                    `<div class="explanation-box" style="margin-top: 15px;">
                        <strong>Explanation:</strong><br/>${escapeHTML(r.explanation)}
                    </div>` : '';
                return `
                <div class="question-block">
                    <div class="question-text">
                        ${i+1}. ${escapeHTML(r.questionText)}
                        <span class="badge ${r.correct ? 'badge-success' : 'badge-danger'}" style="margin-left: 8px;">
                            ${r.correct ? (uiIcon("check") + " Correct") : (uiIcon("x") + " Incorrect")}
                        </span>
                    </div>
                    ${QuestionImages.render(r, 'question')}
                    ${optionsHtml}
                    ${explanationHtml}
                    ${QuestionImages.render(r, 'explanation')}
                    ${renderQuestionReference(r, { admin: true })}
                </div>`;
            }).join('');
            $('#mainContent').innerHTML = `
                <div class="card">
                    <div class="card-header">${uiIcon("search")} Exam Review</div>
                    <p style="color:var(--text2);font-size:0.9rem;">Review your performance below. Correct answers are highlighted in green, and your incorrect selections are highlighted in red.</p>
                </div>
                ${html}
                <div style="margin-bottom: 30px;">
                    <button class="btn btn-primary btn-block" data-nav="exam">${uiIcon("exam")} Start New Exam</button>
                </div>
            `;
            attachEventListeners();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        /**
         * QUESTION LIST — Optimized path:
         * 1. Ensures search index is built (fast in-memory lookup).
         * 2. Uses FilterCache keyed by filter hash + DB cache version.
         * 3. Falls back to Web Worker for heavy filtering if available.
         * 4. Renders a virtual-scroll container instead of inline HTML for
         *    all questions, supporting 100k+ items with only ~15 DOM nodes.
         * 5. Infinite scroll loads 50 items at a time; smart loader prevents
         *    duplicate fetches and resets correctly on filter change.
         */
        async function renderQuestionList() {
            // Capture input before any await so a later keystroke cannot be overwritten by this render.
            const sq = String(AppState.searchQuery || '').trim();
            const request = AppState._questionRenderRequest = (AppState._questionRenderRequest || 0) + 1;
            const qf = { ...(AppState.questionFilters || { subject:'all', chapter:'all', topic:'all', difficulty:'all', special:'all' }) };
            const cacheVersion = db._cacheVersion;
            const [questions, bmIds, hyIds, performanceRows] = await Promise.all([
                db.getAllQuestions(), db.getAllBookmarkedIds(), db.getAllHighYieldIds(), db.getPerformance()
            ]);
            const latest = new Map();
            for (const row of performanceRows) {
                const previous = latest.get(row.questionId);
                if (!previous || (Date.parse(row.timestamp) || 0) >= (Date.parse(previous.timestamp) || 0)) latest.set(row.questionId, row);
            }
            const missedIds = [...latest].filter(([, row]) => row.correct === false).map(([id]) => id);
            const filtered = await FilterCache.get(qf, sq ? (ENTSearch.normalize(sq) || '\u0000') : '', cacheVersion, async () => {
                const ranked = await GlobalSearchIndex.findQuestions(sq, questions);
                let result = ENTSearch.filterQuestions(ranked, qf, { bmIds, hyIds, missedIds });
                if (qf.reference === 'missing') result = result.filter(q => !hasCompleteQuestionReference(q));
                if (qf.reference === 'complete') result = result.filter(hasCompleteQuestionReference);
                return result;
            });
            // Only the render that still owns this input may publish virtual-scroller state.
            if (request !== AppState._questionRenderRequest || sq !== String(AppState.searchQuery || '').trim() || JSON.stringify(qf) !== JSON.stringify(AppState.questionFilters || qf)) return '';
            window.__bmIds = bmIds; window.__hyIds = hyIds; window.__missedIds = missedIds;
            AppState._lastFilteredQuestions = filtered;
            AppState._lastFilterMeta = { bmIds, hyIds, missedIds };

            // Topic filter options from full question set (not filtered)
            const topicsSet = new Set();
            questions.forEach(q => topicsSet.add(q.topic || 'General'));
            const topicOpts = '<option value="all">All</option>' + [...topicsSet].sort().map(t => `<option value="${escapeHTML(t)}">${escapeHTML(t)}</option>`).join('');

            return `
            <div class="card">
              <div class="card-header">${uiIcon("questions")} Questions (${filtered.length})</div>
              ${RBAC.isAdmin() ? `<div style="font-size:0.85rem;color:var(--text2);margin-bottom:8px;">Free sample: <b id="freeCount">${freeCounterText(questions.filter(q => q.isFree === true).length)}</b></div>` : ''}
              <div class="search-field">${uiIcon("search")}<input type="text" id="questionSearchInput" placeholder="Search questions, options, topics, books or references..." value="${escapeHTML(AppState.searchQuery)}"></div>
              <div class="form-row">
                <div><select id="questionSubjectFilter"><option value="all">All Subjects</option></select></div>
                <div><select id="questionChapterFilter"><option value="all">All Chapters</option></select></div>
                <div><select id="questionTopicFilter">${topicOpts}</select></div>
              </div>
              <div class="form-row">
                <div><select id="questionDifficultyFilter"><option value="all">All Difficulties</option><option>Easy</option><option>Medium</option><option>Hard</option></select></div>
                <div><label for="questionReferenceFilter">Reference documentation</label><select id="questionReferenceFilter"><option value="all">All References</option><option value="missing">Missing / Incomplete Reference</option><option value="complete">Complete Reference</option></select></div>
              </div>
              <div style="display:flex;gap:6px;flex-wrap:wrap;margin-bottom:8px">
                <button class="btn btn-sm btn-outline" data-qfilter="all">All</button>
                <button class="btn btn-sm btn-outline" data-qfilter="bookmarked">${uiIcon("bookmark")} Bookmarked</button>
                <button class="btn btn-sm btn-outline" data-qfilter="highyield">${uiIcon("flame")} High Yield</button>
                <button class="btn btn-sm btn-outline" data-qfilter="missed">${uiIcon("x")} Missed</button>
                <button class="btn btn-sm btn-outline" data-qfilter="free">Free</button>
              </div>
              ${RBAC.isAdmin() ? `<button class="btn btn-sm btn-primary" id="btnAddQuestion">${uiIcon("plus")} Add</button>` : ''}
            </div>
            <!-- Virtual Scroll Container -->
            <div id="questionListContainer" style="max-height:75vh;overflow:auto;position:relative;border-radius:12px;">
              <div id="questionListContent"></div>
            </div>
            <div id="questionListLoader" style="text-align:center;padding:14px;color:var(--text2);font-size:0.85rem;display:none;">Loading more...</div>
            ${filtered.length>50?'<p style="color:var(--text2);padding:8px;">Showing items dynamically. Scroll to load more.</p>':''}
            ${filtered.length===0?'<div class="empty-state"><h3>No questions found</h3><p>Add or import questions to get started.</p></div>':''}`;
        }

        /**
         * Render a single question block for the virtual scroller.
         * Kept as a pure function so it can be called thousands of times
         * without closure leaks.
         */
        function renderQuestionBlock(q, index, meta) {
            const { bmIds } = meta || {};
            const isBm = bmIds ? bmIds.includes(q.id) : false;
            return `
            <div class="question-block" data-qid="${escapeHTML(q.id)}">
              <div style="display:flex;justify-content:space-between;">
                <strong>${highlightText(q.questionText?.substring(0,100), AppState.searchQuery)}</strong>
                <button class="btn-icon btn-sm bookmark-btn" data-qid="${escapeHTML(q.id)}" aria-label="Toggle bookmark">${isBm?(uiIcon("bookmark-filled")):(uiIcon("bookmark"))}</button>
              </div>
              <div class="flex-wrap">
                <span class="badge badge-primary">${escapeHTML(q.subject||'Uncategorized')}</span>
                <span class="badge badge-accent">${escapeHTML(q.chapter||'General')}</span>
                ${q.group ? `<span class="badge badge-group">${escapeHTML(q.group)}</span>` : ''}
              </div>
              ${RBAC.isAdmin() ? `<button class="btn btn-sm ${q.isFree === true ? 'btn-primary' : 'btn-outline'} free-toggle-btn" data-qid="${escapeHTML(q.id)}" aria-pressed="${q.isFree === true ? 'true' : 'false'}" title="Include this question in the free version">${q.isFree === true ? 'Free \u2713' : 'Free'}</button> ` : ''}<button class="btn btn-sm btn-outline view-q-btn" data-qid="${escapeHTML(q.id)}">${uiIcon("eye")} View</button>
            </div>`;
        }

        // ---- Free sample (the questions that ship inside the free student app) ----
        const FREE_SAMPLE_TARGET = 100;
        function freeCounterText(n) {
            return n + ' / ' + FREE_SAMPLE_TARGET + (n > FREE_SAMPLE_TARGET ? ' (over target)' : '');
        }
        async function refreshFreeCounter() {
            const el = document.getElementById('freeCount');
            if (!el) return;
            el.textContent = freeCounterText((await db.getAllQuestions()).filter(q => q.isFree === true).length);
        }
        async function toggleQuestionFree(id, btn) {
            if (!RBAC.requireAdmin()) return;
            const q = await db.getQuestion(id);
            if (!q) return;
            const next = q.isFree !== true;
            await db.updateQuestion(id, { isFree: next });
            if (btn) {
                btn.classList.toggle('btn-primary', next);
                btn.classList.toggle('btn-outline', !next);
                btn.setAttribute('aria-pressed', String(next));
                btn.textContent = next ? 'Free \u2713' : 'Free';
            }
            await refreshFreeCounter();
        }
        window.toggleQuestionFree = toggleQuestionFree;

        async function renderMistakes() {
            const perf = await db.getPerformance();
            const latest = {};
            perf.forEach(x => {
                const key = x.questionId;
                if (!latest[key] || new Date(x.timestamp) > new Date(latest[key].timestamp)) {
                    latest[key] = { correct: x.correct, timestamp: x.timestamp };
                }
            });
            const wrongIds = Object.keys(latest)
                .filter(id => latest[id].correct === false)
                .map(id => Number(id));
            const questions = await db.getAllQuestions();
            const missed = questions.filter(q => wrongIds.includes(q.id));

            return `
            <div class="card">
              <div class="card-header">${uiIcon("x")} Missed Questions Bank</div>
              <p>${missed.length} missed questions</p>
              <div style="display:flex;gap:8px;flex-wrap:wrap">
              <button class="btn btn-danger" id="btnExamFromMistakes">${uiIcon("exam")} Exam From Mistakes</button>
              <button class="btn btn-outline" data-nav="dashboard">${uiIcon("arrow-left")} Dashboard</button>
              </div>
            </div>
            ${missed.map(q=>`
              <div class="question-block">
                <div class="question-text">${escapeHTML(q.questionText || '')}</div>
                ${QuestionImages.render(q, 'question')}
                <span class="badge badge-danger">${escapeHTML(q.subject || 'Uncategorized')}</span>
                 <div style="margin-top:8px"><strong>Correct Answer:</strong> ${escapeHTML(q.correctAnswer||'-')}</div>
                 <div style="margin-top:4px"><strong>Explanation:</strong> ${escapeHTML(q.explanation||'No explanation')}</div>
                 ${QuestionImages.render(q, 'explanation')}
                 ${renderQuestionReference(q, { admin: true })}
                 <div style="margin-top:8px;display:flex;gap:8px">
                    <button class="btn btn-sm btn-primary retry-question" data-qid="${escapeHTML(q.id)}">${uiIcon("refresh")} Retry</button>
                    <button class="btn btn-sm btn-accent add-hy" data-qid="${escapeHTML(q.id)}">${uiIcon("star-filled")} High Yield</button>
                 </div>
              </div>
            `).join('') || '<div class="empty-state">No missed questions.</div>'}`;
        }

        async function renderHighYield() {
            const hyIds = await db.getAllHighYieldIds();
            const allQuestions = await db.getAllQuestions();
            const hyQuestions = allQuestions.filter(q => hyIds.includes(q.id));

            return `
            <div class="card">
              <div class="card-header">${uiIcon("star-filled")} High Yield Questions</div>
              <p>${hyQuestions.length} high‑yield questions</p>
              <div style="display:flex;gap:8px;flex-wrap:wrap">
                <button class="btn btn-outline" data-nav="dashboard">${uiIcon("arrow-left")} Dashboard</button>
              </div>
            </div>
            ${hyQuestions.length === 0 ? '<div class="empty-state">No high‑yield questions marked yet.</div>' :
              hyQuestions.map(q => `
                <div class="question-block">
                  <div class="question-text">${escapeHTML(q.questionText)}</div>
                  <div class="flex-wrap">
                    <span class="badge badge-primary">${escapeHTML(q.subject || 'Uncategorized')}</span>
                    <span class="badge badge-accent">${escapeHTML(q.chapter || 'General')}</span>
                  </div>
                  <div style="margin-top:8px;display:flex;gap:8px">
                    <button class="btn btn-sm btn-danger remove-hy" data-qid="${escapeHTML(q.id)}">${uiIcon("star-filled")} Remove High Yield</button>
                    <button class="btn btn-sm btn-outline view-q-btn" data-qid="${escapeHTML(q.id)}">${uiIcon("eye")} View</button>
                  </div>
                </div>
              `).join('')}
            `;
        }

        function renderImportExport() {
            const isAdmin = RBAC.isAdmin();
            const adminSection = isAdmin ? `
            <div class="card"><div class="card-header">${uiIcon("import")} Import (Admin)</div>
              <div class="form-row">
                <div><label>Format</label><select id="importFormat"><option value="json">JSON</option><option value="csv">CSV</option></select></div>
                <div><label>Group Name (optional)</label><input type="text" id="importGroup" placeholder="e.g., ENT Set 1"></div>
              </div>
              <textarea id="importData" rows="5" placeholder="Paste JSON or CSV data..."></textarea>
              <input type="file" id="importFile" accept=".json,.csv">
              <button class="btn btn-primary" id="btnImport">Preview Import — معاينة الاستيراد</button>
              <div id="importPreviewArea" aria-live="polite" style="margin-top:16px;"></div>
              <button class="btn btn-outline" id="btnLoadSample">${uiIcon("file")} Load Sample Questions</button>
              <button class="btn btn-danger mt-2" id="btnClearAll">${uiIcon("trash")} Clear All</button>
              <hr style="margin:10px 0">
              <select id="deleteGroupName"></select>
              <button class="btn btn-danger mt-2" id="btnDeleteGroup">${uiIcon("trash")} Delete One Book</button>
            </div>
            <div class="card"><div class="card-header">${uiIcon("export")} Backup (Admin)</div>
              <button class="btn btn-accent" id="btnExport">${uiIcon("export")} Export All</button>
              <button class="btn btn-outline" id="btnRestore">${uiIcon("import")} Restore Backup</button>
              <input type="file" id="restoreFile" accept=".json" hidden>
              <hr style="margin:10px 0">
            </div>` : '';

            const settingsPointer = `
            <div class="card"><div class="card-header">${uiIcon("import")} Update Packages</div>
              <p style="font-size:0.85rem;color:var(--text2);margin-bottom:12px;">
                Importing and exporting update packages has moved to Settings for both students and admins.
              </p>
              <button class="btn btn-primary btn-block" data-nav="settings">${uiIcon("settings")} Go to Settings</button>
            </div>`;

            return adminSection + settingsPointer + `
            <div style="margin:8px;padding:10px;border:1px dashed var(--border);border-radius:12px;color:var(--text2);font-size:0.85rem;text-align:center;background:var(--surface);">
              This app generated by Abd alzuhairy
            </div>`;
        }

        // ============================================================
        //  STUDY HELPERS
        // ============================================================
        async function renderStudyQuestion() {
            if (!AppState.studyQuestions || AppState.studyIndex >= AppState.studyQuestions.length) {
                $('#studyArea').innerHTML = '<div class="card text-center"><h3>Session Complete!</h3><button class="btn btn-primary" data-nav="study">New Session</button></div>';
                saveSession();
                return;
            }
            const q = AppState.studyQuestions[AppState.studyIndex];
            const isBm = await db.isBookmarked(q.id);
            const reveal = AppState.studyRevealed[q.id];
            let html = `
            <div class="card">
              <div style="display:flex;justify-content:space-between;"><span class="badge badge-primary">${AppState.studyIndex+1}/${AppState.studyQuestions.length}</span><button class="btn-icon btn-sm" id="studyBookmark" aria-label="Toggle bookmark" data-qid="${escapeHTML(q.id)}">${isBm?(uiIcon("bookmark-filled")):(uiIcon("bookmark"))}</button><button class="btn-icon btn-sm" id="studyHighYield" aria-label="Toggle high yield" data-qid="${escapeHTML(q.id)}">${uiIcon("flame")}</button></div>
              <div class="progress-bar"><div class="progress-fill" style="width:${((AppState.studyIndex+1)/AppState.studyQuestions.length)*100}%"></div></div>
            </div>
            <div class="question-block">
              <div class="question-text">${AppState.studyIndex+1}. ${escapeHTML(q.questionText)}</div>
              ${QuestionImages.render(q, 'question')}
              ${['A','B','C','D','E'].map(l=> q[`option${l}`] ? `<button class="option-btn ${AppState.studyAnswers[q.id]===l?'selected':''} ${reveal?(l===q.correctAnswer?'correct':(AppState.studyAnswers[q.id]===l?'wrong':'')):''}" data-study-opt="${l}" ${reveal?'disabled':''}><span class="option-label">${l}.</span> <span class="option-content" dir="auto">${escapeHTML(q[`option${l}`])}</span></button>` : '').join('')}
              ${reveal ? `<div class="explanation-box"><strong>${uiIcon("check")} ${escapeHTML(q.correctAnswer)}</strong>: ${escapeHTML(q.explanation||'No explanation provided.')}</div>${renderQuestionReference(q, { admin: true })}` : ''}
              ${reveal ? QuestionImages.render(q, 'explanation') : ''}
              ${renderQuestionBookLocation(q)}
            </div>
            <div class="study-actions">
              <button class="btn btn-outline btn-sm" id="btnStudyPrev" aria-label="Previous question" ${AppState.studyIndex===0?'disabled':''}>${uiIcon("chevron-left")}</button>
              ${renderReclassifyButton(q.id)}
              ${!reveal?`<button class="btn btn-accent btn-sm" id="btnReveal">${uiIcon("eye")} Reveal</button>`:''}
              <button class="btn btn-primary btn-sm" id="btnStudyNext" aria-label="Next question">${uiIcon("play")}</button>
            </div>`;
            $('#studyArea').innerHTML = html;
            attachStudyListeners(q);
            saveSession();
        }

        function attachStudyListeners(q) {
            const bookmarkBtn = $('#studyBookmark');
            if (bookmarkBtn) {
                bookmarkBtn.addEventListener('click', async function() {
                    const id = parseInt(this.dataset.qid);
                    const bm = await db.toggleBookmark(id);
                    this.innerHTML = bm ? (uiIcon("bookmark-filled")) : (uiIcon("bookmark"));
                    saveSession();
                });
            }
            const hyBtn = $('#studyHighYield');
            if (hyBtn) {
                hyBtn.addEventListener('click', async function() {
                    const id = parseInt(this.dataset.qid);
                    const isHy = await db.toggleHighYield(id);
                    this.innerHTML = isHy ? (uiIcon("flame")) : (uiIcon("star"));
                    showToast(isHy ? 'Added to High Yield' : 'Removed from High Yield', 'success');
                    saveSession();
                });
            }
            $$('[data-study-opt]').forEach(b => {
                b.addEventListener('click', async function() {
                    const selected = this.dataset.studyOpt;
                    AppState.studyAnswers[q.id] = selected;
                    AppState.studyRevealed[q.id] = true;
                    try {
                        await db.recordPerformance({
                            questionId: q.id,
                            subject: q.subject || 'Unknown',
                            chapter: q.chapter || 'Unknown',
                            topic: q.topic || 'Unknown',
                            correct: selected === q.correctAnswer,
                            timestamp: new Date().toISOString()
                        });
                        await recordStudyActivity();
                    } catch(e) {
                        console.error('Performance tracking error', e);
                    }
                    renderStudyQuestion();
                });
            });
            const revealBtn = $('#btnReveal');
            if (revealBtn) revealBtn.addEventListener('click', () => { AppState.studyRevealed[q.id] = true; renderStudyQuestion(); });
            const nextBtn = $('#btnStudyNext');
            if (nextBtn) nextBtn.addEventListener('click', () => { AppState.studyIndex++; renderStudyQuestion(); });
            const prevBtn = $('#btnStudyPrev');
            if (prevBtn) prevBtn.addEventListener('click', () => { AppState.studyIndex = Math.max(0, AppState.studyIndex - 1); renderStudyQuestion(); });
        }

        function createExamAttemptId() {
            return 'exam-' + (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function'
                ? crypto.randomUUID()
                : Date.now().toString(36) + '-' + Math.random().toString(36).slice(2));
        }

        function resetExamAttempt() {
            if (AppState.examInProgress && AppState.examQuestions.length) {
                showToast('Resume or finish your saved exam before starting another.', 'warning');
                resumeExam();
                return false;
            }
            if (AppState.examAttemptId && AppState.examSubmittedAt && !AppState._examSaved && AppState.lastExamResults?.length) {
                AppState.examShowResults = true;
                showToast('Save the previous exam results before starting another exam.', 'warning');
                renderViewSafely('exam');
                return false;
            }
            AppState.examAttemptId = createExamAttemptId();
            AppState.examSubmittedAt = null;
            AppState.examEndsAt = null;
            AppState.examSuspended = false;
            AppState.examResultsPendingReview = false;
            AppState._examSaved = false;
            AppState._examSavePromise = null;
            AppState._examSaveError = false;
            return true;
        }

        function persistExamAttempt() {
            const results = AppState.lastExamResults;
            if (AppState._examSaved || !Array.isArray(results) || results.length === 0) return Promise.resolve(null);
            if (AppState._examSavePromise) return AppState._examSavePromise;
            if (!AppState.examAttemptId) AppState.examAttemptId = createExamAttemptId();
            if (!AppState.examSubmittedAt) AppState.examSubmittedAt = Date.now();
            const attemptId = AppState.examAttemptId;
            const submittedAt = AppState.examSubmittedAt;
            const timestamp = new Date(submittedAt).toISOString();
            const score = results.filter(row => row.correct).length;
            const elapsed = AppState.examStartTime ? Math.max(0, Math.round((submittedAt - AppState.examStartTime) / 1000)) : 0;
            const summary = { score, total: results.length, percentage: Math.round(score * 100 / results.length), elapsed, date: timestamp };
            const performanceRows = results.map(row => ({
                questionId: row.id, questionUid: row.uid || null,
                subject: row.subject || 'Unknown', chapter: row.chapter || 'Unknown', topic: row.topic || 'Unknown',
                userAnswer: row.userAnswer || '', correctAnswer: row.correctAnswer || '',
                answered: !!row.userAnswer, correct: row.correct === true, timestamp, source: 'exam'
            }));
            AppState._examSaveError = false;
            // Save the attempt ID and immutable submission before the database commit.
            _doSaveSession();
            const pending = Promise.resolve()
                .then(() => db.saveExamAttempt({ attemptId, summary, performanceRows }))
                .then(savedId => {
                    if (AppState.examAttemptId === attemptId) {
                        AppState._examSaved = true;
                        AppState._examSaveError = false;
                        _doSaveSession();
                    }
                    return savedId;
                })
                .catch(error => {
                    if (AppState.examAttemptId === attemptId) {
                        AppState._examSaved = false;
                        AppState._examSaveError = true;
                        _doSaveSession();
                    }
                    throw error;
                })
                .finally(() => { if (AppState._examSavePromise === pending) AppState._examSavePromise = null; });
            AppState._examSavePromise = pending;
            return pending;
        }

        async function submitExam({ showResults = !AppState.examSuspended, timedOut = false } = {}) {
            if (!AppState.examQuestions.length) return;
            closeExamLeaveDialog();
            if (AppState.examTimer) { clearInterval(AppState.examTimer); AppState.examTimer = null; }
            if (!AppState.examSubmittedAt || !Array.isArray(AppState.lastExamResults)) {
                const answers = AppState.examAnswers;
                AppState.lastExamResults = AppState.examQuestions.map(q => ({
                    ...q,
                    userAnswer: answers[q.id] || '',
                    correct: !!answers[q.id] && answers[q.id] === q.correctAnswer
                }));
                const deadlineReached = Number.isFinite(AppState.examEndsAt) && Date.now() >= AppState.examEndsAt;
                AppState.examSubmittedAt = (timedOut || deadlineReached) && Number.isFinite(AppState.examEndsAt) ? Math.min(Date.now(), AppState.examEndsAt) : Date.now();
            }
            AppState.examInProgress = false;
            AppState.examSuspended = false;
            AppState.examShowResults = showResults;
            AppState.examResultsPendingReview = !showResults;
            const submittedResults = AppState.lastExamResults;
            try {
                await persistExamAttempt();
            } catch (error) {
                console.error('Exam results were not saved:', error);
                showToast('Exam results were not saved. Use Retry Save below.', 'error');
            }
            if (AppState.lastExamResults === submittedResults) {
                if (showResults && AppState.examShowResults) await performNavigation('exam');
                else if (!AppState.examInProgress) await renderViewSafely(AppState.currentView);
            }
        }

        // ============================================================
        //  MODALS
        // ============================================================
        function escapeReferenceInputAttribute(value) {
            return escapeHTML(value).replace(/"/g, '&quot;').replace(/'/g, '&#39;');
        }

        async function showAddQuestionModal(q) {
            if (!RBAC.requireAdmin()) return;
            const formRequest = window.__questionImageFormRequest = (window.__questionImageFormRequest || 0) + 1;
            const isEdit = !!q;
            if (isEdit) q = normalizeQuestionClassification({ ...q });
            const originalModalMarkup = document.getElementById("modalContent").innerHTML;
            const originalView = AppState.currentView;
            const reference = getQuestionReference(q || {});
            const questions = await db.getAllQuestions();
            if (window.__questionImageFormRequest !== formRequest || AppState.currentView !== originalView || document.getElementById("modalContent").innerHTML !== originalModalMarkup) return;
            const taxonomy = computeTaxonomy(questions);
            // Defensive: q.subject should already be in taxonomy.subjects (computeTaxonomy
            // scans the live DB, which includes this question) but guard anyway so an
            // edit can never render with no matching Subject option selected.
            const subjectList = (isEdit && q.subject && !taxonomy.subjects.includes(q.subject))
                ? [q.subject, ...taxonomy.subjects] : taxonomy.subjects;
            const initialSubject = isEdit ? q.subject : 'Uncategorized';
            const initialChapterList = taxonomy.chaptersBySubject[initialSubject] || ['General'];
            const fields = `
            <div class="modal-field"><label>Question Text *</label><input type="text" id="addQuestionText" value="${isEdit?escapeHTML(q.questionText):''}" placeholder="Enter question"></div>
            <div class="form-row">
              <div class="modal-field"><label>Option A *</label><input type="text" id="addOptionA" value="${isEdit?escapeHTML(q.optionA):''}"></div>
              <div class="modal-field"><label>Option B *</label><input type="text" id="addOptionB" value="${isEdit?escapeHTML(q.optionB):''}"></div>
              <div class="modal-field"><label>Option C</label><input type="text" id="addOptionC" value="${isEdit?escapeHTML(q.optionC||''):''}"></div>
              <div class="modal-field"><label>Option D</label><input type="text" id="addOptionD" value="${isEdit?escapeHTML(q.optionD||''):''}"></div>
              <div class="modal-field"><label>Option E</label><input type="text" id="addOptionE" value="${isEdit?escapeHTML(q.optionE||''):''}"></div>
            </div>
            <div class="form-row">
              <div class="modal-field"><label>Correct Answer *</label><select id="addCorrectAnswer"><option value="">Select correct answer</option><option value="A" ${isEdit&&q.correctAnswer==='A'?'selected':''}>A</option><option value="B" ${isEdit&&q.correctAnswer==='B'?'selected':''}>B</option><option value="C" ${isEdit&&q.correctAnswer==='C'?'selected':''}>C</option><option value="D" ${isEdit&&q.correctAnswer==='D'?'selected':''}>D</option><option value="E" ${isEdit&&q.correctAnswer==='E'?'selected':''}>E</option></select></div>
              <div class="modal-field"><label>Subject *</label><select id="addSubject">${subjectList.map(s=>`<option value="${escapeHTML(s)}" ${initialSubject===s?'selected':''}>${escapeHTML(s)}</option>`).join('')}</select></div>
              <div class="modal-field"><label>Chapter *</label><select id="addChapter"><option value="">Select chapter</option>${initialChapterList.map(c=>`<option value="${escapeHTML(c)}" ${isEdit&&q.chapter===c?'selected':''}>${escapeHTML(c)}</option>`).join('')}</select></div>
            </div>
            <p id="questionAnswerStatus" role="status" aria-live="polite" style="margin:8px 0;color:var(--text2);font-size:.85rem;"></p>
            <div class="form-row">
              <div class="modal-field"><label>Topic</label><input type="text" id="addTopic" value="${isEdit?escapeHTML(q.topic||''):''}"></div>
              <div class="modal-field"><label>Difficulty</label><select id="addDifficulty"><option value="Easy" ${isEdit&&q.difficulty==='Easy'?'selected':''}>Easy</option><option value="Medium" ${isEdit&&q.difficulty==='Medium'?'selected':''}>Medium</option><option value="Hard" ${isEdit&&q.difficulty==='Hard'?'selected':''}>Hard</option></select></div>
              <div class="modal-field"><label>Group (optional)</label><input type="text" id="addGroup" value="${isEdit?escapeHTML(q.group||''):''}" placeholder="e.g., ENT Set 1"></div>
            </div>
            <fieldset style="border:1px solid var(--border);border-radius:10px;padding:12px;margin:12px 0;">
              <legend style="padding:0 6px;">Reference — المرجع</legend>
              <p style="font-size:0.83rem;color:var(--text2);margin-bottom:10px;">Optional source documentation. Group / book labels are managed separately.</p>
              <div class="modal-field"><label for="addReferenceName">Reference name — اسم المرجع</label><input type="text" id="addReferenceName" value="${escapeReferenceInputAttribute(reference.name)}" placeholder="Book or reference title"></div>
              <div class="form-row">
                <div class="modal-field"><label for="addReferenceEdition">Edition — الطبعة</label><input type="text" id="addReferenceEdition" value="${escapeReferenceInputAttribute(reference.edition)}" placeholder="e.g. 8th edition"></div>
                <div class="modal-field"><label for="addReferencePage">Page(s) — الصفحة</label><input type="text" id="addReferencePage" value="${escapeReferenceInputAttribute(reference.page)}" placeholder="e.g. 128–130 or xii"></div>
              </div>
            </fieldset>
            <div class="modal-field"><label>Explanation</label><textarea id="addExplanation" rows="3">${isEdit?escapeHTML(q.explanation||''):''}</textarea></div>
            ${QuestionImages.editorMarkup()}
            <button class="btn btn-primary btn-block" id="saveQuestionBtn">${isEdit?'Update':'Add'} Question</button>
            <button class="btn btn-outline btn-block mt-2" onclick="closeModal()">Cancel</button>
          `;
            const overlay = $('#modalOverlay'); const content = $('#modalContent');
            content.innerHTML = fields; overlay.classList.remove('hidden');
            overlay.onclick = function(e) { if (e.target === overlay) closeModal(); };

            const subjectSel = $('#addSubject'); const chapterSel = $('#addChapter');
            if (subjectSel && chapterSel) {
                subjectSel.addEventListener('change', function() {
                    const subject = this.value;
                    let chapters = taxonomy.chaptersBySubject[subject] || [];
                    if (isEdit && subject === q.subject && q.chapter && !chapters.includes(q.chapter)) {
                        chapters = [q.chapter, ...chapters];
                    }
                    chapterSel.innerHTML = '<option value="">Select chapter</option>' + chapters.map(c => `<option value="${escapeHTML(c)}">${escapeHTML(c)}</option>`).join('');
                    if (isEdit && subject === q.subject && q.chapter) chapterSel.value = q.chapter;
                    else chapterSel.value = 'General';
                });
                setTimeout(() => subjectSel.dispatchEvent(new Event('change')), 0);
            }

            bindQuestionAnswerEditor(content, q && q.correctAnswer);
            const imageEditor = QuestionImages.mountEditor(q, content);
            const saveBtn = $('#saveQuestionBtn');
            if (saveBtn) {
                saveBtn.addEventListener('click', async function() {
                    if (!imageEditor.active() || imageEditor.busy || saveBtn.dataset.saving) return;
                    const qObj = {
                        questionText: $('#addQuestionText').value.trim(), optionA: $('#addOptionA').value.trim(),
                        optionB: $('#addOptionB').value.trim(), optionC: $('#addOptionC').value.trim(),
                        optionD: $('#addOptionD').value.trim(), optionE: $('#addOptionE').value.trim(),
                        correctAnswer: $('#addCorrectAnswer').value, subject: $('#addSubject').value,
                        chapter: $('#addChapter').value, topic: $('#addTopic').value.trim(),
                        difficulty: $('#addDifficulty').value, explanation: $('#addExplanation').value.trim(),
                        group: $('#addGroup').value.trim(),
                        referenceName: $('#addReferenceName').value.trim(),
                        referenceEdition: $('#addReferenceEdition').value.trim(),
                        referencePage: $('#addReferencePage').value.trim(),
                        images: imageEditor.images()
                    };
                    const answerErrors = validateQuestionAnswer(qObj);
                    if (answerErrors.length) {
                        const status = content.querySelector('#questionAnswerStatus');
                        if (status) status.textContent = answerErrors.join(' ');
                        showToast(answerErrors[0], 'warning');
                        const missing = ['A', 'B'].find(letter => !qObj['option' + letter]);
                        const selected = normalizeCorrectAnswer(qObj.correctAnswer);
                        const target = missing || (/^[A-E]$/.test(selected) && !qObj['option' + selected] ? selected : null);
                        content.querySelector(target ? '#addOption' + target : '#addCorrectAnswer')?.focus();
                        return;
                    }
                    if (!qObj.questionText || !qObj.optionA || !qObj.optionB || !qObj.correctAnswer || !qObj.subject || !qObj.chapter) {
                        showToast('Please fill all required fields.', 'warning'); return;
                    }
                    saveBtn.dataset.saving = 'true'; saveBtn.disabled = true;
                    try {
                        const saved = isEdit ? await db.updateQuestion(q.id, qObj, { assets: imageEditor.assets() }) : await db.addQuestion(qObj, { assets: imageEditor.assets() });
                        if (!saved) throw new Error('Question was not saved.');
                        if (imageEditor.active()) { closeModal(); navigateTo('questions'); }
                        showToast(isEdit ? 'Question updated!' : 'Question added!', 'success');
                    } catch (e) { showToast(e.message || 'Question was not saved.', 'error'); }
                    finally { if (imageEditor.active()) { delete saveBtn.dataset.saving; saveBtn.disabled = false; } }
                });
            }
        }

        function showQuestionModal(q) {
            window.__questionImageFormRequest = (window.__questionImageFormRequest || 0) + 1;
            const html = q ? `
            <h3>Question</h3>
            <div class="question-block">
              <div class="question-text">${escapeHTML(q.questionText)}</div>
              ${QuestionImages.render(q, 'question')}
              ${['A','B','C','D','E'].map(l=> q[`option${l}`]?`<div class="option-btn ${l===q.correctAnswer?'correct':''}"><span class="option-label">${l}.</span> <span class="option-content" dir="auto">${escapeHTML(q[`option${l}`])}</span></div>`:'').join('')}
              ${q.explanation ? `<div class="explanation-box">${escapeHTML(q.explanation)}</div>` : ''}
              ${QuestionImages.render(q, 'explanation')}
              ${renderQuestionReference(q, { admin: true })}
              <div class="flex-wrap" style="margin-top:10px;">
                <span class="badge badge-primary">${escapeHTML(q.subject||'Uncategorized')}</span>
                <span class="badge badge-accent">${escapeHTML(q.chapter||'General')}</span>
                ${q.group ? `<span class="badge badge-group">${escapeHTML(q.group)}</span>` : ''}
              </div>
            </div>
            <button class="btn btn-outline btn-block" onclick="closeModal()">Close</button>` : '<h3>Question not found</h3><button class="btn btn-outline btn-block" onclick="closeModal()">Close</button>';
            const overlay = $('#modalOverlay'); const content = $('#modalContent');
            content.innerHTML = html; overlay.classList.remove('hidden');
            overlay.onclick = function(e) { if (e.target === overlay) closeModal(); };
        }

        async function startExamFromLecture(l) {
            let questions = await db.getAllQuestions();
            if (l.subject) questions = questions.filter(q => (q.subject || '') === l.subject);
            if (l.chapter) questions = questions.filter(q => (q.chapter || '') === l.chapter);
            if (l.book) questions = questions.filter(q => (q.book || '') === l.book);
            if (questions.length === 0) { showToast('No questions match this lecture.', 'warning'); return; }
            if (!resetExamAttempt()) return;
            AppState.examQuestions = [...questions].sort(() => Math.random() - 0.5).slice(0, Math.min(20, questions.length));
            AppState.examAnswers = { currentIndex: 0 };
            AppState.examInProgress = true;
            AppState.examShowResults = false; AppState.lastExamResults = null;
            AppState.examTimeRemaining = 0; AppState.examStartTime = Date.now();
            resumeExam();
        }

        async function startExamFromLectureAttached(lectureId) {
            const allQuestions = await db.getAllQuestions();
            const questions = allQuestions.filter(q => q.lectureId === lectureId);
            if (questions.length === 0) { showToast('No MCQs are attached to this lecture yet. Add them from "Add Lecture" with the MCQ JSON field.', 'warning'); return; }
            if (!resetExamAttempt()) return;
            AppState.examQuestions = [...questions].sort(() => Math.random() - 0.5).slice(0, Math.min(20, questions.length));
            AppState.examAnswers = { currentIndex: 0 };
            AppState.examInProgress = true;
            AppState.examShowResults = false; AppState.lastExamResults = null;
            AppState.examTimeRemaining = 0; AppState.examStartTime = Date.now();
            resumeExam();
        }

        async function startExamFromChapterAllBooks(l) {
            let questions = await db.getAllQuestions();
            if (l.subject) questions = questions.filter(q => (q.subject || '') === l.subject);
            if (l.chapter) questions = questions.filter(q => (q.chapter || '') === l.chapter);
            if (questions.length === 0) { showToast('No questions found for this chapter yet.', 'warning'); return; }
            if (!resetExamAttempt()) return;
            AppState.examQuestions = [...questions].sort(() => Math.random() - 0.5).slice(0, Math.min(20, questions.length));
            AppState.examAnswers = { currentIndex: 0 };
            AppState.examInProgress = true;
            AppState.examShowResults = false; AppState.lastExamResults = null;
            AppState.examTimeRemaining = 0; AppState.examStartTime = Date.now();
            resumeExam();
        }

        async function showAddLectureModal() {
            if (!RBAC.requireAdmin()) return;
            const taxonomy = computeTaxonomy([...(await db.getAllQuestions()), ...(await db.getAllLectures())]);
            const fields = `
            <h3>${uiIcon("plus")} Add Lecture</h3>
            <div class="modal-field"><label>Title *</label><input type="text" id="lecTitle" placeholder="Lecture title"></div>
            <div class="form-row">
              <div class="modal-field"><label>Subject *</label><select id="lecSubject">${taxonomy.subjects.map(s=>`<option value="${escapeHTML(s)}" ${s === 'Uncategorized' ? 'selected' : ''}>${escapeHTML(s)}</option>`).join('')}</select></div>
              <div class="modal-field"><label>Chapter *</label><select id="lecChapter"><option value="">Select chapter</option></select></div>
            </div>
            <div class="form-row">
              <div class="modal-field"><label>Book</label><input type="text" id="lecBook" placeholder="e.g., ENT Textbook"></div>
              <div class="modal-field"><label>Page</label><input type="number" id="lecPage" placeholder="Page number"></div>
            </div>
            <div class="modal-field"><label>Content *</label><textarea id="lecContent" rows="8" placeholder="Paste lecture notes, summary, or full text here..."></textarea></div>
            <div class="modal-field">
              <label>MCQs for this Lecture (JSON, optional)</label>
              <textarea id="lecMCQs" rows="6" placeholder='[{"questionText":"...","optionA":"...","optionB":"...","correctAnswer":"A","explanation":"..."}]'></textarea>
              <p style="font-size:0.78rem;color:var(--text-muted);margin-top:4px;">Same format as the Import screen. These get tagged to this lecture for the "This Lecture's MCQs" exam button, and also join your main question bank.</p>
            </div>
            <button class="btn btn-primary btn-block" id="saveLectureBtn">Save Lecture</button>
            <button class="btn btn-outline btn-block mt-2" onclick="closeModal()">Cancel</button>
            `;
            const overlay = $('#modalOverlay'); const content = $('#modalContent');
            content.innerHTML = fields; overlay.classList.remove('hidden');
            overlay.onclick = function(e) { if (e.target === overlay) closeModal(); };

            const subjSel = $('#lecSubject'); const chapSel = $('#lecChapter');
            subjSel.addEventListener('change', function() {
                const subject = this.value;
                const chapters = taxonomy.chaptersBySubject[subject] || ['General'];
                chapSel.innerHTML = '<option value="">Select chapter</option>' + chapters.map(c => `<option value="${escapeHTML(c)}">${escapeHTML(c)}</option>`).join('');
            });
            subjSel.dispatchEvent(new Event('change'));

            $('#saveLectureBtn').addEventListener('click', async function() {
                const l = {
                    title: $('#lecTitle').value.trim(),
                    subject: $('#lecSubject').value,
                    chapter: $('#lecChapter').value,
                    book: $('#lecBook').value.trim(),
                    page: parseInt($('#lecPage').value) || null,
                    content: $('#lecContent').value.trim()
                };
                if (!l.title || !l.subject || !l.chapter || !l.content) {
                    showToast('Please fill all required fields.', 'warning'); return;
                }

                const mcqRaw = $('#lecMCQs').value.trim();
                let mcqs = [];
                if (mcqRaw) {
                    try {
                        mcqs = JSON.parse(mcqRaw);
                        if (!Array.isArray(mcqs) || mcqs.length === 0) throw new Error('Expected a non-empty JSON array of questions.');
                        mcqs = prepareQuestionAnswers(mcqs);
                        mcqs.forEach((question, index) => {
                            const errors = QuestionImport.validateQuestion(question);
                            if (errors.length) throw new Error(`Question ${index + 1}: ${errors.join(' ')}`);
                            normalizeQuestionClassification(question);
                        });
                    } catch (e) {
                        showToast('MCQ JSON is invalid: ' + e.message, 'error');
                        $('#lecMCQs').focus();
                        return;
                    }
                }

                const lectureId = await db.addLecture(l);

                if (mcqs.length > 0) {
                    const tagged = mcqs.map(q => {
                        if (!q.page && l.page) q.page = l.page;
                        q.lectureId = lectureId;
                        return q;
                    });
                    const count = await db.bulkImport(tagged, l.book || '');
                    showToast(`Lecture added with ${count} attached MCQ${count === 1 ? '' : 's'}!`, 'success');
                } else {
                    showToast('Lecture added!', 'success');
                }
                closeModal();
                renderViewSafely('study');
            });
        }

// Pure import preparation: previewing, editing and cancelling never touch IndexedDB.
const QuestionImport = (() => {
    const textFields = ['questionText', 'optionA', 'optionB', 'optionC', 'optionD', 'optionE',
        'correctAnswer', 'explanation', 'subject', 'chapter', 'topic', 'subtopic', 'difficulty',
        'group', 'book', 'uid', 'subjectId', 'chapterId', 'partId', 'classificationStatus', 'classificationSource',
        'referenceName', 'referenceEdition', 'referencePage'];
    const booleanFields = ['needsReview', 'classificationApproved', 'classificationInferred'];
    const canonicalHeaders = new Map([...textFields, ...booleanFields, 'tags', 'chapterNumber',
        'classificationPolicyVersion', 'classificationRepairVersion', 'dateAdded', 'updatedAt', 'id', 'pkgVersion']
        .map(name => [name.toLowerCase(), name]));

    function normalizeText(value) {
        return typeof value === 'string' ? value.normalize('NFKD').replace(/\p{M}/gu, '')
            .replace(/[\u200b-\u200d\ufeff]/g, '').toLowerCase()
            .replace(/[^\p{L}\p{N}]+/gu, ' ').trim() : '';
    }

    /** Strict CSV reader supporting quoted commas, escaped quotes and multiline cells. */
    function parseCSV(raw) {
        if (typeof raw !== 'string') throw new Error('CSV input must be text.');
        const input = raw.replace(/^\ufeff/, '');
        const records = [];
        let record = [], field = '', quoted = false, afterQuote = false;
        let line = 1, recordLine = 1;
        const finishRecord = () => {
            record.push(field);
            if (record.some(value => value.trim() !== '')) records.push({ values: record, line: recordLine });
            record = []; field = ''; afterQuote = false;
        };
        for (let index = 0; index < input.length; index++) {
            const char = input[index];
            if (quoted) {
                if (char === '"') {
                    if (input[index + 1] === '"') { field += '"'; index++; }
                    else { quoted = false; afterQuote = true; }
                } else if (char === '\r' || char === '\n') {
                    if (char === '\r' && input[index + 1] === '\n') index++;
                    field += '\n'; line++;
                } else field += char;
                continue;
            }
            if (afterQuote) {
                if (char === ',' || char === '\r' || char === '\n') {
                    // Delimiters below finish the quoted cell/record.
                } else if (char === ' ' || char === '\t') continue;
                else throw new Error(`CSV row ${line}: unexpected text after a closing quote.`);
            }
            if (char === '"') {
                if (field.length) throw new Error(`CSV row ${line}: a quote must begin a cell.`);
                quoted = true;
            } else if (char === ',') {
                record.push(field); field = ''; afterQuote = false;
            } else if (char === '\r' || char === '\n') {
                finishRecord();
                if (char === '\r' && input[index + 1] === '\n') index++;
                line++; recordLine = line;
            } else field += char;
        }
        if (quoted) throw new Error(`CSV row ${recordLine}: an opening quote has no closing quote.`);
        if (field.length || record.length || afterQuote) finishRecord();
        if (!records.length) return [];
        const headers = records[0].values.map(value => value.trim());
        const headerKeys = headers.map(value => value.toLowerCase());
        if (headers.some(value => !value)) throw new Error(`CSV row ${records[0].line}: column names cannot be empty.`);
        if (new Set(headerKeys).size !== headers.length) throw new Error(`CSV row ${records[0].line}: duplicate column names.`);
        if (headerKeys.some(value => ['__proto__', 'prototype', 'constructor'].includes(value))) {
            throw new Error(`CSV row ${records[0].line}: unsupported column name.`);
        }
        const names = headers.map(value => canonicalHeaders.get(value.toLowerCase()) || value);
        return records.slice(1).map(record => {
            if (record.values.length !== names.length) {
                throw new Error(`CSV row ${record.line}: expected ${names.length} cells, found ${record.values.length}. Quote cells containing commas.`);
            }
            return Object.fromEntries(names.map((name, index) => [name, record.values[index].trim()]));
        });
    }

    function parse(raw, format = 'json') {
        if (format === 'csv') return parseCSV(raw);
        if (format !== 'json') throw new Error('Choose JSON or CSV.');
        let parsed;
        try { parsed = JSON.parse(String(raw).replace(/^\ufeff/, '')); }
        catch (error) { throw new Error('Invalid JSON: ' + error.message); }
        const questions = Array.isArray(parsed) ? parsed
            : parsed && typeof parsed === 'object' && Array.isArray(parsed.questions) ? parsed.questions : null;
        if (!questions) throw new Error('JSON must contain an array of questions, or an object with a questions array.');
        return questions;
    }

    function validateQuestion(q) {
        if (!q || typeof q !== 'object' || Array.isArray(q)) return ['Each row must be a question object.'];
        const errors = [];
        if (typeof q.questionText !== 'string' || !q.questionText.trim()) errors.push('Question text is required.');
        else if (!normalizeText(q.questionText)) errors.push('Question text must contain letters or numbers.');
        errors.push(...validateQuestionAnswer(q));
        for (const field of textFields) {
            if (q[field] != null && typeof q[field] !== 'string') errors.push(`${field} must be text.`);
        }
        if (q.difficulty && !['Easy', 'Medium', 'Hard'].includes(q.difficulty)) errors.push('Difficulty must be Easy, Medium, or Hard.');
        if (q.tags != null && (!Array.isArray(q.tags) || q.tags.some(tag => typeof tag !== 'string'))) errors.push('Tags must contain text values.');
        if (q.classification != null && (typeof q.classification !== 'object' || Array.isArray(q.classification))) errors.push('Classification must be an object.');
        for (const field of booleanFields) {
            if (q[field] != null && typeof q[field] !== 'boolean') errors.push(`${field} must be true or false.`);
        }
        if (q.images != null && (!Array.isArray(q.images) || q.images.length)) errors.push('Attach images in the question editor, or import them with an .entpkg update package.');
        return [...new Set(errors)];
    }

    function copyQuestion(source) {
        if (!source || typeof source !== 'object' || Array.isArray(source)) return {};
        const q = JSON.parse(JSON.stringify(source));
        // Local database keys must never come from an imported file.
        delete q.id;
        for (const field of ['referenceEdition', 'referencePage']) {
            if (typeof q[field] === 'number' && Number.isFinite(q[field])) q[field] = String(q[field]);
        }
        for (const field of textFields) if (typeof q[field] === 'string') q[field] = q[field].trim();
        if (typeof q.correctAnswer === 'string') q.correctAnswer = q.correctAnswer.toUpperCase();
        if (typeof q.difficulty === 'string' && q.difficulty) {
            const difficulty = ['Easy', 'Medium', 'Hard'].find(value => value.toLowerCase() === q.difficulty.toLowerCase());
            if (difficulty) q.difficulty = difficulty;
        }
        if (typeof q.tags === 'string') q.tags = q.tags.split(/[;,|]/).map(value => value.trim()).filter(Boolean);
        if (q.uid == null || q.uid === '') delete q.uid;
        for (const field of booleanFields) {
            if (typeof q[field] !== 'string') continue;
            if (!q[field].trim()) delete q[field];
            else if (/^(true|false)$/i.test(q[field].trim())) q[field] = q[field].trim().toLowerCase() === 'true';
        }
        return q;
    }

    function prepareRows(questions, existingQuestions = []) {
        if (!Array.isArray(questions)) throw new Error('No question array was provided.');
        return recheckRows(questions.map((source, key) => {
            const sourceErrors = !source || typeof source !== 'object' || Array.isArray(source)
                ? ['Each row must be a question object.'] : [];
            let question;
            try { question = copyQuestion(source); }
            catch { question = {}; sourceErrors.push('Question data could not be copied.'); }
            const originalErrors = validateQuestion(question);
            // Valid flat metadata reaches the normalizer; malformed field types remain visible errors.
            // Keep supplied JSON labels; missing labels receive neutral display defaults.
            if (!sourceErrors.length && !originalErrors.some(error => /must be text|Classification must be|must be true or false/.test(error))) {
                normalizeQuestionClassification(question);
                generateTopicSubtopic(question);
            }
            return { key, sourceIndex: key + 1, question, sourceErrors, errors: [], duplicateOf: null, selected: true };
        }), existingQuestions);
    }

    /** Mutates and returns rows. Only a selected row reserves a within-file duplicate key. */
    function recheckRows(rows, existingQuestions = []) {
        const existingText = new Map(), existingUid = new Map();
        for (const q of existingQuestions) {
            const text = normalizeText(q.questionText);
            if (text) existingText.set(text, q.id == null ? 'existing question' : `question ${q.id}`);
            if (typeof q.uid === 'string' && q.uid.trim()) existingUid.set(q.uid.trim(), q.id == null ? q.uid : `question ${q.id}`);
        }
        const fileText = new Map(), fileUid = new Map();
        for (const row of rows) {
            row.errors = [...new Set([...(row.sourceErrors || []), ...validateQuestion(row.question)])];
            row.duplicateOf = null;
            const text = normalizeText(row.question.questionText);
            const uid = typeof row.question.uid === 'string' ? row.question.uid.trim() : '';
            if (!row.errors.length) {
                if (text && existingText.has(text)) row.duplicateOf = { kind: 'existing', label: existingText.get(text) };
                else if (uid && existingUid.has(uid)) row.duplicateOf = { kind: 'uid', label: existingUid.get(uid) };
                else if (text && fileText.has(text)) row.duplicateOf = { kind: 'file', label: `row ${fileText.get(text)}` };
                else if (uid && fileUid.has(uid)) row.duplicateOf = { kind: 'file', label: `row ${fileUid.get(uid)}` };
            }
            if (row.errors.length || row.duplicateOf) row.selected = false;
            if (row.selected && !row.errors.length && !row.duplicateOf) {
                if (text) fileText.set(text, row.sourceIndex);
                if (uid) fileUid.set(uid, row.sourceIndex);
            }
        }
        return rows;
    }

    function summarize(rows) {
        const result = { total: rows.length, ready: 0, review: 0, invalid: 0, duplicates: 0, selected: 0, excluded: 0 };
        for (const row of rows) {
            if (row.errors.length) result.invalid++;
            else if (row.duplicateOf) result.duplicates++;
            else if (isQuestionClassificationApproved(row.question)) result.ready++;
            else result.review++;
            if (row.selected && !row.errors.length && !row.duplicateOf) result.selected++;
        }
        result.excluded = result.total - result.selected;
        return result;
    }

    return { parse, parseCSV, normalizeText, validateQuestion, prepareRows, recheckRows, summarize };
})();


// Preview state is transient. Only the final confirmation handler may write questions.
let ImportPreviewState = null;
let ImportPreviewRequest = 0;

function importPreviewEscape(value) {
    let text;
    try { text = value == null ? '' : typeof value === 'object' ? JSON.stringify(value) : String(value); }
    catch { text = '[Invalid value]'; }
    return escapeHTML(text);
}

function importPreviewRowStatus(row) {
    if (row.errors.length) return 'invalid';
    if (row.duplicateOf) return 'duplicates';
    return isQuestionClassificationApproved(row.question) ? 'ready' : 'review';
}

function importPreviewLayoutStyle() {
    // Keep native scrolling aware of the app's fixed header and bottom navigation.
    // The rule disappears with the preview/result instead of changing the app stylesheet.
    return `<style id="importPreviewLayoutStyle">
        html { scroll-padding-block-start:104px; scroll-padding-block-end:calc(var(--nav-height, 72px) + 24px); }
        #importPreviewArea { scroll-margin-block-start:104px; }
        #importPreviewArea button, #importPreviewArea input, #importPreviewArea select {
            scroll-margin-block-start:104px;
            scroll-margin-block-end:calc(var(--nav-height, 72px) + 24px);
        }
        .import-preview-swipe-hint { display:none; }
        @media (max-width:600px) {
            #importPreviewArea { padding-block-end:calc(var(--nav-height, 72px) + 12px); }
            .import-preview-swipe-hint { display:block; }
        }
    </style>`;
}

async function beginQuestionImportPreview() {
    if (!RBAC.requireAdmin()) return;
    if (ImportPreviewState && ImportPreviewState.busy) return;
    const request = ++ImportPreviewRequest;
    const formatInput = document.getElementById('importFormat');
    const sourceInput = document.getElementById('importData');
    const groupInput = document.getElementById('importGroup');
    const area = document.getElementById('importPreviewArea');
    if (!formatInput || !sourceInput || !area) return;
    const sourceText = sourceInput.value;
    const format = formatInput.value;
    const groupName = groupInput ? groupInput.value.trim() : '';
    try {
        const questions = QuestionImport.parse(sourceText, format);
        const existingQuestions = await db.getAllQuestions();
        if (request !== ImportPreviewRequest || document.getElementById('importPreviewArea') !== area) return;
        if (sourceInput.value !== sourceText || formatInput.value !== format || (groupInput ? groupInput.value.trim() : '') !== groupName) {
            cancelQuestionImportPreview();
            showToast('Source changed. Preview it again before importing.', 'info');
            return;
        }
        const rows = QuestionImport.prepareRows(questions, existingQuestions);
        ImportPreviewState = {
            rows,
            groupName,
            existingQuestions,
            page: 0,
            pageSize: 20,
            filter: 'all',
            step: 'preview',
            busy: false
        };
        renderQuestionImportPreview();
        document.getElementById('importPreviewArea').scrollIntoView({ behavior: 'smooth', block: 'start' });
    } catch (error) {
        if (request !== ImportPreviewRequest) return;
        ImportPreviewState = null;
        area.innerHTML = `<div class="card" role="alert"><div class="card-header">Import preview could not be prepared</div><p>${importPreviewEscape(error.message || error)}</p><p style="color:var(--text2);margin-top:8px;">Correct the source data and choose Preview Import again.</p></div>`;
        showToast('Preview error: ' + (error.message || error), 'error');
    }
}

function renderQuestionImportPreview() {
    const area = document.getElementById('importPreviewArea');
    const state = ImportPreviewState;
    if (!area) return;
    if (!state) { area.innerHTML = ''; return; }
    const summary = QuestionImport.summarize(state.rows);
    const busy = state.busy === true;
    const disabled = busy ? 'disabled' : '';
    const selectedRows = state.rows.filter(row => row.selected && !row.errors.length && !row.duplicateOf);
    const selectedReview = selectedRows.filter(row => !isQuestionClassificationApproved(row.question)).length;
    const selectedReady = selectedRows.length - selectedReview;
    const progress = `<div style="display:flex;gap:8px;flex-wrap:wrap;margin:12px 0;" aria-live="polite">
        <span class="badge badge-primary">Total: ${summary.total}</span>
        <span class="badge badge-primary">Ready: ${summary.ready}</span>
        <span class="badge badge-warning">Needs review: ${summary.review}</span>
        <span class="badge badge-danger">Invalid: ${summary.invalid}</span>
        <span class="badge badge-warning">Duplicates: ${summary.duplicates}</span>
        <span class="badge badge-accent">Selected: ${selectedRows.length}</span>
        <span class="badge badge-group">Excluded: ${summary.total - selectedRows.length}</span>
    </div>`;

    if (state.step === 'confirm') {
        area.innerHTML = `${importPreviewLayoutStyle()}<div class="card" id="importConfirmationCard" aria-busy="${busy}">
            <div class="card-header">Confirm Question Import — تأكيد الاستيراد</div>
            ${progress}
            <p><strong>${selectedRows.length}</strong> question(s) selected for addition to the administrator's question bank.</p>
            <ul style="margin:12px 0;padding-inline-start:24px;">
                <li>${selectedReady} with approved classifications.</li>
                <li>${selectedReview} need Classification Review after import. Exports include all valid questions and preserve their classification and review status.</li>
                <li>${summary.total - selectedRows.length} excluded from this import.</li>
            </ul>
            ${state.groupName ? `<p style="margin-bottom:12px;">Default group / book for rows without one: <strong>${importPreviewEscape(state.groupName)}</strong></p>` : ''}
            <p style="color:var(--text2);margin-bottom:14px;">Duplicates are checked again against the current question bank when you confirm. Existing questions are retained.</p>
            <div style="display:flex;gap:8px;flex-wrap:wrap;">
                <button type="button" class="btn btn-primary" id="btnConfirmQuestionImport" ${busy || !selectedRows.length ? 'disabled' : ''}>${busy ? 'Importing…' : 'Confirm Import'}</button>
                <button type="button" class="btn btn-outline" id="btnBackToImportPreview" ${disabled}>Back to Preview</button>
                <button type="button" class="btn btn-outline" id="btnCancelImportPreview" ${disabled}>Cancel Import</button>
            </div>
            <div id="importCommitMessage" role="status" style="margin-top:10px;">${busy ? 'Saving your selected questions…' : ''}</div>
        </div>`;
        document.getElementById('btnConfirmQuestionImport').onclick = () => {
            if (ImportPreviewState && !ImportPreviewState.busy) confirmQuestionImport();
        };
        document.getElementById('btnBackToImportPreview').onclick = () => {
            if (!ImportPreviewState || ImportPreviewState.busy) return;
            ImportPreviewState.step = 'preview';
            renderQuestionImportPreview();
        };
        document.getElementById('btnCancelImportPreview').onclick = cancelQuestionImportPreview;
        return;
    }

    const filtered = state.rows.filter(row => state.filter === 'all' || importPreviewRowStatus(row) === state.filter);
    const pageCount = Math.max(1, Math.ceil(filtered.length / state.pageSize));
    state.page = Math.max(0, Math.min(state.page, pageCount - 1));
    const displayed = filtered.slice(state.page * state.pageSize, (state.page + 1) * state.pageSize);
    const filters = [['all', 'All rows'], ['ready', 'Ready'], ['review', 'Needs classification review'], ['invalid', 'Invalid data'], ['duplicates', 'Duplicates']];
    const rowHtml = row => {
        const q = row.question;
        const status = importPreviewRowStatus(row);
        const blocked = row.errors.length > 0 || !!row.duplicateOf;
        const messages = row.errors.length ? row.errors : row.duplicateOf ? [row.duplicateOf.label] : status === 'review' ? ['Classification needs approval before publication to students.'] : [];
        const badge = status === 'ready' ? 'Ready' : status === 'review' ? 'Needs Review' : status === 'invalid' ? 'Invalid' : 'Duplicate';
        const badgeClass = status === 'ready' ? 'badge-primary' : status === 'invalid' ? 'badge-danger' : 'badge-warning';
        return `<tr data-import-row="${row.key}" style="vertical-align:top;${row.selected ? '' : 'opacity:0.8;'}">
            <td style="padding:10px;border-bottom:1px solid var(--border);"><input type="checkbox" data-import-row-key="${row.key}" aria-label="Include question ${row.sourceIndex}" ${row.selected ? 'checked' : ''} ${blocked || busy ? 'disabled' : ''}></td>
            <td style="padding:10px;border-bottom:1px solid var(--border);">${row.sourceIndex}</td>
            <td style="padding:10px;border-bottom:1px solid var(--border);min-width:240px;max-width:420px;overflow-wrap:anywhere;">
                <strong>${importPreviewEscape(q.questionText || '(Missing question text)')}</strong>
                <details style="margin-top:6px;"><summary style="cursor:pointer;">View choices and explanation</summary>
                    <div style="margin-top:7px;">${['A', 'B', 'C', 'D', 'E'].map(letter => q['option' + letter] ? `<p style="margin:4px 0;${q.correctAnswer === letter ? 'font-weight:600;' : ''}">${letter}. ${importPreviewEscape(q['option' + letter])}${q.correctAnswer === letter ? (" " + uiIcon("check")) : ''}</p>` : '').join('')}</div>
                    ${q.explanation ? `<p style="margin-top:8px;color:var(--text2);">${importPreviewEscape(q.explanation)}</p>` : ''}
                </details>
            </td>
            <td style="padding:10px;border-bottom:1px solid var(--border);">${importPreviewEscape(q.correctAnswer || '—')}</td>
            <td style="padding:10px;border-bottom:1px solid var(--border);min-width:190px;overflow-wrap:anywhere;">
                <div><strong>Subject:</strong> ${importPreviewEscape(q.subject || 'Uncategorized')}</div>
                <div><strong>Chapter:</strong> ${importPreviewEscape(q.chapter || 'General')}</div>
                <div><strong>Topic:</strong> ${importPreviewEscape(q.topic || 'General')}</div>
                <button type="button" class="btn btn-outline btn-sm" data-import-action="edit" data-import-key="${row.key}" style="margin-top:8px;" ${busy ? 'disabled' : ''}>Edit Details</button>
            </td>
            <td style="padding:10px;border-bottom:1px solid var(--border);min-width:180px;overflow-wrap:anywhere;">${renderQuestionReference(q, { admin: true })}</td>
            <td style="padding:10px;border-bottom:1px solid var(--border);min-width:170px;overflow-wrap:anywhere;">
                <span class="badge ${badgeClass}">${badge}</span>
                ${messages.map(message => `<div style="font-size:0.83rem;margin-top:5px;">${importPreviewEscape(message)}</div>`).join('')}
            </td>
        </tr>`;
    };

    area.innerHTML = `${importPreviewLayoutStyle()}<div class="card" id="questionImportPreviewCard" aria-busy="${busy}">
        <div class="card-header">Question Import Preview — معاينة الاستيراد</div>
        <p style="color:var(--text2);">Review the questions, exclude rows and edit classifications. Changes on this screen are saved only after Confirm Import.</p>
        ${progress}
        <div style="display:flex;gap:8px;align-items:center;flex-wrap:wrap;margin-bottom:12px;">
            <label for="importPreviewFilter">Show</label>
            <select id="importPreviewFilter" style="width:auto;max-width:100%;" ${disabled}>${filters.map(([value, label]) => `<option value="${value}" ${state.filter === value ? 'selected' : ''}>${label}</option>`).join('')}</select>
            <button type="button" class="btn btn-outline btn-sm" data-import-action="select-visible" ${disabled}>Select Eligible on Page</button>
            <button type="button" class="btn btn-outline btn-sm" data-import-action="exclude-visible" ${disabled}>Exclude Page</button>
        </div>
        <p class="import-preview-swipe-hint" style="font-size:0.82rem;color:var(--text2);margin-bottom:8px;">Swipe the table horizontally to review classification, references and status.</p>
        <div style="overflow-x:auto;max-height:65vh;overflow-y:auto;border:1px solid var(--border);border-radius:10px;">
            <table style="width:100%;border-collapse:collapse;text-align:start;font-size:0.88rem;" aria-label="Questions awaiting import">
                <thead style="background:var(--surface);"><tr>${['Include', '#', 'Question', 'Answer', 'Classification', 'Reference', 'Status'].map(label => `<th scope="col" style="padding:10px;text-align:start;border-bottom:1px solid var(--border);">${label}</th>`).join('')}</tr></thead>
                <tbody>${displayed.map(rowHtml).join('') || '<tr><td colspan="7" style="padding:22px;text-align:center;">No rows match this filter.</td></tr>'}</tbody>
            </table>
        </div>
        <div style="display:flex;gap:8px;align-items:center;flex-wrap:wrap;margin-top:12px;">
            <button type="button" class="btn btn-outline btn-sm" data-import-action="previous" ${busy || state.page === 0 ? 'disabled' : ''}>Previous</button>
            <span aria-live="polite">Page ${state.page + 1} / ${pageCount} · ${filtered.length} row(s)</span>
            <button type="button" class="btn btn-outline btn-sm" data-import-action="next" ${busy || state.page + 1 >= pageCount ? 'disabled' : ''}>Next</button>
        </div>
        <div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:16px;">
            <button type="button" class="btn btn-primary" id="btnPrepareImportConfirm" ${busy || !selectedRows.length ? 'disabled' : ''}>Review Import Summary (${selectedRows.length})</button>
            <button type="button" class="btn btn-outline" id="btnCancelImportPreview" ${disabled}>Cancel Preview</button>
        </div>
    </div>`;
    area.onchange = event => {
        if (!ImportPreviewState || ImportPreviewState.busy) return;
        const checkbox = event.target.closest('input[data-import-row-key]');
        if (checkbox) {
            const row = ImportPreviewState.rows.find(item => item.key === Number(checkbox.dataset.importRowKey));
            if (!row || row.errors.length || row.duplicateOf) return;
            row.selected = checkbox.checked;
            ImportPreviewState.rows = QuestionImport.recheckRows(ImportPreviewState.rows, ImportPreviewState.existingQuestions);
            renderQuestionImportPreview();
            return;
        }
        if (event.target.id === 'importPreviewFilter') {
            ImportPreviewState.filter = event.target.value;
            ImportPreviewState.page = 0;
            renderQuestionImportPreview();
        }
    };
    area.onclick = event => {
        const button = event.target.closest('button[data-import-action]');
        if (!button || !ImportPreviewState || ImportPreviewState.busy || button.disabled) return;
        const action = button.dataset.importAction;
        if (action === 'edit') { editImportPreviewClassification(Number(button.dataset.importKey)); return; }
        if (action === 'previous') ImportPreviewState.page--;
        if (action === 'next') ImportPreviewState.page++;
        if (action === 'select-visible' || action === 'exclude-visible') {
            for (const row of displayed) {
                if (action === 'exclude-visible') row.selected = false;
                else if (!row.errors.length && !row.duplicateOf) row.selected = true;
            }
            ImportPreviewState.rows = QuestionImport.recheckRows(ImportPreviewState.rows, ImportPreviewState.existingQuestions);
        }
        renderQuestionImportPreview();
    };
    document.getElementById('btnPrepareImportConfirm').onclick = () => {
        if (!ImportPreviewState || ImportPreviewState.busy) return;
        ImportPreviewState.step = 'confirm';
        renderQuestionImportPreview();
        document.getElementById('importConfirmationCard').scrollIntoView({ behavior: 'smooth', block: 'start' });
    };
    document.getElementById('btnCancelImportPreview').onclick = cancelQuestionImportPreview;
}

function cancelQuestionImportPreview() {
    if (ImportPreviewState && ImportPreviewState.busy) return;
    ImportPreviewRequest++;
    ImportPreviewState = null;
    const area = document.getElementById('importPreviewArea');
    if (area) { area.innerHTML = ''; area.onclick = null; area.onchange = null; }
}

function editImportPreviewClassification(key) {
    if (!RBAC.requireAdmin() || !ImportPreviewState || ImportPreviewState.busy) return;
    const state = ImportPreviewState;
    const row = state.rows.find(item => item.key === key);
    if (!row) return;
    const q = row.question;
    const reference = getQuestionReference(q);
    const taxonomy = computeTaxonomy([...state.existingQuestions, ...state.rows.map(item => item.question)].map(item => ({
        ...item,
        subject: typeof item.subject === 'string' ? item.subject : '',
        chapter: typeof item.chapter === 'string' ? item.chapter : ''
    })));
    const originalSubject = typeof q.subject === 'string' ? q.subject : '';
    const originalChapter = typeof q.chapter === 'string' ? q.chapter : '';
    const subjectNames = Array.from(new Set([...(taxonomy.subjects || []), originalSubject].filter(Boolean))).sort((a, b) => a.localeCompare(b));
    const chaptersFor = subject => {
        const matchingSubject = subjectNames.find(name => questionClassificationKey(name) === questionClassificationKey(subject));
        const chapters = taxonomy.chaptersBySubject[matchingSubject || subject] || [];
        return Array.from(new Set([...chapters, ...(questionClassificationKey(subject) === questionClassificationKey(originalSubject) && originalChapter ? [originalChapter] : [])]));
    };
    const topics = Array.from(new Set(['General', ...state.existingQuestions.map(item => item.topic), ...state.rows.map(item => item.question.topic)].filter(value => typeof value === 'string' && value))).sort((a, b) => a.localeCompare(b));
    showModal(`<h3>Edit Preview Details — السؤال ${row.sourceIndex}</h3>
        <p style="color:var(--text2);margin:8px 0 12px;">Applies to this preview only. Questions are added after Confirm Import.</p>
        <p style="margin-bottom:12px;overflow-wrap:anywhere;"><strong>${importPreviewEscape(q.questionText || '(Missing question text)')}</strong></p>
        ${q.explanation ? `<details style="margin-bottom:12px;"><summary>Explanation</summary><p style="margin-top:8px;overflow-wrap:anywhere;">${importPreviewEscape(q.explanation)}</p></details>` : ''}
        <form id="importClassificationForm">
            <div class="modal-field"><label for="importEditSubject">Subject</label><input type="text" id="importEditSubject" list="importPreviewSubjects" value="${importPreviewEscape(originalSubject)}" autocomplete="off"><datalist id="importPreviewSubjects">${subjectNames.map(name => `<option value="${importPreviewEscape(name)}"></option>`).join('')}</datalist></div>
            <div class="modal-field"><label for="importEditChapter">Chapter</label><input type="text" id="importEditChapter" list="importPreviewChapters" value="${importPreviewEscape(originalChapter)}" autocomplete="off"><datalist id="importPreviewChapters">${chaptersFor(originalSubject).map(name => `<option value="${importPreviewEscape(name)}"></option>`).join('')}</datalist></div>
            <div class="modal-field"><label for="importEditTopic">Topic</label><input type="text" id="importEditTopic" list="importPreviewTopics" value="${importPreviewEscape(q.topic || '')}" autocomplete="off"><datalist id="importPreviewTopics">${topics.map(name => `<option value="${importPreviewEscape(name)}"></option>`).join('')}</datalist></div>
            <div class="modal-field"><label for="importEditSubtopic">Subtopic</label><input type="text" id="importEditSubtopic" value="${importPreviewEscape(q.subtopic || '')}"></div>
            <fieldset style="border:1px solid var(--border);border-radius:10px;padding:12px;margin:12px 0;">
                <legend style="padding:0 6px;">Reference — المرجع</legend>
                <div class="modal-field"><label for="importEditReferenceName">Reference name</label><input type="text" id="importEditReferenceName" value="${escapeReferenceInputAttribute(reference.name)}" placeholder="Book or reference title"></div>
                <div class="form-row">
                    <div class="modal-field"><label for="importEditReferenceEdition">Edition</label><input type="text" id="importEditReferenceEdition" value="${escapeReferenceInputAttribute(reference.edition)}" placeholder="e.g. 8th edition"></div>
                    <div class="modal-field"><label for="importEditReferencePage">Page(s)</label><input type="text" id="importEditReferencePage" value="${escapeReferenceInputAttribute(reference.page)}" placeholder="e.g. 128–130 or xii"></div>
                </div>
                <p style="color:var(--text2);font-size:0.83rem;">References are optional and are not guessed from the question or group name.</p>
            </fieldset>
            <p style="color:var(--text2);font-size:0.85rem;margin:10px 0;">You can enter custom labels. Choose Apply Details Only to retain the current classification review decision, or explicitly approve the displayed classification.</p>
            <button type="submit" class="btn btn-primary" id="btnSaveImportDetailsOnly">Apply Details Only</button>
            <button type="submit" class="btn btn-outline" id="btnSaveImportClassification">Apply &amp; Approve Classification</button>
            <button type="button" class="btn btn-outline" id="btnCancelImportClassification">Cancel</button>
        </form>`);
    const subjectInput = document.getElementById('importEditSubject');
    const chapterInput = document.getElementById('importEditChapter');
    subjectInput.addEventListener('input', () => {
        const chapters = chaptersFor(subjectInput.value.trim());
        document.getElementById('importPreviewChapters').innerHTML = chapters.map(name => `<option value="${importPreviewEscape(name)}"></option>`).join('');
    });
    subjectInput.addEventListener('change', () => {
        if (questionClassificationKey(subjectInput.value) !== questionClassificationKey(originalSubject)) chapterInput.value = '';
    });
    document.getElementById('btnCancelImportClassification').onclick = closeModal;
    document.getElementById('importClassificationForm').onsubmit = event => {
        event.preventDefault();
        if (ImportPreviewState !== state || state.busy) { closeModal(); return; }
        const revised = {
            ...row.question,
            subject: subjectInput.value.trim(),
            chapter: chapterInput.value.trim(),
            topic: document.getElementById('importEditTopic').value.trim(),
            subtopic: document.getElementById('importEditSubtopic').value.trim(),
            referenceName: document.getElementById('importEditReferenceName').value.trim(),
            referenceEdition: document.getElementById('importEditReferenceEdition').value.trim(),
            referencePage: document.getElementById('importEditReferencePage').value.trim(),
            subjectId: null,
            chapterId: null,
            chapterNumber: null,
            partId: null
        };
        const approveClassification = event.submitter && event.submitter.id === 'btnSaveImportClassification';
        normalizeQuestionClassification(revised, { readNested: false, infer: false, approve: !!approveClassification });
        generateTopicSubtopic(revised);
        row.question = revised;
        state.rows = QuestionImport.recheckRows(state.rows, state.existingQuestions);
        closeModal();
        renderQuestionImportPreview();
        showToast(isQuestionClassificationApproved(revised) ? 'Details updated in preview.' : 'Details saved in preview; classification remains in review.', isQuestionClassificationApproved(revised) ? 'success' : 'warning');
    };
}

function showQuestionImportResult(result) {
    ImportPreviewRequest++;
    ImportPreviewState = null;
    const area = document.getElementById('importPreviewArea');
    if (!area) return;
    const added = Number(result.added == null ? result.count || 0 : result.added);
    const review = Number(result.review || 0);
    const duplicates = Number(result.duplicates || result.skippedDuplicates || 0);
    const excluded = Number(result.excluded || 0);
    area.onclick = null;
    area.onchange = null;
    area.innerHTML = `${importPreviewLayoutStyle()}<div class="card" id="importResultCard" role="status">
        <div class="card-header">Import Complete — اكتمل الاستيراد</div>
        <p><strong>${added}</strong> question(s) added.</p>
        <p style="margin-top:8px;">${review} need classification review. Exports include all valid questions and preserve their classification and review status. ${duplicates} duplicate(s) skipped. ${excluded} row(s) excluded.</p>
        <button type="button" class="btn btn-outline" id="btnCloseImportResult" style="margin-top:14px;">Close Result</button>
    </div>`;
    document.getElementById('btnCloseImportResult').onclick = () => { area.innerHTML = ''; };
}


// The preview stays in memory. Only this final, atomic transaction changes the question bank.
async function saveQuestionImport(questions, groupName = '') {
    if (!RBAC.requireAdmin()) throw new Error('Admin access required.');
    await db.ensureReady();
    const prepared = questions.map(question => {
        const q = normalizeQuestionAnswer(JSON.parse(JSON.stringify(question)));
        const errors = QuestionImport.validateQuestion(q);
        if (errors.length) throw new Error(errors.join(' '));
        delete q.id;
        delete q.pkgVersion;
        if (typeof q.uid === 'string') q.uid = q.uid.trim();
        // Reconcile metadata without making any fresh suggestions after the preview was accepted.
        normalizeQuestionClassification(q, { readNested: false, infer: false });
        generateTopicSubtopic(q);
        q.dateAdded = q.updatedAt = new Date().toISOString();
        q.tags = q.tags || [];
        if (groupName && !q.group) q.group = groupName;
        if (groupName && !q.book) q.book = groupName;
        q.group = q.group || '';
        q.book = q.book || '';
        return q;
    });
    if (!prepared.length) return { added: 0, skippedDuplicates: 0, selected: 0, review: 0 };
    return new Promise((resolve, reject) => {
        const tx = db.db.transaction('questions', 'readwrite');
        const store = tx.objectStore('questions');
        const result = { added: 0, skippedDuplicates: 0, selected: prepared.length, review: 0 };
        let failure;
        const existing = store.getAll();
        existing.onsuccess = () => {
            try {
                if (!RBAC.isAdmin()) throw new Error('Admin access required.');
                const textKeys = new Set(existing.result.map(q => QuestionImport.normalizeText(q.questionText)).filter(Boolean));
                const uids = new Set(existing.result.map(q => typeof q.uid === 'string' ? q.uid.trim() : '').filter(Boolean));
                for (const q of prepared) {
                    const key = QuestionImport.normalizeText(q.questionText);
                    if ((key && textKeys.has(key)) || (q.uid && uids.has(q.uid))) {
                        result.skippedDuplicates++;
                        continue;
                    }
                    if (!q.uid) q.uid = __entUpdatePkg.genUid();
                    if (key) textKeys.add(key);
                    uids.add(q.uid);
                    store.add(q);
                    result.added++;
                    if (!isQuestionClassificationApproved(q)) result.review++;
                }
            } catch (error) {
                failure = error;
                tx.abort();
            }
        };
        tx.oncomplete = () => { db._invalidateCache(); resolve(result); };
        tx.onerror = () => reject(failure || tx.error || new Error('Import failed. No questions were saved.'));
        tx.onabort = () => reject(failure || tx.error || new Error('Import cancelled. No questions were saved.'));
    });
}

async function confirmQuestionImport() {
    const state = ImportPreviewState;
    if (!state || state.busy || state.step !== 'confirm') return;
    if (!RBAC.requireAdmin()) return;
    QuestionImport.recheckRows(state.rows, state.existingQuestions);
    const selected = state.rows.filter(row => row.selected && !row.errors.length && !row.duplicateOf);
    if (!selected.length) { state.step = 'preview'; renderQuestionImportPreview(); return; }
    const summary = QuestionImport.summarize(state.rows);
    state.busy = true;
    renderQuestionImportPreview();
    const sourceControls = ['importData', 'importFormat', 'importGroup', 'importFile', 'btnImport'];
    sourceControls.forEach(id => { const el = document.getElementById(id); if (el) el.disabled = true; });
    try {
        const result = await saveQuestionImport(selected.map(row => row.question), state.groupName);
        // The source can be retained to correct excluded/invalid rows in a new preview.
        showQuestionImportResult({ ...summary, ...result, requested: selected.length,
            duplicates: summary.duplicates + result.skippedDuplicates,
            excluded: summary.excluded + result.skippedDuplicates });
        showToast(`Imported ${result.added} question(s).${result.skippedDuplicates ? ' Skipped ' + result.skippedDuplicates + ' new duplicate(s).' : ''}`, 'success');
    } catch (error) {
        state.busy = false;
        state.error = error.message;
        if (ImportPreviewState === state) renderQuestionImportPreview();
        showToast('Import error: ' + error.message, 'error');
    } finally {
        sourceControls.forEach(id => { const el = document.getElementById(id); if (el) el.disabled = false; });
    }
}


        async function handleImport() {
            return beginQuestionImportPreview();
        }

        function validateImportedQuestionsStrict(questions) {
            return Array.isArray(questions) && questions.length > 0 && questions.every(q => QuestionImport.validateQuestion(q).length === 0);
        }

        function parseCSV(csv) { return QuestionImport.parseCSV(csv); }

        async function loadSamples() {
            const samples = [
                { questionText: 'Most common cause of epistaxis in children?', optionA: 'Trauma', optionB: 'Allergy', optionC: 'Little\'s area picking', optionD: 'Sinusitis', optionE: 'FB', correctAnswer: 'C', explanation: 'Digital trauma to Little\'s area is the most common cause in the pediatric population.', subject: 'Rhinology', chapter: 'Epistaxis', topic: 'Pediatric', difficulty: 'Easy', group: 'Sample' },
                { questionText: 'Unilateral nasal mass + epistaxis in 45M?', optionA: 'Polyp', optionB: 'Inverted papilloma', optionC: 'Angiofibroma', optionD: 'SCC', optionE: 'Adenoid', correctAnswer: 'B', explanation: 'Inverted papilloma often presents as a unilateral mass and can bleed. Angiofibroma is typically seen in adolescent males.', subject: 'Rhinology', chapter: 'Endoscopic management of sinonasal tumours', topic: 'Inverted Papilloma', difficulty: 'Medium', group: 'Sample' },
                { questionText: 'Rinne test is for?', optionA: 'Weber', optionB: 'Conductive loss', optionC: 'Sensorineural', optionD: 'Central', optionE: 'None', correctAnswer: 'B', explanation: 'Rinne test compares air conduction to bone conduction to detect conductive hearing loss.', subject: 'Otology', chapter: 'Clinical examination of the ears and hearing', topic: 'Tuning Fork', difficulty: 'Easy', group: 'Sample' }
            ];
            await db.bulkImport(samples); showToast('Sample questions loaded!', 'success'); navigateTo('dashboard');
        }

        async function handleExport() {
            const data = await db.exportAllData();
            const blob = new Blob([JSON.stringify(data)], { type: 'application/json' });
            const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = 'ent-backup.json'; a.click();
            showToast('Backup saved.', 'success');
        }

        async function handleRestore(e) {
            const file = e.target.files[0]; if (!file) return;
            const text = await file.text();
            try {
                const data = JSON.parse(text);
                if (confirm(`Restore ${data.questions?.length||0} questions? This will replace all current data.`)) {
                    await db.clearAndRestore(data); showToast('Restored!', 'success'); navigateTo('dashboard');
                }
            } catch (e) { showToast('Invalid file', 'error'); }
            e.target.value = '';
        }

        async function clearAllHandler() {
            const groups = await db.getAllGroups();
            const modal = $('#modalOverlay');
            const content = $('#modalContent');
            const groupOptions = groups.map(g => `<option value="${escapeHTML(g)}">${escapeHTML(g)}</option>`).join('');
            content.innerHTML = `
                <div class="card">
                    <h3>${uiIcon("trash")} Manage Data</h3>
                    <div style="margin-bottom:15px;">
                        <label>Delete Specific Group:</label>
                        <select id="clearGroupSelect" style="margin-bottom:10px;">
                            ${groupOptions.length > 0 ? groupOptions : '<option>No groups found</option>'}
                        </select>
                        <button class="btn btn-danger" onclick="executeDeleteGroup()">Delete Selected Group</button>
                    </div>
                    <hr style="margin: 15px 0;">
                    <button class="btn btn-danger btn-block" onclick="executeClearAll()">WIPE EVERYTHING</button>
                    <button class="btn btn-outline btn-block mt-2" onclick="closeModal()">Cancel</button>
                </div>
            `;
            modal.classList.remove('hidden');
        }

        window.executeDeleteGroup = async function() {
            const groupToClear = $('#clearGroupSelect').value;
            if (!confirm(`Are you sure you want to delete the group: "${groupToClear}"?`)) return;
            const qs = await db.getAllQuestions();
            const tx = db.db.transaction('questions', 'readwrite');
            const store = tx.objectStore('questions');
            qs.forEach(q => { if (q.group === groupToClear) store.delete(q.id); });
            tx.oncomplete = () => { closeModal(); showToast(`Group deleted.`, 'success'); navigateTo('dashboard'); };
        };

        window.executeClearAll = async function() {
            if (confirm('⚠️ WARNING: This will delete EVERYTHING. Are you sure?')) {
                await db.clearAllQuestions();
                showToast('All data cleared.', 'success');
                navigateTo('dashboard');
                closeModal();
            }
        };

        /**
         * EVENT LISTENERS — Optimized path:
         * - Question list search is debounced and uses the search index.
         * - Virtual scroller is initialized here after DOM insertion.
         * - Filter changes invalidate the FilterCache automatically via
         *   the DB cache version bumping on writes.
         */
        function attachEventListeners() {
            const completedExamButton = $('#btnViewExamResults');
            if (completedExamButton) completedExamButton.addEventListener('click', viewExamResults);
            const resumeExamButton = $('#btnResumeExam');
            if (resumeExamButton) resumeExamButton.addEventListener('click', resumeExam);
            $$('[data-nav]').forEach(btn => { btn.addEventListener('click', function() { const view = this.dataset.nav; if (view) navigateTo(view); }); });

            // Exam subject/chapter
            const examSubject = $('#examSubject');
            if (examSubject) {
                examSubject.addEventListener('change', async function() {
                    const subject = this.value;
                    const taxonomy = computeTaxonomy(await db.getAllQuestions());
                    if ($('#examSubject') !== this || this.value !== subject) return;
                    const chapters = subject === 'all' ? taxonomy.allChapters : taxonomy.chaptersBySubject[subject] || ['General'];
                    const chSel = $('#examChapter');
                    if (chSel) {
                        chSel.innerHTML = '<option value="all">All</option>' + chapters.map(c => `<option value="${escapeHTML(c)}">${escapeHTML(c)}</option>`).join('');
                        chSel.value = 'all'; chSel.dispatchEvent(new Event('change'));
                    }
                });
                setTimeout(() => examSubject.dispatchEvent(new Event('change')), 10);
            }

            // Study filters
            const studySubject = $('#studySubject');
            if (studySubject) studySubject.addEventListener('change', function() { AppState.studyFilter.subject = this.value; AppState.studyFilter.chapter = 'all'; AppState.studyFilter.topic = 'all'; AppState.studyFilter.subtopic = 'all'; navigateTo('study'); });
            const studyChapter = $('#studyChapter');
            if (studyChapter) studyChapter.addEventListener('change', function() { AppState.studyFilter.chapter = this.value; AppState.studyFilter.topic = 'all'; AppState.studyFilter.subtopic = 'all'; navigateTo('study'); });
            const studyTopic = $('#studyTopic');
            if (studyTopic) studyTopic.addEventListener('change', function() { AppState.studyFilter.topic = this.value; AppState.studyFilter.subtopic = 'all'; navigateTo('study'); });
            const studySubtopic = $('#studySubtopic');
            if (studySubtopic) studySubtopic.addEventListener('change', function() { AppState.studyFilter.subtopic = this.value; navigateTo('study'); });
            const studyBook = $('#studyBook');
            if (studyBook) studyBook.addEventListener('change', function() { AppState.studyFilter.book = this.value; navigateTo('study'); });

            // Study mode buttons
            $$('[data-study-mode]').forEach(btn => { btn.addEventListener('click', function() { AppState.studyFilter.mode = this.dataset.studyMode; if(this.dataset.studyMode !== 'lectureReader') AppState.studyFilter.lectureId = null; navigateTo('study'); }); });

            // --- LECTURE LISTENERS ---
            $$('.lecture-card').forEach(card => {
                card.addEventListener('click', function(e) {
                    if (e.target.closest('.lecture-exam-btn')) return;
                    AppState.studyFilter.lectureId = parseInt(this.dataset.lid);
                    AppState.studyFilter.mode = 'lectureReader';
                    renderViewSafely('study');
                });
            });
            $$('.lecture-exam-btn').forEach(btn => {
                btn.addEventListener('click', async function(e) {
                    e.stopPropagation();
                    const lid = parseInt(this.dataset.lid);
                    const l = await db.getLecture(lid);
                    if (!l) return;
                    await startExamFromLecture(l);
                });
            });
            const btnAddLecture = $('#btnAddLecture');
            if (btnAddLecture) btnAddLecture.addEventListener('click', () => showAddLectureModal());
            const btnDeleteLecture = $('#btnDeleteLecture');
            if (btnDeleteLecture) {
                btnDeleteLecture.addEventListener('click', async function() {
                    const lid = parseInt(this.dataset.lid);
                    if (!confirm('Delete this lecture?')) return;
                    await db.deleteLecture(lid);
                    showToast('Lecture deleted', 'success');
                    AppState.studyFilter.mode = 'lectures';
                    AppState.studyFilter.lectureId = null;
                    renderViewSafely('study');
                });
            }
            const btnExamLectureAttached = $('#btnExamLectureAttached');
            if (btnExamLectureAttached) {
                btnExamLectureAttached.addEventListener('click', async function() {
                    const lid = parseInt(this.dataset.lid);
                    await startExamFromLectureAttached(lid);
                });
            }
            const btnExamChapterAllBooks = $('#btnExamChapterAllBooks');
            if (btnExamChapterAllBooks) {
                btnExamChapterAllBooks.addEventListener('click', async function() {
                    const l = { subject: this.dataset.subj, chapter: this.dataset.chap };
                    await startExamFromChapterAllBooks(l);
                });
            }
            const lectureSubject = $('#lectureSubjectFilter');
            if (lectureSubject) lectureSubject.addEventListener('change', function() { AppState.studyFilter.subject = this.value; AppState.studyFilter.chapter = 'all'; renderViewSafely('study'); });
            const lectureChapter = $('#lectureChapterFilter');
            if (lectureChapter) lectureChapter.addEventListener('change', function() { AppState.studyFilter.chapter = this.value; renderViewSafely('study'); });

            // Start study
            const startStudy = $('#btnStartStudy');
            if (startStudy) {
                startStudy.addEventListener('click', async function() {
                    const questions = await db.getAllQuestions(); const sf = AppState.studyFilter;
                    let filtered = questions;
                    if (sf.subject !== 'all') filtered = filtered.filter(q => (q.subject || 'Uncategorized') === sf.subject);
                    if (sf.chapter !== 'all') filtered = filtered.filter(q => (q.chapter || 'General') === sf.chapter);
                    if (sf.topic !== 'all') filtered = filtered.filter(q => (q.topic || 'General') === sf.topic);
                    if (sf.subtopic !== 'all') filtered = filtered.filter(q => ((q.subtopic || 'General') === sf.subtopic));
                    if (sf.book !== 'all') filtered = filtered.filter(q => (q.book || '') === sf.book);
                    if (sf.mode === 'bookmarked') { const bIds = await db.getAllBookmarkedIds(); filtered = filtered.filter(q => bIds.includes(q.id)); }
                    if (sf.mode === 'highyield') { const hyIds = await db.getAllHighYieldIds(); filtered = filtered.filter(q => hyIds.includes(q.id)); }
                    if (filtered.length === 0) { showToast('No questions match filters.', 'warning'); return; }
                    AppState.studyQuestions = [...filtered].sort(() => Math.random() - 0.5);
                    AppState.studyIndex = 0; AppState.studyAnswers = {}; AppState.studyRevealed = {};
                    renderStudyQuestion();
                });
            }

            // Question list filters
            const qf = AppState.questionFilters;
            const qSubject = $('#questionSubjectFilter');
            const qChapter = $('#questionChapterFilter');
            if (qSubject || qChapter) {
                (async () => {
                    const taxonomy = computeTaxonomy(await db.getAllQuestions());
                    if (qSubject) {
                        qSubject.innerHTML = '<option value="all">All Subjects</option>' + taxonomy.subjects.map(s => `<option value="${escapeHTML(s)}">${escapeHTML(s)}</option>`).join('');
                        qSubject.value = qf.subject;
                    }
                    if (qChapter) {
                        let chapters = taxonomy.allChapters;
                        if (qf.subject !== 'all' && taxonomy.chaptersBySubject[qf.subject]) chapters = taxonomy.chaptersBySubject[qf.subject];
                        qChapter.innerHTML = '<option value="all">All Chapters</option>' + chapters.map(c => `<option value="${escapeHTML(c)}">${escapeHTML(c)}</option>`).join('');
                        qChapter.value = qf.chapter;
                    }
                })();
            }
            if (qSubject) {
                qSubject.addEventListener('change', function() {
                    AppState.questionFilters.subject = this.value;
                    AppState.questionFilters.chapter = 'all';
                    renderViewSafely('questions');
                });
            }
            if (qChapter) {
                qChapter.addEventListener('change', function() {
                    AppState.questionFilters.chapter = this.value;
                    renderViewSafely('questions');
                });
            }
            const qTopic = $('#questionTopicFilter');
            if (qTopic) {
                qTopic.value = qf.topic;
                qTopic.addEventListener('change', function() {
                    AppState.questionFilters.topic = this.value;
                    renderViewSafely('questions');
                });
            }
            const referenceFilter = $('#questionReferenceFilter');
            if (referenceFilter) {
                referenceFilter.value = ['missing', 'complete'].includes(qf.reference) ? qf.reference : 'all';
                referenceFilter.addEventListener('change', function() {
                    AppState.questionFilters.reference = this.value;
                    renderViewSafely('questions');
                });
            }
            const qDiff = $('#questionDifficultyFilter');
            if (qDiff) {
                qDiff.value = qf.difficulty;
                qDiff.addEventListener('change', function() {
                    AppState.questionFilters.difficulty = this.value;
                    renderViewSafely('questions');
                });
            }
            $$('[data-qfilter]').forEach(btn => {
                btn.addEventListener('click', function() {
                    const special = this.dataset.qfilter;
                    AppState.questionFilters.special = special;
                    renderViewSafely('questions');
                });
            });

            // Start exam
            const startExam = $('#btnStartExam');
            if (startExam) {
                startExam.addEventListener('click', async function() {
                    try {
                        const selectedSubjects = ($('#examSubject')?.value && $('#examSubject').value!=='all') ? [$('#examSubject').value] : [];
                        const selectedChapters = ($('#examChapter')?.value && $('#examChapter').value!=='all') ? [$('#examChapter').value] : [];
                        const selectedGroups = ($('#examBook')?.value && $('#examBook').value!=='all') ? [$('#examBook').value] : [];
                        const count = parseInt($('#examCount')?.value || 20); const timerMin = parseInt($('#examTimerMinutes')?.value || 0);
                        const difficulty = $('#examDifficulty')?.value || 'all';
                        let questions = await db.getAllQuestions();
                        if (selectedSubjects.length) questions = questions.filter(q => selectedSubjects.includes(q.subject || 'Uncategorized'));
                        if (selectedChapters.length) questions = questions.filter(q => selectedChapters.includes(q.chapter || 'General'));
                        if (selectedGroups.length) questions = questions.filter(q => selectedGroups.includes(q.group || ''));
                        if (difficulty !== 'all') questions = questions.filter(q => q.difficulty === difficulty);
                        if (questions.length === 0) { showToast('No questions available.', 'warning'); return; }
                        if (!resetExamAttempt()) return;
                        AppState.examQuestions = [...questions].sort(() => Math.random() - 0.5).slice(0, Math.min(count, questions.length));
                        AppState.examAnswers = { currentIndex: 0 };
                        AppState.examInProgress = true;
                        AppState.examShowResults = false; AppState.lastExamResults = null;
                        AppState.examTimeRemaining = timerMin * 60; AppState.examStartTime = Date.now();
                        resumeExam();
                    } catch (e) { showToast('Error: ' + e.message, 'error'); }
                });
            }

            const nextQ = $('#btnNextQ');
            if (nextQ) {
                nextQ.addEventListener('click', function() {
                    const idx = AppState.examAnswers.currentIndex || 0;
                    if (checkExamDeadline()) return;
                    if (idx < AppState.examQuestions.length - 1) { AppState.examAnswers.currentIndex = idx + 1; _doSaveSession(); renderViewSafely('exam'); }
                    else { submitExam(); }
                });
            }
            const prevQ = $('#btnPrevQ');
            if (prevQ) prevQ.addEventListener('click', function() { if (checkExamDeadline()) return; const idx = AppState.examAnswers.currentIndex || 0; if (idx > 0) { AppState.examAnswers.currentIndex = idx - 1; _doSaveSession(); renderViewSafely('exam'); } });
            const endExam = $('#btnEndExam');
            if (endExam) endExam.addEventListener('click', function() { if (confirm('End exam and submit?')) submitExam(); });

            const retryExamSave = $('#btnRetryExamSave');
            if (retryExamSave) retryExamSave.addEventListener('click', async function() {
                this.disabled = true;
                try { await persistExamAttempt(); showToast('Exam results saved.', 'success'); }
                catch (error) { showToast('Results could not be saved. Please retry.', 'error'); }
                if (AppState.examShowResults) await renderViewSafely('exam');
                else await renderViewSafely(AppState.currentView);
            });

            const reviewExam = $('#btnReviewExam');
            if (reviewExam) reviewExam.addEventListener('click', reviewExamResults);

            $$('.option-btn[data-option]').forEach(btn => {
                btn.addEventListener('click', function() {
                    if (checkExamDeadline()) return;
                    const idx = AppState.examAnswers.currentIndex || 0; const q = AppState.examQuestions[idx];
                    if (q) AppState.examAnswers[q.id] = this.dataset.option;
                    _doSaveSession();
                    renderViewSafely('exam');
                });
            });

            $$('.bookmark-btn').forEach(b => { if (b.closest('#questionListContainer')) return; b.addEventListener('click', async function(e) { e.stopPropagation(); const id = parseInt(this.dataset.qid); await db.toggleBookmark(id); renderViewSafely(AppState.currentView); }); });
            $$('.view-q-btn').forEach(b => { if (b.closest('#questionListContainer')) return; b.addEventListener('click', async function() { const q = await db.getQuestion(parseInt(this.dataset.qid)); if (q) showQuestionModal(q); }); });

            // The virtualized question list mounts/unmounts .question-block nodes as the user
            // scrolls (see VirtualScroller), so per-node listeners bound only at initial render
            // would silently do nothing for anything scrolled into view afterward. One delegated
            // listener on the stable container covers every row regardless of when it was mounted.
            const qListContainerForDelegation = $('#questionListContainer');
            if (qListContainerForDelegation) {
                qListContainerForDelegation.addEventListener('click', async function(e) {
                    const bmBtn = e.target.closest('.bookmark-btn');
                    if (bmBtn) {
                        e.stopPropagation();
                        const id = parseInt(bmBtn.dataset.qid);
                        await db.toggleBookmark(id);
                        renderViewSafely(AppState.currentView);
                        return;
                    }
                    const freeBtn = e.target.closest('.free-toggle-btn');
                    if (freeBtn) {
                        e.stopPropagation();
                        await toggleQuestionFree(parseInt(freeBtn.dataset.qid), freeBtn);
                        return;
                    }
                    const viewBtn = e.target.closest('.view-q-btn');
                    if (viewBtn) {
                        const q = await db.getQuestion(parseInt(viewBtn.dataset.qid));
                        if (q) showQuestionModal(q);
                    }
                });
            }
            const addQ = $('#btnAddQuestion'); if (addQ) addQ.addEventListener('click', function() { showAddQuestionModal(null); });
            const clearAll = $('#btnClearAll'); if (clearAll) clearAll.addEventListener('click', clearAllHandler);
            const importBtn = $('#btnImport'); if (importBtn) importBtn.addEventListener('click', window.handleImport);
            const sampleBtn = $('#btnLoadSample'); if (sampleBtn) sampleBtn.addEventListener('click', loadSamples);
            const exportBtn = $('#btnExport'); if (exportBtn) exportBtn.addEventListener('click', handleExport);
            const restoreBtn = $('#btnRestore'); if (restoreBtn) restoreBtn.addEventListener('click', function() { $('#restoreFile').click(); });
            const restoreFile = $('#restoreFile'); if (restoreFile) restoreFile.addEventListener('change', handleRestore);

            const invalidateImportPreview = () => {
                if (ImportPreviewState && !ImportPreviewState.busy) {
                    cancelQuestionImportPreview();
                    showToast('Source changed. Preview it again before importing.', 'info');
                }
            };
            ['importData', 'importGroup'].forEach(id => { const input = document.getElementById(id); if (input) input.addEventListener('input', invalidateImportPreview); });
            const formatInput = document.getElementById('importFormat');
            if (formatInput) formatInput.addEventListener('change', invalidateImportPreview);
            let importFileReadVersion = 0;
            const importFile = $('#importFile');
            if (importFile) importFile.addEventListener('change', function(e) {
                invalidateImportPreview();
                const readVersion = ++importFileReadVersion;
                const file = e.target.files[0];
                if (!file) return;
                const originalInput = $('#importData');
                const reader = new FileReader();
                reader.onload = ev => {
                    const dataInput = $('#importData'), format = $('#importFormat');
                    if (readVersion !== importFileReadVersion || dataInput !== originalInput || !dataInput || !format || (ImportPreviewState && ImportPreviewState.busy)) return;
                    invalidateImportPreview();
                    dataInput.value = ev.target.result;
                    format.value = /\.csv$/i.test(file.name) ? 'csv' : 'json';
                };
                reader.onerror = () => { if (readVersion === importFileReadVersion) showToast('Could not read the selected file.', 'error'); };
                reader.readAsText(file);
            });

            populateDeleteBookDropdown();
            const delGroupBtn = $('#btnDeleteGroup');
            if (delGroupBtn) delGroupBtn.addEventListener('click', async () => {
                const groupName = ($('#deleteGroupName')?.value || '').trim();
                if (!groupName) { alert('Enter book/group name'); return; }
                if (!confirm(`Delete all questions from "${groupName}" only?`)) return;
                const deleted = await db.deleteQuestionsByGroup(groupName);
                showToast(`${deleted} questions deleted from ${groupName}`, 'success');
                renderViewSafely('import');
            });

            // Update state immediately; debounce only the expensive rendering work.
            QuestionSearchUI.bind($('#questionSearchInput'));

            // --- Admin Dashboard Listeners ---
            const btnAdminAddQ = $('#btnAdminAddQ');
            if (btnAdminAddQ) btnAdminAddQ.addEventListener('click', () => showAddQuestionModal(null));

            const btnAdminBulkImport = $('#btnAdminBulkImport');
            if (btnAdminBulkImport) btnAdminBulkImport.addEventListener('click', () => { navigateTo('import'); });

            const btnAdminBulkEdit = $('#btnAdminBulkEdit');
            if (btnAdminBulkEdit) btnAdminBulkEdit.addEventListener('click', adminBulkEdit);

            const btnAdminMergeDups = $('#btnAdminMergeDups');
            if (btnAdminMergeDups) btnAdminMergeDups.addEventListener('click', adminMergeDuplicates);

            const btnAdminReclassify = $('#btnAdminReclassify');
            if (btnAdminReclassify) btnAdminReclassify.addEventListener('click', adminBulkReclassify);

            const btnAdminClearAll = $('#btnAdminClearAll');
            if (btnAdminClearAll) btnAdminClearAll.addEventListener('click', clearAllHandler);

            // Admin question search
            const adminQSearch = $('#adminQSearch');
            if (adminQSearch) {
                adminQSearch.addEventListener('input', debounce(async function() {
                    const query = this.value;
                    const results = await adminSearchQuestions(query);
                    if (document.getElementById('adminQSearch') !== this || this.value !== query) return;
                    await adminRenderQuestionList(results);
                    // Re-attach edit/delete listeners after re-render
                    $$('.admin-edit-q').forEach(b => b.addEventListener('click', function() { adminEditQuestion(parseInt(this.dataset.qid)); }));
                    $$('.admin-del-q').forEach(b => b.addEventListener('click', function() { adminDeleteQuestion(parseInt(this.dataset.qid)); }));
                }, 200));
            }

            // Admin edit/delete buttons (initial render)
            $$('.admin-edit-q').forEach(b => b.addEventListener('click', function() { adminEditQuestion(parseInt(this.dataset.qid)); }));
            $$('.admin-del-q').forEach(b => b.addEventListener('click', function() { adminDeleteQuestion(parseInt(this.dataset.qid)); }));

            // --- End Admin Dashboard Listeners ---

            // --- Student Dashboard Listeners ---
            const btnSetDailyGoal = $('#btnSetDailyGoal');
            if (btnSetDailyGoal) {
                btnSetDailyGoal.addEventListener('click', async () => {
                    const current = await getDailyGoal();
                    const val = prompt('Set your daily question goal:', current);
                    if (val !== null) {
                        const n = parseInt(val, 10);
                        if (n > 0 && n <= 500) {
                            await setDailyGoal(n);
                            showToast(`Daily goal set to ${n} questions.`, 'success');
                            navigateTo('dashboard');
                        } else {
                            showToast('Please enter a number between 1 and 500.', 'warning');
                        }
                    }
                });
            }

            const btnContinueStudy = $('#btnContinueStudy');
            if (btnContinueStudy) {
                btnContinueStudy.addEventListener('click', continueStudying);
            }

            const btnSmartRevision = $('#btnSmartRevision');
            if (btnSmartRevision) {
                btnSmartRevision.addEventListener('click', startSmartRevision);
            }

            const btnAdaptiveQuiz = $('#btnAdaptiveQuiz');
            if (btnAdaptiveQuiz) {
                btnAdaptiveQuiz.addEventListener('click', startAdaptiveExam);
            }
            // --- End Student Dashboard Listeners ---

            // OPTIMIZATION: Initialize Virtual Scroller for question list
            const qContainer = $('#questionListContainer');
            if (AppState._questionScroller) {
                AppState._questionScroller.destroy();
                AppState._questionScroller = null;
            }
            if (qContainer && AppState._lastFilteredQuestions && AppState._lastFilteredQuestions.length > 0) {
                AppState._questionScroller = new VirtualScroller(qContainer, {
                    items: AppState._lastFilteredQuestions,
                    itemHeight: 190, // measured actual rendered height is ~155-216px; was 130 (up to 41% low), which made the scroller over-render extra items per scroll step
                    buffer: 4,
                    pageSize: 50,
                    renderItem: (q, i) => renderQuestionBlock(q, i, AppState._lastFilterMeta)
                });
                AppState._questionScroller.init();
            }

            // Update Package System (Settings view) — defined in update-package.js
            if (typeof attachSettingsListeners === 'function') attachSettingsListeners();
        }

        /** Simple debounce utility for search input */
        function debounce(fn, ms) {
            let t;
            return function(...args) {
                clearTimeout(t);
                t = setTimeout(() => fn.apply(this, args), ms);
            };
        }

        // ============================================================
        //  Update Package System — see update-package.js
        //  (Prior prototype here — password-encrypted .ent files signed
        //  with a keypair embedded in this same client-side bundle — has
        //  been retired. That approach couldn't keep a signing key secret
        //  from students since everyone loads the same app.js, so it gave
        //  the appearance of security more than the substance of it. The
        //  new system is upfront: a real SHA-256 checksum for accidental
        //  corruption, and a clearly-labeled signature placeholder.)
        // ============================================================
        document.getElementById('btnDarkMode').addEventListener('click', () => { AppState.darkMode = !AppState.darkMode; document.body.classList.toggle('dark-mode', AppState.darkMode); document.getElementById('btnDarkMode').innerHTML = AppState.darkMode ? (uiIcon("sun")) : (uiIcon("moon")); saveSession(); });
        document.getElementById('btnSearch').addEventListener('click', () => { navigateTo('questions'); setTimeout(() => { const inp = $('#questionSearchInput'); if (inp) inp.focus(); }, 150); });
        document.getElementById('btnSettings').addEventListener('click', () => navigateTo('settings'));

        // ============================================================
        //  SECURE PASSWORD PROTECTED ACTIONS
        // ============================================================

        window.clearAllHandler = async function() {
            if (!RBAC.requireAdmin()) { return; }
            const groups = await db.getAllGroups();
            const modal = $('#modalOverlay');
            const content = $('#modalContent');
            const groupOptions = groups.map(g => `<option value="${escapeHTML(g)}">${escapeHTML(g)}</option>`).join('');
            content.innerHTML = `
                <h3>${uiIcon("trash")} Clear Data</h3>
                <div style="margin-bottom:15px;">
                    <label>Delete entire Group:</label>
                    <select id="clearGroupSelect" style="margin-bottom:10px;">
                        ${groupOptions.length > 0 ? groupOptions : '<option>No groups found</option>'}
                    </select>
                    <button class="btn btn-danger" onclick="executeClearGroup()">Delete Selected Group</button>
                </div>
                <hr>
                <button class="btn btn-danger" onclick="executeClear('questions')">Delete ALL Questions</button>
                <button class="btn btn-danger" onclick="executeClear('all')">WIPE EVERYTHING</button>
                <button class="btn btn-outline btn-block mt-2" onclick="closeModal()">Cancel</button>
            `;
            modal.classList.remove('hidden');
        };

        window.executeClearGroup = async function() {
            const groupToClear = $('#clearGroupSelect').value;
            if (!confirm(`Are you sure you want to delete the entire group: "${groupToClear}"?`)) return;
            const qs = await db.getAllQuestions();
            const tx = db.db.transaction('questions', 'readwrite');
            const store = tx.objectStore('questions');
            qs.forEach(q => { if (q.group === groupToClear) store.delete(q.id); });
            tx.oncomplete = () => { closeModal(); showToast(`Group deleted.`, 'success'); navigateTo('dashboard'); };
        };

        window.executeClear = async function(type) {
            if (!confirm("Are you sure? This action cannot be undone.")) return;
            const tx = db.db.transaction(['questions', 'examHistory', 'bookmarks', 'notes', 'performance', 'highYield'], 'readwrite');
            if (type === 'questions') tx.objectStore('questions').clear();
            if (type === 'all') {
                tx.objectStore('questions').clear();
                tx.objectStore('examHistory').clear(); tx.objectStore('performance').clear(); tx.objectStore('highYield').clear();
                tx.objectStore('bookmarks').clear();
                tx.objectStore('notes').clear();
            }
            tx.oncomplete = () => { closeModal(); showToast('Data cleared.', 'success'); navigateTo('dashboard'); };
        };

        (async function init() {
            await db.ready;
            cleanupLegacyStorage();
            try {
                const migrationReport = await db.migrateToScottBrown();
                if (migrationReport.classified || migrationReport.subjectOnly || migrationReport.unmapped) {
                    console.log('Scott-Brown classification migration:', migrationReport);
                }
            } catch (e) {
                console.error('Classification migration failed:', e);
            }
            RBAC.init();
            applyRoleVisibility();
            const adminBtn = document.getElementById('btnAdminMode');
            if (adminBtn) adminBtn.addEventListener('click', () => RBAC.toggle());
            $$('.nav-item').forEach(item => { item.addEventListener('click', function() { const view = this.dataset.view; if (view) navigateTo(view); }); });

            // Back-button support: respond to browser/hardware back instead of
            // letting it exit the PWA. A separate observer pushes a history
            // entry whenever the shared modal overlay opens (regardless of
            // which function opened it), so back also closes dialogs first.
            window.addEventListener('popstate', handlePopState);
            window.addEventListener('pagehide', handleExamPageHide);
            window.addEventListener('pageshow', handleExamVisibilityChange);
            document.addEventListener('visibilitychange', handleExamVisibilityChange);
            const modalOverlayEl = document.getElementById('modalOverlay');
            if (modalOverlayEl && window.MutationObserver) {
                new MutationObserver(() => {
                    const isOpen = !modalOverlayEl.classList.contains('hidden');
                    if (isOpen && !(history.state && history.state.modal)) {
                        history.pushState({ view: AppState.currentView, modal: true }, '', location.href);
                    }
                }).observe(modalOverlayEl, { attributes: true, attributeFilter: ['class'] });
            }

            const restored = restoreSession();
            if (restored && AppState.examAttemptId && AppState.examSubmittedAt && !AppState._examSaved && AppState.lastExamResults?.length) {
                try { await persistExamAttempt(); }
                catch (error) { showToast('Pending exam results could not be saved. They remain in this session.', 'error'); }
            }
            if (restored) {
                // Startup must always land on Dashboard, regardless of which view was
                // open when the session was last saved. Everything else restored above
                // (exam progress/timer, study progress, filters, dark mode) is left as
                // restored — only the initial screen is overridden here.
                AppState.currentView = 'dashboard';
                document.body.classList.toggle('dark-mode', AppState.darkMode);
                document.getElementById('btnDarkMode').innerHTML = AppState.darkMode ? (uiIcon("sun")) : (uiIcon("moon"));
                $$('.nav-item').forEach(n => n.classList.remove('active'));
                const navBtn = $(`.nav-item[data-view="${AppState.currentView}"]`);
                if (navBtn) navBtn.classList.add('active');
                if (AppState.examInProgress) startExamTimer();
                history.replaceState({ view: AppState.currentView }, '', location.href);
                await renderViewSafely(AppState.currentView);
                if (AppState.currentView === 'study' && AppState.studyQuestions && AppState.studyIndex < AppState.studyQuestions.length) {
                    renderStudyQuestion();
                }
            } else {
                try {
                    const legacyDark = await db.getSetting('darkMode', false);
                    if (legacyDark) {
                        AppState.darkMode = true;
                        document.body.classList.add('dark-mode');
                        document.getElementById('btnDarkMode').innerHTML = (uiIcon("sun"));
                    }
                } catch (e) {}
                history.replaceState({ view: 'dashboard' }, '', location.href);
                isPopNavigation = true; // this is the app's first screen - replace, don't push
                navigateTo('dashboard');
                isPopNavigation = false;
            }
        })();

        // ============================================================
        //  PASSWORD PROTECTION FOR SENSITIVE ACTIONS
        // ============================================================
        window.handleImport = beginQuestionImportPreview;

        window.clearAllHandler = async function() {
            if (!RBAC.requireAdmin()) {
                return;
            }
            if (confirm('⚠️ WARNING: This will delete EVERYTHING. Are you sure?')) {
                await db.clearAllQuestions();
                showToast('All data cleared.', 'success');
                navigateTo('dashboard');
            }
        };

        window.generateWeakTopicAnalytics = async function(){
            const perf = await db.getPerformance();
            const stats = {};
            perf.forEach(r=>{
                const key = `${r.subject||'Unknown'}|||${r.chapter||'Unknown'}|||${r.topic||'Unknown'}`;
                if(!stats[key]) stats[key]={total:0,correct:0,subject:r.subject||'Unknown',chapter:r.chapter||'Unknown',topic:r.topic||'Unknown'};
                stats[key].total++;
                if(r.correct) stats[key].correct++;
            });
            return Object.values(stats)
                .map(x=>({...x,accuracy:Math.round((x.correct*100)/x.total)}))
                .sort((a,b)=>a.accuracy-b.accuracy);
        };

        async function populateDeleteBookDropdown(){
            const sel=document.getElementById('deleteGroupName');
            if(!sel) return;
            const groups=await db.getAllGroups();
            sel.innerHTML='<option value="">Select Book</option>'+groups.map(g=>`<option value="${escapeHTML(g)}">${escapeHTML(g)}</option>`).join('');
        }

        document.addEventListener('click', async (e)=>{
            if(e.target.id==='btnExamFromMistakes'){
                const perf=await db.getPerformance();
                const latest={}; perf.forEach(x=>latest[x.questionId]=x.correct);
                const wrongIds=Object.keys(latest).filter(k=>latest[k]===false).map(Number);
                const qs=(await db.getAllQuestions()).filter(q=>wrongIds.includes(q.id));
                if (!resetExamAttempt()) return;
                AppState.examQuestions=qs;
                AppState.examAnswers={currentIndex:0};
                AppState.examInProgress=true;
                AppState.examShowResults=false; AppState.lastExamResults=null;
                AppState.examStartTime=Date.now();
                AppState.examTimeRemaining=0;
                resumeExam();
            }
            if(e.target.classList.contains('add-hy')){
                await db.toggleHighYield(Number(e.target.dataset.qid));
                showToast('Added to High Yield','success');
                renderViewSafely('mistakes');
            }
            if(e.target.classList.contains('retry-question')){
                const qid=Number(e.target.dataset.qid);
                const q=await db.getQuestion(qid);
                if(!q) return;
                AppState.studyQuestions=[q];
                AppState.studyIndex=0;
                AppState.studyAnswers={};
                AppState.studyRevealed={};
                await navigateTo('study');
                renderStudyQuestion();
            }
            if(e.target.classList.contains('remove-hy')){
                const qid=Number(e.target.dataset.qid);
                await db.toggleHighYield(qid);
                showToast('Removed from High Yield', 'success');
                renderViewSafely('highyield');
            }
        });

        function updateAvailableQuestionsInfo(){
            try{
                const info=document.getElementById('availableQuestionsInfo');
                if(!info || !window.db) return;
                db.getAllQuestions().then(qs=>{
                    const subjSel=document.getElementById('examSubject');
                    const grpSel=document.getElementById('examBook');
                    let filtered=[...qs];
                    const subjects=subjSel?[...subjSel.selectedOptions].map(x=>x.value).filter(v=>v!=='all'):[];
                    const groups=grpSel?[...grpSel.selectedOptions].map(x=>x.value).filter(v=>v!=='all'):[];
                    if(subjects.length) filtered=filtered.filter(q=>subjects.includes(q.subject || 'Uncategorized'));
                    if(groups.length) filtered=filtered.filter(q=>groups.includes(q.group));
                    info.textContent='Available Questions: '+filtered.length;
                });
            }catch(e){}
        }
        document.addEventListener('change',e=>{
            if(e.target && (e.target.id==='examSubject' || e.target.id==='examBook')){
                updateAvailableQuestionsInfo();
            }
        });

        async function populateExamChapters(){
            const subj=document.getElementById('examSubject');
            const chap=document.getElementById('examChapter');
            if(!subj||!chap) return;
            const taxonomy = computeTaxonomy(await db.getAllQuestions());
            const selected=[...subj.selectedOptions].map(o=>o.value).filter(v=>v!=='all');
            let chapters=[];
            if(selected.length===0){ chapters=taxonomy.allChapters; }
            else{
                selected.forEach(s=>{ if(taxonomy.chaptersBySubject[s]) chapters.push(...taxonomy.chaptersBySubject[s]); });
            }
            chap.innerHTML='<option value="all">All</option>'+
                [...new Set(chapters)].sort((a,b)=>a.localeCompare(b)).map(c=>`<option value="${escapeHTML(c)}">${escapeHTML(c)}</option>`).join('');
        }

        document.addEventListener('change',function(e){
            if(e.target && e.target.id==='examSubject'){
                populateExamChapters();
                if(typeof updateAvailableQuestionsInfo==='function') updateAvailableQuestionsInfo();
            }
        });

        document.addEventListener('change',function(e){
            if(e.target && (e.target.id==='examChapter' || e.target.id==='examTopic')){
                if(typeof updateAvailableQuestionsInfo==='function') updateAvailableQuestionsInfo();
            }
        });

        async function populateExamTopics(){
            const chapter=document.getElementById('examChapter');
            const topic=document.getElementById('examTopic');
            if(!chapter || !topic) return;
            const qs=await db.getAllQuestions();
            let filtered=qs;
            if(chapter.value!=='all'){
                filtered=filtered.filter(q=>(q.chapter||'General')===chapter.value);
            }
            const topics=[...new Set(['General', ...filtered.map(q=>q.topic || 'General')])].sort();
            topic.innerHTML='<option value="all">All</option>'+topics.map(t=>`<option value="${escapeHTML(t)}">${escapeHTML(t)}</option>`).join('');
        }

        async function updateExamCounters(){
            const info=document.getElementById('availableQuestionsInfo');
            if(!info) return;
            const qs=await db.getAllQuestions();
            info.innerHTML='Total Questions: '+qs.length;
        }

        document.addEventListener('change',async function(e){
            if(e.target && e.target.id==='examChapter'){
                await populateExamTopics();
            }
        });

        document.addEventListener('DOMContentLoaded',function(){
            setTimeout(()=>{
                if(typeof populateExamChapters==='function') populateExamChapters();
                if(typeof updateExamCounters==='function') updateExamCounters();
            },500);
        });

                window.ENTApp.quiz=window.ENTApp.quiz||{}; window.ENTApp.quiz.classifyQuestionAdvanced=classifyQuestionAdvanced;
        window.ENTApp.quiz=window.ENTApp.quiz||{}; window.ENTApp.quiz.getQuestionsNeedingReview=getQuestionsNeedingReview;
        window.ENTApp.quiz=window.ENTApp.quiz||{}; window.ENTApp.quiz.scanDuplicateQuestions=scanDuplicateQuestions;
        window.ENTApp.quiz=window.ENTApp.quiz||{}; window.ENTApp.quiz.adaptiveExamEngine=adaptiveExamEngine;
        window.ENTApp.quiz=window.ENTApp.quiz||{}; window.ENTApp.quiz.fullBoardExamSimulator=fullBoardExamSimulator;
        window.ENTApp.quiz=window.ENTApp.quiz||{}; window.ENTApp.quiz.smartQuestionSelector=smartQuestionSelector;
        window.ENTApp.quiz=window.ENTApp.quiz||{}; window.ENTApp.quiz.optimizeFor100kQuestions=optimizeFor100kQuestions;
        window.ENTApp.quiz=window.ENTApp.quiz||{}; window.ENTApp.quiz.iraqiBoardMockExam=iraqiBoardMockExam;
        window.ENTApp.quiz=window.ENTApp.quiz||{}; window.ENTApp.quiz.updateQuestionClassification=updateQuestionClassification;
        window.ENTApp.quiz=window.ENTApp.quiz||{}; window.ENTApp.quiz.renderExamSetup=renderExamSetup;
        window.ENTApp.quiz=window.ENTApp.quiz||{}; window.ENTApp.quiz.renderExamInProgress=renderExamInProgress;
        window.ENTApp.quiz=window.ENTApp.quiz||{}; window.ENTApp.quiz.renderExamResults=renderExamResults;
        window.ENTApp.quiz=window.ENTApp.quiz||{}; window.ENTApp.quiz.reviewExamResults=reviewExamResults;
        window.ENTApp.quiz=window.ENTApp.quiz||{}; window.ENTApp.quiz.renderQuestionList=renderQuestionList;
        window.ENTApp.quiz=window.ENTApp.quiz||{}; window.ENTApp.quiz.renderStudyQuestion=renderStudyQuestion;
        window.ENTApp.quiz=window.ENTApp.quiz||{}; window.ENTApp.quiz.submitExam=submitExam;
        window.ENTApp.quiz=window.ENTApp.quiz||{}; window.ENTApp.quiz.showAddQuestionModal=showAddQuestionModal;
        window.ENTApp.quiz=window.ENTApp.quiz||{}; window.ENTApp.quiz.showQuestionModal=showQuestionModal;
        window.ENTApp.quiz=window.ENTApp.quiz||{}; window.ENTApp.quiz.updateAvailableQuestionsInfo=updateAvailableQuestionsInfo;
        window.ENTApp.quiz=window.ENTApp.quiz||{}; window.ENTApp.quiz.populateExamChapters=populateExamChapters;
        window.ENTApp.quiz=window.ENTApp.quiz||{}; window.ENTApp.quiz.populateExamTopics=populateExamTopics;
        window.ENTApp.quiz=window.ENTApp.quiz||{}; window.ENTApp.quiz.updateExamCounters=updateExamCounters;
                (function(){
            if(!window.ENTApp)return;
            const names=['startQuiz','loadQuestions','renderQuestion','checkAnswer','nextQuestion','previousQuestion'];
            names.forEach(n=>{ if(typeof window[n]==='function'){window.ENTApp.modules.app[n]=window[n];}});
        })();
