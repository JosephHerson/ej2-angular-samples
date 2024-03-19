import { Component, ViewEncapsulation, ViewChild, OnInit } from '@angular/core';
import { ToolbarService, DocumentEditorContainerComponent, DocumentEditorContainerModule } from '@syncfusion/ej2-angular-documenteditor';
import { TitleBar } from './title-bar';
import { rtlDocument, WEB_API_ACTION } from './data';
import { L10n, isNullOrUndefined } from '@syncfusion/ej2-base';
import { SBDescriptionComponent } from '../common/dp.component';
import { SBActionDescriptionComponent } from '../common/adp.component';
/**
 * Document Editor Component
 */
@Component({
    selector: 'control-content',
    templateUrl: 'right-to-left.html',
    encapsulation: ViewEncapsulation.None,
    providers: [ToolbarService],
    standalone: true,
    imports: [DocumentEditorContainerModule, SBActionDescriptionComponent, SBDescriptionComponent]
})
export class RightToLeftComponent implements OnInit {
    public hostUrl: string = 'https://services.syncfusion.com/angular/production/api/documenteditor/';
    @ViewChild('documenteditor_default')
    public container: DocumentEditorContainerComponent;
    public culture: string = 'ar-AE';
    titleBar: TitleBar;

    ngOnInit(): void {
        L10n.load({
            'ar-AE': {
                'documenteditor': {
                    'Table': 'لجدول',
                    'Row': 'لصف',
                    'Cell': 'الخليه',
                    'Ok': 'موافق',
                    'Cancel': 'إلغاء الأمر',
                    'Size': 'حجم',
                    'Preferred Width': 'العرض المفضل',
                    'Points': 'نقاط',
                    'Percent': 'المائه',
                    'Measure in': 'القياس في',
                    'Alignment': 'محاذاه',
                    'Left': 'ليسار',
                    'Center': 'مركز',
                    'Right': 'الحق',
                    'Justify': 'تبرير',
                    'Indent from left': 'مسافة بادئه من اليسار',
                    'Borders and Shading': 'الحدود والتظليل',
                    'Options': 'خيارات',
                    'Specify height': 'تحديد الارتفاع',
                    'At least': 'الاقل',
                    'Exactly': 'تماما',
                    'Row height is': 'ارتفاع الصف هو',
                    'Allow row to break across pages': 'السماح بفصل الصف عبر الصفحات',
                    'Repeat as header row at the top of each page': 'تكرار كصف راس في اعلي كل صفحه',
                    'Vertical alignment': 'محاذاة عمودي',
                    'Top': 'أعلى',
                    'Bottom': 'اسفل',
                    'Default cell margins': 'هوامش الخلية الافتراضية',
                    'Default cell spacing': 'تباعد الخلايا الافتراضي',
                    'Allow spacing between cells': 'السماح بالتباعد بين الخلايا',
                    'Cell margins': 'هوامش الخلية',
                    'Same as the whole table': 'نفس الجدول بأكمله',
                    'Borders': 'الحدود',
                    'None': 'اي',
                    'Single': 'واحد',
                    'Dot': 'نقطه',
                    'DashSmallGap': 'داشسمجاب',
                    'DashLargeGap': 'الاتحاد الخاص',
                    'DashDot': 'داشدوت',
                    'DashDotDot': 'ددهدودوت',
                    'Double': 'انقر نقرا مزدوجا',
                    'Triple': 'الثلاثي',
                    'ThinThickSmallGap': 'فجوه صغيره سميكه رقيق',
                    'ThickThinSmallGap': 'الفجوة الصغيرة رقيقه سميكه',
                    'ThinThickThinSmallGap': 'صغيره سميكه رقيقه الفجوة الصغيرة',
                    'ThinThickMediumGap': 'فجوه متوسطه سميك',
                    'ThickThinMediumGap': 'سميكه الفجوة متوسطه رقيقه',
                    'ThinThickThinMediumGap': 'رقيقه سميكه متوسطه الفجوة',
                    'ThinThickLargeGap': 'الفجوة الكبيرة رقيقه سميكه',
                    'ThickThinLargeGap': 'فجوه كبيره رقيقه سميك',
                    'ThinThickThinLargeGap': 'رقيقه سميكه الفجوة الكبيرة',
                    'SingleWavy': 'واحد مائج',
                    'DoubleWavy': 'مزدوج مائج',
                    'DashDotStroked': 'اندفاعه نقطه القوية',
                    'Emboss3D': 'D3مزخرف',
                    'Engrave3D': 'D3نقش',
                    'Outset': 'البدايه',
                    'Inset': 'الداخلي',
                    'Thick': 'سميكه',
                    'Style': 'نمط',
                    'Width': 'عرض',
                    'Height': 'ارتفاع',
                    'Letter': 'رساله',
                    'Tabloid': 'التابلويد',
                    'Legal': 'القانونيه',
                    'Statement': 'بيان',
                    'Executive': 'التنفيذي',
                    'A3': 'A3',
                    'A4': 'A4',
                    'A5': 'A5',
                    'B4': 'B4',
                    'B5': 'B5',
                    'Custom Size': 'حجم مخصص',
                    'Different odd and even': 'مختلفه غريبه وحتى',
                    'Different first page': 'الصفحة الاولي مختلفه',
                    'From edge': 'من الحافة',
                    'Header': 'راس',
                    'Footer': 'تذييل الصفحه',
                    'Margin': 'الهوامش',
                    'Paper': 'الورق',
                    'Layout': 'تخطيط',
                    'Orientation': 'التوجه',
                    'Landscape': 'المناظر الطبيعيه',
                    'Portrait': 'صوره',
                    'Table Of Contents': 'جدول المحتويات',
                    'Show page numbers': 'إظهار أرقام الصفحات',
                    'Right align page numbers': 'محاذاة أرقام الصفحات إلى اليمين',
                    'Nothing': 'شيء',
                    'Tab leader': 'قائد علامة التبويب',
                    'Show levels': 'إظهار المستويات',
                    'Use hyperlinks instead of page numbers': 'استخدام الارتباطات التشعبية بدلا من أرقام الصفحات',
                    'Build table of contents from': 'بناء جدول محتويات من',
                    'Styles': 'انماط',
                    'Available styles': 'الأنماط المتوفرة',
                    'TOC level': 'مستوي جدول المحتويات',
                    'Heading': 'عنوان',
                    'Heading 1': 'عنوان 1',
                    'Heading 2': 'عنوان 2',
                    'Heading 3': 'عنوان 3',
                    'Heading 4': 'عنوان 4',
                    'Heading 5': 'عنوان 5',
                    'Heading 6': 'عنوان 6',
                    'Heading 7': 'عنوان 7',
                    'Heading 8': '8 عنوان ',
                    'Heading 9': 'عنوان 9',
                    'List Paragraph': 'فقره القائمة',
                    'Normal': 'العاديه',
                    'Outline levels': 'مستويات المخطط التفصيلي',
                    'Table entry fields': 'حقول إدخال الجدول',
                    'Modify': 'تعديل',
                    'Color': 'لون',
                    'Setting': 'اعداد',
                    'Box': 'مربع',
                    'All': 'جميع',
                    'Custom': 'المخصصه',
                    'Preview': 'معاينه',
                    'Shading': 'التظليل',
                    'Fill': 'ملء',
                    'Apply To': 'تنطبق علي',
                    'Table Properties': 'خصائص الجدول',
                    'Cell Options': 'خيارات الخلية',
                    'Table Options': 'خيارات الجدول',
                    'Insert Table': 'ادراج جدول',
                    'Number of columns': 'عدد الاعمده',
                    'Number of rows': 'عدد الصفوف',
                    'Text to display': 'النص الذي سيتم عرضه',
                    'Address': 'عنوان',
                    'Insert Hyperlink': 'ادراج ارتباط تشعبي',
                    'Edit Hyperlink': 'تحرير ارتباط تشعبي',
                    'Insert': 'ادراج',
                    'General': 'العامه',
                    'Indentation': 'المسافه البادئه',
                    'Before text': 'قبل النص',
                    'Special': 'الخاصه',
                    'First line': 'السطر الأول',
                    'Hanging': 'معلقه',
                    'After text': 'بعد النص',
                    'By': 'من',
                    'Before': 'قبل',
                    'Line Spacing': 'تباعد الأسطر',
                    'After': 'بعد',
                    'At': 'في',
                    'Multiple': 'متعدده',
                    'Spacing': 'تباعد',
                    'Define new Multilevel list': 'تحديد قائمه متعددة الاصعده جديده',
                    'List level': 'مستوي القائمة',
                    'Choose level to modify': 'اختر المستوي الذي تريد تعديله',
                    'Level': 'مستوي',
                    'Number format': 'تنسيق الأرقام',
                    'Number style for this level': 'نمط الرقم لهذا المستوي',
                    'Enter formatting for number': 'إدخال تنسيق لرقم',
                    'Start at': 'بداية من',
                    'Restart list after': 'أعاده تشغيل قائمه بعد',
                    'Position': 'موقف',
                    'Text indent at': 'المسافة البادئة للنص في',
                    'Aligned at': 'محاذاة في',
                    'Follow number with': 'اتبع الرقم مع',
                    'Tab character': 'حرف علامة التبويب',
                    'Space': 'الفضاء',
                    'Arabic': 'العربية',
                    'UpRoman': 'حتى الروماني',
                    'LowRoman': 'الرومانية منخفضه',
                    'UpLetter': '',
                    'LowLetter': '',
                    'Number': 'عدد',
                    'Leading zero': 'يؤدي صفر',
                    'Bullet': 'رصاصه',
                    'Ordinal': 'الترتيبيه',
                    'Ordinal Text': 'النص الترتيبي',
                    'For East': 'للشرق',
                    'No Restart': 'لا أعاده تشغيل',
                    'Font': 'الخط',
                    'Font style': 'نمط الخط',
                    'Underline style': 'نمط التسطير',
                    'Font color': 'لون الخط',
                    'Effects': 'الاثار',
                    'Strikethrough': 'يتوسطه',
                    'Superscript': 'مرتفع',
                    'Subscript': 'منخفض',
                    'Double strikethrough': 'خط مزدوج يتوسطه خط',
                    'Regular': 'العاديه',
                    'Bold': 'جريئه',
                    'Italic': 'مائل',
                    'Cut': 'قطع',
                    'Copy': 'نسخ',
                    'Paste': 'لصق',
                    'Hyperlink': 'الارتباط التشعبي',
                    'Open Hyperlink': 'فتح ارتباط تشعبي',
                    'Copy Hyperlink': 'نسخ ارتباط تشعبي',
                    'Remove Hyperlink': 'أزاله ارتباط تشعبي',
                    'Paragraph': 'الفقره',
                    'Linked(Paragraph and Character)': 'مرتبط (فقره وحرف)',
                    'Character': 'حرف',
                    'Merge Cells': 'دمج الخلايا',
                    'Insert Above': 'ادراج أعلاه',
                    'Insert Below': 'ادراج أدناه',
                    'Insert Left': 'ادراج إلى اليسار',
                    'Insert Right': 'ادراج اليمين',
                    'Delete': 'حذف',
                    'Delete Table': 'حذف جدول',
                    'Delete Row': 'حذف صف',
                    'Delete Column': 'حذف عمود',
                    'File Name': 'اسم الملف',
                    'Format Type': 'نوع التنسيق',
                    'Save': 'حفظ',
                    'Navigation': 'التنقل',
                    'Results': 'نتائج',
                    'Replace': 'استبدال',
                    'Replace All': 'استبدال الكل',
                    'We replaced all': 'استبدلنا جميع',
                    'Find': 'العثور',
                    'No matches': 'لا توجد تطابقات',
                    'All Done': 'كل القيام به',
                    'Result': 'نتيجه',
                    'of': 'من',
                    'instances': 'الحالات',
                    'with': 'مع',
                    'Click to follow link': 'انقر لمتابعه الارتباط',
                    'Continue Numbering': 'متابعه الترقيم',
                    'Bookmark name': 'اسم الإشارة المرجعية',
                    'Close': 'اغلاق',
                    'Restart At': 'أعاده التشغيل عند',
                    'Properties': 'خصائص',
                    'Name': 'اسم',
                    'Style type': 'نوع النمط',
                    'Style based on': 'نمط استنادا إلى',
                    'Style for following paragraph': 'نمط للفقرة التالية',
                    'Formatting': 'التنسيق',
                    'Formatting restrictions': 'قيود التنسيق',
                    'Numbering and Bullets': 'الترقيم والتعداد النقطي',
                    'Numbering': 'ترقيم',
                    'Update Field': 'تحديث الحقل',
                    'Edit Field': 'تحرير الحقل',
                    'Bookmark': 'الإشارة المرجعية',
                    'Page Setup': 'اعداد الصفحة',
                    'No bookmarks found': 'لم يتم العثور علي إشارات مرجعيه',
                    'Number format tooltip information': 'تنسيق رقم أحادي المستوي:' + '</br>' + '[بادئه]% [مستوي الاعداد] [لاحقه]' + '</br>'
                        // tslint:disable-next-line:max-line-length 
                        + 'علي سبيل االمثال ، "الفصل% 1." سيتم عرض الترقيم مثل' + '</br>' + 'الفصل الأول- البند' + '</br>' + 'الفصل الثاني- البند' + '</br>...'
                        + '</br>' + 'الفصل نون-البند' + '</br>'
                        // tslint:disable-next-line:max-line-length
                        + '</br>' + 'تنسيق رقم متعدد الإعدادات:' + '</br>' + '[بادئه]% [مستوي المستوي]' + '</br>' + '[لاحقه] + [بادئه]%' + '</br>' + '[المستوي] [لاحقه]'
                        + '</br>' + 'علي سبيل المثال ، "% 1.% 2." سيتم عرض الترقيم مثل' + '</br>' + '1.1 البند' + '</br>' + '1.2 البند' + '</br>...' + '</br>' + '1. نون-البند',
                    'Format': 'تنسيق',
                    'Create New Style': 'إنشاء نمط جديد',
                    'Modify Style': 'تعديل النمط',
                    'New': 'الجديد',
                    'Bullets': 'الرصاص',
                    'Use bookmarks': 'استخدام الإشارات المرجعية',
                    'Table of Contents': 'جدول المحتويات',
                    'AutoFit': 'الاحتواء',
                    'AutoFit to Contents': 'احتواء تلقائي للمحتويات',
                    'AutoFit to Window': 'احتواء تلقائي للإطار',
                    'Fixed Column Width': 'عرض العمود الثابت',
                    'Reset': 'اعاده تعيين',
                    'Match case': 'حاله المباراة',
                    'Whole words': 'كلمات كامل',
                    'Add': 'اضافه',
                    'Go To': 'الانتقال إلى',
                    'Search for': 'البحث عن',
                    'Replace with': 'استبدال',
                    'TOC 1': 'جدول المحتويات 1',
                    'TOC 2': 'جدول المحتويات 2',
                    'TOC 3': 'جدول المحتويات 3',
                    'TOC 4': 'جدول المحتويات 4',
                    'TOC 5': 'جدول المحتويات 5',
                    'TOC 6': 'جدول المحتويات 6',
                    'TOC 7': 'جدول المحتويات 7',
                    'TOC 8': 'جدول المحتويات 8',
                    'TOC 9': 'جدول المحتويات 9',
                    'Right-to-left': 'من اليمين إلى اليسار',
                    'Left-to-right': 'من اليسار إلى اليمين',
                    'Direction': 'الاتجاه',
                    'Table direction': 'اتجاه الجدول',
                    'Indent from right': 'مسافة بادئه من اليمين',
                    'Page': 'صفحه',
                    'Fit one page': 'احتواء صفحه واحد',
                    'Fit page width': 'احتواء عرض الصفحة',
                    // tslint:disable-next-line:max-line-length
                    'The current page number in the document. Click or tap to navigate specific page.': 'رقم الصفحة الحالية في المستند. انقر أأو اضغط للتنقل في صفحه معينه',
                    'Format restrictions': 'قيود التنسيق',
                    'Allow formatting': 'السماح بالتنسيق',
                    'Editing restrictions': 'قيود التحرير',
                    'Read only': 'للقراءة فقط',
                    'User permissions': 'أذونات المستخدم',
                    'Everyone': 'الجميع',
                    'Add Users': 'أضافه مستخدمين',
                    'Enforcing Protection': 'فرض الحماية',
                    'Enter User': 'ادخل المستخدم',
                    'Users': 'المستخدمين',
                    'Enter new password': 'ادخل كلمه مرور جديد',
                    'Reenter new password': 'أعاده إدخال كلمه مرور جديده',
                    'Your permissions': 'الأذونات الخاصة بك',
                    // tslint:disable-next-line:max-line-length
                    'This document is protected from unintenional editing.You may edit in this region,but all changes will be tracked.': 'هذا المستند محمي من التحرير غير الموجه. يمكنك التحرير في هذه المنطقة ، ولكن سيتم تعقب كافة التغييرات',
                    'You may format text only with certain styles.': 'يمكنك تنسيق النص فقط مع أنماط معينه',
                    'Stop Protection': 'إيقاف الحماية',
                    'Unprotect Document': 'إلغاء حماية المستند',
                    'Password': 'كلمه المرور',
                    /* tslint:disable */
                    'Select parts of the document and choose users who are allowed to freely edit them.': 'حدد أجزاء من المستند واختر المستخدمين الذين يسمح لهم بالقيام بعملية تحرير هاهم بحرية',
                    "Don't add space between the paragraphs of the same styles": 'عدم إضافة مسافة بين فقرات نفس الأنماط',
                    "The password don't match": "كلمة المرور لا تتطابق",
                    /* tslint:enable */
                    'More users': 'المزيد من المستخدمين',
                    'Yes, Start Enforcing Protection': 'نعم، ابدأ فرض الحماية',
                    'Start Enforcing Protection': 'بدء تشغيل الحماية القسرية',
                    'Reenter new password to confirm': 'إعادة إدخال كلمة مرور جديدة للتأكيد',
                    // tslint:disable-next-line:max-line-length
                    'This document is protected from unintentional editing.You may edit in this region.': 'هذا المستند محمي من التحرير غير المقصود. يمكنك تحرير في هذه المنطقة.',
                    'Spelling Editor': 'محرر التدقيق الإملائي',
                    'Spelling': 'الاملائي',
                    'Spell Check': 'التدقيق الإملائي',
                    'Underline errors': 'أخطاء التسطير',
                    'Ignore': 'تجاهل',
                    'Ignore all': 'تجاهل الكل',
                    'Add to Dictionary': 'إضافة إلى القاموس',
                    'Change': 'تغيير',
                    'Change All': 'تغيير الكل',
                    'Suggestions': 'اقتراحات',
                    'The password is incorrect': 'كلمة المرور غير صحيحة',
                    'Error in establishing connection with web server': 'خطأ في تأسيس اتصال مع ملقم ويب',
                    'Highlight the regions I can edit': 'تسليط الضوء على المناطق التي يمكنني تحريرها',
                    'Show All Regions I Can Edit': 'إظهار كافة المناطق التي يمكنني تحريرها',
                    'Find Next Region I Can Edit': 'البحث عن المنطقة التالية التي يمكنني تحريرها',
                    'Keep source formatting': 'الاحتفاظ بتنسيق المصدر',
                    'Match destination formatting': 'مطابقه تنسيق الوجهة',
                    'Text only': 'النص فقط',
                    'Comments': 'تعليقات',
                    'Type your comment': 'اكتب تعليقك',
                    'Post': 'وظيفه',
                    'Reply': 'الرد',
                    'New Comment': 'تعليق جديد',
                    'Edit': 'تحرير',
                    'Resolve': 'حل',
                    'Reopen': 'فتح',
                    'No comments in this document': 'لا توجد تعليقات في هذا المستند',
                    'more': 'اكثر',
                    'Type your comment hear': 'اكتب تعليقك الاستماع',
                    'Next Comment': 'التعليق التالي',
                    'Previous Comment': 'التعليق السابق',
                    "Un-posted comments": "Un-نشر التعليقات",
                    "Added comments not posted. If you continue, that comment will be discarded.": "لم يتم نشر التعليقات المضافة. إذا قمت بالمتابعة ، سيتم تجاهل هذا التعليق.",
					 "Drop Down Form Field": "حقل نموذج منسدل",
					"Drop-down items": "عناصر منسدلة",
					"Items in drop-down list": "العناصر في القائمة المنسدلة",
					"ADD": "أضف",
					"REMOVE": "إزالة",
					"Field settings": "الإعدادات الميدانية",
					"Tooltip": "تلميح",
					"Drop-down enabled": "تم تمكين القائمة المنسدلة",
					"Check Box Form Field": "حقل نموذج خانة الاختيار",
					"Check box size": "حجم خانة الاختيار",
					"Auto": "تلقاءي",
					"Default value": "القيمة الافتراضية",
					"Not checked": "غير مدقق",
					"Checked": "التحقق",
					"Check box enabled": "تم تمكين خانة الاختيار",
					"Text Form Field": "حقل نموذج نصي",
					"Type": "نوع",
					"Default text": "النص الافتراضي",
					"Maximum length": "الحد الأقصى لطول",
					"Text format": "تنسيق النص",
					"Fill-in enabled": "تم تمكين التعبئة",
					"Default number": "الرقم الافتراضي",
					"Default date": "التاريخ الافتراضي",
					"Date format": "صيغة التاريخ",
					"Merge Track": "لن يتم وضع علامة على هذا الإجراء كتغيير. هل تريد الاستمرار?",
					"UnTrack": "لا يمكن تعقبها",
					"Accept": "قبول",
					"Reject": "رفض",
					"Previous Changes": "التغييرات السابقة",
					"Next Changes": "التغييرات القادمة",
					"Inserted": "تم إدراجها",
					"Deleted": "تم الحذف",
					"Changes": "التغييرات",
					"Accept all": "قبول الكل",
					"Reject all": "رفض الكل",
					"No changes": "لا تغييرات",
					"Accept Changes": "قبول التغييرات",
					"Reject Changes": "رفض التغييرات",
					"User": "المستعمل",
					'View': 'رأي',
                    'ScreenTip text': 'نص تلميح الشاشة',
                    'Columns': 'الأعمدة',
                    'Presets': 'الإعدادات المسبقة',
                    'One':'واحد',
                    'Two': 'اثنين',
                    'Three': 'ثلاثة',
                    'Line between column': 'الخط بين العمود',
                    'Width and Spacing': 'العرض والتباعد',
                    'Column': 'عمود',
                    'Equal column width': 'عرض العمود المتساوي',
                    'Paste Content Dialog': 'نظرًا لسياسة أمان المتصفح، فإن اللصق من حافظة النظام مقيد. بدلا من ذلك استخدم اختصار لوحة المفاتيح',
                    'Paste Content CheckBox': 'لا تظهر مرة أخرى',
                    'All caps': 'جميع الحروف الكبيرة',
                    'Indents and Spacing': 'المسافات البادئة والتباعد',
                    'Line and Page Breaks': 'فواصل الأسطر والصفحات',
                    'Pagination': 'ترقيم الصفحات',
                    'WidowControl': 'سيطرة الأرملة/اليتيم',
                    'Keep With Next': 'الاحتفاظ بالتالي',
                    'Keep Lines Together': 'حافظ على الخطوط معًا',
                    'Alt Text': 'نص بديل',
                    'Title': 'عنوان',
                    'Description': 'وصف'
				},
			'documenteditorcontainer': {
					"New": "الجديد",
					"Open": "فتح",
					"Undo": "التراجع عن",
					"Redo": "اعاده",
					"Image": "الصوره",
					"Table": "الجدول",
					"Link": "الارتباط",
					"Bookmark": "الاشاره المرجعيه",
					"Table of Contents": "جدول المحتويات",
					"HEADING - - - - 1": "العنوان----1",
					"HEADING - - - - 2": "العنوان----2",
					"HEADING - - - - 3": "العنوان----3",
					"Header": "راس",
					"Footer": "تذييل الصفحه",
					"Page Setup": "اعداد الصفحة",
					"Page Number": "رقم الصفحة",
					"Break": "كسر",
					"Find": "العثور",
					"Local Clipboard": "الحافظة المحلية",
					"Restrict Editing": "تقييد التحرير",
					"Upload from computer": "التحميل من الكمبيوتر",
					"By URL": "حسب عنوان URL",
					"Page Break": "فاصل الصفحات",
					"Section Break": "فاصل المقطع",
                    'Page Breaks':  'فواصل الصفحة',
                    'Section Breaks': 'فواصل القسم',
					"Header And Footer": "راس & تذييل",
					"Options": "خيارات",
					"Levels": "مستويات",
					"Different First Page": "الصفحة الاولي المختلفة",
					"Different header and footer for odd and even pages": "راس وتذييل مختلف للصفحات الفردية والزوجية.",
					"Different Odd And Even Pages": "مختلف الفردية & حتى صفحات",
					"Different header and footer for first page": "راس وتذييل الصفحة المختلفة للصفحة الاولي.",
					"Position": "موقف",
					"Header from Top": "راس من الأعلى",
					"Footer from Bottom": "تذييل من الأسفل",
					"Distance from top of the page to top of the header": "المسافة من اعلي الصفحة إلى اعلي الراس.",
					"Distance from bottom of the page to bottom of the footer": "المسافة من أسفل الصفحة إلى أسفل التذييل.",
					"Aspect ratio": "نسبه العرض إلى الارتفاع",
					"W": "ث",
					"H": "ح",
					"Width": "عرض",
					"Height": "ارتفاع",
					"Text": "النص",
					"Paragraph": "الفقره",
					"Fill": "ملء",
					"Fill color": "لون التعبئة",
					"Border Style": "نمط الحدود",
					"Outside borders": "خارج الحدود",
					"All borders": "جميع الحدود",
					"Inside borders": "داخل الحدود",
					"Left border": "الحد الأيسر",
					"Inside vertical border": "داخل الحدود العمودية",
					"Right border": "الحدود اليمني",
					"Top border": "الحد العلوي",
					"Inside horizontal border": "داخل الحدود الافقيه",
					"Bottom border": "الحد السفلي",
					"Border color": "لون الحدود",
					"Border width": "عرض الحدود",
					"Cell": "الخليه",
					"Merge cells": "دمج الخلايا",
					"Insert Or Delete": "ادراج/حذف",
					"Insert columns to the left": "ادراج أعمده إلى اليسار",
					"Insert columns to the right": "ادراج أعمده إلى اليمين",
					"Insert rows above": "ادراج صفوف أعلاه",
					"Insert rows below": "ادراج صفوف أدناه",
					"Delete rows": "حذف الصفوف",
					"Delete columns": "حذف الاعمده",
					"Cell Margin": "هامش الخلية",
					"Top": "أعلى",
					"Bottom": "اسفل",
					"Left": "اليسار",
					"Right": "الحق",
					"Align Text": "محاذاة النص",
					"Align top": "محاذاة لاعلي",
					"Align bottom": "محاذاة إلى الأسفل",
					"Align center": "محاذاة المركز",
					"Number of heading or outline levels to be shown in table of contents": "عدد مستويات العنوان أو المخطط التفصيلي التي ستظهر في جدول المحتويات.",
					"Show page numbers": "إظهار أرقام الصفحات",
					"Show page numbers in table of contents": "إظهار أرقام الصفحات في جدول المحتويات.",
					"Right align page numbers": "محاذاة أرقام الصفحات إلى اليمين",
					"Right align page numbers in table of contents": "محاذاة أرقام الصفحات إلى اليمين في جدول المحتويات.",
					"Use hyperlinks": "استخدام الارتباطات التشعبية",
					"Use hyperlinks instead of page numbers": "استخدام الارتباطات التشعبية بدلا من أرقام الصفحات.",
					"Font": "الخط",
					"Font Size": "حجم الخط",
					"Font color": "لون الخط",
					"Text highlight color": "لون تمييز النص",
					"Clear all formatting": "مسح كافة التنسيقات",
					"Bold Tooltip": "غامق (Ctrl + B)",
					"Italic Tooltip": "مائل (Ctrl + I)",
					"Underline Tooltip": "تسطير (Ctrl + U)",
					"Strikethrough": "يتوسطه",
					"Superscript Tooltip": "مرتفع (Ctrl + Shift + +)",
					"Subscript Tooltip": "منخفض (Ctrl + =)",
					"Align left Tooltip": "محاذاة إلى اليسار (Ctrl + L)",
					"Center Tooltip": "المركز (Ctrl + E)",
					"Align right Tooltip": "محاذاة إلى اليمين (Ctrl + R)",
					"Justify Tooltip": "ضبط (Ctrl + J)",
					"Decrease indent": "إنقاص المسافة البادئة",
					"Increase indent": "زيادة المسافة البادئة",
					"Line spacing": "تباعد الأسطر",
					"Bullets": "الرصاص",
					"Numbering": "ترقيم",
					"Styles": "انماط",
					"Manage Styles": "أداره الأنماط",
					"Page": "صفحه",
					"of": "من",
					"Fit one page": "احتواء صفحه واحده",
					"Spell Check": "التدقيق الإملائي",
					"Underline errors": "أخطاء التسطير",
					"Fit page width": "احتواء عرض الصفحة",
					"Update": "تحديث",
					"Cancel": "إلغاء الأمر",
					"Insert": "ادراج",
					"No Border": "بلا حدود",
					"Create a new document": "إنشاء مستند جديد.",
					"Open a document": "افتح مستندا.",
					"Undo Tooltip": "التراجع عن العملية الاخيره (Ctrl + Z).",
					"Redo Tooltip": "أعاده العملية الاخيره (Ctrl + Y).",
					"Insert inline picture from a file": "ادراج صوره مضمنه من ملف.",
					"Insert a table into the document": "ادراج جدول في المستند",
					"Create Hyperlink": "إنشاء ارتباط في المستند للوصول السريع إلى صفحات الويب والملفات (Ctrl + K).",
					"Insert a bookmark in a specific place in this document": "ادراج اشاره مرجعيه في مكان محدد في هذا المستند.",
					"Provide an overview of your document by adding a table of contents": "توفير نظره عامه حول المستند عن طريق أضافه جدول محتويات.",
					"Add or edit the header": "أضافه الراس أو تحريره.",
					"Add or edit the footer": "أضافه تذييل الصفحة أو تحريره.",
					"Open the page setup dialog": "افتح مربع حوار اعداد الصفحة.",
					"Add page numbers": "أضافه أرقام الصفحات.",
					"Find Text": "البحث عن نص في المستند (Ctrl + F).",
					"Toggle between the internal clipboard and system clipboard": "التبديل بين الحافظة الداخلية وحافظه النظام. </br > تم رفض الوصول إلى حافظه النظام من خلال البرنامج النصي بسبب نهج أمان المستعرضات. بدلا من ذلك ، </br > 1. يمكنك تمكين الحافظة الداخلية للقطع والنسخ واللصق داخل المكون. </br > 2. يمكنك استخدام اختصارات لوحه المفاتيح (Ctrl + X و Ctrl + C و Ctrl + V) للقطع والنسخ واللصق مع حافظه النظام.",
					"Restrict editing.": "تقييد التحرير.",
					"Current Page Number": "رقم الصفحة الحالي في المستند. انقر أو اضغط للانتقال إلى صفحه معينه.",
					"Read only": "للقراءة فقط",
					"Protections": "الحمايه",
					"Error in establishing connection with web server": "خطا في تاسيس اتصال مع ملقم ويب",
					"Single": "واحد",
					"Double": "انقر نقرا مزدوجا",
					"New comment": "تعليق جديد",
					"Comments": "تعليقات",
					"Web layout": "تخطيط ويب",
					"Text Form": "شكل نصي",
					"Check Box": "خانة اختيار",
                    "DropDown": "اسقاط",
                    'Form Fields': 'حقول النموذج',
					"Update Fields": "تحديث الحقول",
					"Update cross reference fields": "تحديث حقول الإسناد الترافقي",
					"Track Changes": "تتبع التغييرات التي تم إجراؤها في المستند",
					'TrackChanges': 'تعقب التغيرات',
                    'Insert Footnote': 'أدخل حاشية سفلية',
                    'Insert Endnote': 'أدخل تعليق ختامي',
                    'Footnote Tooltip': 'أدخل حاشية سفلية (Alt + Ctrl + F).',
                    'Endnote Tooltip': 'أدخل تعليقًا ختاميًا (Alt + Ctrl + F).',
                    'AllCaps':'كل قبعات',
                    'Change case Tooltip':'تغيير الحالة',
                    'Link to Previous': 'رابط إلى السابق',
                    'Columns': 'الأعمدة',
                    'Column': 'عمود',
                    'Next Page': 'الصفحة التالية',
                    'Continuous': 'مستمر',
                    'ZoomLevelTooltip': 'مستوى التكبير. انقر أو اضغط لفتح خيارات التكبير/التصغير.',
                    'Hide properties pane': 'إخفاء جزء الخصائص',
                    'ShowHiddenMarks Tooltip': 'إظهار الأحرف المخفية مثل المسافات وعلامات التبويب وعلامات الفقرات والفواصل. (Ctrl + *)',
                    'Information': 'معلومة',
                    'Top margin': 'الهامش العلوي',
                    'Bottom margin': 'الهامش السفلي',
                    'Left margin': 'الهامش الأيسر',
                    'Right margin': 'الهامش الأيمن',
                    'Borders': 'الحدود',
                    'Alternate Text': 'نص بديل'

                },
                'colorpicker': {
                    'Apply': 'تطبيق',
                    'Cancel': 'إلغاء الأمر',
                    'ModeSwitcher': 'مفتاح كهربائي الوضع'
                }
            }
        });
    }

    onCreate(): void {
        let titleBarElement: HTMLElement = document.getElementById('default_title_bar');
        this.titleBar = new TitleBar(titleBarElement, this.container.documentEditor, true, true);
        this.container.documentEditor.open(JSON.stringify(rtlDocument));
        this.container.documentEditor.documentName = 'الشروع';
        this.container.documentEditorSettings.showRuler = true;
        this.titleBar.updateDocumentTitle();
    }

    onDocumentChange(): void {
        if (!isNullOrUndefined(this.titleBar)) {
            this.titleBar.updateDocumentTitle();
        }
        this.container.documentEditor.focusIn();
    }
}