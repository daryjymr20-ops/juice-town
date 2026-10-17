const menuData = {
    arabic: {
        title: "منيو بلدة العصير",
        cartTitle: "سلة الطلبات",
        totalText: "المجموع:",
        whatsappBtnText: "💬 إرسال الطلب عبر الواتساب",
        emptyCart: "السلة فارغة...",
        categories: [
            {
                id: "single",
                name: "العصائر الفردية (Single Juice)",
                items: [
                    { name: "برتقال (Orange)", sizes: [{ name: "Kids", price: 7, calories: "45 سعرة" }, { name: "صغير", price: 9, calories: "N/A" }, { name: "وسط", price: 11, calories: "N/A" }, { name: "لتر", price: 19, calories: "N/A" }, { name: "لتر ونصف", price: 28, calories: "N/A" }] },
                    { name: "ليمون (Lemon)", sizes: [{ name: "Kids", price: 7, calories: "120.86 سعرة" }, { name: "صغير", price: 9, calories: "N/A" }, { name: "وسط", price: 11, calories: "N/A" }, { name: "لتر", price: 19, calories: "N/A" }, { name: "لتر ونصف", price: 28, calories: "N/A" }] },
                    { name: "مانجو (Mango)", sizes: [{ name: "Kids", price: 7, calories: "80.5 سعرة" }, { name: "صغير", price: 9, calories: "N/A" }, { name: "وسط", price: 11, calories: "N/A" }, { name: "لتر", price: 19, calories: "N/A" }, { name: "لتر ونصف", price: 28, calories: "N/A" }] },
                    { name: "كوكتيل (Cocktail)", sizes: [{ name: "Kids", price: 7, calories: "90.84 سعرة" }, { name: "صغير", price: 9, calories: "N/A" }, { name: "وسط", price: 11, calories: "N/A" }, { name: "لتر", price: 19, calories: "N/A" }, { name: "لتر ونصف", price: 28, calories: "N/A" }] },
                    { name: "فراولة (Strawberry)", sizes: [{ name: "Kids", price: 7, calories: "50.4 سعرة" }, { name: "صغير", price: 9, calories: "N/A" }, { name: "وسط", price: 11, calories: "N/A" }, { name: "لتر", price: 19, calories: "N/A" }, { name: "لتر ونصف", price: 28, calories: "N/A" }] },
                    { name: "جوافة (Guava)", sizes: [{ name: "Kids", price: 7, calories: "84.65 سعرة" }, { name: "صغير", price: 9, calories: "N/A" }, { name: "وسط", price: 11, calories: "N/A" }, { name: "لتر", price: 19, calories: "N/A" }, { name: "لتر ونصف", price: 28, calories: "N/A" }] },
                    { name: "أناناس (Pineapple)", sizes: [{ name: "Kids", price: 7, calories: "97.51 سعرة" }, { name: "صغير", price: 9, calories: "N/A" }, { name: "وسط", price: 11, calories: "N/A" }, { name: "لتر", price: 19, calories: "N/A" }, { name: "لتر ونصف", price: 28, calories: "N/A" }] },
                    { name: "أفوكادو (Avocado)", sizes: [{ name: "Kids", price: 7, calories: "177.13 سعرة" }, { name: "صغير", price: 9, calories: "N/A" }, { name: "وسط", price: 11, calories: "N/A" }, { name: "لتر", price: 19, calories: "N/A" }, { name: "لتر ونصف", price: 28, calories: "N/A" }] },
                    { name: "رمان (Pomegranate)", sizes: [{ name: "Kids", price: 7, calories: "83.6 سعرة" }, { name: "صغير", price: 9, calories: "N/A" }, { name: "وسط", price: 11, calories: "N/A" }, { name: "لتر", price: 19, calories: "N/A" }, { name: "لتر ونصف", price: 28, calories: "N/A" }] },
                    { name: "شمام (Melon)", sizes: [{ name: "Kids", price: 7, calories: "40.7 سعرة" }, { name: "صغير", price: 9, calories: "N/A" }, { name: "وسط", price: 11, calories: "N/A" }, { name: "لتر", price: 19, calories: "N/A" }, { name: "لتر ونصف", price: 28, calories: "N/A" }] },
                    { name: "موز (Banana)", sizes: [{ name: "Kids", price: 7, calories: "125 سعرة" }, { name: "صغير", price: 9, calories: "N/A" }, { name: "وسط", price: 11, calories: "N/A" }, { name: "لتر", price: 19, calories: "N/A" }, { name: "لتر ونصف", price: 28, calories: "N/A" }] },
                    { name: "جزر (Carrot)", sizes: [{ name: "Kids", price: 7, calories: "41.22 سعرة" }, { name: "صغير", price: 9, calories: "N/A" }, { name: "وسط", price: 11, calories: "N/A" }, { name: "لتر", price: 19, calories: "N/A" }, { name: "لتر ونصف", price: 28, calories: "N/A" }] },
                    { name: "توت (Raspberry)", sizes: [{ name: "Kids", price: 7, calories: "75.9 سعرة" }, { name: "صغير", price: 9, calories: "N/A" }, { name: "وسط", price: 11, calories: "N/A" }, { name: "لتر", price: 19, calories: "N/A" }, { name: "لتر ونصف", price: 28, calories: "N/A" }] },
                    { name: "كيوي (Kiwi)", sizes: [{ name: "Kids", price: 7, calories: "60.1 سعرة" }, { name: "صغير", price: 9, calories: "N/A" }, { name: "وسط", price: 11, calories: "N/A" }, { name: "لتر", price: 19, calories: "N/A" }, { name: "لتر ونصف", price: 28, calories: "N/A" }] },
                    { name: "تفاح (Apple)", sizes: [{ name: "Kids", price: 7, calories: "55 سعرة" }, { name: "صغير", price: 9, calories: "N/A" }, { name: "وسط", price: 11, calories: "N/A" }, { name: "لتر", price: 19, calories: "N/A" }, { name: "لتر ونصف", price: 28, calories: "N/A" }] },
                    { name: "عنب (Grape)", sizes: [{ name: "Kids", price: 7, calories: "60 سعرة" }, { name: "صغير", price: 9, calories: "N/A" }, { name: "وسط", price: 11, calories: "N/A" }, { name: "لتر", price: 19, calories: "N/A" }, { name: "لتر ونصف", price: 28, calories: "N/A" }] },
                    { name: "زنجبيل (Ginger)", sizes: [{ name: "Kids", price: 7, calories: "85.93 سعرة" }, { name: "صغير", price: 9, calories: "N/A" }, { name: "وسط", price: 11, calories: "N/A" }, { name: "لتر", price: 19, calories: "N/A" }, { name: "لتر ونصف", price: 28, calories: "N/A" }] },
                    { name: "بطيخ (Watermelon)", sizes: [{ name: "Kids", price: 7, calories: "41 سعرة" }, { name: "صغير", price: 9, calories: "N/A" }, { name: "وسط", price: 11, calories: "N/A" }, { name: "لتر", price: 19, calories: "N/A" }, { name: "لتر ونصف", price: 28, calories: "N/A" }] },
                    { name: "بابايا (Papaya)", sizes: [{ name: "Kids", price: 7, calories: "50.4 سعرة" }, { name: "صغير", price: 9, calories: "N/A" }, { name: "وسط", price: 11, calories: "N/A" }, { name: "لتر", price: 19, calories: "N/A" }, { name: "لتر ونصف", price: 28, calories: "N/A" }] }
                ]
            },
            {
                id: "mixes",
                name: "خلطات بلدة العصير (Juice Town Mixes)",
                items: [
                    { name: "عوار قلب (Awar Gal)", sizes: [{ name: "صغير", price: 12, calories: "153.76 سعرة" }, { name: "وسط", price: 14, calories: "N/A" }, { name: "كبير", price: 20, calories: "N/A" }, { name: "لتر", price: 28, calories: "N/A" }] },
                    { name: "عسولة (Asoola)", sizes: [{ name: "صغير", price: 12, calories: "85.13 سعرة" }, { name: "وسط", price: 14, calories: "N/A" }, { name: "كبير", price: 20, calories: "N/A" }, { name: "لتر", price: 28, calories: "N/A" }] },
                    { name: "عرايسي (Araisy)", sizes: [{ name: "صغير", price: 12, calories: "177.01 سعرة" }, { name: "وسط", price: 14, calories: "N/A" }, { name: "كبير", price: 20, calories: "N/A" }, { name: "لتر", price: 28, calories: "N/A" }] },
                    { name: "أفوكادو مكس (Avocado Mix)", sizes: [{ name: "صغير", price: 12, calories: "193.18 سعرة" }, { name: "وسط", price: 14, calories: "N/A" }, { name: "كبير", price: 20, calories: "N/A" }, { name: "لتر", price: 28, calories: "N/A" }] },
                    { name: "بسيتو (Pacito)", sizes: [{ name: "صغير", price: 12, calories: "100.42 سعرة" }, { name: "وسط", price: 14, calories: "N/A" }, { name: "كبير", price: 20, calories: "N/A" }, { name: "لتر", price: 28, calories: "N/A" }] },
                    { name: "كوكتيل مغربي (Moroccan Cocktail)", sizes: [{ name: "صغير", price: 12, calories: "94.6 سعرة" }, { name: "وسط", price: 14, calories: "N/A" }, { name: "كبير", price: 20, calories: "N/A" }, { name: "لتر", price: 28, calories: "N/A" }] },
                    { name: "أصفهاني (Asfhani)", sizes: [{ name: "صغير", price: 12, calories: "118.07 سعرة" }, { name: "وسط", price: 14, calories: "N/A" }, { name: "كبير", price: 20, calories: "N/A" }, { name: "لتر", price: 28, calories: "N/A" }] },
                    { name: "قوة جبل (Kouwat Jabal)", sizes: [{ name: "صغير", price: 12, calories: "152.59 سعرة" }, { name: "وسط", price: 14, calories: "N/A" }, { name: "كبير", price: 20, calories: "N/A" }, { name: "لتر", price: 28, calories: "N/A" }] },
                    { name: "خلطة البلدة (The Town Mix)", sizes: [{ name: "صغير", price: 12, calories: "78.78 سعرة" }, { name: "وسط", price: 14, calories: "N/A" }, { name: "كبير", price: 20, calories: "N/A" }, { name: "لتر", price: 28, calories: "N/A" }] },
                    { name: "فقر دم (Blood Booster)", sizes: [{ name: "صغير", price: 12, calories: "91.85 سعرة" }, { name: "وسط", price: 14, calories: "N/A" }, { name: "كبير", price: 20, calories: "N/A" }, { name: "لتر", price: 28, calories: "N/A" }] }
                ]
            },
            {
                id: "diet",
                name: "صحة - دايت (Diet & Healthy)",
                items: [
                    { name: "كوكتيل الصحة (Healthy Cocktail)", sizes: [{ name: "صغير", price: 12, calories: "140.42 سعرة" }, { name: "وسط", price: 14, calories: "N/A" }, { name: "كبير", price: 16, calories: "N/A" }] },
                    { name: "روبي تيوس داي(Ruby Tuesday)", sizes: [{ name: "صغير", price: 12, calories: "98.49 سعرة" }, { name: "وسط", price: 14, calories: "N/A" }, { name: "كبير", price: 16, calories: "N/A" }] },
                    { name: "رشاقة (Fitness)", sizes: [{ name: "صغير", price: 12, calories: "70.47 سعرة" }, { name: "وسط", price: 14, calories: "N/A" }, { name: "كبير", price: 16, calories: "N/A" }] }
                ]
            },
            {
                id: "shakes",
                name: "ميلك شيكس (Milk Shakes)",
                items: [
                    { name: "نوتيلا (Nutella)", sizes: [{ name: "صغير", price: 14, calories: "141.2 سعرة" }, { name: "كبير", price: 16, calories: "N/A" }] },
                    { name: "اوريو (Oreo)", sizes: [{ name: "صغير", price: 14, calories: "124 سعرة" }, { name: "كبير", price: 16, calories: "N/A" }] },
                    { name: "باونتي (Bounty)", sizes: [{ name: "صغير", price: 14, calories: "96.54 سعرة" }, { name: "كبير", price: 16, calories: "N/A" }] },
                    { name: "كيت كات (KitKat)", sizes: [{ name: "صغير", price: 14, calories: "130.43 سعرة" }, { name: "كبير", price: 16, calories: "N/A" }] },
                    { name: "فيريرو روشيه (Ferrero Rocher)", sizes: [{ name: "صغير", price: 14, calories: "150.95 سعرة" }, { name: "كبير", price: 16, calories: "N/A" }] },
                    { name: "تويكس مكس (Twix Mix)", sizes: [{ name: "صغير", price: 14, calories: "97.24 سعرة" }, { name: "كبير", price: 16, calories: "N/A" }] },
                    { name: "جالاكسي (Galaxy)", sizes: [{ name: "صغير", price: 14, calories: "83.2 سعرة" }, { name: "كبير", price: 16, calories: "N/A" }] },
                    { name: "مارس (Mars)", sizes: [{ name: "صغير", price: 14, calories: "87.41 سعرة" }, { name: "كبير", price: 16, calories: "N/A" }] },
                    { name: "إم آند إمز (M&M's)", sizes: [{ name: "صغير", price: 14, calories: "108.62 سعرة" }, { name: "كبير", price: 16, calories: "N/A" }] },
                    { name: "سنيكرز (Snickers)", sizes: [{ name: "صغير", price: 14, calories: "91.4 سعرة" }, { name: "كبير", price: 16, calories: "N/A" }] }
                ]
            },
            {
                id: "smoothies",
                name: "سموديز (Smoothies)",
                items: [
                    { name: "سمودي بطيخ بالنعناع (Watermelon Mint)", sizes: [{ name: "صغير", price: 10, calories: "84.1 سعرة" }, { name: "كبير", price: 12, calories: "N/A" }] },
                    { name: "سمودي ليمون بالنعناع (Lemon Mint)", sizes: [{ name: "صغير", price: 10, calories: "86.4 سعرة" }, { name: "كبير", price: 12, calories: "N/A" }] },
                    { name: "سمودي رمان (Pomegranate)", sizes: [{ name: "صغير", price: 10, calories: "118.78 سعرة" }, { name: "كبير", price: 12, calories: "N/A" }] },
                    { name: "سمودي فراولة (Strawberry)", sizes: [{ name: "صغير", price: 10, calories: "111.4 سعرة" }, { name: "كبير", price: 12, calories: "N/A" }] }
                ]
            },
            {
                id: "salad",
                name: "سلطة فواكه (Fruit Salad)",
                items: [
                    { name: "صحن صغير (Small Plate)", sizes: [{ name: "قياسي", price: 30, calories: "N/A" }] },
                    { name: "صحن وسط (Medium Plate)", sizes: [{ name: "قياسي", price: 40, calories: "N/A" }] },
                    { name: "صحن كبير (Large Plate)", sizes: [{ name: "قياسي", price: 60, calories: "N/A" }] },
                    { name: "كوب وسط (Medium Cup)", sizes: [{ name: "قياسي", price: 13, calories: "N/A" }] },
                    { name: "كوب كبير (Big Cup)", sizes: [{ name: "قياسي", price: 16, calories: "N/A" }] },
                    { name: "علبة سلطة (Salad Box)", sizes: [{ name: "قياسي", price: 23, calories: "N/A" }] },
                    { name: "علبة سلطة كبار (Salad Box Large)", sizes: [{ name: "قياسي", price: 29, calories: "N/A" }] }
                ]
            }
        ]
    },
    english: {
        title: "Juice Town Menu",
        cartTitle: "Order Summary",
        totalText: "Total:",
        whatsappBtnText: "💬 Send Order via WhatsApp",
        emptyCart: "Cart is empty...",
        categories: [
            {
                id: "single",
                name: "Single Juices (العصائر الفردية)",
                items: [
                    { name: "Orange (برتقال)", sizes: [{ name: "Kids", price: 7, calories: "45 kcal" }, { name: "Small", price: 9, calories: "N/A" }, { name: "Medium", price: 11, calories: "N/A" }, { name: "1 Liter", price: "19", calories: "N/A" }, { name: "1.5 Liter", price: "28", calories: "N/A" }] },
                    { name: "Lemon (ليمون)", sizes: [{ name: "Kids", price: 7, calories: "120 kcal" }, { name: "Small", price: 9, calories: "N/A" }, { name: "Medium", price: 11, calories: "N/A" }, { name: "1 Liter", price: "19", calories: "N/A" }, { name: "1.5 Liter", price: "28", calories: "N/A" }] },
                    { name: "Mango (مانجو)", sizes: [{ name: "Kids", price: 7, calories: "80 kcal" }, { name: "Small", price: 9, calories: "N/A" }, { name: "Medium", price: 11, calories: "N/A" }, { name: "1 Liter", price: "19", calories: "N/A" }, { name: "1.5 Liter", price: "28", calories: "N/A" }] },
                    { name: "Cocktail (كوكتيل)", sizes: [{ name: "Kids", price: 7, calories: "90 kcal" }, { name: "Small", price: 9, calories: "N/A" }, { name: "Medium", price: 11, calories: "N/A" }, { name: "1 Liter", price: "19", calories: "N/A" }, { name: "1.5 Liter", price: "28", calories: "N/A" }] },
                    { name: "Strawberry (فراولة)", sizes: [{ name: "Kids", price: 7, calories: "50 kcal" }, { name: "Small", price: 9, calories: "N/A" }, { name: "Medium", price: 11, calories: "N/A" }, { name: "1 Liter", price: "19", calories: "N/A" }, { name: "1.5 Liter", price: "28", calories: "N/A" }] },
                    { name: "Guava (جوافة)", sizes: [{ name: "Kids", price: 7, calories: "84 kcal" }, { name: "Small", price: 9, calories: "N/A" }, { name: "Medium", price: 11, calories: "N/A" }, { name: "1 Liter", price: "19", calories: "N/A" }, { name: "1.5 Liter", price: "28", calories: "N/A" }] },
                    { name: "Pineapple (أناناس)", sizes: [{ name: "Kids", price: 7, calories: "97 kcal" }, { name: "Small", price: 9, calories: "N/A" }, { name: "Medium", price: 11, calories: "N/A" }, { name: "1 Liter", price: "19", calories: "N/A" }, { name: "1.5 Liter", price: "28", calories: "N/A" }] },
                    { name: "Avocado (أفوكادو)", sizes: [{ name: "Kids", price: 7, calories: "177 kcal" }, { name: "Small", price: 9, calories: "N/A" }, { name: "Medium", price: 11, calories: "N/A" }, { name: "1 Liter", price: "19", calories: "N/A" }, { name: "1.5 Liter", price: "28", calories: "N/A" }] },
                    { name: "Pomegranate (رمان)", sizes: [{ name: "Kids", price: 7, calories: "83 kcal" }, { name: "Small", price: 9, calories: "N/A" }, { name: "Medium", price: 11, calories: "N/A" }, { name: "1 Liter", price: "19", calories: "N/A" }, { name: "1.5 Liter", price: "28", calories: "N/A" }] },
                    { name: "Melon (شمام)", sizes: [{ name: "Kids", price: 7, calories: "40 kcal" }, { name: "Small", price: 9, calories: "N/A" }, { name: "Medium", price: 11, calories: "N/A" }, { name: "1 Liter", price: "19", calories: "N/A" }, { name: "1.5 Liter", price: "28", calories: "N/A" }] },
                    { name: "Banana (موز)", sizes: [{ name: "Kids", price: 7, calories: "125 kcal" }, { name: "Small", price: 9, calories: "N/A" }, { name: "Medium", price: 11, calories: "N/A" }, { name: "1 Liter", price: "19", calories: "N/A" }, { name: "1.5 Liter", price: "28", calories: "N/A" }] },
                    { name: "Carrot (جزر)", sizes: [{ name: "Kids", price: 7, calories: "41 kcal" }, { name: "Small", price: 9, calories: "N/A" }, { name: "Medium", price: 11, calories: "N/A" }, { name: "1 Liter", price: "19", calories: "N/A" }, { name: "1.5 Liter", price: "28", calories: "N/A" }] },
                    { name: "Raspberry (توت)", sizes: [{ name: "Kids", price: 7, calories: "75 kcal" }, { name: "Small", price: 9, calories: "N/A" }, { name: "Medium", price: 11, calories: "N/A" }, { name: "1 Liter", price: "19", calories: "N/A" }, { name: "1.5 Liter", price: "28", calories: "N/A" }] },
                    { name: "Kiwi (كيوي)", sizes: [{ name: "Kids", price: 7, calories: "60 kcal" }, { name: "Small", price: 9, calories: "N/A" }, { name: "Medium", price: 11, calories: "N/A" }, { name: "1 Liter", price: "19", calories: "N/A" }, { name: "1.5 Liter", price: "28", calories: "N/A" }] },
                    { name: "Apple (تفاح)", sizes: [{ name: "Kids", price: 7, calories: "55 kcal" }, { name: "Small", price: 9, calories: "N/A" }, { name: "Medium", price: 11, calories: "N/A" }, { name: "1 Liter", price: "19", calories: "N/A" }, { name: "1.5 Liter", price: "28", calories: "N/A" }] },
                    { name: "Grape (عنب)", sizes: [{ name: "Kids", price: 7, calories: "60 kcal" }, { name: "Small", price: 9, calories: "N/A" }, { name: "Medium", price: 11, calories: "N/A" }, { name: "1 Liter", price: "19", calories: "N/A" }, { name: "1.5 Liter", price: "28", calories: "N/A" }] },
                    { name: "Ginger (زنجبيل)", sizes: [{ name: "Kids", price: 7, calories: "85 kcal" }, { name: "Small", price: 9, calories: "N/A" }, { name: "Medium", price: 11, calories: "N/A" }, { name: "1 Liter", price: "19", calories: "N/A" }, { name: "1.5 Liter", price: "28", calories: "N/A" }] },
                    { name: "Watermelon (بطيخ)", sizes: [{ name: "Kids", price: 7, calories: "41 kcal" }, { name: "Small", price: 9, calories: "N/A" }, { name: "Medium", price: 11, calories: "N/A" }, { name: "1 Liter", price: "19", calories: "N/A" }, { name: "1.5 Liter", price: "28", calories: "N/A" }] },
                    { name: "Papaya (بابايا)", sizes: [{ name: "Kids", price: 7, calories: "50 kcal" }, { name: "Small", price: 9, calories: "N/A" }, { name: "Medium", price: 11, calories: "N/A" }, { name: "1 Liter", price: "19", calories: "N/A" }, { name: "1.5 Liter", price: "28", calories: "N/A" }] }
                ]
            },
            {
                id: "mixes",
                name: "Juice Town Mixes (خلطات بلدة العصير)",
                items: [
                    { name: "Awar Gal (عوار قلب)", sizes: [{ name: "Small", price: 12, calories: "153 kcal" }, { name: "Medium", price: 14, calories: "N/A" }, { name: "Large", price: 20, calories: "N/A" }, { name: "1 Liter", price: 28, calories: "N/A" }] },
                    { name: "Asoola (عسولة)", sizes: [{ name: "Small", price: 12, calories: "85 kcal" }, { name: "Medium", price: 14, calories: "N/A" }, { name: "Large", price: 20, calories: "N/A" }, { name: "1 Liter", price: 28, calories: "N/A" }] },
                    { name: "Araisy (عرايسي)", sizes: [{ name: "Small", price: 12, calories: "177 kcal" }, { name: "Medium", price: 14, calories: "N/A" }, { name: "Large", price: 20, calories: "N/A" }, { name: "1 Liter", price: 28, calories: "N/A" }] },
                    { name: "Avocado Mix (أفوكادو مكس)", sizes: [{ name: "Small", price: 12, calories: "193 kcal" }, { name: "Medium", price: 14, calories: "N/A" }, { name: "Large", price: 20, calories: "N/A" }, { name: "1 Liter", price: 28, calories: "N/A" }] },
                    { name: "Pacito (بسيتو)", sizes: [{ name: "Small", price: 12, calories: "100 kcal" }, { name: "Medium", price: 14, calories: "N/A" }, { name: "Large", price: 20, calories: "N/A" }, { name: "1 Liter", price: 28, calories: "N/A" }] },
                    { name: "Moroccan Cocktail (كوكتيل مغربي)", sizes: [{ name: "Small", price: 12, calories: "94 kcal" }, { name: "Medium", price: 14, calories: "N/A" }, { name: "Large", price: 20, calories: "N/A" }, { name: "1 Liter", price: 28, calories: "N/A" }] },
                    { name: "Asfhani (أصفهاني)", sizes: [{ name: "Small", price: 12, calories: "118 kcal" }, { name: "Medium", price: 14, calories: "N/A" }, { name: "Large", price: 20, calories: "N/A" }, { name: "1 Liter", price: 28, calories: "N/A" }] },
                    { name: "Kouwat Jabal (قوة جبل)", sizes: [{ name: "Small", price: 12, calories: "152 kcal" }, { name: "Medium", price: 14, calories: "N/A" }, { name: "Large", price: 20, calories: "N/A" }, { name: "1 Liter", price: 28, calories: "N/A" }] },
                    { name: "The Town Mix (خلطة البلدة)", sizes: [{ name: "Small", price: 12, calories: "78 kcal" }, { name: "Medium", price: 14, calories: "N/A" }, { name: "Large", price: 20, calories: "N/A" }, { name: "1 Liter", price: 28, calories: "N/A" }] },
                    { name: "Blood Booster (فقر دم)", sizes: [{ name: "Small", price: 12, calories: "91 kcal" }, { name: "Medium", price: 14, calories: "N/A" }, { name: "Large", price: 20, calories: "N/A" }, { name: "1 Liter", price: 28, calories: "N/A" }] }
                ]
            },
            {
                id: "diet",
                name: "Diet & Healthy (صحة - دايت)",
                items: [
                    { name: "Healthy Cocktail (كوكتيل الصحة)", sizes: [{ name: "Small", price: 12, calories: "140 kcal" }, { name: "Medium", price: 14, calories: "N/A" }, { name: "Large", price: 16, calories: "N/A" }] },
                    { name: "Ruby Tuesday (روبي تューズداي)", sizes: [{ name: "Small", price: 12, calories: "98 kcal" }, { name: "Medium", price: 14, calories: "N/A" }, { name: "Large", price: 16, calories: "N/A" }] },
                    { name: "Fitness (رشاقة)", sizes: [{ name: "Small", price: 12, calories: "70 kcal" }, { name: "Medium", price: 14, calories: "N/A" }, { name: "Large", price: 16, calories: "N/A" }] }
                ]
            },
            {
                id: "shakes",
                name: "Milk Shakes (ميلك شيكس)",
                items: [
                    { name: "Nutella (نوتيلا)", sizes: [{ name: "Small", price: 14, calories: "141 kcal" }, { name: "Large", price: 16, calories: "N/A" }] },
                    { name: "Oreo (اوريو)", sizes: [{ name: "Small", price: 14, calories: "124 kcal" }, { name: "Large", price: 16, calories: "N/A" }] },
                    { name: "Bounty (باونتي)", sizes: [{ name: "Small", price: 14, calories: "96 kcal" }, { name: "Large", price: 16, calories: "N/A" }] },
                    { name: "KitKat (كيت كات)", sizes: [{ name: "Small", price: 14, calories: "130 kcal" }, { name: "Large", price: 16, calories: "N/A" }] },
                    { name: "Ferrero Rocher (فيريرو روشيه)", sizes: [{ name: "Small", price: 14, calories: "150 kcal" }, { name: "Large", price: 16, calories: "N/A" }] },
                    { name: "Twix Mix (تويكس مكس)", sizes: [{ name: "Small", price: 14, calories: "97 kcal" }, { name: "Large", price: 16, calories: "N/A" }] },
                    { name: "Galaxy (جالاكسي)", sizes: [{ name: "Small", price: 14, calories: "83 kcal" }, { name: "Large", price: 16, calories: "N/A" }] },
                    { name: "Mars (مارس)", sizes: [{ name: "Small", price: 14, calories: "87 kcal" }, { name: "Large", price: 16, calories: "N/A" }] },
                    { name: "M&M's (إم آند إمز)", sizes: [{ name: "Small", price: 14, calories: "108 kcal" }, { name: "Large", price: 16, calories: "N/A" }] },
                    { name: "Snickers (سنيكرز)", sizes: [{ name: "Small", price: 14, calories: "91 kcal" }, { name: "Large", price: 16, calories: "N/A" }] }
                ]
            },
            {
                id: "smoothies",
                name: "Smoothies (سموديز)",
                items: [
                    { name: "Watermelon Mint Smoothie (سمودي بطيخ بالنعناع)", sizes: [{ name: "Small", price: 10, calories: "84 kcal" }, { name: "Large", price: 12, calories: "N/A" }] },
                    { name: "Lemon Mint Smoothie (سمودي ليمون بالنعناع)", sizes: [{ name: "Small", price: 10, calories: "86 kcal" }, { name: "Large", price: 12, calories: "N/A" }] },
                    { name: "Pomegranate Smoothie (سمودي رمان)", sizes: [{ name: "Small", price: 10, calories: "118 kcal" }, { name: "Large", price: 12, calories: "N/A" }] },
                    { name: "Strawberry Smoothie (سمودي فراولة)", sizes: [{ name: "Small", price: 10, calories: "111 kcal" }, { name: "Large", price: 12, calories: "N/A" }] }
                ]
            },
            {
                id: "salad",
                name: "Fruit Salad (سلطة فواكه)",
                items: [
                    { name: "Small Plate (صحن صغير)", sizes: [{ name: "Standard", price: 30, calories: "N/A" }] },
                    { name: "Medium Plate (صحن وسط)", sizes: [{ name: "Standard", price: 40, calories: "N/A" }] },
                    { name: "Large Plate (صحن كبير)", sizes: [{ name: "Standard", price: 60, calories: "N/A" }] },
                    { name: "Medium Cup (كوب وسط)", sizes: [{ name: "Standard", price: 13, calories: "N/A" }] },
                    { name: "Big Cup (كوب كبير)", sizes: [{ name: "Standard", price: 16, calories: "N/A" }] },
                    { name: "Salad Box (علبة سلطة)", sizes: [{ name: "Standard", price: 23, calories: "N/A" }] },
                    { name: "Salad Box Large (علبة سلطة كبار)", sizes: [{ name: "Standard", price: 29, calories: "N/A" }] }
                ]
            }
        ]
    }
};