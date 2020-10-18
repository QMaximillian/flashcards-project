
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
          {"id": "cc92181f-50c6-4829-96fa-4d92563737c9",
            "email": "1234@gmail.com",
            "password": "$2b$10$JK6zd77aYTdUAq2CGWRqxOBSPrkV8oaL/dfSyW4tDsDvFvyhRXPgC",
            "first_name": "Quinn",
            "last_name": "Lashinsky",
            "created_at": "2020-01-19T9:00:00Z",
            "updated_at": "2020-01-19T9:00:00Z",
            "username": "QuinnMax"
          },
          {"id":"d5c549a2-91da-4cdf-9ec4-6c9f8e14b1da","email":"rkrienke0@cpanel.net","last_name":"Krienke","first_name":"Ree","created_at":"2019-04-12 03:25:37","updated_at":"2019-04-12 03:25:37","username":"rkrienke0","password":"$2b$10$JK6zd77aYTdUAq2CGWRqxOBSPrkV8oaL/dfSyW4tDsDvFvyhRXPgC"},
{"id":"0af78e58-1c35-4b6c-9566-35eae5dd0f5d","email":"jluscott1@mtv.com","last_name":"Luscott","first_name":"Jourdan","created_at":"2019-02-23 04:57:48","updated_at":"2019-02-23 04:57:48","username":"jluscott1","password":"$2b$10$JK6zd77aYTdUAq2CGWRqxOBSPrkV8oaL/dfSyW4tDsDvFvyhRXPgC"},
{"id":"c76e0d4e-c6ad-4db3-8703-bd00c41b4621","email":"bprobet2@ebay.co.uk","last_name":"Probet","first_name":"Benoit","created_at":"2019-03-07 22:05:36","updated_at":"2019-03-07 22:05:36","username":"bprobet2","password":"$2b$10$JK6zd77aYTdUAq2CGWRqxOBSPrkV8oaL/dfSyW4tDsDvFvyhRXPgC"},

{"id":"966ac95d-3423-41bd-95fd-3535884c4a13","email":"splumbley3@paypal.com","last_name":"Plumbley","first_name":"Stillmann","created_at":"2019-04-09 20:51:26","updated_at":"2019-04-09 20:51:26","username":"splumbley3","password":"$2b$10$JK6zd77aYTdUAq2CGWRqxOBSPrkV8oaL/dfSyW4tDsDvFvyhRXPgC"},

{"id":"a30c1ec4-c64d-481e-bf3f-26bed11d5fdd","email":"jtweedlie4@typepad.com","last_name":"Tweedlie","first_name":"Jeanine","created_at":"2019-03-18 10:43:00","updated_at":"2019-03-18 10:43:00","username":"jtweedlie4","password":"$2b$10$JK6zd77aYTdUAq2CGWRqxOBSPrkV8oaL/dfSyW4tDsDvFvyhRXPgC"},

{"id":"80360faf-81de-410e-a9e9-d9c6f37bb9b7","email":"cgrovier5@netlog.com","last_name":"Grovier","first_name":"Crichton","created_at":"2019-05-25 02:21:23","updated_at":"2019-05-25 02:21:23","username":"cgrovier5","password":"$2b$10$JK6zd77aYTdUAq2CGWRqxOBSPrkV8oaL/dfSyW4tDsDvFvyhRXPgC"},

{"id":"e00ba377-f377-4f1f-b5bd-d9ad80a7aff2","email":"cgregol6@wikipedia.org","last_name":"Gregol","first_name":"Candy","created_at":"2019-05-26 16:28:26","updated_at":"2019-05-26 16:28:26","username":"cgregol6","password":"$2b$10$JK6zd77aYTdUAq2CGWRqxOBSPrkV8oaL/dfSyW4tDsDvFvyhRXPgC"},

{"id":"ddc85a69-1727-48d6-9cf6-463f9151d788","email":"osommerville7@blog.com","last_name":"Sommerville","first_name":"Olympie","created_at":"2019-08-25 08:22:44","updated_at":"2019-08-25 08:22:44","username":"osommerville7","password":"$2b$10$JK6zd77aYTdUAq2CGWRqxOBSPrkV8oaL/dfSyW4tDsDvFvyhRXPgC"},

{"id":"1dbb814f-c678-4b0d-85d8-e08a262b8cb4","email":"lcastiglione8@yale.edu","last_name":"Castiglione","first_name":"Lorne","created_at":"2019-09-23 00:54:50","updated_at":"2019-09-23 00:54:50","username":"lcastiglione8","password":"$2b$10$JK6zd77aYTdUAq2CGWRqxOBSPrkV8oaL/dfSyW4tDsDvFvyhRXPgC"},

{"id":"1cd23218-b2f1-4ada-b8af-5a5b4b9f7c39","email":"rlandis9@bbc.co.uk","last_name":"Landis","first_name":"Renee","created_at":"2019-05-06 15:21:26","updated_at":"2019-05-06 15:21:26","username":"rlandis9","password":"$2b$10$JK6zd77aYTdUAq2CGWRqxOBSPrkV8oaL/dfSyW4tDsDvFvyhRXPgC"},

{"id":"df44f322-efba-4479-b231-e5b0cf8737b0","email":"apellinga@cornell.edu","last_name":"Pelling","first_name":"Alvina","created_at":"2019-06-22 19:05:02","updated_at":"2019-06-22 19:05:02","username":"apellinga","password":"$2b$10$JK6zd77aYTdUAq2CGWRqxOBSPrkV8oaL/dfSyW4tDsDvFvyhRXPgC"},

{"id":"490b4bd9-f801-4935-bab2-170437d85534","email":"pkellartb@gov.uk","last_name":"Kellart","first_name":"Patti","created_at":"2019-04-05 19:13:15","updated_at":"2019-04-05 19:13:15","username":"pkellartb","password":"$2b$10$JK6zd77aYTdUAq2CGWRqxOBSPrkV8oaL/dfSyW4tDsDvFvyhRXPgC"},

{"id":"2bae5a3a-52c6-4cce-9cd0-706819b46850","email":"csherc@g.co","last_name":"Sher","first_name":"Cal","created_at":"2019-02-27 14:18:33","updated_at":"2019-02-27 14:18:33","username":"csherc","password":"$2b$10$JK6zd77aYTdUAq2CGWRqxOBSPrkV8oaL/dfSyW4tDsDvFvyhRXPgC"},

{"id":"e39c43e0-2296-4fe5-8f1e-91d114c3b822","email":"eaylind@army.mil","last_name":"Aylin","first_name":"Elvin","created_at":"2019-07-02 08:36:36","updated_at":"2019-07-02 08:36:36","username":"eaylind","password":"$2b$10$JK6zd77aYTdUAq2CGWRqxOBSPrkV8oaL/dfSyW4tDsDvFvyhRXPgC"},

{"id":"5d05f2a7-9399-4626-8568-dc655d5ac06d","email":"tmerriganse@amazon.co.uk","last_name":"Merrigans","first_name":"Trixy","created_at":"2019-08-09 12:17:00","updated_at":"2019-08-09 12:17:00","username":"tmerriganse","password":"$2b$10$JK6zd77aYTdUAq2CGWRqxOBSPrkV8oaL/dfSyW4tDsDvFvyhRXPgC"},

{"id":"493d491f-97e4-4b0b-9c2d-478c5ae32ccc","email":"hsturzakerf@tinyurl.com","last_name":"Sturzaker","first_name":"Harp","created_at":"2019-05-14 04:10:08","updated_at":"2019-05-14 04:10:08","username":"hsturzakerf","password":"$2b$10$JK6zd77aYTdUAq2CGWRqxOBSPrkV8oaL/dfSyW4tDsDvFvyhRXPgC"},

{"id":"0eb426ed-37d6-41b9-981f-994406b74b52","email":"fmcfarlaneg@wiley.com","last_name":"McFarlane","first_name":"Fanchette","created_at":"2019-01-17 20:37:17","updated_at":"2019-01-17 20:37:17","username":"fmcfarlaneg","password":"$2b$10$JK6zd77aYTdUAq2CGWRqxOBSPrkV8oaL/dfSyW4tDsDvFvyhRXPgC"},

{"id":"3dc4b881-abf0-400c-999f-10235ce2639d","email":"hneljesh@prlog.org","last_name":"Neljes","first_name":"Harley","created_at":"2019-04-13 03:47:50","updated_at":"2019-04-13 03:47:50","username":"hneljesh","password":"$2b$10$JK6zd77aYTdUAq2CGWRqxOBSPrkV8oaL/dfSyW4tDsDvFvyhRXPgC"},

{"id":"a0265de3-adec-4328-8171-d010256f6db9","email":"cduranti@naver.com","last_name":"Durant","first_name":"Christopher","created_at":"2019-05-05 00:41:57","updated_at":"2019-05-05 00:41:57","username":"cduranti","password":"$2b$10$JK6zd77aYTdUAq2CGWRqxOBSPrkV8oaL/dfSyW4tDsDvFvyhRXPgC"},

{"id":"3ef8558f-ffa6-4954-815b-1ec93218735b","email":"mzamboninij@smugmug.com","last_name":"Zambonini","first_name":"Marris","created_at":"2019-09-20 05:59:49","updated_at":"2019-09-20 05:59:49","username":"mzamboninij","password":"$2b$10$JK6zd77aYTdUAq2CGWRqxOBSPrkV8oaL/dfSyW4tDsDvFvyhRXPgC"},

{"id":"de18d28a-ca75-4c96-8b86-ce3cfe97f48c","email":"gstanwixk@walmart.com","last_name":"Stanwix","first_name":"Gipsy","created_at":"2019-05-21 22:03:24","updated_at":"2019-05-21 22:03:24","username":"gstanwixk","password":"$2b$10$JK6zd77aYTdUAq2CGWRqxOBSPrkV8oaL/dfSyW4tDsDvFvyhRXPgC"},

{"id":"fe100c27-156c-42e0-a2dd-3ae3d6963446","email":"vgentnerl@fema.gov","last_name":"Gentner","first_name":"Valentijn","created_at":"2019-02-08 09:55:29","updated_at":"2019-02-08 09:55:29","username":"vgentnerl","password":"$2b$10$JK6zd77aYTdUAq2CGWRqxOBSPrkV8oaL/dfSyW4tDsDvFvyhRXPgC"},

{"id":"fe86022b-8aac-4eff-bc50-dcb56dbfcfbf","email":"amolesworthm@cnbc.com","last_name":"Molesworth","first_name":"Augie","created_at":"2019-08-04 00:49:29","updated_at":"2019-08-04 00:49:29","username":"amolesworthm","password":"$2b$10$JK6zd77aYTdUAq2CGWRqxOBSPrkV8oaL/dfSyW4tDsDvFvyhRXPgC"},

{"id":"5536b020-ff24-4af2-ade8-4aeb4a792008","email":"sridingn@edublogs.org","last_name":"Riding","first_name":"Sherry","created_at":"2019-03-11 15:44:17","updated_at":"2019-03-11 15:44:17","username":"sridingn","password":"$2b$10$JK6zd77aYTdUAq2CGWRqxOBSPrkV8oaL/dfSyW4tDsDvFvyhRXPgC"},

{"id":"0a99fe50-200e-428d-bc7e-37f8e89a540e","email":"cchidlero@cbsnews.com","last_name":"Chidler","first_name":"Cyril","created_at":"2019-01-31 21:03:42","updated_at":"2019-01-31 21:03:42","username":"cchidlero","password":"$2b$10$JK6zd77aYTdUAq2CGWRqxOBSPrkV8oaL/dfSyW4tDsDvFvyhRXPgC"},

{"id":"a7bd2c78-5f48-44e4-8ec5-d281e351caa0","email":"ncluep@prnewswire.com","last_name":"Clue","first_name":"Nikita","created_at":"2019-09-20 10:58:05","updated_at":"2019-09-20 10:58:05","username":"ncluep","password":"$2b$10$JK6zd77aYTdUAq2CGWRqxOBSPrkV8oaL/dfSyW4tDsDvFvyhRXPgC"},
{"id":"d5abbc81-73f0-4390-8301-7d822d8f13c1","email":"mdossettorq@admin.ch","last_name":"Dossettor","first_name":"Morgen","created_at":"2019-01-11 16:24:30","updated_at":"2019-01-11 16:24:30","username":"mdossettorq","password":"$2b$10$JK6zd77aYTdUAq2CGWRqxOBSPrkV8oaL/dfSyW4tDsDvFvyhRXPgC"},
{"id":"b5c92bc6-526c-499e-b34e-64017aeb2864","email":"bdomoner@cdbaby.com","last_name":"Domone","first_name":"Bjorn","created_at":"2019-05-01 07:41:41","updated_at":"2019-05-01 07:41:41","username":"bdomoner","password":"$2b$10$JK6zd77aYTdUAq2CGWRqxOBSPrkV8oaL/dfSyW4tDsDvFvyhRXPgC"},

{"id":"9d669a1e-b4fa-4723-ba3a-554cdd040ba2","email":"atodeos@yelp.com","last_name":"Todeo","first_name":"Aurlie","created_at":"2019-03-05 13:00:24","updated_at":"2019-03-05 13:00:24","username":"atodeos","password":"$2b$10$JK6zd77aYTdUAq2CGWRqxOBSPrkV8oaL/dfSyW4tDsDvFvyhRXPgC"},
{"id":"967a8729-be67-402d-bf09-97f0d64ef748","email":"jdrustt@biblegateway.com","last_name":"Drust","first_name":"Jobi","created_at":"2019-07-23 04:38:33","updated_at":"2019-07-23 04:38:33","username":"jdrustt","password":"$2b$10$JK6zd77aYTdUAq2CGWRqxOBSPrkV8oaL/dfSyW4tDsDvFvyhRXPgC"},
{"id":"c1b5a042-5ccb-4888-85c6-3c90f1830ea0","email":"wwhitlamu@army.mil","last_name":"Whitlam","first_name":"Westbrook","created_at":"2019-08-01 09:03:03","updated_at":"2019-08-01 09:03:03","username":"wwhitlamu","password":"$2b$10$JK6zd77aYTdUAq2CGWRqxOBSPrkV8oaL/dfSyW4tDsDvFvyhRXPgC"},
{"id":"2f93aae3-a36e-4067-aac4-b475c7b076a7","email":"blevingtonv@state.gov","last_name":"Levington","first_name":"Berk","created_at":"2019-03-05 22:07:41","updated_at":"2019-03-05 22:07:41","username":"blevingtonv","password":"$2b$10$JK6zd77aYTdUAq2CGWRqxOBSPrkV8oaL/dfSyW4tDsDvFvyhRXPgC"},
{"id":"4ce54714-c7ef-45ed-9ca7-11e5bdf91c6d","email":"rtwelvew@ask.com","last_name":"Twelve","first_name":"Rich","created_at":"2019-01-30 04:55:35","updated_at":"2019-01-30 04:55:35","username":"rtwelvew","password":"$2b$10$JK6zd77aYTdUAq2CGWRqxOBSPrkV8oaL/dfSyW4tDsDvFvyhRXPgC"},
{"id":"a4a6a204-0173-4aab-ba9e-54b3664bbfed","email":"bnootx@sciencedaily.com","last_name":"Noot","first_name":"Byrom","created_at":"2019-06-08 05:13:28","updated_at":"2019-06-08 05:13:28","username":"bnootx","password":"$2b$10$JK6zd77aYTdUAq2CGWRqxOBSPrkV8oaL/dfSyW4tDsDvFvyhRXPgC"},
{"id":"02ec60c5-4365-4f96-a98e-f5dd255034d6","email":"lmckuey@forbes.com","last_name":"McKue","first_name":"Lela","created_at":"2019-01-20 23:51:01","updated_at":"2019-01-20 23:51:01","username":"lmckuey","password":"$2b$10$JK6zd77aYTdUAq2CGWRqxOBSPrkV8oaL/dfSyW4tDsDvFvyhRXPgC"},
{"id":"1c9396c0-59a7-4256-982b-b3923995d75b","email":"aredheadz@walmart.com","last_name":"Redhead","first_name":"Arnoldo","created_at":"2019-05-24 15:51:16","updated_at":"2019-05-24 15:51:16","username":"aredheadz","password":"$2b$10$JK6zd77aYTdUAq2CGWRqxOBSPrkV8oaL/dfSyW4tDsDvFvyhRXPgC"},
{"id":"41ba5dd2-23b9-4403-9ac7-c333399f5313","email":"bdew10@amazon.co.jp","last_name":"Dew","first_name":"Britni","created_at":"2019-01-08 12:32:37","updated_at":"2019-01-08 12:32:37","username":"bdew10","password":"$2b$10$JK6zd77aYTdUAq2CGWRqxOBSPrkV8oaL/dfSyW4tDsDvFvyhRXPgC"},
{"id":"ff3a5321-c534-4c5c-80e8-f95fad735638","email":"fjostan11@geocities.com","last_name":"Jostan","first_name":"Faulkner","created_at":"2019-07-15 09:45:53","updated_at":"2019-07-15 09:45:53","username":"fjostan11","password":"$2b$10$JK6zd77aYTdUAq2CGWRqxOBSPrkV8oaL/dfSyW4tDsDvFvyhRXPgC"},

{"id":"50618d19-e743-434d-8ee2-0a2ea611132f","email":"atomeo12@pcworld.com","last_name":"Tomeo","first_name":"Andrus","created_at":"2019-09-01 21:28:50","updated_at":"2019-09-01 21:28:50","username":"atomeo12","password":"$2b$10$JK6zd77aYTdUAq2CGWRqxOBSPrkV8oaL/dfSyW4tDsDvFvyhRXPgC"},
{"id":"e29f3487-d6ea-42b3-a4aa-9fc681ee971b","email":"dbritner13@cdbaby.com","last_name":"Britner","first_name":"Darci","created_at":"2019-01-11 01:32:27","updated_at":"2019-01-11 01:32:27","username":"dbritner13","password":"$2b$10$JK6zd77aYTdUAq2CGWRqxOBSPrkV8oaL/dfSyW4tDsDvFvyhRXPgC"},
{"id":"b213f887-16cd-43d0-9e86-594b3e767303","email":"ederisly14@usa.gov","last_name":"Derisly","first_name":"Ermina","created_at":"2019-09-08 04:47:00","updated_at":"2019-09-08 04:47:00","username":"ederisly14","password":"$2b$10$JK6zd77aYTdUAq2CGWRqxOBSPrkV8oaL/dfSyW4tDsDvFvyhRXPgC"},
{"id":"569213d6-9733-4f45-b022-2eb8cd6e43de","email":"jcastanie15@forbes.com","last_name":"Castanie","first_name":"Julienne","created_at":"2019-09-16 10:52:15","updated_at":"2019-09-16 10:52:15","username":"jcastanie15","password":"$2b$10$JK6zd77aYTdUAq2CGWRqxOBSPrkV8oaL/dfSyW4tDsDvFvyhRXPgC"},
{"id":"67bcc96c-58f5-4e3d-a80b-d01f01c444b1","email":"aluthwood16@earthlink.net","last_name":"Luthwood","first_name":"Ade","created_at":"2019-10-01 14:26:54","updated_at":"2019-10-01 14:26:54","username":"aluthwood16","password":"$2b$10$JK6zd77aYTdUAq2CGWRqxOBSPrkV8oaL/dfSyW4tDsDvFvyhRXPgC"},

{"id":"cb03a806-3769-4121-b07a-6e397cf01bc0","email":"vomullane17@mtv.com","last_name":"O' Mullane","first_name":"Vivia","created_at":"2019-03-24 02:40:16","updated_at":"2019-03-24 02:40:16","username":"vomullane17","password":"$2b$10$JK6zd77aYTdUAq2CGWRqxOBSPrkV8oaL/dfSyW4tDsDvFvyhRXPgC"},
{"id":"fca79fd1-8a5f-4135-b9ad-04387a89ecd2","email":"hdanielczyk18@ftc.gov","last_name":"Danielczyk","first_name":"Huntlee","created_at":"2019-01-29 03:24:37","updated_at":"2019-01-29 03:24:37","username":"hdanielczyk18","password":"$2b$10$JK6zd77aYTdUAq2CGWRqxOBSPrkV8oaL/dfSyW4tDsDvFvyhRXPgC"},
{"id":"f1d0c186-53c1-4ca2-ac5f-cb3cc53a0675","email":"dbeernaert19@alibaba.com","last_name":"Beernaert","first_name":"Devan","created_at":"2019-04-17 06:57:30","updated_at":"2019-04-17 06:57:30","username":"dbeernaert19","password":"$2b$10$JK6zd77aYTdUAq2CGWRqxOBSPrkV8oaL/dfSyW4tDsDvFvyhRXPgC"},
{"id":"c360da6a-31cb-4823-8951-abebab0990ed","email":"penbury1a@amazon.co.uk","last_name":"Enbury","first_name":"Pavel","created_at":"2019-08-16 00:12:03","updated_at":"2019-08-16 00:12:03","username":"penbury1a","password":"$2b$10$JK6zd77aYTdUAq2CGWRqxOBSPrkV8oaL/dfSyW4tDsDvFvyhRXPgC"},
{"id":"2aa763bd-4bf1-47a1-bc32-0a7e693ffdcf","email":"rmar1b@uol.com.br","last_name":"Mar","first_name":"Rahel","created_at":"2019-06-10 03:06:48","updated_at":"2019-06-10 03:06:48","username":"rmar1b","password":"$2b$10$JK6zd77aYTdUAq2CGWRqxOBSPrkV8oaL/dfSyW4tDsDvFvyhRXPgC"},
{"id":"9234ae08-c6e9-46f9-a452-ac1bd1842b02","email":"cwitcomb1c@ezinearticles.com","last_name":"Witcomb","first_name":"Casper","created_at":"2019-04-14 11:00:02","updated_at":"2019-04-14 11:00:02","username":"cwitcomb1c","password":"$2b$10$JK6zd77aYTdUAq2CGWRqxOBSPrkV8oaL/dfSyW4tDsDvFvyhRXPgC"}

          
      ]);
    });
};
