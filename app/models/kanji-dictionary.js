function KanjiDictionary() {
  this.characters = [];
  this.viewed_characters = [];

  this.initCharacters();
  this.loadViewedCharactersDb();
  Mojo.Log.info("Viewed characters list: " + this.viewed_characters.join(", "));
}

KanjiDictionary.prototype.markAsSeen = function(character) {
  Mojo.Log.info("Adding " + character.text + " to the viewed character list");
  this.viewed_characters = this.viewed_characters.push(character.text);
  this.db.add("viewedCharacters", this.viewed_characters, function() {Mojo.Log.info("Viewed characters saved ok");},
    function() {Mojo.Log.info("Could not save viewed characters");}
  );
};

KanjiDictionary.prototype.getCharacter = function() {
  var char_to_show = this.characters[Math.floor(Math.random() * this.characters.length)];
  this.markAsSeen(char_to_show);
  return char_to_show;
};

KanjiDictionary.prototype.initCharacters = function() {
  var self = this;
  characters = [ // eventually load these from a file
    "A", "B", "C"
 //   "手",
 //   "娃",
 //   "荏"
  ];
  characters.forEach(function(character) {
    self.characters.push({text: character});
  });
};

KanjiDictionary.prototype.initViewedCharacters = function(viewed_chars_from_db) {
  evaled_viewed_chars = eval(viewed_chars_from_db)
  Mojo.Log.info("initViewedCharacters");
  Mojo.Log.info("initViewedCharacters evaled_viewed_chars: " + evaled_viewed_chars)
  Mojo.Log.info("initViewedCharacters typeof evaled_viewed_chars: " + typeof(evaled_viewed_chars));
  Mojo.Log.info("initViewedCharacters constructor: " + (typeof(evaled_viewed_chars)).constructor);
  evaled_viewed_chars.forEach(function(character) {
    self.viewed_characters.push({text: character});
  });
};

KanjiDictionary.prototype.loadViewedCharactersDb = function() {
  this.db = new Mojo.Depot(
    {name:'viewedCharactersDB', version:1, estimatedSize: 100000, replace: false},
    this.loadViewedCharactersDbOpenOk.bind(this),
    function(result) {
      Mojo.Log.info("Can't open viewed characters database: ", result);
    }
  );
};

KanjiDictionary.prototype.loadViewedCharactersDbOpenOk = function() {
  Mojo.Log.info("Able to open viewed characters database");
  this.db.get("viewedCharacters", this.loadViewedCharactersDbGetSuccess.bind(this), this.loadViewedCharactersDbUseDefault.bind(this));
};

KanjiDictionary.prototype.loadViewedCharactersDbGetSuccess = function(f1) {
  Mojo.Log.info("LOAD SUCCESSSSSS");
  Mojo.Log.info("typeof f1: " + typeof(f1));
  Mojo.Log.info("constructor: " + (typeof(f1)).constructor);
  if (f1 === null) {
    Mojo.Log.info("Retrieved empty or null list from DB");
    this.loadViewedCharactersDbUseDefault();
  } else {
    Mojo.Log.info("Retrieved viewed characters from database.");
    this.initViewedCharacters(f1);  
  }
};

KanjiDictionary.prototype.loadViewedCharactersDbUseDefault = function() {
  Mojo.Log.info("LOAD FAILLLLL")
  Mojo.Log.info("Database has no viewed characters list. Will use empty list");
  this.viewed_characters = [];
};