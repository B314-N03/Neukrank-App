import 'package:flutter/material.dart';
import 'dart:convert';
import 'dart:math';
import 'dart:async' show Future;
import 'package:flutter/services.dart';
import 'package:collection/collection.dart';
import 'package:flutter_app/favourites.dart';


class Questions_Training extends StatefulWidget {
  const Questions_Training({super.key});

  @override
  State<Questions_Training> createState() => _Questions_TrainingState();
}

Function eq = const ListEquality().equals;



class _Questions_TrainingState extends State<Questions_Training> {
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
        title: Center(child: const Text('MSG bis DZE / Training')),
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
                    SizedBox(height: 20),
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
                             subtitle: _currQuestionWrongAnswers[0] ? Text("Diese Antwort ist falsch",style:TextStyle(color:Colors.red)): null,
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
                             subtitle: _currQuestionWrongAnswers[1] ? Text("Diese Antwort ist falsch",style:TextStyle(color:Colors.red)): null,
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
                             subtitle: _currQuestionWrongAnswers[2] ? Text("Diese Antwort ist falsch",style:TextStyle(color:Colors.red)): null,
                             activeColor:  Colors.black,
                             checkColor: Colors.white,
                             controlAffinity: ListTileControlAffinity.leading,
                             ),
                           ),                 
                        ]),),
                    )
              ],
          ),
        
    floatingActionButton:Padding(
      padding: const EdgeInsets.only(left:30),
      child: Row(
        crossAxisAlignment:CrossAxisAlignment.end,
        children: [
          FloatingActionButton(
            onPressed: () {
              setState(() {
                favos.add(_currQuestionAnswers);
                favos.add(_currQuestionImage);
              });
              },
              backgroundColor: Colors.yellow[700],
              child: Icon(
                Icons.star,
                color: Colors.black,),
              ),
          Expanded(child:Container()),
          FloatingActionButton(
            onPressed: () {
              if(wrongShown.toString() == true.toString()){
               setState(() {
                 _currQuestionWrongAnswers[0] = false;
                 _currQuestionWrongAnswers[1] = false;
                 _currQuestionWrongAnswers[2] = false;
                 isChecked[0] = false;
                 isChecked[1] = false;
                 isChecked[2] = false;
                wrongShown = false;
               },);
               readJson();
              }
              else{
              if(eq(isChecked,_currQuestionRightAnswers)){
                 setState(() {
                 _currQuestionWrongAnswers[0] = false;
                 _currQuestionWrongAnswers[1] = false;
                 _currQuestionWrongAnswers[2] = false;
                 isChecked[0] = false;
                 isChecked[1] = false;
                 isChecked[2] = false;
               },);
               readJson();
              }
              else{
                if(isChecked[0].toString() != _currQuestionRightAnswers[0].toString()){
                setState(() {  
                  _currQuestionWrongAnswers[0] = true;
                });
                }
                if(isChecked[1].toString() != _currQuestionRightAnswers[1].toString()){
                  _currQuestionWrongAnswers[1] = true;
                }
                if(isChecked[2].toString() != _currQuestionRightAnswers[2].toString()){
                  _currQuestionWrongAnswers[2] = true;
                }
                setState(() {
                  wrongShown = true;
                });
              }
              }
              },
              backgroundColor: Colors.green,
              child: Icon(
                Icons.skip_next,
                color: Colors.black,
              ),),
        ],
      ),
    )
    );
  }
}
