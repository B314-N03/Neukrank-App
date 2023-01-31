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

    Future<void> readJson() async {
    Random random = new Random();
    final response = await rootBundle.loadString('assets/questions.json');
    final data = await json.decode(response);
    int randomNumber = random.nextInt(6);
    setState(() {
      _Questions = data["questions"];
      _currQuestionImage = _Questions[randomNumber]["image"];
      _currQuestionAnswers = _Questions[randomNumber]["answers"];
      _currQuestionRightAnswers = _Questions[randomNumber]["right_answers"];
      print(_currQuestionRightAnswers);
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
    _currQuestionAnswers = ["","",""];
    _currQuestionImage = "";
    _currQuestionRightAnswers = ["","",""];
    readJson();

  }
  Widget build(BuildContext context) {
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
                    Container(height:350,margin: EdgeInsets.only(left: 20.0,right: 20.0),child:Image.asset(_currQuestionImage,scale: 1.0,fit: BoxFit.cover,),),
                    SizedBox(height:20),
                    Center(
                      child: Container( 
                        margin: EdgeInsets.only(left:20.0,right:20.0),
                        child:
                      Column(
                        crossAxisAlignment:CrossAxisAlignment.start,
                        children:[
                          
                        Row(
                          children: [
                            Checkbox(
                              value:isChecked[0],
                              activeColor: Colors.blue,
                              fillColor:MaterialStateProperty.resolveWith(getColor),
                              onChanged:(newBool) => {
                                setState(() => {
                                  isChecked[0] = newBool
                                })
                              }
                            ),
                            Flexible(
                              child:
                            Text(_currQuestionAnswers[0],style:TextStyle(color:Colors.black,fontSize:fontSizeCheckText)),
                            )
                          ],
                        ),
                        SizedBox(height:15),
                        Row(
                          children: [
                            Checkbox(
                              value:isChecked[1],
                              activeColor: Colors.blue,
                              fillColor:MaterialStateProperty.resolveWith(getColor),
                              onChanged:(newBool) => {
                                setState(() => {
                                isChecked[1] = newBool
                                })
                              }
                            ),
                        Flexible(
                              child:
                            Text(_currQuestionAnswers[1],style:TextStyle(color:Colors.black,fontSize:fontSizeCheckText)),
                            )                          ],
                        ),                        SizedBox(height:15),
                        Row(
                          children: [
                            Checkbox(
                              value:isChecked[2],
                              activeColor: Colors.blue,
                              fillColor:MaterialStateProperty.resolveWith(getColor),
                              onChanged:(newBool) => {
                                setState(() => {
                                isChecked[2] = newBool
                                })
                              }
                            ),
                          Flexible(
                              child:
                            Text(_currQuestionAnswers[2],style:TextStyle(color:Colors.black,fontSize:fontSizeCheckText)),
                            )                          ],
                        ),                      ]),),
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
              if(eq(isChecked,_currQuestionRightAnswers)){
                print("Korrekt");
              }
              else{
                print("nicht Korrekt");
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
