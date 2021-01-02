exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("users").insert([
        {
          id: "02ec60c5-4365-4f96-a98e-f5dd255034d6",
          email: "lmckuey@forbes.com",
          password:
            "$2b$10$JK6zd77aYTdUAq2CGWRqxOBSPrkV8oaL/dfSyW4tDsDvFvyhRXPgC",
          first_name: "Lela",
          last_name: "McKue",
          created_at: "2019-01-20 23:51:01-05",
          updated_at: "2019-01-20 23:51:01-05",
          username: "lmckuey",

          profile_pic_url: null,
        },
        {
          id: "0a99fe50-200e-428d-bc7e-37f8e89a540e",
          email: "cchidlero@cbsnews.com",
          password:
            "$2b$10$JK6zd77aYTdUAq2CGWRqxOBSPrkV8oaL/dfSyW4tDsDvFvyhRXPgC",
          first_name: "Cyril",
          last_name: "Chidler",
          created_at: "2019-01-31 21:03:42-05",
          updated_at: "2019-01-31 21:03:42-05",
          username: "cchidlero",

          profile_pic_url: null,
        },
        {
          id: "0af78e58-1c35-4b6c-9566-35eae5dd0f5d",
          email: "jluscott1@mtv.com",
          password:
            "$2b$10$JK6zd77aYTdUAq2CGWRqxOBSPrkV8oaL/dfSyW4tDsDvFvyhRXPgC",
          first_name: "Jourdan",
          last_name: "Luscott",
          created_at: "2019-02-23 04:57:48-05",
          updated_at: "2019-02-23 04:57:48-05",
          username: "jluscott1",

          profile_pic_url: null,
        },
        {
          id: "0eb426ed-37d6-41b9-981f-994406b74b52",
          email: "fmcfarlaneg@wiley.com",
          password:
            "$2b$10$JK6zd77aYTdUAq2CGWRqxOBSPrkV8oaL/dfSyW4tDsDvFvyhRXPgC",
          first_name: "Fanchette",
          last_name: "McFarlane",
          created_at: "2019-01-17 20:37:17-05",
          updated_at: "2019-01-17 20:37:17-05",
          username: "fmcfarlaneg",

          profile_pic_url: null,
        },
        {
          id: "1c9396c0-59a7-4256-982b-b3923995d75b",
          email: "aredheadz@walmart.com",
          password:
            "$2b$10$JK6zd77aYTdUAq2CGWRqxOBSPrkV8oaL/dfSyW4tDsDvFvyhRXPgC",
          first_name: "Arnoldo",
          last_name: "Redhead",
          created_at: "2019-05-24 15:51:16-04",
          updated_at: "2019-05-24 15:51:16-04",
          username: "aredheadz",

          profile_pic_url: null,
        },
        {
          id: "1cd23218-b2f1-4ada-b8af-5a5b4b9f7c39",
          email: "rlandis9@bbc.co.uk",
          password:
            "$2b$10$JK6zd77aYTdUAq2CGWRqxOBSPrkV8oaL/dfSyW4tDsDvFvyhRXPgC",
          first_name: "Renee",
          last_name: "Landis",
          created_at: "2019-05-06 15:21:26-04",
          updated_at: "2019-05-06 15:21:26-04",
          username: "rlandis9",

          profile_pic_url: null,
        },
        {
          id: "1dbb814f-c678-4b0d-85d8-e08a262b8cb4",
          email: "lcastiglione8@yale.edu",
          password:
            "$2b$10$JK6zd77aYTdUAq2CGWRqxOBSPrkV8oaL/dfSyW4tDsDvFvyhRXPgC",
          first_name: "Lorne",
          last_name: "Castiglione",
          created_at: "2019-09-23 00:54:50-04",
          updated_at: "2019-09-23 00:54:50-04",
          username: "lcastiglione8",

          profile_pic_url: null,
        },
        {
          id: "2aa763bd-4bf1-47a1-bc32-0a7e693ffdcf",
          email: "rmar1b@uol.com.br",
          password:
            "$2b$10$JK6zd77aYTdUAq2CGWRqxOBSPrkV8oaL/dfSyW4tDsDvFvyhRXPgC",
          first_name: "Rahel",
          last_name: "Mar",
          created_at: "2019-06-10 03:06:48-04",
          updated_at: "2019-06-10 03:06:48-04",
          username: "rmar1b",

          profile_pic_url: null,
        },
        {
          id: "2bae5a3a-52c6-4cce-9cd0-706819b46850",
          email: "csherc@g.co",
          password:
            "$2b$10$JK6zd77aYTdUAq2CGWRqxOBSPrkV8oaL/dfSyW4tDsDvFvyhRXPgC",
          first_name: "Cal",
          last_name: "Sher",
          created_at: "2019-02-27 14:18:33-05",
          updated_at: "2019-02-27 14:18:33-05",
          username: "csherc",

          profile_pic_url: null,
        },
        {
          id: "2f93aae3-a36e-4067-aac4-b475c7b076a7",
          email: "blevingtonv@state.gov",
          password:
            "$2b$10$JK6zd77aYTdUAq2CGWRqxOBSPrkV8oaL/dfSyW4tDsDvFvyhRXPgC",
          first_name: "Berk",
          last_name: "Levington",
          created_at: "2019-03-05 22:07:41-05",
          updated_at: "2019-03-05 22:07:41-05",
          username: "blevingtonv",

          profile_pic_url: null,
        },
        {
          id: "3dc4b881-abf0-400c-999f-10235ce2639d",
          email: "hneljesh@prlog.org",
          password:
            "$2b$10$JK6zd77aYTdUAq2CGWRqxOBSPrkV8oaL/dfSyW4tDsDvFvyhRXPgC",
          first_name: "Harley",
          last_name: "Neljes",
          created_at: "2019-04-13 03:47:50-04",
          updated_at: "2019-04-13 03:47:50-04",
          username: "hneljesh",

          profile_pic_url: null,
        },
        {
          id: "3ef8558f-ffa6-4954-815b-1ec93218735b",
          email: "mzamboninij@smugmug.com",
          password:
            "$2b$10$JK6zd77aYTdUAq2CGWRqxOBSPrkV8oaL/dfSyW4tDsDvFvyhRXPgC",
          first_name: "Marris",
          last_name: "Zambonini",
          created_at: "2019-09-20 05:59:49-04",
          updated_at: "2019-09-20 05:59:49-04",
          username: "mzamboninij",

          profile_pic_url: null,
        },
        {
          id: "41ba5dd2-23b9-4403-9ac7-c333399f5313",
          email: "bdew10@amazon.co.jp",
          password:
            "$2b$10$JK6zd77aYTdUAq2CGWRqxOBSPrkV8oaL/dfSyW4tDsDvFvyhRXPgC",
          first_name: "Britni",
          last_name: "Dew",
          created_at: "2019-01-08 12:32:37-05",
          updated_at: "2019-01-08 12:32:37-05",
          username: "bdew10",

          profile_pic_url: null,
        },
        {
          id: "490b4bd9-f801-4935-bab2-170437d85534",
          email: "pkellartb@gov.uk",
          password:
            "$2b$10$JK6zd77aYTdUAq2CGWRqxOBSPrkV8oaL/dfSyW4tDsDvFvyhRXPgC",
          first_name: "Patti",
          last_name: "Kellart",
          created_at: "2019-04-05 19:13:15-04",
          updated_at: "2019-04-05 19:13:15-04",
          username: "pkellartb",

          profile_pic_url: null,
        },
        {
          id: "493d491f-97e4-4b0b-9c2d-478c5ae32ccc",
          email: "hsturzakerf@tinyurl.com",
          password:
            "$2b$10$JK6zd77aYTdUAq2CGWRqxOBSPrkV8oaL/dfSyW4tDsDvFvyhRXPgC",
          first_name: "Harp",
          last_name: "Sturzaker",
          created_at: "2019-05-14 04:10:08-04",
          updated_at: "2019-05-14 04:10:08-04",
          username: "hsturzakerf",

          profile_pic_url: null,
        },
        {
          id: "4ce54714-c7ef-45ed-9ca7-11e5bdf91c6d",
          email: "rtwelvew@ask.com",
          password:
            "$2b$10$JK6zd77aYTdUAq2CGWRqxOBSPrkV8oaL/dfSyW4tDsDvFvyhRXPgC",
          first_name: "Rich",
          last_name: "Twelve",
          created_at: "2019-01-30 04:55:35-05",
          updated_at: "2019-01-30 04:55:35-05",
          username: "rtwelvew",

          profile_pic_url: null,
        },
        {
          id: "50618d19-e743-434d-8ee2-0a2ea611132f",
          email: "atomeo12@pcworld.com",
          password:
            "$2b$10$JK6zd77aYTdUAq2CGWRqxOBSPrkV8oaL/dfSyW4tDsDvFvyhRXPgC",
          first_name: "Andrus",
          last_name: "Tomeo",
          created_at: "2019-09-01 21:28:50-04",
          updated_at: "2019-09-01 21:28:50-04",
          username: "atomeo12",

          profile_pic_url: null,
        },
        {
          id: "5536b020-ff24-4af2-ade8-4aeb4a792008",
          email: "sridingn@edublogs.org",
          password:
            "$2b$10$JK6zd77aYTdUAq2CGWRqxOBSPrkV8oaL/dfSyW4tDsDvFvyhRXPgC",
          first_name: "Sherry",
          last_name: "Riding",
          created_at: "2019-03-11 15:44:17-04",
          updated_at: "2019-03-11 15:44:17-04",
          username: "sridingn",

          profile_pic_url: null,
        },
        {
          id: "569213d6-9733-4f45-b022-2eb8cd6e43de",
          email: "jcastanie15@forbes.com",
          password:
            "$2b$10$JK6zd77aYTdUAq2CGWRqxOBSPrkV8oaL/dfSyW4tDsDvFvyhRXPgC",
          first_name: "Julienne",
          last_name: "Castanie",
          created_at: "2019-09-16 10:52:15-04",
          updated_at: "2019-09-16 10:52:15-04",
          username: "jcastanie15",

          profile_pic_url: null,
        },
        {
          id: "5d05f2a7-9399-4626-8568-dc655d5ac06d",
          email: "tmerriganse@amazon.co.uk",
          password:
            "$2b$10$JK6zd77aYTdUAq2CGWRqxOBSPrkV8oaL/dfSyW4tDsDvFvyhRXPgC",
          first_name: "Trixy",
          last_name: "Merrigans",
          created_at: "2019-08-09 12:17:00-04",
          updated_at: "2019-08-09 12:17:00-04",
          username: "tmerriganse",

          profile_pic_url: null,
        },
        {
          id: "67bcc96c-58f5-4e3d-a80b-d01f01c444b1",
          email: "aluthwood16@earthlink.net",
          password:
            "$2b$10$JK6zd77aYTdUAq2CGWRqxOBSPrkV8oaL/dfSyW4tDsDvFvyhRXPgC",
          first_name: "Ade",
          last_name: "Luthwood",
          created_at: "2019-10-01 14:26:54-04",
          updated_at: "2019-10-01 14:26:54-04",
          username: "aluthwood16",

          profile_pic_url: null,
        },
        {
          id: "80360faf-81de-410e-a9e9-d9c6f37bb9b7",
          email: "cgrovier5@netlog.com",
          password:
            "$2b$10$JK6zd77aYTdUAq2CGWRqxOBSPrkV8oaL/dfSyW4tDsDvFvyhRXPgC",
          first_name: "Crichton",
          last_name: "Grovier",
          created_at: "2019-05-25 02:21:23-04",
          updated_at: "2019-05-25 02:21:23-04",
          username: "cgrovier5",

          profile_pic_url: null,
        },
        {
          id: "9234ae08-c6e9-46f9-a452-ac1bd1842b02",
          email: "cwitcomb1c@ezinearticles.com",
          password:
            "$2b$10$JK6zd77aYTdUAq2CGWRqxOBSPrkV8oaL/dfSyW4tDsDvFvyhRXPgC",
          first_name: "Casper",
          last_name: "Witcomb",
          created_at: "2019-04-14 11:00:02-04",
          updated_at: "2019-04-14 11:00:02-04",
          username: "cwitcomb1c",

          profile_pic_url: null,
        },
        {
          id: "966ac95d-3423-41bd-95fd-3535884c4a13",
          email: "splumbley3@paypal.com",
          password:
            "$2b$10$JK6zd77aYTdUAq2CGWRqxOBSPrkV8oaL/dfSyW4tDsDvFvyhRXPgC",
          first_name: "Stillmann",
          last_name: "Plumbley",
          created_at: "2019-04-09 20:51:26-04",
          updated_at: "2019-04-09 20:51:26-04",
          username: "splumbley3",

          profile_pic_url: null,
        },
        {
          id: "967a8729-be67-402d-bf09-97f0d64ef748",
          email: "jdrustt@biblegateway.com",
          password:
            "$2b$10$JK6zd77aYTdUAq2CGWRqxOBSPrkV8oaL/dfSyW4tDsDvFvyhRXPgC",
          first_name: "Jobi",
          last_name: "Drust",
          created_at: "2019-07-23 04:38:33-04",
          updated_at: "2019-07-23 04:38:33-04",
          username: "jdrustt",

          profile_pic_url: null,
        },
        {
          id: "9d669a1e-b4fa-4723-ba3a-554cdd040ba2",
          email: "atodeos@yelp.com",
          password:
            "$2b$10$JK6zd77aYTdUAq2CGWRqxOBSPrkV8oaL/dfSyW4tDsDvFvyhRXPgC",
          first_name: "Aurlie",
          last_name: "Todeo",
          created_at: "2019-03-05 13:00:24-05",
          updated_at: "2019-03-05 13:00:24-05",
          username: "atodeos",

          profile_pic_url: null,
        },
        {
          id: "a0265de3-adec-4328-8171-d010256f6db9",
          email: "cduranti@naver.com",
          password:
            "$2b$10$JK6zd77aYTdUAq2CGWRqxOBSPrkV8oaL/dfSyW4tDsDvFvyhRXPgC",
          first_name: "Christopher",
          last_name: "Durant",
          created_at: "2019-05-05 00:41:57-04",
          updated_at: "2019-05-05 00:41:57-04",
          username: "cduranti",

          profile_pic_url: null,
        },
        {
          id: "a30c1ec4-c64d-481e-bf3f-26bed11d5fdd",
          email: "jtweedlie4@typepad.com",
          password:
            "$2b$10$JK6zd77aYTdUAq2CGWRqxOBSPrkV8oaL/dfSyW4tDsDvFvyhRXPgC",
          first_name: "Jeanine",
          last_name: "Tweedlie",
          created_at: "2019-03-18 10:43:00-04",
          updated_at: "2019-03-18 10:43:00-04",
          username: "jtweedlie4",

          profile_pic_url: null,
        },
        {
          id: "a4a6a204-0173-4aab-ba9e-54b3664bbfed",
          email: "bnootx@sciencedaily.com",
          password:
            "$2b$10$JK6zd77aYTdUAq2CGWRqxOBSPrkV8oaL/dfSyW4tDsDvFvyhRXPgC",
          first_name: "Byrom",
          last_name: "Noot",
          created_at: "2019-06-08 05:13:28-04",
          updated_at: "2019-06-08 05:13:28-04",
          username: "bnootx",

          profile_pic_url: null,
        },
        {
          id: "a7bd2c78-5f48-44e4-8ec5-d281e351caa0",
          email: "ncluep@prnewswire.com",
          password:
            "$2b$10$JK6zd77aYTdUAq2CGWRqxOBSPrkV8oaL/dfSyW4tDsDvFvyhRXPgC",
          first_name: "Nikita",
          last_name: "Clue",
          created_at: "2019-09-20 10:58:05-04",
          updated_at: "2019-09-20 10:58:05-04",
          username: "ncluep",

          profile_pic_url: null,
        },
        {
          id: "b213f887-16cd-43d0-9e86-594b3e767303",
          email: "ederisly14@usa.gov",
          password:
            "$2b$10$JK6zd77aYTdUAq2CGWRqxOBSPrkV8oaL/dfSyW4tDsDvFvyhRXPgC",
          first_name: "Ermina",
          last_name: "Derisly",
          created_at: "2019-09-08 04:47:00-04",
          updated_at: "2019-09-08 04:47:00-04",
          username: "ederisly14",

          profile_pic_url: null,
        },
        {
          id: "b5c92bc6-526c-499e-b34e-64017aeb2864",
          email: "bdomoner@cdbaby.com",
          password:
            "$2b$10$JK6zd77aYTdUAq2CGWRqxOBSPrkV8oaL/dfSyW4tDsDvFvyhRXPgC",
          first_name: "Bjorn",
          last_name: "Domone",
          created_at: "2019-05-01 07:41:41-04",
          updated_at: "2019-05-01 07:41:41-04",
          username: "bdomoner",

          profile_pic_url: null,
        },
        {
          id: "c1b5a042-5ccb-4888-85c6-3c90f1830ea0",
          email: "wwhitlamu@army.mil",
          password:
            "$2b$10$JK6zd77aYTdUAq2CGWRqxOBSPrkV8oaL/dfSyW4tDsDvFvyhRXPgC",
          first_name: "Westbrook",
          last_name: "Whitlam",
          created_at: "2019-08-01 09:03:03-04",
          updated_at: "2019-08-01 09:03:03-04",
          username: "wwhitlamu",

          profile_pic_url: null,
        },
        {
          id: "c360da6a-31cb-4823-8951-abebab0990ed",
          email: "penbury1a@amazon.co.uk",
          password:
            "$2b$10$JK6zd77aYTdUAq2CGWRqxOBSPrkV8oaL/dfSyW4tDsDvFvyhRXPgC",
          first_name: "Pavel",
          last_name: "Enbury",
          created_at: "2019-08-16 00:12:03-04",
          updated_at: "2019-08-16 00:12:03-04",
          username: "penbury1a",

          profile_pic_url: null,
        },
        {
          id: "c76e0d4e-c6ad-4db3-8703-bd00c41b4621",
          email: "bprobet2@ebay.co.uk",
          password:
            "$2b$10$JK6zd77aYTdUAq2CGWRqxOBSPrkV8oaL/dfSyW4tDsDvFvyhRXPgC",
          first_name: "Benoit",
          last_name: "Probet",
          created_at: "2019-03-07 22:05:36-05",
          updated_at: "2019-03-07 22:05:36-05",
          username: "bprobet2",

          profile_pic_url: null,
        },
        {
          id: "cb03a806-3769-4121-b07a-6e397cf01bc0",
          email: "vomullane17@mtv.com",
          password:
            "$2b$10$JK6zd77aYTdUAq2CGWRqxOBSPrkV8oaL/dfSyW4tDsDvFvyhRXPgC",
          first_name: "Vivia",
          last_name: "O' Mullane",
          created_at: "2019-03-24 02:40:16-04",
          updated_at: "2019-03-24 02:40:16-04",
          username: "vomullane17",

          profile_pic_url: null,
        },
        {
          id: "cc92181f-50c6-4829-96fa-4d92563737c9",
          email: "1234@gmail.com",
          password:
            "$2b$10$JK6zd77aYTdUAq2CGWRqxOBSPrkV8oaL/dfSyW4tDsDvFvyhRXPgC",
          first_name: "Quinn",
          last_name: "Lashinsky",
          created_at: "2020-01-19 04:00:00-05",
          updated_at: "2020-01-19 04:00:00-05",
          username: "QuinnMax",

          profile_pic_url: null,
        },
        {
          id: "d5abbc81-73f0-4390-8301-7d822d8f13c1",
          email: "mdossettorq@admin.ch",
          password:
            "$2b$10$JK6zd77aYTdUAq2CGWRqxOBSPrkV8oaL/dfSyW4tDsDvFvyhRXPgC",
          first_name: "Morgen",
          last_name: "Dossettor",
          created_at: "2019-01-11 16:24:30-05",
          updated_at: "2019-01-11 16:24:30-05",
          username: "mdossettorq",

          profile_pic_url: null,
        },
        {
          id: "d5c549a2-91da-4cdf-9ec4-6c9f8e14b1da",
          email: "rkrienke0@cpanel.net",
          password:
            "$2b$10$JK6zd77aYTdUAq2CGWRqxOBSPrkV8oaL/dfSyW4tDsDvFvyhRXPgC",
          first_name: "Ree",
          last_name: "Krienke",
          created_at: "2019-04-12 03:25:37-04",
          updated_at: "2019-04-12 03:25:37-04",
          username: "rkrienke0",

          profile_pic_url: null,
        },
        {
          id: "ddc85a69-1727-48d6-9cf6-463f9151d788",
          email: "osommerville7@blog.com",
          password:
            "$2b$10$JK6zd77aYTdUAq2CGWRqxOBSPrkV8oaL/dfSyW4tDsDvFvyhRXPgC",
          first_name: "Olympie",
          last_name: "Sommerville",
          created_at: "2019-08-25 08:22:44-04",
          updated_at: "2019-08-25 08:22:44-04",
          username: "osommerville7",

          profile_pic_url: null,
        },
        {
          id: "de18d28a-ca75-4c96-8b86-ce3cfe97f48c",
          email: "gstanwixk@walmart.com",
          password:
            "$2b$10$JK6zd77aYTdUAq2CGWRqxOBSPrkV8oaL/dfSyW4tDsDvFvyhRXPgC",
          first_name: "Gipsy",
          last_name: "Stanwix",
          created_at: "2019-05-21 22:03:24-04",
          updated_at: "2019-05-21 22:03:24-04",
          username: "gstanwixk",

          profile_pic_url: null,
        },
        {
          id: "df44f322-efba-4479-b231-e5b0cf8737b0",
          email: "apellinga@cornell.edu",
          password:
            "$2b$10$JK6zd77aYTdUAq2CGWRqxOBSPrkV8oaL/dfSyW4tDsDvFvyhRXPgC",
          first_name: "Alvina",
          last_name: "Pelling",
          created_at: "2019-06-22 19:05:02-04",
          updated_at: "2019-06-22 19:05:02-04",
          username: "apellinga",

          profile_pic_url: null,
        },
        {
          id: "e00ba377-f377-4f1f-b5bd-d9ad80a7aff2",
          email: "cgregol6@wikipedia.org",
          password:
            "$2b$10$JK6zd77aYTdUAq2CGWRqxOBSPrkV8oaL/dfSyW4tDsDvFvyhRXPgC",
          first_name: "Candy",
          last_name: "Gregol",
          created_at: "2019-05-26 16:28:26-04",
          updated_at: "2019-05-26 16:28:26-04",
          username: "cgregol6",

          profile_pic_url: null,
        },
        {
          id: "e29f3487-d6ea-42b3-a4aa-9fc681ee971b",
          email: "dbritner13@cdbaby.com",
          password:
            "$2b$10$JK6zd77aYTdUAq2CGWRqxOBSPrkV8oaL/dfSyW4tDsDvFvyhRXPgC",
          first_name: "Darci",
          last_name: "Britner",
          created_at: "2019-01-11 01:32:27-05",
          updated_at: "2019-01-11 01:32:27-05",
          username: "dbritner13",

          profile_pic_url: null,
        },
        {
          id: "e39c43e0-2296-4fe5-8f1e-91d114c3b822",
          email: "eaylind@army.mil",
          password:
            "$2b$10$JK6zd77aYTdUAq2CGWRqxOBSPrkV8oaL/dfSyW4tDsDvFvyhRXPgC",
          first_name: "Elvin",
          last_name: "Aylin",
          created_at: "2019-07-02 08:36:36-04",
          updated_at: "2019-07-02 08:36:36-04",
          username: "eaylind",

          profile_pic_url: null,
        },
        {
          id: "f1d0c186-53c1-4ca2-ac5f-cb3cc53a0675",
          email: "dbeernaert19@alibaba.com",
          password:
            "$2b$10$JK6zd77aYTdUAq2CGWRqxOBSPrkV8oaL/dfSyW4tDsDvFvyhRXPgC",
          first_name: "Devan",
          last_name: "Beernaert",
          created_at: "2019-04-17 06:57:30-04",
          updated_at: "2019-04-17 06:57:30-04",
          username: "dbeernaert19",

          profile_pic_url: null,
        },
        {
          id: "fca79fd1-8a5f-4135-b9ad-04387a89ecd2",
          email: "hdanielczyk18@ftc.gov",
          password:
            "$2b$10$JK6zd77aYTdUAq2CGWRqxOBSPrkV8oaL/dfSyW4tDsDvFvyhRXPgC",
          first_name: "Huntlee",
          last_name: "Danielczyk",
          created_at: "2019-01-29 03:24:37-05",
          updated_at: "2019-01-29 03:24:37-05",
          username: "hdanielczyk18",

          profile_pic_url: null,
        },
        {
          id: "fe100c27-156c-42e0-a2dd-3ae3d6963446",
          email: "vgentnerl@fema.gov",
          password:
            "$2b$10$JK6zd77aYTdUAq2CGWRqxOBSPrkV8oaL/dfSyW4tDsDvFvyhRXPgC",
          first_name: "Valentijn",
          last_name: "Gentner",
          created_at: "2019-02-08 09:55:29-05",
          updated_at: "2019-02-08 09:55:29-05",
          username: "vgentnerl",

          profile_pic_url: null,
        },
        {
          id: "fe86022b-8aac-4eff-bc50-dcb56dbfcfbf",
          email: "amolesworthm@cnbc.com",
          password:
            "$2b$10$JK6zd77aYTdUAq2CGWRqxOBSPrkV8oaL/dfSyW4tDsDvFvyhRXPgC",
          first_name: "Augie",
          last_name: "Molesworth",
          created_at: "2019-08-04 00:49:29-04",
          updated_at: "2019-08-04 00:49:29-04",
          username: "amolesworthm",

          profile_pic_url: null,
        },
        {
          id: "ff3a5321-c534-4c5c-80e8-f95fad735638",
          email: "fjostan11@geocities.com",
          password:
            "$2b$10$JK6zd77aYTdUAq2CGWRqxOBSPrkV8oaL/dfSyW4tDsDvFvyhRXPgC",
          first_name: "Faulkner",
          last_name: "Jostan",
          created_at: "2019-07-15 09:45:53-04",
          updated_at: "2019-07-15 09:45:53-04",
          username: "fjostan11",

          profile_pic_url: null,
        },
      ]);
    });
};
