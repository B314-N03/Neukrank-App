// Generated by DDC, the Dart Development Compiler (to JavaScript).
// Version: 2.19.0 (stable) (Mon Jan 23 11:29:09 2023 -0800) on "linux_x64"
// Module: zapp_user_main
// Flags: soundNullSafety(true), enableAsserts(true)
define('zapp_user_main', ['dart_sdk', 'flutter_sdk'], (function load__zapp_user_main(dart_sdk, flutter_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const _interceptors = dart_sdk._interceptors;
  const js = dart_sdk.js;
  const ui = dart_sdk.ui;
  const _internal = dart_sdk._internal;
  const math = dart_sdk.math;
  const convert = dart_sdk.convert;
  const collection = dart_sdk.collection;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const app = flutter_sdk.src__material__app;
  const theme_data = flutter_sdk.src__material__theme_data;
  const framework = flutter_sdk.src__widgets__framework;
  const scaffold = flutter_sdk.src__material__scaffold;
  const colors = flutter_sdk.src__material__colors;
  const app_bar = flutter_sdk.src__material__app_bar;
  const basic = flutter_sdk.src__widgets__basic;
  const icon = flutter_sdk.src__widgets__icon;
  const icons = flutter_sdk.src__material__icons;
  const text = flutter_sdk.src__widgets__text;
  const flex = flutter_sdk.src__rendering__flex;
  const text_style = flutter_sdk.src__painting__text_style;
  const image = flutter_sdk.src__widgets__image;
  const elevated_button = flutter_sdk.src__material__elevated_button;
  const navigator = flutter_sdk.src__widgets__navigator;
  const page = flutter_sdk.src__material__page;
  const button_style = flutter_sdk.src__material__button_style;
  const material_state = flutter_sdk.src__material__material_state;
  const dialog = flutter_sdk.src__material__dialog;
  const floating_action_button = flutter_sdk.src__material__floating_action_button;
  const binding = flutter_sdk.src__widgets__binding;
  const asset_bundle = flutter_sdk.src__services__asset_bundle;
  const container = flutter_sdk.src__widgets__container;
  const edge_insets = flutter_sdk.src__painting__edge_insets;
  const box_fit = flutter_sdk.src__painting__box_fit;
  const checkbox = flutter_sdk.src__material__checkbox;
  const equality = flutter_sdk.src__equality;
  var $46zapp_entry = Object.create(dart.library);
  var main = Object.create(dart.library);
  var web_plugin_registrant = Object.create(dart.library);
  var favourites = Object.create(dart.library);
  var questions_training = Object.create(dart.library);
  var questions_exam = Object.create(dart.library);
  var $toString = dartx.toString;
  var $_get = dartx._get;
  var $any = dartx.any;
  var $_set = dartx._set;
  var $add = dartx.add;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    VoidTovoid: () => (T.VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))(),
    ListOfString: () => (T.ListOfString = dart.constFn(core.List$(core.String)))(),
    ListOfStringTodynamic: () => (T.ListOfStringTodynamic = dart.constFn(dart.fnType(dart.dynamic, [T.ListOfString()])))(),
    JSArrayOfString: () => (T.JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))(),
    dynamicToNull: () => (T.dynamicToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic])))(),
    VoidToNull: () => (T.VoidToNull = dart.constFn(dart.fnType(core.Null, [])))(),
    ObjectAndStackTraceTovoid: () => (T.ObjectAndStackTraceTovoid = dart.constFn(dart.fnType(dart.void, [core.Object, core.StackTrace])))(),
    ZoneAndZoneDelegateAndZone__Tovoid: () => (T.ZoneAndZoneDelegateAndZone__Tovoid = dart.constFn(dart.fnType(dart.void, [async.Zone, async.ZoneDelegate, async.Zone, core.String])))(),
    JSArrayOfWidget: () => (T.JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))(),
    BuildContextToQuestions_Training: () => (T.BuildContextToQuestions_Training = dart.constFn(dart.fnType(questions_training.Questions_Training, [framework.BuildContext])))(),
    ColorN: () => (T.ColorN = dart.constFn(dart.nullable(ui.Color)))(),
    BuildContextToAlertDialog: () => (T.BuildContextToAlertDialog = dart.constFn(dart.fnType(dialog.AlertDialog, [framework.BuildContext])))(),
    BuildContextToFavourites: () => (T.BuildContextToFavourites = dart.constFn(dart.fnType(favourites.Favourites, [framework.BuildContext])))(),
    boolN: () => (T.boolN = dart.constFn(dart.nullable(core.bool)))(),
    LinkedHashSetOfvoid: () => (T.LinkedHashSetOfvoid = dart.constFn(collection.LinkedHashSet$(dart.void)))(),
    LinkedHashSetOfboolN: () => (T.LinkedHashSetOfboolN = dart.constFn(collection.LinkedHashSet$(T.boolN())))(),
    boolNTovoid: () => (T.boolNTovoid = dart.constFn(dart.fnType(dart.void, [T.boolN()])))(),
    DefaultEqualityOfNever: () => (T.DefaultEqualityOfNever = dart.constFn(equality.DefaultEquality$(dart.Never)))(),
    ListN: () => (T.ListN = dart.constFn(dart.nullable(core.List)))(),
    ListNAndListNTobool: () => (T.ListNAndListNTobool = dart.constFn(dart.fnType(core.bool, [T.ListN(), T.ListN()])))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.fn(main.main, T.VoidTovoid());
    },
    get C1() {
      return C[1] = dart.const({
        __proto__: main.MyHomePage.prototype,
        [Widget_key]: null
      });
    },
    get C2() {
      return C[2] = dart.const({
        __proto__: text.Text.prototype,
        [Widget_key]: null,
        [Text_selectionColor]: null,
        [Text_textHeightBehavior]: null,
        [Text_textWidthBasis]: null,
        [Text_semanticsLabel]: null,
        [Text_maxLines]: null,
        [Text_textScaleFactor]: null,
        [Text_overflow]: null,
        [Text_softWrap]: null,
        [Text_locale]: null,
        [Text_textDirection]: null,
        [Text_textAlign]: null,
        [Text_strutStyle]: null,
        [Text_style]: null,
        [Text_textSpan]: null,
        [Text_data]: "MSG bis DZE"
      });
    },
    get C3() {
      return C[3] = dart.const({
        __proto__: questions_training.Questions_Training.prototype,
        [Widget_key]: null
      });
    },
    get C4() {
      return C[4] = dart.const({
        __proto__: favourites.Favourites.prototype,
        [Widget_key]: null
      });
    },
    get C5() {
      return C[5] = dart.const({
        __proto__: text.Text.prototype,
        [Widget_key]: null,
        [Text_selectionColor]: null,
        [Text_textHeightBehavior]: null,
        [Text_textWidthBasis]: null,
        [Text_semanticsLabel]: null,
        [Text_maxLines]: null,
        [Text_textScaleFactor]: null,
        [Text_overflow]: null,
        [Text_softWrap]: null,
        [Text_locale]: null,
        [Text_textDirection]: null,
        [Text_textAlign]: null,
        [Text_strutStyle]: null,
        [Text_style]: null,
        [Text_textSpan]: null,
        [Text_data]: "MSG bis DZE / Favoriten"
      });
    },
    get C7() {
      return C[7] = dart.const({
        __proto__: material_state.MaterialState.prototype,
        [_Enum__name]: "selected",
        [_Enum_index]: 4
      });
    },
    get C8() {
      return C[8] = dart.const({
        __proto__: material_state.MaterialState.prototype,
        [_Enum__name]: "focused",
        [_Enum_index]: 1
      });
    },
    get C9() {
      return C[9] = dart.const({
        __proto__: material_state.MaterialState.prototype,
        [_Enum__name]: "pressed",
        [_Enum_index]: 2
      });
    },
    get C6() {
      return C[6] = dart.constSet(material_state.MaterialState, [C[7] || CT.C7, C[8] || CT.C8, C[9] || CT.C9]);
    },
    get C10() {
      return C[10] = dart.const({
        __proto__: text.Text.prototype,
        [Widget_key]: null,
        [Text_selectionColor]: null,
        [Text_textHeightBehavior]: null,
        [Text_textWidthBasis]: null,
        [Text_semanticsLabel]: null,
        [Text_maxLines]: null,
        [Text_textScaleFactor]: null,
        [Text_overflow]: null,
        [Text_softWrap]: null,
        [Text_locale]: null,
        [Text_textDirection]: null,
        [Text_textAlign]: null,
        [Text_strutStyle]: null,
        [Text_style]: null,
        [Text_textSpan]: null,
        [Text_data]: "MSG bis DZE / Training"
      });
    },
    get C11() {
      return C[11] = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 0,
        [EdgeInsets_right]: 0,
        [EdgeInsets_top]: 0,
        [EdgeInsets_left]: 30
      });
    },
    get C13() {
      return C[13] = dart.const({
        __proto__: T.DefaultEqualityOfNever().prototype
      });
    },
    get C12() {
      return C[12] = dart.const({
        __proto__: equality.ListEquality.prototype,
        [ListEquality__elementEquality]: C[13] || CT.C13
      });
    },
    get C14() {
      return C[14] = dart.const({
        __proto__: text.Text.prototype,
        [Widget_key]: null,
        [Text_selectionColor]: null,
        [Text_textHeightBehavior]: null,
        [Text_textWidthBasis]: null,
        [Text_semanticsLabel]: null,
        [Text_maxLines]: null,
        [Text_textScaleFactor]: null,
        [Text_overflow]: null,
        [Text_softWrap]: null,
        [Text_locale]: null,
        [Text_textDirection]: null,
        [Text_textAlign]: null,
        [Text_strutStyle]: null,
        [Text_style]: null,
        [Text_textSpan]: null,
        [Text_data]: "MSG bis DZE / Prüfung"
      });
    }
  }, false);
  var C = Array(15).fill(void 0);
  var I = [
    "file:///zapp/project/lib/main.dart",
    "package:flutter_app/favourites.dart",
    "package:flutter_app/questions_training.dart",
    "package:flutter_app/questions_exam.dart"
  ];
  $46zapp_entry.runAppGuarded = function runAppGuarded() {
    async.runZonedGuarded(core.Null, dart.fn(() => {
      if (T.ListOfStringTodynamic().is(C[0] || CT.C0)) {
        T.ListOfStringTodynamic().as(C[0] || CT.C0)(T.JSArrayOfString().of([]));
      } else {
        (C[0] || CT.C0)();
      }
      if (js.context.hasProperty("__notifyFlutterRendered")) {
        async.Future.delayed(new core.Duration.new({milliseconds: 250})).then(core.Null, dart.fn(_ => {
          js.context.callMethod("__notifyFlutterRendered", [false]);
        }, T.dynamicToNull()));
      }
    }, T.VoidToNull()), dart.fn((e, stackTrace) => {
      if (js.context.hasProperty("zappHandlerUserError")) {
        js.context.callMethod("zappHandlerUserError", [e[$toString](), stackTrace.toString()]);
      }
    }, T.ObjectAndStackTraceTovoid()), {zoneSpecification: new async._ZoneSpecification.new({print: dart.fn((self, parent, zone, line) => {
          if (js.context.hasProperty("zappHandlerUserPrint")) {
            js.context.callMethod("zappHandlerUserPrint", [line]);
          }
        }, T.ZoneAndZoneDelegateAndZone__Tovoid())})});
  };
  $46zapp_entry.main = function main$() {
    return async.async(dart.void, function* main() {
      yield ui.webOnlyWarmupEngine({runApp: dart.fn(() => {
          $46zapp_entry.runAppGuarded();
        }, T.VoidToNull()), registerPlugins: dart.fn(() => {
          web_plugin_registrant.registerPlugins();
        }, T.VoidToNull())});
    });
  };
  var Widget_key = dart.privateName(framework, "Widget.key");
  main.MyApp = class MyApp extends framework.StatelessWidget {
    build(context) {
      return new app.MaterialApp.new({darkTheme: theme_data.ThemeData.dark(), theme: theme_data.ThemeData.light(), home: C[1] || CT.C1, debugShowCheckedModeBanner: false});
    }
    static ['_#new#tearOff']() {
      return new main.MyApp.new();
    }
  };
  (main.MyApp.new = function() {
    main.MyApp.__proto__.new.call(this);
    ;
  }).prototype = main.MyApp.prototype;
  dart.addTypeTests(main.MyApp);
  dart.addTypeCaches(main.MyApp);
  dart.setMethodSignature(main.MyApp, () => ({
    __proto__: dart.getMethods(main.MyApp.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(main.MyApp, I[0]);
  var Text_selectionColor = dart.privateName(text, "Text.selectionColor");
  var Text_textHeightBehavior = dart.privateName(text, "Text.textHeightBehavior");
  var Text_textWidthBasis = dart.privateName(text, "Text.textWidthBasis");
  var Text_semanticsLabel = dart.privateName(text, "Text.semanticsLabel");
  var Text_maxLines = dart.privateName(text, "Text.maxLines");
  var Text_textScaleFactor = dart.privateName(text, "Text.textScaleFactor");
  var Text_overflow = dart.privateName(text, "Text.overflow");
  var Text_softWrap = dart.privateName(text, "Text.softWrap");
  var Text_locale = dart.privateName(text, "Text.locale");
  var Text_textDirection = dart.privateName(text, "Text.textDirection");
  var Text_textAlign = dart.privateName(text, "Text.textAlign");
  var Text_strutStyle = dart.privateName(text, "Text.strutStyle");
  var Text_style = dart.privateName(text, "Text.style");
  var Text_textSpan = dart.privateName(text, "Text.textSpan");
  var Text_data = dart.privateName(text, "Text.data");
  main.MyHomePage = class MyHomePage extends framework.StatelessWidget {
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      return new main.MyHomePage.new({key: key});
    }
    build(context) {
      return new scaffold.Scaffold.new({backgroundColor: colors.Colors.white, appBar: new app_bar.AppBar.new({title: new basic.Center.new({child: new basic.Row.new({children: T.JSArrayOfWidget().of([new icon.Icon.new(icons.Icons.traffic), new basic.Center.new({child: C[2] || CT.C2}), new icon.Icon.new(icons.Icons.menu)]), mainAxisAlignment: flex.MainAxisAlignment.spaceAround})}), backgroundColor: colors.Colors.black, foregroundColor: colors.Colors.white}), body: new basic.Center.new({child: new basic.Column.new({crossAxisAlignment: flex.CrossAxisAlignment.center, mainAxisAlignment: flex.MainAxisAlignment.center, children: T.JSArrayOfWidget().of([new basic.SizedBox.new({child: new text.Text.new("Klasse Bravo", {style: new text_style.TextStyle.new({fontSize: 50, color: colors.Colors.black})})}), new basic.SizedBox.new({height: 15}), new basic.SizedBox.new({child: new text.Text.new("Prüfung bis 01.10.2023", {style: new text_style.TextStyle.new({fontSize: 20, color: colors.Colors.black})})}), new basic.SizedBox.new({height: 200, width: 250, child: new image.Image.asset("assets/3098764914.jpg")}), new basic.SizedBox.new({height: 15}), new basic.SizedBox.new({width: 150, height: 30, child: new elevated_button.ElevatedButton.new({onPressed: dart.fn(() => navigator.Navigator.push(dart.dynamic, context, new page.MaterialPageRoute.new({builder: dart.fn(context => C[3] || CT.C3, T.BuildContextToQuestions_Training())})), T.VoidTovoid()), style: new button_style.ButtonStyle.new({backgroundColor: material_state.MaterialStateProperty.all(T.ColorN(), colors.Colors.black)}), child: new basic.Center.new({child: new basic.Row.new({children: T.JSArrayOfWidget().of([new icon.Icon.new(icons.Icons.question_mark), new basic.SizedBox.new({width: 10}), new text.Text.new("Training")])})})})}), new basic.SizedBox.new({height: 5}), new basic.SizedBox.new({width: 150, height: 30, child: new elevated_button.ElevatedButton.new({onPressed: dart.fn(() => dialog.showDialog(dart.dynamic, {context: context, builder: dart.fn(context => new dialog.AlertDialog.new({actions: T.JSArrayOfWidget().of([])}), T.BuildContextToAlertDialog())}), T.VoidTovoid()), style: new button_style.ButtonStyle.new({backgroundColor: material_state.MaterialStateProperty.all(T.ColorN(), colors.Colors.black)}), child: new basic.Center.new({child: new basic.Row.new({children: T.JSArrayOfWidget().of([new icon.Icon.new(icons.Icons.question_mark), new basic.SizedBox.new({width: 10}), new text.Text.new("Prüfung")])})})})})])})}), floatingActionButton: new floating_action_button.FloatingActionButton.new({onPressed: dart.fn(() => {
            navigator.Navigator.push(dart.dynamic, context, new page.MaterialPageRoute.new({builder: dart.fn(context => C[4] || CT.C4, T.BuildContextToFavourites())}));
          }, T.VoidTovoid()), backgroundColor: colors.Colors.yellow._get(700), child: new icon.Icon.new(icons.Icons.star, {color: colors.Colors.black})})});
    }
  };
  (main.MyHomePage.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    main.MyHomePage.__proto__.new.call(this, {key: key});
    ;
  }).prototype = main.MyHomePage.prototype;
  dart.addTypeTests(main.MyHomePage);
  dart.addTypeCaches(main.MyHomePage);
  dart.setMethodSignature(main.MyHomePage, () => ({
    __proto__: dart.getMethods(main.MyHomePage.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(main.MyHomePage, I[0]);
  main.main = function main$0() {
    binding.runApp(new main.MyApp.new());
  };
  web_plugin_registrant.registerPlugins = function registerPlugins() {
  };
  favourites.Favourites = class Favourites extends framework.StatefulWidget {
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      return new favourites.Favourites.new({key: key});
    }
    createState() {
      return new favourites._FavouritesState.new();
    }
  };
  (favourites.Favourites.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    favourites.Favourites.__proto__.new.call(this, {key: key});
    ;
  }).prototype = favourites.Favourites.prototype;
  dart.addTypeTests(favourites.Favourites);
  dart.addTypeCaches(favourites.Favourites);
  dart.setMethodSignature(favourites.Favourites, () => ({
    __proto__: dart.getMethods(favourites.Favourites.__proto__),
    createState: dart.fnType(framework.State$(favourites.Favourites), [])
  }));
  dart.setLibraryUri(favourites.Favourites, I[1]);
  favourites._FavouritesState = class _FavouritesState extends framework.State$(favourites.Favourites) {
    initState() {
      super.initState();
      core.print(favourites.favos);
    }
    build(context) {
      return new scaffold.Scaffold.new({appBar: new app_bar.AppBar.new({title: new basic.Center.new({child: C[5] || CT.C5}), backgroundColor: colors.Colors.black}), body: new basic.Center.new({child: new text.Text.new("Hier sehen sie ihre Favoriten")})});
    }
    static ['_#new#tearOff']() {
      return new favourites._FavouritesState.new();
    }
  };
  (favourites._FavouritesState.new = function() {
    favourites._FavouritesState.__proto__.new.call(this);
    ;
  }).prototype = favourites._FavouritesState.prototype;
  dart.addTypeTests(favourites._FavouritesState);
  dart.addTypeCaches(favourites._FavouritesState);
  dart.setMethodSignature(favourites._FavouritesState, () => ({
    __proto__: dart.getMethods(favourites._FavouritesState.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(favourites._FavouritesState, I[1]);
  dart.defineLazy(favourites, {
    /*favourites.favos*/get favos() {
      return [];
    },
    set favos(value) {}
  }, false);
  questions_training.Questions_Training = class Questions_Training extends framework.StatefulWidget {
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      return new questions_training.Questions_Training.new({key: key});
    }
    createState() {
      return new questions_training._Questions_TrainingState.new();
    }
  };
  (questions_training.Questions_Training.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    questions_training.Questions_Training.__proto__.new.call(this, {key: key});
    ;
  }).prototype = questions_training.Questions_Training.prototype;
  dart.addTypeTests(questions_training.Questions_Training);
  dart.addTypeCaches(questions_training.Questions_Training);
  dart.setMethodSignature(questions_training.Questions_Training, () => ({
    __proto__: dart.getMethods(questions_training.Questions_Training.__proto__),
    createState: dart.fnType(framework.State$(questions_training.Questions_Training), [])
  }));
  dart.setLibraryUri(questions_training.Questions_Training, I[2]);
  var _Questions = dart.privateName(questions_training, "_Questions");
  var _currQuestionAnswers = dart.privateName(questions_training, "_currQuestionAnswers");
  var ___Questions_TrainingState__currQuestionImage = dart.privateName(questions_training, "_#_Questions_TrainingState#_currQuestionImage");
  var _currQuestID = dart.privateName(questions_training, "_currQuestID");
  var _currQuestionRightAnswers = dart.privateName(questions_training, "_currQuestionRightAnswers");
  var _currQuestionImage = dart.privateName(questions_training, "_currQuestionImage");
  var _Enum__name = dart.privateName(core, "_Enum._name");
  var _Enum_index = dart.privateName(core, "_Enum.index");
  var EdgeInsets_bottom = dart.privateName(edge_insets, "EdgeInsets.bottom");
  var EdgeInsets_right = dart.privateName(edge_insets, "EdgeInsets.right");
  var EdgeInsets_top = dart.privateName(edge_insets, "EdgeInsets.top");
  var EdgeInsets_left = dart.privateName(edge_insets, "EdgeInsets.left");
  questions_training._Questions_TrainingState = class _Questions_TrainingState extends framework.State$(questions_training.Questions_Training) {
    get [_currQuestionImage]() {
      let t0;
      t0 = this[___Questions_TrainingState__currQuestionImage];
      return t0 == null ? dart.throw(new _internal.LateError.fieldNI("_currQuestionImage")) : t0;
    }
    set [_currQuestionImage](_currQuestionImage$35param) {
      this[___Questions_TrainingState__currQuestionImage] = _currQuestionImage$35param;
    }
    readJson() {
      return async.async(dart.void, (function* readJson() {
        let random = math.Random.new();
        let response = (yield asset_bundle.rootBundle.loadString("assets/questions.json"));
        let data = (yield convert.json.decode(response));
        let randomNumber = random.nextInt(6);
        this.setState(dart.fn(() => {
          this[_Questions] = core.List.as(dart.dsend(data, '_get', ["questions"]));
          this[_currQuestionImage] = core.String.as(dart.dsend(this[_Questions][$_get](randomNumber), '_get', ["image"]));
          this[_currQuestionAnswers] = core.List.as(dart.dsend(this[_Questions][$_get](randomNumber), '_get', ["answers"]));
          this[_currQuestionRightAnswers] = core.List.as(dart.dsend(this[_Questions][$_get](randomNumber), '_get', ["right_answers"]));
          core.print(this[_currQuestionRightAnswers]);
        }, T.VoidTovoid()));
      }).bind(this));
    }
    getColor(states) {
      let interactiveStates = C[6] || CT.C6;
      if (states[$any](dart.bind(interactiveStates, 'contains'))) {
        return colors.Colors.blue;
      }
      return colors.Colors.black;
    }
    initState() {
      super.initState();
      this[_currQuestionAnswers] = ["", "", ""];
      this[_currQuestionImage] = "";
      this[_currQuestionRightAnswers] = ["", "", ""];
      this.readJson();
    }
    build(context) {
      return new scaffold.Scaffold.new({appBar: new app_bar.AppBar.new({title: new basic.Center.new({child: C[10] || CT.C10}), backgroundColor: colors.Colors.black}), backgroundColor: new ui.Color.new(4291624908), body: new basic.Column.new({crossAxisAlignment: flex.CrossAxisAlignment.center, children: T.JSArrayOfWidget().of([new basic.SizedBox.new({height: 20}), new container.Container.new({margin: new edge_insets.EdgeInsets.only({left: 20}), child: new text.Text.new("Welches Verhalten ist Richtig?", {style: new text_style.TextStyle.new({fontSize: 24, color: colors.Colors.black})})}), new basic.SizedBox.new({height: 20}), new container.Container.new({height: 350, margin: new edge_insets.EdgeInsets.only({left: 20, right: 20}), child: new image.Image.asset(this[_currQuestionImage], {scale: 1, fit: box_fit.BoxFit.cover})}), new basic.SizedBox.new({height: 20}), new basic.Center.new({child: new container.Container.new({margin: new edge_insets.EdgeInsets.only({left: 20, right: 20}), child: new basic.Column.new({crossAxisAlignment: flex.CrossAxisAlignment.start, children: T.JSArrayOfWidget().of([new basic.Row.new({children: T.JSArrayOfWidget().of([new checkbox.Checkbox.new({value: T.boolN().as(this.isChecked[$_get](0)), activeColor: colors.Colors.blue, fillColor: material_state.MaterialStateProperty.resolveWith(T.ColorN(), dart.bind(this, 'getColor')), onChanged: dart.fn(newBool => T.LinkedHashSetOfvoid().from([this.setState(dart.fn(() => {
                              let t2, t1, t0;
                              return T.LinkedHashSetOfboolN().from([(t0 = this.isChecked, t1 = 0, t2 = newBool, t0[$_set](t1, t2), t2)]);
                            }, T.VoidTovoid()))]), T.boolNTovoid())}), new basic.Flexible.new({child: new text.Text.new(core.String.as(this[_currQuestionAnswers][$_get](0)), {style: new text_style.TextStyle.new({color: colors.Colors.black, fontSize: this.fontSizeCheckText})})})])}), new basic.SizedBox.new({height: 15}), new basic.Row.new({children: T.JSArrayOfWidget().of([new checkbox.Checkbox.new({value: T.boolN().as(this.isChecked[$_get](1)), activeColor: colors.Colors.blue, fillColor: material_state.MaterialStateProperty.resolveWith(T.ColorN(), dart.bind(this, 'getColor')), onChanged: dart.fn(newBool => T.LinkedHashSetOfvoid().from([this.setState(dart.fn(() => {
                              let t2, t1, t0;
                              return T.LinkedHashSetOfboolN().from([(t0 = this.isChecked, t1 = 1, t2 = newBool, t0[$_set](t1, t2), t2)]);
                            }, T.VoidTovoid()))]), T.boolNTovoid())}), new basic.Flexible.new({child: new text.Text.new(core.String.as(this[_currQuestionAnswers][$_get](1)), {style: new text_style.TextStyle.new({color: colors.Colors.black, fontSize: this.fontSizeCheckText})})})])}), new basic.SizedBox.new({height: 15}), new basic.Row.new({children: T.JSArrayOfWidget().of([new checkbox.Checkbox.new({value: T.boolN().as(this.isChecked[$_get](2)), activeColor: colors.Colors.blue, fillColor: material_state.MaterialStateProperty.resolveWith(T.ColorN(), dart.bind(this, 'getColor')), onChanged: dart.fn(newBool => T.LinkedHashSetOfvoid().from([this.setState(dart.fn(() => {
                              let t2, t1, t0;
                              return T.LinkedHashSetOfboolN().from([(t0 = this.isChecked, t1 = 2, t2 = newBool, t0[$_set](t1, t2), t2)]);
                            }, T.VoidTovoid()))]), T.boolNTovoid())}), new basic.Flexible.new({child: new text.Text.new(core.String.as(this[_currQuestionAnswers][$_get](2)), {style: new text_style.TextStyle.new({color: colors.Colors.black, fontSize: this.fontSizeCheckText})})})])})])})})})])}), floatingActionButton: new basic.Padding.new({padding: C[11] || CT.C11, child: new basic.Row.new({crossAxisAlignment: flex.CrossAxisAlignment.end, children: T.JSArrayOfWidget().of([new floating_action_button.FloatingActionButton.new({onPressed: dart.fn(() => {
                  this.setState(dart.fn(() => {
                    favourites.favos[$add](this[_currQuestionAnswers]);
                    favourites.favos[$add](this[_currQuestionImage]);
                  }, T.VoidTovoid()));
                }, T.VoidTovoid()), backgroundColor: colors.Colors.yellow._get(700), child: new icon.Icon.new(icons.Icons.star, {color: colors.Colors.black})}), new basic.Expanded.new({child: new container.Container.new()}), new floating_action_button.FloatingActionButton.new({onPressed: dart.fn(() => {
                  if (dart.dtest(dart.dcall(questions_training.eq, [this.isChecked, this[_currQuestionRightAnswers]]))) {
                    core.print("Korrekt");
                  } else {
                    core.print("nicht Korrekt");
                  }
                }, T.VoidTovoid()), backgroundColor: colors.Colors.green, child: new icon.Icon.new(icons.Icons.skip_next, {color: colors.Colors.black})})])})})});
    }
    static ['_#new#tearOff']() {
      return new questions_training._Questions_TrainingState.new();
    }
  };
  (questions_training._Questions_TrainingState.new = function() {
    this[_Questions] = [];
    this[_currQuestionAnswers] = [];
    this[___Questions_TrainingState__currQuestionImage] = null;
    this[_currQuestID] = "";
    this.fontSizeCheckText = 20;
    this.isChecked = [false, false, false];
    this[_currQuestionRightAnswers] = [];
    questions_training._Questions_TrainingState.__proto__.new.call(this);
    ;
  }).prototype = questions_training._Questions_TrainingState.prototype;
  dart.addTypeTests(questions_training._Questions_TrainingState);
  dart.addTypeCaches(questions_training._Questions_TrainingState);
  dart.setMethodSignature(questions_training._Questions_TrainingState, () => ({
    __proto__: dart.getMethods(questions_training._Questions_TrainingState.__proto__),
    readJson: dart.fnType(async.Future$(dart.void), []),
    getColor: dart.fnType(ui.Color, [core.Set$(material_state.MaterialState)]),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setGetterSignature(questions_training._Questions_TrainingState, () => ({
    __proto__: dart.getGetters(questions_training._Questions_TrainingState.__proto__),
    [_currQuestionImage]: core.String
  }));
  dart.setSetterSignature(questions_training._Questions_TrainingState, () => ({
    __proto__: dart.getSetters(questions_training._Questions_TrainingState.__proto__),
    [_currQuestionImage]: core.String
  }));
  dart.setLibraryUri(questions_training._Questions_TrainingState, I[2]);
  dart.setFieldSignature(questions_training._Questions_TrainingState, () => ({
    __proto__: dart.getFields(questions_training._Questions_TrainingState.__proto__),
    [_Questions]: dart.fieldType(core.List),
    [_currQuestionAnswers]: dart.fieldType(core.List),
    [___Questions_TrainingState__currQuestionImage]: dart.fieldType(dart.nullable(core.String)),
    [_currQuestID]: dart.fieldType(core.String),
    fontSizeCheckText: dart.fieldType(core.double),
    isChecked: dart.fieldType(core.List),
    [_currQuestionRightAnswers]: dart.fieldType(core.List)
  }));
  var ListEquality__elementEquality = dart.privateName(equality, "ListEquality._elementEquality");
  dart.defineLazy(questions_training, {
    /*questions_training.eq*/get eq() {
      return T.ListNAndListNTobool().as(dart.bind(C[12] || CT.C12, 'equals'));
    },
    set eq(value) {}
  }, false);
  questions_exam.Questions_Exam = class Questions_Exam extends framework.StatefulWidget {
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      return new questions_exam.Questions_Exam.new({key: key});
    }
    createState() {
      return new questions_exam._Questions_ExamState.new();
    }
  };
  (questions_exam.Questions_Exam.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    questions_exam.Questions_Exam.__proto__.new.call(this, {key: key});
    ;
  }).prototype = questions_exam.Questions_Exam.prototype;
  dart.addTypeTests(questions_exam.Questions_Exam);
  dart.addTypeCaches(questions_exam.Questions_Exam);
  dart.setMethodSignature(questions_exam.Questions_Exam, () => ({
    __proto__: dart.getMethods(questions_exam.Questions_Exam.__proto__),
    createState: dart.fnType(framework.State$(questions_exam.Questions_Exam), [])
  }));
  dart.setLibraryUri(questions_exam.Questions_Exam, I[3]);
  questions_exam._Questions_ExamState = class _Questions_ExamState extends framework.State$(questions_exam.Questions_Exam) {
    build(context) {
      return new scaffold.Scaffold.new({appBar: new app_bar.AppBar.new({title: new basic.Center.new({child: C[14] || CT.C14}), backgroundColor: colors.Colors.black}), backgroundColor: new ui.Color.new(4291624908), body: new basic.Center.new({child: new text.Text.new("Hier sehen sie die Prüfungs Fragen!")})});
    }
    static ['_#new#tearOff']() {
      return new questions_exam._Questions_ExamState.new();
    }
  };
  (questions_exam._Questions_ExamState.new = function() {
    questions_exam._Questions_ExamState.__proto__.new.call(this);
    ;
  }).prototype = questions_exam._Questions_ExamState.prototype;
  dart.addTypeTests(questions_exam._Questions_ExamState);
  dart.addTypeCaches(questions_exam._Questions_ExamState);
  dart.setMethodSignature(questions_exam._Questions_ExamState, () => ({
    __proto__: dart.getMethods(questions_exam._Questions_ExamState.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(questions_exam._Questions_ExamState, I[3]);
  dart.trackLibraries("zapp_user_main", {
    "file:///zapp/project/.zapp_entry.dart": $46zapp_entry,
    "file:///zapp/project/lib/main.dart": main,
    "file:///zapp/project/.dart_tool/dartpad/web_plugin_registrant.dart": web_plugin_registrant,
    "package:flutter_app/favourites.dart": favourites,
    "package:flutter_app/questions_training.dart": questions_training,
    "package:flutter_app/questions_exam.dart": questions_exam
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["/zapp/project/.zapp_entry.dart","/zapp/project/lib/main.dart","/zapp/project/.dart_tool/dartpad/web_plugin_registrant.dart","/zapp/project/lib/favourites.dart","/zapp/project/lib/questions_training.dart","/zapp/project/lib/questions_exam.dart"],"names":[],"mappings":"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","file":"main.js"}');
  // Exports:
  return {
    zapp__project__$46zapp_entry: $46zapp_entry,
    zapp__project__lib__main: main,
    zapp__project__$46dart_tool__dartpad__web_plugin_registrant: web_plugin_registrant,
    favourites: favourites,
    questions_training: questions_training,
    questions_exam: questions_exam
  };
}));

//# sourceMappingURL=main.js.map