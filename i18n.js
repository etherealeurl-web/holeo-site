// i18n – FR/EN/KO language switcher for Holéo
(function () {
    const translations = {
        en: {
            // Banner
            'banner.text1': '<strong>Holéo:</strong> 100% plant-based butter alternative',
            'banner.text2': '<strong>Holéo:</strong> proudly made in France \ud83c\uddeb\ud83c\uddf7',
            'banner.text3': '<strong>Holéo:</strong> more practical than butter',

            // Nav
            'nav.product': 'Our product',
            'nav.recipes': 'Our recipes',
            'nav.company': 'Family business',
            'nav.find': 'Where to find us?',

            // Hero
            'hero.badge': 'NEW',
            'hero.title': '<strong>The 100% plant-based & delicious butter alternative</strong>',
            'hero.feat1': 'Plant-based oil with a <strong>butter taste</strong>, 100% natural',
            'hero.feat2': 'Perfect for <strong>cooking, baking and seasoning</strong>',
            'hero.feat3': 'Sweet or savoury, hot or cold: <strong>it adapts to all your recipes</strong>',

            // Benefits bar
            'benefits.natural': '100% natural<br class="mobile-br"> and plant-based',
            'benefits.ingredients': 'Only<br class="mobile-br"> 3 ingredients',
            'benefits.france': 'Made<br class="mobile-br"> in France',

            // Product description
            'product.title': 'The oil that\'s not<br><span class="underline"><strong>just for show</strong></span>',
            'product.feat1': 'Blend of <strong class="text-green">sunflower and rapeseed</strong> oils with natural flavouring',
            'product.feat2': 'No salt, no lactose, no gluten, no palm oil',
            'product.feat3': 'Source of <strong>omega-3</strong> (rapeseed) and <strong>omega-6</strong> (sunflower)',
            'product.feat4': 'No preservatives, suitable for <strong>vegans</strong>',

            // Product details accordion
            'details.tab1': 'Product details and usage',
            'details.content1': '<p>Holéo is <strong>neither butter nor margarine</strong>. It\'s a plant-based oil with a butter taste, designed to replace butter in everyday cooking.</p><p>Thanks to its natural flavouring, Holéo brings <strong>the taste of butter</strong> to your dishes without the drawbacks of animal fats. It keeps for <strong>12 months sealed</strong> and <strong>3 months after opening</strong>, at room temperature.</p><p>No salt, no lactose, no gluten, no palm oil and no preservatives. Suitable for <strong>vegans</strong> and those with lactose intolerance.</p><p>A natural source of <strong>omega-3</strong> (rapeseed) and <strong>omega-6</strong> (sunflower), Holéo withstands high cooking temperatures without burning.</p>',
            'details.tab2': 'Ingredients and allergens',
            'details.content2': '<p><strong>Ingredients:</strong> refined sunflower oil (France or EU), refined rapeseed oil (France or EU), natural flavouring (EU).</p><p><strong>Allergens:</strong> may contain traces of <strong>tree nuts</strong> and <strong>sesame seeds</strong>. Lactose-free, gluten-free.</p>',
            'details.tab3': 'Nutritional values',

            // Practical section
            'practical.title': 'Super <span class="underline"><strong>practical</strong></span> every day',
            'practical.banner': '250ml = 400g of melted butter',
            'practical.l1_title': 'Always liquid',
            'practical.l1_desc': 'Ready to use in a second, no waiting needed.',
            'practical.l2_title': 'Room temperature',
            'practical.l2_desc': 'Zero fridge. Holéo lives in your cupboard.',
            'practical.l3_title': 'Precise dosing',
            'practical.l3_desc': 'Pour to the millilitre, without wasting a gram.',
            'practical.r1_title': 'Doesn\'t burn',
            'practical.r1_desc': 'Withstands high temperatures without smoke.',
            'practical.r2_title': '12 months shelf life',
            'practical.r2_desc': '12 months sealed, 3 months opened. Much more than butter.',
            'practical.r3_title': 'Up to -40% fat',
            'practical.r3_desc': 'In baking, less fat for an equivalent result.',

            // Usage section
            'usage.title': 'And it can be used<br><span class="underline"><strong>everywhere!</strong></span>',
            'usage.salad': 'Season<br>and dress',
            'usage.pan': 'Pan-fry<br>and sear',
            'usage.cupcake': 'Cook<br>and bake',
            'usage.airfryer': 'Perfect for<br>your Airfryer',

            // Recipes
            'recipe.haricots_title': 'Green beans with parsley',
            'recipe.haricots_desc': 'Steam the green beans. At the end of cooking, add a drizzle of Holéo with garlic and fresh parsley. Simple and delicious.',
            'recipe.roux_title': 'Roux',
            'recipe.roux_desc': 'Heat Holéo over low heat, stir in the flour. Mix until you get a smooth, golden roux.',
            'recipe.brioches_title': 'Brioche',
            'recipe.brioches_desc': 'Replace butter with Holéo in your brioche dough. Use less fat for soft, fragrant brioches.',
            'recipe.boulettes_title': 'Golden meatballs',
            'recipe.boulettes_desc': 'Form your meatballs, then brown them in Holéo over medium heat. Turn regularly for even, crispy cooking.',
            'recipe.crepes_title': 'Gourmet pancakes',
            'recipe.crepes_desc': 'Replace melted butter with Holéo in your pancake batter for a soft, fragrant result. Top as you like!',
            'recipe.pates_title': 'Childhood pasta',
            'recipe.pates_desc': 'Cook your pasta, drain and add Holéo. Season with salt and pepper and serve immediately. Simple and comforting.',
            'recipe.puree_title': 'Classic mash',
            'recipe.puree_desc': 'Mash your cooked potatoes with milk and stir in Holéo for a smooth and flavourful purée.',
            'recipe.semoule_title': 'Savoury semolina',
            'recipe.semoule_desc': 'Pour semolina into boiling salted water, stir in Holéo at the end. A quick and tasty side dish.',
            'recipe.riz_title': 'Gourmet rice',
            'recipe.riz_desc': 'At the end of cooking, add Holéo and fresh herbs to your rice. A fragrant, melting side dish.',
            'recipe.mayo_title': 'Gourmet mayonnaise',
            'recipe.mayo_desc': 'Whisk an egg yolk with mustard, then drizzle in Holéo. A light and flavourful mayo.',
            'recipe.hollandaise_title': 'Hollandaise sauce',
            'recipe.hollandaise_desc': 'Whisk egg yolks over a bain-marie, stir in Holéo and a squeeze of lemon. Silky and lighter.',
            'recipe.cakesale_title': 'Olive & cheese savoury cake',
            'recipe.cakesale_desc': 'Mix eggs, Holéo, flour and baking powder. Add cheese and olives. Bake 45 min at 180°C.',
            'recipe.painbrioche_title': 'Herb brioche bread',
            'recipe.painbrioche_desc': 'Knead flour, eggs and yeast, work in Holéo with cheese and fresh herbs. Golden and fluffy.',
            'recipe.legumes_title': 'Roasted vegetables',
            'recipe.legumes_desc': 'Toss your vegetables with Holéo and herbs, roast 30 min at 200°C. Tender and flavourful.',
            'recipe.madeleines_title': 'Soft madeleines',
            'recipe.madeleines_desc': 'Whisk eggs and sugar, add honey, vanilla and Holéo. Bake 10 min at 200°C for perfect madeleines.',
            'recipe.cakemarbre_title': 'Marble cake',
            'recipe.cakemarbre_desc': 'Make a batter with Holéo, split in two: vanilla and cocoa. Layer and bake for 40 min.',

            // Comparison
            'comp.title': 'It\'s not butter.<br>Nor margarine. <span class="underline"><strong>It\'s Holéo</strong></span>',
            'comp.margarine': 'Margarine',
            'comp.m1': '<strong>Plant</strong>-based',
            'comp.m2': '<strong>Hydrogenated oils</strong>',
            'comp.m3': '<strong>Little butter taste</strong>',
            'comp.m4': '<strong>Solid</strong>',
            'comp.h1': '<strong>Plant</strong>-based',
            'comp.h2': '<strong>Cholesterol-free</strong>',
            'comp.h3': '<strong>Room temperature</strong>',
            'comp.h4': 'Long shelf life <strong>(12 months)</strong>',
            'comp.h5': '<strong>Butter taste</strong>',
            'comp.beurre': 'Butter',
            'comp.b1': '<strong>Animal</strong>-based',
            'comp.b2': '<strong>Bad cholesterol</strong>',
            'comp.b3': '<strong>Requires refrigeration</strong>',
            'comp.b4': '<strong>Short shelf life</strong>',

            // Story
            'story.title': 'The result of a partnership<br>between <span class="underline underline-first"><strong>Food Ingredients</strong></span><br>and <span class="underline underline-second"><strong>Huilerie de Lapalisse</strong></span>',
            'story.p1': 'Holéo was born from the meeting of <strong>two French family businesses</strong>: Food Ingredients, specialists in flavourings and flavoured oils, and Huilerie de Lapalisse, producers of vegetable oils for over a century.',
            'story.p2': 'Together, they developed a <strong>simple and delicious alternative</strong> to butter, combining expertise in natural flavourings and oil-making know-how.',
            'story.fi_desc': 'Flavoured oils specialist since 1989',
            'story.huilerie_name': 'Huilerie de Lapalisse',
            'story.huilerie_desc': 'Family business since 1898',

            // Values
            'values.title': 'With a composition<br>that respects <span class="underline"><strong>our values</strong></span>',

            // Pro
            'pro.title': 'Are you a<br><span class="underline"><strong>professional?</strong></span>',
            'pro.desc': 'Holéo also comes in professional format, adapted for restaurants, bakeries and commercial kitchens.',
            'pro.feat1': '<strong>10L container</strong> format for professionals',
            'pro.feat2': 'Versatile: <strong>cooking, roasting and baking</strong>',
            'pro.feat3': '<strong>Up to 40% less fat</strong> in baking',
            'pro.feat4': 'Long shelf life <strong>without refrigeration</strong>',
            'pro.contact': 'Contact us',

            // FAQ
            'faq.title': '<span class="underline"><strong>Still here?</strong></span> You must have<br>plenty more questions!',
            'faq.q1': 'What exactly is Holéo?',
            'faq.a1': '<p>Holéo is a plant-based oil with a butter taste, made from just <strong>3 natural ingredients</strong>. It\'s <strong>neither butter nor margarine</strong>: it\'s a 100% plant-based alternative, designed to replace butter in cooking without its drawbacks (cholesterol, cold storage, lactose).</p>',
            'faq.q2': 'What is Holéo made of?',
            'faq.a2': '<p>Holéo contains only <strong>3 ingredients</strong>: refined sunflower oil, refined rapeseed oil and natural flavouring. That\'s it. No salt, no lactose, no gluten, no palm oil and no preservatives. Suitable for <strong>vegans</strong> and those with lactose intolerance.</p>',
            'faq.q3': 'How do I use Holéo in cooking?',
            'faq.a3': '<p>Holéo replaces butter in all uses: <strong>cooking, roasting, baking, seasoning</strong> and even in your Airfryer. In baking, you can use <strong>up to 40% less fat</strong> compared to butter. Holéo withstands high temperatures without burning or smoking.</p>',
            'faq.q4': 'How do I store Holéo?',
            'faq.a4': '<p>Holéo keeps for <strong>12 months sealed</strong> and <strong>3 months after opening</strong>, at room temperature. No refrigeration needed: simply store it in your cupboard, away from light.</p>',
            'faq.q5': 'Where can I find Holéo?',
            'faq.a5': '<p>Holéo is available in <strong>supermarkets</strong> and at <strong>specialist distributors</strong> in France. Click "Where to find us?" to locate the nearest point of sale.</p>',
            'faq.q6': 'What are the nutritional values?',
            'faq.a6': '<p>Per 100 ml: energy value <strong>3404 kJ (828 kcal)</strong>, fats 92 g of which 8.4 g saturated fatty acids, 44 g monounsaturated and 40 g polyunsaturated. Thanks to the sunflower-rapeseed blend, Holéo is naturally a source of <strong>unsaturated fatty acids</strong> (omega-3 and omega-6), which contribute to maintaining normal cholesterol levels.</p>',

            // Instagram
            'insta.title': 'Follow us on <span class="underline"><strong>Instagram</strong></span>',
            'insta.desc': 'Recipes, behind-the-scenes and gourmet ideas: join our community.',

            // Footer
            'footer.cta_title': 'Want to try it?',
            'footer.cta_desc': 'Find Holéo in the nearest store to you.',
            'footer.cta_btn': 'Where to find us?',
            'footer.brand_desc': 'Plant-based oil with a butter taste, 100% natural. Made in France by two family businesses.',
            'footer.col1_title': 'Product',
            'footer.col1_l1': 'Our product',
            'footer.col1_l2': 'Our recipes',
            'footer.col1_l3': 'Our story',
            'footer.col2_title': 'Information',
            'footer.col2_l1': 'Legal notice',
            'footer.col2_l2': 'Privacy policy',
            'footer.col2_l3': 'T&Cs',
            'footer.copyright': '&copy; 2025 Holéo - Food Ingredients. All rights reserved.',

            // Contact bubble
            'contact.bubble': 'Got a question?',
            'contact.title': 'Got a question?',
            'contact.name': 'Your name',
            'contact.email': 'Your email',
            'contact.message': 'Your message...',
            'contact.send': 'Send',

            // Cookie consent
            'cookie.recipe_title': 'Our cookie recipe',
            'cookie.recipe_text': '<strong>Ingredients:</strong> Flour 150g · Brown sugar 50g · Egg 1x · <strong>Holéo 60ml</strong> · Chocolate chips 80g · Crushed hazelnuts 50g · Baking powder ½ sachet<br><strong>Preparation:</strong> Preheat to 180°C. Mix egg + sugar. Add Holéo, flour, baking powder. Fold in chips and hazelnuts. Shape into mounds, bake 12 min.',
            'cookie.title': '🍪 This site uses cookies',
            'cookie.text': 'We use cookies to improve your experience and analyse traffic.',
            'cookie.privacy': 'Privacy policy',
            'cookie.privacy_text': 'We use essential cookies for the site to function properly, as well as analytical cookies to understand how you interact with it. No personal data is shared with third parties for advertising purposes.',
            'cookie.manage': 'Manage preferences',
            'cookie.manage_text': '<strong>Essential cookies:</strong> required for the site to work (always active).<br><strong>Analytical cookies:</strong> help us improve the site by analysing its usage.',
            'cookie.refuse': 'Essentials only',
            'cookie.accept': 'Accept all',
        },
        ko: {
            // Banner
            'banner.text1': '<strong>Holéo:</strong> 100% 식물성 버터 대안',
            'banner.text2': '<strong>Holéo:</strong> 프랑스에서 자랑스럽게 제조 \ud83c\uddeb\ud83c\uddf7',
            'banner.text3': '<strong>Holéo:</strong> 버터보다 더 실용적',

            // Nav
            'nav.product': '제품 소개',
            'nav.recipes': '레시피',
            'nav.company': '가족 기업',
            'nav.find': '판매처 찾기',

            // Hero
            'hero.badge': '신제품',
            'hero.title': '<strong>100% 식물성 & 맛있는 버터 대안</strong>',
            'hero.feat1': '<strong>버터 맛</strong> 식물성 오일, 100% 천연',
            'hero.feat2': '<strong>요리, 베이킹, 드레싱</strong>에 이상적',
            'hero.feat3': '달콤한 것도 짭짤한 것도, 뜨겁거나 차갑거나: <strong>모든 레시피에 적합합니다</strong>',

            // Benefits bar
            'benefits.natural': '100% 천연<br class="mobile-br"> 식물성',
            'benefits.ingredients': '단<br class="mobile-br"> 3가지 원료',
            'benefits.france': '프랑스<br class="mobile-br"> 제조',

            // Product description
            'product.title': '단순한 오일이<br><span class="underline"><strong>아닙니다</strong></span>',
            'product.feat1': '<strong class="text-green">해바라기유와 유채유</strong> 블렌드에 천연 향료 첨가',
            'product.feat2': '소금, 유당, 글루텐, 팜유 무첨가',
            'product.feat3': '<strong>오메가-3</strong>(유채)와 <strong>오메가-6</strong>(해바라기)의 원천',
            'product.feat4': '방부제 무첨가, <strong>비건</strong> 적합',

            // Product details accordion
            'details.tab1': '제품 상세 및 사용법',
            'details.content1': '<p>Holéo는 <strong>버터도 마가린도 아닙니다</strong>. 일상 요리에서 버터를 대체하기 위해 만들어진 버터 맛 식물성 오일입니다.</p><p>천연 향료 덕분에 Holéo는 동물성 지방의 단점 없이 요리에 <strong>버터의 맛</strong>을 더합니다. <strong>밀봉 시 12개월</strong>, <strong>개봉 후 3개월</strong> 상온 보관이 가능합니다.</p><p>소금, 유당, 글루텐, 팜유, 방부제 무첨가. <strong>비건</strong> 및 유당 불내증 환자에게 적합합니다.</p><p><strong>오메가-3</strong>(유채)와 <strong>오메가-6</strong>(해바라기)의 천연 공급원으로, Holéo는 타지 않고 높은 조리 온도를 견딥니다.</p>',
            'details.tab2': '원재료 및 알레르기 유발 물질',
            'details.content2': '<p><strong>원재료:</strong> 정제 해바라기유(프랑스 또는 EU), 정제 유채유(프랑스 또는 EU), 천연 향료(EU).</p><p><strong>알레르기 유발 물질:</strong> <strong>견과류</strong> 및 <strong>참깨</strong> 흔적이 포함될 수 있음. 유당 무함유, 글루텐 무함유.</p>',
            'details.tab3': '영양 정보',

            // Practical section
            'practical.title': '매일 매우 <span class="underline"><strong>실용적</strong></span>',
            'practical.banner': '250ml = 녹인 버터 400g',
            'practical.l1_title': '항상 액체 상태',
            'practical.l1_desc': '1초 만에 바로 사용 가능, 기다릴 필요 없습니다.',
            'practical.l2_title': '상온 보관',
            'practical.l2_desc': '냉장고 불필요. Holéo는 찬장에 보관하세요.',
            'practical.l3_title': '정밀한 계량',
            'practical.l3_desc': '밀리리터 단위로 정확하게, 낭비 없이.',
            'practical.r1_title': '타지 않음',
            'practical.r1_desc': '연기 없이 높은 온도를 견딥니다.',
            'practical.r2_title': '12개월 유통기한',
            'practical.r2_desc': '밀봉 12개월, 개봉 3개월. 버터보다 훨씬 깁니다.',
            'practical.r3_title': '지방 최대 -40%',
            'practical.r3_desc': '베이킹 시 더 적은 지방으로 동일한 결과.',

            // Usage section
            'usage.title': '어디에나<br><span class="underline"><strong>사용 가능!</strong></span>',
            'usage.salad': '양념<br>& 드레싱',
            'usage.pan': '볶음<br>& 구이',
            'usage.cupcake': '요리<br>& 베이킹',
            'usage.airfryer': '에어프라이어<br>에 최적',

            // Recipes
            'recipe.haricots_title': '파슬리 녹두 볶음',
            'recipe.haricots_desc': '녹두를 찐 후, 마지막에 Holéo와 마늘, 신선한 파슬리를 뿌려주세요. 간단하고 맛있습니다.',
            'recipe.roux_title': '루',
            'recipe.roux_desc': 'Holéo를 약불에 가열하고 밀가루를 넣어 저어주세요. 부드럽고 황금빛 루가 될 때까지 섞어주세요.',
            'recipe.brioches_title': '브리오슈',
            'recipe.brioches_desc': '브리오슈 반죽에서 버터를 Holéo로 대체하세요. 더 적은 지방으로 부드럽고 향기로운 브리오슈를 만들어보세요.',
            'recipe.boulettes_title': '황금빛 미트볼',
            'recipe.boulettes_desc': '미트볼을 만든 후 Holéo로 중불에서 노릇하게 구워주세요. 균일하고 바삭한 조리를 위해 자주 뒤집어주세요.',
            'recipe.crepes_title': '고메 크레이프',
            'recipe.crepes_desc': '크레이프 반죽에서 녹인 버터를 Holéo로 대체하면 부드럽고 향기로운 결과를 얻을 수 있습니다. 원하는 대로 토핑하세요!',

            // Comparison
            'comp.title': '버터가 아닙니다.<br>마가린도 아닙니다. <span class="underline"><strong>Holéo입니다</strong></span>',
            'comp.margarine': '마가린',
            'comp.m1': '<strong>식물성</strong> 원료',
            'comp.m2': '<strong>수소화 오일</strong>',
            'comp.m3': '<strong>버터 맛 부족</strong>',
            'comp.m4': '<strong>고체</strong>',
            'comp.h1': '<strong>식물성</strong> 원료',
            'comp.h2': '<strong>콜레스테롤 무함유</strong>',
            'comp.h3': '<strong>상온 보관</strong>',
            'comp.h4': '긴 유통기한 <strong>(12개월)</strong>',
            'comp.h5': '<strong>버터 맛</strong>',
            'comp.beurre': '버터',
            'comp.b1': '<strong>동물성</strong> 원료',
            'comp.b2': '<strong>나쁜 콜레스테롤</strong>',
            'comp.b3': '<strong>냉장 보관 필요</strong>',
            'comp.b4': '<strong>짧은 유통기한</strong>',

            // Story
            'story.title': '<span class="underline underline-first"><strong>Food Ingredients</strong></span>와<br><span class="underline underline-second"><strong>Huilerie de Lapalisse</strong></span>의<br>파트너십의 결과',
            'story.p1': 'Holéo는 <strong>두 프랑스 가족 기업</strong>의 만남에서 탄생했습니다: 향료 및 향유 전문 Food Ingredients와 100년 이상 식물성 오일을 생산해 온 Huilerie de Lapalisse.',
            'story.p2': '두 기업이 함께 천연 향료 전문 지식과 제유 노하우를 결합하여 버터의 <strong>간단하고 맛있는 대안</strong>을 개발했습니다.',
            'story.fi_desc': '1989년 이래 향유 전문',
            'story.huilerie_name': 'Huilerie de Lapalisse',
            'story.huilerie_desc': '1898년 이래 가족 기업',

            // Values
            'values.title': '<span class="underline"><strong>우리의 가치</strong></span>를<br>존중하는 조성',

            // Pro
            'pro.title': '<span class="underline"><strong>전문가</strong></span><br>이신가요?',
            'pro.desc': 'Holéo는 레스토랑, 베이커리, 단체 급식에 적합한 전문가용 포맷도 있습니다.',
            'pro.feat1': '전문가용 <strong>10L 용기</strong> 포맷',
            'pro.feat2': '다용도: <strong>조리, 로스팅, 베이킹</strong>',
            'pro.feat3': '베이킹 시 <strong>지방 최대 40% 감소</strong>',
            'pro.feat4': '<strong>냉장 없이</strong> 긴 유통기한',
            'pro.contact': '문의하기',

            // FAQ
            'faq.title': '<span class="underline"><strong>아직 여기?</strong></span> 질문이<br>더 있으시죠!',
            'faq.q1': 'Holéo란 정확히 무엇인가요?',
            'faq.a1': '<p>Holéo는 단 <strong>3가지 천연 원료</strong>로 만든 버터 맛 식물성 오일입니다. <strong>버터도 마가린도 아닌</strong> 100% 식물성 대안으로, 콜레스테롤, 냉장 보관, 유당 등의 단점 없이 요리에서 버터를 대체할 수 있습니다.</p>',
            'faq.q2': 'Holéo의 성분은 무엇인가요?',
            'faq.a2': '<p>Holéo는 <strong>3가지 원료</strong>만 포함합니다: 정제 해바라기유, 정제 유채유, 천연 향료. 이게 전부입니다. 소금, 유당, 글루텐, 팜유, 방부제 무첨가. <strong>비건</strong> 및 유당 불내증 환자에게 적합합니다.</p>',
            'faq.q3': '요리에 Holéo를 어떻게 사용하나요?',
            'faq.a3': '<p>Holéo는 모든 용도에서 버터를 대체합니다: <strong>조리, 로스팅, 베이킹, 드레싱</strong> 그리고 에어프라이어에서도. 베이킹 시 버터 대비 <strong>지방 최대 40% 감소</strong> 가능. Holéo는 타거나 연기 나지 않고 높은 온도를 견딥니다.</p>',
            'faq.q4': 'Holéo는 어떻게 보관하나요?',
            'faq.a4': '<p>Holéo는 <strong>밀봉 시 12개월</strong>, <strong>개봉 후 3개월</strong> 상온 보관이 가능합니다. 냉장 불필요: 빛을 피해 찬장에 보관하세요.</p>',
            'faq.q5': 'Holéo는 어디서 구매할 수 있나요?',
            'faq.a5': '<p>Holéo는 프랑스의 <strong>대형 마트</strong>와 <strong>전문 유통업체</strong>에서 구매할 수 있습니다. "판매처 찾기"를 클릭하여 가장 가까운 매장을 찾아보세요.</p>',
            'faq.q6': '영양 정보는 무엇인가요?',
            'faq.a6': '<p>100ml 기준: 에너지 <strong>3404 kJ (828 kcal)</strong>, 지방 92g 중 포화지방산 8.4g, 단일불포화 44g, 다가불포화 40g. 해바라기-유채 블렌드 덕분에 Holéo는 정상 콜레스테롤 수치 유지에 기여하는 <strong>불포화 지방산</strong>(오메가-3, 오메가-6)의 천연 공급원입니다.</p>',

            // Instagram
            'insta.title': '<span class="underline"><strong>Instagram</strong></span>에서 팔로우하세요',
            'insta.desc': '레시피, 비하인드, 미식 아이디어: 커뮤니티에 함께하세요.',

            // Footer
            'footer.cta_title': '맛보고 싶으신가요?',
            'footer.cta_desc': '가까운 매장에서 Holéo를 찾아보세요.',
            'footer.cta_btn': '판매처 찾기',
            'footer.brand_desc': '버터 맛 식물성 오일, 100% 천연. 두 가족 기업이 프랑스에서 제조.',
            'footer.col1_title': '제품',
            'footer.col1_l1': '제품 소개',
            'footer.col1_l2': '레시피',
            'footer.col1_l3': '우리의 이야기',
            'footer.col2_title': '정보',
            'footer.col2_l1': '법적 고지',
            'footer.col2_l2': '개인정보 보호정책',
            'footer.col2_l3': '이용약관',
            'footer.copyright': '&copy; 2025 Holéo - Food Ingredients. 모든 권리 보유.',

            // Contact bubble
            'contact.bubble': '질문이 있으신가요?',
            'contact.title': '질문이 있으신가요?',
            'contact.name': '이름',
            'contact.email': '이메일',
            'contact.message': '메시지를 입력하세요...',
            'contact.send': '보내기',

            // Cookie consent
            'cookie.recipe_title': '쿠키 레시피',
            'cookie.recipe_text': '<strong>재료:</strong> 밀가루 150g · 황설탕 50g · 달걀 1개 · <strong>Holéo 60ml</strong> · 초콜릿 칩 80g · 으깬 헤이즐넛 50g · 베이킹파우더 ½봉지<br><strong>만드는 법:</strong> 180°C 예열. 달걀 + 설탕 섞기. Holéo, 밀가루, 베이킹파우더 추가. 칩과 헤이즐넛 넣기. 덩어리로 만들어 12분 굽기.',
            'cookie.title': '🍪 이 사이트는 쿠키를 사용합니다',
            'cookie.text': '경험 개선 및 트래픽 분석을 위해 쿠키를 사용합니다.',
            'cookie.privacy': '개인정보 보호정책',
            'cookie.privacy_text': '사이트가 올바르게 작동하기 위한 필수 쿠키와 사용자의 상호작용을 이해하기 위한 분석 쿠키를 사용합니다. 개인 데이터는 광고 목적으로 제3자와 공유되지 않습니다.',
            'cookie.manage': '환경설정 관리',
            'cookie.manage_text': '<strong>필수 쿠키:</strong> 사이트 작동에 필요 (항상 활성).<br><strong>분석 쿠키:</strong> 사용 분석을 통해 사이트 개선에 도움.',
            'cookie.refuse': '필수 쿠키만',
            'cookie.accept': '모두 수락',
        }
    };

    // Store original FR content
    const frContent = {};
    document.querySelectorAll('[data-i18n]').forEach(el => {
        frContent[el.getAttribute('data-i18n')] = el.innerHTML;
    });
    const frPlaceholders = {};
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        frPlaceholders[el.getAttribute('data-i18n-placeholder')] = el.placeholder;
    });

    // Detect language from URL path: /en/, /ko/, or default /fr/
    function getLangFromPath() {
        const path = window.location.pathname;
        if (path.startsWith('/en')) return 'en';
        if (path.startsWith('/ko')) return 'ko';
        return 'fr';
    }

    let currentLang = getLangFromPath();

    function applyLang(lang) {
        currentLang = lang;
        document.documentElement.lang = lang;

        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (lang === 'fr') {
                el.innerHTML = frContent[key];
            } else if (translations[lang] && translations[lang][key]) {
                el.innerHTML = translations[lang][key];
            }
        });

        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            const key = el.getAttribute('data-i18n-placeholder');
            if (lang === 'fr') {
                el.placeholder = frPlaceholders[key];
            } else if (translations[lang] && translations[lang][key]) {
                el.placeholder = translations[lang][key];
            }
        });

        // Update flag
        const flagMap = { fr: 'flag-fr.svg', en: 'flag-en.svg', ko: 'flag-kr.svg' };
        const altMap = { fr: 'FR', en: 'EN', ko: 'KO' };
        const currentFlag = document.getElementById('current-flag');
        if (currentFlag) {
            const basePath = window.location.pathname.match(/^\/(en|ko)\//) ? '../' : '';
            currentFlag.src = basePath + 'assets/images/' + (flagMap[lang] || 'flag-fr.svg');
            currentFlag.alt = altMap[lang] || 'FR';
        }

        // Update active state in dropdown
        document.querySelectorAll('.lang-option').forEach(opt => {
            opt.classList.toggle('active', opt.dataset.lang === lang);
        });
    }

    // Language switcher dropdown
    const langBtn = document.querySelector('.lang-current');
    const langDropdown = document.querySelector('.lang-dropdown');

    if (langBtn && langDropdown) {
        langBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            const isOpen = langDropdown.classList.toggle('open');
            langBtn.setAttribute('aria-expanded', isOpen);
        });

        document.querySelectorAll('.lang-option').forEach(opt => {
            opt.addEventListener('click', () => {
                const lang = opt.dataset.lang;
                // Navigate to the language-specific URL
                const base = window.location.origin;
                if (lang === 'fr') {
                    window.location.href = base + '/';
                } else {
                    window.location.href = base + '/' + lang + '/';
                }
            });
        });

        // Close on outside click
        document.addEventListener('click', () => {
            langDropdown.classList.remove('open');
            langBtn.setAttribute('aria-expanded', 'false');
        });
    }

    // Apply saved language on load
    if (currentLang !== 'fr') {
        applyLang(currentLang);
    }
})();
