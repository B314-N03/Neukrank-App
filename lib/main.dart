import 'package:flutter/material.dart';
import 'package:flutter_app/favourites.dart';
import 'package:flutter_app/questions_training.dart';
import 'package:flutter_app/questions_exam.dart';
import 'package:google_nav_bar/google_nav_bar.dart';
import 'package:flutter_app/splash.dart';

int currIndex = 2;

void main() {
  runApp(App());
}

class App extends StatelessWidget{
  @override
   Widget build(BuildContext context) {
    return MaterialApp(
      darkTheme: ThemeData.dark(),
      theme: ThemeData.light(),
      home: MyApp(),
      debugShowCheckedModeBanner: false,
    );
  }

}
class MyApp extends StatefulWidget {
  @override
  State<MyApp> createState() => _MyAppState();
}


class _MyAppState extends State<MyApp> {
  int currentindex = 0;
  int oldIndex = 0;
  List<Widget> widgetlist = [
    Splash(),
    Questions_Training(),
    Questions_Exam(),
    Favourites(),
  ];

  @override
  Widget build(BuildContext context){
    return MaterialApp(
      debugShowCheckedModeBanner:false,
      home:
      Scaffold(
      body: widgetlist[currentindex],
      bottomNavigationBar: Container(
        color:Colors.black,
        child: 
              GNav(
                backgroundColor:Colors.black,
                color:Colors.white,
                activeColor:Colors.white,
                gap:8,
                onTabChange:(index) => {
                    if(index == 2 && currentindex != index){
                      showDialog(
                        context: context,
                        builder: (context) => AlertDialog( 
                          title:Text("Bist du dir Sicher?"),
                          content: Text("Spaß, juckt mich doch nicht wenn du schlecht bist xD"),
                          actions: [
                            TextButton(
                            child:Text("Abbrechen") ,
                            onPressed: () =>{
                              Navigator.pop(context),
                              setState(() {
                                currentindex = oldIndex;
                              },)
                            },),
                            TextButton(
                            child:Text("Zur Prüfung") ,
                            onPressed: () =>{
                              Navigator.pop(context),
                              setState(() {
                              oldIndex = currentindex;
                              currentindex = index;
                              },)
                            },)
                          ],                    
                          )
                      ),
                    }
                    else{
                      setState(() {
                      oldIndex = currentindex;
                      currentindex = index;
                      },)
                    }
                } ,
                tabs: [
                  GButton(
                  icon: Icons.home,
                  text: 'Home',
                  ),
                  GButton(
                    icon: Icons.question_mark,
                    text: 'Training',
                  ),
                  GButton(
                    icon: Icons.book,
                    text: 'Exam',
                  ),
                  GButton(
                    icon: Icons.favorite,
                    text: 'Favorites'
                  ),
                ],
              ),
          ),
      ),
    );
  }
}