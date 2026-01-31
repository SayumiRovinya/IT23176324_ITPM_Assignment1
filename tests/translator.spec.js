import { test, expect } from '@playwright/test';

/* -------------------- Setup -------------------- */

test.beforeEach(async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
});

async function verifyTranslation(page, input, expected) {
  const inputBox = page.locator('textarea[placeholder="Input Your Singlish Text Here."]');
  const outputBox = page.locator(
    'div.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50'
  );

  await inputBox.fill(input);
  await expect(outputBox).toHaveText(expected, { timeout: 20000 });
}

/* ---------------- POSITIVE FUNCTIONAL (1–25) ---------------- */

test('Pos_Fun_001', async ({ page }) => {
  await verifyTranslation(page,
    'suba dhavasak! Oyaa saniipen innavadha?',
    'සුබ දවසක්! ඔයා සනීපෙන් ඉන්නවද?'
  );
});

test('Pos_Fun_002', async ({ page }) => {
  await verifyTranslation(page,
    'poddak inna, mama ennam.',
    'පොඩ්ඩක් ඉන්න, මම එන්නම්.'
  );
});

test('Pos_Fun_003', async ({ page }) => {
  await verifyTranslation(page,
    'mama haemadhaama paasal yanavaa.',
    'මම හැමදාම පාසල් යනවා.'
  );
});

test('Pos_Fun_004', async ({ page }) => {
  await verifyTranslation(page,
    'mama adha kaeemata innee nae.',
    'මම අද කෑමට ඉන්නේ නැ.'
  );
});

test('Pos_Fun_005', async ({ page }) => {
  await verifyTranslation(page,
    'oyaa Colombo AEvidhinna yanne kavadhaadha?',
    'ඔයා Colombo ඇවිදින්න යන්නෙ කවදාද?'
  );
});

test('Pos_Fun_006', async ({ page }) => {
  await verifyTranslation(page,
    'api adha eliyata yamu, eth weather eka hariyata naee; umbrella ekak aran yamu.',
    'අපි අද එලියට යමු, එත් weather එක හරියට නෑ; umbrella එකක් අරන් යමු.'
  );
});

test('Pos_Fun_007', async ({ page }) => {
  await verifyTranslation(page,
    'oyaa call karanavanam kiyanna. mama thaama office ekee innavaa.',
    'ඔයා call කරනවනම් කියන්න. මම තාම office එකේ ඉන්නවා.'
  );
});

test('Pos_Fun_008', async ({ page }) => {
  await verifyTranslation(page,
    'mama iiye raee venakan campus ekee hitiyee',
    'මම ඊයෙ රෑ වෙනකන් campus එකේ හිටියේ'
  );
});

test('Pos_Fun_009', async ({ page }) => {
  await verifyTranslation(page,
    'mama 2026-02-15 dhinayata nivaaduvak dhaanna hithaagena innavaa',
    'මම 2026-02-15 දිනයට නිවාඩුවක් දාන්න හිතාගෙන ඉන්නවා'
  );
});

test('Pos_Fun_010', async ({ page }) => {
  await verifyTranslation(page,
    'karuNaakarala magee document tika review karalaa mata reply ekak dhenna.',
    'කරුණාකරල මගේ document ටික review කරලා මට reply එකක් දෙන්න.'
  );
});

test('Pos_Fun_011', async ({ page }) => {
  await verifyTranslation(page,
    'mata eyaava hambunee uni ekee thibuna club ekakin, eyaa harima hodhayi; ee vageema dhakShayi.',
    'මට එයාව හම්බුනේ uni එකේ තිබුන club එකකින්, එයා හරිම හොදයි; ඒ වගේම දක්ෂයි.'
  );
});

test('Pos_Fun_012', async ({ page }) => {
  await verifyTranslation(page,
    'Hari Hari mama adhama oyaage prashnayata piLithurak hoyalaa dhennam',
    'හරි හරි මම අදම ඔයාගෙ ප්‍රශ්නයට පිළිතුරක් හොයලා දෙන්නම්'
  );
});

test('Pos_Fun_013', async ({ page }) => {
  await verifyTranslation(page,
    'mama adha kalin gedhara yanna oone, naethnam ammaa baninavaa.',
    'මම අද කලින් ගෙදර යන්න ඕනෙ, නැත්නම් අම්මා බනිනවා.'
  );
});

test('Pos_Fun_014', async ({ page }) => {
  await verifyTranslation(page,
    'mama   adha   godak   raee   venakan   office  eke  inna   balan   aavee',
    'මම   අද   ගොඩක්   රෑ   වෙනකන්   office  eke  ඉන්න   බලන්   ආවේ'
  );
});

test('Pos_Fun_015', async ({ page }) => {
  await verifyTranslation(page,
`nadhali ta saniipa naehae. eyaa adha nivaaduvak dhaalaa rest karanavaa kivvaa. oyaata dhaenaganna dheyak thiyenavanam magee number ekata oonema velaavaka call ekak ganna. mama udhav karannam oyaagee vaedee ikmanata ivara karaganna. oyaagee vaeda tika ikmanatama ivara karagaththama api nidhahasee eLiyata gihin vinoodha venna puLuvan`,
`නදලි ට සනීප නැහැ. එයා අද නිවාඩුවක් දාලා rest කරනවා කිව්වා. ඔයාට දැනගන්න දෙයක් තියෙනවනම් මගේ number එකට ඕනෙම වෙලාවක call එකක් ගන්න. මම උදව් කරන්නම් ඔයාගේ වැඩේ ඉක්මනට ඉවර කරගන්න. ඔයාගේ වැඩ ටික ඉක්මනටම ඉවර කරගත්තම අපි නිදහසේ එළියට ගිහින් විනෝද වෙන්න පුළුවන් `
  );
});

test('Pos_Fun_016', async ({ page }) => {
  await verifyTranslation(page,
    "'oyaa harima dhakSha Lamayek' kiyalaa, oyage Ammaa (iiye) mata kivvaa",
    "'ඔයා හරිම දක්ෂ ළමයෙක්' කියලා, ඔයගෙ අම්මා (ඊයෙ) මට කිව්වා"
  );
});

test('Pos_Fun_017', async ({ page }) => {
  await verifyTranslation(page,
    'mage NIC eka scan karala PDF ekak vidhihata email karanna. Please eeka ASAP evanna.',
    'mage NIC එක scan කරල PDF එකක් විදිහට email කරන්න. Please ඒක ASAP එවන්න.'
  );
});

test('Pos_Fun_018', async ({ page }) => {
  await verifyTranslation(page,
    'Bank eken OTP eka message ekak vidhiyata aevillaa dha? Credit Card PIN number eka share karanna epaa kaatavath.',
    'Bank එකෙන් OTP එක message එකක් විදියට ඇවිල්ලා ද? Credit Card PIN number එක share කරන්න එපා කාටවත්.'
  );
});

test('Pos_Fun_019', async ({ page }) => {
  await verifyTranslation(page,
    'Adha loku traffic ekak. eka nisaa mama late venavaa, e nisaa meeting eka start dhaenmama karanna epaa. Mama enakan inna',
    'අද ලොකු traffic එකක්. එක නිසා මම late වෙනවා, එ නිසා meeting එක start දැන්මම කරන්න එපා. මම එනකන් ඉන්න'
  );
});

test('Pos_Fun_020', async ({ page }) => {
  await verifyTranslation(page,
    'suba udhaesanak! mama adha office yanna kalin grocery list ekak haedhuva: rice kg 2, milk 1L, shampoo 200ml. 8.15 AM venakota bus stop eke innam. oyaata puluvannam, Teams call ekak dhaala meeting notes tika share karanna. passe api cafe ekata gihilla coffee ekak bonna yamu; USD 10 vagee aethi. ehema unoth, mama budget eka balala decide karannam.',
    'සුබ උදැසනක්! මම අද office යන්න කලින් grocery list එකක් හැදුව: rice kg 2, milk 1L, shampoo 200ml. 8.15 AM වෙනකොට bus stop eke ඉන්නම්. ඔයාට පුලුවන්නම්, Teams call එකක් දාල meeting notes ටික share කරන්න. පස්සෙ අපි cafe එකට ගිහිල්ල coffee එකක් බොන්න යමු; USD 10 වගේ ඇති. එහෙම උනොත්, මම budget එක බලල decide කරන්නම්.'
  );
});

test('Pos_Fun_021', async ({ page }) => {
  await verifyTranslation(page,
    'mama mee udinma thiyena file eka open karanna try kalaa, namuth password eka amathaka unaa. oyaata puluvannam reset link eka WhatsApp karanna. mata 5 min aethulata access oone, naethnam report eka submit karanna baee. thank you.',
    'මම මේ උඩින්ම තියෙන file එක open කරන්න try කලා, නමුත් password එක අමතක උනා. ඔයාට පුලුවන්නම් reset link එක WhatsApp කරන්න. මට 5 min ඇතුලට access ඕනෙ, නැත්නම් report එක submit කරන්න බෑ. thank you.'
  );
});

test('Pos_Fun_022', async ({ page }) => {
  await verifyTranslation(page,
    'ahasa poLova vatapitaava harima histhaenak, gahak koLak vilak nomaethi kaanthaarayak - "Sunil Edhirisiqqha"',
    'අහස පොළොව වටපිටාව හරිම හිස්තැනක්, ගහක් කොළක් විලක් නොමැති කාන්තාරයක් - "සුනිල් එදිරිසිංහ"'
  );
});

test('Pos_Fun_023', async ({ page }) => {
  await verifyTranslation(page,
    'Hello, These are my newly bought shoes, what are your thoughts on them?',
    'Hello, These are my newly bought shoes, what are your thoughts on them?'
  );
});

test('Pos_Fun_024', async ({ page }) => {
  await verifyTranslation(page,
    'magee lookee viirayaa magee thaaththaa',
    'මගේ ලෝකේ වීරයා මගේ තාත්තා'
  );
});

/* ---------------- NEGATIVE (26–35) ---------------- */

test('Neg_Fun_001', async ({ page }) => {
  await verifyTranslation(page,
`Mata parippu Kilo 2k ganna oone, eth man langa thiyennee Rs. 1000yi`,
`මට පරිප්පු Kilo 2ක් ගන්න ඕනෙ, එත් මන් ලඟ තියෙන්නේ Rs. 1000යි`
  );
});

test('Neg_Fun_002', async ({ page }) => {
  await verifyTranslation(page,
    'Oyaa nidhaaganidhdhi  7.30 AM venakota alarm eka set karanna, mama nidhiyaganna yanavaa',
    'ඔයා නිදාගනිද්දි  7.30 AM වෙනකොට alarm එක set කරන්න, මම නිදියගන්න යනවා'
  );
});

test('Neg_Fun_003', async ({ page }) => {
  await verifyTranslation(page,
    'Ado! gaemmak thamayi ithin!',
    'අඩෝ! ගැම්මක් තමයි ඉතින්!'
  );
});

test('Neg_Fun_004', async ({ page }) => {
  await verifyTranslation(page,
    'mamaadhaudhenmagameeyanavaa.Oyathyannaenavadha?',
    'මම අද උදෙන්ම ගමේ යනවා. ඔයත් යන්න එනවද?'
  );
});

test('Neg_Fun_005', async ({ page }) => {
  await verifyTranslation(page,
    'oyaa    adha    innavadha?      mama        aevillaa          kiyannam?',
    '"ඔයා අද ඉන්නවද? මම ඇවිල්ලා කියන්නම්?"'
  );
});

test('Neg_Fun_006', async ({ page }) => {
  await verifyTranslation(page,
    'Heta havasata Arlene aunty eyaalage gedhara enna kivvaa',
    'හෙට හවසට Arlene Aunty එයාලගෙ ගෙදර එන්න කිව්වා'
  );
});

test('Neg_Fun_007', async ({ page }) => {
  await verifyTranslation(page,
    '"you know what, Dinethi just scolded me Infront of the whole school!!!"',
    '"you know what, Dinethi just scolded me Infront of the whole school!!!"'
  );
});

test('Neg_Fun_008', async ({ page }) => {
  await verifyTranslation(page,
    'magee student id eka naethivelaa, gate eken aethulata enna dheyidha dhanne naehae',
    'මගේ student id එක නැතිවෙලා, gate එකෙන් ඇතුලට එන්න දෙයිද දන්නෙ නැහැ'
  );
});

test('Neg_Fun_009', async ({ page }) => {
  await verifyTranslation(page,
    'do you want me to do all these things by myself?',
    'do you want me to do all these things by myself?'
  );
});

test('Neg_Fun_010', async ({ page }) => {
  await verifyTranslation(page,
    'oyaagee 3rd year 1st semester ekee gpa eka kiiyadha?',
    'ඔයාගේ 3rd year 1st semester එකේ gpa එක කීයද?'
  );
});

/* ---------------- UI ---------------- */

test('Pos_UI_001 - Language options toggle between Sinhala and Singlish', async ({ page }) => {
  const languageDropdown = page.locator('select');

  // Initial state
  await expect(languageDropdown).toHaveValue('english');

  // Change language
  await languageDropdown.selectOption('sinhala');

  // Validate change
  await expect(languageDropdown).toHaveValue('sinhala');
});

