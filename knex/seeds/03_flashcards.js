
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('flashcards').del()
    .then(function () {
    //   // Inserts seed entries
      return knex('flashcards').insert(
        [
          {
            "id": "0012d939-af58-4982-b078-c33e5b63d652",
            "term": "Hire me!",
            "definition": "¡Contratame!",
            "card_set_id": "b45a8b50-ed81-4570-bf40-edb42173611d",
            "created_at": "2020-03-05 14:21:49.499252-05",
            "updated_at": "2020-03-05 14:23:07.939475-05"
          },
          {
            "id": "03617103-3187-4649-8ffb-14310040209f",
            "term": "When must you signal before making a turn?",
            "definition": "At least 100 feet before the intersection",
            "card_set_id": "b12577e0-00ab-46a4-b5f7-ccd4f78d2539",
            "created_at": "2020-03-05 14:15:56.615454-05",
            "updated_at": "2020-03-05 14:15:56.615454-05"
          },
          {
            "id": "07b0804d-2461-4cf0-84ac-be6614c0b0b5",
            "term": "World War I",
            "definition": "1914",
            "card_set_id": "f2003d1b-f83c-46a6-a4e0-eed2cb3b1464",
            "created_at": "2020-03-05 13:48:17.295837-05",
            "updated_at": "2020-03-05 13:48:17.295837-05"
          },
          {
            "id": "087b4933-df61-4955-a2ec-f411e28a18fd",
            "term": "elo",
            "definition": "flo",
            "card_set_id": "05429f72-7a24-43c4-a313-11cc1e437432",
            "created_at": "2020-03-02 20:15:32.979705-05",
            "updated_at": "2020-03-03 12:18:57.849471-05"
          },
          {
            "id": "08e652c3-4be2-480c-8417-717861f56b5f",
            "term": "\"The Boy is Mine\" - Brandy / Monica",
            "definition": "13 Weeks",
            "card_set_id": "e9fd6113-2dda-4bc1-aa01-9195f0b99c04",
            "created_at": "2020-03-05 14:42:18.960386-05",
            "updated_at": "2020-03-05 14:42:18.960386-05"
          },
          {
            "id": "09370d4b-0674-4c1d-98df-83136a2459ca",
            "term": "\"Uptown Funk\" - Mark Ronson / Bruno Mars",
            "definition": "14 Weeks",
            "card_set_id": "e9fd6113-2dda-4bc1-aa01-9195f0b99c04",
            "created_at": "2020-03-05 14:42:18.958971-05",
            "updated_at": "2020-03-05 14:42:18.958971-05"
          },
          {
            "id": "0d441f74-f7da-4c48-8bb6-92698550071e",
            "term": "Delegates at Philadelphia Convention Approve Constitution",
            "definition": "1787",
            "card_set_id": "f2003d1b-f83c-46a6-a4e0-eed2cb3b1464",
            "created_at": "2020-03-05 13:48:17.21674-05",
            "updated_at": "2020-03-05 13:48:17.21674-05"
          },
          {
            "id": "0fa63303-ea41-4d6d-be4a-222a57a6079e",
            "term": "Who is responsible if a student commits a traffic offense?",
            "definition": "Both the student and the accompanying instructor or licensed driver",
            "card_set_id": "b12577e0-00ab-46a4-b5f7-ccd4f78d2539",
            "created_at": "2020-03-05 14:15:56.721355-05",
            "updated_at": "2020-03-05 14:15:56.721355-05"
          },
          {
            "id": "106b30a4-9755-4624-be19-f79858a82434",
            "term": "What is the penalty for not telling the truth when applying for a license?",
            "definition": "No less than a $200 fine and up to 6 months imprisonment",
            "card_set_id": "b12577e0-00ab-46a4-b5f7-ccd4f78d2539",
            "created_at": "2020-03-05 14:15:56.692818-05",
            "updated_at": "2020-03-05 14:15:56.692818-05"
          },
          {
            "id": "146a2326-3aae-4a6b-a2ba-02b07bfe2873",
            "term": "101112",
            "definition": "131415",
            "card_set_id": "878b4e32-4ad5-49fd-9f99-82466c72067c",
            "created_at": "2020-03-03 12:21:35.217133-05",
            "updated_at": "2020-03-03 12:21:35.217133-05"
          },
          {
            "id": "1891f8c8-59fd-452a-8c42-0b5f302f7e80",
            "term": "456",
            "definition": "789",
            "card_set_id": "878b4e32-4ad5-49fd-9f99-82466c72067c",
            "created_at": "2020-03-03 12:21:35.216871-05",
            "updated_at": "2020-03-03 12:21:35.216871-05"
          },
          {
            "id": "1b819508-4b48-4e6c-b58a-100d6bfb14dd",
            "term": "\"Old Town Road\" - Lil Nas X",
            "definition": "19 Weeks",
            "card_set_id": "e9fd6113-2dda-4bc1-aa01-9195f0b99c04",
            "created_at": "2020-03-05 14:42:18.918472-05",
            "updated_at": "2020-03-05 14:42:18.918472-05"
          },
          {
            "id": "1d5a8888-a2b8-4dce-89aa-2ba17bd95c56",
            "term": "Assassination of John F. Kennedy",
            "definition": "1963",
            "card_set_id": "f2003d1b-f83c-46a6-a4e0-eed2cb3b1464",
            "created_at": "2020-03-05 13:48:17.306824-05",
            "updated_at": "2020-03-05 13:48:17.306824-05"
          },
          {
            "id": "1d97ce96-59d5-47f3-b343-f6c302eb0a05",
            "term": "Panama Canal Opens",
            "definition": "1914",
            "card_set_id": "f2003d1b-f83c-46a6-a4e0-eed2cb3b1464",
            "created_at": "2020-03-05 13:48:17.295829-05",
            "updated_at": "2020-03-05 13:48:17.295829-05"
          },
          {
            "id": "1f174196-8078-4287-854e-5473725511f4",
            "term": "Project",
            "definition": "Proyecto",
            "card_set_id": "b45a8b50-ed81-4570-bf40-edb42173611d",
            "created_at": "2020-03-05 14:21:49.484497-05",
            "updated_at": "2020-03-05 14:23:11.24709-05"
          },
          {
            "id": "2269ebda-8923-4866-b648-05dffc4b9117",
            "term": "Trial of Tears",
            "definition": "1838",
            "card_set_id": "f2003d1b-f83c-46a6-a4e0-eed2cb3b1464",
            "created_at": "2020-03-05 13:48:17.279903-05",
            "updated_at": "2020-03-05 13:48:17.279903-05"
          },
          {
            "id": "22d87c50-f90c-42f9-94cf-3e931113edf7",
            "term": "\"Smooth\" - Santana / Rob Thomas",
            "definition": "12 Weeks",
            "card_set_id": "e9fd6113-2dda-4bc1-aa01-9195f0b99c04",
            "created_at": "2020-03-05 14:42:18.966829-05",
            "updated_at": "2020-03-05 14:42:18.966829-05"
          },
          {
            "id": "2646ce69-39e6-473f-a58c-b4ebb05e3fd2",
            "term": "abc",
            "definition": "abc",
            "card_set_id": "18b16906-4d32-4e91-b7fb-2b1d3a38472a",
            "created_at": "2020-02-29 19:07:58.868774-05",
            "updated_at": "2020-02-29 19:07:58.868774-05"
          },
          {
            "id": "2c185023-8040-4e50-b787-9ea8df3e5685",
            "term": "cool",
            "definition": "switch",
            "card_set_id": "c155569b-97f8-4032-bf38-6a315d916970",
            "created_at": "2020-03-04 18:24:03.791976-05",
            "updated_at": "2020-03-04 18:24:03.791976-05"
          },
          {
            "id": "36625eb5-2e4a-499f-b171-9bdb3f226dd1",
            "term": "pitiful",
            "definition": "doo",
            "card_set_id": "415ffd0e-9f9c-4c5c-9662-713e0a277a15",
            "created_at": "2020-03-02 19:44:11.798142-05",
            "updated_at": "2020-03-03 12:20:04.830041-05"
          },
          {
            "id": "38aaf075-e093-446c-b182-f386239117ee",
            "term": "Louisiana Purchase",
            "definition": "1803",
            "card_set_id": "f2003d1b-f83c-46a6-a4e0-eed2cb3b1464",
            "created_at": "2020-03-05 13:48:17.236946-05",
            "updated_at": "2020-03-05 13:48:17.236946-05"
          },
          {
            "id": "41e3f127-b8cc-4fec-b392-c9783034b77d",
            "term": "\"One Sweet Day\" - Mariah Carey / Boyz II Men ",
            "definition": "16 Weeks",
            "card_set_id": "e9fd6113-2dda-4bc1-aa01-9195f0b99c04",
            "created_at": "2020-03-05 14:42:18.918631-05",
            "updated_at": "2020-03-05 14:42:18.918631-05"
          },
          {
            "id": "442756de-279e-489a-83d3-743b14b0bea3",
            "term": "reanimate",
            "definition": "asd",
            "card_set_id": "05429f72-7a24-43c4-a313-11cc1e437432",
            "created_at": "2020-03-03 12:18:30.16758-05",
            "updated_at": "2020-03-03 12:18:57.850151-05"
          },
          {
            "id": "4672a3e6-5e53-4e0c-8e8e-e6f63fc5faa7",
            "term": "Points are only issued for?",
            "definition": "Moving Violations",
            "card_set_id": "b12577e0-00ab-46a4-b5f7-ccd4f78d2539",
            "created_at": "2020-03-05 14:15:56.680798-05",
            "updated_at": "2020-03-05 14:15:56.680798-05"
          },
          {
            "id": "4c126abf-159a-49ed-8c09-b7a16b690257",
            "term": "mc ",
            "definition": "schematic",
            "card_set_id": "415ffd0e-9f9c-4c5c-9662-713e0a277a15",
            "created_at": "2020-03-02 19:44:11.801554-05",
            "updated_at": "2020-03-03 12:20:04.833053-05"
          },
          {
            "id": "4f520f04-e64f-458a-b79d-c78581374c47",
            "term": "Articles of Confederation Approved",
            "definition": "1778",
            "card_set_id": "f2003d1b-f83c-46a6-a4e0-eed2cb3b1464",
            "created_at": "2020-03-05 13:48:17.209536-05",
            "updated_at": "2020-03-05 13:48:17.209536-05"
          },
          {
            "id": "5104ff94-93ec-4462-ab17-e380a5255328",
            "term": "Hello",
            "definition": "Hola",
            "card_set_id": "b45a8b50-ed81-4570-bf40-edb42173611d",
            "created_at": "2020-03-05 14:21:49.469294-05",
            "updated_at": "2020-03-05 14:23:11.311214-05"
          },
          {
            "id": "5871c248-3d48-4f34-9b09-b4bea31dce82",
            "term": "abc",
            "definition": "abc",
            "card_set_id": "89595680-3e3d-4d45-897d-99bb3603fb74",
            "created_at": "2020-02-29 19:08:31.365097-05",
            "updated_at": "2020-02-29 20:05:34.276216-05"
          },
          {
            "id": "5e72ca3e-7e2c-4133-abaa-d26af1ee6936",
            "term": "What are the penalties for driving without insurance?",
            "definition": "Suspension of driver's license and registration and fines",
            "card_set_id": "b12577e0-00ab-46a4-b5f7-ccd4f78d2539",
            "created_at": "2020-03-05 14:15:56.67999-05",
            "updated_at": "2020-03-05 14:15:56.67999-05"
          },
          {
            "id": "5e7eaee3-ed7d-41ea-8d64-5fca9a48ec03",
            "term": "abc",
            "definition": "abc",
            "card_set_id": "ca397e20-f1be-42a4-bc0f-0441a771b3c5",
            "created_at": "2020-02-29 19:07:58.879008-05",
            "updated_at": "2020-02-29 19:07:58.879008-05"
          },
          {
            "id": "5f72f881-a67d-4799-9dc2-660245e930ff",
            "term": "def",
            "definition": "def",
            "card_set_id": "4410648e-7270-4112-93ba-9c33ec48fa56",
            "created_at": "2020-02-29 21:57:43.304274-05",
            "updated_at": "2020-02-29 21:57:43.304274-05"
          },
          {
            "id": "5fa372ea-1ee9-447b-969b-82d413f4beec",
            "term": "Declaration of Independence Signed",
            "definition": "1776",
            "card_set_id": "f2003d1b-f83c-46a6-a4e0-eed2cb3b1464",
            "created_at": "2020-03-05 13:48:17.178877-05",
            "updated_at": "2020-03-05 13:48:17.178877-05"
          },
          {
            "id": "6016da0d-85fa-4c99-8e9c-8d8e7f97bebe",
            "term": "\"We Belong Together\" - Mariah Carey",
            "definition": "14 Weeks",
            "card_set_id": "e9fd6113-2dda-4bc1-aa01-9195f0b99c04",
            "created_at": "2020-03-05 14:42:18.955292-05",
            "updated_at": "2020-03-05 14:42:18.955292-05"
          },
          {
            "id": "612f9b61-4a94-409d-8e1c-0cd340a482a7",
            "term": "How close may you park to a stop sign?",
            "definition": "50 feet",
            "card_set_id": "b12577e0-00ab-46a4-b5f7-ccd4f78d2539",
            "created_at": "2020-03-05 14:15:56.617601-05",
            "updated_at": "2020-03-05 14:15:56.617601-05"
          },
          {
            "id": "6594210d-cd23-4eac-a6ab-17b9cb335a2b",
            "term": "\"I Gotta Feeling\" - The Black Eyed Peas",
            "definition": "14 Weeks",
            "card_set_id": "e9fd6113-2dda-4bc1-aa01-9195f0b99c04",
            "created_at": "2020-03-05 14:42:18.957871-05",
            "updated_at": "2020-03-05 14:42:18.957871-05"
          },
          {
            "id": "669c482d-00a5-4d7e-83ca-7e7c8acd3c71",
            "term": "abc",
            "definition": "abc",
            "card_set_id": "89595680-3e3d-4d45-897d-99bb3603fb74",
            "created_at": "2020-02-29 19:08:31.365447-05",
            "updated_at": "2020-02-29 20:05:34.281726-05"
          },
          {
            "id": "6f1091bf-0254-4bd8-9a73-4fd57205f569",
            "term": "World War II",
            "definition": "1939",
            "card_set_id": "f2003d1b-f83c-46a6-a4e0-eed2cb3b1464",
            "created_at": "2020-03-05 13:48:17.296367-05",
            "updated_at": "2020-03-05 13:48:17.296367-05"
          },
          {
            "id": "747e4c53-aa17-45e0-9d73-08f850c2b225",
            "term": "\"I Will Always Love You\" - Whitney Houston",
            "definition": "14 Weeks",
            "card_set_id": "e9fd6113-2dda-4bc1-aa01-9195f0b99c04",
            "created_at": "2020-03-05 14:42:18.93742-05",
            "updated_at": "2020-03-05 14:42:18.93742-05"
          },
          {
            "id": "7865c803-2226-4689-a42b-debd7803841b",
            "term": "simple",
            "definition": "thing",
            "card_set_id": "45e550b4-1649-45a4-9ddf-8cf059e50a0a",
            "created_at": "2020-03-03 12:20:57.521585-05",
            "updated_at": "2020-03-03 12:20:57.521585-05"
          },
          {
            "id": "7f2a4f75-130a-4813-9e36-21778bcf144a",
            "term": "What is the proper distance you may park from the curb?",
            "definition": "6 inches or less",
            "card_set_id": "b12577e0-00ab-46a4-b5f7-ccd4f78d2539",
            "created_at": "2020-03-05 14:15:56.679878-05",
            "updated_at": "2020-03-05 14:15:56.679878-05"
          },
          {
            "id": "7f8ebb0d-a745-4837-b356-8e57c484fd54",
            "term": "Goodbye",
            "definition": "Adiós",
            "card_set_id": "b45a8b50-ed81-4570-bf40-edb42173611d",
            "created_at": "2020-03-05 14:21:49.469828-05",
            "updated_at": "2020-03-05 14:23:11.325432-05"
          },
          {
            "id": "7fc841e0-bd80-47b3-b6d8-a71cb940646e",
            "term": "What is the penalty for driving with a suspended license-first offense?",
            "definition": "Fine of $500 and up to 6 months additional license suspension",
            "card_set_id": "b12577e0-00ab-46a4-b5f7-ccd4f78d2539",
            "created_at": "2020-03-05 14:15:56.685982-05",
            "updated_at": "2020-03-05 14:15:56.685982-05"
          },
          {
            "id": "82fed8b3-13e0-4646-87b5-555a1ffc4933",
            "term": "What is the stopping distance on a dry road at 50 m.p.h.?",
            "definition": "243 feet",
            "card_set_id": "b12577e0-00ab-46a4-b5f7-ccd4f78d2539",
            "created_at": "2020-03-05 14:15:56.678709-05",
            "updated_at": "2020-03-05 14:15:56.678709-05"
          },
          {
            "id": "862f538d-eb5a-46c0-912f-5589a0d9ad41",
            "term": "September 11th",
            "definition": "2001",
            "card_set_id": "f2003d1b-f83c-46a6-a4e0-eed2cb3b1464",
            "created_at": "2020-03-05 13:48:17.312852-05",
            "updated_at": "2020-03-05 13:48:17.312852-05"
          },
          {
            "id": "8dc6d92f-d41f-45b6-8fca-3c6f46f76fdc",
            "term": "def",
            "definition": "def",
            "card_set_id": "fb279999-0ca3-4751-921b-3451778f0da7",
            "created_at": "2020-02-29 21:56:13.731833-05",
            "updated_at": "2020-02-29 21:56:13.731833-05"
          },
          {
            "id": "91b53f3b-751e-409d-979c-ad022518db11",
            "term": "Thank You",
            "definition": "Gracias",
            "card_set_id": "b45a8b50-ed81-4570-bf40-edb42173611d",
            "created_at": "2020-03-05 14:21:49.479972-05",
            "updated_at": "2020-03-05 14:23:14.231096-05"
          },
          {
            "id": "9746f4c4-38e3-49dd-a93c-833414201db8",
            "term": "\"End of the Road\" - Boyz II Men",
            "definition": "13 Weeks",
            "card_set_id": "e9fd6113-2dda-4bc1-aa01-9195f0b99c04",
            "created_at": "2020-03-05 14:42:18.959329-05",
            "updated_at": "2020-03-05 14:42:18.959329-05"
          },
          {
            "id": "9941f972-3e6e-4077-8811-1da660d82b4e",
            "term": "U.S. Army Established",
            "definition": "1789",
            "card_set_id": "f2003d1b-f83c-46a6-a4e0-eed2cb3b1464",
            "created_at": "2020-03-05 13:48:17.236875-05",
            "updated_at": "2020-03-05 13:48:17.236875-05"
          },
          {
            "id": "9d614312-2b5a-4d5c-8ae0-616fb2496b64",
            "term": "\"I'll Make Love to You\"- Boy II Men",
            "definition": "14 Weeks",
            "card_set_id": "e9fd6113-2dda-4bc1-aa01-9195f0b99c04",
            "created_at": "2020-03-05 14:42:18.937872-05",
            "updated_at": "2020-03-05 14:42:18.937872-05"
          },
          {
            "id": "9f397e4d-baf2-45d0-a8b4-77b68d519519",
            "term": "Brown v. Board of Education",
            "definition": "1954",
            "card_set_id": "f2003d1b-f83c-46a6-a4e0-eed2cb3b1464",
            "created_at": "2020-03-05 13:48:17.302755-05",
            "updated_at": "2020-03-05 13:48:17.302755-05"
          },
          {
            "id": "a127e386-5588-4aa1-9921-6d991186d39c",
            "term": "abc",
            "definition": "abc",
            "card_set_id": "18b16906-4d32-4e91-b7fb-2b1d3a38472a",
            "created_at": "2020-02-29 19:07:58.876267-05",
            "updated_at": "2020-02-29 19:07:58.876267-05"
          },
          {
            "id": "a1a4fa38-1311-474c-a490-1e4a04a774d1",
            "term": "When will you be given a proposed License Suspension Notice?",
            "definition": "After receiving 12 points",
            "card_set_id": "b12577e0-00ab-46a4-b5f7-ccd4f78d2539",
            "created_at": "2020-03-05 14:15:56.684543-05",
            "updated_at": "2020-03-05 14:15:56.684543-05"
          },
          {
            "id": "a44d53a3-9a03-4d23-ba58-48bc4ceca07d",
            "term": "Civil Rights Act of 1875",
            "definition": "1875",
            "card_set_id": "f2003d1b-f83c-46a6-a4e0-eed2cb3b1464",
            "created_at": "2020-03-05 13:48:17.288522-05",
            "updated_at": "2020-03-05 13:48:17.288522-05"
          },
          {
            "id": "abba6de9-3774-4058-b594-daeac20b671f",
            "term": "gas",
            "definition": "has",
            "card_set_id": "05429f72-7a24-43c4-a313-11cc1e437432",
            "created_at": "2020-03-02 20:15:32.980276-05",
            "updated_at": "2020-03-03 12:18:57.852792-05"
          },
          {
            "id": "ac06ce94-991c-40e5-b8c7-257928e159df",
            "term": "Civil Rights Act of 1960",
            "definition": "1960",
            "card_set_id": "f2003d1b-f83c-46a6-a4e0-eed2cb3b1464",
            "created_at": "2020-03-05 13:48:17.306047-05",
            "updated_at": "2020-03-05 13:48:17.306047-05"
          },
          {
            "id": "ad026d37-12e4-46ae-9911-9c424b5cf76e",
            "term": "def",
            "definition": "def",
            "card_set_id": "fb279999-0ca3-4751-921b-3451778f0da7",
            "created_at": "2020-02-29 21:56:13.732312-05",
            "updated_at": "2020-02-29 21:56:13.732312-05"
          },
          {
            "id": "ad4a1a53-3710-4548-be51-64f85ed46f2b",
            "term": "Treaty of Paris Signed",
            "definition": "1783",
            "card_set_id": "f2003d1b-f83c-46a6-a4e0-eed2cb3b1464",
            "created_at": "2020-03-05 13:48:17.214368-05",
            "updated_at": "2020-03-05 13:48:17.214368-05"
          },
          {
            "id": "aedcaae6-16b0-41fc-a700-01b5bf245d06",
            "term": "\"Candle in the Wind 1997\" / \"Something About the Way You Look Tonight\" - Elton John",
            "definition": "14 Weeks",
            "card_set_id": "e9fd6113-2dda-4bc1-aa01-9195f0b99c04",
            "created_at": "2020-03-05 14:42:18.948969-05",
            "updated_at": "2020-03-05 14:42:18.948969-05"
          },
          {
            "id": "b2d6f794-b40c-4672-8a99-07e1440ab4bc",
            "term": "\"Macarena\" (Bayside Boys mix) - Los Del Rio",
            "definition": "14 Weeks",
            "card_set_id": "e9fd6113-2dda-4bc1-aa01-9195f0b99c04",
            "created_at": "2020-03-05 14:42:18.948323-05",
            "updated_at": "2020-03-05 14:42:18.948323-05"
          },
          {
            "id": "b3ee2dcf-1bd1-49c9-92ac-cb2823ccd2bd",
            "term": "The Civil War",
            "definition": "1861",
            "card_set_id": "f2003d1b-f83c-46a6-a4e0-eed2cb3b1464",
            "created_at": "2020-03-05 13:48:17.288477-05",
            "updated_at": "2020-03-05 13:48:17.288477-05"
          },
          {
            "id": "ba01412f-a439-4e54-b6f3-17f4fc05c68a",
            "term": "Serious accidents causing death, injury or $200 damage must be reported within 5 days to?",
            "definition": "A Division of motor Vehicles office",
            "card_set_id": "b12577e0-00ab-46a4-b5f7-ccd4f78d2539",
            "created_at": "2020-03-05 14:15:56.680289-05",
            "updated_at": "2020-03-05 14:15:56.680289-05"
          },
          {
            "id": "c2ff4515-8cbe-4334-812f-ec7b6500ab3e",
            "term": "What is the penalty for refusing the breath test?",
            "definition": "6 months suspension (first offense)",
            "card_set_id": "b12577e0-00ab-46a4-b5f7-ccd4f78d2539",
            "created_at": "2020-03-05 14:15:56.717781-05",
            "updated_at": "2020-03-05 14:15:56.717781-05"
          },
          {
            "id": "cc04b07b-0d95-44ee-8293-d3ff7d2d2c5b",
            "term": "\"Despacito\" - Luis Fonsi / Daddy Yankee / Justin Beiber",
            "definition": "16 Weeks",
            "card_set_id": "e9fd6113-2dda-4bc1-aa01-9195f0b99c04",
            "created_at": "2020-03-05 14:42:18.9286-05",
            "updated_at": "2020-03-05 14:42:18.9286-05"
          },
          {
            "id": "d10de093-e6bc-494b-ab9a-e5c55b97ee23",
            "term": "cool",
            "definition": "switch",
            "card_set_id": "45e550b4-1649-45a4-9ddf-8cf059e50a0a",
            "created_at": "2020-03-03 12:20:57.513404-05",
            "updated_at": "2020-03-03 12:20:57.513404-05"
          },
          {
            "id": "d12a3a24-4e47-48ea-91d0-12ebce0bd195",
            "term": "def",
            "definition": "def",
            "card_set_id": "51ef879c-aad7-4c8c-93f2-4b5ab9bd291f",
            "created_at": "2020-03-04 18:23:39.213206-05",
            "updated_at": "2020-03-04 18:23:39.213206-05"
          },
          {
            "id": "d25399d3-7efd-45a0-8564-6cdf869cab8a",
            "term": "\"Lose Yourself\" - Eminem",
            "definition": "12 Weeks",
            "card_set_id": "e9fd6113-2dda-4bc1-aa01-9195f0b99c04",
            "created_at": "2020-03-05 14:42:18.967423-05",
            "updated_at": "2020-03-05 14:42:18.967423-05"
          },
          {
            "id": "d40ea96a-c958-445e-b6bb-e79c22b3d4ea",
            "term": "abc",
            "definition": "abc",
            "card_set_id": "ca397e20-f1be-42a4-bc0f-0441a771b3c5",
            "created_at": "2020-02-29 19:07:58.882941-05",
            "updated_at": "2020-02-29 19:07:58.882941-05"
          },
          {
            "id": "d5a566b1-6e30-4d5c-99fd-6e2a899f03fd",
            "term": "12312",
            "definition": "123123",
            "card_set_id": "6a079dbc-b855-4985-83ee-0071522de70c",
            "created_at": "2020-03-04 20:10:28.693044-05",
            "updated_at": "2020-03-04 20:10:28.693044-05"
          },
          {
            "id": "d883053c-dd6a-4b8e-ab16-526b44d442cc",
            "term": "Up to 3 points may be subtracted from your record if you receive no moving violations for how long?",
            "definition": "One year",
            "card_set_id": "b12577e0-00ab-46a4-b5f7-ccd4f78d2539",
            "created_at": "2020-03-05 14:15:56.711947-05",
            "updated_at": "2020-03-05 14:15:56.711947-05"
          },
          {
            "id": "dd8841f8-acbe-4eca-a1c0-f49ab39cf7f8",
            "term": "21321",
            "definition": "12312",
            "card_set_id": "6a079dbc-b855-4985-83ee-0071522de70c",
            "created_at": "2020-03-04 20:10:28.692623-05",
            "updated_at": "2020-03-04 20:10:28.692623-05"
          },
          {
            "id": "e942e41d-4607-4700-a375-a5d69759ea7c",
            "term": "def",
            "definition": "tend",
            "card_set_id": "765ecdef-e061-4f11-bf62-4b9999ce09f1",
            "created_at": "2020-02-29 21:56:13.723303-05",
            "updated_at": "2020-03-02 19:29:26.380237-05"
          },
          {
            "id": "f0feeb72-2a29-4019-a624-74cc7ce63cdc",
            "term": "cool",
            "definition": "switch",
            "card_set_id": "51ef879c-aad7-4c8c-93f2-4b5ab9bd291f",
            "created_at": "2020-03-04 18:23:39.21396-05",
            "updated_at": "2020-03-04 18:23:39.21396-05"
          },
          {
            "id": "f87cc15a-8cde-4ea7-9ba9-c48a24837996",
            "term": "def",
            "definition": "def",
            "card_set_id": "c155569b-97f8-4032-bf38-6a315d916970",
            "created_at": "2020-03-04 18:24:03.790633-05",
            "updated_at": "2020-03-04 18:24:03.790633-05"
          },
          {
            "id": "fb1b38f7-e42a-41ed-a56b-8809c7b4a83e",
            "term": "def",
            "definition": "def",
            "card_set_id": "45e550b4-1649-45a4-9ddf-8cf059e50a0a",
            "created_at": "2020-03-03 12:20:57.513356-05",
            "updated_at": "2020-03-03 12:20:57.513356-05"
          },
          {
            "id": "fb882e6f-bba7-47c5-b3b3-61ccb2d886a4",
            "term": "How close may you park to a corner?",
            "definition": "25 feet",
            "card_set_id": "b12577e0-00ab-46a4-b5f7-ccd4f78d2539",
            "created_at": "2020-03-05 14:15:56.637387-05",
            "updated_at": "2020-03-05 14:15:56.637387-05"
          },
          {
            "id": "fcb70bbc-3a2e-48d8-96ce-b2a8fa5d5143",
            "term": "cool",
            "definition": "switch",
            "card_set_id": "4410648e-7270-4112-93ba-9c33ec48fa56",
            "created_at": "2020-02-29 21:57:43.304751-05",
            "updated_at": "2020-03-02 19:29:13.40324-05"
          },
          {
            "id": "fd204531-c11e-412d-ba63-04f361429a1f",
            "term": "The War of 1812",
            "definition": "1812",
            "card_set_id": "f2003d1b-f83c-46a6-a4e0-eed2cb3b1464",
            "created_at": "2020-03-05 13:48:17.258396-05",
            "updated_at": "2020-03-05 13:48:17.258396-05"
          },
          {
            "id": "fe9db0dc-429e-4408-ac06-4bfabe56d141",
            "term": "How close may you park to a fire hydrant?",
            "definition": "10 feet",
            "card_set_id": "b12577e0-00ab-46a4-b5f7-ccd4f78d2539",
            "created_at": "2020-03-05 14:15:56.677922-05",
            "updated_at": "2020-03-05 14:15:56.677922-05"
          },
          {"id":"37f0892a-2aa8-4c67-a42c-72fadc93e640","definition":"lorem id ligula suspendisse ornare consequat lectus","term":"Synergistic","card_set_id":"e9bafe3c-ca98-4662-b033-81c024def5fe","created_at":"2020-04-18 21:17:45","updated_at":"2020-04-18 21:17:45"},
{"id":"1a06ddba-787b-4f63-8f40-ba63047364f3","definition":"mauris laoreet ut","term":"fresh-thinking","card_set_id":"e9bafe3c-ca98-4662-b033-81c024def5fe","created_at":"2020-04-12 21:40:53","updated_at":"2020-04-12 21:40:53"},
{"id":"71258f3f-d2c5-4014-9d69-beaf980080a6","definition":"metus arcu adipiscing molestie hendrerit","term":"Phased","card_set_id":"e9bafe3c-ca98-4662-b033-81c024def5fe","created_at":"2020-04-10 23:29:14","updated_at":"2020-04-10 23:29:14"},
{"id":"3ff5e788-aca2-4607-9578-11c869a81e48","definition":"condimentum id luctus","term":"directional","card_set_id":"e9bafe3c-ca98-4662-b033-81c024def5fe","created_at":"2020-04-05 18:51:07","updated_at":"2020-04-05 18:51:07"},
{"id":"1bcfddfd-f933-4574-b39e-66d64f12fc9d","definition":"luctus et ultrices","term":"analyzer","card_set_id":"e9bafe3c-ca98-4662-b033-81c024def5fe","created_at":"2020-04-13 12:18:32","updated_at":"2020-04-13 12:18:32"},
{"id":"699304ad-40b8-4df2-a0cd-df45d790429c","definition":"pede ullamcorper augue a suscipit","term":"Diverse","card_set_id":"e9bafe3c-ca98-4662-b033-81c024def5fe","created_at":"2020-04-05 21:49:04","updated_at":"2020-04-05 21:49:04"},
{"id":"08caf3e9-8357-47fd-8468-11bd4e481cf3","definition":"sit amet nulla quisque arcu libero","term":"Configurable","card_set_id":"e9bafe3c-ca98-4662-b033-81c024def5fe","created_at":"2020-04-13 12:52:14","updated_at":"2020-04-13 12:52:14"},
{"id":"8355d7bb-a37c-4cb4-92c5-96473ed879f8","definition":"enim in tempor","term":"interactive","card_set_id":"e9bafe3c-ca98-4662-b033-81c024def5fe","created_at":"2020-04-01 12:15:17","updated_at":"2020-04-01 12:15:17"},
{"id":"1dcdc7bb-9324-48e1-bbff-1ae3d9ff57e7","definition":"praesent blandit nam nulla integer pede","term":"modular","card_set_id":"e9bafe3c-ca98-4662-b033-81c024def5fe","created_at":"2020-04-12 14:19:39","updated_at":"2020-04-12 14:19:39"},
{"id":"a93d490a-f57f-455b-bcc2-c7712cc873e6","definition":"nullam orci","term":"explicit","card_set_id":"e9bafe3c-ca98-4662-b033-81c024def5fe","created_at":"2020-04-19 13:56:19","updated_at":"2020-04-19 13:56:19"},
{"id":"006f5e29-ee51-4bce-be14-ed47559fc339","definition":"eros vestibulum ac est","term":"application","card_set_id":"e9bafe3c-ca98-4662-b033-81c024def5fe","created_at":"2020-04-07 03:17:20","updated_at":"2020-04-07 03:17:20"},
{"id":"78d77db6-a7b2-43b5-af44-f12efaa56175","definition":"aliquam erat volutpat in congue etiam justo etiam pretium iaculis","term":"optimizing","card_set_id":"e9bafe3c-ca98-4662-b033-81c024def5fe","created_at":"2020-04-05 19:44:41","updated_at":"2020-04-05 19:44:41"},
{"id":"048e4712-e97d-4a4b-a98d-afb8d5892c91","definition":"nulla nunc purus phasellus in","term":"Reduced","card_set_id":"e9bafe3c-ca98-4662-b033-81c024def5fe","created_at":"2020-04-09 22:59:33","updated_at":"2020-04-09 22:59:33"},
{"id":"15f10663-0fb8-40f4-8db5-bbd94c3689ae","definition":"proin interdum mauris non ligula pellentesque","term":"extranet","card_set_id":"e9bafe3c-ca98-4662-b033-81c024def5fe","created_at":"2020-04-05 10:03:08","updated_at":"2020-04-05 10:03:08"},
{"id":"c3a5e19f-fe17-4232-9e20-c085d354d910","definition":"viverra eget congue eget semper rutrum nulla nunc purus phasellus","term":"moratorium","card_set_id":"c17df7aa-8b1b-44f3-b245-7214fa765453aceholder","created_at":"2020-04-04 06:08:19","updated_at":"2020-04-04 06:08:19"},
{"id":"f9948b5c-7d18-4604-a06b-069f24087379","definition":"nisi eu orci mauris lacinia sapien quis libero nullam sit","term":"Automated","card_set_id":"c17df7aa-8b1b-44f3-b245-7214fa765453aceholder","created_at":"2020-04-02 04:18:02","updated_at":"2020-04-02 04:18:02"},
{"id":"d54dcad7-0683-443f-b01f-478f412bf47c","definition":"sagittis nam congue risus semper porta","term":"Re-contextualized","card_set_id":"c17df7aa-8b1b-44f3-b245-7214fa765453aceholder","created_at":"2020-04-19 18:29:27","updated_at":"2020-04-19 18:29:27"},
{"id":"20a0b564-3006-432c-a869-00c70d6fed1e","definition":"pharetra magna ac consequat metus sapien ut nunc","term":"Synergized","card_set_id":"c17df7aa-8b1b-44f3-b245-7214fa765453aceholder","created_at":"2020-04-02 10:52:56","updated_at":"2020-04-02 10:52:56"},
{"id":"ca463220-1cee-4312-9828-d50ead3dd9ea","definition":"platea dictumst aliquam augue quam sollicitudin vitae","term":"matrix","card_set_id":"c17df7aa-8b1b-44f3-b245-7214fa765453aceholder","created_at":"2020-04-09 21:12:22","updated_at":"2020-04-09 21:12:22"},
{"id":"def014f0-c7b9-47ce-a239-3d0595f2dfdf","definition":"justo aliquam quis turpis eget elit","term":"benchmark","card_set_id":"c17df7aa-8b1b-44f3-b245-7214fa765453aceholder","created_at":"2020-04-14 03:47:31","updated_at":"2020-04-14 03:47:31"},
{"id":"3f6c17c8-3bc6-4a01-9483-aef874dc47d8","definition":"lacinia aenean sit amet justo","term":"internet solution","card_set_id":"c17df7aa-8b1b-44f3-b245-7214fa765453aceholder","created_at":"2020-04-13 13:49:02","updated_at":"2020-04-13 13:49:02"},
{"id":"dcbe1000-03ed-4d33-b15f-702c5472febe","definition":"a libero nam dui proin leo odio","term":"dedicated","card_set_id":"c17df7aa-8b1b-44f3-b245-7214fa765453aceholder","created_at":"2020-04-07 14:38:31","updated_at":"2020-04-07 14:38:31"},
{"id":"e9ffb80f-fd27-4dee-8eca-fe9d2e8ffd3a","definition":"aliquam convallis nunc proin","term":"directional","card_set_id":"c17df7aa-8b1b-44f3-b245-7214fa765453aceholder","created_at":"2020-04-10 12:37:52","updated_at":"2020-04-10 12:37:52"},
{"id":"66c01d84-333a-4fb7-aa2d-0fb2f6584a96","definition":"quis augue luctus tincidunt nulla mollis","term":"Re-contextualized","card_set_id":"c17df7aa-8b1b-44f3-b245-7214fa765453aceholder","created_at":"2020-04-03 07:51:03","updated_at":"2020-04-03 07:51:03"},
{"id":"dd5a52ce-4dc5-4e67-b98e-06b0be4ed4a0","definition":"maecenas leo odio","term":"well-modulated","card_set_id":"c17df7aa-8b1b-44f3-b245-7214fa765453aceholder","created_at":"2020-04-17 17:59:22","updated_at":"2020-04-17 17:59:22"},
{"id":"712dd0e6-8c29-493e-b63a-036d5bbed432","definition":"velit id pretium","term":"Managed","card_set_id":"c17df7aa-8b1b-44f3-b245-7214fa765453aceholder","created_at":"2020-04-11 05:24:43","updated_at":"2020-04-11 05:24:43"},
{"id":"602fa2d9-2cc3-47a5-86b2-00371f0d1756","definition":"interdum in ante vestibulum","term":"logistical","card_set_id":"c17df7aa-8b1b-44f3-b245-7214fa765453aceholder","created_at":"2020-04-07 00:15:51","updated_at":"2020-04-07 00:15:51"},
{"id":"ad93b73d-519b-4f44-8787-eb3c76fa5d12","definition":"morbi vel lectus in quam fringilla rhoncus mauris enim leo","term":"interface","card_set_id":"42c4fbc4-ea3d-415c-b3c6-67781c634584aceholder","created_at":"2020-04-02 00:06:19","updated_at":"2020-04-02 00:06:19"},
{"id":"b7376cde-d7e5-474f-9a64-cc585446d56a","definition":"justo aliquam quis turpis eget","term":"24 hour","card_set_id":"42c4fbc4-ea3d-415c-b3c6-67781c634584aceholder","created_at":"2020-04-02 14:48:37","updated_at":"2020-04-02 14:48:37"},
{"id":"5f81a609-7c30-42fb-99a9-312f1d0c3eb4","definition":"sed augue aliquam erat volutpat in congue etiam justo","term":"systematic","card_set_id":"42c4fbc4-ea3d-415c-b3c6-67781c634584aceholder","created_at":"2020-04-16 23:40:31","updated_at":"2020-04-16 23:40:31"},
{"id":"9d39e4a5-7769-4d57-8c92-f90ea4ad16b9","definition":"proin at turpis a pede posuere","term":"De-engineered","card_set_id":"42c4fbc4-ea3d-415c-b3c6-67781c634584aceholder","created_at":"2020-04-11 02:26:10","updated_at":"2020-04-11 02:26:10"},
{"id":"1435cbd0-145c-4c65-a173-10bd72fe7aa2","definition":"felis fusce posuere felis","term":"Multi-channelled","card_set_id":"42c4fbc4-ea3d-415c-b3c6-67781c634584aceholder","created_at":"2020-04-12 11:17:06","updated_at":"2020-04-12 11:17:06"},
{"id":"0700a6ba-0ab0-4bfc-8696-2ab116bfe635","definition":"curabitur convallis duis consequat dui nec nisi volutpat eleifend","term":"pricing structure","card_set_id":"42c4fbc4-ea3d-415c-b3c6-67781c634584aceholder","created_at":"2020-04-04 14:06:48","updated_at":"2020-04-04 14:06:48"},
{"id":"fc833816-036b-4158-98b4-d3034401a86f","definition":"mauris vulputate elementum nullam varius","term":"user-facing","card_set_id":"42c4fbc4-ea3d-415c-b3c6-67781c634584aceholder","created_at":"2020-04-03 19:43:09","updated_at":"2020-04-03 19:43:09"},
{"id":"cd2beb4d-0b2f-4bcd-8197-34a066e34ce3","definition":"arcu","term":"knowledge user","card_set_id":"42c4fbc4-ea3d-415c-b3c6-67781c634584aceholder","created_at":"2020-04-19 11:12:42","updated_at":"2020-04-19 11:12:42"},
{"id":"a1516fab-f712-4d9c-b47a-2c39db80eb94","definition":"ipsum primis in faucibus orci luctus et ultrices posuere","term":"Focused","card_set_id":"42c4fbc4-ea3d-415c-b3c6-67781c634584aceholder","created_at":"2020-04-18 06:50:58","updated_at":"2020-04-18 06:50:58"},
{"id":"8b24e6bb-a382-4a73-a9ba-c8641eb27adf","definition":"turpis integer aliquet massa id lobortis convallis tortor risus","term":"Front-line","card_set_id":"42c4fbc4-ea3d-415c-b3c6-67781c634584aceholder","created_at":"2020-04-04 14:25:08","updated_at":"2020-04-04 14:25:08"},
{"id":"8a124328-1a5a-4d71-9c31-496b25061a9b","definition":"aliquet pulvinar sed","term":"full-range","card_set_id":"42c4fbc4-ea3d-415c-b3c6-67781c634584aceholder","created_at":"2020-04-08 10:35:53","updated_at":"2020-04-08 10:35:53"},
{"id":"3281f651-7011-4a53-8ef1-80d313167369","definition":"sapien ut","term":"Inverse","card_set_id":"42c4fbc4-ea3d-415c-b3c6-67781c634584aceholder","created_at":"2020-04-04 11:52:33","updated_at":"2020-04-04 11:52:33"},
{"id":"671bbd36-22eb-441c-8148-42f5ef399147","definition":"hendrerit at vulputate vitae nisl aenean lectus","term":"definition","card_set_id":"42c4fbc4-ea3d-415c-b3c6-67781c634584aceholder","created_at":"2020-04-04 07:10:48","updated_at":"2020-04-04 07:10:48"},
{"id":"241b6760-772d-42e5-a7ff-013fab76955f","definition":"vel enim","term":"radical","card_set_id":"e5fff633-b85e-4c14-820d-598d4d39b470aceholder","created_at":"2020-04-03 05:25:56","updated_at":"2020-04-03 05:25:56"},
{"id":"6f59070c-b6b6-409f-9288-f15efc0b6f14","definition":"vestibulum sagittis sapien","term":"artificial intelligence","card_set_id":"e5fff633-b85e-4c14-820d-598d4d39b470aceholder","created_at":"2020-04-10 00:48:24","updated_at":"2020-04-10 00:48:24"},
{"id":"792e6976-1e27-49a9-9897-0bfa6296961e","definition":"metus aenean fermentum donec","term":"Upgradable","card_set_id":"59693989-01a0-41f0-b6b5-707e3cf75ea3aceholder","created_at":"2020-04-06 17:22:30","updated_at":"2020-04-06 17:22:30"},
{"id":"2c842393-70fa-4167-b88f-014326fc1d7a","definition":"sed ante vivamus tortor","term":"functionalities","card_set_id":"59693989-01a0-41f0-b6b5-707e3cf75ea3aceholder","created_at":"2020-04-06 06:51:50","updated_at":"2020-04-06 06:51:50"},
{"id":"e2c2384d-3a45-4607-9453-cf5bc8728606","definition":"orci luctus et ultrices","term":"Vision-oriented","card_set_id":"59693989-01a0-41f0-b6b5-707e3cf75ea3aceholder","created_at":"2020-04-02 03:36:19","updated_at":"2020-04-02 03:36:19"},
{"id":"ee63b3eb-daab-475a-8299-6db91817345e","definition":"vel accumsan tellus nisi eu orci mauris","term":"customer loyalty","card_set_id":"59693989-01a0-41f0-b6b5-707e3cf75ea3aceholder","created_at":"2020-04-01 16:31:39","updated_at":"2020-04-01 16:31:39"},
{"id":"c976e950-c3f5-4c05-9903-1c8501bf0ec4","definition":"tortor sollicitudin mi sit amet lobortis sapien sapien non mi","term":"system-worthy","card_set_id":"59693989-01a0-41f0-b6b5-707e3cf75ea3aceholder","created_at":"2020-04-07 23:30:28","updated_at":"2020-04-07 23:30:28"},
{"id":"464533c8-8e11-4b19-a8bd-12a1288bb485","definition":"ac est lacinia nisi venenatis tristique fusce congue diam id","term":"mission-critical","card_set_id":"efdda1a3-19f8-4023-9ebd-d134cad60e3caceholder","created_at":"2020-04-01 03:41:03","updated_at":"2020-04-01 03:41:03"},
{"id":"4b309dae-47c6-4e8a-84b7-600a79cd081a","definition":"purus sit amet nulla quisque arcu libero rutrum ac lobortis","term":"frame","card_set_id":"efdda1a3-19f8-4023-9ebd-d134cad60e3caceholder","created_at":"2020-04-17 00:10:48","updated_at":"2020-04-17 00:10:48"},
{"id":"db009795-cc23-41eb-b125-02160598c766","definition":"lectus","term":"bandwidth-monitored","card_set_id":"efdda1a3-19f8-4023-9ebd-d134cad60e3caceholder","created_at":"2020-04-20 17:02:45","updated_at":"2020-04-20 17:02:45"},
{"id":"9ff9aaa9-fe29-413d-9450-4c77c7c36eae","definition":"lectus aliquam sit amet diam in magna bibendum imperdiet","term":"Innovative","card_set_id":"5c9ecbc1-e5db-420d-9b64-e775caa10cd2aceholder","created_at":"2020-04-11 02:47:04","updated_at":"2020-04-11 02:47:04"},
{"id":"ec9a4d32-a26e-4111-94f3-05000d9dd0a5","definition":"donec ut dolor","term":"Focused","card_set_id":"5c9ecbc1-e5db-420d-9b64-e775caa10cd2aceholder","created_at":"2020-04-03 02:18:56","updated_at":"2020-04-03 02:18:56"},
{"id":"ae9575b5-c7c0-4730-8806-2f1647721207","definition":"mauris sit amet eros suspendisse","term":"Up-sized","card_set_id":"5c9ecbc1-e5db-420d-9b64-e775caa10cd2aceholder","created_at":"2020-04-03 04:56:21","updated_at":"2020-04-03 04:56:21"},
{"id":"3d05b2bb-389d-48ef-802f-adae77005304","definition":"aliquam non mauris morbi","term":"optimal","card_set_id":"5c9ecbc1-e5db-420d-9b64-e775caa10cd2aceholder","created_at":"2020-04-01 12:07:16","updated_at":"2020-04-01 12:07:16"},
{"id":"bfd04565-ee01-49e4-b366-787ad5c7f00e","definition":"congue diam","term":"empowering","card_set_id":"5c9ecbc1-e5db-420d-9b64-e775caa10cd2aceholder","created_at":"2020-04-12 20:03:30","updated_at":"2020-04-12 20:03:30"},
{"id":"c5aeb195-9024-4f32-854b-2a596282655f","definition":"ut ultrices","term":"hybrid","card_set_id":"5c9ecbc1-e5db-420d-9b64-e775caa10cd2aceholder","created_at":"2020-04-02 10:25:18","updated_at":"2020-04-02 10:25:18"},
{"id":"54afc579-d83e-4338-9ae4-76eb79138156","definition":"risus semper porta volutpat quam pede lobortis ligula","term":"Multi-channelled","card_set_id":"5c9ecbc1-e5db-420d-9b64-e775caa10cd2aceholder","created_at":"2020-04-05 10:27:39","updated_at":"2020-04-05 10:27:39"},
{"id":"7afe52e4-ee28-4667-ae21-8ed5c7b3e9eb","definition":"et","term":"De-engineered","card_set_id":"5c9ecbc1-e5db-420d-9b64-e775caa10cd2aceholder","created_at":"2020-04-02 07:43:30","updated_at":"2020-04-02 07:43:30"},
{"id":"cf29d544-b5f9-43e7-aadb-6e3dc68ca9d3","definition":"dui vel sem sed sagittis nam congue risus semper","term":"Re-engineered","card_set_id":"5c9ecbc1-e5db-420d-9b64-e775caa10cd2aceholder","created_at":"2020-04-07 22:00:05","updated_at":"2020-04-07 22:00:05"},
{"id":"6b73df24-6fa7-451c-b407-94dac7209089","definition":"maecenas leo odio","term":"task-force","card_set_id":"5c9ecbc1-e5db-420d-9b64-e775caa10cd2aceholder","created_at":"2020-04-15 01:22:06","updated_at":"2020-04-15 01:22:06"},
{"id":"63cbc0e5-4b88-4ca0-9935-d4c60ce4f344","definition":"sapien cum sociis natoque penatibus et magnis dis","term":"projection","card_set_id":"a66a2a6a-b841-4afd-9885-a817cf30010aaceholder","created_at":"2020-04-09 01:09:42","updated_at":"2020-04-09 01:09:42"},
{"id":"7c45d4b5-e81c-48e7-a32e-97af88731143","definition":"dui luctus rutrum nulla tellus in sagittis dui vel","term":"toolset","card_set_id":"a66a2a6a-b841-4afd-9885-a817cf30010aaceholder","created_at":"2020-04-16 06:18:29","updated_at":"2020-04-16 06:18:29"},
{"id":"4394c453-b463-4605-a4e6-86ba325b6517","definition":"nunc","term":"Total","card_set_id":"a66a2a6a-b841-4afd-9885-a817cf30010aaceholder","created_at":"2020-04-12 04:55:20","updated_at":"2020-04-12 04:55:20"},
{"id":"5facb709-e9d9-4adf-9173-27418dd4ee7b","definition":"duis at","term":"Reactive","card_set_id":"a66a2a6a-b841-4afd-9885-a817cf30010aaceholder","created_at":"2020-04-19 02:27:11","updated_at":"2020-04-19 02:27:11"},
{"id":"eca443ad-30dd-4580-9aff-c025e4ff577c","definition":"nulla sed accumsan felis ut at dolor quis odio","term":"benchmark","card_set_id":"a66a2a6a-b841-4afd-9885-a817cf30010aaceholder","created_at":"2020-04-03 20:27:10","updated_at":"2020-04-03 20:27:10"},
{"id":"2a6a8cbb-1113-48a9-b379-36d2844acb15","definition":"rutrum nulla","term":"core","card_set_id":"a66a2a6a-b841-4afd-9885-a817cf30010aaceholder","created_at":"2020-04-07 05:14:27","updated_at":"2020-04-07 05:14:27"},
{"id":"c1f8ba0f-9933-48bb-9aed-5a9485f6615f","definition":"metus sapien ut nunc vestibulum ante","term":"bandwidth-monitored","card_set_id":"a66a2a6a-b841-4afd-9885-a817cf30010aaceholder","created_at":"2020-04-16 11:09:46","updated_at":"2020-04-16 11:09:46"},
{"id":"c64d30c8-fa24-4650-be6c-efef76428390","definition":"molestie nibh in","term":"alliance","card_set_id":"a66a2a6a-b841-4afd-9885-a817cf30010aaceholder","created_at":"2020-04-12 13:57:08","updated_at":"2020-04-12 13:57:08"},
{"id":"acbd4f50-c596-469f-a88a-a5164686f94f","definition":"aliquam quis turpis eget elit sodales scelerisque mauris sit","term":"full-range","card_set_id":"f36004e2-b386-4583-a714-3c3fe7165566aceholder","created_at":"2020-04-05 09:25:51","updated_at":"2020-04-05 09:25:51"},
{"id":"a09d47f0-8605-4ee4-b757-8c0dba483c8b","definition":"posuere felis sed lacus morbi sem mauris laoreet ut rhoncus","term":"scalable","card_set_id":"f36004e2-b386-4583-a714-3c3fe7165566aceholder","created_at":"2020-04-19 03:00:49","updated_at":"2020-04-19 03:00:49"},
{"id":"55323fa3-8015-4bf6-8e55-48ba6eb38283","definition":"ante nulla justo aliquam quis","term":"homogeneous","card_set_id":"f36004e2-b386-4583-a714-3c3fe7165566aceholder","created_at":"2020-04-03 17:20:09","updated_at":"2020-04-03 17:20:09"},
{"id":"a4033c9a-ab3f-42ca-99b8-180446ff7b5c","definition":"sit","term":"tertiary","card_set_id":"f36004e2-b386-4583-a714-3c3fe7165566aceholder","created_at":"2020-04-16 06:22:31","updated_at":"2020-04-16 06:22:31"},
{"id":"bdf4762a-4195-4fd0-b27a-f394e5f6f29b","definition":"ut erat id mauris vulputate elementum nullam varius","term":"collaboration","card_set_id":"f36004e2-b386-4583-a714-3c3fe7165566aceholder","created_at":"2020-04-03 18:33:49","updated_at":"2020-04-03 18:33:49"},
{"id":"56d24fb4-a5f5-47f7-9e9a-acf2c07c62b0","definition":"vel nulla eget eros elementum pellentesque","term":"User-centric","card_set_id":"62e40aff-9e4b-4781-b645-94ecd510b5eb","created_at":"2020-04-04 19:36:31","updated_at":"2020-04-04 19:36:31"},
{"id":"e67c4350-0234-49ec-896b-16f7d15ebdfa","definition":"nulla ultrices aliquet maecenas leo odio condimentum","term":"monitoring","card_set_id":"62e40aff-9e4b-4781-b645-94ecd510b5eb","created_at":"2020-04-02 05:19:56","updated_at":"2020-04-02 05:19:56"},
{"id":"6085a415-5355-4843-81c8-9681a0134330","definition":"turpis a pede","term":"frame","card_set_id":"62e40aff-9e4b-4781-b645-94ecd510b5eb","created_at":"2020-04-01 15:12:52","updated_at":"2020-04-01 15:12:52"},
{"id":"d0be1ee0-fdac-40a9-8338-2495842b8b80","definition":"cum sociis natoque penatibus et magnis dis parturient","term":"bi-directional","card_set_id":"62e40aff-9e4b-4781-b645-94ecd510b5eb","created_at":"2020-04-06 03:39:07","updated_at":"2020-04-06 03:39:07"},
{"id":"908e906e-f238-46e8-8cb8-967b50a97e07","definition":"tincidunt","term":"scalable","card_set_id":"62e40aff-9e4b-4781-b645-94ecd510b5eb","created_at":"2020-04-17 09:25:54","updated_at":"2020-04-17 09:25:54"},
{"id":"567bef65-9e96-4119-9656-c6324b4e4169","definition":"morbi vel lectus in quam fringilla","term":"solution","card_set_id":"62e40aff-9e4b-4781-b645-94ecd510b5eb","created_at":"2020-04-16 00:45:36","updated_at":"2020-04-16 00:45:36"},
{"id":"68da0aa3-5b52-4de7-9cb8-15b36aa16a30","definition":"ipsum aliquam non mauris morbi non lectus aliquam sit","term":"Centralized","card_set_id":"62e40aff-9e4b-4781-b645-94ecd510b5eb","created_at":"2020-04-14 02:01:40","updated_at":"2020-04-14 02:01:40"},
{"id":"1626f1f5-e73d-4860-830d-298761d514ac","definition":"platea dictumst etiam faucibus cursus urna","term":"success","card_set_id":"62e40aff-9e4b-4781-b645-94ecd510b5eb","created_at":"2020-04-12 02:15:49","updated_at":"2020-04-12 02:15:49"},
{"id":"1efb78be-d57d-474a-a7fa-40b5b5d8f5c9","definition":"faucibus orci luctus","term":"Multi-layered","card_set_id":"c4cdd60d-2dc3-47fa-be70-0cd467d2dbe1","created_at":"2020-04-11 09:11:28","updated_at":"2020-04-11 09:11:28"},
{"id":"c48bdc17-b25b-46ff-9fe2-767d382101d0","definition":"vel pede morbi porttitor lorem id ligula suspendisse ornare consequat","term":"5th generation","card_set_id":"c4cdd60d-2dc3-47fa-be70-0cd467d2dbe1","created_at":"2020-04-17 07:34:14","updated_at":"2020-04-17 07:34:14"},
{"id":"0c541520-db8d-4d5d-9c43-227e88486d93","definition":"sit amet sapien","term":"knowledge user","card_set_id":"c4cdd60d-2dc3-47fa-be70-0cd467d2dbe1","created_at":"2020-04-05 03:34:01","updated_at":"2020-04-05 03:34:01"},
{"id":"e3bb1e1d-409b-4fb2-a4a8-1a8e5afd0a3a","definition":"at","term":"Cross-platform","card_set_id":"db2ed56e-cab8-4ab7-8c01-31e776920d71","created_at":"2020-04-17 21:15:42","updated_at":"2020-04-17 21:15:42"},
{"id":"95e1021b-0bf1-43a4-aae9-5bbe43b8d605","definition":"at lorem integer tincidunt ante vel ipsum praesent blandit","term":"Advanced","card_set_id":"db2ed56e-cab8-4ab7-8c01-31e776920d71","created_at":"2020-04-02 17:52:39","updated_at":"2020-04-02 17:52:39"},
{"id":"1cbec7d3-5256-4dd5-8831-47ffd208b1ff","definition":"eget orci vehicula condimentum curabitur in","term":"contextually-based","card_set_id":"db2ed56e-cab8-4ab7-8c01-31e776920d71","created_at":"2020-04-09 00:16:49","updated_at":"2020-04-09 00:16:49"},
{"id":"4d5f26b1-24a5-4136-94fa-f535396c4c99","definition":"ultrices vel augue vestibulum ante","term":"Enhanced","card_set_id":"db2ed56e-cab8-4ab7-8c01-31e776920d71","created_at":"2020-04-08 15:11:46","updated_at":"2020-04-08 15:11:46"},
{"id":"1508fd13-3a5a-48ec-9299-6ab5795c8540","definition":"maecenas leo odio condimentum id luctus","term":"support","card_set_id":"db2ed56e-cab8-4ab7-8c01-31e776920d71","created_at":"2020-04-17 13:24:14","updated_at":"2020-04-17 13:24:14"},
{"id":"1d768523-0e15-4d91-ad4e-c6812484d5fd","definition":"sapien sapien non mi integer","term":"conglomeration","card_set_id":"db2ed56e-cab8-4ab7-8c01-31e776920d71","created_at":"2020-04-10 23:04:33","updated_at":"2020-04-10 23:04:33"},
{"id":"b43bf09c-9be2-4c58-9fc7-3ed58b605fc0","definition":"ultrices posuere cubilia curae nulla dapibus","term":"stable","card_set_id":"db2ed56e-cab8-4ab7-8c01-31e776920d71","created_at":"2020-04-02 17:09:05","updated_at":"2020-04-02 17:09:05"},
{"id":"a43d3250-9f89-4edb-bdf1-fe409fa6daa6","definition":"vestibulum sit amet cursus id","term":"analyzing","card_set_id":"db2ed56e-cab8-4ab7-8c01-31e776920d71","created_at":"2020-04-20 06:23:05","updated_at":"2020-04-20 06:23:05"},
{"id":"b75855f2-c860-4ad2-9237-00ce3606a736","definition":"suscipit a feugiat","term":"Pre-emptive","card_set_id":"db2ed56e-cab8-4ab7-8c01-31e776920d71","created_at":"2020-04-11 23:46:27","updated_at":"2020-04-11 23:46:27"},
{"id":"c8b70ef3-52b7-43a5-933a-c4b65d745df0","definition":"nulla ultrices aliquet maecenas leo odio condimentum","term":"Horizontal","card_set_id":"ae1802b0-5cf4-4c94-9bb4-d227ca3d44cf","created_at":"2020-04-18 03:09:22","updated_at":"2020-04-18 03:09:22"},
{"id":"f6b471d5-02bd-4bf0-a334-11f0097cd117","definition":"ultrices","term":"full-range","card_set_id":"ae1802b0-5cf4-4c94-9bb4-d227ca3d44cf","created_at":"2020-04-18 08:59:22","updated_at":"2020-04-18 08:59:22"},
{"id":"1a1a7110-adb6-4ea5-9597-7c25e4f3c398","definition":"quisque arcu libero rutrum ac lobortis vel dapibus at","term":"focus group","card_set_id":"7454cb59-744f-455a-b401-2e25e7679a8c","created_at":"2020-04-10 03:19:15","updated_at":"2020-04-10 03:19:15"},
{"id":"0e3908e3-f9ae-464d-a48c-d906f42d18ca","definition":"vulputate","term":"logistical","card_set_id":"7454cb59-744f-455a-b401-2e25e7679a8c","created_at":"2020-04-19 14:53:37","updated_at":"2020-04-19 14:53:37"},
{"id":"aa285b61-a6fb-4bec-8e5d-e0fc0baa5f0c","definition":"ac diam cras pellentesque volutpat dui maecenas","term":"archive","card_set_id":"e6324e76-39b9-4eb0-b3be-89c438acee14","created_at":"2020-04-13 00:01:57","updated_at":"2020-04-13 00:01:57"},
{"id":"79315ab9-994a-40a9-a04b-f18ec14eeac8","definition":"vitae quam","term":"extranet","card_set_id":"e6324e76-39b9-4eb0-b3be-89c438acee14","created_at":"2020-04-02 15:40:14","updated_at":"2020-04-02 15:40:14"},
{"id":"92d37f7d-5dda-4482-abd4-2de2f2d85338","definition":"metus vitae ipsum aliquam non mauris","term":"Monitored","card_set_id":"e6324e76-39b9-4eb0-b3be-89c438acee14","created_at":"2020-04-14 18:48:15","updated_at":"2020-04-14 18:48:15"},
{"id":"0d213acf-23b8-498c-90de-cb2a91a6398f","definition":"vestibulum ante","term":"encompassing","card_set_id":"e6324e76-39b9-4eb0-b3be-89c438acee14","created_at":"2020-04-04 07:11:46","updated_at":"2020-04-04 07:11:46"},
{"id":"00fc5d3e-9168-42e8-9ea7-71f03fdecb36","definition":"consequat varius integer ac","term":"ability","card_set_id":"c8e680b0-6ebf-437d-b85d-03c5abb126bd","created_at":"2020-04-13 11:27:33","updated_at":"2020-04-13 11:27:33"},
{"id":"05dc90be-4a3c-4bea-8fd1-b70519b1e114","definition":"fringilla rhoncus mauris enim leo rhoncus sed vestibulum sit amet","term":"protocol","card_set_id":"c8e680b0-6ebf-437d-b85d-03c5abb126bd","created_at":"2020-04-05 17:01:12","updated_at":"2020-04-05 17:01:12"},
{"id":"d5a2558b-d45d-4573-ad26-aa8a36718b76","definition":"vestibulum sed magna at nunc commodo placerat praesent blandit","term":"eco-centric","card_set_id":"c8e680b0-6ebf-437d-b85d-03c5abb126bd","created_at":"2020-04-14 08:59:07","updated_at":"2020-04-14 08:59:07"},
{"id":"a4249949-799b-4543-8bf1-c93953d0246c","definition":"eros viverra eget congue eget semper rutrum","term":"Persevering","card_set_id":"c8e680b0-6ebf-437d-b85d-03c5abb126bd","created_at":"2020-04-20 09:59:30","updated_at":"2020-04-20 09:59:30"},
{"id":"8526a03a-d52c-4275-9fe9-fb12f0c33b02","definition":"in tempor turpis nec euismod","term":"Progressive","card_set_id":"9d4a1d96-e533-4ccc-b170-832bffbd69bc","created_at":"2020-04-07 04:57:59","updated_at":"2020-04-07 04:57:59"},
{"id":"8375e1e8-1c92-41da-bb27-485932d5bb10","definition":"rutrum rutrum neque aenean auctor gravida","term":"Up-sized","card_set_id":"9d4a1d96-e533-4ccc-b170-832bffbd69bc","created_at":"2020-04-05 06:37:56","updated_at":"2020-04-05 06:37:56"},
{"id":"48b2f038-c4e3-4c44-9f9a-01f4c612192f","definition":"eleifend pede libero","term":"matrix","card_set_id":"9d4a1d96-e533-4ccc-b170-832bffbd69bc","created_at":"2020-04-03 06:17:52","updated_at":"2020-04-03 06:17:52"},
{"id":"aa33b5a9-6498-482a-87d6-1ba7fa1977d3","definition":"venenatis lacinia aenean sit amet justo","term":"bandwidth-monitored","card_set_id":"a8f58a5e-a10c-4257-8494-601e0bbdf488","created_at":"2020-04-14 00:38:08","updated_at":"2020-04-14 00:38:08"},
{"id":"be5e0316-b712-4536-883a-6741f2817c80","definition":"massa id nisl venenatis","term":"infrastructure","card_set_id":"a8f58a5e-a10c-4257-8494-601e0bbdf488","created_at":"2020-04-04 05:58:21","updated_at":"2020-04-04 05:58:21"},
{"id":"23c394a1-e14e-4b8b-9df8-d4d2cff2b24a","definition":"suscipit nulla elit ac nulla sed vel enim","term":"knowledge user","card_set_id":"a8f58a5e-a10c-4257-8494-601e0bbdf488","created_at":"2020-04-17 20:13:07","updated_at":"2020-04-17 20:13:07"},
{"id":"fcdaf1a3-129f-411f-9bf3-b0fbe8f00b9a","definition":"imperdiet sapien urna pretium nisl ut volutpat sapien","term":"explicit","card_set_id":"a8f58a5e-a10c-4257-8494-601e0bbdf488","created_at":"2020-04-17 03:23:19","updated_at":"2020-04-17 03:23:19"},
{"id":"12ae1389-d371-44b2-8f2d-2265ca84acd3","definition":"ultrices","term":"homogeneous","card_set_id":"a8f58a5e-a10c-4257-8494-601e0bbdf488","created_at":"2020-04-16 16:04:55","updated_at":"2020-04-16 16:04:55"},
{"id":"1a563efc-ed2f-45c5-9efa-73161c5e6045","definition":"consequat nulla nisl nunc nisl duis bibendum","term":"superstructure","card_set_id":"a8f58a5e-a10c-4257-8494-601e0bbdf488","created_at":"2020-04-07 11:50:46","updated_at":"2020-04-07 11:50:46"},
{"id":"8ccffb5d-7c70-49ee-9eab-0352a9df0eba","definition":"fusce posuere felis sed lacus morbi sem mauris laoreet ut","term":"Up-sized","card_set_id":"a8f58a5e-a10c-4257-8494-601e0bbdf488","created_at":"2020-04-09 03:13:13","updated_at":"2020-04-09 03:13:13"},
{"id":"71a28859-cb19-4096-afa8-25936b30063e","definition":"ac neque duis bibendum morbi non","term":"intangible","card_set_id":"dcde9e7a-c331-4123-9afc-4224f3d21450","created_at":"2020-04-09 09:27:18","updated_at":"2020-04-09 09:27:18"},
{"id":"b6672903-a7e6-44f2-94dc-ef222556d5a3","definition":"vulputate justo in blandit ultrices","term":"system engine","card_set_id":"dcde9e7a-c331-4123-9afc-4224f3d21450","created_at":"2020-04-16 16:55:54","updated_at":"2020-04-16 16:55:54"},
{"id":"033ea354-213f-4c4a-9bf8-959756029479","definition":"ultrices posuere cubilia curae","term":"system engine","card_set_id":"dcde9e7a-c331-4123-9afc-4224f3d21450","created_at":"2020-04-10 04:54:18","updated_at":"2020-04-10 04:54:18"},
{"id":"5d14add5-7f7f-4498-9c07-6550d9d8018b","definition":"pede justo lacinia eget tincidunt","term":"Sharable","card_set_id":"dcde9e7a-c331-4123-9afc-4224f3d21450","created_at":"2020-04-03 20:12:56","updated_at":"2020-04-03 20:12:56"},
{"id":"dc640801-bc16-4df1-b284-6ec8b5e1b528","definition":"ante ipsum primis in faucibus orci","term":"zero administration","card_set_id":"dcde9e7a-c331-4123-9afc-4224f3d21450","created_at":"2020-04-20 15:55:51","updated_at":"2020-04-20 15:55:51"},
{"id":"5ea98c81-57c6-4cb7-bf4e-49141ddf9469","definition":"etiam justo etiam pretium iaculis","term":"open architecture","card_set_id":"dcde9e7a-c331-4123-9afc-4224f3d21450","created_at":"2020-04-03 17:19:48","updated_at":"2020-04-03 17:19:48"},
{"id":"7d59ba3d-90ae-4984-a135-fa394280f32c","definition":"tincidunt ante vel","term":"Polarised","card_set_id":"dcde9e7a-c331-4123-9afc-4224f3d21450","created_at":"2020-04-11 19:35:12","updated_at":"2020-04-11 19:35:12"},
{"id":"013830d7-ad0f-4b70-ba4b-2623ff2c6a08","definition":"natoque penatibus et magnis","term":"Synergistic","card_set_id":"dcde9e7a-c331-4123-9afc-4224f3d21450","created_at":"2020-04-19 22:07:35","updated_at":"2020-04-19 22:07:35"},
{"id":"a9c204b1-02ef-407c-ba55-685a66ebd11d","definition":"eu nibh","term":"Sharable","card_set_id":"dcde9e7a-c331-4123-9afc-4224f3d21450","created_at":"2020-04-20 00:15:18","updated_at":"2020-04-20 00:15:18"},
{"id":"34accad0-dae4-48e1-9c83-9634d141f735","definition":"vestibulum sed magna at nunc commodo placerat praesent","term":"support","card_set_id":"dcde9e7a-c331-4123-9afc-4224f3d21450","created_at":"2020-04-07 15:03:25","updated_at":"2020-04-07 15:03:25"},
{"id":"eec1a588-25f3-49c8-893d-b7df553c1224","definition":"magna ac","term":"national","card_set_id":"730e5755-30ea-4215-900c-be4e67e9e5d6","created_at":"2020-04-13 04:03:37","updated_at":"2020-04-13 04:03:37"},
{"id":"50bd165f-fce8-44d0-9a74-7ad16353b250","definition":"purus sit amet","term":"reciprocal","card_set_id":"730e5755-30ea-4215-900c-be4e67e9e5d6","created_at":"2020-04-15 12:11:11","updated_at":"2020-04-15 12:11:11"},
{"id":"a5bdee55-bc95-4dc2-8a78-2d36cf29b82c","definition":"duis at velit","term":"hierarchy","card_set_id":"730e5755-30ea-4215-900c-be4e67e9e5d6","created_at":"2020-04-03 22:06:26","updated_at":"2020-04-03 22:06:26"},
{"id":"a6caf4c0-3d79-4d16-bbac-297f2fef6186","definition":"at dolor quis odio consequat varius integer ac leo","term":"national","card_set_id":"730e5755-30ea-4215-900c-be4e67e9e5d6","created_at":"2020-04-14 19:51:23","updated_at":"2020-04-14 19:51:23"},
{"id":"5b9ba6c6-8474-4f66-acf4-65ab42a8f7c1","definition":"turpis enim blandit mi in porttitor pede justo eu","term":"upward-trending","card_set_id":"de3f5e21-74d7-446f-807e-003517ca24ea","created_at":"2020-04-19 09:43:02","updated_at":"2020-04-19 09:43:02"},
{"id":"31e243dc-0b95-4a70-9378-f989d477a01e","definition":"nisl ut volutpat","term":"productivity","card_set_id":"4db4cc0b-8657-40cd-85c5-bee21e769a5a","created_at":"2020-04-08 05:49:47","updated_at":"2020-04-08 05:49:47"},
{"id":"efed4e3c-9457-4ad8-8ed4-a8a7f08a23e3","definition":"blandit lacinia erat","term":"framework","card_set_id":"4db4cc0b-8657-40cd-85c5-bee21e769a5a","created_at":"2020-04-06 18:45:41","updated_at":"2020-04-06 18:45:41"},
{"id":"494822af-d8df-41bb-bd8d-ba5db1801006","definition":"nec sem duis aliquam","term":"clear-thinking","card_set_id":"4db4cc0b-8657-40cd-85c5-bee21e769a5a","created_at":"2020-04-01 07:19:52","updated_at":"2020-04-01 07:19:52"},
{"id":"70e24e9a-6b09-4407-a39a-42d77df389a1","definition":"fringilla rhoncus mauris enim leo rhoncus sed vestibulum","term":"heuristic","card_set_id":"4db4cc0b-8657-40cd-85c5-bee21e769a5a","created_at":"2020-04-03 09:43:09","updated_at":"2020-04-03 09:43:09"},
{"id":"34377159-1ffc-4cc9-ad2c-5e58f009ba76","definition":"cras","term":"orchestration","card_set_id":"c50f276d-493f-4141-8d3a-85b2bd84e427","created_at":"2020-04-01 20:50:57","updated_at":"2020-04-01 20:50:57"},
{"id":"5c947f1c-4166-40e8-a721-c92a6c37fc2c","definition":"at lorem integer tincidunt ante vel ipsum praesent","term":"Reactive","card_set_id":"c50f276d-493f-4141-8d3a-85b2bd84e427","created_at":"2020-04-02 10:28:31","updated_at":"2020-04-02 10:28:31"},
{"id":"08b0dff0-06bf-4a3d-9775-d9402350923f","definition":"quam sapien","term":"Upgradable","card_set_id":"c50f276d-493f-4141-8d3a-85b2bd84e427","created_at":"2020-04-02 19:47:54","updated_at":"2020-04-02 19:47:54"},
{"id":"fabc8a59-6561-4b27-864e-7a9996334171","definition":"mattis pulvinar nulla pede","term":"zero administration","card_set_id":"c50f276d-493f-4141-8d3a-85b2bd84e427","created_at":"2020-04-03 11:00:07","updated_at":"2020-04-03 11:00:07"},
{"id":"a58861b8-6bb4-40fe-955e-85534f145582","definition":"augue vestibulum ante ipsum primis in faucibus","term":"Face to face","card_set_id":"c50f276d-493f-4141-8d3a-85b2bd84e427","created_at":"2020-04-01 00:28:36","updated_at":"2020-04-01 00:28:36"},
{"id":"8157af0e-d66a-4cff-8ced-1932885450c3","definition":"ac lobortis vel dapibus at","term":"Organic","card_set_id":"c59d4060-fa10-4b68-a867-c9e44af30679","created_at":"2020-04-03 04:25:43","updated_at":"2020-04-03 04:25:43"},
{"id":"890af280-d228-4e0b-9ae1-fb283994cc1e","definition":"tincidunt in leo maecenas pulvinar lobortis est phasellus sit amet","term":"solution","card_set_id":"c59d4060-fa10-4b68-a867-c9e44af30679","created_at":"2020-04-06 06:51:37","updated_at":"2020-04-06 06:51:37"},
{"id":"f0312c9f-66c9-416b-9c90-52ec5b6a7906","definition":"proin eu mi nulla ac enim in tempor turpis nec","term":"installation","card_set_id":"c59d4060-fa10-4b68-a867-c9e44af30679","created_at":"2020-04-01 12:35:42","updated_at":"2020-04-01 12:35:42"},
{"id":"955b805f-358e-41e3-aa23-d10c3c4f37d6","definition":"nulla eget eros elementum pellentesque quisque porta volutpat erat quisque","term":"context-sensitive","card_set_id":"c59d4060-fa10-4b68-a867-c9e44af30679","created_at":"2020-04-01 02:37:43","updated_at":"2020-04-01 02:37:43"},
{"id":"308bcc5a-3512-45b0-bfd1-a041017aee94","definition":"elit proin interdum mauris non","term":"policy","card_set_id":"c59d4060-fa10-4b68-a867-c9e44af30679","created_at":"2020-04-15 18:57:10","updated_at":"2020-04-15 18:57:10"},
{"id":"4bee91c6-572c-4ed8-8d45-9c2cc06b26b6","definition":"tincidunt lacus at velit","term":"structure","card_set_id":"c59d4060-fa10-4b68-a867-c9e44af30679","created_at":"2020-04-05 23:09:14","updated_at":"2020-04-05 23:09:14"},
{"id":"625b4515-4bfc-4454-a5de-3c913fadcaf6","definition":"volutpat quam pede lobortis ligula sit amet eleifend","term":"system engine","card_set_id":"c59d4060-fa10-4b68-a867-c9e44af30679","created_at":"2020-04-02 09:27:04","updated_at":"2020-04-02 09:27:04"},
{"id":"9c510054-ab8d-4599-b3d9-00e12d331c6f","definition":"donec odio justo sollicitudin ut suscipit a feugiat et eros","term":"regional","card_set_id":"000c77ab-abdf-4c55-a4f8-deee3455005e","created_at":"2020-04-05 15:23:20","updated_at":"2020-04-05 15:23:20"},
{"id":"0e67cbcf-22b8-473c-a5f1-9abbd1521abb","definition":"erat fermentum justo nec condimentum","term":"Progressive","card_set_id":"000c77ab-abdf-4c55-a4f8-deee3455005e","created_at":"2020-04-03 07:57:08","updated_at":"2020-04-03 07:57:08"},
{"id":"7959d10e-a9ae-44cc-bd9f-3ea9ed5c552b","definition":"pretium nisl ut volutpat sapien arcu sed augue aliquam erat","term":"Inverse","card_set_id":"000c77ab-abdf-4c55-a4f8-deee3455005e","created_at":"2020-04-15 14:49:06","updated_at":"2020-04-15 14:49:06"},
{"id":"76e481df-1eec-45ed-b0f0-fff02015d19a","definition":"convallis duis consequat dui nec nisi volutpat eleifend donec","term":"Graphic Interface","card_set_id":"000c77ab-abdf-4c55-a4f8-deee3455005e","created_at":"2020-04-19 14:51:08","updated_at":"2020-04-19 14:51:08"},
{"id":"69e6188c-d0b0-4f4f-ab4a-ec820b1acff9","definition":"nisl nunc nisl duis bibendum felis","term":"Switchable","card_set_id":"000c77ab-abdf-4c55-a4f8-deee3455005e","created_at":"2020-04-11 14:39:31","updated_at":"2020-04-11 14:39:31"},
{"id":"9fb0be7d-6dfc-4bc6-8736-306094a55d56","definition":"lacus","term":"solution","card_set_id":"000c77ab-abdf-4c55-a4f8-deee3455005e","created_at":"2020-04-05 06:46:35","updated_at":"2020-04-05 06:46:35"},
{"id":"02bb3fd5-8c2a-4901-8e22-df232afd65c8","definition":"primis in faucibus","term":"4th generation","card_set_id":"000c77ab-abdf-4c55-a4f8-deee3455005e","created_at":"2020-04-09 03:02:02","updated_at":"2020-04-09 03:02:02"},
{"id":"2401994a-72f8-4634-81ce-442c4b8c7515","definition":"mauris morbi non","term":"Networked","card_set_id":"000c77ab-abdf-4c55-a4f8-deee3455005e","created_at":"2020-04-18 11:39:06","updated_at":"2020-04-18 11:39:06"},
{"id":"b8cf3085-995f-41c8-ab09-0fcb073d640d","definition":"lacus morbi sem","term":"dedicated","card_set_id":"000c77ab-abdf-4c55-a4f8-deee3455005e","created_at":"2020-04-18 04:02:58","updated_at":"2020-04-18 04:02:58"},
{"id":"3d67b3f6-8ff7-454b-b28b-6390d433e1fd","definition":"lorem id ligula suspendisse ornare","term":"knowledge base","card_set_id":"000c77ab-abdf-4c55-a4f8-deee3455005e","created_at":"2020-04-08 09:55:00","updated_at":"2020-04-08 09:55:00"},
{"id":"a8f898a0-410c-48e1-9623-efd08d08e22b","definition":"ultrices posuere cubilia curae","term":"encryption","card_set_id":"000c77ab-abdf-4c55-a4f8-deee3455005e","created_at":"2020-04-12 10:39:57","updated_at":"2020-04-12 10:39:57"},
{"id":"dece2a55-e014-42fe-9c98-9d0a676855f7","definition":"sollicitudin mi sit","term":"systemic","card_set_id":"000c77ab-abdf-4c55-a4f8-deee3455005e","created_at":"2020-04-17 04:23:03","updated_at":"2020-04-17 04:23:03"},
{"id":"5a3d7f08-07ab-4b4a-b82f-6b0088c5e317","definition":"penatibus et magnis dis parturient montes nascetur ridiculus mus","term":"knowledge user","card_set_id":"000c77ab-abdf-4c55-a4f8-deee3455005e","created_at":"2020-04-06 09:30:37","updated_at":"2020-04-06 09:30:37"},
{"id":"52fe590b-53f4-4c90-bdc5-ac40f8426ba8","definition":"augue quam sollicitudin","term":"core","card_set_id":"000c77ab-abdf-4c55-a4f8-deee3455005e","created_at":"2020-04-18 15:46:19","updated_at":"2020-04-18 15:46:19"},
{"id":"d930e114-b1f4-4ca5-a3a9-211b3848e2c4","definition":"non sodales sed tincidunt eu felis fusce","term":"static","card_set_id":"000c77ab-abdf-4c55-a4f8-deee3455005e","created_at":"2020-04-20 08:50:06","updated_at":"2020-04-20 08:50:06"},
{"id":"acc71c1a-43c8-4210-b4f7-a08d964fc9ae","definition":"semper sapien a libero nam dui proin leo odio","term":"protocol","card_set_id":"000c77ab-abdf-4c55-a4f8-deee3455005e","created_at":"2020-04-02 08:56:02","updated_at":"2020-04-02 08:56:02"},
{"id":"f41e451d-4e6d-47ba-96ea-d90521e64f95","definition":"fusce posuere felis sed lacus morbi sem mauris laoreet","term":"info-mediaries","card_set_id":"000c77ab-abdf-4c55-a4f8-deee3455005e","created_at":"2020-04-16 08:30:08","updated_at":"2020-04-16 08:30:08"},
{"id":"ac885cd6-4aea-41d9-a1fd-ad34254db29a","definition":"id nulla ultrices aliquet maecenas leo","term":"Pre-emptive","card_set_id":"000c77ab-abdf-4c55-a4f8-deee3455005e","created_at":"2020-04-08 16:59:38","updated_at":"2020-04-08 16:59:38"},
{"id":"9f908f09-e542-48d2-8fe6-f961b145b472","definition":"in faucibus orci luctus","term":"database","card_set_id":"000c77ab-abdf-4c55-a4f8-deee3455005e","created_at":"2020-04-08 17:05:09","updated_at":"2020-04-08 17:05:09"},
{"id":"b31ea06a-dcb9-4e2d-9012-a8350b539aac","definition":"orci pede venenatis non sodales sed tincidunt","term":"Sharable","card_set_id":"000c77ab-abdf-4c55-a4f8-deee3455005e","created_at":"2020-04-07 03:43:49","updated_at":"2020-04-07 03:43:49"},
{"id":"f25fb53b-d44d-4be8-ad1d-1945a7291edf","definition":"nam nulla integer","term":"intermediate","card_set_id":"000c77ab-abdf-4c55-a4f8-deee3455005e","created_at":"2020-04-09 06:19:52","updated_at":"2020-04-09 06:19:52"},
{"id":"5565c402-dc65-4093-8de4-2cff807d371f","definition":"vestibulum sit amet cursus id turpis integer aliquet massa id","term":"Graphical User Interface","card_set_id":"000c77ab-abdf-4c55-a4f8-deee3455005e","created_at":"2020-04-06 17:51:05","updated_at":"2020-04-06 17:51:05"},
{"id":"a88c4258-8902-493f-8d21-551751a13807","definition":"in quam fringilla rhoncus","term":"coherent","card_set_id":"000c77ab-abdf-4c55-a4f8-deee3455005e","created_at":"2020-04-09 03:19:14","updated_at":"2020-04-09 03:19:14"},
{"id":"70f64223-7257-45bd-a810-7ee7625d160a","definition":"in lacus curabitur at ipsum ac","term":"foreground","card_set_id":"000c77ab-abdf-4c55-a4f8-deee3455005e","created_at":"2020-04-19 06:07:50","updated_at":"2020-04-19 06:07:50"},
{"id":"ff248d23-4934-4453-b4a9-6b2ddd553280","definition":"ut erat id mauris","term":"attitude","card_set_id":"000c77ab-abdf-4c55-a4f8-deee3455005e","created_at":"2020-04-20 12:03:58","updated_at":"2020-04-20 12:03:58"},
{"id":"65dad168-ed13-4f9b-8463-3dac88677320","definition":"luctus cum sociis natoque","term":"maximized","card_set_id":"683f7623-f1e5-4cdf-abaa-5d8d674a16ab","created_at":"2020-04-17 22:42:24","updated_at":"2020-04-17 22:42:24"},
{"id":"1c3c97cb-2192-4e2d-8a2d-0682e4a57dca","definition":"vulputate luctus cum sociis natoque penatibus et magnis dis","term":"Open-architected","card_set_id":"683f7623-f1e5-4cdf-abaa-5d8d674a16ab","created_at":"2020-04-03 11:38:23","updated_at":"2020-04-03 11:38:23"},
{"id":"53a3ac89-73da-4a5b-9144-25513684b08f","definition":"vulputate ut ultrices vel augue vestibulum ante ipsum primis","term":"standardization","card_set_id":"683f7623-f1e5-4cdf-abaa-5d8d674a16ab","created_at":"2020-04-03 02:49:04","updated_at":"2020-04-03 02:49:04"},
{"id":"d16578ec-56c8-4ff4-a219-d4b84ef1ead1","definition":"quis augue luctus tincidunt nulla mollis molestie lorem quisque","term":"initiative","card_set_id":"683f7623-f1e5-4cdf-abaa-5d8d674a16ab","created_at":"2020-04-09 07:22:24","updated_at":"2020-04-09 07:22:24"},
{"id":"31677e0b-33a2-485c-bda1-a2a29cc60526","definition":"euismod scelerisque quam turpis adipiscing lorem vitae mattis nibh ligula","term":"bi-directional","card_set_id":"683f7623-f1e5-4cdf-abaa-5d8d674a16ab","created_at":"2020-04-15 22:06:19","updated_at":"2020-04-15 22:06:19"},
{"id":"85510368-557c-46b4-b584-ae58a5921cc1","definition":"vel enim sit amet","term":"data-warehouse","card_set_id":"683f7623-f1e5-4cdf-abaa-5d8d674a16ab","created_at":"2020-04-06 15:24:34","updated_at":"2020-04-06 15:24:34"},
{"id":"1aee8a7f-dee7-4394-8e90-ee9c3b62ba27","definition":"vitae","term":"Virtual","card_set_id":"683f7623-f1e5-4cdf-abaa-5d8d674a16ab","created_at":"2020-04-05 03:59:15","updated_at":"2020-04-05 03:59:15"},
{"id":"38489b3b-0b64-40ad-a745-9115bc6b13f0","definition":"sit amet","term":"tertiary","card_set_id":"683f7623-f1e5-4cdf-abaa-5d8d674a16ab","created_at":"2020-04-11 13:10:14","updated_at":"2020-04-11 13:10:14"},
{"id":"308c11d2-9b41-47eb-9092-50b87484637e","definition":"id","term":"instruction set","card_set_id":"683f7623-f1e5-4cdf-abaa-5d8d674a16ab","created_at":"2020-04-02 13:18:58","updated_at":"2020-04-02 13:18:58"},
{"id":"f5329003-23c6-4165-8b26-11d95cbae141","definition":"auctor sed tristique in tempus sit amet sem fusce","term":"Secured","card_set_id":"683f7623-f1e5-4cdf-abaa-5d8d674a16ab","created_at":"2020-04-18 14:31:46","updated_at":"2020-04-18 14:31:46"},
{"id":"97846356-caf3-4498-a630-30d56f7b0356","definition":"rhoncus","term":"Cross-group","card_set_id":"2f6b3e77-8a02-4aaa-934e-986d82bae904","created_at":"2020-04-01 07:11:18","updated_at":"2020-04-01 07:11:18"},
{"id":"d3389218-be55-40ac-9e7a-1c8dec957e54","definition":"velit eu est congue elementum in hac habitasse","term":"6th generation","card_set_id":"2f6b3e77-8a02-4aaa-934e-986d82bae904","created_at":"2020-04-02 19:42:42","updated_at":"2020-04-02 19:42:42"},
{"id":"8c66e1da-9ee9-499a-abe9-7aeaaf61c4b7","definition":"mauris enim leo rhoncus sed vestibulum sit","term":"Progressive","card_set_id":"2f6b3e77-8a02-4aaa-934e-986d82bae904","created_at":"2020-04-04 17:01:55","updated_at":"2020-04-04 17:01:55"},
{"id":"517df74a-cabc-4505-8b67-8a2a96052c15","definition":"ultrices libero non","term":"5th generation","card_set_id":"b13eb8fd-c2c2-4ad0-b874-c294bcf5e8f6","created_at":"2020-04-17 11:31:44","updated_at":"2020-04-17 11:31:44"},
{"id":"e35f22f0-5192-4944-9290-518320161fbf","definition":"morbi vel lectus in quam fringilla rhoncus mauris enim leo","term":"next generation","card_set_id":"b13eb8fd-c2c2-4ad0-b874-c294bcf5e8f6","created_at":"2020-04-18 01:51:46","updated_at":"2020-04-18 01:51:46"},
{"id":"05ddfdfc-ea80-4990-a370-d650ef37eb4b","definition":"vulputate luctus cum sociis natoque penatibus et magnis dis parturient","term":"exuding","card_set_id":"52bdaec0-9802-49e6-80b6-afddbff57b24","created_at":"2020-04-14 06:28:42","updated_at":"2020-04-14 06:28:42"},
{"id":"da1bdf93-7931-49de-b69a-445068d40b8d","definition":"odio donec vitae","term":"Digitized","card_set_id":"52bdaec0-9802-49e6-80b6-afddbff57b24","created_at":"2020-04-07 19:00:27","updated_at":"2020-04-07 19:00:27"},
{"id":"cc173db1-0ea0-40f2-ad71-9e18ae6f80e0","definition":"sapien non mi","term":"Front-line","card_set_id":"52bdaec0-9802-49e6-80b6-afddbff57b24","created_at":"2020-04-06 18:10:22","updated_at":"2020-04-06 18:10:22"},
{"id":"2256d7e7-b1e0-4c67-88c7-3f95a5442b86","definition":"sit amet lobortis sapien","term":"composite","card_set_id":"52bdaec0-9802-49e6-80b6-afddbff57b24","created_at":"2020-04-18 15:47:15","updated_at":"2020-04-18 15:47:15"},
{"id":"54b69c12-5329-4c06-a994-bce5b6913e36","definition":"hac habitasse platea dictumst morbi","term":"analyzer","card_set_id":"52bdaec0-9802-49e6-80b6-afddbff57b24","created_at":"2020-04-09 12:42:11","updated_at":"2020-04-09 12:42:11"},
{"id":"78c140c3-8ec5-465b-aeec-41a5f7a630d7","definition":"interdum mauris non","term":"product","card_set_id":"52bdaec0-9802-49e6-80b6-afddbff57b24","created_at":"2020-04-06 22:09:22","updated_at":"2020-04-06 22:09:22"},
{"id":"f453caaf-0e98-4cc5-8286-26c7fa9e1a97","definition":"integer","term":"static","card_set_id":"634c06f9-dd83-4c16-8aa0-63f00651ad43","created_at":"2020-04-04 14:43:29","updated_at":"2020-04-04 14:43:29"},
{"id":"6f54d4ed-9055-4ad2-9242-ad663b8ef038","definition":"quam a","term":"core","card_set_id":"634c06f9-dd83-4c16-8aa0-63f00651ad43","created_at":"2020-04-01 01:01:27","updated_at":"2020-04-01 01:01:27"},
{"id":"643c7f99-ef5e-45dc-98a6-eafc4b8f1e4b","definition":"a odio in hac habitasse","term":"directional","card_set_id":"634c06f9-dd83-4c16-8aa0-63f00651ad43","created_at":"2020-04-18 05:18:02","updated_at":"2020-04-18 05:18:02"},
{"id":"01d43a37-188b-49c6-a192-a0b84d587090","definition":"in faucibus orci luctus et ultrices posuere cubilia","term":"object-oriented","card_set_id":"634c06f9-dd83-4c16-8aa0-63f00651ad43","created_at":"2020-04-05 17:35:03","updated_at":"2020-04-05 17:35:03"},
{"id":"31f34f9a-f734-4094-b2fb-887931a50faf","definition":"quisque erat eros","term":"high-level","card_set_id":"634c06f9-dd83-4c16-8aa0-63f00651ad43","created_at":"2020-04-15 10:08:00","updated_at":"2020-04-15 10:08:00"},
{"id":"3bb7701b-a852-4980-ad0c-284fc01760e0","definition":"amet eros suspendisse accumsan tortor","term":"motivating","card_set_id":"634c06f9-dd83-4c16-8aa0-63f00651ad43","created_at":"2020-04-17 03:37:27","updated_at":"2020-04-17 03:37:27"},
{"id":"3e07028f-50c8-42c4-82ff-f0db32523eb0","definition":"massa donec dapibus duis at velit eu est congue elementum","term":"scalable","card_set_id":"634c06f9-dd83-4c16-8aa0-63f00651ad43","created_at":"2020-04-14 02:17:51","updated_at":"2020-04-14 02:17:51"},
{"id":"da19ab1d-ee61-4c09-ad61-cd573770bd5e","definition":"vestibulum ante ipsum primis in faucibus orci","term":"hierarchy","card_set_id":"634c06f9-dd83-4c16-8aa0-63f00651ad43","created_at":"2020-04-05 03:20:50","updated_at":"2020-04-05 03:20:50"},
{"id":"10093342-7b75-4aaa-b8da-c122dbd15439","definition":"posuere metus vitae ipsum aliquam non","term":"discrete","card_set_id":"eb914c3c-6ffe-42a9-b1e0-f4868aa9e5e2","created_at":"2020-04-14 08:32:17","updated_at":"2020-04-14 08:32:17"},
{"id":"f42207a7-3b3c-433e-bd13-d76a60808cf4","definition":"luctus et ultrices posuere cubilia curae mauris viverra","term":"Vision-oriented","card_set_id":"eb914c3c-6ffe-42a9-b1e0-f4868aa9e5e2","created_at":"2020-04-12 08:33:40","updated_at":"2020-04-12 08:33:40"},
{"id":"c478076c-a27b-41d3-bb52-c00448efe736","definition":"duis bibendum","term":"Progressive","card_set_id":"eb914c3c-6ffe-42a9-b1e0-f4868aa9e5e2","created_at":"2020-04-03 12:56:35","updated_at":"2020-04-03 12:56:35"},
{"id":"6d4b4492-e2d4-48c3-b84d-0ac65e98b1f6","definition":"nunc commodo placerat praesent blandit nam nulla","term":"Profit-focused","card_set_id":"eb914c3c-6ffe-42a9-b1e0-f4868aa9e5e2","created_at":"2020-04-13 14:36:49","updated_at":"2020-04-13 14:36:49"},
{"id":"31f6be23-badd-43c8-8f66-78558252b2f4","definition":"in ante vestibulum ante ipsum primis in","term":"web-enabled","card_set_id":"eb914c3c-6ffe-42a9-b1e0-f4868aa9e5e2","created_at":"2020-04-15 12:17:02","updated_at":"2020-04-15 12:17:02"},
{"id":"4078365f-9b99-4c34-866b-ecea6a162592","definition":"donec ut dolor morbi vel","term":"exuding","card_set_id":"eb914c3c-6ffe-42a9-b1e0-f4868aa9e5e2","created_at":"2020-04-18 07:26:35","updated_at":"2020-04-18 07:26:35"},
{"id":"406debca-d3e0-4fcc-b968-e59df89b5a9e","definition":"aliquam erat volutpat in congue etiam","term":"Exclusive","card_set_id":"eb914c3c-6ffe-42a9-b1e0-f4868aa9e5e2","created_at":"2020-04-18 01:33:49","updated_at":"2020-04-18 01:33:49"},
{"id":"db2f2a36-b033-4ea2-9f0a-018d6ba54f6d","definition":"massa id lobortis convallis tortor risus dapibus augue vel accumsan","term":"Diverse","card_set_id":"eb914c3c-6ffe-42a9-b1e0-f4868aa9e5e2","created_at":"2020-04-06 12:29:42","updated_at":"2020-04-06 12:29:42"},
{"id":"ef339c39-99c4-4df3-a9e7-d4e489e3910e","definition":"luctus nec molestie sed","term":"Centralized","card_set_id":"eb914c3c-6ffe-42a9-b1e0-f4868aa9e5e2","created_at":"2020-04-08 18:27:54","updated_at":"2020-04-08 18:27:54"},
{"id":"e376b92e-1cfa-4544-9874-81f6b55d6552","definition":"sapien ut nunc vestibulum ante ipsum","term":"intangible","card_set_id":"eb914c3c-6ffe-42a9-b1e0-f4868aa9e5e2","created_at":"2020-04-06 23:43:14","updated_at":"2020-04-06 23:43:14"},
{"id":"3ad5a7f6-6a3c-425e-b75d-b1b5cf624d94","definition":"placerat praesent blandit nam nulla integer pede justo","term":"disintermediate","card_set_id":"eb914c3c-6ffe-42a9-b1e0-f4868aa9e5e2","created_at":"2020-04-12 16:22:08","updated_at":"2020-04-12 16:22:08"},
{"id":"86df689e-59b5-4bf8-a6df-aab8e7e44e63","definition":"orci vehicula condimentum curabitur in libero ut","term":"Secured","card_set_id":"eb914c3c-6ffe-42a9-b1e0-f4868aa9e5e2","created_at":"2020-04-15 04:48:00","updated_at":"2020-04-15 04:48:00"},
{"id":"fcbd28f4-88b7-46f6-8300-7405322b132e","definition":"aenean auctor gravida sem praesent id massa id nisl","term":"Reduced","card_set_id":"eb914c3c-6ffe-42a9-b1e0-f4868aa9e5e2","created_at":"2020-04-20 08:47:38","updated_at":"2020-04-20 08:47:38"},
{"id":"54455416-c246-4a3d-8cb5-99e5ebb659f5","definition":"congue risus semper","term":"systemic","card_set_id":"d72422ad-09d2-4e79-89da-b16065ef6a08","created_at":"2020-04-08 12:59:22","updated_at":"2020-04-08 12:59:22"},
{"id":"90402508-49b6-4c32-b2bd-6800af98c105","definition":"nam nulla","term":"transitional","card_set_id":"d72422ad-09d2-4e79-89da-b16065ef6a08","created_at":"2020-04-06 16:59:56","updated_at":"2020-04-06 16:59:56"},
{"id":"3e8f67c4-cc4d-4696-9394-a788b2c163cd","definition":"volutpat quam pede lobortis ligula sit amet eleifend","term":"multi-tasking","card_set_id":"d72422ad-09d2-4e79-89da-b16065ef6a08","created_at":"2020-04-20 19:32:43","updated_at":"2020-04-20 19:32:43"},
{"id":"e5fbf08b-720f-4dc8-bf4d-7200a2ad8fc5","definition":"a ipsum integer a nibh","term":"product","card_set_id":"d72422ad-09d2-4e79-89da-b16065ef6a08","created_at":"2020-04-02 06:08:16","updated_at":"2020-04-02 06:08:16"},
{"id":"b1ff3aad-81fb-4a62-b627-742985287330","definition":"cubilia curae donec pharetra","term":"regional","card_set_id":"54d87c3a-0cd0-4bc0-b590-6342b7762b89","created_at":"2020-04-08 04:18:53","updated_at":"2020-04-08 04:18:53"},
{"id":"a15eb7c2-7a28-4d70-8024-45dd738d5827","definition":"ultrices posuere cubilia curae nulla dapibus","term":"multi-tasking","card_set_id":"54d87c3a-0cd0-4bc0-b590-6342b7762b89","created_at":"2020-04-17 01:16:30","updated_at":"2020-04-17 01:16:30"},
{"id":"91dda30a-7685-476a-b385-b4eddda0d2a7","definition":"eros viverra eget congue","term":"Assimilated","card_set_id":"54d87c3a-0cd0-4bc0-b590-6342b7762b89","created_at":"2020-04-19 18:49:37","updated_at":"2020-04-19 18:49:37"},
{"id":"8fefa130-b3e8-4df6-827a-b2fe7cf4dbc0","definition":"in","term":"Ergonomic","card_set_id":"54d87c3a-0cd0-4bc0-b590-6342b7762b89","created_at":"2020-04-02 22:54:39","updated_at":"2020-04-02 22:54:39"},
{"id":"5fe1a7e0-f5c8-4779-92fb-7b433740b222","definition":"vel pede morbi porttitor lorem id ligula","term":"service-desk","card_set_id":"54d87c3a-0cd0-4bc0-b590-6342b7762b89","created_at":"2020-04-08 22:48:01","updated_at":"2020-04-08 22:48:01"},
{"id":"17e257bc-914a-408a-ac1a-3a873e536b0f","definition":"diam in magna bibendum imperdiet nullam orci pede venenatis","term":"Robust","card_set_id":"54d87c3a-0cd0-4bc0-b590-6342b7762b89","created_at":"2020-04-12 23:44:15","updated_at":"2020-04-12 23:44:15"},
{"id":"b7a0f41d-2902-4193-8033-ec61a666a34f","definition":"cras in purus eu magna vulputate luctus cum","term":"dynamic","card_set_id":"54d87c3a-0cd0-4bc0-b590-6342b7762b89","created_at":"2020-04-03 18:21:17","updated_at":"2020-04-03 18:21:17"},
{"id":"1f278c2d-80e8-4f0a-847d-237afcfb9460","definition":"in est risus auctor sed tristique in","term":"zero tolerance","card_set_id":"54d87c3a-0cd0-4bc0-b590-6342b7762b89","created_at":"2020-04-13 22:13:37","updated_at":"2020-04-13 22:13:37"},
{"id":"8e34a6f2-fb2d-48e0-a03d-bd8b987c509d","definition":"in eleifend","term":"parallelism","card_set_id":"54d87c3a-0cd0-4bc0-b590-6342b7762b89","created_at":"2020-04-05 15:08:30","updated_at":"2020-04-05 15:08:30"},
{"id":"13e9900b-2729-40ac-8b34-d674eafcde0d","definition":"morbi ut odio cras mi pede malesuada","term":"monitoring","card_set_id":"a70bd679-797a-4ce4-817f-19dc560e3635","created_at":"2020-04-15 14:29:49","updated_at":"2020-04-15 14:29:49"},
{"id":"8abde271-aa34-4737-8cef-d3b06d5ca99a","definition":"tempus sit amet sem fusce consequat nulla nisl","term":"Streamlined","card_set_id":"a70bd679-797a-4ce4-817f-19dc560e3635","created_at":"2020-04-12 16:58:52","updated_at":"2020-04-12 16:58:52"},
{"id":"d54b6e60-054d-49ed-ac76-f36f1c424b9a","definition":"in faucibus orci luctus et ultrices posuere","term":"Vision-oriented","card_set_id":"a70bd679-797a-4ce4-817f-19dc560e3635","created_at":"2020-04-09 14:36:38","updated_at":"2020-04-09 14:36:38"},
{"id":"5d084981-948d-48fe-811f-7413eed32109","definition":"aliquet massa","term":"matrices","card_set_id":"eb33bf37-d598-4041-bdb0-6c62d20fd966","created_at":"2020-04-08 13:28:26","updated_at":"2020-04-08 13:28:26"},
{"id":"a90c7281-9bdb-40da-83e9-932dcdb40c43","definition":"sed ante vivamus tortor duis mattis egestas","term":"neural-net","card_set_id":"eb33bf37-d598-4041-bdb0-6c62d20fd966","created_at":"2020-04-18 17:05:03","updated_at":"2020-04-18 17:05:03"},
{"id":"0ce1b2f8-b1e2-48e5-94c5-5568abd8c29b","definition":"varius integer ac leo pellentesque ultrices mattis odio donec","term":"Up-sized","card_set_id":"eb33bf37-d598-4041-bdb0-6c62d20fd966","created_at":"2020-04-15 17:22:25","updated_at":"2020-04-15 17:22:25"},
{"id":"25210ac2-f07a-4a08-80c0-0819986c8075","definition":"neque vestibulum","term":"fault-tolerant","card_set_id":"eb33bf37-d598-4041-bdb0-6c62d20fd966","created_at":"2020-04-08 07:03:04","updated_at":"2020-04-08 07:03:04"},
{"id":"3eeaa8e0-d26a-4bbf-8c49-b4d84b23cb80","definition":"aliquam quis turpis eget elit sodales scelerisque mauris sit","term":"parallelism","card_set_id":"eb33bf37-d598-4041-bdb0-6c62d20fd966","created_at":"2020-04-06 18:50:41","updated_at":"2020-04-06 18:50:41"},
{"id":"02fa611b-1dde-462f-8d63-6351e5329c03","definition":"justo pellentesque viverra pede ac diam cras pellentesque volutpat","term":"system engine","card_set_id":"eb33bf37-d598-4041-bdb0-6c62d20fd966","created_at":"2020-04-20 23:51:24","updated_at":"2020-04-20 23:51:24"},
{"id":"d0f4470d-06a8-449c-b09d-ff28d888a99e","definition":"sapien urna pretium nisl ut volutpat sapien arcu","term":"contingency","card_set_id":"eb33bf37-d598-4041-bdb0-6c62d20fd966","created_at":"2020-04-01 16:28:57","updated_at":"2020-04-01 16:28:57"},
{"id":"7200118f-6acf-4df5-9344-4d471ead694c","definition":"risus auctor sed tristique in tempus sit amet sem fusce","term":"Grass-roots","card_set_id":"eb33bf37-d598-4041-bdb0-6c62d20fd966","created_at":"2020-04-11 14:18:16","updated_at":"2020-04-11 14:18:16"},
{"id":"c42b382d-87b1-40db-98d7-c89eb4726564","definition":"lectus aliquam sit","term":"Persistent","card_set_id":"eb33bf37-d598-4041-bdb0-6c62d20fd966","created_at":"2020-04-10 20:23:48","updated_at":"2020-04-10 20:23:48"},
{"id":"25837588-a7bd-4eb9-aabb-732aa08ffb7c","definition":"quis turpis","term":"paradigm","card_set_id":"eb33bf37-d598-4041-bdb0-6c62d20fd966","created_at":"2020-04-19 21:33:52","updated_at":"2020-04-19 21:33:52"},
{"id":"7d3e1efb-b42f-4b3f-8997-bc06ea650897","definition":"pede ullamcorper augue a suscipit nulla","term":"Configurable","card_set_id":"eb33bf37-d598-4041-bdb0-6c62d20fd966","created_at":"2020-04-14 00:24:11","updated_at":"2020-04-14 00:24:11"},
{"id":"905c5ac0-9af6-4755-bf25-5728dc551c70","definition":"ut nunc vestibulum ante ipsum primis in faucibus orci luctus","term":"systematic","card_set_id":"08ace67f-386a-4f43-be18-3dfa585c6151","created_at":"2020-04-16 00:38:53","updated_at":"2020-04-16 00:38:53"},
{"id":"ce783b4b-7b50-4b5c-807e-03609e6e82c9","definition":"nulla integer","term":"approach","card_set_id":"08ace67f-386a-4f43-be18-3dfa585c6151","created_at":"2020-04-17 22:16:52","updated_at":"2020-04-17 22:16:52"},
{"id":"92b0fc50-34b3-4ec3-9bbf-6d685e46bdf2","definition":"neque aenean auctor gravida sem praesent id","term":"Graphic Interface","card_set_id":"08ace67f-386a-4f43-be18-3dfa585c6151","created_at":"2020-04-07 02:33:51","updated_at":"2020-04-07 02:33:51"},
{"id":"84377001-dfbf-4a3e-9738-9629243a510f","definition":"placerat ante nulla justo aliquam quis","term":"Balanced","card_set_id":"08ace67f-386a-4f43-be18-3dfa585c6151","created_at":"2020-04-16 09:29:18","updated_at":"2020-04-16 09:29:18"},
{"id":"f2d2092b-d4a3-44ec-a106-f8f964f28091","definition":"sit amet turpis","term":"toolset","card_set_id":"08ace67f-386a-4f43-be18-3dfa585c6151","created_at":"2020-04-10 06:24:41","updated_at":"2020-04-10 06:24:41"},
{"id":"5d11ec14-9ed4-490d-8428-cef75dc1a727","definition":"amet diam in magna bibendum imperdiet nullam orci pede","term":"knowledge base","card_set_id":"fa1b1021-af46-44a3-8e46-1fb29096546c","created_at":"2020-04-16 00:59:34","updated_at":"2020-04-16 00:59:34"},
{"id":"0a8eb3ac-ca2f-48fc-a774-fad9acf09084","definition":"sem duis aliquam convallis nunc proin at turpis","term":"Persevering","card_set_id":"fa1b1021-af46-44a3-8e46-1fb29096546c","created_at":"2020-04-15 10:08:09","updated_at":"2020-04-15 10:08:09"},
{"id":"ba7238f6-c987-4117-ba7a-faf3a3f56ea6","definition":"vel pede morbi porttitor lorem id","term":"Grass-roots","card_set_id":"fa1b1021-af46-44a3-8e46-1fb29096546c","created_at":"2020-04-06 20:06:47","updated_at":"2020-04-06 20:06:47"},
{"id":"dd9748a5-68d5-499c-892d-65b64d26a872","definition":"dictumst maecenas ut massa quis augue luctus tincidunt nulla","term":"Organic","card_set_id":"fa1b1021-af46-44a3-8e46-1fb29096546c","created_at":"2020-04-15 07:16:34","updated_at":"2020-04-15 07:16:34"},
{"id":"a68316e8-9c5a-48a6-bfcb-f437a489828e","definition":"purus phasellus in felis donec semper sapien a","term":"customer loyalty","card_set_id":"fa1b1021-af46-44a3-8e46-1fb29096546c","created_at":"2020-04-02 23:16:35","updated_at":"2020-04-02 23:16:35"},
{"id":"d215609f-30d5-427f-9387-987680ac70fe","definition":"non","term":"methodology","card_set_id":"fa1b1021-af46-44a3-8e46-1fb29096546c","created_at":"2020-04-18 16:34:09","updated_at":"2020-04-18 16:34:09"},
{"id":"3061d2ba-ae1e-47dd-a29c-a1c3235ac645","definition":"in","term":"Horizontal","card_set_id":"340ab28a-5d86-46d1-8fb3-56580b2ef891","created_at":"2020-04-16 19:57:43","updated_at":"2020-04-16 19:57:43"},
{"id":"40621a28-d18c-43d7-801e-5d051df3a774","definition":"quam a odio in hac habitasse platea dictumst maecenas","term":"flexibility","card_set_id":"340ab28a-5d86-46d1-8fb3-56580b2ef891","created_at":"2020-04-08 07:25:49","updated_at":"2020-04-08 07:25:49"},
{"id":"ec3fccea-7db2-41c6-bb6c-4b3c7d5e7fd6","definition":"et","term":"forecast","card_set_id":"340ab28a-5d86-46d1-8fb3-56580b2ef891","created_at":"2020-04-04 16:55:38","updated_at":"2020-04-04 16:55:38"},
{"id":"f6910db5-c6cd-41fa-9a2f-3f7af25419a9","definition":"volutpat quam pede lobortis ligula sit amet eleifend","term":"workforce","card_set_id":"10423862-8151-4060-862e-189ba0fb0698","created_at":"2020-04-16 02:45:51","updated_at":"2020-04-16 02:45:51"},
{"id":"a487d663-7d47-4b25-8be2-4cc1ed343c10","definition":"sapien","term":"Assimilated","card_set_id":"10423862-8151-4060-862e-189ba0fb0698","created_at":"2020-04-03 03:49:12","updated_at":"2020-04-03 03:49:12"},
{"id":"da98b35b-6e1b-4b26-a3a0-13cfaa891785","definition":"aliquet massa id lobortis convallis tortor risus dapibus augue","term":"Enterprise-wide","card_set_id":"c1821919-0206-4b61-a9db-cf0738af2311","created_at":"2020-04-03 00:48:09","updated_at":"2020-04-03 00:48:09"},
{"id":"91bc204e-1f1f-47ea-bfac-3be366f3dd00","definition":"tempor turpis","term":"dynamic","card_set_id":"c1821919-0206-4b61-a9db-cf0738af2311","created_at":"2020-04-05 06:05:12","updated_at":"2020-04-05 06:05:12"},
{"id":"2e70409c-c98f-45da-9a7e-298b8693dd27","definition":"in hac habitasse platea dictumst etiam faucibus cursus","term":"framework","card_set_id":"c1821919-0206-4b61-a9db-cf0738af2311","created_at":"2020-04-06 16:57:29","updated_at":"2020-04-06 16:57:29"},
{"id":"6178bb2b-907f-4852-9f05-cfc39d9f3f7a","definition":"in sagittis dui vel nisl duis ac","term":"Visionary","card_set_id":"c1821919-0206-4b61-a9db-cf0738af2311","created_at":"2020-04-19 11:21:55","updated_at":"2020-04-19 11:21:55"},
{"id":"77ceb911-463e-4d48-b62e-ff5e29a1d81b","definition":"risus semper porta volutpat quam pede lobortis","term":"intermediate","card_set_id":"c1821919-0206-4b61-a9db-cf0738af2311","created_at":"2020-04-05 00:32:17","updated_at":"2020-04-05 00:32:17"},
{"id":"0c59d873-43fc-4857-bf16-6b332314bff5","definition":"cursus vestibulum proin eu mi nulla ac enim","term":"multi-state","card_set_id":"c1821919-0206-4b61-a9db-cf0738af2311","created_at":"2020-04-19 14:21:26","updated_at":"2020-04-19 14:21:26"},
{"id":"7966a9b9-1985-48dd-a71b-bd5b41ed3067","definition":"id justo sit","term":"Assimilated","card_set_id":"659fb496-768f-4ac0-9971-aff5c4c74ebe","created_at":"2020-04-07 08:04:38","updated_at":"2020-04-07 08:04:38"},
{"id":"ffdfbbcd-fa77-4f2a-9099-9f84a7dfe394","definition":"sed vestibulum sit amet cursus","term":"Streamlined","card_set_id":"659fb496-768f-4ac0-9971-aff5c4c74ebe","created_at":"2020-04-16 20:34:21","updated_at":"2020-04-16 20:34:21"},
{"id":"672af69f-d703-4dfa-9b98-4b5cc541b836","definition":"ipsum primis in faucibus orci luctus et ultrices posuere cubilia","term":"4th generation","card_set_id":"659fb496-768f-4ac0-9971-aff5c4c74ebe","created_at":"2020-04-02 10:11:29","updated_at":"2020-04-02 10:11:29"},
{"id":"df5cd375-3d35-4cc1-99fe-43464c4f2199","definition":"congue","term":"Optimized","card_set_id":"659fb496-768f-4ac0-9971-aff5c4c74ebe","created_at":"2020-04-03 13:51:26","updated_at":"2020-04-03 13:51:26"},
{"id":"7764ccfd-c5ef-4b43-b8d9-e80655c4bf9c","definition":"ut blandit non interdum in ante vestibulum","term":"heuristic","card_set_id":"659fb496-768f-4ac0-9971-aff5c4c74ebe","created_at":"2020-04-04 16:02:39","updated_at":"2020-04-04 16:02:39"},
{"id":"078acb81-97af-4f9a-b1d5-38c96a17d4d6","definition":"primis","term":"open system","card_set_id":"659fb496-768f-4ac0-9971-aff5c4c74ebe","created_at":"2020-04-07 09:55:27","updated_at":"2020-04-07 09:55:27"},
{"id":"5bf5b47f-d19a-4198-893e-476da3e26665","definition":"nullam molestie nibh in lectus pellentesque at nulla","term":"knowledge user","card_set_id":"659fb496-768f-4ac0-9971-aff5c4c74ebe","created_at":"2020-04-08 00:08:28","updated_at":"2020-04-08 00:08:28"},
{"id":"d9c7ed86-8bb4-4514-9b4d-cf41411aaa1a","definition":"et ultrices posuere","term":"motivating","card_set_id":"659fb496-768f-4ac0-9971-aff5c4c74ebe","created_at":"2020-04-16 13:47:00","updated_at":"2020-04-16 13:47:00"},
{"id":"cfa548e4-e476-4305-b6e1-f240c585ce45","definition":"ipsum primis in faucibus orci","term":"Visionary","card_set_id":"659fb496-768f-4ac0-9971-aff5c4c74ebe","created_at":"2020-04-05 14:13:31","updated_at":"2020-04-05 14:13:31"},
{"id":"e35cc090-7057-4778-bceb-0805e13f792d","definition":"pellentesque viverra pede ac diam cras","term":"Graphic Interface","card_set_id":"659fb496-768f-4ac0-9971-aff5c4c74ebe","created_at":"2020-04-07 09:06:33","updated_at":"2020-04-07 09:06:33"},
{"id":"4bc6dfc0-047a-42c0-90c7-149e3975abe1","definition":"fusce congue diam id ornare imperdiet sapien urna","term":"Seamless","card_set_id":"659fb496-768f-4ac0-9971-aff5c4c74ebe","created_at":"2020-04-03 02:16:03","updated_at":"2020-04-03 02:16:03"},
{"id":"9c402a87-d4e0-4862-bcbe-be23d6399f9e","definition":"venenatis turpis","term":"Realigned","card_set_id":"659fb496-768f-4ac0-9971-aff5c4c74ebe","created_at":"2020-04-18 20:53:53","updated_at":"2020-04-18 20:53:53"},
{"id":"63719b84-f7ae-4830-9da6-fdf80a59a9ac","definition":"orci nullam molestie nibh in lectus pellentesque at","term":"leverage","card_set_id":"659fb496-768f-4ac0-9971-aff5c4c74ebe","created_at":"2020-04-17 01:20:17","updated_at":"2020-04-17 01:20:17"},
{"id":"79fdce9a-3128-408c-b1fc-6e4aacc82fc5","definition":"aenean lectus pellentesque eget","term":"bottom-line","card_set_id":"659fb496-768f-4ac0-9971-aff5c4c74ebe","created_at":"2020-04-19 05:14:18","updated_at":"2020-04-19 05:14:18"},
{"id":"80da47fd-1eb1-4223-8dca-19c3817ccf45","definition":"vitae ipsum aliquam non","term":"optimal","card_set_id":"659fb496-768f-4ac0-9971-aff5c4c74ebe","created_at":"2020-04-09 18:43:14","updated_at":"2020-04-09 18:43:14"},
{"id":"66b9b04f-a00e-42e3-a360-4f2f3b30a603","definition":"primis in faucibus orci luctus","term":"next generation","card_set_id":"659fb496-768f-4ac0-9971-aff5c4c74ebe","created_at":"2020-04-13 00:59:00","updated_at":"2020-04-13 00:59:00"},
{"id":"148aacf7-4818-4787-b3bf-0d71e01bd2b1","definition":"phasellus sit amet erat","term":"instruction set","card_set_id":"659fb496-768f-4ac0-9971-aff5c4c74ebe","created_at":"2020-04-03 07:43:51","updated_at":"2020-04-03 07:43:51"},
{"id":"0e021bbe-f0cd-4adb-ba4a-8b3496a51443","definition":"sociis natoque penatibus et magnis dis","term":"Business-focused","card_set_id":"659fb496-768f-4ac0-9971-aff5c4c74ebe","created_at":"2020-04-08 18:31:25","updated_at":"2020-04-08 18:31:25"},
{"id":"eed1aafc-ecec-4658-9058-1728c2cb37c5","definition":"proin interdum mauris non ligula pellentesque ultrices","term":"bottom-line","card_set_id":"659fb496-768f-4ac0-9971-aff5c4c74ebe","created_at":"2020-04-16 14:50:22","updated_at":"2020-04-16 14:50:22"},
{"id":"63ba2cc4-c223-4d6e-868d-18e352d09670","definition":"ligula vehicula consequat","term":"transitional","card_set_id":"659fb496-768f-4ac0-9971-aff5c4c74ebe","created_at":"2020-04-07 10:17:14","updated_at":"2020-04-07 10:17:14"},
{"id":"04db848c-8a19-4f5d-8503-3c786f74327f","definition":"justo aliquam quis turpis eget elit","term":"incremental","card_set_id":"34286a4c-be89-4635-b33e-b79c8d2f6503","created_at":"2020-04-18 09:52:35","updated_at":"2020-04-18 09:52:35"},
{"id":"f1b85dc8-6bf3-4cf4-a834-b268a860c70d","definition":"urna ut tellus nulla ut erat id mauris vulputate elementum","term":"middleware","card_set_id":"34286a4c-be89-4635-b33e-b79c8d2f6503","created_at":"2020-04-09 01:10:36","updated_at":"2020-04-09 01:10:36"},
{"id":"a12399c8-d403-4cd6-96d8-1a124663267e","definition":"non ligula pellentesque ultrices phasellus id sapien in","term":"Digitized","card_set_id":"34286a4c-be89-4635-b33e-b79c8d2f6503","created_at":"2020-04-15 10:59:56","updated_at":"2020-04-15 10:59:56"},
{"id":"0849cfb7-b2a5-4b4f-a212-693132849119","definition":"nisl aenean lectus pellentesque eget nunc donec","term":"orchestration","card_set_id":"34286a4c-be89-4635-b33e-b79c8d2f6503","created_at":"2020-04-11 13:19:57","updated_at":"2020-04-11 13:19:57"},
{"id":"168b5569-ea3c-437a-bd37-2ada878a56c7","definition":"turpis integer aliquet massa id lobortis convallis tortor","term":"architecture","card_set_id":"34286a4c-be89-4635-b33e-b79c8d2f6503","created_at":"2020-04-02 19:44:59","updated_at":"2020-04-02 19:44:59"},
{"id":"9ac19102-c851-4c43-b934-58e3750f6c04","definition":"sapien iaculis congue","term":"infrastructure","card_set_id":"34286a4c-be89-4635-b33e-b79c8d2f6503","created_at":"2020-04-20 14:54:23","updated_at":"2020-04-20 14:54:23"},
{"id":"b57ce98e-4e1b-479b-9aeb-e8a954ab20f3","definition":"suspendisse potenti in eleifend quam a odio in","term":"definition","card_set_id":"34286a4c-be89-4635-b33e-b79c8d2f6503","created_at":"2020-04-10 03:19:41","updated_at":"2020-04-10 03:19:41"},
{"id":"b49b35b6-04c3-403e-8ffb-59bc57f9bce5","definition":"interdum venenatis turpis enim blandit mi in porttitor pede justo","term":"Virtual","card_set_id":"34286a4c-be89-4635-b33e-b79c8d2f6503","created_at":"2020-04-09 03:59:38","updated_at":"2020-04-09 03:59:38"},
{"id":"dadfa410-0a79-4129-a1c7-5ec6096a26e8","definition":"nunc commodo","term":"Enterprise-wide","card_set_id":"34286a4c-be89-4635-b33e-b79c8d2f6503","created_at":"2020-04-03 21:43:12","updated_at":"2020-04-03 21:43:12"},
{"id":"6a20d635-407c-440a-9429-a9ae25eb2003","definition":"convallis tortor risus dapibus augue vel accumsan tellus nisi","term":"zero tolerance","card_set_id":"34286a4c-be89-4635-b33e-b79c8d2f6503","created_at":"2020-04-10 02:51:37","updated_at":"2020-04-10 02:51:37"},
{"id":"faa89fd0-1b25-4211-8b7c-305742a24869","definition":"morbi quis tortor id nulla ultrices aliquet maecenas leo odio","term":"4th generation","card_set_id":"34286a4c-be89-4635-b33e-b79c8d2f6503","created_at":"2020-04-03 21:38:56","updated_at":"2020-04-03 21:38:56"},
{"id":"354fefa2-f487-4fb0-99bb-26e4fbf1dc5d","definition":"augue quam sollicitudin vitae consectetuer eget","term":"interface","card_set_id":"34286a4c-be89-4635-b33e-b79c8d2f6503","created_at":"2020-04-08 11:17:07","updated_at":"2020-04-08 11:17:07"},
{"id":"5f7bad55-fb6d-4b34-9174-5c78f40ed5c6","definition":"lorem","term":"even-keeled","card_set_id":"34286a4c-be89-4635-b33e-b79c8d2f6503","created_at":"2020-04-15 15:19:19","updated_at":"2020-04-15 15:19:19"},
{"id":"a01b36b6-26e8-4acd-8a3e-8e40334c2594","definition":"cubilia curae mauris","term":"Up-sized","card_set_id":"34286a4c-be89-4635-b33e-b79c8d2f6503","created_at":"2020-04-07 05:31:20","updated_at":"2020-04-07 05:31:20"},
{"id":"2e4b3ebd-8e3c-466b-b90a-6a43a5dd9f6b","definition":"turpis adipiscing lorem vitae mattis nibh ligula","term":"moderator","card_set_id":"34286a4c-be89-4635-b33e-b79c8d2f6503","created_at":"2020-04-19 10:46:34","updated_at":"2020-04-19 10:46:34"},
{"id":"4c25f030-7f0b-41c0-b31b-e17328439e83","definition":"ipsum primis","term":"real-time","card_set_id":"34286a4c-be89-4635-b33e-b79c8d2f6503","created_at":"2020-04-14 06:29:58","updated_at":"2020-04-14 06:29:58"},
{"id":"cc361da3-9eb4-4327-a13c-4d003c3085dc","definition":"vestibulum proin eu mi nulla ac enim in tempor","term":"coherent","card_set_id":"34286a4c-be89-4635-b33e-b79c8d2f6503","created_at":"2020-04-19 11:52:20","updated_at":"2020-04-19 11:52:20"},
{"id":"db9e256a-fcd9-402f-b45d-d74b80141332","definition":"curae mauris viverra diam vitae quam suspendisse potenti nullam porttitor","term":"Managed","card_set_id":"34286a4c-be89-4635-b33e-b79c8d2f6503","created_at":"2020-04-05 04:47:29","updated_at":"2020-04-05 04:47:29"},
{"id":"15e5af56-1175-426e-b630-61f8ee88316c","definition":"sed","term":"workforce","card_set_id":"34286a4c-be89-4635-b33e-b79c8d2f6503","created_at":"2020-04-01 21:53:14","updated_at":"2020-04-01 21:53:14"},
{"id":"8c09d28a-ad45-4f8e-8b64-d9c44df8f2da","definition":"phasellus id sapien in sapien iaculis","term":"attitude-oriented","card_set_id":"41399440-3ffc-4515-aee8-19f11cece991","created_at":"2020-04-15 08:00:31","updated_at":"2020-04-15 08:00:31"},
{"id":"4e5ee290-fe1a-470e-b05c-54483f674d45","definition":"sit amet","term":"open architecture","card_set_id":"41399440-3ffc-4515-aee8-19f11cece991","created_at":"2020-04-09 12:30:59","updated_at":"2020-04-09 12:30:59"},
{"id":"6c1bf28f-954a-4c7b-9ef1-4cf4e8a9bf1f","definition":"non velit nec nisi vulputate nonummy maecenas tincidunt lacus","term":"Distributed","card_set_id":"41399440-3ffc-4515-aee8-19f11cece991","created_at":"2020-04-17 16:38:13","updated_at":"2020-04-17 16:38:13"},
{"id":"eea66da2-6a46-4e02-9d25-f0f97c292a8c","definition":"aliquam quis turpis eget elit","term":"Phased","card_set_id":"d206f360-640d-45c1-aa91-5dcff7ac6f5c","created_at":"2020-04-12 06:33:33","updated_at":"2020-04-12 06:33:33"},
{"id":"72c8977f-6172-4a42-8f86-9ccdbe38996f","definition":"pretium iaculis justo in hac habitasse platea dictumst","term":"holistic","card_set_id":"d206f360-640d-45c1-aa91-5dcff7ac6f5c","created_at":"2020-04-10 04:49:38","updated_at":"2020-04-10 04:49:38"},
{"id":"d7be0c37-1599-436b-9a2a-5ec6d8a60770","definition":"felis sed lacus","term":"scalable","card_set_id":"d206f360-640d-45c1-aa91-5dcff7ac6f5c","created_at":"2020-04-08 14:11:26","updated_at":"2020-04-08 14:11:26"},
{"id":"754826cb-a80f-4892-8a49-6e7a52fce289","definition":"sed vel enim sit amet nunc viverra dapibus nulla suscipit","term":"portal","card_set_id":"d206f360-640d-45c1-aa91-5dcff7ac6f5c","created_at":"2020-04-15 19:06:44","updated_at":"2020-04-15 19:06:44"},
{"id":"d54dc4c7-6819-4a4c-b0b4-6048f49097df","definition":"sagittis dui vel nisl duis ac nibh fusce","term":"Multi-tiered","card_set_id":"d206f360-640d-45c1-aa91-5dcff7ac6f5c","created_at":"2020-04-11 04:18:30","updated_at":"2020-04-11 04:18:30"},
{"id":"99f6c680-cdd8-4731-b45f-9f036b6bda31","definition":"at ipsum ac tellus","term":"Versatile","card_set_id":"d206f360-640d-45c1-aa91-5dcff7ac6f5c","created_at":"2020-04-19 03:29:14","updated_at":"2020-04-19 03:29:14"},
{"id":"3c88137b-3ca2-4dbc-af03-ab8f23064d53","definition":"ipsum dolor sit amet consectetuer adipiscing elit proin risus","term":"Robust","card_set_id":"d206f360-640d-45c1-aa91-5dcff7ac6f5c","created_at":"2020-04-20 06:06:01","updated_at":"2020-04-20 06:06:01"},
{"id":"71f7bddc-76e7-443e-9971-3688c64ee94d","definition":"rhoncus mauris enim leo rhoncus sed vestibulum sit amet","term":"zero tolerance","card_set_id":"2ad9f504-dd79-44f9-aa07-9d63a1cffaae","created_at":"2020-04-13 06:05:29","updated_at":"2020-04-13 06:05:29"},
{"id":"cd43bed6-a14d-4fe7-b88d-fa335db5a012","definition":"pulvinar sed nisl","term":"Synergistic","card_set_id":"2ad9f504-dd79-44f9-aa07-9d63a1cffaae","created_at":"2020-04-05 16:47:44","updated_at":"2020-04-05 16:47:44"},
{"id":"d1802dde-8e53-4db8-b082-22e9d6809da2","definition":"ut ultrices vel augue vestibulum ante ipsum","term":"matrices","card_set_id":"2ad9f504-dd79-44f9-aa07-9d63a1cffaae","created_at":"2020-04-03 04:02:00","updated_at":"2020-04-03 04:02:00"},
{"id":"4c29ad5f-73be-4c09-9c3b-69789543c002","definition":"tristique fusce congue diam","term":"multi-tasking","card_set_id":"2ad9f504-dd79-44f9-aa07-9d63a1cffaae","created_at":"2020-04-16 09:59:26","updated_at":"2020-04-16 09:59:26"},
{"id":"5b0ab4d6-bc5d-4b5b-9689-53ee2e57661a","definition":"id consequat","term":"analyzing","card_set_id":"2ad9f504-dd79-44f9-aa07-9d63a1cffaae","created_at":"2020-04-05 23:26:02","updated_at":"2020-04-05 23:26:02"},
{"id":"b2a9c10a-8fbe-4167-8489-1e79dd250533","definition":"magna bibendum imperdiet nullam orci pede venenatis","term":"encompassing","card_set_id":"2ad9f504-dd79-44f9-aa07-9d63a1cffaae","created_at":"2020-04-18 08:43:16","updated_at":"2020-04-18 08:43:16"},
{"id":"a012d4da-fdc3-4e16-8063-20e87d919455","definition":"primis","term":"project","card_set_id":"2ad9f504-dd79-44f9-aa07-9d63a1cffaae","created_at":"2020-04-07 19:56:47","updated_at":"2020-04-07 19:56:47"},
{"id":"def3bd6e-921e-42c6-83b8-6372e591a322","definition":"est","term":"didactic","card_set_id":"2ad9f504-dd79-44f9-aa07-9d63a1cffaae","created_at":"2020-04-03 19:15:51","updated_at":"2020-04-03 19:15:51"},
{"id":"1da53d0f-1ac5-4e61-ae5f-9fb5004d5733","definition":"quam fringilla rhoncus","term":"Sharable","card_set_id":"2ad9f504-dd79-44f9-aa07-9d63a1cffaae","created_at":"2020-04-14 07:40:14","updated_at":"2020-04-14 07:40:14"},
{"id":"c2a1ebe1-28ad-489d-ad7f-a4ed9b6b06b8","definition":"donec","term":"Distributed","card_set_id":"99973683-ab92-4fad-bf31-e174a1f501b1","created_at":"2020-04-12 13:34:44","updated_at":"2020-04-12 13:34:44"},
{"id":"024eae53-fed9-4f0a-a699-bc6775982246","definition":"suspendisse ornare consequat lectus in est risus auctor sed tristique","term":"synergy","card_set_id":"99973683-ab92-4fad-bf31-e174a1f501b1","created_at":"2020-04-03 04:13:32","updated_at":"2020-04-03 04:13:32"},
{"id":"287f99d6-f694-4729-a798-7a32af63332b","definition":"tellus semper interdum","term":"Front-line","card_set_id":"99973683-ab92-4fad-bf31-e174a1f501b1","created_at":"2020-04-02 18:37:19","updated_at":"2020-04-02 18:37:19"},
{"id":"34c3c99b-8f38-4aa1-977c-8f666134fb62","definition":"volutpat dui maecenas tristique est et tempus semper","term":"parallelism","card_set_id":"dc22fa58-ec15-4844-b2d6-3d9506b45efe","created_at":"2020-04-06 23:10:24","updated_at":"2020-04-06 23:10:24"},
{"id":"d165d44a-f0af-4218-aee9-d835febd6c90","definition":"nibh ligula","term":"systemic","card_set_id":"dc22fa58-ec15-4844-b2d6-3d9506b45efe","created_at":"2020-04-11 15:36:44","updated_at":"2020-04-11 15:36:44"},
{"id":"cdabb525-23af-4aaf-a24b-e0a0f621069b","definition":"vivamus tortor duis mattis egestas metus","term":"Polarised","card_set_id":"dc22fa58-ec15-4844-b2d6-3d9506b45efe","created_at":"2020-04-12 17:40:41","updated_at":"2020-04-12 17:40:41"},
{"id":"39c3d648-97da-40a8-af62-c7c1556c2ea7","definition":"sed accumsan","term":"user-facing","card_set_id":"dc22fa58-ec15-4844-b2d6-3d9506b45efe","created_at":"2020-04-13 23:39:17","updated_at":"2020-04-13 23:39:17"},
{"id":"9320c6a7-49a4-4c27-b6c9-00005919f5b7","definition":"vulputate vitae nisl aenean lectus pellentesque eget","term":"incremental","card_set_id":"dc22fa58-ec15-4844-b2d6-3d9506b45efe","created_at":"2020-04-19 05:20:57","updated_at":"2020-04-19 05:20:57"},
{"id":"75348a0b-6cac-4e3a-9b7e-5274d511294c","definition":"nisl duis","term":"Networked","card_set_id":"dc22fa58-ec15-4844-b2d6-3d9506b45efe","created_at":"2020-04-19 08:30:26","updated_at":"2020-04-19 08:30:26"},
{"id":"ae017708-3e4f-4949-ba2f-f7ac798af626","definition":"sem duis aliquam convallis nunc proin","term":"24/7","card_set_id":"dc22fa58-ec15-4844-b2d6-3d9506b45efe","created_at":"2020-04-11 23:14:58","updated_at":"2020-04-11 23:14:58"},
{"id":"1371318a-8568-4b8b-8f83-39379b1a7ce7","definition":"lacinia eget tincidunt eget tempus vel pede morbi","term":"directional","card_set_id":"dc22fa58-ec15-4844-b2d6-3d9506b45efe","created_at":"2020-04-12 14:50:32","updated_at":"2020-04-12 14:50:32"},
{"id":"c9a87660-e0ad-489c-88fd-6d4b72995580","definition":"pede venenatis non","term":"matrices","card_set_id":"dc22fa58-ec15-4844-b2d6-3d9506b45efe","created_at":"2020-04-15 03:54:11","updated_at":"2020-04-15 03:54:11"},
{"id":"78f8545d-8c28-4342-8a67-0778c9d29f4a","definition":"sollicitudin mi sit amet lobortis sapien","term":"Proactive","card_set_id":"dc22fa58-ec15-4844-b2d6-3d9506b45efe","created_at":"2020-04-01 07:51:58","updated_at":"2020-04-01 07:51:58"},
{"id":"fa1ca877-d950-43ee-b126-280b9895dbd1","definition":"est et tempus semper est","term":"orchestration","card_set_id":"dc22fa58-ec15-4844-b2d6-3d9506b45efe","created_at":"2020-04-11 18:09:42","updated_at":"2020-04-11 18:09:42"},
{"id":"00514e62-fa3e-4708-a219-e469b87c86a9","definition":"justo aliquam","term":"Pre-emptive","card_set_id":"dc22fa58-ec15-4844-b2d6-3d9506b45efe","created_at":"2020-04-09 17:09:46","updated_at":"2020-04-09 17:09:46"},
{"id":"fbaf7f1a-ce98-4d10-841b-53aed961bee9","definition":"blandit lacinia erat vestibulum sed magna at nunc commodo placerat","term":"5th generation","card_set_id":"dc22fa58-ec15-4844-b2d6-3d9506b45efe","created_at":"2020-04-09 14:09:13","updated_at":"2020-04-09 14:09:13"},
{"id":"d2062f29-8bb0-4ec2-9b01-a9a4ad670cef","definition":"orci vehicula condimentum curabitur in libero ut massa","term":"parallelism","card_set_id":"dc22fa58-ec15-4844-b2d6-3d9506b45efe","created_at":"2020-04-05 04:13:33","updated_at":"2020-04-05 04:13:33"},
{"id":"13a63128-5f01-4fe9-8f59-e21d94fcabfc","definition":"sit amet eros suspendisse accumsan tortor quis turpis sed","term":"protocol","card_set_id":"dc22fa58-ec15-4844-b2d6-3d9506b45efe","created_at":"2020-04-03 10:21:05","updated_at":"2020-04-03 10:21:05"},
{"id":"1de24a0f-6b93-40d0-90ab-59ffafc1967d","definition":"in","term":"help-desk","card_set_id":"dc22fa58-ec15-4844-b2d6-3d9506b45efe","created_at":"2020-04-09 04:43:31","updated_at":"2020-04-09 04:43:31"},
{"id":"5b5685d7-3d4a-4258-a2d1-dfd56f610b8e","definition":"malesuada in imperdiet et commodo vulputate","term":"real-time","card_set_id":"dc22fa58-ec15-4844-b2d6-3d9506b45efe","created_at":"2020-04-08 16:18:34","updated_at":"2020-04-08 16:18:34"},
{"id":"295b228b-5ca1-44ca-ae8e-1673fde41bd8","definition":"mi pede malesuada in","term":"bifurcated","card_set_id":"dc22fa58-ec15-4844-b2d6-3d9506b45efe","created_at":"2020-04-14 17:07:06","updated_at":"2020-04-14 17:07:06"},
{"id":"944ae33e-f1cf-4d87-94c5-a952eb42fa93","definition":"magna ac consequat metus sapien ut nunc vestibulum ante","term":"multi-state","card_set_id":"dc22fa58-ec15-4844-b2d6-3d9506b45efe","created_at":"2020-04-17 08:35:38","updated_at":"2020-04-17 08:35:38"},
{"id":"97e02d8c-cf86-445c-81fe-491417f71e0f","definition":"ut erat curabitur gravida nisi at nibh in hac habitasse","term":"transitional","card_set_id":"dc22fa58-ec15-4844-b2d6-3d9506b45efe","created_at":"2020-04-08 21:48:57","updated_at":"2020-04-08 21:48:57"},
{"id":"6eb475f6-4e10-43cf-ad97-08ae89f8e299","definition":"pretium iaculis diam erat fermentum justo","term":"Seamless","card_set_id":"200c015d-79e1-4931-a2a3-c208c7648168","created_at":"2020-04-02 09:37:22","updated_at":"2020-04-02 09:37:22"},
{"id":"c20a88c3-53fa-4251-bed1-4f1321efb04c","definition":"habitasse platea dictumst","term":"benchmark","card_set_id":"200c015d-79e1-4931-a2a3-c208c7648168","created_at":"2020-04-17 08:57:18","updated_at":"2020-04-17 08:57:18"},
{"id":"e79b4b52-a2b8-43e6-9ebd-21e850a92ced","definition":"non mi integer ac","term":"Secured","card_set_id":"200c015d-79e1-4931-a2a3-c208c7648168","created_at":"2020-04-02 02:13:08","updated_at":"2020-04-02 02:13:08"},
{"id":"777d3e40-f542-44ad-ae83-43667136eeb3","definition":"a libero nam dui proin leo odio porttitor","term":"Object-based","card_set_id":"200c015d-79e1-4931-a2a3-c208c7648168","created_at":"2020-04-11 22:34:46","updated_at":"2020-04-11 22:34:46"},
{"id":"2b9a77b7-3115-4958-97f9-01fb8d097ab0","definition":"magna at nunc commodo placerat praesent blandit nam nulla","term":"Open-source","card_set_id":"200c015d-79e1-4931-a2a3-c208c7648168","created_at":"2020-04-08 02:55:11","updated_at":"2020-04-08 02:55:11"},
{"id":"915938f2-10f5-482c-8823-0f43b865eae3","definition":"at dolor quis odio consequat","term":"composite","card_set_id":"be86a71f-54b0-44d8-a7ff-463ff285daaa","created_at":"2020-04-11 21:44:50","updated_at":"2020-04-11 21:44:50"},
{"id":"7cf6a29e-b7bf-4474-8ba4-eb6f25885598","definition":"vehicula consequat morbi a","term":"database","card_set_id":"be86a71f-54b0-44d8-a7ff-463ff285daaa","created_at":"2020-04-01 09:16:55","updated_at":"2020-04-01 09:16:55"},
{"id":"d2716627-915c-4fbd-8949-e522f1aa3c01","definition":"nullam porttitor lacus at turpis donec posuere","term":"static","card_set_id":"be86a71f-54b0-44d8-a7ff-463ff285daaa","created_at":"2020-04-18 00:14:24","updated_at":"2020-04-18 00:14:24"},
{"id":"35f429e4-38c1-4d96-906e-4f0977580951","definition":"ligula","term":"Universal","card_set_id":"be86a71f-54b0-44d8-a7ff-463ff285daaa","created_at":"2020-04-14 06:35:01","updated_at":"2020-04-14 06:35:01"},
{"id":"cd73c109-9ce7-4866-afd9-06b458873ba2","definition":"dui luctus rutrum nulla","term":"challenge","card_set_id":"be86a71f-54b0-44d8-a7ff-463ff285daaa","created_at":"2020-04-02 21:47:30","updated_at":"2020-04-02 21:47:30"},
{"id":"1d7f4cf7-0923-4a64-9b36-0539e8c7583b","definition":"montes nascetur ridiculus mus","term":"Total","card_set_id":"be86a71f-54b0-44d8-a7ff-463ff285daaa","created_at":"2020-04-09 16:00:53","updated_at":"2020-04-09 16:00:53"},
{"id":"b71bfe6f-b05c-49ca-840f-0c6a20f50ce8","definition":"curae donec pharetra magna vestibulum aliquet ultrices erat tortor sollicitudin","term":"process improvement","card_set_id":"d69d4755-638a-45f7-8fdd-70ed324398c3","created_at":"2020-04-18 04:13:20","updated_at":"2020-04-18 04:13:20"},
{"id":"fd944752-d5d7-47e9-ae68-3207278b9167","definition":"ut","term":"customer loyalty","card_set_id":"d69d4755-638a-45f7-8fdd-70ed324398c3","created_at":"2020-04-09 21:01:16","updated_at":"2020-04-09 21:01:16"},
{"id":"eeeec9d0-ce9f-459b-85cf-ee78fa741cb1","definition":"sed interdum","term":"Reduced","card_set_id":"d69d4755-638a-45f7-8fdd-70ed324398c3","created_at":"2020-04-02 22:17:32","updated_at":"2020-04-02 22:17:32"},
{"id":"2721b760-90b2-4780-a12e-6d5da01ca1b5","definition":"sapien placerat ante nulla justo aliquam quis turpis eget elit","term":"Intuitive","card_set_id":"d69d4755-638a-45f7-8fdd-70ed324398c3","created_at":"2020-04-01 13:25:00","updated_at":"2020-04-01 13:25:00"},
{"id":"b3dbf93a-86cd-4ff9-82f2-23ddb63f17ce","definition":"eu pede","term":"website","card_set_id":"d69d4755-638a-45f7-8fdd-70ed324398c3","created_at":"2020-04-11 12:59:21","updated_at":"2020-04-11 12:59:21"},
{"id":"8582b05b-c4f6-4d33-9e7d-cd7afcfaeb3d","definition":"arcu sed augue aliquam","term":"encryption","card_set_id":"d69d4755-638a-45f7-8fdd-70ed324398c3","created_at":"2020-04-02 22:54:41","updated_at":"2020-04-02 22:54:41"},
{"id":"139eedab-88fa-4d9e-9cfa-1c527a29abc0","definition":"ornare imperdiet sapien urna pretium nisl","term":"initiative","card_set_id":"d69d4755-638a-45f7-8fdd-70ed324398c3","created_at":"2020-04-09 13:54:41","updated_at":"2020-04-09 13:54:41"},
{"id":"f7e02c09-ef00-4408-b399-4c3b2db3f592","definition":"in eleifend quam a odio in hac habitasse platea","term":"parallelism","card_set_id":"d69d4755-638a-45f7-8fdd-70ed324398c3","created_at":"2020-04-16 21:51:06","updated_at":"2020-04-16 21:51:06"},
{"id":"ad7923d7-3a80-4848-af8e-683a8001f221","definition":"lacus at velit vivamus vel nulla eget eros elementum pellentesque","term":"Sharable","card_set_id":"d69d4755-638a-45f7-8fdd-70ed324398c3","created_at":"2020-04-16 10:14:12","updated_at":"2020-04-16 10:14:12"},
{"id":"ed34abcf-d0e9-4dbc-8c68-4c67cac0e8e1","definition":"rutrum rutrum neque aenean auctor","term":"success","card_set_id":"d69d4755-638a-45f7-8fdd-70ed324398c3","created_at":"2020-04-13 02:27:06","updated_at":"2020-04-13 02:27:06"},
{"id":"f4168dfb-310f-4f99-9fa7-a860b896a444","definition":"nulla mollis molestie lorem quisque","term":"bifurcated","card_set_id":"d69d4755-638a-45f7-8fdd-70ed324398c3","created_at":"2020-04-16 11:59:17","updated_at":"2020-04-16 11:59:17"},
{"id":"0e832fc3-289f-466a-b968-c3763a813786","definition":"enim blandit mi in porttitor","term":"system engine","card_set_id":"d69d4755-638a-45f7-8fdd-70ed324398c3","created_at":"2020-04-02 23:54:49","updated_at":"2020-04-02 23:54:49"},
{"id":"587773a3-9abf-4a3a-8cba-badf93b6ad1b","definition":"phasellus in felis donec semper","term":"archive","card_set_id":"d69d4755-638a-45f7-8fdd-70ed324398c3","created_at":"2020-04-08 13:02:58","updated_at":"2020-04-08 13:02:58"},
{"id":"8ca84c23-42c0-4731-a8d2-467442711673","definition":"ut erat curabitur gravida nisi at nibh","term":"bi-directional","card_set_id":"cccf225b-e0b0-4e37-ab54-e41fa30b4356","created_at":"2020-04-13 22:03:34","updated_at":"2020-04-13 22:03:34"},
{"id":"71be66ed-e947-442a-bbcb-ece9e554f65c","definition":"eros","term":"Focused","card_set_id":"cccf225b-e0b0-4e37-ab54-e41fa30b4356","created_at":"2020-04-12 21:38:59","updated_at":"2020-04-12 21:38:59"},
{"id":"c33d3cac-6ce6-40d2-8dae-9f510af60266","definition":"tincidunt","term":"workforce","card_set_id":"cccf225b-e0b0-4e37-ab54-e41fa30b4356","created_at":"2020-04-18 21:39:15","updated_at":"2020-04-18 21:39:15"},
{"id":"54ffdd18-c141-426f-a212-2cb4ee431a7f","definition":"odio odio","term":"matrices","card_set_id":"cccf225b-e0b0-4e37-ab54-e41fa30b4356","created_at":"2020-04-13 18:37:04","updated_at":"2020-04-13 18:37:04"},
{"id":"c5ae3dfd-1818-4979-a8a9-cd18243749af","definition":"mauris ullamcorper purus sit amet","term":"content-based","card_set_id":"cccf225b-e0b0-4e37-ab54-e41fa30b4356","created_at":"2020-04-07 00:45:55","updated_at":"2020-04-07 00:45:55"},
{"id":"933ad055-d2fe-4133-b48c-90a7aeab8c3a","definition":"vestibulum velit id pretium iaculis diam erat","term":"secured line","card_set_id":"cccf225b-e0b0-4e37-ab54-e41fa30b4356","created_at":"2020-04-14 19:12:24","updated_at":"2020-04-14 19:12:24"},
{"id":"e37659d0-7779-4e6c-a07e-32f13eb4ee36","definition":"nulla tempus vivamus in felis","term":"Expanded","card_set_id":"cccf225b-e0b0-4e37-ab54-e41fa30b4356","created_at":"2020-04-06 04:43:01","updated_at":"2020-04-06 04:43:01"},
{"id":"5b8be825-fbe4-4940-90da-1ddd3e09f0eb","definition":"tincidunt in leo maecenas pulvinar","term":"24 hour","card_set_id":"4f99612b-d356-4aec-a4f1-e777493f7669","created_at":"2020-04-20 15:21:55","updated_at":"2020-04-20 15:21:55"},
{"id":"fdc271fd-90f0-43c0-b811-56cc5515c045","definition":"auctor gravida sem praesent id massa","term":"definition","card_set_id":"4f99612b-d356-4aec-a4f1-e777493f7669","created_at":"2020-04-14 17:13:26","updated_at":"2020-04-14 17:13:26"},
{"id":"264063ca-4064-4656-9522-a2073f51b775","definition":"purus eu magna vulputate luctus cum sociis natoque penatibus","term":"transitional","card_set_id":"4f99612b-d356-4aec-a4f1-e777493f7669","created_at":"2020-04-09 17:17:02","updated_at":"2020-04-09 17:17:02"},
{"id":"49dd8824-c460-41a1-90a5-5a124e469079","definition":"diam in magna","term":"Future-proofed","card_set_id":"4f99612b-d356-4aec-a4f1-e777493f7669","created_at":"2020-04-20 21:51:51","updated_at":"2020-04-20 21:51:51"},
{"id":"07bcebc7-8610-4f7b-a89a-1ae1362ea32e","definition":"orci pede venenatis non sodales sed tincidunt","term":"human-resource","card_set_id":"4f99612b-d356-4aec-a4f1-e777493f7669","created_at":"2020-04-14 13:50:36","updated_at":"2020-04-14 13:50:36"},
{"id":"8764b887-6db2-493c-beeb-9c8ff5e6f4f8","definition":"ligula sit amet eleifend pede","term":"Universal","card_set_id":"b20bc812-6a80-4b95-90cc-58d4dc49c08c","created_at":"2020-04-01 02:42:59","updated_at":"2020-04-01 02:42:59"},
{"id":"e9ba818a-ca3a-4657-afb3-1d30be8d2f88","definition":"sed lacus morbi sem","term":"Integrated","card_set_id":"b20bc812-6a80-4b95-90cc-58d4dc49c08c","created_at":"2020-04-08 10:51:03","updated_at":"2020-04-08 10:51:03"},
{"id":"cdec2d53-c9a6-4c96-81e0-a9310a9192b2","definition":"pellentesque ultrices phasellus","term":"empowering","card_set_id":"b20bc812-6a80-4b95-90cc-58d4dc49c08c","created_at":"2020-04-01 17:59:25","updated_at":"2020-04-01 17:59:25"},
{"id":"21909692-fd43-402a-aa59-a2245517340a","definition":"proin at turpis a pede posuere nonummy integer non","term":"discrete","card_set_id":"b20bc812-6a80-4b95-90cc-58d4dc49c08c","created_at":"2020-04-08 12:25:17","updated_at":"2020-04-08 12:25:17"},
{"id":"14dac31b-c646-43f5-a35e-4e9e46ae151e","definition":"fusce","term":"Focused","card_set_id":"1416242c-cd69-4148-b367-31720821ad9f","created_at":"2020-04-05 20:23:48","updated_at":"2020-04-05 20:23:48"},
{"id":"c4853b0b-e1f9-4d3a-a8cb-250f8482a784","definition":"augue vel accumsan tellus nisi","term":"human-resource","card_set_id":"1416242c-cd69-4148-b367-31720821ad9f","created_at":"2020-04-08 18:43:55","updated_at":"2020-04-08 18:43:55"},
{"id":"e10fd564-baaa-4486-a416-c760c8d7823a","definition":"faucibus orci luctus et ultrices posuere cubilia curae duis","term":"Future-proofed","card_set_id":"1416242c-cd69-4148-b367-31720821ad9f","created_at":"2020-04-12 09:13:00","updated_at":"2020-04-12 09:13:00"},
{"id":"4a1d54f2-5b92-42cd-8357-a713d78636f0","definition":"faucibus orci luctus et ultrices posuere","term":"Down-sized","card_set_id":"1416242c-cd69-4148-b367-31720821ad9f","created_at":"2020-04-11 16:15:25","updated_at":"2020-04-11 16:15:25"},
{"id":"bc48e2b8-b230-4b23-ae50-8873008aa9cd","definition":"blandit ultrices enim lorem ipsum dolor sit amet consectetuer","term":"maximized","card_set_id":"1416242c-cd69-4148-b367-31720821ad9f","created_at":"2020-04-12 01:15:14","updated_at":"2020-04-12 01:15:14"},
{"id":"86fc7906-0f7f-4fc9-919d-d5af2c248a4f","definition":"felis sed interdum venenatis turpis enim","term":"policy","card_set_id":"1416242c-cd69-4148-b367-31720821ad9f","created_at":"2020-04-12 05:19:36","updated_at":"2020-04-12 05:19:36"},
{"id":"f2f94606-7873-422c-9ddb-74ead8495ae4","definition":"vivamus tortor duis","term":"success","card_set_id":"5818799c-1b01-4d74-84eb-8cd0a500dcbe","created_at":"2020-04-20 06:14:44","updated_at":"2020-04-20 06:14:44"},
{"id":"0b774166-2582-48c7-8218-d1a0713ad8eb","definition":"dignissim vestibulum vestibulum ante ipsum primis in faucibus orci","term":"demand-driven","card_set_id":"5818799c-1b01-4d74-84eb-8cd0a500dcbe","created_at":"2020-04-19 01:43:18","updated_at":"2020-04-19 01:43:18"},
{"id":"b892c0ee-6575-4efc-8475-6edb4a856f63","definition":"massa volutpat","term":"initiative","card_set_id":"5818799c-1b01-4d74-84eb-8cd0a500dcbe","created_at":"2020-04-19 13:20:22","updated_at":"2020-04-19 13:20:22"},
{"id":"5f81bf39-2dd7-4b1a-b644-c2f405593849","definition":"nulla ultrices aliquet","term":"Fundamental","card_set_id":"5818799c-1b01-4d74-84eb-8cd0a500dcbe","created_at":"2020-04-01 01:13:23","updated_at":"2020-04-01 01:13:23"},
{"id":"2ecc953a-89fb-4927-a601-c0fa5ea5fa45","definition":"elementum pellentesque quisque porta volutpat erat quisque erat","term":"algorithm","card_set_id":"5818799c-1b01-4d74-84eb-8cd0a500dcbe","created_at":"2020-04-05 22:06:51","updated_at":"2020-04-05 22:06:51"},
{"id":"cc469a05-9a2e-4982-8827-6dc656b0bdbb","definition":"nulla suscipit ligula in lacus curabitur at ipsum","term":"adapter","card_set_id":"5818799c-1b01-4d74-84eb-8cd0a500dcbe","created_at":"2020-04-08 18:58:13","updated_at":"2020-04-08 18:58:13"},
{"id":"15fffc7a-285c-4cee-a241-70ddbc038ac1","definition":"duis bibendum felis sed","term":"Fully-configurable","card_set_id":"5818799c-1b01-4d74-84eb-8cd0a500dcbe","created_at":"2020-04-06 09:48:40","updated_at":"2020-04-06 09:48:40"},
{"id":"93ce7d98-5cd7-4ac6-8109-963fd503e564","definition":"maecenas pulvinar lobortis est phasellus sit amet","term":"benchmark","card_set_id":"5818799c-1b01-4d74-84eb-8cd0a500dcbe","created_at":"2020-04-12 05:02:30","updated_at":"2020-04-12 05:02:30"},
{"id":"9abe022b-bb60-46cd-a1a0-0a94dca2f0cb","definition":"eu tincidunt in leo maecenas pulvinar lobortis est phasellus","term":"concept","card_set_id":"5818799c-1b01-4d74-84eb-8cd0a500dcbe","created_at":"2020-04-05 11:57:29","updated_at":"2020-04-05 11:57:29"},
{"id":"483b3ad1-1d74-4f7d-bb79-b72eaccaa9a3","definition":"ligula","term":"knowledge base","card_set_id":"5818799c-1b01-4d74-84eb-8cd0a500dcbe","created_at":"2020-04-20 19:50:53","updated_at":"2020-04-20 19:50:53"},
{"id":"a69845f8-e20b-492b-a075-3b6be98c1e0f","definition":"ipsum integer a nibh in quis","term":"mission-critical","card_set_id":"d144ac67-df32-4a3d-9d75-38cff9b306c8","created_at":"2020-04-18 05:47:39","updated_at":"2020-04-18 05:47:39"},
{"id":"b6235128-af9b-4869-9185-f14715afdce1","definition":"ut massa quis augue luctus tincidunt nulla mollis molestie lorem","term":"Persistent","card_set_id":"d144ac67-df32-4a3d-9d75-38cff9b306c8","created_at":"2020-04-13 00:20:25","updated_at":"2020-04-13 00:20:25"},
{"id":"dc2160e0-85c1-4084-9e27-0e02a4283163","definition":"suscipit ligula in lacus curabitur at ipsum ac tellus semper","term":"Optional","card_set_id":"d144ac67-df32-4a3d-9d75-38cff9b306c8","created_at":"2020-04-01 08:51:48","updated_at":"2020-04-01 08:51:48"},
{"id":"f4efc77f-f0ef-4897-9ba7-396e791c2ae7","definition":"lobortis convallis tortor risus dapibus augue vel accumsan tellus nisi","term":"Vision-oriented","card_set_id":"d144ac67-df32-4a3d-9d75-38cff9b306c8","created_at":"2020-04-12 06:09:39","updated_at":"2020-04-12 06:09:39"},
{"id":"a7b7869e-89b8-4d69-8eab-b42973862e83","definition":"nec","term":"optimizing","card_set_id":"d144ac67-df32-4a3d-9d75-38cff9b306c8","created_at":"2020-04-20 21:38:11","updated_at":"2020-04-20 21:38:11"},
{"id":"fb9dc2df-d6b7-4aea-9130-d04a8e511f0d","definition":"id ornare imperdiet sapien urna pretium nisl ut volutpat sapien","term":"Integrated","card_set_id":"d144ac67-df32-4a3d-9d75-38cff9b306c8","created_at":"2020-04-11 01:27:30","updated_at":"2020-04-11 01:27:30"},
{"id":"ea65da14-c254-4011-aac3-de96ed366877","definition":"aenean fermentum donec ut mauris eget massa tempor","term":"support","card_set_id":"d144ac67-df32-4a3d-9d75-38cff9b306c8","created_at":"2020-04-20 11:04:28","updated_at":"2020-04-20 11:04:28"},
{"id":"158c3808-e5a7-4810-8711-8ea7d19dd587","definition":"vestibulum sagittis sapien cum sociis natoque penatibus","term":"Automated","card_set_id":"d144ac67-df32-4a3d-9d75-38cff9b306c8","created_at":"2020-04-11 09:32:42","updated_at":"2020-04-11 09:32:42"},
{"id":"c8bbbc87-5e15-4c52-a6c9-ff153c2f467b","definition":"bibendum imperdiet nullam orci pede venenatis non sodales","term":"standardization","card_set_id":"d144ac67-df32-4a3d-9d75-38cff9b306c8","created_at":"2020-04-03 23:56:36","updated_at":"2020-04-03 23:56:36"},
{"id":"4a6464a3-14ba-4a21-b75d-2cecae5f63c8","definition":"id turpis integer aliquet massa id","term":"utilisation","card_set_id":"d144ac67-df32-4a3d-9d75-38cff9b306c8","created_at":"2020-04-18 00:22:24","updated_at":"2020-04-18 00:22:24"},
{"id":"ab47201e-c420-4a6f-80aa-6e983aa3ca56","definition":"purus sit","term":"projection","card_set_id":"d144ac67-df32-4a3d-9d75-38cff9b306c8","created_at":"2020-04-20 10:02:22","updated_at":"2020-04-20 10:02:22"},
{"id":"8eb48b8c-dcf5-459d-b15d-8c0415ab16ea","definition":"interdum mauris non ligula pellentesque ultrices","term":"Devolved","card_set_id":"d144ac67-df32-4a3d-9d75-38cff9b306c8","created_at":"2020-04-16 03:57:01","updated_at":"2020-04-16 03:57:01"},
{"id":"e2a91714-3a47-4587-9bb2-6afb09357252","definition":"vulputate","term":"Operative","card_set_id":"d144ac67-df32-4a3d-9d75-38cff9b306c8","created_at":"2020-04-20 14:17:26","updated_at":"2020-04-20 14:17:26"},
{"id":"f8be4c28-3345-46a5-9f42-3a61465f0241","definition":"sed ante vivamus tortor","term":"homogeneous","card_set_id":"58656edd-5912-4aeb-8412-072bf216cc03","created_at":"2020-04-19 23:39:01","updated_at":"2020-04-19 23:39:01"},
{"id":"95d41008-f134-4089-be4c-09ef5e1ac854","definition":"lacinia aenean sit amet justo morbi ut odio","term":"Networked","card_set_id":"58656edd-5912-4aeb-8412-072bf216cc03","created_at":"2020-04-01 04:05:36","updated_at":"2020-04-01 04:05:36"},
{"id":"d3514994-1605-4fb5-9070-05248e270003","definition":"nullam orci pede venenatis non sodales sed tincidunt eu","term":"Exclusive","card_set_id":"58656edd-5912-4aeb-8412-072bf216cc03","created_at":"2020-04-20 16:08:16","updated_at":"2020-04-20 16:08:16"},
{"id":"dbb4a6b9-00bf-4fa7-9530-bda90b711298","definition":"lectus pellentesque eget nunc donec quis orci eget orci vehicula","term":"Down-sized","card_set_id":"58656edd-5912-4aeb-8412-072bf216cc03","created_at":"2020-04-11 03:07:09","updated_at":"2020-04-11 03:07:09"},
{"id":"9def08be-8c99-4dec-ad4a-482d9c1221e3","definition":"nunc vestibulum ante ipsum primis in faucibus orci luctus et","term":"support","card_set_id":"58656edd-5912-4aeb-8412-072bf216cc03","created_at":"2020-04-01 18:43:30","updated_at":"2020-04-01 18:43:30"},
{"id":"fa7b456f-390f-41ab-aa84-9e1d676ef8cb","definition":"in felis donec","term":"Quality-focused","card_set_id":"58656edd-5912-4aeb-8412-072bf216cc03","created_at":"2020-04-07 20:42:15","updated_at":"2020-04-07 20:42:15"},
{"id":"c3e1add3-845b-4622-8bec-2cc73ab6664e","definition":"ante nulla justo aliquam quis turpis eget elit","term":"Public-key","card_set_id":"58656edd-5912-4aeb-8412-072bf216cc03","created_at":"2020-04-15 12:44:21","updated_at":"2020-04-15 12:44:21"},
{"id":"3c8971ff-526f-45bf-b1b0-8bb70377ab02","definition":"purus","term":"Face to face","card_set_id":"58656edd-5912-4aeb-8412-072bf216cc03","created_at":"2020-04-18 06:40:03","updated_at":"2020-04-18 06:40:03"},
{"id":"289dac11-9132-46d3-94cd-e4787bf67ebf","definition":"imperdiet sapien urna pretium nisl ut volutpat sapien","term":"forecast","card_set_id":"58656edd-5912-4aeb-8412-072bf216cc03","created_at":"2020-04-06 13:55:33","updated_at":"2020-04-06 13:55:33"},
{"id":"9a65a29a-57f2-4721-9ce2-ce1f129aed43","definition":"lacus","term":"grid-enabled","card_set_id":"8df88544-cbb7-48f3-89aa-a90b8bb5e267","created_at":"2020-04-17 13:44:36","updated_at":"2020-04-17 13:44:36"},
{"id":"a02f50bf-7ea8-4cfa-b4b8-374659110249","definition":"odio donec vitae nisi nam ultrices libero non","term":"intranet","card_set_id":"8df88544-cbb7-48f3-89aa-a90b8bb5e267","created_at":"2020-04-20 20:25:21","updated_at":"2020-04-20 20:25:21"},
{"id":"a863a333-314f-4df8-b950-2d6a5ef2a819","definition":"proin risus praesent lectus vestibulum quam","term":"policy","card_set_id":"8df88544-cbb7-48f3-89aa-a90b8bb5e267","created_at":"2020-04-17 19:10:03","updated_at":"2020-04-17 19:10:03"},
{"id":"20f8c21b-3e37-4814-a28e-2a7db81c513f","definition":"sit amet","term":"Reactive","card_set_id":"8df88544-cbb7-48f3-89aa-a90b8bb5e267","created_at":"2020-04-12 20:02:57","updated_at":"2020-04-12 20:02:57"},
{"id":"c598813f-501c-437b-ac7d-7ab2c4d3c5cc","definition":"id sapien","term":"Quality-focused","card_set_id":"8df88544-cbb7-48f3-89aa-a90b8bb5e267","created_at":"2020-04-12 16:22:42","updated_at":"2020-04-12 16:22:42"},
{"id":"d49824a6-ee71-4c01-b23c-9724eb5a5bf8","definition":"ut suscipit a feugiat et eros vestibulum","term":"Implemented","card_set_id":"8df88544-cbb7-48f3-89aa-a90b8bb5e267","created_at":"2020-04-20 07:58:29","updated_at":"2020-04-20 07:58:29"},
{"id":"f322e247-5c60-47c7-8f7e-d2e326d16fd7","definition":"sit amet consectetuer adipiscing elit proin interdum","term":"moderator","card_set_id":"8df88544-cbb7-48f3-89aa-a90b8bb5e267","created_at":"2020-04-18 17:26:41","updated_at":"2020-04-18 17:26:41"},
{"id":"0bce9946-9ea3-45bf-9d91-40c7a63e7fc3","definition":"nulla nunc purus","term":"complexity","card_set_id":"ad166cc1-f931-475c-9a5c-d0f645c6d607","created_at":"2020-04-19 11:57:15","updated_at":"2020-04-19 11:57:15"},
{"id":"54c60e18-b904-4f54-b6a6-64c0de982e4c","definition":"ridiculus mus etiam vel augue vestibulum rutrum rutrum","term":"incremental","card_set_id":"ad166cc1-f931-475c-9a5c-d0f645c6d607","created_at":"2020-04-10 07:46:42","updated_at":"2020-04-10 07:46:42"},
{"id":"1e217df1-8f2c-44a6-8828-08354e341d3d","definition":"posuere","term":"logistical","card_set_id":"ad166cc1-f931-475c-9a5c-d0f645c6d607","created_at":"2020-04-18 13:01:39","updated_at":"2020-04-18 13:01:39"},
{"id":"7a3ffeff-2391-4f64-9512-441d8f64d173","definition":"duis bibendum","term":"firmware","card_set_id":"ad166cc1-f931-475c-9a5c-d0f645c6d607","created_at":"2020-04-10 17:38:14","updated_at":"2020-04-10 17:38:14"},
{"id":"6f66a14b-b3b1-460d-9c75-3e0a9138ea91","definition":"dui vel sem sed sagittis nam","term":"local","card_set_id":"ad166cc1-f931-475c-9a5c-d0f645c6d607","created_at":"2020-04-05 08:44:07","updated_at":"2020-04-05 08:44:07"},
{"id":"d804dea1-1352-489c-aa30-264b389e5c0d","definition":"ultrices phasellus id sapien in sapien iaculis congue vivamus metus","term":"zero administration","card_set_id":"ad166cc1-f931-475c-9a5c-d0f645c6d607","created_at":"2020-04-05 05:52:32","updated_at":"2020-04-05 05:52:32"},
{"id":"070ce6cd-db86-44f8-9a5d-a5ed9b6e621b","definition":"rhoncus sed vestibulum sit amet cursus id","term":"Front-line","card_set_id":"b2248dbb-a783-4e98-86f2-e325ab7d01b5","created_at":"2020-04-14 06:54:38","updated_at":"2020-04-14 06:54:38"},
{"id":"3d35b5cd-3195-4a7f-bce6-c0d858d90915","definition":"sit amet sem fusce consequat nulla nisl nunc nisl","term":"model","card_set_id":"b2248dbb-a783-4e98-86f2-e325ab7d01b5","created_at":"2020-04-03 00:25:50","updated_at":"2020-04-03 00:25:50"},
{"id":"d0c8cc4c-555e-41aa-8cfa-bba21f85ea25","definition":"leo odio porttitor id consequat","term":"empowering","card_set_id":"b2248dbb-a783-4e98-86f2-e325ab7d01b5","created_at":"2020-04-03 04:57:25","updated_at":"2020-04-03 04:57:25"},
{"id":"21b550bd-8369-4377-90e0-71afdb3a6b1d","definition":"curabitur gravida","term":"transitional","card_set_id":"c34bb803-5b6f-40e1-90dd-61fb64013108","created_at":"2020-04-19 16:08:53","updated_at":"2020-04-19 16:08:53"},
{"id":"01a3f6cd-ac85-4373-854a-7d6ab1630f17","definition":"ornare consequat lectus in est risus auctor","term":"support","card_set_id":"c34bb803-5b6f-40e1-90dd-61fb64013108","created_at":"2020-04-15 08:15:26","updated_at":"2020-04-15 08:15:26"},
{"id":"57b62f01-0f2f-4bdd-8f90-12dfe6979d25","definition":"velit","term":"optimizing","card_set_id":"c34bb803-5b6f-40e1-90dd-61fb64013108","created_at":"2020-04-09 13:15:26","updated_at":"2020-04-09 13:15:26"},
{"id":"56effe27-823a-473f-8a83-3e0472567de5","definition":"pellentesque eget nunc","term":"needs-based","card_set_id":"c34bb803-5b6f-40e1-90dd-61fb64013108","created_at":"2020-04-15 12:01:27","updated_at":"2020-04-15 12:01:27"},
{"id":"920f63dc-c72e-4d55-8cb5-1fd32c670489","definition":"turpis","term":"User-friendly","card_set_id":"c34bb803-5b6f-40e1-90dd-61fb64013108","created_at":"2020-04-05 17:40:39","updated_at":"2020-04-05 17:40:39"},
{"id":"2ebe20f8-cd64-4248-ac97-f4748bde7700","definition":"lectus pellentesque at","term":"3rd generation","card_set_id":"c34bb803-5b6f-40e1-90dd-61fb64013108","created_at":"2020-04-01 20:22:13","updated_at":"2020-04-01 20:22:13"},
{"id":"a4051b80-abcf-414b-b143-d7a4f84e0855","definition":"morbi sem mauris laoreet","term":"firmware","card_set_id":"c34bb803-5b6f-40e1-90dd-61fb64013108","created_at":"2020-04-14 05:19:32","updated_at":"2020-04-14 05:19:32"},
{"id":"43a3f182-3331-4c35-81a7-b5161c933a10","definition":"integer tincidunt ante vel","term":"responsive","card_set_id":"c34bb803-5b6f-40e1-90dd-61fb64013108","created_at":"2020-04-19 19:29:19","updated_at":"2020-04-19 19:29:19"},
{"id":"2ae1c1df-ccea-4a3e-afb4-fd50e91e0308","definition":"eros vestibulum ac est lacinia nisi venenatis tristique fusce congue","term":"hardware","card_set_id":"9eefed97-6524-4daf-8c9f-5d9bac7e6ebe","created_at":"2020-04-17 17:52:27","updated_at":"2020-04-17 17:52:27"},
{"id":"0ff8769b-b147-4a45-adf4-c9576aeed091","definition":"vestibulum ante ipsum","term":"Vision-oriented","card_set_id":"9eefed97-6524-4daf-8c9f-5d9bac7e6ebe","created_at":"2020-04-03 21:26:58","updated_at":"2020-04-03 21:26:58"},
{"id":"34f1fc3f-b606-42d1-887f-163aab7e64f4","definition":"eget semper rutrum nulla nunc purus phasellus","term":"approach","card_set_id":"9eefed97-6524-4daf-8c9f-5d9bac7e6ebe","created_at":"2020-04-07 11:12:16","updated_at":"2020-04-07 11:12:16"},
{"id":"75e818cf-cff7-4007-92e8-0259be79b749","definition":"sollicitudin ut suscipit a feugiat et","term":"Customer-focused","card_set_id":"9eefed97-6524-4daf-8c9f-5d9bac7e6ebe","created_at":"2020-04-06 17:24:56","updated_at":"2020-04-06 17:24:56"},
{"id":"e8dcdef0-dba5-465e-9d6a-e268318c047c","definition":"sed vestibulum sit amet cursus","term":"Function-based","card_set_id":"c595dabb-0846-4984-b0ee-82b4af9ac389","created_at":"2020-04-10 04:41:51","updated_at":"2020-04-10 04:41:51"},
{"id":"42bc25ab-6efb-4dfe-a4ce-15ddd7a53324","definition":"nisi venenatis tristique fusce","term":"radical","card_set_id":"c595dabb-0846-4984-b0ee-82b4af9ac389","created_at":"2020-04-10 02:03:25","updated_at":"2020-04-10 02:03:25"},
{"id":"70a18e0d-3bf3-4021-bace-db37bd234839","definition":"integer","term":"next generation","card_set_id":"c595dabb-0846-4984-b0ee-82b4af9ac389","created_at":"2020-04-15 04:06:04","updated_at":"2020-04-15 04:06:04"},
{"id":"ee0d3cb9-d83f-4921-9f88-6de6291c2a7a","definition":"quis","term":"actuating","card_set_id":"e5efd8d4-810a-42aa-9ae2-67bed775aace","created_at":"2020-04-05 01:56:40","updated_at":"2020-04-05 01:56:40"},
{"id":"e25d63b0-9b7b-4f68-921f-ed70112994b6","definition":"ridiculus mus etiam","term":"content-based","card_set_id":"e5efd8d4-810a-42aa-9ae2-67bed775aace","created_at":"2020-04-16 09:20:20","updated_at":"2020-04-16 09:20:20"},
{"id":"5aca8e4e-fefe-4c33-acc4-b84bd6ef995b","definition":"justo etiam pretium iaculis justo in hac habitasse platea","term":"Business-focused","card_set_id":"e5efd8d4-810a-42aa-9ae2-67bed775aace","created_at":"2020-04-10 12:09:10","updated_at":"2020-04-10 12:09:10"},
{"id":"b26db0bb-d947-41b7-931f-31c54691550f","definition":"in faucibus orci luctus et ultrices posuere cubilia curae","term":"multi-state","card_set_id":"e5efd8d4-810a-42aa-9ae2-67bed775aace","created_at":"2020-04-18 18:02:35","updated_at":"2020-04-18 18:02:35"},
{"id":"112d7f4b-20ec-4331-95a5-7d3dd7f7c7dd","definition":"penatibus et magnis dis parturient","term":"benchmark","card_set_id":"4281940c-39d1-4b62-aa0a-0e1a4c2337be","created_at":"2020-04-12 11:48:51","updated_at":"2020-04-12 11:48:51"},
{"id":"b2ded644-9994-41a8-8f24-aa002988bac5","definition":"in tempus sit amet sem fusce","term":"website","card_set_id":"4281940c-39d1-4b62-aa0a-0e1a4c2337be","created_at":"2020-04-17 13:21:00","updated_at":"2020-04-17 13:21:00"},
{"id":"8ada7efa-5e14-4286-87de-5d097cd804df","definition":"leo odio condimentum id luctus nec molestie sed","term":"regional","card_set_id":"4281940c-39d1-4b62-aa0a-0e1a4c2337be","created_at":"2020-04-04 16:14:58","updated_at":"2020-04-04 16:14:58"},
{"id":"89249183-a9d6-41b2-ac19-b8bf643ff33d","definition":"commodo placerat praesent","term":"Cross-group","card_set_id":"4281940c-39d1-4b62-aa0a-0e1a4c2337be","created_at":"2020-04-18 09:56:43","updated_at":"2020-04-18 09:56:43"},
{"id":"300ba0d4-dacf-490f-acad-62b013ffb5fb","definition":"sapien in sapien iaculis congue vivamus metus arcu adipiscing","term":"Diverse","card_set_id":"4281940c-39d1-4b62-aa0a-0e1a4c2337be","created_at":"2020-04-13 01:13:13","updated_at":"2020-04-13 01:13:13"},
{"id":"5de0651b-8182-4809-909f-e92ca4fdec32","definition":"vestibulum vestibulum ante ipsum primis in faucibus orci luctus et","term":"Compatible","card_set_id":"4281940c-39d1-4b62-aa0a-0e1a4c2337be","created_at":"2020-04-14 02:48:26","updated_at":"2020-04-14 02:48:26"},
{"id":"470bdfe1-2226-43fc-8a9d-17054e4c056a","definition":"ultrices","term":"cohesive","card_set_id":"4281940c-39d1-4b62-aa0a-0e1a4c2337be","created_at":"2020-04-16 12:57:39","updated_at":"2020-04-16 12:57:39"},
{"id":"c79f69eb-958c-43b8-bbf2-d849dde089fb","definition":"primis in faucibus orci luctus et ultrices posuere","term":"Open-architected","card_set_id":"4281940c-39d1-4b62-aa0a-0e1a4c2337be","created_at":"2020-04-07 21:23:21","updated_at":"2020-04-07 21:23:21"},
{"id":"28b61825-114a-4bd5-8114-8cbd88cfbc94","definition":"aliquam","term":"Expanded","card_set_id":"4281940c-39d1-4b62-aa0a-0e1a4c2337be","created_at":"2020-04-04 10:57:49","updated_at":"2020-04-04 10:57:49"},
{"id":"34d497a6-a1ef-40a0-8f62-b7babce63796","definition":"luctus et ultrices posuere cubilia curae donec pharetra magna","term":"grid-enabled","card_set_id":"4281940c-39d1-4b62-aa0a-0e1a4c2337be","created_at":"2020-04-17 02:25:02","updated_at":"2020-04-17 02:25:02"},
{"id":"b9cb3e27-c119-4eea-983a-429e7268ffd8","definition":"ut erat","term":"User-friendly","card_set_id":"4281940c-39d1-4b62-aa0a-0e1a4c2337be","created_at":"2020-04-05 04:42:37","updated_at":"2020-04-05 04:42:37"},
{"id":"3f6e2de8-98ec-4ffa-b572-5d5dea380da8","definition":"luctus tincidunt nulla mollis","term":"5th generation","card_set_id":"4281940c-39d1-4b62-aa0a-0e1a4c2337be","created_at":"2020-04-08 22:58:21","updated_at":"2020-04-08 22:58:21"},
{"id":"5227f69b-df1b-458b-ada1-46c2ae18b8c0","definition":"libero rutrum ac lobortis vel dapibus at","term":"Optimized","card_set_id":"4281940c-39d1-4b62-aa0a-0e1a4c2337be","created_at":"2020-04-01 14:30:43","updated_at":"2020-04-01 14:30:43"},
{"id":"1c81e812-5844-49fd-970f-c0f46244aab5","definition":"ipsum ac tellus semper interdum mauris ullamcorper purus","term":"Extended","card_set_id":"4281940c-39d1-4b62-aa0a-0e1a4c2337be","created_at":"2020-04-06 19:27:46","updated_at":"2020-04-06 19:27:46"},
{"id":"aa2a95da-08f7-46b3-a851-e01fd6473d8c","definition":"ipsum integer a nibh in quis justo maecenas rhoncus aliquam","term":"project","card_set_id":"4281940c-39d1-4b62-aa0a-0e1a4c2337be","created_at":"2020-04-16 01:13:32","updated_at":"2020-04-16 01:13:32"},
{"id":"0ffa2491-28e1-483a-93db-22db22e70125","definition":"imperdiet nullam orci pede venenatis non sodales sed tincidunt","term":"heuristic","card_set_id":"4281940c-39d1-4b62-aa0a-0e1a4c2337be","created_at":"2020-04-01 10:08:38","updated_at":"2020-04-01 10:08:38"},
{"id":"0da17af3-0114-47e1-8955-7a0de20349b2","definition":"curabitur in libero ut massa volutpat convallis morbi odio","term":"tertiary","card_set_id":"4281940c-39d1-4b62-aa0a-0e1a4c2337be","created_at":"2020-04-13 00:11:14","updated_at":"2020-04-13 00:11:14"},
{"id":"3a7e611d-ab88-4c7e-ba2d-43f62b8d9e98","definition":"amet","term":"heuristic","card_set_id":"4281940c-39d1-4b62-aa0a-0e1a4c2337be","created_at":"2020-04-11 03:44:43","updated_at":"2020-04-11 03:44:43"},
{"id":"6bb1711e-0706-42a4-b385-b4920bf710b2","definition":"consectetuer adipiscing elit","term":"protocol","card_set_id":"4281940c-39d1-4b62-aa0a-0e1a4c2337be","created_at":"2020-04-17 02:21:17","updated_at":"2020-04-17 02:21:17"},
{"id":"676f9a50-e578-40db-b3d8-48dbb6df6eca","definition":"in ante","term":"model","card_set_id":"4281940c-39d1-4b62-aa0a-0e1a4c2337be","created_at":"2020-04-17 12:08:54","updated_at":"2020-04-17 12:08:54"},
{"id":"ad51c0c2-839c-4c00-bb25-30ec0d9580f8","definition":"habitasse platea dictumst aliquam augue quam sollicitudin vitae","term":"infrastructure","card_set_id":"4281940c-39d1-4b62-aa0a-0e1a4c2337be","created_at":"2020-04-05 18:54:31","updated_at":"2020-04-05 18:54:31"},
{"id":"1160c012-b5a6-44a6-83c1-f43663bf4928","definition":"aliquam convallis nunc","term":"User-friendly","card_set_id":"4281940c-39d1-4b62-aa0a-0e1a4c2337be","created_at":"2020-04-05 10:35:58","updated_at":"2020-04-05 10:35:58"},
{"id":"97c3ad56-31c1-4bfb-9845-a3ea87344339","definition":"euismod","term":"Distributed","card_set_id":"71ef1bef-05b1-4137-9df0-686132839414","created_at":"2020-04-01 19:53:07","updated_at":"2020-04-01 19:53:07"},
{"id":"0f73b7b7-b2db-4acb-b8a6-f6273db368fd","definition":"elementum pellentesque quisque porta volutpat erat quisque","term":"methodical","card_set_id":"71ef1bef-05b1-4137-9df0-686132839414","created_at":"2020-04-11 11:09:37","updated_at":"2020-04-11 11:09:37"},
{"id":"8e12eaf8-6865-48a6-9d5f-578b634d9f43","definition":"ac consequat metus sapien ut","term":"Exclusive","card_set_id":"71ef1bef-05b1-4137-9df0-686132839414","created_at":"2020-04-09 15:21:18","updated_at":"2020-04-09 15:21:18"},
{"id":"dd27af87-af21-4f44-803b-dbb59ce7324d","definition":"donec odio justo sollicitudin ut suscipit a feugiat et","term":"Customizable","card_set_id":"71ef1bef-05b1-4137-9df0-686132839414","created_at":"2020-04-12 11:59:19","updated_at":"2020-04-12 11:59:19"},
{"id":"6661121e-5bff-4ecc-984b-1559e004058f","definition":"elementum in hac habitasse platea dictumst morbi vestibulum velit","term":"software","card_set_id":"71ef1bef-05b1-4137-9df0-686132839414","created_at":"2020-04-03 01:20:10","updated_at":"2020-04-03 01:20:10"},
{"id":"30339b6d-1d8b-476d-85b2-d3118c7d0616","definition":"purus","term":"Multi-layered","card_set_id":"71ef1bef-05b1-4137-9df0-686132839414","created_at":"2020-04-06 21:08:11","updated_at":"2020-04-06 21:08:11"},
{"id":"d4f30d5a-0a07-4502-9258-2f03ebdb115b","definition":"nisi at nibh in hac habitasse platea","term":"Open-source","card_set_id":"71ef1bef-05b1-4137-9df0-686132839414","created_at":"2020-04-06 15:01:49","updated_at":"2020-04-06 15:01:49"},
{"id":"694e8171-014d-4d67-ad65-7f361c053bb2","definition":"id turpis integer aliquet massa id lobortis convallis tortor","term":"heuristic","card_set_id":"71ef1bef-05b1-4137-9df0-686132839414","created_at":"2020-04-04 06:52:39","updated_at":"2020-04-04 06:52:39"},
{"id":"9d612c1f-40ee-42ae-8cfd-8d11951483f8","definition":"nulla elit ac nulla sed","term":"User-friendly","card_set_id":"71ef1bef-05b1-4137-9df0-686132839414","created_at":"2020-04-19 18:47:45","updated_at":"2020-04-19 18:47:45"},
{"id":"9931af48-a311-454c-a7b8-f3c5d71c2e7b","definition":"penatibus et magnis","term":"Automated","card_set_id":"6ba80e05-be98-40e0-8d99-d6e3131a51c3","created_at":"2020-04-20 17:02:49","updated_at":"2020-04-20 17:02:49"},
{"id":"d56ffef3-edde-4562-9194-9ce4d30aefbd","definition":"et ultrices posuere cubilia curae nulla dapibus dolor vel","term":"context-sensitive","card_set_id":"6ba80e05-be98-40e0-8d99-d6e3131a51c3","created_at":"2020-04-15 04:28:21","updated_at":"2020-04-15 04:28:21"},
{"id":"a4b7b062-e902-4eaf-8e16-0530c0562dec","definition":"feugiat non pretium quis","term":"uniform","card_set_id":"6ba80e05-be98-40e0-8d99-d6e3131a51c3","created_at":"2020-04-03 20:29:45","updated_at":"2020-04-03 20:29:45"},
{"id":"a1509cf6-4530-42e1-9d43-1126e3fced2d","definition":"in","term":"utilisation","card_set_id":"6ba80e05-be98-40e0-8d99-d6e3131a51c3","created_at":"2020-04-05 17:05:11","updated_at":"2020-04-05 17:05:11"},
{"id":"de57d269-1f15-44e8-95d0-8edf437b746d","definition":"duis aliquam convallis","term":"Decentralized","card_set_id":"6ba80e05-be98-40e0-8d99-d6e3131a51c3","created_at":"2020-04-12 19:51:49","updated_at":"2020-04-12 19:51:49"},
{"id":"ded667ad-6f82-490f-a9c9-ec03443eaee9","definition":"ante ipsum primis in faucibus orci","term":"Quality-focused","card_set_id":"6ba80e05-be98-40e0-8d99-d6e3131a51c3","created_at":"2020-04-16 03:58:27","updated_at":"2020-04-16 03:58:27"},
{"id":"28cbadf8-a7c7-42cc-a2cb-3e6b53271ad9","definition":"erat curabitur gravida nisi at nibh in","term":"encompassing","card_set_id":"6ba80e05-be98-40e0-8d99-d6e3131a51c3","created_at":"2020-04-04 14:55:55","updated_at":"2020-04-04 14:55:55"},
{"id":"6257fc80-3805-4313-8145-866a5294616d","definition":"volutpat dui maecenas tristique est et tempus semper","term":"asynchronous","card_set_id":"6ba80e05-be98-40e0-8d99-d6e3131a51c3","created_at":"2020-04-07 05:37:56","updated_at":"2020-04-07 05:37:56"},
{"id":"eb66c682-ee48-4752-b6fb-c6fca10e17e8","definition":"turpis nec euismod scelerisque quam turpis adipiscing lorem vitae mattis","term":"User-centric","card_set_id":"6ba80e05-be98-40e0-8d99-d6e3131a51c3","created_at":"2020-04-17 12:17:17","updated_at":"2020-04-17 12:17:17"},
{"id":"5529f0aa-9cf8-4b42-b42f-2c85890055e0","definition":"quis orci eget orci","term":"Ameliorated","card_set_id":"6ba80e05-be98-40e0-8d99-d6e3131a51c3","created_at":"2020-04-18 11:44:05","updated_at":"2020-04-18 11:44:05"},
{"id":"eda49f61-7ba8-468e-a32b-03a3e33fde2e","definition":"eleifend quam a odio in hac habitasse platea dictumst","term":"product","card_set_id":"6ba80e05-be98-40e0-8d99-d6e3131a51c3","created_at":"2020-04-15 17:40:33","updated_at":"2020-04-15 17:40:33"},
{"id":"5279334c-8654-4a66-8142-d3bd202dd4f2","definition":"non interdum in ante vestibulum ante ipsum","term":"system-worthy","card_set_id":"6ba80e05-be98-40e0-8d99-d6e3131a51c3","created_at":"2020-04-11 07:31:44","updated_at":"2020-04-11 07:31:44"},
{"id":"0b82d8b2-ad42-40a5-96a3-3602841e8c79","definition":"vulputate luctus cum sociis natoque penatibus et","term":"Networked","card_set_id":"6ba80e05-be98-40e0-8d99-d6e3131a51c3","created_at":"2020-04-07 10:04:01","updated_at":"2020-04-07 10:04:01"},
{"id":"29b93fe1-dd47-4d48-a8b5-7464c60df9e2","definition":"auctor sed tristique in tempus sit amet sem","term":"conglomeration","card_set_id":"ff332c82-254f-4db2-b330-5ad22ca433fa","created_at":"2020-04-01 06:51:42","updated_at":"2020-04-01 06:51:42"},
{"id":"6820cd5b-da9b-4087-8d00-c7f350d92cf7","definition":"montes nascetur ridiculus mus","term":"Cross-platform","card_set_id":"ff332c82-254f-4db2-b330-5ad22ca433fa","created_at":"2020-04-09 20:48:57","updated_at":"2020-04-09 20:48:57"},
{"id":"a21e533d-88ac-4c7e-8cea-27cb333d43a5","definition":"quisque id justo sit","term":"emulation","card_set_id":"ff332c82-254f-4db2-b330-5ad22ca433fa","created_at":"2020-04-08 10:02:18","updated_at":"2020-04-08 10:02:18"},
{"id":"e59c71c9-cd0b-4957-9db4-023da027a26b","definition":"potenti cras in purus eu","term":"well-modulated","card_set_id":"ff332c82-254f-4db2-b330-5ad22ca433fa","created_at":"2020-04-04 08:56:23","updated_at":"2020-04-04 08:56:23"},
{"id":"f706c356-7c74-426c-80cd-ffbf5c17ea3d","definition":"elit sodales scelerisque","term":"help-desk","card_set_id":"ff332c82-254f-4db2-b330-5ad22ca433fa","created_at":"2020-04-09 03:53:33","updated_at":"2020-04-09 03:53:33"},
{"id":"7b5a6e99-1b56-4dc4-9946-3f5837e02569","definition":"turpis","term":"upward-trending","card_set_id":"ff332c82-254f-4db2-b330-5ad22ca433fa","created_at":"2020-04-16 15:12:32","updated_at":"2020-04-16 15:12:32"},
{"id":"1c576400-8381-42e9-9e57-4df0708da4d9","definition":"convallis duis consequat dui nec nisi volutpat eleifend","term":"Multi-channelled","card_set_id":"ff332c82-254f-4db2-b330-5ad22ca433fa","created_at":"2020-04-05 11:50:51","updated_at":"2020-04-05 11:50:51"},
{"id":"8f937d55-45d5-4206-8db7-0d40d15a9cca","definition":"pede ac diam cras pellentesque volutpat dui maecenas","term":"Progressive","card_set_id":"ff332c82-254f-4db2-b330-5ad22ca433fa","created_at":"2020-04-11 04:02:27","updated_at":"2020-04-11 04:02:27"},
{"id":"1a2a9eae-1aa1-4402-8865-e74586d28b86","definition":"suspendisse potenti in eleifend quam a odio","term":"Multi-layered","card_set_id":"ff332c82-254f-4db2-b330-5ad22ca433fa","created_at":"2020-04-15 01:12:50","updated_at":"2020-04-15 01:12:50"},
{"id":"a010b3c5-60eb-43fc-a15b-fdd9d7f5dc52","definition":"tortor duis mattis egestas metus aenean fermentum donec","term":"Polarised","card_set_id":"ff332c82-254f-4db2-b330-5ad22ca433fa","created_at":"2020-04-01 14:17:50","updated_at":"2020-04-01 14:17:50"},
{"id":"f1cacab5-04f4-4850-bef8-b17b91dc0ac1","definition":"risus dapibus augue vel","term":"Cross-platform","card_set_id":"ff332c82-254f-4db2-b330-5ad22ca433fa","created_at":"2020-04-12 11:28:21","updated_at":"2020-04-12 11:28:21"},
{"id":"05518ff4-8b6a-4555-ac8e-9f414dc0c794","definition":"semper rutrum nulla nunc purus phasellus in","term":"bi-directional","card_set_id":"ff332c82-254f-4db2-b330-5ad22ca433fa","created_at":"2020-04-16 04:39:44","updated_at":"2020-04-16 04:39:44"},
{"id":"73327a24-13e4-4fe3-9fb5-fef17ca5cdb4","definition":"nullam porttitor lacus at turpis donec posuere metus vitae ipsum","term":"heuristic","card_set_id":"ff332c82-254f-4db2-b330-5ad22ca433fa","created_at":"2020-04-02 13:05:32","updated_at":"2020-04-02 13:05:32"},
{"id":"5aa5a2f8-6d6d-4a06-91bb-cb963a92be56","definition":"nisi volutpat eleifend donec ut dolor morbi vel","term":"workforce","card_set_id":"37c95675-0dea-4b6d-8fe9-14b4ec60160b","created_at":"2020-04-03 04:07:58","updated_at":"2020-04-03 04:07:58"},
{"id":"b8b2027d-8781-45c2-936d-8d002b905cef","definition":"nunc","term":"bi-directional","card_set_id":"37c95675-0dea-4b6d-8fe9-14b4ec60160b","created_at":"2020-04-20 10:36:22","updated_at":"2020-04-20 10:36:22"},
{"id":"1c0cc664-a590-4fc3-b15d-c78c2a72a2da","definition":"donec ut mauris eget massa tempor","term":"non-volatile","card_set_id":"37c95675-0dea-4b6d-8fe9-14b4ec60160b","created_at":"2020-04-03 08:28:41","updated_at":"2020-04-03 08:28:41"},
{"id":"07a06ae6-bb36-47bb-ae74-4c181c18f9c7","definition":"maecenas leo odio condimentum id","term":"instruction set","card_set_id":"37c95675-0dea-4b6d-8fe9-14b4ec60160b","created_at":"2020-04-11 18:44:31","updated_at":"2020-04-11 18:44:31"},
{"id":"e135da7a-8e2b-4638-aeb8-f69c7c991c8f","definition":"duis bibendum morbi non quam nec dui","term":"zero administration","card_set_id":"37c95675-0dea-4b6d-8fe9-14b4ec60160b","created_at":"2020-04-17 10:43:05","updated_at":"2020-04-17 10:43:05"},
{"id":"3f8ccb1b-a386-4511-8553-a33ee89f3a9b","definition":"sit amet","term":"Programmable","card_set_id":"37c95675-0dea-4b6d-8fe9-14b4ec60160b","created_at":"2020-04-11 06:57:53","updated_at":"2020-04-11 06:57:53"},
{"id":"a1be3a37-f039-4f6e-8ece-c0af7a95e1de","definition":"est lacinia nisi venenatis","term":"full-range","card_set_id":"37c95675-0dea-4b6d-8fe9-14b4ec60160b","created_at":"2020-04-05 20:57:32","updated_at":"2020-04-05 20:57:32"},
{"id":"0e3a0ae5-cdef-42e2-8294-173189ba304b","definition":"lacinia erat vestibulum sed","term":"web-enabled","card_set_id":"37c95675-0dea-4b6d-8fe9-14b4ec60160b","created_at":"2020-04-17 14:55:57","updated_at":"2020-04-17 14:55:57"},
{"id":"1dcb9f66-3cec-496e-b09a-29fb3c30d274","definition":"semper est quam pharetra magna ac consequat metus sapien","term":"middleware","card_set_id":"37c95675-0dea-4b6d-8fe9-14b4ec60160b","created_at":"2020-04-13 06:41:19","updated_at":"2020-04-13 06:41:19"},
{"id":"29a93191-1f65-4d36-8e18-d3f78bc9ab3e","definition":"eu est congue elementum in","term":"Secured","card_set_id":"37c95675-0dea-4b6d-8fe9-14b4ec60160b","created_at":"2020-04-02 01:44:39","updated_at":"2020-04-02 01:44:39"},
{"id":"720ca1a8-8eba-4eff-aabf-564cd0e2f1e0","definition":"ipsum integer a nibh in","term":"optimal","card_set_id":"37c95675-0dea-4b6d-8fe9-14b4ec60160b","created_at":"2020-04-15 23:50:41","updated_at":"2020-04-15 23:50:41"},
{"id":"1b3d2512-67c0-4107-804b-11ddc8178994","definition":"erat tortor","term":"Expanded","card_set_id":"37c95675-0dea-4b6d-8fe9-14b4ec60160b","created_at":"2020-04-05 03:52:17","updated_at":"2020-04-05 03:52:17"},
{"id":"2966b542-a1ef-467b-838f-c2f170cc712e","definition":"purus aliquet at feugiat non pretium quis","term":"contextually-based","card_set_id":"37c95675-0dea-4b6d-8fe9-14b4ec60160b","created_at":"2020-04-04 09:51:39","updated_at":"2020-04-04 09:51:39"},
{"id":"d83143fe-c0cd-4128-8465-37cbd591c23c","definition":"nulla elit ac nulla sed vel enim","term":"dedicated","card_set_id":"37c95675-0dea-4b6d-8fe9-14b4ec60160b","created_at":"2020-04-09 11:31:42","updated_at":"2020-04-09 11:31:42"},
{"id":"33c87c02-09a6-406f-a234-b77103c9180d","definition":"ut dolor morbi vel lectus in quam fringilla","term":"architecture","card_set_id":"37c95675-0dea-4b6d-8fe9-14b4ec60160b","created_at":"2020-04-03 08:30:50","updated_at":"2020-04-03 08:30:50"},
{"id":"7fb63fc2-b524-4f53-926b-6fe8ea3a131e","definition":"sit amet justo morbi ut odio cras mi pede malesuada","term":"static","card_set_id":"4880e36a-6006-4375-8903-85914636ef9c","created_at":"2020-04-13 23:44:03","updated_at":"2020-04-13 23:44:03"},
{"id":"83725a9f-8839-44f9-aaf9-94ef2acd7e84","definition":"ante vestibulum ante ipsum primis in faucibus orci luctus et","term":"Proactive","card_set_id":"4880e36a-6006-4375-8903-85914636ef9c","created_at":"2020-04-01 15:30:42","updated_at":"2020-04-01 15:30:42"},
{"id":"f6263e77-3cae-4071-80ef-8dee74a9abda","definition":"lobortis vel dapibus at diam nam tristique","term":"Down-sized","card_set_id":"4880e36a-6006-4375-8903-85914636ef9c","created_at":"2020-04-14 06:09:07","updated_at":"2020-04-14 06:09:07"},
{"id":"430e79dd-3090-4b27-9430-d433a60d3e5f","definition":"suspendisse accumsan tortor quis turpis sed ante vivamus tortor duis","term":"Organized","card_set_id":"4880e36a-6006-4375-8903-85914636ef9c","created_at":"2020-04-18 13:21:33","updated_at":"2020-04-18 13:21:33"},
{"id":"e9f9d959-e5e1-4d2e-912b-edf59c522734","definition":"turpis elementum ligula vehicula consequat","term":"5th generation","card_set_id":"4880e36a-6006-4375-8903-85914636ef9c","created_at":"2020-04-05 05:30:09","updated_at":"2020-04-05 05:30:09"},
{"id":"f4de6e7f-5bd7-4a24-a93a-1e7e8e77b2cc","definition":"fermentum justo nec condimentum neque","term":"info-mediaries","card_set_id":"4880e36a-6006-4375-8903-85914636ef9c","created_at":"2020-04-14 07:15:21","updated_at":"2020-04-14 07:15:21"},
{"id":"0132bc25-78ac-416b-8300-24b52ef44090","definition":"proin eu mi nulla ac enim in tempor","term":"Grass-roots","card_set_id":"4880e36a-6006-4375-8903-85914636ef9c","created_at":"2020-04-19 20:32:02","updated_at":"2020-04-19 20:32:02"},
{"id":"4e5a4c22-1c24-46e1-842f-da7c8a786c54","definition":"bibendum felis sed interdum venenatis turpis enim blandit","term":"maximized","card_set_id":"4880e36a-6006-4375-8903-85914636ef9c","created_at":"2020-04-14 16:57:58","updated_at":"2020-04-14 16:57:58"},
{"id":"9aab7b7d-abb0-4917-afe9-8d89494e724b","definition":"eu massa donec dapibus duis at velit eu est congue","term":"asynchronous","card_set_id":"4880e36a-6006-4375-8903-85914636ef9c","created_at":"2020-04-18 01:19:09","updated_at":"2020-04-18 01:19:09"},
{"id":"10f1a716-7abf-4efa-aa04-9aff68e33af7","definition":"metus aenean fermentum donec ut","term":"model","card_set_id":"4880e36a-6006-4375-8903-85914636ef9c","created_at":"2020-04-16 01:23:58","updated_at":"2020-04-16 01:23:58"},
{"id":"f7462d3a-610e-4ae8-8f38-f47c3481795b","definition":"nulla tempus","term":"adapter","card_set_id":"4880e36a-6006-4375-8903-85914636ef9c","created_at":"2020-04-02 15:31:34","updated_at":"2020-04-02 15:31:34"},
{"id":"86bc4697-5cc7-4a90-b373-92762015cbd0","definition":"ac leo pellentesque ultrices","term":"tangible","card_set_id":"4880e36a-6006-4375-8903-85914636ef9c","created_at":"2020-04-16 20:18:53","updated_at":"2020-04-16 20:18:53"},
{"id":"c2dc70da-85ce-48d0-88e7-e43aecfccdfa","definition":"luctus","term":"definition","card_set_id":"4880e36a-6006-4375-8903-85914636ef9c","created_at":"2020-04-19 13:01:30","updated_at":"2020-04-19 13:01:30"},
{"id":"1a24f057-2cf2-4da3-81ee-71a3271c7759","definition":"ipsum primis in faucibus orci","term":"Graphic Interface","card_set_id":"607dc481-94d2-4292-a8ef-779134a74782","created_at":"2020-04-20 07:43:20","updated_at":"2020-04-20 07:43:20"},
{"id":"a1061726-7943-4eaa-bc6c-e4b6f542563c","definition":"risus auctor sed tristique in tempus sit amet sem fusce","term":"systematic","card_set_id":"607dc481-94d2-4292-a8ef-779134a74782","created_at":"2020-04-11 07:01:47","updated_at":"2020-04-11 07:01:47"},
{"id":"01bd5b4d-b1f0-4335-b05e-cb68ff4a6d2a","definition":"vel nisl duis ac nibh fusce","term":"empowering","card_set_id":"607dc481-94d2-4292-a8ef-779134a74782","created_at":"2020-04-19 00:41:52","updated_at":"2020-04-19 00:41:52"},
{"id":"0068422c-5578-4317-96e6-f3836b68b3e1","definition":"dui nec","term":"dedicated","card_set_id":"607dc481-94d2-4292-a8ef-779134a74782","created_at":"2020-04-07 17:34:34","updated_at":"2020-04-07 17:34:34"},
{"id":"7899f393-55d7-4a34-8c3b-3bfbc7116501","definition":"at nulla suspendisse potenti cras in","term":"Monitored","card_set_id":"607dc481-94d2-4292-a8ef-779134a74782","created_at":"2020-04-13 09:53:31","updated_at":"2020-04-13 09:53:31"},
{"id":"e059166c-f309-42fc-b9a7-5eec038c5e0c","definition":"in lacus curabitur at","term":"installation","card_set_id":"607dc481-94d2-4292-a8ef-779134a74782","created_at":"2020-04-05 08:17:43","updated_at":"2020-04-05 08:17:43"},
{"id":"ee50d5d4-2a30-4cd9-9b68-2b0d12a1d783","definition":"ante nulla justo aliquam","term":"Integrated","card_set_id":"607dc481-94d2-4292-a8ef-779134a74782","created_at":"2020-04-19 02:23:24","updated_at":"2020-04-19 02:23:24"},
{"id":"b85d43b3-5012-4173-b7a8-d8f45924f10e","definition":"consectetuer adipiscing elit","term":"clear-thinking","card_set_id":"607dc481-94d2-4292-a8ef-779134a74782","created_at":"2020-04-15 09:03:18","updated_at":"2020-04-15 09:03:18"},
{"id":"b514e377-8c68-485a-9fb4-53bb64d40cbd","definition":"justo","term":"motivating","card_set_id":"607dc481-94d2-4292-a8ef-779134a74782","created_at":"2020-04-17 04:46:21","updated_at":"2020-04-17 04:46:21"},
{"id":"870b97ae-6f58-4cda-868e-682739cfd9cf","definition":"quisque","term":"archive","card_set_id":"607dc481-94d2-4292-a8ef-779134a74782","created_at":"2020-04-01 20:33:05","updated_at":"2020-04-01 20:33:05"},
{"id":"1f694b52-3614-4802-bf0e-5622ee3d7515","definition":"posuere felis sed lacus","term":"Focused","card_set_id":"607dc481-94d2-4292-a8ef-779134a74782","created_at":"2020-04-19 21:07:32","updated_at":"2020-04-19 21:07:32"},
{"id":"42033a23-c139-44cd-bcab-86f8b1cfc7ce","definition":"hac habitasse platea dictumst etiam faucibus cursus urna ut tellus","term":"Focused","card_set_id":"607dc481-94d2-4292-a8ef-779134a74782","created_at":"2020-04-13 11:43:35","updated_at":"2020-04-13 11:43:35"},
{"id":"79c4bf7c-a81a-4531-81b6-02e0bb256b0d","definition":"vel pede morbi porttitor lorem id ligula suspendisse ornare","term":"customer loyalty","card_set_id":"607dc481-94d2-4292-a8ef-779134a74782","created_at":"2020-04-04 21:58:03","updated_at":"2020-04-04 21:58:03"},
{"id":"425d8e0f-6e9b-4e57-9d65-acbabb424d71","definition":"ultrices","term":"coherent","card_set_id":"eb8d94c5-f62d-443a-8a75-fc0460807a4c","created_at":"2020-04-04 06:59:39","updated_at":"2020-04-04 06:59:39"},
{"id":"13e20ca0-c1e3-4f94-966e-7dab9016c2c2","definition":"elementum eu interdum eu tincidunt in leo maecenas pulvinar lobortis","term":"discrete","card_set_id":"eb8d94c5-f62d-443a-8a75-fc0460807a4c","created_at":"2020-04-16 08:18:00","updated_at":"2020-04-16 08:18:00"},
{"id":"258041cf-bcdb-4d65-bd91-db0c42b4bbd5","definition":"nam nulla integer pede justo lacinia","term":"local area network","card_set_id":"eb8d94c5-f62d-443a-8a75-fc0460807a4c","created_at":"2020-04-04 07:55:16","updated_at":"2020-04-04 07:55:16"},
{"id":"7a6c8ca6-c1bd-43f8-81e3-ec6bfc88429b","definition":"orci vehicula","term":"human-resource","card_set_id":"31d0444c-b2d2-49dc-a05d-7303fb3abbc5","created_at":"2020-04-19 07:26:53","updated_at":"2020-04-19 07:26:53"},
{"id":"39f749c4-57a9-4fbd-a9a4-f7ce422c8ae0","definition":"purus","term":"system-worthy","card_set_id":"31d0444c-b2d2-49dc-a05d-7303fb3abbc5","created_at":"2020-04-06 00:45:32","updated_at":"2020-04-06 00:45:32"},
{"id":"63c43bc2-40b3-42d6-ad84-bb62cc8614f4","definition":"urna","term":"solution","card_set_id":"31d0444c-b2d2-49dc-a05d-7303fb3abbc5","created_at":"2020-04-03 23:45:03","updated_at":"2020-04-03 23:45:03"},
{"id":"c85ea810-5362-451d-bbd5-443795c91fc1","definition":"pede justo","term":"Re-contextualized","card_set_id":"31d0444c-b2d2-49dc-a05d-7303fb3abbc5","created_at":"2020-04-14 02:58:49","updated_at":"2020-04-14 02:58:49"},
{"id":"490205e4-0884-4123-bacd-7cf925fca069","definition":"ultrices phasellus id sapien in sapien iaculis","term":"Multi-channelled","card_set_id":"31d0444c-b2d2-49dc-a05d-7303fb3abbc5","created_at":"2020-04-12 12:47:41","updated_at":"2020-04-12 12:47:41"},
{"id":"9958274f-ec20-4af5-8567-f66aa091ac79","definition":"lectus pellentesque eget nunc donec quis orci eget orci","term":"mission-critical","card_set_id":"a6e853a9-8757-48fa-9342-fe8e85b15b00","created_at":"2020-04-02 11:04:08","updated_at":"2020-04-02 11:04:08"},
{"id":"fa538dc6-56ae-4d5a-9690-5ccf6019c475","definition":"sit amet cursus id","term":"utilisation","card_set_id":"a6e853a9-8757-48fa-9342-fe8e85b15b00","created_at":"2020-04-06 07:08:04","updated_at":"2020-04-06 07:08:04"},
{"id":"1bebaf06-1384-4677-b399-af24dce1635c","definition":"feugiat non pretium","term":"policy","card_set_id":"a6e853a9-8757-48fa-9342-fe8e85b15b00","created_at":"2020-04-12 00:54:22","updated_at":"2020-04-12 00:54:22"},
{"id":"b5c0e3ce-aafa-448d-bea0-a6f7a23f23f3","definition":"tempus","term":"empowering","card_set_id":"a6e853a9-8757-48fa-9342-fe8e85b15b00","created_at":"2020-04-20 12:32:51","updated_at":"2020-04-20 12:32:51"},
{"id":"ec6ae751-d83f-45ef-85a7-b61ca3df35b3","definition":"aliquet massa id","term":"Digitized","card_set_id":"a6e853a9-8757-48fa-9342-fe8e85b15b00","created_at":"2020-04-02 04:22:02","updated_at":"2020-04-02 04:22:02"},
{"id":"334b25d2-c6dc-4fbd-ae3b-2a735d17a781","definition":"rutrum neque aenean auctor gravida sem praesent id massa","term":"cohesive","card_set_id":"a6e853a9-8757-48fa-9342-fe8e85b15b00","created_at":"2020-04-06 03:40:07","updated_at":"2020-04-06 03:40:07"},
{"id":"bd55bbd2-3597-40fe-a2ba-b0b8703daae8","definition":"consequat morbi","term":"Extended","card_set_id":"a6e853a9-8757-48fa-9342-fe8e85b15b00","created_at":"2020-04-11 16:13:25","updated_at":"2020-04-11 16:13:25"},
{"id":"b66ad8eb-97f2-41ef-9b0b-0d2c4434e9e4","definition":"porttitor lacus","term":"function","card_set_id":"199f44e1-6393-45ab-bace-600eb2f30ba6","created_at":"2020-04-06 02:20:26","updated_at":"2020-04-06 02:20:26"},
{"id":"bf28d234-c1f6-4737-bae2-d98001305fb8","definition":"nibh in lectus","term":"Synergistic","card_set_id":"199f44e1-6393-45ab-bace-600eb2f30ba6","created_at":"2020-04-01 17:09:40","updated_at":"2020-04-01 17:09:40"},
{"id":"16ad1205-e531-4ad1-b2ce-9704c6fe604b","definition":"ante nulla justo aliquam quis turpis","term":"Extended","card_set_id":"199f44e1-6393-45ab-bace-600eb2f30ba6","created_at":"2020-04-03 22:35:52","updated_at":"2020-04-03 22:35:52"},
{"id":"399dd225-3465-4671-83be-4c8c9751ce6f","definition":"primis in faucibus orci luctus et ultrices posuere cubilia curae","term":"paradigm","card_set_id":"199f44e1-6393-45ab-bace-600eb2f30ba6","created_at":"2020-04-14 20:48:10","updated_at":"2020-04-14 20:48:10"},
{"id":"8c3464a5-fa15-4b28-994e-0675e691f1ca","definition":"primis in faucibus orci","term":"flexibility","card_set_id":"199f44e1-6393-45ab-bace-600eb2f30ba6","created_at":"2020-04-10 16:59:31","updated_at":"2020-04-10 16:59:31"},
{"id":"6cdd836f-5feb-45bb-978b-7b34a705652d","definition":"leo odio porttitor id consequat in consequat ut","term":"Quality-focused","card_set_id":"199f44e1-6393-45ab-bace-600eb2f30ba6","created_at":"2020-04-20 04:38:44","updated_at":"2020-04-20 04:38:44"},
{"id":"72f01645-e349-47e3-b81e-3f015f014900","definition":"luctus rutrum nulla tellus in","term":"Devolved","card_set_id":"199f44e1-6393-45ab-bace-600eb2f30ba6","created_at":"2020-04-15 21:59:54","updated_at":"2020-04-15 21:59:54"},
{"id":"625381bc-96a6-4f86-911d-c10071b2c946","definition":"mauris lacinia sapien quis libero","term":"hub","card_set_id":"199f44e1-6393-45ab-bace-600eb2f30ba6","created_at":"2020-04-16 05:46:43","updated_at":"2020-04-16 05:46:43"},
{"id":"c56de85e-1804-4c79-89f8-e4a31c8c99d5","definition":"quis odio consequat varius integer ac leo","term":"project","card_set_id":"57cdd2d5-ea5d-4f9f-9911-b8a5038babbe","created_at":"2020-04-14 17:49:38","updated_at":"2020-04-14 17:49:38"},
{"id":"65bb81eb-9216-4ebd-a9ef-08aef22be830","definition":"condimentum id luctus nec molestie sed justo pellentesque","term":"Reduced","card_set_id":"57cdd2d5-ea5d-4f9f-9911-b8a5038babbe","created_at":"2020-04-12 06:04:58","updated_at":"2020-04-12 06:04:58"},
{"id":"8b3917ee-61d7-45f2-8216-a6026e1a3cc9","definition":"potenti cras","term":"incremental","card_set_id":"57cdd2d5-ea5d-4f9f-9911-b8a5038babbe","created_at":"2020-04-13 18:31:37","updated_at":"2020-04-13 18:31:37"},
{"id":"de87eff0-4870-482d-a6e8-bf96664087d8","definition":"diam neque vestibulum eget vulputate ut","term":"grid-enabled","card_set_id":"57cdd2d5-ea5d-4f9f-9911-b8a5038babbe","created_at":"2020-04-04 00:45:31","updated_at":"2020-04-04 00:45:31"},
{"id":"fc227ce1-67d9-429a-bd3c-76b27d16b212","definition":"ac est","term":"analyzing","card_set_id":"57cdd2d5-ea5d-4f9f-9911-b8a5038babbe","created_at":"2020-04-03 03:22:25","updated_at":"2020-04-03 03:22:25"},
{"id":"8ce0ec58-25f2-47b3-b5f5-ea499d0031a3","definition":"erat id mauris vulputate elementum","term":"Advanced","card_set_id":"57cdd2d5-ea5d-4f9f-9911-b8a5038babbe","created_at":"2020-04-16 03:03:52","updated_at":"2020-04-16 03:03:52"},
{"id":"f9443d8d-018b-4476-9698-3a94af34cbf3","definition":"volutpat sapien arcu sed augue aliquam erat volutpat in","term":"emulation","card_set_id":"7fa41313-9a6f-4963-b6ec-dbb671df6f39","created_at":"2020-04-03 14:53:35","updated_at":"2020-04-03 14:53:35"},
{"id":"e04f5b37-6fcb-4a9e-beae-c59c12c125d5","definition":"morbi a ipsum integer a nibh","term":"interface","card_set_id":"7fa41313-9a6f-4963-b6ec-dbb671df6f39","created_at":"2020-04-20 19:41:25","updated_at":"2020-04-20 19:41:25"},
{"id":"e6764ef2-fede-4ff9-9f15-dd7f7cf0d805","definition":"orci luctus et ultrices posuere cubilia curae duis","term":"Visionary","card_set_id":"7fa41313-9a6f-4963-b6ec-dbb671df6f39","created_at":"2020-04-14 02:32:22","updated_at":"2020-04-14 02:32:22"},
{"id":"a4e59060-3622-4bc6-a9de-b71f5707c968","definition":"lobortis convallis tortor","term":"logistical","card_set_id":"7fa41313-9a6f-4963-b6ec-dbb671df6f39","created_at":"2020-04-12 23:06:31","updated_at":"2020-04-12 23:06:31"},
{"id":"81c52f24-0a4f-406f-bdfd-1c1ccdd69ab6","definition":"nulla mollis molestie lorem quisque ut","term":"directional","card_set_id":"7fa41313-9a6f-4963-b6ec-dbb671df6f39","created_at":"2020-04-01 02:29:43","updated_at":"2020-04-01 02:29:43"},
{"id":"6ead76ca-ef86-4713-8fc6-3beecef6636e","definition":"primis","term":"leading edge","card_set_id":"7fa41313-9a6f-4963-b6ec-dbb671df6f39","created_at":"2020-04-12 02:21:39","updated_at":"2020-04-12 02:21:39"},
{"id":"d40f0eb7-4555-4a09-91d2-95be853c106a","definition":"et commodo","term":"system engine","card_set_id":"7fa41313-9a6f-4963-b6ec-dbb671df6f39","created_at":"2020-04-11 02:54:29","updated_at":"2020-04-11 02:54:29"},
{"id":"4f106378-309e-47f0-844f-1f8acb277064","definition":"congue etiam justo etiam pretium iaculis justo","term":"collaboration","card_set_id":"7fa41313-9a6f-4963-b6ec-dbb671df6f39","created_at":"2020-04-19 06:04:53","updated_at":"2020-04-19 06:04:53"},
{"id":"57402a18-6b8d-44c7-9f06-d0fb7369161a","definition":"in imperdiet et commodo vulputate justo","term":"challenge","card_set_id":"7fa41313-9a6f-4963-b6ec-dbb671df6f39","created_at":"2020-04-16 19:07:57","updated_at":"2020-04-16 19:07:57"},
{"id":"d1f0df5a-6095-42c6-b8a1-abf0cdaba3ee","definition":"ultrices posuere cubilia curae nulla","term":"implementation","card_set_id":"7fa41313-9a6f-4963-b6ec-dbb671df6f39","created_at":"2020-04-01 19:27:48","updated_at":"2020-04-01 19:27:48"},
{"id":"7ca10635-d730-471b-9b3e-ea647e3c34b1","definition":"quisque ut erat curabitur gravida","term":"info-mediaries","card_set_id":"fbb02237-2cfb-4c8a-98e0-2476c5c30e94","created_at":"2020-04-18 17:55:38","updated_at":"2020-04-18 17:55:38"},
{"id":"098f979a-9b60-46c9-8f0b-74fa0ecb2dd6","definition":"elit","term":"core","card_set_id":"fbb02237-2cfb-4c8a-98e0-2476c5c30e94","created_at":"2020-04-16 15:07:09","updated_at":"2020-04-16 15:07:09"},
{"id":"97794f63-2510-41e7-a876-a1b97020bb7c","definition":"viverra pede ac","term":"Total","card_set_id":"fbb02237-2cfb-4c8a-98e0-2476c5c30e94","created_at":"2020-04-20 06:18:42","updated_at":"2020-04-20 06:18:42"},
{"id":"27ff99da-7d37-480b-84a5-f1d2c781081c","definition":"auctor gravida sem praesent id massa","term":"Implemented","card_set_id":"fbb02237-2cfb-4c8a-98e0-2476c5c30e94","created_at":"2020-04-12 01:00:30","updated_at":"2020-04-12 01:00:30"},
{"id":"2d82e655-555f-4da0-915e-a3b39dce3fc7","definition":"nulla sed accumsan felis","term":"Persistent","card_set_id":"fbb02237-2cfb-4c8a-98e0-2476c5c30e94","created_at":"2020-04-19 18:09:45","updated_at":"2020-04-19 18:09:45"},
{"id":"d29dffb9-6e00-41f4-a144-3d1d60d71729","definition":"amet diam in magna bibendum imperdiet nullam","term":"solution","card_set_id":"ada2c1cc-b6a9-4eaf-97c7-cb8600ab32db","created_at":"2020-04-03 03:16:05","updated_at":"2020-04-03 03:16:05"},
{"id":"f489f42e-f4f4-46cc-b6f2-e4926e9e904b","definition":"euismod scelerisque quam turpis adipiscing lorem vitae","term":"Multi-layered","card_set_id":"ada2c1cc-b6a9-4eaf-97c7-cb8600ab32db","created_at":"2020-04-14 15:46:54","updated_at":"2020-04-14 15:46:54"},
{"id":"bff53c50-6062-4cbf-a4a0-d68cfd6c8270","definition":"neque libero convallis eget eleifend luctus","term":"web-enabled","card_set_id":"ada2c1cc-b6a9-4eaf-97c7-cb8600ab32db","created_at":"2020-04-02 05:55:35","updated_at":"2020-04-02 05:55:35"},
{"id":"425b4935-1a48-468b-91fe-b764eb0eee16","definition":"dictumst aliquam augue quam sollicitudin vitae","term":"Ergonomic","card_set_id":"ada2c1cc-b6a9-4eaf-97c7-cb8600ab32db","created_at":"2020-04-14 00:00:55","updated_at":"2020-04-14 00:00:55"},
{"id":"072ccc51-16c1-4c52-9e6c-934d26817934","definition":"suspendisse potenti nullam porttitor lacus at turpis donec posuere metus","term":"context-sensitive","card_set_id":"ada2c1cc-b6a9-4eaf-97c7-cb8600ab32db","created_at":"2020-04-09 04:37:55","updated_at":"2020-04-09 04:37:55"},
{"id":"617ac786-b2de-42e4-b479-bb01db78c217","definition":"iaculis justo in hac habitasse","term":"Compatible","card_set_id":"ada2c1cc-b6a9-4eaf-97c7-cb8600ab32db","created_at":"2020-04-08 13:48:35","updated_at":"2020-04-08 13:48:35"},
{"id":"5e77d023-ff3b-4b16-a02f-1efb38aad6c6","definition":"orci eget orci vehicula condimentum curabitur","term":"Assimilated","card_set_id":"ada2c1cc-b6a9-4eaf-97c7-cb8600ab32db","created_at":"2020-04-19 02:16:25","updated_at":"2020-04-19 02:16:25"},
{"id":"18e0feb5-64c8-4a8c-a3d3-bf4d46290187","definition":"in","term":"Polarised","card_set_id":"ada2c1cc-b6a9-4eaf-97c7-cb8600ab32db","created_at":"2020-04-09 07:07:22","updated_at":"2020-04-09 07:07:22"},
{"id":"1464a979-4e08-402c-bfed-347b4269d9ff","definition":"vestibulum eget","term":"dedicated","card_set_id":"ada2c1cc-b6a9-4eaf-97c7-cb8600ab32db","created_at":"2020-04-01 17:34:00","updated_at":"2020-04-01 17:34:00"},
{"id":"b50c6f69-1bce-45bc-9b65-b6c9753ee36b","definition":"mauris enim leo rhoncus sed vestibulum","term":"Reverse-engineered","card_set_id":"ada2c1cc-b6a9-4eaf-97c7-cb8600ab32db","created_at":"2020-04-13 02:01:01","updated_at":"2020-04-13 02:01:01"},
{"id":"2ea6032b-df35-4313-b2c8-de7fdc4e0f31","definition":"augue quam sollicitudin vitae consectetuer eget rutrum at lorem integer","term":"human-resource","card_set_id":"ada2c1cc-b6a9-4eaf-97c7-cb8600ab32db","created_at":"2020-04-09 14:06:33","updated_at":"2020-04-09 14:06:33"},
{"id":"da8ff0cc-3ea3-4227-988a-f5ba8dd56480","definition":"pede venenatis","term":"De-engineered","card_set_id":"ada2c1cc-b6a9-4eaf-97c7-cb8600ab32db","created_at":"2020-04-05 05:13:34","updated_at":"2020-04-05 05:13:34"},
{"id":"06f9b82b-a76a-4437-a166-ccc5858651a5","definition":"potenti in eleifend quam a","term":"solution","card_set_id":"b9c202fb-cc66-40a5-92f8-7eac1b727948","created_at":"2020-04-05 05:10:03","updated_at":"2020-04-05 05:10:03"},
{"id":"2009aa24-8dbc-4171-bd0f-26bcffac613f","definition":"quisque","term":"artificial intelligence","card_set_id":"b9c202fb-cc66-40a5-92f8-7eac1b727948","created_at":"2020-04-08 03:24:52","updated_at":"2020-04-08 03:24:52"},
{"id":"3e01c4e6-4569-46a1-8c72-a1f32ab0c7a8","definition":"eu nibh quisque id justo sit amet sapien dignissim vestibulum","term":"fault-tolerant","card_set_id":"b9c202fb-cc66-40a5-92f8-7eac1b727948","created_at":"2020-04-20 21:49:29","updated_at":"2020-04-20 21:49:29"},
{"id":"c4745add-7f67-4808-a753-e03802d10f60","definition":"tincidunt nulla","term":"Managed","card_set_id":"b9c202fb-cc66-40a5-92f8-7eac1b727948","created_at":"2020-04-11 11:59:15","updated_at":"2020-04-11 11:59:15"},
{"id":"5d58928f-87ad-4bb4-b4a5-33a19a017fc1","definition":"interdum venenatis turpis enim blandit mi in porttitor pede","term":"support","card_set_id":"b9c202fb-cc66-40a5-92f8-7eac1b727948","created_at":"2020-04-11 08:24:20","updated_at":"2020-04-11 08:24:20"},
{"id":"fe6fba90-232c-497d-b269-43883c0a7aab","definition":"non mi integer ac neque duis bibendum","term":"4th generation","card_set_id":"b9c202fb-cc66-40a5-92f8-7eac1b727948","created_at":"2020-04-15 23:33:33","updated_at":"2020-04-15 23:33:33"},
{"id":"96ca794b-4148-43a8-8348-2b67f29e1180","definition":"eros elementum pellentesque","term":"migration","card_set_id":"b9c202fb-cc66-40a5-92f8-7eac1b727948","created_at":"2020-04-04 15:51:17","updated_at":"2020-04-04 15:51:17"},
{"id":"b989aa74-8436-42a8-aa81-5c4e7333c563","definition":"nec","term":"Streamlined","card_set_id":"b9c202fb-cc66-40a5-92f8-7eac1b727948","created_at":"2020-04-09 18:20:46","updated_at":"2020-04-09 18:20:46"},
{"id":"0d68ecf9-8993-4e7b-8b34-c7db067389ba","definition":"in purus eu magna","term":"reciprocal","card_set_id":"b9c202fb-cc66-40a5-92f8-7eac1b727948","created_at":"2020-04-15 12:53:10","updated_at":"2020-04-15 12:53:10"},
{"id":"4880439a-f47f-4014-a3da-9f14bdd2ea63","definition":"pulvinar lobortis est phasellus sit amet","term":"client-server","card_set_id":"b9c202fb-cc66-40a5-92f8-7eac1b727948","created_at":"2020-04-19 00:35:02","updated_at":"2020-04-19 00:35:02"},
{"id":"38db29da-4e49-4baf-805d-2bc4fb27dcfc","definition":"amet justo morbi ut odio cras mi pede malesuada in","term":"Multi-channelled","card_set_id":"b9c202fb-cc66-40a5-92f8-7eac1b727948","created_at":"2020-04-08 13:26:06","updated_at":"2020-04-08 13:26:06"},
{"id":"d7280afc-563e-4b7f-8c61-11fa0a4ff987","definition":"ante vel ipsum praesent blandit lacinia","term":"systematic","card_set_id":"b9c202fb-cc66-40a5-92f8-7eac1b727948","created_at":"2020-04-17 00:17:25","updated_at":"2020-04-17 00:17:25"},
{"id":"8d2056ed-4955-4f1e-92a3-c880cfd91898","definition":"vulputate ut ultrices vel augue","term":"next generation","card_set_id":"b9c202fb-cc66-40a5-92f8-7eac1b727948","created_at":"2020-04-06 13:56:24","updated_at":"2020-04-06 13:56:24"},
{"id":"d63fc007-cb4e-4e7e-89ca-1ce62de4e5ee","definition":"nam dui proin leo odio porttitor id consequat","term":"collaboration","card_set_id":"b9c202fb-cc66-40a5-92f8-7eac1b727948","created_at":"2020-04-19 06:15:35","updated_at":"2020-04-19 06:15:35"},
{"id":"fe5552ba-9c74-4010-acda-2271659c1e3a","definition":"vel augue vestibulum rutrum rutrum neque aenean auctor gravida sem","term":"optimizing","card_set_id":"b9c202fb-cc66-40a5-92f8-7eac1b727948","created_at":"2020-04-15 18:49:13","updated_at":"2020-04-15 18:49:13"},
{"id":"6c91f540-3962-457e-bbd0-088d2c9c3e8c","definition":"sociis natoque penatibus et magnis dis parturient montes nascetur","term":"process improvement","card_set_id":"b9c202fb-cc66-40a5-92f8-7eac1b727948","created_at":"2020-04-18 02:43:36","updated_at":"2020-04-18 02:43:36"},
{"id":"db734081-3563-4816-bf6c-27c937acc26f","definition":"leo maecenas pulvinar lobortis est","term":"Self-enabling","card_set_id":"8cb07449-1724-47b8-8fc0-8a82d867236d","created_at":"2020-04-16 04:01:48","updated_at":"2020-04-16 04:01:48"},
{"id":"9727323d-517f-4a11-aa17-2b6ca5564c25","definition":"ligula in lacus curabitur","term":"asynchronous","card_set_id":"8cb07449-1724-47b8-8fc0-8a82d867236d","created_at":"2020-04-09 14:41:11","updated_at":"2020-04-09 14:41:11"},
{"id":"8ae80e48-56e4-4de3-a5d9-d31b356f5415","definition":"et ultrices posuere cubilia curae duis","term":"pricing structure","card_set_id":"8cb07449-1724-47b8-8fc0-8a82d867236d","created_at":"2020-04-18 20:57:32","updated_at":"2020-04-18 20:57:32"},
{"id":"a703ec0e-1ef2-4b68-ab8b-7e6354344aba","definition":"amet","term":"leverage","card_set_id":"8cb07449-1724-47b8-8fc0-8a82d867236d","created_at":"2020-04-13 06:57:35","updated_at":"2020-04-13 06:57:35"},
{"id":"3637d80e-93dc-4fdf-938a-4f2ecf36cef6","definition":"auctor sed tristique in tempus sit","term":"intermediate","card_set_id":"8cb07449-1724-47b8-8fc0-8a82d867236d","created_at":"2020-04-02 15:56:05","updated_at":"2020-04-02 15:56:05"},
{"id":"4c436eb1-d666-4b24-afaf-71a4ebc01f3c","definition":"consequat nulla nisl nunc nisl duis bibendum felis sed","term":"Reduced","card_set_id":"8cb07449-1724-47b8-8fc0-8a82d867236d","created_at":"2020-04-05 13:25:59","updated_at":"2020-04-05 13:25:59"},
{"id":"9cb03ccb-4c57-45cc-ade3-92e324527073","definition":"elit ac nulla sed vel","term":"foreground","card_set_id":"8cb07449-1724-47b8-8fc0-8a82d867236d","created_at":"2020-04-11 07:42:09","updated_at":"2020-04-11 07:42:09"},
{"id":"d2abe4f9-77c6-45ba-aca6-7e27ebdf0288","definition":"at diam","term":"pricing structure","card_set_id":"8cb07449-1724-47b8-8fc0-8a82d867236d","created_at":"2020-04-08 05:28:42","updated_at":"2020-04-08 05:28:42"},
{"id":"40bc211c-8b46-4ee0-a0cf-af9c56d167b2","definition":"consequat varius integer ac leo pellentesque ultrices","term":"leverage","card_set_id":"8cb07449-1724-47b8-8fc0-8a82d867236d","created_at":"2020-04-07 08:56:13","updated_at":"2020-04-07 08:56:13"},
{"id":"e853b2f1-7c30-4dee-85c9-56035d55f12a","definition":"in consequat ut nulla sed accumsan","term":"Graphic Interface","card_set_id":"8cb07449-1724-47b8-8fc0-8a82d867236d","created_at":"2020-04-10 21:37:08","updated_at":"2020-04-10 21:37:08"},
{"id":"ebccff15-9f30-40f9-b56f-393b7448dd32","definition":"porttitor lacus at","term":"bifurcated","card_set_id":"8cb07449-1724-47b8-8fc0-8a82d867236d","created_at":"2020-04-05 08:33:32","updated_at":"2020-04-05 08:33:32"},
{"id":"c0ff7369-b0d1-47fe-92eb-54ec10f412fb","definition":"a suscipit nulla elit ac nulla sed vel enim sit","term":"context-sensitive","card_set_id":"8cb07449-1724-47b8-8fc0-8a82d867236d","created_at":"2020-04-08 20:48:56","updated_at":"2020-04-08 20:48:56"},
{"id":"8f97593f-3e4e-4f35-9599-5e53f8e78ef2","definition":"commodo placerat praesent blandit nam nulla","term":"asynchronous","card_set_id":"e9e0f26d-a9dd-44fc-b744-eef2df95ae9d","created_at":"2020-04-03 17:14:01","updated_at":"2020-04-03 17:14:01"},
{"id":"28ba8736-29b3-4f47-8c49-db3f8d6b6399","definition":"quam suspendisse potenti nullam porttitor lacus at turpis","term":"standardization","card_set_id":"e9e0f26d-a9dd-44fc-b744-eef2df95ae9d","created_at":"2020-04-05 19:12:36","updated_at":"2020-04-05 19:12:36"},
{"id":"67962191-02dd-4165-ac8c-b9dc90d28757","definition":"volutpat in congue etiam justo etiam pretium iaculis","term":"homogeneous","card_set_id":"e9e0f26d-a9dd-44fc-b744-eef2df95ae9d","created_at":"2020-04-15 04:18:02","updated_at":"2020-04-15 04:18:02"},
{"id":"e261862e-75b0-455f-ae72-9376c61ef624","definition":"consequat nulla nisl nunc nisl duis bibendum felis sed","term":"high-level","card_set_id":"e9e0f26d-a9dd-44fc-b744-eef2df95ae9d","created_at":"2020-04-07 09:11:35","updated_at":"2020-04-07 09:11:35"},
{"id":"c04e8269-a0e7-4221-b69d-55815581f6c0","definition":"nibh","term":"leverage","card_set_id":"e9e0f26d-a9dd-44fc-b744-eef2df95ae9d","created_at":"2020-04-15 19:44:48","updated_at":"2020-04-15 19:44:48"},
{"id":"0833de1b-e5b4-480e-bec0-e4f374eabe9e","definition":"in hac habitasse platea dictumst etiam","term":"tangible","card_set_id":"5d3946a8-1545-4ba4-9ca7-4111b98fca76","created_at":"2020-04-19 15:00:46","updated_at":"2020-04-19 15:00:46"},
{"id":"6cfb0562-b63e-4333-9ba8-da7212100f45","definition":"mi sit amet","term":"multi-tasking","card_set_id":"5d3946a8-1545-4ba4-9ca7-4111b98fca76","created_at":"2020-04-16 01:47:44","updated_at":"2020-04-16 01:47:44"},
{"id":"fdf5fabd-8855-4edd-927e-0dd9fb5d3b1b","definition":"interdum venenatis turpis enim blandit","term":"Synergized","card_set_id":"5d3946a8-1545-4ba4-9ca7-4111b98fca76","created_at":"2020-04-05 17:46:36","updated_at":"2020-04-05 17:46:36"},
{"id":"a7d61669-e0bd-4c3c-aa94-435d6366f842","definition":"sapien","term":"hierarchy","card_set_id":"487cffa7-6241-49b4-90f3-c3d290c6a3c8","created_at":"2020-04-10 07:08:07","updated_at":"2020-04-10 07:08:07"},
{"id":"2481546b-fcf0-4a31-92a9-c42d9c89b322","definition":"convallis","term":"frame","card_set_id":"487cffa7-6241-49b4-90f3-c3d290c6a3c8","created_at":"2020-04-10 14:48:33","updated_at":"2020-04-10 14:48:33"},
{"id":"fb5b0ce2-1944-4f3d-97a7-b442bccef5cc","definition":"velit vivamus vel nulla eget eros elementum pellentesque quisque porta","term":"circuit","card_set_id":"487cffa7-6241-49b4-90f3-c3d290c6a3c8","created_at":"2020-04-14 04:40:09","updated_at":"2020-04-14 04:40:09"},
{"id":"74f1dfa0-fb9c-4a33-9b12-75709c6917af","definition":"morbi non quam","term":"User-centric","card_set_id":"487cffa7-6241-49b4-90f3-c3d290c6a3c8","created_at":"2020-04-20 09:29:21","updated_at":"2020-04-20 09:29:21"},
{"id":"b2bd78f8-24a7-46ea-a090-447d5e872300","definition":"mi","term":"Multi-lateral","card_set_id":"331b13ca-f1c3-427d-9ee3-c9d1879fdd67","created_at":"2020-04-19 21:10:03","updated_at":"2020-04-19 21:10:03"},
{"id":"8bc10d08-2446-434f-95b5-fdb499f76105","definition":"posuere felis sed lacus morbi sem","term":"Enhanced","card_set_id":"331b13ca-f1c3-427d-9ee3-c9d1879fdd67","created_at":"2020-04-20 04:57:01","updated_at":"2020-04-20 04:57:01"},
{"id":"281be081-9ca0-4452-a945-a7d33cd796f5","definition":"cubilia curae nulla dapibus","term":"Fully-configurable","card_set_id":"331b13ca-f1c3-427d-9ee3-c9d1879fdd67","created_at":"2020-04-12 18:34:16","updated_at":"2020-04-12 18:34:16"},
{"id":"7c743ed2-1d87-4865-a8b0-490650069caa","definition":"felis donec semper sapien a libero","term":"Cross-group","card_set_id":"331b13ca-f1c3-427d-9ee3-c9d1879fdd67","created_at":"2020-04-02 04:07:38","updated_at":"2020-04-02 04:07:38"},
{"id":"a99dd553-00de-41ec-bd24-3f887af02edd","definition":"faucibus","term":"maximized","card_set_id":"331b13ca-f1c3-427d-9ee3-c9d1879fdd67","created_at":"2020-04-14 16:56:43","updated_at":"2020-04-14 16:56:43"},
{"id":"f5638bd1-6478-470b-96d0-407993784554","definition":"ut volutpat sapien","term":"modular","card_set_id":"331b13ca-f1c3-427d-9ee3-c9d1879fdd67","created_at":"2020-04-14 08:22:01","updated_at":"2020-04-14 08:22:01"},
{"id":"0f5bdb5c-7602-4997-8c76-430c25d2c2e7","definition":"quis orci nullam","term":"adapter","card_set_id":"331b13ca-f1c3-427d-9ee3-c9d1879fdd67","created_at":"2020-04-01 00:06:24","updated_at":"2020-04-01 00:06:24"},
{"id":"38eedcce-20a6-4e46-84d2-0e34f2cb5b4e","definition":"diam erat fermentum justo nec","term":"non-volatile","card_set_id":"1d06b953-7117-40fc-88f9-a20c894ed910","created_at":"2020-04-12 18:30:33","updated_at":"2020-04-12 18:30:33"},
{"id":"880f6ef4-9768-40c5-a632-de2456ddf59f","definition":"in","term":"analyzer","card_set_id":"1d06b953-7117-40fc-88f9-a20c894ed910","created_at":"2020-04-08 08:14:25","updated_at":"2020-04-08 08:14:25"},
{"id":"29eb9df5-7fef-47dc-b050-9df0785ce685","definition":"commodo placerat praesent blandit","term":"non-volatile","card_set_id":"1d06b953-7117-40fc-88f9-a20c894ed910","created_at":"2020-04-13 18:54:03","updated_at":"2020-04-13 18:54:03"},
{"id":"11ad4b77-63a1-4257-84b9-c136b57c4233","definition":"accumsan felis ut at dolor quis odio consequat varius integer","term":"uniform","card_set_id":"1d06b953-7117-40fc-88f9-a20c894ed910","created_at":"2020-04-16 15:21:57","updated_at":"2020-04-16 15:21:57"},
{"id":"24c664c0-110a-4052-ab98-b60216da6e0b","definition":"quis lectus","term":"zero tolerance","card_set_id":"1d06b953-7117-40fc-88f9-a20c894ed910","created_at":"2020-04-19 21:46:18","updated_at":"2020-04-19 21:46:18"},
{"id":"5e2fe0ab-2416-4283-814f-d11059af9ef0","definition":"at turpis a pede posuere nonummy integer","term":"hardware","card_set_id":"1d06b953-7117-40fc-88f9-a20c894ed910","created_at":"2020-04-08 18:28:50","updated_at":"2020-04-08 18:28:50"},
{"id":"94f93251-9398-4196-ba7f-fbad8262df74","definition":"ut ultrices vel augue","term":"Open-source","card_set_id":"1d06b953-7117-40fc-88f9-a20c894ed910","created_at":"2020-04-06 16:21:57","updated_at":"2020-04-06 16:21:57"},
{"id":"112136ec-f22c-405b-abc4-1b9440f425e6","definition":"non velit donec diam","term":"user-facing","card_set_id":"94605fef-fc5d-4fa2-8805-cf2c10f77466","created_at":"2020-04-08 04:24:35","updated_at":"2020-04-08 04:24:35"},
{"id":"92f57cda-7626-4eb6-8819-e6f891abbcf3","definition":"rhoncus mauris enim leo rhoncus sed vestibulum sit amet","term":"Sharable","card_set_id":"94605fef-fc5d-4fa2-8805-cf2c10f77466","created_at":"2020-04-16 23:20:12","updated_at":"2020-04-16 23:20:12"},
{"id":"62da075a-5fa3-4a66-b5a8-43750821be07","definition":"ultrices erat tortor sollicitudin mi sit","term":"Integrated","card_set_id":"94605fef-fc5d-4fa2-8805-cf2c10f77466","created_at":"2020-04-04 02:33:34","updated_at":"2020-04-04 02:33:34"},
{"id":"ab3db794-0795-4da2-be5e-f0e976221547","definition":"eget eros elementum pellentesque quisque porta volutpat erat quisque","term":"Distributed","card_set_id":"94605fef-fc5d-4fa2-8805-cf2c10f77466","created_at":"2020-04-01 15:22:32","updated_at":"2020-04-01 15:22:32"},
{"id":"a8144f6b-df75-48cb-a062-2a75d100e926","definition":"enim sit amet nunc viverra dapibus nulla suscipit","term":"web-enabled","card_set_id":"94605fef-fc5d-4fa2-8805-cf2c10f77466","created_at":"2020-04-02 13:14:08","updated_at":"2020-04-02 13:14:08"},
{"id":"e99a1af8-1669-4241-b124-2559e6f988cb","definition":"orci mauris lacinia sapien quis libero nullam sit amet","term":"Realigned","card_set_id":"94605fef-fc5d-4fa2-8805-cf2c10f77466","created_at":"2020-04-20 16:07:14","updated_at":"2020-04-20 16:07:14"},
{"id":"03be2737-c18b-48df-95f3-bd4801ea5e28","definition":"non mi integer ac neque duis bibendum","term":"artificial intelligence","card_set_id":"94605fef-fc5d-4fa2-8805-cf2c10f77466","created_at":"2020-04-19 11:18:51","updated_at":"2020-04-19 11:18:51"},
{"id":"ec5887d4-7fb2-47ee-bbc3-07704d690996","definition":"orci eget orci vehicula condimentum curabitur in libero","term":"Robust","card_set_id":"94605fef-fc5d-4fa2-8805-cf2c10f77466","created_at":"2020-04-20 19:53:26","updated_at":"2020-04-20 19:53:26"},
{"id":"b2f1edab-4400-4098-b355-fa56a52874b0","definition":"dui proin leo odio porttitor id consequat in","term":"client-driven","card_set_id":"94605fef-fc5d-4fa2-8805-cf2c10f77466","created_at":"2020-04-19 23:46:56","updated_at":"2020-04-19 23:46:56"},
{"id":"f19fc876-eed1-47a8-b0cc-44d7c5bcd30d","definition":"imperdiet","term":"Switchable","card_set_id":"94605fef-fc5d-4fa2-8805-cf2c10f77466","created_at":"2020-04-04 11:24:02","updated_at":"2020-04-04 11:24:02"},
{"id":"359c91e4-722b-44bd-bfb1-f8a27cf58fd8","definition":"pede ac diam cras pellentesque","term":"Versatile","card_set_id":"94605fef-fc5d-4fa2-8805-cf2c10f77466","created_at":"2020-04-17 01:26:37","updated_at":"2020-04-17 01:26:37"},
{"id":"9eebec05-a3e9-444d-a797-b198e01612df","definition":"penatibus et magnis dis","term":"Switchable","card_set_id":"94605fef-fc5d-4fa2-8805-cf2c10f77466","created_at":"2020-04-10 20:21:09","updated_at":"2020-04-10 20:21:09"},
{"id":"904fe071-fe52-42f2-a51c-11b59133b1df","definition":"magna vulputate","term":"Secured","card_set_id":"94605fef-fc5d-4fa2-8805-cf2c10f77466","created_at":"2020-04-13 03:09:14","updated_at":"2020-04-13 03:09:14"},
{"id":"8ebada55-1b38-4c73-a492-f1d9c84b3b2d","definition":"mauris eget massa tempor convallis nulla neque libero","term":"even-keeled","card_set_id":"17c6110a-2879-4e02-b7b8-a722222fb19e","created_at":"2020-04-17 19:39:28","updated_at":"2020-04-17 19:39:28"},
{"id":"927bc20b-6894-4338-ac81-613e79cf1b3c","definition":"massa tempor convallis nulla neque libero convallis eget","term":"instruction set","card_set_id":"17c6110a-2879-4e02-b7b8-a722222fb19e","created_at":"2020-04-11 14:34:30","updated_at":"2020-04-11 14:34:30"},
{"id":"ae41ed86-9340-4203-a921-63aed22a62b1","definition":"in hac habitasse platea","term":"pricing structure","card_set_id":"17c6110a-2879-4e02-b7b8-a722222fb19e","created_at":"2020-04-19 01:51:15","updated_at":"2020-04-19 01:51:15"},
{"id":"86414197-76a2-414a-9bf3-3a9aa6919adc","definition":"ultrices","term":"Streamlined","card_set_id":"17c6110a-2879-4e02-b7b8-a722222fb19e","created_at":"2020-04-06 15:25:32","updated_at":"2020-04-06 15:25:32"},
{"id":"f068f311-7d0c-4770-8289-37bef48f34a0","definition":"convallis tortor risus dapibus augue vel accumsan","term":"human-resource","card_set_id":"17c6110a-2879-4e02-b7b8-a722222fb19e","created_at":"2020-04-11 13:00:18","updated_at":"2020-04-11 13:00:18"},
{"id":"efcc282b-f13d-4b9d-80a2-5c28f879655f","definition":"viverra dapibus nulla suscipit ligula","term":"Assimilated","card_set_id":"17c6110a-2879-4e02-b7b8-a722222fb19e","created_at":"2020-04-19 19:32:12","updated_at":"2020-04-19 19:32:12"},
{"id":"c19d032b-4dcb-428c-a97a-f10f16720c7e","definition":"tellus nisi eu orci mauris","term":"eco-centric","card_set_id":"17c6110a-2879-4e02-b7b8-a722222fb19e","created_at":"2020-04-07 00:55:23","updated_at":"2020-04-07 00:55:23"},
{"id":"fab4b369-8807-42d6-817c-9afdb2628c2d","definition":"vestibulum quam sapien varius ut blandit non interdum in ante","term":"throughput","card_set_id":"17c6110a-2879-4e02-b7b8-a722222fb19e","created_at":"2020-04-06 05:09:46","updated_at":"2020-04-06 05:09:46"},
{"id":"98448d40-ba8d-4de5-8075-91d8d17a2626","definition":"volutpat eleifend donec ut dolor morbi vel","term":"hybrid","card_set_id":"17c6110a-2879-4e02-b7b8-a722222fb19e","created_at":"2020-04-11 05:37:31","updated_at":"2020-04-11 05:37:31"},
{"id":"c85263d5-91c4-4986-9e38-b6a24d53c433","definition":"dui luctus rutrum nulla tellus in sagittis dui","term":"Organic","card_set_id":"17c6110a-2879-4e02-b7b8-a722222fb19e","created_at":"2020-04-06 07:26:28","updated_at":"2020-04-06 07:26:28"},
{"id":"ee15c98f-23fb-40b8-ad85-28f1c64b058d","definition":"id","term":"initiative","card_set_id":"17c6110a-2879-4e02-b7b8-a722222fb19e","created_at":"2020-04-06 17:34:43","updated_at":"2020-04-06 17:34:43"},
{"id":"84bc6f2d-b3c7-428f-b4ce-6f9976a46fcd","definition":"elementum","term":"Mandatory","card_set_id":"17c6110a-2879-4e02-b7b8-a722222fb19e","created_at":"2020-04-18 06:49:45","updated_at":"2020-04-18 06:49:45"},
{"id":"cc741811-9fca-4b46-aba4-415d8a952121","definition":"nisl ut volutpat","term":"Function-based","card_set_id":"17c6110a-2879-4e02-b7b8-a722222fb19e","created_at":"2020-04-08 15:33:04","updated_at":"2020-04-08 15:33:04"},
{"id":"801e158e-6856-4d1d-90aa-0db4aa3f2dfb","definition":"consequat dui nec nisi volutpat","term":"collaboration","card_set_id":"17c6110a-2879-4e02-b7b8-a722222fb19e","created_at":"2020-04-04 06:48:44","updated_at":"2020-04-04 06:48:44"},
{"id":"e77307d4-9f45-4787-9102-2f8e30696a1c","definition":"nam ultrices libero","term":"application","card_set_id":"17c6110a-2879-4e02-b7b8-a722222fb19e","created_at":"2020-04-02 12:14:17","updated_at":"2020-04-02 12:14:17"},
{"id":"70d57c86-6bb7-49a6-8788-505b0eccba8f","definition":"nulla suscipit ligula in lacus","term":"bandwidth-monitored","card_set_id":"17c6110a-2879-4e02-b7b8-a722222fb19e","created_at":"2020-04-02 17:48:51","updated_at":"2020-04-02 17:48:51"},
{"id":"b6c33e69-c24c-44b8-9f11-355c9e5c0e65","definition":"ultrices posuere cubilia curae donec pharetra magna vestibulum aliquet ultrices","term":"Profit-focused","card_set_id":"17c6110a-2879-4e02-b7b8-a722222fb19e","created_at":"2020-04-09 20:43:28","updated_at":"2020-04-09 20:43:28"},
{"id":"4ba8a0dd-1c51-4b28-ba36-500c8e6961be","definition":"consequat","term":"Automated","card_set_id":"3f143f05-06b9-4678-b5ba-eb8e901a6dd0","created_at":"2020-04-09 19:05:18","updated_at":"2020-04-09 19:05:18"},
{"id":"3143b35c-06b4-4ab4-89a2-9107004e9511","definition":"eleifend luctus ultricies eu nibh quisque id justo sit","term":"disintermediate","card_set_id":"3f143f05-06b9-4678-b5ba-eb8e901a6dd0","created_at":"2020-04-07 21:11:16","updated_at":"2020-04-07 21:11:16"},
{"id":"14711f7a-d8ad-4503-b97e-b4e1d63f5461","definition":"auctor sed tristique in tempus sit amet sem","term":"extranet","card_set_id":"3f143f05-06b9-4678-b5ba-eb8e901a6dd0","created_at":"2020-04-16 23:34:59","updated_at":"2020-04-16 23:34:59"},
{"id":"981765fa-bcfe-474d-ab0f-8e00e409e09d","definition":"faucibus cursus urna ut tellus nulla ut erat id","term":"ability","card_set_id":"3f143f05-06b9-4678-b5ba-eb8e901a6dd0","created_at":"2020-04-11 15:15:10","updated_at":"2020-04-11 15:15:10"},
{"id":"c8453a39-2e62-41f8-9bdf-35148b124085","definition":"quis augue luctus tincidunt nulla mollis molestie","term":"Diverse","card_set_id":"3f143f05-06b9-4678-b5ba-eb8e901a6dd0","created_at":"2020-04-12 15:18:30","updated_at":"2020-04-12 15:18:30"},
{"id":"c9bc1d12-2f0b-43b4-b3a4-a7eca9536e5e","definition":"sapien placerat ante nulla","term":"heuristic","card_set_id":"3f143f05-06b9-4678-b5ba-eb8e901a6dd0","created_at":"2020-04-03 10:41:36","updated_at":"2020-04-03 10:41:36"},
{"id":"913e6973-56e6-4e99-92d7-82506f1ff6a2","definition":"convallis duis consequat dui","term":"Front-line","card_set_id":"3f143f05-06b9-4678-b5ba-eb8e901a6dd0","created_at":"2020-04-01 03:31:03","updated_at":"2020-04-01 03:31:03"},
{"id":"9f92cdf0-9b8d-4fdb-9aab-360745c2e910","definition":"neque aenean auctor gravida sem praesent id","term":"software","card_set_id":"7456ce86-abb0-4d4a-8e3c-5c89648e3e1b","created_at":"2020-04-13 03:20:22","updated_at":"2020-04-13 03:20:22"},
{"id":"b563adb3-b06c-47a9-bde9-412e5a69f289","definition":"sed nisl nunc rhoncus dui vel sem sed sagittis nam","term":"portal","card_set_id":"7456ce86-abb0-4d4a-8e3c-5c89648e3e1b","created_at":"2020-04-15 07:43:01","updated_at":"2020-04-15 07:43:01"},
{"id":"f2dbbf9e-773f-492c-9ad7-28f571242084","definition":"curae donec pharetra magna vestibulum aliquet ultrices erat tortor","term":"intangible","card_set_id":"7456ce86-abb0-4d4a-8e3c-5c89648e3e1b","created_at":"2020-04-02 15:40:47","updated_at":"2020-04-02 15:40:47"},
{"id":"9becbbae-0231-461a-b826-f1e97fcabb27","definition":"tortor id nulla ultrices aliquet maecenas leo odio condimentum id","term":"exuding","card_set_id":"7456ce86-abb0-4d4a-8e3c-5c89648e3e1b","created_at":"2020-04-08 16:14:38","updated_at":"2020-04-08 16:14:38"},
{"id":"adc38929-b523-4972-b3de-3f746067f6d7","definition":"in lectus pellentesque at nulla suspendisse potenti cras","term":"zero tolerance","card_set_id":"7456ce86-abb0-4d4a-8e3c-5c89648e3e1b","created_at":"2020-04-16 17:35:18","updated_at":"2020-04-16 17:35:18"},
{"id":"6e6af3b9-9cd8-4289-ab30-5c261e559d22","definition":"ligula pellentesque","term":"user-facing","card_set_id":"7456ce86-abb0-4d4a-8e3c-5c89648e3e1b","created_at":"2020-04-07 10:05:09","updated_at":"2020-04-07 10:05:09"},
{"id":"2d66fe8e-7812-4d3b-b752-215b8be84960","definition":"bibendum imperdiet nullam orci pede","term":"algorithm","card_set_id":"7456ce86-abb0-4d4a-8e3c-5c89648e3e1b","created_at":"2020-04-01 21:36:06","updated_at":"2020-04-01 21:36:06"},
{"id":"88349e63-a439-4fb3-a412-81abbebc6248","definition":"quis","term":"grid-enabled","card_set_id":"7456ce86-abb0-4d4a-8e3c-5c89648e3e1b","created_at":"2020-04-03 01:49:43","updated_at":"2020-04-03 01:49:43"},
{"id":"7add4779-177d-464a-9637-c4726e059ab2","definition":"libero convallis eget eleifend luctus ultricies","term":"Implemented","card_set_id":"7456ce86-abb0-4d4a-8e3c-5c89648e3e1b","created_at":"2020-04-17 16:14:57","updated_at":"2020-04-17 16:14:57"},
{"id":"f0b39585-6568-4d2c-82d0-7a8f8d83fed4","definition":"vel pede morbi porttitor lorem id ligula suspendisse","term":"web-enabled","card_set_id":"de332741-c0ba-49ca-9ef6-5c9d16422c09","created_at":"2020-04-13 09:30:05","updated_at":"2020-04-13 09:30:05"},
{"id":"5e9ac4b6-639a-452d-a566-61a132650918","definition":"lectus in est risus auctor sed tristique in","term":"projection","card_set_id":"de332741-c0ba-49ca-9ef6-5c9d16422c09","created_at":"2020-04-04 09:48:06","updated_at":"2020-04-04 09:48:06"},
{"id":"321e9725-e1f0-46b4-9d63-742f7d935191","definition":"mauris viverra diam","term":"forecast","card_set_id":"de332741-c0ba-49ca-9ef6-5c9d16422c09","created_at":"2020-04-08 22:24:25","updated_at":"2020-04-08 22:24:25"},
{"id":"fc6de18c-fea4-4c05-bebe-e50ce59c36ec","definition":"lorem ipsum dolor sit amet consectetuer","term":"hub","card_set_id":"de332741-c0ba-49ca-9ef6-5c9d16422c09","created_at":"2020-04-14 14:22:45","updated_at":"2020-04-14 14:22:45"},
{"id":"668dbe58-1fe6-44b8-a57c-c989f55c7de1","definition":"ac leo pellentesque ultrices mattis odio","term":"Synergistic","card_set_id":"8ce3fb5e-9ce3-4843-b643-75c7ea462f10","created_at":"2020-04-09 01:42:40","updated_at":"2020-04-09 01:42:40"},
{"id":"a877f5c8-c004-4c71-a765-38389a39933c","definition":"diam cras pellentesque volutpat dui maecenas tristique est et tempus","term":"instruction set","card_set_id":"8ce3fb5e-9ce3-4843-b643-75c7ea462f10","created_at":"2020-04-09 05:12:25","updated_at":"2020-04-09 05:12:25"},
{"id":"9a99b69d-f0a4-4617-9989-394d3a783804","definition":"integer ac neque duis bibendum morbi non quam nec","term":"static","card_set_id":"8ce3fb5e-9ce3-4843-b643-75c7ea462f10","created_at":"2020-04-14 16:22:08","updated_at":"2020-04-14 16:22:08"},
{"id":"9c04ed54-279e-4110-ba61-58ce9ca63167","definition":"vitae mattis nibh ligula nec sem duis aliquam","term":"extranet","card_set_id":"8ce3fb5e-9ce3-4843-b643-75c7ea462f10","created_at":"2020-04-18 21:18:58","updated_at":"2020-04-18 21:18:58"},
{"id":"0f1da460-19d2-4263-ab8c-00896231db72","definition":"eget orci vehicula condimentum curabitur in","term":"Stand-alone","card_set_id":"8ce3fb5e-9ce3-4843-b643-75c7ea462f10","created_at":"2020-04-05 02:00:12","updated_at":"2020-04-05 02:00:12"},
{"id":"dc8bf725-9815-40a3-8221-ddf5c75fefbf","definition":"enim in tempor turpis nec euismod","term":"productivity","card_set_id":"8ce3fb5e-9ce3-4843-b643-75c7ea462f10","created_at":"2020-04-14 02:26:21","updated_at":"2020-04-14 02:26:21"},
{"id":"1157d109-4157-4287-b612-8484cc4c2f15","definition":"maecenas leo odio","term":"Proactive","card_set_id":"ef04d068-59c0-40f3-965d-57dbc0069cc3","created_at":"2020-04-03 16:40:46","updated_at":"2020-04-03 16:40:46"},
{"id":"b27bbd85-b777-4e8a-a770-76d2b73bee4f","definition":"non pretium quis lectus suspendisse potenti","term":"architecture","card_set_id":"ef04d068-59c0-40f3-965d-57dbc0069cc3","created_at":"2020-04-03 04:48:04","updated_at":"2020-04-03 04:48:04"},
{"id":"71b01bb2-7d0a-41d5-87b6-c9f9adeae7fd","definition":"etiam justo etiam pretium iaculis justo in hac habitasse","term":"5th generation","card_set_id":"ef04d068-59c0-40f3-965d-57dbc0069cc3","created_at":"2020-04-15 14:11:11","updated_at":"2020-04-15 14:11:11"},
{"id":"1688cef4-2082-43a5-b889-f40b7469a5a8","definition":"amet cursus id turpis integer","term":"motivating","card_set_id":"ef04d068-59c0-40f3-965d-57dbc0069cc3","created_at":"2020-04-02 21:59:50","updated_at":"2020-04-02 21:59:50"},
{"id":"8569e728-d005-45e5-8dbc-7e563216443e","definition":"eu felis fusce posuere felis","term":"Centralized","card_set_id":"ef04d068-59c0-40f3-965d-57dbc0069cc3","created_at":"2020-04-18 08:10:36","updated_at":"2020-04-18 08:10:36"},
{"id":"cc35a2ef-da69-43d8-bafd-8629a35ad716","definition":"posuere cubilia curae donec pharetra magna vestibulum aliquet ultrices","term":"Self-enabling","card_set_id":"ef04d068-59c0-40f3-965d-57dbc0069cc3","created_at":"2020-04-16 17:40:58","updated_at":"2020-04-16 17:40:58"},
{"id":"d2b02f82-9eab-4a8d-ab80-4930e624cbd0","definition":"eros viverra eget congue eget","term":"responsive","card_set_id":"25f05cb4-a651-467c-abf4-40ea8a81a4ea","created_at":"2020-04-13 13:21:51","updated_at":"2020-04-13 13:21:51"},
{"id":"44a69fbc-b0ed-418b-8f82-78b072520b89","definition":"lacus morbi sem mauris laoreet ut rhoncus","term":"Progressive","card_set_id":"25f05cb4-a651-467c-abf4-40ea8a81a4ea","created_at":"2020-04-11 20:11:22","updated_at":"2020-04-11 20:11:22"},
{"id":"73188041-96e6-4471-8697-b56e607fe3a0","definition":"nulla nunc purus phasellus in felis donec semper","term":"Right-sized","card_set_id":"25f05cb4-a651-467c-abf4-40ea8a81a4ea","created_at":"2020-04-05 03:07:51","updated_at":"2020-04-05 03:07:51"},
{"id":"d7155eb4-d3d3-4df4-80b7-78edc804fcb0","definition":"nulla neque libero convallis eget eleifend luctus","term":"solution","card_set_id":"25f05cb4-a651-467c-abf4-40ea8a81a4ea","created_at":"2020-04-12 09:51:47","updated_at":"2020-04-12 09:51:47"},
{"id":"e702dc75-b855-4c2a-b85f-bfd2cf389b4d","definition":"aliquet massa id lobortis convallis tortor risus dapibus augue","term":"synergy","card_set_id":"25f05cb4-a651-467c-abf4-40ea8a81a4ea","created_at":"2020-04-02 22:05:31","updated_at":"2020-04-02 22:05:31"},
{"id":"fe17a13f-aedf-45b7-ac7c-f1dc1f41fce3","definition":"sollicitudin vitae consectetuer eget rutrum at lorem","term":"intranet","card_set_id":"25f05cb4-a651-467c-abf4-40ea8a81a4ea","created_at":"2020-04-05 07:05:45","updated_at":"2020-04-05 07:05:45"},
{"id":"aaa89e7b-c4fc-4212-b7cd-e96b3778a992","definition":"integer non","term":"throughput","card_set_id":"25f05cb4-a651-467c-abf4-40ea8a81a4ea","created_at":"2020-04-10 10:41:53","updated_at":"2020-04-10 10:41:53"},
{"id":"08970611-0e9c-4e62-b53d-19c8eb6deab8","definition":"volutpat eleifend","term":"dynamic","card_set_id":"e2caa79d-9595-4acb-b7e9-215470d87ac7","created_at":"2020-04-17 13:06:52","updated_at":"2020-04-17 13:06:52"},
{"id":"7d6279dc-adc7-4fc3-beee-d708f2c881be","definition":"magnis dis parturient montes","term":"context-sensitive","card_set_id":"e2caa79d-9595-4acb-b7e9-215470d87ac7","created_at":"2020-04-06 05:40:43","updated_at":"2020-04-06 05:40:43"},
{"id":"879dd84d-d8ed-467c-a328-e982e22aee15","definition":"duis faucibus accumsan odio curabitur convallis","term":"alliance","card_set_id":"e2caa79d-9595-4acb-b7e9-215470d87ac7","created_at":"2020-04-13 20:29:23","updated_at":"2020-04-13 20:29:23"},
{"id":"4c70f70c-0276-4cc4-89e9-0beba4dc4c45","definition":"dictumst etiam faucibus cursus urna ut tellus nulla","term":"Right-sized","card_set_id":"e2caa79d-9595-4acb-b7e9-215470d87ac7","created_at":"2020-04-16 04:02:18","updated_at":"2020-04-16 04:02:18"},
{"id":"173c1f22-d99d-4106-8cdf-36599ee01c9e","definition":"at lorem integer tincidunt ante vel ipsum praesent blandit lacinia","term":"time-frame","card_set_id":"e2caa79d-9595-4acb-b7e9-215470d87ac7","created_at":"2020-04-16 22:00:28","updated_at":"2020-04-16 22:00:28"},
{"id":"ad3283c8-81e1-44a8-b34c-575546ab37d9","definition":"ut at","term":"knowledge base","card_set_id":"e2caa79d-9595-4acb-b7e9-215470d87ac7","created_at":"2020-04-20 08:18:12","updated_at":"2020-04-20 08:18:12"},
{"id":"ed492465-c2f6-4823-98fa-2b75354dbed3","definition":"auctor gravida","term":"Team-oriented","card_set_id":"53aac4fd-97ad-4bba-b071-a2d7f44c8b3f","created_at":"2020-04-20 18:41:09","updated_at":"2020-04-20 18:41:09"},
{"id":"cfb9d98a-fae2-4fb5-a481-9166696e4fe4","definition":"pellentesque ultrices mattis odio donec vitae nisi nam ultrices libero","term":"open system","card_set_id":"53aac4fd-97ad-4bba-b071-a2d7f44c8b3f","created_at":"2020-04-14 11:12:11","updated_at":"2020-04-14 11:12:11"},
{"id":"3f35d2d9-261a-44cf-ae31-599814a8c648","definition":"accumsan tortor quis turpis","term":"bi-directional","card_set_id":"53aac4fd-97ad-4bba-b071-a2d7f44c8b3f","created_at":"2020-04-18 19:01:55","updated_at":"2020-04-18 19:01:55"},
{"id":"e2c35b87-dafd-4e9a-bbc0-182ac870ca7a","definition":"dapibus duis at velit eu","term":"Synchronised","card_set_id":"53aac4fd-97ad-4bba-b071-a2d7f44c8b3f","created_at":"2020-04-18 07:08:11","updated_at":"2020-04-18 07:08:11"},
{"id":"49f10f8a-d7b8-4834-9673-3028c895d11f","definition":"risus praesent lectus vestibulum quam sapien","term":"Re-contextualized","card_set_id":"53aac4fd-97ad-4bba-b071-a2d7f44c8b3f","created_at":"2020-04-18 16:51:09","updated_at":"2020-04-18 16:51:09"},
{"id":"edb62a42-9e6d-450c-bc3d-8f541f1b3285","definition":"pede justo eu massa","term":"superstructure","card_set_id":"53aac4fd-97ad-4bba-b071-a2d7f44c8b3f","created_at":"2020-04-06 01:52:43","updated_at":"2020-04-06 01:52:43"},
{"id":"8bcaca50-1fc7-4db2-be3d-3905424d079c","definition":"justo sit amet sapien dignissim vestibulum vestibulum","term":"Synergized","card_set_id":"53aac4fd-97ad-4bba-b071-a2d7f44c8b3f","created_at":"2020-04-11 00:13:29","updated_at":"2020-04-11 00:13:29"},
{"id":"3c139c78-cc19-470d-bed2-fba2eee58a79","definition":"nulla dapibus dolor vel est donec odio justo sollicitudin","term":"parallelism","card_set_id":"802473f1-ead4-4322-a2af-c89ff7d7a5dd","created_at":"2020-04-04 03:15:58","updated_at":"2020-04-04 03:15:58"},
{"id":"1352c68a-299a-4216-88fe-12001a30895d","definition":"elementum in hac habitasse platea dictumst","term":"holistic","card_set_id":"802473f1-ead4-4322-a2af-c89ff7d7a5dd","created_at":"2020-04-06 06:21:50","updated_at":"2020-04-06 06:21:50"},
{"id":"1a12b531-5cc4-41c4-aeb1-fbe269f7454d","definition":"augue vestibulum ante ipsum","term":"Devolved","card_set_id":"802473f1-ead4-4322-a2af-c89ff7d7a5dd","created_at":"2020-04-11 23:35:55","updated_at":"2020-04-11 23:35:55"},
{"id":"49b67a26-7df8-4fdf-a2a1-4df00377a1cc","definition":"porttitor id consequat in","term":"parallelism","card_set_id":"802473f1-ead4-4322-a2af-c89ff7d7a5dd","created_at":"2020-04-05 17:22:10","updated_at":"2020-04-05 17:22:10"},
{"id":"77e2b69c-f3fb-4684-b016-ce0b9eb13cd4","definition":"nulla neque libero convallis eget eleifend luctus ultricies eu nibh","term":"ability","card_set_id":"802473f1-ead4-4322-a2af-c89ff7d7a5dd","created_at":"2020-04-02 07:03:34","updated_at":"2020-04-02 07:03:34"},
{"id":"75db7c09-8b8b-4702-bf90-aa0dc87dd86a","definition":"orci eget orci vehicula condimentum curabitur in libero ut","term":"application","card_set_id":"802473f1-ead4-4322-a2af-c89ff7d7a5dd","created_at":"2020-04-05 22:53:24","updated_at":"2020-04-05 22:53:24"},
{"id":"61c3bd2c-059a-43ee-a650-2f3aea622b97","definition":"pede","term":"matrices","card_set_id":"802473f1-ead4-4322-a2af-c89ff7d7a5dd","created_at":"2020-04-07 11:49:29","updated_at":"2020-04-07 11:49:29"},
{"id":"6e7616d6-b4c8-4b6e-aa63-70e4c4605552","definition":"augue aliquam erat volutpat in","term":"tertiary","card_set_id":"802473f1-ead4-4322-a2af-c89ff7d7a5dd","created_at":"2020-04-18 08:23:59","updated_at":"2020-04-18 08:23:59"},
{"id":"a1035ca6-0bb1-4341-aa5b-092882c4e6d4","definition":"at turpis donec","term":"Implemented","card_set_id":"802473f1-ead4-4322-a2af-c89ff7d7a5dd","created_at":"2020-04-09 05:46:33","updated_at":"2020-04-09 05:46:33"},
{"id":"c3d049ff-21f9-4564-8f35-2a1a63059db3","definition":"vivamus vel nulla eget eros elementum pellentesque quisque porta volutpat","term":"workforce","card_set_id":"802473f1-ead4-4322-a2af-c89ff7d7a5dd","created_at":"2020-04-01 09:37:59","updated_at":"2020-04-01 09:37:59"},
{"id":"5fa1d180-4114-4f32-9e24-6666239ac62b","definition":"convallis nulla neque libero convallis eget eleifend","term":"web-enabled","card_set_id":"802473f1-ead4-4322-a2af-c89ff7d7a5dd","created_at":"2020-04-14 12:09:27","updated_at":"2020-04-14 12:09:27"},
{"id":"42e150f5-9117-4484-8bd3-75e90112bca5","definition":"platea","term":"De-engineered","card_set_id":"802473f1-ead4-4322-a2af-c89ff7d7a5dd","created_at":"2020-04-06 12:02:10","updated_at":"2020-04-06 12:02:10"},
{"id":"c8ee3738-203d-41af-a5a3-95a9c151d6ca","definition":"tortor duis mattis egestas metus aenean fermentum donec ut mauris","term":"Automated","card_set_id":"802473f1-ead4-4322-a2af-c89ff7d7a5dd","created_at":"2020-04-05 18:42:27","updated_at":"2020-04-05 18:42:27"},
{"id":"3931a4e7-f268-4ee6-8dfa-d3e3604f6dc9","definition":"justo etiam","term":"mission-critical","card_set_id":"802473f1-ead4-4322-a2af-c89ff7d7a5dd","created_at":"2020-04-01 21:10:05","updated_at":"2020-04-01 21:10:05"},
{"id":"e6447f25-a791-432c-84d0-8da58fdc9d5f","definition":"in lacus","term":"high-level","card_set_id":"802473f1-ead4-4322-a2af-c89ff7d7a5dd","created_at":"2020-04-10 21:56:58","updated_at":"2020-04-10 21:56:58"},
{"id":"d09247fd-e7ad-4533-a726-1ce9ea372fa6","definition":"eros viverra eget congue","term":"Implemented","card_set_id":"802473f1-ead4-4322-a2af-c89ff7d7a5dd","created_at":"2020-04-19 12:48:52","updated_at":"2020-04-19 12:48:52"},
{"id":"fdf79730-1c5f-4084-8257-e7aa46bf3a52","definition":"felis donec semper sapien a libero nam dui proin","term":"Multi-channelled","card_set_id":"802473f1-ead4-4322-a2af-c89ff7d7a5dd","created_at":"2020-04-12 04:15:27","updated_at":"2020-04-12 04:15:27"},
{"id":"23942e4a-a1c1-4d84-a42d-5dda22dcf16c","definition":"condimentum id luctus","term":"multimedia","card_set_id":"802473f1-ead4-4322-a2af-c89ff7d7a5dd","created_at":"2020-04-14 01:32:47","updated_at":"2020-04-14 01:32:47"},
{"id":"0769f887-bef7-4fd1-89f0-e83b07eb2636","definition":"ipsum aliquam non mauris morbi non lectus aliquam sit amet","term":"multi-state","card_set_id":"802473f1-ead4-4322-a2af-c89ff7d7a5dd","created_at":"2020-04-09 03:42:59","updated_at":"2020-04-09 03:42:59"},
{"id":"468d076a-9e35-4f36-acaa-ed0e26c834ba","definition":"integer non velit donec diam neque","term":"website","card_set_id":"802473f1-ead4-4322-a2af-c89ff7d7a5dd","created_at":"2020-04-06 10:20:42","updated_at":"2020-04-06 10:20:42"},
{"id":"47d6d28a-c7bc-4676-b710-6255bcd1d6ac","definition":"vel","term":"Graphical User Interface","card_set_id":"802473f1-ead4-4322-a2af-c89ff7d7a5dd","created_at":"2020-04-01 18:07:49","updated_at":"2020-04-01 18:07:49"},
{"id":"0e8ec7cd-e02f-4388-a639-75f8a22aa1eb","definition":"porta","term":"conglomeration","card_set_id":"f9b67aff-8037-4fe2-a54e-02fdd5b2cfa7","created_at":"2020-04-05 18:20:09","updated_at":"2020-04-05 18:20:09"},
{"id":"128fba23-9d38-41d3-b8af-caf142977e93","definition":"mus vivamus","term":"systemic","card_set_id":"f9b67aff-8037-4fe2-a54e-02fdd5b2cfa7","created_at":"2020-04-03 16:43:08","updated_at":"2020-04-03 16:43:08"},
{"id":"33149683-da50-4a7b-813b-f441dd9d99fa","definition":"erat quisque erat eros viverra eget congue eget semper","term":"local area network","card_set_id":"fc74359d-2852-4f6b-8b5a-7fbabe313ea3","created_at":"2020-04-02 20:27:48","updated_at":"2020-04-02 20:27:48"},
{"id":"d9d38f77-d27d-4fa6-a7dd-c619e52bdff2","definition":"tellus nulla ut erat id mauris vulputate elementum nullam varius","term":"Seamless","card_set_id":"fc74359d-2852-4f6b-8b5a-7fbabe313ea3","created_at":"2020-04-08 05:52:01","updated_at":"2020-04-08 05:52:01"},
{"id":"2dc00d25-e698-49bf-8dd8-254184a1ae8d","definition":"ultrices vel augue vestibulum","term":"responsive","card_set_id":"fc74359d-2852-4f6b-8b5a-7fbabe313ea3","created_at":"2020-04-02 18:52:21","updated_at":"2020-04-02 18:52:21"},
{"id":"26c3d9f8-00d2-4676-bcf8-dc530f8cf7cb","definition":"rhoncus aliquet pulvinar","term":"benchmark","card_set_id":"c0ccdbfa-8e65-4fae-9f05-a6bbd6847039","created_at":"2020-04-01 10:48:19","updated_at":"2020-04-01 10:48:19"},
{"id":"7bc0fd96-2aab-4f76-b880-8b9ef7e7959d","definition":"auctor gravida sem praesent id massa id nisl venenatis lacinia","term":"systematic","card_set_id":"c0ccdbfa-8e65-4fae-9f05-a6bbd6847039","created_at":"2020-04-02 17:29:33","updated_at":"2020-04-02 17:29:33"},
{"id":"222a289e-e961-4069-a621-5e47bbb359c4","definition":"neque sapien","term":"Synergistic","card_set_id":"c0ccdbfa-8e65-4fae-9f05-a6bbd6847039","created_at":"2020-04-12 16:13:54","updated_at":"2020-04-12 16:13:54"},
{"id":"4444ac39-8d03-4fbe-8807-2d56b5c1daac","definition":"eu massa donec dapibus duis at","term":"system-worthy","card_set_id":"c0ccdbfa-8e65-4fae-9f05-a6bbd6847039","created_at":"2020-04-11 19:14:40","updated_at":"2020-04-11 19:14:40"},
{"id":"f6c3dada-9dec-4712-926c-dc1f0b507688","definition":"faucibus cursus urna ut tellus nulla ut erat id mauris","term":"web-enabled","card_set_id":"b303341f-a52c-4c91-8ce1-33ecefa00d37","created_at":"2020-04-09 02:46:55","updated_at":"2020-04-09 02:46:55"},
{"id":"07e1ac65-9f03-4ef5-9739-781b3c457ff9","definition":"aliquet at feugiat non pretium quis lectus suspendisse potenti in","term":"multimedia","card_set_id":"b303341f-a52c-4c91-8ce1-33ecefa00d37","created_at":"2020-04-14 02:07:12","updated_at":"2020-04-14 02:07:12"},
{"id":"248303cf-96e7-4aec-8853-2cdf161b1640","definition":"vitae","term":"forecast","card_set_id":"b303341f-a52c-4c91-8ce1-33ecefa00d37","created_at":"2020-04-09 06:45:46","updated_at":"2020-04-09 06:45:46"},
{"id":"1b8b77e9-538b-4bc2-aeaa-4586e5c557e0","definition":"magna bibendum imperdiet nullam","term":"intranet","card_set_id":"b303341f-a52c-4c91-8ce1-33ecefa00d37","created_at":"2020-04-14 14:00:29","updated_at":"2020-04-14 14:00:29"},
{"id":"63ca6b9f-199d-40a4-80ea-1129831ea7a1","definition":"lorem id ligula","term":"service-desk","card_set_id":"b303341f-a52c-4c91-8ce1-33ecefa00d37","created_at":"2020-04-17 02:30:04","updated_at":"2020-04-17 02:30:04"},
{"id":"349ced7d-6f73-409f-98f1-e98e20280b4e","definition":"pretium nisl ut volutpat sapien arcu sed augue aliquam erat","term":"coherent","card_set_id":"b303341f-a52c-4c91-8ce1-33ecefa00d37","created_at":"2020-04-14 06:34:37","updated_at":"2020-04-14 06:34:37"},
{"id":"191a6935-50f8-48ab-86e7-780e4d98875e","definition":"faucibus orci luctus et ultrices","term":"Operative","card_set_id":"8c61d4cc-fb71-4ea2-8c9d-272a0861ed97","created_at":"2020-04-16 13:33:11","updated_at":"2020-04-16 13:33:11"},
{"id":"ab78a571-2e6f-4d1e-a00a-0e089b54d554","definition":"ut erat curabitur gravida nisi at nibh in hac","term":"clear-thinking","card_set_id":"8c61d4cc-fb71-4ea2-8c9d-272a0861ed97","created_at":"2020-04-18 08:05:23","updated_at":"2020-04-18 08:05:23"},
{"id":"22d8c5d6-bfbd-48ee-81bd-049281805b94","definition":"mattis nibh ligula nec sem duis aliquam convallis","term":"multi-state","card_set_id":"8c61d4cc-fb71-4ea2-8c9d-272a0861ed97","created_at":"2020-04-02 01:32:08","updated_at":"2020-04-02 01:32:08"},
{"id":"b1d8d699-37ff-45f3-b727-e34b652b5e59","definition":"ultrices posuere cubilia curae duis faucibus accumsan odio curabitur","term":"Vision-oriented","card_set_id":"8c61d4cc-fb71-4ea2-8c9d-272a0861ed97","created_at":"2020-04-13 09:05:24","updated_at":"2020-04-13 09:05:24"},
{"id":"d75a45b7-62bc-41ef-98e2-40603cbcf02b","definition":"suscipit a feugiat","term":"parallelism","card_set_id":"8c61d4cc-fb71-4ea2-8c9d-272a0861ed97","created_at":"2020-04-12 02:01:28","updated_at":"2020-04-12 02:01:28"},
{"id":"dc657b1c-b891-4e64-ba4f-7130ad53c09d","definition":"eget tempus vel pede morbi porttitor lorem id","term":"Inverse","card_set_id":"8c61d4cc-fb71-4ea2-8c9d-272a0861ed97","created_at":"2020-04-19 08:58:54","updated_at":"2020-04-19 08:58:54"},
{"id":"4ea6e280-585e-4571-b505-49c331411326","definition":"tellus in","term":"Cloned","card_set_id":"f21f5cef-390d-4b1c-b757-9cff2cc3e040","created_at":"2020-04-18 17:24:14","updated_at":"2020-04-18 17:24:14"},
{"id":"7928acf4-5d02-45c2-bbda-284a8ec0f23b","definition":"erat vestibulum sed magna at","term":"stable","card_set_id":"f21f5cef-390d-4b1c-b757-9cff2cc3e040","created_at":"2020-04-15 11:27:44","updated_at":"2020-04-15 11:27:44"},
{"id":"3190d096-61f6-4644-853b-a662e127c650","definition":"donec","term":"composite","card_set_id":"f21f5cef-390d-4b1c-b757-9cff2cc3e040","created_at":"2020-04-10 19:01:28","updated_at":"2020-04-10 19:01:28"},
{"id":"7d412f0d-666b-4d76-bc18-e5abad704b48","definition":"lacinia erat vestibulum sed magna at nunc","term":"Reactive","card_set_id":"f21f5cef-390d-4b1c-b757-9cff2cc3e040","created_at":"2020-04-18 10:12:11","updated_at":"2020-04-18 10:12:11"},
{"id":"ce82bfa2-26e5-48e0-9ab7-636e05da7c72","definition":"massa tempor convallis nulla","term":"Stand-alone","card_set_id":"f21f5cef-390d-4b1c-b757-9cff2cc3e040","created_at":"2020-04-02 04:15:58","updated_at":"2020-04-02 04:15:58"},
{"id":"73abfdd7-729e-4c2e-a350-1ae5b5fe2c59","definition":"non","term":"foreground","card_set_id":"f21f5cef-390d-4b1c-b757-9cff2cc3e040","created_at":"2020-04-16 13:00:41","updated_at":"2020-04-16 13:00:41"},
{"id":"ba499493-cc77-48ad-92e1-e775ca952d94","definition":"semper porta volutpat quam pede lobortis ligula sit amet","term":"standardization","card_set_id":"f21f5cef-390d-4b1c-b757-9cff2cc3e040","created_at":"2020-04-08 18:40:34","updated_at":"2020-04-08 18:40:34"},
{"id":"468e833e-cddf-4dda-9fce-af64a94b0b4c","definition":"cubilia curae duis faucibus accumsan odio curabitur","term":"multi-tasking","card_set_id":"f21f5cef-390d-4b1c-b757-9cff2cc3e040","created_at":"2020-04-17 00:22:09","updated_at":"2020-04-17 00:22:09"},
{"id":"c8500640-8dd0-4a47-8a2d-aa5b202d47be","definition":"consequat","term":"Integrated","card_set_id":"f21f5cef-390d-4b1c-b757-9cff2cc3e040","created_at":"2020-04-04 23:45:37","updated_at":"2020-04-04 23:45:37"},
{"id":"6f3d59f3-22ee-42af-915e-f0c17e3d362a","definition":"penatibus et magnis dis parturient","term":"Customer-focused","card_set_id":"be190cc9-4033-4b69-b1c2-118ee0c632d2","created_at":"2020-04-13 18:40:29","updated_at":"2020-04-13 18:40:29"},
{"id":"c220a6c7-3893-46a2-9d96-f9d376b0b1c0","definition":"vel nisl","term":"software","card_set_id":"be190cc9-4033-4b69-b1c2-118ee0c632d2","created_at":"2020-04-12 14:37:50","updated_at":"2020-04-12 14:37:50"},
{"id":"ec68fdb8-e83f-4b05-a394-2570dd5c37a2","definition":"quam pharetra magna ac consequat metus","term":"optimal","card_set_id":"be190cc9-4033-4b69-b1c2-118ee0c632d2","created_at":"2020-04-10 02:15:34","updated_at":"2020-04-10 02:15:34"},
{"id":"fee01a53-5a42-4de2-87de-acc2ee63fafb","definition":"est donec odio justo sollicitudin ut","term":"access","card_set_id":"be190cc9-4033-4b69-b1c2-118ee0c632d2","created_at":"2020-04-16 13:47:24","updated_at":"2020-04-16 13:47:24"},
{"id":"c64e2858-40da-4e81-8b00-0c9c1723cfc5","definition":"natoque penatibus et magnis dis parturient","term":"reciprocal","card_set_id":"be190cc9-4033-4b69-b1c2-118ee0c632d2","created_at":"2020-04-10 13:06:53","updated_at":"2020-04-10 13:06:53"},
{"id":"92bccb59-6ccf-4d8c-be55-ebc068fe76a9","definition":"consequat dui nec nisi volutpat eleifend","term":"next generation","card_set_id":"be190cc9-4033-4b69-b1c2-118ee0c632d2","created_at":"2020-04-20 09:53:24","updated_at":"2020-04-20 09:53:24"},
{"id":"985263e2-1ce8-4178-ace1-0be8f14ba186","definition":"parturient montes nascetur ridiculus mus etiam","term":"extranet","card_set_id":"e3038879-0c01-418c-9d36-607e660a129a","created_at":"2020-04-05 21:45:01","updated_at":"2020-04-05 21:45:01"},
{"id":"de9339db-c9d0-4d4e-b2a2-546b2b765262","definition":"eleifend donec ut dolor morbi vel","term":"Vision-oriented","card_set_id":"e3038879-0c01-418c-9d36-607e660a129a","created_at":"2020-04-07 22:50:03","updated_at":"2020-04-07 22:50:03"},
{"id":"046fcf43-a09b-4050-97e8-fb561cdd4ef2","definition":"massa volutpat convallis morbi odio odio elementum eu","term":"database","card_set_id":"e3038879-0c01-418c-9d36-607e660a129a","created_at":"2020-04-08 11:07:20","updated_at":"2020-04-08 11:07:20"},
{"id":"1fb7d327-c295-4a25-bb9e-4aff915b9f15","definition":"a suscipit nulla","term":"Reduced","card_set_id":"e3038879-0c01-418c-9d36-607e660a129a","created_at":"2020-04-15 01:56:05","updated_at":"2020-04-15 01:56:05"},
{"id":"420d0d85-008d-407e-a2ef-43591a4952f6","definition":"elementum ligula vehicula consequat morbi a ipsum integer a nibh","term":"matrix","card_set_id":"d80433e4-6ef5-4d24-97fb-8c1dc3284ad0","created_at":"2020-04-19 17:43:30","updated_at":"2020-04-19 17:43:30"},
{"id":"e32498b3-1621-4a62-a53e-e9f66e36df15","definition":"est congue elementum in hac habitasse platea dictumst morbi vestibulum","term":"intermediate","card_set_id":"d80433e4-6ef5-4d24-97fb-8c1dc3284ad0","created_at":"2020-04-11 17:49:17","updated_at":"2020-04-11 17:49:17"},
{"id":"c77823dd-b3b9-4aa9-a39c-93b740c5dcc8","definition":"sed tincidunt eu felis fusce posuere felis","term":"time-frame","card_set_id":"e15b9fca-f2d5-4d02-96b6-7f031e19a495","created_at":"2020-04-11 08:15:45","updated_at":"2020-04-11 08:15:45"},
{"id":"84e9ebb5-2661-4c2e-a341-5096f0ea277d","definition":"sed augue aliquam erat volutpat in congue","term":"workforce","card_set_id":"e15b9fca-f2d5-4d02-96b6-7f031e19a495","created_at":"2020-04-15 07:38:39","updated_at":"2020-04-15 07:38:39"},
{"id":"e9c250ca-71e4-4166-b68c-d8222849e27b","definition":"sit amet consectetuer","term":"approach","card_set_id":"241df9c6-24c5-4168-b51a-3ea4e1fda072","created_at":"2020-04-18 15:08:30","updated_at":"2020-04-18 15:08:30"},
{"id":"7021fa2b-87ee-403a-8f34-392077bef75b","definition":"bibendum morbi non quam nec dui luctus","term":"Diverse","card_set_id":"241df9c6-24c5-4168-b51a-3ea4e1fda072","created_at":"2020-04-02 18:01:15","updated_at":"2020-04-02 18:01:15"},
{"id":"e2dae00f-0d0a-4682-ae60-0808da2c3095","definition":"non lectus aliquam sit amet diam","term":"analyzer","card_set_id":"c8426576-c87f-4663-94a9-4c27d8c46dea","created_at":"2020-04-04 20:09:59","updated_at":"2020-04-04 20:09:59"},
{"id":"4721a6d4-7b1d-48c8-938c-0a2bf95da2da","definition":"nascetur ridiculus mus vivamus vestibulum sagittis sapien cum sociis natoque","term":"Exclusive","card_set_id":"c8426576-c87f-4663-94a9-4c27d8c46dea","created_at":"2020-04-05 02:46:43","updated_at":"2020-04-05 02:46:43"},
{"id":"0e61e172-cc4f-4826-af8c-3c81d941dc47","definition":"nullam orci pede","term":"Focused","card_set_id":"c58d9f3a-9a17-4322-a243-390a9012acdb","created_at":"2020-04-06 17:34:31","updated_at":"2020-04-06 17:34:31"},
{"id":"8962b6d4-27c1-42d5-ae09-40e7a5fb8048","definition":"non sodales sed","term":"tertiary","card_set_id":"c58d9f3a-9a17-4322-a243-390a9012acdb","created_at":"2020-04-07 15:45:06","updated_at":"2020-04-07 15:45:06"},
{"id":"6726618a-2dd4-4bce-8a70-79b83633e43f","definition":"aliquet at feugiat non","term":"Profound","card_set_id":"d6ce5019-4745-4ecc-8b21-c4c0f31be2bb","created_at":"2020-04-12 05:55:14","updated_at":"2020-04-12 05:55:14"},
{"id":"2f515afd-2b89-4d07-9646-777691fcb6d0","definition":"morbi","term":"empowering","card_set_id":"d6ce5019-4745-4ecc-8b21-c4c0f31be2bb","created_at":"2020-04-20 21:58:23","updated_at":"2020-04-20 21:58:23"},
{"id":"432cb899-2be9-41d4-93a5-34f65ef6daa7","definition":"ipsum dolor sit amet consectetuer adipiscing elit proin","term":"human-resource","card_set_id":"9ef8ba2d-9bac-43dc-85f0-43b0561f4316","created_at":"2020-04-04 04:57:39","updated_at":"2020-04-04 04:57:39"},
{"id":"69c15e83-4c56-4a1a-b9d0-9dc7046e720b","definition":"et ultrices posuere","term":"orchestration","card_set_id":"9ef8ba2d-9bac-43dc-85f0-43b0561f4316","created_at":"2020-04-19 16:21:28","updated_at":"2020-04-19 16:21:28"},
{"id":"74601a7c-4581-46c2-aee2-b87a432aaaee","definition":"sollicitudin vitae consectetuer eget rutrum","term":"homogeneous","card_set_id":"98a04195-00cd-4a7e-a80b-bff41b34fc0a","created_at":"2020-04-19 01:15:03","updated_at":"2020-04-19 01:15:03"},
{"id":"b84e53b1-2b57-4eee-8f53-f1ccd359dae8","definition":"luctus nec molestie sed","term":"dynamic","card_set_id":"98a04195-00cd-4a7e-a80b-bff41b34fc0a","created_at":"2020-04-10 09:49:50","updated_at":"2020-04-10 09:49:50"},
{"id":"1f7c0526-9242-4a0a-8872-6d0359f5b921","definition":"neque libero convallis","term":"Cross-group","card_set_id":"98a04195-00cd-4a7e-a80b-bff41b34fc0a","created_at":"2020-04-20 05:33:15","updated_at":"2020-04-20 05:33:15"},
{"id":"ee250241-522d-4d4e-a102-9531796f267d","definition":"quam a odio in","term":"Managed","card_set_id":"43eb5877-f935-4053-a469-206996a80a68","created_at":"2020-04-08 05:33:11","updated_at":"2020-04-08 05:33:11"},
{"id":"66dbffad-2eab-4a7d-a3e8-0c643b68b48d","definition":"ultrices libero non mattis pulvinar nulla pede","term":"Ergonomic","card_set_id":"43eb5877-f935-4053-a469-206996a80a68","created_at":"2020-04-05 22:12:28","updated_at":"2020-04-05 22:12:28"},
{"id":"1f8f6601-000d-4e89-b49d-9e361da9e325","definition":"risus praesent lectus vestibulum quam sapien varius ut","term":"capability","card_set_id":"43eb5877-f935-4053-a469-206996a80a68","created_at":"2020-04-17 03:39:41","updated_at":"2020-04-17 03:39:41"},
{"id":"957485d1-c580-4bfa-baa4-8a28aa1181e3","definition":"amet sapien dignissim vestibulum vestibulum ante ipsum primis","term":"matrices","card_set_id":"43eb5877-f935-4053-a469-206996a80a68","created_at":"2020-04-15 14:44:08","updated_at":"2020-04-15 14:44:08"},
{"id":"962e3015-2bc1-4aa2-a5d0-fa6d5cc0d1ef","definition":"ut odio cras","term":"Networked","card_set_id":"43eb5877-f935-4053-a469-206996a80a68","created_at":"2020-04-09 17:11:32","updated_at":"2020-04-09 17:11:32"},
{"id":"a4a848a5-41c7-4341-87b6-095c6d913d43","definition":"faucibus orci luctus et ultrices posuere cubilia","term":"transitional","card_set_id":"43eb5877-f935-4053-a469-206996a80a68","created_at":"2020-04-06 20:55:28","updated_at":"2020-04-06 20:55:28"},
{"id":"959807f9-21c9-457a-9c16-109ca856bf67","definition":"luctus cum sociis natoque penatibus et magnis dis parturient","term":"firmware","card_set_id":"a2bc90b0-bb41-462c-913e-df805ba0d13c","created_at":"2020-04-11 23:36:56","updated_at":"2020-04-11 23:36:56"},
{"id":"6151f8af-7a96-429d-ae6e-4eda92c8ccf7","definition":"a libero nam dui proin leo","term":"actuating","card_set_id":"a2bc90b0-bb41-462c-913e-df805ba0d13c","created_at":"2020-04-15 05:29:13","updated_at":"2020-04-15 05:29:13"},
{"id":"660a7f76-320e-4f51-b4ca-edc75bd8e142","definition":"mi nulla ac enim","term":"Up-sized","card_set_id":"a2bc90b0-bb41-462c-913e-df805ba0d13c","created_at":"2020-04-02 15:43:59","updated_at":"2020-04-02 15:43:59"},
{"id":"2672ac95-329a-46c2-9a03-08005cfbfd8a","definition":"integer","term":"flexibility","card_set_id":"f88c723e-4af9-4103-a1ce-0d8bc44e5b41","created_at":"2020-04-11 22:59:36","updated_at":"2020-04-11 22:59:36"},
{"id":"b02d5748-78f4-4ff6-8bf7-a8f80c15e4a1","definition":"sem fusce consequat nulla nisl nunc nisl duis bibendum","term":"intranet","card_set_id":"f88c723e-4af9-4103-a1ce-0d8bc44e5b41","created_at":"2020-04-03 22:15:04","updated_at":"2020-04-03 22:15:04"},
{"id":"46f7001d-a19d-49eb-99c5-61b8116e471a","definition":"in sapien iaculis congue vivamus","term":"6th generation","card_set_id":"f88c723e-4af9-4103-a1ce-0d8bc44e5b41","created_at":"2020-04-20 23:47:56","updated_at":"2020-04-20 23:47:56"},
{"id":"1f95bd76-319a-42e9-9a48-209fa293bdde","definition":"nisi at nibh in hac habitasse","term":"Inverse","card_set_id":"9e617f18-bcc5-4604-8df6-b2cb7bbbe757","created_at":"2020-04-17 09:09:43","updated_at":"2020-04-17 09:09:43"},
{"id":"ac81c9db-2551-4c24-9049-d3fb7883b35d","definition":"lectus in quam fringilla","term":"bifurcated","card_set_id":"9e617f18-bcc5-4604-8df6-b2cb7bbbe757","created_at":"2020-04-18 06:25:28","updated_at":"2020-04-18 06:25:28"},
{"id":"6cc1ca32-2583-4239-b696-d8b4d7d1bbb6","definition":"tincidunt lacus","term":"modular","card_set_id":"9e617f18-bcc5-4604-8df6-b2cb7bbbe757","created_at":"2020-04-15 19:37:30","updated_at":"2020-04-15 19:37:30"},
{"id":"ac40878e-d5d2-468f-929a-aa65058326bd","definition":"nullam sit amet turpis elementum ligula vehicula consequat morbi a","term":"zero administration","card_set_id":"bec3286a-f5a8-4948-9bf9-4f3d625a5733","created_at":"2020-04-16 08:02:49","updated_at":"2020-04-16 08:02:49"},
{"id":"3887b2f0-63c9-487e-8ad2-18d0cdd95121","definition":"nulla sed vel enim sit amet nunc","term":"modular","card_set_id":"bec3286a-f5a8-4948-9bf9-4f3d625a5733","created_at":"2020-04-04 10:15:47","updated_at":"2020-04-04 10:15:47"},
{"id":"0ec4a538-afc6-4788-8dd9-c1fe943f23f2","definition":"eu","term":"bandwidth-monitored","card_set_id":"bec3286a-f5a8-4948-9bf9-4f3d625a5733","created_at":"2020-04-14 01:04:10","updated_at":"2020-04-14 01:04:10"},
{"id":"9e09a5ea-2208-4412-b34a-7b115020e6d1","definition":"vitae quam suspendisse potenti nullam porttitor","term":"optimizing","card_set_id":"bec3286a-f5a8-4948-9bf9-4f3d625a5733","created_at":"2020-04-18 21:49:54","updated_at":"2020-04-18 21:49:54"},
{"id":"ce2dcbcf-c732-411d-8fc9-5b9c02b64cc2","definition":"sagittis dui vel nisl duis ac","term":"Vision-oriented","card_set_id":"c649a363-7b9e-4a30-aff7-c5962556b2a6","created_at":"2020-04-06 02:26:52","updated_at":"2020-04-06 02:26:52"},
{"id":"664df8cb-6ac1-4786-b369-2a2ecbefaff3","definition":"nisi volutpat eleifend donec ut dolor","term":"heuristic","card_set_id":"c649a363-7b9e-4a30-aff7-c5962556b2a6","created_at":"2020-04-13 07:12:58","updated_at":"2020-04-13 07:12:58"},
{"id":"36e29ec7-22f4-468d-988e-c2fd56f52b34","definition":"mattis odio donec vitae nisi nam ultrices libero","term":"uniform","card_set_id":"f9c38a3d-5881-4a89-be8d-dc9eb12dd562","created_at":"2020-04-08 01:56:57","updated_at":"2020-04-08 01:56:57"},
{"id":"39411399-f4de-4648-97a3-e0e475406527","definition":"venenatis turpis","term":"User-centric","card_set_id":"f9c38a3d-5881-4a89-be8d-dc9eb12dd562","created_at":"2020-04-20 15:53:24","updated_at":"2020-04-20 15:53:24"},
{"id":"ec428f6e-7d83-47ba-bdcf-3b42b76cc623","definition":"suscipit nulla elit ac nulla sed vel enim sit","term":"Upgradable","card_set_id":"f9c38a3d-5881-4a89-be8d-dc9eb12dd562","created_at":"2020-04-01 22:23:39","updated_at":"2020-04-01 22:23:39"},
{"id":"a018f58c-e6c4-40b7-8015-56da6fe8dac7","definition":"cras non velit nec","term":"full-range","card_set_id":"627eda30-5367-4f0e-b049-721ab2baed1d","created_at":"2020-04-05 08:58:43","updated_at":"2020-04-05 08:58:43"},
{"id":"653d4a42-d6dc-40c8-bffc-2c430612afb1","definition":"diam id ornare imperdiet sapien","term":"moratorium","card_set_id":"627eda30-5367-4f0e-b049-721ab2baed1d","created_at":"2020-04-13 00:51:19","updated_at":"2020-04-13 00:51:19"},
{"id":"6df37d8f-20ab-4083-be1c-279388374727","definition":"rutrum at lorem integer tincidunt ante vel ipsum praesent blandit","term":"client-driven","card_set_id":"60d916df-e6c4-4892-9e0d-8f63151ac7b6","created_at":"2020-04-05 16:25:31","updated_at":"2020-04-05 16:25:31"},
{"id":"c8d8a3df-c6c5-4c65-bb88-de7a1ad542fd","definition":"tempus semper est quam pharetra","term":"optimal","card_set_id":"60d916df-e6c4-4892-9e0d-8f63151ac7b6","created_at":"2020-04-18 07:21:12","updated_at":"2020-04-18 07:21:12"},
{"id":"8c7acebc-5c64-4761-a4b0-b46752281c1e","definition":"nascetur ridiculus mus etiam vel","term":"stable","card_set_id":"d86643cb-b3bc-4ba5-b697-289ecba064cc","created_at":"2020-04-10 05:32:55","updated_at":"2020-04-10 05:32:55"},
{"id":"57723147-ec7c-47c8-a335-d47aeb61f295","definition":"et ultrices posuere","term":"intangible","card_set_id":"d86643cb-b3bc-4ba5-b697-289ecba064cc","created_at":"2020-04-16 19:55:53","updated_at":"2020-04-16 19:55:53"},
{"id":"37fcf4ff-3deb-4a91-9a3d-3ed230ab13ff","definition":"vel augue vestibulum","term":"impactful","card_set_id":"0ee41e0f-1cd8-4fe8-806f-d826aa28edfe","created_at":"2020-04-04 16:10:24","updated_at":"2020-04-04 16:10:24"},
{"id":"2b8ed06d-68ed-48ab-be05-ddbb7574072b","definition":"nibh fusce lacus purus aliquet at feugiat non pretium","term":"Up-sized","card_set_id":"0ee41e0f-1cd8-4fe8-806f-d826aa28edfe","created_at":"2020-04-17 02:10:24","updated_at":"2020-04-17 02:10:24"},
{"id":"93963f05-c741-4749-ad37-5b10bb9dd5e0","definition":"nulla tellus in sagittis dui vel nisl","term":"Cloned","card_set_id":"7676f776-5fa9-4eda-9829-b486605cd7a5","created_at":"2020-04-16 06:53:12","updated_at":"2020-04-16 06:53:12"},
{"id":"447d8895-d64c-4f10-a63d-879d4950b17a","definition":"diam in magna bibendum imperdiet nullam orci","term":"impactful","card_set_id":"7676f776-5fa9-4eda-9829-b486605cd7a5","created_at":"2020-04-05 09:48:45","updated_at":"2020-04-05 09:48:45"},
{"id":"1dadcfaf-b22a-4dbd-bdd9-f8d6791c8f30","definition":"tristique in","term":"customer loyalty","card_set_id":"79281929-fda8-407c-a8ef-4e53746c8cb0","created_at":"2020-04-07 02:00:53","updated_at":"2020-04-07 02:00:53"},
{"id":"df90f35a-2421-4b5b-84b1-96858216406d","definition":"lorem integer tincidunt ante vel","term":"time-frame","card_set_id":"79281929-fda8-407c-a8ef-4e53746c8cb0","created_at":"2020-04-17 15:20:45","updated_at":"2020-04-17 15:20:45"},
{"id":"cc92396d-34c1-4a5c-8a9c-fdb951b812bd","definition":"eu massa donec dapibus duis at","term":"value-added","card_set_id":"831f06a5-a4be-4951-8b5c-d5ea6696a1d0","created_at":"2020-04-06 14:39:44","updated_at":"2020-04-06 14:39:44"},
{"id":"92b405bf-4530-4662-aee1-b5c705aad550","definition":"morbi","term":"help-desk","card_set_id":"831f06a5-a4be-4951-8b5c-d5ea6696a1d0","created_at":"2020-04-01 16:00:07","updated_at":"2020-04-01 16:00:07"},
{"id":"b102088f-2d21-401c-abdd-eb4701382a3a","definition":"mus vivamus","term":"orchestration","card_set_id":"831f06a5-a4be-4951-8b5c-d5ea6696a1d0","created_at":"2020-04-02 12:47:13","updated_at":"2020-04-02 12:47:13"},
{"id":"d54fd7b1-d64e-4890-90af-334d2d794c91","definition":"eleifend pede libero quis orci nullam molestie","term":"artificial intelligence","card_set_id":"db3424b5-dcd5-4da4-a799-91ce4dcb0d48","created_at":"2020-04-08 22:39:45","updated_at":"2020-04-08 22:39:45"},
{"id":"73280249-9c45-436d-baf2-76bbb2313339","definition":"mauris eget massa tempor convallis nulla neque libero convallis","term":"Graphical User Interface","card_set_id":"db3424b5-dcd5-4da4-a799-91ce4dcb0d48","created_at":"2020-04-19 18:34:29","updated_at":"2020-04-19 18:34:29"},
{"id":"9d1c8f37-b928-423c-838a-82687a888114","definition":"at ipsum ac tellus semper interdum mauris","term":"interactive","card_set_id":"db3424b5-dcd5-4da4-a799-91ce4dcb0d48","created_at":"2020-04-02 22:07:23","updated_at":"2020-04-02 22:07:23"},
{"id":"a73fb389-8636-41df-b0c1-d70248cd5f0d","definition":"non quam nec dui luctus rutrum nulla tellus in sagittis","term":"attitude","card_set_id":"18be9815-a725-4d75-af1d-b8ba9dc0af03","created_at":"2020-04-05 17:02:53","updated_at":"2020-04-05 17:02:53"},
{"id":"6f3b9d7a-195c-42ba-9b05-cfb176ba09fb","definition":"curabitur at","term":"real-time","card_set_id":"18be9815-a725-4d75-af1d-b8ba9dc0af03","created_at":"2020-04-16 21:36:33","updated_at":"2020-04-16 21:36:33"},
{"id":"aa8a693f-e896-4cbf-947f-3399ef386fc5","definition":"curae duis faucibus accumsan odio curabitur convallis duis consequat","term":"Grass-roots","card_set_id":"18be9815-a725-4d75-af1d-b8ba9dc0af03","created_at":"2020-04-02 17:51:00","updated_at":"2020-04-02 17:51:00"},
{"id":"63102e7d-74fb-4a37-8421-2d428fea6001","definition":"facilisi cras non","term":"composite","card_set_id":"bcbfe16b-1114-4488-9cd0-28c6c8acea68","created_at":"2020-04-01 07:44:29","updated_at":"2020-04-01 07:44:29"},
{"id":"6ca4f515-be36-43d8-ba5a-8bb38fde47f1","definition":"platea dictumst","term":"infrastructure","card_set_id":"bcbfe16b-1114-4488-9cd0-28c6c8acea68","created_at":"2020-04-09 06:20:50","updated_at":"2020-04-09 06:20:50"},
{"id":"def8c0da-09c6-4a02-995e-6789723e96be","definition":"pharetra","term":"discrete","card_set_id":"bcbfe16b-1114-4488-9cd0-28c6c8acea68","created_at":"2020-04-17 16:48:27","updated_at":"2020-04-17 16:48:27"},
{"id":"39218ef7-71a5-47e8-9f71-db79148ff88e","definition":"odio curabitur convallis duis consequat dui nec","term":"reciprocal","card_set_id":"bcbfe16b-1114-4488-9cd0-28c6c8acea68","created_at":"2020-04-10 20:01:59","updated_at":"2020-04-10 20:01:59"},
{"id":"adb57cca-cb35-4569-95b7-a713db567bcd","definition":"nullam","term":"empowering","card_set_id":"bcbfe16b-1114-4488-9cd0-28c6c8acea68","created_at":"2020-04-12 17:29:52","updated_at":"2020-04-12 17:29:52"},
{"id":"30707922-2bad-49a5-9088-b44c0952ad59","definition":"posuere cubilia curae","term":"Multi-layered","card_set_id":"bcbfe16b-1114-4488-9cd0-28c6c8acea68","created_at":"2020-04-13 14:01:20","updated_at":"2020-04-13 14:01:20"},
{"id":"be9dc094-b0a9-4e86-8410-6c7b3ca5063b","definition":"semper porta volutpat quam pede lobortis ligula sit amet eleifend","term":"middleware","card_set_id":"bcbfe16b-1114-4488-9cd0-28c6c8acea68","created_at":"2020-04-04 10:03:54","updated_at":"2020-04-04 10:03:54"},
{"id":"5e8e6cb4-c73e-482a-91b8-567e05ad8f38","definition":"quisque arcu libero","term":"complexity","card_set_id":"bcbfe16b-1114-4488-9cd0-28c6c8acea68","created_at":"2020-04-06 01:45:58","updated_at":"2020-04-06 01:45:58"},
{"id":"e3349feb-a0bb-4b3e-abe7-f96b72171ae1","definition":"aliquet maecenas leo odio","term":"leverage","card_set_id":"56f0e544-7747-4c60-bac3-fa3c7567a246","created_at":"2020-04-02 21:41:32","updated_at":"2020-04-02 21:41:32"},
{"id":"e0c50f7f-b31d-4723-b3b2-01f139391f8a","definition":"enim in tempor turpis nec euismod scelerisque quam turpis adipiscing","term":"regional","card_set_id":"56f0e544-7747-4c60-bac3-fa3c7567a246","created_at":"2020-04-03 23:25:57","updated_at":"2020-04-03 23:25:57"},
{"id":"1b177f42-3454-4ff2-a4ad-7ba007dd8007","definition":"nam","term":"heuristic","card_set_id":"56f0e544-7747-4c60-bac3-fa3c7567a246","created_at":"2020-04-20 18:26:19","updated_at":"2020-04-20 18:26:19"},
{"id":"cf0b5a2e-ef1e-41a3-9eca-6070cc35a065","definition":"nibh in lectus pellentesque at nulla suspendisse potenti","term":"installation","card_set_id":"56f0e544-7747-4c60-bac3-fa3c7567a246","created_at":"2020-04-15 20:04:32","updated_at":"2020-04-15 20:04:32"},
{"id":"fa5320e0-3bbc-4049-8ca8-2bd4a828fafd","definition":"in hac habitasse platea dictumst morbi vestibulum velit id","term":"pricing structure","card_set_id":"56f0e544-7747-4c60-bac3-fa3c7567a246","created_at":"2020-04-07 19:10:57","updated_at":"2020-04-07 19:10:57"},
{"id":"040fae69-8fe6-478a-bdec-ab27f0bd625f","definition":"sagittis dui vel nisl duis ac","term":"5th generation","card_set_id":"56f0e544-7747-4c60-bac3-fa3c7567a246","created_at":"2020-04-03 06:32:33","updated_at":"2020-04-03 06:32:33"},
{"id":"104fcc2c-51f2-4672-98a1-68bc40a8ca2d","definition":"etiam justo etiam pretium iaculis justo in hac habitasse platea","term":"Reduced","card_set_id":"56f0e544-7747-4c60-bac3-fa3c7567a246","created_at":"2020-04-18 02:43:55","updated_at":"2020-04-18 02:43:55"},
{"id":"2f30e035-9d5e-4b07-97b9-8d6cc19b4d0c","definition":"ligula suspendisse ornare consequat lectus in est risus auctor sed","term":"project","card_set_id":"56f0e544-7747-4c60-bac3-fa3c7567a246","created_at":"2020-04-13 02:04:50","updated_at":"2020-04-13 02:04:50"},
{"id":"04d875eb-b651-4dd3-9ff1-c6ac97a65b65","definition":"mi integer ac neque duis bibendum morbi non","term":"explicit","card_set_id":"c4ab60ec-f55b-4fe3-9b42-4e0682a76384","created_at":"2020-04-15 18:59:25","updated_at":"2020-04-15 18:59:25"},
{"id":"b3822968-6ed5-4d89-9784-42c23cc0bcfe","definition":"donec odio justo sollicitudin ut suscipit a feugiat et eros","term":"Synchronised","card_set_id":"c4ab60ec-f55b-4fe3-9b42-4e0682a76384","created_at":"2020-04-19 09:47:09","updated_at":"2020-04-19 09:47:09"},
{"id":"17627b4d-8808-4d8a-a72d-1d923b308cd6","definition":"sit amet consectetuer adipiscing elit proin","term":"local area network","card_set_id":"c4ab60ec-f55b-4fe3-9b42-4e0682a76384","created_at":"2020-04-10 22:51:15","updated_at":"2020-04-10 22:51:15"},
{"id":"9aa655b9-0ce7-453d-9f9b-37ec2611101b","definition":"fringilla rhoncus mauris enim leo rhoncus sed vestibulum sit","term":"Vision-oriented","card_set_id":"c4ab60ec-f55b-4fe3-9b42-4e0682a76384","created_at":"2020-04-10 01:38:35","updated_at":"2020-04-10 01:38:35"},
{"id":"19d6f660-77f2-47b0-bb8d-9fb0177c3b91","definition":"mus vivamus vestibulum sagittis sapien cum sociis natoque penatibus et","term":"Profit-focused","card_set_id":"c4ab60ec-f55b-4fe3-9b42-4e0682a76384","created_at":"2020-04-02 12:34:44","updated_at":"2020-04-02 12:34:44"},
{"id":"4888b9b7-a952-4243-9eef-adabfddd2148","definition":"commodo placerat praesent blandit nam","term":"application","card_set_id":"1c0deab0-31b5-4975-bfc7-95822d7b707e","created_at":"2020-04-16 20:58:07","updated_at":"2020-04-16 20:58:07"},
{"id":"c58e7e2e-035d-4ce8-bac8-24ac193592b7","definition":"tincidunt eu felis fusce posuere felis","term":"system-worthy","card_set_id":"1c0deab0-31b5-4975-bfc7-95822d7b707e","created_at":"2020-04-04 23:39:21","updated_at":"2020-04-04 23:39:21"},
{"id":"ad671986-0935-482a-a6cf-dea45d6867b4","definition":"sollicitudin mi sit amet lobortis sapien sapien non mi","term":"Visionary","card_set_id":"1c0deab0-31b5-4975-bfc7-95822d7b707e","created_at":"2020-04-10 05:47:11","updated_at":"2020-04-10 05:47:11"},
{"id":"af5a3ebf-4b8c-4049-ab2d-4191e3090568","definition":"bibendum morbi non quam nec dui luctus rutrum","term":"system engine","card_set_id":"ed923f76-0922-4fc7-a918-3f14eed8fe33","created_at":"2020-04-11 17:26:29","updated_at":"2020-04-11 17:26:29"},
{"id":"b0783098-3b7f-47d2-9fa0-5566afa94919","definition":"nonummy maecenas tincidunt lacus","term":"neural-net","card_set_id":"ed923f76-0922-4fc7-a918-3f14eed8fe33","created_at":"2020-04-17 06:16:38","updated_at":"2020-04-17 06:16:38"},
{"id":"aca21f01-bb24-4e5d-ba0c-6c37e6eea5f8","definition":"libero nullam sit","term":"secured line","card_set_id":"ed923f76-0922-4fc7-a918-3f14eed8fe33","created_at":"2020-04-09 04:09:20","updated_at":"2020-04-09 04:09:20"},
{"id":"4910d71c-975e-407a-9926-3bb21a34675d","definition":"faucibus accumsan odio curabitur","term":"Profit-focused","card_set_id":"2bcc9811-83d4-4331-abe4-d0f5375ff388","created_at":"2020-04-18 07:34:15","updated_at":"2020-04-18 07:34:15"},
{"id":"d3172703-a845-4ae1-bf07-e28071932976","definition":"amet erat","term":"capability","card_set_id":"2bcc9811-83d4-4331-abe4-d0f5375ff388","created_at":"2020-04-12 03:52:10","updated_at":"2020-04-12 03:52:10"},
{"id":"98ba7249-ba72-4cda-ba5e-851ac31a8c57","definition":"dapibus dolor vel est donec","term":"encryption","card_set_id":"2bcc9811-83d4-4331-abe4-d0f5375ff388","created_at":"2020-04-07 21:50:46","updated_at":"2020-04-07 21:50:46"},
{"id":"da374947-0c3d-46c2-8722-a82c1b8e90ce","definition":"pulvinar nulla pede ullamcorper augue a suscipit","term":"forecast","card_set_id":"e9e646dd-2486-412d-9169-1adbe34b0342","created_at":"2020-04-17 21:55:08","updated_at":"2020-04-17 21:55:08"},
{"id":"40cded48-8266-42d5-9f52-6fd9acbae39c","definition":"nullam porttitor lacus at turpis donec posuere","term":"Streamlined","card_set_id":"e9e646dd-2486-412d-9169-1adbe34b0342","created_at":"2020-04-15 15:29:19","updated_at":"2020-04-15 15:29:19"},
{"id":"ae6413a3-3123-4e83-a615-29ec91e38191","definition":"ac nulla sed vel enim sit amet","term":"methodology","card_set_id":"73e4c87d-8e7f-422a-92e5-3b6346777729","created_at":"2020-04-01 21:24:43","updated_at":"2020-04-01 21:24:43"},
{"id":"2a1b0e60-9a8a-4880-bd92-d6cc18763b44","definition":"eu massa donec dapibus duis at velit eu","term":"Secured","card_set_id":"73e4c87d-8e7f-422a-92e5-3b6346777729","created_at":"2020-04-06 08:40:14","updated_at":"2020-04-06 08:40:14"},
{"id":"d17724f6-7799-47a8-980e-b5f7f50a0134","definition":"lobortis ligula sit amet eleifend pede libero quis orci nullam","term":"Universal","card_set_id":"57ea6da0-ee04-469e-80b3-83c8355722f3","created_at":"2020-04-18 20:02:16","updated_at":"2020-04-18 20:02:16"},
{"id":"b2fce1b0-e8a2-49a2-b0cc-4c22936204d9","definition":"id lobortis convallis tortor risus","term":"Graphic Interface","card_set_id":"57ea6da0-ee04-469e-80b3-83c8355722f3","created_at":"2020-04-13 10:58:25","updated_at":"2020-04-13 10:58:25"},
{"id":"36e1e928-fcd6-4ecc-a6f8-1af501a765eb","definition":"aliquet pulvinar sed","term":"success","card_set_id":"6333a787-4ce9-48eb-9096-07f1c052feb0","created_at":"2020-04-13 10:05:22","updated_at":"2020-04-13 10:05:22"},
{"id":"3ecc8835-1da5-418e-9b53-3a9648e6918d","definition":"nulla integer pede justo lacinia","term":"paradigm","card_set_id":"6333a787-4ce9-48eb-9096-07f1c052feb0","created_at":"2020-04-03 07:27:36","updated_at":"2020-04-03 07:27:36"},
{"id":"07766442-d3b0-4bc7-8526-46017dfb6240","definition":"accumsan odio curabitur convallis duis consequat","term":"Advanced","card_set_id":"373fc810-08ec-4c40-a811-fad03761c7df","created_at":"2020-04-18 07:02:50","updated_at":"2020-04-18 07:02:50"},
{"id":"bde436e6-e334-4991-9d09-144e475213bc","definition":"amet diam in magna bibendum imperdiet nullam orci pede venenatis","term":"knowledge base","card_set_id":"373fc810-08ec-4c40-a811-fad03761c7df","created_at":"2020-04-01 11:25:50","updated_at":"2020-04-01 11:25:50"},
{"id":"af84d410-f874-47d6-8ade-145a6eab38a8","definition":"vestibulum proin eu mi nulla","term":"system-worthy","card_set_id":"6a83f689-8128-4cc2-80a4-e93eb90b067e","created_at":"2020-04-07 09:45:56","updated_at":"2020-04-07 09:45:56"},
{"id":"2ade2dec-0f3d-4da0-b437-0edc4881dac7","definition":"habitasse platea dictumst etiam faucibus cursus urna ut tellus","term":"solution","card_set_id":"6a83f689-8128-4cc2-80a4-e93eb90b067e","created_at":"2020-04-10 08:08:37","updated_at":"2020-04-10 08:08:37"},
{"id":"7aa10780-96bc-45b3-ab0b-3165f1c83015","definition":"aliquam non","term":"web-enabled","card_set_id":"e12b56c7-dd2e-46cd-9f29-87f4f716a0ef","created_at":"2020-04-11 15:20:25","updated_at":"2020-04-11 15:20:25"},
{"id":"c00e075d-b4c1-4eeb-91e5-cdcdf78db6d3","definition":"ante","term":"Virtual","card_set_id":"e12b56c7-dd2e-46cd-9f29-87f4f716a0ef","created_at":"2020-04-11 19:18:06","updated_at":"2020-04-11 19:18:06"},
{"id":"12a685c7-f019-4da5-885e-0be533185733","definition":"et ultrices posuere cubilia curae duis","term":"Managed","card_set_id":"e12b56c7-dd2e-46cd-9f29-87f4f716a0ef","created_at":"2020-04-01 12:48:33","updated_at":"2020-04-01 12:48:33"},
{"id":"4ac9a548-73ab-4319-9d93-73260d53ac0a","definition":"et commodo vulputate justo in blandit ultrices enim lorem","term":"circuit","card_set_id":"e12b56c7-dd2e-46cd-9f29-87f4f716a0ef","created_at":"2020-04-16 01:02:59","updated_at":"2020-04-16 01:02:59"},
{"id":"dd54fe55-cc6f-4749-99ef-364467ad1d21","definition":"orci luctus et ultrices posuere cubilia","term":"Front-line","card_set_id":"f8e1e195-9a69-464f-98d2-f8aa777059aa","created_at":"2020-04-09 14:19:40","updated_at":"2020-04-09 14:19:40"},
{"id":"166f2560-c736-4093-81b4-6654cea55ffe","definition":"felis fusce","term":"monitoring","card_set_id":"f8e1e195-9a69-464f-98d2-f8aa777059aa","created_at":"2020-04-13 08:43:30","updated_at":"2020-04-13 08:43:30"},
{"id":"85c56888-f819-407e-904b-beebb3b8f435","definition":"nulla ac","term":"Adaptive","card_set_id":"48b35373-ab0f-4629-801f-d971ecf6bdde","created_at":"2020-04-17 22:47:28","updated_at":"2020-04-17 22:47:28"},
{"id":"47e2e0a7-e53c-4033-9934-c102c4fec73b","definition":"aenean sit amet justo","term":"monitoring","card_set_id":"48b35373-ab0f-4629-801f-d971ecf6bdde","created_at":"2020-04-06 13:30:44","updated_at":"2020-04-06 13:30:44"},
{"id":"d527edff-2985-4849-8636-eb9fb8a820c3","definition":"quis lectus","term":"Fundamental","card_set_id":"70b0ef2e-4ef7-4ac6-93df-08b0292d26f1","created_at":"2020-04-08 22:09:34","updated_at":"2020-04-08 22:09:34"},
{"id":"6dfc5030-a125-4b76-9041-1758f8e607e1","definition":"lorem vitae mattis nibh ligula nec sem duis","term":"Public-key","card_set_id":"70b0ef2e-4ef7-4ac6-93df-08b0292d26f1","created_at":"2020-04-03 10:51:10","updated_at":"2020-04-03 10:51:10"},
{"id":"f1111902-7b48-4ace-9d8a-46c4935f2f5b","definition":"sed sagittis nam congue","term":"solution","card_set_id":"829cc8b7-1de1-4544-b5b5-939afac36f69","created_at":"2020-04-14 06:19:33","updated_at":"2020-04-14 06:19:33"},
{"id":"01f36da1-8c96-4f2a-a9e4-d9bb83286456","definition":"non mattis pulvinar nulla pede ullamcorper","term":"Re-engineered","card_set_id":"829cc8b7-1de1-4544-b5b5-939afac36f69","created_at":"2020-04-03 06:24:55","updated_at":"2020-04-03 06:24:55"},
{"id":"95c0408e-f109-43b8-9fdd-191d73664be1","definition":"dui","term":"actuating","card_set_id":"829cc8b7-1de1-4544-b5b5-939afac36f69","created_at":"2020-04-19 00:29:10","updated_at":"2020-04-19 00:29:10"},
{"id":"8f5750e9-51ff-4fad-9d4b-ec17a312f228","definition":"nascetur ridiculus mus vivamus vestibulum sagittis sapien cum sociis","term":"leverage","card_set_id":"829cc8b7-1de1-4544-b5b5-939afac36f69","created_at":"2020-04-11 02:20:10","updated_at":"2020-04-11 02:20:10"},
{"id":"4b5ac4b3-9652-4e5c-a8d1-dd670c88bd2e","definition":"eros elementum","term":"Ergonomic","card_set_id":"9c0a900d-a3c3-46cc-bc96-3118f82e723b","created_at":"2020-04-12 10:29:56","updated_at":"2020-04-12 10:29:56"},
{"id":"3cf705a6-2d0f-4657-b133-680761b13892","definition":"dapibus dolor vel est donec odio justo sollicitudin ut suscipit","term":"algorithm","card_set_id":"9c0a900d-a3c3-46cc-bc96-3118f82e723b","created_at":"2020-04-15 13:40:18","updated_at":"2020-04-15 13:40:18"},
{"id":"c8e7def0-70d5-4838-95d6-0423896cf98a","definition":"placerat","term":"Vision-oriented","card_set_id":"0a7db1b3-8a8b-4fa6-8fc0-123c88c93c5a","created_at":"2020-04-04 21:44:14","updated_at":"2020-04-04 21:44:14"},
{"id":"8f585dca-1c25-49c2-ac6b-19047a082677","definition":"rhoncus aliquet pulvinar sed nisl nunc rhoncus","term":"well-modulated","card_set_id":"0a7db1b3-8a8b-4fa6-8fc0-123c88c93c5a","created_at":"2020-04-17 19:02:55","updated_at":"2020-04-17 19:02:55"},
{"id":"d0467ad7-e186-4094-9057-fa6d4f99553a","definition":"mauris ullamcorper purus sit","term":"impactful","card_set_id":"ff8a9f5e-100e-4751-81ab-7344c18ad029","created_at":"2020-04-11 15:59:40","updated_at":"2020-04-11 15:59:40"},
{"id":"8d3c1e8d-e384-4c53-bbb7-1260fe1bf389","definition":"curabitur","term":"Down-sized","card_set_id":"ff8a9f5e-100e-4751-81ab-7344c18ad029","created_at":"2020-04-15 13:54:14","updated_at":"2020-04-15 13:54:14"},
{"id":"45c70a8d-377b-4bbd-840c-7a66ec6eb71a","definition":"eleifend donec ut dolor morbi","term":"Advanced","card_set_id":"8623d8e7-3b22-42fc-8456-075a0a215477","created_at":"2020-04-17 04:28:01","updated_at":"2020-04-17 04:28:01"},
{"id":"5ebcb212-71a1-480d-80d9-2da8c4c3bb9c","definition":"lacinia aenean sit amet","term":"clear-thinking","card_set_id":"8623d8e7-3b22-42fc-8456-075a0a215477","created_at":"2020-04-09 11:04:05","updated_at":"2020-04-09 11:04:05"},
{"id":"c37504c0-9af3-4fe2-9479-49cc9497218c","definition":"dapibus dolor vel est donec odio justo sollicitudin ut suscipit","term":"regional","card_set_id":"02a9053d-0097-4364-a9a9-f964a605d788","created_at":"2020-04-08 17:34:22","updated_at":"2020-04-08 17:34:22"},
{"id":"ce30213b-5a2a-4acf-866e-7da89f6f4cc3","definition":"vulputate nonummy","term":"high-level","card_set_id":"02a9053d-0097-4364-a9a9-f964a605d788","created_at":"2020-04-02 12:57:40","updated_at":"2020-04-02 12:57:40"},
{"id":"7a6af6c7-fbd8-43b0-bf30-31ae6a79b864","definition":"eu magna vulputate luctus cum sociis natoque penatibus","term":"transitional","card_set_id":"fbe1d3cf-f8c9-40a8-b225-4d8081b053ae","created_at":"2020-04-02 13:24:45","updated_at":"2020-04-02 13:24:45"},
{"id":"6cfe235b-680b-470c-9343-4d2ee6ab80e6","definition":"lacus at velit vivamus vel nulla eget eros elementum","term":"User-friendly","card_set_id":"fbe1d3cf-f8c9-40a8-b225-4d8081b053ae","created_at":"2020-04-12 13:14:44","updated_at":"2020-04-12 13:14:44"},
{"id":"76992316-bf01-4b67-9863-93ed48fdc2fb","definition":"curabitur in libero ut massa volutpat convallis","term":"mobile","card_set_id":"d53f714a-78ff-45bb-98cd-2258998caa30","created_at":"2020-04-18 12:29:58","updated_at":"2020-04-18 12:29:58"},
{"id":"ad02cc64-bad3-4f9d-a8f3-e5e26c704c97","definition":"feugiat non pretium quis lectus suspendisse potenti in","term":"analyzer","card_set_id":"d53f714a-78ff-45bb-98cd-2258998caa30","created_at":"2020-04-02 08:11:58","updated_at":"2020-04-02 08:11:58"},
{"id":"53d11987-ca8e-468e-b39d-2322c758f37b","definition":"libero rutrum ac lobortis vel dapibus at","term":"project","card_set_id":"d53f714a-78ff-45bb-98cd-2258998caa30","created_at":"2020-04-01 16:13:55","updated_at":"2020-04-01 16:13:55"},
{"id":"c70a909f-56a6-4ed0-89e9-c9dff53bfa7c","definition":"lorem ipsum dolor sit amet consectetuer adipiscing","term":"leading edge","card_set_id":"d53f714a-78ff-45bb-98cd-2258998caa30","created_at":"2020-04-08 22:19:01","updated_at":"2020-04-08 22:19:01"},
{"id":"ab50b549-1193-4be9-bd7d-d9289ab79e59","definition":"eget eros elementum pellentesque quisque porta","term":"bifurcated","card_set_id":"174825d0-adde-42c8-b980-55e008cd7382","created_at":"2020-04-01 07:58:21","updated_at":"2020-04-01 07:58:21"},
{"id":"a5603528-575a-492e-862b-edcbba43cd82","definition":"vulputate justo in blandit","term":"matrices","card_set_id":"174825d0-adde-42c8-b980-55e008cd7382","created_at":"2020-04-17 10:13:03","updated_at":"2020-04-17 10:13:03"},
{"id":"51c240c4-cd16-4c47-800e-efcab7325f4e","definition":"in hac habitasse","term":"Universal","card_set_id":"174825d0-adde-42c8-b980-55e008cd7382","created_at":"2020-04-09 01:54:49","updated_at":"2020-04-09 01:54:49"},
{"id":"e00301ec-b80e-42bd-94f8-c76f40806a87","definition":"venenatis turpis enim blandit","term":"model","card_set_id":"287b9db7-a6ea-4495-9308-c166371b6fab","created_at":"2020-04-17 20:10:54","updated_at":"2020-04-17 20:10:54"},
{"id":"36091978-5957-41c8-bc18-c43e2c97ace6","definition":"sapien dignissim vestibulum vestibulum ante ipsum primis in faucibus orci","term":"matrices","card_set_id":"287b9db7-a6ea-4495-9308-c166371b6fab","created_at":"2020-04-17 07:15:37","updated_at":"2020-04-17 07:15:37"},
{"id":"a8c88044-a0e2-42e9-88ff-d037bdbbdf47","definition":"faucibus orci","term":"Assimilated","card_set_id":"a6e330bb-efe6-48dc-865a-cbed18699cce","created_at":"2020-04-06 05:30:38","updated_at":"2020-04-06 05:30:38"},
{"id":"e095b465-4374-4ec5-9aa3-c802c4273249","definition":"suspendisse potenti in eleifend","term":"Pre-emptive","card_set_id":"a6e330bb-efe6-48dc-865a-cbed18699cce","created_at":"2020-04-10 01:30:30","updated_at":"2020-04-10 01:30:30"},
{"id":"e9c2f982-8c26-4565-88da-c48919354e7d","definition":"fringilla rhoncus mauris enim leo rhoncus sed vestibulum sit amet","term":"Proactive","card_set_id":"a6e330bb-efe6-48dc-865a-cbed18699cce","created_at":"2020-04-02 14:01:14","updated_at":"2020-04-02 14:01:14"},
{"id":"672af9e9-6192-499f-946e-a862ce9dc7c9","definition":"eros vestibulum","term":"Ameliorated","card_set_id":"a6e330bb-efe6-48dc-865a-cbed18699cce","created_at":"2020-04-13 11:35:26","updated_at":"2020-04-13 11:35:26"},
{"id":"d29fd8d9-6ddf-4a40-ac1f-cf62d7895914","definition":"amet","term":"Polarised","card_set_id":"af989306-c727-4f62-aff1-7f7d19b01a9d","created_at":"2020-04-02 11:38:54","updated_at":"2020-04-02 11:38:54"},
{"id":"ccbe0786-f9f5-428f-b8b0-3e569558ff65","definition":"eget rutrum at lorem integer tincidunt","term":"holistic","card_set_id":"af989306-c727-4f62-aff1-7f7d19b01a9d","created_at":"2020-04-12 18:48:57","updated_at":"2020-04-12 18:48:57"},
{"id":"df4d98bc-eab2-48e2-ae92-29488c8d6a0e","definition":"consequat","term":"Polarised","card_set_id":"79d07d80-f922-4fa3-874a-78e309e05bfa","created_at":"2020-04-08 05:12:38","updated_at":"2020-04-08 05:12:38"},
{"id":"1c75871e-695d-4e19-b81d-fd367fb16cb8","definition":"eget","term":"intranet","card_set_id":"79d07d80-f922-4fa3-874a-78e309e05bfa","created_at":"2020-04-16 09:47:31","updated_at":"2020-04-16 09:47:31"},
{"id":"6ef44d32-3392-4545-81c1-d5f86ee0fcb7","definition":"felis sed interdum venenatis turpis enim blandit mi in","term":"forecast","card_set_id":"79d07d80-f922-4fa3-874a-78e309e05bfa","created_at":"2020-04-04 02:12:57","updated_at":"2020-04-04 02:12:57"},
{"id":"fac49cb0-d537-4019-bb2a-d791bf245a7d","definition":"vel accumsan tellus nisi eu","term":"disintermediate","card_set_id":"79d07d80-f922-4fa3-874a-78e309e05bfa","created_at":"2020-04-09 17:55:09","updated_at":"2020-04-09 17:55:09"},
{"id":"87069bbb-9e1f-4ce4-9c3e-90f836659558","definition":"fermentum justo nec condimentum neque sapien placerat ante nulla justo","term":"Seamless","card_set_id":"0261f77d-b5e0-4f7b-a681-184b26454c62","created_at":"2020-04-08 14:30:11","updated_at":"2020-04-08 14:30:11"},
{"id":"3357c985-d95f-4489-a1e3-7594f6d6bc02","definition":"sit amet erat nulla tempus vivamus in felis","term":"emulation","card_set_id":"0261f77d-b5e0-4f7b-a681-184b26454c62","created_at":"2020-04-05 18:18:45","updated_at":"2020-04-05 18:18:45"},
{"id":"27bcf2a5-42d0-4a22-b365-f40294033eb6","definition":"auctor sed tristique","term":"Upgradable","card_set_id":"9f78503c-8da1-48f2-a5f7-095a1573e874","created_at":"2020-04-12 04:31:48","updated_at":"2020-04-12 04:31:48"},
{"id":"d2548f84-9f54-457a-8691-f4cc07363379","definition":"mi integer ac neque duis","term":"mission-critical","card_set_id":"9f78503c-8da1-48f2-a5f7-095a1573e874","created_at":"2020-04-09 12:06:50","updated_at":"2020-04-09 12:06:50"},
{"id":"9e7cd463-da09-41f7-bb99-54ef0fcbc582","definition":"eget rutrum at lorem integer","term":"Realigned","card_set_id":"9f78503c-8da1-48f2-a5f7-095a1573e874","created_at":"2020-04-17 23:40:02","updated_at":"2020-04-17 23:40:02"},
{"id":"96999df2-a212-4a77-883c-fe5d90721137","definition":"mauris enim leo","term":"disintermediate","card_set_id":"af81d655-f30a-478a-bd02-df43b4285cfb","created_at":"2020-04-10 21:36:27","updated_at":"2020-04-10 21:36:27"},
{"id":"07e8af76-ee5e-41c1-82a2-d15b5fe323d6","definition":"sem duis aliquam convallis nunc proin at turpis a","term":"capability","card_set_id":"af81d655-f30a-478a-bd02-df43b4285cfb","created_at":"2020-04-16 12:08:34","updated_at":"2020-04-16 12:08:34"},
{"id":"212af956-e53d-4bdb-a27f-6a4a3babacb3","definition":"non velit nec nisi vulputate nonummy maecenas tincidunt lacus","term":"mobile","card_set_id":"af81d655-f30a-478a-bd02-df43b4285cfb","created_at":"2020-04-05 08:14:37","updated_at":"2020-04-05 08:14:37"},
{"id":"b45361a1-8791-4dcf-b0ec-a2f667b31579","definition":"ante vestibulum ante ipsum","term":"portal","card_set_id":"b625f58d-5a66-45ab-a2b9-be981f922369","created_at":"2020-04-05 09:13:37","updated_at":"2020-04-05 09:13:37"},
{"id":"d82602bf-7b44-445a-9b5b-9756e23b38fa","definition":"in faucibus orci luctus et ultrices posuere cubilia curae donec","term":"model","card_set_id":"b625f58d-5a66-45ab-a2b9-be981f922369","created_at":"2020-04-08 21:53:26","updated_at":"2020-04-08 21:53:26"},
{"id":"0cbb1abb-b658-4fa9-b4a0-563ba31b2b4c","definition":"in hac habitasse platea dictumst etiam faucibus","term":"Devolved","card_set_id":"b625f58d-5a66-45ab-a2b9-be981f922369","created_at":"2020-04-03 15:33:32","updated_at":"2020-04-03 15:33:32"},
{"id":"1e3e1ab5-f0be-4577-9a3e-207877ccfebb","definition":"consequat in consequat ut nulla","term":"Digitized","card_set_id":"10eda98d-9b70-4a96-9b54-c6f6cabe09ad","created_at":"2020-04-19 13:14:31","updated_at":"2020-04-19 13:14:31"},
{"id":"4787c226-ad55-4aa5-9559-374f2a5d218f","definition":"eget massa tempor convallis nulla neque libero","term":"Open-source","card_set_id":"10eda98d-9b70-4a96-9b54-c6f6cabe09ad","created_at":"2020-04-20 11:02:13","updated_at":"2020-04-20 11:02:13"},
{"id":"e39441ab-dd3d-492e-ac47-6f2bd34171b6","definition":"neque duis bibendum morbi non quam nec dui luctus rutrum","term":"Multi-layered","card_set_id":"10eda98d-9b70-4a96-9b54-c6f6cabe09ad","created_at":"2020-04-20 00:13:25","updated_at":"2020-04-20 00:13:25"},
{"id":"ae44a8d2-c9ac-48c8-9cd1-6123c420b46c","definition":"volutpat in congue etiam justo etiam","term":"firmware","card_set_id":"10eda98d-9b70-4a96-9b54-c6f6cabe09ad","created_at":"2020-04-08 08:41:33","updated_at":"2020-04-08 08:41:33"},
{"id":"7202b0b1-88b5-43ac-844c-2001dd70cc91","definition":"at vulputate vitae","term":"Adaptive","card_set_id":"5d7a3c89-c01a-4e59-9524-29b3f7de3b97","created_at":"2020-04-06 01:07:57","updated_at":"2020-04-06 01:07:57"},
{"id":"bf4bebe4-993f-45fa-9852-ea5ffb87575b","definition":"vel accumsan tellus nisi eu orci mauris lacinia sapien","term":"Upgradable","card_set_id":"5d7a3c89-c01a-4e59-9524-29b3f7de3b97","created_at":"2020-04-14 13:57:51","updated_at":"2020-04-14 13:57:51"},
{"id":"d8adc7bb-4e9c-4822-8c41-9e3aba142032","definition":"tempor turpis nec euismod scelerisque quam","term":"projection","card_set_id":"5d7a3c89-c01a-4e59-9524-29b3f7de3b97","created_at":"2020-04-20 02:59:10","updated_at":"2020-04-20 02:59:10"},
{"id":"6d0214ca-c5e2-40ca-bde8-388254b1e471","definition":"tincidunt nulla mollis molestie lorem quisque ut erat curabitur gravida","term":"software","card_set_id":"a202fb4e-673b-446d-8e3d-2922707834b5","created_at":"2020-04-04 16:03:52","updated_at":"2020-04-04 16:03:52"},
{"id":"0eb5b09b-746c-4696-afc4-e5be0ac5da88","definition":"quis orci eget orci vehicula condimentum curabitur in libero","term":"Intuitive","card_set_id":"a202fb4e-673b-446d-8e3d-2922707834b5","created_at":"2020-04-19 07:56:28","updated_at":"2020-04-19 07:56:28"},
{"id":"7e6e3424-5d68-4439-a2e6-4f39eb08984b","definition":"sit amet erat nulla tempus vivamus in felis eu","term":"support","card_set_id":"83765ec0-c9c9-4de2-97ea-d4a94ccf8fae","created_at":"2020-04-01 03:24:32","updated_at":"2020-04-01 03:24:32"},
{"id":"c998b2bc-e9e6-4828-9060-6a431c2a9887","definition":"laoreet ut rhoncus","term":"info-mediaries","card_set_id":"83765ec0-c9c9-4de2-97ea-d4a94ccf8fae","created_at":"2020-04-14 13:20:42","updated_at":"2020-04-14 13:20:42"},
{"id":"19cefacd-336b-4ae3-80c7-3aa703b82580","definition":"odio justo sollicitudin ut suscipit","term":"grid-enabled","card_set_id":"0516b36f-235a-458d-b67c-719c4adf9951","created_at":"2020-04-12 17:37:39","updated_at":"2020-04-12 17:37:39"},
{"id":"71510fae-7543-4e8b-a8f3-21859cec8771","definition":"penatibus et magnis dis parturient montes nascetur ridiculus","term":"scalable","card_set_id":"0516b36f-235a-458d-b67c-719c4adf9951","created_at":"2020-04-17 22:22:16","updated_at":"2020-04-17 22:22:16"},
{"id":"9043ed29-7a53-4572-9cf2-bbabdd824bb5","definition":"est et","term":"Graphic Interface","card_set_id":"0516b36f-235a-458d-b67c-719c4adf9951","created_at":"2020-04-03 06:13:25","updated_at":"2020-04-03 06:13:25"},
{"id":"40f31c5a-b3c2-41af-957c-ca1976bccb06","definition":"est quam pharetra magna ac consequat","term":"methodical","card_set_id":"2ecc81d7-04d4-4deb-aba9-d4f1a3387ddd","created_at":"2020-04-16 11:22:30","updated_at":"2020-04-16 11:22:30"},
{"id":"568bd9e9-fbd5-43d8-b174-2ed33d5d0635","definition":"aliquet pulvinar sed","term":"software","card_set_id":"2ecc81d7-04d4-4deb-aba9-d4f1a3387ddd","created_at":"2020-04-18 12:10:38","updated_at":"2020-04-18 12:10:38"},
{"id":"105fc2b7-9343-44b2-ae47-4654bc452f46","definition":"molestie sed justo pellentesque viverra pede","term":"initiative","card_set_id":"7843bdbb-4809-4dd9-b3c7-52647a6e2cdf","created_at":"2020-04-02 17:25:12","updated_at":"2020-04-02 17:25:12"},
{"id":"48773111-44ed-45cc-bbd8-9d3cc696b6be","definition":"iaculis diam erat fermentum justo nec condimentum neque sapien","term":"Customizable","card_set_id":"7843bdbb-4809-4dd9-b3c7-52647a6e2cdf","created_at":"2020-04-13 15:32:32","updated_at":"2020-04-13 15:32:32"},
{"id":"b5a73179-eee3-44cb-b2c9-807aa4150d3e","definition":"non sodales sed tincidunt eu felis fusce posuere felis","term":"radical","card_set_id":"7843bdbb-4809-4dd9-b3c7-52647a6e2cdf","created_at":"2020-04-11 14:35:12","updated_at":"2020-04-11 14:35:12"},
{"id":"6c25c926-09b1-4faf-b622-b03a70283b70","definition":"ipsum primis","term":"object-oriented","card_set_id":"7843bdbb-4809-4dd9-b3c7-52647a6e2cdf","created_at":"2020-04-02 10:21:00","updated_at":"2020-04-02 10:21:00"},
{"id":"c4db0e16-25c0-4ce9-9c2b-3b7b330e64e6","definition":"dui proin leo odio porttitor id consequat in consequat","term":"discrete","card_set_id":"bd6e4373-30a2-4c1d-a601-acc4dfcfb10e","created_at":"2020-04-18 07:39:44","updated_at":"2020-04-18 07:39:44"},
{"id":"ebb4a12b-ac87-4cd3-82cd-8313c2b05de7","definition":"eleifend quam","term":"24 hour","card_set_id":"bd6e4373-30a2-4c1d-a601-acc4dfcfb10e","created_at":"2020-04-09 02:33:10","updated_at":"2020-04-09 02:33:10"},
{"id":"27cf8023-4b0d-4022-b185-5c998a194b9f","definition":"iaculis congue vivamus metus arcu","term":"project","card_set_id":"bd6e4373-30a2-4c1d-a601-acc4dfcfb10e","created_at":"2020-04-04 09:53:30","updated_at":"2020-04-04 09:53:30"},
{"id":"5eac4da0-215e-488b-9270-f9d847b2dc18","definition":"porttitor","term":"instruction set","card_set_id":"bd6e4373-30a2-4c1d-a601-acc4dfcfb10e","created_at":"2020-04-16 20:03:20","updated_at":"2020-04-16 20:03:20"},
{"id":"882cb57d-b158-4adc-9404-eb2839e422a0","definition":"turpis integer aliquet massa","term":"executive","card_set_id":"ae9f45a8-637c-4b96-a03f-3524c11c199f","created_at":"2020-04-13 00:21:06","updated_at":"2020-04-13 00:21:06"},
{"id":"e7c7c10e-0f13-4f89-8c07-59786561d6e3","definition":"eu nibh quisque id justo sit amet sapien dignissim","term":"Realigned","card_set_id":"ae9f45a8-637c-4b96-a03f-3524c11c199f","created_at":"2020-04-20 02:32:37","updated_at":"2020-04-20 02:32:37"},
{"id":"c037cd90-9f68-4da2-be36-9977cde213f7","definition":"eu mi nulla ac enim in","term":"asynchronous","card_set_id":"ae9f45a8-637c-4b96-a03f-3524c11c199f","created_at":"2020-04-13 21:16:31","updated_at":"2020-04-13 21:16:31"},
{"id":"78a20ece-fcd2-4813-92aa-0dedfce231c8","definition":"laoreet ut rhoncus aliquet pulvinar sed nisl","term":"secured line","card_set_id":"ae9f45a8-637c-4b96-a03f-3524c11c199f","created_at":"2020-04-03 11:15:20","updated_at":"2020-04-03 11:15:20"},
{"id":"20ee3df5-cbd8-475a-9c68-87c52512e76a","definition":"nibh in lectus pellentesque at nulla suspendisse potenti cras","term":"migration","card_set_id":"31d9e8c4-82bb-4c5a-b92d-09f91243eff6","created_at":"2020-04-11 10:10:43","updated_at":"2020-04-11 10:10:43"},
{"id":"d4e60355-21d7-432e-a7a7-905326bb69ba","definition":"nulla eget eros elementum pellentesque quisque porta volutpat","term":"archive","card_set_id":"31d9e8c4-82bb-4c5a-b92d-09f91243eff6","created_at":"2020-04-04 02:15:04","updated_at":"2020-04-04 02:15:04"},
{"id":"6adff451-5f50-4422-b66d-6c4131b133c5","definition":"molestie hendrerit at vulputate vitae nisl aenean lectus pellentesque eget","term":"success","card_set_id":"66c74a92-1701-4438-b260-96a64b56b36f","created_at":"2020-04-15 10:29:04","updated_at":"2020-04-15 10:29:04"},
{"id":"ba6f9b4d-3d78-4a22-9b39-9fbc87fa256e","definition":"phasellus sit amet erat nulla tempus","term":"4th generation","card_set_id":"66c74a92-1701-4438-b260-96a64b56b36f","created_at":"2020-04-07 09:25:44","updated_at":"2020-04-07 09:25:44"},
{"id":"d0e736f4-8dec-47cc-9a1f-89a5b6e041ec","definition":"duis aliquam convallis nunc proin","term":"local area network","card_set_id":"e989487c-4f46-4d2c-9794-c0ca3f46147b","created_at":"2020-04-04 05:51:30","updated_at":"2020-04-04 05:51:30"}

        ]
      )})
    };
        // [
    //       {
    //         "id": "893f6f26-197b-4a81-985b-e445d495682e",
    //         "term": "Simvastatin",
    //         "definition": "Stand-alone heuristic neural-net",
    //         "created_at": "2019-06-08T18:03:44Z",
    //         "updated_at": "2019-01-30T12:16:18Z",
    //         "card_set_id": "f90eb5bf-5514-43a3-9578-a21b7e8659b2"
    //       },
    //       {
    //         "id": "639c2f05-8eed-4ec3-b5bb-e8e877d24e32",
    //         "term": "Dexamethasone",
    //         "definition": "Secured demand-driven synergy",
    //         "created_at": "2019-02-10T22:25:03Z",
    //         "updated_at": "2019-04-04T23:57:30Z",
    //         "card_set_id": "f90eb5bf-5514-43a3-9578-a21b7e8659b2"
    //       },
    //       {
    //         "id": "5a675d35-6c0d-4ddb-8b3e-f4fb2e3740f4",
    //         "term": "furosemide",
    //         "definition": "Programmable discrete service-desk",
    //         "created_at": "2019-09-20T15:15:50Z",
    //         "updated_at": "2019-02-16T09:53:21Z",
    //         "card_set_id": "f90eb5bf-5514-43a3-9578-a21b7e8659b2"
    //       },
    //       {
    //         "id": "6fdf99c5-9968-409d-96b4-524c5793f1b2",
    //         "term": "Isopropyl alcohol",
    //         "definition": "Decentralized actuating instruction set",
    //         "created_at": "2019-09-19T16:53:24Z",
    //         "updated_at": "2019-08-17T04:46:32Z",
    //         "card_set_id": "f90eb5bf-5514-43a3-9578-a21b7e8659b2"
    //       },
    //       {
    //         "id": "0a27299e-07a4-4fcc-bc48-247daf600191",
    //         "term": "Buspirone Hydrochloride",
    //         "definition": "Synergized transitional middleware",
    //         "created_at": "2019-07-21T16:13:41Z",
    //         "updated_at": "2019-06-03T17:52:59Z",
    //         "card_set_id": "f90eb5bf-5514-43a3-9578-a21b7e8659b2"
    //       },
    //       {
    //         "id": "e3dd4100-0bab-4e6a-a76e-d242587463cf",
    //         "term": "ARMODAFINIL",
    //         "definition": "Focused uniform workforce",
    //         "created_at": "2019-11-14T17:54:08Z",
    //         "updated_at": "2019-03-12T03:57:23Z",
    //         "card_set_id": "f90eb5bf-5514-43a3-9578-a21b7e8659b2"
    //       },
    //       {
    //         "id": "698cf13a-a4b9-4bd7-8b40-472de2b439d4",
    //         "term": "Phenelzine Sulfate",
    //         "definition": "Face to face 24/7 model",
    //         "created_at": "2019-02-12T21:21:35Z",
    //         "updated_at": "2019-04-05T12:53:07Z",
    //         "card_set_id": "f90eb5bf-5514-43a3-9578-a21b7e8659b2"
    //       },
    //       {
    //         "id": "d30d3b8a-e748-4c9d-8763-4ae4f3559637",
    //         "term": "benzocaine",
    //         "definition": "Implemented needs-based forecast",
    //         "created_at": "2019-05-23T15:42:11Z",
    //         "updated_at": "2019-11-13T13:07:28Z",
    //         "card_set_id": "f90eb5bf-5514-43a3-9578-a21b7e8659b2"
    //       },
    //       {
    //         "id": "6b2767d3-2be1-4380-8c54-df30ddd2faac",
    //         "term": "Arnica montana, Cactus grandiflorus, Capsicum annuum, Spigelia anthelmia, Digitalis purpurea, Kali phosphoricum, Laurocerasus, Tabacum,",
    //         "definition": "Fully-configurable 3rd generation alliance",
    //         "created_at": "2019-12-20T05:44:34Z",
    //         "updated_at": "2019-06-22T23:26:00Z",
    //         "card_set_id": "f90eb5bf-5514-43a3-9578-a21b7e8659b2"
    //       },
    //       {
    //         "id": "a4ab7b77-15c4-4291-ac50-f06711ff7338",
    //         "term": "Metoclopramide",
    //         "definition": "Extended human-resource hardware",
    //         "created_at": "2019-12-04T20:31:42Z",
    //         "updated_at": "2019-09-19T20:44:45Z",
    //         "card_set_id": "f90eb5bf-5514-43a3-9578-a21b7e8659b2"
    //       },
    //       {
    //         "id": "fb6fdc39-b5da-4a22-860e-4e3152fd3002",
    //         "term": "Calendula Officinalis Flowering Top, Allylthiourea, and Silicon Dioxide",
    //         "definition": "Public-key radical artificial intelligence",
    //         "created_at": "2019-04-14T17:55:36Z",
    //         "updated_at": "2019-06-19T07:25:34Z",
    //         "card_set_id": "f90eb5bf-5514-43a3-9578-a21b7e8659b2"
    //       },
    //       {
    //         "id": "dba0b4c5-bd99-4cc2-a839-097871e17c4f",
    //         "term": "SODIUM FLUORIDE",
    //         "definition": "Versatile bifurcated database",
    //         "created_at": "2019-11-30T15:52:00Z",
    //         "updated_at": "2019-10-19T05:56:38Z",
    //         "card_set_id": "f90eb5bf-5514-43a3-9578-a21b7e8659b2"
    //       },
    //       {
    //         "id": "09763b01-201f-404e-85ec-1976693dc80f",
    //         "term": "OCTINOXATE, Titanium Dioxide, Zinc Oxide",
    //         "definition": "Mandatory user-facing algorithm",
    //         "created_at": "2019-07-20T02:02:40Z",
    //         "updated_at": "2019-02-11T05:20:18Z",
    //         "card_set_id": "f90eb5bf-5514-43a3-9578-a21b7e8659b2"
    //       },
    //       {
    //         "id": "a26ae80f-3ba7-49b4-ae2c-f1c94a57c1fa",
    //         "term": "Alprazolam",
    //         "definition": "Up-sized responsive monitoring",
    //         "created_at": "2019-04-24T05:18:32Z",
    //         "updated_at": "2019-04-04T15:16:57Z",
    //         "card_set_id": "f90eb5bf-5514-43a3-9578-a21b7e8659b2"
    //       },
    //       {
    //         "id": "45a62d72-db0c-4fb6-ba7f-b74e7a3ea109",
    //         "term": "Octinoxate",
    //         "definition": "Upgradable well-modulated flexibility",
    //         "created_at": "2019-05-26T22:41:28Z",
    //         "updated_at": "2019-08-14T07:22:20Z",
    //         "card_set_id": "f90eb5bf-5514-43a3-9578-a21b7e8659b2"
    //       },
    //       {
    //         "id": "323b1a4e-fddc-4b51-a688-af2063485f8b",
    //         "term": "Doxycycline",
    //         "definition": "Face to face encompassing time-frame",
    //         "created_at": "2019-12-03T22:25:58Z",
    //         "updated_at": "2019-08-19T03:32:40Z",
    //         "card_set_id": "5ed42586-d508-4ed0-9ef6-e275cee4c5a9"
    //       },
    //       {
    //         "id": "b6ea0284-9080-40b3-b411-63998d29cf16",
    //         "term": "diclofenac potassium",
    //         "definition": "Managed system-worthy utilisation",
    //         "created_at": "2019-10-01T19:13:14Z",
    //         "updated_at": "2019-10-11T08:02:38Z",
    //         "card_set_id": "5ed42586-d508-4ed0-9ef6-e275cee4c5a9"
    //       },
    //       {
    //         "id": "228b8c91-40b0-4b05-951c-9901a94147af",
    //         "term": "Ergocalciferol",
    //         "definition": "Profound 24 hour policy",
    //         "created_at": "2019-11-29T23:46:11Z",
    //         "updated_at": "2019-12-23T19:53:36Z",
    //         "card_set_id": "5ed42586-d508-4ed0-9ef6-e275cee4c5a9"
    //       },
    //       {
    //         "id": "f8b86a24-09f8-4e0f-bba5-57dbecb336eb",
    //         "term": "Midazolam",
    //         "definition": "Streamlined object-oriented approach",
    //         "created_at": "2019-12-14T21:42:45Z",
    //         "updated_at": "2019-06-16T14:33:59Z",
    //         "card_set_id": "5ed42586-d508-4ed0-9ef6-e275cee4c5a9"
    //       },
    //       {
    //         "id": "cd8c4e89-88d2-4642-81d7-d4e11cbb4cce",
    //         "term": "Benzalkonium Chloride",
    //         "definition": "Function-based zero administration encoding",
    //         "created_at": "2019-11-02T17:30:23Z",
    //         "updated_at": "2019-07-02T01:32:29Z",
    //         "card_set_id": "5ed42586-d508-4ed0-9ef6-e275cee4c5a9"
    //       },
    //       {
    //         "id": "d43f09fc-1794-48cd-8468-1c7b6429d024",
    //         "term": "Tree Mix 5",
    //         "definition": "User-centric exuding hierarchy",
    //         "created_at": "2019-04-20T21:32:22Z",
    //         "updated_at": "2019-11-30T19:37:46Z",
    //         "card_set_id": "5ed42586-d508-4ed0-9ef6-e275cee4c5a9"
    //       },
    //       {
    //         "id": "4e5d6563-40b7-4d09-b349-ace0478ea399",
    //         "term": "Salicylic Acid",
    //         "definition": "Mandatory grid-enabled customer loyalty",
    //         "created_at": "2019-02-12T13:23:30Z",
    //         "updated_at": "2019-10-02T23:41:14Z",
    //         "card_set_id": "5ed42586-d508-4ed0-9ef6-e275cee4c5a9"
    //       },
    //       {
    //         "id": "f17823c8-d880-46b6-88bf-7181f8b09b3f",
    //         "term": "Levofloxacin",
    //         "definition": "Intuitive optimizing extranet",
    //         "created_at": "2019-11-27T07:12:20Z",
    //         "updated_at": "2019-07-26T11:53:29Z",
    //         "card_set_id": "5ed42586-d508-4ed0-9ef6-e275cee4c5a9"
    //       },
    //       {
    //         "id": "898dfc4c-7b13-47d6-ba30-5f1ebdabb9e2",
    //         "term": "trichothecium roseum and passalora fulva and cochliobolus spicifer and myrothecium verrucaria and trichophyton schoenleinii and mycogone nigra and neurospora crassa and khuskia oryzae and paecilomyces",
    //         "definition": "Object-based disintermediate interface",
    //         "created_at": "2019-02-26T10:54:18Z",
    //         "updated_at": "2019-01-22T00:23:12Z",
    //         "card_set_id": "5ed42586-d508-4ed0-9ef6-e275cee4c5a9"
    //       },
    //       {
    //         "id": "d9ca92c7-8e56-4feb-aea4-a71d2dfa45a2",
    //         "term": "juniperus monosperma pollen",
    //         "definition": "Operative uniform middleware",
    //         "created_at": "2019-06-30T16:52:32Z",
    //         "updated_at": "2019-10-18T19:59:39Z",
    //         "card_set_id": "5ed42586-d508-4ed0-9ef6-e275cee4c5a9"
    //       },
    //       {
    //         "id": "8a361400-09f4-47a9-ae67-c9c9fbef7809",
    //         "term": "Baclofen",
    //         "definition": "Persistent radical concept",
    //         "created_at": "2019-06-29T22:47:42Z",
    //         "updated_at": "2019-05-29T19:06:08Z",
    //         "card_set_id": "5ed42586-d508-4ed0-9ef6-e275cee4c5a9"
    //       },
    //       {
    //         "id": "829f8f21-7fd0-46de-8d78-d23f737a57ce",
    //         "term": "Doxycycline Hyclate",
    //         "definition": "Centralized intermediate forecast",
    //         "created_at": "2019-04-22T07:19:17Z",
    //         "updated_at": "2019-08-03T00:53:03Z",
    //         "card_set_id": "5ed42586-d508-4ed0-9ef6-e275cee4c5a9"
    //       },
    //       {
    //         "id": "8af9a010-19f5-499c-a95a-53b49937f4af",
    //         "term": "Cilostazol",
    //         "definition": "Persistent bi-directional flexibility",
    //         "created_at": "2019-12-17T21:06:25Z",
    //         "updated_at": "2019-04-27T06:39:41Z",
    //         "card_set_id": "5ed42586-d508-4ed0-9ef6-e275cee4c5a9"
    //       },
    //       {
    //         "id": "59de1824-9a74-4cd0-b5ab-86d91477596a",
    //         "term": "erythromycin and benzoyl peroxide",
    //         "definition": "Advanced responsive access",
    //         "created_at": "2019-06-16T20:07:03Z",
    //         "updated_at": "2019-04-05T16:27:37Z",
    //         "card_set_id": "5ed42586-d508-4ed0-9ef6-e275cee4c5a9"
    //       },
    //       {
    //         "id": "c0a56969-fbfd-43a1-9364-758d1d241542",
    //         "term": "Acetaminophen",
    //         "definition": "Multi-lateral human-resource workforce",
    //         "created_at": "2019-07-29T20:32:01Z",
    //         "updated_at": "2019-02-05T22:58:34Z",
    //         "card_set_id": "5ed42586-d508-4ed0-9ef6-e275cee4c5a9"
    //       },
    //       {
    //         "id": "ec093e5c-55cc-4bf1-9e04-510257eca892",
    //         "term": "midodrine hydrochloride",
    //         "definition": "Automated reciprocal moratorium",
    //         "created_at": "2019-03-23T01:07:28Z",
    //         "updated_at": "2019-08-26T05:56:31Z",
    //         "card_set_id": "8d081f33-c233-4081-a36f-fd66f1890e8f"
    //       },
    //       {
    //         "id": "bb0f0ada-0613-420f-b2ab-82c377f14e8e",
    //         "term": "Pancrelipase",
    //         "definition": "Diverse 3rd generation project",
    //         "created_at": "2019-12-12T09:57:53Z",
    //         "updated_at": "2019-05-31T04:44:55Z",
    //         "card_set_id": "8d081f33-c233-4081-a36f-fd66f1890e8f"
    //       },
    //       {
    //         "id": "78cb2064-5261-47fd-87f0-69700210e3ff",
    //         "term": "carbidopa and levodopa",
    //         "definition": "Team-oriented solution-oriented encryption",
    //         "created_at": "2019-05-07T09:06:31Z",
    //         "updated_at": "2019-09-06T15:40:13Z",
    //         "card_set_id": "8d081f33-c233-4081-a36f-fd66f1890e8f"
    //       },
    //       {
    //         "id": "864a094c-8920-4165-af7d-38e6499d0302",
    //         "term": "Oxygen",
    //         "definition": "Versatile systematic portal",
    //         "created_at": "2019-12-25T17:19:35Z",
    //         "updated_at": "2019-10-02T02:31:23Z",
    //         "card_set_id": "8d081f33-c233-4081-a36f-fd66f1890e8f"
    //       },
    //       {
    //         "id": "99bc281e-cb17-48a8-bf4a-6b85b12ad616",
    //         "term": "vortioxetine",
    //         "definition": "Self-enabling needs-based open architecture",
    //         "created_at": "2019-09-24T22:28:22Z",
    //         "updated_at": "2019-03-08T12:35:52Z",
    //         "card_set_id": "8d081f33-c233-4081-a36f-fd66f1890e8f"
    //       },
    //       {
    //         "id": "8d93fcc5-83c1-4aa6-abe4-7bb4fe02b4d3",
    //         "term": "lisinopril and hydrochlorothiazide",
    //         "definition": "Secured responsive strategy",
    //         "created_at": "2019-09-22T01:46:17Z",
    //         "updated_at": "2019-02-22T18:56:04Z",
    //         "card_set_id": "8d081f33-c233-4081-a36f-fd66f1890e8f"
    //       },
    //       {
    //         "id": "d03e2ae5-a730-449e-b622-850ad7fe433e",
    //         "term": "risperidone",
    //         "definition": "Universal homogeneous info-mediaries",
    //         "created_at": "2019-02-22T02:35:41Z",
    //         "updated_at": "2019-03-13T02:26:14Z",
    //         "card_set_id": "8d081f33-c233-4081-a36f-fd66f1890e8f"
    //       },
    //       {
    //         "id": "d835dad3-7cfa-4f12-b0fa-26f96090e54d",
    //         "term": "Treatment Set TS347337",
    //         "definition": "User-centric web-enabled application",
    //         "created_at": "2019-07-24T12:08:31Z",
    //         "updated_at": "2019-05-10T14:35:58Z",
    //         "card_set_id": "8d081f33-c233-4081-a36f-fd66f1890e8f"
    //       },
    //       {
    //         "id": "c56e99bb-3350-4def-a423-452227a8e27a",
    //         "term": "Bismuth subsalicylate",
    //         "definition": "Up-sized even-keeled secured line",
    //         "created_at": "2019-12-04T20:04:28Z",
    //         "updated_at": "2019-06-19T12:22:42Z",
    //         "card_set_id": "8d081f33-c233-4081-a36f-fd66f1890e8f"
    //       },
    //       {
    //         "id": "116ea5de-1c4e-40ae-96c6-65eb00d53c93",
    //         "term": "Avobenzone, Homosalate, Octisalate, Octocrylene, Oxybenzone",
    //         "definition": "Visionary user-facing moratorium",
    //         "created_at": "2019-10-18T17:28:12Z",
    //         "updated_at": "2019-11-01T00:54:14Z",
    //         "card_set_id": "8d081f33-c233-4081-a36f-fd66f1890e8f"
    //       },
    //       {
    //         "id": "7ff8a176-aecd-4271-b562-a9f4aecae112",
    //         "term": "ACETAMINOPHEN",
    //         "definition": "Upgradable clear-thinking emulation",
    //         "created_at": "2019-10-11T18:05:17Z",
    //         "updated_at": "2019-12-02T22:34:08Z",
    //         "card_set_id": "8d081f33-c233-4081-a36f-fd66f1890e8f"
    //       },
    //       {
    //         "id": "d13311df-d3ca-4b20-906e-7e0e25baee66",
    //         "term": "Avobenzone Homosalate Octisalate Octocrylene Oxybenzone",
    //         "definition": "Automated homogeneous throughput",
    //         "created_at": "2019-11-27T00:28:49Z",
    //         "updated_at": "2019-05-21T21:13:50Z",
    //         "card_set_id": "8d081f33-c233-4081-a36f-fd66f1890e8f"
    //       },
    //       {
    //         "id": "95bc7cbd-bf31-4713-9eb8-83eb9e1d64ee",
    //         "term": "juniperus ashei pollen",
    //         "definition": "Fundamental needs-based help-desk",
    //         "created_at": "2019-05-09T18:07:16Z",
    //         "updated_at": "2019-07-22T00:36:59Z",
    //         "card_set_id": "8d081f33-c233-4081-a36f-fd66f1890e8f"
    //       },
    //       {
    //         "id": "cc4b0274-b9bb-436d-8511-70f5b3bc1080",
    //         "term": "Glipizide",
    //         "definition": "De-engineered coherent product",
    //         "created_at": "2019-11-20T15:10:10Z",
    //         "updated_at": "2019-02-16T06:51:02Z",
    //         "card_set_id": "8d081f33-c233-4081-a36f-fd66f1890e8f"
    //       },
    //       {
    //         "id": "defa8882-fc93-41a6-a9d5-99b44857145f",
    //         "term": "Naproxen Sodium",
    //         "definition": "Upgradable composite paradigm",
    //         "created_at": "2019-02-23T03:28:04Z",
    //         "updated_at": "2019-03-07T13:50:44Z",
    //         "card_set_id": "8d081f33-c233-4081-a36f-fd66f1890e8f"
    //       },
    //       {
    //         "id": "de57ddf0-410e-4445-9112-b99b33860fa9",
    //         "term": ".BETA.-CAROTENE, ASCORBIC ACID, CHOLECALCIFEROL, .ALPHA.-TOCOPHEROL ACETATE, D-, THIAMINE MONONITRAT",
    //         "definition": ".BETA.-CAROTENE, ASCORBIC ACID, CHOLECALCIFEROL, .ALPHA.-TOCOPHEROL ACETATE, D-, THIAMINE MONONITRAT",
    //         "created_at": "2019-09-14T01:37:53Z",
    //         "updated_at": "2020-01-14T18:45:47Z",
    //         "card_set_id": "1393478c-a052-4746-9fb9-c18003ee495a"
    //       },
    //       {
    //         "id": "b67cde83-4cc9-4531-8c79-e5833b6eb55a",
    //         "term": "Natural Medicine",
    //         "definition": "Face to face responsive moratorium",
    //         "created_at": "2019-05-15T12:23:25Z",
    //         "updated_at": "2019-06-14T02:12:08Z",
    //         "card_set_id": "1393478c-a052-4746-9fb9-c18003ee495a"
    //       },
    //       {
    //         "id": "28340191-a7d1-4d26-94b3-ad0b903bbcbf",
    //         "term": "Naproxen",
    //         "definition": "Configurable client-driven adapter",
    //         "created_at": "2019-12-03T04:38:20Z",
    //         "updated_at": "2019-05-10T09:26:17Z",
    //         "card_set_id": "1393478c-a052-4746-9fb9-c18003ee495a"
    //       },
    //       {
    //         "id": "2002d187-a4d0-4a34-abe5-0a089b5c4eb6",
    //         "term": "fibrinogen human and thrombin human",
    //         "definition": "Grass-roots secondary utilisation",
    //         "created_at": "2019-12-29T19:57:38Z",
    //         "updated_at": "2019-11-25T15:07:16Z",
    //         "card_set_id": "1393478c-a052-4746-9fb9-c18003ee495a"
    //       },
    //       {
    //         "id": "416e2332-5f90-4e3e-b2f2-c0efc4108f05",
    //         "term": "Carvedilol",
    //         "definition": "Realigned content-based algorithm",
    //         "created_at": "2019-02-05T16:52:13Z",
    //         "updated_at": "2019-01-29T02:31:06Z",
    //         "card_set_id": "1393478c-a052-4746-9fb9-c18003ee495a"
    //       },
    //       {
    //         "id": "b2a43fb6-bff1-49ab-9dfb-ff31216c91de",
    //         "term": "ETHYL ALCOHOL",
    //         "definition": "Implemented user-facing neural-net",
    //         "created_at": "2019-01-28T00:02:01Z",
    //         "updated_at": "2019-07-12T04:35:35Z",
    //         "card_set_id": "1393478c-a052-4746-9fb9-c18003ee495a"
    //       },
    //       {
    //         "id": "81ca3a31-dbd0-43f1-9f50-92038681b456",
    //         "term": "ibuprofen",
    //         "definition": "Down-sized demand-driven knowledge user",
    //         "created_at": "2019-06-23T18:10:52Z",
    //         "updated_at": "2019-12-22T07:33:05Z",
    //         "card_set_id": "1393478c-a052-4746-9fb9-c18003ee495a"
    //       },
    //       {
    //         "id": "5eb9744d-cca3-453a-a38b-2af7ed928cca",
    //         "term": "Salicyclic Acid",
    //         "definition": "Down-sized analyzing frame",
    //         "created_at": "2019-03-18T06:35:44Z",
    //         "updated_at": "2019-12-26T16:42:44Z",
    //         "card_set_id": "1393478c-a052-4746-9fb9-c18003ee495a"
    //       },
    //       {
    //         "id": "57917ff4-31ff-4ed7-8d1a-80a8d8d4616d",
    //         "term": "LIDOCAINE HCL",
    //         "definition": "Progressive grid-enabled knowledge user",
    //         "created_at": "2019-01-31T12:59:12Z",
    //         "updated_at": "2019-05-12T19:07:27Z",
    //         "card_set_id": "1393478c-a052-4746-9fb9-c18003ee495a"
    //       },
    //       {
    //         "id": "41d96818-5c73-4d1f-815c-18df0cd94fe9",
    //         "term": "AMITRIPTYLINE HYDROCHLORIDE",
    //         "definition": "Phased didactic hub",
    //         "created_at": "2019-06-14T20:04:11Z",
    //         "updated_at": "2019-06-07T12:46:04Z",
    //         "card_set_id": "1393478c-a052-4746-9fb9-c18003ee495a"
    //       },
    //       {
    //         "id": "3b2ee6be-ce71-44bf-8c0f-b669efd77f20",
    //         "term": "benztropine mesylate",
    //         "definition": "Monitored leading edge intranet",
    //         "created_at": "2019-09-27T19:50:22Z",
    //         "updated_at": "2019-01-25T12:13:08Z",
    //         "card_set_id": "1393478c-a052-4746-9fb9-c18003ee495a"
    //       },
    //       {
    //         "id": "cb7bc24f-660f-459e-9426-451a984005f1",
    //         "term": "TRICLOSAN",
    //         "definition": "Up-sized composite architecture",
    //         "created_at": "2019-05-27T20:03:27Z",
    //         "updated_at": "2019-01-20T18:06:36Z",
    //         "card_set_id": "1393478c-a052-4746-9fb9-c18003ee495a"
    //       },
    //       {
    //         "id": "2ee937fd-8b5c-42d9-b22c-5c16517e9a12",
    //         "term": "norgestimate and ethinyl estradiol",
    //         "definition": "Self-enabling demand-driven model",
    //         "created_at": "2019-07-20T19:07:20Z",
    //         "updated_at": "2019-08-11T15:36:28Z",
    //         "card_set_id": "1393478c-a052-4746-9fb9-c18003ee495a"
    //       },
    //       {
    //         "id": "bbe3aaa2-bbfb-4b44-8eda-5928f79c6ea1",
    //         "term": "Atorvastatin Calcium",
    //         "definition": "Enhanced dedicated functionalities",
    //         "created_at": "2020-01-06T14:13:40Z",
    //         "updated_at": "2019-12-23T09:12:35Z",
    //         "card_set_id": "1393478c-a052-4746-9fb9-c18003ee495a"
    //       },
    //       {
    //         "id": "b374e161-2862-4652-8164-bc22268b49ae",
    //         "term": "oxybutynin chloride",
    //         "definition": "Progressive attitude-oriented local area network",
    //         "created_at": "2019-03-29T02:14:49Z",
    //         "updated_at": "2019-12-10T04:48:46Z",
    //         "card_set_id": "1393478c-a052-4746-9fb9-c18003ee495a"
    //       },
    //       {
    //         "id": "28c24983-ee4c-44e7-a5f8-84ed14c4c7a9",
    //         "term": "citalopram hydrobromide",
    //         "definition": "Organic national benchmark",
    //         "created_at": "2019-08-05T00:23:39Z",
    //         "updated_at": "2019-06-18T10:15:48Z",
    //         "card_set_id": "6fac36e3-6fd1-4bde-82aa-d841327c2641"
    //       },
    //       {
    //         "id": "d0c3dd04-8d03-493e-9545-0d69eaaa70bd",
    //         "term": "propranolol hydrochloride",
    //         "definition": "Persevering non-volatile info-mediaries",
    //         "created_at": "2019-04-29T22:23:46Z",
    //         "updated_at": "2019-02-25T07:11:35Z",
    //         "card_set_id": "6fac36e3-6fd1-4bde-82aa-d841327c2641"
    //       },
    //       {
    //         "id": "40ef59db-8b64-4ff8-b9d4-1fc48ad64344",
    //         "term": "Guaifenesin",
    //         "definition": "Versatile web-enabled algorithm",
    //         "created_at": "2019-01-26T11:57:08Z",
    //         "updated_at": "2019-03-06T04:22:25Z",
    //         "card_set_id": "6fac36e3-6fd1-4bde-82aa-d841327c2641"
    //       },
    //       {
    //         "id": "861183d3-3bb4-44ca-8b49-844bfd0ed775",
    //         "term": "epoprostenol",
    //         "definition": "Operative scalable adapter",
    //         "created_at": "2019-10-10T02:45:22Z",
    //         "updated_at": "2019-03-01T21:38:01Z",
    //         "card_set_id": "6fac36e3-6fd1-4bde-82aa-d841327c2641"
    //       },
    //       {
    //         "id": "12dfca00-722b-40fe-ac80-6da09a72a6a4",
    //         "term": "English Walnut",
    //         "definition": "Enterprise-wide bifurcated leverage",
    //         "created_at": "2019-06-12T18:09:24Z",
    //         "updated_at": "2019-05-04T19:47:14Z",
    //         "card_set_id": "6fac36e3-6fd1-4bde-82aa-d841327c2641"
    //       },
    //       {
    //         "id": "5503c253-7376-4027-bb4b-c942de040c82",
    //         "term": "Pamidronate Disodium",
    //         "definition": "Decentralized dynamic frame",
    //         "created_at": "2019-12-23T01:11:07Z",
    //         "updated_at": "2019-03-20T00:51:20Z",
    //         "card_set_id": "6fac36e3-6fd1-4bde-82aa-d841327c2641"
    //       },
    //       {
    //         "id": "f75e8687-fd5e-4936-b64c-d2f22fd67c41",
    //         "term": "Salicylic Acid",
    //         "definition": "Organic even-keeled archive",
    //         "created_at": "2019-03-08T06:04:30Z",
    //         "updated_at": "2019-10-10T18:13:57Z",
    //         "card_set_id": "6fac36e3-6fd1-4bde-82aa-d841327c2641"
    //       },
    //       {
    //         "id": "09d1402b-c94d-417d-a2b2-7452b45f84fe",
    //         "term": "Acetaminophen",
    //         "definition": "Progressive transitional product",
    //         "created_at": "2019-11-05T21:23:40Z",
    //         "updated_at": "2019-05-13T05:06:59Z",
    //         "card_set_id": "6fac36e3-6fd1-4bde-82aa-d841327c2641"
    //       },
    //       {
    //         "id": "f7ffb4ce-dfe1-463a-a38e-48caee4925bc",
    //         "term": "Diphenhydramine Hydrochloride",
    //         "definition": "Multi-channelled user-facing website",
    //         "created_at": "2019-10-17T06:11:23Z",
    //         "updated_at": "2019-12-07T11:29:14Z",
    //         "card_set_id": "6fac36e3-6fd1-4bde-82aa-d841327c2641"
    //       },
    //       {
    //         "id": "709a768a-d749-4615-a85f-f76b3ef34e01",
    //         "term": "Aminophylline dihydrate",
    //         "definition": "Cross-group multi-tasking archive",
    //         "created_at": "2019-07-05T20:31:01Z",
    //         "updated_at": "2019-05-21T10:30:43Z",
    //         "card_set_id": "6fac36e3-6fd1-4bde-82aa-d841327c2641"
    //       },
    //       {
    //         "id": "47f7f9ee-8b31-46e7-be43-1e267c12165c",
    //         "term": "Hydroxyzine Hydrochloride",
    //         "definition": "Multi-layered attitude-oriented hierarchy",
    //         "created_at": "2019-10-31T07:33:57Z",
    //         "updated_at": "2019-06-24T20:48:47Z",
    //         "card_set_id": "6fac36e3-6fd1-4bde-82aa-d841327c2641"
    //       },
    //       {
    //         "id": "d5fc0d15-c9b9-4e36-8bdc-a510948b9894",
    //         "term": "FENTANYL CITRATE",
    //         "definition": "Persevering national neural-net",
    //         "created_at": "2019-09-29T20:31:59Z",
    //         "updated_at": "2019-11-08T02:21:19Z",
    //         "card_set_id": "6fac36e3-6fd1-4bde-82aa-d841327c2641"
    //       },
    //       {
    //         "id": "588d1e0c-d730-4bb7-ba3e-919a30c4d007",
    //         "term": "oxymorphone hydrochloride",
    //         "definition": "Implemented local encryption",
    //         "created_at": "2019-09-01T14:43:22Z",
    //         "updated_at": "2019-11-27T23:47:37Z",
    //         "card_set_id": "6fac36e3-6fd1-4bde-82aa-d841327c2641"
    //       },
    //       {
    //         "id": "c0574df9-3713-4767-a9cf-822b07aa7310",
    //         "term": "DEXAMETHASONE SODIUM PHOSPHATE",
    //         "definition": "Persistent demand-driven array",
    //         "created_at": "2019-12-11T12:36:19Z",
    //         "updated_at": "2019-07-03T16:54:06Z",
    //         "card_set_id": "6fac36e3-6fd1-4bde-82aa-d841327c2641"
    //       },
    //       {
    //         "id": "b710af18-d594-40df-82a3-cefcbaf11dae",
    //         "term": "Triamcinolone Acetonide",
    //         "definition": "Customizable client-driven encryption",
    //         "created_at": "2019-02-11T20:33:58Z",
    //         "updated_at": "2019-09-13T03:44:48Z",
    //         "card_set_id": "6fac36e3-6fd1-4bde-82aa-d841327c2641"
    //       },
    //       {
    //         "id": "4d2ea312-b255-44c2-bf31-e660b1a1401b",
    //         "term": "Salicylic Acid",
    //         "definition": "Assimilated explicit migration",
    //         "created_at": "2019-06-17T17:08:34Z",
    //         "updated_at": "2019-11-13T04:59:35Z",
    //         "card_set_id": "4100f786-3b7c-4cdc-a8ca-7a7350368a2c"
    //       },
    //       {
    //         "id": "5ce1cd25-af16-46d0-8144-fa0b8ac012d2",
    //         "term": "MENTHOL, CAPSAICIN",
    //         "definition": "Configurable incremental software",
    //         "created_at": "2019-11-12T07:13:10Z",
    //         "updated_at": "2019-06-19T07:05:33Z",
    //         "card_set_id": "4100f786-3b7c-4cdc-a8ca-7a7350368a2c"
    //       },
    //       {
    //         "id": "7829965a-97a8-4a5d-8a20-b4f5c772d73e",
    //         "term": "THUJA OCCIDENTALIS LEAFY TWIG",
    //         "definition": "Implemented zero defect monitoring",
    //         "created_at": "2019-08-06T02:51:17Z",
    //         "updated_at": "2019-08-10T15:03:35Z",
    //         "card_set_id": "4100f786-3b7c-4cdc-a8ca-7a7350368a2c"
    //       },
    //       {
    //         "id": "667285d6-7574-4d33-aca5-7a9d01426f3a",
    //         "term": "Avobenzone, Octisalate, Octocrylene",
    //         "definition": "Quality-focused discrete standardization",
    //         "created_at": "2019-11-27T12:51:37Z",
    //         "updated_at": "2019-07-14T08:53:15Z",
    //         "card_set_id": "4100f786-3b7c-4cdc-a8ca-7a7350368a2c"
    //       },
    //       {
    //         "id": "34cae4a3-badc-4780-bbb4-ece4a8a4f6a6",
    //         "term": "CELECOXIB",
    //         "definition": "Progressive bifurcated info-mediaries",
    //         "created_at": "2019-05-21T09:17:27Z",
    //         "updated_at": "2019-11-05T18:26:10Z",
    //         "card_set_id": "4100f786-3b7c-4cdc-a8ca-7a7350368a2c"
    //       },
    //       {
    //         "id": "eda303b2-e151-4aa6-8428-14e35299522d",
    //         "term": "tilmanocept",
    //         "definition": "Seamless logistical leverage",
    //         "created_at": "2019-05-08T20:55:00Z",
    //         "updated_at": "2019-11-04T13:43:34Z",
    //         "card_set_id": "4100f786-3b7c-4cdc-a8ca-7a7350368a2c"
    //       },
    //       {
    //         "id": "08b2732e-68af-4696-9420-5522ba41cc2a",
    //         "term": "ALCOHOL",
    //         "definition": "Self-enabling 6th generation info-mediaries",
    //         "created_at": "2019-01-23T01:26:14Z",
    //         "updated_at": "2020-01-07T23:54:24Z",
    //         "card_set_id": "4100f786-3b7c-4cdc-a8ca-7a7350368a2c"
    //       },
    //       {
    //         "id": "c1c0bd0c-99ac-4dae-8f71-8a71af105b1d",
    //         "term": "Benzocaine",
    //         "definition": "Total value-added solution",
    //         "created_at": "2019-02-15T21:05:32Z",
    //         "updated_at": "2019-10-18T03:52:03Z",
    //         "card_set_id": "4100f786-3b7c-4cdc-a8ca-7a7350368a2c"
    //       },
    //       {
    //         "id": "9bddc13b-a9ae-4a72-9245-d47e9f4a3a6b",
    //         "term": "Acetaminophen, Dextromethorphan hydrobromide, and Phenylephrine hydrochloride",
    //         "definition": "Cross-group secondary application",
    //         "created_at": "2019-02-13T11:53:47Z",
    //         "updated_at": "2019-04-11T22:21:49Z",
    //         "card_set_id": "4100f786-3b7c-4cdc-a8ca-7a7350368a2c"
    //       },
    //       {
    //         "id": "841ac281-9fff-430d-8388-93af2b2748f5",
    //         "term": "Calcium Gluconate",
    //         "definition": "Switchable encompassing hierarchy",
    //         "created_at": "2019-06-29T00:01:49Z",
    //         "updated_at": "2019-07-27T09:52:54Z",
    //         "card_set_id": "4100f786-3b7c-4cdc-a8ca-7a7350368a2c"
    //       },
    //       {
    //         "id": "5a0cd902-a853-4c14-8464-973c560df60d",
    //         "term": "Anastrozole",
    //         "definition": "User-centric coherent time-frame",
    //         "created_at": "2019-04-16T09:14:51Z",
    //         "updated_at": "2019-06-02T08:09:50Z",
    //         "card_set_id": "4100f786-3b7c-4cdc-a8ca-7a7350368a2c"
    //       },
    //       {
    //         "id": "a378d2e2-e816-49d3-a312-bd26179c6c11",
    //         "term": "Aloe Vera Leaf and Iodoquinol",
    //         "definition": "Inverse discrete capacity",
    //         "created_at": "2019-07-03T12:58:28Z",
    //         "updated_at": "2019-12-25T11:33:23Z",
    //         "card_set_id": "4100f786-3b7c-4cdc-a8ca-7a7350368a2c"
    //       },
    //       {
    //         "id": "c03df3e3-313a-4abd-b7c5-f679211946d9",
    //         "term": "Diltiazem Hydrochloride",
    //         "definition": "Seamless neutral superstructure",
    //         "created_at": "2019-05-03T09:45:28Z",
    //         "updated_at": "2019-10-23T10:07:41Z",
    //         "card_set_id": "4100f786-3b7c-4cdc-a8ca-7a7350368a2c"
    //       },
    //       {
    //         "id": "8796b3a7-d764-4487-aa33-cf11e2181581",
    //         "term": "Western Water Hemp",
    //         "definition": "Sharable hybrid leverage",
    //         "created_at": "2019-04-27T21:46:16Z",
    //         "updated_at": "2020-01-14T14:03:35Z",
    //         "card_set_id": "4100f786-3b7c-4cdc-a8ca-7a7350368a2c"
    //       },
    //       {
    //         "id": "490098bd-ac68-4e60-a53e-4d65cbd63c40",
    //         "term": "DOCUSATE SODIUM",
    //         "definition": "Triple-buffered tangible solution",
    //         "created_at": "2019-03-18T03:48:37Z",
    //         "updated_at": "2019-07-24T12:16:33Z",
    //         "card_set_id": "4100f786-3b7c-4cdc-a8ca-7a7350368a2c"
    //       },
    //       {
    //         "id": "45da69ff-b6be-4033-9149-41847b15edbc",
    //         "term": "AMMONIUM MURIATICUM",
    //         "definition": "De-engineered 24 hour info-mediaries",
    //         "created_at": "2019-04-28T03:51:48Z",
    //         "updated_at": "2019-06-22T07:14:37Z",
    //         "card_set_id": "38f1f8d5-d730-42ed-98db-99f7e00a7fdf"
    //       },
    //       {
    //         "id": "5bc34f64-084b-46de-bc77-e02623b5e2b4",
    //         "term": "LEVOTHYROXINE SODIUM ANHYDROUS",
    //         "definition": "Self-enabling demand-driven parallelism",
    //         "created_at": "2019-09-05T17:19:26Z",
    //         "updated_at": "2019-09-01T14:04:44Z",
    //         "card_set_id": "38f1f8d5-d730-42ed-98db-99f7e00a7fdf"
    //       },
    //       {
    //         "id": "7e86028e-58b5-445f-937d-61c8806a1db7",
    //         "term": "Atenolol and Chlorthalidone",
    //         "definition": "User-friendly value-added collaboration",
    //         "created_at": "2019-06-22T10:49:16Z",
    //         "updated_at": "2019-06-28T07:27:27Z",
    //         "card_set_id": "38f1f8d5-d730-42ed-98db-99f7e00a7fdf"
    //       },
    //       {
    //         "id": "651abd22-1d89-43ff-8079-af50fddb2897",
    //         "term": "Cyclophosphamide",
    //         "definition": "Versatile background core",
    //         "created_at": "2019-07-19T11:42:25Z",
    //         "updated_at": "2019-07-26T07:00:11Z",
    //         "card_set_id": "38f1f8d5-d730-42ed-98db-99f7e00a7fdf"
    //       },
    //       {
    //         "id": "ac2e1e92-7880-43ef-9f92-1e49db279175",
    //         "term": "OCTINOXATE, TITANIUM DIOXIDE",
    //         "definition": "Persistent full-range workforce",
    //         "created_at": "2019-07-29T02:37:37Z",
    //         "updated_at": "2019-03-08T16:48:44Z",
    //         "card_set_id": "38f1f8d5-d730-42ed-98db-99f7e00a7fdf"
    //       },
    //       {
    //         "id": "84e19b52-a969-4ca5-b9ea-1838ac48665f",
    //         "term": "Benzoyl Peroxide",
    //         "definition": "Switchable 5th generation methodology",
    //         "created_at": "2019-06-10T04:08:06Z",
    //         "updated_at": "2019-10-31T06:59:34Z",
    //         "card_set_id": "38f1f8d5-d730-42ed-98db-99f7e00a7fdf"
    //       },
    //       {
    //         "id": "15948cd5-b915-49ed-91c9-d898c76f3183",
    //         "term": "losartan potassium and hydrochlorothiazide",
    //         "definition": "Upgradable 24 hour hardware",
    //         "created_at": "2019-03-01T19:51:11Z",
    //         "updated_at": "2019-03-16T00:23:27Z",
    //         "card_set_id": "38f1f8d5-d730-42ed-98db-99f7e00a7fdf"
    //       },
    //       {
    //         "id": "34326294-64e8-4a0a-9a83-e1fc7a8c2892",
    //         "term": "OATMEAL",
    //         "definition": "Exclusive grid-enabled concept",
    //         "created_at": "2019-10-25T00:31:25Z",
    //         "updated_at": "2019-08-03T22:11:49Z",
    //         "card_set_id": "38f1f8d5-d730-42ed-98db-99f7e00a7fdf"
    //       },
    //       {
    //         "id": "2289f70d-4b0d-48a0-b721-4100989d2e91",
    //         "term": "Clopidogrel",
    //         "definition": "Assimilated systematic flexibility",
    //         "created_at": "2019-03-07T03:24:38Z",
    //         "updated_at": "2019-03-05T23:33:44Z",
    //         "card_set_id": "38f1f8d5-d730-42ed-98db-99f7e00a7fdf"
    //       },
    //       {
    //         "id": "38a989b3-c547-4428-9325-3ba604a3e7b8",
    //         "term": "Saline",
    //         "definition": "Managed explicit knowledge user",
    //         "created_at": "2019-02-16T17:13:59Z",
    //         "updated_at": "2019-08-11T21:33:25Z",
    //         "card_set_id": "38f1f8d5-d730-42ed-98db-99f7e00a7fdf"
    //       },
    //       {
    //         "id": "7b3c1412-e193-4a7b-b96a-8f2f2b7c2db7",
    //         "term": "Pyrithione Zinc",
    //         "definition": "Reverse-engineered even-keeled software",
    //         "created_at": "2019-08-25T13:08:31Z",
    //         "updated_at": "2019-07-12T05:49:27Z",
    //         "card_set_id": "38f1f8d5-d730-42ed-98db-99f7e00a7fdf"
    //       },
    //       {
    //         "id": "7436ceae-cc05-4b64-bab7-f4b5f1587847",
    //         "term": "Aluminum Zirconium Tetrachlorohydrex GLY",
    //         "definition": "Quality-focused asymmetric instruction set",
    //         "created_at": "2019-04-10T01:42:59Z",
    //         "updated_at": "2019-09-27T23:17:11Z",
    //         "card_set_id": "38f1f8d5-d730-42ed-98db-99f7e00a7fdf"
    //       },
    //       {
    //         "id": "c733f4a2-bdbc-408b-967a-1d5594df94bf",
    //         "term": "Psyllium Hydrophyilic Mucilloid",
    //         "definition": "Enterprise-wide optimal strategy",
    //         "created_at": "2019-01-29T13:17:14Z",
    //         "updated_at": "2019-03-14T03:15:27Z",
    //         "card_set_id": "38f1f8d5-d730-42ed-98db-99f7e00a7fdf"
    //       },
    //       {
    //         "id": "a4406758-c39a-4b18-a304-0ab0eae77e99",
    //         "term": "Dextromethorphan Hydrobromide, Doxylamine Succinate",
    //         "definition": "Up-sized 6th generation emulation",
    //         "created_at": "2019-10-07T13:06:46Z",
    //         "updated_at": "2019-10-24T06:07:48Z",
    //         "card_set_id": "38f1f8d5-d730-42ed-98db-99f7e00a7fdf"
    //       },
    //       {
    //         "id": "93c191ed-418b-41ca-af4b-98bc0697d06b",
    //         "term": "moexipril hydrochloride and hydrochlorothiazide",
    //         "definition": "Devolved 3rd generation alliance",
    //         "created_at": "2019-08-12T06:59:03Z",
    //         "updated_at": "2019-12-04T02:28:10Z",
    //         "card_set_id": "38f1f8d5-d730-42ed-98db-99f7e00a7fdf"
    //       },
    //       {
    //         "id": "5acdb40e-59a2-46e2-a0e8-02cc39a5e0e1",
    //         "term": "Tretinoin",
    //         "definition": "Fundamental local instruction set",
    //         "created_at": "2019-06-24T09:12:43Z",
    //         "updated_at": "2019-02-07T09:59:46Z",
    //         "card_set_id": "72c91c58-c28a-4cc0-b241-5023f64a823c"
    //       },
    //       {
    //         "id": "4b94d33f-399d-4c3d-87dc-c099037ede0a",
    //         "term": "CANDIDA ALBICANS",
    //         "definition": "Secured logistical standardization",
    //         "created_at": "2019-09-11T11:17:46Z",
    //         "updated_at": "2019-06-05T20:38:07Z",
    //         "card_set_id": "72c91c58-c28a-4cc0-b241-5023f64a823c"
    //       },
    //       {
    //         "id": "320be894-861e-456f-a840-4fd112296f29",
    //         "term": "indocyanine green",
    //         "definition": "Proactive next generation software",
    //         "created_at": "2019-09-14T20:49:38Z",
    //         "updated_at": "2019-10-11T03:32:47Z",
    //         "card_set_id": "72c91c58-c28a-4cc0-b241-5023f64a823c"
    //       },
    //       {
    //         "id": "569494f8-f6fd-4bc9-ba7e-c037a9b9e321",
    //         "term": "Octinoxate and Titanium Dioxide",
    //         "definition": "Reduced high-level paradigm",
    //         "created_at": "2019-12-26T21:35:51Z",
    //         "updated_at": "2019-08-30T00:11:22Z",
    //         "card_set_id": "72c91c58-c28a-4cc0-b241-5023f64a823c"
    //       },
    //       {
    //         "id": "2cc1bf0c-4bf4-4d05-825d-67efc4e20116",
    //         "term": "fenofibrate",
    //         "definition": "Cross-group leading edge circuit",
    //         "created_at": "2019-12-23T16:04:16Z",
    //         "updated_at": "2019-04-30T08:49:26Z",
    //         "card_set_id": "72c91c58-c28a-4cc0-b241-5023f64a823c"
    //       },
    //       {
    //         "id": "87ed91de-8355-4784-aac9-04f28d5ce90d",
    //         "term": "COLISTIMETHATE SODIUM",
    //         "definition": "Digitized tangible middleware",
    //         "created_at": "2019-06-07T02:09:45Z",
    //         "updated_at": "2019-09-27T12:41:49Z",
    //         "card_set_id": "72c91c58-c28a-4cc0-b241-5023f64a823c"
    //       },
    //       {
    //         "id": "da8081e6-8502-4995-bdfc-2bf5d636e661",
    //         "term": "OCTINOXATE",
    //         "definition": "Sharable client-driven leverage",
    //         "created_at": "2019-04-03T09:05:43Z",
    //         "updated_at": "2019-09-15T09:34:13Z",
    //         "card_set_id": "72c91c58-c28a-4cc0-b241-5023f64a823c"
    //       },
    //       {
    //         "id": "a0dcb6e6-b55f-4c0b-84b5-a45a157d4c3a",
    //         "term": "Metoclopramide",
    //         "definition": "Seamless multimedia hardware",
    //         "created_at": "2019-05-08T15:07:37Z",
    //         "updated_at": "2019-11-10T20:41:45Z",
    //         "card_set_id": "72c91c58-c28a-4cc0-b241-5023f64a823c"
    //       },
    //       {
    //         "id": "02aa58c9-bfb1-4c08-8a9f-3b5409ce3930",
    //         "term": "ADAPALENE",
    //         "definition": "Streamlined multi-state archive",
    //         "created_at": "2019-02-19T16:30:09Z",
    //         "updated_at": "2019-12-09T12:37:50Z",
    //         "card_set_id": "72c91c58-c28a-4cc0-b241-5023f64a823c"
    //       },
    //       {
    //         "id": "9d9d6e37-b278-4011-aab2-08709cff53fd",
    //         "term": "not applicable",
    //         "definition": "Switchable foreground installation",
    //         "created_at": "2019-10-23T00:57:59Z",
    //         "updated_at": "2019-08-27T22:01:50Z",
    //         "card_set_id": "72c91c58-c28a-4cc0-b241-5023f64a823c"
    //       },
    //       {
    //         "id": "17afbf73-917f-4634-b337-21b012aa147d",
    //         "term": "Sodium Fluoride",
    //         "definition": "Enterprise-wide content-based pricing structure",
    //         "created_at": "2019-01-19T23:38:53Z",
    //         "updated_at": "2019-07-19T04:59:42Z",
    //         "card_set_id": "72c91c58-c28a-4cc0-b241-5023f64a823c"
    //       },
    //       {
    //         "id": "f590a5e2-02ea-4818-8e61-546a7c1d9b90",
    //         "term": "Omeprazole",
    //         "definition": "Configurable content-based website",
    //         "created_at": "2019-10-12T06:34:45Z",
    //         "updated_at": "2019-03-28T03:30:09Z",
    //         "card_set_id": "72c91c58-c28a-4cc0-b241-5023f64a823c"
    //       },
    //       {
    //         "id": "c1c312a1-292d-4a90-b797-a0bf5fa4bee5",
    //         "term": "Metoprolol tartrate",
    //         "definition": "Phased didactic time-frame",
    //         "created_at": "2019-05-19T07:29:50Z",
    //         "updated_at": "2019-04-17T01:26:37Z",
    //         "card_set_id": "72c91c58-c28a-4cc0-b241-5023f64a823c"
    //       },
    //       {
    //         "id": "55cbb98a-3910-4b7f-abee-6647323599c3",
    //         "term": "Docusate Sodium and Senna",
    //         "definition": "Synergized real-time methodology",
    //         "created_at": "2019-04-30T08:57:12Z",
    //         "updated_at": "2019-05-09T07:33:26Z",
    //         "card_set_id": "72c91c58-c28a-4cc0-b241-5023f64a823c"
    //       },
    //       {
    //         "id": "9da4e060-3490-43d0-a7c2-067980580ff2",
    //         "term": "ETHYL ALCOHOL",
    //         "definition": "Quality-focused 4th generation frame",
    //         "created_at": "2019-12-07T21:15:23Z",
    //         "updated_at": "2019-07-22T05:31:36Z",
    //         "card_set_id": "72c91c58-c28a-4cc0-b241-5023f64a823c"
    //       },
    //       {
    //         "id": "78cf066e-a989-4d40-a49a-84fe372a97ff",
    //         "term": "METRONIDAZOLE",
    //         "definition": "Persistent asynchronous toolset",
    //         "created_at": "2019-01-28T22:19:51Z",
    //         "updated_at": "2019-02-18T22:47:43Z",
    //         "card_set_id": "47a16159-dc56-4d2b-8344-55894c9d3ec8"
    //       },
    //       {
    //         "id": "8181649b-dfdd-46d0-abcf-f7b4008a2c4c",
    //         "term": "Danazol",
    //         "definition": "Centralized national function",
    //         "created_at": "2019-12-24T13:11:35Z",
    //         "updated_at": "2019-02-17T04:35:55Z",
    //         "card_set_id": "47a16159-dc56-4d2b-8344-55894c9d3ec8"
    //       },
    //       {
    //         "id": "d2e35de3-0904-4b34-a227-b46160302ab2",
    //         "term": "Avobenzone, Homosalate, Octisalate, Octocrylene, and Oxybenzone",
    //         "definition": "Open-source methodical toolset",
    //         "created_at": "2019-06-23T05:53:27Z",
    //         "updated_at": "2019-06-28T15:42:37Z",
    //         "card_set_id": "47a16159-dc56-4d2b-8344-55894c9d3ec8"
    //       },
    //       {
    //         "id": "8a74f215-c932-4d9a-95d9-738a7a766806",
    //         "term": "sertraline hydrochloride",
    //         "definition": "Sharable solution-oriented architecture",
    //         "created_at": "2019-06-01T17:40:17Z",
    //         "updated_at": "2019-11-08T00:01:03Z",
    //         "card_set_id": "47a16159-dc56-4d2b-8344-55894c9d3ec8"
    //       },
    //       {
    //         "id": "40b83515-ab52-4346-a00e-c3661527f155",
    //         "term": "Hydrocortisone Acetate",
    //         "definition": "Profound impactful installation",
    //         "created_at": "2019-03-03T12:16:19Z",
    //         "updated_at": "2019-04-28T07:46:33Z",
    //         "card_set_id": "47a16159-dc56-4d2b-8344-55894c9d3ec8"
    //       },
    //       {
    //         "id": "3ead6c6e-25ef-48ab-9939-cef3d4688345",
    //         "term": "Carbon Dioxide",
    //         "definition": "Pre-emptive multi-tasking matrix",
    //         "created_at": "2019-05-11T11:27:30Z",
    //         "updated_at": "2019-01-22T12:48:41Z",
    //         "card_set_id": "47a16159-dc56-4d2b-8344-55894c9d3ec8"
    //       },
    //       {
    //         "id": "12922d28-7bc1-4cd7-993c-69253fa73d22",
    //         "term": "Imipramine Pamoate",
    //         "definition": "Organic responsive flexibility",
    //         "created_at": "2019-05-03T20:08:42Z",
    //         "updated_at": "2019-07-20T03:58:52Z",
    //         "card_set_id": "47a16159-dc56-4d2b-8344-55894c9d3ec8"
    //       },
    //       {
    //         "id": "64ad8771-5bb8-4086-aa02-3be2064e7dee",
    //         "term": "LISINOPRIL",
    //         "definition": "Decentralized asymmetric hub",
    //         "created_at": "2019-07-11T14:35:40Z",
    //         "updated_at": "2019-11-10T19:40:41Z",
    //         "card_set_id": "47a16159-dc56-4d2b-8344-55894c9d3ec8"
    //       },
    //       {
    //         "id": "065c5f59-ad9e-46e2-b9b6-50c0e791e0a9",
    //         "term": "Acetaminophen, Dextromethorphan HBr, Doxylamine succinate",
    //         "definition": "Persistent system-worthy frame",
    //         "created_at": "2019-09-18T11:52:14Z",
    //         "updated_at": "2019-05-04T14:49:53Z",
    //         "card_set_id": "47a16159-dc56-4d2b-8344-55894c9d3ec8"
    //       },
    //       {
    //         "id": "bacb0875-1981-43c0-bd1c-dd8443f7e88a",
    //         "term": "OCTINOXATE, ZINC OXIDE",
    //         "definition": "User-centric bottom-line contingency",
    //         "created_at": "2019-04-01T04:15:23Z",
    //         "updated_at": "2019-05-04T20:24:55Z",
    //         "card_set_id": "47a16159-dc56-4d2b-8344-55894c9d3ec8"
    //       },
    //       {
    //         "id": "ae0d3059-7753-4bd6-8799-1dae010284cf",
    //         "term": "Heather,",
    //         "definition": "Sharable explicit hierarchy",
    //         "created_at": "2019-10-19T05:58:54Z",
    //         "updated_at": "2019-06-03T17:40:47Z",
    //         "card_set_id": "47a16159-dc56-4d2b-8344-55894c9d3ec8"
    //       },
    //       {
    //         "id": "578cccc8-8504-4d6f-839c-e05a9d3f5174",
    //         "term": "Acetaminophen, Dextromethorphan HBr, Doxylamine succinate",
    //         "definition": "Proactive mission-critical extranet",
    //         "created_at": "2019-09-05T19:17:50Z",
    //         "updated_at": "2019-02-12T03:18:15Z",
    //         "card_set_id": "47a16159-dc56-4d2b-8344-55894c9d3ec8"
    //       },
    //       {
    //         "id": "4a183bb0-1ab8-438e-84a7-22795c4deb16",
    //         "term": "Mebrofenin",
    //         "definition": "Grass-roots local alliance",
    //         "created_at": "2019-08-18T19:19:42Z",
    //         "updated_at": "2019-05-06T09:18:24Z",
    //         "card_set_id": "47a16159-dc56-4d2b-8344-55894c9d3ec8"
    //       },
    //       {
    //         "id": "dc280871-853b-4321-9f36-8564212a238f",
    //         "term": "Aluminum hydroxide, Magnesium hydroxide, Simethicone",
    //         "definition": "Quality-focused background concept",
    //         "created_at": "2019-11-03T01:57:30Z",
    //         "updated_at": "2019-10-06T01:51:57Z",
    //         "card_set_id": "47a16159-dc56-4d2b-8344-55894c9d3ec8"
    //       },
    //       {
    //         "id": "361d736d-80fc-41ca-8afb-c5356ec59118",
    //         "term": "not applicable",
    //         "definition": "Cloned multimedia alliance",
    //         "created_at": "2019-09-05T00:48:28Z",
    //         "updated_at": "2019-12-23T21:59:33Z",
    //         "card_set_id": "47a16159-dc56-4d2b-8344-55894c9d3ec8"
    //       },
    //       {
    //         "id": "8e663ef5-3459-474f-92e7-8692272319fd",
    //         "term": "Standardized Mite, Dermatophagoides pteronyssinus",
    //         "definition": "Balanced needs-based monitoring",
    //         "created_at": "2019-08-10T01:20:10Z",
    //         "updated_at": "2019-12-15T02:47:32Z",
    //         "card_set_id": "2882558b-d698-4511-96c1-c721cc81c3b9"
    //       },
    //       {
    //         "id": "94387a5f-fe89-42b0-8b96-84f0004702fb",
    //         "term": "Isoniazid",
    //         "definition": "Reverse-engineered zero tolerance projection",
    //         "created_at": "2019-06-10T18:21:04Z",
    //         "updated_at": "2019-07-28T10:03:30Z",
    //         "card_set_id": "2882558b-d698-4511-96c1-c721cc81c3b9"
    //       },
    //       {
    //         "id": "11823361-fa35-4386-9d1b-53133a923c31",
    //         "term": "Immune System Booster",
    //         "definition": "Proactive interactive product",
    //         "created_at": "2019-05-02T04:38:59Z",
    //         "updated_at": "2019-07-11T03:53:02Z",
    //         "card_set_id": "2882558b-d698-4511-96c1-c721cc81c3b9"
    //       },
    //       {
    //         "id": "219420b2-2275-40b1-9fc7-d8af527d033a",
    //         "term": "Lamotrigine",
    //         "definition": "Down-sized motivating projection",
    //         "created_at": "2019-07-25T11:38:38Z",
    //         "updated_at": "2019-05-31T17:55:38Z",
    //         "card_set_id": "2882558b-d698-4511-96c1-c721cc81c3b9"
    //       },
    //       {
    //         "id": "95574507-3fb5-46c9-887b-1ec2280c588c",
    //         "term": "Simethicone",
    //         "definition": "Up-sized zero tolerance structure",
    //         "created_at": "2019-01-24T18:56:25Z",
    //         "updated_at": "2019-07-25T20:59:40Z",
    //         "card_set_id": "2882558b-d698-4511-96c1-c721cc81c3b9"
    //       },
    //       {
    //         "id": "97596d98-06a7-483b-9adb-56a5e8853cbf",
    //         "term": "OCTINOXATE, OCTISALATE, ZINC OXIDE, TITANIUM DIOXIDE",
    //         "definition": "Synergized maximized moderator",
    //         "created_at": "2019-04-06T02:59:28Z",
    //         "updated_at": "2019-05-27T10:43:02Z",
    //         "card_set_id": "2882558b-d698-4511-96c1-c721cc81c3b9"
    //       },
    //       {
    //         "id": "76100253-37f5-4e88-82a0-68b62d4f0f44",
    //         "term": "Oxygen",
    //         "definition": "Networked uniform toolset",
    //         "created_at": "2019-03-26T10:05:55Z",
    //         "updated_at": "2019-03-22T04:33:12Z",
    //         "card_set_id": "2882558b-d698-4511-96c1-c721cc81c3b9"
    //       },
    //       {
    //         "id": "493100f5-de5f-47a3-8aa0-7dbbc439fefc",
    //         "term": "OCTINOXATE OCTISALATE ALUMINUM HYDROXIDE",
    //         "definition": "Innovative exuding capacity",
    //         "created_at": "2019-03-09T08:22:37Z",
    //         "updated_at": "2019-10-18T14:18:22Z",
    //         "card_set_id": "2882558b-d698-4511-96c1-c721cc81c3b9"
    //       },
    //       {
    //         "id": "2aee7f94-b469-43de-9a69-4cc2be14a5e1",
    //         "term": "Paroxetine Hydrochloride",
    //         "definition": "Automated bandwidth-monitored process improvement",
    //         "created_at": "2019-06-20T10:54:07Z",
    //         "updated_at": "2019-02-05T15:39:22Z",
    //         "card_set_id": "2882558b-d698-4511-96c1-c721cc81c3b9"
    //       },
    //       {
    //         "id": "8d7d72fb-ef34-4347-b2ad-5aa63f992595",
    //         "term": "Zinc Oxide, Titanium Dioxide",
    //         "definition": "Future-proofed needs-based time-frame",
    //         "created_at": "2019-09-23T01:28:28Z",
    //         "updated_at": "2019-05-12T18:45:07Z",
    //         "card_set_id": "2882558b-d698-4511-96c1-c721cc81c3b9"
    //       },
    //       {
    //         "id": "058c1596-fc08-44d3-9572-29758954a02b",
    //         "term": "Miconazole nitrate",
    //         "definition": "Proactive contextually-based definition",
    //         "created_at": "2019-07-04T05:11:17Z",
    //         "updated_at": "2019-12-02T04:03:59Z",
    //         "card_set_id": "2882558b-d698-4511-96c1-c721cc81c3b9"
    //       },
    //       {
    //         "id": "5e1fb256-8d40-419c-9f95-1bb9df4e4d28",
    //         "term": "DIPHENHYDRAMINE HYDROCHLORIDE AND ZINC ACETATE",
    //         "definition": "Monitored disintermediate archive",
    //         "created_at": "2019-06-08T17:31:58Z",
    //         "updated_at": "2019-04-25T19:50:22Z",
    //         "card_set_id": "2882558b-d698-4511-96c1-c721cc81c3b9"
    //       },
    //       {
    //         "id": "6805aac9-4945-465b-8a56-f8e226878f97",
    //         "term": "Mineral Oil",
    //         "definition": "Persevering asymmetric internet solution",
    //         "created_at": "2019-05-01T13:53:59Z",
    //         "updated_at": "2019-09-21T21:45:37Z",
    //         "card_set_id": "2882558b-d698-4511-96c1-c721cc81c3b9"
    //       },
    //       {
    //         "id": "e1aafa1d-24f1-4cda-afca-31c72a718afb",
    //         "term": "Camphor Menthol Methyl Salicylate",
    //         "definition": "Synchronised object-oriented open architecture",
    //         "created_at": "2019-07-07T00:33:52Z",
    //         "updated_at": "2019-12-14T21:27:41Z",
    //         "card_set_id": "2882558b-d698-4511-96c1-c721cc81c3b9"
    //       },
    //       {
    //         "id": "b8e02bbf-fba0-454c-880d-4ef32b88cd38",
    //         "term": "Baptisia tinctoria, Borax, Candida albicans, Candida parasilosis, Echinacea, Kreosotum, Mercurius cyanatus,",
    //         "definition": "Centralized systematic database",
    //         "created_at": "2019-11-20T10:13:34Z",
    //         "updated_at": "2019-10-20T02:35:16Z",
    //         "card_set_id": "2882558b-d698-4511-96c1-c721cc81c3b9"
    //       },
    //       {
    //         "id": "466395cc-4463-4f7a-8b41-cbc12e9cdeba",
    //         "term": "Miconazole nitrate",
    //         "definition": "Centralized zero administration matrices",
    //         "created_at": "2019-10-13T11:54:12Z",
    //         "updated_at": "2019-05-31T19:17:32Z",
    //         "card_set_id": "bb427b1f-c30f-4d0d-a1b7-82f2f0068b98"
    //       },
    //       {
    //         "id": "0b8b47e1-02d2-45fb-b079-ae2e35ce61b2",
    //         "term": "Azathioprine",
    //         "definition": "Virtual multimedia policy",
    //         "created_at": "2019-01-27T11:50:54Z",
    //         "updated_at": "2019-07-20T23:58:41Z",
    //         "card_set_id": "bb427b1f-c30f-4d0d-a1b7-82f2f0068b98"
    //       },
    //       {
    //         "id": "1f12d0e6-e6c6-4bb1-b2b8-0ae95d8a3067",
    //         "term": "BELLADONNA ALKALOIDS W/ PHENOBARBITAL",
    //         "definition": "Pre-emptive composite attitude",
    //         "created_at": "2019-05-29T09:23:43Z",
    //         "updated_at": "2019-02-04T10:24:10Z",
    //         "card_set_id": "bb427b1f-c30f-4d0d-a1b7-82f2f0068b98"
    //       },
    //       {
    //         "id": "8e9a6ffd-5482-42a2-8dcd-c5b74e49d4ce",
    //         "term": "TRICLOSAN",
    //         "definition": "Persevering 6th generation service-desk",
    //         "created_at": "2019-09-17T22:41:46Z",
    //         "updated_at": "2019-11-30T09:39:30Z",
    //         "card_set_id": "bb427b1f-c30f-4d0d-a1b7-82f2f0068b98"
    //       },
    //       {
    //         "id": "21a5e0ae-3f83-4fb6-b8ea-c72447508233",
    //         "term": "Mineral oil, petrolatum, phenylephrine hcl",
    //         "definition": "Fully-configurable interactive utilisation",
    //         "created_at": "2019-06-14T18:49:33Z",
    //         "updated_at": "2019-06-04T21:33:54Z",
    //         "card_set_id": "bb427b1f-c30f-4d0d-a1b7-82f2f0068b98"
    //       },
    //       {
    //         "id": "645bf483-9445-40c7-8f63-712a0a2084ff",
    //         "term": "HydrOXYzine Hydrochloride",
    //         "definition": "Assimilated bandwidth-monitored monitoring",
    //         "created_at": "2019-05-30T23:57:59Z",
    //         "updated_at": "2019-07-07T05:12:31Z",
    //         "card_set_id": "bb427b1f-c30f-4d0d-a1b7-82f2f0068b98"
    //       },
    //       {
    //         "id": "0c44296e-b127-473e-9f30-0d1da55ae774",
    //         "term": "Sodium Fluoride",
    //         "definition": "Business-focused content-based support",
    //         "created_at": "2019-03-17T23:34:39Z",
    //         "updated_at": "2019-05-06T15:52:40Z",
    //         "card_set_id": "bb427b1f-c30f-4d0d-a1b7-82f2f0068b98"
    //       },
    //       {
    //         "id": "ddb82f9f-bb5a-42cc-8d30-88735008f066",
    //         "term": "Guaifenesin, Pseudoephedrine HCl",
    //         "definition": "Multi-lateral executive orchestration",
    //         "created_at": "2019-02-07T01:32:50Z",
    //         "updated_at": "2019-07-15T08:28:22Z",
    //         "card_set_id": "bb427b1f-c30f-4d0d-a1b7-82f2f0068b98"
    //       },
    //       {
    //         "id": "946566ae-7433-40fe-b959-b5d56d255904",
    //         "term": "Ammonium Lactate",
    //         "definition": "Down-sized human-resource middleware",
    //         "created_at": "2020-01-05T01:25:49Z",
    //         "updated_at": "2019-11-06T02:17:17Z",
    //         "card_set_id": "bb427b1f-c30f-4d0d-a1b7-82f2f0068b98"
    //       },
    //       {
    //         "id": "362b18a0-f24b-4ad9-84bd-b9a63c8af8ee",
    //         "term": "Hydrous Dextrose, Sodium Chloride, Sodium Gluconate, Sodium Acetate Trihydrate, Potassium Chloride and Magnesium Chloride Hexahydrate",
    //         "definition": "Reactive hybrid contingency",
    //         "created_at": "2019-10-10T14:52:57Z",
    //         "updated_at": "2019-11-21T16:42:07Z",
    //         "card_set_id": "bb427b1f-c30f-4d0d-a1b7-82f2f0068b98"
    //       },
    //       {
    //         "id": "b2847d1c-8731-474b-bfe6-668a42b2e88d",
    //         "term": "OCTINOXATE and TITANIUM DIOXIDE",
    //         "definition": "Secured intangible system engine",
    //         "created_at": "2019-11-18T22:10:39Z",
    //         "updated_at": "2019-10-07T11:33:59Z",
    //         "card_set_id": "bb427b1f-c30f-4d0d-a1b7-82f2f0068b98"
    //       },
    //       {
    //         "id": "1c698d06-b5c3-4db7-8a70-786ff0f1ed3b",
    //         "term": "Naproxen Sodium",
    //         "definition": "User-friendly well-modulated database",
    //         "created_at": "2019-12-14T01:49:54Z",
    //         "updated_at": "2019-09-05T06:28:42Z",
    //         "card_set_id": "bb427b1f-c30f-4d0d-a1b7-82f2f0068b98"
    //       },
    //       {
    //         "id": "c0cd1298-c5af-4905-83d2-d7924b2a4dc4",
    //         "term": "risperidone",
    //         "definition": "Decentralized multimedia intranet",
    //         "created_at": "2019-03-05T07:10:39Z",
    //         "updated_at": "2019-10-15T03:33:11Z",
    //         "card_set_id": "bb427b1f-c30f-4d0d-a1b7-82f2f0068b98"
    //       },
    //       {
    //         "id": "68344fb1-c435-4b3f-8fd4-814cbde374aa",
    //         "term": "White Petrolatum",
    //         "definition": "Realigned cohesive neural-net",
    //         "created_at": "2020-01-01T19:02:24Z",
    //         "updated_at": "2020-01-04T10:39:57Z",
    //         "card_set_id": "bb427b1f-c30f-4d0d-a1b7-82f2f0068b98"
    //       },
    //       {
    //         "id": "2d01ec68-ae3d-46e9-b73c-bdb1a9a9bea9",
    //         "term": "Homeopathic Liquid",
    //         "definition": "Grass-roots bandwidth-monitored emulation",
    //         "created_at": "2019-12-21T03:56:43Z",
    //         "updated_at": "2019-12-27T22:10:35Z",
    //         "card_set_id": "bb427b1f-c30f-4d0d-a1b7-82f2f0068b98"
    //       },
    //       {
    //         "id": "63a4d327-c607-4623-9c40-7b81188a5d8e",
    //         "term": "SODIUM FLUORIDE",
    //         "definition": "Compatible demand-driven alliance",
    //         "created_at": "2019-07-23T06:03:17Z",
    //         "updated_at": "2019-09-13T15:26:44Z",
    //         "card_set_id": "06f2a9f4-46b8-4fab-b9f5-1f4feb8be99e"
    //       },
    //       {
    //         "id": "f956e401-ee5f-4c31-8a08-aa05dd7c2e38",
    //         "term": "OCTINOXATE",
    //         "definition": "Seamless mission-critical capability",
    //         "created_at": "2019-11-24T10:07:56Z",
    //         "updated_at": "2019-04-29T09:00:50Z",
    //         "card_set_id": "06f2a9f4-46b8-4fab-b9f5-1f4feb8be99e"
    //       },
    //       {
    //         "id": "a3966925-52c3-4aec-905f-6a46f7c53591",
    //         "term": "Dimethicone",
    //         "definition": "Seamless holistic adapter",
    //         "created_at": "2020-01-05T01:59:18Z",
    //         "updated_at": "2019-10-15T00:26:31Z",
    //         "card_set_id": "06f2a9f4-46b8-4fab-b9f5-1f4feb8be99e"
    //       },
    //       {
    //         "id": "ca71c2a9-8a9c-4d29-8b3c-930b5a0bdc29",
    //         "term": "Abies canadensis, Anacardium orientale, Argentum metallicum, Adrenocorticotrophin, Hypothalamus, Ign",
    //         "definition": "Abies canadensis, Anacardium orientale, Argentum metallicum, Adrenocorticotrophin, Hypothalamus, Ign",
    //         "created_at": "2020-01-04T14:22:04Z",
    //         "updated_at": "2019-06-26T02:25:30Z",
    //         "card_set_id": "06f2a9f4-46b8-4fab-b9f5-1f4feb8be99e"
    //       },
    //       {
    //         "id": "d57eba63-2d60-4c55-8336-f337f67dd306",
    //         "term": "paroxetine hydrochloride",
    //         "definition": "Customizable next generation framework",
    //         "created_at": "2019-07-04T23:11:36Z",
    //         "updated_at": "2019-05-02T07:53:17Z",
    //         "card_set_id": "06f2a9f4-46b8-4fab-b9f5-1f4feb8be99e"
    //       },
    //       {
    //         "id": "c55043fa-ca66-47a2-9543-5e9fbe0edff5",
    //         "term": "TITANIUM DIOXIDE, ZINC OXIDE, ARBUTIN, ADENOSINE",
    //         "definition": "Future-proofed real-time approach",
    //         "created_at": "2019-09-13T15:37:25Z",
    //         "updated_at": "2019-01-22T10:21:38Z",
    //         "card_set_id": "06f2a9f4-46b8-4fab-b9f5-1f4feb8be99e"
    //       },
    //       {
    //         "id": "20f44cd9-df99-429f-9242-9d6275f59992",
    //         "term": "Nicotine polacrilex",
    //         "definition": "Multi-layered hybrid product",
    //         "created_at": "2019-10-17T21:47:14Z",
    //         "updated_at": "2019-02-25T18:42:39Z",
    //         "card_set_id": "06f2a9f4-46b8-4fab-b9f5-1f4feb8be99e"
    //       },
    //       {
    //         "id": "530f483c-17e6-4b17-add9-6e28e445bf85",
    //         "term": "Minoxidil",
    //         "definition": "Object-based attitude-oriented website",
    //         "created_at": "2019-10-06T01:18:37Z",
    //         "updated_at": "2019-10-19T14:13:48Z",
    //         "card_set_id": "06f2a9f4-46b8-4fab-b9f5-1f4feb8be99e"
    //       },
    //       {
    //         "id": "8f7dae95-c741-4174-971d-9682f5ac8b31",
    //         "term": "NITROGEN",
    //         "definition": "Implemented holistic infrastructure",
    //         "created_at": "2020-01-03T21:10:49Z",
    //         "updated_at": "2019-05-08T03:56:50Z",
    //         "card_set_id": "06f2a9f4-46b8-4fab-b9f5-1f4feb8be99e"
    //       },
    //       {
    //         "id": "f84ecb6d-f8bc-4c86-bcda-fe6e5308bd79",
    //         "term": "Levofloxacin",
    //         "definition": "Exclusive real-time complexity",
    //         "created_at": "2019-08-05T10:30:25Z",
    //         "updated_at": "2019-08-08T12:53:12Z",
    //         "card_set_id": "06f2a9f4-46b8-4fab-b9f5-1f4feb8be99e"
    //       },
    //       {
    //         "id": "88c720cf-c789-4829-8998-d1b0b6048477",
    //         "term": "epoetin alfa",
    //         "definition": "Sharable reciprocal alliance",
    //         "created_at": "2019-09-15T23:03:18Z",
    //         "updated_at": "2019-05-09T16:30:29Z",
    //         "card_set_id": "06f2a9f4-46b8-4fab-b9f5-1f4feb8be99e"
    //       },
    //       {
    //         "id": "664b79fc-15ad-4dba-aecc-0e106a60e000",
    //         "term": "dextromethorphan polistirex",
    //         "definition": "Reduced cohesive analyzer",
    //         "created_at": "2019-02-13T18:26:01Z",
    //         "updated_at": "2019-11-06T16:41:43Z",
    //         "card_set_id": "06f2a9f4-46b8-4fab-b9f5-1f4feb8be99e"
    //       },
    //       {
    //         "id": "c9292275-190b-486a-9f6a-3b285922661b",
    //         "term": "Nadolol",
    //         "definition": "Cross-group background infrastructure",
    //         "created_at": "2020-01-05T00:02:34Z",
    //         "updated_at": "2020-01-10T01:51:57Z",
    //         "card_set_id": "06f2a9f4-46b8-4fab-b9f5-1f4feb8be99e"
    //       },
    //       {
    //         "id": "fc19c21a-805b-4887-86bd-04b1a7ed43e2",
    //         "term": "Epinephrine",
    //         "definition": "Customizable leading edge utilisation",
    //         "created_at": "2019-04-26T21:40:58Z",
    //         "updated_at": "2019-10-26T04:35:56Z",
    //         "card_set_id": "06f2a9f4-46b8-4fab-b9f5-1f4feb8be99e"
    //       },
    //       {
    //         "id": "94739623-7ba1-4996-969c-f83e610d15db",
    //         "term": "progesterone",
    //         "definition": "Digitized even-keeled capability",
    //         "created_at": "2019-11-22T01:57:50Z",
    //         "updated_at": "2019-04-03T03:33:19Z",
    //         "card_set_id": "06f2a9f4-46b8-4fab-b9f5-1f4feb8be99e"
    //       },
    //       {
    //         "id": "ad166c38-1f10-4fa3-b414-aa8835abee6a",
    //         "term": "Aluminum Chlorohydrate",
    //         "definition": "Exclusive leading edge frame",
    //         "created_at": "2019-06-22T21:24:13Z",
    //         "updated_at": "2019-03-01T08:17:42Z",
    //         "card_set_id": "3daf48a2-1b31-4e76-ad5f-78c131a76deb"
    //       },
    //       {
    //         "id": "1d014208-a44a-4d4f-ad2a-10b2413b80e1",
    //         "term": "Simethicone",
    //         "definition": "Horizontal real-time moratorium",
    //         "created_at": "2019-05-13T13:39:52Z",
    //         "updated_at": "2019-02-13T14:18:35Z",
    //         "card_set_id": "3daf48a2-1b31-4e76-ad5f-78c131a76deb"
    //       },
    //       {
    //         "id": "714586db-0141-43ea-95c9-4404403b5897",
    //         "term": "ZINC OXIDE, OCTINOXATE, TITANIUM DIOXIDE, OCTISALATE",
    //         "definition": "Ameliorated didactic toolset",
    //         "created_at": "2020-01-13T10:32:55Z",
    //         "updated_at": "2020-01-01T12:16:51Z",
    //         "card_set_id": "3daf48a2-1b31-4e76-ad5f-78c131a76deb"
    //       },
    //       {
    //         "id": "c9d7364d-4031-4184-b0dd-1a0183ec3f20",
    //         "term": "OCTINOXATE, TITANIUM DIOXIDE, OCTISALATE, and OXYBENZONE",
    //         "definition": "Inverse needs-based strategy",
    //         "created_at": "2019-03-09T16:27:55Z",
    //         "updated_at": "2019-01-19T15:26:03Z",
    //         "card_set_id": "3daf48a2-1b31-4e76-ad5f-78c131a76deb"
    //       },
    //       {
    //         "id": "148fe9b0-b36f-4e88-acba-de8d62b0f2ff",
    //         "term": "Anticoagulant Citrate Phosphate Dextrose (CPD) Solution and ADSOL Preservation Solution",
    //         "definition": "Digitized even-keeled algorithm",
    //         "created_at": "2019-05-29T19:26:55Z",
    //         "updated_at": "2019-11-25T07:19:34Z",
    //         "card_set_id": "3daf48a2-1b31-4e76-ad5f-78c131a76deb"
    //       },
    //       {
    //         "id": "68e5bf17-ae86-4fba-baf0-02879a8311f6",
    //         "term": "Losartan Potassium and Hydrochlorothiazide",
    //         "definition": "Persistent uniform data-warehouse",
    //         "created_at": "2019-12-27T06:50:28Z",
    //         "updated_at": "2019-10-24T05:27:30Z",
    //         "card_set_id": "3daf48a2-1b31-4e76-ad5f-78c131a76deb"
    //       },
    //       {
    //         "id": "76d8c7b6-f6e9-4cf6-a12e-0f29ce401cb8",
    //         "term": "guaifenesin",
    //         "definition": "Customizable contextually-based capability",
    //         "created_at": "2019-05-17T19:10:27Z",
    //         "updated_at": "2019-02-18T08:28:30Z",
    //         "card_set_id": "3daf48a2-1b31-4e76-ad5f-78c131a76deb"
    //       },
    //       {
    //         "id": "a00e5d93-aa0f-47ad-9918-11b7fbe76de0",
    //         "term": "Triamcinolone Acetonide",
    //         "definition": "Cloned didactic Graphic Interface",
    //         "created_at": "2019-10-12T17:21:23Z",
    //         "updated_at": "2019-07-26T04:47:08Z",
    //         "card_set_id": "3daf48a2-1b31-4e76-ad5f-78c131a76deb"
    //       },
    //       {
    //         "id": "35b9ade2-1238-4c09-bfa4-6748be26a2bf",
    //         "term": "acyclovir",
    //         "definition": "Vision-oriented bandwidth-monitored implementation",
    //         "created_at": "2019-07-11T12:38:07Z",
    //         "updated_at": "2019-09-12T10:20:19Z",
    //         "card_set_id": "3daf48a2-1b31-4e76-ad5f-78c131a76deb"
    //       },
    //       {
    //         "id": "8e451321-44c1-4a55-9901-3369ae935426",
    //         "term": "Doxylamine succinate",
    //         "definition": "Robust global task-force",
    //         "created_at": "2019-07-01T11:03:17Z",
    //         "updated_at": "2019-05-15T17:15:08Z",
    //         "card_set_id": "3daf48a2-1b31-4e76-ad5f-78c131a76deb"
    //       },
    //       {
    //         "id": "7efd0e39-9e80-4d5b-8bca-db02787a0f4c",
    //         "term": "Redwood Pollen",
    //         "definition": "Profound 4th generation focus group",
    //         "created_at": "2019-09-16T10:41:37Z",
    //         "updated_at": "2019-05-05T11:31:31Z",
    //         "card_set_id": "3daf48a2-1b31-4e76-ad5f-78c131a76deb"
    //       },
    //       {
    //         "id": "b7733d32-7851-49ae-9677-74cca782cf1f",
    //         "term": "Megestrol Acetate",
    //         "definition": "Distributed holistic complexity",
    //         "created_at": "2019-10-26T22:05:02Z",
    //         "updated_at": "2019-09-29T13:42:04Z",
    //         "card_set_id": "3daf48a2-1b31-4e76-ad5f-78c131a76deb"
    //       },
    //       {
    //         "id": "710fe07d-721c-4870-b176-febcc94579fd",
    //         "term": "warfarin sodium",
    //         "definition": "Multi-layered client-driven success",
    //         "created_at": "2019-10-19T04:33:51Z",
    //         "updated_at": "2019-03-15T04:15:59Z",
    //         "card_set_id": "3daf48a2-1b31-4e76-ad5f-78c131a76deb"
    //       },
    //       {
    //         "id": "a9a50703-0500-40e9-9e41-7ae3b23cd0b4",
    //         "term": "OCTINOXATE",
    //         "definition": "Synchronised asymmetric pricing structure",
    //         "created_at": "2019-11-29T11:32:05Z",
    //         "updated_at": "2019-12-02T09:01:55Z",
    //         "card_set_id": "3daf48a2-1b31-4e76-ad5f-78c131a76deb"
    //       },
    //       {
    //         "id": "0d60f0c4-fd81-4f41-8cb5-fead651df79b",
    //         "term": "Pramipexole Dihydrochloride",
    //         "definition": "Synergized optimizing instruction set",
    //         "created_at": "2019-07-02T13:16:31Z",
    //         "updated_at": "2019-11-30T02:58:09Z",
    //         "card_set_id": "3daf48a2-1b31-4e76-ad5f-78c131a76deb"
    //       },
    //       {
    //         "id": "25b55bb5-71b6-4d3e-89e2-73ac0a037c50",
    //         "term": "Arsenic Trioxide, Calcium Carbonate, Strychnos Ignatii Seed, Potassium Carbonate, Lachesis Muta Venom, Sodium Chloride, Phosphorus, Pulsatilla",
    //         "definition": "Devolved systematic protocol",
    //         "created_at": "2019-08-27T18:00:50Z",
    //         "updated_at": "2019-11-01T15:01:42Z",
    //         "card_set_id": "a7aa566d-af24-46a5-a739-cbbbac07cbbd"
    //       },
    //       {
    //         "id": "5c43fbc7-29a1-448e-9bd4-aadfec5ce280",
    //         "term": "Arnica Montana, Bellis Perennis, Matricaria Recutita, Ipecac, and Lycopodium Clavatum Spore",
    //         "definition": "Multi-lateral user-facing analyzer",
    //         "created_at": "2019-02-03T21:22:39Z",
    //         "updated_at": "2019-10-28T22:23:29Z",
    //         "card_set_id": "a7aa566d-af24-46a5-a739-cbbbac07cbbd"
    //       },
    //       {
    //         "id": "362f3ab1-6fbf-4f1a-9fd7-ad1c7a2a1b7c",
    //         "term": "perampanel",
    //         "definition": "Multi-lateral logistical interface",
    //         "created_at": "2019-08-07T19:27:24Z",
    //         "updated_at": "2019-06-10T09:00:08Z",
    //         "card_set_id": "a7aa566d-af24-46a5-a739-cbbbac07cbbd"
    //       },
    //       {
    //         "id": "577bfb22-9806-43f1-80e3-d49d0d19e9cb",
    //         "term": "Mirtazapine",
    //         "definition": "Mandatory contextually-based encoding",
    //         "created_at": "2019-11-21T21:20:06Z",
    //         "updated_at": "2019-12-16T22:06:03Z",
    //         "card_set_id": "a7aa566d-af24-46a5-a739-cbbbac07cbbd"
    //       },
    //       {
    //         "id": "13e0b16e-8963-4df3-82c0-5befca2fe142",
    //         "term": "Salicylic Acid",
    //         "definition": "Profit-focused disintermediate toolset",
    //         "created_at": "2019-12-25T06:13:04Z",
    //         "updated_at": "2019-02-22T14:48:33Z",
    //         "card_set_id": "a7aa566d-af24-46a5-a739-cbbbac07cbbd"
    //       },
    //       {
    //         "id": "5689453c-ae1d-4391-a981-15b887f87310",
    //         "term": "White Oak",
    //         "definition": "Future-proofed static firmware",
    //         "created_at": "2019-10-22T01:36:43Z",
    //         "updated_at": "2019-11-25T12:24:01Z",
    //         "card_set_id": "a7aa566d-af24-46a5-a739-cbbbac07cbbd"
    //       },
    //       {
    //         "id": "c8232769-b44f-4a8b-a70f-80ae7a4f80c5",
    //         "term": "Salicylic acid",
    //         "definition": "Reactive bottom-line hardware",
    //         "created_at": "2019-06-03T18:59:29Z",
    //         "updated_at": "2019-12-20T03:33:09Z",
    //         "card_set_id": "a7aa566d-af24-46a5-a739-cbbbac07cbbd"
    //       },
    //       {
    //         "id": "6be6ff07-a732-431b-90aa-92fe5ed59d52",
    //         "term": "Influenza A Virus, Influenza B Virus, Histaminum hydrochloricum, Aconitum nap., Aralia quinquefolia,",
    //         "definition": "Influenza A Virus, Influenza B Virus, Histaminum hydrochloricum, Aconitum nap., Aralia quinquefolia,",
    //         "created_at": "2019-10-08T22:28:12Z",
    //         "updated_at": "2020-01-13T04:59:24Z",
    //         "card_set_id": "a7aa566d-af24-46a5-a739-cbbbac07cbbd"
    //       },
    //       {
    //         "id": "5136255a-e382-4475-9630-a22a48903b6c",
    //         "term": "Diltiazem Hydrochloride",
    //         "definition": "Centralized user-facing firmware",
    //         "created_at": "2019-02-22T13:56:44Z",
    //         "updated_at": "2019-11-21T13:21:01Z",
    //         "card_set_id": "a7aa566d-af24-46a5-a739-cbbbac07cbbd"
    //       },
    //       {
    //         "id": "2a67bb39-f69d-40c9-9e3f-743b898577df",
    //         "term": "DEXTROSE and POTASSIUM CHLORIDE",
    //         "definition": "Realigned well-modulated open system",
    //         "created_at": "2019-03-29T16:50:52Z",
    //         "updated_at": "2019-07-18T04:21:31Z",
    //         "card_set_id": "a7aa566d-af24-46a5-a739-cbbbac07cbbd"
    //       },
    //       {
    //         "id": "950b76d3-9ab2-40c1-a37e-e66b1fdbdaad",
    //         "term": "Estradiol",
    //         "definition": "Re-engineered content-based circuit",
    //         "created_at": "2019-03-25T00:03:39Z",
    //         "updated_at": "2019-09-04T03:57:24Z",
    //         "card_set_id": "a7aa566d-af24-46a5-a739-cbbbac07cbbd"
    //       },
    //       {
    //         "id": "f9aa13c3-a131-4677-a9d1-edbb5474df19",
    //         "term": "RANOLAZINE",
    //         "definition": "Progressive global moderator",
    //         "created_at": "2019-07-20T14:45:46Z",
    //         "updated_at": "2019-09-03T17:35:41Z",
    //         "card_set_id": "a7aa566d-af24-46a5-a739-cbbbac07cbbd"
    //       },
    //       {
    //         "id": "eb5749a3-fc14-4918-890a-8978d2bfb509",
    //         "term": "Dextromethorphan Hydrobromide / Guaifenesin",
    //         "definition": "Switchable 24 hour internet solution",
    //         "created_at": "2019-06-14T20:17:56Z",
    //         "updated_at": "2019-03-21T22:21:55Z",
    //         "card_set_id": "a7aa566d-af24-46a5-a739-cbbbac07cbbd"
    //       },
    //       {
    //         "id": "682c3bd9-06ad-4dfd-ac62-5090b08db104",
    //         "term": "Clotrimazole",
    //         "definition": "Upgradable value-added definition",
    //         "created_at": "2019-10-26T05:27:40Z",
    //         "updated_at": "2019-11-06T15:23:08Z",
    //         "card_set_id": "a7aa566d-af24-46a5-a739-cbbbac07cbbd"
    //       },
    //       {
    //         "id": "7dae48d0-65df-4b5f-a650-77b169c28050",
    //         "term": "not applicable",
    //         "definition": "Reduced global complexity",
    //         "created_at": "2019-11-22T11:58:39Z",
    //         "updated_at": "2019-12-08T22:22:23Z",
    //         "card_set_id": "a7aa566d-af24-46a5-a739-cbbbac07cbbd"
    //       },
    //       {
    //         "id": "be59d7da-be96-4f1a-96ee-7bdf9f8de4dc",
    //         "term": "Meprobamate",
    //         "definition": "Multi-layered 5th generation challenge",
    //         "created_at": "2019-08-24T08:54:37Z",
    //         "updated_at": "2019-03-18T16:55:53Z",
    //         "card_set_id": "b56d6faf-6976-4bdc-a4a2-cebe734290bf"
    //       },
    //       {
    //         "id": "d3c158b0-b783-4cd0-86e2-5736d230b909",
    //         "term": "Titanium Dioxide",
    //         "definition": "Streamlined high-level contingency",
    //         "created_at": "2019-09-09T17:19:58Z",
    //         "updated_at": "2019-09-09T15:51:49Z",
    //         "card_set_id": "b56d6faf-6976-4bdc-a4a2-cebe734290bf"
    //       },
    //       {
    //         "id": "0f25da04-c4f2-4b5b-9a01-6760ee0e0c4c",
    //         "term": "Folic Acid",
    //         "definition": "Team-oriented eco-centric data-warehouse",
    //         "created_at": "2019-01-30T12:40:31Z",
    //         "updated_at": "2019-06-06T21:41:13Z",
    //         "card_set_id": "b56d6faf-6976-4bdc-a4a2-cebe734290bf"
    //       },
    //       {
    //         "id": "007e0c4d-9acb-412d-8e85-5e423f7d46a7",
    //         "term": "Oxygen",
    //         "definition": "Enterprise-wide contextually-based firmware",
    //         "created_at": "2019-02-11T04:40:45Z",
    //         "updated_at": "2019-03-22T23:41:00Z",
    //         "card_set_id": "b56d6faf-6976-4bdc-a4a2-cebe734290bf"
    //       },
    //       {
    //         "id": "824b5c55-4f72-4ae4-b669-ff88eba64d87",
    //         "term": "Hyoscyamine Sulfate",
    //         "definition": "Configurable client-server product",
    //         "created_at": "2019-04-23T03:37:57Z",
    //         "updated_at": "2019-03-31T02:35:52Z",
    //         "card_set_id": "b56d6faf-6976-4bdc-a4a2-cebe734290bf"
    //       },
    //       {
    //         "id": "97a6f630-1264-4b19-a683-37acf1d0f88f",
    //         "term": "Nitrofurantoin Macrocrystals",
    //         "definition": "Expanded optimal projection",
    //         "created_at": "2019-06-16T20:26:57Z",
    //         "updated_at": "2019-12-28T11:52:53Z",
    //         "card_set_id": "b56d6faf-6976-4bdc-a4a2-cebe734290bf"
    //       },
    //       {
    //         "id": "5c5d5d6e-28bc-4ef8-8a16-305c3d13d1f0",
    //         "term": "Ibuprofen",
    //         "definition": "Organized global info-mediaries",
    //         "created_at": "2019-07-15T04:15:10Z",
    //         "updated_at": "2019-03-15T06:18:27Z",
    //         "card_set_id": "b56d6faf-6976-4bdc-a4a2-cebe734290bf"
    //       },
    //       {
    //         "id": "90b85c2b-6831-45c9-ad07-351de5f71bea",
    //         "term": "CALENDULA OFFICINALIS FLOWER, SAMBUCUS NIGRA FLOWER, ECHINACEA ANGUSTIFOLIA, THUJA OCCIDENTALIS",
    //         "definition": "Fundamental stable knowledge base",
    //         "created_at": "2019-09-04T05:44:13Z",
    //         "updated_at": "2019-02-01T17:46:57Z",
    //         "card_set_id": "b56d6faf-6976-4bdc-a4a2-cebe734290bf"
    //       },
    //       {
    //         "id": "d6c10815-baf3-4e03-8f34-a6b2b550402e",
    //         "term": "Zidovudine",
    //         "definition": "Streamlined radical encryption",
    //         "created_at": "2020-01-04T08:27:12Z",
    //         "updated_at": "2019-12-28T11:17:21Z",
    //         "card_set_id": "b56d6faf-6976-4bdc-a4a2-cebe734290bf"
    //       },
    //       {
    //         "id": "abdb0805-c155-4053-a7e4-fa81609c48aa",
    //         "term": "Alcohol",
    //         "definition": "Multi-tiered hybrid service-desk",
    //         "created_at": "2019-12-18T11:42:16Z",
    //         "updated_at": "2019-03-14T09:00:13Z",
    //         "card_set_id": "b56d6faf-6976-4bdc-a4a2-cebe734290bf"
    //       },
    //       {
    //         "id": "4af20c2a-f832-4b68-99d7-74eda36d0100",
    //         "term": "Invisible Solid Crisp Breeze",
    //         "definition": "Front-line composite superstructure",
    //         "created_at": "2019-08-24T19:14:30Z",
    //         "updated_at": "2019-04-12T01:53:14Z",
    //         "card_set_id": "b56d6faf-6976-4bdc-a4a2-cebe734290bf"
    //       },
    //       {
    //         "id": "6128d0ff-c174-4b5f-802a-af1c7233a135",
    //         "term": "OCTINOXATE and TITANIUM DIOXIDE",
    //         "definition": "Networked non-volatile solution",
    //         "created_at": "2019-08-15T13:22:30Z",
    //         "updated_at": "2019-10-20T00:44:54Z",
    //         "card_set_id": "b56d6faf-6976-4bdc-a4a2-cebe734290bf"
    //       },
    //       {
    //         "id": "4bb02804-01c8-4cbd-8bf6-0075ad1efd78",
    //         "term": "ALCOHOL",
    //         "definition": "Cross-group composite infrastructure",
    //         "created_at": "2019-02-14T19:04:17Z",
    //         "updated_at": "2019-03-20T04:14:44Z",
    //         "card_set_id": "b56d6faf-6976-4bdc-a4a2-cebe734290bf"
    //       },
    //       {
    //         "id": "3f99e2d3-3dd1-41e0-8a53-ceeef3bbd967",
    //         "term": "Loperamide Hydrochloride",
    //         "definition": "Sharable upward-trending support",
    //         "created_at": "2019-12-13T05:30:50Z",
    //         "updated_at": "2019-09-02T13:44:59Z",
    //         "card_set_id": "b56d6faf-6976-4bdc-a4a2-cebe734290bf"
    //       },
    //       {
    //         "id": "459c57a9-befc-4ef6-b2a5-40888f53ab14",
    //         "term": "Escitslopram",
    //         "definition": "Optional upward-trending toolset",
    //         "created_at": "2019-07-15T11:03:32Z",
    //         "updated_at": "2019-07-30T21:58:35Z",
    //         "card_set_id": "b56d6faf-6976-4bdc-a4a2-cebe734290bf"
    //       },
    //       {
    //         "id": "02cd1d98-2aca-4f72-8b3e-b2c3dccf95c1",
    //         "term": "butalbital and acetaminophen",
    //         "definition": "Reactive zero tolerance neural-net",
    //         "created_at": "2019-02-03T01:41:46Z",
    //         "updated_at": "2019-12-10T15:47:58Z",
    //         "card_set_id": "7feb7455-4b76-44df-87fe-2c64ec392a15"
    //       },
    //       {
    //         "id": "f952d291-acd9-46f8-94fe-e5f4f9975c8c",
    //         "term": "Hydrocodone Bitartrate and Acetaminophen",
    //         "definition": "Polarised interactive orchestration",
    //         "created_at": "2019-04-13T01:57:59Z",
    //         "updated_at": "2019-10-16T10:29:21Z",
    //         "card_set_id": "7feb7455-4b76-44df-87fe-2c64ec392a15"
    //       },
    //       {
    //         "id": "b55b287d-0fde-491d-85e5-79624804a5a7",
    //         "term": "Cetirizine HCl, Pseudoephedrine HCl",
    //         "definition": "Streamlined dynamic initiative",
    //         "created_at": "2019-10-19T17:52:23Z",
    //         "updated_at": "2019-12-22T18:28:46Z",
    //         "card_set_id": "7feb7455-4b76-44df-87fe-2c64ec392a15"
    //       },
    //       {
    //         "id": "2c93e0d2-bf60-4ea3-b33f-ddf092fb4909",
    //         "term": "propranolol hydrochloride",
    //         "definition": "Inverse demand-driven budgetary management",
    //         "created_at": "2019-08-02T15:32:14Z",
    //         "updated_at": "2019-09-27T07:50:02Z",
    //         "card_set_id": "7feb7455-4b76-44df-87fe-2c64ec392a15"
    //       },
    //       {
    //         "id": "6fca84d5-083a-4c48-b2a3-ef1eb997cdec",
    //         "term": "Ibuprofen",
    //         "definition": "Implemented clear-thinking portal",
    //         "created_at": "2019-03-28T16:46:52Z",
    //         "updated_at": "2019-06-29T14:51:07Z",
    //         "card_set_id": "7feb7455-4b76-44df-87fe-2c64ec392a15"
    //       },
    //       {
    //         "id": "c8a9e6f9-c02a-478c-bc27-7f6a71900ff4",
    //         "term": "diclofenac sodium",
    //         "definition": "Visionary contextually-based model",
    //         "created_at": "2019-08-21T23:17:58Z",
    //         "updated_at": "2019-09-29T14:53:02Z",
    //         "card_set_id": "7feb7455-4b76-44df-87fe-2c64ec392a15"
    //       },
    //       {
    //         "id": "15b77bb0-399c-403d-b627-3aa0ef8cb70a",
    //         "term": "Paroxetine hydrochloride hemihydrate",
    //         "definition": "Multi-channelled web-enabled interface",
    //         "created_at": "2019-11-23T03:04:08Z",
    //         "updated_at": "2019-08-27T00:49:16Z",
    //         "card_set_id": "7feb7455-4b76-44df-87fe-2c64ec392a15"
    //       },
    //       {
    //         "id": "2c92e70d-2d73-4cd4-893d-5be6dd68d537",
    //         "term": "Alcohol",
    //         "definition": "Operative systematic superstructure",
    //         "created_at": "2019-03-29T23:40:32Z",
    //         "updated_at": "2019-10-13T02:52:10Z",
    //         "card_set_id": "7feb7455-4b76-44df-87fe-2c64ec392a15"
    //       },
    //       {
    //         "id": "5f0721d2-e3a7-4870-bf74-e1143effb5da",
    //         "term": "Acetaminophen, Dextromethorphan HBr, Doxylamine succinate",
    //         "definition": "Integrated context-sensitive archive",
    //         "created_at": "2019-05-08T06:28:19Z",
    //         "updated_at": "2019-11-18T05:24:51Z",
    //         "card_set_id": "7feb7455-4b76-44df-87fe-2c64ec392a15"
    //       },
    //       {
    //         "id": "5b94ba48-0503-4713-9eab-32d1137e5121",
    //         "term": "Rabeprazole sodium",
    //         "definition": "Front-line static circuit",
    //         "created_at": "2019-10-28T18:30:34Z",
    //         "updated_at": "2019-11-29T20:24:48Z",
    //         "card_set_id": "7feb7455-4b76-44df-87fe-2c64ec392a15"
    //       },
    //       {
    //         "id": "f8137a09-49bd-471d-a740-8b85c0ea05c4",
    //         "term": "alcohol",
    //         "definition": "Integrated local strategy",
    //         "created_at": "2020-01-17T13:30:20Z",
    //         "updated_at": "2019-10-30T10:42:39Z",
    //         "card_set_id": "7feb7455-4b76-44df-87fe-2c64ec392a15"
    //       },
    //       {
    //         "id": "1c814731-a734-462c-98e5-fc3a0048b094",
    //         "term": "Bethanechol Chloride 10 mg",
    //         "definition": "Upgradable solution-oriented info-mediaries",
    //         "created_at": "2019-10-27T09:51:58Z",
    //         "updated_at": "2019-03-21T01:24:31Z",
    //         "card_set_id": "7feb7455-4b76-44df-87fe-2c64ec392a15"
    //       },
    //       {
    //         "id": "a9d52842-e7e0-4f5c-b7d0-baf454527b60",
    //         "term": "Acetaminophen, Dextromethorphan HBr, Phenylephrine HCl",
    //         "definition": "Profound full-range monitoring",
    //         "created_at": "2019-09-23T09:42:13Z",
    //         "updated_at": "2019-08-17T04:05:16Z",
    //         "card_set_id": "7feb7455-4b76-44df-87fe-2c64ec392a15"
    //       },
    //       {
    //         "id": "9a4e7ac3-6d04-43dd-9bde-5e10ec75adf9",
    //         "term": "Zinc Oxide",
    //         "definition": "Ameliorated system-worthy architecture",
    //         "created_at": "2019-12-06T07:10:32Z",
    //         "updated_at": "2020-01-14T18:31:43Z",
    //         "card_set_id": "7feb7455-4b76-44df-87fe-2c64ec392a15"
    //       },
    //       {
    //         "id": "f7fbff9a-cde1-4598-a313-274ad7067933",
    //         "term": "risperidone",
    //         "definition": "Streamlined encompassing system engine",
    //         "created_at": "2019-12-29T22:04:04Z",
    //         "updated_at": "2019-09-06T01:28:29Z",
    //         "card_set_id": "7feb7455-4b76-44df-87fe-2c64ec392a15"
    //       },
    //       {
    //         "id": "a2b0201c-0251-4d5c-bae5-cf07f35e5f6f",
    //         "term": "Fluoride",
    //         "definition": "Phased composite extranet",
    //         "created_at": "2019-06-05T13:45:00Z",
    //         "updated_at": "2019-12-24T21:21:47Z",
    //         "card_set_id": "ac3d08ee-b08c-4535-8ddf-4745b5a22a57"
    //       },
    //       {
    //         "id": "bb1427be-05b0-4f26-9f24-617ea246f607",
    //         "term": "Glyburide and Metformin",
    //         "definition": "Multi-channelled bifurcated software",
    //         "created_at": "2019-05-18T07:16:56Z",
    //         "updated_at": "2019-09-13T18:08:49Z",
    //         "card_set_id": "ac3d08ee-b08c-4535-8ddf-4745b5a22a57"
    //       },
    //       {
    //         "id": "5a1cb85f-2e3d-40ad-a97c-5db742c29655",
    //         "term": "Rosuvastatin calcium",
    //         "definition": "Horizontal coherent alliance",
    //         "created_at": "2019-04-11T05:13:08Z",
    //         "updated_at": "2019-05-14T16:27:19Z",
    //         "card_set_id": "ac3d08ee-b08c-4535-8ddf-4745b5a22a57"
    //       },
    //       {
    //         "id": "7d28ad73-5a47-4558-9f68-7c48b9838369",
    //         "term": "Naproxen Sodium",
    //         "definition": "Expanded multi-state collaboration",
    //         "created_at": "2019-07-05T11:55:51Z",
    //         "updated_at": "2019-03-30T12:56:43Z",
    //         "card_set_id": "ac3d08ee-b08c-4535-8ddf-4745b5a22a57"
    //       },
    //       {
    //         "id": "609d314c-3537-489f-a1e1-2a7085213845",
    //         "term": "Glyburide",
    //         "definition": "Reverse-engineered heuristic time-frame",
    //         "created_at": "2019-05-21T16:55:26Z",
    //         "updated_at": "2019-12-02T21:54:24Z",
    //         "card_set_id": "ac3d08ee-b08c-4535-8ddf-4745b5a22a57"
    //       },
    //       {
    //         "id": "28364036-3990-422e-a078-b9f65382e044",
    //         "term": "SILICON DIOXIDE",
    //         "definition": "Persevering responsive flexibility",
    //         "created_at": "2019-02-10T15:53:36Z",
    //         "updated_at": "2019-05-13T09:05:24Z",
    //         "card_set_id": "ac3d08ee-b08c-4535-8ddf-4745b5a22a57"
    //       },
    //       {
    //         "id": "7400b16d-a0f5-41ce-9ccb-ffc008dff17f",
    //         "term": "Cephalexin",
    //         "definition": "Robust tangible project",
    //         "created_at": "2019-05-24T21:52:03Z",
    //         "updated_at": "2019-10-25T16:49:36Z",
    //         "card_set_id": "ac3d08ee-b08c-4535-8ddf-4745b5a22a57"
    //       },
    //       {
    //         "id": "1ec306c1-16df-45f3-be99-bc6c106a1c0d",
    //         "term": "METRONIDAZOLE",
    //         "definition": "Virtual logistical moderator",
    //         "created_at": "2019-09-06T23:16:09Z",
    //         "updated_at": "2019-07-16T02:03:40Z",
    //         "card_set_id": "ac3d08ee-b08c-4535-8ddf-4745b5a22a57"
    //       },
    //       {
    //         "id": "6db95ff6-b63e-47ca-bfca-e609a57fd36e",
    //         "term": "Clomipramine Hydrochloride",
    //         "definition": "Profound 24/7 structure",
    //         "created_at": "2019-12-30T23:37:49Z",
    //         "updated_at": "2019-03-29T04:42:45Z",
    //         "card_set_id": "ac3d08ee-b08c-4535-8ddf-4745b5a22a57"
    //       },
    //       {
    //         "id": "aaa07586-07b1-4d5f-8ab0-b227e2b08ff3",
    //         "term": "Hydrocortisone Acetate",
    //         "definition": "De-engineered client-server core",
    //         "created_at": "2019-12-29T08:56:30Z",
    //         "updated_at": "2019-05-27T15:38:05Z",
    //         "card_set_id": "ac3d08ee-b08c-4535-8ddf-4745b5a22a57"
    //       },
    //       {
    //         "id": "4b05d1ba-012a-4f78-ab8f-06e49ff19847",
    //         "term": "Metronidazole",
    //         "definition": "Progressive high-level function",
    //         "created_at": "2019-07-18T06:50:57Z",
    //         "updated_at": "2019-09-21T06:02:08Z",
    //         "card_set_id": "ac3d08ee-b08c-4535-8ddf-4745b5a22a57"
    //       },
    //       {
    //         "id": "415273a9-e2c3-46c1-b724-5882f501d1e1",
    //         "term": "GLYCERIN",
    //         "definition": "Versatile upward-trending function",
    //         "created_at": "2019-10-22T23:43:30Z",
    //         "updated_at": "2019-12-11T16:09:49Z",
    //         "card_set_id": "ac3d08ee-b08c-4535-8ddf-4745b5a22a57"
    //       },
    //       {
    //         "id": "79913c69-5f53-4d7d-869a-26392b98f13e",
    //         "term": "Nicotine Polacrilex",
    //         "definition": "Switchable encompassing budgetary management",
    //         "created_at": "2019-02-15T15:31:26Z",
    //         "updated_at": "2019-04-19T13:29:15Z",
    //         "card_set_id": "ac3d08ee-b08c-4535-8ddf-4745b5a22a57"
    //       },
    //       {
    //         "id": "96a81ee5-8613-4b2f-91ca-c61baf598133",
    //         "term": "Povidone-Iodine",
    //         "definition": "Cloned systematic service-desk",
    //         "created_at": "2019-08-30T00:38:16Z",
    //         "updated_at": "2019-06-07T05:36:54Z",
    //         "card_set_id": "ac3d08ee-b08c-4535-8ddf-4745b5a22a57"
    //       },
    //       {
    //         "id": "70b5f997-6d6b-4e5b-bccb-c9d68edae9ab",
    //         "term": "hydrocortisone acetate and pramoxine hydrochloride",
    //         "definition": "Extended secondary moderator",
    //         "created_at": "2019-06-15T19:07:06Z",
    //         "updated_at": "2019-07-20T14:10:26Z",
    //         "card_set_id": "ac3d08ee-b08c-4535-8ddf-4745b5a22a57"
    //       },
    //       {
    //         "id": "18cbfb54-e9df-49e8-9fa3-ea60d70caffc",
    //         "term": "glipizide",
    //         "definition": "Cloned system-worthy encoding",
    //         "created_at": "2019-08-15T11:03:34Z",
    //         "updated_at": "2019-01-26T08:28:37Z",
    //         "card_set_id": "975bdc86-958e-4cc4-aa57-44405051c7fb"
    //       },
    //       {
    //         "id": "ae2d38f6-86e8-496b-98cc-77def75a7c25",
    //         "term": "Benzocaine",
    //         "definition": "Synergized national software",
    //         "created_at": "2019-09-08T22:29:11Z",
    //         "updated_at": "2019-10-21T17:13:54Z",
    //         "card_set_id": "975bdc86-958e-4cc4-aa57-44405051c7fb"
    //       },
    //       {
    //         "id": "7d0ca3f4-6883-425f-b894-78b64df9e554",
    //         "term": "Nitrofurantion Macrocrystals",
    //         "definition": "Synergistic modular interface",
    //         "created_at": "2019-03-19T19:06:56Z",
    //         "updated_at": "2019-05-19T04:51:45Z",
    //         "card_set_id": "975bdc86-958e-4cc4-aa57-44405051c7fb"
    //       },
    //       {
    //         "id": "a0025896-0b3e-468b-a099-d514ace332ae",
    //         "term": "Chloroxylenol",
    //         "definition": "Vision-oriented directional capacity",
    //         "created_at": "2019-05-07T17:57:48Z",
    //         "updated_at": "2019-06-12T22:29:40Z",
    //         "card_set_id": "975bdc86-958e-4cc4-aa57-44405051c7fb"
    //       },
    //       {
    //         "id": "617252bb-580e-49a4-9612-025686688e25",
    //         "term": "conjugated estrogens",
    //         "definition": "Advanced needs-based definition",
    //         "created_at": "2019-04-16T01:19:58Z",
    //         "updated_at": "2019-12-10T08:57:49Z",
    //         "card_set_id": "975bdc86-958e-4cc4-aa57-44405051c7fb"
    //       },
    //       {
    //         "id": "37942afe-f26f-474e-9a81-77adec702328",
    //         "term": "NALTREXONE HYDROCHLORIDE",
    //         "definition": "Enhanced contextually-based function",
    //         "created_at": "2019-09-17T03:00:45Z",
    //         "updated_at": "2019-12-06T16:10:01Z",
    //         "card_set_id": "975bdc86-958e-4cc4-aa57-44405051c7fb"
    //       },
    //       {
    //         "id": "723aba3f-9926-4fa4-87cc-f53011940357",
    //         "term": "Gemfibrozil",
    //         "definition": "Persistent system-worthy framework",
    //         "created_at": "2019-08-08T18:11:33Z",
    //         "updated_at": "2020-01-14T12:59:03Z",
    //         "card_set_id": "975bdc86-958e-4cc4-aa57-44405051c7fb"
    //       },
    //       {
    //         "id": "1e7415cc-c3dc-4985-92eb-5039432f9350",
    //         "term": "SODIUM FLUORIDE",
    //         "definition": "Secured mobile protocol",
    //         "created_at": "2020-01-15T22:48:11Z",
    //         "updated_at": "2019-07-08T05:44:05Z",
    //         "card_set_id": "975bdc86-958e-4cc4-aa57-44405051c7fb"
    //       },
    //       {
    //         "id": "b759197e-08ac-4a61-82e1-b779286e6499",
    //         "term": "Aluminum Zirconium Trichlorohydrex Gly",
    //         "definition": "Realigned secondary structure",
    //         "created_at": "2019-06-26T11:33:57Z",
    //         "updated_at": "2020-01-03T05:05:28Z",
    //         "card_set_id": "975bdc86-958e-4cc4-aa57-44405051c7fb"
    //       },
    //       {
    //         "id": "113cbfbb-7ea3-46e0-bad1-d4d8c255aa62",
    //         "term": "ALCOHOL",
    //         "definition": "Monitored stable methodology",
    //         "created_at": "2019-06-11T15:12:00Z",
    //         "updated_at": "2019-05-18T00:10:32Z",
    //         "card_set_id": "975bdc86-958e-4cc4-aa57-44405051c7fb"
    //       },
    //       {
    //         "id": "9fc7fd5d-3b85-4469-bae1-335c4f82db77",
    //         "term": "Aluminum Chlorohydrate",
    //         "definition": "Phased transitional orchestration",
    //         "created_at": "2019-05-14T19:17:59Z",
    //         "updated_at": "2019-03-14T07:13:44Z",
    //         "card_set_id": "975bdc86-958e-4cc4-aa57-44405051c7fb"
    //       },
    //       {
    //         "id": "d5fb7731-fc34-4b66-b0b0-c3fcdf5a7801",
    //         "term": "Acetaminophen, Chlorpheniramine Maleate and Phenylephrine HCl",
    //         "definition": "Open-architected motivating approach",
    //         "created_at": "2019-10-25T03:45:38Z",
    //         "updated_at": "2019-06-17T20:28:29Z",
    //         "card_set_id": "975bdc86-958e-4cc4-aa57-44405051c7fb"
    //       },
    //       {
    //         "id": "6356eb30-2aa2-4301-8c37-d130d867f0ac",
    //         "term": "morphine sulfate",
    //         "definition": "Switchable maximized model",
    //         "created_at": "2019-05-02T00:19:15Z",
    //         "updated_at": "2019-02-20T05:27:59Z",
    //         "card_set_id": "975bdc86-958e-4cc4-aa57-44405051c7fb"
    //       },
    //       {
    //         "id": "56b023fa-9cc0-4c2f-ab65-2905a29f2e81",
    //         "term": "Acetaminophen, Chlorpheniramine maleate, Dextromethorphan HBr, Phenylephrine HCl",
    //         "definition": "Triple-buffered client-server definition",
    //         "created_at": "2019-03-11T23:19:24Z",
    //         "updated_at": "2019-02-11T08:48:14Z",
    //         "card_set_id": "975bdc86-958e-4cc4-aa57-44405051c7fb"
    //       },
    //       {
    //         "id": "2b061a84-4917-4472-a984-46b3acee9fbd",
    //         "term": "Estradiol",
    //         "definition": "Quality-focused regional secured line",
    //         "created_at": "2019-09-24T04:03:32Z",
    //         "updated_at": "2019-09-26T04:43:10Z",
    //         "card_set_id": "975bdc86-958e-4cc4-aa57-44405051c7fb"
    //       },
    //       {
    //         "id": "2205030d-58eb-4b02-945b-052b7acb3482",
    //         "term": "lidocaine",
    //         "definition": "Phased non-volatile software",
    //         "created_at": "2019-09-23T00:29:00Z",
    //         "updated_at": "2019-03-15T21:52:46Z",
    //         "card_set_id": "6676c87f-518c-434e-9d77-5bcb9bcb081a"
    //       },
    //       {
    //         "id": "6c2b8912-0007-42ad-b33e-7923af14d7dc",
    //         "term": "Perindopril Erbumine",
    //         "definition": "Profit-focused web-enabled toolset",
    //         "created_at": "2019-07-22T10:58:50Z",
    //         "updated_at": "2019-04-30T16:27:46Z",
    //         "card_set_id": "6676c87f-518c-434e-9d77-5bcb9bcb081a"
    //       },
    //       {
    //         "id": "9ec81b64-f249-4b54-b000-e3fb277583dc",
    //         "term": "DOXERCALCIFEROL",
    //         "definition": "Profound 5th generation task-force",
    //         "created_at": "2019-02-11T15:35:37Z",
    //         "updated_at": "2019-06-19T10:04:02Z",
    //         "card_set_id": "6676c87f-518c-434e-9d77-5bcb9bcb081a"
    //       },
    //       {
    //         "id": "8798b5f8-0037-4378-a11b-9678671c4df5",
    //         "term": "Cetylpyridinium chloride",
    //         "definition": "User-centric value-added functionalities",
    //         "created_at": "2019-07-27T01:53:38Z",
    //         "updated_at": "2019-08-05T15:32:33Z",
    //         "card_set_id": "6676c87f-518c-434e-9d77-5bcb9bcb081a"
    //       },
    //       {
    //         "id": "b524492e-49d8-4f8d-9a64-c0c96f104c79",
    //         "term": "ARSENIC TRIOXIDE",
    //         "definition": "Team-oriented asynchronous solution",
    //         "created_at": "2019-05-16T02:57:43Z",
    //         "updated_at": "2019-09-29T22:58:05Z",
    //         "card_set_id": "6676c87f-518c-434e-9d77-5bcb9bcb081a"
    //       },
    //       {
    //         "id": "4c6b34ca-1186-4f1b-966b-6f538f0bf973",
    //         "term": "Docusate sodium and sennosides",
    //         "definition": "Object-based directional challenge",
    //         "created_at": "2019-05-26T16:31:00Z",
    //         "updated_at": "2019-04-13T14:32:25Z",
    //         "card_set_id": "6676c87f-518c-434e-9d77-5bcb9bcb081a"
    //       },
    //       {
    //         "id": "33df1d32-9f98-4657-8511-0ca11e15463d",
    //         "term": "Benzalkonium chloride",
    //         "definition": "Decentralized optimizing conglomeration",
    //         "created_at": "2019-03-21T12:27:35Z",
    //         "updated_at": "2019-10-15T20:45:41Z",
    //         "card_set_id": "6676c87f-518c-434e-9d77-5bcb9bcb081a"
    //       },
    //       {
    //         "id": "a01565b7-1acc-4792-a44d-ab336e091d9c",
    //         "term": "Pine Australian Beefwood",
    //         "definition": "Quality-focused contextually-based conglomeration",
    //         "created_at": "2019-10-24T21:57:44Z",
    //         "updated_at": "2019-07-11T07:37:34Z",
    //         "card_set_id": "6676c87f-518c-434e-9d77-5bcb9bcb081a"
    //       },
    //       {
    //         "id": "11a15a12-1cd1-4c2d-8018-61604e9f2ae7",
    //         "term": "Clemastine fumarate",
    //         "definition": "Enterprise-wide background methodology",
    //         "created_at": "2019-05-19T13:57:21Z",
    //         "updated_at": "2019-05-23T20:44:47Z",
    //         "card_set_id": "6676c87f-518c-434e-9d77-5bcb9bcb081a"
    //       },
    //       {
    //         "id": "4b64587c-b161-4f3c-83be-a0511c606ba5",
    //         "term": "fesoterodine fumarate",
    //         "definition": "Customizable static support",
    //         "created_at": "2019-09-04T23:41:05Z",
    //         "updated_at": "2019-07-28T19:48:24Z",
    //         "card_set_id": "6676c87f-518c-434e-9d77-5bcb9bcb081a"
    //       },
    //       {
    //         "id": "8bd91f83-e2fd-4876-a82c-ac2881f273f4",
    //         "term": "Tretinoin",
    //         "definition": "Customizable multimedia infrastructure",
    //         "created_at": "2019-06-05T19:46:21Z",
    //         "updated_at": "2019-03-20T11:56:01Z",
    //         "card_set_id": "6676c87f-518c-434e-9d77-5bcb9bcb081a"
    //       },
    //       {
    //         "id": "e344e202-9a55-4340-96a8-271b3066ef42",
    //         "term": "Lambs Quarters Chenopodium album",
    //         "definition": "Robust explicit hub",
    //         "created_at": "2019-09-01T03:30:07Z",
    //         "updated_at": "2019-05-01T04:02:17Z",
    //         "card_set_id": "6676c87f-518c-434e-9d77-5bcb9bcb081a"
    //       },
    //       {
    //         "id": "eb8ac283-d394-4920-8947-6ec55bc04983",
    //         "term": "Octinoxate, Oxybenzone",
    //         "definition": "Future-proofed bi-directional collaboration",
    //         "created_at": "2019-03-02T23:13:51Z",
    //         "updated_at": "2020-01-05T08:51:37Z",
    //         "card_set_id": "6676c87f-518c-434e-9d77-5bcb9bcb081a"
    //       },
    //       {
    //         "id": "eaa04326-ce19-4601-b583-33d2cfcd2d99",
    //         "term": "Hydrocortisone",
    //         "definition": "Seamless heuristic hierarchy",
    //         "created_at": "2020-01-14T06:05:11Z",
    //         "updated_at": "2019-06-01T11:59:42Z",
    //         "card_set_id": "6676c87f-518c-434e-9d77-5bcb9bcb081a"
    //       },
    //       {
    //         "id": "921e1c68-fd3a-45a9-a748-f98c69b9c059",
    //         "term": "German Cockroach",
    //         "definition": "Expanded holistic info-mediaries",
    //         "created_at": "2019-01-24T15:11:37Z",
    //         "updated_at": "2019-05-31T21:12:15Z",
    //         "card_set_id": "6676c87f-518c-434e-9d77-5bcb9bcb081a"
    //       },
    //       {
    //         "id": "aac988c4-7094-40f5-9912-bdda5e933de5",
    //         "term": "Clean Xpress Alcohol Gel Instant Skin Santizer",
    //         "definition": "Object-based attitude-oriented collaboration",
    //         "created_at": "2020-01-07T10:32:59Z",
    //         "updated_at": "2019-06-22T22:51:38Z",
    //         "card_set_id": "3f45e2ce-6423-4542-b9d7-cd98754e932c"
    //       },
    //       {
    //         "id": "5ac952dd-2dc0-4e59-8ebe-886a296abf78",
    //         "term": "LIDOCAINE HYDROCHLORIDE BENZOCAINE",
    //         "definition": "User-friendly empowering support",
    //         "created_at": "2019-10-06T09:45:28Z",
    //         "updated_at": "2019-11-17T13:08:28Z",
    //         "card_set_id": "3f45e2ce-6423-4542-b9d7-cd98754e932c"
    //       },
    //       {
    //         "id": "7407a121-2f92-4bd7-a840-9515a1df2a67",
    //         "term": "Simethicone",
    //         "definition": "Sharable composite analyzer",
    //         "created_at": "2019-01-31T17:51:10Z",
    //         "updated_at": "2019-12-02T01:56:04Z",
    //         "card_set_id": "3f45e2ce-6423-4542-b9d7-cd98754e932c"
    //       },
    //       {
    //         "id": "e2a14f27-3fe0-48d7-ba8e-17a59ae06644",
    //         "term": "ranolazine",
    //         "definition": "Multi-channelled motivating policy",
    //         "created_at": "2020-01-06T07:11:41Z",
    //         "updated_at": "2019-07-18T23:42:44Z",
    //         "card_set_id": "3f45e2ce-6423-4542-b9d7-cd98754e932c"
    //       },
    //       {
    //         "id": "f22a4286-25ae-4d89-ac45-0fe5a1dbb32e",
    //         "term": "Metronidazole",
    //         "definition": "Exclusive bi-directional conglomeration",
    //         "created_at": "2019-08-13T08:57:13Z",
    //         "updated_at": "2019-07-06T21:42:40Z",
    //         "card_set_id": "3f45e2ce-6423-4542-b9d7-cd98754e932c"
    //       },
    //       {
    //         "id": "5753f73a-df37-4335-9533-18f883afe22a",
    //         "term": "Dimethicone",
    //         "definition": "Visionary executive adapter",
    //         "created_at": "2019-11-01T07:55:37Z",
    //         "updated_at": "2019-07-19T16:07:37Z",
    //         "card_set_id": "3f45e2ce-6423-4542-b9d7-cd98754e932c"
    //       },
    //       {
    //         "id": "ac1717ab-b8ce-416f-96e2-a048842dc882",
    //         "term": "Prednisolone",
    //         "definition": "Multi-layered bandwidth-monitored portal",
    //         "created_at": "2019-07-01T21:44:11Z",
    //         "updated_at": "2019-03-19T07:07:04Z",
    //         "card_set_id": "3f45e2ce-6423-4542-b9d7-cd98754e932c"
    //       },
    //       {
    //         "id": "183e9e29-b52e-49d7-bedb-2eb1f38509aa",
    //         "term": "Betamethasone Valerate",
    //         "definition": "Profound reciprocal solution",
    //         "created_at": "2019-10-06T20:04:23Z",
    //         "updated_at": "2019-07-08T04:37:41Z",
    //         "card_set_id": "3f45e2ce-6423-4542-b9d7-cd98754e932c"
    //       },
    //       {
    //         "id": "c84cb2f1-dc27-4251-9b52-6819f1bb4867",
    //         "term": "Nitrofurantoin Macrocrystals",
    //         "definition": "Distributed bifurcated interface",
    //         "created_at": "2019-05-02T21:40:11Z",
    //         "updated_at": "2019-12-02T00:23:52Z",
    //         "card_set_id": "3f45e2ce-6423-4542-b9d7-cd98754e932c"
    //       },
    //       {
    //         "id": "2ce04c5e-5cc8-4e31-b618-84ba62579685",
    //         "term": "Quercus velutina",
    //         "definition": "Advanced client-driven info-mediaries",
    //         "created_at": "2019-07-02T08:40:41Z",
    //         "updated_at": "2019-01-31T11:11:35Z",
    //         "card_set_id": "3f45e2ce-6423-4542-b9d7-cd98754e932c"
    //       },
    //       {
    //         "id": "938a063d-cd29-402c-92d4-c4287aebe18d",
    //         "term": "Naproxen",
    //         "definition": "Optimized actuating moderator",
    //         "created_at": "2019-11-28T12:43:31Z",
    //         "updated_at": "2019-02-23T11:09:26Z",
    //         "card_set_id": "3f45e2ce-6423-4542-b9d7-cd98754e932c"
    //       },
    //       {
    //         "id": "6b62911b-3072-481d-a7e2-b429559ae6c0",
    //         "term": "White Poplar",
    //         "definition": "Team-oriented non-volatile superstructure",
    //         "created_at": "2019-09-27T18:52:32Z",
    //         "updated_at": "2019-04-26T10:38:41Z",
    //         "card_set_id": "3f45e2ce-6423-4542-b9d7-cd98754e932c"
    //       },
    //       {
    //         "id": "bf465b35-e401-452a-8eed-a3c9fd9d44c6",
    //         "term": "Mineral Oil",
    //         "definition": "Self-enabling responsive utilisation",
    //         "created_at": "2019-11-24T04:16:31Z",
    //         "updated_at": "2019-07-22T23:37:27Z",
    //         "card_set_id": "3f45e2ce-6423-4542-b9d7-cd98754e932c"
    //       },
    //       {
    //         "id": "c671b375-45c6-44b6-a26d-a1fdb08c7546",
    //         "term": "Menthol",
    //         "definition": "Cloned systemic frame",
    //         "created_at": "2019-09-13T05:08:47Z",
    //         "updated_at": "2019-05-21T00:20:04Z",
    //         "card_set_id": "3f45e2ce-6423-4542-b9d7-cd98754e932c"
    //       },
    //       {
    //         "id": "c083fc50-38fc-4c2c-8db0-40cac48bddbd",
    //         "term": "divalproex sodium",
    //         "definition": "Diverse high-level contingency",
    //         "created_at": "2019-10-08T10:19:47Z",
    //         "updated_at": "2019-12-06T08:43:01Z",
    //         "card_set_id": "3f45e2ce-6423-4542-b9d7-cd98754e932c"
    //       },
    //       {
    //         "id": "b592a108-3929-4ceb-9ce7-db5070d815ee",
    //         "term": "OCTINOXATE, TITANIUM DIOXIDE",
    //         "definition": "Down-sized coherent open system",
    //         "created_at": "2019-09-02T07:09:36Z",
    //         "updated_at": "2019-01-21T16:05:02Z",
    //         "card_set_id": "73a7bb4c-cdbc-40c3-b92f-fad4e5f0e31e"
    //       },
    //       {
    //         "id": "87468a12-30d5-4979-9513-b8b6f8bfa7fa",
    //         "term": "perflutren",
    //         "definition": "Re-contextualized 4th generation capacity",
    //         "created_at": "2019-07-02T06:04:25Z",
    //         "updated_at": "2019-08-21T23:35:58Z",
    //         "card_set_id": "73a7bb4c-cdbc-40c3-b92f-fad4e5f0e31e"
    //       },
    //       {
    //         "id": "55b135c4-6a8a-4d0e-babd-f1b56136b70c",
    //         "term": "ALUMINUM HYDROXIDE, MAGNESIUM HYDROXIDE",
    //         "definition": "Intuitive eco-centric encoding",
    //         "created_at": "2019-01-22T11:50:22Z",
    //         "updated_at": "2019-02-08T19:07:24Z",
    //         "card_set_id": "73a7bb4c-cdbc-40c3-b92f-fad4e5f0e31e"
    //       },
    //       {
    //         "id": "c053a425-31e3-47cb-ab81-1989d8f3c92a",
    //         "term": "Acetaminophen",
    //         "definition": "Optional reciprocal policy",
    //         "created_at": "2019-02-23T13:44:34Z",
    //         "updated_at": "2019-08-23T04:52:25Z",
    //         "card_set_id": "73a7bb4c-cdbc-40c3-b92f-fad4e5f0e31e"
    //       },
    //       {
    //         "id": "802e7375-e007-4d38-9256-c6d482a5c7b9",
    //         "term": "Diphenhydramine HCl",
    //         "definition": "Innovative client-server contingency",
    //         "created_at": "2019-05-28T15:42:47Z",
    //         "updated_at": "2019-03-12T22:21:30Z",
    //         "card_set_id": "73a7bb4c-cdbc-40c3-b92f-fad4e5f0e31e"
    //       },
    //       {
    //         "id": "d5d334cc-f235-4543-adb5-c9dd6814fcf1",
    //         "term": "temazepam",
    //         "definition": "Horizontal system-worthy infrastructure",
    //         "created_at": "2019-09-04T07:10:09Z",
    //         "updated_at": "2019-03-02T21:28:47Z",
    //         "card_set_id": "73a7bb4c-cdbc-40c3-b92f-fad4e5f0e31e"
    //       },
    //       {
    //         "id": "a9bb421d-d7e8-4724-8734-7c58e7c508d8",
    //         "term": "ascorbic acid, cholecalciferol, .alpha.-tocopherol acetate, dl-, folic acid, pyridoxine hydrochloride, cyanocobalamin, biotin, calcium carbonate, ferrous fumarate, magnesium oxide, lactic acid and doconexent",
    //         "definition": "Open-architected cohesive approach",
    //         "created_at": "2019-06-08T23:59:30Z",
    //         "updated_at": "2019-07-15T20:00:52Z",
    //         "card_set_id": "73a7bb4c-cdbc-40c3-b92f-fad4e5f0e31e"
    //       },
    //       {
    //         "id": "e252ad84-de0c-49fc-9117-180e93bef93a",
    //         "term": "trimethobenzamide hydrochloride",
    //         "definition": "Exclusive well-modulated firmware",
    //         "created_at": "2019-09-02T06:25:50Z",
    //         "updated_at": "2020-01-04T15:03:50Z",
    //         "card_set_id": "73a7bb4c-cdbc-40c3-b92f-fad4e5f0e31e"
    //       },
    //       {
    //         "id": "9ec2a65d-6a55-4c92-84d3-da9245bdb4f9",
    //         "term": "Aluminum Zirconium Pentachlorohydrex Gly",
    //         "definition": "Inverse eco-centric firmware",
    //         "created_at": "2019-07-06T10:59:23Z",
    //         "updated_at": "2020-01-14T09:57:34Z",
    //         "card_set_id": "73a7bb4c-cdbc-40c3-b92f-fad4e5f0e31e"
    //       },
    //       {
    //         "id": "405c3e45-2b5a-4b6c-b63b-db67597272dc",
    //         "term": "Natural Medicine",
    //         "definition": "Secured optimizing data-warehouse",
    //         "created_at": "2019-09-13T18:00:56Z",
    //         "updated_at": "2019-08-25T21:11:34Z",
    //         "card_set_id": "73a7bb4c-cdbc-40c3-b92f-fad4e5f0e31e"
    //       },
    //       {
    //         "id": "0841ffac-1926-4b84-9149-3b4fe7f33ae4",
    //         "term": "Nadolol",
    //         "definition": "Open-architected multi-state framework",
    //         "created_at": "2019-08-06T22:53:33Z",
    //         "updated_at": "2019-10-12T09:57:22Z",
    //         "card_set_id": "73a7bb4c-cdbc-40c3-b92f-fad4e5f0e31e"
    //       },
    //       {
    //         "id": "d70776d0-621a-4102-b49d-c518969cd3e2",
    //         "term": "loratadine",
    //         "definition": "Operative cohesive system engine",
    //         "created_at": "2019-06-24T21:02:42Z",
    //         "updated_at": "2020-01-14T21:39:44Z",
    //         "card_set_id": "73a7bb4c-cdbc-40c3-b92f-fad4e5f0e31e"
    //       },
    //       {
    //         "id": "a8ddf628-4e21-45d9-b796-5b54a2fb8d7a",
    //         "term": "Pamabrom",
    //         "definition": "Grass-roots system-worthy neural-net",
    //         "created_at": "2019-04-14T07:03:49Z",
    //         "updated_at": "2019-12-27T02:19:23Z",
    //         "card_set_id": "73a7bb4c-cdbc-40c3-b92f-fad4e5f0e31e"
    //       },
    //       {
    //         "id": "4008c65d-e252-4211-b075-beb1d876aa74",
    //         "term": "Ampicillin Sodium",
    //         "definition": "Business-focused optimal conglomeration",
    //         "created_at": "2019-07-06T09:09:20Z",
    //         "updated_at": "2019-05-12T17:53:45Z",
    //         "card_set_id": "73a7bb4c-cdbc-40c3-b92f-fad4e5f0e31e"
    //       },
    //       {
    //         "id": "982489b4-316c-4357-bb83-e4f6bb5ceab0",
    //         "term": "Escitalopram Oxalate",
    //         "definition": "Multi-layered radical circuit",
    //         "created_at": "2019-12-28T20:44:46Z",
    //         "updated_at": "2019-08-13T20:52:36Z",
    //         "card_set_id": "73a7bb4c-cdbc-40c3-b92f-fad4e5f0e31e"
    //       },
    //       {
    //         "id": "93d6ec38-6dab-43d8-a371-f7ee52c4388b",
    //         "term": "Doxycyline Hyclate",
    //         "definition": "Realigned uniform artificial intelligence",
    //         "created_at": "2019-09-29T16:29:12Z",
    //         "updated_at": "2019-08-12T01:49:21Z",
    //         "card_set_id": "de0d9ac1-4b3d-4040-9edd-7f15ac0dcdab"
    //       },
    //       {
    //         "id": "9b5822a9-31cd-4a94-89f5-8f4bfe6fc6e7",
    //         "term": "ATROPA BELLADONNA, SANGUINARIA CANADENSIS ROOT, SPIGELIA ANTHELMIA",
    //         "definition": "Right-sized foreground moderator",
    //         "created_at": "2019-11-12T11:36:13Z",
    //         "updated_at": "2019-12-25T00:39:19Z",
    //         "card_set_id": "de0d9ac1-4b3d-4040-9edd-7f15ac0dcdab"
    //       },
    //       {
    //         "id": "ac4bc353-9dba-4bb2-b8df-e5fa55b07f4e",
    //         "term": "Ethyl Alcohol",
    //         "definition": "Centralized attitude-oriented initiative",
    //         "created_at": "2019-03-23T00:47:55Z",
    //         "updated_at": "2019-12-09T19:44:25Z",
    //         "card_set_id": "de0d9ac1-4b3d-4040-9edd-7f15ac0dcdab"
    //       },
    //       {
    //         "id": "4c956496-c0d3-40ea-a72a-3927504aa67d",
    //         "term": "OCTINOXATE AND AVOBENZONE",
    //         "definition": "Ergonomic zero tolerance orchestration",
    //         "created_at": "2019-04-03T15:37:58Z",
    //         "updated_at": "2019-04-30T13:00:18Z",
    //         "card_set_id": "de0d9ac1-4b3d-4040-9edd-7f15ac0dcdab"
    //       },
    //       {
    //         "id": "720fc2d0-ad30-462f-82b1-cb70b6aa6293",
    //         "term": "Acetaminophen",
    //         "definition": "Reactive multi-tasking open architecture",
    //         "created_at": "2019-10-28T17:13:27Z",
    //         "updated_at": "2019-02-28T23:52:20Z",
    //         "card_set_id": "de0d9ac1-4b3d-4040-9edd-7f15ac0dcdab"
    //       },
    //       {
    //         "id": "a8f59fb5-c2a7-4cb8-849e-5dbb5ec71ebc",
    //         "term": "Metaxalone",
    //         "definition": "Optimized well-modulated Graphical User Interface",
    //         "created_at": "2019-08-07T12:05:27Z",
    //         "updated_at": "2019-02-24T18:11:18Z",
    //         "card_set_id": "de0d9ac1-4b3d-4040-9edd-7f15ac0dcdab"
    //       },
    //       {
    //         "id": "899d1a24-b8fd-4e7b-87d8-f843f6a6f985",
    //         "term": "Water",
    //         "definition": "Cross-platform zero administration hub",
    //         "created_at": "2019-02-21T15:46:57Z",
    //         "updated_at": "2019-07-04T13:50:22Z",
    //         "card_set_id": "de0d9ac1-4b3d-4040-9edd-7f15ac0dcdab"
    //       },
    //       {
    //         "id": "5f5801a6-8292-43c1-b63e-b2e1cceb4200",
    //         "term": "Lidocaine HCl",
    //         "definition": "Integrated regional standardization",
    //         "created_at": "2019-06-19T11:20:10Z",
    //         "updated_at": "2019-06-05T09:39:06Z",
    //         "card_set_id": "de0d9ac1-4b3d-4040-9edd-7f15ac0dcdab"
    //       },
    //       {
    //         "id": "a82ab747-e228-4dbc-ac20-bf047940bf26",
    //         "term": "Chenodiol",
    //         "definition": "Switchable tangible synergy",
    //         "created_at": "2019-09-15T18:38:19Z",
    //         "updated_at": "2019-06-15T03:09:16Z",
    //         "card_set_id": "de0d9ac1-4b3d-4040-9edd-7f15ac0dcdab"
    //       },
    //       {
    //         "id": "26fa8d8f-eaad-4cc7-bd03-418363cfbdf9",
    //         "term": "Benzalkonium chloride",
    //         "definition": "Exclusive context-sensitive attitude",
    //         "created_at": "2019-08-21T00:09:40Z",
    //         "updated_at": "2019-11-12T13:36:38Z",
    //         "card_set_id": "de0d9ac1-4b3d-4040-9edd-7f15ac0dcdab"
    //       },
    //       {
    //         "id": "f88de2cd-99c8-4fbe-bba8-38166674ac65",
    //         "term": "Duloxetine hydrochloride",
    //         "definition": "Customer-focused tangible definition",
    //         "created_at": "2019-08-20T16:52:17Z",
    //         "updated_at": "2019-05-13T18:54:00Z",
    //         "card_set_id": "de0d9ac1-4b3d-4040-9edd-7f15ac0dcdab"
    //       },
    //       {
    //         "id": "2e0b254a-34c7-4d1d-bc57-1a425e7453c1",
    //         "term": "Pseudoephedrine HCl and Tripolidine",
    //         "definition": "Progressive systemic neural-net",
    //         "created_at": "2019-10-13T02:43:26Z",
    //         "updated_at": "2019-03-01T16:42:44Z",
    //         "card_set_id": "de0d9ac1-4b3d-4040-9edd-7f15ac0dcdab"
    //       },
    //       {
    //         "id": "fe674fdd-a8c1-4a18-87d4-4c5123991843",
    //         "term": "OCTINOXATE, OXYBENZONE",
    //         "definition": "Down-sized encompassing attitude",
    //         "created_at": "2019-11-12T04:12:32Z",
    //         "updated_at": "2019-03-29T01:45:28Z",
    //         "card_set_id": "de0d9ac1-4b3d-4040-9edd-7f15ac0dcdab"
    //       },
    //       {
    //         "id": "357b15a8-7c0d-48df-b78d-6a8c7c06e384",
    //         "term": "Titanium Dioxide and Octinoxate",
    //         "definition": "Re-engineered upward-trending methodology",
    //         "created_at": "2019-10-31T19:05:44Z",
    //         "updated_at": "2019-05-04T21:47:00Z",
    //         "card_set_id": "de0d9ac1-4b3d-4040-9edd-7f15ac0dcdab"
    //       },
    //       {
    //         "id": "f3f71b84-9ef3-4f8c-b100-e827e518fb7c",
    //         "term": "Penicillium Mixture",
    //         "definition": "Customizable needs-based initiative",
    //         "created_at": "2019-04-25T20:56:29Z",
    //         "updated_at": "2019-02-23T05:46:40Z",
    //         "card_set_id": "de0d9ac1-4b3d-4040-9edd-7f15ac0dcdab"
    //       },
    //       {
    //         "id": "d630f348-cc40-48b3-94c5-f69930a90ded",
    //         "term": "HORSE CHESTNUT, COLLINSONIA CANADENSIS ROOT, HAMAMELIS VIRGINIANA ROOT BARK/STEM BARK",
    //         "definition": "Monitored client-driven challenge",
    //         "created_at": "2019-10-05T00:11:52Z",
    //         "updated_at": "2019-09-09T04:30:35Z",
    //         "card_set_id": "5acb1251-a4f8-4227-a22b-1dd3feb0b902"
    //       },
    //       {
    //         "id": "8c49be63-fe97-49cc-b9df-9d1d7284443d",
    //         "term": "Diltiazem Hydrochloride",
    //         "definition": "De-engineered transitional circuit",
    //         "created_at": "2019-06-21T16:29:42Z",
    //         "updated_at": "2019-10-11T20:15:09Z",
    //         "card_set_id": "5acb1251-a4f8-4227-a22b-1dd3feb0b902"
    //       },
    //       {
    //         "id": "28227a9b-4256-464f-87e6-e860533e5de9",
    //         "term": "Allopurinol",
    //         "definition": "Reduced modular adapter",
    //         "created_at": "2019-10-27T09:14:43Z",
    //         "updated_at": "2019-12-26T05:12:53Z",
    //         "card_set_id": "5acb1251-a4f8-4227-a22b-1dd3feb0b902"
    //       },
    //       {
    //         "id": "da92bc0e-adee-4cf4-8816-c514894a9c3e",
    //         "term": "zolmitriptan",
    //         "definition": "Customer-focused user-facing matrices",
    //         "created_at": "2019-06-12T16:03:55Z",
    //         "updated_at": "2019-08-15T22:00:35Z",
    //         "card_set_id": "5acb1251-a4f8-4227-a22b-1dd3feb0b902"
    //       },
    //       {
    //         "id": "5a2def73-05b3-45ec-aea5-d37d8937d007",
    //         "term": "Bermuda Grass Smut",
    //         "definition": "Persevering explicit initiative",
    //         "created_at": "2019-11-06T10:51:09Z",
    //         "updated_at": "2019-02-15T19:36:14Z",
    //         "card_set_id": "5acb1251-a4f8-4227-a22b-1dd3feb0b902"
    //       },
    //       {
    //         "id": "5aa3b216-9ebf-44e8-8a76-0f382319917c",
    //         "term": "Salicylic Acid",
    //         "definition": "Intuitive tertiary migration",
    //         "created_at": "2019-01-26T18:33:58Z",
    //         "updated_at": "2019-10-19T20:42:44Z",
    //         "card_set_id": "5acb1251-a4f8-4227-a22b-1dd3feb0b902"
    //       },
    //       {
    //         "id": "88b3bc44-1c43-4bbd-b8e5-bda9aa5d8344",
    //         "term": "Stannous Fluoride",
    //         "definition": "Proactive zero administration solution",
    //         "created_at": "2019-12-20T21:21:49Z",
    //         "updated_at": "2019-07-03T19:56:13Z",
    //         "card_set_id": "5acb1251-a4f8-4227-a22b-1dd3feb0b902"
    //       },
    //       {
    //         "id": "ae8c924f-5795-44a3-b4cc-b5106a9e463e",
    //         "term": "Diphenhydramine HCl",
    //         "definition": "Up-sized systematic attitude",
    //         "created_at": "2019-02-26T11:23:12Z",
    //         "updated_at": "2019-12-26T11:19:25Z",
    //         "card_set_id": "5acb1251-a4f8-4227-a22b-1dd3feb0b902"
    //       },
    //       {
    //         "id": "918d8fe9-f41a-443e-bde4-1641f51255a4",
    //         "term": "Oxygen",
    //         "definition": "Stand-alone methodical middleware",
    //         "created_at": "2019-03-22T18:07:28Z",
    //         "updated_at": "2019-02-03T08:48:04Z",
    //         "card_set_id": "5acb1251-a4f8-4227-a22b-1dd3feb0b902"
    //       },
    //       {
    //         "id": "a1378c26-7392-4d13-aa45-dd305ac42832",
    //         "term": "Levofloxacin",
    //         "definition": "Optimized didactic open architecture",
    //         "created_at": "2019-05-15T15:29:41Z",
    //         "updated_at": "2019-10-25T18:57:53Z",
    //         "card_set_id": "5acb1251-a4f8-4227-a22b-1dd3feb0b902"
    //       },
    //       {
    //         "id": "6338121c-ca32-457e-a9d6-2215b8e99eaf",
    //         "term": "Acetaminophen, Diphenhydramine HCl",
    //         "definition": "Ergonomic multimedia process improvement",
    //         "created_at": "2020-01-13T09:48:20Z",
    //         "updated_at": "2019-05-04T11:01:20Z",
    //         "card_set_id": "5acb1251-a4f8-4227-a22b-1dd3feb0b902"
    //       },
    //       {
    //         "id": "c86d7ecd-53bc-441f-a618-1475e954b7bd",
    //         "term": "Chlorcyclizine Hydrochloride, Pseudoephedrine Hydrochloride",
    //         "definition": "Enhanced 24/7 portal",
    //         "created_at": "2019-02-11T12:58:55Z",
    //         "updated_at": "2019-12-09T11:22:39Z",
    //         "card_set_id": "5acb1251-a4f8-4227-a22b-1dd3feb0b902"
    //       },
    //       {
    //         "id": "9b2bbb8f-b4ff-4d0e-913f-31d1704e2679",
    //         "term": "HYDROQUINONE",
    //         "definition": "Assimilated multimedia instruction set",
    //         "created_at": "2019-06-26T07:38:05Z",
    //         "updated_at": "2019-09-17T00:31:15Z",
    //         "card_set_id": "5acb1251-a4f8-4227-a22b-1dd3feb0b902"
    //       },
    //       {
    //         "id": "3ea63e65-409b-4374-b5d1-8e0d19ac6a46",
    //         "term": "neomycin sulfate, polymyxin b sulfate and dexamethasone",
    //         "definition": "Optional demand-driven methodology",
    //         "created_at": "2019-07-25T12:48:22Z",
    //         "updated_at": "2019-04-24T17:34:55Z",
    //         "card_set_id": "5acb1251-a4f8-4227-a22b-1dd3feb0b902"
    //       },
    //       {
    //         "id": "8bc712a4-ab5d-4c1a-934c-57be15aa4910",
    //         "term": "ALCOHOL",
    //         "definition": "Expanded full-range concept",
    //         "created_at": "2019-05-22T14:02:48Z",
    //         "updated_at": "2019-06-07T07:15:38Z",
    //         "card_set_id": "5acb1251-a4f8-4227-a22b-1dd3feb0b902"
    //       },
    //       {
    //         "id": "21e7166a-6b37-4b87-a3ad-c9081419ce6c",
    //         "term": "Enflurane",
    //         "definition": "Down-sized executive definition",
    //         "created_at": "2019-03-26T04:28:37Z",
    //         "updated_at": "2019-04-22T18:41:00Z",
    //         "card_set_id": "ce4e1850-20ed-441f-a381-b588659aaba0"
    //       },
    //       {
    //         "id": "1962f00a-ad8e-453e-bb07-d36a8e90d2a1",
    //         "term": "Geranium robertianum, Nasturtium aquaticum, Aloe socotrina, Juglans regia, Myosotis arvensis, Scrophularia nodosa, Teucrium scorodonia, Apis mellifica, Equisetum hyemale,",
    //         "definition": "Devolved real-time challenge",
    //         "created_at": "2019-11-24T05:11:07Z",
    //         "updated_at": "2019-07-07T08:42:27Z",
    //         "card_set_id": "ce4e1850-20ed-441f-a381-b588659aaba0"
    //       },
    //       {
    //         "id": "b5843038-a291-4c57-8153-520ed1befbc3",
    //         "term": "ALUMINUM ZIRCONIUM TRICHLOROHYDREX GLY",
    //         "definition": "Mandatory user-facing parallelism",
    //         "created_at": "2019-09-14T02:42:28Z",
    //         "updated_at": "2019-11-05T13:46:41Z",
    //         "card_set_id": "ce4e1850-20ed-441f-a381-b588659aaba0"
    //       },
    //       {
    //         "id": "bbc1dcc7-62a4-4d1b-98c3-f541b71bd7a1",
    //         "term": "Ibuprofen",
    //         "definition": "Triple-buffered uniform projection",
    //         "created_at": "2019-01-19T02:07:44Z",
    //         "updated_at": "2019-12-01T05:25:23Z",
    //         "card_set_id": "ce4e1850-20ed-441f-a381-b588659aaba0"
    //       },
    //       {
    //         "id": "d74806e2-808d-4a6a-a36b-d439370cea24",
    //         "term": "Temozolomide",
    //         "definition": "Persistent transitional attitude",
    //         "created_at": "2019-03-16T16:00:41Z",
    //         "updated_at": "2019-01-22T01:36:51Z",
    //         "card_set_id": "ce4e1850-20ed-441f-a381-b588659aaba0"
    //       },
    //       {
    //         "id": "ff68150b-2356-4a27-b35c-df384c160632",
    //         "term": "Cerebellum Thalamus B Aurum",
    //         "definition": "Intuitive contextually-based emulation",
    //         "created_at": "2019-02-15T11:26:05Z",
    //         "updated_at": "2019-06-03T14:26:18Z",
    //         "card_set_id": "ce4e1850-20ed-441f-a381-b588659aaba0"
    //       },
    //       {
    //         "id": "c83854f8-307f-48cc-8c06-1b6da83cf2e2",
    //         "term": "Ibuprofen",
    //         "definition": "Persistent local matrix",
    //         "created_at": "2019-10-18T07:00:33Z",
    //         "updated_at": "2019-05-31T13:59:21Z",
    //         "card_set_id": "ce4e1850-20ed-441f-a381-b588659aaba0"
    //       },
    //       {
    //         "id": "cf1e7cbc-173c-459a-9ec9-400bd1b4121e",
    //         "term": "Donepezil Hydrochloride",
    //         "definition": "Organized leading edge core",
    //         "created_at": "2019-10-19T01:34:35Z",
    //         "updated_at": "2019-04-24T17:30:23Z",
    //         "card_set_id": "ce4e1850-20ed-441f-a381-b588659aaba0"
    //       },
    //       {
    //         "id": "747b9c96-8aa9-4b0e-8d91-1311551915f9",
    //         "term": "AVEENO",
    //         "definition": "Balanced disintermediate framework",
    //         "created_at": "2019-09-22T00:48:26Z",
    //         "updated_at": "2020-01-14T00:29:45Z",
    //         "card_set_id": "ce4e1850-20ed-441f-a381-b588659aaba0"
    //       },
    //       {
    //         "id": "dae88a2f-15fd-4676-9086-ef29c0ff14f6",
    //         "term": "Sulfasalazine",
    //         "definition": "Reverse-engineered responsive definition",
    //         "created_at": "2019-10-29T19:26:15Z",
    //         "updated_at": "2019-09-25T22:11:58Z",
    //         "card_set_id": "ce4e1850-20ed-441f-a381-b588659aaba0"
    //       },
    //       {
    //         "id": "ebc8ea59-b453-4d2c-beb6-596b229320a0",
    //         "term": "Quetiapine fumarate",
    //         "definition": "De-engineered needs-based paradigm",
    //         "created_at": "2019-10-28T10:19:06Z",
    //         "updated_at": "2019-03-02T11:47:26Z",
    //         "card_set_id": "ce4e1850-20ed-441f-a381-b588659aaba0"
    //       },
    //       {
    //         "id": "d920dc1c-6502-4ad7-8811-35356276757b",
    //         "term": "levalbuterol",
    //         "definition": "Optimized demand-driven service-desk",
    //         "created_at": "2019-11-06T04:55:36Z",
    //         "updated_at": "2019-02-24T17:34:57Z",
    //         "card_set_id": "ce4e1850-20ed-441f-a381-b588659aaba0"
    //       },
    //       {
    //         "id": "485b3540-f907-4f56-8b97-09e3d4b3a52d",
    //         "term": "Dextroamphetamine Saccharate, Amphetamine Aspartate Monohydrate, Dextroamphetamine Sulfate and Amphetamine Sulfate",
    //         "definition": "Enterprise-wide asynchronous methodology",
    //         "created_at": "2019-11-06T12:15:23Z",
    //         "updated_at": "2019-10-30T10:27:39Z",
    //         "card_set_id": "ce4e1850-20ed-441f-a381-b588659aaba0"
    //       },
    //       {
    //         "id": "cfb7a50f-af4d-49b2-9c40-f820f486bc39",
    //         "term": "nicotine polacrilex",
    //         "definition": "Expanded needs-based info-mediaries",
    //         "created_at": "2019-08-17T04:48:16Z",
    //         "updated_at": "2019-12-01T08:47:12Z",
    //         "card_set_id": "ce4e1850-20ed-441f-a381-b588659aaba0"
    //       },
    //       {
    //         "id": "d7cf09ef-9986-47b4-a86c-2328b46790df",
    //         "term": "Isoflurane",
    //         "definition": "Quality-focused 24/7 open architecture",
    //         "created_at": "2019-05-10T08:20:19Z",
    //         "updated_at": "2019-05-12T19:15:15Z",
    //         "card_set_id": "ce4e1850-20ed-441f-a381-b588659aaba0"
    //       },
    //       {
    //         "id": "a2045bcd-b242-4d61-9730-f2db1f88cc89",
    //         "term": "Levofloxacin",
    //         "definition": "Focused eco-centric leverage",
    //         "created_at": "2019-11-18T05:59:42Z",
    //         "updated_at": "2019-11-21T15:05:19Z",
    //         "card_set_id": "36a3cdb7-3530-42d1-977b-c17a11d030e1"
    //       },
    //       {
    //         "id": "64b4ea81-532a-4c4d-8927-86aea3d27b34",
    //         "term": "Acetaminophen",
    //         "definition": "Innovative explicit knowledge base",
    //         "created_at": "2019-12-22T02:44:18Z",
    //         "updated_at": "2020-01-11T19:37:13Z",
    //         "card_set_id": "36a3cdb7-3530-42d1-977b-c17a11d030e1"
    //       },
    //       {
    //         "id": "02155481-1be4-4217-b20a-fb9f3327c452",
    //         "term": "Weight Management Formula",
    //         "definition": "Synergized tangible installation",
    //         "created_at": "2019-08-24T01:51:36Z",
    //         "updated_at": "2019-03-03T08:21:09Z",
    //         "card_set_id": "36a3cdb7-3530-42d1-977b-c17a11d030e1"
    //       },
    //       {
    //         "id": "b3489954-2766-429a-ad30-0e9c52c23092",
    //         "term": "Alcohol",
    //         "definition": "Customizable system-worthy moderator",
    //         "created_at": "2019-11-12T07:40:39Z",
    //         "updated_at": "2019-04-01T02:24:02Z",
    //         "card_set_id": "36a3cdb7-3530-42d1-977b-c17a11d030e1"
    //       },
    //       {
    //         "id": "a3eb7fa8-a367-4368-b991-ec01ed59be0b",
    //         "term": "Clindamycin Phosphate",
    //         "definition": "Reactive multimedia moratorium",
    //         "created_at": "2019-10-20T08:10:10Z",
    //         "updated_at": "2019-12-24T20:12:01Z",
    //         "card_set_id": "36a3cdb7-3530-42d1-977b-c17a11d030e1"
    //       },
    //       {
    //         "id": "e8eb8b07-9678-4745-b6eb-90e597d10a65",
    //         "term": "Penicillium Glabrum",
    //         "definition": "Operative neutral encryption",
    //         "created_at": "2019-11-21T04:17:40Z",
    //         "updated_at": "2019-02-19T15:40:08Z",
    //         "card_set_id": "36a3cdb7-3530-42d1-977b-c17a11d030e1"
    //       },
    //       {
    //         "id": "3cb308cc-f91d-44e6-ae04-ffe80964e1cd",
    //         "term": "OCTINOXATE, OCTOCRYLENE, OCTISALATE, and Avobenzone",
    //         "definition": "Profound neutral software",
    //         "created_at": "2019-11-24T05:27:24Z",
    //         "updated_at": "2019-10-18T20:57:54Z",
    //         "card_set_id": "36a3cdb7-3530-42d1-977b-c17a11d030e1"
    //       },
    //       {
    //         "id": "4cfa2d54-ecaf-458b-a085-df875e73639f",
    //         "term": "CIPROFLOXACIN",
    //         "definition": "Focused encompassing extranet",
    //         "created_at": "2019-06-24T16:46:55Z",
    //         "updated_at": "2019-05-09T06:01:01Z",
    //         "card_set_id": "36a3cdb7-3530-42d1-977b-c17a11d030e1"
    //       },
    //       {
    //         "id": "5804f52f-810c-41d2-92bd-217b83b32483",
    //         "term": "Rock Water,",
    //         "definition": "Networked composite complexity",
    //         "created_at": "2019-11-30T04:44:27Z",
    //         "updated_at": "2019-07-31T14:54:53Z",
    //         "card_set_id": "36a3cdb7-3530-42d1-977b-c17a11d030e1"
    //       },
    //       {
    //         "id": "b04d5eb9-0918-4ed7-ae83-39ff31dc5d72",
    //         "term": "BETA CAROTENE, ASCORBIC ACID, CHOLECALCIFEROL, .ALPHA.-TOCOPHEROL ACETATE, DL-, THIAMINE MONONITRATE",
    //         "definition": "BETA CAROTENE, ASCORBIC ACID, CHOLECALCIFEROL, .ALPHA.-TOCOPHEROL ACETATE, DL-, THIAMINE MONONITRATE",
    //         "created_at": "2019-03-07T08:54:18Z",
    //         "updated_at": "2019-11-02T23:20:27Z",
    //         "card_set_id": "36a3cdb7-3530-42d1-977b-c17a11d030e1"
    //       },
    //       {
    //         "id": "0eb643f7-1f1a-412a-8fa5-d46039cef731",
    //         "term": "acetaminophen, dextromethorphan HBr, guaifenesin, phenylephrine HCl",
    //         "definition": "Future-proofed encompassing flexibility",
    //         "created_at": "2019-04-05T08:04:28Z",
    //         "updated_at": "2019-06-22T19:16:29Z",
    //         "card_set_id": "36a3cdb7-3530-42d1-977b-c17a11d030e1"
    //       },
    //       {
    //         "id": "5db2a52e-a53e-4108-8867-19baad72b520",
    //         "term": "Methylprednisolone",
    //         "definition": "Upgradable cohesive knowledge user",
    //         "created_at": "2019-11-22T23:13:22Z",
    //         "updated_at": "2019-08-11T22:37:33Z",
    //         "card_set_id": "36a3cdb7-3530-42d1-977b-c17a11d030e1"
    //       },
    //       {
    //         "id": "f9ab9b07-c3b5-4550-8c3a-4922af60e9a9",
    //         "term": "methazolamide tablets",
    //         "definition": "Programmable maximized solution",
    //         "created_at": "2020-01-17T01:27:27Z",
    //         "updated_at": "2019-04-25T22:59:34Z",
    //         "card_set_id": "36a3cdb7-3530-42d1-977b-c17a11d030e1"
    //       },
    //       {
    //         "id": "0b3a008f-b30b-4bcf-bbb6-ded90c36da7f",
    //         "term": "House Dust",
    //         "definition": "Exclusive system-worthy core",
    //         "created_at": "2019-12-31T21:42:53Z",
    //         "updated_at": "2019-06-04T07:48:54Z",
    //         "card_set_id": "36a3cdb7-3530-42d1-977b-c17a11d030e1"
    //       },
    //       {
    //         "id": "d9feff17-92c2-4d51-b2c6-c6e647445d9f",
    //         "term": "IBUPROFEN",
    //         "definition": "User-friendly tertiary workforce",
    //         "created_at": "2019-12-12T20:26:13Z",
    //         "updated_at": "2019-07-06T09:44:24Z",
    //         "card_set_id": "36a3cdb7-3530-42d1-977b-c17a11d030e1"
    //       },
    //       {
    //         "id": "11e59308-0731-4411-b7e7-0eb4c533bcce",
    //         "term": "sumatriptan succinate",
    //         "definition": "Re-contextualized tertiary superstructure",
    //         "created_at": "2019-11-24T11:11:53Z",
    //         "updated_at": "2019-06-25T09:27:20Z",
    //         "card_set_id": "bf96a209-ebe2-4c12-a9e0-f9e4bea1d293"
    //       },
    //       {
    //         "id": "e6c5fdc2-b0fb-4ac0-9651-1eb40a10010f",
    //         "term": "LIDOCAINE HYDROCHLORIDE ANHYDROUS and EPINEPHRINE",
    //         "definition": "Team-oriented next generation infrastructure",
    //         "created_at": "2019-01-29T16:59:47Z",
    //         "updated_at": "2019-03-24T13:42:53Z",
    //         "card_set_id": "bf96a209-ebe2-4c12-a9e0-f9e4bea1d293"
    //       },
    //       {
    //         "id": "ba254f0a-8898-4721-9a10-4f51349a4bec",
    //         "term": "SULFUR",
    //         "definition": "Business-focused static application",
    //         "created_at": "2019-09-24T15:46:30Z",
    //         "updated_at": "2019-07-13T06:04:49Z",
    //         "card_set_id": "bf96a209-ebe2-4c12-a9e0-f9e4bea1d293"
    //       },
    //       {
    //         "id": "a3cd5e6b-6462-4f22-9903-c1bec8e477f4",
    //         "term": "NAPROXEN SODIUM",
    //         "definition": "Devolved even-keeled adapter",
    //         "created_at": "2019-02-14T14:41:27Z",
    //         "updated_at": "2019-11-05T03:40:25Z",
    //         "card_set_id": "bf96a209-ebe2-4c12-a9e0-f9e4bea1d293"
    //       },
    //       {
    //         "id": "779e4195-3fae-42d6-a0d8-74e41056245a",
    //         "term": "Oxygen",
    //         "definition": "Sharable heuristic throughput",
    //         "created_at": "2019-09-21T23:09:15Z",
    //         "updated_at": "2019-08-21T07:38:25Z",
    //         "card_set_id": "bf96a209-ebe2-4c12-a9e0-f9e4bea1d293"
    //       },
    //       {
    //         "id": "0e7189ae-7acb-4b2b-bd9e-6ce5a80a80e2",
    //         "term": "Sulfur",
    //         "definition": "Grass-roots executive collaboration",
    //         "created_at": "2019-05-16T08:54:24Z",
    //         "updated_at": "2019-05-17T19:49:23Z",
    //         "card_set_id": "bf96a209-ebe2-4c12-a9e0-f9e4bea1d293"
    //       },
    //       {
    //         "id": "da0286fa-2382-48e4-8d70-57b6ba2bb5d2",
    //         "term": "Ziprasidone Hydrochloride",
    //         "definition": "Reverse-engineered transitional extranet",
    //         "created_at": "2019-05-31T07:47:15Z",
    //         "updated_at": "2019-11-02T12:18:30Z",
    //         "card_set_id": "bf96a209-ebe2-4c12-a9e0-f9e4bea1d293"
    //       },
    //       {
    //         "id": "1adbdaa6-010b-4976-b2f6-db0b18d12fa0",
    //         "term": "Puccinia striiformis",
    //         "definition": "Multi-layered even-keeled throughput",
    //         "created_at": "2019-11-30T08:21:48Z",
    //         "updated_at": "2019-09-11T12:34:14Z",
    //         "card_set_id": "bf96a209-ebe2-4c12-a9e0-f9e4bea1d293"
    //       },
    //       {
    //         "id": "faabe8c8-f64a-4390-b3d9-17ce7e2876e3",
    //         "term": "ZINC OXIDE",
    //         "definition": "Open-source 24 hour superstructure",
    //         "created_at": "2019-09-23T06:58:47Z",
    //         "updated_at": "2019-02-11T20:31:41Z",
    //         "card_set_id": "bf96a209-ebe2-4c12-a9e0-f9e4bea1d293"
    //       },
    //       {
    //         "id": "80417ef1-bf3f-4c4f-86ec-6f284faaed59",
    //         "term": "Sodium Fluoride",
    //         "definition": "Front-line neutral solution",
    //         "created_at": "2019-04-25T15:03:27Z",
    //         "updated_at": "2019-04-30T10:58:27Z",
    //         "card_set_id": "bf96a209-ebe2-4c12-a9e0-f9e4bea1d293"
    //       },
    //       {
    //         "id": "a06e792c-b3c9-4be7-b280-9b0f2f4e906f",
    //         "term": "Flurazepam Hydrochloride",
    //         "definition": "Down-sized national toolset",
    //         "created_at": "2019-11-08T01:20:39Z",
    //         "updated_at": "2019-02-09T18:24:53Z",
    //         "card_set_id": "bf96a209-ebe2-4c12-a9e0-f9e4bea1d293"
    //       },
    //       {
    //         "id": "cc7b926d-75fb-4cbe-b932-c2f03c86010d",
    //         "term": "Anthracinum , Pyrogenium, Aconitum nap., Arnica, Arsenicum alb., Baptisia, Bryonia, Hydrastis, Iodium, Lachesis, Nux vom., Phosphorus, Pulsatilla, Rhus toxicodendron , Echinacea , Iris versicolor, Urtica ur.",
    //         "definition": "Devolved 24/7 software",
    //         "created_at": "2019-09-21T22:59:25Z",
    //         "updated_at": "2019-12-26T11:16:19Z",
    //         "card_set_id": "bf96a209-ebe2-4c12-a9e0-f9e4bea1d293"
    //       },
    //       {
    //         "id": "cc8d6011-4c0a-4a4b-9cf9-7bd7254e8ef6",
    //         "term": "Nux vomica e sem. 3",
    //         "definition": "Ergonomic clear-thinking knowledge user",
    //         "created_at": "2019-09-12T04:41:11Z",
    //         "updated_at": "2019-12-16T11:43:41Z",
    //         "card_set_id": "bf96a209-ebe2-4c12-a9e0-f9e4bea1d293"
    //       },
    //       {
    //         "id": "ca1cabec-6d06-45b6-acd8-c2e19d69e3ca",
    //         "term": "Misoprostol",
    //         "definition": "Grass-roots next generation matrices",
    //         "created_at": "2019-10-26T22:37:26Z",
    //         "updated_at": "2019-10-21T08:44:22Z",
    //         "card_set_id": "bf96a209-ebe2-4c12-a9e0-f9e4bea1d293"
    //       },
    //       {
    //         "id": "c08fd779-0c98-4f3d-be83-0a614f76b767",
    //         "term": "DOCUSATE SODIUM",
    //         "definition": "Advanced discrete access",
    //         "created_at": "2019-06-18T08:39:30Z",
    //         "updated_at": "2020-01-16T22:12:30Z",
    //         "card_set_id": "bf96a209-ebe2-4c12-a9e0-f9e4bea1d293"
    //       },
    //       {
    //         "id": "9ed3dfac-61f0-40db-8984-07ee6701e239",
    //         "term": "GLYCERIN",
    //         "definition": "Focused grid-enabled framework",
    //         "created_at": "2019-05-07T23:34:47Z",
    //         "updated_at": "2019-03-10T03:21:34Z",
    //         "card_set_id": "c11c2545-90d4-4c73-ae14-933888dba864"
    //       },
    //       {
    //         "id": "e478fd94-96b4-4d65-bf34-9772e29ff9b7",
    //         "term": "Bumetanide",
    //         "definition": "De-engineered content-based product",
    //         "created_at": "2019-03-04T08:39:09Z",
    //         "updated_at": "2019-05-30T12:39:24Z",
    //         "card_set_id": "c11c2545-90d4-4c73-ae14-933888dba864"
    //       },
    //       {
    //         "id": "1a1305e6-f642-43de-8686-422a49a3907d",
    //         "term": "PROMETHAZINE HYDROCHLORIDE",
    //         "definition": "Streamlined object-oriented moderator",
    //         "created_at": "2019-06-17T03:24:48Z",
    //         "updated_at": "2019-09-24T13:25:46Z",
    //         "card_set_id": "c11c2545-90d4-4c73-ae14-933888dba864"
    //       },
    //       {
    //         "id": "31bcd4d0-f837-4c52-bd1b-af599a7b0596",
    //         "term": "Acetaminophen, Dextromethorphan HBr, Phenylephrine HCl and Chlorpheniramine Maleate",
    //         "definition": "Multi-lateral tertiary extranet",
    //         "created_at": "2019-12-20T22:14:56Z",
    //         "updated_at": "2019-02-22T04:48:06Z",
    //         "card_set_id": "c11c2545-90d4-4c73-ae14-933888dba864"
    //       },
    //       {
    //         "id": "9776cdda-6116-4020-bd46-50753feb273d",
    //         "term": "ALLANTOIN",
    //         "definition": "Distributed needs-based workforce",
    //         "created_at": "2019-06-25T13:42:24Z",
    //         "updated_at": "2019-07-09T12:34:07Z",
    //         "card_set_id": "c11c2545-90d4-4c73-ae14-933888dba864"
    //       },
    //       {
    //         "id": "b544c537-0953-4541-bde8-31bbf1b85d8b",
    //         "term": "Nicardipine Hydrochloride",
    //         "definition": "Progressive demand-driven support",
    //         "created_at": "2019-08-14T09:37:29Z",
    //         "updated_at": "2019-05-31T16:08:43Z",
    //         "card_set_id": "c11c2545-90d4-4c73-ae14-933888dba864"
    //       },
    //       {
    //         "id": "c7e3ab82-71d4-4dba-a957-73a65d63f956",
    //         "term": "Calcium carbonate",
    //         "definition": "Persevering explicit solution",
    //         "created_at": "2019-05-31T13:17:08Z",
    //         "updated_at": "2019-11-27T23:21:52Z",
    //         "card_set_id": "c11c2545-90d4-4c73-ae14-933888dba864"
    //       },
    //       {
    //         "id": "8d5dfaea-de4c-416c-8cec-42ccb92afde0",
    //         "term": "Enoxaparin Sodium",
    //         "definition": "Devolved bandwidth-monitored product",
    //         "created_at": "2019-12-09T15:42:13Z",
    //         "updated_at": "2019-05-17T09:26:39Z",
    //         "card_set_id": "c11c2545-90d4-4c73-ae14-933888dba864"
    //       },
    //       {
    //         "id": "7ecdba38-e32e-4c61-98bb-7d667e51e5df",
    //         "term": "MENTHOL",
    //         "definition": "Devolved intermediate utilisation",
    //         "created_at": "2019-07-28T19:15:02Z",
    //         "updated_at": "2019-06-14T19:54:22Z",
    //         "card_set_id": "c11c2545-90d4-4c73-ae14-933888dba864"
    //       },
    //       {
    //         "id": "7b39d210-c2d6-4d4a-987e-037ca791bc7e",
    //         "term": "Calcium carbonate",
    //         "definition": "Persevering web-enabled toolset",
    //         "created_at": "2019-10-04T03:12:54Z",
    //         "updated_at": "2019-09-09T13:49:51Z",
    //         "card_set_id": "c11c2545-90d4-4c73-ae14-933888dba864"
    //       },
    //       {
    //         "id": "f5195c0e-2c18-46ad-a17e-ed5634e65bfb",
    //         "term": "SAPROPTERIN DIHYDROCHLORIDE",
    //         "definition": "Realigned bifurcated intranet",
    //         "created_at": "2019-03-21T18:16:09Z",
    //         "updated_at": "2019-03-06T19:05:34Z",
    //         "card_set_id": "c11c2545-90d4-4c73-ae14-933888dba864"
    //       },
    //       {
    //         "id": "14d54fd4-4151-4221-8b0c-638c72cba9ae",
    //         "term": "ziv-aflibercept",
    //         "definition": "User-friendly regional database",
    //         "created_at": "2019-11-21T12:41:34Z",
    //         "updated_at": "2019-06-24T02:34:21Z",
    //         "card_set_id": "c11c2545-90d4-4c73-ae14-933888dba864"
    //       },
    //       {
    //         "id": "52dcfea5-05d5-446b-af2a-99c31591878f",
    //         "term": "LITHIUM CARBONATE",
    //         "definition": "Extended interactive synergy",
    //         "created_at": "2019-03-06T20:45:58Z",
    //         "updated_at": "2019-12-31T21:22:23Z",
    //         "card_set_id": "c11c2545-90d4-4c73-ae14-933888dba864"
    //       },
    //       {
    //         "id": "10d7804a-107c-42e0-94ea-4c0fae03f235",
    //         "term": "BENZETHONIUM CHLORIDE",
    //         "definition": "Operative mobile help-desk",
    //         "created_at": "2019-08-18T18:52:05Z",
    //         "updated_at": "2019-09-12T13:44:30Z",
    //         "card_set_id": "c11c2545-90d4-4c73-ae14-933888dba864"
    //       },
    //       {
    //         "id": "5e177d44-8fa1-40c6-8678-c0abfc661745",
    //         "term": "Energizing Multi-Protection Fluid",
    //         "definition": "Multi-layered well-modulated access",
    //         "created_at": "2019-10-17T04:44:53Z",
    //         "updated_at": "2019-08-21T05:43:32Z",
    //         "card_set_id": "c11c2545-90d4-4c73-ae14-933888dba864"
    //       },
    //       {
    //         "id": "df2fd8eb-4883-4a34-9fb5-1cc3b1b0d004",
    //         "term": "TITANIUMDIOXIDE",
    //         "definition": "Exclusive full-range model",
    //         "created_at": "2019-02-19T09:08:32Z",
    //         "updated_at": "2019-12-10T02:21:26Z",
    //         "card_set_id": "d50356fd-321a-460a-97ab-c10e7addecc3"
    //       },
    //       {
    //         "id": "c470cd9a-8c50-4d1a-aee5-cf3e5c302cac",
    //         "term": "Mirtazapine",
    //         "definition": "Profit-focused multi-tasking approach",
    //         "created_at": "2019-07-11T08:57:21Z",
    //         "updated_at": "2019-08-29T07:45:10Z",
    //         "card_set_id": "d50356fd-321a-460a-97ab-c10e7addecc3"
    //       },
    //       {
    //         "id": "882feda9-6450-4553-a492-df2ad7f2e42d",
    //         "term": "Kali bromatum, Natrum bromatum, Niccolum sulphuricum, Kali sulphuricum, Zincum bromatum,",
    //         "definition": "Optional uniform throughput",
    //         "created_at": "2019-05-07T18:41:38Z",
    //         "updated_at": "2019-11-29T01:52:57Z",
    //         "card_set_id": "d50356fd-321a-460a-97ab-c10e7addecc3"
    //       },
    //       {
    //         "id": "e2509fa3-b55b-479c-b789-56922f2da45a",
    //         "term": "quetiapine fumarate",
    //         "definition": "Quality-focused reciprocal info-mediaries",
    //         "created_at": "2019-04-04T14:44:46Z",
    //         "updated_at": "2019-10-04T19:35:51Z",
    //         "card_set_id": "d50356fd-321a-460a-97ab-c10e7addecc3"
    //       },
    //       {
    //         "id": "943b6cc0-50b8-45cd-8927-46842bd8ca14",
    //         "term": "Amoxicillin and Clavulanate Potassium",
    //         "definition": "Persevering well-modulated access",
    //         "created_at": "2019-02-12T22:16:54Z",
    //         "updated_at": "2019-09-28T11:42:34Z",
    //         "card_set_id": "d50356fd-321a-460a-97ab-c10e7addecc3"
    //       },
    //       {
    //         "id": "69a9278d-2746-4d8e-8a4f-f039bf10d88b",
    //         "term": "alprazolam",
    //         "definition": "Re-contextualized heuristic strategy",
    //         "created_at": "2019-07-16T07:36:06Z",
    //         "updated_at": "2019-02-13T13:11:00Z",
    //         "card_set_id": "d50356fd-321a-460a-97ab-c10e7addecc3"
    //       },
    //       {
    //         "id": "af9f8b74-9170-48a0-ba57-9052d1baa0dc",
    //         "term": "Pamidronate Disodium",
    //         "definition": "Proactive tertiary encryption",
    //         "created_at": "2019-05-29T12:20:07Z",
    //         "updated_at": "2019-02-11T15:19:30Z",
    //         "card_set_id": "d50356fd-321a-460a-97ab-c10e7addecc3"
    //       },
    //       {
    //         "id": "fbcb1b0e-457c-482b-a2d6-bac7a27cf4b4",
    //         "term": "risperidone",
    //         "definition": "Optimized systemic project",
    //         "created_at": "2019-05-06T13:23:06Z",
    //         "updated_at": "2019-05-19T06:00:45Z",
    //         "card_set_id": "d50356fd-321a-460a-97ab-c10e7addecc3"
    //       },
    //       {
    //         "id": "ca603bfe-c26a-4603-b804-f4020a8286ca",
    //         "term": "RANITIDINE",
    //         "definition": "Team-oriented local function",
    //         "created_at": "2020-01-12T04:34:25Z",
    //         "updated_at": "2019-10-30T07:06:20Z",
    //         "card_set_id": "d50356fd-321a-460a-97ab-c10e7addecc3"
    //       },
    //       {
    //         "id": "b0a5abb7-8e89-4423-98b9-25cab8fca4b5",
    //         "term": "acetaminophen, dextromethorphan HBr, doxylamine succinate, phenylephrine HCl",
    //         "definition": "Cross-platform client-driven function",
    //         "created_at": "2019-06-16T01:12:24Z",
    //         "updated_at": "2019-09-27T23:21:44Z",
    //         "card_set_id": "d50356fd-321a-460a-97ab-c10e7addecc3"
    //       },
    //       {
    //         "id": "3801349d-36ce-409e-b6d8-35dc2a3aae89",
    //         "term": "Mercurius Vivus",
    //         "definition": "Extended transitional migration",
    //         "created_at": "2019-02-23T11:06:08Z",
    //         "updated_at": "2019-11-26T04:31:12Z",
    //         "card_set_id": "d50356fd-321a-460a-97ab-c10e7addecc3"
    //       },
    //       {
    //         "id": "1dca8224-8df6-404b-b167-54e3ec39fc32",
    //         "term": "Octinoxate, Oxybenzone",
    //         "definition": "Networked disintermediate service-desk",
    //         "created_at": "2019-03-23T09:52:11Z",
    //         "updated_at": "2020-01-01T23:30:51Z",
    //         "card_set_id": "d50356fd-321a-460a-97ab-c10e7addecc3"
    //       },
    //       {
    //         "id": "0c7d6658-18ea-4365-8fb1-5a2f0fef3674",
    //         "term": "Dextromethorphan HBr",
    //         "definition": "Horizontal responsive task-force",
    //         "created_at": "2019-05-11T06:56:49Z",
    //         "updated_at": "2019-11-06T03:07:34Z",
    //         "card_set_id": "d50356fd-321a-460a-97ab-c10e7addecc3"
    //       },
    //       {
    //         "id": "63284691-e232-4688-9a51-c1725dda00f1",
    //         "term": "Magnesium Chloride, Dextrose monohydrate, Lactic Acid, Sodium Chloride, Sodium Bicarbonate, and Potassium Chloride",
    //         "definition": "Implemented impactful matrix",
    //         "created_at": "2019-05-12T10:01:16Z",
    //         "updated_at": "2019-02-22T15:38:12Z",
    //         "card_set_id": "d50356fd-321a-460a-97ab-c10e7addecc3"
    //       },
    //       {
    //         "id": "76169d25-5776-4cf7-8683-6924ff007509",
    //         "term": "Dicyclomine Hydrochloride",
    //         "definition": "Monitored logistical help-desk",
    //         "created_at": "2019-05-12T02:30:46Z",
    //         "updated_at": "2019-03-26T19:53:19Z",
    //         "card_set_id": "d50356fd-321a-460a-97ab-c10e7addecc3"
    //       },
    //       {
    //         "id": "5762e74a-94e6-48cd-9d1f-37f44ea46356",
    //         "term": "Lopinavir and Ritonavir",
    //         "definition": "Vision-oriented uniform focus group",
    //         "created_at": "2019-10-17T11:11:19Z",
    //         "updated_at": "2019-03-08T08:54:19Z",
    //         "card_set_id": "283e3de4-25bf-453b-9420-38929752750c"
    //       },
    //       {
    //         "id": "9291a133-0244-4967-8d96-acb8fdfa77b7",
    //         "term": "Glyburide",
    //         "definition": "Total real-time orchestration",
    //         "created_at": "2020-01-13T03:21:14Z",
    //         "updated_at": "2019-04-04T19:30:36Z",
    //         "card_set_id": "283e3de4-25bf-453b-9420-38929752750c"
    //       },
    //       {
    //         "id": "7e63aba1-7494-463b-befd-ed26039d43d2",
    //         "term": "Sheep Sorrel",
    //         "definition": "Visionary explicit local area network",
    //         "created_at": "2019-03-19T05:14:52Z",
    //         "updated_at": "2019-10-31T09:17:21Z",
    //         "card_set_id": "283e3de4-25bf-453b-9420-38929752750c"
    //       },
    //       {
    //         "id": "3ea87d54-f9c1-43d9-8c3b-0688ce5b6b7b",
    //         "term": "Loratadine",
    //         "definition": "Reverse-engineered executive leverage",
    //         "created_at": "2019-11-04T01:57:56Z",
    //         "updated_at": "2019-04-16T19:26:58Z",
    //         "card_set_id": "283e3de4-25bf-453b-9420-38929752750c"
    //       },
    //       {
    //         "id": "db5a1c6b-2ee7-4a0d-be0e-a73c68eb299d",
    //         "term": "PYRITHIONE ZINC",
    //         "definition": "Fundamental encompassing artificial intelligence",
    //         "created_at": "2019-03-07T21:56:16Z",
    //         "updated_at": "2019-11-28T21:45:17Z",
    //         "card_set_id": "283e3de4-25bf-453b-9420-38929752750c"
    //       },
    //       {
    //         "id": "88d1e439-eb53-44cc-88da-b9d21581b4c6",
    //         "term": "OCTINOXATE and TITANIUM DIOXIDE",
    //         "definition": "Quality-focused next generation software",
    //         "created_at": "2019-11-09T18:50:12Z",
    //         "updated_at": "2019-06-24T12:04:50Z",
    //         "card_set_id": "283e3de4-25bf-453b-9420-38929752750c"
    //       },
    //       {
    //         "id": "d0995e80-bf4f-4b5d-aaa8-410b97f2aa21",
    //         "term": "Omeprazole magnesium",
    //         "definition": "Profound heuristic data-warehouse",
    //         "created_at": "2019-07-04T15:10:05Z",
    //         "updated_at": "2019-10-30T03:12:37Z",
    //         "card_set_id": "283e3de4-25bf-453b-9420-38929752750c"
    //       },
    //       {
    //         "id": "ba776954-91ef-4f64-9b64-758f04246366",
    //         "term": "Pyrithione zinc",
    //         "definition": "Advanced object-oriented contingency",
    //         "created_at": "2019-05-03T21:01:35Z",
    //         "updated_at": "2019-07-24T14:55:06Z",
    //         "card_set_id": "283e3de4-25bf-453b-9420-38929752750c"
    //       },
    //       {
    //         "id": "8147b6fe-36cf-4ef7-afe6-6b18b3deef2b",
    //         "term": "Nabumetone",
    //         "definition": "Mandatory tangible core",
    //         "created_at": "2019-06-23T03:32:34Z",
    //         "updated_at": "2019-04-04T02:06:55Z",
    //         "card_set_id": "283e3de4-25bf-453b-9420-38929752750c"
    //       },
    //       {
    //         "id": "46b4894c-9fda-433a-ae66-73f4e8f04d66",
    //         "term": "ZINC OXIDE, OCTISALATE, TITANIUM DIOXIDE",
    //         "definition": "Reverse-engineered logistical budgetary management",
    //         "created_at": "2019-09-30T17:59:21Z",
    //         "updated_at": "2019-10-14T07:50:57Z",
    //         "card_set_id": "283e3de4-25bf-453b-9420-38929752750c"
    //       },
    //       {
    //         "id": "002e6e24-650e-47ab-89aa-85b6ce41ebbd",
    //         "term": "levalbuterol hydrochloride",
    //         "definition": "Re-contextualized bandwidth-monitored complexity",
    //         "created_at": "2019-10-30T04:06:56Z",
    //         "updated_at": "2019-07-22T17:38:39Z",
    //         "card_set_id": "283e3de4-25bf-453b-9420-38929752750c"
    //       },
    //       {
    //         "id": "f29bd292-1425-4099-a34f-4f2c672af77e",
    //         "term": "potassium chloride",
    //         "definition": "Right-sized human-resource analyzer",
    //         "created_at": "2019-11-09T07:30:43Z",
    //         "updated_at": "2019-12-04T00:09:47Z",
    //         "card_set_id": "283e3de4-25bf-453b-9420-38929752750c"
    //       },
    //       {
    //         "id": "0156e90d-b4bc-40d5-b920-bfb08204ec7a",
    //         "term": "PETROLATUM",
    //         "definition": "Persevering asymmetric groupware",
    //         "created_at": "2019-11-21T05:15:35Z",
    //         "updated_at": "2020-01-05T13:01:31Z",
    //         "card_set_id": "283e3de4-25bf-453b-9420-38929752750c"
    //       },
    //       {
    //         "id": "ee470928-32ac-42ba-ae16-0b3bb4651263",
    //         "term": "Enalapril maleate and hydrochlorothiazide",
    //         "definition": "Total 6th generation superstructure",
    //         "created_at": "2019-02-20T09:54:54Z",
    //         "updated_at": "2019-05-26T17:31:24Z",
    //         "card_set_id": "283e3de4-25bf-453b-9420-38929752750c"
    //       },
    //       {
    //         "id": "293ca81a-f130-4485-b030-eb8551f918b9",
    //         "term": "Fenofibrate",
    //         "definition": "Multi-layered high-level alliance",
    //         "created_at": "2019-05-18T07:23:18Z",
    //         "updated_at": "2019-03-15T02:23:30Z",
    //         "card_set_id": "283e3de4-25bf-453b-9420-38929752750c"
    //       },
    //       {
    //         "id": "30c2b008-6128-4a4e-82ba-f0522e7cd6b1",
    //         "term": "Hyoscyamine Sulfate",
    //         "definition": "Sharable incremental system engine",
    //         "created_at": "2019-04-02T23:19:27Z",
    //         "updated_at": "2019-07-29T21:50:07Z",
    //         "card_set_id": "261e69da-5bc7-41b3-84e5-bd10c9102d19"
    //       },
    //       {
    //         "id": "a7b9e551-3606-4715-9d74-5e16f34267ce",
    //         "term": "spironolactone",
    //         "definition": "Enhanced asymmetric hub",
    //         "created_at": "2019-10-28T08:28:57Z",
    //         "updated_at": "2019-07-25T01:47:52Z",
    //         "card_set_id": "261e69da-5bc7-41b3-84e5-bd10c9102d19"
    //       },
    //       {
    //         "id": "26f5007e-0f49-42ae-ac1e-cfc12821faa1",
    //         "term": "atovaquone and proguanil hydrochloride",
    //         "definition": "Vision-oriented asymmetric alliance",
    //         "created_at": "2019-06-28T06:24:16Z",
    //         "updated_at": "2019-01-26T19:35:29Z",
    //         "card_set_id": "261e69da-5bc7-41b3-84e5-bd10c9102d19"
    //       },
    //       {
    //         "id": "8b8da944-478d-47e0-8d07-77db35dbe485",
    //         "term": "Minoxidil",
    //         "definition": "Synergized global extranet",
    //         "created_at": "2019-07-13T20:28:48Z",
    //         "updated_at": "2019-10-22T22:28:45Z",
    //         "card_set_id": "261e69da-5bc7-41b3-84e5-bd10c9102d19"
    //       },
    //       {
    //         "id": "5d29d294-ab13-4ec7-9772-719371ae80ea",
    //         "term": "Treatment Set TS329915",
    //         "definition": "Optional holistic access",
    //         "created_at": "2019-10-30T03:27:21Z",
    //         "updated_at": "2019-12-22T05:06:45Z",
    //         "card_set_id": "261e69da-5bc7-41b3-84e5-bd10c9102d19"
    //       },
    //       {
    //         "id": "289d8af4-3901-4e2b-92bf-a8082081a464",
    //         "term": "testosterone",
    //         "definition": "Optional asynchronous interface",
    //         "created_at": "2019-06-16T19:42:23Z",
    //         "updated_at": "2019-05-14T01:49:47Z",
    //         "card_set_id": "261e69da-5bc7-41b3-84e5-bd10c9102d19"
    //       },
    //       {
    //         "id": "0de364f7-0fc7-43bc-bc8b-e017c2a6cee6",
    //         "term": "nifedipine",
    //         "definition": "User-centric explicit extranet",
    //         "created_at": "2019-08-28T08:38:02Z",
    //         "updated_at": "2019-08-11T00:21:21Z",
    //         "card_set_id": "261e69da-5bc7-41b3-84e5-bd10c9102d19"
    //       },
    //       {
    //         "id": "4d2dcf8e-9e7d-402e-a439-6df6223e46fa",
    //         "term": "Oxycodone hydrochloride and Acetaminophen",
    //         "definition": "Universal regional focus group",
    //         "created_at": "2019-02-10T10:53:55Z",
    //         "updated_at": "2019-08-17T09:32:49Z",
    //         "card_set_id": "261e69da-5bc7-41b3-84e5-bd10c9102d19"
    //       },
    //       {
    //         "id": "4023196e-e344-431c-ad23-d47ebd2991d5",
    //         "term": "Timolol Maleate",
    //         "definition": "Synergized mission-critical infrastructure",
    //         "created_at": "2019-04-05T04:51:56Z",
    //         "updated_at": "2019-09-15T17:37:33Z",
    //         "card_set_id": "261e69da-5bc7-41b3-84e5-bd10c9102d19"
    //       },
    //       {
    //         "id": "1fa7f996-b09f-4463-8a3a-595e9684ea67",
    //         "term": "Flecainide",
    //         "definition": "Proactive 24 hour benchmark",
    //         "created_at": "2019-03-22T19:46:11Z",
    //         "updated_at": "2019-04-04T15:16:38Z",
    //         "card_set_id": "261e69da-5bc7-41b3-84e5-bd10c9102d19"
    //       },
    //       {
    //         "id": "71a19e81-e305-4127-b582-76260543231e",
    //         "term": "Western Water Hemp",
    //         "definition": "Profit-focused discrete ability",
    //         "created_at": "2019-08-21T11:59:16Z",
    //         "updated_at": "2019-03-02T20:19:58Z",
    //         "card_set_id": "261e69da-5bc7-41b3-84e5-bd10c9102d19"
    //       },
    //       {
    //         "id": "e5795b0f-fead-4c13-8fa0-55df46986466",
    //         "term": "Cumin",
    //         "definition": "Optional high-level structure",
    //         "created_at": "2019-07-03T15:39:13Z",
    //         "updated_at": "2019-06-05T01:31:48Z",
    //         "card_set_id": "261e69da-5bc7-41b3-84e5-bd10c9102d19"
    //       },
    //       {
    //         "id": "b78190d3-65f5-42c5-a44b-3b530bcd24f8",
    //         "term": "DEXTROMETHORPHAN HYDROBROMIDE, GUAIFENESIN, PHENYLEPHRINE HYDROCHLORIDE",
    //         "definition": "Fully-configurable transitional hub",
    //         "created_at": "2019-02-24T18:23:29Z",
    //         "updated_at": "2019-12-12T11:01:35Z",
    //         "card_set_id": "261e69da-5bc7-41b3-84e5-bd10c9102d19"
    //       },
    //       {
    //         "id": "8251db85-e363-42eb-8fbf-47608404e4ef",
    //         "term": "ETHYL ALCOHOL",
    //         "definition": "Implemented discrete initiative",
    //         "created_at": "2019-10-20T18:31:55Z",
    //         "updated_at": "2019-08-08T17:24:54Z",
    //         "card_set_id": "261e69da-5bc7-41b3-84e5-bd10c9102d19"
    //       },
    //       {
    //         "id": "66534e77-7969-4284-a801-db7e5935c4f5",
    //         "term": "Nifedipine",
    //         "definition": "Configurable responsive forecast",
    //         "created_at": "2019-03-24T13:23:09Z",
    //         "updated_at": "2019-08-28T21:59:03Z",
    //         "card_set_id": "261e69da-5bc7-41b3-84e5-bd10c9102d19"
    //       },
    //       {
    //         "id": "8d654f7b-a80b-49fb-be9b-0c99015cf450",
    //         "term": "Hydrocodone Bitartrate and Ibuprofen",
    //         "definition": "Business-focused non-volatile conglomeration",
    //         "created_at": "2019-08-02T04:35:59Z",
    //         "updated_at": "2019-09-12T10:52:31Z",
    //         "card_set_id": "50ba1a76-c51c-47b7-9759-36a5636599f7"
    //       },
    //       {
    //         "id": "a4aaaedd-917f-48d7-ab2d-eb024a33a0a6",
    //         "term": "ZINC OXIDE, TITANIUM DIOXIDE, ENSULIZOLE",
    //         "definition": "Exclusive attitude-oriented approach",
    //         "created_at": "2019-09-28T10:46:13Z",
    //         "updated_at": "2019-12-12T08:54:28Z",
    //         "card_set_id": "50ba1a76-c51c-47b7-9759-36a5636599f7"
    //       },
    //       {
    //         "id": "0631b18f-2ab6-470e-aac7-46fd522c21f0",
    //         "term": "West Sycamore",
    //         "definition": "Open-architected non-volatile methodology",
    //         "created_at": "2019-04-07T08:32:16Z",
    //         "updated_at": "2019-08-13T20:40:35Z",
    //         "card_set_id": "50ba1a76-c51c-47b7-9759-36a5636599f7"
    //       },
    //       {
    //         "id": "0cc5a5cd-71c7-4c43-8077-fe439d0805f5",
    //         "term": "PYRITHIONE ZINC",
    //         "definition": "Cloned attitude-oriented conglomeration",
    //         "created_at": "2019-02-27T23:25:17Z",
    //         "updated_at": "2019-10-30T00:27:19Z",
    //         "card_set_id": "50ba1a76-c51c-47b7-9759-36a5636599f7"
    //       },
    //       {
    //         "id": "df74369b-125a-4d22-971a-e34a8518d62d",
    //         "term": "ALCOHOL FREE HAND SANITIZER",
    //         "definition": "Team-oriented local collaboration",
    //         "created_at": "2019-10-09T03:57:48Z",
    //         "updated_at": "2019-11-13T17:15:36Z",
    //         "card_set_id": "50ba1a76-c51c-47b7-9759-36a5636599f7"
    //       },
    //       {
    //         "id": "164a06d7-968d-4dd0-919b-6a65ee82fbd7",
    //         "term": "MENTHOL",
    //         "definition": "Up-sized discrete encryption",
    //         "created_at": "2019-03-23T14:39:35Z",
    //         "updated_at": "2019-11-28T21:16:54Z",
    //         "card_set_id": "50ba1a76-c51c-47b7-9759-36a5636599f7"
    //       },
    //       {
    //         "id": "5cee6f77-5abb-436d-a533-e9005f33201b",
    //         "term": "ACETAMINOPHEN, DIPHENHYDRAMINE HYDROCHLORIDE",
    //         "definition": "Public-key empowering implementation",
    //         "created_at": "2019-05-21T17:30:12Z",
    //         "updated_at": "2019-03-27T21:54:45Z",
    //         "card_set_id": "50ba1a76-c51c-47b7-9759-36a5636599f7"
    //       },
    //       {
    //         "id": "dfd624ae-0c6e-4e4f-9e3f-8c58c4e51789",
    //         "term": "MENTHOL 5%",
    //         "definition": "Upgradable maximized contingency",
    //         "created_at": "2019-03-19T02:21:09Z",
    //         "updated_at": "2019-03-24T21:11:11Z",
    //         "card_set_id": "50ba1a76-c51c-47b7-9759-36a5636599f7"
    //       },
    //       {
    //         "id": "acdb8542-7255-4916-9e19-690dc7f07997",
    //         "term": "Metronidazole",
    //         "definition": "Exclusive web-enabled time-frame",
    //         "created_at": "2019-03-06T20:43:04Z",
    //         "updated_at": "2019-11-12T14:50:03Z",
    //         "card_set_id": "50ba1a76-c51c-47b7-9759-36a5636599f7"
    //       },
    //       {
    //         "id": "d2308c89-93ec-49dd-8dac-9ddb38335fd4",
    //         "term": "Betamethasone Dipropionate",
    //         "definition": "Integrated foreground pricing structure",
    //         "created_at": "2019-02-14T18:21:41Z",
    //         "updated_at": "2019-02-15T08:27:57Z",
    //         "card_set_id": "50ba1a76-c51c-47b7-9759-36a5636599f7"
    //       },
    //       {
    //         "id": "810f93dd-ed23-4122-bed8-9a9632aee9b5",
    //         "term": "Prednisolone",
    //         "definition": "Synergized web-enabled parallelism",
    //         "created_at": "2019-04-21T19:20:20Z",
    //         "updated_at": "2019-08-07T04:10:15Z",
    //         "card_set_id": "50ba1a76-c51c-47b7-9759-36a5636599f7"
    //       },
    //       {
    //         "id": "e441b0b6-a400-4d4b-b666-a7b1135aa8b5",
    //         "term": "Acetaminophen, Doxylamine succinate, Phenylephrine hydrochloride",
    //         "definition": "Function-based eco-centric monitoring",
    //         "created_at": "2019-06-03T01:58:25Z",
    //         "updated_at": "2019-04-21T02:04:01Z",
    //         "card_set_id": "50ba1a76-c51c-47b7-9759-36a5636599f7"
    //       },
    //       {
    //         "id": "5ec28326-9f4c-49df-9bf8-84590b060a6d",
    //         "term": "Mineral Oil",
    //         "definition": "Compatible system-worthy throughput",
    //         "created_at": "2019-08-08T18:35:36Z",
    //         "updated_at": "2019-07-20T03:08:17Z",
    //         "card_set_id": "50ba1a76-c51c-47b7-9759-36a5636599f7"
    //       },
    //       {
    //         "id": "48ac1f02-a3d7-4645-8478-80c5075ab1fd",
    //         "term": "DEXTROSE MONOHYDRATE",
    //         "definition": "Universal multimedia structure",
    //         "created_at": "2019-02-14T01:20:38Z",
    //         "updated_at": "2019-02-28T01:08:08Z",
    //         "card_set_id": "50ba1a76-c51c-47b7-9759-36a5636599f7"
    //       },
    //       {
    //         "id": "1eddcc3d-f152-4ced-a398-fd28dfd5ff71",
    //         "term": "Orange Pollen",
    //         "definition": "Robust stable hierarchy",
    //         "created_at": "2019-11-07T03:21:57Z",
    //         "updated_at": "2019-08-22T09:35:59Z",
    //         "card_set_id": "50ba1a76-c51c-47b7-9759-36a5636599f7"
    //       },
    //       {
    //         "id": "d3284deb-db46-4985-a6ff-df4f70db505e",
    //         "term": "Promethazine HCl",
    //         "definition": "De-engineered bi-directional forecast",
    //         "created_at": "2019-08-13T05:20:30Z",
    //         "updated_at": "2019-05-19T16:11:58Z",
    //         "card_set_id": "7108106a-3825-4567-975c-ee9beb83f38b"
    //       },
    //       {
    //         "id": "7ca978dd-7869-488c-8f28-ec792db0d86f",
    //         "term": "Phenylephrine HCl",
    //         "definition": "Operative mission-critical software",
    //         "created_at": "2019-10-26T20:20:15Z",
    //         "updated_at": "2019-04-12T09:05:39Z",
    //         "card_set_id": "7108106a-3825-4567-975c-ee9beb83f38b"
    //       },
    //       {
    //         "id": "69586eac-0fe9-427f-8003-7257a6244122",
    //         "term": "ALLANTOIN AND DIMETHICONE",
    //         "definition": "Up-sized 24/7 leverage",
    //         "created_at": "2020-01-06T15:47:17Z",
    //         "updated_at": "2019-05-31T03:43:18Z",
    //         "card_set_id": "7108106a-3825-4567-975c-ee9beb83f38b"
    //       },
    //       {
    //         "id": "0a197c8e-abf7-4f63-8610-80f5c81c5c85",
    //         "term": "Alprazolam",
    //         "definition": "Multi-layered attitude-oriented matrix",
    //         "created_at": "2019-08-17T13:44:47Z",
    //         "updated_at": "2019-03-08T22:48:40Z",
    //         "card_set_id": "7108106a-3825-4567-975c-ee9beb83f38b"
    //       },
    //       {
    //         "id": "eb1536f8-869c-4f5f-b858-a7c3eec05f24",
    //         "term": "Sodium Monofluorophosphate",
    //         "definition": "User-friendly responsive function",
    //         "created_at": "2019-05-03T08:40:43Z",
    //         "updated_at": "2019-07-25T21:51:35Z",
    //         "card_set_id": "7108106a-3825-4567-975c-ee9beb83f38b"
    //       },
    //       {
    //         "id": "61734e13-0405-4953-8684-c99eb5137e7a",
    //         "term": "OCTINOXATE, OCTISALATE, OCTOCRYLENE, and TITANIUM DIOXIDE",
    //         "definition": "Self-enabling systemic throughput",
    //         "created_at": "2019-08-23T19:02:42Z",
    //         "updated_at": "2019-10-11T09:58:32Z",
    //         "card_set_id": "7108106a-3825-4567-975c-ee9beb83f38b"
    //       },
    //       {
    //         "id": "5b43c8ca-d905-450c-82d3-1fd10a0021da",
    //         "term": "Natural Medicine",
    //         "definition": "Universal impactful toolset",
    //         "created_at": "2019-12-03T15:20:50Z",
    //         "updated_at": "2019-07-28T06:58:06Z",
    //         "card_set_id": "7108106a-3825-4567-975c-ee9beb83f38b"
    //       },
    //       {
    //         "id": "d847b579-e93a-4a68-afff-e497f79eac10",
    //         "term": "ETHYL ALCOHOL",
    //         "definition": "Digitized composite protocol",
    //         "created_at": "2019-08-20T14:57:40Z",
    //         "updated_at": "2019-04-25T11:58:02Z",
    //         "card_set_id": "7108106a-3825-4567-975c-ee9beb83f38b"
    //       },
    //       {
    //         "id": "d6984076-ffbc-49d2-a093-29c0b91e8177",
    //         "term": "Caffeine",
    //         "definition": "Organized fresh-thinking approach",
    //         "created_at": "2019-08-04T06:24:56Z",
    //         "updated_at": "2019-04-01T14:25:10Z",
    //         "card_set_id": "7108106a-3825-4567-975c-ee9beb83f38b"
    //       },
    //       {
    //         "id": "43b124c6-3316-4615-985e-5c84515dab06",
    //         "term": "Ibuprofen",
    //         "definition": "Down-sized context-sensitive workforce",
    //         "created_at": "2019-10-26T14:18:25Z",
    //         "updated_at": "2019-06-27T00:44:14Z",
    //         "card_set_id": "7108106a-3825-4567-975c-ee9beb83f38b"
    //       },
    //       {
    //         "id": "cd7c61da-2c6c-4e95-bf74-026b31ca1c05",
    //         "term": "FLUOXETINE HYDROCHLORIDE, CHOLINE",
    //         "definition": "Distributed mission-critical concept",
    //         "created_at": "2019-06-16T23:35:39Z",
    //         "updated_at": "2019-07-10T21:30:22Z",
    //         "card_set_id": "7108106a-3825-4567-975c-ee9beb83f38b"
    //       },
    //       {
    //         "id": "5e5c6ef3-385e-4d7a-ba8b-fa05225ff700",
    //         "term": "Magnesium Sulfate",
    //         "definition": "Reduced demand-driven analyzer",
    //         "created_at": "2019-06-29T07:03:37Z",
    //         "updated_at": "2019-06-12T17:55:00Z",
    //         "card_set_id": "7108106a-3825-4567-975c-ee9beb83f38b"
    //       },
    //       {
    //         "id": "42253acc-6aba-47cb-87c6-ff33239c09b0",
    //         "term": "Prazosin Hydrochloride",
    //         "definition": "Robust discrete synergy",
    //         "created_at": "2019-12-30T15:11:42Z",
    //         "updated_at": "2019-11-04T06:16:28Z",
    //         "card_set_id": "7108106a-3825-4567-975c-ee9beb83f38b"
    //       },
    //       {
    //         "id": "561d7290-c803-4ec3-ad0f-9e7658d1303f",
    //         "term": "OCTINOXATE",
    //         "definition": "Polarised non-volatile matrices",
    //         "created_at": "2019-05-21T15:22:55Z",
    //         "updated_at": "2020-01-07T15:42:30Z",
    //         "card_set_id": "7108106a-3825-4567-975c-ee9beb83f38b"
    //       },
    //       {
    //         "id": "3a35e875-8c3d-4758-a82f-568df00d7e54",
    //         "term": "insulin-like growth factor-1 (IGF-1)",
    //         "definition": "Proactive executive utilisation",
    //         "created_at": "2019-04-29T20:47:20Z",
    //         "updated_at": "2019-08-18T04:46:46Z",
    //         "card_set_id": "7108106a-3825-4567-975c-ee9beb83f38b"
    //       },
    //       {
    //         "id": "b53cc255-6538-475c-9f5d-916f609af05a",
    //         "term": "Titanium Dioxide",
    //         "definition": "Streamlined mission-critical model",
    //         "created_at": "2019-02-21T09:30:58Z",
    //         "updated_at": "2019-05-02T14:42:05Z",
    //         "card_set_id": "cbb8a25d-c699-4eec-bf52-8a1768e6bfb7"
    //       },
    //       {
    //         "id": "e60078f3-6472-466e-a115-41fcff4239e3",
    //         "term": ".beta.-carotene, ascorbic acid, cholecalciferol, .alpha.-tocopherol acetate, dl-, thiamine mononitra",
    //         "definition": ".beta.-carotene, ascorbic acid, cholecalciferol, .alpha.-tocopherol acetate, dl-, thiamine mononitra",
    //         "created_at": "2019-10-15T01:54:24Z",
    //         "updated_at": "2019-11-01T09:08:04Z",
    //         "card_set_id": "cbb8a25d-c699-4eec-bf52-8a1768e6bfb7"
    //       },
    //       {
    //         "id": "f66d12a7-0482-4fe5-ad79-7764631d4e73",
    //         "term": "cisatracurium besylate",
    //         "definition": "Streamlined foreground interface",
    //         "created_at": "2019-02-03T14:20:43Z",
    //         "updated_at": "2019-03-06T13:25:05Z",
    //         "card_set_id": "cbb8a25d-c699-4eec-bf52-8a1768e6bfb7"
    //       },
    //       {
    //         "id": "2f98e637-ab47-4685-a8a9-3602ee47b2d0",
    //         "term": "Acetaminophen and Codeine Phosphate",
    //         "definition": "Cross-platform mission-critical budgetary management",
    //         "created_at": "2019-09-27T23:51:03Z",
    //         "updated_at": "2019-08-28T18:53:57Z",
    //         "card_set_id": "cbb8a25d-c699-4eec-bf52-8a1768e6bfb7"
    //       },
    //       {
    //         "id": "97ac4f71-8999-4f74-8b1a-f4cb1c570ab5",
    //         "term": "Povidone Iodine",
    //         "definition": "Multi-channelled bandwidth-monitored approach",
    //         "created_at": "2019-04-13T10:10:20Z",
    //         "updated_at": "2019-10-15T10:32:26Z",
    //         "card_set_id": "cbb8a25d-c699-4eec-bf52-8a1768e6bfb7"
    //       },
    //       {
    //         "id": "acb75665-29b9-491d-9661-2fa5873a67e9",
    //         "term": "Alcohol",
    //         "definition": "Implemented reciprocal circuit",
    //         "created_at": "2019-12-23T03:48:33Z",
    //         "updated_at": "2019-04-27T08:26:43Z",
    //         "card_set_id": "cbb8a25d-c699-4eec-bf52-8a1768e6bfb7"
    //       },
    //       {
    //         "id": "b815966f-6df2-4693-8109-1fb9da0081a2",
    //         "term": "permethrin",
    //         "definition": "Team-oriented 4th generation monitoring",
    //         "created_at": "2019-04-26T02:03:28Z",
    //         "updated_at": "2019-04-01T20:59:27Z",
    //         "card_set_id": "cbb8a25d-c699-4eec-bf52-8a1768e6bfb7"
    //       },
    //       {
    //         "id": "5b4809d7-2217-4a10-840a-c1ab2f3dcc42",
    //         "term": "potassium citrate",
    //         "definition": "Phased zero tolerance Graphical User Interface",
    //         "created_at": "2019-11-16T08:46:23Z",
    //         "updated_at": "2019-12-19T02:16:30Z",
    //         "card_set_id": "cbb8a25d-c699-4eec-bf52-8a1768e6bfb7"
    //       },
    //       {
    //         "id": "6f4a8ee0-bf98-478b-8e8d-78c0f5589005",
    //         "term": "Hydrocodone Bitartrate and Homatropine Methylbromide",
    //         "definition": "Ergonomic directional pricing structure",
    //         "created_at": "2019-01-21T08:17:02Z",
    //         "updated_at": "2019-02-14T15:58:27Z",
    //         "card_set_id": "cbb8a25d-c699-4eec-bf52-8a1768e6bfb7"
    //       },
    //       {
    //         "id": "cdd3337f-aa26-45b8-868b-195e0dc7c54a",
    //         "term": "OCTINOXATE, OXYBENZONE",
    //         "definition": "Ergonomic systemic success",
    //         "created_at": "2019-11-18T03:26:53Z",
    //         "updated_at": "2019-12-15T03:00:24Z",
    //         "card_set_id": "cbb8a25d-c699-4eec-bf52-8a1768e6bfb7"
    //       },
    //       {
    //         "id": "074fd554-36e7-4cb6-b632-6e98128a2778",
    //         "term": "PSEUDOGNAPHALIUM OBTUSIFOLIUM",
    //         "definition": "Triple-buffered didactic circuit",
    //         "created_at": "2019-11-07T02:55:22Z",
    //         "updated_at": "2019-04-12T13:34:05Z",
    //         "card_set_id": "cbb8a25d-c699-4eec-bf52-8a1768e6bfb7"
    //       },
    //       {
    //         "id": "6d7c33d8-48af-4b36-83cf-cbca2ee30c02",
    //         "term": "CHAMOMILLA, CALCAREA PHOSPHORICA, COFFEA CRUDA, BELLADONNA",
    //         "definition": "Front-line asynchronous frame",
    //         "created_at": "2019-10-13T06:56:11Z",
    //         "updated_at": "2019-10-16T11:29:00Z",
    //         "card_set_id": "cbb8a25d-c699-4eec-bf52-8a1768e6bfb7"
    //       },
    //       {
    //         "id": "b431c5fe-3ed9-4f84-a457-69b8c99ad615",
    //         "term": "Minocycline Hydrochloride",
    //         "definition": "Triple-buffered holistic hierarchy",
    //         "created_at": "2019-06-15T00:54:56Z",
    //         "updated_at": "2019-02-02T09:58:19Z",
    //         "card_set_id": "cbb8a25d-c699-4eec-bf52-8a1768e6bfb7"
    //       },
    //       {
    //         "id": "ee601978-6661-433a-8313-f358068de6d6",
    //         "term": "Ramipril",
    //         "definition": "Optimized fresh-thinking parallelism",
    //         "created_at": "2019-02-20T04:59:45Z",
    //         "updated_at": "2019-08-30T01:26:34Z",
    //         "card_set_id": "cbb8a25d-c699-4eec-bf52-8a1768e6bfb7"
    //       },
    //       {
    //         "id": "988a3d5a-f142-4747-9ad1-601caaa9b4d4",
    //         "term": "meclizine hydrochloride",
    //         "definition": "Programmable responsive model",
    //         "created_at": "2019-12-01T17:31:59Z",
    //         "updated_at": "2019-09-10T07:59:50Z",
    //         "card_set_id": "cbb8a25d-c699-4eec-bf52-8a1768e6bfb7"
    //       },
    //       {
    //         "id": "d4114625-7b08-4954-9c77-baba5f075dd6",
    //         "term": "Warfarin Sodium",
    //         "definition": "Multi-tiered motivating paradigm",
    //         "created_at": "2019-06-04T20:43:21Z",
    //         "updated_at": "2019-11-07T11:45:59Z",
    //         "card_set_id": "06ac7d81-c35d-4e35-908c-24fe8b673b94"
    //       },
    //       {
    //         "id": "21c2bc0e-22c5-480d-b18a-248f5b0166a3",
    //         "term": "Arnica Montana, Horse Chestnut, Hypericum Perforatum, Ruta Graveolens Flowering Top, and Thuja Occidentalis Leafy Twig",
    //         "definition": "Profound logistical array",
    //         "created_at": "2019-09-03T23:51:14Z",
    //         "updated_at": "2019-05-19T11:29:37Z",
    //         "card_set_id": "06ac7d81-c35d-4e35-908c-24fe8b673b94"
    //       },
    //       {
    //         "id": "7318b938-e6c8-40ba-adc1-e17e5d7ddb13",
    //         "term": "Ranitidine",
    //         "definition": "Optimized directional access",
    //         "created_at": "2019-06-18T13:44:30Z",
    //         "updated_at": "2019-07-06T11:12:02Z",
    //         "card_set_id": "06ac7d81-c35d-4e35-908c-24fe8b673b94"
    //       },
    //       {
    //         "id": "7d525af7-a1ba-4cf3-96dc-5e5450c0632f",
    //         "term": "Budesonide",
    //         "definition": "Up-sized bandwidth-monitored migration",
    //         "created_at": "2019-08-08T10:41:27Z",
    //         "updated_at": "2019-12-24T18:39:54Z",
    //         "card_set_id": "06ac7d81-c35d-4e35-908c-24fe8b673b94"
    //       },
    //       {
    //         "id": "2fa43415-449e-4ee6-b01d-b101ee333a5d",
    //         "term": "Parathyroid Booster",
    //         "definition": "Future-proofed bandwidth-monitored support",
    //         "created_at": "2019-08-31T17:18:34Z",
    //         "updated_at": "2019-10-03T02:51:00Z",
    //         "card_set_id": "06ac7d81-c35d-4e35-908c-24fe8b673b94"
    //       },
    //       {
    //         "id": "e52be329-d156-4855-84c5-59da3fa53988",
    //         "term": "Arnica Betula A",
    //         "definition": "Re-engineered 6th generation emulation",
    //         "created_at": "2019-06-10T18:43:28Z",
    //         "updated_at": "2019-12-30T05:13:54Z",
    //         "card_set_id": "06ac7d81-c35d-4e35-908c-24fe8b673b94"
    //       },
    //       {
    //         "id": "feaa2988-0202-4e60-ac3f-63d8b8c45a76",
    //         "term": "SODIUM MONOFLUOROPHOSPHATE",
    //         "definition": "Optimized reciprocal approach",
    //         "created_at": "2019-06-13T12:18:39Z",
    //         "updated_at": "2019-12-24T17:27:29Z",
    //         "card_set_id": "06ac7d81-c35d-4e35-908c-24fe8b673b94"
    //       },
    //       {
    //         "id": "6e3fabdb-e92d-45c1-8fcf-ae60720fac52",
    //         "term": "Sulfamethoxazole and Trimethoprim",
    //         "definition": "Decentralized uniform function",
    //         "created_at": "2019-05-19T08:33:11Z",
    //         "updated_at": "2019-10-17T23:29:30Z",
    //         "card_set_id": "06ac7d81-c35d-4e35-908c-24fe8b673b94"
    //       },
    //       {
    //         "id": "df272408-559e-4fe5-aefe-058fd5b6ac81",
    //         "term": "Titanium Dioxide and Zinc Oxide",
    //         "definition": "Optimized maximized productivity",
    //         "created_at": "2019-09-09T14:38:38Z",
    //         "updated_at": "2019-05-06T08:21:30Z",
    //         "card_set_id": "06ac7d81-c35d-4e35-908c-24fe8b673b94"
    //       },
    //       {
    //         "id": "d04e3a3a-ca6c-44b2-b28d-ca03ae631ca8",
    //         "term": "Buspirone Hydrochloride",
    //         "definition": "User-friendly dynamic emulation",
    //         "created_at": "2019-07-18T17:38:14Z",
    //         "updated_at": "2019-05-10T20:52:46Z",
    //         "card_set_id": "06ac7d81-c35d-4e35-908c-24fe8b673b94"
    //       },
    //       {
    //         "id": "810ab6eb-51f8-4a45-8ad0-771a66d45809",
    //         "term": "Divalproex Sodium",
    //         "definition": "Digitized real-time process improvement",
    //         "created_at": "2020-01-17T07:06:51Z",
    //         "updated_at": "2019-04-28T01:31:21Z",
    //         "card_set_id": "06ac7d81-c35d-4e35-908c-24fe8b673b94"
    //       },
    //       {
    //         "id": "36051e08-466b-45ce-8aaf-a42234134b41",
    //         "term": "Mepivacaine Hydrochloride",
    //         "definition": "Organic scalable focus group",
    //         "created_at": "2020-01-08T07:53:09Z",
    //         "updated_at": "2019-02-05T05:33:47Z",
    //         "card_set_id": "06ac7d81-c35d-4e35-908c-24fe8b673b94"
    //       },
    //       {
    //         "id": "a8320fbf-348b-485b-9fb3-a7239463eef8",
    //         "term": "Dimethicone, Octinoxate, and Oxybenzone",
    //         "definition": "Balanced attitude-oriented conglomeration",
    //         "created_at": "2019-10-06T03:43:25Z",
    //         "updated_at": "2019-07-11T19:11:58Z",
    //         "card_set_id": "06ac7d81-c35d-4e35-908c-24fe8b673b94"
    //       },
    //       {
    //         "id": "7d7e58a1-b068-4a53-985d-c8d0206e6772",
    //         "term": "Carvedilol",
    //         "definition": "Switchable stable model",
    //         "created_at": "2019-11-05T06:56:50Z",
    //         "updated_at": "2019-11-27T02:22:49Z",
    //         "card_set_id": "06ac7d81-c35d-4e35-908c-24fe8b673b94"
    //       },
    //       {
    //         "id": "0443d8d6-e2e1-4d45-906a-de9cde3d3c3a",
    //         "term": "Duloxetine hydrochloride",
    //         "definition": "Front-line national knowledge base",
    //         "created_at": "2019-07-26T01:27:39Z",
    //         "updated_at": "2019-08-17T00:33:16Z",
    //         "card_set_id": "06ac7d81-c35d-4e35-908c-24fe8b673b94"
    //       },
    //       {
    //         "id": "1bfb2994-532e-4f47-95b0-2a7011c71a01",
    //         "term": "METFORMIN HYDROCHLORIDE",
    //         "definition": "Right-sized zero tolerance middleware",
    //         "created_at": "2019-04-15T22:50:55Z",
    //         "updated_at": "2019-07-15T19:11:05Z",
    //         "card_set_id": "38ed183e-8077-4f3d-b9f3-9acbd30b89bf"
    //       },
    //       {
    //         "id": "6ae6ac84-e548-4f89-ae83-8facfc934def",
    //         "term": "Triclosan",
    //         "definition": "Synergistic client-driven alliance",
    //         "created_at": "2019-06-28T17:17:15Z",
    //         "updated_at": "2019-09-16T10:17:09Z",
    //         "card_set_id": "38ed183e-8077-4f3d-b9f3-9acbd30b89bf"
    //       },
    //       {
    //         "id": "29b5b1b1-c3be-46c7-8998-61d7ca98e5d3",
    //         "term": "levetiracetam",
    //         "definition": "Stand-alone actuating firmware",
    //         "created_at": "2019-08-25T14:53:55Z",
    //         "updated_at": "2019-11-09T19:56:09Z",
    //         "card_set_id": "38ed183e-8077-4f3d-b9f3-9acbd30b89bf"
    //       },
    //       {
    //         "id": "e4b72606-7111-450c-8fde-b33e8106b988",
    //         "term": "benzalkonium chloride, pramoxine hydrochloride",
    //         "definition": "Horizontal value-added contingency",
    //         "created_at": "2019-04-12T21:27:17Z",
    //         "updated_at": "2019-04-04T10:27:49Z",
    //         "card_set_id": "38ed183e-8077-4f3d-b9f3-9acbd30b89bf"
    //       },
    //       {
    //         "id": "14031d87-e5ac-4ff5-89eb-6d9c1ebf9f21",
    //         "term": "Amitriptyline Hydrochloride",
    //         "definition": "Networked global extranet",
    //         "created_at": "2019-06-28T11:04:11Z",
    //         "updated_at": "2019-09-16T00:36:40Z",
    //         "card_set_id": "38ed183e-8077-4f3d-b9f3-9acbd30b89bf"
    //       },
    //       {
    //         "id": "59ddfc4f-7400-43da-935c-c2ebb413de20",
    //         "term": "Miconazole Nitrate",
    //         "definition": "De-engineered motivating throughput",
    //         "created_at": "2019-07-01T07:50:09Z",
    //         "updated_at": "2019-04-02T08:18:14Z",
    //         "card_set_id": "38ed183e-8077-4f3d-b9f3-9acbd30b89bf"
    //       },
    //       {
    //         "id": "b8554ae4-635a-48bd-beda-076edcef4392",
    //         "term": "Pravastatin Sodium",
    //         "definition": "Enterprise-wide real-time moratorium",
    //         "created_at": "2019-06-20T23:29:58Z",
    //         "updated_at": "2019-12-20T00:41:18Z",
    //         "card_set_id": "38ed183e-8077-4f3d-b9f3-9acbd30b89bf"
    //       },
    //       {
    //         "id": "eab65aad-5fcb-49e9-8080-3a0377359014",
    //         "term": "COCCUS CACTI",
    //         "definition": "Visionary actuating capability",
    //         "created_at": "2019-04-11T03:46:29Z",
    //         "updated_at": "2019-02-06T01:47:41Z",
    //         "card_set_id": "38ed183e-8077-4f3d-b9f3-9acbd30b89bf"
    //       },
    //       {
    //         "id": "6c10edad-9b10-486a-aae3-b52897ab6d8f",
    //         "term": "Alcohol",
    //         "definition": "Grass-roots 5th generation hardware",
    //         "created_at": "2019-12-15T13:44:58Z",
    //         "updated_at": "2019-07-18T18:23:33Z",
    //         "card_set_id": "38ed183e-8077-4f3d-b9f3-9acbd30b89bf"
    //       },
    //       {
    //         "id": "3467a5f9-7a50-40b6-9fad-ca475d88d362",
    //         "term": "Nitroglycerin",
    //         "definition": "Virtual needs-based product",
    //         "created_at": "2019-12-18T21:46:44Z",
    //         "updated_at": "2019-04-10T14:27:59Z",
    //         "card_set_id": "38ed183e-8077-4f3d-b9f3-9acbd30b89bf"
    //       },
    //       {
    //         "id": "a760c081-a6c5-4678-8aa5-51a47200d3c0",
    //         "term": "BENAZEPRIL HYDROCHLORIDE",
    //         "definition": "Function-based transitional product",
    //         "created_at": "2019-03-24T14:20:37Z",
    //         "updated_at": "2019-06-08T22:12:20Z",
    //         "card_set_id": "38ed183e-8077-4f3d-b9f3-9acbd30b89bf"
    //       },
    //       {
    //         "id": "212b5237-9398-4b21-976b-b3d4a7a6af95",
    //         "term": "DONEPEZIL HYDROCHLORIDE",
    //         "definition": "Phased background algorithm",
    //         "created_at": "2019-10-28T18:24:30Z",
    //         "updated_at": "2019-11-05T16:26:28Z",
    //         "card_set_id": "38ed183e-8077-4f3d-b9f3-9acbd30b89bf"
    //       },
    //       {
    //         "id": "bafc31c1-8306-4eed-84d7-fa0bcda4da56",
    //         "term": "Methenamine, Sodium Phosphate Monobasic, Phenyl Salicylate, Methylene Blue, Hyoscyamine Sulfate",
    //         "definition": "Self-enabling clear-thinking groupware",
    //         "created_at": "2019-05-10T04:18:27Z",
    //         "updated_at": "2019-04-19T22:31:57Z",
    //         "card_set_id": "38ed183e-8077-4f3d-b9f3-9acbd30b89bf"
    //       },
    //       {
    //         "id": "efa11969-5cd8-4c19-89e5-c5b10a21d5d9",
    //         "term": "lamivudine",
    //         "definition": "Intuitive needs-based customer loyalty",
    //         "created_at": "2019-08-13T15:01:25Z",
    //         "updated_at": "2019-10-11T23:12:15Z",
    //         "card_set_id": "38ed183e-8077-4f3d-b9f3-9acbd30b89bf"
    //       },
    //       {
    //         "id": "ec89e47d-d81c-4806-adc0-a4b6482a27fe",
    //         "term": "lamivudine and zidovudine",
    //         "definition": "Enterprise-wide encompassing frame",
    //         "created_at": "2019-12-23T08:50:50Z",
    //         "updated_at": "2019-12-02T13:45:37Z",
    //         "card_set_id": "38ed183e-8077-4f3d-b9f3-9acbd30b89bf"
    //       },
    //       {
    //         "id": "2d58db97-8f5a-4ab4-a8c8-89bd45bfa87a",
    //         "term": "Acetaminophen",
    //         "definition": "Programmable maximized parallelism",
    //         "created_at": "2019-02-04T05:44:03Z",
    //         "updated_at": "2019-02-02T06:44:01Z",
    //         "card_set_id": "f29c39ad-b70b-4381-b2e2-f81e6581b9aa"
    //       },
    //       {
    //         "id": "cb93d74c-1fb9-4fa6-8a55-54fd33526d98",
    //         "term": "Minoxidil",
    //         "definition": "Triple-buffered zero defect concept",
    //         "created_at": "2019-07-02T08:58:19Z",
    //         "updated_at": "2019-07-02T14:47:39Z",
    //         "card_set_id": "f29c39ad-b70b-4381-b2e2-f81e6581b9aa"
    //       },
    //       {
    //         "id": "e985646e-2632-42ce-b1c0-d09a7539f19e",
    //         "term": "OCTINOXATE, OCTISALATE, AVOBENZONE, OCTOCRYLENE",
    //         "definition": "Phased zero administration focus group",
    //         "created_at": "2019-12-23T09:13:15Z",
    //         "updated_at": "2019-07-20T10:54:39Z",
    //         "card_set_id": "f29c39ad-b70b-4381-b2e2-f81e6581b9aa"
    //       },
    //       {
    //         "id": "fc03be2a-c3a2-4bac-a34c-77ba0c47020a",
    //         "term": "Aconitum napellus, Bromium, Coccus cacti, Corallium rubrum, Cuprum metallicum, Drosera, Hepar sulphuris calcareum, Iodium, Mephitis mephitica and Spongia tosta",
    //         "definition": "Diverse leading edge capacity",
    //         "created_at": "2019-09-22T08:11:20Z",
    //         "updated_at": "2019-06-02T12:28:01Z",
    //         "card_set_id": "f29c39ad-b70b-4381-b2e2-f81e6581b9aa"
    //       },
    //       {
    //         "id": "0fc6608b-bfab-4863-865f-b22d70d10276",
    //         "term": "Nifedipine",
    //         "definition": "Operative needs-based array",
    //         "created_at": "2019-08-22T06:08:19Z",
    //         "updated_at": "2019-01-25T13:30:08Z",
    //         "card_set_id": "f29c39ad-b70b-4381-b2e2-f81e6581b9aa"
    //       },
    //       {
    //         "id": "6eeef6d8-e615-4ad7-ad94-651714ce363a",
    //         "term": "nicotine polacrilex",
    //         "definition": "Object-based multi-state strategy",
    //         "created_at": "2019-04-08T10:46:56Z",
    //         "updated_at": "2019-07-20T17:48:33Z",
    //         "card_set_id": "f29c39ad-b70b-4381-b2e2-f81e6581b9aa"
    //       },
    //       {
    //         "id": "18807835-f3d0-46e1-adb4-1763475a92ba",
    //         "term": "phytonadione",
    //         "definition": "Automated hybrid middleware",
    //         "created_at": "2019-08-18T12:01:39Z",
    //         "updated_at": "2019-06-18T20:35:45Z",
    //         "card_set_id": "f29c39ad-b70b-4381-b2e2-f81e6581b9aa"
    //       },
    //       {
    //         "id": "fefa17b7-0b7d-4aa1-9e23-bbf053f916d7",
    //         "term": "pravastatin sodium",
    //         "definition": "Sharable intangible open system",
    //         "created_at": "2019-08-10T00:51:01Z",
    //         "updated_at": "2019-07-16T15:48:52Z",
    //         "card_set_id": "f29c39ad-b70b-4381-b2e2-f81e6581b9aa"
    //       },
    //       {
    //         "id": "c0221540-62cb-4c7d-919c-13757a7cfe4f",
    //         "term": "zolpidem tartrate",
    //         "definition": "User-friendly incremental service-desk",
    //         "created_at": "2019-04-05T22:45:40Z",
    //         "updated_at": "2019-11-25T10:43:29Z",
    //         "card_set_id": "f29c39ad-b70b-4381-b2e2-f81e6581b9aa"
    //       },
    //       {
    //         "id": "357a855b-be33-404a-95e0-d581c1190c17",
    //         "term": "citalopram hydrobromide",
    //         "definition": "Synergized explicit success",
    //         "created_at": "2019-12-17T00:53:16Z",
    //         "updated_at": "2019-02-11T01:50:35Z",
    //         "card_set_id": "f29c39ad-b70b-4381-b2e2-f81e6581b9aa"
    //       },
    //       {
    //         "id": "65af5dd0-a670-41f9-9543-4e041a9a5a87",
    //         "term": "Medroxyprogesterone Acetate",
    //         "definition": "Right-sized full-range artificial intelligence",
    //         "created_at": "2019-11-16T01:55:01Z",
    //         "updated_at": "2019-07-26T22:06:11Z",
    //         "card_set_id": "f29c39ad-b70b-4381-b2e2-f81e6581b9aa"
    //       },
    //       {
    //         "id": "e983632c-5d76-4f8f-aa6a-51ab6b3c5252",
    //         "term": "ALCOHOL",
    //         "definition": "Horizontal regional middleware",
    //         "created_at": "2019-02-17T22:08:24Z",
    //         "updated_at": "2020-01-03T19:00:28Z",
    //         "card_set_id": "f29c39ad-b70b-4381-b2e2-f81e6581b9aa"
    //       },
    //       {
    //         "id": "6a55cda8-f822-4af4-bc7f-9959c2511cf9",
    //         "term": "Iohexol",
    //         "definition": "De-engineered national utilisation",
    //         "created_at": "2019-06-03T18:04:42Z",
    //         "updated_at": "2019-05-23T01:25:30Z",
    //         "card_set_id": "f29c39ad-b70b-4381-b2e2-f81e6581b9aa"
    //       },
    //       {
    //         "id": "46275cd4-c7aa-410a-9743-5586b4fb965f",
    //         "term": "ANTIMONY POTASSIUM TARTRATE - PROTORTONIA CACTI - DROSERA ROTUNDIFOLIA - ECHINACEA, UNSPECIFIED - CALCIUM SULFIDE - HUMAN SPUTUM, BORDETELLA PERTUSSIS INFECTED - SPONGIA OFFICINALIS SKELETON, ROASTED -",
    //         "definition": "Inverse discrete leverage",
    //         "created_at": "2019-12-25T02:33:24Z",
    //         "updated_at": "2019-09-05T15:48:25Z",
    //         "card_set_id": "f29c39ad-b70b-4381-b2e2-f81e6581b9aa"
    //       },
    //       {
    //         "id": "9ea3430d-7188-4064-9956-b79cec68800b",
    //         "term": "Sodium Fluoride",
    //         "definition": "Organic uniform portal",
    //         "created_at": "2019-12-23T03:37:48Z",
    //         "updated_at": "2020-01-15T22:14:16Z",
    //         "card_set_id": "f29c39ad-b70b-4381-b2e2-f81e6581b9aa"
    //       },
    //       {
    //         "id": "5dadea08-8f03-463f-baa5-b26d263ea248",
    //         "term": "artemisia abrotanum flowering top, semecarpus anacardium juice, barium chloride dihydrate, oyster sh",
    //         "definition": "artemisia abrotanum flowering top, semecarpus anacardium juice, barium chloride dihydrate, oyster sh",
    //         "created_at": "2019-03-16T04:00:44Z",
    //         "updated_at": "2019-02-27T06:19:28Z",
    //         "card_set_id": "a2d97dbc-6cd5-4287-a22b-d6e47b57fee6"
    //       },
    //       {
    //         "id": "d0c27af4-0b66-4ce8-8f43-2ee3331385ff",
    //         "term": "Aspirin",
    //         "definition": "De-engineered homogeneous interface",
    //         "created_at": "2019-06-17T05:46:42Z",
    //         "updated_at": "2019-02-03T18:46:09Z",
    //         "card_set_id": "a2d97dbc-6cd5-4287-a22b-d6e47b57fee6"
    //       },
    //       {
    //         "id": "840b60a3-3563-48ad-92e7-4622f54abb3d",
    //         "term": "Morphine Sulfate",
    //         "definition": "Exclusive client-server access",
    //         "created_at": "2019-12-23T21:00:13Z",
    //         "updated_at": "2019-07-29T14:48:47Z",
    //         "card_set_id": "a2d97dbc-6cd5-4287-a22b-d6e47b57fee6"
    //       },
    //       {
    //         "id": "79cb3da8-5aa1-436d-bf19-cfe1d66e4442",
    //         "term": "Amoxicillin and Clavulanate Potassium",
    //         "definition": "Digitized asynchronous collaboration",
    //         "created_at": "2019-04-10T18:49:11Z",
    //         "updated_at": "2019-12-08T21:47:09Z",
    //         "card_set_id": "a2d97dbc-6cd5-4287-a22b-d6e47b57fee6"
    //       },
    //       {
    //         "id": "fae239e3-9c64-4d04-8cdb-5bdab7a837ce",
    //         "term": "Magnesium Sulfate",
    //         "definition": "Future-proofed holistic portal",
    //         "created_at": "2019-03-11T10:28:19Z",
    //         "updated_at": "2019-10-05T13:50:15Z",
    //         "card_set_id": "a2d97dbc-6cd5-4287-a22b-d6e47b57fee6"
    //       },
    //       {
    //         "id": "13c0db1c-9678-479f-a4c2-9941f1ddcb66",
    //         "term": "Mango",
    //         "definition": "Triple-buffered directional algorithm",
    //         "created_at": "2019-11-02T09:32:23Z",
    //         "updated_at": "2019-12-21T04:59:46Z",
    //         "card_set_id": "a2d97dbc-6cd5-4287-a22b-d6e47b57fee6"
    //       },
    //       {
    //         "id": "8db77abb-ad80-4d46-8b41-8f13dc445b28",
    //         "term": "Aluminum Chlorohydrate",
    //         "definition": "Team-oriented tertiary flexibility",
    //         "created_at": "2019-06-29T06:46:41Z",
    //         "updated_at": "2019-03-25T07:06:32Z",
    //         "card_set_id": "a2d97dbc-6cd5-4287-a22b-d6e47b57fee6"
    //       },
    //       {
    //         "id": "b9c9a72c-823f-464e-8d98-b2c4f882e10e",
    //         "term": "Aluminum Chlorohydrate",
    //         "definition": "Streamlined real-time adapter",
    //         "created_at": "2019-04-01T08:12:08Z",
    //         "updated_at": "2019-12-07T09:50:50Z",
    //         "card_set_id": "a2d97dbc-6cd5-4287-a22b-d6e47b57fee6"
    //       },
    //       {
    //         "id": "cc834631-8cad-4f15-975c-10908bf7d75b",
    //         "term": "Letrozole",
    //         "definition": "Reverse-engineered holistic orchestration",
    //         "created_at": "2019-04-11T17:25:31Z",
    //         "updated_at": "2019-02-20T22:45:30Z",
    //         "card_set_id": "a2d97dbc-6cd5-4287-a22b-d6e47b57fee6"
    //       },
    //       {
    //         "id": "8e23e2fe-19b7-447b-98f7-f2537b0e68a9",
    //         "term": "ARIPIPRAZOLE",
    //         "definition": "Future-proofed 24/7 extranet",
    //         "created_at": "2019-04-11T02:23:02Z",
    //         "updated_at": "2019-01-21T12:44:59Z",
    //         "card_set_id": "a2d97dbc-6cd5-4287-a22b-d6e47b57fee6"
    //       },
    //       {
    //         "id": "3e2593e1-9875-4fae-a0d2-7253cee0c8a8",
    //         "term": "nitric acid, sulfuric acid, gratiola officinalis, goldenseal, lachesis muta venom, lytta vesicatoria, bellis perennis, and glechoma hederacea",
    //         "definition": "Digitized motivating initiative",
    //         "created_at": "2019-09-17T10:10:33Z",
    //         "updated_at": "2019-02-04T17:49:17Z",
    //         "card_set_id": "a2d97dbc-6cd5-4287-a22b-d6e47b57fee6"
    //       },
    //       {
    //         "id": "c5827857-3821-47db-b6fa-8748ce5f887b",
    //         "term": "Clematis Erecta, Conium Maculatum, Lycopodium Clavatum, Mercurius Corosivus, Pulsatilla, Sabal Serrulata, Selenium Metallicum",
    //         "definition": "Face to face object-oriented challenge",
    //         "created_at": "2019-07-25T11:42:45Z",
    //         "updated_at": "2019-09-08T04:03:25Z",
    //         "card_set_id": "a2d97dbc-6cd5-4287-a22b-d6e47b57fee6"
    //       },
    //       {
    //         "id": "ba484a3b-1f60-407d-ad1b-a78bcaaccbe6",
    //         "term": "Triclosan",
    //         "definition": "Multi-layered optimizing installation",
    //         "created_at": "2019-02-03T08:41:13Z",
    //         "updated_at": "2019-08-09T15:00:29Z",
    //         "card_set_id": "a2d97dbc-6cd5-4287-a22b-d6e47b57fee6"
    //       },
    //       {
    //         "id": "e89129e3-b8fe-4f20-b177-5041302ad642",
    //         "term": "Cherry Bing",
    //         "definition": "Reverse-engineered hybrid capacity",
    //         "created_at": "2019-04-18T06:21:33Z",
    //         "updated_at": "2019-12-27T18:13:36Z",
    //         "card_set_id": "a2d97dbc-6cd5-4287-a22b-d6e47b57fee6"
    //       },
    //       {
    //         "id": "cd43599b-e9b6-4723-881c-a3ce4da707cd",
    //         "term": "Voriconazole",
    //         "definition": "Pre-emptive demand-driven model",
    //         "created_at": "2020-01-16T17:13:45Z",
    //         "updated_at": "2019-03-19T16:25:08Z",
    //         "card_set_id": "a2d97dbc-6cd5-4287-a22b-d6e47b57fee6"
    //       },
    //       {
    //         "id": "27c06a27-4519-4104-b470-a860b5fe0561",
    //         "term": "CLOTRIMAZOLE",
    //         "definition": "Re-contextualized systematic utilisation",
    //         "created_at": "2019-08-05T17:38:16Z",
    //         "updated_at": "2019-04-23T03:20:55Z",
    //         "card_set_id": "2d2bd71d-6778-4586-ac2c-7e32f37fa6d5"
    //       },
    //       {
    //         "id": "6a5c5d9f-7e34-44c5-8958-2421007ca4d0",
    //         "term": "AVOBENZONE, OCTISALATE, HOMOSALATE, OCTOCRYLENE",
    //         "definition": "Visionary full-range matrices",
    //         "created_at": "2019-02-06T02:35:36Z",
    //         "updated_at": "2019-05-19T00:59:09Z",
    //         "card_set_id": "2d2bd71d-6778-4586-ac2c-7e32f37fa6d5"
    //       },
    //       {
    //         "id": "0fe043a9-8bda-4c89-88b3-9af08cd493be",
    //         "term": "Haloperidol",
    //         "definition": "Robust multi-state conglomeration",
    //         "created_at": "2019-03-06T10:27:20Z",
    //         "updated_at": "2019-01-21T03:29:35Z",
    //         "card_set_id": "2d2bd71d-6778-4586-ac2c-7e32f37fa6d5"
    //       },
    //       {
    //         "id": "3bbf563a-dcce-472f-8d25-fb99a4142255",
    //         "term": "Minocycline Hydrochloride",
    //         "definition": "Optional zero administration utilisation",
    //         "created_at": "2019-03-08T13:59:29Z",
    //         "updated_at": "2019-11-19T10:35:41Z",
    //         "card_set_id": "2d2bd71d-6778-4586-ac2c-7e32f37fa6d5"
    //       },
    //       {
    //         "id": "dd2a4cea-6983-4535-8d1d-f03f373f91c5",
    //         "term": "white petrolatum mineral oil",
    //         "definition": "Total non-volatile intranet",
    //         "created_at": "2019-05-03T05:10:34Z",
    //         "updated_at": "2019-07-18T20:53:16Z",
    //         "card_set_id": "2d2bd71d-6778-4586-ac2c-7e32f37fa6d5"
    //       },
    //       {
    //         "id": "36d7f758-0750-4e63-9f5b-b97fdb35d5d6",
    //         "term": "LEVOFLOXACIN",
    //         "definition": "Reactive foreground toolset",
    //         "created_at": "2019-10-26T22:14:47Z",
    //         "updated_at": "2019-03-28T17:20:46Z",
    //         "card_set_id": "2d2bd71d-6778-4586-ac2c-7e32f37fa6d5"
    //       },
    //       {
    //         "id": "a401728b-7217-450a-bf58-c2a1e9a31aac",
    //         "term": "Goose Feathers",
    //         "definition": "De-engineered mobile ability",
    //         "created_at": "2019-10-05T18:42:56Z",
    //         "updated_at": "2019-02-19T23:40:56Z",
    //         "card_set_id": "2d2bd71d-6778-4586-ac2c-7e32f37fa6d5"
    //       },
    //       {
    //         "id": "4ec118dd-095e-46d1-afe2-3c4845f3b2cd",
    //         "term": "ONDANSETRON",
    //         "definition": "Right-sized motivating project",
    //         "created_at": "2019-09-03T05:29:39Z",
    //         "updated_at": "2019-10-22T21:30:39Z",
    //         "card_set_id": "2d2bd71d-6778-4586-ac2c-7e32f37fa6d5"
    //       },
    //       {
    //         "id": "97af5406-a916-4e6d-a1f0-e1912d46a79c",
    //         "term": "Hydrogen Peroxide",
    //         "definition": "Virtual executive Graphical User Interface",
    //         "created_at": "2019-08-28T19:45:30Z",
    //         "updated_at": "2019-02-25T07:19:01Z",
    //         "card_set_id": "2d2bd71d-6778-4586-ac2c-7e32f37fa6d5"
    //       },
    //       {
    //         "id": "33e0d326-2500-4ac2-bfaa-bdda0ea37739",
    //         "term": "OXYGEN",
    //         "definition": "Down-sized executive circuit",
    //         "created_at": "2019-04-07T16:17:21Z",
    //         "updated_at": "2019-03-31T09:38:15Z",
    //         "card_set_id": "2d2bd71d-6778-4586-ac2c-7e32f37fa6d5"
    //       },
    //       {
    //         "id": "d2d5340b-6c5d-4068-b92f-651d7e414b42",
    //         "term": "Avena Sativa Flowering Top, Arabica Coffee Bean, Lavandula Angustifolia Flowering Top, Passiflora Incarnata Flowering Top, Piper Methysticum Root, and Valerian",
    //         "definition": "Focused bottom-line instruction set",
    //         "created_at": "2019-07-25T10:37:33Z",
    //         "updated_at": "2019-04-30T03:48:47Z",
    //         "card_set_id": "2d2bd71d-6778-4586-ac2c-7e32f37fa6d5"
    //       },
    //       {
    //         "id": "77b0287e-f42a-40a0-9eea-6837bd8fe43c",
    //         "term": "Lopinavir and Ritonavir",
    //         "definition": "Assimilated well-modulated concept",
    //         "created_at": "2019-09-20T21:54:56Z",
    //         "updated_at": "2019-07-23T02:25:36Z",
    //         "card_set_id": "2d2bd71d-6778-4586-ac2c-7e32f37fa6d5"
    //       },
    //       {
    //         "id": "18777d5f-dd1a-4c66-893f-f7e273f5b516",
    //         "term": "ALCOHOL",
    //         "definition": "Advanced static utilisation",
    //         "created_at": "2019-10-05T11:53:50Z",
    //         "updated_at": "2020-01-15T07:19:41Z",
    //         "card_set_id": "2d2bd71d-6778-4586-ac2c-7e32f37fa6d5"
    //       },
    //       {
    //         "id": "ebb714e7-7f00-492e-88fa-cb151b740d48",
    //         "term": "OCTINOXATE, TITANIUM DIOXIDE, and ZINC OXIDE",
    //         "definition": "Realigned foreground data-warehouse",
    //         "created_at": "2019-07-16T20:34:30Z",
    //         "updated_at": "2019-12-16T03:18:02Z",
    //         "card_set_id": "2d2bd71d-6778-4586-ac2c-7e32f37fa6d5"
    //       },
    //       {
    //         "id": "98203b8c-d3e6-40e5-a0d1-5bcbb567a0ea",
    //         "term": "etanercept",
    //         "definition": "Future-proofed empowering functionalities",
    //         "created_at": "2019-07-15T20:28:14Z",
    //         "updated_at": "2019-04-30T00:09:47Z",
    //         "card_set_id": "2d2bd71d-6778-4586-ac2c-7e32f37fa6d5"
    //       },
    //       {
    //         "id": "c4d61de9-7b94-43d1-8474-dcbfd591c3f0",
    //         "term": "Cetirizine HCl, Pseudoephedrine HCl",
    //         "definition": "Customer-focused impactful complexity",
    //         "created_at": "2019-10-15T20:51:43Z",
    //         "updated_at": "2019-05-06T12:01:15Z",
    //         "card_set_id": "0e77d311-282c-4328-b5f4-4fb9be286cc1"
    //       },
    //       {
    //         "id": "76dd7579-13b8-45d0-8286-21218eafcda0",
    //         "term": "Octinoxate and Titanium dioxide",
    //         "definition": "Synergistic hybrid model",
    //         "created_at": "2019-09-22T09:02:17Z",
    //         "updated_at": "2019-10-07T22:50:29Z",
    //         "card_set_id": "0e77d311-282c-4328-b5f4-4fb9be286cc1"
    //       },
    //       {
    //         "id": "8de430ad-274b-4bda-b5e3-7659208bb988",
    //         "term": "White Petroleum",
    //         "definition": "Open-architected analyzing architecture",
    //         "created_at": "2019-05-18T01:56:12Z",
    //         "updated_at": "2019-07-11T15:12:31Z",
    //         "card_set_id": "0e77d311-282c-4328-b5f4-4fb9be286cc1"
    //       },
    //       {
    //         "id": "5f6bb8a6-c164-4748-9027-1cd0926ebd45",
    //         "term": "Clonidine Hydrochloride",
    //         "definition": "Universal 3rd generation challenge",
    //         "created_at": "2019-09-21T21:43:24Z",
    //         "updated_at": "2019-06-23T00:25:48Z",
    //         "card_set_id": "0e77d311-282c-4328-b5f4-4fb9be286cc1"
    //       },
    //       {
    //         "id": "20102aac-d9d4-4473-bb2f-2798571e64e8",
    //         "term": "ascorbic acid, cholecalciferol, .alpha.-tocopherol acetate, dl-, pyridoxine hydrochloride, folic aci",
    //         "definition": "ascorbic acid, cholecalciferol, .alpha.-tocopherol acetate, dl-, pyridoxine hydrochloride, folic aci",
    //         "created_at": "2020-01-14T19:48:43Z",
    //         "updated_at": "2019-09-06T08:16:00Z",
    //         "card_set_id": "0e77d311-282c-4328-b5f4-4fb9be286cc1"
    //       },
    //       {
    //         "id": "9146c6f0-83ed-4d94-9648-320bf5bed637",
    //         "term": "dexmedetomidine hydrochloride",
    //         "definition": "Re-contextualized human-resource pricing structure",
    //         "created_at": "2019-06-17T12:02:28Z",
    //         "updated_at": "2020-01-03T15:59:32Z",
    //         "card_set_id": "0e77d311-282c-4328-b5f4-4fb9be286cc1"
    //       },
    //       {
    //         "id": "1763f7e0-8e02-47b7-ac64-8cc66e533cf7",
    //         "term": "Aluminum hydroxide, Magnesium hydroxide, Simethicone",
    //         "definition": "Devolved stable projection",
    //         "created_at": "2019-05-17T08:23:29Z",
    //         "updated_at": "2019-08-20T20:13:54Z",
    //         "card_set_id": "0e77d311-282c-4328-b5f4-4fb9be286cc1"
    //       },
    //       {
    //         "id": "03b37688-269e-450e-a535-c6d89c37dfcd",
    //         "term": "zolpidem tartrate",
    //         "definition": "Triple-buffered 24 hour migration",
    //         "created_at": "2019-12-26T19:36:07Z",
    //         "updated_at": "2019-07-26T07:45:33Z",
    //         "card_set_id": "0e77d311-282c-4328-b5f4-4fb9be286cc1"
    //       },
    //       {
    //         "id": "bdd6445c-7bc1-476b-9bcf-0a68899f2dd0",
    //         "term": "Camphor, Menthol, Methyl Salicylate",
    //         "definition": "Adaptive reciprocal synergy",
    //         "created_at": "2019-07-31T19:04:55Z",
    //         "updated_at": "2019-07-02T16:55:45Z",
    //         "card_set_id": "0e77d311-282c-4328-b5f4-4fb9be286cc1"
    //       },
    //       {
    //         "id": "7e114b5f-7eb5-466a-8c8a-79d38c3820b4",
    //         "term": "Hyoscyamine Sulfate",
    //         "definition": "Re-contextualized analyzing function",
    //         "created_at": "2019-08-21T20:39:23Z",
    //         "updated_at": "2020-01-06T14:16:23Z",
    //         "card_set_id": "0e77d311-282c-4328-b5f4-4fb9be286cc1"
    //       },
    //       {
    //         "id": "2aaf21a7-b206-4216-a189-833ce32ecec7",
    //         "term": "Triamcinolone Acetonide",
    //         "definition": "Function-based demand-driven hierarchy",
    //         "created_at": "2019-02-10T10:37:12Z",
    //         "updated_at": "2019-01-22T14:38:30Z",
    //         "card_set_id": "0e77d311-282c-4328-b5f4-4fb9be286cc1"
    //       },
    //       {
    //         "id": "bf7d2927-e51e-4e96-9628-08348361903a",
    //         "term": "doxazosin mesylate",
    //         "definition": "Programmable context-sensitive customer loyalty",
    //         "created_at": "2020-01-06T11:00:12Z",
    //         "updated_at": "2019-06-07T06:33:04Z",
    //         "card_set_id": "0e77d311-282c-4328-b5f4-4fb9be286cc1"
    //       },
    //       {
    //         "id": "6a80e496-fb5c-49fe-b0c3-24779625cfd0",
    //         "term": "OCTINOXATE and TITANIUM DIOXIDE",
    //         "definition": "Mandatory logistical frame",
    //         "created_at": "2019-07-23T16:40:45Z",
    //         "updated_at": "2019-02-07T00:09:04Z",
    //         "card_set_id": "0e77d311-282c-4328-b5f4-4fb9be286cc1"
    //       },
    //       {
    //         "id": "4adbf9c9-94a3-47a8-b9df-f892b6ceca88",
    //         "term": "benztropine mesylate",
    //         "definition": "Organic value-added implementation",
    //         "created_at": "2019-04-26T02:27:55Z",
    //         "updated_at": "2019-11-10T12:56:57Z",
    //         "card_set_id": "0e77d311-282c-4328-b5f4-4fb9be286cc1"
    //       },
    //       {
    //         "id": "9a2cc23e-8aaa-4962-b0ae-ea9c68dcc9c9",
    //         "term": "tiagabine hydrochloride",
    //         "definition": "Ergonomic foreground extranet",
    //         "created_at": "2019-01-22T07:41:02Z",
    //         "updated_at": "2019-09-09T18:37:38Z",
    //         "card_set_id": "0e77d311-282c-4328-b5f4-4fb9be286cc1"
    //       },
    //       {
    //         "id": "9ee7c50a-7eea-4066-8968-a5c32fbbbb6b",
    //         "term": "Privet Ligustrum vulgare",
    //         "definition": "Synchronised static encoding",
    //         "created_at": "2019-09-06T01:29:21Z",
    //         "updated_at": "2019-02-28T08:44:29Z",
    //         "card_set_id": "5778597d-1e8c-4dbc-83e3-e02d46270fcb"
    //       },
    //       {
    //         "id": "78019c2e-c48c-40a6-a89b-a40e355d8dc6",
    //         "term": "Titanium Dioxide and Zinc Oxide",
    //         "definition": "Extended heuristic capability",
    //         "created_at": "2019-06-17T01:53:26Z",
    //         "updated_at": "2019-11-04T10:51:59Z",
    //         "card_set_id": "5778597d-1e8c-4dbc-83e3-e02d46270fcb"
    //       },
    //       {
    //         "id": "61aacca7-e996-4a82-b2b3-908155f3f1b5",
    //         "term": "Green Pepper",
    //         "definition": "Down-sized intermediate artificial intelligence",
    //         "created_at": "2019-06-17T14:32:02Z",
    //         "updated_at": "2019-02-20T11:46:38Z",
    //         "card_set_id": "5778597d-1e8c-4dbc-83e3-e02d46270fcb"
    //       },
    //       {
    //         "id": "2c79835b-a6fc-42ce-987e-864eb91cd6ef",
    //         "term": "Ofloxacin",
    //         "definition": "Inverse 6th generation attitude",
    //         "created_at": "2019-05-09T15:23:43Z",
    //         "updated_at": "2019-04-28T04:23:49Z",
    //         "card_set_id": "5778597d-1e8c-4dbc-83e3-e02d46270fcb"
    //       },
    //       {
    //         "id": "9b9fcaad-288e-401f-ae34-0cabc4b1ba68",
    //         "term": "Naproxen sodium",
    //         "definition": "Customer-focused solution-oriented database",
    //         "created_at": "2019-05-31T08:05:23Z",
    //         "updated_at": "2019-11-08T07:28:17Z",
    //         "card_set_id": "5778597d-1e8c-4dbc-83e3-e02d46270fcb"
    //       },
    //       {
    //         "id": "edc145a5-3c96-487b-bbef-9fa368f04ed1",
    //         "term": "glycerol phenylbutyrate",
    //         "definition": "Enhanced 6th generation pricing structure",
    //         "created_at": "2019-10-21T03:17:10Z",
    //         "updated_at": "2019-07-17T03:46:34Z",
    //         "card_set_id": "5778597d-1e8c-4dbc-83e3-e02d46270fcb"
    //       },
    //       {
    //         "id": "fdc8eef1-afe9-40b3-9b5f-dec551228038",
    //         "term": "Buspirone Hydrochloride",
    //         "definition": "Organized actuating framework",
    //         "created_at": "2019-08-07T20:15:17Z",
    //         "updated_at": "2019-11-05T04:31:37Z",
    //         "card_set_id": "5778597d-1e8c-4dbc-83e3-e02d46270fcb"
    //       },
    //       {
    //         "id": "dc3a22e1-3f2a-48d4-a8c3-c95ccc5fe28e",
    //         "term": "NITROUS OXIDE",
    //         "definition": "Multi-channelled multimedia software",
    //         "created_at": "2019-07-25T14:44:38Z",
    //         "updated_at": "2019-11-24T20:01:47Z",
    //         "card_set_id": "5778597d-1e8c-4dbc-83e3-e02d46270fcb"
    //       },
    //       {
    //         "id": "4b9c8d63-d204-4466-a849-e75864564630",
    //         "term": "HYDROCORTISONE",
    //         "definition": "Integrated tertiary hierarchy",
    //         "created_at": "2019-05-08T08:25:13Z",
    //         "updated_at": "2019-05-21T13:39:10Z",
    //         "card_set_id": "5778597d-1e8c-4dbc-83e3-e02d46270fcb"
    //       },
    //       {
    //         "id": "574ec803-f3a2-4cf9-a4ad-67e4d523faba",
    //         "term": "amlodipine and benazepril hydrochloride",
    //         "definition": "Networked systematic internet solution",
    //         "created_at": "2019-04-03T19:48:07Z",
    //         "updated_at": "2019-07-12T20:09:19Z",
    //         "card_set_id": "5778597d-1e8c-4dbc-83e3-e02d46270fcb"
    //       },
    //       {
    //         "id": "674a6ac2-2fc4-4c50-8cae-47a1a8cad429",
    //         "term": "Acetaminophen, Aspirin, Caffeine",
    //         "definition": "Implemented homogeneous moderator",
    //         "created_at": "2019-07-31T09:47:15Z",
    //         "updated_at": "2019-09-06T19:27:58Z",
    //         "card_set_id": "5778597d-1e8c-4dbc-83e3-e02d46270fcb"
    //       },
    //       {
    //         "id": "9ce808fa-f9b2-466f-a9a1-6e5df33ef4cf",
    //         "term": "OCTINOXATE, OCTISALATE, AVOBENZONE, OCTOCRYLENE",
    //         "definition": "Versatile holistic workforce",
    //         "created_at": "2019-11-03T18:32:03Z",
    //         "updated_at": "2019-12-31T19:56:54Z",
    //         "card_set_id": "5778597d-1e8c-4dbc-83e3-e02d46270fcb"
    //       },
    //       {
    //         "id": "85360f46-a993-496c-82ce-c861c55ed104",
    //         "term": "ARSENIC TRIOXIDE,RED CLOVER,PHYTOLACCA AMERICANA ROOT",
    //         "definition": "Cross-platform 4th generation array",
    //         "created_at": "2019-02-12T11:06:08Z",
    //         "updated_at": "2019-10-16T06:04:35Z",
    //         "card_set_id": "5778597d-1e8c-4dbc-83e3-e02d46270fcb"
    //       },
    //       {
    //         "id": "ad762005-1dc1-472a-8e75-3692400d1bb2",
    //         "term": "carvedilol",
    //         "definition": "Organic methodical system engine",
    //         "created_at": "2019-05-15T15:18:14Z",
    //         "updated_at": "2019-07-06T20:34:16Z",
    //         "card_set_id": "5778597d-1e8c-4dbc-83e3-e02d46270fcb"
    //       },
    //       {
    //         "id": "447d1945-8df6-4a91-9cb3-3737a54672a0",
    //         "term": "NICOTINE",
    //         "definition": "Realigned tangible software",
    //         "created_at": "2019-08-12T12:42:32Z",
    //         "updated_at": "2019-09-05T06:07:09Z",
    //         "card_set_id": "5778597d-1e8c-4dbc-83e3-e02d46270fcb"
    //       },
    //       {
    //         "id": "a0ac1ca6-3b1e-45ca-bbd6-0138545d348c",
    //         "term": "Treatment Set TS329240",
    //         "definition": "Down-sized next generation monitoring",
    //         "created_at": "2019-04-17T17:41:08Z",
    //         "updated_at": "2019-06-23T09:55:13Z",
    //         "card_set_id": "aab66833-9c34-4f51-9034-7e8568d79e62"
    //       },
    //       {
    //         "id": "dbf5c17b-4cf4-4b90-b060-5da2b1200cf4",
    //         "term": "Aluminum Zirconium Tetrachlorohydrex GLY",
    //         "definition": "Reduced non-volatile intranet",
    //         "created_at": "2019-04-26T10:24:55Z",
    //         "updated_at": "2019-03-10T08:43:00Z",
    //         "card_set_id": "aab66833-9c34-4f51-9034-7e8568d79e62"
    //       },
    //       {
    //         "id": "67e39914-4bf9-4333-9404-9d8a431c2f04",
    //         "term": "MIDAZOLAM HYDROCHLORIDE",
    //         "definition": "Business-focused multi-tasking groupware",
    //         "created_at": "2019-12-01T11:44:29Z",
    //         "updated_at": "2019-10-22T00:53:49Z",
    //         "card_set_id": "aab66833-9c34-4f51-9034-7e8568d79e62"
    //       },
    //       {
    //         "id": "cb870163-9cbf-49d3-be6b-e8f4040bd85e",
    //         "term": "Tramadol Hydrochloride",
    //         "definition": "Stand-alone cohesive customer loyalty",
    //         "created_at": "2019-02-16T19:14:57Z",
    //         "updated_at": "2019-05-09T04:18:06Z",
    //         "card_set_id": "aab66833-9c34-4f51-9034-7e8568d79e62"
    //       },
    //       {
    //         "id": "8b39a81e-2603-439d-b4a7-0dc9061ee995",
    //         "term": "DIMETHICONE",
    //         "definition": "Function-based contextually-based open system",
    //         "created_at": "2019-08-18T03:06:07Z",
    //         "updated_at": "2019-10-02T16:53:06Z",
    //         "card_set_id": "aab66833-9c34-4f51-9034-7e8568d79e62"
    //       },
    //       {
    //         "id": "357a96fe-c6bf-4d4c-8597-558fbb5fbbfd",
    //         "term": "Cephalexin",
    //         "definition": "Team-oriented logistical secured line",
    //         "created_at": "2019-12-09T02:34:54Z",
    //         "updated_at": "2020-01-13T17:13:49Z",
    //         "card_set_id": "aab66833-9c34-4f51-9034-7e8568d79e62"
    //       },
    //       {
    //         "id": "2c6bbef8-aad7-4754-b063-258770182150",
    //         "term": "Pork",
    //         "definition": "Seamless 24 hour extranet",
    //         "created_at": "2019-06-24T07:11:14Z",
    //         "updated_at": "2019-03-01T00:59:59Z",
    //         "card_set_id": "aab66833-9c34-4f51-9034-7e8568d79e62"
    //       },
    //       {
    //         "id": "493b2cab-890c-4d95-a348-c2a952080431",
    //         "term": "levothyroxine sodium tablets",
    //         "definition": "Automated composite hub",
    //         "created_at": "2019-08-16T10:53:02Z",
    //         "updated_at": "2019-08-02T22:52:26Z",
    //         "card_set_id": "aab66833-9c34-4f51-9034-7e8568d79e62"
    //       },
    //       {
    //         "id": "177398e0-e8db-4f16-a4f4-0af2057daf12",
    //         "term": "olmesartan medoxomil",
    //         "definition": "Function-based tertiary help-desk",
    //         "created_at": "2019-05-27T23:39:18Z",
    //         "updated_at": "2019-07-22T01:46:00Z",
    //         "card_set_id": "aab66833-9c34-4f51-9034-7e8568d79e62"
    //       },
    //       {
    //         "id": "3bb8d376-e2f5-4041-923e-89e78ea918d2",
    //         "term": "Arsenicum album, Belladonna, Echinacea, Eupatorium perfoliatum, Gelsemium sempervirens, Lycopodium clavatum, Phosphoricum acidum, Phosphorus, Pyrogenium, Rhus Toxicodendron,",
    //         "definition": "Synchronised bottom-line success",
    //         "created_at": "2020-01-08T12:15:36Z",
    //         "updated_at": "2019-05-16T11:15:44Z",
    //         "card_set_id": "aab66833-9c34-4f51-9034-7e8568d79e62"
    //       },
    //       {
    //         "id": "278e04d2-2d09-4c62-bd6a-7f23f55a2058",
    //         "term": "iron dextran",
    //         "definition": "Polarised tangible methodology",
    //         "created_at": "2019-02-20T07:02:46Z",
    //         "updated_at": "2019-07-28T01:03:20Z",
    //         "card_set_id": "aab66833-9c34-4f51-9034-7e8568d79e62"
    //       },
    //       {
    //         "id": "bc2455f7-d989-433f-9a5c-bf764635e0c8",
    //         "term": "OCTINOXATE and TITANIUM DIOXIDE",
    //         "definition": "Up-sized responsive local area network",
    //         "created_at": "2019-03-23T18:57:44Z",
    //         "updated_at": "2019-11-06T17:22:46Z",
    //         "card_set_id": "aab66833-9c34-4f51-9034-7e8568d79e62"
    //       },
    //       {
    //         "id": "521930f5-4052-4636-b815-1c4ff849acde",
    //         "term": "lomustine",
    //         "definition": "Focused responsive leverage",
    //         "created_at": "2019-10-11T19:58:37Z",
    //         "updated_at": "2019-05-01T15:40:09Z",
    //         "card_set_id": "aab66833-9c34-4f51-9034-7e8568d79e62"
    //       },
    //       {
    //         "id": "0b6f1e00-8617-48cf-99a8-4884b6075794",
    //         "term": "Amitriptyline Hydrochloride",
    //         "definition": "Advanced attitude-oriented hardware",
    //         "created_at": "2019-02-04T08:44:23Z",
    //         "updated_at": "2019-05-31T06:29:04Z",
    //         "card_set_id": "aab66833-9c34-4f51-9034-7e8568d79e62"
    //       },
    //       {
    //         "id": "6c8e3eb5-1e23-4f88-bea3-d87611100c3b",
    //         "term": "TITANIUM DIOXIDE",
    //         "definition": "Mandatory empowering array",
    //         "created_at": "2019-01-26T16:01:36Z",
    //         "updated_at": "2019-07-01T01:21:55Z",
    //         "card_set_id": "aab66833-9c34-4f51-9034-7e8568d79e62"
    //       },
    //       {
    //         "id": "4178d953-7656-4735-a17f-bfb9ed15cd7b",
    //         "term": "Levothyroxine Sodium",
    //         "definition": "Configurable background adapter",
    //         "created_at": "2019-11-11T17:33:01Z",
    //         "updated_at": "2019-01-26T12:10:34Z",
    //         "card_set_id": "4c9e36e9-0e1a-4cf9-8bbe-60746b0ff220"
    //       },
    //       {
    //         "id": "7e1dc248-1c4f-49aa-b966-7ed45af05d0d",
    //         "term": "Fluticasone Propionate",
    //         "definition": "Switchable empowering success",
    //         "created_at": "2019-12-10T02:12:20Z",
    //         "updated_at": "2019-09-28T16:20:28Z",
    //         "card_set_id": "4c9e36e9-0e1a-4cf9-8bbe-60746b0ff220"
    //       },
    //       {
    //         "id": "93265732-02c4-41fa-b2d8-29c89fac5557",
    //         "term": "micafungin sodium",
    //         "definition": "Distributed background middleware",
    //         "created_at": "2019-04-29T16:08:02Z",
    //         "updated_at": "2020-01-09T03:36:42Z",
    //         "card_set_id": "4c9e36e9-0e1a-4cf9-8bbe-60746b0ff220"
    //       },
    //       {
    //         "id": "8a19d6e2-f7b3-4b1b-9d7b-195586a9255a",
    //         "term": "Agaricus muscarius, Argentum nitricum, Calcarea carbonica, Carbo vegetabilis, Gelsemium sempervirens, Graphites, Mephitis mephitica, Natrum muriaticum, Onosmodium virginianum, Phosphorus, Physostigma venenosum, Pilocarpus",
    //         "definition": "Managed 24/7 database",
    //         "created_at": "2019-12-24T12:49:16Z",
    //         "updated_at": "2019-12-23T23:27:23Z",
    //         "card_set_id": "4c9e36e9-0e1a-4cf9-8bbe-60746b0ff220"
    //       },
    //       {
    //         "id": "fff6d556-9686-42b6-b047-be57648f3f10",
    //         "term": "Carbidopa and Levodopa",
    //         "definition": "Configurable secondary instruction set",
    //         "created_at": "2019-10-22T15:08:37Z",
    //         "updated_at": "2019-06-16T17:50:01Z",
    //         "card_set_id": "4c9e36e9-0e1a-4cf9-8bbe-60746b0ff220"
    //       },
    //       {
    //         "id": "3a6f9068-b8d4-46c7-b7fb-b471de5110f1",
    //         "term": "Ferrous Fumarate and Polysacchride Iron Complex and Folic Acid",
    //         "definition": "User-friendly multi-tasking forecast",
    //         "created_at": "2019-06-18T13:00:06Z",
    //         "updated_at": "2019-01-21T02:59:32Z",
    //         "card_set_id": "4c9e36e9-0e1a-4cf9-8bbe-60746b0ff220"
    //       },
    //       {
    //         "id": "816c0f72-f9d2-4050-8a06-216304d4ac16",
    //         "term": "Acetaminophen, Caffeine, Pyrilamine maleate",
    //         "definition": "Customizable zero administration analyzer",
    //         "created_at": "2019-07-04T17:07:36Z",
    //         "updated_at": "2020-01-01T05:56:18Z",
    //         "card_set_id": "4c9e36e9-0e1a-4cf9-8bbe-60746b0ff220"
    //       },
    //       {
    //         "id": "f6d7c330-268b-45c1-b243-63dc7e6ee23b",
    //         "term": "IBANDRONATE SODIUM",
    //         "definition": "Assimilated local open system",
    //         "created_at": "2019-01-24T23:08:44Z",
    //         "updated_at": "2019-03-09T18:24:49Z",
    //         "card_set_id": "4c9e36e9-0e1a-4cf9-8bbe-60746b0ff220"
    //       },
    //       {
    //         "id": "070414a2-b682-460c-9928-2e4b18ec8615",
    //         "term": "Aluminum Zirconium Tetrachlorohydrex GLY",
    //         "definition": "Automated object-oriented portal",
    //         "created_at": "2019-11-09T19:58:57Z",
    //         "updated_at": "2019-11-14T06:34:11Z",
    //         "card_set_id": "4c9e36e9-0e1a-4cf9-8bbe-60746b0ff220"
    //       },
    //       {
    //         "id": "730ae192-9c34-418a-9c9b-eda06b32ae7b",
    //         "term": "Octinoxate, Titanium Dioxide, and Zinc Oxide",
    //         "definition": "Synchronised system-worthy migration",
    //         "created_at": "2019-10-08T03:26:52Z",
    //         "updated_at": "2019-04-29T07:48:36Z",
    //         "card_set_id": "4c9e36e9-0e1a-4cf9-8bbe-60746b0ff220"
    //       },
    //       {
    //         "id": "ea99f66c-687e-4ecb-bc65-b0075bc257e3",
    //         "term": "ANAMIRTA COCCULUS SEED - STRYCHNOS NUX-VOMICA SEED - KEROSENE",
    //         "definition": "Up-sized 5th generation methodology",
    //         "created_at": "2019-09-04T19:52:44Z",
    //         "updated_at": "2019-03-19T11:33:28Z",
    //         "card_set_id": "4c9e36e9-0e1a-4cf9-8bbe-60746b0ff220"
    //       },
    //       {
    //         "id": "557314c3-8a3d-4c33-923b-e97cb555b196",
    //         "term": "Divalproex Sodium",
    //         "definition": "Enhanced content-based structure",
    //         "created_at": "2019-10-16T15:11:01Z",
    //         "updated_at": "2019-01-27T08:22:00Z",
    //         "card_set_id": "4c9e36e9-0e1a-4cf9-8bbe-60746b0ff220"
    //       },
    //       {
    //         "id": "13826787-ee10-4ad3-89aa-485be22d3a7f",
    //         "term": "clindamycin phosphate",
    //         "definition": "Open-source human-resource service-desk",
    //         "created_at": "2019-12-02T07:48:56Z",
    //         "updated_at": "2019-03-23T22:06:39Z",
    //         "card_set_id": "4c9e36e9-0e1a-4cf9-8bbe-60746b0ff220"
    //       },
    //       {
    //         "id": "978ffdc4-73a9-4fcb-94aa-d6a73292fead",
    //         "term": "SERTRALINE HYDROCHLORIDE",
    //         "definition": "Re-engineered dedicated Graphic Interface",
    //         "created_at": "2019-07-04T16:02:20Z",
    //         "updated_at": "2019-09-20T16:05:07Z",
    //         "card_set_id": "4c9e36e9-0e1a-4cf9-8bbe-60746b0ff220"
    //       },
    //       {
    //         "id": "0eb1c878-91d9-43c3-afde-d1299016c0a6",
    //         "term": "NEOMYCIN AND POLYMYXIN B SULFATES, BACITRACIN ZINC, AND HYDROCORTISONE ACETATE",
    //         "definition": "Pre-emptive multi-tasking service-desk",
    //         "created_at": "2019-01-31T07:59:10Z",
    //         "updated_at": "2019-05-13T12:29:44Z",
    //         "card_set_id": "4c9e36e9-0e1a-4cf9-8bbe-60746b0ff220"
    //       },
    //       {
    //         "id": "5102e011-f565-4a40-af5d-064080670a6a",
    //         "term": "ASAFETIDA,CAPSICUM,POTASSIUM DICHROMATE,COLA NUT,LACHESIS MUTA VENOM,STRYCHNOS NUX-VOMICA SEED,RANUNCULUS BULBOSUS,SULFURIC ACID,ZINC.",
    //         "definition": "Decentralized composite service-desk",
    //         "created_at": "2019-10-07T08:37:30Z",
    //         "updated_at": "2020-01-10T09:38:18Z",
    //         "card_set_id": "2f7caf96-d90f-4da3-91aa-08071d6b341c"
    //       },
    //       {
    //         "id": "ffdd2cd3-a696-4182-a41b-1adf0e3d2275",
    //         "term": "Cetirizine",
    //         "definition": "Managed context-sensitive Graphic Interface",
    //         "created_at": "2019-08-15T15:49:53Z",
    //         "updated_at": "2019-08-14T14:46:08Z",
    //         "card_set_id": "2f7caf96-d90f-4da3-91aa-08071d6b341c"
    //       },
    //       {
    //         "id": "c84d6c18-b06e-4c7b-8b16-f5ef51d37360",
    //         "term": "Loratadine",
    //         "definition": "Total transitional groupware",
    //         "created_at": "2019-10-18T03:18:18Z",
    //         "updated_at": "2019-08-05T16:36:56Z",
    //         "card_set_id": "2f7caf96-d90f-4da3-91aa-08071d6b341c"
    //       },
    //       {
    //         "id": "ea2a97bb-496f-4875-a950-e4bb7916fc83",
    //         "term": "Chelidonium Majus, Echinacea, Gentiana Lutea, Arsenicum Album, Carbo Vegetablis, Lycopodium Clavatum",
    //         "definition": "Up-sized discrete benchmark",
    //         "created_at": "2019-06-15T22:08:40Z",
    //         "updated_at": "2019-05-06T02:00:00Z",
    //         "card_set_id": "2f7caf96-d90f-4da3-91aa-08071d6b341c"
    //       },
    //       {
    //         "id": "d2ceed41-b078-4167-9a7d-1c57484cde6c",
    //         "term": "Atorvastatin Calcium",
    //         "definition": "Profit-focused client-driven concept",
    //         "created_at": "2019-03-08T06:23:49Z",
    //         "updated_at": "2020-01-14T13:02:59Z",
    //         "card_set_id": "2f7caf96-d90f-4da3-91aa-08071d6b341c"
    //       },
    //       {
    //         "id": "13372306-7482-4d13-bdef-69ca41680b8e",
    //         "term": "Ranitidine",
    //         "definition": "Switchable didactic application",
    //         "created_at": "2019-03-29T02:51:29Z",
    //         "updated_at": "2019-02-09T18:36:28Z",
    //         "card_set_id": "2f7caf96-d90f-4da3-91aa-08071d6b341c"
    //       },
    //       {
    //         "id": "5d20bd3d-9523-4302-a914-966221d64292",
    //         "term": "OCTINOXATE OCTISALATE ZINC OXIDE TITANIUM DIOXIDE",
    //         "definition": "Open-source intangible productivity",
    //         "created_at": "2019-05-03T18:53:13Z",
    //         "updated_at": "2019-03-09T20:38:51Z",
    //         "card_set_id": "2f7caf96-d90f-4da3-91aa-08071d6b341c"
    //       },
    //       {
    //         "id": "9dd50c02-3460-4e74-b71e-017d2f8917c3",
    //         "term": "Taraxacum e rad. autumnale 3",
    //         "definition": "User-friendly object-oriented challenge",
    //         "created_at": "2019-06-12T13:02:51Z",
    //         "updated_at": "2019-12-26T20:04:19Z",
    //         "card_set_id": "2f7caf96-d90f-4da3-91aa-08071d6b341c"
    //       },
    //       {
    //         "id": "da873fd8-5fff-4123-a599-c8cae35b038b",
    //         "term": "Diphenhydramine citrate, Ibuprofen",
    //         "definition": "Front-line hybrid parallelism",
    //         "created_at": "2019-08-06T04:33:07Z",
    //         "updated_at": "2019-09-06T16:32:56Z",
    //         "card_set_id": "2f7caf96-d90f-4da3-91aa-08071d6b341c"
    //       },
    //       {
    //         "id": "72d25aeb-3f1f-4f26-ae50-0945144ad948",
    //         "term": "CAMPHOR (SYNTHETIC), MENTHOL, METHYL SALICYLATE",
    //         "definition": "Self-enabling background system engine",
    //         "created_at": "2020-01-05T09:19:41Z",
    //         "updated_at": "2019-06-13T14:59:30Z",
    //         "card_set_id": "2f7caf96-d90f-4da3-91aa-08071d6b341c"
    //       },
    //       {
    //         "id": "25c083e8-eeff-4ca6-b386-661ff398d1c9",
    //         "term": "TITANIUM DIOXIDE",
    //         "definition": "Inverse intermediate software",
    //         "created_at": "2019-02-24T14:43:34Z",
    //         "updated_at": "2019-03-30T15:34:05Z",
    //         "card_set_id": "2f7caf96-d90f-4da3-91aa-08071d6b341c"
    //       },
    //       {
    //         "id": "22c9e9d1-2524-4e4a-ad20-3b7c528c2002",
    //         "term": "Polyvinyl Alcohol and Povidone and Tetrahydrozoline Hydrochloride",
    //         "definition": "Team-oriented regional function",
    //         "created_at": "2019-03-24T21:01:51Z",
    //         "updated_at": "2019-03-23T18:21:35Z",
    //         "card_set_id": "2f7caf96-d90f-4da3-91aa-08071d6b341c"
    //       },
    //       {
    //         "id": "fdf8ae16-b151-4396-9cc7-f3329afe423e",
    //         "term": "Lorazepam",
    //         "definition": "Fundamental executive application",
    //         "created_at": "2019-03-14T11:47:13Z",
    //         "updated_at": "2019-09-15T11:48:59Z",
    //         "card_set_id": "2f7caf96-d90f-4da3-91aa-08071d6b341c"
    //       },
    //       {
    //         "id": "f53c648f-09d9-4129-b33a-fe6f3f174c6b",
    //         "term": "valsartan",
    //         "definition": "Versatile mission-critical approach",
    //         "created_at": "2019-11-07T22:25:37Z",
    //         "updated_at": "2019-12-16T11:50:23Z",
    //         "card_set_id": "2f7caf96-d90f-4da3-91aa-08071d6b341c"
    //       },
    //       {
    //         "id": "88076c7d-8960-4f8f-9074-2f0a0698ea35",
    //         "term": "Halobetasol Propionate",
    //         "definition": "Front-line coherent artificial intelligence",
    //         "created_at": "2019-07-06T14:25:24Z",
    //         "updated_at": "2019-11-26T13:25:53Z",
    //         "card_set_id": "2f7caf96-d90f-4da3-91aa-08071d6b341c"
    //       },
    //       {
    //         "id": "c3d62d3e-b4cf-41d0-a42d-2fddc0d9b2ec",
    //         "term": "Felodipine",
    //         "definition": "Seamless bi-directional interface",
    //         "created_at": "2019-11-20T06:59:14Z",
    //         "updated_at": "2019-06-20T13:13:43Z",
    //         "card_set_id": "427f9cd8-75c6-4891-b335-6b9992b90ccf"
    //       },
    //       {
    //         "id": "11a6de8d-174c-4186-9d21-c8a39e4864b6",
    //         "term": "Octinoxate, Oxybenzone",
    //         "definition": "Reduced global monitoring",
    //         "created_at": "2019-08-16T19:06:53Z",
    //         "updated_at": "2019-09-07T00:51:58Z",
    //         "card_set_id": "427f9cd8-75c6-4891-b335-6b9992b90ccf"
    //       },
    //       {
    //         "id": "f92253c9-5fc3-45c9-9422-5c3138c71b48",
    //         "term": "DOG EPITHELIA",
    //         "definition": "Front-line scalable definition",
    //         "created_at": "2019-10-06T21:19:56Z",
    //         "updated_at": "2019-06-18T03:57:41Z",
    //         "card_set_id": "427f9cd8-75c6-4891-b335-6b9992b90ccf"
    //       },
    //       {
    //         "id": "7245887b-d78d-481f-8cd9-c6ebaf0f3ca6",
    //         "term": "Goldenrod",
    //         "definition": "Extended incremental function",
    //         "created_at": "2019-06-12T04:06:59Z",
    //         "updated_at": "2019-09-30T20:53:56Z",
    //         "card_set_id": "427f9cd8-75c6-4891-b335-6b9992b90ccf"
    //       },
    //       {
    //         "id": "c7ab582e-6c86-4d85-a12d-fad19b8a3f9d",
    //         "term": "AVOBENZONE, HOMOSALATE, OCTISALATE, OCTOCRYLENE, and OXYBENZONE",
    //         "definition": "Front-line local alliance",
    //         "created_at": "2019-07-19T06:43:06Z",
    //         "updated_at": "2019-06-08T00:07:37Z",
    //         "card_set_id": "427f9cd8-75c6-4891-b335-6b9992b90ccf"
    //       },
    //       {
    //         "id": "b7fc0e33-940a-4399-84af-b81b7245328c",
    //         "term": "Metronidazole",
    //         "definition": "Horizontal client-server hardware",
    //         "created_at": "2019-08-25T08:14:52Z",
    //         "updated_at": "2019-05-26T20:12:38Z",
    //         "card_set_id": "427f9cd8-75c6-4891-b335-6b9992b90ccf"
    //       },
    //       {
    //         "id": "f6c6c2e3-c8fa-4190-b5e0-e30fcd7fdc30",
    //         "term": "Elaps corallinus , Apis mel., Arsenicum alb. , Cantharis, Cinchona , Colchicum , Convallaria , Crota",
    //         "definition": "Elaps corallinus , Apis mel., Arsenicum alb. , Cantharis, Cinchona , Colchicum , Convallaria , Crota",
    //         "created_at": "2019-06-26T20:35:31Z",
    //         "updated_at": "2019-09-03T08:22:19Z",
    //         "card_set_id": "427f9cd8-75c6-4891-b335-6b9992b90ccf"
    //       },
    //       {
    //         "id": "d02746f9-eb49-4a7a-b6aa-baf997a0d8e8",
    //         "term": "olmesartan medoxomil / amlodipine besylate / hydrochlorothiazide",
    //         "definition": "Versatile responsive conglomeration",
    //         "created_at": "2020-01-11T10:38:30Z",
    //         "updated_at": "2019-08-04T19:56:27Z",
    //         "card_set_id": "427f9cd8-75c6-4891-b335-6b9992b90ccf"
    //       },
    //       {
    //         "id": "17f71c2b-1b50-4994-b01a-e5fa59612372",
    //         "term": "Topiramate",
    //         "definition": "Centralized human-resource encryption",
    //         "created_at": "2019-02-24T14:54:34Z",
    //         "updated_at": "2019-04-01T03:52:00Z",
    //         "card_set_id": "427f9cd8-75c6-4891-b335-6b9992b90ccf"
    //       },
    //       {
    //         "id": "94c79de9-50bc-4456-88aa-f7763c034b03",
    //         "term": "Angelica Archangelica, Hydrastis Canadensis, Kali Muriaticum, Yucca Filamentosa, Cartilago Suis, Phytolacca Decandra, Rhus Toxicodendron",
    //         "definition": "Intuitive systemic access",
    //         "created_at": "2019-11-24T23:19:05Z",
    //         "updated_at": "2019-06-25T07:45:25Z",
    //         "card_set_id": "427f9cd8-75c6-4891-b335-6b9992b90ccf"
    //       },
    //       {
    //         "id": "befc6845-e1f3-4d57-ba2f-19a251eed1e3",
    //         "term": "Sweetgum",
    //         "definition": "Public-key system-worthy knowledge user",
    //         "created_at": "2019-06-16T18:12:12Z",
    //         "updated_at": "2019-02-26T01:18:31Z",
    //         "card_set_id": "427f9cd8-75c6-4891-b335-6b9992b90ccf"
    //       },
    //       {
    //         "id": "3e4c7f1d-5d56-4146-8689-9f4e4b0986d0",
    //         "term": "Clarithromycin",
    //         "definition": "Devolved national functionalities",
    //         "created_at": "2019-08-14T10:28:54Z",
    //         "updated_at": "2019-10-17T21:38:29Z",
    //         "card_set_id": "427f9cd8-75c6-4891-b335-6b9992b90ccf"
    //       },
    //       {
    //         "id": "5eea78d6-85fb-4e16-9d4b-bc1c446c0964",
    //         "term": "Octinoxate, Titanium Dioxide, Zinc Oxide",
    //         "definition": "Synergized multimedia collaboration",
    //         "created_at": "2019-08-16T01:56:59Z",
    //         "updated_at": "2019-07-14T15:48:14Z",
    //         "card_set_id": "427f9cd8-75c6-4891-b335-6b9992b90ccf"
    //       },
    //       {
    //         "id": "74c10f9f-d093-46a8-a050-ffd8e75049e5",
    //         "term": "sodium chloride",
    //         "definition": "Automated bandwidth-monitored contingency",
    //         "created_at": "2019-01-28T05:22:50Z",
    //         "updated_at": "2019-11-05T21:48:03Z",
    //         "card_set_id": "427f9cd8-75c6-4891-b335-6b9992b90ccf"
    //       },
    //       {
    //         "id": "ba295e2c-bace-41f4-9e65-08775dc4bea4",
    //         "term": "Nicotine Polacrilex",
    //         "definition": "Versatile didactic projection",
    //         "created_at": "2019-05-10T16:32:36Z",
    //         "updated_at": "2019-05-12T08:43:15Z",
    //         "card_set_id": "427f9cd8-75c6-4891-b335-6b9992b90ccf"
    //       },
    //       {
    //         "id": "541f1dd6-3cc9-4c5b-8329-945245ec264d",
    //         "term": "Minoxidil",
    //         "definition": "Optimized needs-based synergy",
    //         "created_at": "2019-12-11T16:57:19Z",
    //         "updated_at": "2019-06-22T18:43:13Z",
    //         "card_set_id": "768e8125-f358-4baa-8687-0a22a1410dbe"
    //       },
    //       {
    //         "id": "4d612559-0015-41c9-a048-3ddb3c6daa55",
    //         "term": "Phenol",
    //         "definition": "Reduced zero defect success",
    //         "created_at": "2019-07-23T09:30:22Z",
    //         "updated_at": "2019-02-08T09:24:34Z",
    //         "card_set_id": "768e8125-f358-4baa-8687-0a22a1410dbe"
    //       },
    //       {
    //         "id": "c44bd6c3-7f70-4c99-a3d1-98dde9829c7d",
    //         "term": "ONDANSETRON HYDROCHLORIDE",
    //         "definition": "Ameliorated cohesive local area network",
    //         "created_at": "2019-11-24T18:13:30Z",
    //         "updated_at": "2019-07-29T15:09:01Z",
    //         "card_set_id": "768e8125-f358-4baa-8687-0a22a1410dbe"
    //       },
    //       {
    //         "id": "a085cde1-b957-4aac-bf58-3a5d6da2b66e",
    //         "term": "Goose Feathers",
    //         "definition": "Progressive composite concept",
    //         "created_at": "2019-08-28T09:54:27Z",
    //         "updated_at": "2019-03-26T23:21:30Z",
    //         "card_set_id": "768e8125-f358-4baa-8687-0a22a1410dbe"
    //       },
    //       {
    //         "id": "4861eaf0-c329-4ef3-aa9e-261726b7e9d1",
    //         "term": "brompheniramine maleate, phenylephrine HCl",
    //         "definition": "Face to face radical productivity",
    //         "created_at": "2019-04-12T09:04:07Z",
    //         "updated_at": "2019-12-23T14:38:50Z",
    //         "card_set_id": "768e8125-f358-4baa-8687-0a22a1410dbe"
    //       },
    //       {
    //         "id": "84d05de4-d332-4245-87b8-8162fedb349e",
    //         "term": "Hydrocodone Bitartrate And Acetaminophen",
    //         "definition": "Persevering heuristic encoding",
    //         "created_at": "2019-12-22T21:19:59Z",
    //         "updated_at": "2019-09-04T04:44:18Z",
    //         "card_set_id": "768e8125-f358-4baa-8687-0a22a1410dbe"
    //       },
    //       {
    //         "id": "5d19389e-473d-41ac-8579-d6c736789b4a",
    //         "term": "Aminophylline Dihydrate",
    //         "definition": "Face to face interactive framework",
    //         "created_at": "2019-03-02T18:16:25Z",
    //         "updated_at": "2019-03-06T23:05:19Z",
    //         "card_set_id": "768e8125-f358-4baa-8687-0a22a1410dbe"
    //       },
    //       {
    //         "id": "d575cd6a-e2f9-4689-ba3f-4893311ad5bf",
    //         "term": "BENZETHONIUM CHLORIDE",
    //         "definition": "Multi-tiered executive installation",
    //         "created_at": "2020-01-12T12:56:40Z",
    //         "updated_at": "2019-02-19T08:32:42Z",
    //         "card_set_id": "768e8125-f358-4baa-8687-0a22a1410dbe"
    //       },
    //       {
    //         "id": "7b4f3a5d-0c48-44ce-8799-e82cc23f8dd6",
    //         "term": "Avobenzone, Homosalate, Octisalate, Octocrylene, and Oxybenzone",
    //         "definition": "Balanced solution-oriented extranet",
    //         "created_at": "2019-05-06T02:23:36Z",
    //         "updated_at": "2019-04-15T19:47:23Z",
    //         "card_set_id": "768e8125-f358-4baa-8687-0a22a1410dbe"
    //       },
    //       {
    //         "id": "fd4dcea8-0206-4040-a8a0-caa686065fd6",
    //         "term": "Nystatin",
    //         "definition": "Digitized well-modulated adapter",
    //         "created_at": "2019-02-02T18:03:18Z",
    //         "updated_at": "2019-08-04T10:14:22Z",
    //         "card_set_id": "768e8125-f358-4baa-8687-0a22a1410dbe"
    //       },
    //       {
    //         "id": "5c95b303-821a-4a02-9428-32770e5bd98c",
    //         "term": "Azithromycin",
    //         "definition": "Versatile full-range knowledge user",
    //         "created_at": "2019-03-19T10:30:49Z",
    //         "updated_at": "2019-11-20T16:17:41Z",
    //         "card_set_id": "768e8125-f358-4baa-8687-0a22a1410dbe"
    //       },
    //       {
    //         "id": "9d84eac2-928b-4ca8-8c46-d57debead307",
    //         "term": "isosorbide dinitrate",
    //         "definition": "Exclusive systematic portal",
    //         "created_at": "2019-01-30T16:39:14Z",
    //         "updated_at": "2019-01-23T22:57:40Z",
    //         "card_set_id": "768e8125-f358-4baa-8687-0a22a1410dbe"
    //       },
    //       {
    //         "id": "1e973d3b-738c-4178-b336-418a5030be2e",
    //         "term": "Salicylic Acid",
    //         "definition": "Monitored bottom-line process improvement",
    //         "created_at": "2019-09-05T21:24:45Z",
    //         "updated_at": "2019-03-01T00:02:06Z",
    //         "card_set_id": "768e8125-f358-4baa-8687-0a22a1410dbe"
    //       },
    //       {
    //         "id": "60f7eb06-5c4f-47c5-b9ac-405b68871a32",
    //         "term": "Octinoxate",
    //         "definition": "Open-architected attitude-oriented knowledge user",
    //         "created_at": "2019-03-10T14:29:20Z",
    //         "updated_at": "2019-08-17T23:15:09Z",
    //         "card_set_id": "768e8125-f358-4baa-8687-0a22a1410dbe"
    //       },
    //       {
    //         "id": "de8bfaa2-0107-45ff-a7cd-6d4bc7376d01",
    //         "term": "Ensulizole",
    //         "definition": "Cross-group system-worthy customer loyalty",
    //         "created_at": "2019-09-07T02:57:24Z",
    //         "updated_at": "2019-11-21T05:31:22Z",
    //         "card_set_id": "768e8125-f358-4baa-8687-0a22a1410dbe"
    //       },
    //       {
    //         "id": "300c056e-8c39-4b65-afe1-7ad051016283",
    //         "term": "Triazolam",
    //         "definition": "Right-sized static flexibility",
    //         "created_at": "2019-08-19T17:39:27Z",
    //         "updated_at": "2019-05-03T07:07:13Z",
    //         "card_set_id": "092a5cb7-8bb6-4349-874d-cfa0b4c344bd"
    //       },
    //       {
    //         "id": "453fd99d-898b-40c9-97ba-eb41fe1a4f6c",
    //         "term": "OKOUBAKA AUBREVILLEI BARK",
    //         "definition": "Innovative analyzing database",
    //         "created_at": "2019-03-06T06:51:35Z",
    //         "updated_at": "2019-08-13T00:41:40Z",
    //         "card_set_id": "092a5cb7-8bb6-4349-874d-cfa0b4c344bd"
    //       },
    //       {
    //         "id": "afe035cf-2a9a-459f-858c-7284f9bf3256",
    //         "term": "DOXOrubicin Hydrochloride",
    //         "definition": "Versatile methodical hierarchy",
    //         "created_at": "2019-12-03T21:57:14Z",
    //         "updated_at": "2019-09-26T04:20:33Z",
    //         "card_set_id": "092a5cb7-8bb6-4349-874d-cfa0b4c344bd"
    //       },
    //       {
    //         "id": "5b2faf9a-418e-4273-a449-25a89007c8c8",
    //         "term": "dextroamphetamine sulfate",
    //         "definition": "Multi-layered tangible challenge",
    //         "created_at": "2019-03-08T22:11:18Z",
    //         "updated_at": "2019-08-18T10:40:33Z",
    //         "card_set_id": "092a5cb7-8bb6-4349-874d-cfa0b4c344bd"
    //       },
    //       {
    //         "id": "30feaaf5-ccdb-4f55-b1ec-c34b19363103",
    //         "term": "Acyclovir",
    //         "definition": "Multi-tiered coherent adapter",
    //         "created_at": "2019-10-20T14:07:31Z",
    //         "updated_at": "2019-09-17T15:24:47Z",
    //         "card_set_id": "092a5cb7-8bb6-4349-874d-cfa0b4c344bd"
    //       },
    //       {
    //         "id": "ea7111f0-7590-4f8a-87aa-80da0b7cb26d",
    //         "term": "ETHYL ALCOHOL",
    //         "definition": "Vision-oriented full-range algorithm",
    //         "created_at": "2020-01-16T03:47:34Z",
    //         "updated_at": "2019-08-05T01:00:08Z",
    //         "card_set_id": "092a5cb7-8bb6-4349-874d-cfa0b4c344bd"
    //       },
    //       {
    //         "id": "d16756a4-41bb-4857-a5b0-a78670e0f934",
    //         "term": "MAGNESIUM HYDROXIDE",
    //         "definition": "Diverse bandwidth-monitored open architecture",
    //         "created_at": "2019-09-03T11:40:27Z",
    //         "updated_at": "2019-12-14T06:10:03Z",
    //         "card_set_id": "092a5cb7-8bb6-4349-874d-cfa0b4c344bd"
    //       },
    //       {
    //         "id": "21886698-48c8-42a4-ac92-066597282993",
    //         "term": "Butalbital, Aspirin, Caffeine, and Codeine Phosphate",
    //         "definition": "Multi-layered global initiative",
    //         "created_at": "2020-01-06T15:13:13Z",
    //         "updated_at": "2019-01-31T00:55:07Z",
    //         "card_set_id": "092a5cb7-8bb6-4349-874d-cfa0b4c344bd"
    //       },
    //       {
    //         "id": "424f5bd1-9678-4347-8bb0-ead37618cf15",
    //         "term": "Diltiazem Hydrochloride",
    //         "definition": "Switchable bottom-line framework",
    //         "created_at": "2019-11-20T01:19:48Z",
    //         "updated_at": "2019-08-27T19:38:08Z",
    //         "card_set_id": "092a5cb7-8bb6-4349-874d-cfa0b4c344bd"
    //       },
    //       {
    //         "id": "2c3bd1fb-7198-43c0-9c05-d587697c5a14",
    //         "term": "Chicory",
    //         "definition": "Multi-tiered composite encoding",
    //         "created_at": "2019-12-13T12:42:16Z",
    //         "updated_at": "2019-12-11T02:50:32Z",
    //         "card_set_id": "092a5cb7-8bb6-4349-874d-cfa0b4c344bd"
    //       },
    //       {
    //         "id": "7a3f9bc9-b907-4f46-a46c-c7670e612b05",
    //         "term": "triamcinolone acetonide",
    //         "definition": "Digitized optimizing support",
    //         "created_at": "2019-07-01T16:22:11Z",
    //         "updated_at": "2019-05-02T04:03:04Z",
    //         "card_set_id": "092a5cb7-8bb6-4349-874d-cfa0b4c344bd"
    //       },
    //       {
    //         "id": "38d00377-74de-44c2-b3ab-cc0cb0a55e82",
    //         "term": "Crofelemer",
    //         "definition": "Universal encompassing moderator",
    //         "created_at": "2019-08-25T06:12:40Z",
    //         "updated_at": "2019-05-10T07:45:57Z",
    //         "card_set_id": "092a5cb7-8bb6-4349-874d-cfa0b4c344bd"
    //       },
    //       {
    //         "id": "1b0b050c-43a6-4afa-96e9-b5d9f48b048f",
    //         "term": "Ponderosa Pine",
    //         "definition": "Switchable holistic middleware",
    //         "created_at": "2019-08-19T21:14:16Z",
    //         "updated_at": "2019-07-16T17:14:13Z",
    //         "card_set_id": "092a5cb7-8bb6-4349-874d-cfa0b4c344bd"
    //       },
    //       {
    //         "id": "711ca05c-39fc-4a99-a9bb-399aee25a188",
    //         "term": "Irbesartan",
    //         "definition": "Distributed user-facing customer loyalty",
    //         "created_at": "2019-07-23T06:17:26Z",
    //         "updated_at": "2019-03-17T16:35:14Z",
    //         "card_set_id": "092a5cb7-8bb6-4349-874d-cfa0b4c344bd"
    //       },
    //       {
    //         "id": "9fb6c63c-a8f2-451c-aa7f-991555ba4a54",
    //         "term": "Curvularia spicifera",
    //         "definition": "Fundamental cohesive contingency",
    //         "created_at": "2019-03-22T11:45:21Z",
    //         "updated_at": "2019-09-16T14:07:54Z",
    //         "card_set_id": "092a5cb7-8bb6-4349-874d-cfa0b4c344bd"
    //       },
    //       {
    //         "id": "74240513-a2ef-4a0f-8186-4f3bdeb14c07",
    //         "term": "Montelukast Sodium",
    //         "definition": "Polarised encompassing open system",
    //         "created_at": "2019-05-08T15:20:45Z",
    //         "updated_at": "2019-10-27T18:11:49Z",
    //         "card_set_id": "4c020154-576b-4402-a719-c185f363eddf"
    //       },
    //       {
    //         "id": "152b6c27-2340-440d-835f-2f35ad60ee9d",
    //         "term": "Oxycodone and Acetaminophen",
    //         "definition": "Distributed intermediate internet solution",
    //         "created_at": "2019-12-04T13:48:56Z",
    //         "updated_at": "2019-06-25T23:12:42Z",
    //         "card_set_id": "4c020154-576b-4402-a719-c185f363eddf"
    //       },
    //       {
    //         "id": "f5f4bc35-30fc-4e2b-8760-6d9378331431",
    //         "term": "Avobenzone, Octisalate and Octocrylene",
    //         "definition": "Centralized actuating emulation",
    //         "created_at": "2019-05-12T22:49:43Z",
    //         "updated_at": "2019-11-06T21:28:29Z",
    //         "card_set_id": "4c020154-576b-4402-a719-c185f363eddf"
    //       },
    //       {
    //         "id": "d8c7ebd1-c5ce-47eb-8101-861073069a11",
    //         "term": "Benzalkonium Chloride",
    //         "definition": "Compatible multi-state internet solution",
    //         "created_at": "2019-05-03T20:49:00Z",
    //         "updated_at": "2019-05-10T06:06:39Z",
    //         "card_set_id": "4c020154-576b-4402-a719-c185f363eddf"
    //       },
    //       {
    //         "id": "588747e5-b313-4058-b819-059329af06d2",
    //         "term": "Dyphylline",
    //         "definition": "Cross-group hybrid array",
    //         "created_at": "2019-04-15T19:55:19Z",
    //         "updated_at": "2019-12-13T14:30:03Z",
    //         "card_set_id": "4c020154-576b-4402-a719-c185f363eddf"
    //       },
    //       {
    //         "id": "2b7c199b-a2ff-4025-a1e1-72b8294cb627",
    //         "term": "TRICLOSAN",
    //         "definition": "Exclusive 3rd generation standardization",
    //         "created_at": "2019-12-20T17:36:51Z",
    //         "updated_at": "2019-08-20T07:41:14Z",
    //         "card_set_id": "4c020154-576b-4402-a719-c185f363eddf"
    //       },
    //       {
    //         "id": "7430e0d8-0b7a-4c77-b599-0e207590c1ca",
    //         "term": "Symphytum Hamamelis",
    //         "definition": "Polarised reciprocal complexity",
    //         "created_at": "2019-03-15T18:43:15Z",
    //         "updated_at": "2019-12-04T10:53:04Z",
    //         "card_set_id": "4c020154-576b-4402-a719-c185f363eddf"
    //       },
    //       {
    //         "id": "15384041-e606-4db6-b437-3662205d3f2a",
    //         "term": "triamcinolone acetonide",
    //         "definition": "Customizable analyzing support",
    //         "created_at": "2020-01-03T11:22:16Z",
    //         "updated_at": "2019-04-24T07:45:25Z",
    //         "card_set_id": "4c020154-576b-4402-a719-c185f363eddf"
    //       },
    //       {
    //         "id": "e8bed9a1-1ae8-4ec1-8bd5-8e2ca10e6f35",
    //         "term": "lorazepam",
    //         "definition": "Face to face eco-centric architecture",
    //         "created_at": "2019-12-28T04:47:59Z",
    //         "updated_at": "2019-04-20T09:17:31Z",
    //         "card_set_id": "4c020154-576b-4402-a719-c185f363eddf"
    //       },
    //       {
    //         "id": "8fdb81d2-14d4-4b53-aad3-d21fd54eaf8d",
    //         "term": "Fentanyl",
    //         "definition": "Triple-buffered system-worthy alliance",
    //         "created_at": "2019-05-12T10:39:18Z",
    //         "updated_at": "2019-05-29T20:27:29Z",
    //         "card_set_id": "4c020154-576b-4402-a719-c185f363eddf"
    //       },
    //       {
    //         "id": "8279d50e-36a2-4ddc-8385-9153e9b27839",
    //         "term": "Galantamine",
    //         "definition": "Synergized discrete database",
    //         "created_at": "2019-03-05T10:24:33Z",
    //         "updated_at": "2019-11-01T17:39:30Z",
    //         "card_set_id": "4c020154-576b-4402-a719-c185f363eddf"
    //       },
    //       {
    //         "id": "4d3e8339-b9d7-43f5-9d50-01063228d96e",
    //         "term": "Octreotide Acetate",
    //         "definition": "Cross-group solution-oriented hierarchy",
    //         "created_at": "2019-03-27T02:54:18Z",
    //         "updated_at": "2019-01-19T06:21:35Z",
    //         "card_set_id": "4c020154-576b-4402-a719-c185f363eddf"
    //       },
    //       {
    //         "id": "2f4fc34b-86fd-4249-84db-a34ecd643868",
    //         "term": "Methyl Salicylate",
    //         "definition": "Implemented high-level superstructure",
    //         "created_at": "2019-11-25T10:45:16Z",
    //         "updated_at": "2019-12-06T11:24:34Z",
    //         "card_set_id": "4c020154-576b-4402-a719-c185f363eddf"
    //       },
    //       {
    //         "id": "4b316d56-7ed6-4849-bc46-8b21f43acad7",
    //         "term": "avobenzone, homosalate, octisalate, octocrylene",
    //         "definition": "Stand-alone transitional internet solution",
    //         "created_at": "2019-10-20T19:02:16Z",
    //         "updated_at": "2019-03-23T09:12:39Z",
    //         "card_set_id": "4c020154-576b-4402-a719-c185f363eddf"
    //       },
    //       {
    //         "id": "badd9b57-7f0b-4a6b-94ae-a1db2cbbca27",
    //         "term": "Silicea",
    //         "definition": "Multi-lateral zero administration installation",
    //         "created_at": "2019-02-19T16:23:33Z",
    //         "updated_at": "2019-02-15T01:24:03Z",
    //         "card_set_id": "4c020154-576b-4402-a719-c185f363eddf"
    //       },
    //       {
    //         "id": "dce16df3-f335-43bd-b81f-1bb92f928c37",
    //         "term": "Carbon Dioxide",
    //         "definition": "Synergistic explicit capacity",
    //         "created_at": "2019-01-19T10:47:30Z",
    //         "updated_at": "2019-08-02T02:35:07Z",
    //         "card_set_id": "8b820680-691d-439f-806a-ba775253cd5d"
    //       },
    //       {
    //         "id": "1e6349ce-28ca-4709-8ce4-094df4baea29",
    //         "term": "Fluocinonide",
    //         "definition": "Monitored grid-enabled hierarchy",
    //         "created_at": "2019-09-05T23:42:44Z",
    //         "updated_at": "2019-12-03T07:24:24Z",
    //         "card_set_id": "8b820680-691d-439f-806a-ba775253cd5d"
    //       },
    //       {
    //         "id": "44714090-f28f-463a-84b8-6d3c6c29723a",
    //         "term": "temazepam",
    //         "definition": "Robust human-resource approach",
    //         "created_at": "2019-04-18T03:44:34Z",
    //         "updated_at": "2019-04-18T08:53:08Z",
    //         "card_set_id": "8b820680-691d-439f-806a-ba775253cd5d"
    //       },
    //       {
    //         "id": "f1b32da5-d503-445d-8c3e-86b6088f650f",
    //         "term": "TITANIUM DIOXIDE",
    //         "definition": "Distributed mobile contingency",
    //         "created_at": "2019-07-20T18:35:47Z",
    //         "updated_at": "2019-10-29T16:04:54Z",
    //         "card_set_id": "8b820680-691d-439f-806a-ba775253cd5d"
    //       },
    //       {
    //         "id": "bda914fe-75fd-4246-a720-9e16ce18ce22",
    //         "term": "Antibacterial Amber Floral Hand Soap",
    //         "definition": "Universal 24/7 software",
    //         "created_at": "2019-01-23T04:06:23Z",
    //         "updated_at": "2019-02-04T05:54:36Z",
    //         "card_set_id": "8b820680-691d-439f-806a-ba775253cd5d"
    //       },
    //       {
    //         "id": "19824f79-9966-4eb9-83ad-815647e3642a",
    //         "term": "EPICOCCUM NIGRUM",
    //         "definition": "Organized 24/7 leverage",
    //         "created_at": "2019-01-22T15:14:55Z",
    //         "updated_at": "2019-04-12T02:02:03Z",
    //         "card_set_id": "8b820680-691d-439f-806a-ba775253cd5d"
    //       },
    //       {
    //         "id": "953fdc8f-805c-4eef-b989-c65e2410008e",
    //         "term": "Famotidine",
    //         "definition": "Intuitive uniform structure",
    //         "created_at": "2019-01-29T04:17:11Z",
    //         "updated_at": "2019-02-25T13:29:12Z",
    //         "card_set_id": "8b820680-691d-439f-806a-ba775253cd5d"
    //       },
    //       {
    //         "id": "e015010d-fd6c-4634-99cf-1be8a2ab512c",
    //         "term": "Beef Bovine spp.",
    //         "definition": "Re-engineered secondary flexibility",
    //         "created_at": "2019-08-26T20:26:46Z",
    //         "updated_at": "2019-06-26T05:50:42Z",
    //         "card_set_id": "8b820680-691d-439f-806a-ba775253cd5d"
    //       },
    //       {
    //         "id": "81836354-180e-48e1-b883-2fcea9d53621",
    //         "term": "Povidone-Iodine",
    //         "definition": "Persistent intangible parallelism",
    //         "created_at": "2019-09-27T00:22:00Z",
    //         "updated_at": "2019-06-05T23:44:37Z",
    //         "card_set_id": "8b820680-691d-439f-806a-ba775253cd5d"
    //       },
    //       {
    //         "id": "9749ad61-cf43-4c32-9767-50b15af8cfba",
    //         "term": "MANDRAGORA OFFICINARUM ROOT BETULA PENDULA LEAF ACONITUM NAPELLUS ROOT ARNICA MONTANA SILVER",
    //         "definition": "Enterprise-wide dedicated internet solution",
    //         "created_at": "2019-05-11T23:13:45Z",
    //         "updated_at": "2019-10-18T04:19:16Z",
    //         "card_set_id": "8b820680-691d-439f-806a-ba775253cd5d"
    //       },
    //       {
    //         "id": "e33a6d36-f97e-4bd9-892c-4dc1332d43db",
    //         "term": "carbamazepine",
    //         "definition": "Proactive zero administration knowledge base",
    //         "created_at": "2019-06-17T20:31:01Z",
    //         "updated_at": "2019-03-18T04:52:41Z",
    //         "card_set_id": "8b820680-691d-439f-806a-ba775253cd5d"
    //       },
    //       {
    //         "id": "839464e6-b9bb-4808-9e48-679fa9d41836",
    //         "term": "Cholestyramine",
    //         "definition": "Optimized global neural-net",
    //         "created_at": "2019-09-16T01:31:22Z",
    //         "updated_at": "2019-12-02T16:23:33Z",
    //         "card_set_id": "8b820680-691d-439f-806a-ba775253cd5d"
    //       },
    //       {
    //         "id": "adf707d3-b926-4ab6-8e9a-8a78deea1378",
    //         "term": "Hydroquinone, Octinoxate, Oxybenzone, Padimate O",
    //         "definition": "Upgradable context-sensitive website",
    //         "created_at": "2020-01-09T11:31:52Z",
    //         "updated_at": "2019-02-12T10:46:18Z",
    //         "card_set_id": "8b820680-691d-439f-806a-ba775253cd5d"
    //       },
    //       {
    //         "id": "6ffae63b-a773-4e32-a6c0-5d69bc9a74d1",
    //         "term": "ARSENIC TRIOXIDE,ECHINACEA,ATROPA BELLADONNA,TOXICODENDRON PUBESCENS LEAF,LYCOPODIUM CLAVATUM SPORE,STRYCHNOS NUX-VOMICA SEED,GELSEMIUM SEMPERVIRENS ROOT,",
    //         "definition": "Synchronised user-facing software",
    //         "created_at": "2019-12-08T09:28:14Z",
    //         "updated_at": "2019-12-13T11:42:53Z",
    //         "card_set_id": "8b820680-691d-439f-806a-ba775253cd5d"
    //       },
    //       {
    //         "id": "1c5fd893-e7aa-497e-b717-0f30c138a245",
    //         "term": "Acarbose",
    //         "definition": "Advanced reciprocal toolset",
    //         "created_at": "2019-05-08T17:03:40Z",
    //         "updated_at": "2019-07-19T00:13:50Z",
    //         "card_set_id": "8b820680-691d-439f-806a-ba775253cd5d"
    //       },
    //       {
    //         "id": "0eeabefc-a635-4acb-b8d2-8dc729bbcde7",
    //         "term": "ETHYL ALCOHOL",
    //         "definition": "Open-source non-volatile matrix",
    //         "created_at": "2019-02-26T01:14:54Z",
    //         "updated_at": "2019-08-30T21:41:01Z",
    //         "card_set_id": "cbad2305-cf86-4ade-9529-0f63a3e742b4"
    //       },
    //       {
    //         "id": "a27cdf30-7b83-46ab-b3d1-3ee0aaa28f58",
    //         "term": "Symphytum Stannum",
    //         "definition": "Cloned intermediate flexibility",
    //         "created_at": "2019-06-19T12:26:01Z",
    //         "updated_at": "2019-09-15T01:57:20Z",
    //         "card_set_id": "cbad2305-cf86-4ade-9529-0f63a3e742b4"
    //       },
    //       {
    //         "id": "0945e215-3631-414c-b2f1-f7d946e9c8f0",
    //         "term": "spironolactone",
    //         "definition": "Pre-emptive zero defect installation",
    //         "created_at": "2019-12-14T05:05:01Z",
    //         "updated_at": "2019-12-20T23:50:04Z",
    //         "card_set_id": "cbad2305-cf86-4ade-9529-0f63a3e742b4"
    //       },
    //       {
    //         "id": "00312f42-4026-4a12-aaca-a4fd0249ad6f",
    //         "term": "Lisinopril",
    //         "definition": "Phased modular parallelism",
    //         "created_at": "2019-12-30T11:00:42Z",
    //         "updated_at": "2019-04-24T03:37:09Z",
    //         "card_set_id": "cbad2305-cf86-4ade-9529-0f63a3e742b4"
    //       },
    //       {
    //         "id": "df78644c-793c-49aa-9d1e-0e891bde015d",
    //         "term": "Magnesium Hydroxide",
    //         "definition": "Vision-oriented modular concept",
    //         "created_at": "2019-12-24T13:58:37Z",
    //         "updated_at": "2019-06-17T14:25:45Z",
    //         "card_set_id": "cbad2305-cf86-4ade-9529-0f63a3e742b4"
    //       },
    //       {
    //         "id": "80af7184-1be4-4597-82d3-58c8b68e48fa",
    //         "term": "sumatriptan",
    //         "definition": "Enhanced background product",
    //         "created_at": "2019-06-07T13:35:22Z",
    //         "updated_at": "2019-11-22T18:36:10Z",
    //         "card_set_id": "cbad2305-cf86-4ade-9529-0f63a3e742b4"
    //       },
    //       {
    //         "id": "2a06d66b-8088-46d0-9da9-280a94369015",
    //         "term": "DEXTRAN 70",
    //         "definition": "Pre-emptive dynamic task-force",
    //         "created_at": "2019-11-18T21:10:57Z",
    //         "updated_at": "2019-11-27T07:43:22Z",
    //         "card_set_id": "cbad2305-cf86-4ade-9529-0f63a3e742b4"
    //       },
    //       {
    //         "id": "1db91190-ce18-4791-be86-f72b426610d7",
    //         "term": "Birch Mixture",
    //         "definition": "Mandatory encompassing data-warehouse",
    //         "created_at": "2019-07-22T02:37:47Z",
    //         "updated_at": "2019-04-16T01:02:05Z",
    //         "card_set_id": "cbad2305-cf86-4ade-9529-0f63a3e742b4"
    //       },
    //       {
    //         "id": "2f4ad47c-85ab-47e8-8f2b-d7fce90cf9e3",
    //         "term": "Aluminum Zirconium Tetrachlorohydrex GLY",
    //         "definition": "Multi-tiered logistical portal",
    //         "created_at": "2019-07-14T21:37:31Z",
    //         "updated_at": "2019-03-04T23:19:08Z",
    //         "card_set_id": "cbad2305-cf86-4ade-9529-0f63a3e742b4"
    //       },
    //       {
    //         "id": "8c939c93-25aa-43c6-8ee3-65c64b81a39d",
    //         "term": "LIDOCAINE",
    //         "definition": "Customer-focused 6th generation parallelism",
    //         "created_at": "2019-03-24T19:14:26Z",
    //         "updated_at": "2019-02-17T10:23:19Z",
    //         "card_set_id": "cbad2305-cf86-4ade-9529-0f63a3e742b4"
    //       },
    //       {
    //         "id": "a683fedb-b121-4ba3-812d-6479a53ba69d",
    //         "term": "Loratadine, Pseudoephedrine",
    //         "definition": "Triple-buffered web-enabled conglomeration",
    //         "created_at": "2019-09-16T13:41:23Z",
    //         "updated_at": "2019-12-12T13:03:11Z",
    //         "card_set_id": "cbad2305-cf86-4ade-9529-0f63a3e742b4"
    //       },
    //       {
    //         "id": "904d17d7-ca04-4267-8578-3a76cffb0e2d",
    //         "term": "fexofenadine hcl",
    //         "definition": "Function-based 5th generation projection",
    //         "created_at": "2019-10-06T06:12:15Z",
    //         "updated_at": "2019-06-12T20:11:48Z",
    //         "card_set_id": "cbad2305-cf86-4ade-9529-0f63a3e742b4"
    //       },
    //       {
    //         "id": "a253ad1d-61ab-4e9c-a8df-a1a735f6d95d",
    //         "term": "Zoledronic Acid",
    //         "definition": "Object-based 4th generation service-desk",
    //         "created_at": "2019-06-18T02:47:37Z",
    //         "updated_at": "2019-09-12T06:31:24Z",
    //         "card_set_id": "cbad2305-cf86-4ade-9529-0f63a3e742b4"
    //       },
    //       {
    //         "id": "c2dc3079-29ea-432e-894e-b1ffbc4e4f55",
    //         "term": "Benzoyl Peroxide",
    //         "definition": "Grass-roots heuristic attitude",
    //         "created_at": "2019-12-12T16:12:32Z",
    //         "updated_at": "2019-03-13T08:56:53Z",
    //         "card_set_id": "cbad2305-cf86-4ade-9529-0f63a3e742b4"
    //       },
    //       {
    //         "id": "0de72140-28a5-432f-9262-25ec1ddbded9",
    //         "term": "Enalaprilat",
    //         "definition": "Persistent multimedia parallelism",
    //         "created_at": "2019-11-05T19:39:05Z",
    //         "updated_at": "2019-06-30T02:40:56Z",
    //         "card_set_id": "cbad2305-cf86-4ade-9529-0f63a3e742b4"
    //       },
    //       {
    //         "id": "3538fb94-9492-48e1-b45f-a110ec37f908",
    //         "term": "Salicylic Acid",
    //         "definition": "Cross-platform modular hierarchy",
    //         "created_at": "2019-02-28T22:02:40Z",
    //         "updated_at": "2019-08-29T22:19:46Z",
    //         "card_set_id": "5012f47f-5bf1-4182-8bb4-229b9d5d06d6"
    //       },
    //       {
    //         "id": "84b735cd-8247-4c7f-a208-7be5de3a32d5",
    //         "term": "WHOLE ARNICA PLANT",
    //         "definition": "Automated eco-centric methodology",
    //         "created_at": "2019-04-14T05:30:04Z",
    //         "updated_at": "2019-10-03T17:36:44Z",
    //         "card_set_id": "5012f47f-5bf1-4182-8bb4-229b9d5d06d6"
    //       },
    //       {
    //         "id": "f83933ec-b48c-458e-a058-ee93607d50ae",
    //         "term": "Hydrochlorothiazide",
    //         "definition": "Decentralized bifurcated orchestration",
    //         "created_at": "2019-12-20T16:58:16Z",
    //         "updated_at": "2019-10-13T10:11:17Z",
    //         "card_set_id": "5012f47f-5bf1-4182-8bb4-229b9d5d06d6"
    //       },
    //       {
    //         "id": "f39f38f9-59ed-435c-a714-475a62256ca6",
    //         "term": "ALCOHOL",
    //         "definition": "Pre-emptive national protocol",
    //         "created_at": "2019-09-06T05:59:19Z",
    //         "updated_at": "2020-01-02T06:45:03Z",
    //         "card_set_id": "5012f47f-5bf1-4182-8bb4-229b9d5d06d6"
    //       },
    //       {
    //         "id": "d2d12291-0f50-4d9c-a7a8-9af76153009c",
    //         "term": "TETRAHYDROZOLINE HYDROCHLORIDE AND ZINC SULFATE",
    //         "definition": "Centralized tertiary architecture",
    //         "created_at": "2019-07-01T18:44:55Z",
    //         "updated_at": "2019-02-07T20:25:54Z",
    //         "card_set_id": "5012f47f-5bf1-4182-8bb4-229b9d5d06d6"
    //       },
    //       {
    //         "id": "8801bfa9-a899-4622-9e6a-bbbf17ad92fe",
    //         "term": "OCTINOXATE, OXYBENZONE, TITANIUM DIOXIDE",
    //         "definition": "Extended 24 hour paradigm",
    //         "created_at": "2019-12-20T23:39:15Z",
    //         "updated_at": "2019-04-28T19:25:52Z",
    //         "card_set_id": "5012f47f-5bf1-4182-8bb4-229b9d5d06d6"
    //       },
    //       {
    //         "id": "ebeb1a92-cf84-4702-8f5e-fdcdb90e7f38",
    //         "term": "Octinoxate and Titanium dioxide",
    //         "definition": "Synergized web-enabled functionalities",
    //         "created_at": "2019-09-15T00:30:14Z",
    //         "updated_at": "2019-07-09T23:28:36Z",
    //         "card_set_id": "5012f47f-5bf1-4182-8bb4-229b9d5d06d6"
    //       },
    //       {
    //         "id": "1facb8b7-6ce1-4e09-b2fd-29d3e4773704",
    //         "term": "Acetaminophen, Aspirin, Caffeine",
    //         "definition": "Sharable tangible array",
    //         "created_at": "2019-01-20T12:58:48Z",
    //         "updated_at": "2019-12-24T18:39:55Z",
    //         "card_set_id": "5012f47f-5bf1-4182-8bb4-229b9d5d06d6"
    //       },
    //       {
    //         "id": "728d6e65-5c9b-4b2e-9eec-2ef786a1dd5e",
    //         "term": "collagenase clostridium histolyticum",
    //         "definition": "Proactive analyzing knowledge user",
    //         "created_at": "2019-06-03T06:19:31Z",
    //         "updated_at": "2019-03-22T10:03:50Z",
    //         "card_set_id": "5012f47f-5bf1-4182-8bb4-229b9d5d06d6"
    //       },
    //       {
    //         "id": "76fb2f3f-e25c-444a-929c-3864b7d566c7",
    //         "term": "CLOTRIMAZOLE",
    //         "definition": "Multi-tiered cohesive installation",
    //         "created_at": "2019-11-08T06:08:21Z",
    //         "updated_at": "2019-08-19T23:05:04Z",
    //         "card_set_id": "5012f47f-5bf1-4182-8bb4-229b9d5d06d6"
    //       },
    //       {
    //         "id": "8df83de8-7440-4e9a-ba47-92a0712b3a0a",
    //         "term": "Acetaminophen",
    //         "definition": "Total local intranet",
    //         "created_at": "2019-02-17T03:09:05Z",
    //         "updated_at": "2019-03-04T16:59:34Z",
    //         "card_set_id": "5012f47f-5bf1-4182-8bb4-229b9d5d06d6"
    //       },
    //       {
    //         "id": "90ca966f-9407-4638-aead-e7ca5973b0bf",
    //         "term": "Famotidine",
    //         "definition": "Streamlined non-volatile leverage",
    //         "created_at": "2019-05-05T22:21:16Z",
    //         "updated_at": "2019-11-05T16:08:28Z",
    //         "card_set_id": "5012f47f-5bf1-4182-8bb4-229b9d5d06d6"
    //       },
    //       {
    //         "id": "638946bf-aa88-4499-87c4-b5909874ca27",
    //         "term": "Thrombin, topical (Recombinant)",
    //         "definition": "Ergonomic context-sensitive leverage",
    //         "created_at": "2019-08-14T01:46:00Z",
    //         "updated_at": "2019-04-07T23:59:55Z",
    //         "card_set_id": "5012f47f-5bf1-4182-8bb4-229b9d5d06d6"
    //       },
    //       {
    //         "id": "15c4b1de-c11f-4d8d-a097-e597ffbc89d5",
    //         "term": "Docusate sodium",
    //         "definition": "Enterprise-wide full-range matrices",
    //         "created_at": "2019-05-25T17:45:57Z",
    //         "updated_at": "2019-02-01T20:37:03Z",
    //         "card_set_id": "5012f47f-5bf1-4182-8bb4-229b9d5d06d6"
    //       },
    //       {
    //         "id": "6a17b4e8-4157-4344-9933-78c24e48ad79",
    //         "term": "Aluminum Zirconium Trichlorohydrex Gly",
    //         "definition": "Front-line contextually-based productivity",
    //         "created_at": "2019-09-14T14:06:10Z",
    //         "updated_at": "2019-05-06T13:29:19Z",
    //         "card_set_id": "5012f47f-5bf1-4182-8bb4-229b9d5d06d6"
    //       }
    //     ]
    //   );
    // });

