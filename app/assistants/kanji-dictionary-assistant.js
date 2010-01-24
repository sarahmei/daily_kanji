function KanjiDictionaryAssistant() {
  
}

KanjiDictionaryAssistant.prototype.setup = function () {

 // this.controller.setupWidget('kanjilist', {
 //   listTemplate: 'kanji-dictionary/list',
 //   itemTemplate: 'kanji-dictionary/item',
 //   itemsProperty: 'characters'
 // },
 // this.kanjiDictionary);

  this.kanjiDictionary = new KanjiDictionary();
  var kanjiDictionaryCharacterElement = this.controller.get('kanjiDictionaryCharacter');
  kanjiDictionaryCharacterElement.innerHTML = this.kanjiDictionary.getCharacter().text;
};

KanjiDictionaryAssistant.prototype.activate = function () {
};

KanjiDictionaryAssistant.prototype.deactivate = function () {
};

KanjiDictionaryAssistant.prototype.cleanup = function () {
};

KanjiDictionaryAssistant.prototype.onStageActivate = function () {
};

KanjiDictionaryAssistant.prototype.onStageDeactivate = function () {
};