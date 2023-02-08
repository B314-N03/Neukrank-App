import 'package:flutter/material.dart';

class Splash extends StatefulWidget {
  @override
  State<Splash> createState() => SplashState();
}

class SplashState extends State<Splash> {
  @override
  Widget build(BuildContext context) {
    return 
        Scaffold(
          backgroundColor: Colors.white,
          appBar: AppBar(
            title: Center(
              child: Row(children: [
              Icon(Icons.traffic),
              Center(child : const Text("MSG bis DZE")),
              Icon(Icons.menu)
            ],mainAxisAlignment: MainAxisAlignment.spaceAround,)),
            backgroundColor:Colors.black,
            foregroundColor: Colors.white,
          ),
          body: 
          Center(
            child:
           Column(
              crossAxisAlignment: CrossAxisAlignment.center,
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                SizedBox(child: Text("Klasse Bravo",style: TextStyle(fontSize:50,color:Colors.black),)),
                SizedBox(child: Text("Prüfung bis 01.10.2023",style: TextStyle(fontSize:20,color:Colors.black),)),
                SizedBox(height: 15,),
                SizedBox(height: 250,width: 250,child: Image.asset("assets/logo_v1.png")),
            ],
          )
            ),
    );
  }
}
