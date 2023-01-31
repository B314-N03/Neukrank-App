import 'package:flutter/material.dart';

class Questions_Exam extends StatefulWidget {
  const Questions_Exam({super.key});

  @override
  State<Questions_Exam> createState() => _Questions_ExamState();
}

class _Questions_ExamState extends State<Questions_Exam> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Center(child: const Text('MSG bis DZE / Prüfung')),
        backgroundColor: Colors.black,
      ),
      backgroundColor: Color(0xffccffcc),
      body: Center(
        child: Text("Hier sehen sie die Prüfungs Fragen!")
      ),
    );
  }
}