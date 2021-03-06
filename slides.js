var slides = []

slides[0] = {
  _id : 1,
  Titel : {
    en : 'Introduction to MongoDB',
    de : 'Einführung in MongoDB'
  },
  Präsentatoren : [
    {
      Name : 'Rocco Schulz',
      Firma : 'IBM',
      Studiengang : 'IBIM 2010',
      Kontakt : 'rocco@is-gr8.com'
    }, {
      Name : 'Robert Wawrzyniak',
      Firma : 'IBḾ',
      Studiengang : 'IBIM 2010',
      Kontakt : 'robert-waw@fb4.de'
    }] 
}

slides[1] = {
  _id : 2,
  Titel : 'Agenda',
  TOC : [
    'Definitionen',
    'Konzepte: RDBMS vs. MongoDB',
    'Was ist MongoDB?',
    'Nutzungsszenarien',
    'Installation & Konfiguration',
    'CRUD Operationen',
    'Monitoring',
    'Ressource'
  ]
}

slides[2] = {
  _id : 3,
  Titel : 'Definitionen',
  Begriffe : [
    'NoSQL',
    'RDBMS (Relational Database Management System)',
    'JSON (JavaScript Object Notation)',
    'Dokumenten-orientierte Datenbank'
  ]
}

slides[3] = {
  _id : 4,
  Titel : 'Konzepte: RDBMS vs. MongoDB',
  Begriffe : [
  {SQL: 'row', MongoDB: 'document'},
  {SQL: 'column',  MongoDB: 'field'},
  {SQL: 'table joins', MongoDB: 'embedded documents and linking'}
  ]
}

slides[4] = {
  _id : 5,
  Titel : 'Was ist MongoDB?',
  Attribute : [
    'Dokumenten-orientiert',
    'Speichert als BSON (Binary JSON)',
    'Memory-mapped IO zur Leistungsverbesserung',
    {
      Stärken : [
	'Hoch-skalierbar',
	'Hoch-verfügbar',
	'Sehr flexibel (schemalos)',
	'Einfach zu Nutzen'
      ]
    },
    {
      Schwächen : [
	'Keine nativen Transaktionen'
      ]
    },
    {
      Philosophie : 'One size does not fit all.'
    }
  ]
}

slides[5] = {
  _id : 6,
  Titel : 'Nutzungsszenarien',
  Beispiele : [
    'Analytik mittlerer Datenmengen',
    'Web-Anwendungen',
    'Caching',
    'Auswertung von Logs'
  ]
}

slides[6] = {
  _id : 7,
  Titel : 'Installation & Konfiguration',
  Installation : [
    {
      Linux : 'Packetmanager'
    },
    {
	Windows : 'Installationspaket'
    }
  ],
  Konfiguration : [
    'Kommandozeilenparameter',
    'Konfigurationsdatei'
  ]
}

slides[7] = {
  _id : 8,
  Titel : 'CRUD',
  Operationen : [
    'Create',
    'Read',
    'Update',
    'Delete'
  ]
}

slides[8] = {
  _id : 9,
  Titel : 'Create',
  Einzelne_Dokumente : 'db.collection.insert(<document>)',
  Mehrere_Dokumente : 'db.collection.insert(<array of documents>)'
}

slides[9] = {
  _id : 10,
  Titel : 'Read',
  Abfrage : 'db.collection.find( <query>, <projection> )',
  Indizierung : 'db.collection.ensureIndex( { field: 1 } )'
}

slides[10] = {
  _id : 11,
  Titel : 'Update',
  Einzelne_Dokumente : 'db.collection.update( <query>, <update>, <options> )',
  Mehrere_Dokumente : 'db.collection.update( <query>, <update>, <options> )'
}

slides[11] = {
  _id : 12,
  Titel : 'Delete',
  Einzelne_Dokumente : 'db.collection.remove(<query>, <justOne>)'
}

slides[12] = {
  _id : 13,
  Titel : 'Überwachung',
  'Kommandozeilenschnittstelle (CLI)' : [
    'db.stats()',
    'db.serverStatus()'
  ],
  Werkzeuge : [
    'mongotop',
    'mongostat',
    'REST Konsole',
    'begrenzte Auswahl graphischer Anwendungen'
  ]
}

slides[13] = {
  _id : 14,
  Titel : 'Ressourcen',
  Antworten : [
    'db.help() in der Mongo-Kommandozeile eingeben',
    'man mongo',
    'http://docs.mongodb.org/manual/'
  ]
}

slides[14] = {
  _id : 15,
  Titel : 'präsentation[-1]',
  Botschaft : 'Vielen Dank für Ihre Aufmerksamkeit!',
  Verabschiedung : 'Wir wünschen Ihnen einen schönen Tag.'
}

db.folien.insert(slides)
