document.addEventListener("DOMContentLoaded", function () {
    // ===== Barba Transition
    barba.init({
        transitions: [
            {
                name: "fade-transition",
                leave(data) {
                    return gsap.to(data.current.container, {
                        opacity: 0,
                        duration: 1,
                        ease: "power2.out"
                    });
                },
                enter(data) {
                    return gsap.to(data.next.container, {
                        opacity: 1,
                        duration: 1,
                        ease: "power2.out"
                    });
                }
            }
        ]
    });

    // ===== Plyr Video Setup
    const player = new Plyr('#player');

    const courses = {
        "After Effects": { video: "ad2.mp4" },
        "PowerPoint": { video: "powerpoint.mp4" },
        "Operating System": { video: "os.mp4" }
    };

    const urlParams = new URLSearchParams(window.location.search);
    const courseName = urlParams.get("course") || "After Effects";

    if (courses[courseName]) {
        document.getElementById("course-video").src = courses[courseName].video;
    }

    let savedLang = localStorage.getItem("selectedLang") || "en";

    i18next.init({
        lng: savedLang,
        resources: {
            en: {
                translation: {
                    "After Effects_title": "Master Adobe After Effects",
                    "After Effects_description": "Learn motion graphics and visual effects from scratch to expert level.",
                    "After Effects_price": "$20",
                    "After Effects_lectures": "30 Lectures",
                    "After Effects_learning_title": " What You Will Learn",
                    "After Effects_learning_list": `
 <h5>1- 4 Essential Foundation Lectures</h5>
- Lecture 1:<br> Introduction to the field, difference between editing and motion graphics, required tools, intro to After Effects & UI overview.<br><br>
- Lecture 2:<br> Learning all tools, drawing shapes, and important effects.<br><br>
- Lecture 3:<br> Understanding the timeline, keyframes, and basic animation.<br><br>
- Lecture 4:<br> Advanced animation and using camera for scene transitions.<br><br>
- Lecture 5:<br> Installing powerful plugins for transitions & elements + a simple project using them.<br><br>

 <h5>2- Design 5 Real Projects</h5><br>
- Each project includes 5 lectures.<br>
- Each lecture is 60 minutes.<br><br>
<h5>Project Links:</h5><br>
1- <a href="https://www.facebook.com/ahmedabdellahofficial1" target="_blank"> Project 1</a><br>
2- <a href="https://www.facebook.com/ahmedabdellahofficial1" target="_blank"> Project 2</a><br>
3- <a href="https://dai.ly/x92pab0" target="_blank"> Project 3</a><br>
4- <a href="https://dai.ly/x92paek" target="_blank"> Project 4</a><br>
5- <a href="https://dai.ly/x92pa96" target="_blank"> Project 5</a>
`,
                    "PowerPoint_title": "Master Microsoft PowerPoint",
                    "PowerPoint_description": "Create stunning presentations with advanced PowerPoint techniques.",
                    "PowerPoint_price": "$10",
                    "PowerPoint_lectures": "5 Lectures",

                    "PowerPoint_learning_title": ``,
                    "PowerPoint_learning_list": ``,
                    "Operating System_title": "Operating System Fundamentals",
                    "Operating System_description": "Understand OS concepts, file systems, and process management.",
                    "Operating System_price": "$5",
                    "Operating System_lectures": "10 Lectures",
                    "Operating System_learning_title": ``,
                    "Operating System_learning_list": ``,
                    "enroll": "Enroll Now",
                    "More": "More Courses"
                }
            },
            ar: {
                translation: {
                    "After Effects_title": "احتراف أدوبي أفتر إفكتس",
                    "After Effects_description": "تعلم الرسوم المتحركة والمؤثرات البصرية من الصفر حتى الاحتراف.",
                    "After Effects_price": "20 دولار",
                    "After Effects_lectures": "30 محاضرة",
                    "After Effects_learning_title": "ماذا ستتعلم خلال الكورس",
                    "After Effects_learning_list": `
<h5>١-  ٤ محاضرات أساسيات</h5><br>
- المحاضرة الأولى:<br> مقدمة عن المجال، الفرق بين المونتاج والموشن جرافيك، الأدوات اللازمة، مقدمة عن After Effects، والتعرف على واجهة البرنامج.<br><br>
- المحاضرة الثانية:<br> التعرف على جميع الأدوات، رسم الأشكال، وبعض التأثيرات المهمة.<br><br>
- المحاضرة الثالثة:<br> الخط الزمني، الكي فريمز، وتحريك بسيط.<br><br>
- المحاضرة الرابعة:<br> التعمق في التحريك، استخدام الكاميرا للتنقل بين المشاهد المختلفة.<br><br>
- المحاضرة الخامسة:<br> تثبيت إضافات قوية لعمل انتقالات وعناصر جاهزة + مشروع بسيط باستخدام الإضافة.<br><br>
 <h5> ٢- تصميم أقوى ٥ مشاريع حقيقية تم تقديمهم لشركات وعملاء حول العالم:</h5><br>
- كل مشروع يحتوي على ٥ محاضرات.<br>
- كل محاضرة مدتها ٦٠ دقيقة.<br><br>
<h5>روابط المشاريع:</h5><br>
1- <a href="https://www.facebook.com/ahmedabdellahofficial1" target="_blank">المشروع الأول </a><br>
2- <a href="https://www.facebook.com/ahmedabdellahofficial1" target="_blank">المشروع الثانى </a><br>
3- <a href="https://dai.ly/x92pab0" target="_blank"> المشروع الثالث</a><br>
4- <a href="https://dai.ly/x92paek" target="_blank">المشروع الرابع </a><br>
5- <a href="https://dai.ly/x92pa96" target="_blank"> المشروع الخامس</a> <br><br>
 - المحاضرات مسجلة على درايف بعد الدفع يتم مشاركتها لك <br>
 - يتم اضافتك فى مجموعة المشتركين واتساب لمشاركة الاسئلة والخبرات 
`,
                    "PowerPoint_title": "احتراف مايكروسوفت باوربوينت",
                    "PowerPoint_description": "أنشئ عروضًا تقديمية رائعة باستخدام تقنيات باوربوينت المتقدمة.",
                    "PowerPoint_price": "10 دولار",
                    "PowerPoint_lectures": "5 محاضرات",
                    "PowerPoint_learning_title": ``,
                    "PowerPoint_learning_list": ``,
                    "Operating System_title": "أساسيات أنظمة التشغيل",
                    "Operating System_description": "افهم مفاهيم نظام التشغيل، أنظمة الملفات، وإدارة العمليات.",
                    "Operating System_price": "5 دولار",
                    "Operating System_lectures": "10 محاضرات",

                    "Operating System_learning_title": ``,
                    "Operating System_learning_list": ``,
                    "enroll": "اشترك الآن",
                    "More": "المزيد من الكورسات"
                }
            }
        }
    }, function () {
        updateCourseContent();
    });

    function updateCourseContent() {
        let isArabic = i18next.language === "ar";

        if (courses[courseName]) {
            document.getElementById("course-title").innerText = i18next.t(`${courseName}_title`);
            document.getElementById("course-description").innerText = i18next.t(`${courseName}_description`);
            document.getElementById("course-price").innerText = i18next.t(`${courseName}_price`);
            document.getElementById("course-lectures").innerText = i18next.t(`${courseName}_lectures`);

            const toArabicNumbers = (num) => {
                const arabicNumbers = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];
                return num.toString().replace(/\d/g, digit => arabicNumbers[digit]);
            };

            if (isArabic) {
                document.getElementById("course-price").innerText = toArabicNumbers(i18next.t(`${courseName}_price`));
                document.getElementById("course-lectures").innerText = toArabicNumbers(i18next.t(`${courseName}_lectures`));
            }

            let enrollBtn = document.getElementById("enroll-button");
            enrollBtn.innerText = i18next.t("enroll");
            enrollBtn.style.direction = isArabic ? "rtl" : "ltr";
            enrollBtn.onclick = () => sendWhatsAppMessage(courseName);

            let moreBtn = document.getElementById("more-button");
            moreBtn.innerText = i18next.t("More");
            moreBtn.style.direction = isArabic ? "rtl" : "ltr";

            document.querySelectorAll(".course-info h2, .course-info p").forEach(el => {
                el.style.textAlign = isArabic ? "right" : "left";
            });

            const learningTitle = document.getElementById("learning-title");
            const learningList = document.getElementById("learning-list");
            learningTitle.innerText = i18next.t(`${courseName}_learning_title`);
            learningList.innerHTML = i18next.t(`${courseName}_learning_list`);
            learningTitle.style.textAlign = isArabic ? "right" : "left";
            learningList.style.direction = isArabic ? "rtl" : "ltr";
            learningList.style.textAlign = isArabic ? "right" : "left";
        }
    }

    document.getElementById("toggleLang").addEventListener("click", function () {
        let newLang = i18next.language === "en" ? "ar" : "en";
        localStorage.setItem("selectedLang", newLang);
        i18next.changeLanguage(newLang, updateCourseContent);
        this.textContent = newLang === "en" ? "ع" : "E";
    });

    function sendWhatsAppMessage(courseName) {
        const phoneNumber = "201032210758";
        const message = `أرسل بوابة الدفع للاشتراك في كورس ${i18next.t(`${courseName}_title`)}`;
        const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappURL, "_blank");
    }
});
