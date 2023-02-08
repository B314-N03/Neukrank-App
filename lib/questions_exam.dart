import 'package:flutter/material.dart';
import 'package:flutter_countdown_timer/flutter_countdown_timer.dart';
import 'package:collection/collection.dart';
import 'dart:math';
import 'dart:async' show Future;
import 'dart:convert';
import 'package:flutter/services.dart';

int endTime = DateTime.now().millisecondsSinceEpoch + 1000 * 300;
int currQuest = 1;
Function eq = const ListEquality().equals;

class Questions_Exam extends StatefulWidget {
  const Questions_Exam({super.key});

  @override
  State<Questions_Exam> createState() => _Questions_ExamState();
}

class _Questions_ExamState extends State<Questions_Exam> {
 List  _Questions = [];
  List _currQuestionAnswers = [];
  late String _currQuestionImage;
  String _currQuestID = "";
  double fontSizeCheckText = 20.0;
  List isChecked = [false,false,false];
  List _currQuestionRightAnswers = [];
  List _currQuestionWrongAnswers = [false,false,false];
  bool wrongShown = false;
  Future<void> readJson() async {
    Random random = new Random();
    final response = await rootBundle.loadString('assets/questions.json');
    final data = await json.decode(response);
    int randomNumber = random.nextInt(5);
    setState(() {
      _Questions = data["questions"];
      _currQuestionImage = _Questions[randomNumber]["image"];
      _currQuestionAnswers = _Questions[randomNumber]["answers"];
      _currQuestionRightAnswers = _Questions[randomNumber]["right_answers"];
    });
  }
  
Color getColor(Set<MaterialState> states) {
      const Set<MaterialState> interactiveStates = <MaterialState>{
        MaterialState.selected,
        MaterialState.focused,
        MaterialState.pressed,
      };
      if (states.any(interactiveStates.contains)) {
        return Colors.blue;
      }
      return Colors.black;
    }

  @override
  void initState(){
    super.initState();
    _currQuestionImage = "";
    _currQuestionAnswers =      ["","",""];
    _currQuestionRightAnswers = ["","",""];
    readJson();

  }
  Widget build(BuildContext context) {
    double currWidth = MediaQuery.of(context).size.width;
    double currHeight = MediaQuery.of(context).size.height;
    return Scaffold(
      appBar: AppBar(

        title:Row(
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
          crossAxisAlignment: CrossAxisAlignment.center,
          children: [
                CountdownTimer(
                  endTime: endTime,
                  endWidget: SizedBox(),
                  onEnd: () => {
                    print("done")
                  }
                ),
                Text('MSG bis DZE / Prüfung'),
                Container(
                  margin: EdgeInsets.only(top: 5.0),
                    child: 
                      Text("Frage $currQuest / 10",style:TextStyle(fontSize: 15) )
                ),
        ],
        ),
        backgroundColor: Colors.black,
      ),
      backgroundColor: Color(0xffccffcc),

      body: 
          Column(
            crossAxisAlignment: CrossAxisAlignment.center,
            children: [
                    SizedBox(height: 20),
                Container(
                  margin: EdgeInsets.only(left: 20.0),
                  child: 
                    Text("Welches Verhalten ist Richtig?",style: TextStyle(fontSize:24,color: Colors.black)),
                ),
                SizedBox(height:5),

                    SizedBox(height: 15),
                    Container(height:300,width:currWidth,margin: EdgeInsets.only(left: 20.0,right: 20.0),child:Image.asset(_currQuestionImage,scale: 1.0,fit: BoxFit.cover,),),
                    currHeight > currWidth ? SizedBox(height:15) : SizedBox(height:50),
                    Center(
                      child: Container( 
                        margin: EdgeInsets.only(left:20.0,right:20.0),
                        child:
                      Column(
                        crossAxisAlignment:CrossAxisAlignment.start,
                        children:[
                           Theme(
                            data : ThemeData(unselectedWidgetColor:Colors.black),
                             child: CheckboxListTile(
                              contentPadding: EdgeInsets.all(0),
                          title:Text(_currQuestionAnswers[0],
                          style:TextStyle(
                                color:Colors.black,
                                fontSize:
                                currHeight > currWidth ? fontSizeCheckText : 30.0
                                )),
                             value: isChecked[0],
                             onChanged: (newBool){
                              setState(() {
                                isChecked[0] = newBool;
                              });
                             },
                             activeColor:  Colors.blue,
                             checkColor: Colors.black,
                             controlAffinity: ListTileControlAffinity.leading,
                             ),
                           ),
                        SizedBox(height:15),
                       Theme(
                            data : ThemeData(unselectedWidgetColor:Colors.black),
                             child: CheckboxListTile(
                              contentPadding: EdgeInsets.all(0),
                          title:Text(_currQuestionAnswers[1],
                          style:TextStyle(
                                color:Colors.black,
                                fontSize:currHeight > currWidth ? fontSizeCheckText : 30.0
                                )),
                             value: isChecked[1],
                             onChanged: (newBool){
                              setState(() {
                                isChecked[1] = newBool;
                              });
                             },
                             activeColor:  Colors.blue,
                             checkColor: Colors.white,
                             controlAffinity: ListTileControlAffinity.leading,
                             ),
                           ),          
                        SizedBox(height:15),
                        Theme(
                            data : ThemeData(unselectedWidgetColor:Colors.black),
                             child: CheckboxListTile(
                              contentPadding: EdgeInsets.all(0),
                          title:Text(_currQuestionAnswers[2],
                          style:TextStyle(
                                color:Colors.black,
                                fontSize:currHeight > currWidth ? fontSizeCheckText : 30.0
                                )),
                             value: isChecked[2],
                             onChanged: (newBool){
                              setState(() {
                                isChecked[2] = newBool;
                              });
                             },
                             activeColor:  Colors.black,
                             checkColor: Colors.white,
                             controlAffinity: ListTileControlAffinity.leading,
                             ),
                           ),                 
                        ]),),
                    )
              ],
          ),
        
    floatingActionButton:
          FloatingActionButton(
            onPressed: () {
                 setState(() {
                 isChecked[0] = false;
                 isChecked[1] = false;
                 isChecked[2] = false;
                 if(currQuest != 10){
                 currQuest = currQuest+1;
                 }
                 else{
                  showDialog(
                        context: context,
                        builder: (context) => AlertDialog( 
                          title:Text("Guter Durchgang!"),
                          content: Text("Nochmal probieren oder zur Startseite gehen?"),
                          actions: [
                            TextButton(
                            child:Text("zur Startseite") ,
                            onPressed: () =>{
                              Navigator.pop(context),
                              setState(() {
                                
                              },)
                            },),
                            TextButton(
                            child:Text("Nochmal") ,
                            onPressed: () =>{
                              Navigator.pop(context),
                              setState(() {
                              
                              },)
                            },)
                          ],                    
                ));}
               },);
               readJson();
              },
              backgroundColor: Colors.green,
              child: Icon(
                Icons.skip_next,
                color: Colors.black,
              ),),
    );
  }
}