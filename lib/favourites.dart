import 'package:flutter/material.dart';

List favos = [];

class Favourites extends StatefulWidget {
  const Favourites({super.key});
  @override
  State<Favourites> createState() => _FavouritesState();
}


class _FavouritesState extends State<Favourites> {
  @override
void initState() {
    // TODO: implement initState
    super.initState();
    print(favos);
  }
  Widget build(BuildContext context) {
    return Scaffold(appBar: AppBar(
      title: Center(child: const Text('MSG bis DZE / Favoriten')),
        backgroundColor: Colors.black,
    ),
    body: Center(
    child: Text("Hier sehen sie ihre Favoriten")),
    );
  }
}