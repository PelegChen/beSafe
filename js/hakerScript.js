/*© 2019 Chen Peleg All Rights Reserved */
//"use strict";
G = G || {}
 globalObject:{
     G.Q = _Q_object.QuestionsArray; // question object
     G.css = {};
     G.css.font_0 = "consolas"// "Miriam Fixed"//"Lucida Sans Typewriter"; "Miriam Fixed"   // Lucida Con sole
     G.css.typeSolution = "";
     G.css.textcolor = "#21DF25"; // shoul be in hex
     G.css.mouseOnTimer = 2000;
     G.css.isMouseOutTimer = false;
     G.css.lastHoverEvent = 0;
     G.css.backGroundtextcolor = 'black'
     G.css.textFontSize = 4.5;
     G.css.resizeFontScale = 0.6;
     G.css.canvasBackground = 'black'//"#00284d";
     G.css.breakAfterQuestion = '<br><br>'
     G.sound = {};
     G.mgmt = {};
     G.mgmt.nameOfGame = _Q_object.nameOfGame
     G.mgmt.totalNumOfQuestions = G.Q.length - 1
     G.mgmt.solutionCol = 8;
     G.mgmt.isAnswering = false;
     G.mgmt.mouseIsOver = 0;
     G.mgmt.numberOftriesPerQuestion = 0;
     G.mgmt.savedSession = {};
     /* savings  */
     G.saves = {};
     G.mgmt.qNumber = 1; // question number
     G.saves.progressArray = [];
     G.saves.stageNumber = 1; //the stage number to begin /* safd */
     G.saves.lastSavedQuestion = 1;
     G.saves.nameOfplayer = G.clickFullNameOfUser || '';
     /* STAGE */
     G.mgmt.stageNames = ["",'webSite','getIp','firewall','user','virus'];
     G.saves.stage = G.mgmt.stageNames [G.saves.stageNumber]
     G.TXT = {};
     langSet ()
     G.mgmt.stagesInfo = {
         'getIp' : G.TXT.findAndgetIp,
         'firewall': G.TXT.findWeaknessFirewall,
         'user' :  G.TXT.enterWithUser,
         'webSite':  G.TXT.findThewebSiteScanApps,
         'virus':  G.TXT.BuildAttacvirusAgainst

     }
     G.mgmt.numOfsuccess = 0;
     G.mgmt.current = G.mgmt.stageNames[1]
     G.mgmt.qNumber = 1;


     G.mgmt.clickedAnswer = 0;
     G.mgmt.isQuestion = false;
     G.mgmt.isHolo = false// is the holo up
     G.mgmt.max_Tofind = {}

     G.mgmt.max_Tofind.firewall = 0
     G.mgmt.max_Tofind.virus = 0
     G.mgmt.max_Tofind.getIp = 0;
     G.mgmt.max_Tofind.firewall = 0;
     G.mgmt.max_Tofind.user = 0;
     G.mgmt.max_Tofind.webSite = 0;

     G.mgmt.isFinalAnsInChapter = false;
     G.mgmt.soundIsOn = true;

     G.mgmt.nextStage = function () {
         G.saves.stageNumber++ ; G.saves.stage = G.mgmt.stageNames [G.saves.stageNumber]; G.mgmt.current = G.saves.stage ; G.mgmt.numOfsuccess = 0 ;G.mgmt.isChapterCheckout = false;
     G.saves.lastSavedQuestion = G.mgmt.qNumber;
     if (storeInLocal ('check')){storeInLocal ('save')}
 }

     G.divs = {};
     G.hacks = {};


     G.hacks.firewallCodeId = 'FWhacksId';
     G.hacks.firewallFinishText = G.TXT.defenceWasBypassed
     G.hacks.firewallScrambleColor = 'yellow'
     G.hacks.visrusNumberOfrows = 0;
     G.hacks.lastqNumber = 1;
     G.hacks.ipLocations = [];
     G.dev_mode = G.dev_mode || false; // fast wrting // also cancel space option



 }
//util_functions:
    function L (...args){
        let txtcolor1 = 'black';
        let txtcolor2 = 'blue';
        let colorForText = 'green';
        let colorForNumber = 'purple';
        let colors = ['#FAF1E1','#F2EAC1','#F5EAD1', '#F1FFDA ', '#DFEFFF','#E4DFFF', '#FDDFCD', '#FFEAEF']
        let rnd = getRandomInt(colors.length) -1;
        var styles = ['background:' + colors [rnd], 'color: black', 'font-size:14px', 'line-height: 14px', 'font-weight: regular', ' display: inline-block' , 'border: 0px solid ' + colors [rnd], 'position:fixed', 'left:300px'].join(';');
        var style1 = styles + '; color:' + txtcolor1;
        var style2 = styles + '; color:' + txtcolor2;
        var styleText = styles + '; color:' + colorForText;
        let t = [] ;  let  specialStyle = [] ; let objects_array = [];
        for (let i = 0; i < 40; i ++){t[i]=''; specialStyle[i]= ''}
        let n = 0;
        args.forEach((a)=>{
            if (a === undefined){a = 'undefined'}
            if (typeof a === 'object' || typeof a === 'function') {objects_array.push(a)  ;return}

            t[n] = '%c'+ a ; n++
            let evl = '%c, ';
            try { if (typeof a === 'number') {throw 'd'}
                evl = '%c = '  + eval(a)+ ', '}
            catch { if (typeof a === 'string' && a !== '') {
                specialStyle[n-1] = styleText;
            } }
            t[n] = evl;
            ;n++
        });
        let fulltxt = t.join('')
        let cssN = n;
        for (let i = 0; i < (cssN); i +=2){
            if (specialStyle[i] === ''){t[i] = style1;} else { t[i] = specialStyle[i]}
            t[i + 1] = style2
        }

        console.group (fulltxt,t[0],t[1],t[2],t[3],t[4],t[5],t[6],t[7],t[8],t[9],t[10],t[11],t[12],t[12],t[14]);
        objects_array.forEach((a)=>{
            let inf = ''
            let stl = ''
            if (Array.isArray(a)){inf = '%c【】%o'; stl = styleText + '; font-size:17px; color: blue'} else
            if (typeof a === 'function'){inf = '%c ➡️ %o'; stl = styleText + '; font-size:14px'} else
            if (typeof a === 'object'){inf = '%c 🅾 %o'; stl = styleText + '; font-size:14px'}



            console.log (inf,stl,a)
        })
        console.groupEnd('');





    }
    function test (typ, num0){
        function cutQuestions (){
            while (G.Q.length > num0 + 1) {
            G.Q.pop()
            }
            G.mgmt.totalNumOfQuestions = G.Q.length - 1


        }
        switch (typ) {
            case 'holo':
            G.divs.ipadContainer.style.top = "10%"
            let fakeevent = {}
            fakeevent.type = "click";
            ledEvent (fakeevent);
            break;
            case 'cutQuestions':
            cutQuestions(); break;
            case "right":
            IpadGrahpic ('right');
            break;

        }

    }
    function Is (obj){

          try {
            let rt = obj instanceof HTMLElement;

            return rt

          }
          catch(e){
            let  rt2 = (typeof obj==='object') &&
              (obj.nodeType===1) && (typeof obj.style === "object") &&
              (typeof obj.ownerDocument ==="object");

              return rt2;
          }
    }
    function Elm(idname, type0){
        let testIt = Id(idname);
        if (Is(testIt)) return testIt;
        type0 = type0 || 'div'
        let newElem = document.createElement(type0);
        newElem.id = idname;
        return newElem

    }
    function Id(TheID){
        return document.getElementById(TheID);
    };
    function stl(p_elem, p_styles, p_styles2 = {}) {
        let x;
        for (x in p_styles) {
            p_elem.style[x] = p_styles[x];
        }
        for (x in p_styles2) {
            p_elem.style[x] = p_styles2[x];
        }
        p_elem.draggable = false; // maybye cancell ??
        p_elem.onselectstart = function(){ return false };
    }
    function Pre2Num (precent){

        return Number(precent.replace("%", ''))
    }
    function getRandomInt(max) {
        return (Math.floor(Math.random() * Math.floor(max))) + 1
    }
    function sinusOne (num){
        let r =  Math.round(Math.sin(num/10)*100 + 100)/200
        return r;
    }
    function hexToRgb(hex) {
        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
        } : null;
    }
    function myStyle (style) {
        let obj = {}
        switch (style) {
            case 'text':
            obj = {
                'fontSize': '4vmax',
                'fontSize': '4vmin',
                'fontFamily':G.css.font_0,
                'textAlign': 'right',
                 'direction': G.textDir,
                'color': G.css.textcolor,
                'fontWeight':'',

            }
            break;
            case 1:
            obj = {
                "backgroundSize": "100%",
                "backgroundRepeat": "no-repeat",
                'overflow':'hidden',
                'opacity': '1',
            }
            break;

        }
        return obj
    }
    function StylelFader (element,ms = 30,fadeIn = false, deleteElm = false)  {



        if (fadeIn) {element.fadeProccess = 'fadeIn'} else if (!fadeIn) {element.fadeProccess = 'fadeOut' }



        var op = 1;  // initial opacity

        let finOp = 0.001
        if (!fadeIn) {

            var timerOut = setInterval(function () {
                let real = Is(element);
                if ((op <= finOp) || (!real) || element.fadeProccess === 'fadeIn') {
                    clearInterval(timerOut) ;
                    if (deleteElm &&  element.parentNode ) { element.parentNode.removeChild(element)};
                    return true
                }

                element.style.opacity = op;
                element.style.filter = 'alpha(opacity=' + op * 100 + ")";

                op -= 0.1;

            }, ms);


        }
        else {
            op = 0.1
            var timerIn = setInterval(function () {
                let real = Is(element);

                if (op >= 1 || (!real) || element.fadeProccess === 'fadeOut'){
                    clearInterval(timerIn);
                }
                element.style.opacity = op;
                element.style.filter = 'alpha(opacity=' + op * 100 + ")";
                op += 0.05 ;
                }, ms);

        }
    }
    function langSet (){
         G.textDir = "rtl"
         G.textAlign = "right"
         G.TXT = {

             scannigApps: 'סורק ישומים',
             upLoadingVirus: 'מעלה וירוס',
             saveWasNotFoundRefreshThewindow : 'לא נמצא מידע שמור. ניתן להתחיל משחק חדש על ידי רענון החלון.',
             nameMustHave2chars: 'שם צריך להכיל לפחות 2 אותיות',
             fromNowtourProgWillBeSaved : ", מעכשיו ההתקדמות שלך במשחק תישמר בסיום כל שלב",
             ableTosave :'  ניתן לשמור את ההתקדמות על המחשב הזה',
             yourAdvanceIsSavedAtEachLevel: ' ההתקדמות שלך במשחק נשמרת בסיום כל שלב',
             loading : 'טוען ',
             IAmNot: 'אני לא   ',
             beginNewGame: " , התחל משחק  חדש",
             firstStageBegin: "שלב ראשון - החל ",
             continueinTheProcces : "המשך בתהליך ",
             findAndgetIp  : 'למציאת כתובת הרשת ',
              findWeaknessFirewall : ' לזיהוי חולשות בחומת האש',
              enterWithUser  : ' לחדירה למערכת באמצעות שם משתמש',
             findThewebSiteScanApps : 'מציאת האתר דרך סריקת אפליקציות',
              BuildAttacvirusAgainst : 'לבניית וירוס תקיפה נגד האתר',
              defenceWasBypassed : 'ההגנה נעקפה.',
              newGame:"משחק חדש",
              save:"שמירה",
              back : 'חזרה',
              afterSecondAttempt: 'אחרי נסיון שני',
              fullHelpText1: `ענו על השאלות כדי להתקדם במשחק.כדי לענות על השאלות יש ללחוץ על התשובה הנכונה.
      לכל שאלה יש רק תשובה אחת נכונה. אם לא עניתם על התשובה הנכונה, תוכלו לנסות שוב`,
              fullHelpText2: 'על ידי פתיחת תפריט ההולוגרמה תוכלו:',
              fullHelpText3: 'לשמור את המשחק על המחשב הזה,  לראות את ההתקדמות שלכם במשחק ולהפעיל ולהשתיק את הקול.',
             turnsoundOff: 'השתק צלילים',
             turnsoundOn: 'הפעל צלילים',
             help: 'עזרה',
             options: 'אפשרויות',
             progress: 'התקדמות',
             sacnApp: 'תוכנת סריקה',
             gameProgressData: 'נתוני ההתקדמות במשחק:',
             youHaveAnswered: `ענית על ` ,
             outOf: ' מתוך ',
             questionsWichAre : ' שאלות, שהן ',
             ofAllQuestion : 'מכלל השאלות.',
             typeOfAnswer: 'סוג המענה',
             inNumbers: `במספרים`,
             inPrecent: `באחוזים`,
             withoutErrors: `ללא טעויות`,
             onSecondTry: ` בנסיון שני `,
             afterSecondTry: ` אחרי נסיון שני `,
             allFilesWereLoadedContinue: `כל הקבצים נטענו. האם להמשיך? `,
             youMustPlantVirusEveryAnswer:
`עליך לפרוץ ולשתול וירוס במחשבים של "הארגון" הרשע.
     כל תשובה נכונה תקדם שלב בתהליך הפריצה.
    `,
            summary: ' סיכום',
            following: `להלן `,
            replay: `משחק חוזר`,
            allProgressOf : `(כל ההתקדמות של `,
            willBeDeleted : ` תימחק)`,
            youFinishedTheGame: 'סיימתם את המשחק. תוכלו לשחק שוב כדי לנסות ולשפר את התוצאות שלכם.',
            ifYouSavedItWillBeDeleted: 'אם שמרתם את המשחק, התחלת משחק חדש תמחק ותאפס את ההתקדמות שלכם.',
            youHaveWonWellDone: `ניצחתם את "הארגון" הרשע ! כל הכבוד !`,

            sendVirus: 'שלח וירוס',
            wouldYouLikeToReset:  'האם אתם מעוניינים למחוק את כל ההתקדמות ולהתחיל משחק חדש ?',
            seachingNetWorkAddress:"מחפש כתובת רשת :",
            IPfoundShouldContinue :  "כתובת רשת נמצאה. להמשיך ?",
            continue: "המשך ",
            anotherCheck: "בדיקה נוספת",
            identifyingIPAdrress:  " זיהוי כתובת רשת ",
            fireWallComponnentsFound: "נמצאו מספר רכיבים בחומת האש.",
            mustBypassAllDefences:  "יש לעקוף את כל ההגנות כדי למצוא חולשה מרכזית.",
            fireWallBeingScanned:  "חומת האש נסרקת, מחפש חולשות ופרצות אבטחה:",
            breachFoundInmemory : "נמצאה פרצה ברכיב הזיכרון:",
            AllDefencesDown :  "כל ההגנות נעקפו ונמצאה חולשה מרכזית. להמשיך ?",
            hidingActivity: "ביצוע הסוואה של הפעילות",
            identifingFireWall: 'זיהוי חומת אש',
            serachIngComponenet: "מחפש רכיבים",
            identifingComponenet :  'מזהה רכיבים:',
            componentsFound: 'הרכיבים שזוהו:',

             allDefencesAreDownPressTo : 'כל ההגנות נמצאו. לחצו על ההגנות כדי לעקוף אותן.',
             youcanIfeltrateThesystem: "ניתן כעת לקיים חדירה מוצלחת למערכת, באמצעות המשתמש :",
             signInAproved: ` כניסה אושרה`,
             ableToMackeChangesAndScan :  "ניתן לקיים שינויים ולסרוק את המערכת בתור משתמש .",
             shoudYouContinue :  'האם להמשיך ?',
             makingAhiddingOftheActivity : "ביצוע הסוואה של הפעילות",
             pressToenter: 'לחץ לכניסה',
             oneOrMoreInputsAreWrong:  'אחד או יותר מהנתונים שגוי.' ,
             entryIsforBidden:  'הכניסה אסורה. ',
             everyThingIs : 'כל הפרטים נכונים,',
             hello2 : 'שלום,',
             welcomeToTheSite: 'ברוכים הבאים למערכת.',
             firstName:  'שם פרטי',
             lastName: 'שם משפחה',
             userName : 'שם משתמש',
             securityCode: 'קוד אבטחה',
             entry: 'כניסה',

             aVirusWasBuiltToFight : "נבנה וירוס  להפלת המחשבים של ה\"ארגון\".",
             bySendingThevirusTheOrgenazation : "על ידי שליחת הוירוס הפעילות של הארגון תתפרק לזמן רב.",
             toSendTheVirusOpen : 'כדי לשלוח את הוירוס ולהפיל את האתר של \"הארגון\" פתחו את ההולוגרמה.',
             pressTheBlinkingButton : 'לחצו על הכפתור המהבהב.',
             onTheMenuChooseVirus:   "בתפריט בחרו - שלח וירוס.",
             uploadIngVirus: 'מעלה וירוס',
             uploadingVirusToserver : "מעלה וירוס לשרתים של הארגון.",
             uploadVirusProgress : "התקדמות שליחת הוירוס:",
             youMangedToWinOver : "הצלחת להעלות את הוירוס למחשבים של הארגון ולהפיל את הארגון לתקופה הקרובה.",
             goodJobPressToSeeResults: "כל הכבוד ! לחץ לסיום בשביל לראות את התוצאה שלך.",
             wouldYouLikeToFInish :  'האם לסיים ?',
             finishAndViewResults:  "סיום וצפייה בתוצאות",
             builingAttackVirus : ` בונה וירוס תקיפה `,
             therWereFound: "נמצאו ",
             suspiciusApps : "אפליקציות חשודות.",
             toScanThemAndFidSite:  'כדי לסרוק אותן ולגלות את האתר של \"הארגון\" פתחו את ההולוגרמה.',
             pressFlickeringButton :  'לחצו על הכפתור המהבהב.',
             onMenuChooseScan :  'בתפריט בחרו תוכנת סריקה.',

             userLogIn: 'כניסת משתמש',
             scanningAppa: 'סורק ישומים',
             scanningAppsInsearchFor:  "סורק ישומים בחיפוש אחר האתר של הארגון.",
             siteInDarkWeb : "אתרים ברשת האפילה:",
             allAppsWereScaned: "כל הישומים נסרקו.",
             byTheScanTheSiteFound:  "על ידי הסריקה נמצא האתר של הארגון:",
             likeToContinue :  'האם להמשיך ?',
             reportToTheAuthoroties : "דיווח לרשויות על האתר",
             searchingForBadApps:  "מחפש אפליקציות חשודות ",
             theCannerFound : `נמצאו `,
             suspiciusApps2:  `אפליקציות חשודות`,
             cantResteGameDoWithClicl : "מחובר דרך האתר. יש לאפס משחק דרך ממשק האתר.",
             cantSaveGameDoWithClicl : "מחובר דרך האתר. כדי לשמור בשם אחר, יש להתנתק דרך האתר."



         };
         if (!G.EN) return
         G.textDir = "ltr"
         G.textAlign = "left"
         G.TXT = {

             scannigApps:  "app scanning",
             upLoadingVirus:  " Uploading the virus  ",

             saveWasNotFoundRefreshThewindow :  " Saved data was not found. You can start a new game by refreshing the tab.  ",

             nameMustHave2chars:  " Name must contain at least two characters  ",

             fromNowtourProgWillBeSaved :  " From now on, you're progress will be saved at the end of each level.  ",
             ableTosave : " You can save your progress on this pc.    ",
             yourAdvanceIsSavedAtEachLevel:  " Your progress is saved at the end of each level.  ",
             loading :  " Loading  ",
             IAmNot:  " I am not  ",
             beginNewGame:  " Start a new game  ",
             firstStageBegin:  " First level - begin   ",
             continueinTheProcces :  " Continue  " ,
             findAndgetIp  :  " finding the IP  ",
              findWeaknessFirewall :  " searching weakness in the firewall  ",
              enterWithUser  :  " Entering the system with a user  ",

             findThewebSiteScanApps :  " searching the website through app scanning  ",
              BuildAttacvirusAgainst :  " building an attack virus  ",
              defenceWasBypassed :  " defence bypassed  ",
              newGame: " New game  ",
              save: " Save  ",
              back :  " Back  ",
              afterSecondAttempt:  " After a second attempt  ",
              fullHelpText1:  " Answer the questions to advance in the game. To answer a question press the right answer. Each question has only one correct answer. If you answered wrong, you could try again.  ",
              fullHelpText2:  " By opening the hologram menu you can   ",
              fullHelpText3:  " save the game on this pc, view your progress, and turn the sound on or off.  ",
             turnsoundOff:  " Turn sound On.  ",
             turnsoundOn:  " Turn sound Off.  ",
             help:  " Help  ",
             options:  " Options  ",
             progress:  " Progress  ",
             sacnApp:  "Scanning application",
             gameProgressData:  " Your game progress:  ",
             youHaveAnswered:  " You've answered  ",
             outOf:  " out of  ",
             questionsWichAre :  " questions, <br> which are  ",
             ofAllQuestion :  " of all the questions.",
             typeOfAnswer:  " type of answer  ",
             inNumbers:  " in numbers  ",
             inPrecent:  " in percent  ",
             withoutErrors:  " without errors  ",
             onSecondTry:  " on second attempt  ",
             afterSecondTry:  " after second attempt  ",
             allFilesWereLoadedContinue:   `All files were loaded. Would you like to continue?`,
youMustPlantVirusEveryAnswer: `You are going to hack the computers of the evil
   Organisation. Every correct answer will help you to
   advance the hacking process.  `,
            summary:  " Game summary  ",
            following:   "  ",
            replay:  " replay  ",
            allProgressOf :  "(All of your progress   ",
            willBeDeleted :  " will be deleted)",
            youFinishedTheGame:  " You've finished the game! You can play again to try improve your score.  ",

            ifYouSavedItWillBeDeleted:  " If you've saved game, starting a new game will delete all your progress.  ",
            youHaveWonWellDone:  " You have won over the evil Organisation! Well done!  ",


            sendVirus:  " Uploading virus  ",
            wouldYouLikeToReset:   " Are you sure you want to delete all your progress and start a new game ?",
            seachingNetWorkAddress: " Scanning for network address  ",
            IPfoundShouldContinue :   " IP address was found. Would you like to continue?",
            continue:  " Continue  ",
            anotherCheck:  " Another search  ",
            identifyingIPAdrress:   " Identifying IP address  ",
            fireWallComponnentsFound:  " Firewall components were found.  ",
            mustBypassAllDefences:   " You must bypass all defences to find the main weaknesses.  ",
            fireWallBeingScanned:   " Firewall is being scanned, searching for weak points.   ",
            breachFoundInmemory :  " Security breach was found in memory component:  ",
            AllDefencesDown :   " All defenses were bypassed. Would you like to continue ?",
            hidingActivity:  " deleting activity cyber  tracks.   ",
            identifingFireWall:  " Identifying firewall defences  ",
            serachIngComponenet:  " searching  for components  ",
            identifingComponenet :   " Identifying components  ",
            componentsFound:  " Components found:  ",

             allDefencesAreDownPressTo :  " All defenses were found. Click on each defence to neutralise it.  ",
             youcanIfeltrateThesystem:  " You can now login to  the the system  ",
             signInAproved:  " Login approved  ",
             ableToMackeChangesAndScan :   " You can now make changes as a system user.  ",
             shoudYouContinue :   " Would you like to continue ?",
             makingAhiddingOftheActivity :  " deleting activity cyber  tracks.  ",
             pressToenter:  " press to login  ",
             oneOrMoreInputsAreWrong:  " one or more of the values is incorrect.  ",
             entryIsforBidden:   " login unapproved  ",
             everyThingIs :  " all of the input is correct  ",
             hello2 :  " Hello, ",
             welcomeToTheSite:  " welcome.  ",
             firstName:   " first name  ",
             lastName:  " last name  ",

             userName :  " user name  ",
             securityCode:  " security code  ",
             entry:  " login  ",

             aVirusWasBuiltToFight : " an attack  virus against the Organization was built.  ",
             bySendingThevirusTheOrgenazation :  " By sending the virus the Organization would be paralyzed for some time.  ",
             toSendTheVirusOpen : " To send the virus open   ",
             pressTheBlinkingButton :  " press the flashing button.  ",
             onTheMenuChooseVirus:    " At the menu choose - send virus.  ",
             uploadIngVirus:  " uploading virus  ",
             uploadingVirusToserver :  " uploading virus to servers  ",
             uploadVirusProgress :  " virus upload progress  ",
             youMangedToWinOver : `You have managed to paralyzed the Organization for some time!`,
             goodJobPressToSeeResults:  " Well done! press finish, to see your results  ",
             wouldYouLikeToFInish :   " Would you like to fInish  ",
             finishAndViewResults:   " finish and view results  ",
             builingAttackVirus :  " building an attack virus  ",
             therWereFound:  " The scanner found  ",
             suspiciusApps :  " suspicious apps.  ",
             toScanThemAndFidSite:   " to scan and search for the Organization website open the hologram  ",
             pressFlickeringButton :   " press the flashing button.  ",
             onMenuChooseScan :   " On the menu choose the App scanner.  ",

             userLogIn:  " user login  ",
             scanningAppa:  "app scanning",
             scanningAppsInsearchFor:   " searching applications for criminal activity  ",
             siteInDarkWeb :  " sites on the Darkweb  ",
             allAppsWereScaned:  " all applications were scanned  ",
             byTheScanTheSiteFound:   " the Dark Web website was found:  ",
             likeToContinue :   " would you like to continue?",
             reportToTheAuthoroties :  " report site to authorities  ",
             searchingForBadApps:   " Searching for criminal applications  ",
             theCannerFound :  " The scan found  ",
             suspiciusApps2:   " suspicious apps.  ",






         };

    }

function clickAnswer (elem){
    if (G.mgmt.qNumber === 504) {storeInLocal('confirmReset'); return}
    playSound ('Consoletyping', 'loop')
    if (elem === 'rightAnswerClick') {elem = {}; let rightAnswer = G.Q[G.mgmt.qNumber][G.mgmt.solutionCol]
    let idName = 'ans'+ rightAnswer;
    let div = Id(idName); elem.target = div}
    function wrongAnswerAnimation (num) {

        if (G.mgmt.qNumber < 500) {G.mgmt.numberOftriesPerQuestion++}
        if (G.mgmt.qNumber === 503) {storeInLocal('confirmReset'); return}



        G.mgmt.isAnswering = true;
        let text = G.Q[G.mgmt.qNumber][2 + num]

        let e = 0;
        function deletAnswer () {


            let str = text.substring(text.length - e, 0);
            if (text.length + 1 < e  ){G.mgmt.isAnswering = false ;IpadGrahpic('wrong') ;playSound ('Consoletyping', 'pause');
            if (G.mgmt.qNumber < 500) { playSound ('wrongAnswer') } ; return } else {G.divs.ans[num].innerHTML = str;e++ ;setTimeout(()=>{deletAnswer () },100)}
        }
        deletAnswer ()
    }
    function answerAnimation (text, isWin){
        G.mgmt.isAnswering = true;

        let e = 0
        //G.divs.question.innerHTML += "&nbsp&nbsp"

        function typeSolution () {
            let ms = 100;
            if (G.dev_mode) ms = 1

            let str = text.substring(e, 0);
            if (text.length + 1 <= e ){ nextQuesion () ;playSound ('Consoletyping', 'pause');
            if (G.mgmt.qNumber < 500) { playSound ('rightAnswer') }
            ;return } else {G.css.typeSolution = " " + str;e++ ;setTimeout(()=>{typeSolution () },ms)}
        }
        typeSolution ()

    }
    function nextQuesion () {
        if (G.mgmt.qNumber < 500) {
            IpadGrahpic ('right');
            G.mgmt.numberOftriesPerQuestion++;
            G.saves.progressArray[G.mgmt.qNumber] = G.mgmt.numberOftriesPerQuestion;
            G.mgmt.numberOftriesPerQuestion = 0;
        }
        G.mgmt.isAnswering = true;


        let op  = 1;
        let opDelta = 0.05
        let time = 20;
        let tb = Id('textBlock');
        let rgnObj = hexToRgb(G.css.textcolor)
        let rgbPartialTxt = "rgba(" + rgnObj.r + "," + rgnObj.g + "," + rgnObj.b + ",";
        for (let i = 1; i < 5; i++) {

            if (G.divs.ans[i].innerHTML) {G.divs.ans[i].innerHTML = G.Q[G.mgmt.qNumber][i + 2]}
        }
        function fadeOut () {
            let textInfo = Id ('infoText')


            let finRgb = rgbPartialTxt + op + ")"
            let plus = 1;
            //
            tb.style.color = finRgb;
            if (G.Q[G.mgmt.qNumber + 1] !== undefined && G.Q[G.mgmt.qNumber][1] === G.Q[G.mgmt.qNumber + 1][1]) {textInfo.style.color = G.css.textcolor}
            op =  op - opDelta;
            if (op > 0){setTimeout(()=>{fadeOut ()}, time)} else if (!G.mgmt.isFinalAnsInChapter){
                if (G.mgmt.qNumber === 500){G.mgmt.qNumber = G.hacks.lastqNumber;plus = 0;
                    if (G.mgmt.isChapterCheckout) {G.mgmt.nextStage() ; IpadGrahpic (G.saves.stage)}
                } ;
                if (G.mgmt.qNumber === 503) {
                    blackScreen('startGame');
                    return}
                if (G.mgmt.qNumber === 505) { blackScreen('endGame'); return}

            setQuestion(G.mgmt.qNumber+ plus)} else if (G.mgmt.isFinalAnsInChapter) {

                G.mgmt.isFinalAnsInChapter = false; IpadGrahpic ('finishChaper')
            }
        }
        fadeOut ()
    }
    if (G.mgmt.isAnswering) return;
    let ansId = elem.target.id;
    if (elem.target.nodeName == "DIV") {} else {ansId = elem.target.parentElement.id }
    let ansDiv = Id(ansId);

    let numOfans =  Number(ansId.replace("ans", ''))

     G.mgmt.clickedAnswer = numOfans;
    let solutionNumber = G.Q[G.mgmt.qNumber][G.mgmt.solutionCol]
    let solutionText = G.Q[G.mgmt.qNumber][2 + Number(solutionNumber)]

    if (numOfans == G.Q[G.mgmt.qNumber][G.mgmt.solutionCol]) {answerAnimation(solutionText)} else {

        wrongAnswerAnimation (numOfans)
        }

}
function playSound (typ, command = 'play') {
    function preLoader () {
        const keys = Object.keys(G.sound)
        keys.forEach((k)=>{

            let k1 = k;
            let savedVolume = G.sound[k].volume
            G.sound[k].volume = 0.001
            playSound(k1)
            setTimeout(()=>{playSound(k1,'pause');G.sound[k1].volume = savedVolume ; },1200)
        })

    }

    function BuildSounds () {
        G.sound.Consoletyping = new Audio('data/terminalType.mp3'); G.sound.Consoletyping.volume = 1
        G.sound.HackerTheme = new Audio('data/HackerTheme.mp3'); G.sound.HackerTheme.volume = 0.2
        G.sound.clickSound = new Audio('data/clickSouond.mp3'); G.sound.clickSound.volume = 0.07
        G.sound.wrongAnswer = new Audio('data/wrongAnswer.mp3'); G.sound.wrongAnswer.volume = 0.2
        G.sound.rightAnswer =  new Audio('data/rightAnswer.mp3'); G.sound.rightAnswer.volume = 0.1
        G.sound.openHolo  =  new Audio('data/openHolo.mp3'); G.sound.openHolo.volume = 0.1 //
        G.sound.ipadMoves = new Audio('data/ipadMoves.mp3'); G.sound.ipadMoves.volume = 0.2 //
        G.sound.scannerEffect = new Audio('data/scannerEffect.mp3'); G.sound.scannerEffect.volume = 0.8
        G.sound.scannerWin = new Audio('data/scannerWin.mp3'); G.sound.scannerWin.volume = 0.4
        G.sound.crackDefence = new Audio('data/crackDefence.mp3'); G.sound.crackDefence.volume = 0.4
        G.sound.welcomeEffect = new Audio('data/welcomeEffect.mp3'); G.sound.welcomeEffect.volume = 0.4 // virusEffect
        G.sound.virusEffect = new Audio('data/virusEffect.mp3'); G.sound.virusEffect.volume = 0.4 // virusEffect
        G.sound.virusUpload = new Audio('data/virusUpload.mp3'); G.sound.virusUpload.volume = 0.4



        //

    }
    function playerFunc (sound) {
        function pause (sound) {
            var promise = sound.pause();
            if ( command === 'stop') {sound.currentTime = 0;}
            if (promise !== undefined) {
              promise.then(_ => {}).catch(error => {});
            }

        }
        if (command === 'pause' || command === 'stop') {pause (sound); return }
        sound.currentTime = 0
        if ((sound.volume > 0.002) && !G.mgmt.soundIsOn) {return}
        var promise = sound.play();
        if (command === 'loop'){sound.loop = true}
        if (promise !== undefined) {
          promise.then(_ => {}).catch(error => {});
        }

    }

    switch (typ) {
        case 'BuildSounds' : BuildSounds (); break
        case 'preLoader': preLoader(); break;
        case "Consoletyping":case "clickSound": default: playerFunc (G.sound[typ]) ;break;
    }


}
function holoMenu (r) {
    // creats the menue inside the holo;
    //G.divs.holoMenuoptions = G.divs.holoMenuoptions || [];
    function scanApps () {


        if (Id('scanApps').innerHTML === G.TXT.scannigApps) {return}
        if (G.saves.stage !== 'webSite') {Id('scanApps').innerHTML = ''}
        let scanAppDiv = Id('scanApps');
        scanAppDiv.innerHTML = G.TXT.scannigApps;
        scanAppDiv.style.color = 'blue'

        function blinker (b) {
            let o = Math.sin (b) + 1;
            scanAppDiv.style.opacity = o + " "
            b++;
            if (Id('scanApps') && G.saves.stage === 'webSite' ){setTimeout(()=>blinker(b), 100)} else {if (Id('scanApps')){Id('scanApps').innerHTML = ''}}

        }
        blinker (1)

    }
    function sendVirus () {

        if (Id('sendVirus').innerHTML === G.TXT.upLoadingVirus) {return}
        let sendVirusDiv = Id('sendVirus');
        sendVirusDiv.innerHTML = G.TXT.upLoadingVirus;
        sendVirusDiv.style.color = '#6B202F'
        function blinker (b) {
            let o = Math.sin (b) + 1;
            sendVirusDiv.style.opacity = o + " "
            b++;
            if (Id('sendVirus') ){setTimeout(()=>blinker(b), 100)}

        }
        blinker (1)
} // sendVirus ()
    function submitF(formArray) {

        let Formtext = Id('Formtext');
       if (formArray === 'clear'){

           if (!storeInLocal ('check')){ Formtext.innerHTML = G.TXT.saveWasNotFoundRefreshThewindow ;
           return;
       }
       if (G.isTheGameConnectedToClick) {
           Formtext.innerHTML = '<span style="color:red;">' +  G.TXT.cantResteGameDoWithClicl + "</span>";
           return;
       }

           storeInLocal('confirmReset');
           return
       }
       if (G.isTheGameConnectedToClick) {
           Formtext.innerHTML = '<span style="color:red;">' +  G.TXT.cantSaveGameDoWithClicl + "</span>";
           return;
       }
       let input = Id('input').value
       if (input.length < 2){Formtext.innerHTML = G.TXT.nameMustHave2chars + '<br>'; return}
       G.saves.nameOfplayer = input;
       //visuaGamelLoader (true);
       Formtext.innerHTML = '&nbsp';
       let inputName = input;
       inputName += G.TXT.fromNowtourProgWillBeSaved
       setTimeout(()=>{StylelFader (Formtext,50,true)
       Formtext.innerHTML = inputName;},50 )
       storeInLocal ('save')



    }



    function saveMenu () {
        let userMessage = G.TXT.ableTosave;
        //let
        let formStyle = `font-family: david; font-size: 4vmin; color:rgba(3,100,100); opacity:0.7; text-shadow :6px 2px 8px yellow ; border-radius:1vmin;font-weight:bold;`

       if (storeInLocal ('check')){userMessage = G.saves.nameOfplayer + ', ';
       userMessage  += G.TXT.yourAdvanceIsSavedAtEachLevel
       }
       userMessage += ' <br>'


        let form = `<form id='saveForm' method="post" action="javascript:" style="text-align: center ;font-size: 3vmins">
<div id ="Formtext" style="height:7vmin;"> ${userMessage}</div><br>
  <input id='input' type="text" name="name" value="" style="${formStyle} ; color:rgba(3,3,3) ;background: transparent; border-radius: 0.5vmin ; width:70%;" ><br>

  <br>

  <input id="saveButton" type="submit" value="${G.TXT. save}" style=" ${formStyle}font-size: 4vmin">&nbsp&nbsp
 <input id="clear" type="submit" value="${G.TXT.newGame}" style=" ${formStyle}font-size: 4vmin">
</form><br><br>`
let op = [ ['form' , form],['mainMenu', G.TXT.back ]]
createMenu (op)


    }
    function holoAnimation (dir, sz ){
        dir = dir || 1
        sz = sz || 2
        //G.divs.holoSurface.style.backgroundImage =  "url(data/hol" + sz +   ".svg)",
        G.divs.holoSurface.style.backgroundSize = sz * 1 + "%";
        let rnd = ((getRandomInt (100)) / 1000) ;
        let op = G.divs.holoSurface.style.opacity + (rnd * dir)
        G.divs.holoSurface.style.opacity =  op;
        //if (rnd < 0.002) {G.divs.holoSurface.style.opacity = 0.2 }
        //if (rnd > 0.097) {G.divs.holoSurface.style.opacity = 0.6 }
         sz += dir
         if (sz > 8 &&  dir > 0) {sz = 1;  dir  = dir * -1}
         if (sz < 1 &&  dir < 0) {sz = 8;  dir  = dir * -1}
         setTimeout (()=>{holoAnimation (dir, sz)},80)

    }
    function mouseInOut (evnt){

            function inlarge (trns, tm){
                if (evnt.target.style.transform === 'scale(' + 1 + ')' || trns > 1.2){ return}

                trns =  trns + 0.1
                evnt.target.style.transform = 'scale(' + trns + ')'

                setTimeout(()=> {inlarge (trns, tm)}, tm);
                return
            }
            var tr =  evnt.target.id  ;
            if (evnt.type === 'mouseover') {evnt.target.style.backgroundColor = G.linkColor_Hover
                evnt.target.style.transform = 'scale(' + 1.05 + ')'
                inlarge (1, 20)


            }
            if (evnt.type === 'mouseout') {evnt.target.style.backgroundColor = G.linkColor
                evnt.target.style.transform = 'scale(' + 1 + ')'

            }
            ;

         }
    function createMenu (arrayOfText) {
        fadeOutPromise (G.divs.holoScreen, 20).then((returnValue)=>{
            G.divs.holoScreen.innerHTML = '';
            StylelFader (G.divs.holoScreen, 30, true)
            arrayOfText.forEach (function (i){addOption(i)})
        })


        }
    function addOption (text) {
         var option = Elm (text[0]);
         var extraStyle = {};
         G.divs.holoScreen.appendChild (option) ;
         let fontS = '5vmin'; if (G.EN){fontS = '4.5vmin' }
         stl (option, { 'fontFamily': 'david', 'fontSize': fontS, 'color' : 'rgba(3,100,100)', 'opacity' : 0.7, 'textShadow' : "6px 2px 8px yellow",}, extraStyle)
         option.innerHTML = text[1] ;
         if (text[0] === 'form') {
             let save = Id('saveButton');  save.addEventListener('click',(f)=>{submitF(f)})
             let clear = Id('clear');  clear.addEventListener('click',(f)=>{submitF('clear')})
         }
         if (text[0] === 'text' || text[0] === 'form') {option.style.fontSize = '2.8vmin'; option.style.paddingRight = "6vmin"; option.style.textAlign = "right"; return}
         if (text[0]  === 'scanApps' || text[0]  === 'sendVirus'){option.style.color = 'red'}
         option.addEventListener('mouseout',mouseInOut);
         option.addEventListener('mouseover',mouseInOut)
         option.addEventListener('click',clickSubMenu);
    }
    function progressMenu () {
        function checkForUpdate (tim = 4000) {

            let txt0 = G.TXT.afterSecondAttempt
            let qAnswered = G.saves.progressArray.length || 0 ; qAnswered--
            if(G.divs.holoScreen.innerHTML.includes(txt0)){
                // if (qAnswered === G.saves.progressArray.length){setTimeout(()=>{checkForUpdate (5000)},4000 )} else {progressMenu ()}
                G.divs.holoScreen.querySelector("#text").innerHTML = progressText ();
                setTimeout(()=>{checkForUpdate (tim)},tim )
                //progressMenu ()
            }
        }

        let progTxt = progressText ();

        let op = [ ['text' , progTxt],['mainMenu', G.TXT.back]]
        createMenu (op)
        setTimeout(()=>{checkForUpdate (3000)},4000 )

    }
    function helpMenu  (){

        let helpText = `${G.TXT.fullHelpText1}
${G.TXT.fullHelpText2}<br><br>
<br> ${G.TXT.fullHelpText3}
 <br><br>
`
        let op = [ ['text' , helpText],['mainMenu', G.TXT.back]]
        createMenu (op)

    }
    function optionsMenu () {

        let sound;
        if (G.mgmt.soundIsOn) { sound = ['soundOff',G.TXT.turnsoundOff]} else { sound = ['soundOn', G.TXT.turnsoundOn]}
        let op = [sound,['mainMenu', G.TXT.back]]
        createMenu (op)
    }
    function clickSubMenu () {
        switch (event.target.id) {
            case 'optionsMenu': optionsMenu ();break;
            case 'progressMenu': progressMenu ();break;
            case 'saveMenu': saveMenu ();break;
            case 'helpMenu': helpMenu ();break;mainMenu
            case 'mainMenu': mainMenu ();break;
            case 'sendVirus': sendVirus ();break;
            case 'scanApps': scanApps ();break;
            case 'soundOff': case 'soundOn':
            G.mgmt.soundIsOn = !G.mgmt.soundIsOn;
            optionsMenu () ;break;


            //case optionArray
        }
    }
    function mainMenu (){

         let optionArray = [['optionsMenu',G.TXT.options],['progressMenu',G.TXT.progress ] ,['saveMenu',G.TXT.save],['helpMenu',G.TXT.help]]
         if (G.mgmt.numOfsuccess  >=G.mgmt.max_Tofind.webSite && (G.mgmt.current === 'webSite')) {
             optionArray.push(['scanApps',G.TXT.sacnApp])
         }

         if (G.mgmt.numOfsuccess  >=G.mgmt.max_Tofind.virus && (G.mgmt.current === 'virus')) {
             optionArray.push(['sendVirus',G.TXT.sendVirus])
         }

         createMenu (optionArray)

     }
    function fadeOutPromise (element0, tm = 30){
        let opct = 1;
         let delta = 0.1;
            let promise0 = new Promise((resolve, reject) => {
                function faderEngine (opct) {
                    element0.style.opacity = opct;
                    opct -= delta
                    if (opct<0){ resolve ('worked');}
                    else { setTimeout(()=>faderEngine (opct),tm)}

                }
                faderEngine (1)

                // let wait = setTimeout(() => {
                //     clearTimout(wait);
                //     resolve('Promise A win!');
                // }, 200)
            })
            return promise0
     }
    if (r === 'scanner') {mainMenu (); return};


    holoAnimation ();
    mainMenu ();
    G.divs.holoContainer.style.opacity = "0";
    //let page = Id('laptopKeyboard')
}
function ledEvent (e){
    function fadeHolo (op = 1,diro = 1.1,tm = 50) {
        op = op || 1
        G.divs.holoContainer.style.opacity = op;
        op -= (0.08 * diro)
        if (op > 0.00 &&  op < 1.3) {setTimeout (()=>{fadeHolo (op, diro)}, tm); }
    }
    function toggleHolo () {
        if (G.mgmt.ipadMoves) {return}
        playSound ('ipadMoves')

        G.mgmt.ipadMoves = true;

        function slideIpadUp (y,delta = -2,end = -50, tm = 10) {
            let top =  Pre2Num( G.divs.ipadContainer.style.top)
            y = y || top;
            y += delta;
            G.divs.ipadContainer.style.top = y + "%"
            if (delta < 0 && y < end || delta > 0 && y > end -3){G.mgmt.ipadMoves = false;

                if (delta < 0) { G.divs.holoContainer.style.opacity = 0;fadeHolo (0.2,-1,80) ;
                     G.divs.holoContainer.style.visibility= "visible"; } else { G.divs.holoContainer.style.visibility= "hidden"; G.divs.holoContainer.style.opacity = 1 };
                     if (G.mgmt.numOfsuccess  >=G.mgmt.max_Tofind.webSite && (G.mgmt.current === 'webSite')) {holoMenu();}
                      if (G.mgmt.numOfsuccess  >=G.mgmt.max_Tofind.virus && (G.mgmt.current === 'virus')) {holoMenu();}

                 return
             }
            setTimeout(()=> { slideIpadUp (y,delta,end, tm)},tm)
        }

        if (G.mgmt.isHolo) {

            fadeHolo (1,1);
            slideIpadUp (-50, 2, 3, 14) ; G.mgmt.isHolo = false } // 10
            else if (!G.mgmt.isHolo) {
            //playSound ('openHolo');
            slideIpadUp ()
            G.mgmt.isHolo = true;
            }


    }

    G.mgmt.ledWaveTimer = G.mgmt.ledWaveTimer || false
    if(G.mgmt.ledWaveTimer){ clearInterval(G.mgmt.ledWaveTime)}
    function ledBlink (times = 3,interval = 300 ,colorA, colorB, delta, adder = 1){

        let isEven = n =>  n % 2 == 0;
        let color1 =  colorA || "grayscale(00%) brightness(200%)";
        let color2 =  colorB || "grayscale(100%)";
        notOdd = isEven(times);
        let clr;
        if (!notOdd){clr = color1 }else {clr = color2}
        if (Number.isInteger(colorA + colorB)){
            if (G.mgmt.ledEvent === 'hover') {} else {return}
            delta = delta || colorA
            clr  = "hue-rotate (" + 200 + "deg)"
            delta += adder;
            if (delta > colorB || delta < colorA) {adder = adder *-1 }
            clr = "hue-rotate(" + delta +"deg) brightness(130%)"
        }

        G.divs.led.style.filter = clr
        times--;
        if (times > 0) {G.mgmt.ledWaveTimer =  setTimeout (()=>{ ledBlink (times, interval,colorA, colorB, delta,  adder)} ,interval)} else {
            G.divs.led.style.filter = "grayscale(00%)"
             G.mgmt.ledEvent = false; return}

    }

    let typeOfe = e.type;
    if  (typeOfe === "click") {
        G.mgmt.ledEvent = 'click';

        if (!e.isAtificial) {toggleHolo () ; ledBlink (6);} else {ledBlink (40)}
    } else if (typeOfe === "mouseout") {
            G.divs.led.style.filter = "grayscale(00%)" //222 red //
            ; G.mgmt.ledEvent = false}
        else if (typeOfe === "mouseover") {
            G.mgmt.ledEvent = 'hover';
             ledBlink (1000, 10 ,10, 200,10,3)
      }

}
function buildBoard (){


    arrangeStages (G.mgmt.totalNumOfQuestions)
    function arrangeStages (t) {
        let allQ = t //G.mgmt.totalNumOfQuestions //fsdfsdf
        let originalNames = G.mgmt.stageNames;
        let destenationStages = [];
        const minimumQ = 4;
        let numberOfStages = Math.floor (allQ/minimumQ);
        if (numberOfStages < 1){numberOfStages = 1} else if (numberOfStages > 5){numberOfStages=5}

        if (numberOfStages > 1) {destenationStages.push (G.mgmt.stageNames[1]) }
        for (let s = 2; s < numberOfStages; s++) {
            destenationStages.push (G.mgmt.stageNames[s])
        }
        destenationStages.push (G.mgmt.stageNames[5])
        let avrageQperStage = Math.floor (allQ/numberOfStages);
        let modeloQuestions = allQ % numberOfStages

        destenationStages.forEach((s)=>{
            G.mgmt.max_Tofind[s] = avrageQperStage;
        })
        G.mgmt.max_Tofind[G.mgmt.stageNames[5]]  +=modeloQuestions
        G.mgmt.stageNames = [""]
        for (let a = 0; a < destenationStages.length ; a++) {
            G.mgmt.stageNames.push(destenationStages[a])

        }

    }
    function keyPressFunc (e) {

        if (e.charCode == 49 && !G.mgmt.isFinalAnsInChapter && G.dev_mode) { // && G.dev_mode
            clickAnswer ('rightAnswerClick');

        }
    }
    function mOverAnswer (elem){

        //playSound ('clickSound', 'stop');


        function mouseOutTimer () {

            if (G.css.isMouseOutTimer){true}
            G.css.isMouseOutTimer = true
            G.mgmt.mouseIsOver = 0;
            function mOut (elem){
                if (G.mgmt.isAnswering){return}

                //    let ansId = elem.target.id;
                //    let ansDiv = Id(ansId);

                for (let i = 1; i < 5; i++) {
                    //if (i == numOfans) {continue}
                    if (G.divs.ans[i].innerHTML) {G.divs.ans[i].innerHTML = G.Q[G.mgmt.qNumber][i + 2]}
                }


            }

            G.css.mouseOnTimer = G.css.mouseOnTimer - 100
            if (G.css.mouseOnTimer < 0){mOut () ;G.css.isMouseOutTimer = false; return }

            setTimeout(()=>{mouseOutTimer ()},100)

        }
        if (G.mgmt.isAnswering){return};
        let ansId = elem.target.id;
        let ansDiv = Id(ansId);
        let numOfans =  Number(ansId.replace("ans", ''))
        G.mgmt.mouseIsOver = numOfans;
        if (G.mgmt.isAnswering && G.mgmt.clickedAnswer == numOfans){return}
        if (numOfans === 0){return}


        G.css.lastHoverEvent = numOfans;
        let html = G.Q[G.mgmt.qNumber][numOfans + 2];
        let newHtml = "<span style='background-color:" +  G.css.textcolor + "; color : " + G.css.backGroundtextcolor + "'>" + html + "</span>";
        ansDiv.innerHTML = newHtml;
        playSound ('clickSound', 'play')


        for (let i = 1; i < 5; i++) {
            if (i == numOfans) {continue}
            if (G.divs.ans[i].innerHTML) {G.divs.ans[i].innerHTML = G.Q[G.mgmt.qNumber][i + 2]}
        }
        G.css.mouseOnTimer = 2000;
        if (G.css.isMouseOutTimer) {return}

        mouseOutTimer ();

    }
    document.body.addEventListener("keypress", keyPressFunc)
    var drone = Id("ErrorCheck");
    drone.innerHTML = "";
    G.divs.pagecontainer = Elm ('pagecontainer');
    G.divs.ipadContainer = Elm ('ipadContainer');
    G.divs.ipadCover = Elm ('ipadCover');
    G.divs.ipad = Elm ('ipad','canvas');
    G.divs.holoSurface = Elm ('div','holoSurface');
    G.divs.holoContainer = Elm ('div','holoContainer');
    G.divs.holoScreen = Elm ('div','G.divs.holoScreen');
    G.divs.laptopKeyboard = Elm ('laptopKeyboard');
    G.divs.textContainer = Elm ('textContainer');
    G.divs.textBlock = Elm ('textBlock');
    G.divs.textBlock2 = Elm ('textBlock2');
    G.divs.infoText = Elm ('infoText');

    G.divs.question = Elm ('question');
    G.divs.holoUI = Elm ('holoUI');
    G.divs.led = Elm ('led','img')
    G.divs.led.src = "data/led.png";

    //G.divs.theCanvas = document.createElement('canvas'); G.divs.theCanvas.id = 'theCanvas';
    G.divs.ans = []
    let maxAnswers = 5
    G.divs.holoContainer.style.visibility = "hidden";
    stl (G.divs.laptopKeyboard, {
        "position": "fixed",
        "background" : "url(data/keyboard.png)",
        "backgroundSize": "100%",
        'overflow': 'hidden',
        "backgroundRepeat": "no-repeat",
        'width':'85%',
        'height': '50%',
        'margins': '0%',
        'padding': '0%',
        "top": "87%",
        "left" : "-8.9%",
    })
    stl (G.divs.pagecontainer, {
        "position" : 'fixed',
        'top': '0%',
        'left':'0%',
          "background" : "url(data/pagebackround.png)",
          "backgroundSize": "100%",
          'overflow': 'hidden',
          //"backgroundRepeat": "no-repeat",
          'width':'100%',
          'height': '100%',
          'margins': '0%',
          'padding': '0%'
        })
    stl (G.divs.textBlock , myStyle('text'), {
        'position':'absolute',
        'left':'3.7%',
        'top':'5%',
        'height':'85%',
        'width':'90%',
        'textAlign': 'left',
        'fontSize': G.css.textFontSize + 'vi',
        'backgroundColor': G.css.backGroundtextcolor,
        'direction': 'ltr',
        'border': '20% solid grey',
         "borderRadius": "3vmin",
        'margins': '0%',
        'padding': '1%',
        'zIndex':'20',
        'fontFamily':G.css.font_0,

    })
    stl (G.divs.textBlock2 , myStyle('text'), {
        'position':'absolute',
        'left':'3.7%',
        'top':'5%',
        'height':'85%',
        'width':'90%',
        'textAlign': 'left',
        'fontSize': G.css.textFontSize + 'vi',
        'backgroundColor': G.css.backGroundtextcolor,
        'direction': 'ltr',
        'border': '20% solid grey',
         "borderRadius": "3vmin",
        'margins': '0%',
        'padding': '1%',
        'zIndex':'20',
        'fontFamily':G.css.font_0,

    })
      let gradientColor = "linear-gradient(60deg ,#3e4042,#3e4042 ,#3e4042,#3e4042 ,#3e4042,#334042 ,#3e4042,#3e4042 ,#3e4042,#4d4d4d, rgba(120,120,120), rgba(120,120,120), rgba(120,120,120) ,#3e4042,#3e4042,#3e4042,#3e4042 )"
    let gradientColor2 = "linear-gradient(60deg ,#cccccc,#cccccc ,#cccccc,#cccccc ,#cccccc,#cccccc ,#f2f2f2,#e6e6e6,#e6e6e6,#cccccc , rgba(254,254,254), rgba(254,254,254), rgba(254,254,254) ,#cccccc,#cccccc,#f2f2f2,#f2f2f2 )"
    stl (G.divs.textContainer, {
        'backgroundImage': gradientColor,'padding': '5%','position':'absolute',
        'left':'1%',
        'top':'1%',
        'height':'65%',
        'width':'55%',
        'border': '0.5vmin solid black',
        "borderRadius": "4vmin",
        //backgroundImage: "url('data/pcBorder.jpg')",
        "resize": "both",})
    stl (G.divs.ipadContainer, {
            'backgroundImage': gradientColor2,'padding': '5%','position':'absolute',
            'left':'69%',
            'top':'3%', //3% holo
            'height':'55%',
            'width':'18%',
            'border': '0.5vmin solid black',
            "borderRadius": "4vmin",
            overflow: 'hidden',
            'backgroundImage': 'url("data/ipadplastic.jpg")',

            "resize": "both",})
    stl (G.divs.ipad , myStyle('text'), {
                'position':'absolute',
                'left':'3.7%',
                'top':'5%',
                'height':'85%',
                'width':'87.7%',
                'textAlign': 'left',
                'backgroundColor': G.css.canvasBackground,
                'direction': 'ltr',
                'border': '1vmin solid black',
                 "borderRadius": "3vmin",
                'margins': '0%',
                'padding': '1%',
                'zIndex':'20',
                'fontFamily':G.css.font_0,

            })
    stl (G.divs.holoUI, {
        "position": "fixed",
        "background" : "url(data/holoUI2.png)",
        "backgroundSize": "100%",
        'overflow': 'hidden',
        "backgroundRepeat": "no-repeat",
        'width':'25%',
        'height': '50%',
        'margins': '0%',
        'padding': '0%',
        "top": "77%",
        "left" : "70.9%",
    })
    stl (G.divs.holoSurface, {
        "position": "fixed",
        "background" : "url(data/hol1.svg)",
        "opacity": '0.3',
        "backgroundSize": "10%",
        'overflow': 'hidden',
        "backgroundRepeat": "repeat",
        'border-radius': '7vmin',
        'border-top': '2vmin solid #01ffffff',
        'border-bottom': '4vmin solid #01ffffff',
        'width':'22%',
        'height': '40%',
        'margins': '0%',
        'padding': '0%',
        "top": "33.5%",
        "left" : "71.9%",
    })
    stl (G.divs.holoScreen,myStyle('text'),  {"position": "fixed",
            "opacity": '1',
            'overflow': 'hidden',
            "fontSize" : '4vmin',
            'fontWeight' : 'bold',
            'fontFamily' : 'ariel',
            'textAlign': 'center',
            'color' : "black",
            'width':'22%',
            'height': '40%',
            'margins': '0%',
            'padding': '2% 2% 2% 2%',
            "top": "33.5%",
            "left" : "71.9%",
            'cursor': "url('data/favicon-16x16.png'), auto"
        })
    stl (G.divs.led,{
        "position": "relative",
        //"background" : "url(data/led.png)",
        "backgroundSize": "50%",
        'overflow': 'hidden',
        "backgroundRepeat": "no-repeat",
          'width':'24%',
        'height': '24%',
        'margins': '0%',
        'padding': '0%',
        "top": "10%",
        "left" : "70%",
    })
    document.body.appendChild (G.divs.pagecontainer);
    pagecontainer.appendChild (G.divs.laptopKeyboard)
    pagecontainer.appendChild (G.divs.textContainer);
    pagecontainer.appendChild (G.divs.holoUI);
    pagecontainer.appendChild (G.divs.ipadContainer);

    textContainer.appendChild (G.divs.textBlock);
    G.divs.holoUI.appendChild (G.divs.led);
    G.divs.textBlock.appendChild (G.divs.infoText);
    G.divs.textBlock.appendChild (G.divs.question);
    G.divs.ipadContainer.appendChild (G.divs.ipad);
    G.divs.ipadContainer.appendChild (G.divs.ipadCover);
    pagecontainer.appendChild (G.divs.holoContainer);
    G.divs.holoContainer.appendChild (G.divs.holoSurface);
    G.divs.holoContainer.appendChild (G.divs.holoScreen)

    let ipadComputedWidth = G.divs.ipad.clientWidth
    let ipadComputedHeight = G.divs.ipad.clientHeight
    stl (G.divs.ipadCover, {
        'position': 'relative',
        'zIndex': 40,
        //'backgroundColor': 'red',
       //  'top': ipadComputedHeight * -0.024 + '%',
       //  'left':ipadComputedWidth * -0.14 + 'px',
       //  'height':ipadComputedHeight  + 'px',
       // 'width':ipadComputedWidth + 'px',
       'top': '-10%',
       'left': '-20%',
       'height' : '120%',
       'width' : '140%',
       'overflow': 'hidden',
        "resize": "both",})




    for (let i = 1; i < maxAnswers; i ++){
        let ansId = 'ans' + i;
        G.divs.ans[i] = Elm (ansId);
        G.divs.textBlock.appendChild (G.divs.ans[i]);
        G.divs.ans[i].addEventListener('mouseover',mOverAnswer,true);
        G.divs.ans[i].addEventListener('click',clickAnswer,false);
        G.divs.ans[i].style.cursor = 'pointer'

        G.divs.ans[i].style.zIndex = "200";

    }
    G.divs.led.addEventListener('mouseover',ledEvent,true)
    G.divs.led.addEventListener('mouseout',ledEvent,true);
    G.divs.led.addEventListener('click',ledEvent,true);

}
function progressText (){
    function preCent (small,big) {
        if (small && big){} else return '0%'
        let double = Math.floor(100*(small / big))
        return double + '%'

    }
    let qTotal = G.mgmt.totalNumOfQuestions || 0;
    let qAnswered = G.saves.progressArray.length || 0 ; qAnswered--; if (qAnswered <0) {qAnswered = 0}
    let qNumBytry = [];
    let qprecent = preCent (qAnswered,qTotal)
    let namePlayer = ''; if (G.saves.nameOfplayer) { namePlayer = G.saves.nameOfplayer + ", "}
    for (let a= 0; a < 4; a++){
        var countOfTries = 0
        G.saves.progressArray.forEach((e)=>{if (e === (a+1)){countOfTries++}})
        qNumBytry[a] = countOfTries;
    }
    let q0=0, q1=0, q23=0, p0='0%', p1='0%', p23='0%';
    q0 = qNumBytry[0]; q1 = qNumBytry[1]; q23 = qNumBytry[2] + qNumBytry[3]
    p0 = preCent(q0,qAnswered); p1 =  preCent(q1,qAnswered); p23=  preCent(q23,qAnswered)

    let txt0 = G.TXT. gameProgressData ;
    let txt1 = `<br><br>` + namePlayer + G.TXT.youHaveAnswered +  qAnswered + G.TXT.outOf + qTotal +  G.TXT.questionsWichAre + qprecent + '&nbsp'+ G.TXT.ofAllQuestion;
    let table = `<table style="width:100% ; border: solid 0.2vmin;  border-collapse: collapse; ; text-align: center ;margin-top:3vmin"> <tr style="border:solid 0.2vmin">   <th  style="border:solid 0.2vmin"> ${G.TXT.typeOfAnswer}</th>   <th  style="border: solid 0.2vmin"> ${G.TXT.inNumbers}  </th>   <th  style="border: solid 0.2vmin">  ${G.TXT.inPrecent}      </th> </tr> <tr  style="border: solid 0.2vmin">  <td>${G.TXT.withoutErrors} </td>   <td>${q0}</td> <td>${p0}</td> </tr> <tr>   <td> ${G.TXT.onSecondTry}     </td>   <td>${q1}</td> <td>${p1}</td> </tr> <tr style="border: solid 0.2vmin">   <td>${ G.TXT.afterSecondTry}</td>   <td>${q23}</td> <td>${p23}</td> </tr></table>`

    let txt = txt0 + txt1 + table;
    return txt

}
function storeInLocal (command){
    function storeInLocalFROMSHOOTER (command){
        var createEvent  = (actionType, key, value)  => {let ev = new Event ('storage'); ev.key = key; ev.value = value
        ev.actionType = actionType; return window.dispatchEvent(ev)}


        switch (command){
            case 'save':

            localStorage.setItem(G.saveInLocalStorageKey, JSON.stringify(G.saves));
            createEvent  ('save',G.saveInLocalStorageKey , JSON.stringify(G.saves));
            break;
            case 'check':
            if (G.saves.nameOfplayer) {return true} else {return false}

            break;

            case 'load':
            var retrievedObject = localStorage.getItem(G.saveInLocalStorageKey);
            if (retrievedObject) {G.saves = JSON.parse(retrievedObject); }
            G.mgmt.qNumber = G.saves.lastSavedQuestion;

            break;

            case 'reset':
            if (G.isTheGameConnectedToClick) {alert (G.TXT.cantResteGameDoWithClicl); break}
            localStorage.removeItem(G.saveInLocalStorageKey);
``
            break;

            case 'confirmReset':
            if (G.isTheGameConnectedToClick) {alert (G.TXT.cantResteGameDoWithClicl); break}
            let tx = G.TXT.wouldYouLikeToReset
            if (confirm(tx)) { storeInLocal ('reset'); location.reload()};
            break;
        }
    }
    return  storeInLocalFROMSHOOTER (command)
/*

    let myFileName = location.pathname //.split("/").slice(-1)
    let htmlFileName = myFileName ;//[0];
    switch (command){
        case 'check':
        let chk = localStorage.getItem('isSaved' + htmlFileName);
        if (chk == 'true'){return true} else {return false}
        break;

        case 'save':

        localStorage.setItem('global' + htmlFileName, JSON.stringify(G.saves));
        localStorage.setItem('isSaved' + htmlFileName, 'true');
        break;

        case 'load':

        var retrievedObject = localStorage.getItem('global' + htmlFileName);
        G.saves = JSON.parse(retrievedObject);
        G.mgmt.qNumber = G.saves.lastSavedQuestion;
        break;

        case 'reset':
        localStorage.setItem('isSaved' + htmlFileName, 'false')
        break;

        case 'confirmReset':


        let tx = G.TXT.wouldYouLikeToReset
        if (confirm(tx)) { storeInLocal ('reset'); location.reload()};
        break;
    }
    */
}
function setQuestion (num) {


    function blinkCursor(){

        if (t < 5){return}

        if (G.divs.question.isCursorOn) {G.divs.question.isCursorOn = false } else
        {G.divs.question.isCursorOn = true};
        let cursor = "▉";

        let nocursor = "<font color = '" + G.css.backGroundtextcolor +
         "'> ▉</font>"
        let br = G.css.breakAfterQuestion;
        let addedText0 = '';
        if (G.css.typeSolution) {br = br.replace(/<br>/i,'') }
        if (G.css.typeSolution) { addedText0 = '<br>' + G.css.typeSolution}

        let addedText1 = G.divs.question.isCursorOn ? cursor : nocursor ;
        let addedText = addedText0 + addedText1
        G.divs.question.innerHTML = G.Q[num][2]  + addedText +  br;



    }
    function typeWriterEfct (isCorect){


        if (num !== G.mgmt.qNumber){return}


        if (fulltextArray[t] && (fulltextArray[t].length < position - 1)){t++; position = 0 }


        if (t > 6 || loopControl > 950 || !fulltextArray[t]  ) {playSound ('Consoletyping', 'pause'); return}

        if (G.Q[num -1] !== undefined && G.Q[num][1] === G.Q[num -1][1] && t === 1) {position = fulltextArray[t].length}
        if (typeof fulltextArray[t] === 'string') {elements[t].innerHTML = fulltextArray[t].substring(position, 0);};
        let speed0 = 20
        if (G.dev_mode) {speed0 = 3 }

        position++; position++;
        setTimeout(()=>{typeWriterEfct (isCorect)},speed0 ); // 2 for testing  20 normal
        loopControl++
    }
    function setDirectionBylanguage (element, text) {
        if (text && element) {} else return
        function isHebrew(qtext) {
            if (typeof qtext !== 'string'){return true}
            var hebLetters = /\s?[1234567890אבגדהוזחטיכלמנסעפצקרשתםןץףך]{1,30}\s?/g
            var englishLetters =  /[A-Za-z]{3,30}/g
            let matchArryEnglsh = qtext.match(englishLetters)
            if (matchArryEnglsh === null){matchArryEnglsh = [] }
            let matchArryHebrew = qtext.match(hebLetters)

            if (matchArryHebrew !== null && matchArryHebrew.length >  matchArryEnglsh.length ){ return true} else {return false}

        }
        if (isHebrew(text)) {element.style.direction = 'rtl'; element.style.textAlign = 'right'} else {
            {element.style.direction = "ltr"; element.style.textAlign = "left"}
        }

    }
    function resizeText (){
        function rounder (size) {
            let round = size * 4
            round =  Math.round(round) / 4;
            return round;

        }

        fontSize = G.css.textFontSize;
        let fullText = "";
        let fontResizer =  G.css.resizeFontScale
        for (let i = 1; i < 8; i++){ fullText += G.Q[num][i]};

        let length01 = fullText.length
        let precentOfText = Math.sqrt(fullText.length / 500) // 500 size of normal view
        fontSize = G.css.textFontSize / precentOfText
        if ( precentOfText < 1) {fontSize = G.css.textFontSize }

        fontSize = rounder(fontSize)

        G.divs.textBlock.style.fontSize = fontSize + "vmin" // current


    }
    function noMorequestions () {
        blackScreen('endGame')
    }
    playSound ('Consoletyping', 'loop')
    if (G.Q[num]){} else if (num < 500) {noMorequestions ()}

    let fontSize;
    let loopControl = 0;
    resizeText ()
    G.mgmt.mouseIsOver = 0;
    if (G.mgmt.timer1){clearInterval(G.mgmt.timer1)}
    G.mgmt.isAnswering = false;
    G.css.typeSolution = "";
    let tb = Id('textBlock')
    let children =  tb.childNodes;
    for (let i in children){
        children[i].innerHTML = "";
    }
    tb.style.color = G.css.textcolor;
    G.mgmt.clickedAnswer = 0;
    let fulltextArray = [];
    let elements = [];
    let t = 1;
    let position = 1;
    G.mgmt.qNumber = num;

    if (G.mgmt.qNumber < 499) {G.hacks.lastqNumber = G.mgmt.qNumber;}




    elements[1] = G.divs.infoText
    fulltextArray[1] = G.Q[num][1]

    elements[2] = G.divs.question
    fulltextArray[2]  =   G.Q[num][2] + G.css.breakAfterQuestion
    G.test = fulltextArray

    for (let i = 1; i < 7; i++){
        //fulltextArray[i + 2] = "";
        //if (i === 1){ fulltextArray[2] += "<br><br>"}
        if (G.Q[num][i + 2] != "")    {
            elements[i + 2] = G.divs.ans[i];
            fulltextArray[i + 2] = G.Q[num][i + 2];
        }
        setDirectionBylanguage(elements[i],fulltextArray[i])
    }
    let checkForQuestions = ''
    for (let i = 3; i < 8; i++) {if (fulltextArray[i]) {checkForQuestions +=  fulltextArray[i]}}
    if (checkForQuestions === ''){ setQuestion (num + 1); return}



    typeWriterEfct ()
    G.mgmt.timer1 = setInterval(()=>{blinkCursor()},200)

}
function blackScreen (com) {
    function imagesLoader (pathsarray,html, baseTextObject){
        let totaleNumOfElements = pathsarray.length
        let baseText = G.Q[503][2]
        var updadedPaths = 0;

        function updateLoader () {
            updadedPaths++
            let precent =   Math.floor((updadedPaths / totaleNumOfElements)*100)
            if (precent > 100) {precent = 100 };
            precent+="%"

            if (Id(html)){
                //Id(html).innerHTML = precent
                G.Q[503][2] = baseText + precent

            }

        }
        function checkImage (path) {
            return new Promise(resolve => {
                const img = new Image();
                img.onload = () => {
                    let rnd = getRandomInt (6000)
                    setTimeout(()=> {resolve(path); updateLoader ()},rnd)}
                img.onerror = () => {resolve("pathNotFound")};
                img.src = path;
            });
        }
        const loadImg = (paths) => Promise.all(paths.map(checkImage));
        updateLoader ()
        return loadImg(pathsarray)

    }
    function returnScullASCI () {
        return `00000011000001000MMMMM00001MMMMWWMMMMMMWW0001110110MMM0000MM
MMMK:..... .,kWMWo.......   dMMNd' .cKWK, .kMXc........;xNMM
MMMWXXXXKO:. .kMMNKKKKKKx.  dMMMWx.  'dl. ;XMWNXXXXKOl. .dWM
M100MM1006K,  oWWkcckWMXl. 'OMMWx. ..   .cKMMXxclOMMMN:  :NM
00000EHMMWK;  lWNc  :NX:  ,OWWM0' .xKl. .oXWM0,  oWWWWc  :NM
X0010MM0MMK,  lWN:  :NO. .xWWMMx. '0MWO,  ,OW0,  oWMMNc  :NM
0110000MMMN0xxKMN:  :NXOxkXMMWWKkxOWMMMXkxxONNOxkKMMMW0xx0WM
0010001110100QXXNc  :NMMMM00000100011101000000100001100000MM
00000011000001000HH0WNXK0OkxxxxxxxO0KNWMM0000001100X001000MM
1000010000010MMMMN0dc;,,,,,;;:::;;,;,,;cdONMM0001000HWM010MM
MM00AAAMMMXMMMWKo;,:ox0KNNWMMMMMMWWNKOxo:,;oKMMM00000100MMMM
MMM0MMMM0MMMMNd,;xXWMMMMMM00001MMMMMMMMMWXx;,dNMMMM0098AHSMM
M00MM0MMMMMMX:'xNMMMMMM0MM0MMM000001000MMMMNd'cXMMMMMMMMMMMM
MM00010M0MMNc'OMMM0000001100MMMMMMMMMMMMMMMMWk'lNSMMMG00GMMM
0MM00H0MMMMO,dWWWMMMM{}MMMMMMM1110001MFUNMMWWWd,OMHHHX00MMMM
MM110MMMMMMx;OKkKMMMMX000MMM100MM100MXFMMMMXk00;dMXXXH0000MM
0MM000HHGMMk:O0:xMMGMM0000MMMM11000MMMGHMMMk:O0cxMM000100MMM
100001MGHMMXoxNc,0MMMGG0001083HMMM000HMMMMK;:XOoKMMX0100XHMM
M000100011MMKxXd.oWXOxdoloOWMMMMWOolodxkKWx.lXk0MMMM0168MMMM
SMMMGGGGMMMMMX0c.ox.      '0MMMMK,      .xd.;0XWMM010000MMMM
MSMMMNOkKWMMMM0,.xo       cXMMMMXl       oO'.OMMMMW0xkXMMMMM
MXxMK:.''cKMMMk.,KXc    .dNWNXXNWNd.    :KX: dMMMK:',.:XMMMM
HMMWd.;Kk';OWMk.,KMNOlco0WNd:lo:oNWKoclkNMX:.dMWO;,OX;.dWMMM
MMKl.'kWMKocldx;.c0WMMMMMWd..cl..dWMMMMMN0l.'ddoloKMWk'.cKMM
MWl .okxxkXWXOkdc,,:lxXMMWc 'od' cNMMXxl:,;cdkOXWXOxxko. lWM
MMKo:;::c::coOXMWNkc;;dKWM0oONNOoOWMXd;;ckNWMNOoc::cc:;:oKMM
H88010MMMWN0xodxOX0;.cx0KKK0000000KK0xc';0XOxdodOXWMMMMMMMMM
H000010001H0MMWX0KO,'llolollllllllolllo,'OK0XWMXXXX0010MMMMM
R001000HDFG00MMMWNk.,Oklccc:ccc::ccllk0,.xXNMMMMXXXX000MMGMM
M80100MNK0XNKOxdk00;.dNKkdlccccccldk0Nd.,O0kddkKNX00KWMGGMMM
X00MM0:';:ccclxKWWNx..oNMNX00O000XWMXo..dXWWXkoccc:;';OMMMMM
10MMMO'.l0XNWWKkdxOK0l,;ok0NWMMWN0kl;,o0KOxdxKWWNNKo..kMMMMM
X00MMWKc.,0WOc:okNMMMMXOdodkKNNXOdodOXMMMMNOo::OWK;.:0WMMMMM
MM010MMX:.lo.:KMM00010MMM000011000FACMMHHMMMX:.oo.,KMMM0MMMM
MMMMMMMMO;,;dXMMMMMMMH000H1MMMMMMHAD00MMMMMMNx:,;kWM0MMMT0MM
00MNNWMMWXKWMMGGMMM0000MMMMMMMMXOKMMM0000100MMMMW[MM00]GGMMM`

    }
    function returnShieldASCI () {
        return `00000011000001000MMMMM00001MMMMWWMMMMMMWW0001110110MMM0000MM
MMMK:..... .,kWMWo.......   dMMNd' .cKWK, .kMXc........;xNMM
MMMWXXXXKO:. .kMMNKKKKKKx.  dMMMWx.  'dl. ;XMWNXXXXKOl. .dWM
M100MM1006K,  oWWkcckWMXl. 'OMMWx. ..   .cKMMXxclOMMMN:  :NM
00000EHMMWK;  lWNc  :NX:  ,OWWM0' .xKl. .oXWM0,  oWWWWc  :NM
X0010MM0MMK,  lWN:  :NO. .xWWMMx. '0MWO,  ,OW0,  oWMMNc  :NM
0110000MMMN0xxKMN:  :NXOxkXMMWWKkxOWMMMXkxxONNOxkKMMMW0xx0WM
0010001110100QXXNc  :NMMMM00000100011101000000100001100000MM
MM00xX0001MMMMMMWX0kdlc:;,'''''''',;:cldk0XWMM00001000010MMM
M0x0111010MMWXOxl:,'''''''''''''''''''''',:lx0XWMMMMM00MMMMM
MMMMMMMMMWNOd:,'''''''',;:cllllllc:;,'''''''',:dONWMM110MMMM
MM00MMMWXkc,'''''';coxOKXNNWWWWWWNNXKOxoc;'''''',cxXWMMMMMMM
MMMMMWXk:'''''':okKNWXM00MMXMMMMM0000M1MNKko:'''''':xXWMMMMM
M0MMNOc,'''',ckXWMMMMMMWNXK000000KXNWMMMMMMWXkc,'''',cOWMMMM
MMWXd;'''',lONMMMMMWXOdlc;,,,''',,;cldOXWMMMMWNOc,'''';xXWMM
MWXo,'''':xNMMMMWXkl;'''''''''''''''''';lkXWMMMMNx:'''',oXMM
MXo,''''c0WMMMWXx:'''''''..........''''''':xXMMMMW0c'''',oXM
Nd,''''lKWMMMWOc'''''....   'll'   ....'''''cOWMMMWKc'''',dN
k;'''':0WMMMNk;''''...     .dNNd.     ...'''';kNMMMW0c'''';O
l'''',xWMMMWk;''''..       :XMMX:       ..'''';OWMMMWx,''''l
;''''cKMMMMKl'''''..'''''.;OMMMMO;''''''...''''cKMMMMKc'''';
'''''dNMMMWk;''''..;d0XNXXNWMMMMWNXXNX0d;..'''';kWMMMNd'''',
'''',xWMMMWx,''''.   'lONMK0MM00WWMNOl'   ..''',xWMMMWx,''''
'''''dWMMMWx,''''.     .cXMMMWMWMMXc.     .'''',xWMMMWd'''''
,''''lXMMMM0:''''.     .lNMMWWWWMMNo.     .'''':0MMMMXo'''',
c'''':OWM0MNd,''''.    ;KWXkc,,ckXWK;    .'''',dNMMMWO:''''c
d,''''oXMMMWKl'''''.. .dOl'      'lOd. ..'''''lKMMMMXo'''',d
Kc'''',xNMMMWKo,''''..',.          .,'..'''',oKMMMMNx,''''cK
WO:'''';xNMMMMNk:'''''.......  ......'''''':kNMMMMNx;'''':OW
MWk:'''',dXWMMMWXxc,'''''''''''''''''''',cxXWMMMWXd,'''':kWM
MMWO:'''''ckNMMMMMN0dc;,'''''''''''',;cd0NWMMMMNkc''''':OWMM
MK0WKl,'''',lOXWMMMMWNXOkxoolllloodk0XNMMMMMWNOl,'''',oKWMMM
000MMNkc''''',cx0NWMMMMMMMMWWWWWWMMMXxMMMWN0xc,''''':kN01xMM
M00M1MWXxc,''''',cdkKNWMMM00SXX01MMMMWNKkdc,''''',cxXWM001MM
MK00MM0MWXkl;''''''',:lodkkOOOOOOkkxol:,''''''';lkXWMMMMMMMM
M000100100MWKxl;,'''''''''''''''''''''''''',:lxKNMMMMMMMMMMM
M0000001100MMMWXOxoc;,'''''''''''''''',;coxOXWM00Xxx00MMMMMM
Mx0MMMM00000111MMMWX0xoc:,,'''''',,:cox0XWMMM00100011xM0MMMM

`

    }
    function fadeOutPromise1 (element0, tm = 30){
        if (G.dev_mode) { tm = 2}

        let opct = 1;
         let delta = 0.01;
            let promise0 = new Promise((resolve, reject) => {
                function faderEngine (opct,element2) {
                    //if (element0) {}else return
                    element2.style.opacity = opct;
                    let element3 = element2
                    opct -= delta
                    if (opct<0){ resolve ('worked');}
                    else { setTimeout(()=>faderEngine (opct,element3),tm)}

                }
                faderEngine (1,element0)

                // let wait = setTimeout(() => {
                //     clearTimout(wait);
                //     resolve('Promise A win!');
                // }, 200)
            })
            return promise0
     }
    function setIpadBlack(txtASC){
        let ipadCover = Id('ipadCover');

        let OriginalTxt = txtASC // returnScullASCI ();
        let numberOfr0ws = OriginalTxt.match(/\n/g).length;
        let rowsarray = OriginalTxt.split (/\n/g )
        let txt2 = ""
        for (let q = 0; q <= numberOfr0ws; q++){
            let scullId = "scullId" + q;
            txt2 +=  `<span id=${scullId}>` + rowsarray[q] + `</span>\n`

        }

        ipadCover.innerHTML = '<pre><div id = "scullDiv" dit="rtl"'  + txt2;
        stl(ipadCover,{backgroundColor:'black', fontSize:"1.6vmin", color:G.css.textcolor, textAlign:"right",direction: G.textDir})
        return rowsarray
    }
    function changeShieldOrScull(rows) {
        if (Id('scullDiv')) { } else return
        let rndLine = () =>  {
            let num = getRandomInt (rows.length - 2) +1
            let row = Id("scullId"+ num )
            if (row){}else { return}
            while (row.animaAtate == true){
                num = getRandomInt (rows.length - 1) +1
                row = Id("scullId"+ num )
            }
             row.animaAtate = true; return num
        }
        function vanishTxt (t,line0) {
            if (Id('scullDiv')) { } else return
            let row = Id("scullId"+ line0)
            if (row){ } else return
            row.style.opacity = (Math.sin(t) + 1.5) + " ";
            let inlarger = 5
            t += (inlarger / 40);
            if (t < 7){setTimeout (()=>{vanishTxt (t,line0)},45)} else {row.style.opacity = 1; row.animaAtate = false;
                 return}
        }
        function runText (line,start = 10,len = 5,isSquer = false) {
            if (Id('scullDiv')) { } else return
            var blockIcon = "█"
            function makeCode(length, isPass = false) {
                    var result           = '';
                    var characters       = `110000`//'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
                    var passwordChars = "!@#$%^&*~" + characters
                    if (isPass){characters = passwordChars}
                    var charactersLength = characters.length;
                    for (var i = 0; i < length; i++ ) {
                      result += characters.charAt(Math.floor(Math.random() * charactersLength));
                    }
                return result;
            }
            let rowText = Id("scullId"+ line).innerHTML;
            start = getRandomInt (rowText.length - 6);
            let ranCode = makeCode(len)
            if (isSquer){len = 1; ranCode = blockIcon }
            let rowarray = [rowText.slice(0,start ),ranCode,rowText.slice(start + ranCode.length)];
            let finalTxt = rowarray.join('');

            Id("scullId"+ line).innerHTML = finalTxt
            //Id("scullId"+ line).style.color = 'yellow'


            function runSameRow (t) {
                if (Id('scullDiv')) { } else return
                let isEven = (n) =>   n % 2 == 0;
                let cursor = "&nbsp"
                if (isEven (t)){cursor = blockIcon;}
                rowarray[1] = makeCode(len);
                if (isSquer) {rowarray[1] = cursor;}
                Id("scullId"+ line).innerHTML = rowarray.join('')
                t++;
                if (t < 50) {setTimeout (()=>{runSameRow (t)},150 + (line * 3))} else {Id("scullId"+ line).innerHTML = rowText; Id("scullId"+ line).animaAtate = false; runText (rndLine(),start,len,isSquer)
            }


            }
            runSameRow (1 )




        }
        function randomlyRunfade (){
            if (Id('scullDiv')) { } else return
            let i;
            let fadeLine = getRandomInt(36)
            for (let i = 1; i < 15; i++){
                let l = i; setTimeout(()=> {
                    let nextLine = fadeLine+l
                    if (fadeLine > 25) {nextLine= fadeLine-l}
                    vanishTxt (1,nextLine)
                }, i*80)
            }
            setTimeout (()=>{randomlyRunfade ()},3000)

        }
        function blurScull (){

            if (Id('scullDiv')) { } else return
            let shouldIblur = getRandomInt(100)
            if (shouldIblur > 70) {}  else {setTimeout (()=>{blurScull ()},2000) ; return}
            let ipadCover = Id('ipadCover')
            let e = 1;
            let d = 1;
            let blrer = () => {
                let blr = e/100
                ipadCover.style.filter = `blur(${blr}vmin)`
                e += d
                if (e > 90) {d = -1}
                if (e < 100 && e > 0) {setTimeout((e)=>{blrer (e)},3)} else {blurScull ()}
            }
            blrer()




        }

        runText (rndLine());runText (rndLine());runText (rndLine())
        runText (rndLine(),1,20,true)
        randomlyRunfade ()
        blurScull ()






    }
    function setStartText () {
        function finishLoading () {


            let t1 = isLoadingText //
            let t2 = G.TXT.allFilesWereLoadedContinue;
            G.Q [503][2] =G.Q [503][2].replace (t1,t2);
            G.Q [503][2] =G.Q [503][2].replace ("100%","")
        }




        let isLoadingText = G.TXT.loading
        let preLoadingText = '<span id="loadingPrecent"></span>'

        let subject1 = ''
        let subject2 = G.mgmt.nameOfGame;
            let nameOfplayer0 = ''; if (G.saves.nameOfplayer) {nameOfplayer0 = G.saves.nameOfplayer + ', '};
        let iAmNotPlayer = ''; if (G.saves.nameOfplayer) {iAmNotPlayer = G.TXT.IAmNot + G.saves.nameOfplayer + G.TXT.beginNewGame}
        let startOrContinue =  G.TXT.firstStageBegin ;
        if  (G.saves.nameOfplayer && (G.saves.lastSavedQuestion > 1))  {startOrContinue = G.TXT.continueinTheProcces}
        let asci0 = `  _   _            _
 | | | | __ _  ___| | _____ _ __         ${subject1}
 | |_| |/ _' |/ __| |/ / _ \\ v__|
 |  _  | (_| | (__|   <  __/ |
 |_| |_|\\__,_|\\___|_|\\_\\___|_|`
        asci0 = asci0.replace(/\n/g, '<br>')
        //asci0 = asci0.replace(/\s/g, '&nbsp')
        let txt1 = "<pre>" + asci0




        G.Q [503] = ["", "","","","","","","",""]
        G.Q [503][1] = txt1 //+ preLoadingText;
        G.Q [503][2] = "<pre>" + `       <font style="text-shadow: 0vmin 0vmin 3vmin 3vmin ; font-size:8vmin"><b>` + subject2 + `</b></font>

     ${nameOfplayer0}${G.TXT.youMustPlantVirusEveryAnswer} ${isLoadingText}${preLoadingText}`
        let theNextStage = G.mgmt.stageNames[G.saves.stageNumber]
        G.Q [503][3] = startOrContinue + G.mgmt.stagesInfo[theNextStage]

        G.Q [503][4] = "<b></b>" + iAmNotPlayer;
        G.Q [503][G.mgmt.solutionCol] = 1;

        G.hacks.lastqNumber = G.mgmt.qNumber
        G.mgmt.qNumber = 503

        setQuestion (503);
        let speed0 = 10000;
        if (G.dev_mode){speed0 = 10000}
        let pathsOfimages = ['data/mother-board (1).png','data/pagebackround.png','data/keyboard.png','data/hol1.svg','data/holoUI2.png', 'data/ipad_wallpaper.svg', 'data/ipad_wallpaper2.svg', 'data/led.png','data/map.svg', 'data/pointer.png','data/White-Noise (1).jpg']

        imagesLoader(pathsOfimages, 'loadingPrecent',G.Q [503][2]).then(()=>{finishLoading ()})


    }
    function setEndText () {



        let style2 = '<font style="text-shadow: 0vmin 0vmin 3vmin 3vmin ; font-size:3vmin">'
        let subject2 = G.mgmt.nameOfGame + G.TXT.summary;
        let summary ='<br>' + G.TXT.following +progressText ()
        let newgameTxt = G.TXT.replay;
        if (G.saves.nameOfplayer) {newgameTxt += `${G.TXT.allProgressOf}${G.saves.nameOfplayer}${G.TXT.willBeDeleted}`}
        //asci0 = asci0.replace(/\n/g, '<br>')
        let sumexplain =  G.TXT.youFinishedTheGame + '<br>'
        sumexplain += G.TXT.ifYouSavedItWillBeDeleted
        let txt1 = "<pre>"
        G.Q [504] = ["", "","","","","","","",""]
        G.Q [504][1] = txt1;
        G.Q [504][2] = "<pre>" + `<font style="text-shadow: 0vmin 0vmin 3vmin 3vmin ; font-size:8vmin"><b>` + subject2 + `</b><br></font>`  + style2  +  G.TXT.youHaveWonWellDone + summary + sumexplain
        let theNextStage = G.mgmt.stageNames[G.saves.stageNumber + 1 ]
        G.Q [504][3] = newgameTxt

        G.Q [504][4] = `<b>`;
        G.Q [504][G.mgmt.solutionCol] = 1;

        G.hacks.lastqNumber = G.mgmt.qNumber
        G.mgmt.qNumber = 503

        setQuestion (504);
        let speed0 = 7000;
        if (G.dev_mode){speed0 = 100}


    }
    function startScreen () {
        let pagecontainer = Id('pagecontainer')
        let fullBlackScreen = Elm ('fullBlackScreen');
        stl(fullBlackScreen,{backgroundColor:'black', 'position':'fixed', width:'100%',height:'100%'})
        pagecontainer.appendChild(fullBlackScreen)
        let txt0 = returnScullASCI ()
        let originalRows = setIpadBlack(txt0)
        changeShieldOrScull(originalRows)
        setStartText ()

    }
    function endScreen () {
        playSound('HackerTheme'); playSound('virusUpload', 'stop')
        let pagecontainer = Id('pagecontainer')
        let fullBlackScreen = Elm ('fullBlackScreen');
        stl(fullBlackScreen,{backgroundColor:'black', 'position':'fixed', width:'100%',height:'100%'})
        pagecontainer.appendChild(fullBlackScreen)
        let txt0 = returnShieldASCI ()
        Id('ipadCover').style.fontSize = "1.6vmin"; Id('ipadCover').style.lineHeight= "1.8vmin"
        let originalRows = setIpadBlack(txt0)
        changeShieldOrScull(originalRows)
        setEndText ()

    }
    function startGame (){
        playSound('preLoader')
        let fullBlackScreen = Id('fullBlackScreen')
        let ipadCover = Id('ipadCover')

        fadeOutPromise1(ipadCover , 10).then(()=>{

            fadeOutPromise1(fullBlackScreen , 50).then(()=>{fullBlackScreen.remove()
                G.mgmt.qNumber = G.hacks.lastqNumber;

                setQuestion (G.mgmt.qNumber)
                 IpadGrahpic (G.saves.stage)

            })
            ipadCover.innerHTML ='';
            ipadCover.style.opacity = '1'
        })

    }
    if (com === 'endGame') {endScreen () ; return}
    if (com === 'startGame') {startGame () } else {startScreen ();

    }



}
function IpadGrahpic (type0) {
     //scannerEffect scannerWin


    function blankIpad () {
        let ipadCover = Id('ipadCover')
        let ipad = Id('ipad');
        const context = ipad.getContext('2d');context.clearRect(0, 0, ipad.width, ipad.height)


        ipadCover.innerHTML = ''; ipadCover.style.backgroundColor = 'transparent'; ipadCover.style.opacity = '1';
        ipad.style.backgroundImage = ''; ipad.style.backgroundColor = 'transparent';  ipadCover.style.filter = '';

    }
    function getIp (){
        function clickCanvas (e) {
            let x0  = e.clientX
            let y0 = e.clientY
            let xPadding  = Pre2Num(canvas.parentNode.style.padding) / Pre2Num(canvas.parentNode.style.width)
            let canvasXpre = Pre2Num(canvas.parentNode.style.left)   ;
            let canvasBaseX = window.innerWidth * (canvasXpre +  xPadding) / 100


        }
        function drawLine (x0,y0, x1,y1) {
            let x = xP(x0) ; xe = xP (x1);
            let y = yP(y0) ; ye = yP (y1);
            ctx.beginPath();
            ctx.moveTo(x,y);

            ctx.lineTo(xe,ye);
            ctx.strokeStyle="red";
            ctx.stroke();
        }
        function drawCircle (x0,y0,r0, color = 'white') {
            let x = xP(x0) ;
            let y = yP(y0);
            let r = yP(r0) ;
            ctx.beginPath();
            ctx.arc(x,y,r,0,2*Math.PI);
            ctx.fillStyle = color // color;
            ctx.fill();
        }
        function MoveC (x00,y00, x1,y1, tm = 1 , cObj) {
            cObj = cObj || { 'r' : 0.5, 'color' : 'yellow' }
            for (let i = 1; i < 90; i++){
                var deltaX = x1 - x00;
                var  deltaY = y1 - y00;
                var  adder  = 0.01
                var Ydirection = 1; if (deltaY < 0) {Ydirection = -1  }
                var Xdirection = 1; if (deltaX < 0) {Xdirection = -1 }
                var diagonal =  Math.abs(deltaY / deltaX)
                var  Yadder = adder *  diagonal
                x00 = x00 + Math.sign(deltaX) * adder ;
                y00 = y00 + Math.sign (deltaY) * Yadder;
                if (x00 > 100 || x00 < 1 || y00 < 1 || y00 > 100) { return}
                if (isNaN(x00 + y00)) {return}

                tm = 1 /* testing   */

                drawCircle (x00,y00,cObj.r, cObj.color)
                if (deltaX < 1 && deltaX > -1  && deltaY < 1 && deltaY > -1 ){return}
            }
            setTimeout(()=>{MoveC (x00,y00, x1,y1, tm  , cObj)},tm);

        }
        function consoleFoundIp() {
            G.mgmt.isFinalAnsInChapter = false;
            let tb = Id('textBlock2');
            let tc = Id('textContainer');
            G.divs.textContainer.appendChild(G.divs.textBlock2 )
            G.divs.textBlock2.style.overflow = "hidden";

            //tb.style.color =  G.css.textcolor
            var ipArray = [];
            var ipTxtArray = [];
            for (let i = 0; i < 300; i++){
                ipArray [i] = [];
                let ipStart = getRandomInt (30)
                ipArray [i][0] = getRandomInt (30) + 255;

                for (let l = 1; l <4; l++){
                    let iprnd = getRandomInt (254)
                    ipArray [i][l] = iprnd;
                }

            }

            for (let i in ipArray){
                let ipTxt = '';
                for (l in ipArray[i]) {
                    if (l == 0) { } else {ipTxt += '.'}
                    ipTxt += ipArray[i][l];
                }
                let txt =  '&nbsp&nbsp&nbsp' + ipTxt + '&nbsp&nbsp&nbsp<br>'
                ipTxtArray[i] = txt
                G.divs.textBlock2.innerHTML += txt
            }
            //var x = 200;
            function runIps (x){

                G.divs.textBlock2.innerHTML = `<p dir =${G.textDir} align=${G.textAlign}> `+ G.TXT.seachingNetWorkAddress + "</p>"
                G.divs.textBlock2.innerHTML += 'Tracing route to 267.1.0.1 over Ip hops:' + (x + 212) + ' <br><br>';
                for (let i = 0 ; i < 19; i++){
                    if (i + x > 99) { continue}
                    G.divs.textBlock2.innerHTML += ipTxtArray[i + x]
                    let sum = i+x;
                    let ext = ''
                    switch (sum) {
                        case 10: ext = 'get ipRout invalid - pinging rout...'; break;
                        case 17: ext = 'Router# configure terminal...'; break;
                        case 22: ext = 'Router(config)# interface serial 4 ?'; break;
                        case 29: ext = 'negotiated          IP Address negotiated over PPP'; break;
                        case 40: ext = 'Router(config-if)# ip address 172.16.0.1'; break;
                        case 29: ext = 'negotiated          IP Address negotiated over PPP'; break;
                        case 29: ext = 'negotiated          IP Address negotiated over PPP'; break;
                        case 40: ext = 'Router(config-if)# ip address 172.16.0.1'; break;
                        case 50: ext = 'negotiated          IP Address negotiated over PPP'; break;
                        case 60: ext = 'get ipRout invalid - pinging rout...'; break;
                        case 73: ext = 'Router(config)# interface serial 4 ?'; break;
                        case 80: ext = 'negotiated          IP Address negotiated over PPP'; break;
                        case 85: ext = 'Router(config-if)# ip address 172.16.0.1'; break;

                    }

                    if (ext) { G.divs.textBlock2.innerHTML += '<br>' + ext ; }

                }
                x++
                if (x < 100) { setTimeout(()=>{runIps (x)},30)} else {
                    playSound('scannerWin'); playSound('scannerEffect', 'stop');


                    G.Q [500] = ["", "","","","","","","",""]
                    G.Q [500][1] = G.divs.textBlock2.innerHTML;
                    G.Q [500][2] = G.TXT.IPfoundShouldContinue;
                    let theNextStage = G.mgmt.stageNames[G.saves.stageNumber + 1 ]
                    G.Q [500][3] = G.TXT.continue + G.mgmt.stagesInfo[theNextStage]

                    G.Q [500][4] = G.TXT.anotherCheck;
                    G.Q [500][G.mgmt.solutionCol] = 1;
                    G.mgmt.isChapterCheckout = true;


                    G.divs.textBlock2.remove()
                    setQuestion (500)

                };
            }
            playSound('scannerEffect');
            runIps (1)





        }
        function FullIpWasfoundAnimation () {
            G.mgmt.isFinalAnsInChapter = true;
            drawIpIpad ()
            let lineObj = {'r': 0.5, 'color':'pink'}
            let saveN = 1;
            var tmAdder = 200

            for (let n = 1; n <= G.mgmt.numOfsuccess; n++ ){
                if (n === 1) { continue};
                let sn = n;
                setTimeout ((n)=> { MoveC  (G.hacks.ipLocations[sn-1][0], G.hacks.ipLocations[sn-1][1],
                    G.hacks.ipLocations[sn][0],G.hacks.ipLocations[sn][1],2,lineObj)},sn* tmAdder);
                    saveN = n;
            }
            setTimeout (()=> {MoveC  (G.hacks.ipLocations[saveN][0], G.hacks.ipLocations[saveN][1], G.hacks.ipLocations[1][0],G.hacks.ipLocations[1][1],2,lineObj);},(saveN +1)*tmAdder);



        }
        function addRevieledLovation (){

                G.mgmt.numOfsuccess++;
                G.hacks.ipLocations[G.mgmt.numOfsuccess] = G.hacks.ipLocations[G.mgmt.numOfsuccess] || [];
                G.hacks.ipLocations[G.mgmt.numOfsuccess][1] = G.hacks.ipY
                G.hacks.ipLocations[G.mgmt.numOfsuccess][0] = G.hacks.ipX



        }
        function drawIpIpad (){
          let randomMapX = getRandomInt (1300) * -1
          let randomMapY = getRandomInt (350) * -1

          G.hacks.ipMapLocation = G.hacks.ipMapLocation || [randomMapX,randomMapY]
          // maximum values for green map G.hacks.ipMapLocation  = [-1300,-350]
          G.divs.ipadContent = Elm ('ipadContent','img');
          var img = G.divs.ipadContent;
          img.src = "data/map.svg"
          img.onload = function() {
              ctx.drawImage(img, G.hacks.ipMapLocation [0],  G.hacks.ipMapLocation [1]);
              ctx.font = "7vmin Miriam";
              ctx.fillStyle = "white";



              let text =  G.TXT.identifyingIPAdrress
              ctx.save();
              ctx.shadowOffsetY = 4;
              ctx.shadowOffsetX = 4;
              ctx.shadowColor = "rgba(0,0,0,0.9)";
              ctx.shadowBlur = 3;
              ctx.fillText(text,w / 5, h -(h /30));
              ctx.restore();
              let ips = 5;
              G.hacks.rightIp = getRandomInt(ips)
              for (let i = 1; i <= ips; i++) {
              let xPoint = getRandomInt (80) + 5;
              let yPoint = getRandomInt (70) + 5;

              if (i == G.hacks.rightIp){ G.hacks.ipY = yPoint;G.hacks.ipX = xPoint }
              setTimeout(()=>{
                  ctx.save ();

                  ctx.shadowOffsetY = 5;
                  ctx.shadowOffsetX = 5;
                  ctx.shadowColor = "rgba(0,0,0,0.9)";
                  ctx.shadowBlur = 8;
                  drawCircle (xPoint, yPoint,1,"red")
                  ctx.restore ();
              }, 200 * i);
              }
              for (let n = 1; n <= G.mgmt.numOfsuccess; n++ ){
                  if (G.mgmt.numOfsuccess == 0) { break};
                  ctx.save ();

                  ctx.shadowOffsetY = 4;
                  ctx.shadowOffsetX = 4;
                  ctx.shadowColor = "rgba(0,0,0,0.9)";
                  ctx.shadowBlur = 3;
                  drawCircle (G.hacks.ipLocations[n][0], G.hacks.ipLocations[n][1],2,"yellow")
                  ctx.restore ();
                drawCircle (G.hacks.ipLocations[n][0], G.hacks.ipLocations[n][1],1,"red")

              }
              }


        }
        let ipadCover = Id('ipadCover')
        blankIpad ()
        var canvas = Id ('ipad');
        canvas.addEventListener('click',clickCanvas,false);
        var preW = Pre2Num (G.divs.ipadContainer.style.width) / 100;
        var preH = Pre2Num (G.divs.ipadContainer.style.height) / 100;
        const highRes = 2;
        canvas.height =  preH * window.innerHeight * highRes;
        canvas.width =  preW * window.innerWidth * highRes;
        const w = canvas.width;
        const h = canvas.height;
        function xP(x_){ // x Precent
            let pre = x_ / 100;
            return Math.round(w * pre);
        }
        function yP(y_){ // x Precent
            let pre = y_ / 100;
            return Math.round(h * pre);

        }
        canvas.style.color = 'white';
        var ctx = canvas.getContext("2d");
        if (answeris === 'right') {addRevieledLovation ()}
        if (G.mgmt.numOfsuccess >= G.mgmt.max_Tofind.getIp) {FullIpWasfoundAnimation (); consoleFoundIp()} else {drawIpIpad ()}

    }
    function fireWall (){
        function consoleHackedFirewall(isWaitingCrack = false) {
            if (isWaitingCrack){


                let tx3 = `<p dir = ${G.textDir} align=${G.textAlign}>` + G.TXT.fireWallComponnentsFound + "</p>";
                G.Q [500] = ["", "","","","","","","",""]
                G.Q [500][1] = tx3 + '<br><p dir=rtl style="text-align: right">'
                G.Q [500][2] = G.TXT.mustBypassAllDefences
                G.Q [500][3] = "<br>"
                G.Q [500][G.mgmt.solutionCol] = 1;
                //G.divs.textBlock2.remove()
                G.mgmt.isFinalAnsInChapter = true;
                setQuestion (500); return;}
            G.mgmt.isFinalAnsInChapter = false;
            let tb = Id('textBlock2');
            let tc = Id('textContainer');
            G.divs.textContainer.appendChild(G.divs.textBlock2 )
            G.divs.textBlock2.style.overflow = "hidden";
            //tb.style.color =  G.css.textcolor
            var ipArray = [];
            var ipTxtArray = [];
            for (let i =0 ; i < 100 ; i++){
                let ipTxt = '';
                    let t = '<br>0x20004fff '; if(G.hacks.NamesOfPiecesOfFirewall[i] !== undefined) { t =G.hacks.NamesOfPiecesOfFirewall[i]}
                    t = t.slice(0,9) + " " + G.hacks.NamesOfPiecesOfFirewall[i-5] ;
                    ipTxt +=  t //ipArray[i][l];

                let txt =  '&nbsp&nbsp&nbsp' + ipTxt + '&nbsp&nbsp&nbsp<br>'
                ipTxtArray[i] = txt
                G.divs.textBlock2.innerHTML += txt
            }
            //var x = 200;
            function runDefences (x){


                let tx1 = `<p dir = ${G.textDir} align=${G.textAlign}>` +  G.TXT.fireWallBeingScanned + "</p>";
                let tx2 = 'Stack buffer Address: x000fff' + (x + 212) + ' <br><br>';
                 G.divs.textBlock2.innerHTML = tx1 + tx2
                for (let i = 0 ; i < 19; i++){
                    if (i + x > 99) { continue}
                    G.divs.textBlock2.innerHTML += ipTxtArray[i + x]
                    let sum = i+x;
                    let ext = ''
                    switch (sum) {
                        case 10: ext = 'get ipRout invalid - pinging rout...'; break;
                        case 17: ext = 'Router# configure terminal...'; break;
                        case 22: ext = 'Router(config)# interface serial 4 ?'; break;
                        case 29: ext = 'negotiated          IP Address negotiated over PPP'; break;
                        case 40: ext = 'Router(config-if)# ip address 172.16.0.1'; break;
                        case 29: ext = 'negotiated          IP Address negotiated over PPP'; break;
                        case 29: ext = 'negotiated          IP Address negotiated over PPP'; break;
                        case 40: ext = 'Router(config-if)# ip address 172.16.0.1'; break;
                        case 50: ext = 'negotiated          IP Address negotiated over PPP'; break;
                        case 60: ext = 'get ipRout invalid - pinging rout...'; break;
                        case 73: ext = 'Router(config)# interface serial 4 ?'; break;
                        case 80: ext = 'negotiated          IP Address negotiated over PPP'; break;
                        case 85: ext = 'Router(config-if)# ip address 172.16.0.1'; break;

                    }

                    if (ext) { G.divs.textBlock2.innerHTML += '<br>' + ext ; }

                }
                x++
                if (x < 100) { setTimeout(()=>{runDefences (x)},30)} else {

                    let tx3 = `<p dir = ${G.textDir} align=${G.textAlign}>` + G.TXT.breachFoundInmemory  + "</p>";
                    G.Q [500] = ["", "","","","","","","",""]
                    G.Q [500][1] = tx3 + tx2 + ipTxtArray[6] + '<br><p dir=rtl style="text-align: right">'
                    G.Q [500][2] = G.TXT.AllDefencesDown
                    let theNextStage = G.mgmt.stageNames[G.saves.stageNumber + 1 ]
                    G.Q [500][3] = G.TXT.continue + G.mgmt.stagesInfo[theNextStage]
                    G.Q [500][4] = G.TXT.hidingActivity
                    G.Q [500][G.mgmt.solutionCol] = 1;
                    G.mgmt.isChapterCheckout = true;
                    G.divs.textBlock2.remove()
                    G.hacks.lastqNumber++;
                    setQuestion (500)

                };
            }

            runDefences (1)





        }
        function setBG (c) {
            var ipadCover = Id ('ipadCover')
            ipadCover.style.backgroundImage = c
        }
        function blureChanger (){

            ipadCover.isbluring = true;
            var n1 = 0.07 ; var ms = 50;
            var delta = 0.01 ; top_blure = 0.2; bottom_blur = 0.06
            function bllr (n){

                if (!ipadCover.isbluring || G.mgmt.current !== 'firewall') {return}
                let b = 'blur(' + n +'rem)';
                ipadCover.style.filter = b;
                if (n > top_blure) { delta *= -1}
                if (n < bottom_blur) { delta *= -1}
                n += delta;
                setTimeout(()=> bllr (n),ms)
            }
            bllr(n1)


        }
        function setFirewallPieces (numOfFWPieces) {
            G.hacks.piecesOfFirewall = [];
            G.hacks.NamesOfPiecesOfFirewall = [];
            var defences = ['access control ','Admin-security: ','Antivirus sftw(): ','Sec- coding: ', 'Sec-by default: ','Sec-by design: ','S-op-systems _','Auth-user - ','AuthToken ; ','Encryp: ', 'main-Panel: ', 'crypto: ', 'node-Secure: ', 'memory-Leak: ']
            var defences_save = defences.slice(0);
            var defence_functions = [' #0000FF', '#F1C40F','f()Firewall','0x3e603fff','0x20004fff','0x4c0101ff','0x1bf200ff','0xffd61f980','0x7ffffaff', '0x003fee00','0x6ffffff4','0x2fffffb8','0xffffff98','0xfff506ff','0x20bfe5ff', '0x3f62ffe9','0x2eff984f','0xf983ffb1'
            ,'OfFirewall', '#0002080', '#FF00FF', 'rgb(13,14,9)s','void_ssmain-i', '#FA2DC9', 'S-N/1692462',]

            for (let i = 1; i < numOfFWPieces; i++) {
                let randomX = getRandomInt (1300) * -1
                let randomY = getRandomInt (350) * -1
                let randomDfence = getRandomInt(defences.length - 1)
                let randomDfencef = getRandomInt(defence_functions.length - 1)
                G.hacks.NamesOfPiecesOfFirewall[i] = defences[randomDfence] + " "+ defence_functions[randomDfencef];
                defences.splice(randomDfence,1);
                if ( defences.length < 2) {defences = defences.concat(defences_save)

                }
                G.hacks.piecesOfFirewall[i] = {};
                G.hacks.piecesOfFirewall[i].randX = randomX ;
                G.hacks.piecesOfFirewall[i].randY = randomY ;

            }
        }
        function addFirewallClue (){G.mgmt.numOfsuccess++;}
        function drawFireWallIpad () {
            blankIpad ()
            let col = 'yellow'
            let col2 = 'rgba(10,10,10,0.3)'
            let fontS = '4.5vmin'; if (G.EN){fontS = '2.5vmin' }
            var textStl = `color: black; font-size: ${fontS}; font-weight: bolder; text-shadow:0.05vmin 0.05vmin ${col2}, 0.10vmin 0.10vmin ${col2},0.20vmin 0.20vmin ${col2}, 2vmin 0vmin 2.5vmin ${col}, 0vmin 2vmin 2.5vmin ${col},-2vmin -2vmin 2.5vmin ${col}, 0vmin -2vmin 2.5vmin ${col}, -1vmin 0vmin 2.5vmin ${col}, 1vmin 1vmin 4.5vmin ${col},0vmin -1vmin 3.5vmin ${col}, -1vmin 0vmin 3.5vmin ${col}, 0vmin 0vmin 3.5vmin ${col}`


            var ipadCover = Id ('ipadCover'); stl (ipadCover,myStyle ('text'),{
                'fontFamily': 'ariel', 'textAlign': 'center', 'lineHeight' : '3vmin'
            });
            ipadCover.innerHTML = `<br><br><font style="${textStl}">&nbsp` + G.TXT. identifingFireWall
            if (G.mgmt.numOfsuccess == 0){ipadCover.innerHTML += `<br><br><font style="${textStl}">` + G.TXT.serachIngComponenet + "</font>"; setBG (ipadFireWallBGColor) ;
            } else {
                ipadCover.style.opacity = '1';
                ipadCover.innerHTML += `<br><br><font style="${textStl}">` +  G.TXT.identifingComponenet  + '<br> '
                ipadCover.innerHTML += '<div style="line-height:10px">';

            }
            ipadCover.innerHTML += '</mark> <br>'
            G.divs.ipadContent = Elm ('ipadContent','img');
            var img = G.divs.ipadContent;
            let num = 1
            img.src  =  "data/mother-board (" + 1 + ").png"
            //consoleHackedFirewall(isWaitingCrack = false)

            img.onload = function() {

                function addHackOption (el){
                    function clickFirewallHack (el){
                        if(G.mgmt.numOfsuccess >=G.mgmt.max_Tofind.firewall) {playSound('crackDefence')}
                        function hackFirewallElement(DomElement ,finishString = 'ok') {

                            if(G.mgmt.numOfsuccess >=G.mgmt.max_Tofind.firewall){} else {
                                let originalColor = DomElement.style.color
                                DomElement.style.color  = 'red'
                                DomElement.style.filter = 'blur(0.3vmin)'

                                setTimeout(()=>{DomElement.style.color = originalColor }, 300)
                                setTimeout(()=>{DomElement.style.filter = ''  }, 400)
                                return};

                            var dictionary = "0123456789qwertyuiopasdfghjklzxcvbnm!?></\a`~+*=@#$%".split('');
                            var el = DomElement;
                            if (el.innerHTML.includes(finishString)) return;
                            var before = '', after = '';
                            var virtualHtml = ''

                            var Whtml =  () =>{ el.innerHTML = before + virtualHtml + after}
                            var ran = function() {
                             return Math.floor(Math.random() * dictionary.length)
                            }
                            var ranString = function(amt) {
                              var string = '';
                              for(var i = 0; i < amt; i++) {
                                string += dictionary[ran()];
                              }
                              return string;
                            }
                            var init = function(str) {
                              var count = str.length;
                              var delay = 50;
                              virtualHtml = '';
                              Whtml ();

                              var gen = setInterval(function() {
                                  let hackColor = G.hacks.firewallScrambleColor

                                before = '<span style="opacity: 0.5; color: '  + hackColor + '"> ' + ranString(count) + '</span>'
                                after = '<span style="opacity: 0.5; color: '  + hackColor + '"> ' + ranString(count) + '</span>'
                                Whtml ()

                                if(delay > 0) {
                                  delay--;
                                }
                                else {
                                  if(count < str.length) {
                                    virtualHtml += str[str.length - count-1];
                                    Whtml ();

                                  }
                                  count--;
                                  if(count === -1) {
                                     CheckIfAllDefencesDown()
                                    clearInterval(gen);
                                    //showButton();
                                  }
                                }
                              }, 32);

                            }
                            /* my code */
                            init (finishString)

                        }
                        hackFirewallElement (this,G.hacks.firewallFinishText);

                    }
                    el = Id (el)
                    el.addEventListener('click',clickFirewallHack, true)
                    el.style.cursor = 'pointer'

                }
                function CheckIfAllDefencesDown()  {
                    let ipadCover = Id ('ipadCover')
                    let hacksArray = [];
                    ipadCover.childNodes.forEach(a=>{
                        if (!a.id) {return}
                        if (a.id.includes(G.hacks.firewallCodeId)) {
                            let isFinished = a.innerHTML.includes(G.hacks.firewallFinishText)
                            hacksArray.push(isFinished);
                        }
                    })
                    let allfinished = hacksArray.every ((e) => {
                        return e})
                        if (allfinished) {consoleHackedFirewall()}

                }
                function fadIntext (){

                    if (ipadCover.style.opacity < 0.2 || ipadCover.style.opacity > 0.8) {
                        StylelFader(ipadCover,30,true)
                        var textToReplace = G.TXT.identifingComponenet;
                        var altText = G.TXT.componentsFound;
                        var origin = ipadCover.innerHTML;
                        ipadCover.innerHTML = ipadCover.innerHTML.replace(textToReplace,altText)
                    } else {setTimeout(()=>{fadIntext ()},500)}
                }
                function showChips (num1) {


                    ms = 400;
                    if  (answeris === 'wrong') {ms=10}
                    var canvas = Id ('ipad');
                    var preW = Pre2Num (G.divs.ipadContainer.style.width) / 100;
                    var preH = Pre2Num (G.divs.ipadContainer.style.height) / 100;
                    const highRes = 2;
                    canvas.height =  preH * window.innerHeight * highRes;
                    canvas.width =  preW * window.innerWidth * highRes;
                    var ctx = canvas.getContext("2d");
                    ctx.drawImage(img, G.hacks.piecesOfFirewall[num1].randX,  G.hacks.piecesOfFirewall[num1].randY);
                    spanId = G.hacks.firewallCodeId  + num1;
                    ipadCover.innerHTML += '<div id = "' + spanId + '"style = "font-size:3vmin; background-color:rgba(10,0,0,0.7); width:80% ; height:5% ;margin: 0 auto; margin-top:1%;">' +  G.hacks.NamesOfPiecesOfFirewall[num1] + '</div>';
                    let sp = Id (spanId);
                    if (num1  < G.mgmt.numOfsuccess ) {

                        setTimeout(()=>{showChips (num1+1)},ms)}
                    else {
                            fadIntext();
                            if (G.mgmt.numOfsuccess >=G.mgmt.max_Tofind.firewall ){
                                consoleHackedFirewall(true)

                                let txt = G.TXT.allDefencesAreDownPressTo
                            ipadCover.innerHTML += '<br><br><div id = "defMessage"'  + ' style = "font-size:4.3vmin; background-color:rgb(0,191,255); font-weight: bold; color:black;width:90% ;margin: 0 auto; margin-top:3%; padding:2% ;border: 0.3vmin solid black;border-radius: 1vmin ; overflow: hidden">' +  txt + '</div>';}
                            let  breakForeach = false
                            ipadCover.childNodes.forEach(a=>{

                                if (!a.id || breakForeach) {return}
                                if (a.id === 'defMessage'){breakForeach = true}
                                if (a.id.includes(G.hacks.firewallCodeId)) {addHackOption (a.id)}
                            });
                            return;

                        };
                }
                if (G.mgmt.numOfsuccess > 0 && G.mgmt.numOfsuccess <= G.mgmt.max_Tofind.firewall  ) {showChips (num)};


            }
        }
        var ipadFireWallBGColor = "linear-gradient(135deg, rgba(78,92,90,1) 0%,rgba(78,92,90,0.57) 25%,rgba(78,92,90,0.9) 57%,rgba(101,118,119,0.89) 83%,rgba(25,26,63,1) 100%"
        if (answeris === 'right') {let ipadCover = Id ('ipadCover');
            ipadCover.style.filter = ''; setBG('');
            ipadCover.isbluring = false;
            addFirewallClue ()}
            else if (answeris === 'wrong') {blureChanger ();setBG(ipadFireWallBGColor)}
        if (G.hacks.piecesOfFirewall) {} else {setFirewallPieces (100)}
        if(G.mgmt.numOfsuccess + 1 >G.mgmt.max_Tofind.firewall){G.mgmt.isFinalAnsInChapter = true }
        if (G.mgmt.isChapterCheckout) {G.mgmt.isFinalAnsInChapter = false; return}
        blankIpad ()

        drawFireWallIpad ()
    }
    function user (){
        function consoleHackedUser(stage = 1) {

            //G.mgmt.isFinalAnsInChapter = false;
            let tb = Id('textBlock2');
            let tc = Id('textContainer');
            G.divs.textContainer.appendChild(G.divs.textBlock2 )
            G.divs.textBlock2.style.overflow = "hidden";


            function stage1 (){


                G.divs.textBlock2.innerHTML = `<p dir = ${G.textDir} align=${G.textAlign}>`+ G.TXT.youcanIfeltrateThesystem + "</p>"
                G.divs.textBlock2.innerHTML += 'user_Name: ' + familyName.data +', '+ firstName.data + ' <br><br>';
                G.divs.textBlock2.innerHTML += 'user_Id: ' +  Id('userName').data + '<br><br>';
                G.divs.textBlock2.innerHTML += 'user_codephrase: ' +  Id('codephrase').data + '<br><br>';

            }
            function stage2 (){
                G.Q [500] = ["", "","","","","","","",""]

                G.Q [500][1] =  `<br><p dir=rtl style="text-align: right">---${G.TXT.signInAproved} ----`
                G.Q [500][2] = G.TXT.ableToMackeChangesAndScan + "<br>"
                G.Q [500][2] += G.TXT.shoudYouContinue
                let theNextStage = G.mgmt.stageNames[G.saves.stageNumber + 1 ]
                G.Q [500][3] = G.TXT.continue + G.mgmt.stagesInfo[theNextStage]
                G.Q [500][4] = G.TXT.makingAhiddingOftheActivity
                G.Q [500][G.mgmt.solutiool] = 1;
                G.mgmt.isChapterCheckout = true;
                G.divs.textBlock2.remove();
                G.hacks.lastqNumber++;
                setQuestion (500)
            }

            if (stage === 1){stage1();} else if (stage === 2) {stage2 ()}





        }
        function retryPass(el) {
            el.type = 'text';
            var minChar = 3; var tm = 200; var endLength = 14;
            var charsDeleted = 0 ;
            var oroginalWidth = 80;
            var originalBorder = el.style.border;
            function colorBorderPass (c,dlt = 1) {
                if(el.type === 'password')  {el.style.border = originalBorder; return}
                el.style.border = 'solid rgb(254,' + c + ',0) 0.5vmin';
                if (c < 60) {dlt = 1} else if (c > 184) { dlt = -1}
                setTimeout(()=>{colorBorderPass (c+ (30*dlt),dlt)}, 30)


            }
            function changepassStyle ( n = 1, delta = 1) {


              let boxS = ( n * 0.01) + 'vmin '
              el.style.boxShadow =  boxS + boxS + boxS + "black" // '9px 10px 5px 0px rgba(0,0,0,0.75);'
              let nw = n;
              //if ( n < 30 ) {nw*= -6 }
              el.style.width = 80 + (nw * 0.15) + '%'
              if (n > 110 || n < 0) return
              setTimeout (()=>{changepassStyle (n + delta, delta)},3)
            }
            function deletePass () {
                let txt = el.value.slice(2,   el.value.length)
                el.value = txt
                charsDeleted++
                if (el.value.length >= minChar) {setTimeout(()=>{deletePass()},tm)} else rewritePass()
            }
            function  rewritePass() {
                let newtxt = el.data1.slice(-2)
                el.data1 = el.data1.replace(newtxt , '')

                el.value  = newtxt + el.value;
                charsDeleted -=  2
                if (charsDeleted > -2){setTimeout(()=>{rewritePass()},tm)} else {

                    changepassStyle (100,-2)
                    setTimeout(()=>{el.type = 'password'}, (tm * 5))}

            }
            deletePass ()
            changepassStyle ()
            colorBorderPass (1,1)

        }
        function whiteNoise (t,img_) {
            var canvas = Id ('ipad');
            var ctx = canvas.getContext("2d");
            let randomImgX = getRandomInt (100) * -1;
            let randomImgY = getRandomInt (100) * -1;
            G.hacks.userBlureBackround =  [randomImgX,randomImgY];
            ctx.drawImage(img_, G.hacks.userBlureBackround [0],  G.hacks.userBlureBackround [1]);
            let t1 = t;
            let sin = Math.sin(t/8); ipadCover.style.opacity = sin + 1.2;
            if (t > 2) {setTimeout (()=>{whiteNoise (t1-1,img_)}, t / 6)} else return;
        }
        function addUserClue (){G.mgmt.numOfsuccess++;}
        function setFormData (){
            function makeid(length, isPass = false) {
                    var result           = '';
                    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
                    var passwordChars = "!@#$%^&*~" + characters
                    if (isPass){characters = passwordChars}
                    var charactersLength = characters.length;
                    for (var i = 0; i < length; i++ ) {
                      result += characters.charAt(Math.floor(Math.random() * charactersLength));
                    }
                return result;
            }
            if (G.hacks.FormfirstNames) return

            G.hacks.FormfirstNames = ['Addison', 'Adrian', 'Aiden', 'Ainsley', 'Alex', 'Amari', 'Andy', 'Ari', 'Ash', 'Aspen', 'Aubrey', 'August', 'Avery', 'Bailey', 'Bay', 'Blaine', 'Blake', 'Bobbie', 'Brett', 'Brook', 'Brooklyn', 'Caelan', 'Cameron', 'Campbell', 'Carroll', 'Carson', 'Casey', 'Charlie', 'Chris', 'Clay', 'Corey', 'Dana', 'Dakota', 'Dale', 'Dallas', 'Daryl', 'Delta', 'Devin', 'Dorian', 'Drew', 'Dylan', 'Easton', 'Eddie', 'Eli', 'Elliott', 'Emerson', 'Emery', 'Finley', 'Frances', 'Frankie', 'Gabriel', 'Glenn', 'Gray', 'Harley', 'Harper', 'Hayden', 'Hudson', 'Hunter', 'James', 'Jamie', 'Jayden', 'Jean', 'Jesse', 'Jordan', 'Jules', 'Julian', 'Kaden', 'Kai', 'Karter', 'Kelly', 'Kelsey', 'Kendall', 'Kennedy', 'Kyle', 'Lake', 'Landry', 'Lincoln', 'Logan', 'London', 'Lou', 'Mackenzie', 'Mason', 'Max', 'Maxwell', 'Monroe', 'Morgan', 'Parker', 'Pat', 'Peyton', 'Phoenix', 'Quinn', 'Ray', 'Reagan', 'Reed', 'Reese', 'Remy', 'Riley', 'River', 'Roan', 'Rory', 'Rowan', 'Rudy', 'Ryan', 'Sage', 'Sam', 'Sawyer', 'Shawn', 'Sean', 'Skylar', 'Spencer', 'Stevie', 'Sydney', 'Tanner', 'Tatum', 'Taylor', 'Toby', 'Tyler', 'Val', 'West', 'Winter'];
            G.hacks.FormlastNames = ['Smith', 'Johnson', 'Williams', 'Jones', 'Brown', 'Davis', 'Miller', 'Wilson', 'Moore', 'Taylor', 'Anderson', 'Thomas', 'Jackson', 'White', 'Harris', 'Martin', 'Thompson', 'Garcia', 'Martinez', 'Robinson', 'Clark', 'Rodriguez', 'Lewis', 'Lee', 'Walker', 'Hall', 'Allen', 'Young', 'Hernandez', 'King', 'Wright', 'Lopez', 'Hill', 'Scott', 'Green', 'Adams', 'Baker', 'Gonzalez', 'Nelson', 'Carter', 'Mitchell', 'Perez', 'Roberts', 'Turner', 'Phillips', 'Campbell', 'Parker', 'Evans', 'Edwards', 'Collins', 'Stewart', 'Sanchez', 'Morris', 'Rogers', 'Reed', 'Cook', 'Morgan', 'Bell', 'Murphy', 'Bailey', 'Rivera', 'Cooper', 'Richardson', 'Cox', 'Howard', 'Ward', 'Torres', 'Peterson', 'Gray', 'Ramirez', 'James', 'Watson', 'Brooks', 'Kelly', 'Sanders', 'Price', 'Bennett', 'Wood', 'Barnes', 'Ross', 'Henderson', 'Coleman', 'Jenkins', 'Perry', 'Powell', 'Long', 'Patterson', 'Hughes', 'Flores', 'Washington', 'Butler', 'Simmons', 'Foster', 'Gonzales', 'Bryant', 'Alexander', 'Russell', 'Griffin', 'Diaz', 'Hayes', 'Myers', 'Ford', 'Hamilton', 'Graham', 'Sullivan', 'Wallace', 'Woods', 'Cole', 'West', 'Jordan', 'Owens', 'Reynolds', 'Fisher', 'Ellis', 'Harrison', 'Gibson', 'Mcdonald', 'Cruz', 'Marshall', 'Ortiz', 'Gomez', 'Murray', 'Freeman', 'Wells', 'Webb', 'Simpson', 'Stevens', 'Tucker', 'Porter', 'Hunter', 'Hicks', 'Crawford', 'Henry', 'Boyd', 'Mason', 'Morales', 'Kennedy', 'Warren', 'Dixon', 'Ramos', 'Reyes', 'Burns', 'Gordon', 'Shaw', 'Holmes', 'Rice', 'Robertson', 'Hunt', 'Black', 'Daniels', 'Palmer', 'Mills', 'Nichols', 'Grant', 'Knight', 'Ferguson', 'Rose', 'Stone', 'Hawkins', 'Dunn', 'Perkins', 'Hudson', 'Spencer', 'Gardner', 'Stephens', 'Payne', 'Pierce', 'Berry', 'Matthews', 'Arnold', 'Wagner', 'Willis', 'Ray', 'Watkins', 'Olson', 'Carroll', 'Duncan', 'Snyder', 'Hart', 'Cunningham', 'Bradley', 'Lane', 'Andrews', 'Ruiz', 'Harper', 'Fox', 'Riley', 'Armstrong', 'Carpenter', 'Weaver', 'Greene', 'Lawrence', 'Elliott', 'Chavez', 'Sims', 'Austin', 'Peters', 'Kelley', 'Franklin', 'Lawson', 'Fields', 'Gutierrez', 'Ryan', 'Schmidt', 'Carr', 'Vasquez', 'Castillo', 'Wheeler', 'Chapman'];

            Id('firstName').data =  G.hacks.FormfirstNames[getRandomInt (G.hacks.FormfirstNames.length)];
            Id('familyName').data =  G.hacks.FormlastNames[getRandomInt (G.hacks.FormlastNames.length)];
            Id('userName').data = Id('firstName').data + "_" + makeid(7)
            Id('codephrase').data  = makeid(20, true);
            Id('codephrase').data1  = makeid(130, true);

            Id('submitButton').data = "✓ " + G.TXT.pressToenter
            Id('passportIMG').data =  'data/passports/passport ('+getRandomInt(19)+').jpg';
            // seting the number of questions per stageNames


        }
        function blureChanger (el){


            var n1 = 0.5 ; var ms = 30;
            var delta = -0.01 ; top_blure = 0.2;
            function bllr (n){


                let b = 'blur(' + n +'rem)';
                el.style.filter = b;

                n += delta;
                if (n < 0){return } else setTimeout(()=> bllr (n),ms)
            }
            bllr(n1)


        }
        function colorBorderSubmit (element,c = 60,dlt = 1) {
            element.style.backgroundColor =  ' rgb(' + c + ',255 ,0)'//'solid rgb(254,' + c + ',0) 0.5vmin';
            if (c < 2) {dlt = 1} else if (c > 120) { dlt = -1}
            setTimeout(()=>{colorBorderSubmit (element,c+ (30*dlt),dlt)}, 30)}
        function drawBaseForm (){
            function submittingForm (){
                function DenyEntry () {
                    var deny = Elm ('deny');

                    let ipadCover = Id ('ipadCover') ; ipadCover.appendChild (deny)
                    stl (deny , myStyle ('text'), {'position': 'absolute', 'top' : '25%', 'right': '5%' , 'textAlign': 'center', 'backgroundColor': 'red', 'color' : 'black', 'padding' : '0.5vmin', 'fontWeight': 'bolder', 'border' : 'solid black 0.3vmin'});
                    deny.innerHTML = G.TXT.oneOrMoreInputsAreWrong;
                    deny.innerHTML += '<br>' + G.TXT.entryIsforBidden
                    setTimeout (()=>{StylelFader (deny, 40,false,true)}, 2500 )
                }
                if (G.mgmt.numOfsuccess === G.mgmt.max_Tofind.user) {
                    StylelFader(codephrase,40,false,true);
                    StylelFader(submitButton,40,false,true);
                    StylelFader(userName,40,false,true);
                    setTimeout (()=>{
                        playSound('welcomeEffect')
                        let spn = Id("formP-2");
                        spn.style = 'font-size: 4vmin; color: black; font-weight: bolder'
                        spn.style.opacity = 0 ;

                        spn.innerHTML = '<br><br>' +   G.TXT.hello2 + '<br>' + G.TXT. everyThingIs + '<br>' + G.TXT.welcomeToTheSite
                        function fadingin (n) {
                            spn.style.opacity = n / 100 ;
                            ipadCover.style.backgroundColor = 'lightgreen';
                            if (n < 110) {setTimeout(()=>{fadingin (n+1)},20 )} else {consoleHackedUser(2)} //consoleHackedUser()
                        }
                        fadingin (1)

                    },1000)



            } else {DenyEntry ()}

            }
            function addInput (name, typeOfElem =  "text", placeholder,stl0) {
                var newInput = document.createElement('input');
                var addon = ''; if(name ==='codephrase') { newInput.dir = "ltr" ; addon = ';text-align: right' }
                newInput.id = name;
                newInput.type= typeOfElem
                newInput.name="userName"
                newInput.placeholder = placeholder
                newInput.autocomplete="off"
                newInput.style = "font-size: 3vmin; width: 50%;height :1%%; padding: 1vmin 4vmin; margin: 1vmin 1vmin; border: 0.3vmin solid #ccc; border-radius: 1vmin; box-sizing: border-box;background-color: white;" + addon
                if (stl0) stl (newInput, stl0);

                newInput.innerHTML = '<br>'
                return newInput;
            }
            blankIpad ()

            var firstName = addInput ('firstName', 'text',G.TXT.firstName, {'width': '45%'});
            var familyName = addInput ('familyName', 'text',G.TXT.lastName , {'width': '45%'});
            var userName =  addInput ('userName', 'text', G.TXT.userName, {'width': '85%'});
            var codephrase =  addInput ('codephrase', 'password', G.TXT.securityCode, {'width': '85%'});
            var submitButton =  addInput ('submitButton', 'button',  G.TXT.securityCode, {'backgroundColor' : 'rgb(238,174,238)', 'border': 'solid black'}); submitButton.value = G.TXT.entry  ;
            submitButton.addEventListener('click', submittingForm );
            submitButton.style.cursor = 'pointer'
            G.css.formBackColor = 'rgba(219, 250, 89 ,0.99)'
            var qArray = [firstName ,familyName,userName,codephrase,submitButton] ; let spanArr = [];
            //G.mgmt.max_Tofind.user = 6;

            G.hacks.formQarray = [ firstName ,familyName,userName]
            while (G.hacks.formQarray.length <  G.mgmt.max_Tofind.user - 1) {
                G.hacks.formQarray.push(codephrase);
            } ; G.hacks.formQarray.push(submitButton)



            for (let i = 0; i < qArray.length; i ++){
                if (qArray[i] === familyName) continue
                spanArr[i] = document.createElement('span');
                spanArr[i].innerHTML = '<br>';
                spanArr[i].appendChild(qArray[i]);
                if (qArray[i + 1] === familyName) {spanArr[i].appendChild(qArray[i + 1])}
                spanArr[i].id = 'formP-' + i;

            }

            G.divs.ipadContent = G.divs.ipadContent || Elm ('ipadContent','img');
            var img = G.divs.ipadContent;
            img.src = "data/White-Noise (1).jpg"
            let ipadCover = Id ('ipadCover');

            stl (ipadCover, { 'borderRadius': '2vmin' });
            ipadCover = Id ('ipadCover'); stl (ipadCover,myStyle ('text'),{
                'fontFamily': 'ariel', 'textAlign': 'center', 'lineHeight' : '3vmin','backgroundColor': G.css.formBackColor
            });

            ipadCover.innerHTML = '<br><font style="color:black;"> &nbsp' + G.TXT.userLogIn  +'<br><br>'
            ipadCover.style.background = G.css.formBackColor;
            var userForm = document.createElement('form'); stl (userForm, myStyle ('text'), {'fontSize': '1vmin', 'padding-right':'0vmin', 'textAlign': 'center'});
            ipadCover.appendChild(userForm)

            let passportIMG = Elm ('passportIMG', 'img');
            passportIMG.src = 'data/passports/passport (20).jpg'
            stl (passportIMG, {'width': '30%' , 'margins' : '1vmin', 'border': '0.3vmin solid #ccc ', 'border-radius': '1vmin'});
            userForm.appendChild (passportIMG);
            spanArr.forEach(e=>{userForm.appendChild(e)})
            img.onload = function() {}
            setFormData ();
            //retryPass(codephrase)

        }
        G.hacks.formQarray = G.hacks.formQarray || [];
        let ipadCover = Id ('ipadCover')
        if (answeris === 'right') {let ipadCover = Id ('ipadCover');
            ipadCover.style.filter = '';
            ipadCover.isbluring = false;
            addUserClue ()}
        else if (answeris === 'wrong') {
            var img = G.divs.ipadContent;
            img.src = "data/White-Noise (1).jpg"
            let rnd = getRandomInt (100) + 30
            whiteNoise (rnd,img); ipadCover.style.opacity = '0.5'}
        else {drawBaseForm ();}
        for (let i1 = 1; i1  <= G.mgmt.numOfsuccess; i1++) {
            if (i1   > G.hacks.formQarray.length) break;
            let q = G.hacks.formQarray[i1-1]
            if (q === undefined) {} else {
                q.value =  q.data
                if (q.id === 'firstName' && G.mgmt.numOfsuccess === i1) {Id ('passportIMG').src = Id ('passportIMG').data;  'data/passports/passport (19).jpg';
                let b = 'blur(' + 0.5 +'rem)'; Id ('passportIMG').style.filter = b;}
                if (q.id === 'familyName' && G.mgmt.numOfsuccess === i1 ) {blureChanger (Id ('passportIMG'))}
                if (q.id === 'codephrase' &&  G.hacks.formQarray[i1-1].id === 'codephrase'  && G.mgmt.numOfsuccess === i1) {
                    retryPass(Id('codephrase')) }
                if (q.id ===  'submitButton' ) { q.style.backgroundColor = 'rgb(144, 238, 144)'; colorBorderSubmit (q,60, 1);

            }

            }
        }
        if(G.mgmt.numOfsuccess + 1 >G.mgmt.max_Tofind.user && answeris !== 'wrong') {  G.mgmt.isFinalAnsInChapter = true; consoleHackedUser () }
    }
    function virus () {
        function consoleHackedVirus(stage = 1) {

            //G.mgmt.isFinalAnsInChapter = false;
            let tb = Id('textBlock2');
            let tc = Id('textContainer');
            G.divs.textContainer.appendChild(G.divs.textBlock2 )
            G.divs.textBlock2.style.overflow = "hidden";



            function stage1 (){
                let txt = G.TXT.aVirusWasBuiltToFight + '<br>'
                txt += G.TXT.bySendingThevirusTheOrgenazation + '<br>'
                txt += G.TXT.toSendTheVirusOpen + '<br>';
                txt += G.TXT.pressTheBlinkingButton + '<br>';
                txt += G.TXT.onTheMenuChooseVirus;
                G.divs.textBlock2.innerHTML = `<p dir = ${G.textDir} align=${G.textAlign}> ` + txt + "</p>"

                function wasVirusLoaderStarted () {
                    if (Id('precentVirus')) return
                    if (Id('sendVirus')) {
                        if (Id('sendVirus').innerHTML === G.TXT.uploadIngVirus) {stage2 (); return} else {setTimeout(()=>{wasVirusLoaderStarted  () },500)}
                    } else {setTimeout(()=>{wasVirusLoaderStarted  () },500)}

                }
                wasVirusLoaderStarted  ()



            }
            function stage2 (){
                playSound('virusUpload', 'loop');



                let txt =  G.TXT.uploadingVirusToserver + "<br>" + G.TXT.uploadVirusProgress
                G.divs.textBlock2.innerHTML += `<p dir = ${G.textDir} align=${G.textAlign}>`  + txt + ""
                G.divs.textBlock2.innerHTML += `<p dir = ${G.textDir}  align=${G.textAlign}             id="precentVirus"></p> </p>`
                let siteDiv = Id('precentVirus');
                let tm = 100
                let tm2 = 100
                if (G.dev_mode){tm = 3; tm2 = 100}
                function findSite (n){
                    let precent= Math.floor(n)

                    n += 0.8;
                    siteDiv.innerHTML = precent + "%";

                    if (n < 100) {setTimeout (()=>{findSite (n)},tm)} else {
                        siteDiv.innerHTML = "100%"

                        setTimeout(()=>{stage3("UpLoad Complete")},tm2);
                    }
                }
                findSite(1)


                }
            function stage3 (address){
                if(G.mgmt.isHolo) {
                    if (Id('scanApps')){Id('scanApps').innerHTML=''}

                let madeUpEvent = {}
                madeUpEvent.type = 'click'

                 ledEvent (madeUpEvent) }

                G.Q [505] = ["", "","","","","","","",""]



                G.Q [505][1] =  '<p dir=rtl style="text-align: right"> Virus Upload 100%.'
                G.Q [505][2] =  G.TXT.youMangedToWinOver + "<br>" + + "<br>" + "<br>";
                G.Q [505][2] += G.TXT.wouldYouLikeToFInish

                G.Q [505][3] =
                G.Q [505][4] = ""
                G.Q [505][G.mgmt.solutionCol] = 1;
                G.mgmt.isChapterCheckout = true;


                G.divs.textBlock2.remove()

                setQuestion (505)
            }

            if (stage === 1){stage1();} else if (stage === 2) {stage2 ()}





        }
        function virusComplete () {
            playSound('virusEffect', 'loop');
            for (let t = 0; t < G.hacks.visrusNumberOfrows; t++){
                let sp = Id('asciSpan' + t);
                sp.style.color = "";
                sp.style.opacity = 1;
            }
            let status = 1;
            let c1 =  "white";
            let c2 =  "black";
            let times = 0;
            function reversColors(){
                if (times>23) {playSound('virusEffect', 'pause'); return} ;
                times++


                ipadCover.style.background = c1  ;
                ipadCover.style.color =  c2 ;
                setTimeout( ()=> {[c1 ,c2] = [c2 ,c1];reversColors()},200);

            }
            reversColors()
            let madeUpEvent = {}
            madeUpEvent.type = 'click'
            madeUpEvent.isAtificial = true
            ledEvent (madeUpEvent)


            consoleHackedVirus(1)

        }
        function asciImage () {
            let asciArr = [];
            asciArr[1] = `MMMMMMMMMMMMMMMMN0d:'.      .':d0NMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMNOl;.              .;oONMMMMMMMMMMMMM
MMMMMMMMMMWKo'                      'oKWMMMMMMMMMM
MMMMMMMMMNx.                          .xNMMMMMMMMM
MMMMMMMMWx.                            .xWMMMMMMMM
MMMMMMMMWl                              lWMMMMMMMM
MMMMMMMMWd.                            .dWMMMMMMMM
MMMMMMMMMO.                            .OMMMMMMMMM
MMMMMMMMMK;                            ,KMMMMMMMMM
XOxOWMMMMNc   .','.            .','.   cNMMMMNOxOX
;  .OMMMMNl  ,0NWNKOd;.    .;dOKNWN0;  lNMMMMO.  ;
c   ,OWMNo.  lWMMMMMMX:    :XMMMMMMWl  .oNMWO,   c
0'   .;x0l.  :XMMMMWKo.    .oKWMMMMX:  .l0x;.   '0
:       ;kx' .:ddol;.  .cc.  .;lodd;  'xO;       :
:::;;,'..'dOc         ,OWWO,        .cOd'..',;;:::
MMMWWWNX0kkKNkc;'     cxddx:     ';ckNKkk0XNWWWMMM
MMMMMMMMMMMMMMMWX:              :XWMMMMMMMMMMMMMMM
MMMMMMMMMMMMMWXKNOc;.        .;cONKKWMMMMMMMMMMMMM
MMMMMNXK0Okoc,..x0docc:;::;:ccodKx..,coxO0KXNMMMMM
MMMMK:...       'kNKxxolddloxxKNk'       ...:KMMMM
MMMMXxc.      .lOXWMMMMWMWWMMMMWXOl.      .cxXMMMM
MMMMMMWK;   .oXWMMMMMMMMMMMMMMMMMMMXo.   ;KWMMMMMM
MMMMMMMMO' .xWMMMMMMMMMMMMMMMMMMMMMMWx. 'OMMMMMMMM


            `
        asciArr[2] = `
MX01101MX01101W0xdoxkO0KKKK0Okxoox0WMX01101MX01101
MX01K01MMMMMMNkc:::::::cccc:::::::ckNMX01101MMMMMM
MX01101MMMMMWOl                    lOWMX01101MMMMM
MXKJ101MMMMMNd                      dXMX01101MMMMM
MX01101MMMMMKo                      oKMX01101MMMMM
MX01101MMWWNOl                      lONWMX01101MMM
MMMMMMWN0xdoc::::::::::::::::::::::::cldx0NWMMMMMM
MMMMMMXd:::::::::::::::::::::::::::::::::cdXMMMMMM
MMMMMMXxc::::::::::::::::::::::::::::::::cxXMMMMMM
MX01A01WXOkd:;;;;;;;;;;;;;;;;;;;;;;;;:okOKNWMMMMMM
MX01B01MMMM0:'''     ;'''''';     ''':0MX01101MMMM
MX01101MMMMKc'''lO00Oo,'''',oO00Ol'''cKMX01101MMMM
MX01101MMMMNx;,,       ,'''',     ,,;xNMX01101MMMM
MX01101MMMMMN0kkkkkkkkkkkkkkkkkkkkkO0NMX01101MMMMM
MX01101MMMMMMWXKKKKKKKKKKKKKKKKKKKKXWMX01101MMMMMM
MX01101MMMNKO0XNXKKKKKKKKKKKKKKKKXNX0OKNMX01101MMM
MX01101MNOdc:cd0XNXKKKKKKKKKKKKXNN0dc:cdONMX01101M
MX01101Xxl:::::cdk0KXXXXXXXXXXK0kdc:::::lkXMX01101
MMMMMMNOo:;,;;:::ccoxk0XNNX0kxolc:::;;,;:oONMMMMMM
MMMMWOl;......,,;;::::o0NN0o::::;;,,......;lONMMMM
MMMNx;...........,,;::cd00xc::;,,...........;xNMMM
MMWk;''''''''''''''',;:cllc:;,''''''''''''''';kWMM
MMKl'''''''''''''''''',;;:;,''''''''''''''''''lKMM
MMO:',''''''''''',''''',,,,'''','''''''''''',':OMM
MMKdoooooooooooooooooooooooooooooooooooooooooodKMM
`

asciArr[3] = `
WWWWWWKxodxkOKXNWWWWWWWWWWWWWWWWWWWNX0OxxdoxXWWWWW
WWWWNxcxKWWWW1WWWWX0100100WWWW1123WWWdfrWN0lcOWWWW
WWWxc0WWWWWWWX0100100WWWWX0100100WWW00000023WxlKWW
WWXldWWWWWWWNNNWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWKcxWW
WWkc0WWNOdol:;,,:lxKWWWWWWWWWWWWKkdlc::clxKWWWolNW
WWdlNWXkkO0Oo;'... .cOWWWWWWWXx;. ....'cxxxONMxcKW
WXldWWNNWWWWNXOo:     .OWWWWWNl  .,:odkKWWWXXMO:kW
WKcxWWWWWWWWWWWWXx;',oXWWWWWWk;.'ckXWWWWWWWWWWK:xW
WOckWWWWWX0OkkOKNWXc.:KWWWWWWOcl0NWNXKKXWWWWWMXlxM
WkcOWNk/””””””””\ck0; lNWWWKKNKd/””””””””\ckNMXoxM
Wxc0WWk.          .xc ,KWWWWWWW0,         .xWMNokW
MxcKMWOo_--_____)OKK: ,KWWWWWWWN0k________kXWWNdkW
WKclXWWWWWWWWWWWWWWd  cNWWWWWWWWWWWWWWWWWWWWWWKlkW
WNc.oXWWWWWWWWWWWWK,  lWWWWWWWWWWWWWWWWWWWWWWNdcKW
WXloo:xKNNXXKKKN0o,  .xWWWWWWN00NWWWWWWWWWWX0oc0WW
WWNllkcoc.oXWWWNd.   lWWWWWWWWWNNWWWNXk,.oclklkWWW
WWWKcoOdo:.'oOXWWW. .lNWWWN00NWWWWWWKd''xxoOolXWWW
WWWW0coKxc:' .,clc'cxe\cc:,..:kOOxo:..:koo0dc0WWWW
WWWWWKcoXk:col;..                  .ckd;oKdc0WWWWW
WWWWWWKcoXO,.l0X0kdddk0OOOOl;:clodOXW0lxKolKWWWWWW
WWWWWWWKclX0, ,OXXNWWWWNNNNNWWWWWWWWKk00ldXWWWWWWW
WWWWWWWWXlcK0';KWNXXKxcccccxNWWWWWWX0XOlkWWWWWWWWW
WWWWWWWWWNdcOkl0W0-WWk.   .xNWWWWWKKXxl0WWWWWWWWWW
WWWWWWWWWWWWWNxcOWWWK,    .xWWWWXdcOWWWWWWWWWWWWWW
WWWWWWWWWWWWWWWOcoXWWl    ;XWWNkldXWWWWWWWWWWWWWWW
WWWWWWWWWWWWWWWWXdlokl010KcOkdodKWWWWWWWWWWWWWWWWW

`
let rnd = getRandomInt(asciArr.length - 1);
            return asciArr[rnd]
        }
        function asciRending (asc) {
            asc = asc.replace(' ', '&nbsp')


            asc = `<pre><p style="text-align: center"> <font style="font-size: 3vmin">${G.TXT.builingAttackVirus}</font></p>` + asc;
            return asc
        }
        function asciPasrseToSpan (txt0){
            let array = txt0.split(/\r?\n/); let htmltxt = '';
            for (let i = 0; i < array.length; i++){
                G.hacks.visrusNumberOfrows = i;

             let line = '<span id="' + ascispanId + i + '" style="font-size:inherit; opacity : 0;">' + array[i] + '</span><br>';
             htmltxt  += line
            }
            return htmltxt
        }
        function rightAnswer (){
            G.mgmt.numOfsuccess++;
            let numberToreveal0 = Math.floor(G.hacks.visrusNumberOfrows/ G.mgmt.max_Tofind.virus)
            revealvirus(numberToreveal0);
        }
        function wrongAnser (){
            function blinkingRow (elem) {
                let color = elem.style.color;
                function blink (b) {

                    if ( b % 2 == 0) {elem.style.color = 'red'} else {elem.style.color = 'yellow'}


                    b++;
                    if (b>20){setTimeout(()=>{elem.style.color = 'white' },4000) ;return }
                    setTimeout (()=>{ blink (b)},100 )
                }
                blink (1 )
            }
            let children = ipadCover.childNodes;
            let asciSpanId = 'asciSpan';
            let destenationOfRedRows = (G.mgmt.numOfsuccess / G.mgmt.max_Tofind.virus ) * 3;
            let redRows = 0
            for (let q = 0; q < G.hacks.visrusNumberOfrows; q++){
                let rnd = getRandomInt (3)
                let spn = Id(asciSpanId + q);

                if (rnd === 1) { spn.style.color = 'red'; blinkingRow (spn) ; redRows++}

                //if (redRows > destenationOfRedRows) {break}
            }


        }
        function revealvirus (numberToreveal){
            let isVirusFinished = false;
            if (G.mgmt.numOfsuccess >= G.mgmt.max_Tofind.virus) {isVirusFinished = true }
            var saftyCounter = 0;
            function revealOne (){

                if (saftyCounter > 60) return; saftyCounter++
                let rnd = getRandomInt (G.hacks.visrusNumberOfrows+1)

                let span = Id (ascispanId + (rnd - 1) )
                span.style.color = 'white';
                if (!span || span.style.opacity === '1'){revealOne ()} else { StylelFader (span,30,true)   ; return}

            }
            revealOne ()
            numberToreveal--
            if (numberToreveal > 0) {setTimeout(()=>{revealvirus (numberToreveal)},200)} else if (isVirusFinished)  virusComplete ()


        }
        function BuildVirus () {
            let t = asciImage ()
             t = asciRending (t);
             t = asciPasrseToSpan (t);


             ipadCover.style.fontSize = "2vmin";
             ipadCover.style.lineHeight = "2.3vmin"
             ipadCover.style.color = 'white';
             ipadCover.innerHTML = t;


         }


        const ascispanId = 'asciSpan';
        var ipadCover = Id('ipadCover');
        let gradientColor2 = ` radial-gradient(ellipse at center, rgba(0,0,0,1) 0%, rgba(76,76,76,1) 0%, rgba(28,28,28,1) 57%, rgba(19,19,19,1) 80%, rgba(71,71,71,1) 100%)`
        stl (ipadCover, {backgroundImage:gradientColor2,  'borderRadius': '2vmin'})
        if (answeris === 'right') { rightAnswer ()} else if (answeris === 'wrong') {wrongAnser ()} else{
             BuildVirus ()};
    }
    function webSite () {
        function consoleHackedWebsite(stage = 1) {


            let tb = Id('textBlock2');
            let tc = Id('textContainer');
            G.divs.textContainer.appendChild(G.divs.textBlock2 )
            G.divs.textBlock2.style.overflow = "hidden";


            function stage1 (){


                let txt = G.TXT.therWereFound  + G.mgmt.numOfsuccess + " "
                txt += G.TXT.suspiciusApps + '<br>'
                txt += G.TXT.toScanThemAndFidSite + '<br>'
                txt += G.TXT.pressFlickeringButton + "<br>" + "<br>"
                txt += G.TXT.onMenuChooseScan
                G.divs.textBlock2.innerHTML = `<p dir = ${G.textDir} align=${G.textAlign}>`  + txt + "</p>"

                setTimeout(()=>{playSound ('Consoletyping', 'pause')},1500);
                 holoMenu('scanner');

                function wasScannerStarted () {
                    if (Id('scanApps')) {

                        if (Id('scanApps').innerHTML === G.TXT.scanningAppa) {stage2 ()} else {setTimeout(()=>{wasScannerStarted () },500)}
                    } else {setTimeout(()=>{wasScannerStarted () },500)}

                }
                wasScannerStarted ()



            }
            function stage2 (){
                console.log ('stage two')
                playSound('scannerEffect');
                function makeid(length, isPass = false) {
                        var result           = '';
                        var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
                        var passwordChars = "!@#$%^&*~" + characters
                        if (isPass){characters = passwordChars}
                        var charactersLength = characters.length;
                        for (var i = 0; i < length; i++ ) {
                          result += characters.charAt(Math.floor(Math.random() * charactersLength));
                        }
                    return result;
                }
                let tm = 100; if (G.dev_mode) {tm = 3 }

                let txt = G.TXT.scanningAppsInsearchFor + "<br>" + G.TXT.siteInDarkWeb + "<br>"
                G.divs.textBlock2.innerHTML += `<p dir = ${G.textDir} align=${G.textAlign}>`  + txt + "</p>"
                G.divs.textBlock2.innerHTML += '<div id="irgunSite"></div>'
                let siteDiv = Id('irgunSite');
                function findSite (n){
                    let id = makeid(Math.floor(n))
                    n += 0.2;
                    siteDiv.innerHTML = 'darkNet:\\\\' + id + ".onion:22";

                    if (n < 15) {setTimeout (()=>{findSite (n)},tm)} else {stage3(siteDiv.innerHTML)}
                }
                findSite(1)


                }
            function stage3 (address){
                if(G.mgmt.isHolo) {
                    if (Id('scanApps')){Id('scanApps').innerHTML=''}

                let madeUpEvent = {}
                madeUpEvent.type = 'click'

                 ledEvent (madeUpEvent) }
                 playSound('scannerWin'); playSound('scannerEffect', 'stop');

                G.Q [500] = ["", "","","","","","","",""]
                G.Q [500][1] =  '<br><p dir=rtl style="text-align: right"> All Applications Scanned'

                G.Q [500][2] = G.TXT.allAppsWereScaned + "<br>" + G.TXT.byTheScanTheSiteFound + "<br><br>" + address + "<br><br>" ;
                G.Q [500][2] += G.TXT.likeToContinue
                let theNextStage = G.mgmt.stageNames[G.saves.stageNumber + 1 ]
                G.Q [500][3] = G.TXT.continue + G.mgmt.stagesInfo[theNextStage]
                G.Q [500][4] = G.TXT.reportToTheAuthoroties
                G.Q [500][G.mgmt.solutionCol] = 1;
                G.mgmt.isChapterCheckout = true;


                G.divs.textBlock2.remove()

                setQuestion (500)
            }

            if (stage === 1){stage1();} else if (stage === 2) {stage2 ()}





        }
        function findWebsite() {
            consoleHackedWebsite( 1)
            let madeUpEvent = {}
            madeUpEvent.type = 'click'
            madeUpEvent.isAtificial = true

             ledEvent (madeUpEvent)

        }
        function getSVGs () {

            var svgHTML = [` <svg version="1.1" id="social" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"  viewBox="0 0 57.983 57.983" style="enable-background:new 0 0 57.983 57.983;" xml:space="preserve"> <g> 	<path style="fill:#A4E869;" d="M25.934,55.598l-4.177-2.67c-1.037-0.566-2.244-2.524-2.244-3.705v-3.24  c0,0,2.882-1.905,3.768-5.762c0.734-0.475,1.226-1.296,1.226-2.231c0,0,0-1.376,0-2.425c-3.207,1.021-6.014,1.418-6.014,1.418  c2.188-2.188,2.957-6.682,3.225-9.872c-1.139-1.544-2-3.264-2.549-5.098c-1.395-0.625-3.231-1.029-5.655-1.029c-10.803,0-10,8-10,8  v3.126c-0.54,0.488-0.993,1.555-0.993,2.335v3.546c0,0.934,0.491,1.756,1.226,2.231c0.886,3.857,3.768,5.762,3.768,5.762v3.24  c0,1.182-1.207,3.14-2.244,3.705l-4.177,2.67c-1.09,0.697-0.596,2.385,0.697,2.385h23.449  C26.53,57.983,27.023,56.295,25.934,55.598z"/> 	<path style="fill:#52C306;" d="M37.991,0c-10.77,0-19.5,7.827-19.5,17.483c0,3.558,1.189,6.866,3.225,9.628  c-0.268,3.19-1.037,7.684-3.225,9.872c0,0,6.686-0.938,11.214-3.673c2.515,1.06,5.322,1.656,8.286,1.656  c10.77,0,19.5-7.827,19.5-17.483S48.761,0,37.991,0z"/> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> </svg> `, ` <svg version="1.1" id="Chat3" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"  viewBox="0 0 58 58" style="enable-background:new 0 0 58 58;" xml:space="preserve"> <g> 	<path style="fill:#FC852E;" d="M34.064,54.07c-0.539-0.12-0.879-0.654-0.76-1.193c0.121-0.539,0.663-0.874,1.193-0.759l7.252,1.614  c0.003-0.002,0.007-0.003,0.01-0.005l0.171,0.045l0.326,0.073c0.027,0.006,0.047,0.024,0.073,0.032L58,58l-4.988-14.963  C55.543,38.78,57,33.812,57,28.5C57,12.76,44.24,0,28.5,0S0,12.76,0,28.5S12.76,57,28.5,57c3.603,0,7.048-0.673,10.221-1.894  L34.064,54.07z"/> 	<path style="fill:#FFFFFF;" d="M29,22H15c-0.552,0-1-0.448-1-1s0.448-1,1-1h14c0.552,0,1,0.448,1,1S29.552,22,29,22z"/> 	<path style="fill:#FFFFFF;" d="M42,30H15c-0.552,0-1-0.448-1-1s0.448-1,1-1h27c0.552,0,1,0.448,1,1S42.552,30,42,30z"/> 	<path style="fill:#FFFFFF;" d="M42,38H15c-0.552,0-1-0.448-1-1s0.448-1,1-1h27c0.552,0,1,0.448,1,1S42.552,38,42,38z"/> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> </svg> `, ` <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"  viewBox="0 0 58 58" style="enable-background:new 0 0 58 58;" xml:space="preserve"> <g> 	<path style="fill:#2CB742;" d="M0,58l4.988-14.963C2.457,38.78,1,33.812,1,28.5C1,12.76,13.76,0,29.5,0S58,12.76,58,28.5  S45.24,57,29.5,57c-4.789,0-9.299-1.187-13.26-3.273L0,58z"/> 	<path style="fill:#FFFFFF;" d="M47.683,37.985c-1.316-2.487-6.169-5.331-6.169-5.331c-1.098-0.626-2.423-0.696-3.049,0.42  c0,0-1.577,1.891-1.978,2.163c-1.832,1.241-3.529,1.193-5.242-0.52l-3.981-3.981l-3.981-3.981c-1.713-1.713-1.761-3.41-0.52-5.242  c0.272-0.401,2.163-1.978,2.163-1.978c1.116-0.627,1.046-1.951,0.42-3.049c0,0-2.844-4.853-5.331-6.169  c-1.058-0.56-2.357-0.364-3.203,0.482l-1.758,1.758c-5.577,5.577-2.831,11.873,2.746,17.45l5.097,5.097l5.097,5.097  c5.577,5.577,11.873,8.323,17.45,2.746l1.758-1.758C48.048,40.341,48.243,39.042,47.683,37.985z"/> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> </svg> `, ` <svg version="1.1" id="Coins" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"  viewBox="0 0 58.007 58.007" style="enable-background:new 0 0 58.007 58.007;" xml:space="preserve"> <g id="XMLID_22_"> 	<path id="XMLID_143_" style="fill:#FCC62D;" d="M52.003,29.211v1.238c0,6.932-11.641,12.551-26,12.551  c-7.926,0-15.019-1.714-19.788-4.414C7.823,44.831,18.751,50,32.003,50c14.359,0,26-6.068,26-13  C58.003,33.952,55.747,31.266,52.003,29.211"/> 	<path id="XMLID_142_" style="fill:#E4AF18;" d="M32.003,50c-14.359,0-26-6.068-26-13v8.448c0,6.932,11.641,12.552,26,12.552  s26-5.62,26-12.552V37C58.003,43.932,46.362,50,32.003,50"/> 	<path id="XMLID_141_" style="fill:#CE9912;" d="M9.003,51.349c0.59,0.539,1.259,1.055,2,1.545v-8.291  c-0.741-0.51-1.41-1.045-2-1.603V51.349z"/> 	<path id="XMLID_140_" style="fill:#CE9912;" d="M53.003,44.603v8.291c0.741-0.489,1.41-1.006,2-1.545V43  C54.414,43.558,53.745,44.093,53.003,44.603"/> 	<path id="XMLID_139_" style="fill:#CE9912;" d="M13.003,54.06c0.632,0.327,1.3,0.636,2,0.929v-8.193  c-0.7-0.308-1.368-0.633-2-0.975V54.06z"/> 	<path id="XMLID_138_" style="fill:#CE9912;" d="M49.003,54.988c0.7-0.292,1.368-0.602,2-0.929V45.82  c-0.632,0.342-1.3,0.668-2,0.975V54.988z"/> 	<path id="XMLID_137_" style="fill:#CE9912;" d="M17.003,55.745c0.646,0.221,1.313,0.427,2,0.619V48.25  c-0.687-0.204-1.354-0.423-2-0.656V55.745z"/> 	<path id="XMLID_136_" style="fill:#CE9912;" d="M45.003,56.364c0.687-0.192,1.354-0.398,2-0.619v-8.151  c-0.646,0.233-1.313,0.452-2,0.656V56.364z"/> 	<path id="XMLID_135_" style="fill:#CE9912;" d="M22.003,57.084c0.653,0.132,1.321,0.25,2,0.355v-8.044  c-0.679-0.113-1.347-0.239-2-0.379V57.084z"/> 	<path id="XMLID_134_" style="fill:#CE9912;" d="M40.003,57.439c0.679-0.106,1.347-0.224,2-0.355v-8.069  c-0.653,0.14-1.321,0.266-2,0.38V57.439z"/> 	<path id="XMLID_133_" style="fill:#CE9912;" d="M28.003,57.899c0.658,0.049,1.326,0.083,2,0.107v-8.003  c-0.674-0.026-1.342-0.062-2-0.115V57.899z"/> 	<path id="XMLID_132_" style="fill:#CE9912;" d="M34.003,58.007c0.674-0.025,1.342-0.058,2-0.107v-8.012  c-0.658,0.053-1.326,0.089-2,0.116V58.007z"/> 	<path id="XMLID_131_" style="fill:#E4AF18;" d="M26.003,34.993c-14.359,0-26-6.068-26-13v8.448c0,6.932,11.641,12.552,26,12.552  s26-5.62,26-12.552v-8.448C52.003,28.925,40.362,34.993,26.003,34.993"/> 	<path id="XMLID_130_" style="fill:#CE9912;" d="M3.003,36.342c0.59,0.539,1.259,1.055,2,1.545v-8.291  c-0.741-0.51-1.41-1.045-2-1.602V36.342z"/> 	<path id="XMLID_129_" style="fill:#CE9912;" d="M47.003,29.596v8.291c0.741-0.489,1.41-1.006,2-1.545v-8.349  C48.414,28.551,47.745,29.086,47.003,29.596"/> 	<path id="XMLID_128_" style="fill:#CE9912;" d="M7.003,39.053c0.632,0.327,1.3,0.636,2,0.929v-8.193  c-0.7-0.308-1.368-0.633-2-0.975V39.053z"/> 	<path id="XMLID_127_" style="fill:#CE9912;" d="M43.003,39.981c0.7-0.292,1.368-0.601,2-0.929v-8.239  c-0.632,0.342-1.3,0.668-2,0.975V39.981z"/> 	<path id="XMLID_126_" style="fill:#CE9912;" d="M11.003,40.738c0.646,0.221,1.313,0.427,2,0.619v-8.114  c-0.687-0.204-1.354-0.423-2-0.656V40.738z"/> 	<path id="XMLID_125_" style="fill:#CE9912;" d="M39.003,41.357c0.687-0.192,1.354-0.398,2-0.619v-8.151  c-0.646,0.233-1.313,0.452-2,0.656V41.357z"/> 	<path id="XMLID_124_" style="fill:#CE9912;" d="M16.003,42.077c0.653,0.132,1.321,0.25,2,0.355v-8.044  c-0.679-0.113-1.347-0.239-2-0.379V42.077z"/> 	<path id="XMLID_123_" style="fill:#CE9912;" d="M34.003,42.433c0.679-0.106,1.347-0.224,2-0.355v-8.069  c-0.653,0.14-1.321,0.266-2,0.38V42.433z"/> 	<path id="XMLID_122_" style="fill:#CE9912;" d="M22.003,42.893c0.658,0.049,1.326,0.083,2,0.107v-8.003  c-0.674-0.026-1.342-0.062-2-0.115V42.893z"/> 	<path id="XMLID_121_" style="fill:#CE9912;" d="M28.003,43c0.674-0.025,1.342-0.058,2-0.107v-8.012  c-0.658,0.053-1.326,0.089-2,0.116V43z"/> 	<path id="XMLID_120_" style="fill:#FFD949;" d="M51.32,33.302C48.643,38.858,38.329,43,26.003,43c-4.604,0-8.926-0.58-12.677-1.593  c3.628,2.463,10.085,4.559,18.677,4.559c13.682,0,22-5.311,22-8.966C54.003,35.78,53.064,34.486,51.32,33.302"/> 	<path id="XMLID_119_" style="fill:#FFD949;" d="M31.003,33c-14.359,0-26-5.62-26-12.552v-5.652c-3.141,1.969-5,4.438-5,7.204  c0,6.932,11.641,13,26,13c6.914,0,13.192-1.409,17.849-3.642C40.061,32.401,35.678,33,31.003,33"/> 	<path id="XMLID_118_" style="fill:#E4AF18;" d="M31.003,24.993c-14.359,0-26-6.068-26-13v8.448c0,6.932,11.641,12.552,26,12.552  c14.359,0,26-5.62,26-12.552v-8.448C57.003,18.925,45.362,24.993,31.003,24.993"/> 	<path id="XMLID_117_" style="fill:#CE9912;" d="M8.003,26.342c0.59,0.539,1.259,1.055,2,1.545v-8.291  c-0.741-0.51-1.41-1.045-2-1.602V26.342z"/> 	<path id="XMLID_116_" style="fill:#CE9912;" d="M52.003,19.596v8.291c0.741-0.489,1.41-1.006,2-1.545v-8.349  C53.414,18.551,52.745,19.086,52.003,19.596"/> 	<path id="XMLID_115_" style="fill:#CE9912;" d="M12.003,29.053c0.632,0.327,1.3,0.636,2,0.929v-8.193  c-0.7-0.308-1.368-0.633-2-0.975V29.053z"/> 	<path id="XMLID_114_" style="fill:#CE9912;" d="M48.003,29.981c0.7-0.292,1.368-0.601,2-0.929v-8.239  c-0.632,0.342-1.3,0.668-2,0.975V29.981z"/> 	<path id="XMLID_113_" style="fill:#CE9912;" d="M16.003,30.738c0.646,0.221,1.313,0.427,2,0.619v-8.114  c-0.687-0.204-1.354-0.423-2-0.656V30.738z"/> 	<path id="XMLID_112_" style="fill:#CE9912;" d="M44.003,31.357c0.687-0.192,1.354-0.398,2-0.619v-8.151  c-0.646,0.233-1.313,0.452-2,0.656V31.357z"/> 	<path id="XMLID_111_" style="fill:#CE9912;" d="M21.003,32.077c0.653,0.132,1.321,0.25,2,0.355v-8.044  c-0.679-0.113-1.347-0.239-2-0.379V32.077z"/> 	<path id="XMLID_110_" style="fill:#CE9912;" d="M39.003,32.433c0.679-0.106,1.347-0.224,2-0.355v-8.069  c-0.653,0.14-1.321,0.266-2,0.38V32.433z"/> 	<path id="XMLID_109_" style="fill:#CE9912;" d="M27.003,32.893c0.658,0.049,1.326,0.083,2,0.107v-8.003  c-0.674-0.026-1.342-0.062-2-0.115V32.893z"/> 	<path id="XMLID_108_" style="fill:#CE9912;" d="M33.003,33c0.674-0.025,1.342-0.058,2-0.107v-8.012  c-0.658,0.053-1.326,0.089-2,0.116V33z"/> 	<path id="XMLID_107_" style="fill:#FCC62D;" d="M57.003,12c0,6.932-11.641,13-26,13c-14.359,0-26-6.068-26-13  c0-6.932,11.641-12,26-12C45.362,0,57.003,5.068,57.003,12"/> 	<path id="XMLID_106_" style="fill:#FFD949;" d="M31.003,20.966c-13.682,0-22-5.31-22-8.966c0-3.655,8.318-9,22-9  c13.682,0,22,5.345,22,9C53.003,15.656,44.685,20.966,31.003,20.966"/> 	<path id="XMLID_105_" style="fill:#F0C41B;" d="M37.784,13.359c0.82-0.174,1.301-0.68,1.124-1.257l-0.19-0.616  c-0.139-0.453-0.68-0.831-1.343-1.019c-0.902-1.927-3.202-2.625-6.618-2.625c-0.162,0-0.32,0.004-0.476,0.01  c-1.166,0.048-2.329-0.064-3.236-0.396c-0.37-0.135-0.671-0.276-0.87-0.423c-0.09-0.066-0.308-0.024-0.308,0.06  c0,0.146,0.011,0.319,0.043,0.511c0.124,0.747-0.024,0.635-0.762,1.38c-0.428,0.434-0.769,0.934-1.016,1.486  c-0.659,0.189-1.197,0.566-1.336,1.017l-0.19,0.616c-0.177,0.577,0.304,1.083,1.124,1.257c0.234,1.476,1.237,2.772,3.424,3.486  l-0.12,1.037c-0.032,0.277-0.271,0.533-0.619,0.659l-4.411,1.592C24.58,20.674,27.516,21,30.757,21  c3.196,0,6.095-0.317,8.645-0.842l-4.315-1.613c-0.341-0.128-0.575-0.382-0.606-0.654l-0.121-1.045  C36.547,16.132,37.55,14.835,37.784,13.359"/> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> </svg> `
 ,`<svg version="1.1" id="animal" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"  viewBox="0 0 127.6 127.6" style="enable-background:new 0 0 127.6 127.6;" xml:space="preserve"> <g> 	<g>  <path style="fill:#FFECD2;" d="M115.06,91.168c0,16.236-22.949,34.932-51.26,34.932s-51.26-18.695-51.26-34.932  	c0-16.238,22.949-29.402,51.26-29.402S115.06,74.93,115.06,91.168z"/> 	</g> 	<g>  <path style="fill:#EFC99A;" d="M115.06,91.168c0,16.236-22.949,29.266-51.26,29.266s-51.26-13.029-51.26-29.266  	c0-16.238,22.949-29.402,51.26-29.402S115.06,74.93,115.06,91.168z"/> 	</g> 	<g>  <path style="fill:#33363A;" d="M63.8,127.6c-29.713,0-52.76-19.584-52.76-36.432c0-17.04,23.668-30.902,52.76-30.902  	s52.76,13.862,52.76,30.902C116.56,108.016,93.513,127.6,63.8,127.6z M63.8,63.266c-27.438,0-49.76,12.517-49.76,27.902  	c0,15.143,22.196,33.432,49.76,33.432s49.76-18.289,49.76-33.432C113.56,75.782,91.237,63.266,63.8,63.266z"/> 	</g> 	<g>  <g>  	<path style="fill:#E5B076;" d="M113.009,79.612c0,20.676-22.031,37.441-49.209,37.441s-49.209-16.766-49.209-37.441   c0-20.68,22.031-45.459,49.209-45.459S113.009,58.932,113.009,79.612z"/>  </g>  <g>  	<path style="fill:#D3964C;" d="M113.009,79.612c0,20.676-22.031,37.441-49.209,37.441s-49.209-16.766-49.209-37.441   c0-20.68,22.031-34.928,49.209-34.928S113.009,58.932,113.009,79.612z"/>  </g>  <g>  	<path style="fill:#E5B076;" d="M74.278,83.569c0,1.393-4.691,1.643-10.478,1.643c-5.787,0-10.479-0.25-10.479-1.643   c0-1.395,4.691-5.037,10.479-5.037C69.587,78.531,74.278,82.174,74.278,83.569z"/>  </g>  <g>  	<path style="fill:#C4833D;" d="M113.009,79.612c0,20.676-22.031,37.441-49.209,37.441s-49.209-16.766-49.209-37.441   c0-20.682,6.262,18.34,49.209,18.34S113.009,58.93,113.009,79.612z"/>  </g>  <g>  	<path style="fill:#33363A;" d="M63.8,118.553c-27.961,0-50.709-17.469-50.709-38.941c0-21.27,22.619-46.959,50.709-46.959   s50.709,25.689,50.709,46.959C114.509,101.084,91.761,118.553,63.8,118.553z M63.8,35.653c-26.428,0-47.709,24.048-47.709,43.959   c0,19.818,21.402,35.941,47.709,35.941s47.709-16.123,47.709-35.941C111.509,59.7,90.228,35.653,63.8,35.653z"/>  </g> 	</g> 	<g>  <g>  	<g>   <g>   	<g>    <g>    	<path style="fill:#D3964C;" d="M21.11,34.031c-0.124,12.322,4.217,22.303,11.009,27.771     c6.933-8.355,11.495-20.207,11.619-32.531C43.863,16.948,39.522,6.967,32.729,1.5C25.798,9.854,21.235,21.707,21.11,34.031z"     />    </g>    <g>    	<path style="fill:#C4833D;" d="M32.729,1.5C25.798,9.854,21.235,21.707,21.11,34.031     c-0.124,12.322,4.217,22.303,11.009,27.771L32.729,1.5z"/>    </g>    <g>    	<path style="fill:#33363A;" d="M26.4,56.705c-0.503,0-0.995-0.254-1.278-0.714c-3.69-6-5.596-13.599-5.511-21.976     c0.123-12.257,4.484-24.458,11.964-33.474c0.521-0.631,1.454-0.725,2.095-0.211c7.479,6.019,11.695,16.572,11.569,28.956     c-0.075,7.313-1.688,14.76-4.665,21.537c-0.333,0.757-1.219,1.104-1.977,0.77c-0.758-0.333-1.103-1.218-0.77-1.977     c2.815-6.409,4.341-13.45,4.411-20.361c0.109-10.797-3.267-20.025-9.311-25.604c-6.463,8.362-10.206,19.348-10.317,30.395     c-0.079,7.811,1.672,14.855,5.065,20.373c0.435,0.706,0.214,1.63-0.491,2.063C26.94,56.634,26.668,56.705,26.4,56.705z"/>    </g>   	</g>   </g>  	</g>  	<g>   <g>   	<g>    <g>    	<path style="fill:#66310E;" d="M26.919,40.11c-0.059,5.826,1.994,10.541,5.204,13.127c3.276-3.949,5.433-9.551,5.491-15.375     c0.06-5.826-1.992-10.543-5.203-13.127C29.135,28.684,26.978,34.285,26.919,40.11z"/>    </g>    <g>    	<path style="fill:#89410B;" d="M32.411,24.735c-3.276,3.949-5.434,9.551-5.492,15.375     c-0.059,5.826,1.994,10.541,5.204,13.127L32.411,24.735z"/>    </g>    <g>    	<path style="fill:#33363A;" d="M32.122,54.737c-0.33,0-0.663-0.108-0.94-0.332c-3.724-3-5.824-8.216-5.763-14.31l0,0     c0.061-5.971,2.188-11.919,5.838-16.318c0.521-0.631,1.455-0.726,2.095-0.211c3.725,2.998,5.825,8.214,5.763,14.312     c-0.061,5.971-2.188,11.919-5.837,16.317C32.982,54.552,32.554,54.737,32.122,54.737z M26.919,40.11l1.5,0.015     c-0.045,4.413,1.253,8.354,3.524,10.88c2.618-3.716,4.123-8.423,4.171-13.157c0.045-4.416-1.252-8.356-3.523-10.88     c-2.619,3.716-4.124,8.424-4.172,13.157L26.919,40.11z"/>    </g>   	</g>   </g>  	</g>  </g>  <g>  	<g>   <g>   	<g>    <g>    	<path style="fill:#D3964C;" d="M106.489,34.031c0.124,12.322-4.217,22.303-11.009,27.771     c-6.933-8.355-11.495-20.207-11.619-32.531C83.736,16.948,88.078,6.967,94.871,1.5     C101.802,9.854,106.365,21.707,106.489,34.031z"/>    </g>    <g>    	<path style="fill:#C4833D;" d="M94.871,1.5c6.931,8.353,11.494,20.207,11.618,32.531     c0.124,12.322-4.217,22.303-11.009,27.771L94.871,1.5z"/>    </g>    <g>    	<path style="fill:#33363A;" d="M101.2,56.705c-0.269,0-0.54-0.071-0.785-0.223c-0.705-0.434-0.926-1.357-0.491-2.063     c3.394-5.518,5.145-12.563,5.065-20.372c-0.111-11.048-3.854-22.033-10.317-30.396c-6.044,5.579-9.42,14.808-9.311,25.604     c0.07,6.911,1.596,13.952,4.411,20.361c0.333,0.759-0.012,1.644-0.77,1.977c-0.758,0.336-1.644-0.012-1.977-0.77     c-2.978-6.777-4.59-14.225-4.665-21.537C82.235,16.904,86.452,6.35,93.931,0.331c0.641-0.514,1.572-0.42,2.095,0.211     c7.479,9.016,11.841,21.217,11.964,33.475c0.085,8.376-1.82,15.975-5.511,21.975C102.195,56.451,101.703,56.705,101.2,56.705     z"/>    </g>   	</g>   </g>  	</g>  	<g>   <g>   	<g>    <g>    	<path style="fill:#66310E;" d="M100.681,40.11c0.059,5.826-1.994,10.541-5.204,13.127c-3.276-3.949-5.433-9.551-5.491-15.375     c-0.06-5.826,1.992-10.543,5.203-13.127C98.465,28.684,100.622,34.285,100.681,40.11z"/>    </g>    <g>    	<path style="fill:#89410B;" d="M95.189,24.735c3.276,3.949,5.434,9.551,5.492,15.375c0.059,5.826-1.994,10.541-5.204,13.127     L95.189,24.735z"/>    </g>    <g>    	<path style="fill:#33363A;" d="M95.478,54.737c-0.432,0-0.859-0.185-1.155-0.542c-3.649-4.398-5.776-10.347-5.837-16.318     c-0.063-6.097,2.038-11.313,5.763-14.311c0.64-0.515,1.572-0.42,2.095,0.211c3.65,4.399,5.777,10.348,5.838,16.318l0,0     c0.062,6.094-2.039,11.31-5.763,14.31C96.141,54.628,95.808,54.737,95.478,54.737z M95.009,26.967     c-2.271,2.523-3.568,6.464-3.523,10.879c0.048,4.735,1.553,9.442,4.171,13.158c2.271-2.525,3.569-6.467,3.524-10.88     C99.133,35.391,97.628,30.683,95.009,26.967z"/>    </g>   	</g>   </g>  	</g>  </g> 	</g> 	<path style="fill:#33363A;" d="M73.437,94.565c-0.828,0-1.5,0.672-1.5,1.5c0,1.428-1.162,2.59-2.59,2.59H67.89  c-1.428,0-2.59-1.162-2.59-2.59V94.61c0-0.073-0.011-0.143-0.021-0.213l3.111-1.557c0.622-0.312,0.949-1.01,0.789-1.687  s-0.765-1.155-1.46-1.155h-7.837c-0.695,0-1.3,0.479-1.46,1.155s0.167,1.375,0.789,1.687l3.11,1.557  c-0.01,0.07-0.021,0.14-0.021,0.213v1.455c0,1.428-1.162,2.59-2.59,2.59h-1.457c-1.428,0-2.59-1.162-2.59-2.59  c0-0.828-0.672-1.5-1.5-1.5s-1.5,0.672-1.5,1.5c0,3.082,2.508,5.59,5.59,5.59h1.457c1.615,0,3.068-0.693,4.09-1.792  c1.021,1.099,2.475,1.792,4.09,1.792h1.457c3.082,0,5.59-2.508,5.59-5.59C74.937,95.237,74.265,94.565,73.437,94.565z"/> 	<g>  <path style="fill:#89410B;" d="M47.638,84.428c0,4.449-3.605,8.051-8.053,8.051c-4.445,0-8.051-3.602-8.051-8.051  	c0-4.447,3.605-8.051,8.051-8.051C44.032,76.377,47.638,79.981,47.638,84.428z"/> 	</g> 	<g>  <circle style="fill:#FFFFFF;" cx="35.582" cy="81.811" r="3.28"/> 	</g> 	<path style="fill:#33363A;" d="M39.585,74.877c-3.243,0-6.11,1.628-7.837,4.107c-0.106,0.143-0.198,0.294-0.288,0.448  c-0.898,1.456-1.426,3.163-1.426,4.996c0,5.267,4.284,9.551,9.551,9.551c5.268,0,9.553-4.284,9.553-9.551  S44.853,74.877,39.585,74.877z M39.585,90.979c-2.721,0-5.058-1.668-6.046-4.034c0.68-0.018,1.509-0.201,2.437-0.393  c0.357-0.03,0.701-0.097,1.032-0.202c0.809-0.144,1.675-0.258,2.577-0.258c2.413,0,4.572,0.813,6.048,0.853  C44.644,89.311,42.307,90.979,39.585,90.979z"/> 	<circle style="fill:#FFFFFF;" cx="35.581" cy="81.812" r="1.78"/> 	<g>  <path style="fill:#89410B;" d="M96.066,84.428c0,4.449-3.605,8.051-8.051,8.051c-4.447,0-8.053-3.602-8.053-8.051  	c0-4.447,3.605-8.051,8.053-8.051C92.46,76.377,96.066,79.981,96.066,84.428z"/> 	</g> 	<g>  <circle style="fill:#FFFFFF;" cx="84.01" cy="81.811" r="3.28"/> 	</g> 	<path style="fill:#33363A;" d="M88.015,74.877c-3.242,0-6.108,1.626-7.835,4.102c-0.108,0.146-0.202,0.299-0.294,0.457  c-0.897,1.455-1.424,3.161-1.424,4.992c0,5.267,4.285,9.551,9.553,9.551c5.267,0,9.551-4.284,9.551-9.551  S93.281,74.877,88.015,74.877z M88.015,90.979c-2.721,0-5.059-1.668-6.048-4.034c0.689-0.018,1.526-0.2,2.47-0.396  c0.335-0.03,0.657-0.093,0.968-0.189c0.82-0.148,1.695-0.268,2.61-0.268c2.412,0,4.571,0.813,6.046,0.853  C93.073,89.311,90.735,90.979,88.015,90.979z"/> 	<circle style="fill:#FFFFFF;" cx="84.009" cy="81.812" r="1.78"/> 	<g>  <g>  	<polygon style="fill:#E5B076;" points="84.327,44.19 77.62,29.262 71.208,32.145 63.8,24.735 56.391,32.145 49.98,29.262    43.273,44.19 58.197,50.897 58.53,50.155 63.8,55.424 69.069,50.156 69.402,50.897  "/>  </g>  <g>  	<polygon style="fill:#D3964C;" points="71.208,44.645 63.8,37.237 56.391,44.645 49.98,41.764 47.946,46.289 58.197,50.897    58.53,50.155 63.8,55.424 69.069,50.156 69.402,50.897 79.653,46.289 77.62,41.764  "/>  </g>  <g>  	<path style="fill:#33363A;" d="M84.328,45.69c-0.572,0-1.119-0.329-1.369-0.885l-6.092-13.56l-5.044,2.268   c-0.567,0.256-1.235,0.132-1.676-0.308l-6.348-6.35l-6.349,6.35c-0.441,0.439-1.109,0.563-1.676,0.308l-5.043-2.268l-6.092,13.56   c-0.34,0.755-1.226,1.095-1.983,0.753c-0.755-0.34-1.093-1.228-0.753-1.983l6.707-14.928c0.163-0.362,0.464-0.646,0.836-0.787   c0.37-0.143,0.783-0.13,1.147,0.034l5.467,2.458l6.678-6.678c0.281-0.281,0.663-0.439,1.061-0.439l0,0   c0.397,0,0.779,0.158,1.061,0.439l6.677,6.678l5.468-2.458c0.362-0.164,0.775-0.177,1.147-0.034   c0.372,0.142,0.673,0.425,0.836,0.787l6.707,14.928c0.34,0.756,0.002,1.644-0.753,1.983C84.742,45.648,84.533,45.69,84.328,45.69   z"/>  </g> 	</g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> </svg> `, `  <svg version="1.1" id="soccer" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"  viewBox="0 0 59 59" style="enable-background:new 0 0 59 59;" xml:space="preserve"> <circle style="fill:#E6E7E8;stroke:#ECF0F1;stroke-miterlimit:10;" cx="29.5" cy="29.5" r="29"/> <polygon style="fill:#38454F;" points="36.863,38.5 23.467,38.5 18.863,26.5 29.863,18.5 40.863,26.5 "/> <g> 	<path style="fill:#38454F;" d="M24.31,37.605c-0.494-0.248-1.095-0.047-1.342,0.447l-0.447,0.895  c-0.247,0.494-0.047,1.095,0.447,1.342c0.144,0.072,0.296,0.105,0.446,0.105c0.367,0,0.72-0.202,0.896-0.553l0.447-0.895  C25.005,38.453,24.805,37.853,24.31,37.605z"/> 	<path style="fill:#38454F;" d="M22.521,41.183c-0.494-0.248-1.094-0.047-1.342,0.447l-0.447,0.895  c-0.247,0.494-0.047,1.095,0.447,1.342c0.144,0.072,0.296,0.105,0.446,0.105c0.367,0,0.72-0.202,0.896-0.553l0.447-0.895  C23.216,42.031,23.016,41.43,22.521,41.183z"/> 	<path style="fill:#38454F;" d="M38.205,38.947l-0.447-0.895c-0.248-0.495-0.847-0.695-1.342-0.447  c-0.494,0.247-0.694,0.848-0.447,1.342l0.447,0.895c0.176,0.351,0.528,0.553,0.896,0.553c0.15,0,0.303-0.034,0.446-0.105  C38.252,40.042,38.452,39.441,38.205,38.947z"/> 	<path style="fill:#38454F;" d="M39.547,41.63c-0.247-0.495-0.848-0.695-1.342-0.447c-0.494,0.247-0.694,0.848-0.447,1.342  l0.447,0.895c0.176,0.351,0.528,0.553,0.896,0.553c0.15,0,0.303-0.034,0.446-0.105c0.494-0.247,0.694-0.848,0.447-1.342  L39.547,41.63z"/> 	<path style="fill:#38454F;" d="M16.853,24.551l-0.919-0.394c-0.509-0.218-1.097,0.017-1.313,0.525  c-0.218,0.507,0.018,1.096,0.524,1.313l0.919,0.394c0.129,0.055,0.263,0.082,0.395,0.082c0.388,0,0.757-0.228,0.919-0.606  C17.596,25.356,17.36,24.769,16.853,24.551z"/> 	<path style="fill:#38454F;" d="M13.177,22.975l-0.919-0.394c-0.509-0.216-1.097,0.018-1.313,0.525  c-0.218,0.507,0.018,1.095,0.524,1.313l0.919,0.394c0.129,0.055,0.263,0.082,0.395,0.082c0.388,0,0.757-0.228,0.919-0.606  C13.919,23.781,13.683,23.192,13.177,22.975z"/> 	<path style="fill:#38454F;" d="M29.863,10.5c-0.553,0-1,0.448-1,1v1c0,0.552,0.447,1,1,1s1-0.448,1-1v-1  C30.863,10.948,30.416,10.5,29.863,10.5z"/> 	<path style="fill:#38454F;" d="M29.863,14.5c-0.553,0-1,0.448-1,1v1c0,0.552,0.447,1,1,1s1-0.448,1-1v-1  C30.863,14.948,30.416,14.5,29.863,14.5z"/> 	<path style="fill:#38454F;" d="M43.792,24.157l-0.919,0.394c-0.507,0.218-0.742,0.806-0.524,1.313  c0.162,0.379,0.531,0.606,0.919,0.606c0.132,0,0.266-0.026,0.395-0.082l0.919-0.394c0.507-0.217,0.742-0.806,0.524-1.313  C44.888,24.173,44.3,23.938,43.792,24.157z"/> 	<path style="fill:#38454F;" d="M48.782,23.106c-0.218-0.509-0.806-0.742-1.313-0.525l-0.919,0.394  c-0.507,0.217-0.742,0.806-0.524,1.313c0.162,0.379,0.531,0.606,0.919,0.606c0.132,0,0.266-0.026,0.395-0.082l0.919-0.394  C48.765,24.201,49,23.613,48.782,23.106z"/> </g> <path style="fill:#435159;" d="M22.345,1.49l-2.497,3.59L29.863,11.5l9-6.882l-2.266-3.24c-2.215-0.557-4.531-0.859-6.915-0.874 	C27.145,0.52,24.687,0.863,22.345,1.49z"/> <path style="fill:#435159;" d="M49.493,12.5l-1.63,11l10.007,6.077l0.603-1.151c-0.209-5.719-2.071-11.014-5.126-15.422L49.493,12.5 	z"/> <path style="fill:#435159;" d="M50.666,49.314l0.197-4.81l-11-0.004L35.07,55.105l4.146,1.722 	C43.622,55.26,47.534,52.658,50.666,49.314z"/> <path style="fill:#435159;" d="M20.863,44.5l-12,0.004l0.214,5.208c3.114,3.202,6.96,5.685,11.27,7.182l4.309-1.789L20.863,44.5z"/> <path style="fill:#435159;" d="M11.863,23.5l-1.63-11l-4.254,0.556c-2.92,4.233-4.743,9.278-5.061,14.729l0.939,1.792L11.863,23.5z" 	/> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> </svg> `, ` <svg version="1.1" id="Cart" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"  viewBox="0 0 58 58" style="enable-background:new 0 0 58 58;" xml:space="preserve"> <g> 	<g>  <rect x="9" y="17.5" style="fill:#D1D4D1;" width="48" height="24"/>  <path style="fill:#556080;" d="M58,42.5H8v-26h50V42.5z M10,40.5h46v-22H10V40.5z"/> 	</g> 	<path style="fill:#556080;" d="M9,9.5H4c-0.552,0-1-0.447-1-1s0.448-1,1-1h5c0.552,0,1,0.447,1,1S9.552,9.5,9,9.5z"/> 	<path style="fill:#556080;" d="M9,18.5c-0.552,0-1-0.447-1-1v-9c0-0.553,0.448-1,1-1s1,0.447,1,1v9C10,18.053,9.552,18.5,9,18.5z"  /> 	<path style="fill:#556080;" d="M9,49.5c-0.552,0-1-0.447-1-1v-7c0-0.553,0.448-1,1-1s1,0.447,1,1v7C10,49.053,9.552,49.5,9,49.5z"  /> 	<circle style="fill:#556080;" cx="19" cy="53.5" r="4"/> 	<circle style="fill:#556080;" cx="43" cy="53.5" r="4"/> 	<path style="fill:#556080;" d="M52,49.5H9c-0.552,0-1-0.447-1-1s0.448-1,1-1h43c0.552,0,1,0.447,1,1S52.552,49.5,52,49.5z"/> 	<path style="fill:#556080;" d="M57,26.5H9c-0.552,0-1-0.447-1-1s0.448-1,1-1h48c0.552,0,1,0.447,1,1S57.552,26.5,57,26.5z"/> 	<path style="fill:#556080;" d="M57,34.5H9c-0.552,0-1-0.447-1-1s0.448-1,1-1h48c0.552,0,1,0.447,1,1S57.552,34.5,57,34.5z"/> 	<path style="fill:#556080;" d="M17,42.5c-0.552,0-1-0.447-1-1v-24c0-0.553,0.448-1,1-1s1,0.447,1,1v24  C18,42.053,17.552,42.5,17,42.5z"/> 	<path style="fill:#556080;" d="M25,42.5c-0.552,0-1-0.447-1-1v-24c0-0.553,0.448-1,1-1s1,0.447,1,1v24  C26,42.053,25.552,42.5,25,42.5z"/> 	<path style="fill:#556080;" d="M33,42.5c-0.552,0-1-0.447-1-1v-24c0-0.553,0.448-1,1-1s1,0.447,1,1v24  C34,42.053,33.552,42.5,33,42.5z"/> 	<path style="fill:#556080;" d="M41,42.5c-0.552,0-1-0.447-1-1v-24c0-0.553,0.448-1,1-1s1,0.447,1,1v24  C42,42.053,41.552,42.5,41,42.5z"/> 	<path style="fill:#556080;" d="M49,42.5c-0.552,0-1-0.447-1-1v-24c0-0.553,0.448-1,1-1s1,0.447,1,1v24  C50,42.053,49.552,42.5,49,42.5z"/> 	<circle style="fill:#D8625E;" cx="3" cy="8.5" r="3"/> 	<rect x="14" y="8.5" style="fill:#F0C419;" width="14" height="8"/> 	<rect x="28" y="0.5" style="fill:#8697CB;" width="16" height="16"/> 	<rect x="44" y="3.5" style="fill:#FB7B76;" width="10" height="13"/> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> </svg> `
, ` <svg version="1.1" id="maps" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"  viewBox="0 0 59.51 59.51" style="enable-background:new 0 0 59.51 59.51;" xml:space="preserve"> <polygon style="fill:#FFFFFF;" points="53.057,24.76 43.057,24.76 17.057,24.76 7.057,24.76 3.402,53.76 56.171,53.76 "/> <path style="fill:#556080;" d="M53.057,24.76l3.114,29H3.402l3.655-29h10h26H53.057 M55.752,21.76h-2.695h-10h-26h-10H4.411 	L4.08,24.385l-3.655,29L0,56.76h3.402h52.769h3.339l-0.357-3.32l-3.114-29L55.752,21.76L55.752,21.76z"/> <path style="fill:#EBBA16;" d="M13.684,49.76c-0.257,0-0.513-0.016-0.769-0.047c-0.218-0.026-0.438-0.067-0.653-0.124 	c-0.535-0.138-0.856-0.684-0.718-1.218c0.138-0.535,0.683-0.86,1.218-0.718c0.132,0.033,0.264,0.059,0.396,0.075 	c0.403,0.05,0.811,0.037,1.215-0.015c0.552-0.065,1.049,0.319,1.117,0.867c0.069,0.548-0.319,1.048-0.867,1.117 	C14.31,49.738,13.995,49.76,13.684,49.76z M18.334,48.602c-0.401,0-0.779-0.243-0.933-0.64c-0.199-0.516,0.058-1.095,0.572-1.293 	c0.592-0.229,1.188-0.483,1.774-0.759c0.503-0.235,1.096-0.019,1.33,0.48c0.234,0.5,0.02,1.096-0.48,1.33 	c-0.628,0.295-1.269,0.568-1.903,0.813C18.576,48.581,18.454,48.602,18.334,48.602z M9.987,46.87c-0.507,0-0.941-0.384-0.994-0.898 	c-0.02-0.197-0.028-0.395-0.028-0.592c0-0.116,0.003-0.232,0.009-0.347c0.023-0.469,0.099-0.942,0.225-1.406 	c0.144-0.535,0.697-0.853,1.226-0.704c0.533,0.144,0.849,0.692,0.704,1.226c-0.088,0.326-0.141,0.657-0.156,0.983 	c-0.004,0.082-0.007,0.165-0.007,0.248c0,0.129,0.005,0.26,0.019,0.389c0.056,0.55-0.345,1.04-0.894,1.097 	C10.055,46.868,10.021,46.87,9.987,46.87z M23.666,45.871c-0.327,0-0.648-0.16-0.84-0.455c-0.301-0.464-0.169-1.083,0.294-1.384 	c0.535-0.347,1.066-0.72,1.58-1.107c0.444-0.332,1.068-0.241,1.401,0.196c0.332,0.441,0.244,1.068-0.196,1.401 	c-0.552,0.415-1.122,0.815-1.695,1.188C24.041,45.819,23.853,45.871,23.666,45.871z M28.425,42.221c-0.309,0-0.613-0.143-0.81-0.411 	c-0.325-0.446-0.227-1.072,0.22-1.397c0.209-0.151,0.422-0.3,0.641-0.441c0.377-0.245,0.781-0.477,1.2-0.688 	c0.496-0.247,1.095-0.048,1.343,0.444c0.248,0.493,0.049,1.095-0.444,1.343c-0.354,0.178-0.693,0.372-1.01,0.577 	c-0.188,0.123-0.372,0.25-0.552,0.382C28.835,42.159,28.629,42.221,28.425,42.221z M12.469,41.748c-0.355,0-0.699-0.189-0.88-0.523 	c-0.264-0.485-0.083-1.092,0.402-1.355c0.518-0.281,1.071-0.456,1.644-0.52c0.29-0.033,0.593-0.032,0.891,0.008 	c0.547,0.072,0.933,0.574,0.86,1.122c-0.072,0.546-0.561,0.931-1.122,0.86c-0.133-0.018-0.271-0.018-0.406-0.002 	c-0.316,0.034-0.623,0.132-0.913,0.289C12.793,41.709,12.63,41.748,12.469,41.748z M33.903,39.896c-0.462,0-0.877-0.321-0.977-0.791 	c-0.115-0.541,0.229-1.072,0.769-1.187c0.643-0.138,1.335-0.252,2.058-0.342c0.553-0.081,1.047,0.32,1.115,0.869 	c0.068,0.548-0.321,1.048-0.869,1.115c-0.665,0.083-1.3,0.188-1.886,0.313C34.042,39.889,33.972,39.896,33.903,39.896z  M39.863,39.279c-0.533,0-0.977-0.421-0.998-0.959c-0.022-0.552,0.406-1.018,0.958-1.04l1.993-0.082 	c0.55-0.05,1.02,0.401,1.045,0.954c0.025,0.551-0.402,1.019-0.954,1.044l-2.002,0.082C39.892,39.279,39.877,39.279,39.863,39.279z  M45.842,38.836c-0.465,0-0.881-0.325-0.979-0.798c-0.111-0.541,0.236-1.07,0.777-1.182c0.578-0.119,1.006-0.286,1.347-0.525 	c0.437-0.341,1.102-0.285,1.438,0.149c0.339,0.437,0.296,1.039-0.14,1.378c-0.055,0.042-0.11,0.083-0.169,0.122 	c-0.544,0.384-1.229,0.661-2.072,0.835C45.977,38.829,45.908,38.836,45.842,38.836z M49.911,34.806 	c-0.098,0-0.197-0.015-0.296-0.045c-0.527-0.163-0.823-0.724-0.659-1.251c0.053-0.171,0.086-0.341,0.097-0.506l0.004-0.116 	c0-0.229-0.044-0.462-0.13-0.694c-0.192-0.518,0.071-1.093,0.59-1.285c0.514-0.191,1.094,0.071,1.285,0.59 	c0.169,0.455,0.255,0.923,0.255,1.39c0,0.084-0.003,0.167-0.008,0.25c-0.022,0.324-0.084,0.646-0.183,0.964 	C50.734,34.531,50.338,34.806,49.911,34.806z M44.851,30.699c-0.436,0-0.837-0.287-0.961-0.729c-0.15-0.531,0.158-1.084,0.69-1.233 	c0.779-0.22,1.597-0.286,2.386-0.18c0.547,0.074,0.931,0.577,0.857,1.125c-0.073,0.547-0.566,0.931-1.125,0.857 	c-0.521-0.069-1.058-0.023-1.575,0.121C45.032,30.687,44.942,30.699,44.851,30.699z"/> <path style="fill:#DD352E;" d="M40.844,11.931C40.32,7.932,38.23,2.75,30.022,2.75c-8.207,0-10.298,5.182-10.822,9.181 	c-0.287,2.192-0.126,4.419,0.33,6.582c2.509,11.893,8.71,19.022,10.177,20.577c0.172,0.182,0.458,0.182,0.63,0 	c1.467-1.555,7.668-8.684,10.177-20.577C40.971,16.35,41.132,14.123,40.844,11.931z M30.022,19.672 	c-3.505,0-6.346-2.841-6.346-6.346c0-3.505,2.841-6.345,6.346-6.345c3.505,0,6.346,2.841,6.346,6.345 	C36.368,16.831,33.527,19.672,30.022,19.672z"/> <g> 	<path style="fill:#B02721;" d="M30.023,5.981c-4.051,0-7.346,3.295-7.346,7.345c0,4.051,3.295,7.346,7.346,7.346  s7.346-3.295,7.346-7.346C37.368,9.276,34.073,5.981,30.023,5.981z M30.023,18.672c-2.947,0-5.346-2.398-5.346-5.346  s2.398-5.345,5.346-5.345s5.346,2.397,5.346,5.345S32.97,18.672,30.023,18.672z"/> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> </svg> `, `<svg version="1.1" id="Calandar" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"  viewBox="0 0 58 58" style="enable-background:new 0 0 58 58;" xml:space="preserve"> <polygon style="fill:#FC3952;" points="48,4 48,8 41,8 41,4 17,4 17,8 10,8 10,4 2,4 2,15 56,15 56,4 "/> <polygon style="fill:#EDEADA;" points="10,15 2,15 2,58 56,58 56,15 48,15 41,15 17,15 "/> <path style="fill:#CEC9AE;" d="M39,22h-2h-7h-2h-7h-2h-9v9v2v7v2v9h9h2h7h2h7h2h9v-9v-2v-7v-2v-9H39z M30,24h7v7h-7V24z M37,40h-7 v-7h7V40z M21,33h7v7h-7V33z M21,24h7v7h-7V24z M12,24h7v7h-7V24z M12,33h7v7h-7V33z M19,49h-7v-7h7V49z M28,49h-7v-7h7V49z M37,49 h-7v-7h7V49z M46,49h-7v-7h7V49z M46,40h-7v-7h7V40z M39,31v-7h7v7H39z"/> <rect x="10" style="fill:#28384C;" width="7" height="8"/> <rect x="41" style="fill:#28384C;" width="7" height="8"/> <rect x="30" y="33" style="fill:#26B99A;" width="7" height="7"/> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> </svg> `, ` <svg version="1.1" id="server" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"  viewBox="0 0 52 52" style="enable-background:new 0 0 52 52;" xml:space="preserve"> <path style="fill:#38454F;" d="M50.594,45H1.406C0.63,45,0,44.37,0,43.594V32.406C0,31.63,0.63,31,1.406,31h49.187 	C51.37,31,52,31.63,52,32.406v11.187C52,44.37,51.37,45,50.594,45z"/> <path style="fill:#28384C;" d="M6,49L6,49c-1.657,0-3-1.343-3-3v-1h6v1C9,47.657,7.657,49,6,49z"/> <path style="fill:#28384C;" d="M46,49L46,49c-1.657,0-3-1.343-3-3v-1h6v1C49,47.657,47.657,49,46,49z"/> <circle style="fill:#546A79;" cx="48" cy="36" r="1"/> <circle style="fill:#546A79;" cx="44" cy="36" r="1"/> <circle style="fill:#546A79;" cx="46" cy="40" r="1"/> <circle style="fill:#546A79;" cx="42" cy="40" r="1"/> <circle style="fill:#546A79;" cx="40" cy="36" r="1"/> <circle style="fill:#546A79;" cx="38" cy="40" r="1"/> <circle style="fill:#546A79;" cx="36" cy="36" r="1"/> <circle style="fill:#546A79;" cx="34" cy="40" r="1"/> <circle style="fill:#546A79;" cx="32" cy="36" r="1"/> <circle style="fill:#546A79;" cx="30" cy="40" r="1"/> <path style="fill:#546A79;" d="M50.594,31H1.406C0.63,31,0,30.37,0,29.594V18.406C0,17.63,0.63,17,1.406,17h49.187 	C51.37,17,52,17.63,52,18.406v11.187C52,30.37,51.37,31,50.594,31z"/> <path style="fill:#38454F;" d="M50.594,17H1.406C0.63,17,0,16.37,0,15.594V4.406C0,3.63,0.63,3,1.406,3h49.187 	C51.37,3,52,3.63,52,4.406v11.187C52,16.37,51.37,17,50.594,17z"/> <circle style="fill:#38454F;" cx="48" cy="22" r="1"/> <circle style="fill:#38454F;" cx="44" cy="22" r="1"/> <circle style="fill:#38454F;" cx="46" cy="26" r="1"/> <circle style="fill:#38454F;" cx="42" cy="26" r="1"/> <circle style="fill:#38454F;" cx="40" cy="22" r="1"/> <circle style="fill:#38454F;" cx="38" cy="26" r="1"/> <circle style="fill:#38454F;" cx="36" cy="22" r="1"/> <circle style="fill:#38454F;" cx="34" cy="26" r="1"/> <circle style="fill:#38454F;" cx="32" cy="22" r="1"/> <circle style="fill:#38454F;" cx="30" cy="26" r="1"/> <circle style="fill:#546A79;" cx="48" cy="8" r="1"/> <circle style="fill:#546A79;" cx="44" cy="8" r="1"/> <circle style="fill:#546A79;" cx="46" cy="12" r="1"/> <circle style="fill:#546A79;" cx="42" cy="12" r="1"/> <circle style="fill:#546A79;" cx="40" cy="8" r="1"/> <circle style="fill:#546A79;" cx="38" cy="12" r="1"/> <circle style="fill:#546A79;" cx="36" cy="8" r="1"/> <circle style="fill:#546A79;" cx="34" cy="12" r="1"/> <circle style="fill:#546A79;" cx="32" cy="8" r="1"/> <circle style="fill:#546A79;" cx="30" cy="12" r="1"/> <circle style="fill:#283238;" cx="8" cy="10" r="3"/> <circle style="fill:#81EA1C;" cx="8" cy="10" r="2"/> <circle style="fill:#283238;" cx="8" cy="24" r="3"/> <circle style="fill:#81EA1C;" cx="8" cy="24" r="2"/> <circle style="fill:#283238;" cx="8" cy="38" r="3"/> <circle style="fill:#81EA1C;" cx="8" cy="38" r="2"/> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> </svg>`, `<svg version="1.1" id="grocery" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"  viewBox="0 0 54.819 54.819" style="enable-background:new 0 0 54.819 54.819;" xml:space="preserve"> <g> 	<path style="fill:#436B1C;" d="M11.217,19.913c-0.335,0-0.663-0.169-0.852-0.476c-0.614-0.995-1.761-2.146-3.078-2.104  c-0.56-0.03-1.014-0.418-1.03-0.969c-0.017-0.553,0.417-1.014,0.969-1.031c2.107-0.063,3.904,1.534,4.841,3.055  c0.29,0.47,0.144,1.086-0.326,1.376C11.578,19.865,11.396,19.913,11.217,19.913z"/> 	<g>  <path style="fill:#88C057;" d="M31.684,6.597c-0.134-1.948-1.753-3.488-3.735-3.488c-0.006,0-0.011,0.001-0.017,0.001  	c0.035-0.295,0.015-0.607-0.08-0.932c-0.268-0.914-1.072-1.616-2.018-1.729c-0.776-0.092-1.488,0.186-1.987,0.679  	c-0.475-0.429-1.097-0.697-1.787-0.697c-1.479,0-2.677,1.199-2.677,2.677c0,0.005,0.001,0.009,0.001,0.014  	c-1.797,0.136-3.214,1.635-3.214,3.467c0,0.28,0.037,0.551,0.099,0.812c-2.139,0.089-3.847,1.847-3.847,4.008  	c0,0.732,0.199,1.416,0.541,2.007c-0.657,0.54-1.077,1.359-1.077,2.276c0,0.838,0.355,1.589,0.917,2.124  	c2.412-1.971,4.946,4.621,7.93,9.884c0.991,1.748,11.698-0.114,12.551,0.972c0.972-0.874,1.6-16.094,1.627-17.431  	C34.953,9.096,33.591,7.266,31.684,6.597z"/> 	</g> 	<path style="fill:#EEAF4B;" d="M33.053,26.533l0.713-0.427c1.32-0.792,2.968-0.792,4.287,0l0.713,0.427  c1.32,0.792,2.968,0.792,4.287,0l2.015-0.896c0.296-0.826,0.502-1.424,0.584-1.689c1.88-6.047,3.091-12.414,3.256-18.765  c0.066-2.554-2.046-6.537-5.555-4.727c-3.449,1.778-5.919,8.597-7.655,11.835c-2.466,4.601-4.416,9.605-5.805,14.704  C30.951,27.262,32.089,27.111,33.053,26.533z"/> 	<path style="fill:#ED3F32;" d="M7.055,25.506L8.4,26.313c1.545,0.927,3.475,0.927,5.02,0l0.346-0.208  c1.32-0.792,2.968-0.792,4.287,0l0.713,0.427c0.775,0.465,1.663,0.649,2.531,0.568c0.64-2.067,0.425-4.651-0.567-6.4  c-3.336-5.885-6.111-4.686-8.781-2.131c-0.512,0.49-1.138,0.849-1.82,1.044c-2.928,0.837-5.089,2.206-3.86,5.934  C6.486,25.389,6.788,25.346,7.055,25.506z"/> 	<path style="fill:#A46F3E;" d="M35.592,24.356c-0.106,0-0.215-0.017-0.321-0.053c-0.523-0.178-0.803-0.746-0.625-1.269  c0.667-1.962,2.809-3.012,4.768-2.352c0.919,0.313,1.92-0.181,2.232-1.1c0.177-0.523,0.743-0.805,1.269-0.626  c0.523,0.178,0.803,0.746,0.625,1.269c-0.666,1.963-2.806,3.017-4.768,2.352c-0.918-0.312-1.919,0.183-2.232,1.1  C36.397,24.095,36.008,24.356,35.592,24.356z"/> 	<path style="fill:#A46F3E;" d="M37.957,17.389c-0.106,0-0.215-0.017-0.321-0.053c-0.523-0.178-0.803-0.746-0.625-1.269  c0.323-0.951,0.997-1.72,1.897-2.164c0.9-0.444,1.919-0.511,2.871-0.188c0.921,0.314,1.92-0.181,2.232-1.101  c0.177-0.524,0.745-0.805,1.268-0.626c0.523,0.178,0.803,0.746,0.625,1.269c-0.666,1.964-2.806,3.016-4.768,2.353  c-0.445-0.152-0.923-0.121-1.344,0.087s-0.736,0.567-0.888,1.013C38.763,17.127,38.374,17.389,37.957,17.389z"/> 	<path style="fill:#A46F3E;" d="M40.323,10.421c-0.106,0-0.215-0.017-0.322-0.053c-0.523-0.178-0.803-0.746-0.625-1.269  c0.584-1.722,2.463-2.646,4.185-2.064c0.33,0.112,0.682,0.09,0.993-0.063c0.311-0.153,0.544-0.419,0.656-0.748  c0.177-0.523,0.744-0.804,1.269-0.626c0.523,0.178,0.803,0.746,0.625,1.269c-0.284,0.835-0.875,1.51-1.665,1.899  c-0.791,0.39-1.686,0.447-2.521,0.164c-0.678-0.231-1.418,0.134-1.648,0.813C41.128,10.159,40.739,10.421,40.323,10.421z"/> 	<g>  <path style="fill:#DAE7EF;" d="M23.37,14.095c-0.945,1.257-2.436,2.745-1.862,5.373l1.544,7.065c0,0,0.001,0,0.001,0l0.713-0.427  	c1.32-0.792,2.968-0.792,4.287,0l0.713,0.427c0.58,0.348,1.127,0.463,1.127,0.463c1.042-3.823,2.399-7.593,4.052-11.179  	c-0.774-1.936-2.427-2.584-3.627-3.247c-0.007-0.004-0.014-0.008-0.02-0.011c-0.759-0.435-0.806-1.474-0.235-2.136  	c0.225-0.261,0.329-0.62,0.251-0.98l-0.121-0.552c-0.133-0.608-0.739-0.996-1.346-0.863L22.77,9.354  	c-0.608,0.133-0.996,0.739-0.863,1.346l0.121,0.552c0.08,0.368,0.334,0.653,0.656,0.792c0.739,0.319,1.19,1.144,0.812,1.855  	C23.46,13.966,23.418,14.031,23.37,14.095z"/> 	</g> 	<path style="fill:#FFFFFF;" d="M29.746,10.899l-6.879,1.503c-0.759,0.166-1.517-0.32-1.683-1.079l-0.099-0.452  c-0.166-0.759,0.32-1.517,1.079-1.683l6.879-1.503c0.759-0.166,1.517,0.32,1.683,1.079l0.099,0.452  C30.991,9.976,30.505,10.733,29.746,10.899z"/> 	<path style="fill:#FBD490;" d="M46.816,25.332l-1.745,25.029c-0.128,2.499-2.191,4.459-4.693,4.459H12.307  c-2.502,0-4.565-1.96-4.693-4.459L5.911,26.153c-0.029-0.569,0.588-0.94,1.077-0.647l1.345,0.807c1.545,0.927,3.475,0.927,5.02,0  l0.346-0.208c1.32-0.792,2.968-0.792,4.287,0l0.713,0.428c1.32,0.792,2.968,0.792,4.287,0l0.713-0.428  c1.32-0.792,2.968-0.792,4.287,0l0.713,0.428c1.32,0.792,2.968,0.792,4.287,0l0.713-0.428c1.32-0.792,2.968-0.792,4.287,0  l0.713,0.428c1.32,0.792,2.968,0.792,4.287,0l3.387-1.505C46.588,24.932,46.828,25.097,46.816,25.332z"/> 	<path style="fill:#E0B877;" d="M17.91,42h-7c-0.552,0-1-0.447-1-1s0.448-1,1-1h7c0.552,0,1,0.447,1,1S18.462,42,17.91,42z"/> 	<path style="fill:#E0B877;" d="M19.91,46h-9c-0.552,0-1-0.447-1-1s0.448-1,1-1h9c0.552,0,1,0.447,1,1S20.462,46,19.91,46z"/> 	<path style="fill:#E0B877;" d="M21.91,50h-11c-0.552,0-1-0.447-1-1s0.448-1,1-1h11c0.552,0,1,0.447,1,1S22.462,50,21.91,50z"/> 	<path style="fill:#E0B877;" d="M27.91,50h-2c-0.552,0-1-0.447-1-1s0.448-1,1-1h2c0.552,0,1,0.447,1,1S28.462,50,27.91,50z"/> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> </svg> `,  `<svg version="1.1" id="chat" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 58 58" style="enable-background:new 0 0 58 58;" xml:space="preserve"><g><path style="fill:#226BAC;" d="M0,58l4.042-12.125c-2.05-3.45-3.231-7.476-3.231-11.78C0.81,21.34,11.15,11,23.905,11 S47,21.34,47,34.095S36.66,57.19,23.905,57.19c-3.881,0-7.535-0.961-10.745-2.653L0,58z"/>	<path style="fill:#3BA58B;" d="M23.905,11C36.66,11,47,21.34,47,34.095c0,3.378-0.731,6.583-2.034,9.475L58,47l-4.042-12.125 c2.05-3.45,3.231-7.476,3.231-11.78C57.19,10.34,46.85,0,34.095,0c-9.426,0-17.528,5.65-21.118,13.746 C16.231,11.995,19.951,11,23.905,11z"/>	<circle style="fill:#FFFFFF;" cx="13" cy="34" r="3"/><circle style="fill:#FFFFFF;" cx="24" cy="34" r="3"/> <circle style="fill:#FFFFFF;" cx="35" cy="34" r="3"/></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>`, `<svg version="1.1" id="music" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"      viewBox="0 0 54.888 54.888" style="enable-background:new 0 0 54.888 54.888;" xml:space="preserve"> <path style="fill:#EA6248;"d="M52.104,0.249c-0.216-0.189-0.501-0.275-0.789-0.241l-31,4.011c-0.499,0.065-0.872,0.489-0.872,0.992    v6.017v4.212v26.035C17.706,39.285,14.997,38,11.944,38c-5.247,0-9.5,3.781-9.5,8.444s4.253,8.444,9.5,8.444s9.5-3.781,9.5-8.444    c0-0.332-0.027-0.658-0.069-0.981c0.04-0.108,0.069-0.221,0.069-0.343V16.118l29-3.753v18.909C48.706,29.285,45.997,28,42.944,28    c-5.247,0-9.5,3.781-9.5,8.444s4.253,8.444,9.5,8.444s9.5-3.781,9.5-8.444c0-0.092-0.012-0.181-0.015-0.272    c0.002-0.027,0.015-0.05,0.015-0.077V11.227V7.016V1C52.444,0.712,52.32,0.438,52.104,0.249z"/> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> </svg>`, `<svg version="1.1" id="website" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"      viewBox="0 0 58 58" style="enable-background:new 0 0 58 58;" xml:space="preserve"> <circle style="fill:#7383BF;stroke:#556080;stroke-width:2;stroke-linecap:round;stroke-miterlimit:10;" cx="29" cy="29" r="28"/> <line style="fill:none;stroke:#556080;stroke-width:2;stroke-linecap:round;stroke-miterlimit:10;" x1="29" y1="57" x2="29" y2="1"/> <path style="fill:none;stroke:#556080;stroke-width:2;stroke-linecap:round;stroke-miterlimit:10;" d="M29,1    c-0.214,0-0.426,0.011-0.639,0.016C20.213,7.616,15,17.697,15,29s5.213,21.384,13.361,27.984C28.574,56.989,28.786,57,29,57"/> <path style="fill:none;stroke:#556080;stroke-width:2;stroke-linecap:round;stroke-miterlimit:10;" d="M8.698,9.728    C14.478,13.683,21.468,16,29,16s14.522-2.317,20.302-6.272"/> <path style="fill:none;stroke:#556080;stroke-width:2;stroke-linecap:round;stroke-miterlimit:10;" d="M49.862,47.67    C43.975,43.475,36.779,41,29,41s-14.975,2.475-20.862,6.67"/> <path style="fill:none;stroke:#556080;stroke-width:2;stroke-linecap:round;stroke-miterlimit:10;" d="M29,57    c0.214,0,0.426-0.011,0.639-0.016C37.787,50.384,43,40.303,43,29S37.787,7.616,29.639,1.016C29.426,1.011,29.214,1,29,1"/> <line style="fill:none;stroke:#556080;stroke-width:2;stroke-linecap:round;stroke-miterlimit:10;" x1="1" y1="29" x2="57" y2="29"/> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> </svg>` , `<svg version="1.1" id="present" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"      viewBox="0 0 57 57" style="enable-background:new 0 0 57 57;" xml:space="preserve"> <rect x="1" y="13.002" style="fill:#CB465F;" width="55" height="12"/> <rect x="6" y="25.002" style="fill:#EF4D4D;" width="46" height="30"/> <path style="fill:#EBBA16;" d="M56,12.002H41.741C42.556,10.837,43,9.453,43,7.995c0-1.875-0.726-3.633-2.043-4.95    c-2.729-2.729-7.17-2.729-9.899,0l-2.829,2.829l-2.828-2.829c-2.729-2.729-7.17-2.729-9.899,0c-1.317,1.317-2.043,3.075-2.043,4.95    c0,1.458,0.444,2.842,1.259,4.007H1c-0.552,0-1,0.447-1,1s0.448,1,1,1h27v24H6c-0.552,0-1,0.447-1,1s0.448,1,1,1h22v15    c0,0.553,0.448,1,1,1s1-0.447,1-1v-15h22c0.552,0,1-0.447,1-1s-0.448-1-1-1H30v-24h26c0.552,0,1-0.447,1-1S56.552,12.002,56,12.002z      M32.472,4.459c1.95-1.949,5.122-1.949,7.071,0C40.482,5.399,41,6.654,41,7.995c0,1.34-0.518,2.596-1.457,3.535l-0.472,0.472H24.929    l4.006-4.006l0.001-0.001l0.001-0.001L32.472,4.459z M16.916,11.53c-0.939-0.939-1.457-2.195-1.457-3.535    c0-1.341,0.518-2.596,1.457-3.536c1.95-1.949,5.122-1.949,7.071,0l2.828,2.829l-3.536,3.536c-0.331,0.331-0.622,0.735-0.898,1.179    h-4.994L16.916,11.53z"/> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> </svg>`, `<svg version="1.1" id="thumb1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"  viewBox="0 0 56 56" style="enable-background:new 0 0 56 56;" xml:space="preserve"> <rect x="1.5" y="20" style="fill:#4B6DAA;" width="14" height="36"/> <circle style="fill:#D8A852;" cx="8.5" cy="47" r="4"/> <path style="fill:#FBCE9D;" d="M53.5,26c0-2.209-1.791-4-4-4h-9h-3h-3.602l0.988-4.619c0.754-3.524,0.552-7.819,0.104-10.836 	C34.542,3.528,31.84,0,29.013,0h-0.239C26.364,0,25.5,2.659,25.5,6c0,16.25-8,16-8,16h-2v32h15h10h4c2.209,0,4-1.791,4-4 	c0-2.209-1.791-4-4-4h3c2.209,0,4-1.791,4-4c0-2.209-1.791-4-4-4h3c2.209,0,4-1.791,4-4c0-2.493-1.613-3.442-4-3.796 	C49.337,30.031,47.224,30,46.5,30h3C51.709,30,53.5,28.209,53.5,26z"/> <path style="fill:#F7B563;" d="M52.12,29H39.5c-0.552,0-1,0.447-1,1s0.448,1,1,1h13.456c-0.657-0.403-1.488-0.653-2.456-0.796 	C49.337,30.031,47.224,30,46.5,30h3C50.508,30,51.417,29.615,52.12,29z"/> <path style="fill:#F7B563;" d="M53.12,37H39.5c-0.552,0-1,0.447-1,1s0.448,1,1,1h10.621c-0.703-0.615-1.613-1-2.621-1h3 	C51.508,38,52.417,37.615,53.12,37z"/> <path style="fill:#F7B563;" d="M50.12,45H37.5c-0.552,0-1,0.447-1,1s0.448,1,1,1h9.621c-0.703-0.615-1.613-1-2.621-1h3 	C48.508,46,49.417,45.615,50.12,45z"/> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> </svg>`]

            return  svgHTML}
        function getEvileSVGs () {

                var svgHTML = [`<svg  viewBox="0 0 512 512"  xmlns="http://www.w3.org/2000/svg"><g id="Filled_outline" data-name="Filled outline"><path d="m312 233v39h-272v-39a48.038 48.038 0 0 1 48-48h176a47.985 47.985 0 0 1 48 48z" fill="#374559"/><path d="m312 233v39h-106.03a376.842 376.842 0 0 0 76.01-83.51 48.068 48.068 0 0 1 30.02 44.51z" fill="#2e3e51"/><rect fill="#3d4d63" height="192" rx="72" width="144" x="104" y="40"/><path d="m104 112h144v48h-144z" fill="#374559"/><path d="m246.312 120-54.312 20.131c5.357 15.565 21.857 23.676 36.855 18.117s22.814-22.683 17.457-38.248z" fill="#f35244"/><path d="m105.688 120 54.312 20.131c-5.357 15.565-21.857 23.676-36.855 18.117s-22.814-22.683-17.457-38.248z" fill="#f35244"/><path d="m328 371.44v-83.44a23.742 23.742 0 0 0 -16-22.56 22.175 22.175 0 0 0 -8-1.44h-256a22.175 22.175 0 0 0 -8 1.44 23.742 23.742 0 0 0 -16 22.56v144a23.742 23.742 0 0 0 16 22.56 22.175 22.175 0 0 0 8 1.44h256a22.175 22.175 0 0 0 8-1.44 23.742 23.742 0 0 0 16-22.56v-42.4" fill="#3d4d63"/><path d="m24 456h304v32h-304z" fill="#3d4d63"/><path d="m312 265.44a22.175 22.175 0 0 0 -8-1.44h-13.333l-192 192h205.333a22.175 22.175 0 0 0 8-1.44 23.742 23.742 0 0 0 16-22.56v-144a23.742 23.742 0 0 0 -16-22.56z" fill="#374559"/><path d="m488 48v136a24.006 24.006 0 0 1 -24 24h-42.46l-61.54 40 8-40h-48a24.008 24.008 0 0 1 -23.56-19.43 23.764 23.764 0 0 1 -.44-4.57v-136a24.006 24.006 0 0 1 24-24h144a23.986 23.986 0 0 1 22.73 16.32 23.521 23.521 0 0 1 1.27 7.68z" fill="#f35244"/><path d="m488 48v136a24.006 24.006 0 0 1 -24 24h-42.46l-61.54 40 8-40h-48a24.008 24.008 0 0 1 -23.56-19.43c65.44-34.55 132.77-82.34 190.29-148.25a23.521 23.521 0 0 1 1.27 7.68z" fill="#ea4a3b"/><path d="m408 88v-16a16 16 0 0 0 -32 0v16z" fill="#3086cd"/><g fill="#2a71ad"><path d="m368.914 112.293-27.332-8.668a8 8 0 0 1 -4.738-4.047l-8-16 14.312-7.156 6.489 12.978 24.105 7.645z"/><path d="m333.656 149.656-11.312-11.312 16-16a8 8 0 0 1 5.656-2.344h26.668v16h-23.356z"/><path d="m351.156 179.578-14.312-7.156 8-16a8.015 8.015 0 0 1 3.5-3.539l24.668-12.668 7.312 14.234-22.34 11.473z"/><path d="m414.914 111.68-4.492-15.36 23.984-7.02 6.438-12.879 14.312 7.156-8 16a8.01 8.01 0 0 1 -4.91 4.1z"/><path d="m450.344 149.656-13.656-13.656h-20.688v-16h24a8 8 0 0 1 5.656 2.344l16 16z"/><path d="m432.844 179.578-6.805-13.617-25.617-12.805 7.156-14.312 28 14a8 8 0 0 1 3.578 3.578l8 16z"/></g><path d="m424 112v16a32 32 0 1 1 -64 0v-16a32 32 0 1 1 64 0z" fill="#348fd9"/><path d="m424 112v16a32 32 0 0 1 -60.82 13.91 285.493 285.493 0 0 0 57.86-43.37 31.862 31.862 0 0 1 2.96 13.46z" fill="#3086cd"/><path d="m400 81.01v77.98a32.188 32.188 0 0 1 -16 0v-77.98a32.188 32.188 0 0 1 16 0z" fill="#2a71ad"/><path d="m168.001 331.074h15.998v121.852h-15.998z" fill="#d93e30" transform="matrix(.394 -.919 .919 .394 -253.635 399.353)"/><path d="m115.074 384.001h121.852v15.998h-121.852z" fill="#d93e30" transform="matrix(.919 -.394 .394 .919 -140.242 101.086)"/><path d="m208 368h-16v24h-32v-24h-16v-32a32 32 0 0 1 32-32 32 32 0 0 1 32 32z" fill="#f35244"/><path d="m152 328h16v16h-16z" fill="#7a432a"/><path d="m184 328h16v16h-16z" fill="#7a432a"/><path d="m488 336v128a24.006 24.006 0 0 1 -24 24h-80a23.992 23.992 0 0 1 -22.72-16.29 23.706 23.706 0 0 1 -1.28-7.71v-45.6l-56-50.4 56 8v-40a24.006 24.006 0 0 1 24-24h80a23.994 23.994 0 0 1 23.99 23.67c.01.11.01.22.01.33z" fill="#f35244"/><path d="m488 336v128a24.006 24.006 0 0 1 -24 24h-80a23.992 23.992 0 0 1 -22.72-16.29c45.8-28.16 88.04-68.17 126.71-136.04.01.11.01.22.01.33z" fill="#ea4a3b"/><path d="m456 384v-4a27.96 27.96 0 0 0 -24-27.6v-16.4h-16v16.4a27.937 27.937 0 0 0 4 55.6h8a12 12 0 0 1 0 24h-8a12.013 12.013 0 0 1 -12-12v-4h-16v4a27.96 27.96 0 0 0 24 27.6v16.4h16v-16.4a27.937 27.937 0 0 0 -4-55.6h-8a12 12 0 0 1 0-24h8a12.013 12.013 0 0 1 12 12v4z" fill="#ffb531"/><path d="m464 16h-144a32.036 32.036 0 0 0 -32 32v133.414a55.662 55.662 0 0 0 -24-5.414h-9.61a80.049 80.049 0 0 0 1.61-16v-48a80 80 0 0 0 -160 0v48a80.049 80.049 0 0 0 1.61 16h-9.61a56.064 56.064 0 0 0 -56 56v28.336a31.834 31.834 0 0 0 -16 27.664v144a31.96 31.96 0 0 0 4.71 16.713 8 8 0 0 0 -4.71 7.287v32a8 8 0 0 0 8 8h304a8 8 0 0 0 8-8v-32a8 8 0 0 0 -4.71-7.287 31.96 31.96 0 0 0 4.71-16.713v-16h-16v16a15.778 15.778 0 0 1 -10.588 14.99c-.1.035-.2.071-.3.11a14.123 14.123 0 0 1 -5.112.9h-256a14.123 14.123 0 0 1 -5.112-.9c-.1-.039-.2-.075-.3-.11a15.778 15.778 0 0 1 -10.588-14.99v-144a15.778 15.778 0 0 1 10.588-14.99c.1-.035.2-.071.3-.11a14.123 14.123 0 0 1 5.112-.9h256a14.123 14.123 0 0 1 5.112.9c.1.039.2.075.3.11a15.778 15.778 0 0 1 10.588 14.99v56h16v-56a31.834 31.834 0 0 0 -16-27.664v-28.336a55.808 55.808 0 0 0 -2.369-16.1c.783.058 1.571.1 2.369.1h38.242l-6.087 30.431a8 8 0 0 0 12.205 8.277l59.55-38.708h40.09a32.036 32.036 0 0 0 32-32v-136a32.036 32.036 0 0 0 -32-32zm-144 448v16h-288v-16zm-135.564-321.266a38.537 38.537 0 0 0 4.658 9.266h-26.188a38.537 38.537 0 0 0 4.658-9.266 8 8 0 0 0 -4.784-10.105l-34.073-12.629h94.586l-34.073 12.629a8 8 0 0 0 -4.784 10.105zm34.364 25.266c.112 0 .223.009.334.009.139 0 .277-.007.416-.009h19.93a63.982 63.982 0 0 1 -126.964 0h19.93c.139 0 .277.009.416.009.111 0 .222-.008.334-.009zm7.272-17.253a19.773 19.773 0 0 1 -15.461-.685 20.872 20.872 0 0 1 -7.21-5.626l36.584-13.56a21.839 21.839 0 0 1 -13.911 19.871zm-50.072-102.747a64.081 64.081 0 0 1 63.482 56h-126.964a64.081 64.081 0 0 1 63.482-56zm-27.4 96.436a20.872 20.872 0 0 1 -7.21 5.626 19.782 19.782 0 0 1 -15.461.685 21.839 21.839 0 0 1 -13.913-19.871zm155.4 111.564h-256v-24a40.045 40.045 0 0 1 40-40h14.7a79.968 79.968 0 0 0 146.6 0h14.7a40.045 40.045 0 0 1 40 40zm176-72a16.019 16.019 0 0 1 -16 16h-42.461a8 8 0 0 0 -4.36 1.292l-45.608 29.646 4.274-21.369a8 8 0 0 0 -7.845-9.569h-48a16.019 16.019 0 0 1 -16-16v-136a16.019 16.019 0 0 1 16-16h144a16.019 16.019 0 0 1 16 16z"/><path d="m440 120h-8v-8a40.233 40.233 0 0 0 -.3-4.786l10.836-3.628a8 8 0 0 0 4.615-4.008l8-16-14.31-7.156-6.521 13.042-7.684 2.573a40.286 40.286 0 0 0 -10.636-12.015v-8.022a24 24 0 0 0 -48 0v8.022a40.286 40.286 0 0 0 -10.64 12.015l-7.684-2.573-6.521-13.042-14.31 7.156 8 16a8 8 0 0 0 4.615 4.008l10.836 3.628a40.233 40.233 0 0 0 -.296 4.786v8h-8a8 8 0 0 0 -5.657 2.343l-16 16 11.314 11.314 13.656-13.657h5.492a39.72 39.72 0 0 0 4.74 12.284l-9.123 4.561a8 8 0 0 0 -3.577 3.577l-8 16 14.31 7.156 6.808-13.615 10.829-5.415a39.865 39.865 0 0 0 46.416 0l10.829 5.415 6.808 13.615 14.31-7.156-8-16a8 8 0 0 0 -3.577-3.577l-9.123-4.561a39.72 39.72 0 0 0 4.745-12.284h5.492l13.656 13.657 11.314-11.314-16-16a8 8 0 0 0 -5.662-2.343zm-56 30.624a24.038 24.038 0 0 1 -16-22.624v-16a24.038 24.038 0 0 1 16-22.624zm0-77.819v-.805a8 8 0 0 1 16 0v.805a40.154 40.154 0 0 0 -16 0zm32 55.195a24.038 24.038 0 0 1 -16 22.624v-61.248a24.038 24.038 0 0 1 16 22.624z"/><path d="m123.151 423.353 52.849-22.653 52.849 22.649 6.3-14.706-35.3-15.128a8.09 8.09 0 0 0 .151-1.515v-1.6l35.148-15.044-6.3-14.708-12.848 5.498v-30.146a40 40 0 0 0 -80 0v30.146l-12.852-5.5-6.3 14.708 35.152 15.046v1.6a8.09 8.09 0 0 0 .148 1.519l-35.3 15.128zm28.849-63.353v-16h16v-16h-14.624a24 24 0 0 1 45.248 0h-14.624v16h16v16h-8a8 8 0 0 0 -8 8v16h-16v-16a8 8 0 0 0 -8-8z"/><path d="m464 304h-80a32.036 32.036 0 0 0 -32 32v30.776l-46.869-6.695a8 8 0 0 0 -6.483 13.865l53.352 48.017v42.037a32.036 32.036 0 0 0 32 32h80a32.036 32.036 0 0 0 32-32v-128a32.036 32.036 0 0 0 -32-32zm16 160a16.019 16.019 0 0 1 -16 16h-80a16.019 16.019 0 0 1 -16-16v-45.6a8 8 0 0 0 -2.648-5.946l-36.463-32.817 29.98 4.282a8 8 0 0 0 9.131-7.919v-40a16.019 16.019 0 0 1 16-16h80a16.019 16.019 0 0 1 16 16z"/><path d="m432 352.29v-16.29h-16v16.29a28 28 0 0 0 4 55.71h8a12 12 0 0 1 0 24h-8a12.013 12.013 0 0 1 -12-12v-4h-16v4a28.04 28.04 0 0 0 24 27.71v16.29h16v-16.29a28 28 0 0 0 -4-55.71h-8a12 12 0 0 1 0-24h8a12.013 12.013 0 0 1 12 12v4h16v-4a28.04 28.04 0 0 0 -24-27.71z"/><path d="m203.578 191.155-7.156-14.31a68.118 68.118 0 0 1 -30.311 7.155h-14.111v16h14.111a84.206 84.206 0 0 0 37.467-8.845z"/></g></svg>`, `
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve" >
<g id="XMLID_396_">  <path id="XMLID_399_" style="fill:#E3F4FF;" d="M40.6,38.925c-8.602,4.216-14.029,13.386-13.92,23.395   c2.688,246.376,69.657,355.652,185.166,435.683c0.143,0.099,0.286,0.198,0.429,0.296c26.51,18.268,60.938,18.268,87.448,0   c0.143-0.098,0.286-0.197,0.428-0.296C415.66,417.971,482.63,308.694,485.318,62.32c0.109-10.008-5.318-19.179-13.92-23.395   C444.268,25.628,376.366,0,255.999,0S67.73,25.628,40.6,38.925z"/>  <g id="XMLID_403_">  	<g id="XMLID_401_">    <path id="XMLID_402_" style="fill:#BDDFF4;" d="M255.999,386.927c-20.617,0-39.84-8.027-52.74-22.022     c-2.892-3.138-2.693-8.025,0.445-10.918c3.138-2.893,8.026-2.693,10.918,0.445c9.983,10.831,25.064,17.042,41.378,17.042     c16.313,0,31.394-6.211,41.377-17.042c2.892-3.139,7.781-3.337,10.918-0.445c3.138,2.892,3.337,7.78,0.445,10.918     C295.839,378.899,276.616,386.927,255.999,386.927z"/>  	</g>  </g>  <path id="XMLID_407_" style="fill:#BDDFF4;" d="M485.32,62.316C482.626,308.694,415.661,417.975,300.151,498   c-0.146,0.103-0.283,0.196-0.43,0.299c-6.628,4.564-13.754,7.994-21.124,10.271c111.156-86.618,175.261-207.303,177.955-464.57   c0.049-4.522-0.898-8.89-2.665-12.774c7.058,2.802,12.885,5.429,17.512,7.695C480,43.144,485.427,52.313,485.32,62.316z"/>  <g id="XMLID_408_">  	<g id="XMLID_409_">    <circle id="XMLID_2610_" style="fill:#FD82AC;" cx="131.395" cy="221.801" r="19.43"/>    <circle id="XMLID_2609_" style="fill:#FD82AC;" cx="380.602" cy="221.801" r="19.43"/>  	</g>  </g>  <g id="XMLID_410_">  	<path id="XMLID_413_" style="fill:#4E7693;" d="M236.982,407.062c-3.287,0-5.931,2.709-5.86,5.995    C232.318,468.566,242.998,512,255.999,512c13.001,0,23.681-43.434,24.877-98.943c0.071-3.286-2.573-5.995-5.86-5.995H236.982z"/>  </g>  <g id="XMLID_414_">  	<g id="XMLID_415_">    <g id="XMLID_419_">    	<g id="XMLID_417_">      <path id="XMLID_418_" style="fill:#4E7693;" d="M354.605,358.353h-59.862c-3,0-5.878-1.192-7.999-3.313l-14.486-14.486       c-2.12-2.12-2.12-5.558,0-7.679l8.319-8.319c2.12-2.12,5.558-2.12,7.679,0l11.173,11.173h50.491l44.069-44.07       c4.418-4.418,11.58-4.418,15.998,0v0c4.418,4.418,4.418,11.58,0,15.998l-47.382,47.383       C360.482,357.161,357.605,358.353,354.605,358.353z"/>    	</g>    </g>  	</g>  	<g id="XMLID_421_">    <g id="XMLID_424_">    	<g id="XMLID_423_">      <path id="XMLID_2595_" style="fill:#4E7693;" d="M157.393,358.353h59.862c3,0,5.878-1.192,7.999-3.313l14.486-14.486       c2.12-2.12,2.12-5.558,0-7.679l-8.319-8.319c-2.12-2.12-5.558-2.12-7.679,0l-11.173,11.173h-50.491l-44.069-44.07       c-4.418-4.418-11.58-4.418-15.998,0l0,0c-4.418,4.418-4.418,11.58,0,15.998l47.382,47.383       C151.516,357.161,154.393,358.353,157.393,358.353z"/>    	</g>    </g>  	</g>  </g>  <g id="XMLID_425_">  	<path id="XMLID_428_" style="fill:#BDDFF4;" d="M255.998,301.174c-8.335,0-16.363-1.179-23.216-3.409    c-4.058-1.321-6.276-5.681-4.956-9.738c1.32-4.058,5.678-6.277,9.738-4.956c5.328,1.734,11.702,2.651,18.433,2.651    c6.731,0,13.106-0.916,18.434-2.651c4.059-1.319,8.418,0.898,9.738,4.956c1.32,4.057-0.898,8.418-4.956,9.738    C272.362,299.995,264.333,301.174,255.998,301.174z"/>  </g>  <g id="XMLID_429_">  	<g id="XMLID_436_">    <g id="XMLID_431_">    	<g id="XMLID_432_">      <path id="XMLID_433_" style="fill:#38627C;" d="M293.886,127.923c-3.787,0-7.52-1.757-9.905-5.063       c-3.942-5.463-2.712-13.087,2.75-17.031c0.999-0.722,24.807-17.826,54.414-31.606c42.445-19.755,74.91-22.558,96.498-8.33       c5.627,3.708,7.182,11.276,3.473,16.903c-3.708,5.627-11.276,7.183-16.903,3.473c-29.26-19.281-100.537,23.011-123.199,39.348       C298.855,127.174,296.359,127.923,293.886,127.923z"/>    	</g>    	<g id="XMLID_434_">      <path id="XMLID_435_" style="fill:#38627C;" d="M218.113,127.925c-2.474,0-4.97-0.75-7.13-2.308l0,0       c-22.662-16.337-93.939-58.632-123.199-39.348c-5.628,3.709-13.194,2.153-16.903-3.473c-3.709-5.627-2.153-13.194,3.473-16.903       c21.587-14.228,54.053-11.426,96.498,8.33c29.607,13.781,53.415,30.885,54.414,31.606c5.463,3.945,6.694,11.572,2.749,17.035       C225.63,126.169,221.898,127.925,218.113,127.925z"/>    	</g>    </g>  	</g>  	<g id="XMLID_441_">    <g id="XMLID_442_">    	<path id="XMLID_2572_" style="fill:#38627C;" d="M401.829,139.942c2.403,13.813-16.147,33.173-41.433,43.241      s-47.733,7.032-50.137-6.782c-2.403-13.813,16.147-33.173,41.433-43.241S399.426,126.129,401.829,139.942z"/>    </g>    <g id="XMLID_443_">    	<path id="XMLID_2568_" style="fill:#38627C;" d="M110.168,139.942c-2.403,13.813,16.147,33.173,41.433,43.241      s47.733,7.032,50.137-6.782c2.403-13.813-16.147-33.173-41.433-43.241S112.572,126.129,110.168,139.942z"/>    </g>  	</g>  </g>  <g id="XMLID_445_">  	<g id="XMLID_447_">    <path id="XMLID_450_" style="fill:#BDDFF4;" d="M290.304,277.593c-3.729,0-7.012-2.706-7.62-6.507l-15.845-99.036     c-0.674-4.213,2.195-8.175,6.408-8.85c4.217-0.665,8.176,2.195,8.85,6.409l15.845,99.036c0.674,4.213-2.195,8.175-6.408,8.85     C291.121,277.56,290.71,277.593,290.304,277.593z"/>  	</g>  	<g id="XMLID_451_">    <path id="XMLID_454_" style="fill:#BDDFF4;" d="M221.693,277.593c-0.406,0-0.817-0.032-1.23-0.098     c-4.213-0.675-7.083-4.637-6.408-8.85l15.845-99.036c0.675-4.214,4.639-7.076,8.85-6.409c4.213,0.675,7.082,4.637,6.408,8.85     l-15.845,99.036C228.705,274.886,225.422,277.593,221.693,277.593z"/>  	</g>  </g>  <g id="XMLID_455_">  	<g id="XMLID_456_">    <path id="XMLID_459_" style="fill:#BDDFF4;" d="M367.571,277.641c-15.883,0-31.505-5.338-44.386-15.587     c-3.34-2.657-3.892-7.517-1.236-10.857c2.657-3.338,7.517-3.891,10.857-1.235c15.055,11.979,34.885,15.397,53.045,9.15     c23.682-8.149,39.152-31.288,37.622-56.268c-0.261-4.26,2.98-7.924,7.239-8.185c4.246-0.234,7.923,2.981,8.184,7.239     c1.954,31.888-17.791,61.424-48.017,71.825C383.243,276.352,375.375,277.641,367.571,277.641z"/>  	</g>  	<g id="XMLID_460_">    <path id="XMLID_463_" style="fill:#BDDFF4;" d="M144.427,277.641c-7.806,0-15.671-1.289-23.309-3.918     c-30.225-10.401-49.97-39.937-48.016-71.825c0.261-4.26,3.946-7.481,8.184-7.239c4.26,0.262,7.501,3.926,7.239,8.185     c-1.531,24.98,13.94,48.119,37.621,56.268c18.16,6.249,37.989,2.829,53.046-9.15c3.339-2.657,8.2-2.104,10.857,1.235     c2.656,3.34,2.104,8.2-1.236,10.857C175.933,272.302,160.309,277.641,144.427,277.641z"/>  	</g>  </g>
</g></svg>`, `<svg  viewBox="0 0 496 496.008"  xmlns="http://www.w3.org/2000/svg"><path d="m456.003906 104h-416c-22.054687 0-39.99999975 17.945312-39.99999975 40v192c0 22.054688 17.94531275 40 39.99999975 40h112.59375l6.125 33.710938c1.152344 6.320312 3.839844 12.335937 7.785156 17.402343l41.578126 53.453125c7.636718 9.816406 19.140624 15.441406 31.574218 15.441406h16.695313c12.433593 0 23.9375-5.625 31.578125-15.441406l41.566406-53.453125c3.945312-5.066406 6.632812-11.082031 7.785156-17.410156l6.125-33.703125h112.59375c22.054688 0 40-17.945312 40-40v-192c0-22.054688-17.945312-40-40-40zm-440 232v-192c0-13.230469 10.769532-24 24-24h24v240h-24c-13.230468 0-24-10.769531-24-24zm158.464844 70.839844-8.28125-45.527344c.640625.664062 1.191406 1.382812 1.847656 2.039062 6.234375 6.234376 11.394532 13.390626 15.328125 21.265626 5.65625 11.292968 8.640625 23.949218 8.640625 36.582031v12.625l-12.863281-16.542969c-2.367187-3.042969-3.976563-6.648438-4.671875-10.441406zm100.832031 63.894531c-4.511719 5.800781-11.601562 9.265625-18.953125 9.265625h-16.695312c-7.34375 0-14.433594-3.464844-18.945313-9.265625l-12.703125-16.335937v-33.199219c0-15.109375-3.566406-30.230469-10.328125-43.742188-4.703125-9.417969-10.871093-17.96875-18.328125-25.425781-22.792968-22.792969-35.34375-53.09375-35.34375-85.335938v-2.695312c0-57.34375 46.65625-104 104-104s104 46.65625 104 104v2.695312c0 32.242188-12.550781 62.542969-35.351562 85.34375-7.449219 7.457032-13.617188 16.007813-18.320313 25.425782-6.761719 13.503906-10.328125 28.632812-10.328125 43.734375v33.199219zm46.238281-63.902344c-.6875 3.800781-2.304687 7.40625-4.671874 10.449219l-12.863282 16.542969v-12.625c0-12.632813 2.984375-25.289063 8.640625-36.582031 3.933594-7.875 9.09375-15.03125 15.328125-21.265626.65625-.65625 1.214844-1.375 1.847656-2.039062zm29.863282-74.824219c10.816406-19.808593 16.601562-42.113281 16.601562-65.3125v-2.695312c0-66.167969-53.832031-120-120-120-66.167968 0-120 53.832031-120 120v2.695312c0 23.207032 5.785156 45.503907 16.601563 65.320313l5.085937 27.984375h-69.6875v-240h336v240h-69.6875zm128.601562 3.992188c0 13.230469-10.769531 24-24 24h-24v-240h24c13.230469 0 24 10.769531 24 24zm0 0"/><path d="m448.003906 184h16v112h-16zm0 0"/><path d="m248.003906 16c21.367188 0 41.457032 8.320312 56.566406 23.433594l11.3125-11.3125c-18.136718-18.136719-42.238281-28.121094-67.878906-28.121094s-49.742187 9.984375-67.878906 28.121094l11.3125 11.3125c15.109375-15.113282 35.199219-23.433594 56.566406-23.433594zm0 0"/><path d="m293.261719 50.742188c-12.089844-12.085938-28.160157-18.742188-45.257813-18.742188s-33.167968 6.65625-45.257812 18.742188l11.3125 11.3125c9.074218-9.0625 21.121094-14.054688 33.945312-14.054688 12.824219 0 24.871094 4.992188 33.945313 14.054688zm0 0"/><path d="m225.371094 73.375 11.320312 11.3125c6.039063-6.039062 16.578125-6.039062 22.617188 0l11.320312-11.3125c-6.039062-6.039062-14.074218-9.375-22.625-9.375-8.550781 0-16.582031 3.335938-22.632812 9.375zm0 0"/><path d="m256.003906 384h16v48h-16zm0 0"/><path d="m224.003906 384h16v48h-16zm0 0"/><path d="m227.828125 271.320312-8.160156-12.242187c-4.617188-6.933594-12.34375-11.078125-20.679688-11.078125-6.640625 0-12.878906 2.585938-17.578125 7.28125l-14.125 14.125c-4.695312 4.707031-7.28125 10.945312-7.28125 17.578125v8.167969c0 13.695312 11.152344 24.847656 24.847656 24.847656h3.167969c3.839844 0 7.679688-.902344 11.113281-2.625l19.121094-9.558594c8.484375-4.242187 13.75-12.753906 13.75-22.710937 0-4.9375-1.449218-9.699219-4.175781-13.785157zm-16.71875 22.183594-19.128906 9.558594c-1.222657.617188-2.585938.9375-3.953125.9375h-3.167969c-4.878906 0-8.855469-3.96875-8.855469-8.847656v-8.167969c0-2.367187.921875-4.59375 2.59375-6.265625l14.125-14.125c1.671875-1.671875 3.898438-2.59375 6.265625-2.59375 2.96875 0 5.71875 1.480469 7.367188 3.945312l8.167969 12.253907c.96875 1.457031 1.480468 3.152343 1.480468 5.386719 0 3.375-1.871094 6.40625-4.894531 7.917968zm0 0"/><path d="m296.859375 317.375c3.433594 1.722656 7.28125 2.625 11.121094 2.625h3.167969c13.703124 0 24.855468-11.152344 24.855468-24.847656v-8.167969c0-6.632813-2.582031-12.871094-7.28125-17.578125l-14.125-14.125c-4.691406-4.695312-10.929687-7.28125-17.578125-7.28125-8.335937 0-16.0625 4.144531-20.679687 11.070312l-8.160156 12.242188c-2.726563 4.09375-4.175782 8.855469-4.175782 14.273438 0 9.476562 5.265625 17.988281 13.734375 22.222656zm-15.367187-37.183594 8.167968-12.253906c1.640625-2.457031 4.390625-3.9375 7.359375-3.9375 2.367188 0 4.59375.921875 6.257813 2.59375l14.125 14.125c1.683594 1.671875 2.601562 3.898438 2.601562 6.265625v8.167969c0 4.878906-3.976562 8.847656-8.847656 8.847656h-3.167969c-1.367187 0-2.726562-.320312-3.960937-.9375l-19.128906-9.558594c-3.023438-1.511718-4.894532-4.542968-4.894532-8.398437 0-1.753907.511719-3.449219 1.488282-4.914063zm0 0"/></svg>`, `<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"    viewBox="0 0 511.999 511.999" style="enable-background:new 0 0 511.999 511.999;" xml:space="preserve">  <g>  	<g>    <path d="M446,272c0-13.562-9.045-25.044-21.418-28.745c-2.006-32.398-8.166-49.889-54.879-66.716l-31.781-11.449    	c4.283-10.385,6.652-21.753,6.652-33.665V88.571C344.574,39.733,304.841,0,256.001,0c-48.84,0-88.572,39.733-88.572,88.571v42.855    	c0,11.913,2.369,23.28,6.652,33.665L142.3,176.54c-19.439,7.002-31.742,13.933-39.889,22.473    	c-11.822,12.392-14.037,27.256-15.014,44.249C75.035,246.97,65.999,258.447,65.999,272v180.001c0,4.626,1.055,9.009,2.932,12.926    	c-1.811,1.81-2.932,4.311-2.932,7.073v15c0,13.784,11.217,24.999,25.002,24.999h330C434.787,511.999,446,500.785,446,487v-15    	c0-2.763-1.119-5.264-2.932-7.073c1.879-3.917,2.932-8.3,2.932-12.926V272z M304.574,149.955    	c-11.029,0-20.002-8.972-20.002-20.001s8.973-20.001,20.002-20.001c11.027,0,20,8.972,20,20.001S315.601,149.955,304.574,149.955z      M313.335,168.976c-12.266,18.665-33.379,31.021-57.334,31.021s-45.068-12.357-57.336-31.023c2.825,0.635,5.754,0.981,8.766,0.981    	c18.605,0,34.283-12.768,38.734-30.001h19.672c4.453,17.233,20.131,30.001,38.736,30.001    	C307.583,169.955,310.512,169.61,313.335,168.976z M256.001,20c22.574,0,42.629,10.969,55.131,27.85    	c-6.445-0.843-12.609-0.195-17.213,1.387c-4.627,1.589-8.354,3.993-11.959,6.318c-6.555,4.229-12.748,8.224-25.959,8.224    	c-13.213,0-19.406-3.995-25.963-8.225c-3.604-2.325-7.33-4.729-11.955-6.317c-4.604-1.582-10.768-2.231-17.213-1.388    	C213.372,30.968,233.427,20,256.001,20z M187.476,86.737c0.34-7.317,2.75-12.629,7.186-15.796    	c5.549-3.962,13.381-4.006,16.926-2.788c2.324,0.798,4.773,2.379,7.609,4.209c7.471,4.818,17.701,11.418,36.805,11.418    	c19.102,0,29.332-6.599,36.801-11.417c2.838-1.83,5.287-3.41,7.613-4.209c3.543-1.218,11.375-1.174,16.926,2.788    	c4.435,3.167,6.846,8.479,7.185,15.796c0.018,0.611,0.047,1.219,0.047,1.834v6.765c-5.889-3.416-12.717-5.382-20-5.382    	c-18.605,0-34.283,12.768-38.736,30.001h-19.672c-4.451-17.233-20.129-30.001-38.734-30.001c-7.283,0-14.113,1.966-20.002,5.382    	v-6.766h-0.001C187.429,87.956,187.458,87.349,187.476,86.737z M207.431,109.953c11.027,0,20,8.972,20,20.001    	c0,11.028-8.973,20.001-20,20.001c-11.029,0-20.002-8.972-20.002-20.001S196.402,109.953,207.431,109.953z M116.882,212.817    	c5.815-6.095,16.045-11.644,32.196-17.461l34.822-12.544c16.076,22.495,42.404,37.186,72.102,37.186    	c29.695,0,56.023-14.691,72.102-37.186l34.822,12.544c35.559,12.809,40.006,22.021,41.576,46.642H107.548    	C108.579,227.529,110.542,219.464,116.882,212.817z M85.999,272c0-5.515,4.486-10.001,10.002-10.001h320    	c5.514,0,9.998,4.487,9.998,10.001v180.001c0,5.514-4.484,9.999-9.998,9.999h-320c-5.516,0-10.002-4.485-10.002-9.999V272z      M426,487c0,2.71-2.289,4.999-4.998,4.999h-330C88.291,491.999,86,489.71,86,487v-5h10.002h320H426V487z"/>  	</g>  </g>  <g>  	<g>    <path d="M276.004,352H266v-20h30c5.521,0,10-4.477,10-10s-4.479-10-10-10h-30v-9.688c0-5.523-4.479-10-10-10    	c-5.523,0-10,4.477-10,10V312h-10.002C219.457,312,206,325.458,206,342.001C205.999,358.542,219.456,372,235.997,372h10.002    	v20.001h-29.998c-5.523,0-10,4.477-10,10s4.477,10,10,10h29.998v9.686c0,5.523,4.477,10,10,10c5.521,0,10-4.477,10-10v-9.686    	h10.004C292.542,412.001,306,398.542,306,382S292.543,352,276.004,352z M245.999,352h-10.002c-5.514,0-9.998-4.486-9.998-10.001    	c0-5.514,4.485-9.999,9.998-9.999h10.002V352z M276.004,392H266v-20h10.004c5.511,0,9.996,4.487,9.996,10.001    	C286,387.515,281.516,392,276.004,392z"/>  	</g>  </g>  <g>  	<g>    <path d="M336.233,422h-0.236c-5.521,0-10,4.477-10,10c0,5.522,4.479,10,10,10h0.236c5.523,0,10-4.477,10-10    	S341.756,422,336.233,422z"/>  	</g>  </g>  <g>  	<g>    <path d="M395.997,422h-31.035c-5.522,0-10,4.477-10,10c0,5.522,4.479,10,10,10h31.035c5.522,0,10-4.477,10-10    	S401.519,422,395.997,422z"/>  	</g>  </g>  <g>  	<g>    <path d="M147.034,281.999h-31.033c-5.523,0-10,4.477-10,10s4.477,10,10,10h31.033c5.523,0,10-4.477,10-10    	S152.557,281.999,147.034,281.999z"/>  	</g>  </g>  <g>  	<g>    <path d="M176.001,281.999h-0.236c-5.523,0-10,4.477-10,10s4.477,10,10,10h0.236c5.523,0,10-4.477,10-10    	S181.524,281.999,176.001,281.999z"/>  	</g>  </g>  <g>  </g>  <g>  </g>  <g>  </g>  <g>  </g>  <g>  </g>  <g>  </g>  <g>  </g>  <g>  </g>  <g>  </g>  <g>  </g>  <g>  </g>  <g>  </g>  <g>  </g>  <g>  </g>  <g>  </g>  </svg>  `, `<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"    viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">  <g>  	<g>    <path d="M497,211c-8.291,0-15,6.709-15,15v15h-60.835c-1.912-21.16-7.852-41.439-17.342-60H437c24.814,0,45-20.186,45-45V88.237    	C499.422,82.024,512,65.53,512,46c0-24.814-20.186-46-45-46c-24.814,0-45,21.186-45,46c0,19.53,12.578,36.024,30,42.237V136    	c0,8.276-6.724,15-15,15h-52.927c-6.883-8.307-14.484-16.113-23.04-23.071c-38.76-31.538-90.604-43.682-140.38-33.237    	c-37.083,7.733-70.252,28.33-93.281,56.309H75c-8.276,0-15-6.724-15-15V88.237C77.422,82.024,90,65.53,90,46    	C90,21.186,69.814,0,45,0S0,21.186,0,46c0,19.53,12.578,36.024,30,42.237V136c0,24.814,20.186,44.9,45,44.9h33.184    	c-9.448,18.514-15.361,38.86-16.959,60.1H30v-15c0-8.291-6.709-15-15-15s-15,6.709-15,15v60c0,8.291,6.709,15,15,15    	s15-6.709,15-15v-15h61.467c3.351,22.954,14.108,44.004,30.412,60H75c-24.814,0-45,20.186-45,45v47.763    	C12.578,429.976,0,446.47,0,466c0,24.814,20.186,46,45,46s45-21.186,45-46c0-19.53-12.578-36.024-30-42.237V376    	c0-8.276,6.724-15,15-15h75v15c0,24.814,21.186,45,46,45h15v-45c0-8.291,6.709-15,15-15s15,6.709,15,15v45h30v-45    	c0-8.291,6.709-15,15-15c8.291,0,15,6.709,15,15v45h16c24.814,0,45-20.186,45-45v-15h75c8.276,0,15,6.724,15,15v47.763    	c-17.422,6.213-30,22.707-30,42.237c0,24.814,20.186,46,45,46c24.814,0,45-21.186,45-46c0-19.53-12.578-36.024-30-42.237V376    	c0-24.814-20.186-45-45-45h-47.042c10.869-10.554,19.704-23.198,25.23-37.764c2.736-7.191,4.371-14.659,5.46-22.236H482v15    	c0,8.227,6.74,15,15,15c8.265,0,15-6.768,15-15v-60C512,217.709,505.291,211,497,211z M196,301c-24.814,0-46-20.186-46-45v-30    	c0-5.2,2.695-10.02,7.119-12.759c4.409-2.754,9.917-2.974,14.59-0.659l61,30C237.792,245.131,241,250.316,241,256    	C241,280.814,220.814,301,196,301z M362,256c0,24.814-20.186,45-45,45c-24.814,0-46-20.186-46-45    	c0-5.684,3.208-10.869,8.291-13.418l61-30c4.658-2.329,10.181-2.095,14.59,0.659C359.305,215.98,362,220.8,362,226V256z"/>  	</g>  </g>  <g>  </g>  <g>  </g>  <g>  </g>  <g>  </g>  <g>  </g>  <g>  </g>  <g>  </g>  <g>  </g>  <g>  </g>  <g>  </g>  <g>  </g>  <g>  </g>  <g>  </g>  <g>  </g>  <g>  </g>  </svg>  `, `<svg  viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><path d="m18 19a5.006 5.006 0 0 0 5 5h1a1 1 0 0 1 1 1v7h2v-6h2v6h2v-6h2v6h2v-6h2v6h2v-7a1 1 0 0 1 1-1h1a5.006 5.006 0 0 0 5-5v-10a5.006 5.006 0 0 0 -5-5h-18a5.006 5.006 0 0 0 -5 5zm15.393-2.807 4.8-4.8a1 1 0 0 1 .932-.268 5 5 0 1 1 -6 6 1 1 0 0 1 .268-.932zm-8.517-5.068a1 1 0 0 1 .931.268l4.8 4.8a1 1 0 0 1 .268.931 5 5 0 1 1 -6-6z"/><path d="m10 11v31h44v-31a1 1 0 0 0 -1-1h-5v2h3a1 1 0 0 1 1 1v26a1 1 0 0 1 -1 1h-38a1 1 0 0 1 -1-1v-26a1 1 0 0 1 1-1h3v-2h-5a1 1 0 0 0 -1 1z"/><path d="m16 14h-2v24h36v-24h-2v5a7.008 7.008 0 0 1 -7 7v6a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2-2v-6a7.008 7.008 0 0 1 -7-7z"/><path d="m26 19a2.985 2.985 0 0 0 2.763-1.823l-3.94-3.94a3 3 0 0 0 1.177 5.763z"/><path d="m38 19a3 3 0 0 0 1.178-5.763l-3.942 3.94a2.986 2.986 0 0 0 2.764 1.823z"/><path d="m59.382 54-5-10h-44.764l-5 10zm-5.382-2h-2v-2h2zm-3-6h2v2h-2zm-1 6h-2v-2h2zm-3-6h2v2h-2zm-4 0h2v2h-2zm-4 0h2v2h-2zm-4 0h2v2h-2zm-4 0h2v2h-2zm-4 0h2v2h-2zm-4 0h2v2h-2zm-4 0h2v2h-2zm-1 4h28v2h-28zm-3-4h2v2h-2zm-1 4h2v2h-2zm-3-4h2v2h-2zm-1 4h2v2h-2z"/><path d="m4 60h56v-4h-23v1a2 2 0 0 1 -2 2h-6a2 2 0 0 1 -2-2v-1h-23z"/><path d="m29 56h6v1h-6z"/><path d="m58 30h2v2h-2z"/><path d="m4 30h2v2h-2z"/><path d="m4 24h2v2h-2z"/><path d="m4 18h2v2h-2z"/><path d="m58 24h2v2h-2z"/><path d="m58 18h2v2h-2z"/><path d="m57 5h2v2h-2z"/><path d="m5 5h2v2h-2z"/></svg>`,`<svg id="Layer_3" enable-background="new 0 0 64 64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><path d="m35 33.974c-.953-.721-1.652-1.762-1.899-2.974h-26.101v10h28zm-10 5.026h-2v-6h2zm4 0h-2v-6h2zm4 0h-2v-6h2z"/><path d="m37 34.899v20.101h-32v-38h24.008c0-.065-.008-.129-.008-.194 0-1.314.179-2.585.483-3.806h-23.483c-1.654 0-3 1.346-3 3v42c0 1.654 1.346 3 3 3h30c1.654 0 3-1.346 3-3v-23h-1c-.342 0-.677-.035-1-.101zm-30 24.101h-2v-2h2zm4 0h-2v-2h2zm4 0h-2v-2h2z"/><path d="m29.167 19h-22.167v10h26v-1.649l-.536-.67c-1.774-2.217-2.902-4.886-3.297-7.681zm-18.167 8h-2v-6h2zm4 0h-2v-6h2zm4 0h-2v-6h2z"/><path d="m7 53h28v-10h-28zm10-7h2v6h-2zm-4 0h2v6h-2zm-4 0h2v6h-2z"/><path d="m47.194 3h-2.388c-7.613 0-13.806 6.193-13.806 13.806 0 3.123 1.075 6.186 3.025 8.625l.975 1.218v3.351c0 1.302.839 2.402 2 2.816v-3.816h2v4h2v-4h2v4h2v-4h2v4h2v-4h2v4h2v-4h2v3.816c1.161-.414 2-1.514 2-2.816v-3.351l.975-1.218c1.95-2.439 3.025-5.502 3.025-8.625 0-7.613-6.193-13.806-13.806-13.806zm-4.937 13.329-2.929 2.929c-.478.478-1.115.742-1.792.742-1.398 0-2.536-1.138-2.536-2.536v-2.929c0-1.397 1.138-2.535 2.536-2.535h2.929c1.397 0 2.535 1.138 2.535 2.536 0 .677-.264 1.314-.743 1.793zm14.743 1.135c0 1.398-1.138 2.536-2.536 2.536-.677 0-1.314-.264-1.793-.743l-2.929-2.929c-.478-.478-.742-1.115-.742-1.792 0-1.398 1.138-2.536 2.536-2.536h2.929c1.397 0 2.535 1.138 2.535 2.536z"/></svg>`]

                return  svgHTML}
        function blinkApp (counter = 0) {
            let spread = (Math.sin(counter)+1);
            let ms = 50;
            stl(viralWare, {boxShadow: `0vmin 0vmin 1.5vmin ${spread}vmin red`});
            counter++;
            if (counter < 30) {setTimeout(()=>{blinkApp (counter)},ms);} else {focusApp()}

        }
        function focusApp() {
            let opct = 1;
            function fadeOut (opct = 1) {
            for (let q2 = 0; q2 < 17; q2++) {
                let goodApp = Id('app' + q2);
                if (goodApp && q2 !== q1){goodApp.style.opacity = " "+ opct + " "};
            }
            opct -= 0.1

            if (opct > 0){setTimeout(()=>{fadeOut (opct)},50)} else {inlarger ()}

            }
            function inlarger (size = 10) {
                stl (viralWare,{position: 'relative', width: size + '%', height:  size + '%'} )
                size++;size++;size++; //only once
                if (size < 30) {setTimeout (()=>{inlarger (size)}, 100)} else {revealApp ()};

            }
            fadeOut ()



        }
        function revealApp () {
            let evileSVGs =  getEvileSVGs ();
            let rndImg = getRandomInt( evileSVGs.length) - 1;
            let children = viralWare.childNodes
            let theSvg = '';
            children.forEach ((c)=>{
                if (c.tagName === 'svg' ) {
                    theSvg  = c;

                }
            })
            viralWare.innerHTML = evileSVGs[rndImg]






        }
        function scrollPromise (){
            let delta = ((getRandomInt(10) + 1) / 10) + 2
            let promise1 = new Promise((resolve, reject) => {
                function scrollApps (h = -300){
                    appContainer.style.top = h + '%';
                    if (delta > 0.5 && h > -150) {delta -= (0.015 * delta)}
                    h +=  delta;
                    if (h > 0) {resolve ('worked')} else {setTimeout (()=>{scrollApps(h)},8)}

                }
                scrollApps()


            })
            return promise1
         }
        blankIpad ()
        let ipadCover = Id('ipadCover')
        let appContainer = Elm ('appContainer');
        let appHeader = Elm ('appHeader')
        let ipadColor = Id('ipad').style.backgroundColor;

        let ipad = Id('ipad')
        ipad.style.backgroundImage = 'url( data/ipad_wallpaper.svg)' /////
        ipad.style.backgroundSize ='cover'




        let foundText =  `${G.TXT.theCannerFound}${G.mgmt.numOfsuccess }${G.TXT.suspiciusApps2}`
        appHeader.innerHTML =  G.TXT.searchingForBadApps  + `<font style="font-size: 2.2vmin"><br>${foundText}</font>`
        let fontS = '4.5vmin'; if (G.EN){fontS = '2.5vmin' }
        stl (appHeader, {position: 'relative', color:'white', fontFamily: 'consolas', fontSize: fontS, textAlign: 'center', zIndex: '19', backgroundColor: 'rgba(20,10,70,0.8)', hieght: '130%', overflow:'hidden', borderRadius:"30vmin"})
        stl (appContainer, { paddingLeft :'3vmin'})
        ipadCover.appendChild(appHeader) ;         ipadCover.appendChild(appContainer)
        let SVGs = getSVGs ()
        for (let q = 1 ; q < 55; q++){
            let div1 = Elm('app' + q)
            let rndImg = getRandomInt( SVGs.length) - 1;
            let rndR =  getRandomInt( 150) + 100 ; let rndG =  getRandomInt( 150) + 100 ; let rndB =  getRandomInt( 150) + 100
            let bgColor = `rgba(${rndR},${rndB},${rndG})`

            div1.innerHTML = SVGs[rndImg];
            stl (div1, {position: 'static', float: 'left', width: '10%', height: '10%', backgroundColor: bgColor, padding: '1vmin' , margin: '2.3vmin', marginTop : "4vmin", borderRadius: '2vmin', boxShadow: '0.5vmin 0.5vmin 1vmin rgba(0,0,0,0.8)', opacity: '1'})
            appContainer.appendChild(div1)
        }
        appContainer.style.position = 'relative';
        let q1 = getRandomInt(9) + 1; let viralWare = Id('app' + q1);
        if (answeris === 'right'){
            G.mgmt.numOfsuccess++
            if (G.mgmt.numOfsuccess  >=G.mgmt.max_Tofind.webSite) {
                findWebsite()
            }

        }
        scrollPromise ().then(()=>{
             if (answeris === 'right') {

                 blinkApp();
                 let foundText =  `${G.TXT.theCannerFound}${G.mgmt.numOfsuccess }${G.TXT.suspiciusApps2}`
                 appHeader.innerHTML =  G.TXT.searchingForBadApps + `<font style="font-size: 2.2vmin"><br>${foundText}</font>`

              }
         })



    }
    var answeris = ''; type0 = type0  || G.mgmt.current; if ( type0 === G.mgmt.current){G.mgmt.numOfsuccess = 0} ; if (type0 === 'right' || type0 === 'wrong') {answeris = type0; type0 = G.mgmt.current} else if (type0 == "getIp" ) {G.mgmt.numOfsuccess = 0}; if (type0 == 'finishChaper' && G.mgmt.current === 'getIp'){
        type0 = G.mgmt.current; }
    switch( type0) {
        case 'getIp':
        G.mgmt.current = 'getIp';
         getIp ()
        break;
        case 'firewall':
        G.mgmt.current = 'firewall';
         fireWall ()
         break;
        case 'user':
         G.mgmt.current = 'user';
          user ()
          break;
        case 'virus':
         G.mgmt.current = 'virus'
        virus () ; break;
        case 'webSite':
        G.mgmt.current = 'webSite'
        webSite(); break;


    }
}


// main:
//G.mgmt.totalNumOfQuestions = 13//kill should be 20

//test ('cutQuestions', 10)

langSet ()
storeInLocal ('load')
buildBoard ();
playSound ('BuildSounds')
holoMenu();
blackScreen ();
