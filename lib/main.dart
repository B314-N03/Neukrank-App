import 'package:flutter/material.dart';
import 'package:flutter_app/favourites.dart';
import 'package:flutter_app/questions_training.dart';
import 'package:flutter_app/questions_exam.dart';



class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      darkTheme: ThemeData.dark(),
      theme: ThemeData.light(),
      home: const MyHomePage(),
      debugShowCheckedModeBanner: false,
    );
  }
}

class MyHomePage extends StatelessWidget {
  const MyHomePage({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.white,
      appBar: AppBar(
        title: Center(
          child: Row(children: [
          Icon(Icons.traffic),
          Center(child : const Text("MSG bis DZE")),
          Icon(Icons.menu)
        ],mainAxisAlignment: MainAxisAlignment.spaceAround,)),
        backgroundColor: Colors.black,
        foregroundColor: Colors.white,
      ),
      body: Center(
        child:
       Column(
          crossAxisAlignment: CrossAxisAlignment.center,
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            SizedBox(child: Text("Klasse Bravo",style: TextStyle(fontSize:50,color:Colors.black),)),
            SizedBox(height: 15),
            SizedBox(child: Text("Prüfung bis 01.10.2023",style: TextStyle(fontSize:20,color:Colors.black),)),
            SizedBox(height: 200,width: 250,child: Image.asset("assets/3098764914.jpg")),
            SizedBox(height: 15,),
            SizedBox(width: 150,height: 30,
              child:  ElevatedButton(onPressed: (() => Navigator.push(context,MaterialPageRoute(builder: (context) => const Questions_Training()))),style: ButtonStyle(backgroundColor: MaterialStateProperty.all(Colors.black)), 
                  child: Center(
                      child: Row(children: [
                      Icon(Icons.question_mark),
                      SizedBox(width: 10),
                      Text("Training")
                      ],) 
                  )
               ),),
            SizedBox(height: 5),
            SizedBox(width: 150,height: 30,
              child:  ElevatedButton(
                onPressed: (() => showDialog(
                  context: context,
                  builder: (context) => AlertDialog( 
                    actions: [],
                    
                    )
                  )),
                  style: ButtonStyle(backgroundColor: MaterialStateProperty.all(Colors.black)), 
                  child: Center(
                      child: Row(children: [
                      Icon(Icons.question_mark),
                      SizedBox(width: 10),
                      Text("Prüfung"),
                      ],) 
                  )
               ),),
        ],
      )
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: () {
          Navigator.push(context,MaterialPageRoute(builder: (context) => const Favourites()));
        },
        backgroundColor: Colors.yellow[700],
        child: Icon(
          Icons.star,
          color: Colors.black,
        ),
      ),
    );
  }
}

void main() {
  runApp(MyApp());
}
