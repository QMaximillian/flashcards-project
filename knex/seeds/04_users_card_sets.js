
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users_card_sets').del()
    .then(function () {
  //     // Inserts seed entries
      return knex('users_card_sets').insert(
        [
          {
            "id": "056e1fbc-1afc-4a04-93a7-608bd7f9c626",
            "user_id": "cc92181f-50c6-4829-96fa-4d92563737c9",
            "card_set_id": "45e550b4-1649-45a4-9ddf-8cf059e50a0a",
            "creator_id": "cc92181f-50c6-4829-96fa-4d92563737c9",
            "last_seen_at": "2020-03-03T12:21:05Z",
            "last_studied_at": null
          },
          {
            "id": "05de4579-a980-48f0-b9f9-f16e94129ea0",
            "user_id": "6b460ac5-fc44-4270-8522-8ec90698b4a0",
            "card_set_id": "4410648e-7270-4112-93ba-9c33ec48fa56",
            "creator_id": "6b460ac5-fc44-4270-8522-8ec90698b4a0",
            "last_seen_at": "2020-02-29T21:57:44Z",
            "last_studied_at": "2020-02-29T21:57:48Z"
          },
          {
            "id": "15854f48-3ab0-43d8-ad6e-df0c151af9a9",
            "user_id": "cc92181f-50c6-4829-96fa-4d92563737c9",
            "card_set_id": "f2003d1b-f83c-46a6-a4e0-eed2cb3b1464",
            "creator_id": "cc92181f-50c6-4829-96fa-4d92563737c9",
            "last_seen_at": "2020-03-05T14:00:28Z",
            "last_studied_at": "2020-03-05T14:00:48Z"
          },
          {
            "id": "239954bc-26ba-4805-bf1b-9921edbb459e",
            "user_id": "cc92181f-50c6-4829-96fa-4d92563737c9",
            "card_set_id": "b12577e0-00ab-46a4-b5f7-ccd4f78d2539",
            "creator_id": "cc92181f-50c6-4829-96fa-4d92563737c9",
            "last_seen_at": "2020-03-05T14:17:14Z",
            "last_studied_at": null
          },
          {
            "id": "47bd6832-b2db-480b-a421-3da4ac770050",
            "user_id": "cc92181f-50c6-4829-96fa-4d92563737c9",
            "card_set_id": "05429f72-7a24-43c4-a313-11cc1e437432",
            "creator_id": "cc92181f-50c6-4829-96fa-4d92563737c9",
            "last_seen_at": "2020-03-03T11:29:20Z",
            "last_studied_at": null
          },
          {
            "id": "5713a7ad-22ef-4ea8-bca5-8341c0ffd8de",
            "user_id": "cc92181f-50c6-4829-96fa-4d92563737c9",
            "card_set_id": "b45a8b50-ed81-4570-bf40-edb42173611d",
            "creator_id": "cc92181f-50c6-4829-96fa-4d92563737c9",
            "last_seen_at": "2020-03-05T14:23:22Z",
            "last_studied_at": null
          },
          {
            "id": "7fb70f2e-948f-4dbb-8600-d075f822c6cd",
            "user_id": "cc92181f-50c6-4829-96fa-4d92563737c9",
            "card_set_id": "878b4e32-4ad5-49fd-9f99-82466c72067c",
            "creator_id": "cc92181f-50c6-4829-96fa-4d92563737c9",
            "last_seen_at": "2020-03-03T12:21:36Z",
            "last_studied_at": "2020-03-03T12:21:39Z"
          },
          {
            "id": "8874e165-6edc-4f17-9015-8a45ee982346",
            "user_id": "6edb9ba9-0f0c-4d23-9ce7-ba517afa4cca",
            "card_set_id": "6a079dbc-b855-4985-83ee-0071522de70c",
            "creator_id": "6edb9ba9-0f0c-4d23-9ce7-ba517afa4cca",
            "last_seen_at": "2020-03-04T20:22:07Z",
            "last_studied_at": null
          },
          {
            "id": "95682b64-dc57-4742-8b41-def6d2488bd8",
            "user_id": "6b460ac5-fc44-4270-8522-8ec90698b4a0",
            "card_set_id": "fb279999-0ca3-4751-921b-3451778f0da7",
            "creator_id": "6b460ac5-fc44-4270-8522-8ec90698b4a0",
            "last_seen_at": "2020-02-29T21:56:16Z",
            "last_studied_at": null
          },
          {
            "id": "a30a1a5c-d5b8-457a-91fe-6644cb1ee09e",
            "user_id": "cc92181f-50c6-4829-96fa-4d92563737c9",
            "card_set_id": "4410648e-7270-4112-93ba-9c33ec48fa56",
            "creator_id": "6b460ac5-fc44-4270-8522-8ec90698b4a0",
            "last_seen_at": "2020-03-04T18:24:48Z",
            "last_studied_at": null
          },
          {
            "id": "a89748ca-4241-40d3-9471-aca3b35c1efe",
            "user_id": "cc92181f-50c6-4829-96fa-4d92563737c9",
            "card_set_id": "e9fd6113-2dda-4bc1-aa01-9195f0b99c04",
            "creator_id": "cc92181f-50c6-4829-96fa-4d92563737c9",
            "last_seen_at": "2020-03-25T15:51:22Z",
            "last_studied_at": "2020-03-05T14:42:34Z"
          },
          {
            "id": "c3a6d236-e3fc-452e-89ab-94babfb8acc3",
            "user_id": "cc92181f-50c6-4829-96fa-4d92563737c9",
            "card_set_id": "415ffd0e-9f9c-4c5c-9662-713e0a277a15",
            "creator_id": "cc92181f-50c6-4829-96fa-4d92563737c9",
            "last_seen_at": "2020-03-03T12:19:48Z",
            "last_studied_at": "2020-03-02T19:44:17Z"
          },
          {
            "id": "dc0358d5-e33a-4229-80f9-5398e9021cd1",
            "user_id": "cc92181f-50c6-4829-96fa-4d92563737c9",
            "card_set_id": "51ef879c-aad7-4c8c-93f2-4b5ab9bd291f",
            "creator_id": "cc92181f-50c6-4829-96fa-4d92563737c9",
            "last_seen_at": "2020-03-04T18:23:40Z",
            "last_studied_at": null
          },
          {
            "id": "dd378742-15e8-4224-953e-fc825b572782",
            "user_id": "cc92181f-50c6-4829-96fa-4d92563737c9",
            "card_set_id": "89595680-3e3d-4d45-897d-99bb3603fb74",
            "creator_id": "cc92181f-50c6-4829-96fa-4d92563737c9",
            "last_seen_at": "2020-03-03T12:20:25Z",
            "last_studied_at": "2020-02-29T19:08:40Z"
          },
          {
            "id": "f46a3096-cf96-49f3-8e6f-aa12b61edd56",
            "user_id": "cc92181f-50c6-4829-96fa-4d92563737c9",
            "card_set_id": "c155569b-97f8-4032-bf38-6a315d916970",
            "creator_id": "cc92181f-50c6-4829-96fa-4d92563737c9",
            "last_seen_at": "2020-03-04T18:24:08Z",
            "last_studied_at": null
          },
          {
            "id": "f638a53b-3ad4-4706-abe1-37fd98f24fdb",
            "user_id": "6b460ac5-fc44-4270-8522-8ec90698b4a0",
            "card_set_id": "765ecdef-e061-4f11-bf62-4b9999ce09f1",
            "creator_id": "6b460ac5-fc44-4270-8522-8ec90698b4a0",
            "last_seen_at": "2020-02-29T21:56:14Z",
            "last_studied_at": null
          },
          {
            "id": "4a46243d-0b49-45ce-abae-9c387e5080c5",
            "user_id": "d5c549a2-91da-4cdf-9ec4-6c9f8e14b1da",
            "card_set_id": "e9bafe3c-ca98-4662-b033-81c024def5fe",
            "creator_id": "d5c549a2-91da-4cdf-9ec4-6c9f8e14b1da",
            "last_seen_at": "2020-01-08 01:00:03",
            "last_studied_at": "2020-01-08 01:00:03"
          },
          {
            "id": "c6c63e1c-58aa-4dab-a474-aa0f1d8e6c87",
            "user_id": "d5c549a2-91da-4cdf-9ec4-6c9f8e14b1da",
            "card_set_id": "c17df7aa-8b1b-44f3-b245-7214fa765453",
            "creator_id": "d5c549a2-91da-4cdf-9ec4-6c9f8e14b1da",
            "last_seen_at": "2019-12-17 06:35:08",
            "last_studied_at": "2019-12-17 06:35:08"
          },
          {
            "id": "31f458b2-0c8e-4dfa-b126-3c70d55ff8a2",
            "user_id": "d5c549a2-91da-4cdf-9ec4-6c9f8e14b1da",
            "card_set_id": "42c4fbc4-ea3d-415c-b3c6-67781c634584",
            "creator_id": "d5c549a2-91da-4cdf-9ec4-6c9f8e14b1da",
            "last_seen_at": "2020-04-13 03:15:39",
            "last_studied_at": "2020-04-13 03:15:39"
          },
          {
            "id": "b93e41f1-b73f-462d-a5b7-d659175aaa78",
            "user_id": "d5c549a2-91da-4cdf-9ec4-6c9f8e14b1da",
            "card_set_id": "e5fff633-b85e-4c14-820d-598d4d39b470",
            "creator_id": "d5c549a2-91da-4cdf-9ec4-6c9f8e14b1da",
            "last_seen_at": "2020-02-13 17:58:14",
            "last_studied_at": "2020-02-13 17:58:14"
          },
          {
            "id": "ee59b12f-edbd-439d-a7e4-aa4915792bbf",
            "user_id": "d5c549a2-91da-4cdf-9ec4-6c9f8e14b1da",
            "card_set_id": "59693989-01a0-41f0-b6b5-707e3cf75ea3",
            "creator_id": "d5c549a2-91da-4cdf-9ec4-6c9f8e14b1da",
            "last_seen_at": "2019-10-29 01:42:25",
            "last_studied_at": "2019-10-29 01:42:25"
          },
          {
            "id": "205d40ca-398a-4f8e-9afc-1fb277b51860",
            "user_id": "d5c549a2-91da-4cdf-9ec4-6c9f8e14b1da",
            "card_set_id": "efdda1a3-19f8-4023-9ebd-d134cad60e3c",
            "creator_id": "d5c549a2-91da-4cdf-9ec4-6c9f8e14b1da",
            "last_seen_at": "2020-03-07 00:38:37",
            "last_studied_at": "2020-03-07 00:38:37"
          },
          {
            "id": "a7ccb4b7-cdfb-4786-9990-d66b10357d4f",
            "user_id": "d5c549a2-91da-4cdf-9ec4-6c9f8e14b1da",
            "card_set_id": "5c9ecbc1-e5db-420d-9b64-e775caa10cd2",
            "creator_id": "d5c549a2-91da-4cdf-9ec4-6c9f8e14b1da",
            "last_seen_at": "2020-03-06 11:19:32",
            "last_studied_at": "2020-03-06 11:19:32"
          },
          {
            "id": "fc8b579c-b3e1-4eba-8bc3-fc1ff1983742",
            "user_id": "d5c549a2-91da-4cdf-9ec4-6c9f8e14b1da",
            "card_set_id": "a66a2a6a-b841-4afd-9885-a817cf30010a",
            "creator_id": "d5c549a2-91da-4cdf-9ec4-6c9f8e14b1da",
            "last_seen_at": "2019-11-04 07:21:48",
            "last_studied_at": "2019-11-04 07:21:48"
          },
          {
            "id": "87e22f3d-92ad-46a5-8598-3efbb41c6cc8",
            "user_id": "0af78e58-1c35-4b6c-9566-35eae5dd0f5d",
            "card_set_id": "f36004e2-b386-4583-a714-3c3fe7165566",
            "creator_id": "0af78e58-1c35-4b6c-9566-35eae5dd0f5d",
            "last_seen_at": "2020-02-08 03:55:12",
            "last_studied_at": "2020-02-08 03:55:12"
          },
          {
            "id": "9f1f7d11-6689-442a-8be9-57c16b6a0514",
            "user_id": "0af78e58-1c35-4b6c-9566-35eae5dd0f5d",
            "card_set_id": "62e40aff-9e4b-4781-b645-94ecd510b5eb",
            "creator_id": "0af78e58-1c35-4b6c-9566-35eae5dd0f5d",
            "last_seen_at": "2020-01-04 02:03:57",
            "last_studied_at": "2020-01-04 02:03:57"
          },
          {
            "id": "bb16010a-9734-4f0d-9c33-b1916ee743a2",
            "user_id": "0af78e58-1c35-4b6c-9566-35eae5dd0f5d",
            "card_set_id": "c4cdd60d-2dc3-47fa-be70-0cd467d2dbe1",
            "creator_id": "0af78e58-1c35-4b6c-9566-35eae5dd0f5d",
            "last_seen_at": "2020-01-05 20:48:09",
            "last_studied_at": "2020-01-05 20:48:09"
          },
          {
            "id": "eaf59448-c90a-428d-8215-c23334366ef2",
            "user_id": "0af78e58-1c35-4b6c-9566-35eae5dd0f5d",
            "card_set_id": "db2ed56e-cab8-4ab7-8c01-31e776920d71",
            "creator_id": "0af78e58-1c35-4b6c-9566-35eae5dd0f5d",
            "last_seen_at": "2020-04-04 08:02:07",
            "last_studied_at": "2020-04-04 08:02:07"
          },
          {
            "id": "4226df55-5b99-4753-abfe-00bf5a3f4509",
            "user_id": "0af78e58-1c35-4b6c-9566-35eae5dd0f5d",
            "card_set_id": "ae1802b0-5cf4-4c94-9bb4-d227ca3d44cf",
            "creator_id": "0af78e58-1c35-4b6c-9566-35eae5dd0f5d",
            "last_seen_at": "2019-11-21 12:20:26",
            "last_studied_at": "2019-11-21 12:20:26"
          },
          {
            "id": "ee4d2b65-3e3d-472c-ab99-521629129904",
            "user_id": "0af78e58-1c35-4b6c-9566-35eae5dd0f5d",
            "card_set_id": "7454cb59-744f-455a-b401-2e25e7679a8c",
            "creator_id": "0af78e58-1c35-4b6c-9566-35eae5dd0f5d",
            "last_seen_at": "2020-03-14 09:42:57",
            "last_studied_at": "2020-03-14 09:42:57"
          },
          {
            "id": "42c822fc-b4e7-40c0-ac52-0d288f131af4",
            "user_id": "0af78e58-1c35-4b6c-9566-35eae5dd0f5d",
            "card_set_id": "e6324e76-39b9-4eb0-b3be-89c438acee14",
            "creator_id": "0af78e58-1c35-4b6c-9566-35eae5dd0f5d",
            "last_seen_at": "2020-02-22 12:08:08",
            "last_studied_at": "2020-02-22 12:08:08"
          },
          {
            "id": "bbbe87cc-7537-4019-ab9f-406cbaad4aa6",
            "user_id": "0af78e58-1c35-4b6c-9566-35eae5dd0f5d",
            "card_set_id": "c8e680b0-6ebf-437d-b85d-03c5abb126bd",
            "creator_id": "0af78e58-1c35-4b6c-9566-35eae5dd0f5d",
            "last_seen_at": "2020-04-14 09:39:05",
            "last_studied_at": "2020-04-14 09:39:05"
          },
          {
            "id": "632d8d2b-106d-410b-b881-cdfcc7d16f0d",
            "user_id": "0af78e58-1c35-4b6c-9566-35eae5dd0f5d",
            "card_set_id": "9d4a1d96-e533-4ccc-b170-832bffbd69bc",
            "creator_id": "0af78e58-1c35-4b6c-9566-35eae5dd0f5d",
            "last_seen_at": "2020-01-26 19:35:48",
            "last_studied_at": "2020-01-26 19:35:48"
          },
          {
            "id": "57fe4b14-66d4-49e9-a51c-1eb163f4d747",
            "user_id": "0af78e58-1c35-4b6c-9566-35eae5dd0f5d",
            "card_set_id": "a8f58a5e-a10c-4257-8494-601e0bbdf488",
            "creator_id": "0af78e58-1c35-4b6c-9566-35eae5dd0f5d",
            "last_seen_at": "2019-11-14 01:13:03",
            "last_studied_at": "2019-11-14 01:13:03"
          },
          {
            "id": "f9fc7b91-29b4-4d9e-803b-a7eb1d0c32bd",
            "user_id": "0af78e58-1c35-4b6c-9566-35eae5dd0f5d",
            "card_set_id": "dcde9e7a-c331-4123-9afc-4224f3d21450",
            "creator_id": "0af78e58-1c35-4b6c-9566-35eae5dd0f5d",
            "last_seen_at": "2020-01-13 22:22:36",
            "last_studied_at": "2020-01-13 22:22:36"
          },
          {
            "id": "b2ee40ce-137b-4b75-b194-1b461fd7f728",
            "user_id": "0af78e58-1c35-4b6c-9566-35eae5dd0f5d",
            "card_set_id": "730e5755-30ea-4215-900c-be4e67e9e5d6",
            "creator_id": "0af78e58-1c35-4b6c-9566-35eae5dd0f5d",
            "last_seen_at": "2019-12-22 06:15:22",
            "last_studied_at": "2019-12-22 06:15:22"
          },
          {
            "id": "f1fecc87-f1d6-416a-b239-7273f3441aa2",
            "user_id": "c76e0d4e-c6ad-4db3-8703-bd00c41b4621",
            "card_set_id": "de3f5e21-74d7-446f-807e-003517ca24ea",
            "creator_id": "c76e0d4e-c6ad-4db3-8703-bd00c41b4621",
            "last_seen_at": "2019-12-31 02:24:32",
            "last_studied_at": "2019-12-31 02:24:32"
          },
          {
            "id": "1b5ed3b3-205e-4ed3-a2a5-d2776a7a1d6d",
            "user_id": "c76e0d4e-c6ad-4db3-8703-bd00c41b4621",
            "card_set_id": "4db4cc0b-8657-40cd-85c5-bee21e769a5a",
            "creator_id": "c76e0d4e-c6ad-4db3-8703-bd00c41b4621",
            "last_seen_at": "2020-01-12 00:07:03",
            "last_studied_at": "2020-01-12 00:07:03"
          },
          {
            "id": "283e20b0-0e91-4c30-ac0f-0e3625ee05c5",
            "user_id": "c76e0d4e-c6ad-4db3-8703-bd00c41b4621",
            "card_set_id": "c50f276d-493f-4141-8d3a-85b2bd84e427",
            "creator_id": "c76e0d4e-c6ad-4db3-8703-bd00c41b4621",
            "last_seen_at": "2019-11-30 16:10:18",
            "last_studied_at": "2019-11-30 16:10:18"
          },
          {
            "id": "546aa937-ac2b-48c9-b781-5248503c93bb",
            "user_id": "c76e0d4e-c6ad-4db3-8703-bd00c41b4621",
            "card_set_id": "c59d4060-fa10-4b68-a867-c9e44af30679",
            "creator_id": "c76e0d4e-c6ad-4db3-8703-bd00c41b4621",
            "last_seen_at": "2020-01-09 21:18:04",
            "last_studied_at": "2020-01-09 21:18:04"
          },
          {
            "id": "24242cdb-08d2-46e6-9da2-1193f3404e6a",
            "user_id": "c76e0d4e-c6ad-4db3-8703-bd00c41b4621",
            "card_set_id": "000c77ab-abdf-4c55-a4f8-deee3455005e",
            "creator_id": "c76e0d4e-c6ad-4db3-8703-bd00c41b4621",
            "last_seen_at": "2019-12-27 10:46:40",
            "last_studied_at": "2019-12-27 10:46:40"
          },
          {
            "id": "573a96e1-9993-44c1-8ecb-f7565bef57a6",
            "user_id": "c76e0d4e-c6ad-4db3-8703-bd00c41b4621",
            "card_set_id": "683f7623-f1e5-4cdf-abaa-5d8d674a16ab",
            "creator_id": "c76e0d4e-c6ad-4db3-8703-bd00c41b4621",
            "last_seen_at": "2019-10-12 01:50:48",
            "last_studied_at": "2019-10-12 01:50:48"
          },
          {
            "id": "8abdd916-0911-4f78-a45b-845c3454099c",
            "user_id": "c76e0d4e-c6ad-4db3-8703-bd00c41b4621",
            "card_set_id": "2f6b3e77-8a02-4aaa-934e-986d82bae904",
            "creator_id": "c76e0d4e-c6ad-4db3-8703-bd00c41b4621",
            "last_seen_at": "2019-11-18 15:49:33",
            "last_studied_at": "2019-11-18 15:49:33"
          },
          {
            "id": "fe1452ff-a685-4033-bc24-246db0b997b4",
            "user_id": "c76e0d4e-c6ad-4db3-8703-bd00c41b4621",
            "card_set_id": "b13eb8fd-c2c2-4ad0-b874-c294bcf5e8f6",
            "creator_id": "c76e0d4e-c6ad-4db3-8703-bd00c41b4621",
            "last_seen_at": "2020-01-12 13:53:05",
            "last_studied_at": "2020-01-12 13:53:05"
          },
          {
            "id": "abcfddf4-5d34-4277-b4f7-c6d354591048",
            "user_id": "c76e0d4e-c6ad-4db3-8703-bd00c41b4621",
            "card_set_id": "52bdaec0-9802-49e6-80b6-afddbff57b24",
            "creator_id": "c76e0d4e-c6ad-4db3-8703-bd00c41b4621",
            "last_seen_at": "2020-04-13 22:37:05",
            "last_studied_at": "2020-04-13 22:37:05"
          },
          {
            "id": "834ff179-4711-4c84-8b0f-9b29deda89df",
            "user_id": "c76e0d4e-c6ad-4db3-8703-bd00c41b4621",
            "card_set_id": "634c06f9-dd83-4c16-8aa0-63f00651ad43",
            "creator_id": "c76e0d4e-c6ad-4db3-8703-bd00c41b4621",
            "last_seen_at": "2019-10-16 06:46:00",
            "last_studied_at": "2019-10-16 06:46:00"
          },
          {
            "id": "04161627-be7a-4052-93c3-a950d389d606",
            "user_id": "966ac95d-3423-41bd-95fd-3535884c4a13",
            "card_set_id": "eb914c3c-6ffe-42a9-b1e0-f4868aa9e5e2",
            "creator_id": "966ac95d-3423-41bd-95fd-3535884c4a13",
            "last_seen_at": "2020-02-09 21:42:33",
            "last_studied_at": "2020-02-09 21:42:33"
          },
          {
            "id": "96f8c663-5d0b-4b04-9314-fa7f897c3746",
            "user_id": "966ac95d-3423-41bd-95fd-3535884c4a13",
            "card_set_id": "d72422ad-09d2-4e79-89da-b16065ef6a08",
            "creator_id": "966ac95d-3423-41bd-95fd-3535884c4a13",
            "last_seen_at": "2019-11-07 00:20:31",
            "last_studied_at": "2019-11-07 00:20:31"
          },
          {
            "id": "0e492332-3357-4b97-97cc-71f1647ef5a2",
            "user_id": "966ac95d-3423-41bd-95fd-3535884c4a13",
            "card_set_id": "54d87c3a-0cd0-4bc0-b590-6342b7762b89",
            "creator_id": "966ac95d-3423-41bd-95fd-3535884c4a13",
            "last_seen_at": "2020-04-12 12:42:24",
            "last_studied_at": "2020-04-12 12:42:24"
          },
          {
            "id": "036fab4f-a093-463e-99a7-8a2ddbb718d6",
            "user_id": "966ac95d-3423-41bd-95fd-3535884c4a13",
            "card_set_id": "a70bd679-797a-4ce4-817f-19dc560e3635",
            "creator_id": "966ac95d-3423-41bd-95fd-3535884c4a13",
            "last_seen_at": "2020-02-27 09:53:12",
            "last_studied_at": "2020-02-27 09:53:12"
          },
          {
            "id": "f856319e-da4b-49c0-8834-1400b841fe7d",
            "user_id": "966ac95d-3423-41bd-95fd-3535884c4a13",
            "card_set_id": "eb33bf37-d598-4041-bdb0-6c62d20fd966",
            "creator_id": "966ac95d-3423-41bd-95fd-3535884c4a13",
            "last_seen_at": "2019-10-11 18:24:56",
            "last_studied_at": "2019-10-11 18:24:56"
          },
          {
            "id": "571c4f97-0848-44c9-ab0d-80f0f8694a41",
            "user_id": "966ac95d-3423-41bd-95fd-3535884c4a13",
            "card_set_id": "08ace67f-386a-4f43-be18-3dfa585c6151",
            "creator_id": "966ac95d-3423-41bd-95fd-3535884c4a13",
            "last_seen_at": "2020-01-04 08:46:00",
            "last_studied_at": "2020-01-04 08:46:00"
          },
          {
            "id": "8559960e-d5f0-4448-816c-bb5d53b9bdfc",
            "user_id": "966ac95d-3423-41bd-95fd-3535884c4a13",
            "card_set_id": "fa1b1021-af46-44a3-8e46-1fb29096546c",
            "creator_id": "966ac95d-3423-41bd-95fd-3535884c4a13",
            "last_seen_at": "2020-01-19 06:14:12",
            "last_studied_at": "2020-01-19 06:14:12"
          },
          {
            "id": "574af732-7cb3-43c1-9c2c-7414306ee24d",
            "user_id": "966ac95d-3423-41bd-95fd-3535884c4a13",
            "card_set_id": "340ab28a-5d86-46d1-8fb3-56580b2ef891",
            "creator_id": "966ac95d-3423-41bd-95fd-3535884c4a13",
            "last_seen_at": "2019-11-25 07:44:04",
            "last_studied_at": "2019-11-25 07:44:04"
          },
          {
            "id": "e3bfb705-f659-450c-8024-bd16946fc6b8",
            "user_id": "966ac95d-3423-41bd-95fd-3535884c4a13",
            "card_set_id": "10423862-8151-4060-862e-189ba0fb0698",
            "creator_id": "966ac95d-3423-41bd-95fd-3535884c4a13",
            "last_seen_at": "2020-01-08 02:09:41",
            "last_studied_at": "2020-01-08 02:09:41"
          },
          {
            "id": "6c02bb92-2349-4793-be59-ac7bf3a48c13",
            "user_id": "966ac95d-3423-41bd-95fd-3535884c4a13",
            "card_set_id": "c1821919-0206-4b61-a9db-cf0738af2311",
            "creator_id": "966ac95d-3423-41bd-95fd-3535884c4a13",
            "last_seen_at": "2019-12-15 14:20:05",
            "last_studied_at": "2019-12-15 14:20:05"
          },
          {
            "id": "6824c2a5-353a-4e65-a372-a84cf69dfbe1",
            "user_id": "966ac95d-3423-41bd-95fd-3535884c4a13",
            "card_set_id": "659fb496-768f-4ac0-9971-aff5c4c74ebe",
            "creator_id": "966ac95d-3423-41bd-95fd-3535884c4a13",
            "last_seen_at": "2020-02-08 15:44:02",
            "last_studied_at": "2020-02-08 15:44:02"
          },
          {
            "id": "ce141f71-11af-47d4-8f23-bc9b16c3310d",
            "user_id": "966ac95d-3423-41bd-95fd-3535884c4a13",
            "card_set_id": "34286a4c-be89-4635-b33e-b79c8d2f6503",
            "creator_id": "966ac95d-3423-41bd-95fd-3535884c4a13",
            "last_seen_at": "2020-02-27 14:40:20",
            "last_studied_at": "2020-02-27 14:40:20"
          },
          {
            "id": "6c907b3d-eb9f-44ac-9c7a-285af7e6ad28",
            "user_id": "966ac95d-3423-41bd-95fd-3535884c4a13",
            "card_set_id": "41399440-3ffc-4515-aee8-19f11cece991",
            "creator_id": "966ac95d-3423-41bd-95fd-3535884c4a13",
            "last_seen_at": "2020-01-29 12:13:46",
            "last_studied_at": "2020-01-29 12:13:46"
          },
          {
            "id": "ec1a94c1-4ecc-4ade-8b85-451642568cae",
            "user_id": "966ac95d-3423-41bd-95fd-3535884c4a13",
            "card_set_id": "d206f360-640d-45c1-aa91-5dcff7ac6f5c",
            "creator_id": "966ac95d-3423-41bd-95fd-3535884c4a13",
            "last_seen_at": "2019-10-15 01:01:54",
            "last_studied_at": "2019-10-15 01:01:54"
          },
          {
            "id": "d540c321-0364-4a76-9935-f16ca7ed747a",
            "user_id": "966ac95d-3423-41bd-95fd-3535884c4a13",
            "card_set_id": "2ad9f504-dd79-44f9-aa07-9d63a1cffaae",
            "creator_id": "966ac95d-3423-41bd-95fd-3535884c4a13",
            "last_seen_at": "2020-03-06 05:45:46",
            "last_studied_at": "2020-03-06 05:45:46"
          },
          {
            "id": "9c3db089-b93a-4e73-9d83-22c41eeda22d",
            "user_id": "966ac95d-3423-41bd-95fd-3535884c4a13",
            "card_set_id": "99973683-ab92-4fad-bf31-e174a1f501b1",
            "creator_id": "966ac95d-3423-41bd-95fd-3535884c4a13",
            "last_seen_at": "2020-01-20 11:25:37",
            "last_studied_at": "2020-01-20 11:25:37"
          },
          {
            "id": "31c0ed41-b4a2-494c-ba79-177bbd363c0d",
            "user_id": "a30c1ec4-c64d-481e-bf3f-26bed11d5fdd",
            "card_set_id": "dc22fa58-ec15-4844-b2d6-3d9506b45efe",
            "creator_id": "a30c1ec4-c64d-481e-bf3f-26bed11d5fdd",
            "last_seen_at": "2020-01-17 06:52:27",
            "last_studied_at": "2020-01-17 06:52:27"
          },
          {
            "id": "dd303367-8b6d-4de2-a99b-a1d7f7d78959",
            "user_id": "a30c1ec4-c64d-481e-bf3f-26bed11d5fdd",
            "card_set_id": "200c015d-79e1-4931-a2a3-c208c7648168",
            "creator_id": "a30c1ec4-c64d-481e-bf3f-26bed11d5fdd",
            "last_seen_at": "2020-04-20 10:24:33",
            "last_studied_at": "2020-04-20 10:24:33"
          },
          {
            "id": "4da09da3-dbaa-45f7-b96d-bc4fa5d0be8f",
            "user_id": "a30c1ec4-c64d-481e-bf3f-26bed11d5fdd",
            "card_set_id": "be86a71f-54b0-44d8-a7ff-463ff285daaa",
            "creator_id": "a30c1ec4-c64d-481e-bf3f-26bed11d5fdd",
            "last_seen_at": "2020-04-05 22:47:57",
            "last_studied_at": "2020-04-05 22:47:57"
          },
          {
            "id": "de38b370-0b1c-4c1a-b249-3daf4471bda6",
            "user_id": "a30c1ec4-c64d-481e-bf3f-26bed11d5fdd",
            "card_set_id": "d69d4755-638a-45f7-8fdd-70ed324398c3",
            "creator_id": "a30c1ec4-c64d-481e-bf3f-26bed11d5fdd",
            "last_seen_at": "2019-12-11 18:33:45",
            "last_studied_at": "2019-12-11 18:33:45"
          },
          {
            "id": "9d01f2b2-5358-46ed-89cb-90610fc8449a",
            "user_id": "a30c1ec4-c64d-481e-bf3f-26bed11d5fdd",
            "card_set_id": "cccf225b-e0b0-4e37-ab54-e41fa30b4356",
            "creator_id": "a30c1ec4-c64d-481e-bf3f-26bed11d5fdd",
            "last_seen_at": "2020-01-22 06:42:55",
            "last_studied_at": "2020-01-22 06:42:55"
          },
          {
            "id": "57d33b4d-491a-4180-80a4-eea1a59b9d85",
            "user_id": "a30c1ec4-c64d-481e-bf3f-26bed11d5fdd",
            "card_set_id": "4f99612b-d356-4aec-a4f1-e777493f7669",
            "creator_id": "a30c1ec4-c64d-481e-bf3f-26bed11d5fdd",
            "last_seen_at": "2020-01-05 06:07:24",
            "last_studied_at": "2020-01-05 06:07:24"
          },
          {
            "id": "ca052d22-c43d-4394-bc43-d0643134aa9f",
            "user_id": "a30c1ec4-c64d-481e-bf3f-26bed11d5fdd",
            "card_set_id": "b20bc812-6a80-4b95-90cc-58d4dc49c08c",
            "creator_id": "a30c1ec4-c64d-481e-bf3f-26bed11d5fdd",
            "last_seen_at": "2019-10-23 00:18:06",
            "last_studied_at": "2019-10-23 00:18:06"
          },
          {
            "id": "29ab735e-4072-4011-b5b3-dbe54603a747",
            "user_id": "a30c1ec4-c64d-481e-bf3f-26bed11d5fdd",
            "card_set_id": "1416242c-cd69-4148-b367-31720821ad9f",
            "creator_id": "a30c1ec4-c64d-481e-bf3f-26bed11d5fdd",
            "last_seen_at": "2020-01-18 23:42:58",
            "last_studied_at": "2020-01-18 23:42:58"
          },
          {
            "id": "c4888933-16c0-4093-a958-8e865877898f",
            "user_id": "a30c1ec4-c64d-481e-bf3f-26bed11d5fdd",
            "card_set_id": "5818799c-1b01-4d74-84eb-8cd0a500dcbe",
            "creator_id": "a30c1ec4-c64d-481e-bf3f-26bed11d5fdd",
            "last_seen_at": "2020-02-01 21:10:57",
            "last_studied_at": "2020-02-01 21:10:57"
          },
          {
            "id": "a23ee11c-b38d-4dcc-9a0e-b14a1559263c",
            "user_id": "a30c1ec4-c64d-481e-bf3f-26bed11d5fdd",
            "card_set_id": "d144ac67-df32-4a3d-9d75-38cff9b306c8",
            "creator_id": "a30c1ec4-c64d-481e-bf3f-26bed11d5fdd",
            "last_seen_at": "2020-03-18 17:40:56",
            "last_studied_at": "2020-03-18 17:40:56"
          },
          {
            "id": "54d93aa0-c626-4e1d-972c-cc4f2861e1b2",
            "user_id": "a30c1ec4-c64d-481e-bf3f-26bed11d5fdd",
            "card_set_id": "58656edd-5912-4aeb-8412-072bf216cc03",
            "creator_id": "a30c1ec4-c64d-481e-bf3f-26bed11d5fdd",
            "last_seen_at": "2019-11-09 11:37:39",
            "last_studied_at": "2019-11-09 11:37:39"
          },
          {
            "id": "ac3bcad8-a62d-4abe-bbb6-36af7d5cd1b8",
            "user_id": "a30c1ec4-c64d-481e-bf3f-26bed11d5fdd",
            "card_set_id": "8df88544-cbb7-48f3-89aa-a90b8bb5e267",
            "creator_id": "a30c1ec4-c64d-481e-bf3f-26bed11d5fdd",
            "last_seen_at": "2020-02-06 01:17:04",
            "last_studied_at": "2020-02-06 01:17:04"
          },
          {
            "id": "4a6761a1-7d7b-403c-bf44-d3d392449c8d",
            "user_id": "a30c1ec4-c64d-481e-bf3f-26bed11d5fdd",
            "card_set_id": "ad166cc1-f931-475c-9a5c-d0f645c6d607",
            "creator_id": "a30c1ec4-c64d-481e-bf3f-26bed11d5fdd",
            "last_seen_at": "2019-11-15 16:53:43",
            "last_studied_at": "2019-11-15 16:53:43"
          },
          {
            "id": "ad6aabb9-9bee-4468-be62-ebe1d54a67b7",
            "user_id": "a30c1ec4-c64d-481e-bf3f-26bed11d5fdd",
            "card_set_id": "b2248dbb-a783-4e98-86f2-e325ab7d01b5",
            "creator_id": "a30c1ec4-c64d-481e-bf3f-26bed11d5fdd",
            "last_seen_at": "2019-10-09 10:11:36",
            "last_studied_at": "2019-10-09 10:11:36"
          },
          {
            "id": "992a41c0-3637-45d3-8de7-d0bb3818e725",
            "user_id": "a30c1ec4-c64d-481e-bf3f-26bed11d5fdd",
            "card_set_id": "c34bb803-5b6f-40e1-90dd-61fb64013108",
            "creator_id": "a30c1ec4-c64d-481e-bf3f-26bed11d5fdd",
            "last_seen_at": "2019-12-20 13:00:59",
            "last_studied_at": "2019-12-20 13:00:59"
          },
          {
            "id": "41f40404-2c24-477c-be21-782961a443b3",
            "user_id": "a30c1ec4-c64d-481e-bf3f-26bed11d5fdd",
            "card_set_id": "9eefed97-6524-4daf-8c9f-5d9bac7e6ebe",
            "creator_id": "a30c1ec4-c64d-481e-bf3f-26bed11d5fdd",
            "last_seen_at": "2019-11-18 12:09:55",
            "last_studied_at": "2019-11-18 12:09:55"
          },
          {
            "id": "c19880db-950a-4f45-b09c-da23305a4a12",
            "user_id": "a30c1ec4-c64d-481e-bf3f-26bed11d5fdd",
            "card_set_id": "c595dabb-0846-4984-b0ee-82b4af9ac389",
            "creator_id": "a30c1ec4-c64d-481e-bf3f-26bed11d5fdd",
            "last_seen_at": "2019-11-17 18:45:21",
            "last_studied_at": "2019-11-17 18:45:21"
          },
          {
            "id": "8706c758-50e7-4593-81da-46694af36126",
            "user_id": "a30c1ec4-c64d-481e-bf3f-26bed11d5fdd",
            "card_set_id": "e5efd8d4-810a-42aa-9ae2-67bed775aace",
            "creator_id": "a30c1ec4-c64d-481e-bf3f-26bed11d5fdd",
            "last_seen_at": "2020-02-12 13:36:36",
            "last_studied_at": "2020-02-12 13:36:36"
          },
          {
            "id": "32bfb82f-dae4-4444-856d-0b42d53a7ada",
            "user_id": "a30c1ec4-c64d-481e-bf3f-26bed11d5fdd",
            "card_set_id": "4281940c-39d1-4b62-aa0a-0e1a4c2337be",
            "creator_id": "a30c1ec4-c64d-481e-bf3f-26bed11d5fdd",
            "last_seen_at": "2020-04-02 05:29:25",
            "last_studied_at": "2020-04-02 05:29:25"
          },
          {
            "id": "b28020cc-2fc0-42bc-8657-faf7b517694b",
            "user_id": "a30c1ec4-c64d-481e-bf3f-26bed11d5fdd",
            "card_set_id": "71ef1bef-05b1-4137-9df0-686132839414",
            "creator_id": "a30c1ec4-c64d-481e-bf3f-26bed11d5fdd",
            "last_seen_at": "2019-11-14 04:00:37",
            "last_studied_at": "2019-11-14 04:00:37"
          },
          {
            "id": "8726ecb4-3101-4c48-b05c-35adeaaf54b7",
            "user_id": "a30c1ec4-c64d-481e-bf3f-26bed11d5fdd",
            "card_set_id": "6ba80e05-be98-40e0-8d99-d6e3131a51c3",
            "creator_id": "a30c1ec4-c64d-481e-bf3f-26bed11d5fdd",
            "last_seen_at": "2019-11-09 21:51:57",
            "last_studied_at": "2019-11-09 21:51:57"
          },
          {
            "id": "56261763-d4b3-4665-bcb6-f2f5e1249b02",
            "user_id": "a30c1ec4-c64d-481e-bf3f-26bed11d5fdd",
            "card_set_id": "ff332c82-254f-4db2-b330-5ad22ca433fa",
            "creator_id": "a30c1ec4-c64d-481e-bf3f-26bed11d5fdd",
            "last_seen_at": "2019-12-13 09:24:55",
            "last_studied_at": "2019-12-13 09:24:55"
          },
          {
            "id": "9803f22d-1629-4f12-bda8-7f7f96d83f53",
            "user_id": "a30c1ec4-c64d-481e-bf3f-26bed11d5fdd",
            "card_set_id": "37c95675-0dea-4b6d-8fe9-14b4ec60160b",
            "creator_id": "a30c1ec4-c64d-481e-bf3f-26bed11d5fdd",
            "last_seen_at": "2020-03-09 21:10:45",
            "last_studied_at": "2020-03-09 21:10:45"
          },
          {
            "id": "5fa5a95e-18a4-4347-a860-3fe7038b2b10",
            "user_id": "a30c1ec4-c64d-481e-bf3f-26bed11d5fdd",
            "card_set_id": "4880e36a-6006-4375-8903-85914636ef9c",
            "creator_id": "a30c1ec4-c64d-481e-bf3f-26bed11d5fdd",
            "last_seen_at": "2020-01-29 02:56:45",
            "last_studied_at": "2020-01-29 02:56:45"
          },
          {
            "id": "3c78533e-2833-47b1-9c28-5210b3b4892d",
            "user_id": "a30c1ec4-c64d-481e-bf3f-26bed11d5fdd",
            "card_set_id": "607dc481-94d2-4292-a8ef-779134a74782",
            "creator_id": "a30c1ec4-c64d-481e-bf3f-26bed11d5fdd",
            "last_seen_at": "2020-02-17 05:59:35",
            "last_studied_at": "2020-02-17 05:59:35"
          },
          {
            "id": "4840f4f4-8cb3-40e0-b69c-6bab290226ae",
            "user_id": "a30c1ec4-c64d-481e-bf3f-26bed11d5fdd",
            "card_set_id": "eb8d94c5-f62d-443a-8a75-fc0460807a4c",
            "creator_id": "a30c1ec4-c64d-481e-bf3f-26bed11d5fdd",
            "last_seen_at": "2019-10-08 11:55:35",
            "last_studied_at": "2019-10-08 11:55:35"
          },
          {
            "id": "f38cbe0b-27f5-44dc-b2b1-0b322c4f1985",
            "user_id": "80360faf-81de-410e-a9e9-d9c6f37bb9b7",
            "card_set_id": "31d0444c-b2d2-49dc-a05d-7303fb3abbc5",
            "creator_id": "80360faf-81de-410e-a9e9-d9c6f37bb9b7",
            "last_seen_at": "2019-12-15 17:17:03",
            "last_studied_at": "2019-12-15 17:17:03"
          },
          {
            "id": "356ab6b3-12ce-4c77-bbe2-020008201e68",
            "user_id": "80360faf-81de-410e-a9e9-d9c6f37bb9b7",
            "card_set_id": "a6e853a9-8757-48fa-9342-fe8e85b15b00",
            "creator_id": "80360faf-81de-410e-a9e9-d9c6f37bb9b7",
            "last_seen_at": "2019-12-26 17:45:42",
            "last_studied_at": "2019-12-26 17:45:42"
          },
          {
            "id": "8e86bb18-dbcc-47e1-8464-c98c7f1bcd95",
            "user_id": "80360faf-81de-410e-a9e9-d9c6f37bb9b7",
            "card_set_id": "199f44e1-6393-45ab-bace-600eb2f30ba6",
            "creator_id": "80360faf-81de-410e-a9e9-d9c6f37bb9b7",
            "last_seen_at": "2020-04-12 21:48:24",
            "last_studied_at": "2020-04-12 21:48:24"
          },
          {
            "id": "095ae0c0-94a8-44c1-9a22-e6085739d183",
            "user_id": "80360faf-81de-410e-a9e9-d9c6f37bb9b7",
            "card_set_id": "57cdd2d5-ea5d-4f9f-9911-b8a5038babbe",
            "creator_id": "80360faf-81de-410e-a9e9-d9c6f37bb9b7",
            "last_seen_at": "2020-02-24 10:41:54",
            "last_studied_at": "2020-02-24 10:41:54"
          },
          {
            "id": "6850a7d6-e689-4220-a428-2240ee1b0909",
            "user_id": "80360faf-81de-410e-a9e9-d9c6f37bb9b7",
            "card_set_id": "7fa41313-9a6f-4963-b6ec-dbb671df6f39",
            "creator_id": "80360faf-81de-410e-a9e9-d9c6f37bb9b7",
            "last_seen_at": "2020-04-07 22:49:39",
            "last_studied_at": "2020-04-07 22:49:39"
          },
          {
            "id": "0d4496bf-671e-444f-984d-90477eacc0cd",
            "user_id": "80360faf-81de-410e-a9e9-d9c6f37bb9b7",
            "card_set_id": "fbb02237-2cfb-4c8a-98e0-2476c5c30e94",
            "creator_id": "80360faf-81de-410e-a9e9-d9c6f37bb9b7",
            "last_seen_at": "2020-03-25 07:02:14",
            "last_studied_at": "2020-03-25 07:02:14"
          },
          {
            "id": "64f8b9a1-c229-4477-a931-88222b3d8705",
            "user_id": "80360faf-81de-410e-a9e9-d9c6f37bb9b7",
            "card_set_id": "ada2c1cc-b6a9-4eaf-97c7-cb8600ab32db",
            "creator_id": "80360faf-81de-410e-a9e9-d9c6f37bb9b7",
            "last_seen_at": "2019-11-06 21:13:13",
            "last_studied_at": "2019-11-06 21:13:13"
          },
          {
            "id": "50277141-b2d8-4ad1-b88b-d856cfaabef2",
            "user_id": "80360faf-81de-410e-a9e9-d9c6f37bb9b7",
            "card_set_id": "b9c202fb-cc66-40a5-92f8-7eac1b727948",
            "creator_id": "80360faf-81de-410e-a9e9-d9c6f37bb9b7",
            "last_seen_at": "2019-12-11 07:25:29",
            "last_studied_at": "2019-12-11 07:25:29"
          },
          {
            "id": "63ce9a8f-023b-4a66-8f6a-a2e274e26259",
            "user_id": "80360faf-81de-410e-a9e9-d9c6f37bb9b7",
            "card_set_id": "8cb07449-1724-47b8-8fc0-8a82d867236d",
            "creator_id": "80360faf-81de-410e-a9e9-d9c6f37bb9b7",
            "last_seen_at": "2020-01-06 17:33:34",
            "last_studied_at": "2020-01-06 17:33:34"
          },
          {
            "id": "71c43116-0803-40af-92ea-5fafa46817e6",
            "user_id": "80360faf-81de-410e-a9e9-d9c6f37bb9b7",
            "card_set_id": "e9e0f26d-a9dd-44fc-b744-eef2df95ae9d",
            "creator_id": "80360faf-81de-410e-a9e9-d9c6f37bb9b7",
            "last_seen_at": "2019-12-24 08:40:31",
            "last_studied_at": "2019-12-24 08:40:31"
          },
          {
            "id": "f9580045-98de-44ba-912c-22bfdc078fed",
            "user_id": "80360faf-81de-410e-a9e9-d9c6f37bb9b7",
            "card_set_id": "5d3946a8-1545-4ba4-9ca7-4111b98fca76",
            "creator_id": "80360faf-81de-410e-a9e9-d9c6f37bb9b7",
            "last_seen_at": "2019-12-08 01:41:54",
            "last_studied_at": "2019-12-08 01:41:54"
          },
          {
            "id": "cfd9d391-cfdb-4d56-8a18-6d680ab6a4a2",
            "user_id": "80360faf-81de-410e-a9e9-d9c6f37bb9b7",
            "card_set_id": "487cffa7-6241-49b4-90f3-c3d290c6a3c8",
            "creator_id": "80360faf-81de-410e-a9e9-d9c6f37bb9b7",
            "last_seen_at": "2020-01-24 01:43:02",
            "last_studied_at": "2020-01-24 01:43:02"
          },
          {
            "id": "2679d00a-9dcb-4900-ba61-31df12213863",
            "user_id": "80360faf-81de-410e-a9e9-d9c6f37bb9b7",
            "card_set_id": "331b13ca-f1c3-427d-9ee3-c9d1879fdd67",
            "creator_id": "80360faf-81de-410e-a9e9-d9c6f37bb9b7",
            "last_seen_at": "2020-02-24 09:36:41",
            "last_studied_at": "2020-02-24 09:36:41"
          },
          {
            "id": "981705e0-3120-4683-81f1-22008ef65b9d",
            "user_id": "80360faf-81de-410e-a9e9-d9c6f37bb9b7",
            "card_set_id": "1d06b953-7117-40fc-88f9-a20c894ed910",
            "creator_id": "80360faf-81de-410e-a9e9-d9c6f37bb9b7",
            "last_seen_at": "2020-03-06 20:37:47",
            "last_studied_at": "2020-03-06 20:37:47"
          },
          {
            "id": "3d9e0a09-2e56-4eec-a3c4-3c36d3c2a2e0",
            "user_id": "80360faf-81de-410e-a9e9-d9c6f37bb9b7",
            "card_set_id": "94605fef-fc5d-4fa2-8805-cf2c10f77466",
            "creator_id": "80360faf-81de-410e-a9e9-d9c6f37bb9b7",
            "last_seen_at": "2020-03-07 14:06:27",
            "last_studied_at": "2020-03-07 14:06:27"
          },
          {
            "id": "02fd2f1d-d6c5-4f46-bea3-105b1886498d",
            "user_id": "80360faf-81de-410e-a9e9-d9c6f37bb9b7",
            "card_set_id": "17c6110a-2879-4e02-b7b8-a722222fb19e",
            "creator_id": "80360faf-81de-410e-a9e9-d9c6f37bb9b7",
            "last_seen_at": "2019-11-03 11:01:55",
            "last_studied_at": "2019-11-03 11:01:55"
          },
          {
            "id": "7bc88c80-cde4-4b09-a2f5-1c739bccb954",
            "user_id": "80360faf-81de-410e-a9e9-d9c6f37bb9b7",
            "card_set_id": "3f143f05-06b9-4678-b5ba-eb8e901a6dd0",
            "creator_id": "80360faf-81de-410e-a9e9-d9c6f37bb9b7",
            "last_seen_at": "2019-11-10 20:05:29",
            "last_studied_at": "2019-11-10 20:05:29"
          },
          {
            "id": "2be263a0-708d-4c37-9947-cb802a72d128",
            "user_id": "80360faf-81de-410e-a9e9-d9c6f37bb9b7",
            "card_set_id": "7456ce86-abb0-4d4a-8e3c-5c89648e3e1b",
            "creator_id": "80360faf-81de-410e-a9e9-d9c6f37bb9b7",
            "last_seen_at": "2020-02-09 04:01:31",
            "last_studied_at": "2020-02-09 04:01:31"
          },
          {
            "id": "89ab855f-3bf8-44c5-802c-638f0ae212e7",
            "user_id": "e00ba377-f377-4f1f-b5bd-d9ad80a7aff2",
            "card_set_id": "de332741-c0ba-49ca-9ef6-5c9d16422c09",
            "creator_id": "e00ba377-f377-4f1f-b5bd-d9ad80a7aff2",
            "last_seen_at": "2020-02-29 01:08:56",
            "last_studied_at": "2020-02-29 01:08:56"
          },
          {
            "id": "93b1d0d0-bee0-4ceb-92e1-e77bae10c1e0",
            "user_id": "e00ba377-f377-4f1f-b5bd-d9ad80a7aff2",
            "card_set_id": "8ce3fb5e-9ce3-4843-b643-75c7ea462f10",
            "creator_id": "e00ba377-f377-4f1f-b5bd-d9ad80a7aff2",
            "last_seen_at": "2020-04-02 07:32:53",
            "last_studied_at": "2020-04-02 07:32:53"
          },
          {
            "id": "5088b9d4-c25d-4bab-ae4e-318059fb6375",
            "user_id": "e00ba377-f377-4f1f-b5bd-d9ad80a7aff2",
            "card_set_id": "ef04d068-59c0-40f3-965d-57dbc0069cc3",
            "creator_id": "e00ba377-f377-4f1f-b5bd-d9ad80a7aff2",
            "last_seen_at": "2019-10-22 10:54:48",
            "last_studied_at": "2019-10-22 10:54:48"
          },
          {
            "id": "4e55a446-4388-4d65-b5fc-a1e2b90d77eb",
            "user_id": "e00ba377-f377-4f1f-b5bd-d9ad80a7aff2",
            "card_set_id": "25f05cb4-a651-467c-abf4-40ea8a81a4ea",
            "creator_id": "e00ba377-f377-4f1f-b5bd-d9ad80a7aff2",
            "last_seen_at": "2020-04-07 12:23:21",
            "last_studied_at": "2020-04-07 12:23:21"
          },
          {
            "id": "3a5d07fa-64b7-49e9-bae4-45ce1e405f87",
            "user_id": "e00ba377-f377-4f1f-b5bd-d9ad80a7aff2",
            "card_set_id": "e2caa79d-9595-4acb-b7e9-215470d87ac7",
            "creator_id": "e00ba377-f377-4f1f-b5bd-d9ad80a7aff2",
            "last_seen_at": "2020-03-16 13:07:54",
            "last_studied_at": "2020-03-16 13:07:54"
          },
          {
            "id": "fab2c8f9-7a9a-4668-897f-981e83715e68",
            "user_id": "e00ba377-f377-4f1f-b5bd-d9ad80a7aff2",
            "card_set_id": "53aac4fd-97ad-4bba-b071-a2d7f44c8b3f",
            "creator_id": "e00ba377-f377-4f1f-b5bd-d9ad80a7aff2",
            "last_seen_at": "2020-02-18 05:16:31",
            "last_studied_at": "2020-02-18 05:16:31"
          },
          {
            "id": "2e59f864-ffde-404f-80af-1b5794aa03f0",
            "user_id": "e00ba377-f377-4f1f-b5bd-d9ad80a7aff2",
            "card_set_id": "802473f1-ead4-4322-a2af-c89ff7d7a5dd",
            "creator_id": "e00ba377-f377-4f1f-b5bd-d9ad80a7aff2",
            "last_seen_at": "2019-10-26 15:41:08",
            "last_studied_at": "2019-10-26 15:41:08"
          },
          {
            "id": "0513e30d-479c-4ccc-833f-8cab9013c976",
            "user_id": "e00ba377-f377-4f1f-b5bd-d9ad80a7aff2",
            "card_set_id": "f9b67aff-8037-4fe2-a54e-02fdd5b2cfa7",
            "creator_id": "e00ba377-f377-4f1f-b5bd-d9ad80a7aff2",
            "last_seen_at": "2020-04-08 09:02:37",
            "last_studied_at": "2020-04-08 09:02:37"
          },
          {
            "id": "9e5d1ab0-034d-4263-a71e-3e3952fe8e49",
            "user_id": "e00ba377-f377-4f1f-b5bd-d9ad80a7aff2",
            "card_set_id": "fc74359d-2852-4f6b-8b5a-7fbabe313ea3",
            "creator_id": "e00ba377-f377-4f1f-b5bd-d9ad80a7aff2",
            "last_seen_at": "2019-12-05 00:53:57",
            "last_studied_at": "2019-12-05 00:53:57"
          },
          {
            "id": "552d864e-16d6-4881-a551-60796d46ba87",
            "user_id": "e00ba377-f377-4f1f-b5bd-d9ad80a7aff2",
            "card_set_id": "c0ccdbfa-8e65-4fae-9f05-a6bbd6847039",
            "creator_id": "e00ba377-f377-4f1f-b5bd-d9ad80a7aff2",
            "last_seen_at": "2020-02-02 21:40:31",
            "last_studied_at": "2020-02-02 21:40:31"
          },
          {
            "id": "4e798afd-798b-42b1-a065-c24cddbd238b",
            "user_id": "e00ba377-f377-4f1f-b5bd-d9ad80a7aff2",
            "card_set_id": "b303341f-a52c-4c91-8ce1-33ecefa00d37",
            "creator_id": "e00ba377-f377-4f1f-b5bd-d9ad80a7aff2",
            "last_seen_at": "2019-11-15 10:10:09",
            "last_studied_at": "2019-11-15 10:10:09"
          },
          {
            "id": "863fbb97-7493-4a98-9e3f-a634bced6de3",
            "user_id": "ddc85a69-1727-48d6-9cf6-463f9151d788",
            "card_set_id": "8c61d4cc-fb71-4ea2-8c9d-272a0861ed97",
            "creator_id": "ddc85a69-1727-48d6-9cf6-463f9151d788",
            "last_seen_at": "2019-12-12 18:05:55",
            "last_studied_at": "2019-12-12 18:05:55"
          },
          {
            "id": "1db99693-c551-4c2d-b788-1b4317d27134",
            "user_id": "ddc85a69-1727-48d6-9cf6-463f9151d788",
            "card_set_id": "f21f5cef-390d-4b1c-b757-9cff2cc3e040",
            "creator_id": "ddc85a69-1727-48d6-9cf6-463f9151d788",
            "last_seen_at": "2019-11-21 04:45:31",
            "last_studied_at": "2019-11-21 04:45:31"
          },
          {
            "id": "352bb8c1-4e48-41ae-b9be-f6ea902ba48e",
            "user_id": "ddc85a69-1727-48d6-9cf6-463f9151d788",
            "card_set_id": "be190cc9-4033-4b69-b1c2-118ee0c632d2",
            "creator_id": "ddc85a69-1727-48d6-9cf6-463f9151d788",
            "last_seen_at": "2019-11-01 23:15:07",
            "last_studied_at": "2019-11-01 23:15:07"
          },
          {
            "id": "72f475d8-f553-48b7-b035-1393f83b7ba4",
            "user_id": "ddc85a69-1727-48d6-9cf6-463f9151d788",
            "card_set_id": "e3038879-0c01-418c-9d36-607e660a129a",
            "creator_id": "ddc85a69-1727-48d6-9cf6-463f9151d788",
            "last_seen_at": "2020-03-08 06:23:35",
            "last_studied_at": "2020-03-08 06:23:35"
          },
          {
            "id": "5914e775-b57e-4b7b-bcf1-b96b78686a1d",
            "user_id": "ddc85a69-1727-48d6-9cf6-463f9151d788",
            "card_set_id": "d80433e4-6ef5-4d24-97fb-8c1dc3284ad0",
            "creator_id": "ddc85a69-1727-48d6-9cf6-463f9151d788",
            "last_seen_at": "2019-11-15 01:18:09",
            "last_studied_at": "2019-11-15 01:18:09"
          },
          {
            "id": "ddebe0b3-83f1-4b83-a54a-1175de9004ec",
            "user_id": "ddc85a69-1727-48d6-9cf6-463f9151d788",
            "card_set_id": "e15b9fca-f2d5-4d02-96b6-7f031e19a495",
            "creator_id": "ddc85a69-1727-48d6-9cf6-463f9151d788",
            "last_seen_at": "2020-03-21 16:00:37",
            "last_studied_at": "2020-03-21 16:00:37"
          },
          {
            "id": "1f81d7eb-4acf-4b15-9499-a935aa93e21e",
            "user_id": "ddc85a69-1727-48d6-9cf6-463f9151d788",
            "card_set_id": "241df9c6-24c5-4168-b51a-3ea4e1fda072",
            "creator_id": "ddc85a69-1727-48d6-9cf6-463f9151d788",
            "last_seen_at": "2020-02-24 05:38:24",
            "last_studied_at": "2020-02-24 05:38:24"
          },
          {
            "id": "18afda6f-1bbe-4477-a7b3-ea1bc46baee0",
            "user_id": "ddc85a69-1727-48d6-9cf6-463f9151d788",
            "card_set_id": "c8426576-c87f-4663-94a9-4c27d8c46dea",
            "creator_id": "ddc85a69-1727-48d6-9cf6-463f9151d788",
            "last_seen_at": "2020-03-14 15:42:52",
            "last_studied_at": "2020-03-14 15:42:52"
          },
          {
            "id": "b421910f-0f43-4370-9b42-0e7c1a931c0e",
            "user_id": "ddc85a69-1727-48d6-9cf6-463f9151d788",
            "card_set_id": "c58d9f3a-9a17-4322-a243-390a9012acdb",
            "creator_id": "ddc85a69-1727-48d6-9cf6-463f9151d788",
            "last_seen_at": "2019-11-07 19:26:33",
            "last_studied_at": "2019-11-07 19:26:33"
          },
          {
            "id": "3f3d96dc-084c-48c8-a0b2-abd9e3b0cd79",
            "user_id": "ddc85a69-1727-48d6-9cf6-463f9151d788",
            "card_set_id": "d6ce5019-4745-4ecc-8b21-c4c0f31be2bb",
            "creator_id": "ddc85a69-1727-48d6-9cf6-463f9151d788",
            "last_seen_at": "2019-11-03 13:03:19",
            "last_studied_at": "2019-11-03 13:03:19"
          },
          {
            "id": "897d5f44-552b-4b94-8fb2-f8d0aca22494",
            "user_id": "ddc85a69-1727-48d6-9cf6-463f9151d788",
            "card_set_id": "9ef8ba2d-9bac-43dc-85f0-43b0561f4316",
            "creator_id": "ddc85a69-1727-48d6-9cf6-463f9151d788",
            "last_seen_at": "2019-10-22 00:08:12",
            "last_studied_at": "2019-10-22 00:08:12"
          },
          {
            "id": "77f3d61c-061f-4fde-984c-5511affdf2db",
            "user_id": "ddc85a69-1727-48d6-9cf6-463f9151d788",
            "card_set_id": "98a04195-00cd-4a7e-a80b-bff41b34fc0a",
            "creator_id": "ddc85a69-1727-48d6-9cf6-463f9151d788",
            "last_seen_at": "2020-03-06 04:28:03",
            "last_studied_at": "2020-03-06 04:28:03"
          },
          {
            "id": "6a16d450-5995-4cbf-aedc-67f373adcd28",
            "user_id": "ddc85a69-1727-48d6-9cf6-463f9151d788",
            "card_set_id": "43eb5877-f935-4053-a469-206996a80a68",
            "creator_id": "ddc85a69-1727-48d6-9cf6-463f9151d788",
            "last_seen_at": "2020-03-29 12:26:06",
            "last_studied_at": "2020-03-29 12:26:06"
          },
          {
            "id": "bd1e60eb-e4da-41e5-ba5a-2381d6f6d0ad",
            "user_id": "ddc85a69-1727-48d6-9cf6-463f9151d788",
            "card_set_id": "a2bc90b0-bb41-462c-913e-df805ba0d13c",
            "creator_id": "ddc85a69-1727-48d6-9cf6-463f9151d788",
            "last_seen_at": "2020-03-28 00:48:00",
            "last_studied_at": "2020-03-28 00:48:00"
          },
          {
            "id": "58626d2f-6e85-4394-962e-c524786258ec",
            "user_id": "ddc85a69-1727-48d6-9cf6-463f9151d788",
            "card_set_id": "f88c723e-4af9-4103-a1ce-0d8bc44e5b41",
            "creator_id": "ddc85a69-1727-48d6-9cf6-463f9151d788",
            "last_seen_at": "2020-03-17 14:15:19",
            "last_studied_at": "2020-03-17 14:15:19"
          },
          {
            "id": "3c10fc3b-63bb-44f4-ba77-ad1da327f31d",
            "user_id": "ddc85a69-1727-48d6-9cf6-463f9151d788",
            "card_set_id": "9e617f18-bcc5-4604-8df6-b2cb7bbbe757",
            "creator_id": "ddc85a69-1727-48d6-9cf6-463f9151d788",
            "last_seen_at": "2020-04-02 09:34:29",
            "last_studied_at": "2020-04-02 09:34:29"
          },
          {
            "id": "6b3c624f-f72d-4b08-8a20-ebd6ec45190d",
            "user_id": "ddc85a69-1727-48d6-9cf6-463f9151d788",
            "card_set_id": "bec3286a-f5a8-4948-9bf9-4f3d625a5733",
            "creator_id": "ddc85a69-1727-48d6-9cf6-463f9151d788",
            "last_seen_at": "2020-03-08 04:35:26",
            "last_studied_at": "2020-03-08 04:35:26"
          },
          {
            "id": "970a5487-383c-4020-b3f4-9404461f3826",
            "user_id": "ddc85a69-1727-48d6-9cf6-463f9151d788",
            "card_set_id": "c649a363-7b9e-4a30-aff7-c5962556b2a6",
            "creator_id": "ddc85a69-1727-48d6-9cf6-463f9151d788",
            "last_seen_at": "2020-02-28 07:22:48",
            "last_studied_at": "2020-02-28 07:22:48"
          },
          {
            "id": "3592e46a-e524-4b46-a6a3-daede1c004c8",
            "user_id": "ddc85a69-1727-48d6-9cf6-463f9151d788",
            "card_set_id": "f9c38a3d-5881-4a89-be8d-dc9eb12dd562",
            "creator_id": "ddc85a69-1727-48d6-9cf6-463f9151d788",
            "last_seen_at": "2020-01-23 13:58:55",
            "last_studied_at": "2020-01-23 13:58:55"
          },
          {
            "id": "7fbd6b9c-4d84-4f41-ae14-d66a81c03b3d",
            "user_id": "ddc85a69-1727-48d6-9cf6-463f9151d788",
            "card_set_id": "627eda30-5367-4f0e-b049-721ab2baed1d",
            "creator_id": "ddc85a69-1727-48d6-9cf6-463f9151d788",
            "last_seen_at": "2020-01-29 10:53:44",
            "last_studied_at": "2020-01-29 10:53:44"
          },
          {
            "id": "38626ae6-9f3c-40a1-9757-b7e6de72c036",
            "user_id": "ddc85a69-1727-48d6-9cf6-463f9151d788",
            "card_set_id": "60d916df-e6c4-4892-9e0d-8f63151ac7b6",
            "creator_id": "ddc85a69-1727-48d6-9cf6-463f9151d788",
            "last_seen_at": "2019-12-17 00:18:48",
            "last_studied_at": "2019-12-17 00:18:48"
          },
          {
            "id": "ea28b0ae-3588-4802-b2c0-35b9227ace3c",
            "user_id": "ddc85a69-1727-48d6-9cf6-463f9151d788",
            "card_set_id": "d86643cb-b3bc-4ba5-b697-289ecba064cc",
            "creator_id": "ddc85a69-1727-48d6-9cf6-463f9151d788",
            "last_seen_at": "2019-10-22 12:48:32",
            "last_studied_at": "2019-10-22 12:48:32"
          },
          {
            "id": "90eb7b2e-9c4d-4f86-9aae-6e6f8bef6d87",
            "user_id": "ddc85a69-1727-48d6-9cf6-463f9151d788",
            "card_set_id": "0ee41e0f-1cd8-4fe8-806f-d826aa28edfe",
            "creator_id": "ddc85a69-1727-48d6-9cf6-463f9151d788",
            "last_seen_at": "2019-10-31 15:49:52",
            "last_studied_at": "2019-10-31 15:49:52"
          },
          {
            "id": "33d809d6-d902-49c6-b4c4-ab1a6d753fc2",
            "user_id": "ddc85a69-1727-48d6-9cf6-463f9151d788",
            "card_set_id": "7676f776-5fa9-4eda-9829-b486605cd7a5",
            "creator_id": "ddc85a69-1727-48d6-9cf6-463f9151d788",
            "last_seen_at": "2019-10-21 16:26:29",
            "last_studied_at": "2019-10-21 16:26:29"
          },
          {
            "id": "2314ab3f-a4fc-414b-9019-0934a7dcf4a4",
            "user_id": "ddc85a69-1727-48d6-9cf6-463f9151d788",
            "card_set_id": "79281929-fda8-407c-a8ef-4e53746c8cb0",
            "creator_id": "ddc85a69-1727-48d6-9cf6-463f9151d788",
            "last_seen_at": "2019-12-31 18:15:57",
            "last_studied_at": "2019-12-31 18:15:57"
          },
          {
            "id": "11225c88-95e7-4744-a102-b00e8cfaaefe",
            "user_id": "ddc85a69-1727-48d6-9cf6-463f9151d788",
            "card_set_id": "831f06a5-a4be-4951-8b5c-d5ea6696a1d0",
            "creator_id": "ddc85a69-1727-48d6-9cf6-463f9151d788",
            "last_seen_at": "2020-02-05 03:29:30",
            "last_studied_at": "2020-02-05 03:29:30"
          },
          {
            "id": "3dc1940c-37d6-4d11-bf1d-1861c88f247e",
            "user_id": "ddc85a69-1727-48d6-9cf6-463f9151d788",
            "card_set_id": "db3424b5-dcd5-4da4-a799-91ce4dcb0d48",
            "creator_id": "ddc85a69-1727-48d6-9cf6-463f9151d788",
            "last_seen_at": "2020-04-15 14:54:54",
            "last_studied_at": "2020-04-15 14:54:54"
          },
          {
            "id": "737d8fd5-8b69-4239-ba93-19128c77f616",
            "user_id": "ddc85a69-1727-48d6-9cf6-463f9151d788",
            "card_set_id": "18be9815-a725-4d75-af1d-b8ba9dc0af03",
            "creator_id": "ddc85a69-1727-48d6-9cf6-463f9151d788",
            "last_seen_at": "2020-02-12 01:39:51",
            "last_studied_at": "2020-02-12 01:39:51"
          },
          {
            "id": "a7a1439c-ee5e-41d1-9785-0904a4ec32c4",
            "user_id": "1dbb814f-c678-4b0d-85d8-e08a262b8cb4",
            "card_set_id": "bcbfe16b-1114-4488-9cd0-28c6c8acea68",
            "creator_id": "1dbb814f-c678-4b0d-85d8-e08a262b8cb4",
            "last_seen_at": "2020-02-22 04:10:24",
            "last_studied_at": "2020-02-22 04:10:24"
          },
          {
            "id": "02285f6c-7171-4e5a-9f27-d9b379fbc340",
            "user_id": "1dbb814f-c678-4b0d-85d8-e08a262b8cb4",
            "card_set_id": "56f0e544-7747-4c60-bac3-fa3c7567a246",
            "creator_id": "1dbb814f-c678-4b0d-85d8-e08a262b8cb4",
            "last_seen_at": "2020-02-02 20:44:05",
            "last_studied_at": "2020-02-02 20:44:05"
          },
          {
            "id": "b0741b55-d610-4ff1-87e3-31eae419dd08",
            "user_id": "1dbb814f-c678-4b0d-85d8-e08a262b8cb4",
            "card_set_id": "c4ab60ec-f55b-4fe3-9b42-4e0682a76384",
            "creator_id": "1dbb814f-c678-4b0d-85d8-e08a262b8cb4",
            "last_seen_at": "2019-12-23 09:49:14",
            "last_studied_at": "2019-12-23 09:49:14"
          },
          {
            "id": "1006cc19-1640-48d5-a3ac-b62fd98f98b7",
            "user_id": "1dbb814f-c678-4b0d-85d8-e08a262b8cb4",
            "card_set_id": "1c0deab0-31b5-4975-bfc7-95822d7b707e",
            "creator_id": "1dbb814f-c678-4b0d-85d8-e08a262b8cb4",
            "last_seen_at": "2019-12-02 16:49:59",
            "last_studied_at": "2019-12-02 16:49:59"
          },
          {
            "id": "2f85f728-98ce-494c-9bcc-372544f144cf",
            "user_id": "1dbb814f-c678-4b0d-85d8-e08a262b8cb4",
            "card_set_id": "ed923f76-0922-4fc7-a918-3f14eed8fe33",
            "creator_id": "1dbb814f-c678-4b0d-85d8-e08a262b8cb4",
            "last_seen_at": "2020-03-15 01:43:00",
            "last_studied_at": "2020-03-15 01:43:00"
          },
          {
            "id": "539e18ad-a86f-4f71-9b34-d3efa7edc1b8",
            "user_id": "1dbb814f-c678-4b0d-85d8-e08a262b8cb4",
            "card_set_id": "2bcc9811-83d4-4331-abe4-d0f5375ff388",
            "creator_id": "1dbb814f-c678-4b0d-85d8-e08a262b8cb4",
            "last_seen_at": "2019-12-08 23:06:01",
            "last_studied_at": "2019-12-08 23:06:01"
          },
          {
            "id": "8a87a8cb-487a-411b-a945-f606f92ac978",
            "user_id": "1dbb814f-c678-4b0d-85d8-e08a262b8cb4",
            "card_set_id": "e9e646dd-2486-412d-9169-1adbe34b0342",
            "creator_id": "1dbb814f-c678-4b0d-85d8-e08a262b8cb4",
            "last_seen_at": "2019-11-06 22:09:12",
            "last_studied_at": "2019-11-06 22:09:12"
          },
          {
            "id": "5e5904b8-5fe6-476f-9297-543010455582",
            "user_id": "1cd23218-b2f1-4ada-b8af-5a5b4b9f7c39",
            "card_set_id": "73e4c87d-8e7f-422a-92e5-3b6346777729",
            "creator_id": "1cd23218-b2f1-4ada-b8af-5a5b4b9f7c39",
            "last_seen_at": "2019-12-05 00:25:09",
            "last_studied_at": "2019-12-05 00:25:09"
          },
          {
            "id": "d7ea8a55-4710-498f-adbf-3f41f4b60150",
            "user_id": "1cd23218-b2f1-4ada-b8af-5a5b4b9f7c39",
            "card_set_id": "57ea6da0-ee04-469e-80b3-83c8355722f3",
            "creator_id": "1cd23218-b2f1-4ada-b8af-5a5b4b9f7c39",
            "last_seen_at": "2020-01-05 00:21:18",
            "last_studied_at": "2020-01-05 00:21:18"
          },
          {
            "id": "717ecbb3-14d6-4251-8ea0-d1e976cdd0ac",
            "user_id": "1cd23218-b2f1-4ada-b8af-5a5b4b9f7c39",
            "card_set_id": "6333a787-4ce9-48eb-9096-07f1c052feb0",
            "creator_id": "1cd23218-b2f1-4ada-b8af-5a5b4b9f7c39",
            "last_seen_at": "2020-01-07 16:14:48",
            "last_studied_at": "2020-01-07 16:14:48"
          },
          {
            "id": "b124220d-3bf4-468e-8b93-db8612dc0e49",
            "user_id": "1cd23218-b2f1-4ada-b8af-5a5b4b9f7c39",
            "card_set_id": "373fc810-08ec-4c40-a811-fad03761c7df",
            "creator_id": "1cd23218-b2f1-4ada-b8af-5a5b4b9f7c39",
            "last_seen_at": "2020-02-09 02:31:55",
            "last_studied_at": "2020-02-09 02:31:55"
          },
          {
            "id": "97c400b2-6246-4507-bf99-8dd810e9821b",
            "user_id": "1cd23218-b2f1-4ada-b8af-5a5b4b9f7c39",
            "card_set_id": "6a83f689-8128-4cc2-80a4-e93eb90b067e",
            "creator_id": "1cd23218-b2f1-4ada-b8af-5a5b4b9f7c39",
            "last_seen_at": "2020-02-29 20:21:51",
            "last_studied_at": "2020-02-29 20:21:51"
          },
          {
            "id": "abd92b4f-68b5-486c-bf18-670182e144a2",
            "user_id": "1cd23218-b2f1-4ada-b8af-5a5b4b9f7c39",
            "card_set_id": "e12b56c7-dd2e-46cd-9f29-87f4f716a0ef",
            "creator_id": "1cd23218-b2f1-4ada-b8af-5a5b4b9f7c39",
            "last_seen_at": "2020-02-01 00:42:16",
            "last_studied_at": "2020-02-01 00:42:16"
          },
          {
            "id": "29bd1989-910f-42e0-81d4-bd035bb90c3a",
            "user_id": "1cd23218-b2f1-4ada-b8af-5a5b4b9f7c39",
            "card_set_id": "f8e1e195-9a69-464f-98d2-f8aa777059aa",
            "creator_id": "1cd23218-b2f1-4ada-b8af-5a5b4b9f7c39",
            "last_seen_at": "2020-02-17 04:23:41",
            "last_studied_at": "2020-02-17 04:23:41"
          },
          {
            "id": "45f6f94e-e0e5-40e7-bd90-29662b04f8ec",
            "user_id": "1cd23218-b2f1-4ada-b8af-5a5b4b9f7c39",
            "card_set_id": "48b35373-ab0f-4629-801f-d971ecf6bdde",
            "creator_id": "1cd23218-b2f1-4ada-b8af-5a5b4b9f7c39",
            "last_seen_at": "2020-03-08 07:55:44",
            "last_studied_at": "2020-03-08 07:55:44"
          },
          {
            "id": "f672beba-8280-4c98-b73b-c835a66b57f7",
            "user_id": "1cd23218-b2f1-4ada-b8af-5a5b4b9f7c39",
            "card_set_id": "70b0ef2e-4ef7-4ac6-93df-08b0292d26f1",
            "creator_id": "1cd23218-b2f1-4ada-b8af-5a5b4b9f7c39",
            "last_seen_at": "2020-02-25 03:34:37",
            "last_studied_at": "2020-02-25 03:34:37"
          },
          {
            "id": "856186ca-e27b-443e-a539-75d851d810dc",
            "user_id": "1cd23218-b2f1-4ada-b8af-5a5b4b9f7c39",
            "card_set_id": "829cc8b7-1de1-4544-b5b5-939afac36f69",
            "creator_id": "1cd23218-b2f1-4ada-b8af-5a5b4b9f7c39",
            "last_seen_at": "2020-01-26 12:40:05",
            "last_studied_at": "2020-01-26 12:40:05"
          },
          {
            "id": "f426e11c-0a70-427f-b876-2709e53af092",
            "user_id": "1cd23218-b2f1-4ada-b8af-5a5b4b9f7c39",
            "card_set_id": "9c0a900d-a3c3-46cc-bc96-3118f82e723b",
            "creator_id": "1cd23218-b2f1-4ada-b8af-5a5b4b9f7c39",
            "last_seen_at": "2020-02-23 17:23:32",
            "last_studied_at": "2020-02-23 17:23:32"
          },
          {
            "id": "7940e4f8-492d-4ec7-950d-f52a4ecd399f",
            "user_id": "1cd23218-b2f1-4ada-b8af-5a5b4b9f7c39",
            "card_set_id": "0a7db1b3-8a8b-4fa6-8fc0-123c88c93c5a",
            "creator_id": "1cd23218-b2f1-4ada-b8af-5a5b4b9f7c39",
            "last_seen_at": "2020-04-20 18:58:05",
            "last_studied_at": "2020-04-20 18:58:05"
          },
          {
            "id": "fdba762f-6c43-4e56-bcc4-9226e83d1a0b",
            "user_id": "1cd23218-b2f1-4ada-b8af-5a5b4b9f7c39",
            "card_set_id": "ff8a9f5e-100e-4751-81ab-7344c18ad029",
            "creator_id": "1cd23218-b2f1-4ada-b8af-5a5b4b9f7c39",
            "last_seen_at": "2020-04-11 06:38:50",
            "last_studied_at": "2020-04-11 06:38:50"
          },
          {
            "id": "7eb64887-c594-4247-a897-c131211fc42f",
            "user_id": "1cd23218-b2f1-4ada-b8af-5a5b4b9f7c39",
            "card_set_id": "8623d8e7-3b22-42fc-8456-075a0a215477",
            "creator_id": "1cd23218-b2f1-4ada-b8af-5a5b4b9f7c39",
            "last_seen_at": "2020-04-04 02:01:22",
            "last_studied_at": "2020-04-04 02:01:22"
          },
          {
            "id": "ee34dc8a-a37e-4b05-8a26-052e5a13e88b",
            "user_id": "1cd23218-b2f1-4ada-b8af-5a5b4b9f7c39",
            "card_set_id": "02a9053d-0097-4364-a9a9-f964a605d788",
            "creator_id": "1cd23218-b2f1-4ada-b8af-5a5b4b9f7c39",
            "last_seen_at": "2020-01-08 09:38:25",
            "last_studied_at": "2020-01-08 09:38:25"
          },
          {
            "id": "3ae7e38b-b946-424d-8a70-0a7d1b140440",
            "user_id": "1cd23218-b2f1-4ada-b8af-5a5b4b9f7c39",
            "card_set_id": "fbe1d3cf-f8c9-40a8-b225-4d8081b053ae",
            "creator_id": "1cd23218-b2f1-4ada-b8af-5a5b4b9f7c39",
            "last_seen_at": "2019-10-26 10:03:45",
            "last_studied_at": "2019-10-26 10:03:45"
          },
          {
            "id": "c81391fe-40c2-4955-b9e0-e518c6eaf2b7",
            "user_id": "df44f322-efba-4479-b231-e5b0cf8737b0",
            "card_set_id": "d53f714a-78ff-45bb-98cd-2258998caa30",
            "creator_id": "df44f322-efba-4479-b231-e5b0cf8737b0",
            "last_seen_at": "2020-03-01 09:58:17",
            "last_studied_at": "2020-03-01 09:58:17"
          },
          {
            "id": "2f38d043-28d5-40db-b354-b138f82bd73b",
            "user_id": "df44f322-efba-4479-b231-e5b0cf8737b0",
            "card_set_id": "174825d0-adde-42c8-b980-55e008cd7382",
            "creator_id": "df44f322-efba-4479-b231-e5b0cf8737b0",
            "last_seen_at": "2020-03-22 15:17:50",
            "last_studied_at": "2020-03-22 15:17:50"
          },
          {
            "id": "83c4393d-5d7c-40be-9df0-0840d91965da",
            "user_id": "df44f322-efba-4479-b231-e5b0cf8737b0",
            "card_set_id": "287b9db7-a6ea-4495-9308-c166371b6fab",
            "creator_id": "df44f322-efba-4479-b231-e5b0cf8737b0",
            "last_seen_at": "2019-11-06 22:54:53",
            "last_studied_at": "2019-11-06 22:54:53"
          },
          {
            "id": "438db25d-3e48-47f6-9c37-204a7aaa2584",
            "user_id": "df44f322-efba-4479-b231-e5b0cf8737b0",
            "card_set_id": "a6e330bb-efe6-48dc-865a-cbed18699cce",
            "creator_id": "df44f322-efba-4479-b231-e5b0cf8737b0",
            "last_seen_at": "2020-02-11 10:18:57",
            "last_studied_at": "2020-02-11 10:18:57"
          },
          {
            "id": "b578ab6c-ec22-4f5a-bce0-37f32c848b21",
            "user_id": "df44f322-efba-4479-b231-e5b0cf8737b0",
            "card_set_id": "af989306-c727-4f62-aff1-7f7d19b01a9d",
            "creator_id": "df44f322-efba-4479-b231-e5b0cf8737b0",
            "last_seen_at": "2020-03-10 08:06:57",
            "last_studied_at": "2020-03-10 08:06:57"
          },
          {
            "id": "7f44a099-a270-4750-bf5b-4e6c90eab722",
            "user_id": "df44f322-efba-4479-b231-e5b0cf8737b0",
            "card_set_id": "79d07d80-f922-4fa3-874a-78e309e05bfa",
            "creator_id": "df44f322-efba-4479-b231-e5b0cf8737b0",
            "last_seen_at": "2019-12-19 14:41:04",
            "last_studied_at": "2019-12-19 14:41:04"
          },
          {
            "id": "b58a8faf-2a05-4057-9026-798b3c9e7348",
            "user_id": "df44f322-efba-4479-b231-e5b0cf8737b0",
            "card_set_id": "0261f77d-b5e0-4f7b-a681-184b26454c62",
            "creator_id": "df44f322-efba-4479-b231-e5b0cf8737b0",
            "last_seen_at": "2020-03-08 06:34:31",
            "last_studied_at": "2020-03-08 06:34:31"
          },
          {
            "id": "4e145ade-5b24-4e58-9f36-2ecb431f212f",
            "user_id": "df44f322-efba-4479-b231-e5b0cf8737b0",
            "card_set_id": "9f78503c-8da1-48f2-a5f7-095a1573e874",
            "creator_id": "df44f322-efba-4479-b231-e5b0cf8737b0",
            "last_seen_at": "2020-01-23 17:29:19",
            "last_studied_at": "2020-01-23 17:29:19"
          },
          {
            "id": "aa9ea61a-ddc8-49f4-86e9-c682ef8d1261",
            "user_id": "df44f322-efba-4479-b231-e5b0cf8737b0",
            "card_set_id": "af81d655-f30a-478a-bd02-df43b4285cfb",
            "creator_id": "df44f322-efba-4479-b231-e5b0cf8737b0",
            "last_seen_at": "2019-12-07 07:39:21",
            "last_studied_at": "2019-12-07 07:39:21"
          },
          {
            "id": "ea19e496-21a6-49d4-a455-820ee14f7f20",
            "user_id": "df44f322-efba-4479-b231-e5b0cf8737b0",
            "card_set_id": "b625f58d-5a66-45ab-a2b9-be981f922369",
            "creator_id": "df44f322-efba-4479-b231-e5b0cf8737b0",
            "last_seen_at": "2019-11-05 12:40:56",
            "last_studied_at": "2019-11-05 12:40:56"
          },
          {
            "id": "9278410d-a71b-43ec-8d2d-955db9436920",
            "user_id": "df44f322-efba-4479-b231-e5b0cf8737b0",
            "card_set_id": "10eda98d-9b70-4a96-9b54-c6f6cabe09ad",
            "creator_id": "df44f322-efba-4479-b231-e5b0cf8737b0",
            "last_seen_at": "2019-11-09 12:19:44",
            "last_studied_at": "2019-11-09 12:19:44"
          },
          {
            "id": "e6dd2033-ce2a-4a39-b454-dd7a958ee0ca",
            "user_id": "df44f322-efba-4479-b231-e5b0cf8737b0",
            "card_set_id": "5d7a3c89-c01a-4e59-9524-29b3f7de3b97",
            "creator_id": "df44f322-efba-4479-b231-e5b0cf8737b0",
            "last_seen_at": "2020-02-21 18:44:11",
            "last_studied_at": "2020-02-21 18:44:11"
          },
          {
            "id": "5e1e71c5-cc48-4c8d-b1e0-fa5183231beb",
            "user_id": "df44f322-efba-4479-b231-e5b0cf8737b0",
            "card_set_id": "a202fb4e-673b-446d-8e3d-2922707834b5",
            "creator_id": "df44f322-efba-4479-b231-e5b0cf8737b0",
            "last_seen_at": "2020-02-07 17:21:24",
            "last_studied_at": "2020-02-07 17:21:24"
          },
          {
            "id": "bd9e0adb-6c6b-45b2-bc82-e4253d3451b3",
            "user_id": "df44f322-efba-4479-b231-e5b0cf8737b0",
            "card_set_id": "83765ec0-c9c9-4de2-97ea-d4a94ccf8fae",
            "creator_id": "df44f322-efba-4479-b231-e5b0cf8737b0",
            "last_seen_at": "2020-01-13 18:29:27",
            "last_studied_at": "2020-01-13 18:29:27"
          },
          {
            "id": "efe876be-36ed-44a0-a671-8407038d47e3",
            "user_id": "df44f322-efba-4479-b231-e5b0cf8737b0",
            "card_set_id": "0516b36f-235a-458d-b67c-719c4adf9951",
            "creator_id": "df44f322-efba-4479-b231-e5b0cf8737b0",
            "last_seen_at": "2019-10-23 15:31:38",
            "last_studied_at": "2019-10-23 15:31:38"
          },
          {
            "id": "d3c86a8d-2070-4a27-bd10-167d5ba43318",
            "user_id": "df44f322-efba-4479-b231-e5b0cf8737b0",
            "card_set_id": "2ecc81d7-04d4-4deb-aba9-d4f1a3387ddd",
            "creator_id": "df44f322-efba-4479-b231-e5b0cf8737b0",
            "last_seen_at": "2019-12-08 09:54:47",
            "last_studied_at": "2019-12-08 09:54:47"
          },
          {
            "id": "b7faf5d8-9791-47c2-bcd6-a8517d359faf",
            "user_id": "df44f322-efba-4479-b231-e5b0cf8737b0",
            "card_set_id": "7843bdbb-4809-4dd9-b3c7-52647a6e2cdf",
            "creator_id": "df44f322-efba-4479-b231-e5b0cf8737b0",
            "last_seen_at": "2019-12-14 07:46:25",
            "last_studied_at": "2019-12-14 07:46:25"
          },
          {
            "id": "199c08d1-812e-43b4-90e2-618e28134031",
            "user_id": "df44f322-efba-4479-b231-e5b0cf8737b0",
            "card_set_id": "bd6e4373-30a2-4c1d-a601-acc4dfcfb10e",
            "creator_id": "df44f322-efba-4479-b231-e5b0cf8737b0",
            "last_seen_at": "2019-12-11 12:48:02",
            "last_studied_at": "2019-12-11 12:48:02"
          },
          {
            "id": "83c77982-d39a-4e99-88ba-35d46d9ba94e",
            "user_id": "df44f322-efba-4479-b231-e5b0cf8737b0",
            "card_set_id": "ae9f45a8-637c-4b96-a03f-3524c11c199f",
            "creator_id": "df44f322-efba-4479-b231-e5b0cf8737b0",
            "last_seen_at": "2019-11-21 23:25:01",
            "last_studied_at": "2019-11-21 23:25:01"
          },
          {
            "id": "773c2d40-0d00-4ce7-821c-d5890a1fb52a",
            "user_id": "490b4bd9-f801-4935-bab2-170437d85534",
            "card_set_id": "31d9e8c4-82bb-4c5a-b92d-09f91243eff6",
            "creator_id": "490b4bd9-f801-4935-bab2-170437d85534",
            "last_seen_at": "2019-11-17 16:42:46",
            "last_studied_at": "2019-11-17 16:42:46"
          },
          {
            "id": "745615a9-fd5a-410b-bcd9-a7acb32b33be",
            "user_id": "490b4bd9-f801-4935-bab2-170437d85534",
            "card_set_id": "66c74a92-1701-4438-b260-96a64b56b36f",
            "creator_id": "490b4bd9-f801-4935-bab2-170437d85534",
            "last_seen_at": "2020-04-06 18:08:31",
            "last_studied_at": "2020-04-06 18:08:31"
          },
          {
            "id": "87921327-472e-444a-b509-97c0e5cadbbd",
            "user_id": "490b4bd9-f801-4935-bab2-170437d85534",
            "card_set_id": "e989487c-4f46-4d2c-9794-c0ca3f46147b",
            "creator_id": "490b4bd9-f801-4935-bab2-170437d85534",
            "last_seen_at": "2020-04-02 07:31:01",
            "last_studied_at": "2020-04-02 07:31:01"
          },
          {
            "id": "dc35ecf5-b96e-4dc6-9434-e76b481a5472",
            "user_id": "490b4bd9-f801-4935-bab2-170437d85534",
            "card_set_id": "890a3efd-d007-43fa-be47-a04a3d036a90",
            "creator_id": "490b4bd9-f801-4935-bab2-170437d85534",
            "last_seen_at": "2020-03-26 11:24:48",
            "last_studied_at": "2020-03-26 11:24:48"
          },
          {
            "id": "063550a2-0d43-4fcd-81e5-bf80024e8bf9",
            "user_id": "490b4bd9-f801-4935-bab2-170437d85534",
            "card_set_id": "d66c4e9c-7213-4846-bf16-b2df90cf7d9b",
            "creator_id": "490b4bd9-f801-4935-bab2-170437d85534",
            "last_seen_at": "2019-10-21 11:09:00",
            "last_studied_at": "2019-10-21 11:09:00"
          },
          {
            "id": "f37cbbb6-718d-4cd0-b4e6-d8099faa8c83",
            "user_id": "490b4bd9-f801-4935-bab2-170437d85534",
            "card_set_id": "02d4444d-2dd9-4ff1-be96-61638c650502",
            "creator_id": "490b4bd9-f801-4935-bab2-170437d85534",
            "last_seen_at": "2020-01-27 07:23:57",
            "last_studied_at": "2020-01-27 07:23:57"
          },
          {
            "id": "f983be86-8eb5-47dc-8ac1-46c074bc5fdf",
            "user_id": "490b4bd9-f801-4935-bab2-170437d85534",
            "card_set_id": "51dc7da5-13df-4ea6-91ae-9df684f04353",
            "creator_id": "490b4bd9-f801-4935-bab2-170437d85534",
            "last_seen_at": "2019-11-07 10:47:52",
            "last_studied_at": "2019-11-07 10:47:52"
          },
          {
            "id": "06f4c06a-c5fb-49db-932a-915866f95208",
            "user_id": "490b4bd9-f801-4935-bab2-170437d85534",
            "card_set_id": "8ca13daf-da97-4614-ac0e-199f61174cea",
            "creator_id": "490b4bd9-f801-4935-bab2-170437d85534",
            "last_seen_at": "2020-01-27 02:32:19",
            "last_studied_at": "2020-01-27 02:32:19"
          },
          {
            "id": "b90e72c7-2006-4a72-bbfb-b33280ce4796",
            "user_id": "490b4bd9-f801-4935-bab2-170437d85534",
            "card_set_id": "66738d90-c5a2-4a7e-b07e-92e1ad1b24b3",
            "creator_id": "490b4bd9-f801-4935-bab2-170437d85534",
            "last_seen_at": "2019-12-19 02:43:48",
            "last_studied_at": "2019-12-19 02:43:48"
          },
          {
            "id": "4438bb36-b983-47b4-a72b-f2a4ed8b8427",
            "user_id": "490b4bd9-f801-4935-bab2-170437d85534",
            "card_set_id": "c27939e2-2b6d-4776-9761-7e7d702e7957",
            "creator_id": "490b4bd9-f801-4935-bab2-170437d85534",
            "last_seen_at": "2019-11-23 22:18:34",
            "last_studied_at": "2019-11-23 22:18:34"
          },
          {
            "id": "73f7fd44-533a-41ee-88d4-1d644dc4b3b2",
            "user_id": "490b4bd9-f801-4935-bab2-170437d85534",
            "card_set_id": "9ee8969b-dc72-478f-b52e-fe15c1003433",
            "creator_id": "490b4bd9-f801-4935-bab2-170437d85534",
            "last_seen_at": "2019-11-25 19:48:58",
            "last_studied_at": "2019-11-25 19:48:58"
          },
          {
            "id": "8347347e-6498-4bd9-b171-36df9b0d463e",
            "user_id": "490b4bd9-f801-4935-bab2-170437d85534",
            "card_set_id": "ab46aa71-25c5-47dc-84cf-1257772c44f4",
            "creator_id": "490b4bd9-f801-4935-bab2-170437d85534",
            "last_seen_at": "2020-02-19 22:10:00",
            "last_studied_at": "2020-02-19 22:10:00"
          },
          {
            "id": "51bebd2a-be43-47c7-8864-84bbd14527ee",
            "user_id": "490b4bd9-f801-4935-bab2-170437d85534",
            "card_set_id": "1697e78a-5250-473d-9a4b-cd4d06b94065",
            "creator_id": "490b4bd9-f801-4935-bab2-170437d85534",
            "last_seen_at": "2020-04-13 16:38:04",
            "last_studied_at": "2020-04-13 16:38:04"
          },
          {
            "id": "e79103ee-7a69-49d9-8484-23a3e1b29117",
            "user_id": "490b4bd9-f801-4935-bab2-170437d85534",
            "card_set_id": "d987304c-0e82-4875-83f0-c9a4e67313a5",
            "creator_id": "490b4bd9-f801-4935-bab2-170437d85534",
            "last_seen_at": "2020-03-29 11:10:24",
            "last_studied_at": "2020-03-29 11:10:24"
          },
          {
            "id": "62e22cdc-4b1f-4b4d-9d4d-56acdc92a2c0",
            "user_id": "490b4bd9-f801-4935-bab2-170437d85534",
            "card_set_id": "b3bb1709-6c1f-4d6d-926e-188ecd1239f4",
            "creator_id": "490b4bd9-f801-4935-bab2-170437d85534",
            "last_seen_at": "2019-10-08 07:47:26",
            "last_studied_at": "2019-10-08 07:47:26"
          },
          {
            "id": "e30762c6-84bf-4d14-a642-832358aee523",
            "user_id": "490b4bd9-f801-4935-bab2-170437d85534",
            "card_set_id": "c4582087-e8ea-42c1-82ea-6e07ed8ccde6",
            "creator_id": "490b4bd9-f801-4935-bab2-170437d85534",
            "last_seen_at": "2020-03-06 18:44:11",
            "last_studied_at": "2020-03-06 18:44:11"
          },
          {
            "id": "16a6c79b-28f3-4a77-b4d7-d985c15aa01e",
            "user_id": "490b4bd9-f801-4935-bab2-170437d85534",
            "card_set_id": "27026954-f71b-4db3-9370-a38e79668fa0",
            "creator_id": "490b4bd9-f801-4935-bab2-170437d85534",
            "last_seen_at": "2020-01-24 02:11:11",
            "last_studied_at": "2020-01-24 02:11:11"
          },
          {
            "id": "4c641838-5545-43fa-b926-10f4f7b43c57",
            "user_id": "490b4bd9-f801-4935-bab2-170437d85534",
            "card_set_id": "1423d1a1-fca7-4c2e-ae83-d459c45bb40e",
            "creator_id": "490b4bd9-f801-4935-bab2-170437d85534",
            "last_seen_at": "2019-11-05 17:38:16",
            "last_studied_at": "2019-11-05 17:38:16"
          },
          {
            "id": "d65688a3-d961-4004-a3f7-903fd7cd189a",
            "user_id": "490b4bd9-f801-4935-bab2-170437d85534",
            "card_set_id": "1cf5ac86-0e81-46f0-bbc9-584432ed0b85",
            "creator_id": "490b4bd9-f801-4935-bab2-170437d85534",
            "last_seen_at": "2020-02-10 07:02:49",
            "last_studied_at": "2020-02-10 07:02:49"
          },
          {
            "id": "21d7c621-d4c2-48c6-9a8c-130cf63c46c5",
            "user_id": "490b4bd9-f801-4935-bab2-170437d85534",
            "card_set_id": "02a5874f-6ba9-463e-9ea9-98d60134fe4f",
            "creator_id": "490b4bd9-f801-4935-bab2-170437d85534",
            "last_seen_at": "2020-04-03 15:58:39",
            "last_studied_at": "2020-04-03 15:58:39"
          },
          {
            "id": "e12b00c7-92b9-4286-944c-1b3111157b45",
            "user_id": "490b4bd9-f801-4935-bab2-170437d85534",
            "card_set_id": "dfb4118f-af9b-4ff9-bc2a-d96692e73776",
            "creator_id": "490b4bd9-f801-4935-bab2-170437d85534",
            "last_seen_at": "2020-02-17 17:45:48",
            "last_studied_at": "2020-02-17 17:45:48"
          },
          {
            "id": "425a96ee-ee73-4661-9c91-6fa0b359936c",
            "user_id": "490b4bd9-f801-4935-bab2-170437d85534",
            "card_set_id": "28eaf511-db68-4e8a-a0dc-4ebd2434aef4",
            "creator_id": "490b4bd9-f801-4935-bab2-170437d85534",
            "last_seen_at": "2020-04-07 22:23:08",
            "last_studied_at": "2020-04-07 22:23:08"
          },
          {
            "id": "9b763a68-bc6f-48fb-8578-ad501abfcb28",
            "user_id": "490b4bd9-f801-4935-bab2-170437d85534",
            "card_set_id": "9d6ce5e3-f1c6-4454-ba8f-f649a584e4dc",
            "creator_id": "490b4bd9-f801-4935-bab2-170437d85534",
            "last_seen_at": "2020-03-08 09:19:49",
            "last_studied_at": "2020-03-08 09:19:49"
          },
          {
            "id": "a957b263-b547-4e5f-8ddd-990dd132cf2c",
            "user_id": "490b4bd9-f801-4935-bab2-170437d85534",
            "card_set_id": "3a3ce03c-aec6-47e2-a738-eb07a8fc8f43",
            "creator_id": "490b4bd9-f801-4935-bab2-170437d85534",
            "last_seen_at": "2020-01-18 11:43:22",
            "last_studied_at": "2020-01-18 11:43:22"
          },
          {
            "id": "a5245a50-8191-4884-8d17-71b6c5e1d757",
            "user_id": "490b4bd9-f801-4935-bab2-170437d85534",
            "card_set_id": "0a5ec95f-e3cd-42d1-9901-8f1c43ee8344",
            "creator_id": "490b4bd9-f801-4935-bab2-170437d85534",
            "last_seen_at": "2019-11-01 01:22:49",
            "last_studied_at": "2019-11-01 01:22:49"
          },
          {
            "id": "de2784eb-e387-4554-b33b-3b5a825579bc",
            "user_id": "490b4bd9-f801-4935-bab2-170437d85534",
            "card_set_id": "67b44d0a-4bbd-413b-bd59-3af83b88b08d",
            "creator_id": "490b4bd9-f801-4935-bab2-170437d85534",
            "last_seen_at": "2020-04-20 04:34:12",
            "last_studied_at": "2020-04-20 04:34:12"
          },
          {
            "id": "f97feb62-da32-47f3-809f-4413294f6a2f",
            "user_id": "490b4bd9-f801-4935-bab2-170437d85534",
            "card_set_id": "4ab56c9a-19db-4743-9bb9-df89d91239ff",
            "creator_id": "490b4bd9-f801-4935-bab2-170437d85534",
            "last_seen_at": "2020-02-19 02:52:53",
            "last_studied_at": "2020-02-19 02:52:53"
          },
          {
            "id": "5488276b-f90d-4759-bb57-867c8565601b",
            "user_id": "490b4bd9-f801-4935-bab2-170437d85534",
            "card_set_id": "cce0c2b5-84bf-4b03-9b32-15c5b1eb1711",
            "creator_id": "490b4bd9-f801-4935-bab2-170437d85534",
            "last_seen_at": "2020-03-12 08:06:58",
            "last_studied_at": "2020-03-12 08:06:58"
          },
          {
            "id": "05023a56-dba8-49a6-aae5-338b3905233a",
            "user_id": "490b4bd9-f801-4935-bab2-170437d85534",
            "card_set_id": "7de707ce-b595-4041-a2ea-741c50f123c6",
            "creator_id": "490b4bd9-f801-4935-bab2-170437d85534",
            "last_seen_at": "2019-12-17 07:27:23",
            "last_studied_at": "2019-12-17 07:27:23"
          },
          {
            "id": "4d574efc-cee9-42c8-b7e2-2ccb73619557",
            "user_id": "490b4bd9-f801-4935-bab2-170437d85534",
            "card_set_id": "c9ea41b6-9eef-453b-bd29-008a9fce2f34",
            "creator_id": "490b4bd9-f801-4935-bab2-170437d85534",
            "last_seen_at": "2020-02-08 21:01:33",
            "last_studied_at": "2020-02-08 21:01:33"
          },
          {
            "id": "87ec9fe8-66ef-4b34-b0cc-41b5b2ae80ae",
            "user_id": "490b4bd9-f801-4935-bab2-170437d85534",
            "card_set_id": "a696e78d-65d0-45c0-9a19-8fd616dc4e5e",
            "creator_id": "490b4bd9-f801-4935-bab2-170437d85534",
            "last_seen_at": "2020-02-04 03:32:25",
            "last_studied_at": "2020-02-04 03:32:25"
          },
          {
            "id": "b6ec3a37-8aed-498a-94ed-21b73c777fe4",
            "user_id": "490b4bd9-f801-4935-bab2-170437d85534",
            "card_set_id": "932df9b2-62b4-4e0c-82e6-2719ab7c8a6a",
            "creator_id": "490b4bd9-f801-4935-bab2-170437d85534",
            "last_seen_at": "2020-02-17 22:51:18",
            "last_studied_at": "2020-02-17 22:51:18"
          },
          {
            "id": "732c47f3-78ce-4d1c-9485-1f704b855f78",
            "user_id": "490b4bd9-f801-4935-bab2-170437d85534",
            "card_set_id": "8eab5022-fb55-409a-8813-0c561683167e",
            "creator_id": "490b4bd9-f801-4935-bab2-170437d85534",
            "last_seen_at": "2019-12-29 14:47:57",
            "last_studied_at": "2019-12-29 14:47:57"
          },
          {
            "id": "a46887d0-5ef5-4117-9efc-112ae67b10c8",
            "user_id": "490b4bd9-f801-4935-bab2-170437d85534",
            "card_set_id": "b30a3751-c065-40f3-acba-d5abe4ee774b",
            "creator_id": "490b4bd9-f801-4935-bab2-170437d85534",
            "last_seen_at": "2020-01-11 07:55:21",
            "last_studied_at": "2020-01-11 07:55:21"
          },
          {
            "id": "fe1edc85-c4f3-4086-b956-b86650150703",
            "user_id": "2bae5a3a-52c6-4cce-9cd0-706819b46850",
            "card_set_id": "b52b60ed-4456-4c63-8597-b557efb66fba",
            "creator_id": "2bae5a3a-52c6-4cce-9cd0-706819b46850",
            "last_seen_at": "2019-11-06 14:04:37",
            "last_studied_at": "2019-11-06 14:04:37"
          },
          {
            "id": "9e655ffb-f05a-4309-b83f-92301ccd4485",
            "user_id": "2bae5a3a-52c6-4cce-9cd0-706819b46850",
            "card_set_id": "893d7f29-b6ad-4121-917f-1328ef754435",
            "creator_id": "2bae5a3a-52c6-4cce-9cd0-706819b46850",
            "last_seen_at": "2019-12-24 16:09:12",
            "last_studied_at": "2019-12-24 16:09:12"
          },
          {
            "id": "6f37c25c-729c-428e-b27e-e6238d0d9e29",
            "user_id": "2bae5a3a-52c6-4cce-9cd0-706819b46850",
            "card_set_id": "496ad61a-acab-4ce3-b7fc-5908f6ebee39",
            "creator_id": "2bae5a3a-52c6-4cce-9cd0-706819b46850",
            "last_seen_at": "2019-12-12 09:20:28",
            "last_studied_at": "2019-12-12 09:20:28"
          },
          {
            "id": "e2616c76-dd3c-46ad-9561-696f6bd5f6f3",
            "user_id": "2bae5a3a-52c6-4cce-9cd0-706819b46850",
            "card_set_id": "22a9ba42-6c13-4aa8-8831-ecb16ce8a610",
            "creator_id": "2bae5a3a-52c6-4cce-9cd0-706819b46850",
            "last_seen_at": "2020-03-07 19:56:30",
            "last_studied_at": "2020-03-07 19:56:30"
          },
          {
            "id": "fa9dfa65-754d-4cf7-b90b-9796891c0d99",
            "user_id": "2bae5a3a-52c6-4cce-9cd0-706819b46850",
            "card_set_id": "a3f239f2-1788-42f1-9a0d-c5ec4e81f01d",
            "creator_id": "2bae5a3a-52c6-4cce-9cd0-706819b46850",
            "last_seen_at": "2020-04-09 21:09:13",
            "last_studied_at": "2020-04-09 21:09:13"
          },
          {
            "id": "853430b9-64ff-4305-af9f-8920e87602a8",
            "user_id": "2bae5a3a-52c6-4cce-9cd0-706819b46850",
            "card_set_id": "67394788-f6be-46b4-ab88-8c5053e3c6dd",
            "creator_id": "2bae5a3a-52c6-4cce-9cd0-706819b46850",
            "last_seen_at": "2019-11-07 00:41:32",
            "last_studied_at": "2019-11-07 00:41:32"
          },
          {
            "id": "f70cf87a-dc7f-4f6b-9ea7-e956c2fb1b54",
            "user_id": "2bae5a3a-52c6-4cce-9cd0-706819b46850",
            "card_set_id": "2c42e308-ff84-4b3a-93fd-a1891736da97",
            "creator_id": "2bae5a3a-52c6-4cce-9cd0-706819b46850",
            "last_seen_at": "2019-11-27 07:51:09",
            "last_studied_at": "2019-11-27 07:51:09"
          },
          {
            "id": "dc5e3531-27ba-42b5-9c05-deca2ee28310",
            "user_id": "2bae5a3a-52c6-4cce-9cd0-706819b46850",
            "card_set_id": "f882c81b-77dc-4976-b718-f37e0efc232f",
            "creator_id": "2bae5a3a-52c6-4cce-9cd0-706819b46850",
            "last_seen_at": "2019-12-11 19:22:00",
            "last_studied_at": "2019-12-11 19:22:00"
          },
          {
            "id": "f336abd2-25ce-43bf-9bc5-1e56e048afad",
            "user_id": "2bae5a3a-52c6-4cce-9cd0-706819b46850",
            "card_set_id": "d2d9de78-6e8a-4c85-96e0-9e73dbd3bc2d",
            "creator_id": "2bae5a3a-52c6-4cce-9cd0-706819b46850",
            "last_seen_at": "2019-12-07 20:14:04",
            "last_studied_at": "2019-12-07 20:14:04"
          },
          {
            "id": "e2ff157f-64d0-4e86-a31b-2ff218d0b47d",
            "user_id": "e39c43e0-2296-4fe5-8f1e-91d114c3b822",
            "card_set_id": "71b2775c-145a-4fa6-b360-a11134fdc8b5",
            "creator_id": "e39c43e0-2296-4fe5-8f1e-91d114c3b822",
            "last_seen_at": "2019-12-09 23:01:13",
            "last_studied_at": "2019-12-09 23:01:13"
          },
          {
            "id": "f71bf587-c02f-4294-921e-dab09250472b",
            "user_id": "e39c43e0-2296-4fe5-8f1e-91d114c3b822",
            "card_set_id": "e7c0293d-b6b3-43b8-a494-1eeef7ad5d68",
            "creator_id": "e39c43e0-2296-4fe5-8f1e-91d114c3b822",
            "last_seen_at": "2020-03-11 04:06:43",
            "last_studied_at": "2020-03-11 04:06:43"
          },
          {
            "id": "3445fdd0-0616-48d2-83c4-1eed7f6ba654",
            "user_id": "e39c43e0-2296-4fe5-8f1e-91d114c3b822",
            "card_set_id": "3d34dd37-500a-47bb-a94c-678390064d96",
            "creator_id": "e39c43e0-2296-4fe5-8f1e-91d114c3b822",
            "last_seen_at": "2020-01-22 23:19:10",
            "last_studied_at": "2020-01-22 23:19:10"
          },
          {
            "id": "76766dec-648f-4766-822c-b6c879faa2b3",
            "user_id": "e39c43e0-2296-4fe5-8f1e-91d114c3b822",
            "card_set_id": "8d02e5e5-0871-4b37-bfc3-289bca996d2d",
            "creator_id": "e39c43e0-2296-4fe5-8f1e-91d114c3b822",
            "last_seen_at": "2019-11-30 07:00:38",
            "last_studied_at": "2019-11-30 07:00:38"
          },
          {
            "id": "baff0698-121c-4f39-966b-94631b3ef7a9",
            "user_id": "e39c43e0-2296-4fe5-8f1e-91d114c3b822",
            "card_set_id": "f7b21222-1678-47a2-a2ac-5645c052376e",
            "creator_id": "e39c43e0-2296-4fe5-8f1e-91d114c3b822",
            "last_seen_at": "2020-01-19 03:23:06",
            "last_studied_at": "2020-01-19 03:23:06"
          },
          {
            "id": "e12dae02-3d3c-4994-a8a6-24d7ad0c37c4",
            "user_id": "e39c43e0-2296-4fe5-8f1e-91d114c3b822",
            "card_set_id": "e7f76d44-f33b-456c-b104-77d917cbcdda",
            "creator_id": "e39c43e0-2296-4fe5-8f1e-91d114c3b822",
            "last_seen_at": "2020-01-19 15:54:20",
            "last_studied_at": "2020-01-19 15:54:20"
          },
          {
            "id": "72bee9cf-8269-4764-867f-0f7ab8c73cdd",
            "user_id": "e39c43e0-2296-4fe5-8f1e-91d114c3b822",
            "card_set_id": "6bfd155a-2b3a-4dc5-8f4a-cb7c1887138b",
            "creator_id": "e39c43e0-2296-4fe5-8f1e-91d114c3b822",
            "last_seen_at": "2019-11-24 04:48:43",
            "last_studied_at": "2019-11-24 04:48:43"
          },
          {
            "id": "51cf13f7-0feb-41c8-8052-689337f7ef1e",
            "user_id": "e39c43e0-2296-4fe5-8f1e-91d114c3b822",
            "card_set_id": "0a3d45dc-ba2f-48a0-ad21-569cf7fde5d3",
            "creator_id": "e39c43e0-2296-4fe5-8f1e-91d114c3b822",
            "last_seen_at": "2019-11-28 16:05:35",
            "last_studied_at": "2019-11-28 16:05:35"
          },
          {
            "id": "4e23b4f9-4fcf-497e-b576-dd42e165c484",
            "user_id": "e39c43e0-2296-4fe5-8f1e-91d114c3b822",
            "card_set_id": "16fd6c47-65cb-4bc0-abcf-79509121943d",
            "creator_id": "e39c43e0-2296-4fe5-8f1e-91d114c3b822",
            "last_seen_at": "2020-04-17 16:34:13",
            "last_studied_at": "2020-04-17 16:34:13"
          },
          {
            "id": "a250f49b-b91b-4fc7-88c7-01eb0bc36930",
            "user_id": "e39c43e0-2296-4fe5-8f1e-91d114c3b822",
            "card_set_id": "ccc003bd-d8c2-47a5-b656-8596b5be07eb",
            "creator_id": "e39c43e0-2296-4fe5-8f1e-91d114c3b822",
            "last_seen_at": "2020-01-31 21:37:21",
            "last_studied_at": "2020-01-31 21:37:21"
          },
          {
            "id": "1fb4c86b-e137-49c7-a3a1-da9b982493ef",
            "user_id": "e39c43e0-2296-4fe5-8f1e-91d114c3b822",
            "card_set_id": "b8ed113a-3660-446c-a5eb-60d8a0025252",
            "creator_id": "e39c43e0-2296-4fe5-8f1e-91d114c3b822",
            "last_seen_at": "2020-03-06 02:34:28",
            "last_studied_at": "2020-03-06 02:34:28"
          },
          {
            "id": "9048a834-f80b-4523-9eb8-6c3a76e8bc81",
            "user_id": "5d05f2a7-9399-4626-8568-dc655d5ac06d",
            "card_set_id": "91d75cc0-236b-4714-be05-a817d103bd5c",
            "creator_id": "5d05f2a7-9399-4626-8568-dc655d5ac06d",
            "last_seen_at": "2019-12-16 06:56:20",
            "last_studied_at": "2019-12-16 06:56:20"
          },
          {
            "id": "ba369a76-3173-4337-b35b-b5a3bc6d1326",
            "user_id": "5d05f2a7-9399-4626-8568-dc655d5ac06d",
            "card_set_id": "51f5c256-5daa-41ee-a4f9-f9466a02bcf7",
            "creator_id": "5d05f2a7-9399-4626-8568-dc655d5ac06d",
            "last_seen_at": "2019-11-03 14:34:04",
            "last_studied_at": "2019-11-03 14:34:04"
          },
          {
            "id": "a3bc19dc-a1e4-4d72-af48-946de97e07af",
            "user_id": "5d05f2a7-9399-4626-8568-dc655d5ac06d",
            "card_set_id": "43a4412f-0b33-4851-aec3-b1038cd203f2",
            "creator_id": "5d05f2a7-9399-4626-8568-dc655d5ac06d",
            "last_seen_at": "2020-01-15 04:24:59",
            "last_studied_at": "2020-01-15 04:24:59"
          },
          {
            "id": "f81d3083-b87b-442c-992c-b24f2c0114be",
            "user_id": "5d05f2a7-9399-4626-8568-dc655d5ac06d",
            "card_set_id": "8dfce199-7011-4292-b214-44d9713a1717",
            "creator_id": "5d05f2a7-9399-4626-8568-dc655d5ac06d",
            "last_seen_at": "2020-03-07 12:28:18",
            "last_studied_at": "2020-03-07 12:28:18"
          },
          {
            "id": "48f63318-60bc-4146-a2b4-90b8a860cdb4",
            "user_id": "493d491f-97e4-4b0b-9c2d-478c5ae32ccc",
            "card_set_id": "4b7801f1-d10e-49ce-b019-78015b5dd080",
            "creator_id": "493d491f-97e4-4b0b-9c2d-478c5ae32ccc",
            "last_seen_at": "2019-11-16 03:16:25",
            "last_studied_at": "2019-11-16 03:16:25"
          },
          {
            "id": "96be9856-3478-4cce-8d0c-4fd2355dc798",
            "user_id": "493d491f-97e4-4b0b-9c2d-478c5ae32ccc",
            "card_set_id": "b21edc76-904d-463d-ac95-0963fd247481",
            "creator_id": "493d491f-97e4-4b0b-9c2d-478c5ae32ccc",
            "last_seen_at": "2019-10-09 23:08:32",
            "last_studied_at": "2019-10-09 23:08:32"
          },
          {
            "id": "ff35821c-436a-45a5-be21-3fde4ad09c7e",
            "user_id": "493d491f-97e4-4b0b-9c2d-478c5ae32ccc",
            "card_set_id": "80ba6a63-5465-4665-adcc-2145394ba288",
            "creator_id": "493d491f-97e4-4b0b-9c2d-478c5ae32ccc",
            "last_seen_at": "2019-11-19 04:48:17",
            "last_studied_at": "2019-11-19 04:48:17"
          },
          {
            "id": "ce41e0e7-38a9-4ef5-aa09-877eae386805",
            "user_id": "493d491f-97e4-4b0b-9c2d-478c5ae32ccc",
            "card_set_id": "8ec0f7df-178e-47bd-b1cc-bcb6759bbc7c",
            "creator_id": "493d491f-97e4-4b0b-9c2d-478c5ae32ccc",
            "last_seen_at": "2019-12-24 21:00:16",
            "last_studied_at": "2019-12-24 21:00:16"
          },
          {
            "id": "ad558a40-460f-4e30-995a-02193b4d8ef8",
            "user_id": "493d491f-97e4-4b0b-9c2d-478c5ae32ccc",
            "card_set_id": "da2453f0-4421-4611-944d-99ba163a9020",
            "creator_id": "493d491f-97e4-4b0b-9c2d-478c5ae32ccc",
            "last_seen_at": "2020-02-16 21:00:21",
            "last_studied_at": "2020-02-16 21:00:21"
          },
          {
            "id": "0566e910-ff0e-4f94-a1ec-68ef0ff1b8c3",
            "user_id": "493d491f-97e4-4b0b-9c2d-478c5ae32ccc",
            "card_set_id": "845af084-772e-4d9c-a218-8da1690ecefd",
            "creator_id": "493d491f-97e4-4b0b-9c2d-478c5ae32ccc",
            "last_seen_at": "2020-02-03 10:53:11",
            "last_studied_at": "2020-02-03 10:53:11"
          },
          {
            "id": "2bd52e25-a9bc-491c-b02f-a34179194602",
            "user_id": "493d491f-97e4-4b0b-9c2d-478c5ae32ccc",
            "card_set_id": "67f05a2e-b8d6-40f7-8eb5-b6da42138ab8",
            "creator_id": "493d491f-97e4-4b0b-9c2d-478c5ae32ccc",
            "last_seen_at": "2019-10-23 10:53:36",
            "last_studied_at": "2019-10-23 10:53:36"
          },
          {
            "id": "8d957304-c193-488d-bf53-0811514a1be5",
            "user_id": "493d491f-97e4-4b0b-9c2d-478c5ae32ccc",
            "card_set_id": "f7bdc61d-d038-4704-9c01-68f2e228dfe3",
            "creator_id": "493d491f-97e4-4b0b-9c2d-478c5ae32ccc",
            "last_seen_at": "2019-10-31 14:27:51",
            "last_studied_at": "2019-10-31 14:27:51"
          },
          {
            "id": "a75a8898-113b-48f0-ad8f-59709657341a",
            "user_id": "493d491f-97e4-4b0b-9c2d-478c5ae32ccc",
            "card_set_id": "0273a863-4617-4ec9-bc94-23fb1f6540bc",
            "creator_id": "493d491f-97e4-4b0b-9c2d-478c5ae32ccc",
            "last_seen_at": "2019-12-23 02:18:08",
            "last_studied_at": "2019-12-23 02:18:08"
          },
          {
            "id": "14bef556-f5fb-47c3-934d-afdad7653f55",
            "user_id": "493d491f-97e4-4b0b-9c2d-478c5ae32ccc",
            "card_set_id": "2ed8a094-197e-423a-b4d9-d4171560b76e",
            "creator_id": "493d491f-97e4-4b0b-9c2d-478c5ae32ccc",
            "last_seen_at": "2019-10-30 07:32:30",
            "last_studied_at": "2019-10-30 07:32:30"
          },
          {
            "id": "54c30541-045a-47a3-aa16-9d63554650f1",
            "user_id": "493d491f-97e4-4b0b-9c2d-478c5ae32ccc",
            "card_set_id": "dbd345ff-b81c-4179-a5da-650dd3c40a77",
            "creator_id": "493d491f-97e4-4b0b-9c2d-478c5ae32ccc",
            "last_seen_at": "2020-01-02 22:49:07",
            "last_studied_at": "2020-01-02 22:49:07"
          },
          {
            "id": "2339115a-1758-4499-83d4-ea94ac900b46",
            "user_id": "493d491f-97e4-4b0b-9c2d-478c5ae32ccc",
            "card_set_id": "c84a0fda-89ea-478d-a1fc-64b4180b8cf4",
            "creator_id": "493d491f-97e4-4b0b-9c2d-478c5ae32ccc",
            "last_seen_at": "2020-01-24 22:01:29",
            "last_studied_at": "2020-01-24 22:01:29"
          },
          {
            "id": "07f1318f-c075-4184-a348-c2f9e38ef1e3",
            "user_id": "493d491f-97e4-4b0b-9c2d-478c5ae32ccc",
            "card_set_id": "fc4fe2b8-f184-4624-bc6d-ee9796a51823",
            "creator_id": "493d491f-97e4-4b0b-9c2d-478c5ae32ccc",
            "last_seen_at": "2020-01-06 21:15:01",
            "last_studied_at": "2020-01-06 21:15:01"
          },
          {
            "id": "df21afda-84f1-416f-8151-e890d230abbe",
            "user_id": "493d491f-97e4-4b0b-9c2d-478c5ae32ccc",
            "card_set_id": "4ad27181-5bbb-4c48-8fc1-8c956a4515dc",
            "creator_id": "493d491f-97e4-4b0b-9c2d-478c5ae32ccc",
            "last_seen_at": "2020-01-29 07:25:03",
            "last_studied_at": "2020-01-29 07:25:03"
          },
          {
            "id": "03785196-04ef-49cc-98c2-37d3c6101250",
            "user_id": "493d491f-97e4-4b0b-9c2d-478c5ae32ccc",
            "card_set_id": "2f6398c5-5330-4916-8731-f2e8f0f7aa75",
            "creator_id": "493d491f-97e4-4b0b-9c2d-478c5ae32ccc",
            "last_seen_at": "2019-10-21 04:51:27",
            "last_studied_at": "2019-10-21 04:51:27"
          },
          {
            "id": "f5028042-c3d9-4f52-95cc-500cf8cdfe65",
            "user_id": "493d491f-97e4-4b0b-9c2d-478c5ae32ccc",
            "card_set_id": "4e41f25d-a7e4-466d-8230-9a3c69c36881",
            "creator_id": "493d491f-97e4-4b0b-9c2d-478c5ae32ccc",
            "last_seen_at": "2019-12-20 18:26:02",
            "last_studied_at": "2019-12-20 18:26:02"
          },
          {
            "id": "d861a3d9-6cd3-46c2-ad6f-7725b7ffa1e8",
            "user_id": "493d491f-97e4-4b0b-9c2d-478c5ae32ccc",
            "card_set_id": "c0606d64-21a8-4788-870e-577f9608385a",
            "creator_id": "493d491f-97e4-4b0b-9c2d-478c5ae32ccc",
            "last_seen_at": "2020-03-05 13:43:39",
            "last_studied_at": "2020-03-05 13:43:39"
          },
          {
            "id": "82ee3557-dc1d-427e-8b9f-d826d812c78a",
            "user_id": "493d491f-97e4-4b0b-9c2d-478c5ae32ccc",
            "card_set_id": "4907ff27-7c89-44d2-a812-b121aca69c40",
            "creator_id": "493d491f-97e4-4b0b-9c2d-478c5ae32ccc",
            "last_seen_at": "2019-10-15 08:37:14",
            "last_studied_at": "2019-10-15 08:37:14"
          },
          {
            "id": "e7429c69-9d08-49f9-b0d4-0d78ded4f81f",
            "user_id": "493d491f-97e4-4b0b-9c2d-478c5ae32ccc",
            "card_set_id": "5a1bcd5a-d149-46e3-85ea-549f4bc1712b",
            "creator_id": "493d491f-97e4-4b0b-9c2d-478c5ae32ccc",
            "last_seen_at": "2020-03-19 18:01:16",
            "last_studied_at": "2020-03-19 18:01:16"
          },
          {
            "id": "d042c8dd-9a91-4e97-86f1-eab051e73b46",
            "user_id": "493d491f-97e4-4b0b-9c2d-478c5ae32ccc",
            "card_set_id": "f748aecc-652b-4a93-ad09-c41da8a2b5cc",
            "creator_id": "493d491f-97e4-4b0b-9c2d-478c5ae32ccc",
            "last_seen_at": "2019-12-03 08:07:22",
            "last_studied_at": "2019-12-03 08:07:22"
          },
          {
            "id": "5636a9fb-d24e-4b95-8479-2397457b3c11",
            "user_id": "0eb426ed-37d6-41b9-981f-994406b74b52",
            "card_set_id": "a8510f60-19b0-4213-9fde-1887f55151c1",
            "creator_id": "0eb426ed-37d6-41b9-981f-994406b74b52",
            "last_seen_at": "2019-11-26 18:02:21",
            "last_studied_at": "2019-11-26 18:02:21"
          },
          {
            "id": "1e313713-ca44-4325-936d-b563b12b5669",
            "user_id": "0eb426ed-37d6-41b9-981f-994406b74b52",
            "card_set_id": "50ef01cb-f311-41bd-bfc9-74eb3d8b6191",
            "creator_id": "0eb426ed-37d6-41b9-981f-994406b74b52",
            "last_seen_at": "2020-01-21 04:14:24",
            "last_studied_at": "2020-01-21 04:14:24"
          },
          {
            "id": "2780efef-4fae-44e4-bd06-83ad3808b077",
            "user_id": "0eb426ed-37d6-41b9-981f-994406b74b52",
            "card_set_id": "4bd91f55-482e-40d8-8ad1-bff05bf08804",
            "creator_id": "0eb426ed-37d6-41b9-981f-994406b74b52",
            "last_seen_at": "2020-03-04 08:29:59",
            "last_studied_at": "2020-03-04 08:29:59"
          },
          {
            "id": "ced75376-bbb8-4953-b12c-00b5ffb2160c",
            "user_id": "0eb426ed-37d6-41b9-981f-994406b74b52",
            "card_set_id": "f8d2e0a3-0841-4904-a1bc-7feee3402774",
            "creator_id": "0eb426ed-37d6-41b9-981f-994406b74b52",
            "last_seen_at": "2020-04-12 13:22:06",
            "last_studied_at": "2020-04-12 13:22:06"
          },
          {
            "id": "59717546-6c3e-4fd9-aded-4eb0d7ad0270",
            "user_id": "0eb426ed-37d6-41b9-981f-994406b74b52",
            "card_set_id": "7dd91546-4e93-4157-a23c-d141258ec4a4",
            "creator_id": "0eb426ed-37d6-41b9-981f-994406b74b52",
            "last_seen_at": "2020-02-14 23:31:34",
            "last_studied_at": "2020-02-14 23:31:34"
          },
          {
            "id": "1c9af668-29f9-4a96-a707-b90429366cab",
            "user_id": "0eb426ed-37d6-41b9-981f-994406b74b52",
            "card_set_id": "0dba1ae1-6158-4c0c-8e41-db2cead86cca",
            "creator_id": "0eb426ed-37d6-41b9-981f-994406b74b52",
            "last_seen_at": "2019-11-17 05:38:53",
            "last_studied_at": "2019-11-17 05:38:53"
          },
          {
            "id": "47b68809-aef5-4219-b609-1e5334cb769d",
            "user_id": "0eb426ed-37d6-41b9-981f-994406b74b52",
            "card_set_id": "94c9bbc4-c4f8-48f7-b486-83e1c4315970",
            "creator_id": "0eb426ed-37d6-41b9-981f-994406b74b52",
            "last_seen_at": "2020-02-07 02:00:49",
            "last_studied_at": "2020-02-07 02:00:49"
          },
          {
            "id": "f56a926d-f9de-4e38-8f18-3d0b66217118",
            "user_id": "3dc4b881-abf0-400c-999f-10235ce2639d",
            "card_set_id": "e678f204-c7df-4040-9feb-91928983ba0a",
            "creator_id": "3dc4b881-abf0-400c-999f-10235ce2639d",
            "last_seen_at": "2019-11-30 08:48:25",
            "last_studied_at": "2019-11-30 08:48:25"
          },
          {
            "id": "1989317a-9de2-4f00-9ff3-cf3aa27f3a3f",
            "user_id": "3dc4b881-abf0-400c-999f-10235ce2639d",
            "card_set_id": "943f4c98-7144-4a19-91b3-783d0f4c4591",
            "creator_id": "3dc4b881-abf0-400c-999f-10235ce2639d",
            "last_seen_at": "2019-10-18 02:20:24",
            "last_studied_at": "2019-10-18 02:20:24"
          },
          {
            "id": "154615bb-f56e-4665-8007-4e807f8c7b40",
            "user_id": "3dc4b881-abf0-400c-999f-10235ce2639d",
            "card_set_id": "583bd3ad-5dee-429b-9738-f48ab9e3949e",
            "creator_id": "3dc4b881-abf0-400c-999f-10235ce2639d",
            "last_seen_at": "2020-03-09 15:36:56",
            "last_studied_at": "2020-03-09 15:36:56"
          },
          {
            "id": "6b05a89c-6cdc-4218-bc70-e91ffec1e208",
            "user_id": "3dc4b881-abf0-400c-999f-10235ce2639d",
            "card_set_id": "4e086f7a-2919-425d-a000-7aa24f0a336c",
            "creator_id": "3dc4b881-abf0-400c-999f-10235ce2639d",
            "last_seen_at": "2019-10-21 22:56:28",
            "last_studied_at": "2019-10-21 22:56:28"
          },
          {
            "id": "40242071-bf91-4939-9da7-156f3772e9bc",
            "user_id": "3dc4b881-abf0-400c-999f-10235ce2639d",
            "card_set_id": "8fa44a36-e871-4573-b33a-3ce0d1f77cb1",
            "creator_id": "3dc4b881-abf0-400c-999f-10235ce2639d",
            "last_seen_at": "2019-11-01 01:32:16",
            "last_studied_at": "2019-11-01 01:32:16"
          },
          {
            "id": "99599a61-391d-4663-b299-84bc20ced995",
            "user_id": "3dc4b881-abf0-400c-999f-10235ce2639d",
            "card_set_id": "7ca97018-f062-469d-90e3-aeee55868e7a",
            "creator_id": "3dc4b881-abf0-400c-999f-10235ce2639d",
            "last_seen_at": "2020-02-29 08:01:15",
            "last_studied_at": "2020-02-29 08:01:15"
          },
          {
            "id": "752eaa22-9ca8-49e8-b2d6-be4133165064",
            "user_id": "3dc4b881-abf0-400c-999f-10235ce2639d",
            "card_set_id": "21f2680d-c49c-4668-b7be-0f14ba8670f5",
            "creator_id": "3dc4b881-abf0-400c-999f-10235ce2639d",
            "last_seen_at": "2020-03-31 04:18:14",
            "last_studied_at": "2020-03-31 04:18:14"
          },
          {
            "id": "7d669ca5-a4a6-426a-b525-5b7413d1fc7a",
            "user_id": "3dc4b881-abf0-400c-999f-10235ce2639d",
            "card_set_id": "6aa01801-0597-45ce-aa97-a0b5da97a422",
            "creator_id": "3dc4b881-abf0-400c-999f-10235ce2639d",
            "last_seen_at": "2020-03-01 12:48:57",
            "last_studied_at": "2020-03-01 12:48:57"
          },
          {
            "id": "b2791ac6-58d4-4df3-986c-b9a0da023f50",
            "user_id": "3dc4b881-abf0-400c-999f-10235ce2639d",
            "card_set_id": "c6372de4-231e-4825-a808-c1a54d8c197e",
            "creator_id": "3dc4b881-abf0-400c-999f-10235ce2639d",
            "last_seen_at": "2020-01-18 10:33:16",
            "last_studied_at": "2020-01-18 10:33:16"
          },
          {
            "id": "3aa1953e-6f99-4b8c-9b13-de85a8a3949b",
            "user_id": "3dc4b881-abf0-400c-999f-10235ce2639d",
            "card_set_id": "2e6ea699-524a-464e-a4e0-cf131ed8942f",
            "creator_id": "3dc4b881-abf0-400c-999f-10235ce2639d",
            "last_seen_at": "2019-12-24 20:53:18",
            "last_studied_at": "2019-12-24 20:53:18"
          },
          {
            "id": "b00f46cd-44d4-42b2-9204-80add0db8f29",
            "user_id": "3dc4b881-abf0-400c-999f-10235ce2639d",
            "card_set_id": "b3611b4e-91c8-4e68-925d-dc192deb7756",
            "creator_id": "3dc4b881-abf0-400c-999f-10235ce2639d",
            "last_seen_at": "2019-11-02 14:32:34",
            "last_studied_at": "2019-11-02 14:32:34"
          },
          {
            "id": "8e78e3d9-a098-42d4-9a76-d1a2da866ce3",
            "user_id": "3dc4b881-abf0-400c-999f-10235ce2639d",
            "card_set_id": "01c3bd4e-16ea-4d01-9705-0dbfdb40a6c4",
            "creator_id": "3dc4b881-abf0-400c-999f-10235ce2639d",
            "last_seen_at": "2020-04-13 01:18:52",
            "last_studied_at": "2020-04-13 01:18:52"
          },
          {
            "id": "1bcf1642-1342-41c7-a061-a4ceed08dfec",
            "user_id": "3dc4b881-abf0-400c-999f-10235ce2639d",
            "card_set_id": "b39dea85-9808-4ec5-8588-bab3d7b60e65",
            "creator_id": "3dc4b881-abf0-400c-999f-10235ce2639d",
            "last_seen_at": "2019-11-24 03:58:32",
            "last_studied_at": "2019-11-24 03:58:32"
          },
          {
            "id": "8c76f19a-25fa-43ef-857a-c114a4f4c616",
            "user_id": "3dc4b881-abf0-400c-999f-10235ce2639d",
            "card_set_id": "04e29289-127b-47e6-9a9e-2700b4d6323a",
            "creator_id": "3dc4b881-abf0-400c-999f-10235ce2639d",
            "last_seen_at": "2019-11-06 11:09:08",
            "last_studied_at": "2019-11-06 11:09:08"
          },
          {
            "id": "bb080f91-e2cb-42c8-b781-c848a979bc26",
            "user_id": "3dc4b881-abf0-400c-999f-10235ce2639d",
            "card_set_id": "98a0ce0e-f4fe-416d-a341-d7a7f83d7c2b",
            "creator_id": "3dc4b881-abf0-400c-999f-10235ce2639d",
            "last_seen_at": "2020-04-20 22:16:21",
            "last_studied_at": "2020-04-20 22:16:21"
          },
          {
            "id": "2a796e93-9e59-4f27-bc7c-0a03a5776e1a",
            "user_id": "3dc4b881-abf0-400c-999f-10235ce2639d",
            "card_set_id": "a46d9ea0-2099-4fc3-8bcb-20b8fb8e3d1c",
            "creator_id": "3dc4b881-abf0-400c-999f-10235ce2639d",
            "last_seen_at": "2019-10-29 05:27:05",
            "last_studied_at": "2019-10-29 05:27:05"
          },
          {
            "id": "9d6f45c2-38c7-4853-b86a-21670f14da6b",
            "user_id": "3dc4b881-abf0-400c-999f-10235ce2639d",
            "card_set_id": "aea8dbca-24a0-46b7-8055-31e882280b67",
            "creator_id": "3dc4b881-abf0-400c-999f-10235ce2639d",
            "last_seen_at": "2019-11-28 16:25:38",
            "last_studied_at": "2019-11-28 16:25:38"
          },
          {
            "id": "83cb78ef-d781-4f74-8a91-061c4fee14e6",
            "user_id": "3dc4b881-abf0-400c-999f-10235ce2639d",
            "card_set_id": "a30ecd2f-ad31-4174-8a4c-0b7b3680c8c7",
            "creator_id": "3dc4b881-abf0-400c-999f-10235ce2639d",
            "last_seen_at": "2019-10-29 11:55:45",
            "last_studied_at": "2019-10-29 11:55:45"
          },
          {
            "id": "31246079-446f-42c5-a1c5-bb257479296a",
            "user_id": "3dc4b881-abf0-400c-999f-10235ce2639d",
            "card_set_id": "057f54c0-201e-4766-8173-2c15f04a4ef6",
            "creator_id": "3dc4b881-abf0-400c-999f-10235ce2639d",
            "last_seen_at": "2020-01-25 21:53:56",
            "last_studied_at": "2020-01-25 21:53:56"
          },
          {
            "id": "aa21dbf9-0ff4-460e-bd67-f69d62255844",
            "user_id": "3dc4b881-abf0-400c-999f-10235ce2639d",
            "card_set_id": "0ec37c01-7f11-4671-8e6c-b8f79b84d8dc",
            "creator_id": "3dc4b881-abf0-400c-999f-10235ce2639d",
            "last_seen_at": "2020-02-08 17:57:18",
            "last_studied_at": "2020-02-08 17:57:18"
          },
          {
            "id": "2b4f590d-1a97-4eeb-bb15-d182f5bc4a78",
            "user_id": "3dc4b881-abf0-400c-999f-10235ce2639d",
            "card_set_id": "c3b38707-d075-4d00-860e-07b56706e80e",
            "creator_id": "3dc4b881-abf0-400c-999f-10235ce2639d",
            "last_seen_at": "2020-03-05 06:04:04",
            "last_studied_at": "2020-03-05 06:04:04"
          },
          {
            "id": "81428784-2183-4b56-8143-c9aa3714da85",
            "user_id": "3dc4b881-abf0-400c-999f-10235ce2639d",
            "card_set_id": "fedeee77-1d40-4311-a91d-b10a06dd314c",
            "creator_id": "3dc4b881-abf0-400c-999f-10235ce2639d",
            "last_seen_at": "2020-01-26 09:28:45",
            "last_studied_at": "2020-01-26 09:28:45"
          },
          {
            "id": "0e79753c-bd77-43db-b0c2-b4e2ac813596",
            "user_id": "3dc4b881-abf0-400c-999f-10235ce2639d",
            "card_set_id": "58959342-1eef-42aa-a765-a89e5a59f357",
            "creator_id": "3dc4b881-abf0-400c-999f-10235ce2639d",
            "last_seen_at": "2020-02-01 09:09:44",
            "last_studied_at": "2020-02-01 09:09:44"
          },
          {
            "id": "85bb7e13-a586-4e4c-910d-da980a426e90",
            "user_id": "3dc4b881-abf0-400c-999f-10235ce2639d",
            "card_set_id": "43ee4ba6-f0f2-45e7-a2e0-20f4dbb1d75b",
            "creator_id": "3dc4b881-abf0-400c-999f-10235ce2639d",
            "last_seen_at": "2020-04-13 13:33:12",
            "last_studied_at": "2020-04-13 13:33:12"
          },
          {
            "id": "5ab1d289-475d-43fd-814c-a80ccd7a59a3",
            "user_id": "3dc4b881-abf0-400c-999f-10235ce2639d",
            "card_set_id": "72b95f0b-c563-43bb-8cd4-c9a6a62da070",
            "creator_id": "3dc4b881-abf0-400c-999f-10235ce2639d",
            "last_seen_at": "2020-03-26 13:26:42",
            "last_studied_at": "2020-03-26 13:26:42"
          },
          {
            "id": "e27e9ec4-897e-433a-b0d9-a26b88749818",
            "user_id": "3dc4b881-abf0-400c-999f-10235ce2639d",
            "card_set_id": "cb94618c-5026-471c-bd41-448e21dfae22",
            "creator_id": "3dc4b881-abf0-400c-999f-10235ce2639d",
            "last_seen_at": "2019-12-04 21:28:55",
            "last_studied_at": "2019-12-04 21:28:55"
          },
          {
            "id": "635119ff-2e93-4dda-9a0f-d543d490541a",
            "user_id": "3dc4b881-abf0-400c-999f-10235ce2639d",
            "card_set_id": "d8c56f0b-c9f4-4358-a8bd-bdb079df092e",
            "creator_id": "3dc4b881-abf0-400c-999f-10235ce2639d",
            "last_seen_at": "2020-01-29 14:09:13",
            "last_studied_at": "2020-01-29 14:09:13"
          },
          {
            "id": "934daaef-aaa8-4bf8-82c4-b862562571bb",
            "user_id": "3dc4b881-abf0-400c-999f-10235ce2639d",
            "card_set_id": "aa7c799b-be89-4030-a6b9-5842df21385c",
            "creator_id": "3dc4b881-abf0-400c-999f-10235ce2639d",
            "last_seen_at": "2019-11-22 05:42:17",
            "last_studied_at": "2019-11-22 05:42:17"
          },
          {
            "id": "0267e2d9-0630-42e3-a1b7-367a8c2faca3",
            "user_id": "3dc4b881-abf0-400c-999f-10235ce2639d",
            "card_set_id": "3136f02e-6138-40f6-abe2-cde81f236d21",
            "creator_id": "3dc4b881-abf0-400c-999f-10235ce2639d",
            "last_seen_at": "2019-10-15 15:24:07",
            "last_studied_at": "2019-10-15 15:24:07"
          },
          {
            "id": "56d148d6-9f6e-4567-bd8b-d410cf40f82e",
            "user_id": "3dc4b881-abf0-400c-999f-10235ce2639d",
            "card_set_id": "6668ffb3-fcea-4958-bbcc-a2d3797b0a52",
            "creator_id": "3dc4b881-abf0-400c-999f-10235ce2639d",
            "last_seen_at": "2019-10-31 06:44:38",
            "last_studied_at": "2019-10-31 06:44:38"
          },
          {
            "id": "174408db-25cf-43c7-bf72-acb565a66a38",
            "user_id": "3dc4b881-abf0-400c-999f-10235ce2639d",
            "card_set_id": "bf8fcd56-62cc-4342-8560-5b3e478ba945",
            "creator_id": "3dc4b881-abf0-400c-999f-10235ce2639d",
            "last_seen_at": "2020-03-27 01:57:29",
            "last_studied_at": "2020-03-27 01:57:29"
          },
          {
            "id": "eb0a5300-d033-4177-a29d-6e9e482bd68f",
            "user_id": "3dc4b881-abf0-400c-999f-10235ce2639d",
            "card_set_id": "29f824a5-59a6-49ac-b189-5f360c57f654",
            "creator_id": "3dc4b881-abf0-400c-999f-10235ce2639d",
            "last_seen_at": "2019-10-26 09:40:36",
            "last_studied_at": "2019-10-26 09:40:36"
          },
          {
            "id": "db7f10a6-a752-45c9-a478-67da0f8a46e9",
            "user_id": "a0265de3-adec-4328-8171-d010256f6db9",
            "card_set_id": "abe56c5f-2bd0-4dd7-aa0e-ce58b5a7eda5",
            "creator_id": "a0265de3-adec-4328-8171-d010256f6db9",
            "last_seen_at": "2019-12-25 14:41:40",
            "last_studied_at": "2019-12-25 14:41:40"
          },
          {
            "id": "ed2f16ec-1803-46ac-9110-cd2870b768b9",
            "user_id": "a0265de3-adec-4328-8171-d010256f6db9",
            "card_set_id": "2bbb1067-a173-498e-a87f-bf4b789b93ac",
            "creator_id": "a0265de3-adec-4328-8171-d010256f6db9",
            "last_seen_at": "2020-01-21 14:50:12",
            "last_studied_at": "2020-01-21 14:50:12"
          },
          {
            "id": "d115d626-3049-4f7a-8bcf-c79978136797",
            "user_id": "a0265de3-adec-4328-8171-d010256f6db9",
            "card_set_id": "f5c5c758-eaab-4ce9-81f1-7012903422f3",
            "creator_id": "a0265de3-adec-4328-8171-d010256f6db9",
            "last_seen_at": "2019-10-30 18:54:13",
            "last_studied_at": "2019-10-30 18:54:13"
          },
          {
            "id": "08c211bd-feb6-43dc-aee8-5b86bc0a408a",
            "user_id": "a0265de3-adec-4328-8171-d010256f6db9",
            "card_set_id": "70d9eeae-f64c-4641-acf4-731e76b4fd81",
            "creator_id": "a0265de3-adec-4328-8171-d010256f6db9",
            "last_seen_at": "2019-10-08 07:10:25",
            "last_studied_at": "2019-10-08 07:10:25"
          },
          {
            "id": "814f1033-749c-42f6-855c-90b3cf72a172",
            "user_id": "a0265de3-adec-4328-8171-d010256f6db9",
            "card_set_id": "db5304eb-24b6-4059-a3c3-da07181b0f95",
            "creator_id": "a0265de3-adec-4328-8171-d010256f6db9",
            "last_seen_at": "2020-01-04 10:35:58",
            "last_studied_at": "2020-01-04 10:35:58"
          },
          {
            "id": "abd77a1c-fa4c-4697-8ec7-81d02644614f",
            "user_id": "a0265de3-adec-4328-8171-d010256f6db9",
            "card_set_id": "607e0b6d-d38e-4efd-aabd-4ba1b607f416",
            "creator_id": "a0265de3-adec-4328-8171-d010256f6db9",
            "last_seen_at": "2020-01-22 19:31:48",
            "last_studied_at": "2020-01-22 19:31:48"
          },
          {
            "id": "793c7050-6462-4ddc-8b9a-84cb75ba0508",
            "user_id": "a0265de3-adec-4328-8171-d010256f6db9",
            "card_set_id": "7fdae067-441a-4af1-8406-779a999e5ecf",
            "creator_id": "a0265de3-adec-4328-8171-d010256f6db9",
            "last_seen_at": "2019-12-14 20:26:30",
            "last_studied_at": "2019-12-14 20:26:30"
          },
          {
            "id": "0be29dbc-6e73-47c8-912d-b15eaa5f8152",
            "user_id": "a0265de3-adec-4328-8171-d010256f6db9",
            "card_set_id": "350b2411-659e-44b3-9af1-11e167d27ae4",
            "creator_id": "a0265de3-adec-4328-8171-d010256f6db9",
            "last_seen_at": "2019-12-25 07:38:13",
            "last_studied_at": "2019-12-25 07:38:13"
          },
          {
            "id": "16f526c8-acb1-4dbf-bb2e-02ceff0bf6e7",
            "user_id": "a0265de3-adec-4328-8171-d010256f6db9",
            "card_set_id": "815f24f9-7bc3-4438-8a5a-196469481348",
            "creator_id": "a0265de3-adec-4328-8171-d010256f6db9",
            "last_seen_at": "2019-12-16 08:13:37",
            "last_studied_at": "2019-12-16 08:13:37"
          },
          {
            "id": "738552e1-dc32-4acb-92d5-19d3a48647f9",
            "user_id": "a0265de3-adec-4328-8171-d010256f6db9",
            "card_set_id": "941d7a96-32dd-4fd8-b38a-9a7c00f4a641",
            "creator_id": "a0265de3-adec-4328-8171-d010256f6db9",
            "last_seen_at": "2019-10-09 22:25:00",
            "last_studied_at": "2019-10-09 22:25:00"
          },
          {
            "id": "c8139c20-068a-4810-9104-1c675539b827",
            "user_id": "a0265de3-adec-4328-8171-d010256f6db9",
            "card_set_id": "cd02dac9-e7ac-4236-b345-61c16c0e936e",
            "creator_id": "a0265de3-adec-4328-8171-d010256f6db9",
            "last_seen_at": "2020-04-17 13:23:45",
            "last_studied_at": "2020-04-17 13:23:45"
          },
          {
            "id": "1e0cff3d-8f75-4bb5-9dec-86f811e27d6b",
            "user_id": "a0265de3-adec-4328-8171-d010256f6db9",
            "card_set_id": "ed1ae904-e789-443c-9b44-ca46c188e55f",
            "creator_id": "a0265de3-adec-4328-8171-d010256f6db9",
            "last_seen_at": "2019-10-27 20:48:45",
            "last_studied_at": "2019-10-27 20:48:45"
          },
          {
            "id": "dee84e61-07e9-406a-b062-fd3e11d9e052",
            "user_id": "a0265de3-adec-4328-8171-d010256f6db9",
            "card_set_id": "bd79a30b-d379-48e1-bf97-ee610953ecce",
            "creator_id": "a0265de3-adec-4328-8171-d010256f6db9",
            "last_seen_at": "2020-04-17 18:48:53",
            "last_studied_at": "2020-04-17 18:48:53"
          },
          {
            "id": "5c5fc072-20c6-4bbe-89f7-e9fadc6c6084",
            "user_id": "a0265de3-adec-4328-8171-d010256f6db9",
            "card_set_id": "5aa89a6a-e04c-4641-87b4-c08e25caf71c",
            "creator_id": "a0265de3-adec-4328-8171-d010256f6db9",
            "last_seen_at": "2020-04-13 22:12:29",
            "last_studied_at": "2020-04-13 22:12:29"
          },
          {
            "id": "ebb60222-8810-4381-9831-213eeec588a3",
            "user_id": "a0265de3-adec-4328-8171-d010256f6db9",
            "card_set_id": "ddf54629-6e58-45f3-b4d3-b4384001945b",
            "creator_id": "a0265de3-adec-4328-8171-d010256f6db9",
            "last_seen_at": "2019-12-10 23:21:52",
            "last_studied_at": "2019-12-10 23:21:52"
          },
          {
            "id": "ded9d335-76e6-435f-ba1b-423ecc3559d2",
            "user_id": "a0265de3-adec-4328-8171-d010256f6db9",
            "card_set_id": "f39430cf-51c0-4d6c-82d9-6461c441cc38",
            "creator_id": "a0265de3-adec-4328-8171-d010256f6db9",
            "last_seen_at": "2020-01-12 05:44:38",
            "last_studied_at": "2020-01-12 05:44:38"
          },
          {
            "id": "85a63a81-49c1-49e0-a4dc-72b0e020b23f",
            "user_id": "a0265de3-adec-4328-8171-d010256f6db9",
            "card_set_id": "30e26ee7-9b48-4134-9aef-6b6b5daeb528",
            "creator_id": "a0265de3-adec-4328-8171-d010256f6db9",
            "last_seen_at": "2019-12-30 22:33:26",
            "last_studied_at": "2019-12-30 22:33:26"
          },
          {
            "id": "412c1854-1b2b-4568-a05c-8a7b8e4c922f",
            "user_id": "a0265de3-adec-4328-8171-d010256f6db9",
            "card_set_id": "7058590c-936d-4e07-a03c-3646ebce4a90",
            "creator_id": "a0265de3-adec-4328-8171-d010256f6db9",
            "last_seen_at": "2019-10-18 04:55:11",
            "last_studied_at": "2019-10-18 04:55:11"
          },
          {
            "id": "99358029-e533-4311-a3ff-50df1da3e270",
            "user_id": "3ef8558f-ffa6-4954-815b-1ec93218735b",
            "card_set_id": "3de7759a-43c4-41ef-814f-3dedd64695e2",
            "creator_id": "3ef8558f-ffa6-4954-815b-1ec93218735b",
            "last_seen_at": "2020-02-02 15:27:36",
            "last_studied_at": "2020-02-02 15:27:36"
          },
          {
            "id": "684071f8-3df9-4610-bace-f4ae09f1dd11",
            "user_id": "3ef8558f-ffa6-4954-815b-1ec93218735b",
            "card_set_id": "ca526f9e-81ea-4e2a-9fb6-ce81bf1db013",
            "creator_id": "3ef8558f-ffa6-4954-815b-1ec93218735b",
            "last_seen_at": "2020-02-01 22:13:11",
            "last_studied_at": "2020-02-01 22:13:11"
          },
          {
            "id": "4e20f85d-3c85-4a8d-af16-2e38686adba6",
            "user_id": "3ef8558f-ffa6-4954-815b-1ec93218735b",
            "card_set_id": "01c43f13-32d1-4410-a4bb-015f81a3b231",
            "creator_id": "3ef8558f-ffa6-4954-815b-1ec93218735b",
            "last_seen_at": "2019-11-05 22:15:39",
            "last_studied_at": "2019-11-05 22:15:39"
          },
          {
            "id": "27ae48f2-d03f-4191-8996-15e7317a7839",
            "user_id": "3ef8558f-ffa6-4954-815b-1ec93218735b",
            "card_set_id": "580eae3b-314b-4d9a-8bd0-4a68e22459cd",
            "creator_id": "3ef8558f-ffa6-4954-815b-1ec93218735b",
            "last_seen_at": "2020-04-07 05:12:00",
            "last_studied_at": "2020-04-07 05:12:00"
          },
          {
            "id": "914f374a-2944-4178-871b-8924b52acad1",
            "user_id": "3ef8558f-ffa6-4954-815b-1ec93218735b",
            "card_set_id": "54fcc1dc-e3ff-4019-8ef5-378def2d7351",
            "creator_id": "3ef8558f-ffa6-4954-815b-1ec93218735b",
            "last_seen_at": "2020-03-05 22:23:37",
            "last_studied_at": "2020-03-05 22:23:37"
          },
          {
            "id": "aa93a450-c741-489e-9cd7-5491f6de880c",
            "user_id": "3ef8558f-ffa6-4954-815b-1ec93218735b",
            "card_set_id": "94950ce0-4a1e-49b0-bc95-a3acc2f50d40",
            "creator_id": "3ef8558f-ffa6-4954-815b-1ec93218735b",
            "last_seen_at": "2019-10-09 08:37:58",
            "last_studied_at": "2019-10-09 08:37:58"
          },
          {
            "id": "0ddfe60f-557f-4c92-954c-112e50b11f04",
            "user_id": "de18d28a-ca75-4c96-8b86-ce3cfe97f48c",
            "card_set_id": "5d68031e-7d56-4662-a19d-ad2357edc624",
            "creator_id": "de18d28a-ca75-4c96-8b86-ce3cfe97f48c",
            "last_seen_at": "2019-11-01 14:27:43",
            "last_studied_at": "2019-11-01 14:27:43"
          },
          {
            "id": "a8f38ffe-f285-4733-94b2-78b8b83d2208",
            "user_id": "de18d28a-ca75-4c96-8b86-ce3cfe97f48c",
            "card_set_id": "b1483c2b-e8ef-4916-8aae-cad674709c15",
            "creator_id": "de18d28a-ca75-4c96-8b86-ce3cfe97f48c",
            "last_seen_at": "2020-02-06 23:31:04",
            "last_studied_at": "2020-02-06 23:31:04"
          },
          {
            "id": "f83abb1b-36e4-412b-8b8d-80eab31a8d8f",
            "user_id": "de18d28a-ca75-4c96-8b86-ce3cfe97f48c",
            "card_set_id": "6d3fb0e7-e1ba-416d-ba6f-ee3630f145f6",
            "creator_id": "de18d28a-ca75-4c96-8b86-ce3cfe97f48c",
            "last_seen_at": "2020-02-13 10:08:16",
            "last_studied_at": "2020-02-13 10:08:16"
          },
          {
            "id": "3b2ec224-6a41-4ed6-a38f-818fb4babb9a",
            "user_id": "de18d28a-ca75-4c96-8b86-ce3cfe97f48c",
            "card_set_id": "96f74883-fdec-40a4-9fc9-cb0e5b650797",
            "creator_id": "de18d28a-ca75-4c96-8b86-ce3cfe97f48c",
            "last_seen_at": "2020-01-18 09:50:50",
            "last_studied_at": "2020-01-18 09:50:50"
          },
          {
            "id": "a60a78a8-e7d2-4ad6-9235-79420dc8e424",
            "user_id": "de18d28a-ca75-4c96-8b86-ce3cfe97f48c",
            "card_set_id": "e529d1c7-3d0c-4c9f-942a-861ac0793666",
            "creator_id": "de18d28a-ca75-4c96-8b86-ce3cfe97f48c",
            "last_seen_at": "2019-12-23 11:03:58",
            "last_studied_at": "2019-12-23 11:03:58"
          },
          {
            "id": "0a45ea8b-e5d4-4714-81ff-60e4013a0527",
            "user_id": "de18d28a-ca75-4c96-8b86-ce3cfe97f48c",
            "card_set_id": "90537ee2-ca20-4147-8c4c-f8578ecc91ba",
            "creator_id": "de18d28a-ca75-4c96-8b86-ce3cfe97f48c",
            "last_seen_at": "2020-01-11 10:24:47",
            "last_studied_at": "2020-01-11 10:24:47"
          },
          {
            "id": "2655fe4a-f2ec-4b8c-ab17-cf93e54c98b7",
            "user_id": "de18d28a-ca75-4c96-8b86-ce3cfe97f48c",
            "card_set_id": "ac3d5812-2d80-42b8-932b-0071540933d8",
            "creator_id": "de18d28a-ca75-4c96-8b86-ce3cfe97f48c",
            "last_seen_at": "2019-12-14 20:20:38",
            "last_studied_at": "2019-12-14 20:20:38"
          },
          {
            "id": "19554ca4-e0c5-4fb5-a0d7-8e7639444edd",
            "user_id": "de18d28a-ca75-4c96-8b86-ce3cfe97f48c",
            "card_set_id": "e69c9b85-08cc-4ef4-b3bc-d28b88a52a14",
            "creator_id": "de18d28a-ca75-4c96-8b86-ce3cfe97f48c",
            "last_seen_at": "2019-11-13 13:58:22",
            "last_studied_at": "2019-11-13 13:58:22"
          },
          {
            "id": "bf4400cc-d51e-4274-9c9e-eb6432945728",
            "user_id": "de18d28a-ca75-4c96-8b86-ce3cfe97f48c",
            "card_set_id": "e9360d57-1653-4604-9ed9-be25c46df533",
            "creator_id": "de18d28a-ca75-4c96-8b86-ce3cfe97f48c",
            "last_seen_at": "2020-02-19 23:41:49",
            "last_studied_at": "2020-02-19 23:41:49"
          },
          {
            "id": "56ec6f70-240d-4e7c-861e-eb2f1accfa7b",
            "user_id": "de18d28a-ca75-4c96-8b86-ce3cfe97f48c",
            "card_set_id": "62b34cc3-6d10-4028-9882-d6bd4c0c614a",
            "creator_id": "de18d28a-ca75-4c96-8b86-ce3cfe97f48c",
            "last_seen_at": "2019-10-12 21:16:41",
            "last_studied_at": "2019-10-12 21:16:41"
          },
          {
            "id": "71fb7757-0c66-4609-9bb0-8c697d0a42a1",
            "user_id": "de18d28a-ca75-4c96-8b86-ce3cfe97f48c",
            "card_set_id": "fea117f2-f730-4bf7-930e-e9f77dff4682",
            "creator_id": "de18d28a-ca75-4c96-8b86-ce3cfe97f48c",
            "last_seen_at": "2020-03-09 08:12:44",
            "last_studied_at": "2020-03-09 08:12:44"
          },
          {
            "id": "6a7f78ef-bbe5-44fa-869a-39eb6c2c70df",
            "user_id": "de18d28a-ca75-4c96-8b86-ce3cfe97f48c",
            "card_set_id": "22114e19-4a1f-4c8a-b6b5-1b033d9586d0",
            "creator_id": "de18d28a-ca75-4c96-8b86-ce3cfe97f48c",
            "last_seen_at": "2020-03-13 17:24:47",
            "last_studied_at": "2020-03-13 17:24:47"
          },
          {
            "id": "533103b7-cda6-440c-b781-82d13ed41a5c",
            "user_id": "de18d28a-ca75-4c96-8b86-ce3cfe97f48c",
            "card_set_id": "38c3579f-899e-4d13-928f-69fca483ea99",
            "creator_id": "de18d28a-ca75-4c96-8b86-ce3cfe97f48c",
            "last_seen_at": "2020-01-14 03:48:14",
            "last_studied_at": "2020-01-14 03:48:14"
          },
          {
            "id": "f58f0868-6c05-4429-a46f-124c93374a11",
            "user_id": "de18d28a-ca75-4c96-8b86-ce3cfe97f48c",
            "card_set_id": "11eec051-d080-470a-b67d-2dfc39e1bbc4",
            "creator_id": "de18d28a-ca75-4c96-8b86-ce3cfe97f48c",
            "last_seen_at": "2020-04-05 09:25:29",
            "last_studied_at": "2020-04-05 09:25:29"
          },
          {
            "id": "d0a4a206-a5b8-4629-ae1a-bfcc56d524d3",
            "user_id": "de18d28a-ca75-4c96-8b86-ce3cfe97f48c",
            "card_set_id": "2f1d052c-2fce-48f1-b05a-f5414046f66b",
            "creator_id": "de18d28a-ca75-4c96-8b86-ce3cfe97f48c",
            "last_seen_at": "2019-11-14 07:52:38",
            "last_studied_at": "2019-11-14 07:52:38"
          },
          {
            "id": "f4e4a78e-1d4d-454b-9678-e645503ba1bb",
            "user_id": "de18d28a-ca75-4c96-8b86-ce3cfe97f48c",
            "card_set_id": "02c1fe97-93f0-4288-ab2d-1ff627ad66f3",
            "creator_id": "de18d28a-ca75-4c96-8b86-ce3cfe97f48c",
            "last_seen_at": "2020-01-24 16:09:01",
            "last_studied_at": "2020-01-24 16:09:01"
          },
          {
            "id": "3e7210ac-babe-4308-a3a2-51bb32c704d2",
            "user_id": "de18d28a-ca75-4c96-8b86-ce3cfe97f48c",
            "card_set_id": "abe4bf1d-713d-4449-b9ae-af0dfaa226db",
            "creator_id": "de18d28a-ca75-4c96-8b86-ce3cfe97f48c",
            "last_seen_at": "2019-12-28 07:39:15",
            "last_studied_at": "2019-12-28 07:39:15"
          },
          {
            "id": "cf1003e3-bd4e-4435-b721-ccf478af7042",
            "user_id": "de18d28a-ca75-4c96-8b86-ce3cfe97f48c",
            "card_set_id": "b2c8ebf9-6723-440a-8438-112061d080d9",
            "creator_id": "de18d28a-ca75-4c96-8b86-ce3cfe97f48c",
            "last_seen_at": "2019-10-12 17:26:31",
            "last_studied_at": "2019-10-12 17:26:31"
          },
          {
            "id": "591897ff-d137-4724-a09b-0ad3c722c73b",
            "user_id": "fe100c27-156c-42e0-a2dd-3ae3d6963446",
            "card_set_id": "7579c9c3-ccae-434f-bb5a-ae31b8676c9b",
            "creator_id": "fe100c27-156c-42e0-a2dd-3ae3d6963446",
            "last_seen_at": "2019-10-13 00:35:26",
            "last_studied_at": "2019-10-13 00:35:26"
          },
          {
            "id": "2eb60cde-4544-401b-8dfd-c9bb2e5b549a",
            "user_id": "fe100c27-156c-42e0-a2dd-3ae3d6963446",
            "card_set_id": "935da704-1911-4af0-b786-916c020b900d",
            "creator_id": "fe100c27-156c-42e0-a2dd-3ae3d6963446",
            "last_seen_at": "2020-03-01 13:48:08",
            "last_studied_at": "2020-03-01 13:48:08"
          },
          {
            "id": "8d6ea4f7-1fa8-4e4d-96ae-1f46036448d1",
            "user_id": "fe100c27-156c-42e0-a2dd-3ae3d6963446",
            "card_set_id": "ded06fad-2aad-4f99-ae33-54425c1811a4",
            "creator_id": "fe100c27-156c-42e0-a2dd-3ae3d6963446",
            "last_seen_at": "2019-12-06 10:05:58",
            "last_studied_at": "2019-12-06 10:05:58"
          },
          {
            "id": "0b465d0e-f22f-423e-9abb-96fc1f3d176b",
            "user_id": "fe100c27-156c-42e0-a2dd-3ae3d6963446",
            "card_set_id": "99c4ae00-c819-4458-b78f-8d40262817e2",
            "creator_id": "fe100c27-156c-42e0-a2dd-3ae3d6963446",
            "last_seen_at": "2019-10-24 06:13:38",
            "last_studied_at": "2019-10-24 06:13:38"
          },
          {
            "id": "50306ba7-8164-49fc-9cdc-dfab18b4e867",
            "user_id": "fe100c27-156c-42e0-a2dd-3ae3d6963446",
            "card_set_id": "4600561a-ff57-400e-aba6-abd1c11cdcdd",
            "creator_id": "fe100c27-156c-42e0-a2dd-3ae3d6963446",
            "last_seen_at": "2020-01-13 14:39:12",
            "last_studied_at": "2020-01-13 14:39:12"
          },
          {
            "id": "d6c5870a-45f7-49d0-a17c-f8f37a3bd228",
            "user_id": "fe100c27-156c-42e0-a2dd-3ae3d6963446",
            "card_set_id": "79a2c003-3162-4265-a8cb-89ae289a920b",
            "creator_id": "fe100c27-156c-42e0-a2dd-3ae3d6963446",
            "last_seen_at": "2019-11-06 07:16:51",
            "last_studied_at": "2019-11-06 07:16:51"
          },
          {
            "id": "722a618a-57ee-4368-b916-0cfa8bef0a6b",
            "user_id": "fe100c27-156c-42e0-a2dd-3ae3d6963446",
            "card_set_id": "4fc07547-794d-4883-ad23-275ed5aa5f5e",
            "creator_id": "fe100c27-156c-42e0-a2dd-3ae3d6963446",
            "last_seen_at": "2020-04-01 18:05:14",
            "last_studied_at": "2020-04-01 18:05:14"
          },
          {
            "id": "c23eb218-2b91-4b44-ba1b-ee1c9d32e27e",
            "user_id": "fe86022b-8aac-4eff-bc50-dcb56dbfcfbf",
            "card_set_id": "0da03844-b54a-4225-891e-f5a8123e11c5",
            "creator_id": "fe86022b-8aac-4eff-bc50-dcb56dbfcfbf",
            "last_seen_at": "2020-02-18 04:33:05",
            "last_studied_at": "2020-02-18 04:33:05"
          },
          {
            "id": "1deb4231-c73f-4307-86c3-0e4b7116ce16",
            "user_id": "fe86022b-8aac-4eff-bc50-dcb56dbfcfbf",
            "card_set_id": "5f2de8c0-2d29-43ff-9d15-bedd54b3da25",
            "creator_id": "fe86022b-8aac-4eff-bc50-dcb56dbfcfbf",
            "last_seen_at": "2019-10-15 12:44:46",
            "last_studied_at": "2019-10-15 12:44:46"
          },
          {
            "id": "46b201d4-621e-4dda-8a4a-961c1bfa16c3",
            "user_id": "fe86022b-8aac-4eff-bc50-dcb56dbfcfbf",
            "card_set_id": "4e704519-3269-461a-8c91-fff6e61d2024",
            "creator_id": "fe86022b-8aac-4eff-bc50-dcb56dbfcfbf",
            "last_seen_at": "2020-01-24 06:53:42",
            "last_studied_at": "2020-01-24 06:53:42"
          },
          {
            "id": "a37ef087-277c-4183-81c8-a0755f5bc962",
            "user_id": "fe86022b-8aac-4eff-bc50-dcb56dbfcfbf",
            "card_set_id": "1ce84f52-18d6-4ea3-bd50-4c8a7107dd60",
            "creator_id": "fe86022b-8aac-4eff-bc50-dcb56dbfcfbf",
            "last_seen_at": "2020-02-04 04:52:41",
            "last_studied_at": "2020-02-04 04:52:41"
          },
          {
            "id": "1f4d6d8d-133c-4503-9971-45f6e3dd7d4f",
            "user_id": "fe86022b-8aac-4eff-bc50-dcb56dbfcfbf",
            "card_set_id": "0ef6def3-e572-4e52-b4e2-dd0017f964ea",
            "creator_id": "fe86022b-8aac-4eff-bc50-dcb56dbfcfbf",
            "last_seen_at": "2020-03-18 09:39:11",
            "last_studied_at": "2020-03-18 09:39:11"
          },
          {
            "id": "26bdced8-29bb-4981-a7bb-b3d02965a0e1",
            "user_id": "fe86022b-8aac-4eff-bc50-dcb56dbfcfbf",
            "card_set_id": "4f22e70b-4c59-4c61-95ee-043022334f79",
            "creator_id": "fe86022b-8aac-4eff-bc50-dcb56dbfcfbf",
            "last_seen_at": "2020-03-30 22:08:54",
            "last_studied_at": "2020-03-30 22:08:54"
          },
          {
            "id": "04ec6d4d-bcbf-4f48-b71c-5a59f3efc383",
            "user_id": "fe86022b-8aac-4eff-bc50-dcb56dbfcfbf",
            "card_set_id": "1897bc35-2dfc-4dda-8465-5579c1c51e80",
            "creator_id": "fe86022b-8aac-4eff-bc50-dcb56dbfcfbf",
            "last_seen_at": "2020-03-29 06:51:17",
            "last_studied_at": "2020-03-29 06:51:17"
          },
          {
            "id": "f9571206-0f02-4e29-a730-aa55cca9487b",
            "user_id": "fe86022b-8aac-4eff-bc50-dcb56dbfcfbf",
            "card_set_id": "5c8a2e46-7f46-4334-85ce-a22f76f584ca",
            "creator_id": "fe86022b-8aac-4eff-bc50-dcb56dbfcfbf",
            "last_seen_at": "2020-02-22 07:01:07",
            "last_studied_at": "2020-02-22 07:01:07"
          },
          {
            "id": "4405a265-fdda-4dd3-8e56-f80847cb55c8",
            "user_id": "fe86022b-8aac-4eff-bc50-dcb56dbfcfbf",
            "card_set_id": "bd337523-a79e-4de1-8639-6ddbc593f558",
            "creator_id": "fe86022b-8aac-4eff-bc50-dcb56dbfcfbf",
            "last_seen_at": "2019-12-03 20:14:01",
            "last_studied_at": "2019-12-03 20:14:01"
          },
          {
            "id": "2c056fce-d43e-4570-9a5a-7b32792d3f9c",
            "user_id": "fe86022b-8aac-4eff-bc50-dcb56dbfcfbf",
            "card_set_id": "936b4bf0-ddd3-4a06-b35b-b98e9c9e8bf5",
            "creator_id": "fe86022b-8aac-4eff-bc50-dcb56dbfcfbf",
            "last_seen_at": "2019-12-05 05:29:56",
            "last_studied_at": "2019-12-05 05:29:56"
          },
          {
            "id": "a10e60a6-84cc-46fe-8b06-66fa3f73135b",
            "user_id": "fe86022b-8aac-4eff-bc50-dcb56dbfcfbf",
            "card_set_id": "a6e9f8f2-b98b-4e11-8ca7-93755a50bd89",
            "creator_id": "fe86022b-8aac-4eff-bc50-dcb56dbfcfbf",
            "last_seen_at": "2020-04-05 05:42:17",
            "last_studied_at": "2020-04-05 05:42:17"
          },
          {
            "id": "d4cc4907-7780-417f-90f1-587b18b286d8",
            "user_id": "fe86022b-8aac-4eff-bc50-dcb56dbfcfbf",
            "card_set_id": "ba303c78-1aa2-457f-85f1-634254bd7687",
            "creator_id": "fe86022b-8aac-4eff-bc50-dcb56dbfcfbf",
            "last_seen_at": "2019-12-15 12:38:18",
            "last_studied_at": "2019-12-15 12:38:18"
          },
          {
            "id": "472fa085-823c-41cb-8dd4-4316c77a14ae",
            "user_id": "fe86022b-8aac-4eff-bc50-dcb56dbfcfbf",
            "card_set_id": "2e1ac1db-c5d1-4397-b23e-0e3a85f8ca08",
            "creator_id": "fe86022b-8aac-4eff-bc50-dcb56dbfcfbf",
            "last_seen_at": "2019-11-25 05:21:53",
            "last_studied_at": "2019-11-25 05:21:53"
          },
          {
            "id": "5fd0ec56-82d2-4a52-9f1c-495f0ac080b6",
            "user_id": "fe86022b-8aac-4eff-bc50-dcb56dbfcfbf",
            "card_set_id": "b79d7542-2a0a-4952-98af-7c7cd56f07cc",
            "creator_id": "fe86022b-8aac-4eff-bc50-dcb56dbfcfbf",
            "last_seen_at": "2020-01-04 07:38:47",
            "last_studied_at": "2020-01-04 07:38:47"
          },
          {
            "id": "95e5cd48-cf4b-4fbc-9d26-36301127cad7",
            "user_id": "fe86022b-8aac-4eff-bc50-dcb56dbfcfbf",
            "card_set_id": "586b8caa-f605-46e8-a720-d55191eac61c",
            "creator_id": "fe86022b-8aac-4eff-bc50-dcb56dbfcfbf",
            "last_seen_at": "2019-11-29 18:44:54",
            "last_studied_at": "2019-11-29 18:44:54"
          },
          {
            "id": "5afd2546-7928-42d8-81df-9241f167999c",
            "user_id": "fe86022b-8aac-4eff-bc50-dcb56dbfcfbf",
            "card_set_id": "a5a3e1b5-96d0-4ba5-8a86-b3e29f9dcb13",
            "creator_id": "fe86022b-8aac-4eff-bc50-dcb56dbfcfbf",
            "last_seen_at": "2019-12-09 15:27:39",
            "last_studied_at": "2019-12-09 15:27:39"
          },
          {
            "id": "19f2c594-3995-4212-b1a4-5fb76e814a4a",
            "user_id": "fe86022b-8aac-4eff-bc50-dcb56dbfcfbf",
            "card_set_id": "9f1d7b67-03a5-4d5c-849a-bf1b253ddea6",
            "creator_id": "fe86022b-8aac-4eff-bc50-dcb56dbfcfbf",
            "last_seen_at": "2019-10-23 10:07:09",
            "last_studied_at": "2019-10-23 10:07:09"
          },
          {
            "id": "00aecfd5-658c-45c0-ab8e-db9cdc97fc6c",
            "user_id": "fe86022b-8aac-4eff-bc50-dcb56dbfcfbf",
            "card_set_id": "04db3341-f669-45df-a05b-3d30373f79ae",
            "creator_id": "fe86022b-8aac-4eff-bc50-dcb56dbfcfbf",
            "last_seen_at": "2020-03-18 01:37:42",
            "last_studied_at": "2020-03-18 01:37:42"
          },
          {
            "id": "7a819f6a-7ff5-40fc-984f-7b67a60cc5f0",
            "user_id": "fe86022b-8aac-4eff-bc50-dcb56dbfcfbf",
            "card_set_id": "6ea304fa-6609-409e-9e5d-88ed7beefd41",
            "creator_id": "fe86022b-8aac-4eff-bc50-dcb56dbfcfbf",
            "last_seen_at": "2019-10-09 09:29:31",
            "last_studied_at": "2019-10-09 09:29:31"
          },
          {
            "id": "6dd133f0-5d41-440f-a31a-cfe82b683b53",
            "user_id": "fe86022b-8aac-4eff-bc50-dcb56dbfcfbf",
            "card_set_id": "969d35ed-949f-4b69-8127-afa51aa1757d",
            "creator_id": "fe86022b-8aac-4eff-bc50-dcb56dbfcfbf",
            "last_seen_at": "2020-04-09 22:36:40",
            "last_studied_at": "2020-04-09 22:36:40"
          },
          {
            "id": "bf567075-32e2-4e22-ba7c-dc112d178ded",
            "user_id": "fe86022b-8aac-4eff-bc50-dcb56dbfcfbf",
            "card_set_id": "2558c45d-a1da-4615-813e-498df56b3f5c",
            "creator_id": "fe86022b-8aac-4eff-bc50-dcb56dbfcfbf",
            "last_seen_at": "2020-04-01 04:54:34",
            "last_studied_at": "2020-04-01 04:54:34"
          },
          {
            "id": "bdae9c87-3b7c-4acb-a772-4d4a82d00100",
            "user_id": "fe86022b-8aac-4eff-bc50-dcb56dbfcfbf",
            "card_set_id": "d3a9b199-a06e-41fb-af5c-9ef77c72b892",
            "creator_id": "fe86022b-8aac-4eff-bc50-dcb56dbfcfbf",
            "last_seen_at": "2019-10-21 13:02:35",
            "last_studied_at": "2019-10-21 13:02:35"
          },
          {
            "id": "f6450469-5bcf-4761-b8ac-30b100880336",
            "user_id": "fe86022b-8aac-4eff-bc50-dcb56dbfcfbf",
            "card_set_id": "4ef8b616-ff09-42f4-8323-c1e799eaf686",
            "creator_id": "fe86022b-8aac-4eff-bc50-dcb56dbfcfbf",
            "last_seen_at": "2019-11-19 22:32:03",
            "last_studied_at": "2019-11-19 22:32:03"
          },
          {
            "id": "e84ca55d-a117-4245-bf36-5b176224b9ea",
            "user_id": "fe86022b-8aac-4eff-bc50-dcb56dbfcfbf",
            "card_set_id": "51dae960-470e-4ae2-bb44-c833e35304fd",
            "creator_id": "fe86022b-8aac-4eff-bc50-dcb56dbfcfbf",
            "last_seen_at": "2019-12-15 12:57:36",
            "last_studied_at": "2019-12-15 12:57:36"
          },
          {
            "id": "2558351d-6616-4046-a303-e3c849f7cac8",
            "user_id": "fe86022b-8aac-4eff-bc50-dcb56dbfcfbf",
            "card_set_id": "dbc5fac0-240c-4d9c-885b-b5bfed809b1f",
            "creator_id": "fe86022b-8aac-4eff-bc50-dcb56dbfcfbf",
            "last_seen_at": "2020-04-17 09:45:52",
            "last_studied_at": "2020-04-17 09:45:52"
          },
          {
            "id": "9270071b-3c79-4b4f-b281-b4201bdb1f09",
            "user_id": "fe86022b-8aac-4eff-bc50-dcb56dbfcfbf",
            "card_set_id": "3220b921-9ba9-42bc-a9b9-b5a618a28021",
            "creator_id": "fe86022b-8aac-4eff-bc50-dcb56dbfcfbf",
            "last_seen_at": "2020-01-11 18:34:30",
            "last_studied_at": "2020-01-11 18:34:30"
          },
          {
            "id": "a61ceebe-97d9-43b1-af8e-2eeac0c49f84",
            "user_id": "fe86022b-8aac-4eff-bc50-dcb56dbfcfbf",
            "card_set_id": "84dd6285-fa41-4386-bb25-b4ef6590bac4",
            "creator_id": "fe86022b-8aac-4eff-bc50-dcb56dbfcfbf",
            "last_seen_at": "2019-10-11 05:21:42",
            "last_studied_at": "2019-10-11 05:21:42"
          },
          {
            "id": "6bdfc45b-ffc1-4d82-9692-8d43fb606274",
            "user_id": "fe86022b-8aac-4eff-bc50-dcb56dbfcfbf",
            "card_set_id": "68725ba8-be56-4584-b01e-2d5de547f8e1",
            "creator_id": "fe86022b-8aac-4eff-bc50-dcb56dbfcfbf",
            "last_seen_at": "2020-03-15 06:43:45",
            "last_studied_at": "2020-03-15 06:43:45"
          },
          {
            "id": "7e66e17a-12cc-4dbb-9e3f-67b89662c9e7",
            "user_id": "fe86022b-8aac-4eff-bc50-dcb56dbfcfbf",
            "card_set_id": "f8fa25d6-c1e6-4a6a-a579-6ac04785a915",
            "creator_id": "fe86022b-8aac-4eff-bc50-dcb56dbfcfbf",
            "last_seen_at": "2020-01-13 01:12:50",
            "last_studied_at": "2020-01-13 01:12:50"
          },
          {
            "id": "fc30cc06-2f5b-44e6-be13-2460b26d6d00",
            "user_id": "fe86022b-8aac-4eff-bc50-dcb56dbfcfbf",
            "card_set_id": "556fb909-4c56-4304-82e4-c2aa832c5bd1",
            "creator_id": "fe86022b-8aac-4eff-bc50-dcb56dbfcfbf",
            "last_seen_at": "2020-03-09 19:26:51",
            "last_studied_at": "2020-03-09 19:26:51"
          },
          {
            "id": "99c4e412-260b-485e-a855-224611bd4648",
            "user_id": "fe86022b-8aac-4eff-bc50-dcb56dbfcfbf",
            "card_set_id": "fb8dd483-39ad-4e5a-89e6-fc7023cf2bb7",
            "creator_id": "fe86022b-8aac-4eff-bc50-dcb56dbfcfbf",
            "last_seen_at": "2020-03-04 17:30:05",
            "last_studied_at": "2020-03-04 17:30:05"
          },
          {
            "id": "ec95c92e-6120-4198-9822-a68ef0cda228",
            "user_id": "fe86022b-8aac-4eff-bc50-dcb56dbfcfbf",
            "card_set_id": "2b60c6e7-0e9d-41df-b585-c78eda59c2da",
            "creator_id": "fe86022b-8aac-4eff-bc50-dcb56dbfcfbf",
            "last_seen_at": "2020-04-07 17:54:19",
            "last_studied_at": "2020-04-07 17:54:19"
          },
          {
            "id": "2d4ce51a-7e64-40dc-afcd-4954ac340458",
            "user_id": "fe86022b-8aac-4eff-bc50-dcb56dbfcfbf",
            "card_set_id": "7aa1d130-902a-45d1-a5ea-90f85e1c1d46",
            "creator_id": "fe86022b-8aac-4eff-bc50-dcb56dbfcfbf",
            "last_seen_at": "2019-12-03 06:29:09",
            "last_studied_at": "2019-12-03 06:29:09"
          },
          {
            "id": "36b3d053-0fcb-4190-b97b-3d77fc69d700",
            "user_id": "5536b020-ff24-4af2-ade8-4aeb4a792008",
            "card_set_id": "b6320283-7ce3-4a65-845c-8860d84f64ed",
            "creator_id": "5536b020-ff24-4af2-ade8-4aeb4a792008",
            "last_seen_at": "2020-02-29 05:21:20",
            "last_studied_at": "2020-02-29 05:21:20"
          },
          {
            "id": "1eb635a2-e1ec-4839-ac96-7fe805adb8a2",
            "user_id": "5536b020-ff24-4af2-ade8-4aeb4a792008",
            "card_set_id": "e004ab89-c189-4514-bdaa-c0be4995d81a",
            "creator_id": "5536b020-ff24-4af2-ade8-4aeb4a792008",
            "last_seen_at": "2019-12-12 17:27:42",
            "last_studied_at": "2019-12-12 17:27:42"
          },
          {
            "id": "4d5a41b7-6f02-49fc-a237-6128e0fddec5",
            "user_id": "5536b020-ff24-4af2-ade8-4aeb4a792008",
            "card_set_id": "cb0251a1-9434-481f-8195-ce0bf6b29219",
            "creator_id": "5536b020-ff24-4af2-ade8-4aeb4a792008",
            "last_seen_at": "2019-11-23 18:32:43",
            "last_studied_at": "2019-11-23 18:32:43"
          },
          {
            "id": "a3fd2c3b-e409-4271-9c96-80377d3ee7ee",
            "user_id": "5536b020-ff24-4af2-ade8-4aeb4a792008",
            "card_set_id": "61cae286-03cd-47e3-bcc5-d048914aab76",
            "creator_id": "5536b020-ff24-4af2-ade8-4aeb4a792008",
            "last_seen_at": "2019-11-01 23:36:06",
            "last_studied_at": "2019-11-01 23:36:06"
          },
          {
            "id": "48029b68-4211-4172-91fd-f6ccdf48ea04",
            "user_id": "5536b020-ff24-4af2-ade8-4aeb4a792008",
            "card_set_id": "a08fd15a-204f-42ee-98ac-14942cf958b7",
            "creator_id": "5536b020-ff24-4af2-ade8-4aeb4a792008",
            "last_seen_at": "2020-01-15 23:30:47",
            "last_studied_at": "2020-01-15 23:30:47"
          },
          {
            "id": "fe9dd43c-7ea3-4bd7-a7aa-31f104e5a69e",
            "user_id": "5536b020-ff24-4af2-ade8-4aeb4a792008",
            "card_set_id": "59720d72-1cfb-4073-927a-4af4604ab951",
            "creator_id": "5536b020-ff24-4af2-ade8-4aeb4a792008",
            "last_seen_at": "2019-10-28 18:28:04",
            "last_studied_at": "2019-10-28 18:28:04"
          },
          {
            "id": "1a81f31d-e318-4829-b586-db00cf82c07f",
            "user_id": "5536b020-ff24-4af2-ade8-4aeb4a792008",
            "card_set_id": "2eb2aebb-f348-4110-ae2c-057b13b26838",
            "creator_id": "5536b020-ff24-4af2-ade8-4aeb4a792008",
            "last_seen_at": "2020-02-17 23:39:57",
            "last_studied_at": "2020-02-17 23:39:57"
          },
          {
            "id": "61057e96-98fe-432a-8651-09731681c723",
            "user_id": "5536b020-ff24-4af2-ade8-4aeb4a792008",
            "card_set_id": "5f21cc7a-a19b-4fc9-b67f-39785fbdce57",
            "creator_id": "5536b020-ff24-4af2-ade8-4aeb4a792008",
            "last_seen_at": "2020-03-26 01:47:55",
            "last_studied_at": "2020-03-26 01:47:55"
          },
          {
            "id": "a95d7a8b-34a2-41b1-b069-7f952ee2bf6b",
            "user_id": "5536b020-ff24-4af2-ade8-4aeb4a792008",
            "card_set_id": "800e9ffe-73b3-4806-b0cf-332434f1c414",
            "creator_id": "5536b020-ff24-4af2-ade8-4aeb4a792008",
            "last_seen_at": "2019-11-22 07:50:51",
            "last_studied_at": "2019-11-22 07:50:51"
          },
          {
            "id": "596cc05d-d1dc-419f-b5a5-40f5bf0ddaff",
            "user_id": "5536b020-ff24-4af2-ade8-4aeb4a792008",
            "card_set_id": "8b8b6c85-228b-4c4e-95ea-d47db850be52",
            "creator_id": "5536b020-ff24-4af2-ade8-4aeb4a792008",
            "last_seen_at": "2020-01-27 10:29:06",
            "last_studied_at": "2020-01-27 10:29:06"
          },
          {
            "id": "41be41e3-8b25-41ed-b53d-fa758f7b7bf4",
            "user_id": "0a99fe50-200e-428d-bc7e-37f8e89a540e",
            "card_set_id": "394a79be-b554-47ec-a99e-078f2e4e4520",
            "creator_id": "0a99fe50-200e-428d-bc7e-37f8e89a540e",
            "last_seen_at": "2020-03-11 02:27:24",
            "last_studied_at": "2020-03-11 02:27:24"
          },
          {
            "id": "d7ddbbf2-d7e7-4aba-aa40-bb13b6429bad",
            "user_id": "0a99fe50-200e-428d-bc7e-37f8e89a540e",
            "card_set_id": "1a669129-9298-4c1d-9da7-86f49be9b113",
            "creator_id": "0a99fe50-200e-428d-bc7e-37f8e89a540e",
            "last_seen_at": "2019-11-30 15:03:33",
            "last_studied_at": "2019-11-30 15:03:33"
          },
          {
            "id": "6d6b02ac-474c-4384-9bdd-68028584211d",
            "user_id": "0a99fe50-200e-428d-bc7e-37f8e89a540e",
            "card_set_id": "5bb998fd-d77f-4659-a894-92ec8da904b4",
            "creator_id": "0a99fe50-200e-428d-bc7e-37f8e89a540e",
            "last_seen_at": "2020-02-22 22:47:40",
            "last_studied_at": "2020-02-22 22:47:40"
          },
          {
            "id": "5457ece9-0db8-4e95-8d9a-546c0aae5d95",
            "user_id": "0a99fe50-200e-428d-bc7e-37f8e89a540e",
            "card_set_id": "a61d90f9-87fa-40a8-8a39-15b3ee864055",
            "creator_id": "0a99fe50-200e-428d-bc7e-37f8e89a540e",
            "last_seen_at": "2019-10-11 23:26:09",
            "last_studied_at": "2019-10-11 23:26:09"
          },
          {
            "id": "65c30f5e-db4e-4c6d-becb-2712dabc0ff2",
            "user_id": "0a99fe50-200e-428d-bc7e-37f8e89a540e",
            "card_set_id": "dc1a59eb-7697-4de1-968c-96210b8e382b",
            "creator_id": "0a99fe50-200e-428d-bc7e-37f8e89a540e",
            "last_seen_at": "2020-02-25 16:25:10",
            "last_studied_at": "2020-02-25 16:25:10"
          },
          {
            "id": "0ebb0b03-a70a-4a52-8e5a-868c004ad9a9",
            "user_id": "0a99fe50-200e-428d-bc7e-37f8e89a540e",
            "card_set_id": "f5841396-4e30-4a82-8cb7-5f6427d176de",
            "creator_id": "0a99fe50-200e-428d-bc7e-37f8e89a540e",
            "last_seen_at": "2019-10-20 06:10:46",
            "last_studied_at": "2019-10-20 06:10:46"
          },
          {
            "id": "efdd6a3d-7596-4e72-88da-2f4815be9ab2",
            "user_id": "0a99fe50-200e-428d-bc7e-37f8e89a540e",
            "card_set_id": "44fd4ab5-cc15-4363-9d62-9f8e5c6e2a98",
            "creator_id": "0a99fe50-200e-428d-bc7e-37f8e89a540e",
            "last_seen_at": "2019-12-14 18:01:44",
            "last_studied_at": "2019-12-14 18:01:44"
          },
          {
            "id": "7a5d27f7-970e-4766-94aa-e5ffc7333a27",
            "user_id": "0a99fe50-200e-428d-bc7e-37f8e89a540e",
            "card_set_id": "ae33f8b7-d766-460b-8667-0607c4d48797",
            "creator_id": "0a99fe50-200e-428d-bc7e-37f8e89a540e",
            "last_seen_at": "2019-11-19 04:36:07",
            "last_studied_at": "2019-11-19 04:36:07"
          },
          {
            "id": "c46ee445-f08d-4601-a374-ba4cc4ae6c51",
            "user_id": "0a99fe50-200e-428d-bc7e-37f8e89a540e",
            "card_set_id": "3fe820f1-cb90-4fb7-b7a5-dff667685aa2",
            "creator_id": "0a99fe50-200e-428d-bc7e-37f8e89a540e",
            "last_seen_at": "2019-10-25 05:10:02",
            "last_studied_at": "2019-10-25 05:10:02"
          },
          {
            "id": "0a1d9fe0-ae09-4aac-a5c9-27b6c87fa0e7",
            "user_id": "0a99fe50-200e-428d-bc7e-37f8e89a540e",
            "card_set_id": "c4f67653-67b3-4d6a-b9b3-7ebef7b49877",
            "creator_id": "0a99fe50-200e-428d-bc7e-37f8e89a540e",
            "last_seen_at": "2020-01-04 05:16:41",
            "last_studied_at": "2020-01-04 05:16:41"
          },
          {
            "id": "3ec64f82-74ed-42f7-b914-d311b12f8ac4",
            "user_id": "0a99fe50-200e-428d-bc7e-37f8e89a540e",
            "card_set_id": "55772555-b4b8-45b9-a7d5-05a6c759e9e9",
            "creator_id": "0a99fe50-200e-428d-bc7e-37f8e89a540e",
            "last_seen_at": "2019-10-25 05:23:32",
            "last_studied_at": "2019-10-25 05:23:32"
          },
          {
            "id": "09c1ab80-87f0-4afb-8c39-8c9806c697d0",
            "user_id": "0a99fe50-200e-428d-bc7e-37f8e89a540e",
            "card_set_id": "46dcab05-18a1-49fc-86a6-1434374da673",
            "creator_id": "0a99fe50-200e-428d-bc7e-37f8e89a540e",
            "last_seen_at": "2020-01-25 03:26:24",
            "last_studied_at": "2020-01-25 03:26:24"
          },
          {
            "id": "28e80ca6-0eb2-4695-88ac-5f113df7a0f0",
            "user_id": "0a99fe50-200e-428d-bc7e-37f8e89a540e",
            "card_set_id": "c806f10d-5687-4ea1-8dbb-98db20cf8411",
            "creator_id": "0a99fe50-200e-428d-bc7e-37f8e89a540e",
            "last_seen_at": "2019-12-23 21:52:28",
            "last_studied_at": "2019-12-23 21:52:28"
          },
          {
            "id": "579318d9-4f91-4dc1-b0f4-d9aba2e796af",
            "user_id": "0a99fe50-200e-428d-bc7e-37f8e89a540e",
            "card_set_id": "c2f4a19a-1d76-458a-9853-07a7e5d9829a",
            "creator_id": "0a99fe50-200e-428d-bc7e-37f8e89a540e",
            "last_seen_at": "2020-02-10 14:18:40",
            "last_studied_at": "2020-02-10 14:18:40"
          },
          {
            "id": "b7f0c1c0-c398-48fe-a5c7-6b8f85ff2768",
            "user_id": "0a99fe50-200e-428d-bc7e-37f8e89a540e",
            "card_set_id": "3239d2ba-0109-42f2-bdc5-ad50f44755d7",
            "creator_id": "0a99fe50-200e-428d-bc7e-37f8e89a540e",
            "last_seen_at": "2020-03-09 04:59:57",
            "last_studied_at": "2020-03-09 04:59:57"
          },
          {
            "id": "16e4b1f8-8a59-46e1-a5ea-e3448d2be02e",
            "user_id": "0a99fe50-200e-428d-bc7e-37f8e89a540e",
            "card_set_id": "12b55abb-8886-4a37-a0c8-9d1915318dff",
            "creator_id": "0a99fe50-200e-428d-bc7e-37f8e89a540e",
            "last_seen_at": "2019-11-04 13:52:11",
            "last_studied_at": "2019-11-04 13:52:11"
          },
          {
            "id": "131cb4d9-7cc5-434a-89ff-e43fad201bbf",
            "user_id": "0a99fe50-200e-428d-bc7e-37f8e89a540e",
            "card_set_id": "0088120e-e85e-45c3-aa33-3f7d1907dab2",
            "creator_id": "0a99fe50-200e-428d-bc7e-37f8e89a540e",
            "last_seen_at": "2020-01-31 08:29:43",
            "last_studied_at": "2020-01-31 08:29:43"
          },
          {
            "id": "e3f54279-9b7c-421c-b817-a65966f9e084",
            "user_id": "0a99fe50-200e-428d-bc7e-37f8e89a540e",
            "card_set_id": "8fd34fe1-050b-4af0-a5a3-990b6293c1bb",
            "creator_id": "0a99fe50-200e-428d-bc7e-37f8e89a540e",
            "last_seen_at": "2019-12-18 17:01:40",
            "last_studied_at": "2019-12-18 17:01:40"
          },
          {
            "id": "9d6d683a-a445-4be0-9af1-acff47edcd08",
            "user_id": "0a99fe50-200e-428d-bc7e-37f8e89a540e",
            "card_set_id": "3fa2832d-869a-4386-9470-09acf821181d",
            "creator_id": "0a99fe50-200e-428d-bc7e-37f8e89a540e",
            "last_seen_at": "2019-12-24 19:13:51",
            "last_studied_at": "2019-12-24 19:13:51"
          },
          {
            "id": "43ebc1a2-ea46-4ce4-a71c-b03d4b88a695",
            "user_id": "0a99fe50-200e-428d-bc7e-37f8e89a540e",
            "card_set_id": "20ed0d66-c8d2-4db1-8e18-9d84cbe3e83b",
            "creator_id": "0a99fe50-200e-428d-bc7e-37f8e89a540e",
            "last_seen_at": "2019-12-31 14:52:02",
            "last_studied_at": "2019-12-31 14:52:02"
          },
          {
            "id": "34aff7e7-8800-49b0-b0a0-7847ce2c08d9",
            "user_id": "0a99fe50-200e-428d-bc7e-37f8e89a540e",
            "card_set_id": "47dc440d-5af8-4056-be6e-c609735e08c7",
            "creator_id": "0a99fe50-200e-428d-bc7e-37f8e89a540e",
            "last_seen_at": "2019-12-09 12:17:15",
            "last_studied_at": "2019-12-09 12:17:15"
          },
          {
            "id": "8b663a0c-d64e-4f22-81ab-e226ba456dc7",
            "user_id": "0a99fe50-200e-428d-bc7e-37f8e89a540e",
            "card_set_id": "a23ffe0c-1f7f-433a-8eba-592e7acb24ba",
            "creator_id": "0a99fe50-200e-428d-bc7e-37f8e89a540e",
            "last_seen_at": "2020-02-11 10:49:37",
            "last_studied_at": "2020-02-11 10:49:37"
          },
          {
            "id": "b63375c1-40f1-4f7d-b5eb-4de5dbe11e82",
            "user_id": "0a99fe50-200e-428d-bc7e-37f8e89a540e",
            "card_set_id": "48319f3b-010e-4ca4-8009-c655979d3581",
            "creator_id": "0a99fe50-200e-428d-bc7e-37f8e89a540e",
            "last_seen_at": "2020-01-02 19:32:45",
            "last_studied_at": "2020-01-02 19:32:45"
          },
          {
            "id": "bf316705-0d67-40d3-8041-92126c930fee",
            "user_id": "0a99fe50-200e-428d-bc7e-37f8e89a540e",
            "card_set_id": "8f71182b-1efa-48cc-aab1-9b50c0ff05fb",
            "creator_id": "0a99fe50-200e-428d-bc7e-37f8e89a540e",
            "last_seen_at": "2019-10-27 12:38:01",
            "last_studied_at": "2019-10-27 12:38:01"
          },
          {
            "id": "2664ee44-7590-4e1f-8216-105a35bc0f91",
            "user_id": "0a99fe50-200e-428d-bc7e-37f8e89a540e",
            "card_set_id": "9ff91838-4abc-4414-81bd-eafbae97bb89",
            "creator_id": "0a99fe50-200e-428d-bc7e-37f8e89a540e",
            "last_seen_at": "2019-12-01 07:44:50",
            "last_studied_at": "2019-12-01 07:44:50"
          },
          {
            "id": "05cb1f8e-bddc-494e-b34d-bf29c8314126",
            "user_id": "0a99fe50-200e-428d-bc7e-37f8e89a540e",
            "card_set_id": "edfc00e1-6f8d-4d2d-a0f0-033f03eab1c9",
            "creator_id": "0a99fe50-200e-428d-bc7e-37f8e89a540e",
            "last_seen_at": "2019-11-07 03:10:08",
            "last_studied_at": "2019-11-07 03:10:08"
          },
          {
            "id": "bda9aab6-ddd7-4f97-93b5-ef725c4dd750",
            "user_id": "0a99fe50-200e-428d-bc7e-37f8e89a540e",
            "card_set_id": "5c4aa7a3-b37f-48d2-85c9-f8fe2284467a",
            "creator_id": "0a99fe50-200e-428d-bc7e-37f8e89a540e",
            "last_seen_at": "2019-12-03 06:21:17",
            "last_studied_at": "2019-12-03 06:21:17"
          },
          {
            "id": "403f29e4-c3c9-4699-b333-cc02c13582b8",
            "user_id": "0a99fe50-200e-428d-bc7e-37f8e89a540e",
            "card_set_id": "c4af68a1-afc6-4e77-979f-3940fde6887b",
            "creator_id": "0a99fe50-200e-428d-bc7e-37f8e89a540e",
            "last_seen_at": "2019-10-29 00:48:15",
            "last_studied_at": "2019-10-29 00:48:15"
          },
          {
            "id": "5f3bb812-8d90-4266-913a-a4814572d8ef",
            "user_id": "0a99fe50-200e-428d-bc7e-37f8e89a540e",
            "card_set_id": "b08ffdbb-e6f6-44bf-bee8-17f847c732b2",
            "creator_id": "0a99fe50-200e-428d-bc7e-37f8e89a540e",
            "last_seen_at": "2020-04-18 21:48:38",
            "last_studied_at": "2020-04-18 21:48:38"
          },
          {
            "id": "6d517bcb-78af-4446-974f-ad350efb618d",
            "user_id": "0a99fe50-200e-428d-bc7e-37f8e89a540e",
            "card_set_id": "df69218e-3c8e-4ed2-883d-45d54de39367",
            "creator_id": "0a99fe50-200e-428d-bc7e-37f8e89a540e",
            "last_seen_at": "2019-10-24 03:46:14",
            "last_studied_at": "2019-10-24 03:46:14"
          },
          {
            "id": "8b57f626-715c-45a8-99c8-154832008cf8",
            "user_id": "a7bd2c78-5f48-44e4-8ec5-d281e351caa0",
            "card_set_id": "a0a3f39f-409a-442d-ab53-ede6f21f9883",
            "creator_id": "a7bd2c78-5f48-44e4-8ec5-d281e351caa0",
            "last_seen_at": "2020-02-03 16:51:24",
            "last_studied_at": "2020-02-03 16:51:24"
          },
          {
            "id": "d257fca8-2cea-4d90-a1ae-54ac722e3adf",
            "user_id": "a7bd2c78-5f48-44e4-8ec5-d281e351caa0",
            "card_set_id": "11f913c3-eb8f-46a9-b6ea-7581e2e17c88",
            "creator_id": "a7bd2c78-5f48-44e4-8ec5-d281e351caa0",
            "last_seen_at": "2020-03-18 05:28:30",
            "last_studied_at": "2020-03-18 05:28:30"
          },
          {
            "id": "5b85773e-57f9-4fb5-9da5-20891317d234",
            "user_id": "a7bd2c78-5f48-44e4-8ec5-d281e351caa0",
            "card_set_id": "417baba5-955e-4a5b-a859-19c901297b59",
            "creator_id": "a7bd2c78-5f48-44e4-8ec5-d281e351caa0",
            "last_seen_at": "2019-12-01 10:17:24",
            "last_studied_at": "2019-12-01 10:17:24"
          },
          {
            "id": "d1b411ee-1fb0-4c23-abca-b93d36b8cadc",
            "user_id": "a7bd2c78-5f48-44e4-8ec5-d281e351caa0",
            "card_set_id": "ce11b87a-82f7-4746-bb46-5ed77eb927ad",
            "creator_id": "a7bd2c78-5f48-44e4-8ec5-d281e351caa0",
            "last_seen_at": "2019-11-12 23:52:36",
            "last_studied_at": "2019-11-12 23:52:36"
          },
          {
            "id": "18058344-350d-4db7-acb3-973221e05d89",
            "user_id": "a7bd2c78-5f48-44e4-8ec5-d281e351caa0",
            "card_set_id": "74a8a4e0-492a-4455-80e7-a4baac1ca11e",
            "creator_id": "a7bd2c78-5f48-44e4-8ec5-d281e351caa0",
            "last_seen_at": "2020-04-18 02:25:48",
            "last_studied_at": "2020-04-18 02:25:48"
          },
          {
            "id": "cf09ffb2-c09b-4f34-a8aa-9ef7ac48f40d",
            "user_id": "a7bd2c78-5f48-44e4-8ec5-d281e351caa0",
            "card_set_id": "2f11e7b7-f862-4222-aaa6-e0d244e67110",
            "creator_id": "a7bd2c78-5f48-44e4-8ec5-d281e351caa0",
            "last_seen_at": "2020-03-20 18:19:48",
            "last_studied_at": "2020-03-20 18:19:48"
          },
          {
            "id": "888ba737-5f67-4a4a-842a-c6b974ac3564",
            "user_id": "a7bd2c78-5f48-44e4-8ec5-d281e351caa0",
            "card_set_id": "8999eb0e-146a-49b5-8fe5-29707180ac4f",
            "creator_id": "a7bd2c78-5f48-44e4-8ec5-d281e351caa0",
            "last_seen_at": "2020-02-15 13:46:32",
            "last_studied_at": "2020-02-15 13:46:32"
          },
          {
            "id": "d54dce63-4b05-4985-bb8c-eed0c220eaa4",
            "user_id": "a7bd2c78-5f48-44e4-8ec5-d281e351caa0",
            "card_set_id": "5328cb64-ad2c-461c-b4cd-98f654c87814",
            "creator_id": "a7bd2c78-5f48-44e4-8ec5-d281e351caa0",
            "last_seen_at": "2020-02-25 09:17:08",
            "last_studied_at": "2020-02-25 09:17:08"
          },
          {
            "id": "6a7e58eb-bf08-413b-a54d-15a88e434e84",
            "user_id": "a7bd2c78-5f48-44e4-8ec5-d281e351caa0",
            "card_set_id": "e018f1c4-ce9e-4410-a355-b6809d717b0d",
            "creator_id": "a7bd2c78-5f48-44e4-8ec5-d281e351caa0",
            "last_seen_at": "2020-04-10 17:49:54",
            "last_studied_at": "2020-04-10 17:49:54"
          },
          {
            "id": "20dbea9d-4193-4067-8175-48f362a9ea28",
            "user_id": "a7bd2c78-5f48-44e4-8ec5-d281e351caa0",
            "card_set_id": "878557ca-6596-4c5d-8c0e-bec786ab5735",
            "creator_id": "a7bd2c78-5f48-44e4-8ec5-d281e351caa0",
            "last_seen_at": "2020-01-26 00:13:29",
            "last_studied_at": "2020-01-26 00:13:29"
          },
          {
            "id": "ba602500-ad96-4773-8a26-8f4207635fdd",
            "user_id": "a7bd2c78-5f48-44e4-8ec5-d281e351caa0",
            "card_set_id": "30c17650-c0ab-4925-af29-e873ffa4b74e",
            "creator_id": "a7bd2c78-5f48-44e4-8ec5-d281e351caa0",
            "last_seen_at": "2020-04-03 07:56:06",
            "last_studied_at": "2020-04-03 07:56:06"
          },
          {
            "id": "9509813c-2807-4535-936c-35b9690ef5a7",
            "user_id": "d5abbc81-73f0-4390-8301-7d822d8f13c1",
            "card_set_id": "fc7ae6b0-0e0a-4b59-bcc8-8160f829a467",
            "creator_id": "d5abbc81-73f0-4390-8301-7d822d8f13c1",
            "last_seen_at": "2019-12-14 10:16:43",
            "last_studied_at": "2019-12-14 10:16:43"
          },
          {
            "id": "04ddbca6-3b36-42bf-8786-8e27a5c51fcc",
            "user_id": "d5abbc81-73f0-4390-8301-7d822d8f13c1",
            "card_set_id": "cfb0ff3c-1732-4f24-8a92-49513765331b",
            "creator_id": "d5abbc81-73f0-4390-8301-7d822d8f13c1",
            "last_seen_at": "2019-11-13 22:02:25",
            "last_studied_at": "2019-11-13 22:02:25"
          },
          {
            "id": "26653ecd-0c73-4dd0-bfa6-1bf4077b95e9",
            "user_id": "d5abbc81-73f0-4390-8301-7d822d8f13c1",
            "card_set_id": "5811cb52-44ea-41f7-9efe-17b8d8dcf3ff",
            "creator_id": "d5abbc81-73f0-4390-8301-7d822d8f13c1",
            "last_seen_at": "2020-01-28 21:20:09",
            "last_studied_at": "2020-01-28 21:20:09"
          },
          {
            "id": "4a92c138-021f-494d-a9f1-3babd085991a",
            "user_id": "d5abbc81-73f0-4390-8301-7d822d8f13c1",
            "card_set_id": "e0f57fdf-1d66-4f34-a0c8-59110f83c020",
            "creator_id": "d5abbc81-73f0-4390-8301-7d822d8f13c1",
            "last_seen_at": "2020-01-04 13:01:25",
            "last_studied_at": "2020-01-04 13:01:25"
          },
          {
            "id": "d87fcf40-9b2f-4518-9b21-71bc45161b05",
            "user_id": "d5abbc81-73f0-4390-8301-7d822d8f13c1",
            "card_set_id": "fb3be505-041c-4bbe-9eff-6d31b6acaace",
            "creator_id": "d5abbc81-73f0-4390-8301-7d822d8f13c1",
            "last_seen_at": "2019-12-18 08:14:20",
            "last_studied_at": "2019-12-18 08:14:20"
          },
          {
            "id": "6b283ff5-0449-4a19-ab3f-1330af741336",
            "user_id": "d5abbc81-73f0-4390-8301-7d822d8f13c1",
            "card_set_id": "6d4ab2d0-5bba-42ec-998e-ac00d48ce411",
            "creator_id": "d5abbc81-73f0-4390-8301-7d822d8f13c1",
            "last_seen_at": "2020-01-01 22:54:56",
            "last_studied_at": "2020-01-01 22:54:56"
          },
          {
            "id": "5c2d4e55-cc4a-438b-9290-0510ea9388a3",
            "user_id": "d5abbc81-73f0-4390-8301-7d822d8f13c1",
            "card_set_id": "8fc4dae0-a388-4202-a674-40a5812c29d5",
            "creator_id": "d5abbc81-73f0-4390-8301-7d822d8f13c1",
            "last_seen_at": "2020-04-07 01:39:49",
            "last_studied_at": "2020-04-07 01:39:49"
          },
          {
            "id": "c7180da8-0e70-4cf1-bd8b-e7e2d5ffcb4d",
            "user_id": "d5abbc81-73f0-4390-8301-7d822d8f13c1",
            "card_set_id": "9febccfa-f8f9-4cdc-b644-b87199c1b185",
            "creator_id": "d5abbc81-73f0-4390-8301-7d822d8f13c1",
            "last_seen_at": "2020-01-29 10:28:40",
            "last_studied_at": "2020-01-29 10:28:40"
          },
          {
            "id": "1288bdec-e2f8-4c2f-9690-0f4c07727137",
            "user_id": "d5abbc81-73f0-4390-8301-7d822d8f13c1",
            "card_set_id": "532f2985-168e-4e08-bcba-3a35d14cc339",
            "creator_id": "d5abbc81-73f0-4390-8301-7d822d8f13c1",
            "last_seen_at": "2019-11-05 21:01:06",
            "last_studied_at": "2019-11-05 21:01:06"
          },
          {
            "id": "e78c3429-d36c-4a24-8025-e15be6d68945",
            "user_id": "d5abbc81-73f0-4390-8301-7d822d8f13c1",
            "card_set_id": "e076ccba-d5ef-481b-b705-172cda4e7405",
            "creator_id": "d5abbc81-73f0-4390-8301-7d822d8f13c1",
            "last_seen_at": "2019-12-16 03:30:09",
            "last_studied_at": "2019-12-16 03:30:09"
          },
          {
            "id": "8fe3d1e5-7845-4794-806c-3ea244c9b6ba",
            "user_id": "d5abbc81-73f0-4390-8301-7d822d8f13c1",
            "card_set_id": "42025b3b-5313-475e-804a-ec5b41941d3d",
            "creator_id": "d5abbc81-73f0-4390-8301-7d822d8f13c1",
            "last_seen_at": "2020-01-04 05:47:26",
            "last_studied_at": "2020-01-04 05:47:26"
          },
          {
            "id": "9ebec4bc-901b-43ed-9a8d-758fc2221838",
            "user_id": "d5abbc81-73f0-4390-8301-7d822d8f13c1",
            "card_set_id": "0e89bc19-b986-4ed9-bbf5-3e652793886f",
            "creator_id": "d5abbc81-73f0-4390-8301-7d822d8f13c1",
            "last_seen_at": "2020-01-06 13:29:24",
            "last_studied_at": "2020-01-06 13:29:24"
          },
          {
            "id": "6fb22e5a-c6c9-4fa4-b26e-718cfc94408c",
            "user_id": "d5abbc81-73f0-4390-8301-7d822d8f13c1",
            "card_set_id": "327a789c-ed9b-43a3-825d-af46e5ee3151",
            "creator_id": "d5abbc81-73f0-4390-8301-7d822d8f13c1",
            "last_seen_at": "2020-03-10 08:47:55",
            "last_studied_at": "2020-03-10 08:47:55"
          },
          {
            "id": "cbadcf0c-0da7-4978-958e-7d3e80ad0b4c",
            "user_id": "d5abbc81-73f0-4390-8301-7d822d8f13c1",
            "card_set_id": "9f98af6c-6722-46b9-85e1-5f46e1d573d4",
            "creator_id": "d5abbc81-73f0-4390-8301-7d822d8f13c1",
            "last_seen_at": "2020-01-13 12:57:01",
            "last_studied_at": "2020-01-13 12:57:01"
          },
          {
            "id": "b76cef36-1bf0-481a-94d1-d4ed2e7b8150",
            "user_id": "d5abbc81-73f0-4390-8301-7d822d8f13c1",
            "card_set_id": "2357132a-ed53-4c29-99f4-71d5730f63ac",
            "creator_id": "d5abbc81-73f0-4390-8301-7d822d8f13c1",
            "last_seen_at": "2020-02-17 14:03:35",
            "last_studied_at": "2020-02-17 14:03:35"
          },
          {
            "id": "7180e8f5-aa72-48f9-9ee7-514d06839756",
            "user_id": "d5abbc81-73f0-4390-8301-7d822d8f13c1",
            "card_set_id": "048a976b-4b53-47b4-a618-24873a211500",
            "creator_id": "d5abbc81-73f0-4390-8301-7d822d8f13c1",
            "last_seen_at": "2019-12-05 04:53:10",
            "last_studied_at": "2019-12-05 04:53:10"
          },
          {
            "id": "7d3603bc-034b-477e-8c7f-adfa2e581c32",
            "user_id": "d5abbc81-73f0-4390-8301-7d822d8f13c1",
            "card_set_id": "1d298247-2d3e-4d6c-a6b1-d01e453a16a0",
            "creator_id": "d5abbc81-73f0-4390-8301-7d822d8f13c1",
            "last_seen_at": "2019-10-09 12:16:13",
            "last_studied_at": "2019-10-09 12:16:13"
          },
          {
            "id": "f0fccf84-a69c-4f51-a40e-717e6715bb25",
            "user_id": "d5abbc81-73f0-4390-8301-7d822d8f13c1",
            "card_set_id": "a76303b8-081b-47fa-8e8a-74da6a0c754b",
            "creator_id": "d5abbc81-73f0-4390-8301-7d822d8f13c1",
            "last_seen_at": "2020-03-22 21:31:21",
            "last_studied_at": "2020-03-22 21:31:21"
          },
          {
            "id": "f119df3d-fe9d-4e1c-b6db-bee750f6f819",
            "user_id": "d5abbc81-73f0-4390-8301-7d822d8f13c1",
            "card_set_id": "e9239025-13cb-44c3-818e-cfdb4353bc1c",
            "creator_id": "d5abbc81-73f0-4390-8301-7d822d8f13c1",
            "last_seen_at": "2020-04-18 20:11:44",
            "last_studied_at": "2020-04-18 20:11:44"
          },
          {
            "id": "5157fe4d-8c1f-447b-9cb7-a169510a67be",
            "user_id": "d5abbc81-73f0-4390-8301-7d822d8f13c1",
            "card_set_id": "5a6acffc-f108-410d-be1a-898fafaf75da",
            "creator_id": "d5abbc81-73f0-4390-8301-7d822d8f13c1",
            "last_seen_at": "2020-02-08 20:43:34",
            "last_studied_at": "2020-02-08 20:43:34"
          },
          {
            "id": "67076f35-fdb0-4a1d-83d0-8a1df6b016ad",
            "user_id": "d5abbc81-73f0-4390-8301-7d822d8f13c1",
            "card_set_id": "3b652efe-bf80-4613-8083-daa3023ea3cb",
            "creator_id": "d5abbc81-73f0-4390-8301-7d822d8f13c1",
            "last_seen_at": "2019-10-18 22:44:18",
            "last_studied_at": "2019-10-18 22:44:18"
          },
          {
            "id": "82718e8b-5808-4bef-968b-42e178c1fe23",
            "user_id": "d5abbc81-73f0-4390-8301-7d822d8f13c1",
            "card_set_id": "592764ec-4671-4d3a-b5dc-d8a0a926fd83",
            "creator_id": "d5abbc81-73f0-4390-8301-7d822d8f13c1",
            "last_seen_at": "2020-01-16 12:50:43",
            "last_studied_at": "2020-01-16 12:50:43"
          },
          {
            "id": "04eb4115-c739-434f-b0c4-ae0f2ea6b6bd",
            "user_id": "d5abbc81-73f0-4390-8301-7d822d8f13c1",
            "card_set_id": "ddc1601b-fd57-4c1e-b9af-c51d788a44a8",
            "creator_id": "d5abbc81-73f0-4390-8301-7d822d8f13c1",
            "last_seen_at": "2019-11-22 01:31:02",
            "last_studied_at": "2019-11-22 01:31:02"
          },
          {
            "id": "16e77c62-ee2d-4452-91d6-1302a30297b0",
            "user_id": "b5c92bc6-526c-499e-b34e-64017aeb2864",
            "card_set_id": "1b8ba55b-d62f-4d68-92c7-fdd79f7a7433",
            "creator_id": "b5c92bc6-526c-499e-b34e-64017aeb2864",
            "last_seen_at": "2020-03-24 19:25:35",
            "last_studied_at": "2020-03-24 19:25:35"
          },
          {
            "id": "4d49a546-5262-4dad-9bf5-b0280e6d327c",
            "user_id": "b5c92bc6-526c-499e-b34e-64017aeb2864",
            "card_set_id": "38c024cb-0c5f-4ad7-a1d9-11ae7b45c534",
            "creator_id": "b5c92bc6-526c-499e-b34e-64017aeb2864",
            "last_seen_at": "2020-03-28 13:45:34",
            "last_studied_at": "2020-03-28 13:45:34"
          },
          {
            "id": "efd6689e-2a4d-42b7-a351-e23885e3aaab",
            "user_id": "b5c92bc6-526c-499e-b34e-64017aeb2864",
            "card_set_id": "6e43746c-4bc8-49ce-b669-8fb6ea73e336",
            "creator_id": "b5c92bc6-526c-499e-b34e-64017aeb2864",
            "last_seen_at": "2020-02-18 19:29:36",
            "last_studied_at": "2020-02-18 19:29:36"
          },
          {
            "id": "a2649b78-3edf-47db-a460-18742e45be83",
            "user_id": "b5c92bc6-526c-499e-b34e-64017aeb2864",
            "card_set_id": "962cd8af-367e-4d2a-851e-ac5fc426140a",
            "creator_id": "b5c92bc6-526c-499e-b34e-64017aeb2864",
            "last_seen_at": "2020-04-16 23:48:42",
            "last_studied_at": "2020-04-16 23:48:42"
          },
          {
            "id": "14ec5fc6-7a10-4f46-b0dd-b63f43065c7c",
            "user_id": "b5c92bc6-526c-499e-b34e-64017aeb2864",
            "card_set_id": "a1271462-87ad-4466-84f5-31e78fefcd29",
            "creator_id": "b5c92bc6-526c-499e-b34e-64017aeb2864",
            "last_seen_at": "2019-11-15 06:25:37",
            "last_studied_at": "2019-11-15 06:25:37"
          },
          {
            "id": "2bb07fce-6ed7-4609-a865-8641cef6ffc1",
            "user_id": "b5c92bc6-526c-499e-b34e-64017aeb2864",
            "card_set_id": "142e1206-8382-452f-ab0b-53d1eaac5fd0",
            "creator_id": "b5c92bc6-526c-499e-b34e-64017aeb2864",
            "last_seen_at": "2020-03-26 02:16:46",
            "last_studied_at": "2020-03-26 02:16:46"
          },
          {
            "id": "e6f8f3b3-f690-452b-be4b-6104cc5a6a9a",
            "user_id": "b5c92bc6-526c-499e-b34e-64017aeb2864",
            "card_set_id": "3808c36e-416f-48a5-8d1c-5136cb089301",
            "creator_id": "b5c92bc6-526c-499e-b34e-64017aeb2864",
            "last_seen_at": "2020-03-15 22:03:14",
            "last_studied_at": "2020-03-15 22:03:14"
          },
          {
            "id": "481adf16-a0c6-4d9c-8468-c92f1dc3c2d9",
            "user_id": "b5c92bc6-526c-499e-b34e-64017aeb2864",
            "card_set_id": "95fa6dd0-daf9-46e8-8423-16b845c93ec3",
            "creator_id": "b5c92bc6-526c-499e-b34e-64017aeb2864",
            "last_seen_at": "2019-11-24 12:27:54",
            "last_studied_at": "2019-11-24 12:27:54"
          },
          {
            "id": "88fada8a-c418-414a-95ef-f3f468d97402",
            "user_id": "b5c92bc6-526c-499e-b34e-64017aeb2864",
            "card_set_id": "31e66d17-7739-4458-9c19-2b05758a1f71",
            "creator_id": "b5c92bc6-526c-499e-b34e-64017aeb2864",
            "last_seen_at": "2019-10-09 14:20:36",
            "last_studied_at": "2019-10-09 14:20:36"
          },
          {
            "id": "5233bdc1-bea7-4212-84b9-00d866a75d62",
            "user_id": "b5c92bc6-526c-499e-b34e-64017aeb2864",
            "card_set_id": "2321e54a-00af-4341-8b64-f33a7ca620fa",
            "creator_id": "b5c92bc6-526c-499e-b34e-64017aeb2864",
            "last_seen_at": "2020-01-21 21:46:19",
            "last_studied_at": "2020-01-21 21:46:19"
          },
          {
            "id": "259df32c-ffee-460a-94f9-fcd05dc9d7a4",
            "user_id": "b5c92bc6-526c-499e-b34e-64017aeb2864",
            "card_set_id": "b5cd1754-71ba-450d-b8d8-88578333d608",
            "creator_id": "b5c92bc6-526c-499e-b34e-64017aeb2864",
            "last_seen_at": "2020-02-10 17:59:03",
            "last_studied_at": "2020-02-10 17:59:03"
          },
          {
            "id": "6628346e-4a20-4081-ba70-08c758b0b8c9",
            "user_id": "b5c92bc6-526c-499e-b34e-64017aeb2864",
            "card_set_id": "52285218-22dc-4a29-884d-2088519b114f",
            "creator_id": "b5c92bc6-526c-499e-b34e-64017aeb2864",
            "last_seen_at": "2019-10-10 09:51:25",
            "last_studied_at": "2019-10-10 09:51:25"
          },
          {
            "id": "1a6abbd6-4ca0-4fa2-800e-fa5225ee2094",
            "user_id": "b5c92bc6-526c-499e-b34e-64017aeb2864",
            "card_set_id": "5fc7cd5e-338b-4c3a-93fe-e103c48d7d8e",
            "creator_id": "b5c92bc6-526c-499e-b34e-64017aeb2864",
            "last_seen_at": "2019-12-10 02:26:31",
            "last_studied_at": "2019-12-10 02:26:31"
          },
          {
            "id": "30b17591-3dac-4a67-953d-42735c58da1a",
            "user_id": "9d669a1e-b4fa-4723-ba3a-554cdd040ba2",
            "card_set_id": "2aafdd57-a0a8-400d-a74e-320f287368b2",
            "creator_id": "9d669a1e-b4fa-4723-ba3a-554cdd040ba2",
            "last_seen_at": "2020-01-21 17:07:31",
            "last_studied_at": "2020-01-21 17:07:31"
          },
          {
            "id": "3f41b209-5e9d-4752-94f9-812cc963eec9",
            "user_id": "9d669a1e-b4fa-4723-ba3a-554cdd040ba2",
            "card_set_id": "a1a22dc1-e440-49cb-b64d-fb176cf59a15",
            "creator_id": "9d669a1e-b4fa-4723-ba3a-554cdd040ba2",
            "last_seen_at": "2020-01-18 08:53:25",
            "last_studied_at": "2020-01-18 08:53:25"
          },
          {
            "id": "9762cfe6-7594-4366-9ecd-cb66bb07f1c4",
            "user_id": "9d669a1e-b4fa-4723-ba3a-554cdd040ba2",
            "card_set_id": "e59770b1-c29b-4f33-9da3-25d949c6681f",
            "creator_id": "9d669a1e-b4fa-4723-ba3a-554cdd040ba2",
            "last_seen_at": "2020-04-03 11:41:48",
            "last_studied_at": "2020-04-03 11:41:48"
          },
          {
            "id": "fd472a10-4e35-4f1e-8223-61110cbba9b3",
            "user_id": "9d669a1e-b4fa-4723-ba3a-554cdd040ba2",
            "card_set_id": "f5e887f2-5c7d-4d8c-8ab4-b4ffeba39bb9",
            "creator_id": "9d669a1e-b4fa-4723-ba3a-554cdd040ba2",
            "last_seen_at": "2019-11-05 18:43:14",
            "last_studied_at": "2019-11-05 18:43:14"
          },
          {
            "id": "64e783e7-0ce1-4a4e-80b5-0328df4806ce",
            "user_id": "9d669a1e-b4fa-4723-ba3a-554cdd040ba2",
            "card_set_id": "0d849893-991a-481a-a1ce-c448bffb1141",
            "creator_id": "9d669a1e-b4fa-4723-ba3a-554cdd040ba2",
            "last_seen_at": "2020-02-08 23:04:39",
            "last_studied_at": "2020-02-08 23:04:39"
          },
          {
            "id": "c50c6b67-b648-4cdd-a419-35a00884acae",
            "user_id": "9d669a1e-b4fa-4723-ba3a-554cdd040ba2",
            "card_set_id": "e74eaf85-22b1-470f-ad44-adcd08a450b4",
            "creator_id": "9d669a1e-b4fa-4723-ba3a-554cdd040ba2",
            "last_seen_at": "2020-02-23 14:48:53",
            "last_studied_at": "2020-02-23 14:48:53"
          },
          {
            "id": "ec239dd3-32d7-4efa-9e16-be2d2c40750e",
            "user_id": "9d669a1e-b4fa-4723-ba3a-554cdd040ba2",
            "card_set_id": "715db761-9072-447f-961d-e7b04c19ab49",
            "creator_id": "9d669a1e-b4fa-4723-ba3a-554cdd040ba2",
            "last_seen_at": "2019-11-26 22:43:51",
            "last_studied_at": "2019-11-26 22:43:51"
          },
          {
            "id": "09968eb0-7c30-4b19-81f0-76cde6237b87",
            "user_id": "9d669a1e-b4fa-4723-ba3a-554cdd040ba2",
            "card_set_id": "658ab890-b81d-4f94-be67-fe8990a33c2d",
            "creator_id": "9d669a1e-b4fa-4723-ba3a-554cdd040ba2",
            "last_seen_at": "2019-11-16 22:47:33",
            "last_studied_at": "2019-11-16 22:47:33"
          },
          {
            "id": "40bdb4f6-1208-49b5-9b29-055d72e8f0dc",
            "user_id": "9d669a1e-b4fa-4723-ba3a-554cdd040ba2",
            "card_set_id": "4d74219f-d89d-4576-aed5-6cabf0df7489",
            "creator_id": "9d669a1e-b4fa-4723-ba3a-554cdd040ba2",
            "last_seen_at": "2019-11-30 08:00:09",
            "last_studied_at": "2019-11-30 08:00:09"
          },
          {
            "id": "2b1c77d3-7043-49f3-8bd3-89352f187576",
            "user_id": "9d669a1e-b4fa-4723-ba3a-554cdd040ba2",
            "card_set_id": "eed00bdc-1c70-49a1-a5a1-bec041985539",
            "creator_id": "9d669a1e-b4fa-4723-ba3a-554cdd040ba2",
            "last_seen_at": "2019-10-10 18:59:36",
            "last_studied_at": "2019-10-10 18:59:36"
          },
          {
            "id": "f4ae3221-d05a-4e4e-b86b-a357c84db425",
            "user_id": "967a8729-be67-402d-bf09-97f0d64ef748",
            "card_set_id": "134eeffb-6d52-415c-aaf7-d75c5747e756",
            "creator_id": "967a8729-be67-402d-bf09-97f0d64ef748",
            "last_seen_at": "2019-10-24 01:58:15",
            "last_studied_at": "2019-10-24 01:58:15"
          },
          {
            "id": "780bb4d1-f345-4e9c-b771-2f4331acdf49",
            "user_id": "967a8729-be67-402d-bf09-97f0d64ef748",
            "card_set_id": "530e8230-b32f-4c01-85ea-2e681e46d1ea",
            "creator_id": "967a8729-be67-402d-bf09-97f0d64ef748",
            "last_seen_at": "2020-01-03 15:23:25",
            "last_studied_at": "2020-01-03 15:23:25"
          },
          {
            "id": "be71b91f-f8c0-478c-84c2-e41c43753e39",
            "user_id": "967a8729-be67-402d-bf09-97f0d64ef748",
            "card_set_id": "c60a1d21-a501-44da-9816-e76f21f109e7",
            "creator_id": "967a8729-be67-402d-bf09-97f0d64ef748",
            "last_seen_at": "2019-11-23 12:16:16",
            "last_studied_at": "2019-11-23 12:16:16"
          },
          {
            "id": "f2a56294-43c0-4631-9f3d-fea2dd652c19",
            "user_id": "c1b5a042-5ccb-4888-85c6-3c90f1830ea0",
            "card_set_id": "79f4f4ca-14ba-4f59-80c5-be1797802b39",
            "creator_id": "c1b5a042-5ccb-4888-85c6-3c90f1830ea0",
            "last_seen_at": "2020-04-07 01:12:20",
            "last_studied_at": "2020-04-07 01:12:20"
          },
          {
            "id": "b902e162-9275-4f07-920e-f694c6866da8",
            "user_id": "c1b5a042-5ccb-4888-85c6-3c90f1830ea0",
            "card_set_id": "4165372a-690d-4b54-bfd1-dc8d8c6a0233",
            "creator_id": "c1b5a042-5ccb-4888-85c6-3c90f1830ea0",
            "last_seen_at": "2020-04-15 08:25:03",
            "last_studied_at": "2020-04-15 08:25:03"
          },
          {
            "id": "f4ede7b2-6407-40ec-b6ee-c83e2570fa44",
            "user_id": "c1b5a042-5ccb-4888-85c6-3c90f1830ea0",
            "card_set_id": "278ccda3-b03f-4327-a8de-72f93decd866",
            "creator_id": "c1b5a042-5ccb-4888-85c6-3c90f1830ea0",
            "last_seen_at": "2019-11-27 17:49:39",
            "last_studied_at": "2019-11-27 17:49:39"
          },
          {
            "id": "1b91f889-b690-4bdc-b76d-7f16cb54c6e9",
            "user_id": "c1b5a042-5ccb-4888-85c6-3c90f1830ea0",
            "card_set_id": "02b31c92-3b19-4f8b-91d5-3007fc6d6b12",
            "creator_id": "c1b5a042-5ccb-4888-85c6-3c90f1830ea0",
            "last_seen_at": "2019-12-16 07:49:08",
            "last_studied_at": "2019-12-16 07:49:08"
          },
          {
            "id": "78a8c989-516f-40c7-9d85-6cf286958649",
            "user_id": "c1b5a042-5ccb-4888-85c6-3c90f1830ea0",
            "card_set_id": "8261a7b0-3825-4c0c-a865-4329c86fbe1f",
            "creator_id": "c1b5a042-5ccb-4888-85c6-3c90f1830ea0",
            "last_seen_at": "2019-11-19 18:57:13",
            "last_studied_at": "2019-11-19 18:57:13"
          },
          {
            "id": "4f798ff8-5dd7-447b-9982-92e6b386b104",
            "user_id": "c1b5a042-5ccb-4888-85c6-3c90f1830ea0",
            "card_set_id": "87084edd-18f0-43d6-8342-bbe6e93f92f5",
            "creator_id": "c1b5a042-5ccb-4888-85c6-3c90f1830ea0",
            "last_seen_at": "2020-02-29 15:55:15",
            "last_studied_at": "2020-02-29 15:55:15"
          },
          {
            "id": "352fc1c7-1915-4bfd-823f-0a960943cb82",
            "user_id": "c1b5a042-5ccb-4888-85c6-3c90f1830ea0",
            "card_set_id": "610aed40-6441-4a30-950a-721f0b8f7f21",
            "creator_id": "c1b5a042-5ccb-4888-85c6-3c90f1830ea0",
            "last_seen_at": "2020-03-08 01:01:15",
            "last_studied_at": "2020-03-08 01:01:15"
          },
          {
            "id": "b40d0e42-ee83-44f0-8e0b-b3e5990d13d8",
            "user_id": "c1b5a042-5ccb-4888-85c6-3c90f1830ea0",
            "card_set_id": "686add32-d974-47b4-9f41-e1acbe9e5bf7",
            "creator_id": "c1b5a042-5ccb-4888-85c6-3c90f1830ea0",
            "last_seen_at": "2020-03-20 00:54:20",
            "last_studied_at": "2020-03-20 00:54:20"
          },
          {
            "id": "719f1ec9-412c-4944-8192-0c736062c8b6",
            "user_id": "c1b5a042-5ccb-4888-85c6-3c90f1830ea0",
            "card_set_id": "064d63e7-629f-409d-a1de-fbd4ded79637",
            "creator_id": "c1b5a042-5ccb-4888-85c6-3c90f1830ea0",
            "last_seen_at": "2020-01-25 15:10:50",
            "last_studied_at": "2020-01-25 15:10:50"
          },
          {
            "id": "1d2e7562-b26e-4730-a89c-0bf0edcad946",
            "user_id": "c1b5a042-5ccb-4888-85c6-3c90f1830ea0",
            "card_set_id": "8e420d56-cdd1-4db4-bee0-86cfa3cd8f64",
            "creator_id": "c1b5a042-5ccb-4888-85c6-3c90f1830ea0",
            "last_seen_at": "2019-11-14 02:00:30",
            "last_studied_at": "2019-11-14 02:00:30"
          },
          {
            "id": "c38b904f-ea7c-4a6c-8439-978cab9f135b",
            "user_id": "c1b5a042-5ccb-4888-85c6-3c90f1830ea0",
            "card_set_id": "8018232e-21d7-46b7-89f7-55801733f5f7",
            "creator_id": "c1b5a042-5ccb-4888-85c6-3c90f1830ea0",
            "last_seen_at": "2019-11-05 06:21:09",
            "last_studied_at": "2019-11-05 06:21:09"
          },
          {
            "id": "48259c30-e1cd-4f13-9c22-df90be93b17a",
            "user_id": "c1b5a042-5ccb-4888-85c6-3c90f1830ea0",
            "card_set_id": "57c566c8-68cb-41c8-be73-ebcfda5c00c9",
            "creator_id": "c1b5a042-5ccb-4888-85c6-3c90f1830ea0",
            "last_seen_at": "2020-01-21 20:40:09",
            "last_studied_at": "2020-01-21 20:40:09"
          },
          {
            "id": "8bc84a6d-c3ed-42f9-a659-264142b518d3",
            "user_id": "c1b5a042-5ccb-4888-85c6-3c90f1830ea0",
            "card_set_id": "129ddd79-9b21-49ba-9fb7-3bd3b5788542",
            "creator_id": "c1b5a042-5ccb-4888-85c6-3c90f1830ea0",
            "last_seen_at": "2019-10-16 02:24:35",
            "last_studied_at": "2019-10-16 02:24:35"
          },
          {
            "id": "99b9cad7-01b1-427c-ab5b-77a48ef6ba69",
            "user_id": "c1b5a042-5ccb-4888-85c6-3c90f1830ea0",
            "card_set_id": "58f326a8-1e1b-4708-9457-c2a9c6b40289",
            "creator_id": "c1b5a042-5ccb-4888-85c6-3c90f1830ea0",
            "last_seen_at": "2019-11-24 17:39:00",
            "last_studied_at": "2019-11-24 17:39:00"
          },
          {
            "id": "8d2702f5-8019-42e5-8109-422dbfbeba20",
            "user_id": "c1b5a042-5ccb-4888-85c6-3c90f1830ea0",
            "card_set_id": "c2208c9e-249d-4641-85d7-c37c6a624b88",
            "creator_id": "c1b5a042-5ccb-4888-85c6-3c90f1830ea0",
            "last_seen_at": "2019-12-18 11:38:30",
            "last_studied_at": "2019-12-18 11:38:30"
          },
          {
            "id": "1d5bb022-cfb3-4774-a4e5-da10aed18ee8",
            "user_id": "c1b5a042-5ccb-4888-85c6-3c90f1830ea0",
            "card_set_id": "2802f933-bd80-46c8-8175-5e133f62e862",
            "creator_id": "c1b5a042-5ccb-4888-85c6-3c90f1830ea0",
            "last_seen_at": "2019-11-12 15:02:00",
            "last_studied_at": "2019-11-12 15:02:00"
          },
          {
            "id": "539abfe2-caab-415a-a5df-f4d255e93177",
            "user_id": "c1b5a042-5ccb-4888-85c6-3c90f1830ea0",
            "card_set_id": "f1e151ae-5812-44d1-bf84-9b1c648c8169",
            "creator_id": "c1b5a042-5ccb-4888-85c6-3c90f1830ea0",
            "last_seen_at": "2020-03-10 23:43:00",
            "last_studied_at": "2020-03-10 23:43:00"
          },
          {
            "id": "41b43703-02ea-44ef-87a6-5f58a96ef453",
            "user_id": "c1b5a042-5ccb-4888-85c6-3c90f1830ea0",
            "card_set_id": "fe9cf8e5-198e-4b81-9394-51ac28129170",
            "creator_id": "c1b5a042-5ccb-4888-85c6-3c90f1830ea0",
            "last_seen_at": "2019-11-09 22:31:21",
            "last_studied_at": "2019-11-09 22:31:21"
          },
          {
            "id": "21978367-3096-4c84-a59e-aabef0f38caa",
            "user_id": "c1b5a042-5ccb-4888-85c6-3c90f1830ea0",
            "card_set_id": "df758e3a-b2a4-4a01-83b0-f494955edde7",
            "creator_id": "c1b5a042-5ccb-4888-85c6-3c90f1830ea0",
            "last_seen_at": "2020-04-13 14:55:31",
            "last_studied_at": "2020-04-13 14:55:31"
          },
          {
            "id": "a37b1640-653c-4545-a38c-b83cde70bdf1",
            "user_id": "c1b5a042-5ccb-4888-85c6-3c90f1830ea0",
            "card_set_id": "93b481a1-d8bf-45e9-8386-53e9384b2683",
            "creator_id": "c1b5a042-5ccb-4888-85c6-3c90f1830ea0",
            "last_seen_at": "2020-02-11 17:49:29",
            "last_studied_at": "2020-02-11 17:49:29"
          },
          {
            "id": "0adda31c-1b5e-498e-aa20-44bc88dc6bb8",
            "user_id": "c1b5a042-5ccb-4888-85c6-3c90f1830ea0",
            "card_set_id": "9ecfb9b9-8a8d-493f-acd8-94d403e6d8ee",
            "creator_id": "c1b5a042-5ccb-4888-85c6-3c90f1830ea0",
            "last_seen_at": "2019-12-25 07:58:36",
            "last_studied_at": "2019-12-25 07:58:36"
          },
          {
            "id": "cece0caa-47b7-4b13-92c0-c39f1f2f9d4e",
            "user_id": "c1b5a042-5ccb-4888-85c6-3c90f1830ea0",
            "card_set_id": "0d444fc8-1fec-48da-a0c7-126632e75f28",
            "creator_id": "c1b5a042-5ccb-4888-85c6-3c90f1830ea0",
            "last_seen_at": "2019-12-05 10:18:42",
            "last_studied_at": "2019-12-05 10:18:42"
          },
          {
            "id": "0eea1038-23cf-41b6-b14e-e087aaa6b042",
            "user_id": "c1b5a042-5ccb-4888-85c6-3c90f1830ea0",
            "card_set_id": "b23b7be8-dae6-4281-8159-1c36f7489f3f",
            "creator_id": "c1b5a042-5ccb-4888-85c6-3c90f1830ea0",
            "last_seen_at": "2019-11-13 06:28:17",
            "last_studied_at": "2019-11-13 06:28:17"
          },
          {
            "id": "86e03084-5509-4d68-8c79-bc5b89e7e7e3",
            "user_id": "c1b5a042-5ccb-4888-85c6-3c90f1830ea0",
            "card_set_id": "93004f28-cba3-40be-af20-04a4fc0f0697",
            "creator_id": "c1b5a042-5ccb-4888-85c6-3c90f1830ea0",
            "last_seen_at": "2020-04-12 00:38:44",
            "last_studied_at": "2020-04-12 00:38:44"
          },
          {
            "id": "4865a8b9-f23d-4fae-9f92-8a22e803fbaf",
            "user_id": "c1b5a042-5ccb-4888-85c6-3c90f1830ea0",
            "card_set_id": "c4af8f45-d17d-4e88-890d-93a0df0cda78",
            "creator_id": "c1b5a042-5ccb-4888-85c6-3c90f1830ea0",
            "last_seen_at": "2019-10-26 09:49:32",
            "last_studied_at": "2019-10-26 09:49:32"
          },
          {
            "id": "4d1a09df-5ada-44e5-b374-324f80fb046d",
            "user_id": "c1b5a042-5ccb-4888-85c6-3c90f1830ea0",
            "card_set_id": "cf9328b7-9c96-4cf3-b616-0ab8cc25f01a",
            "creator_id": "c1b5a042-5ccb-4888-85c6-3c90f1830ea0",
            "last_seen_at": "2020-01-30 16:20:52",
            "last_studied_at": "2020-01-30 16:20:52"
          },
          {
            "id": "cd08e9f4-b534-4e9b-87c7-d9e07979009f",
            "user_id": "c1b5a042-5ccb-4888-85c6-3c90f1830ea0",
            "card_set_id": "2e7b0bfb-a09c-42eb-bed5-097c9c101256",
            "creator_id": "c1b5a042-5ccb-4888-85c6-3c90f1830ea0",
            "last_seen_at": "2019-11-26 14:09:38",
            "last_studied_at": "2019-11-26 14:09:38"
          },
          {
            "id": "42f95a5a-8df9-42ac-b8ed-664dcf44fc49",
            "user_id": "c1b5a042-5ccb-4888-85c6-3c90f1830ea0",
            "card_set_id": "e353a868-bca4-42fe-a1f8-118ee98f11e1",
            "creator_id": "c1b5a042-5ccb-4888-85c6-3c90f1830ea0",
            "last_seen_at": "2020-01-22 19:16:35",
            "last_studied_at": "2020-01-22 19:16:35"
          },
          {
            "id": "0c55d3ce-4377-40bf-b065-7d3eb3c8a6c7",
            "user_id": "c1b5a042-5ccb-4888-85c6-3c90f1830ea0",
            "card_set_id": "3ce9e558-2c05-4392-8d64-8ca60d836772",
            "creator_id": "c1b5a042-5ccb-4888-85c6-3c90f1830ea0",
            "last_seen_at": "2019-12-31 22:41:52",
            "last_studied_at": "2019-12-31 22:41:52"
          },
          {
            "id": "fcfe84a6-611b-4621-99e5-0151f7b73ca1",
            "user_id": "c1b5a042-5ccb-4888-85c6-3c90f1830ea0",
            "card_set_id": "9a1d59c1-04fb-4442-8ad1-8f35b23ff13e",
            "creator_id": "c1b5a042-5ccb-4888-85c6-3c90f1830ea0",
            "last_seen_at": "2020-03-20 00:49:33",
            "last_studied_at": "2020-03-20 00:49:33"
          },
          {
            "id": "676e5828-a67c-47d1-b291-f4f51e1824e7",
            "user_id": "c1b5a042-5ccb-4888-85c6-3c90f1830ea0",
            "card_set_id": "31d99be1-5258-4fc2-8670-2659fa087c83",
            "creator_id": "c1b5a042-5ccb-4888-85c6-3c90f1830ea0",
            "last_seen_at": "2020-01-09 09:31:58",
            "last_studied_at": "2020-01-09 09:31:58"
          },
          {
            "id": "b4993bb0-2102-4977-a008-ac03fbf57804",
            "user_id": "c1b5a042-5ccb-4888-85c6-3c90f1830ea0",
            "card_set_id": "64ac4949-0b24-4b34-8338-b04445ea913c",
            "creator_id": "c1b5a042-5ccb-4888-85c6-3c90f1830ea0",
            "last_seen_at": "2020-02-06 07:13:29",
            "last_studied_at": "2020-02-06 07:13:29"
          },
          {
            "id": "b36d0069-8604-4fc9-9e85-7026aba1e0ec",
            "user_id": "c1b5a042-5ccb-4888-85c6-3c90f1830ea0",
            "card_set_id": "e68f26a3-b94d-4847-ae56-60417230415b",
            "creator_id": "c1b5a042-5ccb-4888-85c6-3c90f1830ea0",
            "last_seen_at": "2020-01-10 03:36:44",
            "last_studied_at": "2020-01-10 03:36:44"
          },
          {
            "id": "312175a3-01ca-4186-ae7f-4366b27f496c",
            "user_id": "c1b5a042-5ccb-4888-85c6-3c90f1830ea0",
            "card_set_id": "51a59a28-2da8-47dc-a88a-38bf0bf91037",
            "creator_id": "c1b5a042-5ccb-4888-85c6-3c90f1830ea0",
            "last_seen_at": "2019-10-14 20:52:12",
            "last_studied_at": "2019-10-14 20:52:12"
          },
          {
            "id": "42c99fa6-02a1-4e5e-a286-a48de4d3079a",
            "user_id": "c1b5a042-5ccb-4888-85c6-3c90f1830ea0",
            "card_set_id": "e4942637-2517-4f68-87cc-013e8d281d7c",
            "creator_id": "c1b5a042-5ccb-4888-85c6-3c90f1830ea0",
            "last_seen_at": "2019-12-24 00:13:37",
            "last_studied_at": "2019-12-24 00:13:37"
          },
          {
            "id": "bf581789-a3c6-4d0d-a6b0-7f4234787574",
            "user_id": "c1b5a042-5ccb-4888-85c6-3c90f1830ea0",
            "card_set_id": "1e95965c-d158-4e87-af6a-f9536456869d",
            "creator_id": "c1b5a042-5ccb-4888-85c6-3c90f1830ea0",
            "last_seen_at": "2020-02-16 17:12:06",
            "last_studied_at": "2020-02-16 17:12:06"
          },
          {
            "id": "f937454f-722b-4fd5-864b-a4d5d94eb84d",
            "user_id": "c1b5a042-5ccb-4888-85c6-3c90f1830ea0",
            "card_set_id": "6a862f09-f7d5-4ff3-b5d2-9bf0d1109b7b",
            "creator_id": "c1b5a042-5ccb-4888-85c6-3c90f1830ea0",
            "last_seen_at": "2019-12-26 11:21:02",
            "last_studied_at": "2019-12-26 11:21:02"
          },
          {
            "id": "f509767d-ef63-40c3-801a-09792db9966f",
            "user_id": "c1b5a042-5ccb-4888-85c6-3c90f1830ea0",
            "card_set_id": "d6ea6eaf-63ff-4b86-b4ac-9f3febd7461f",
            "creator_id": "c1b5a042-5ccb-4888-85c6-3c90f1830ea0",
            "last_seen_at": "2020-02-07 15:34:31",
            "last_studied_at": "2020-02-07 15:34:31"
          },
          {
            "id": "974c0bf2-6f79-4cf3-b250-4ded4b654789",
            "user_id": "c1b5a042-5ccb-4888-85c6-3c90f1830ea0",
            "card_set_id": "cfa85078-608e-4206-9ac5-020c29ab02ce",
            "creator_id": "c1b5a042-5ccb-4888-85c6-3c90f1830ea0",
            "last_seen_at": "2020-03-04 13:00:48",
            "last_studied_at": "2020-03-04 13:00:48"
          },
          {
            "id": "86219673-0f3e-40a3-a74e-ee912eb93fa9",
            "user_id": "c1b5a042-5ccb-4888-85c6-3c90f1830ea0",
            "card_set_id": "b6f0a1f8-ee5d-4ceb-b3cb-56dc2446e381",
            "creator_id": "c1b5a042-5ccb-4888-85c6-3c90f1830ea0",
            "last_seen_at": "2020-01-08 17:21:55",
            "last_studied_at": "2020-01-08 17:21:55"
          },
          {
            "id": "0243a247-5a6f-4eae-a0e1-e74ca379d31a",
            "user_id": "c1b5a042-5ccb-4888-85c6-3c90f1830ea0",
            "card_set_id": "433f6045-c972-4f1d-a6ae-7d163839c13b",
            "creator_id": "c1b5a042-5ccb-4888-85c6-3c90f1830ea0",
            "last_seen_at": "2019-12-25 08:05:36",
            "last_studied_at": "2019-12-25 08:05:36"
          },
          {
            "id": "eab3bb86-1777-4b81-bcd8-2c64b44a44d9",
            "user_id": "c1b5a042-5ccb-4888-85c6-3c90f1830ea0",
            "card_set_id": "ca6bb86d-2bdc-4c69-be05-8f7fe9665917",
            "creator_id": "c1b5a042-5ccb-4888-85c6-3c90f1830ea0",
            "last_seen_at": "2020-04-09 16:03:29",
            "last_studied_at": "2020-04-09 16:03:29"
          },
          {
            "id": "66ebb08e-bcc2-4e8f-b783-c9a9032b522f",
            "user_id": "c1b5a042-5ccb-4888-85c6-3c90f1830ea0",
            "card_set_id": "49206272-4887-42fc-bc65-d9b9740cf4ae",
            "creator_id": "c1b5a042-5ccb-4888-85c6-3c90f1830ea0",
            "last_seen_at": "2020-02-04 02:47:18",
            "last_studied_at": "2020-02-04 02:47:18"
          },
          {
            "id": "981e4518-08f2-4831-a9a1-ad36254e1316",
            "user_id": "c1b5a042-5ccb-4888-85c6-3c90f1830ea0",
            "card_set_id": "79c85495-6777-4fdc-afd1-7034da24cb8d",
            "creator_id": "c1b5a042-5ccb-4888-85c6-3c90f1830ea0",
            "last_seen_at": "2020-02-05 08:27:55",
            "last_studied_at": "2020-02-05 08:27:55"
          },
          {
            "id": "d0f4b6f0-15a8-41eb-9450-daefd1746b7a",
            "user_id": "2f93aae3-a36e-4067-aac4-b475c7b076a7",
            "card_set_id": "d2e4a2b8-967f-4bdf-aaa9-6e1b41d343c6",
            "creator_id": "2f93aae3-a36e-4067-aac4-b475c7b076a7",
            "last_seen_at": "2019-10-30 18:10:44",
            "last_studied_at": "2019-10-30 18:10:44"
          },
          {
            "id": "703d8a78-5036-4608-bf78-92dde64f475c",
            "user_id": "2f93aae3-a36e-4067-aac4-b475c7b076a7",
            "card_set_id": "24cff1f5-ef15-4763-a630-adf57edf79fc",
            "creator_id": "2f93aae3-a36e-4067-aac4-b475c7b076a7",
            "last_seen_at": "2020-02-12 07:30:08",
            "last_studied_at": "2020-02-12 07:30:08"
          },
          {
            "id": "672dfb7c-0cac-4fa9-85d1-03a34ccae199",
            "user_id": "2f93aae3-a36e-4067-aac4-b475c7b076a7",
            "card_set_id": "2a916194-2815-4905-b198-880a37935103",
            "creator_id": "2f93aae3-a36e-4067-aac4-b475c7b076a7",
            "last_seen_at": "2019-11-26 12:18:42",
            "last_studied_at": "2019-11-26 12:18:42"
          },
          {
            "id": "3d5f92e4-f16f-47a1-a97f-93a8bb064f0c",
            "user_id": "2f93aae3-a36e-4067-aac4-b475c7b076a7",
            "card_set_id": "6f54683f-1226-4bbd-b34c-9a4837a02d00",
            "creator_id": "2f93aae3-a36e-4067-aac4-b475c7b076a7",
            "last_seen_at": "2020-02-15 11:06:05",
            "last_studied_at": "2020-02-15 11:06:05"
          },
          {
            "id": "5a25a109-4d59-41e0-8455-4adc662a9012",
            "user_id": "2f93aae3-a36e-4067-aac4-b475c7b076a7",
            "card_set_id": "97a7ceb3-9980-48c7-b310-cb8f6b4bfeb8",
            "creator_id": "2f93aae3-a36e-4067-aac4-b475c7b076a7",
            "last_seen_at": "2020-04-10 04:28:16",
            "last_studied_at": "2020-04-10 04:28:16"
          },
          {
            "id": "19c5757b-514e-4fa9-8643-234e503638e8",
            "user_id": "4ce54714-c7ef-45ed-9ca7-11e5bdf91c6d",
            "card_set_id": "a747ab6c-8ab1-4dea-9b2e-cc203bfbce83",
            "creator_id": "4ce54714-c7ef-45ed-9ca7-11e5bdf91c6d",
            "last_seen_at": "2020-01-11 17:37:30",
            "last_studied_at": "2020-01-11 17:37:30"
          },
          {
            "id": "20c3c5ea-4a61-48a3-8041-0ffd077df5c2",
            "user_id": "4ce54714-c7ef-45ed-9ca7-11e5bdf91c6d",
            "card_set_id": "0ab476cb-8c3a-43d6-acb4-66c5a2203098",
            "creator_id": "4ce54714-c7ef-45ed-9ca7-11e5bdf91c6d",
            "last_seen_at": "2020-01-07 10:41:18",
            "last_studied_at": "2020-01-07 10:41:18"
          },
          {
            "id": "3004dab7-cb23-4453-bc08-92fa7f731af9",
            "user_id": "4ce54714-c7ef-45ed-9ca7-11e5bdf91c6d",
            "card_set_id": "52a88e13-05cc-4f8b-996a-1cfa13f95cd7",
            "creator_id": "4ce54714-c7ef-45ed-9ca7-11e5bdf91c6d",
            "last_seen_at": "2020-04-10 13:30:44",
            "last_studied_at": "2020-04-10 13:30:44"
          },
          {
            "id": "2e68be3f-5a26-44dc-8ddb-3a98bbed79ff",
            "user_id": "4ce54714-c7ef-45ed-9ca7-11e5bdf91c6d",
            "card_set_id": "4d0d19cf-3cce-4944-8575-7404e0ce6905",
            "creator_id": "4ce54714-c7ef-45ed-9ca7-11e5bdf91c6d",
            "last_seen_at": "2020-04-01 07:46:19",
            "last_studied_at": "2020-04-01 07:46:19"
          },
          {
            "id": "0a709aa0-13df-40c7-8eb5-47e0c33549da",
            "user_id": "4ce54714-c7ef-45ed-9ca7-11e5bdf91c6d",
            "card_set_id": "71566bee-0cf0-4998-b77d-529584bd905c",
            "creator_id": "4ce54714-c7ef-45ed-9ca7-11e5bdf91c6d",
            "last_seen_at": "2020-03-12 23:06:12",
            "last_studied_at": "2020-03-12 23:06:12"
          },
          {
            "id": "545cda35-c99c-4d81-b899-7d69db4a7ebc",
            "user_id": "4ce54714-c7ef-45ed-9ca7-11e5bdf91c6d",
            "card_set_id": "598b901d-a907-4b9c-889c-a587bee0342d",
            "creator_id": "4ce54714-c7ef-45ed-9ca7-11e5bdf91c6d",
            "last_seen_at": "2020-03-06 08:13:23",
            "last_studied_at": "2020-03-06 08:13:23"
          },
          {
            "id": "2f62986c-adae-4123-9dd7-653efb04c1f2",
            "user_id": "4ce54714-c7ef-45ed-9ca7-11e5bdf91c6d",
            "card_set_id": "a46eb793-e827-4bc0-b810-7b19ca3bae4a",
            "creator_id": "4ce54714-c7ef-45ed-9ca7-11e5bdf91c6d",
            "last_seen_at": "2019-12-12 21:36:06",
            "last_studied_at": "2019-12-12 21:36:06"
          },
          {
            "id": "9e6297b5-f9da-418b-8cb6-5a040b8c6bd7",
            "user_id": "4ce54714-c7ef-45ed-9ca7-11e5bdf91c6d",
            "card_set_id": "20fed418-ff0e-42bc-8b56-1ddfb0febe7d",
            "creator_id": "4ce54714-c7ef-45ed-9ca7-11e5bdf91c6d",
            "last_seen_at": "2019-12-06 02:43:11",
            "last_studied_at": "2019-12-06 02:43:11"
          },
          {
            "id": "7e055f37-79d1-4b21-9e0d-7bd00201bc8c",
            "user_id": "4ce54714-c7ef-45ed-9ca7-11e5bdf91c6d",
            "card_set_id": "f5ab99d4-2d29-4495-bb83-84c5a7305b2b",
            "creator_id": "4ce54714-c7ef-45ed-9ca7-11e5bdf91c6d",
            "last_seen_at": "2020-03-23 07:21:44",
            "last_studied_at": "2020-03-23 07:21:44"
          },
          {
            "id": "9f329e57-288d-458b-a35e-7a753a5d700e",
            "user_id": "4ce54714-c7ef-45ed-9ca7-11e5bdf91c6d",
            "card_set_id": "a2773961-9d95-4ceb-9db5-1b0c247a4beb",
            "creator_id": "4ce54714-c7ef-45ed-9ca7-11e5bdf91c6d",
            "last_seen_at": "2019-12-06 21:25:49",
            "last_studied_at": "2019-12-06 21:25:49"
          },
          {
            "id": "ea46ee74-b306-447d-baa7-89a2bafbef31",
            "user_id": "4ce54714-c7ef-45ed-9ca7-11e5bdf91c6d",
            "card_set_id": "305c9acd-96df-4a34-a851-ea86529ad2df",
            "creator_id": "4ce54714-c7ef-45ed-9ca7-11e5bdf91c6d",
            "last_seen_at": "2020-03-06 03:00:41",
            "last_studied_at": "2020-03-06 03:00:41"
          },
          {
            "id": "ce62bb6e-c39d-4c1d-adfe-9de26ebe9f4c",
            "user_id": "4ce54714-c7ef-45ed-9ca7-11e5bdf91c6d",
            "card_set_id": "8db096b1-532a-41b4-baaf-3ef1038802b2",
            "creator_id": "4ce54714-c7ef-45ed-9ca7-11e5bdf91c6d",
            "last_seen_at": "2019-10-23 11:35:00",
            "last_studied_at": "2019-10-23 11:35:00"
          },
          {
            "id": "98078be5-de83-4eb9-8ed7-2f072ce126c4",
            "user_id": "4ce54714-c7ef-45ed-9ca7-11e5bdf91c6d",
            "card_set_id": "c5802b16-6e3c-46e1-bf73-9c86b3186f6b",
            "creator_id": "4ce54714-c7ef-45ed-9ca7-11e5bdf91c6d",
            "last_seen_at": "2020-01-26 13:43:32",
            "last_studied_at": "2020-01-26 13:43:32"
          },
          {
            "id": "4754f493-f136-4026-92cb-3e844ef1ea78",
            "user_id": "4ce54714-c7ef-45ed-9ca7-11e5bdf91c6d",
            "card_set_id": "de4eb321-712e-45e0-876f-487887e102f4",
            "creator_id": "4ce54714-c7ef-45ed-9ca7-11e5bdf91c6d",
            "last_seen_at": "2020-02-08 06:42:06",
            "last_studied_at": "2020-02-08 06:42:06"
          },
          {
            "id": "9464e70b-13eb-421c-94fb-89665350c81e",
            "user_id": "4ce54714-c7ef-45ed-9ca7-11e5bdf91c6d",
            "card_set_id": "d7c92adf-4d62-4ea9-a576-0f80a29b8bb0",
            "creator_id": "4ce54714-c7ef-45ed-9ca7-11e5bdf91c6d",
            "last_seen_at": "2020-01-05 12:21:20",
            "last_studied_at": "2020-01-05 12:21:20"
          },
          {
            "id": "5bc8d5a6-7653-4991-83da-7c631161eaf3",
            "user_id": "4ce54714-c7ef-45ed-9ca7-11e5bdf91c6d",
            "card_set_id": "0613c08e-1073-4d68-bd6b-46cf3ccb9cee",
            "creator_id": "4ce54714-c7ef-45ed-9ca7-11e5bdf91c6d",
            "last_seen_at": "2019-10-18 20:17:34",
            "last_studied_at": "2019-10-18 20:17:34"
          },
          {
            "id": "b755e104-5294-44bf-8f07-ed988cb1b131",
            "user_id": "4ce54714-c7ef-45ed-9ca7-11e5bdf91c6d",
            "card_set_id": "a2f6cfe6-1703-4257-84d6-9215c9f17a38",
            "creator_id": "4ce54714-c7ef-45ed-9ca7-11e5bdf91c6d",
            "last_seen_at": "2019-12-21 03:31:22",
            "last_studied_at": "2019-12-21 03:31:22"
          },
          {
            "id": "4086dad4-4e34-4cd9-af77-21b24e1d12f2",
            "user_id": "4ce54714-c7ef-45ed-9ca7-11e5bdf91c6d",
            "card_set_id": "595fa93c-cc24-4000-9009-2ed5067bbba7",
            "creator_id": "4ce54714-c7ef-45ed-9ca7-11e5bdf91c6d",
            "last_seen_at": "2019-12-12 13:03:13",
            "last_studied_at": "2019-12-12 13:03:13"
          },
          {
            "id": "69a2240f-25dc-4e13-bcf1-7e86d9643b71",
            "user_id": "4ce54714-c7ef-45ed-9ca7-11e5bdf91c6d",
            "card_set_id": "195a03ed-26aa-4cbb-b53e-052e47cfab33",
            "creator_id": "4ce54714-c7ef-45ed-9ca7-11e5bdf91c6d",
            "last_seen_at": "2020-01-26 22:48:42",
            "last_studied_at": "2020-01-26 22:48:42"
          },
          {
            "id": "dbbcd213-0d1e-4ec6-9dcc-4de5522b36df",
            "user_id": "4ce54714-c7ef-45ed-9ca7-11e5bdf91c6d",
            "card_set_id": "2167b018-ca37-4b15-9c55-28f7571d3a4c",
            "creator_id": "4ce54714-c7ef-45ed-9ca7-11e5bdf91c6d",
            "last_seen_at": "2020-02-11 06:36:02",
            "last_studied_at": "2020-02-11 06:36:02"
          },
          {
            "id": "f8798323-5098-47f5-b15a-24b8dbd23d52",
            "user_id": "4ce54714-c7ef-45ed-9ca7-11e5bdf91c6d",
            "card_set_id": "920febc0-8258-4f83-8176-07e095199b6a",
            "creator_id": "4ce54714-c7ef-45ed-9ca7-11e5bdf91c6d",
            "last_seen_at": "2019-12-05 01:24:06",
            "last_studied_at": "2019-12-05 01:24:06"
          },
          {
            "id": "f63db1eb-d1c7-4586-a24e-b63eba08b6e8",
            "user_id": "4ce54714-c7ef-45ed-9ca7-11e5bdf91c6d",
            "card_set_id": "87eb6e47-c792-45f7-b0f2-f7c46f4c03ba",
            "creator_id": "4ce54714-c7ef-45ed-9ca7-11e5bdf91c6d",
            "last_seen_at": "2019-11-16 15:23:21",
            "last_studied_at": "2019-11-16 15:23:21"
          },
          {
            "id": "486ee355-4c3e-4187-81a8-c7960b9849e1",
            "user_id": "4ce54714-c7ef-45ed-9ca7-11e5bdf91c6d",
            "card_set_id": "5277ed70-3690-4df7-ad6b-34dcebe14c1e",
            "creator_id": "4ce54714-c7ef-45ed-9ca7-11e5bdf91c6d",
            "last_seen_at": "2020-03-12 18:06:06",
            "last_studied_at": "2020-03-12 18:06:06"
          },
          {
            "id": "50edc5c4-c93d-4aed-ad3e-b906b1c94248",
            "user_id": "4ce54714-c7ef-45ed-9ca7-11e5bdf91c6d",
            "card_set_id": "df2d8d07-2634-48cb-8f43-146e089d598b",
            "creator_id": "4ce54714-c7ef-45ed-9ca7-11e5bdf91c6d",
            "last_seen_at": "2019-12-02 06:49:22",
            "last_studied_at": "2019-12-02 06:49:22"
          },
          {
            "id": "e7b55926-4f92-40c4-b6fc-1849101fee3e",
            "user_id": "4ce54714-c7ef-45ed-9ca7-11e5bdf91c6d",
            "card_set_id": "d3a578f6-8452-497a-9410-5b76c6d4759f",
            "creator_id": "4ce54714-c7ef-45ed-9ca7-11e5bdf91c6d",
            "last_seen_at": "2020-03-25 15:02:07",
            "last_studied_at": "2020-03-25 15:02:07"
          },
          {
            "id": "b29457ac-85cf-42c4-b179-6f50cda31d07",
            "user_id": "4ce54714-c7ef-45ed-9ca7-11e5bdf91c6d",
            "card_set_id": "804a6085-0193-4d10-ac16-2dc7c7744a87",
            "creator_id": "4ce54714-c7ef-45ed-9ca7-11e5bdf91c6d",
            "last_seen_at": "2020-01-15 04:49:36",
            "last_studied_at": "2020-01-15 04:49:36"
          },
          {
            "id": "4da4027b-f811-4c09-89bf-7d542dec3a72",
            "user_id": "4ce54714-c7ef-45ed-9ca7-11e5bdf91c6d",
            "card_set_id": "cf8aef5b-b243-4be4-9a7b-4d12746de0df",
            "creator_id": "4ce54714-c7ef-45ed-9ca7-11e5bdf91c6d",
            "last_seen_at": "2019-12-21 09:39:21",
            "last_studied_at": "2019-12-21 09:39:21"
          },
          {
            "id": "0437a2c0-371b-4abf-9a56-e8ff6d367a07",
            "user_id": "4ce54714-c7ef-45ed-9ca7-11e5bdf91c6d",
            "card_set_id": "8d13653d-ffc1-41c0-b095-d20392e08146",
            "creator_id": "4ce54714-c7ef-45ed-9ca7-11e5bdf91c6d",
            "last_seen_at": "2020-03-30 00:08:16",
            "last_studied_at": "2020-03-30 00:08:16"
          },
          {
            "id": "fded4033-1c19-46b5-bcfc-c616e068c039",
            "user_id": "a4a6a204-0173-4aab-ba9e-54b3664bbfed",
            "card_set_id": "7984f608-1611-449c-a257-c7727b5628e4",
            "creator_id": "a4a6a204-0173-4aab-ba9e-54b3664bbfed",
            "last_seen_at": "2020-03-01 05:09:17",
            "last_studied_at": "2020-03-01 05:09:17"
          },
          {
            "id": "e82c31b6-f2bf-4a31-9d4f-e8bb9c3b0582",
            "user_id": "a4a6a204-0173-4aab-ba9e-54b3664bbfed",
            "card_set_id": "87d80da0-914a-4bd8-9f6b-9df4612e94fa",
            "creator_id": "a4a6a204-0173-4aab-ba9e-54b3664bbfed",
            "last_seen_at": "2020-03-08 10:03:42",
            "last_studied_at": "2020-03-08 10:03:42"
          },
          {
            "id": "4516f1d4-f1e6-4c8f-9dbd-256004d25437",
            "user_id": "a4a6a204-0173-4aab-ba9e-54b3664bbfed",
            "card_set_id": "05ffaff8-b486-4bcc-b7a5-a2c3e4452b25",
            "creator_id": "a4a6a204-0173-4aab-ba9e-54b3664bbfed",
            "last_seen_at": "2019-12-04 14:46:39",
            "last_studied_at": "2019-12-04 14:46:39"
          },
          {
            "id": "4f161517-9d00-40a5-9caf-cfefb59bc1eb",
            "user_id": "a4a6a204-0173-4aab-ba9e-54b3664bbfed",
            "card_set_id": "1d10f2f8-e2bc-4b63-ae3e-cd621009732c",
            "creator_id": "a4a6a204-0173-4aab-ba9e-54b3664bbfed",
            "last_seen_at": "2020-03-15 15:50:11",
            "last_studied_at": "2020-03-15 15:50:11"
          },
          {
            "id": "a07325e8-1751-42e7-b1d1-74722d22c872",
            "user_id": "a4a6a204-0173-4aab-ba9e-54b3664bbfed",
            "card_set_id": "f8a04b67-db93-4cf7-9419-037b3bb5b17a",
            "creator_id": "a4a6a204-0173-4aab-ba9e-54b3664bbfed",
            "last_seen_at": "2020-03-03 22:50:14",
            "last_studied_at": "2020-03-03 22:50:14"
          },
          {
            "id": "8369cc8e-a94c-4c4d-b5f9-dc98d20e4c10",
            "user_id": "a4a6a204-0173-4aab-ba9e-54b3664bbfed",
            "card_set_id": "98f0fa19-97af-4903-9a78-16e4a9ddace2",
            "creator_id": "a4a6a204-0173-4aab-ba9e-54b3664bbfed",
            "last_seen_at": "2020-01-11 21:24:01",
            "last_studied_at": "2020-01-11 21:24:01"
          },
          {
            "id": "e55efc55-da67-4de6-91ac-c9b1b51425f5",
            "user_id": "a4a6a204-0173-4aab-ba9e-54b3664bbfed",
            "card_set_id": "d0db096e-e9e6-4ebd-9d4c-e60f0a364f72",
            "creator_id": "a4a6a204-0173-4aab-ba9e-54b3664bbfed",
            "last_seen_at": "2019-12-22 08:55:40",
            "last_studied_at": "2019-12-22 08:55:40"
          },
          {
            "id": "4b98295b-ac86-4a47-ae05-bbe46998f817",
            "user_id": "a4a6a204-0173-4aab-ba9e-54b3664bbfed",
            "card_set_id": "75f40554-6617-4080-9b8a-e93302176878",
            "creator_id": "a4a6a204-0173-4aab-ba9e-54b3664bbfed",
            "last_seen_at": "2019-11-11 20:23:41",
            "last_studied_at": "2019-11-11 20:23:41"
          },
          {
            "id": "934cf0da-e828-4fc8-b858-be94993868fa",
            "user_id": "a4a6a204-0173-4aab-ba9e-54b3664bbfed",
            "card_set_id": "d0d12a54-4ca8-4ef1-be0f-dfbdec94b8dd",
            "creator_id": "a4a6a204-0173-4aab-ba9e-54b3664bbfed",
            "last_seen_at": "2020-02-12 11:21:23",
            "last_studied_at": "2020-02-12 11:21:23"
          },
          {
            "id": "8aa6a46b-87d3-40c1-9418-3723e06ca769",
            "user_id": "02ec60c5-4365-4f96-a98e-f5dd255034d6",
            "card_set_id": "72288bc5-33dc-4e47-ba88-e515f783a78d",
            "creator_id": "02ec60c5-4365-4f96-a98e-f5dd255034d6",
            "last_seen_at": "2020-04-14 15:27:29",
            "last_studied_at": "2020-04-14 15:27:29"
          },
          {
            "id": "722d9bb3-ce42-4214-950d-1fd77999e56b",
            "user_id": "02ec60c5-4365-4f96-a98e-f5dd255034d6",
            "card_set_id": "0cc76894-03b4-42df-879b-911668982f3b",
            "creator_id": "02ec60c5-4365-4f96-a98e-f5dd255034d6",
            "last_seen_at": "2020-01-18 06:24:19",
            "last_studied_at": "2020-01-18 06:24:19"
          },
          {
            "id": "c22cbe69-932d-4897-92d2-7a278fb69d11",
            "user_id": "02ec60c5-4365-4f96-a98e-f5dd255034d6",
            "card_set_id": "2475a134-d370-46ec-820f-e6f4cc87c18c",
            "creator_id": "02ec60c5-4365-4f96-a98e-f5dd255034d6",
            "last_seen_at": "2020-04-12 00:28:11",
            "last_studied_at": "2020-04-12 00:28:11"
          },
          {
            "id": "edf4bb99-d74a-40f4-bac8-33910481ece7",
            "user_id": "02ec60c5-4365-4f96-a98e-f5dd255034d6",
            "card_set_id": "cb837d79-ca85-472c-bcb7-4fbe9dc205ff",
            "creator_id": "02ec60c5-4365-4f96-a98e-f5dd255034d6",
            "last_seen_at": "2020-04-09 08:37:02",
            "last_studied_at": "2020-04-09 08:37:02"
          },
          {
            "id": "8bc7c238-1515-42cc-8ef4-524d70da59ba",
            "user_id": "02ec60c5-4365-4f96-a98e-f5dd255034d6",
            "card_set_id": "8b5572aa-b999-4f67-a382-cad8af9ba15d",
            "creator_id": "02ec60c5-4365-4f96-a98e-f5dd255034d6",
            "last_seen_at": "2020-01-08 23:17:36",
            "last_studied_at": "2020-01-08 23:17:36"
          },
          {
            "id": "cb87b254-a0ca-4c64-973e-9b7f25b65a9c",
            "user_id": "02ec60c5-4365-4f96-a98e-f5dd255034d6",
            "card_set_id": "5231c3ec-88d6-423f-9cf9-807c62c62cf3",
            "creator_id": "02ec60c5-4365-4f96-a98e-f5dd255034d6",
            "last_seen_at": "2020-03-09 12:33:45",
            "last_studied_at": "2020-03-09 12:33:45"
          },
          {
            "id": "078122ae-924d-461f-8a6d-5b8b7c3b2307",
            "user_id": "02ec60c5-4365-4f96-a98e-f5dd255034d6",
            "card_set_id": "83ce1b73-7c9f-4941-a6ad-5bb37010f20b",
            "creator_id": "02ec60c5-4365-4f96-a98e-f5dd255034d6",
            "last_seen_at": "2020-03-25 15:10:52",
            "last_studied_at": "2020-03-25 15:10:52"
          },
          {
            "id": "5d05e14b-aff5-41f8-bea4-21dbeba57cdd",
            "user_id": "02ec60c5-4365-4f96-a98e-f5dd255034d6",
            "card_set_id": "11025650-3fb8-4366-b436-d67a3033510b",
            "creator_id": "02ec60c5-4365-4f96-a98e-f5dd255034d6",
            "last_seen_at": "2020-01-18 16:01:47",
            "last_studied_at": "2020-01-18 16:01:47"
          },
          {
            "id": "f6c63df0-65b7-4f89-927b-5388a7e9857d",
            "user_id": "02ec60c5-4365-4f96-a98e-f5dd255034d6",
            "card_set_id": "848cf9c5-6be7-41da-a87c-bf136d4777cd",
            "creator_id": "02ec60c5-4365-4f96-a98e-f5dd255034d6",
            "last_seen_at": "2019-10-29 16:08:48",
            "last_studied_at": "2019-10-29 16:08:48"
          },
          {
            "id": "9ba270c1-1d8c-41ee-b296-dacace21df3c",
            "user_id": "02ec60c5-4365-4f96-a98e-f5dd255034d6",
            "card_set_id": "c0a9d819-e0a3-44d9-bd37-fa3169575f83",
            "creator_id": "02ec60c5-4365-4f96-a98e-f5dd255034d6",
            "last_seen_at": "2020-02-08 03:41:04",
            "last_studied_at": "2020-02-08 03:41:04"
          },
          {
            "id": "dc990fbb-5400-4052-b426-97e18e41c462",
            "user_id": "02ec60c5-4365-4f96-a98e-f5dd255034d6",
            "card_set_id": "c5298f9a-1a21-4c57-bfe5-e95cb7841479",
            "creator_id": "02ec60c5-4365-4f96-a98e-f5dd255034d6",
            "last_seen_at": "2019-10-17 09:43:17",
            "last_studied_at": "2019-10-17 09:43:17"
          },
          {
            "id": "7337d17e-ed13-4977-a55f-cc808d498ac2",
            "user_id": "02ec60c5-4365-4f96-a98e-f5dd255034d6",
            "card_set_id": "119f6366-a699-4f3c-9892-285c6f297c72",
            "creator_id": "02ec60c5-4365-4f96-a98e-f5dd255034d6",
            "last_seen_at": "2019-10-10 05:16:59",
            "last_studied_at": "2019-10-10 05:16:59"
          },
          {
            "id": "00aab51e-3513-4eb8-82af-ced159685433",
            "user_id": "1c9396c0-59a7-4256-982b-b3923995d75b",
            "card_set_id": "8ff703be-f77c-4e53-b077-7260a3a1832b",
            "creator_id": "1c9396c0-59a7-4256-982b-b3923995d75b",
            "last_seen_at": "2019-11-28 16:58:46",
            "last_studied_at": "2019-11-28 16:58:46"
          },
          {
            "id": "0ef45506-5b13-40d1-9148-c46d9a9e47c5",
            "user_id": "1c9396c0-59a7-4256-982b-b3923995d75b",
            "card_set_id": "216a9d40-309f-4929-9b27-07abbc6a241d",
            "creator_id": "1c9396c0-59a7-4256-982b-b3923995d75b",
            "last_seen_at": "2020-03-10 04:20:36",
            "last_studied_at": "2020-03-10 04:20:36"
          },
          {
            "id": "01104735-8a4e-432c-bbad-bdca2056d927",
            "user_id": "1c9396c0-59a7-4256-982b-b3923995d75b",
            "card_set_id": "74e4f45c-9590-4e9b-b471-e4af68a65067",
            "creator_id": "1c9396c0-59a7-4256-982b-b3923995d75b",
            "last_seen_at": "2019-12-21 18:18:57",
            "last_studied_at": "2019-12-21 18:18:57"
          },
          {
            "id": "f320da71-ae49-40a0-921a-53ff89de6a8d",
            "user_id": "1c9396c0-59a7-4256-982b-b3923995d75b",
            "card_set_id": "0ddadd25-dc29-4c43-8589-c6919624a32a",
            "creator_id": "1c9396c0-59a7-4256-982b-b3923995d75b",
            "last_seen_at": "2019-12-05 04:56:04",
            "last_studied_at": "2019-12-05 04:56:04"
          },
          {
            "id": "f93c2b38-4bf3-43f2-b1bb-07a3144727eb",
            "user_id": "1c9396c0-59a7-4256-982b-b3923995d75b",
            "card_set_id": "ecc64fa2-95af-43bf-b722-986a4510b1e5",
            "creator_id": "1c9396c0-59a7-4256-982b-b3923995d75b",
            "last_seen_at": "2020-01-24 12:34:05",
            "last_studied_at": "2020-01-24 12:34:05"
          },
          {
            "id": "37848239-9550-448b-a02f-2067bf429705",
            "user_id": "1c9396c0-59a7-4256-982b-b3923995d75b",
            "card_set_id": "a2143c7f-c401-4103-92d1-696d0bd61c47",
            "creator_id": "1c9396c0-59a7-4256-982b-b3923995d75b",
            "last_seen_at": "2020-03-07 05:59:38",
            "last_studied_at": "2020-03-07 05:59:38"
          },
          {
            "id": "9efdcfbc-6feb-458a-afeb-19281d9238e2",
            "user_id": "1c9396c0-59a7-4256-982b-b3923995d75b",
            "card_set_id": "a2176645-a648-487c-8088-d63b9ad92857",
            "creator_id": "1c9396c0-59a7-4256-982b-b3923995d75b",
            "last_seen_at": "2020-03-18 15:48:48",
            "last_studied_at": "2020-03-18 15:48:48"
          },
          {
            "id": "e6ffe9b7-bb4a-46f5-8cb8-31b51b0cfcf9",
            "user_id": "41ba5dd2-23b9-4403-9ac7-c333399f5313",
            "card_set_id": "bfd3d768-ef04-4d51-a548-5be92b38f284",
            "creator_id": "41ba5dd2-23b9-4403-9ac7-c333399f5313",
            "last_seen_at": "2019-12-11 19:03:21",
            "last_studied_at": "2019-12-11 19:03:21"
          },
          {
            "id": "932fc2fe-c586-4817-bf63-13dca0fcc3c4",
            "user_id": "41ba5dd2-23b9-4403-9ac7-c333399f5313",
            "card_set_id": "34ab684c-5739-491f-aec1-b5c04319e29b",
            "creator_id": "41ba5dd2-23b9-4403-9ac7-c333399f5313",
            "last_seen_at": "2020-02-08 21:59:25",
            "last_studied_at": "2020-02-08 21:59:25"
          },
          {
            "id": "a8c2057d-cbb9-4dfb-b97a-2f22346daaea",
            "user_id": "41ba5dd2-23b9-4403-9ac7-c333399f5313",
            "card_set_id": "8b5d5faf-3426-44e5-bdd7-ed73160583b2",
            "creator_id": "41ba5dd2-23b9-4403-9ac7-c333399f5313",
            "last_seen_at": "2019-11-01 10:03:18",
            "last_studied_at": "2019-11-01 10:03:18"
          },
          {
            "id": "0a765411-9fe5-4d8a-b1dc-05b2703c9cfc",
            "user_id": "41ba5dd2-23b9-4403-9ac7-c333399f5313",
            "card_set_id": "bfcf5c1e-0f27-4989-9039-a407bbd63fdd",
            "creator_id": "41ba5dd2-23b9-4403-9ac7-c333399f5313",
            "last_seen_at": "2019-11-23 12:05:28",
            "last_studied_at": "2019-11-23 12:05:28"
          },
          {
            "id": "77742cb0-2269-46ca-97c0-feeb9491b611",
            "user_id": "41ba5dd2-23b9-4403-9ac7-c333399f5313",
            "card_set_id": "ab0e258d-d7a0-44d1-99dd-3505c1d6251f",
            "creator_id": "41ba5dd2-23b9-4403-9ac7-c333399f5313",
            "last_seen_at": "2020-01-10 21:35:18",
            "last_studied_at": "2020-01-10 21:35:18"
          },
          {
            "id": "dc13eae0-0867-4d6d-bdd4-688f54665477",
            "user_id": "41ba5dd2-23b9-4403-9ac7-c333399f5313",
            "card_set_id": "f76895f5-21f9-44aa-9443-fd0840de290f",
            "creator_id": "41ba5dd2-23b9-4403-9ac7-c333399f5313",
            "last_seen_at": "2019-10-27 04:09:20",
            "last_studied_at": "2019-10-27 04:09:20"
          },
          {
            "id": "68971393-cbc4-485f-ba1c-7a482aca3064",
            "user_id": "ff3a5321-c534-4c5c-80e8-f95fad735638",
            "card_set_id": "2a04afde-501c-4804-a118-8e5a84adaa7a",
            "creator_id": "ff3a5321-c534-4c5c-80e8-f95fad735638",
            "last_seen_at": "2020-02-01 05:47:08",
            "last_studied_at": "2020-02-01 05:47:08"
          },
          {
            "id": "25c5d62b-1422-441b-a631-8f6dc7a5924b",
            "user_id": "ff3a5321-c534-4c5c-80e8-f95fad735638",
            "card_set_id": "f5e132a3-cfd1-4bc4-a97a-9933762423a4",
            "creator_id": "ff3a5321-c534-4c5c-80e8-f95fad735638",
            "last_seen_at": "2019-10-13 05:42:22",
            "last_studied_at": "2019-10-13 05:42:22"
          },
          {
            "id": "ce78e490-0174-4ad3-9b24-7758a9cbd2da",
            "user_id": "ff3a5321-c534-4c5c-80e8-f95fad735638",
            "card_set_id": "5410a71b-fd26-4629-aa17-b200d5057abe",
            "creator_id": "ff3a5321-c534-4c5c-80e8-f95fad735638",
            "last_seen_at": "2019-10-30 09:28:55",
            "last_studied_at": "2019-10-30 09:28:55"
          },
          {
            "id": "1a898854-ce75-42d9-8c10-996630980800",
            "user_id": "ff3a5321-c534-4c5c-80e8-f95fad735638",
            "card_set_id": "8b479ff4-4dca-49f4-8477-22592e17127b",
            "creator_id": "ff3a5321-c534-4c5c-80e8-f95fad735638",
            "last_seen_at": "2020-02-04 02:55:06",
            "last_studied_at": "2020-02-04 02:55:06"
          },
          {
            "id": "a98c6442-2dee-4d99-becc-22bb745032ae",
            "user_id": "ff3a5321-c534-4c5c-80e8-f95fad735638",
            "card_set_id": "3f6b7c27-4053-417b-ba1c-3dc46118f073",
            "creator_id": "ff3a5321-c534-4c5c-80e8-f95fad735638",
            "last_seen_at": "2020-03-29 06:15:56",
            "last_studied_at": "2020-03-29 06:15:56"
          },
          {
            "id": "8d087dd6-ce73-4c21-925a-d73e869cb726",
            "user_id": "ff3a5321-c534-4c5c-80e8-f95fad735638",
            "card_set_id": "1a0c249b-5fd0-4806-ac03-12b08478826a",
            "creator_id": "ff3a5321-c534-4c5c-80e8-f95fad735638",
            "last_seen_at": "2019-11-10 20:50:47",
            "last_studied_at": "2019-11-10 20:50:47"
          },
          {
            "id": "1ea494df-9a59-4748-adf9-751ea445c8ed",
            "user_id": "ff3a5321-c534-4c5c-80e8-f95fad735638",
            "card_set_id": "010b6eda-8025-4202-a75d-0052f00e65e4",
            "creator_id": "ff3a5321-c534-4c5c-80e8-f95fad735638",
            "last_seen_at": "2020-01-19 03:48:18",
            "last_studied_at": "2020-01-19 03:48:18"
          },
          {
            "id": "b569cf04-9272-4c46-b9c1-b95fa3f4bcb9",
            "user_id": "ff3a5321-c534-4c5c-80e8-f95fad735638",
            "card_set_id": "e1cda4bc-9930-4ac5-a045-529b417c8780",
            "creator_id": "ff3a5321-c534-4c5c-80e8-f95fad735638",
            "last_seen_at": "2020-02-10 03:02:34",
            "last_studied_at": "2020-02-10 03:02:34"
          },
          {
            "id": "be183309-38e5-4472-8b11-933e2e3f335e",
            "user_id": "ff3a5321-c534-4c5c-80e8-f95fad735638",
            "card_set_id": "4b3e06ea-8bf9-444c-82f4-5512b0e780c2",
            "creator_id": "ff3a5321-c534-4c5c-80e8-f95fad735638",
            "last_seen_at": "2019-11-29 06:59:47",
            "last_studied_at": "2019-11-29 06:59:47"
          },
          {
            "id": "e82b1311-1f25-419d-8184-ff69f7b98dd8",
            "user_id": "ff3a5321-c534-4c5c-80e8-f95fad735638",
            "card_set_id": "db464f95-554b-41b9-abe7-0943938f655a",
            "creator_id": "ff3a5321-c534-4c5c-80e8-f95fad735638",
            "last_seen_at": "2019-11-24 17:21:02",
            "last_studied_at": "2019-11-24 17:21:02"
          },
          {
            "id": "2e602ecc-6279-4bec-993f-7418296b932f",
            "user_id": "ff3a5321-c534-4c5c-80e8-f95fad735638",
            "card_set_id": "2b7fa871-18a9-47e2-82d5-dff85b5eed2e",
            "creator_id": "ff3a5321-c534-4c5c-80e8-f95fad735638",
            "last_seen_at": "2020-03-15 19:53:30",
            "last_studied_at": "2020-03-15 19:53:30"
          },
          {
            "id": "4b3d1c02-5680-442d-ae84-6577943355f1",
            "user_id": "ff3a5321-c534-4c5c-80e8-f95fad735638",
            "card_set_id": "bd08a812-7219-4e78-b688-00dd680afd10",
            "creator_id": "ff3a5321-c534-4c5c-80e8-f95fad735638",
            "last_seen_at": "2020-01-18 07:52:41",
            "last_studied_at": "2020-01-18 07:52:41"
          },
          {
            "id": "0b40e7ca-0040-43e0-9e8d-d6e0aae6838e",
            "user_id": "ff3a5321-c534-4c5c-80e8-f95fad735638",
            "card_set_id": "bd3e4cee-ebce-4db9-a9bc-9dc0c421355d",
            "creator_id": "ff3a5321-c534-4c5c-80e8-f95fad735638",
            "last_seen_at": "2019-11-16 20:21:25",
            "last_studied_at": "2019-11-16 20:21:25"
          },
          {
            "id": "e5e16233-a20c-4cab-b644-9f507a475007",
            "user_id": "ff3a5321-c534-4c5c-80e8-f95fad735638",
            "card_set_id": "405868db-0333-4417-9e75-70be6999d03a",
            "creator_id": "ff3a5321-c534-4c5c-80e8-f95fad735638",
            "last_seen_at": "2020-02-28 05:08:59",
            "last_studied_at": "2020-02-28 05:08:59"
          },
          {
            "id": "3b62829e-2e2e-43dd-b48d-6bd4d18cff99",
            "user_id": "ff3a5321-c534-4c5c-80e8-f95fad735638",
            "card_set_id": "635aca4b-64dc-4b54-8540-df6cff7a7185",
            "creator_id": "ff3a5321-c534-4c5c-80e8-f95fad735638",
            "last_seen_at": "2019-10-26 08:25:58",
            "last_studied_at": "2019-10-26 08:25:58"
          },
          {
            "id": "9305d69d-148e-4280-99ad-4af869e04f01",
            "user_id": "ff3a5321-c534-4c5c-80e8-f95fad735638",
            "card_set_id": "06a15a0b-044f-4e57-b31d-ecc65518b311",
            "creator_id": "ff3a5321-c534-4c5c-80e8-f95fad735638",
            "last_seen_at": "2019-12-14 21:35:15",
            "last_studied_at": "2019-12-14 21:35:15"
          },
          {
            "id": "52618f95-518e-4f39-9985-06b630079285",
            "user_id": "ff3a5321-c534-4c5c-80e8-f95fad735638",
            "card_set_id": "8d56e295-0dc6-4733-b000-98a1bd5d370d",
            "creator_id": "ff3a5321-c534-4c5c-80e8-f95fad735638",
            "last_seen_at": "2020-04-02 16:20:36",
            "last_studied_at": "2020-04-02 16:20:36"
          },
          {
            "id": "57e46cdc-8ea6-491e-bd0c-36492a343915",
            "user_id": "50618d19-e743-434d-8ee2-0a2ea611132f",
            "card_set_id": "84fa3e38-aff4-405a-997c-96c15168322a",
            "creator_id": "50618d19-e743-434d-8ee2-0a2ea611132f",
            "last_seen_at": "2020-04-10 22:44:53",
            "last_studied_at": "2020-04-10 22:44:53"
          },
          {
            "id": "051d4add-db3e-41a6-be2d-af22647a5d07",
            "user_id": "50618d19-e743-434d-8ee2-0a2ea611132f",
            "card_set_id": "e2544862-303d-4a8c-a021-a2e24e53c9ae",
            "creator_id": "50618d19-e743-434d-8ee2-0a2ea611132f",
            "last_seen_at": "2020-01-27 09:32:22",
            "last_studied_at": "2020-01-27 09:32:22"
          },
          {
            "id": "cc0c6a2b-7dde-47a4-b343-2e50be23dc73",
            "user_id": "50618d19-e743-434d-8ee2-0a2ea611132f",
            "card_set_id": "47fe0012-ceaa-4de2-9550-b866587e9bfc",
            "creator_id": "50618d19-e743-434d-8ee2-0a2ea611132f",
            "last_seen_at": "2020-02-12 08:39:15",
            "last_studied_at": "2020-02-12 08:39:15"
          },
          {
            "id": "4c471b4d-36b7-41af-99a4-0b1e4bdad8b0",
            "user_id": "50618d19-e743-434d-8ee2-0a2ea611132f",
            "card_set_id": "bbd113d4-5066-4b66-a0b8-00258a244196",
            "creator_id": "50618d19-e743-434d-8ee2-0a2ea611132f",
            "last_seen_at": "2020-02-25 08:09:12",
            "last_studied_at": "2020-02-25 08:09:12"
          },
          {
            "id": "23859b4d-c88f-4cca-b070-c170097a4f12",
            "user_id": "50618d19-e743-434d-8ee2-0a2ea611132f",
            "card_set_id": "2cc406ef-b1c4-4191-bc2c-3b36e8cb63fc",
            "creator_id": "50618d19-e743-434d-8ee2-0a2ea611132f",
            "last_seen_at": "2020-03-20 06:26:24",
            "last_studied_at": "2020-03-20 06:26:24"
          },
          {
            "id": "f664a4d1-957c-4f29-9973-fd429db67573",
            "user_id": "50618d19-e743-434d-8ee2-0a2ea611132f",
            "card_set_id": "2a848792-036c-4bae-9901-9a194f9a73be",
            "creator_id": "50618d19-e743-434d-8ee2-0a2ea611132f",
            "last_seen_at": "2019-12-11 12:16:27",
            "last_studied_at": "2019-12-11 12:16:27"
          },
          {
            "id": "b5654853-4993-4871-9f44-70eb71ca97f2",
            "user_id": "50618d19-e743-434d-8ee2-0a2ea611132f",
            "card_set_id": "17d7cfec-ec2f-437a-bfb4-77535ab1b1be",
            "creator_id": "50618d19-e743-434d-8ee2-0a2ea611132f",
            "last_seen_at": "2020-03-16 14:04:21",
            "last_studied_at": "2020-03-16 14:04:21"
          },
          {
            "id": "b1a9016a-ef94-421f-9296-c031df4d14f3",
            "user_id": "50618d19-e743-434d-8ee2-0a2ea611132f",
            "card_set_id": "27665fc3-a55d-42a9-9b05-975b5fca907f",
            "creator_id": "50618d19-e743-434d-8ee2-0a2ea611132f",
            "last_seen_at": "2019-10-25 08:24:15",
            "last_studied_at": "2019-10-25 08:24:15"
          },
          {
            "id": "0e9eaadc-0ba5-4aca-a3d9-c19f114fa124",
            "user_id": "50618d19-e743-434d-8ee2-0a2ea611132f",
            "card_set_id": "788ddcf9-95e3-4765-926f-a2018cfd45f7",
            "creator_id": "50618d19-e743-434d-8ee2-0a2ea611132f",
            "last_seen_at": "2020-01-04 00:03:27",
            "last_studied_at": "2020-01-04 00:03:27"
          },
          {
            "id": "679f495f-8ace-4ff9-9d6d-1a0d78701e21",
            "user_id": "50618d19-e743-434d-8ee2-0a2ea611132f",
            "card_set_id": "64af446a-5e6b-4ddf-a543-3b9236475fc3",
            "creator_id": "50618d19-e743-434d-8ee2-0a2ea611132f",
            "last_seen_at": "2019-12-26 03:59:10",
            "last_studied_at": "2019-12-26 03:59:10"
          },
          {
            "id": "0f6f1048-62b6-47dd-9113-06b3b3d02d93",
            "user_id": "50618d19-e743-434d-8ee2-0a2ea611132f",
            "card_set_id": "be37089c-d239-4abe-8478-8288cd838ded",
            "creator_id": "50618d19-e743-434d-8ee2-0a2ea611132f",
            "last_seen_at": "2020-03-13 13:19:03",
            "last_studied_at": "2020-03-13 13:19:03"
          },
          {
            "id": "040fd73d-6d1d-4721-b7c5-76dae5bb5938",
            "user_id": "50618d19-e743-434d-8ee2-0a2ea611132f",
            "card_set_id": "b8ec28d9-add1-42f6-ab3d-b68d15743661",
            "creator_id": "50618d19-e743-434d-8ee2-0a2ea611132f",
            "last_seen_at": "2020-01-13 13:04:09",
            "last_studied_at": "2020-01-13 13:04:09"
          },
          {
            "id": "0971ac42-4d60-49ee-b4b6-24ffbcadf0b9",
            "user_id": "50618d19-e743-434d-8ee2-0a2ea611132f",
            "card_set_id": "991c2780-c9bc-4ff0-b232-b87ece9a3d29",
            "creator_id": "50618d19-e743-434d-8ee2-0a2ea611132f",
            "last_seen_at": "2020-03-31 08:30:45",
            "last_studied_at": "2020-03-31 08:30:45"
          },
          {
            "id": "362dca7d-14c6-44a2-90b0-39203cde75d1",
            "user_id": "50618d19-e743-434d-8ee2-0a2ea611132f",
            "card_set_id": "6ce7eebb-5251-42cf-8649-d3862181af11",
            "creator_id": "50618d19-e743-434d-8ee2-0a2ea611132f",
            "last_seen_at": "2020-01-08 05:29:05",
            "last_studied_at": "2020-01-08 05:29:05"
          },
          {
            "id": "f5872787-341c-4e8f-8c57-3a5b8fb53672",
            "user_id": "50618d19-e743-434d-8ee2-0a2ea611132f",
            "card_set_id": "efce7861-5fb1-473d-bad1-78b5d1d78be3",
            "creator_id": "50618d19-e743-434d-8ee2-0a2ea611132f",
            "last_seen_at": "2020-04-08 12:47:46",
            "last_studied_at": "2020-04-08 12:47:46"
          },
          {
            "id": "99edc294-9f39-417f-8b38-b878a1cb051a",
            "user_id": "e29f3487-d6ea-42b3-a4aa-9fc681ee971b",
            "card_set_id": "5f86560a-4462-4d1a-a20a-d42614a39b1f",
            "creator_id": "e29f3487-d6ea-42b3-a4aa-9fc681ee971b",
            "last_seen_at": "2020-04-01 02:08:11",
            "last_studied_at": "2020-04-01 02:08:11"
          },
          {
            "id": "f240dc10-4994-4203-8fad-a638f90ce9c7",
            "user_id": "e29f3487-d6ea-42b3-a4aa-9fc681ee971b",
            "card_set_id": "2f4a7c70-45f2-4251-9114-ae6f80c35e78",
            "creator_id": "e29f3487-d6ea-42b3-a4aa-9fc681ee971b",
            "last_seen_at": "2020-02-20 17:05:41",
            "last_studied_at": "2020-02-20 17:05:41"
          },
          {
            "id": "e0d0d2f6-7083-48a8-9a98-31f74e7a9ec2",
            "user_id": "e29f3487-d6ea-42b3-a4aa-9fc681ee971b",
            "card_set_id": "93c86701-d8d5-461f-97f1-a9be88e5eb4f",
            "creator_id": "e29f3487-d6ea-42b3-a4aa-9fc681ee971b",
            "last_seen_at": "2020-04-11 19:44:35",
            "last_studied_at": "2020-04-11 19:44:35"
          },
          {
            "id": "1dac6eef-1d98-4d4e-886c-ae44cfd57257",
            "user_id": "e29f3487-d6ea-42b3-a4aa-9fc681ee971b",
            "card_set_id": "9aed610b-b122-4fc2-8f41-be95c23fe5db",
            "creator_id": "e29f3487-d6ea-42b3-a4aa-9fc681ee971b",
            "last_seen_at": "2020-02-22 19:03:06",
            "last_studied_at": "2020-02-22 19:03:06"
          },
          {
            "id": "f77f8146-a11b-4db5-a70f-58a6c6c9cd29",
            "user_id": "e29f3487-d6ea-42b3-a4aa-9fc681ee971b",
            "card_set_id": "fe709cd3-debd-461d-8a63-235f7ee70b32",
            "creator_id": "e29f3487-d6ea-42b3-a4aa-9fc681ee971b",
            "last_seen_at": "2019-12-14 01:42:37",
            "last_studied_at": "2019-12-14 01:42:37"
          },
          {
            "id": "fc6e1e69-c31a-41bc-b752-2ec3b506206a",
            "user_id": "b213f887-16cd-43d0-9e86-594b3e767303",
            "card_set_id": "cc3d276b-b2bb-406d-ad61-5bc1c55a0bd1",
            "creator_id": "b213f887-16cd-43d0-9e86-594b3e767303",
            "last_seen_at": "2020-02-13 10:24:41",
            "last_studied_at": "2020-02-13 10:24:41"
          },
          {
            "id": "3f650d38-d26e-40be-93f2-30501e73b70d",
            "user_id": "b213f887-16cd-43d0-9e86-594b3e767303",
            "card_set_id": "b6577bef-34da-4d39-ba4b-b7caf2605642",
            "creator_id": "b213f887-16cd-43d0-9e86-594b3e767303",
            "last_seen_at": "2019-12-28 22:37:56",
            "last_studied_at": "2019-12-28 22:37:56"
          },
          {
            "id": "538a97a9-4d05-4014-9957-bc6969276110",
            "user_id": "b213f887-16cd-43d0-9e86-594b3e767303",
            "card_set_id": "8ca4a96a-0930-4267-868e-544690a556c2",
            "creator_id": "b213f887-16cd-43d0-9e86-594b3e767303",
            "last_seen_at": "2019-12-25 06:06:55",
            "last_studied_at": "2019-12-25 06:06:55"
          },
          {
            "id": "8a41ec3d-1ff7-4837-a92b-fec149a44f78",
            "user_id": "b213f887-16cd-43d0-9e86-594b3e767303",
            "card_set_id": "718da055-117d-484f-9957-54db9320da82",
            "creator_id": "b213f887-16cd-43d0-9e86-594b3e767303",
            "last_seen_at": "2019-11-17 00:52:30",
            "last_studied_at": "2019-11-17 00:52:30"
          },
          {
            "id": "447c9d3f-15c7-4259-a01d-8b7dfca9b5dd",
            "user_id": "b213f887-16cd-43d0-9e86-594b3e767303",
            "card_set_id": "f5208d85-bb6d-4193-8ee6-3afaed7e57ed",
            "creator_id": "b213f887-16cd-43d0-9e86-594b3e767303",
            "last_seen_at": "2019-12-04 16:28:07",
            "last_studied_at": "2019-12-04 16:28:07"
          },
          {
            "id": "6e516ff1-a50b-4494-93d1-20e589eb7c1e",
            "user_id": "b213f887-16cd-43d0-9e86-594b3e767303",
            "card_set_id": "2afa32bd-145b-4bef-b72d-67269939a1f4",
            "creator_id": "b213f887-16cd-43d0-9e86-594b3e767303",
            "last_seen_at": "2020-01-07 03:33:39",
            "last_studied_at": "2020-01-07 03:33:39"
          },
          {
            "id": "4b42d75d-6154-4f14-9657-092debd41e12",
            "user_id": "b213f887-16cd-43d0-9e86-594b3e767303",
            "card_set_id": "b8b42595-3a13-4a24-a85a-f1dd49b5b227",
            "creator_id": "b213f887-16cd-43d0-9e86-594b3e767303",
            "last_seen_at": "2019-11-11 00:14:38",
            "last_studied_at": "2019-11-11 00:14:38"
          },
          {
            "id": "ad903146-e30b-47aa-a03c-d7c1bf6e9704",
            "user_id": "b213f887-16cd-43d0-9e86-594b3e767303",
            "card_set_id": "4f325fcd-2011-4b2b-80bb-61dd985dc35a",
            "creator_id": "b213f887-16cd-43d0-9e86-594b3e767303",
            "last_seen_at": "2019-10-28 08:11:18",
            "last_studied_at": "2019-10-28 08:11:18"
          },
          {
            "id": "7d944daa-c17e-4f82-a2fe-29a8d4813c46",
            "user_id": "b213f887-16cd-43d0-9e86-594b3e767303",
            "card_set_id": "ecca902d-0471-4c58-81ee-f175cb150778",
            "creator_id": "b213f887-16cd-43d0-9e86-594b3e767303",
            "last_seen_at": "2020-03-22 09:58:35",
            "last_studied_at": "2020-03-22 09:58:35"
          },
          {
            "id": "62664a12-f9dd-4df7-827f-bc4f3c0739f7",
            "user_id": "b213f887-16cd-43d0-9e86-594b3e767303",
            "card_set_id": "d4204a98-7e0a-40f6-b5db-e9f7d40acbf7",
            "creator_id": "b213f887-16cd-43d0-9e86-594b3e767303",
            "last_seen_at": "2019-10-08 15:42:33",
            "last_studied_at": "2019-10-08 15:42:33"
          },
          {
            "id": "6f01e996-385f-4a2d-a952-82db271e07bb",
            "user_id": "b213f887-16cd-43d0-9e86-594b3e767303",
            "card_set_id": "88dd1c98-d026-4fba-ac15-368f37388ff3",
            "creator_id": "b213f887-16cd-43d0-9e86-594b3e767303",
            "last_seen_at": "2019-10-09 17:13:14",
            "last_studied_at": "2019-10-09 17:13:14"
          },
          {
            "id": "0cf32566-45d3-47e2-b7cd-20497139ae11",
            "user_id": "b213f887-16cd-43d0-9e86-594b3e767303",
            "card_set_id": "8329f4bb-7d94-46ca-8339-daf393b5e7ec",
            "creator_id": "b213f887-16cd-43d0-9e86-594b3e767303",
            "last_seen_at": "2020-02-06 14:52:35",
            "last_studied_at": "2020-02-06 14:52:35"
          },
          {
            "id": "4274578d-31de-4f3e-b3b4-ceaebb5fe66a",
            "user_id": "b213f887-16cd-43d0-9e86-594b3e767303",
            "card_set_id": "421a8f00-cabc-4284-8666-f9bb386b7544",
            "creator_id": "b213f887-16cd-43d0-9e86-594b3e767303",
            "last_seen_at": "2020-01-13 04:45:25",
            "last_studied_at": "2020-01-13 04:45:25"
          },
          {
            "id": "b6283d6c-076b-4238-8a91-4b1baa338af5",
            "user_id": "b213f887-16cd-43d0-9e86-594b3e767303",
            "card_set_id": "d35759a9-2dd3-402c-b4c7-5f22c3719fbf",
            "creator_id": "b213f887-16cd-43d0-9e86-594b3e767303",
            "last_seen_at": "2020-04-17 07:32:13",
            "last_studied_at": "2020-04-17 07:32:13"
          },
          {
            "id": "6eccd027-7eed-4178-aaeb-72d16b44b7ba",
            "user_id": "b213f887-16cd-43d0-9e86-594b3e767303",
            "card_set_id": "f1f0bc8f-dee7-43aa-8678-97ebc33a4e52",
            "creator_id": "b213f887-16cd-43d0-9e86-594b3e767303",
            "last_seen_at": "2020-03-17 01:22:02",
            "last_studied_at": "2020-03-17 01:22:02"
          },
          {
            "id": "53596e2d-2f74-43d0-a1a5-d37289610615",
            "user_id": "b213f887-16cd-43d0-9e86-594b3e767303",
            "card_set_id": "c8b01809-7fc9-422f-9886-089abca76f54",
            "creator_id": "b213f887-16cd-43d0-9e86-594b3e767303",
            "last_seen_at": "2020-02-18 07:29:40",
            "last_studied_at": "2020-02-18 07:29:40"
          },
          {
            "id": "6523b046-05ff-4fdf-9060-222216e52a4c",
            "user_id": "569213d6-9733-4f45-b022-2eb8cd6e43de",
            "card_set_id": "654513a4-3419-4822-98bf-68796bc33194",
            "creator_id": "569213d6-9733-4f45-b022-2eb8cd6e43de",
            "last_seen_at": "2019-12-09 22:24:47",
            "last_studied_at": "2019-12-09 22:24:47"
          },
          {
            "id": "39031da1-8040-4a9f-8409-4268525e5cde",
            "user_id": "569213d6-9733-4f45-b022-2eb8cd6e43de",
            "card_set_id": "1fcca60e-691b-4c6f-bd4a-50a862bffad9",
            "creator_id": "569213d6-9733-4f45-b022-2eb8cd6e43de",
            "last_seen_at": "2019-11-03 22:58:29",
            "last_studied_at": "2019-11-03 22:58:29"
          },
          {
            "id": "a372644f-4b1c-4c7f-a326-7ac54d8dd038",
            "user_id": "569213d6-9733-4f45-b022-2eb8cd6e43de",
            "card_set_id": "dc25a964-b8a5-4c43-985e-c9122b496b53",
            "creator_id": "569213d6-9733-4f45-b022-2eb8cd6e43de",
            "last_seen_at": "2020-02-19 11:25:09",
            "last_studied_at": "2020-02-19 11:25:09"
          },
          {
            "id": "d94751cd-3ce8-4607-8909-8a17922db3f0",
            "user_id": "569213d6-9733-4f45-b022-2eb8cd6e43de",
            "card_set_id": "a2e350e7-63c2-4e10-9d08-ac84619b9b1f",
            "creator_id": "569213d6-9733-4f45-b022-2eb8cd6e43de",
            "last_seen_at": "2020-01-29 17:22:25",
            "last_studied_at": "2020-01-29 17:22:25"
          },
          {
            "id": "c1b18aba-90d7-4294-a189-ba6bb57ecda6",
            "user_id": "569213d6-9733-4f45-b022-2eb8cd6e43de",
            "card_set_id": "b6a3ff01-3a0a-460a-b437-cd9cb827fa8c",
            "creator_id": "569213d6-9733-4f45-b022-2eb8cd6e43de",
            "last_seen_at": "2019-12-05 00:09:24",
            "last_studied_at": "2019-12-05 00:09:24"
          },
          {
            "id": "a3ccdfa6-a3ed-4f87-a4b3-19303194d640",
            "user_id": "569213d6-9733-4f45-b022-2eb8cd6e43de",
            "card_set_id": "5703cd73-722d-4f93-aa81-003aa2a9115c",
            "creator_id": "569213d6-9733-4f45-b022-2eb8cd6e43de",
            "last_seen_at": "2020-04-07 05:41:16",
            "last_studied_at": "2020-04-07 05:41:16"
          },
          {
            "id": "d45a4f46-f741-4222-8b3f-7ab066b11737",
            "user_id": "569213d6-9733-4f45-b022-2eb8cd6e43de",
            "card_set_id": "9b3a6131-ea31-4996-bc84-9c35dcdac354",
            "creator_id": "569213d6-9733-4f45-b022-2eb8cd6e43de",
            "last_seen_at": "2020-02-28 22:01:38",
            "last_studied_at": "2020-02-28 22:01:38"
          },
          {
            "id": "9ab6b677-92df-4d57-8ecc-fe9b9839c76d",
            "user_id": "569213d6-9733-4f45-b022-2eb8cd6e43de",
            "card_set_id": "59492951-0fa4-44be-b3bb-95e5b2459f1b",
            "creator_id": "569213d6-9733-4f45-b022-2eb8cd6e43de",
            "last_seen_at": "2020-04-17 12:35:50",
            "last_studied_at": "2020-04-17 12:35:50"
          },
          {
            "id": "eb377eda-5916-46ea-bd8b-19a93938f365",
            "user_id": "569213d6-9733-4f45-b022-2eb8cd6e43de",
            "card_set_id": "76d0a42d-3742-477f-9e95-37d0d2441519",
            "creator_id": "569213d6-9733-4f45-b022-2eb8cd6e43de",
            "last_seen_at": "2019-11-09 12:52:10",
            "last_studied_at": "2019-11-09 12:52:10"
          },
          {
            "id": "31117ec2-8524-4b46-9da6-ca1d6c1349a9",
            "user_id": "569213d6-9733-4f45-b022-2eb8cd6e43de",
            "card_set_id": "5db57e0a-c16c-498f-84f0-6aca44397211",
            "creator_id": "569213d6-9733-4f45-b022-2eb8cd6e43de",
            "last_seen_at": "2019-12-16 02:01:18",
            "last_studied_at": "2019-12-16 02:01:18"
          },
          {
            "id": "a25e1d12-a5be-4ac0-98b6-db0a738fdae9",
            "user_id": "569213d6-9733-4f45-b022-2eb8cd6e43de",
            "card_set_id": "b5627a66-843d-4fdc-bbbc-410ee2f971c4",
            "creator_id": "569213d6-9733-4f45-b022-2eb8cd6e43de",
            "last_seen_at": "2019-11-06 23:53:51",
            "last_studied_at": "2019-11-06 23:53:51"
          },
          {
            "id": "26f74c47-83aa-4d0d-b3c7-93fe2ca6f494",
            "user_id": "569213d6-9733-4f45-b022-2eb8cd6e43de",
            "card_set_id": "218305af-5d33-4665-bd23-914d5d486391",
            "creator_id": "569213d6-9733-4f45-b022-2eb8cd6e43de",
            "last_seen_at": "2020-01-02 14:06:10",
            "last_studied_at": "2020-01-02 14:06:10"
          },
          {
            "id": "d6aac961-5f72-4edc-b985-f78725da105e",
            "user_id": "67bcc96c-58f5-4e3d-a80b-d01f01c444b1",
            "card_set_id": "eb8fa86d-adb5-4203-ae4e-7a926a8bf87c",
            "creator_id": "67bcc96c-58f5-4e3d-a80b-d01f01c444b1",
            "last_seen_at": "2020-02-09 15:19:30",
            "last_studied_at": "2020-02-09 15:19:30"
          },
          {
            "id": "280cccbc-5aa7-4717-9c62-0d79a87f1a38",
            "user_id": "67bcc96c-58f5-4e3d-a80b-d01f01c444b1",
            "card_set_id": "e1231edf-77b6-42f0-abe1-9cba66bd6e35",
            "creator_id": "67bcc96c-58f5-4e3d-a80b-d01f01c444b1",
            "last_seen_at": "2019-12-16 06:59:42",
            "last_studied_at": "2019-12-16 06:59:42"
          },
          {
            "id": "0b66df41-23ac-43ae-8569-dccc259350d5",
            "user_id": "67bcc96c-58f5-4e3d-a80b-d01f01c444b1",
            "card_set_id": "e870b1bd-526c-4109-b34b-e61f3a79d379",
            "creator_id": "67bcc96c-58f5-4e3d-a80b-d01f01c444b1",
            "last_seen_at": "2020-01-30 04:21:16",
            "last_studied_at": "2020-01-30 04:21:16"
          },
          {
            "id": "9756b748-64c8-42af-be8a-895a3ea9ab1d",
            "user_id": "67bcc96c-58f5-4e3d-a80b-d01f01c444b1",
            "card_set_id": "bf65d501-a786-44c8-bfee-b1112ce4929f",
            "creator_id": "67bcc96c-58f5-4e3d-a80b-d01f01c444b1",
            "last_seen_at": "2019-10-11 10:44:26",
            "last_studied_at": "2019-10-11 10:44:26"
          },
          {
            "id": "7aea479a-3197-43ff-8245-69ae132738e5",
            "user_id": "67bcc96c-58f5-4e3d-a80b-d01f01c444b1",
            "card_set_id": "9b3baf53-b278-4915-a8cf-35754e0dc1b2",
            "creator_id": "67bcc96c-58f5-4e3d-a80b-d01f01c444b1",
            "last_seen_at": "2020-02-01 23:29:06",
            "last_studied_at": "2020-02-01 23:29:06"
          },
          {
            "id": "95daa837-5451-44cc-8efe-01205eb34675",
            "user_id": "67bcc96c-58f5-4e3d-a80b-d01f01c444b1",
            "card_set_id": "be62d03e-9ef3-4cfd-990f-b4220e82e8cc",
            "creator_id": "67bcc96c-58f5-4e3d-a80b-d01f01c444b1",
            "last_seen_at": "2020-02-17 06:15:49",
            "last_studied_at": "2020-02-17 06:15:49"
          },
          {
            "id": "45febe8c-2aea-4ea4-a8bd-01b9feed4d5d",
            "user_id": "67bcc96c-58f5-4e3d-a80b-d01f01c444b1",
            "card_set_id": "610b0cd0-daee-4fbf-9c01-45f1ab15fb83",
            "creator_id": "67bcc96c-58f5-4e3d-a80b-d01f01c444b1",
            "last_seen_at": "2020-01-27 21:07:49",
            "last_studied_at": "2020-01-27 21:07:49"
          },
          {
            "id": "183a1f04-3f91-4b36-a0cb-1184ce9dde8a",
            "user_id": "67bcc96c-58f5-4e3d-a80b-d01f01c444b1",
            "card_set_id": "030d3ce4-0ea3-4205-8bd8-f250786c6cb7",
            "creator_id": "67bcc96c-58f5-4e3d-a80b-d01f01c444b1",
            "last_seen_at": "2019-11-05 23:21:32",
            "last_studied_at": "2019-11-05 23:21:32"
          },
          {
            "id": "b4edde8e-e6e0-4963-8a45-df7e96a07ebf",
            "user_id": "67bcc96c-58f5-4e3d-a80b-d01f01c444b1",
            "card_set_id": "0216c8c8-77b9-4e43-9189-cdd8d187a831",
            "creator_id": "67bcc96c-58f5-4e3d-a80b-d01f01c444b1",
            "last_seen_at": "2020-03-14 05:24:51",
            "last_studied_at": "2020-03-14 05:24:51"
          },
          {
            "id": "208745c3-bd32-4c35-ac2a-4c354f7db615",
            "user_id": "cb03a806-3769-4121-b07a-6e397cf01bc0",
            "card_set_id": "b6478aa3-393c-457c-83bc-5e1595bb9c0b",
            "creator_id": "cb03a806-3769-4121-b07a-6e397cf01bc0",
            "last_seen_at": "2019-11-15 04:33:49",
            "last_studied_at": "2019-11-15 04:33:49"
          },
          {
            "id": "c8538caf-c287-46c5-8c30-bf36df914df2",
            "user_id": "cb03a806-3769-4121-b07a-6e397cf01bc0",
            "card_set_id": "b5ff6cb3-9a70-469a-bafa-b6a9a9884742",
            "creator_id": "cb03a806-3769-4121-b07a-6e397cf01bc0",
            "last_seen_at": "2020-02-04 07:22:08",
            "last_studied_at": "2020-02-04 07:22:08"
          },
          {
            "id": "6488ff66-3fd2-4381-8e5e-8f7e10198281",
            "user_id": "cb03a806-3769-4121-b07a-6e397cf01bc0",
            "card_set_id": "f4ef63c7-337d-4f30-80ac-9e4b0965668e",
            "creator_id": "cb03a806-3769-4121-b07a-6e397cf01bc0",
            "last_seen_at": "2020-03-29 11:26:32",
            "last_studied_at": "2020-03-29 11:26:32"
          },
          {
            "id": "647fb2da-d50d-4d84-b64d-4df37b3f91e1",
            "user_id": "cb03a806-3769-4121-b07a-6e397cf01bc0",
            "card_set_id": "bcdc3d9a-6aeb-4c00-a135-a8886814a8b3",
            "creator_id": "cb03a806-3769-4121-b07a-6e397cf01bc0",
            "last_seen_at": "2019-11-05 12:32:32",
            "last_studied_at": "2019-11-05 12:32:32"
          },
          {
            "id": "7def1d58-cf35-478d-bb6e-43f853ed5ac4",
            "user_id": "cb03a806-3769-4121-b07a-6e397cf01bc0",
            "card_set_id": "086586a7-049d-4c44-a105-4dfac7ce0c6b",
            "creator_id": "cb03a806-3769-4121-b07a-6e397cf01bc0",
            "last_seen_at": "2020-04-05 15:21:52",
            "last_studied_at": "2020-04-05 15:21:52"
          },
          {
            "id": "364b77e8-dfcf-484e-ba36-eaf88de1def8",
            "user_id": "cb03a806-3769-4121-b07a-6e397cf01bc0",
            "card_set_id": "cb859e60-8543-4ce3-afad-0e4b266ff991",
            "creator_id": "cb03a806-3769-4121-b07a-6e397cf01bc0",
            "last_seen_at": "2020-04-02 01:17:12",
            "last_studied_at": "2020-04-02 01:17:12"
          },
          {
            "id": "e0586d39-9cf9-4d74-834f-98b2f619d149",
            "user_id": "cb03a806-3769-4121-b07a-6e397cf01bc0",
            "card_set_id": "b25cd61c-d92f-43ec-ac56-12c2b2e68d1d",
            "creator_id": "cb03a806-3769-4121-b07a-6e397cf01bc0",
            "last_seen_at": "2019-11-30 01:20:36",
            "last_studied_at": "2019-11-30 01:20:36"
          },
          {
            "id": "6597c2a1-3236-42f8-ac49-63e76180f379",
            "user_id": "cb03a806-3769-4121-b07a-6e397cf01bc0",
            "card_set_id": "01c68341-9437-4923-9d3f-b34958fb5ec6",
            "creator_id": "cb03a806-3769-4121-b07a-6e397cf01bc0",
            "last_seen_at": "2019-12-23 10:59:25",
            "last_studied_at": "2019-12-23 10:59:25"
          },
          {
            "id": "9679b5d1-3a67-4905-b093-3bd25a681bef",
            "user_id": "cb03a806-3769-4121-b07a-6e397cf01bc0",
            "card_set_id": "b8d217ef-fe60-4779-95a9-db9d30ff571d",
            "creator_id": "cb03a806-3769-4121-b07a-6e397cf01bc0",
            "last_seen_at": "2019-12-24 18:49:57",
            "last_studied_at": "2019-12-24 18:49:57"
          },
          {
            "id": "5c13b1a4-abb5-4fb9-8b5a-3ee8023cc531",
            "user_id": "cb03a806-3769-4121-b07a-6e397cf01bc0",
            "card_set_id": "91770895-021e-4e74-9794-6f31cc943c71",
            "creator_id": "cb03a806-3769-4121-b07a-6e397cf01bc0",
            "last_seen_at": "2019-12-05 11:28:46",
            "last_studied_at": "2019-12-05 11:28:46"
          },
          {
            "id": "ad97e3bc-29d3-4825-abfa-643bc13db845",
            "user_id": "cb03a806-3769-4121-b07a-6e397cf01bc0",
            "card_set_id": "91d553b2-f085-492c-b854-aa02916d1cde",
            "creator_id": "cb03a806-3769-4121-b07a-6e397cf01bc0",
            "last_seen_at": "2020-02-09 12:33:31",
            "last_studied_at": "2020-02-09 12:33:31"
          },
          {
            "id": "d4906ddb-aeed-4933-a0e4-d321d12ef045",
            "user_id": "cb03a806-3769-4121-b07a-6e397cf01bc0",
            "card_set_id": "9430b7ea-22ef-4ef8-afba-796a01bd0088",
            "creator_id": "cb03a806-3769-4121-b07a-6e397cf01bc0",
            "last_seen_at": "2020-03-14 12:35:53",
            "last_studied_at": "2020-03-14 12:35:53"
          },
          {
            "id": "5cf1c663-840a-4faf-977f-727bcb1960cf",
            "user_id": "cb03a806-3769-4121-b07a-6e397cf01bc0",
            "card_set_id": "4257a889-c33c-488f-85db-d2034975c10c",
            "creator_id": "cb03a806-3769-4121-b07a-6e397cf01bc0",
            "last_seen_at": "2019-11-27 15:13:59",
            "last_studied_at": "2019-11-27 15:13:59"
          },
          {
            "id": "51118878-e1b4-4b27-a190-9aa51a62248d",
            "user_id": "cb03a806-3769-4121-b07a-6e397cf01bc0",
            "card_set_id": "b2a7843e-da16-4898-881e-e0b74c2851d2",
            "creator_id": "cb03a806-3769-4121-b07a-6e397cf01bc0",
            "last_seen_at": "2019-10-22 13:40:50",
            "last_studied_at": "2019-10-22 13:40:50"
          },
          {
            "id": "3eb3a0f6-9bb0-4dfc-9355-8d5e37e5c1a0",
            "user_id": "cb03a806-3769-4121-b07a-6e397cf01bc0",
            "card_set_id": "a2746daa-52da-47c3-a3c2-0c39f04a49e0",
            "creator_id": "cb03a806-3769-4121-b07a-6e397cf01bc0",
            "last_seen_at": "2020-01-10 11:01:32",
            "last_studied_at": "2020-01-10 11:01:32"
          },
          {
            "id": "dca32e90-46af-4c9e-b76a-849080e338f0",
            "user_id": "cb03a806-3769-4121-b07a-6e397cf01bc0",
            "card_set_id": "1e96d62a-1ff9-4f47-9001-1fe4fc388873",
            "creator_id": "cb03a806-3769-4121-b07a-6e397cf01bc0",
            "last_seen_at": "2020-02-03 12:03:08",
            "last_studied_at": "2020-02-03 12:03:08"
          },
          {
            "id": "02000cc7-e847-4f02-abfe-689390424e68",
            "user_id": "cb03a806-3769-4121-b07a-6e397cf01bc0",
            "card_set_id": "6c1f5173-bd77-47b3-93db-19c9330870d2",
            "creator_id": "cb03a806-3769-4121-b07a-6e397cf01bc0",
            "last_seen_at": "2020-03-03 14:38:41",
            "last_studied_at": "2020-03-03 14:38:41"
          },
          {
            "id": "2e1da93c-8520-415c-998e-6454c2163783",
            "user_id": "cb03a806-3769-4121-b07a-6e397cf01bc0",
            "card_set_id": "aca89e34-2ab8-4087-90db-9e313e4ec7d1",
            "creator_id": "cb03a806-3769-4121-b07a-6e397cf01bc0",
            "last_seen_at": "2019-11-27 08:11:06",
            "last_studied_at": "2019-11-27 08:11:06"
          },
          {
            "id": "8fd2f367-867f-445e-8536-b3cec03c12cd",
            "user_id": "cb03a806-3769-4121-b07a-6e397cf01bc0",
            "card_set_id": "c7fd9990-ad70-4d19-abbd-d348003ef8f0",
            "creator_id": "cb03a806-3769-4121-b07a-6e397cf01bc0",
            "last_seen_at": "2020-02-07 13:32:51",
            "last_studied_at": "2020-02-07 13:32:51"
          },
          {
            "id": "99ba7f05-22a3-4605-92d7-0b5804e2e8e5",
            "user_id": "cb03a806-3769-4121-b07a-6e397cf01bc0",
            "card_set_id": "5fb8e47c-30e2-4186-92e7-fb657f2d8400",
            "creator_id": "cb03a806-3769-4121-b07a-6e397cf01bc0",
            "last_seen_at": "2020-03-06 03:20:11",
            "last_studied_at": "2020-03-06 03:20:11"
          },
          {
            "id": "c301fd86-2a10-4856-a6aa-73267c58b56a",
            "user_id": "cb03a806-3769-4121-b07a-6e397cf01bc0",
            "card_set_id": "2bd4a492-eea4-4e70-92d0-57b06a734736",
            "creator_id": "cb03a806-3769-4121-b07a-6e397cf01bc0",
            "last_seen_at": "2019-10-11 09:14:39",
            "last_studied_at": "2019-10-11 09:14:39"
          },
          {
            "id": "46718b09-ef9f-4841-ab7a-272435ba0c6f",
            "user_id": "cb03a806-3769-4121-b07a-6e397cf01bc0",
            "card_set_id": "ef1cdc97-af54-49d0-86e9-8464725b4f4d",
            "creator_id": "cb03a806-3769-4121-b07a-6e397cf01bc0",
            "last_seen_at": "2019-10-15 11:27:57",
            "last_studied_at": "2019-10-15 11:27:57"
          },
          {
            "id": "4405af1d-9342-49c6-9a3c-e1d86d6f97b3",
            "user_id": "cb03a806-3769-4121-b07a-6e397cf01bc0",
            "card_set_id": "d3b44c6b-0c42-4bf4-b9d7-6005206856c6",
            "creator_id": "cb03a806-3769-4121-b07a-6e397cf01bc0",
            "last_seen_at": "2020-02-08 12:30:25",
            "last_studied_at": "2020-02-08 12:30:25"
          },
          {
            "id": "8608114c-a31a-45bb-9300-9003c053ac6e",
            "user_id": "cb03a806-3769-4121-b07a-6e397cf01bc0",
            "card_set_id": "a142674c-fce4-4b6a-bfb6-4d99ce9bbb61",
            "creator_id": "cb03a806-3769-4121-b07a-6e397cf01bc0",
            "last_seen_at": "2020-02-28 10:36:13",
            "last_studied_at": "2020-02-28 10:36:13"
          },
          {
            "id": "3758dfc4-c558-414f-a002-8d3e5cc6425d",
            "user_id": "cb03a806-3769-4121-b07a-6e397cf01bc0",
            "card_set_id": "e6cd384f-d306-46f5-967c-9f98165e99a6",
            "creator_id": "cb03a806-3769-4121-b07a-6e397cf01bc0",
            "last_seen_at": "2020-02-18 11:57:54",
            "last_studied_at": "2020-02-18 11:57:54"
          },
          {
            "id": "aeb1a8cd-fc2d-407f-9028-c534be9090ca",
            "user_id": "cb03a806-3769-4121-b07a-6e397cf01bc0",
            "card_set_id": "6e58b1d0-1187-45d9-bc77-b205e2ff392d",
            "creator_id": "cb03a806-3769-4121-b07a-6e397cf01bc0",
            "last_seen_at": "2020-01-10 06:21:42",
            "last_studied_at": "2020-01-10 06:21:42"
          },
          {
            "id": "900182b0-e865-4cb7-963f-41b81d7d97ef",
            "user_id": "cb03a806-3769-4121-b07a-6e397cf01bc0",
            "card_set_id": "d04de6bb-a7cf-454a-819b-57b810a85a1e",
            "creator_id": "cb03a806-3769-4121-b07a-6e397cf01bc0",
            "last_seen_at": "2020-03-29 10:00:08",
            "last_studied_at": "2020-03-29 10:00:08"
          },
          {
            "id": "43fc770f-e0e8-433e-9c81-63486cd87024",
            "user_id": "cb03a806-3769-4121-b07a-6e397cf01bc0",
            "card_set_id": "3d91ff2c-fcda-40b4-9d1a-e26f9b4568da",
            "creator_id": "cb03a806-3769-4121-b07a-6e397cf01bc0",
            "last_seen_at": "2019-12-31 23:36:02",
            "last_studied_at": "2019-12-31 23:36:02"
          },
          {
            "id": "f7fe3d6d-97e9-4ac1-ba14-27bea040fdaf",
            "user_id": "cb03a806-3769-4121-b07a-6e397cf01bc0",
            "card_set_id": "8042c279-3d35-4393-94e8-d9a0066d5500",
            "creator_id": "cb03a806-3769-4121-b07a-6e397cf01bc0",
            "last_seen_at": "2019-12-08 12:27:07",
            "last_studied_at": "2019-12-08 12:27:07"
          },
          {
            "id": "aa39ecac-ee84-441d-8b8b-4a6d444e7859",
            "user_id": "cb03a806-3769-4121-b07a-6e397cf01bc0",
            "card_set_id": "e581769f-388c-45dc-807e-9441d2252a3c",
            "creator_id": "cb03a806-3769-4121-b07a-6e397cf01bc0",
            "last_seen_at": "2020-04-19 09:06:49",
            "last_studied_at": "2020-04-19 09:06:49"
          },
          {
            "id": "85aa12f5-6d4f-4ed8-b00d-6fef155b0cdd",
            "user_id": "cb03a806-3769-4121-b07a-6e397cf01bc0",
            "card_set_id": "47405ecf-828c-414d-a8f6-537a7b858b2c",
            "creator_id": "cb03a806-3769-4121-b07a-6e397cf01bc0",
            "last_seen_at": "2019-12-06 02:28:58",
            "last_studied_at": "2019-12-06 02:28:58"
          },
          {
            "id": "f5024d6e-146a-4d32-8862-16dac3ad8d7e",
            "user_id": "cb03a806-3769-4121-b07a-6e397cf01bc0",
            "card_set_id": "861d008f-2bd9-4c75-b580-31252417f9ff",
            "creator_id": "cb03a806-3769-4121-b07a-6e397cf01bc0",
            "last_seen_at": "2020-04-12 13:30:00",
            "last_studied_at": "2020-04-12 13:30:00"
          },
          {
            "id": "c14cb91c-a689-4ab2-8671-57962d3601ff",
            "user_id": "cb03a806-3769-4121-b07a-6e397cf01bc0",
            "card_set_id": "ba034f20-1515-4e90-a850-f76b1cbb5c42",
            "creator_id": "cb03a806-3769-4121-b07a-6e397cf01bc0",
            "last_seen_at": "2020-02-05 09:02:56",
            "last_studied_at": "2020-02-05 09:02:56"
          },
          {
            "id": "d0fef4d5-1aba-47e8-9353-e4ec97cecaf0",
            "user_id": "cb03a806-3769-4121-b07a-6e397cf01bc0",
            "card_set_id": "f53ccfea-f7f7-4d43-8a7f-a37e34c54748",
            "creator_id": "cb03a806-3769-4121-b07a-6e397cf01bc0",
            "last_seen_at": "2020-01-23 02:34:58",
            "last_studied_at": "2020-01-23 02:34:58"
          },
          {
            "id": "53ecae1e-d051-4426-a676-3806fc0d10e3",
            "user_id": "cb03a806-3769-4121-b07a-6e397cf01bc0",
            "card_set_id": "ae66e225-f90f-49c8-99db-846b07768418",
            "creator_id": "cb03a806-3769-4121-b07a-6e397cf01bc0",
            "last_seen_at": "2020-03-05 14:14:11",
            "last_studied_at": "2020-03-05 14:14:11"
          },
          {
            "id": "e4265766-1cc6-4004-b75f-fde9c77f784a",
            "user_id": "cb03a806-3769-4121-b07a-6e397cf01bc0",
            "card_set_id": "d0799b05-1c2c-48a0-b722-42cf53a7751d",
            "creator_id": "cb03a806-3769-4121-b07a-6e397cf01bc0",
            "last_seen_at": "2019-11-08 09:58:11",
            "last_studied_at": "2019-11-08 09:58:11"
          },
          {
            "id": "bb5f37cb-2a16-4566-b0d7-3d6e2bb3b984",
            "user_id": "cb03a806-3769-4121-b07a-6e397cf01bc0",
            "card_set_id": "fb003cfc-d193-47d0-8d50-a904579f0dae",
            "creator_id": "cb03a806-3769-4121-b07a-6e397cf01bc0",
            "last_seen_at": "2020-02-15 01:36:55",
            "last_studied_at": "2020-02-15 01:36:55"
          },
          {
            "id": "dd376f5a-77bb-48b1-9a77-99d3c51bfecf",
            "user_id": "cb03a806-3769-4121-b07a-6e397cf01bc0",
            "card_set_id": "55abc9e2-59b1-4cae-a3c2-5c823b754ba3",
            "creator_id": "cb03a806-3769-4121-b07a-6e397cf01bc0",
            "last_seen_at": "2020-03-25 07:12:01",
            "last_studied_at": "2020-03-25 07:12:01"
          },
          {
            "id": "309dc0f7-52dd-4e29-a912-da0b2a4b1225",
            "user_id": "cb03a806-3769-4121-b07a-6e397cf01bc0",
            "card_set_id": "884f24fb-fcf6-458e-947d-dbdf2d2a5e92",
            "creator_id": "cb03a806-3769-4121-b07a-6e397cf01bc0",
            "last_seen_at": "2020-02-27 16:15:00",
            "last_studied_at": "2020-02-27 16:15:00"
          },
          {
            "id": "da0c1efa-c1c8-4320-8d5a-1b640ce5fc72",
            "user_id": "cb03a806-3769-4121-b07a-6e397cf01bc0",
            "card_set_id": "73e983f4-0733-43c5-b4fa-a922e0799d2a",
            "creator_id": "cb03a806-3769-4121-b07a-6e397cf01bc0",
            "last_seen_at": "2020-04-09 10:49:06",
            "last_studied_at": "2020-04-09 10:49:06"
          },
          {
            "id": "1209a58f-c9c2-494e-8610-dbdc8ead6c69",
            "user_id": "cb03a806-3769-4121-b07a-6e397cf01bc0",
            "card_set_id": "c39735ee-b44f-4bdc-96e8-6f3cb850afca",
            "creator_id": "cb03a806-3769-4121-b07a-6e397cf01bc0",
            "last_seen_at": "2019-12-09 13:31:38",
            "last_studied_at": "2019-12-09 13:31:38"
          },
          {
            "id": "bf00c9b4-e73a-427f-aa1e-0fd146c99d17",
            "user_id": "cb03a806-3769-4121-b07a-6e397cf01bc0",
            "card_set_id": "ee48ca45-4333-4093-9f81-4254d4414c9b",
            "creator_id": "cb03a806-3769-4121-b07a-6e397cf01bc0",
            "last_seen_at": "2020-01-09 07:17:48",
            "last_studied_at": "2020-01-09 07:17:48"
          },
          {
            "id": "56cc5853-fe46-4688-9a07-b35c877a4daf",
            "user_id": "cb03a806-3769-4121-b07a-6e397cf01bc0",
            "card_set_id": "268ac096-ba7d-4494-8841-d719711ba5ed",
            "creator_id": "cb03a806-3769-4121-b07a-6e397cf01bc0",
            "last_seen_at": "2020-04-18 15:54:20",
            "last_studied_at": "2020-04-18 15:54:20"
          },
          {
            "id": "0efbfc98-5a25-4689-a9aa-7d7a67592603",
            "user_id": "cb03a806-3769-4121-b07a-6e397cf01bc0",
            "card_set_id": "caa86333-0a86-46b6-a7a0-b282ae4099be",
            "creator_id": "cb03a806-3769-4121-b07a-6e397cf01bc0",
            "last_seen_at": "2020-03-04 05:31:43",
            "last_studied_at": "2020-03-04 05:31:43"
          },
          {
            "id": "abee94eb-0d81-49a7-8b97-979de6e6a713",
            "user_id": "cb03a806-3769-4121-b07a-6e397cf01bc0",
            "card_set_id": "3f343728-d778-44f6-b58d-7f8f625f61e9",
            "creator_id": "cb03a806-3769-4121-b07a-6e397cf01bc0",
            "last_seen_at": "2019-12-30 01:34:30",
            "last_studied_at": "2019-12-30 01:34:30"
          },
          {
            "id": "78a97aa1-1cfb-47f8-af26-5c3a9337fd9e",
            "user_id": "cb03a806-3769-4121-b07a-6e397cf01bc0",
            "card_set_id": "c5e50529-a23a-482e-91b7-3eef95498ed2",
            "creator_id": "cb03a806-3769-4121-b07a-6e397cf01bc0",
            "last_seen_at": "2020-01-07 07:15:13",
            "last_studied_at": "2020-01-07 07:15:13"
          },
          {
            "id": "6595b1cc-4944-45c8-bff4-cd3651626997",
            "user_id": "cb03a806-3769-4121-b07a-6e397cf01bc0",
            "card_set_id": "e58d979b-4522-420b-9df2-8fda3484dfa4",
            "creator_id": "cb03a806-3769-4121-b07a-6e397cf01bc0",
            "last_seen_at": "2020-02-28 01:23:18",
            "last_studied_at": "2020-02-28 01:23:18"
          },
          {
            "id": "17e1af20-4137-4142-ba32-d6280486455e",
            "user_id": "cb03a806-3769-4121-b07a-6e397cf01bc0",
            "card_set_id": "1237b518-cfdc-481a-90ba-b165b48a6c46",
            "creator_id": "cb03a806-3769-4121-b07a-6e397cf01bc0",
            "last_seen_at": "2019-11-23 15:55:07",
            "last_studied_at": "2019-11-23 15:55:07"
          },
          {
            "id": "0669c724-7dc5-4607-9d5d-0aa313711fe3",
            "user_id": "cb03a806-3769-4121-b07a-6e397cf01bc0",
            "card_set_id": "37268864-d478-4b0e-b1f6-f6319333758a",
            "creator_id": "cb03a806-3769-4121-b07a-6e397cf01bc0",
            "last_seen_at": "2020-02-08 14:54:20",
            "last_studied_at": "2020-02-08 14:54:20"
          },
          {
            "id": "ea5b07f9-c41f-46b2-9309-64738693ad08",
            "user_id": "cb03a806-3769-4121-b07a-6e397cf01bc0",
            "card_set_id": "dfe8196f-080e-4d0b-8458-ac6929095244",
            "creator_id": "cb03a806-3769-4121-b07a-6e397cf01bc0",
            "last_seen_at": "2020-01-27 03:41:38",
            "last_studied_at": "2020-01-27 03:41:38"
          },
          {
            "id": "45cb7f72-508f-4fb8-b0fc-47b982d48ecf",
            "user_id": "cb03a806-3769-4121-b07a-6e397cf01bc0",
            "card_set_id": "987bb38e-2089-4863-b3e5-91e45d70820a",
            "creator_id": "cb03a806-3769-4121-b07a-6e397cf01bc0",
            "last_seen_at": "2020-01-08 21:11:34",
            "last_studied_at": "2020-01-08 21:11:34"
          },
          {
            "id": "a96b68e8-7da8-4092-828a-f2d891fc7982",
            "user_id": "fca79fd1-8a5f-4135-b9ad-04387a89ecd2",
            "card_set_id": "750d604d-ac77-454f-a033-5d19e53c9a50",
            "creator_id": "fca79fd1-8a5f-4135-b9ad-04387a89ecd2",
            "last_seen_at": "2020-02-19 07:47:11",
            "last_studied_at": "2020-02-19 07:47:11"
          },
          {
            "id": "4e934f58-9d75-4309-9c0e-52b0bd556d6e",
            "user_id": "fca79fd1-8a5f-4135-b9ad-04387a89ecd2",
            "card_set_id": "a6ed9d65-55b5-479e-9c06-1de9621f4ceb",
            "creator_id": "fca79fd1-8a5f-4135-b9ad-04387a89ecd2",
            "last_seen_at": "2019-11-05 02:33:47",
            "last_studied_at": "2019-11-05 02:33:47"
          },
          {
            "id": "a5cf7aea-c1f4-4f41-a18d-70b4a2859c33",
            "user_id": "fca79fd1-8a5f-4135-b9ad-04387a89ecd2",
            "card_set_id": "03f41e6c-2283-4e41-830c-2e77045dfdcf",
            "creator_id": "fca79fd1-8a5f-4135-b9ad-04387a89ecd2",
            "last_seen_at": "2020-04-20 06:41:19",
            "last_studied_at": "2020-04-20 06:41:19"
          },
          {
            "id": "24c5b240-eb85-4495-bf0d-a31cc605c86b",
            "user_id": "fca79fd1-8a5f-4135-b9ad-04387a89ecd2",
            "card_set_id": "ca60031f-b12e-46f5-bac0-c745b72883b3",
            "creator_id": "fca79fd1-8a5f-4135-b9ad-04387a89ecd2",
            "last_seen_at": "2020-01-24 01:22:15",
            "last_studied_at": "2020-01-24 01:22:15"
          },
          {
            "id": "84344e1c-a634-4f79-967a-c083b6f4d056",
            "user_id": "fca79fd1-8a5f-4135-b9ad-04387a89ecd2",
            "card_set_id": "1ef4b34b-38d6-4162-8975-c337234f1050",
            "creator_id": "fca79fd1-8a5f-4135-b9ad-04387a89ecd2",
            "last_seen_at": "2020-04-08 19:05:04",
            "last_studied_at": "2020-04-08 19:05:04"
          },
          {
            "id": "ddda98ad-6db4-4452-b984-3a00c91b543a",
            "user_id": "fca79fd1-8a5f-4135-b9ad-04387a89ecd2",
            "card_set_id": "4855970e-b0e9-44a2-a161-64a03fd86e3c",
            "creator_id": "fca79fd1-8a5f-4135-b9ad-04387a89ecd2",
            "last_seen_at": "2020-02-07 06:46:12",
            "last_studied_at": "2020-02-07 06:46:12"
          },
          {
            "id": "d0e4738a-4a14-4714-b547-f54f4e9a4f7c",
            "user_id": "fca79fd1-8a5f-4135-b9ad-04387a89ecd2",
            "card_set_id": "8eaccf61-691c-40e5-af15-ac6df3147f1b",
            "creator_id": "fca79fd1-8a5f-4135-b9ad-04387a89ecd2",
            "last_seen_at": "2019-12-11 01:53:23",
            "last_studied_at": "2019-12-11 01:53:23"
          },
          {
            "id": "52031b42-6b9f-47b9-8773-e8d21f0c4738",
            "user_id": "fca79fd1-8a5f-4135-b9ad-04387a89ecd2",
            "card_set_id": "09029113-e284-467b-aa1f-608346fcb21e",
            "creator_id": "fca79fd1-8a5f-4135-b9ad-04387a89ecd2",
            "last_seen_at": "2020-02-24 12:15:36",
            "last_studied_at": "2020-02-24 12:15:36"
          },
          {
            "id": "95ec5bf5-1cdf-4b27-b671-6963de40241e",
            "user_id": "fca79fd1-8a5f-4135-b9ad-04387a89ecd2",
            "card_set_id": "a934aff0-001d-4421-a5b0-b3f41a55c548",
            "creator_id": "fca79fd1-8a5f-4135-b9ad-04387a89ecd2",
            "last_seen_at": "2020-02-07 20:22:42",
            "last_studied_at": "2020-02-07 20:22:42"
          },
          {
            "id": "f9d7db06-d255-4eaf-8b8d-8d524d93626f",
            "user_id": "fca79fd1-8a5f-4135-b9ad-04387a89ecd2",
            "card_set_id": "755ea564-99b1-4649-a6f3-53620688d865",
            "creator_id": "fca79fd1-8a5f-4135-b9ad-04387a89ecd2",
            "last_seen_at": "2020-02-29 17:33:53",
            "last_studied_at": "2020-02-29 17:33:53"
          },
          {
            "id": "cbacf207-d894-4eb0-b025-d67bb05d6f9b",
            "user_id": "fca79fd1-8a5f-4135-b9ad-04387a89ecd2",
            "card_set_id": "461a2d01-3984-44b1-aeef-3eb96f5bc986",
            "creator_id": "fca79fd1-8a5f-4135-b9ad-04387a89ecd2",
            "last_seen_at": "2020-04-16 08:16:36",
            "last_studied_at": "2020-04-16 08:16:36"
          },
          {
            "id": "c3ee6e0e-2aba-4b8a-9b90-3169ed0a31c7",
            "user_id": "fca79fd1-8a5f-4135-b9ad-04387a89ecd2",
            "card_set_id": "8d3d68a8-e24e-43f3-9a39-02b1f0d26885",
            "creator_id": "fca79fd1-8a5f-4135-b9ad-04387a89ecd2",
            "last_seen_at": "2020-03-20 19:18:16",
            "last_studied_at": "2020-03-20 19:18:16"
          },
          {
            "id": "5e491d5b-8188-4b89-badc-3e52cd390d86",
            "user_id": "fca79fd1-8a5f-4135-b9ad-04387a89ecd2",
            "card_set_id": "ad6b9676-396d-4b55-8d79-d8ceef613a40",
            "creator_id": "fca79fd1-8a5f-4135-b9ad-04387a89ecd2",
            "last_seen_at": "2020-03-13 13:46:59",
            "last_studied_at": "2020-03-13 13:46:59"
          },
          {
            "id": "4fa35ad3-551d-4b85-8673-5e40fa027baf",
            "user_id": "fca79fd1-8a5f-4135-b9ad-04387a89ecd2",
            "card_set_id": "7f625e16-6886-4ec5-85fc-f13c8e8e0d2b",
            "creator_id": "fca79fd1-8a5f-4135-b9ad-04387a89ecd2",
            "last_seen_at": "2019-12-06 03:01:40",
            "last_studied_at": "2019-12-06 03:01:40"
          },
          {
            "id": "985e4c84-9af4-43fa-a5cc-4f989f38c728",
            "user_id": "fca79fd1-8a5f-4135-b9ad-04387a89ecd2",
            "card_set_id": "ec9fae17-9e42-452d-aafb-93620307a51a",
            "creator_id": "fca79fd1-8a5f-4135-b9ad-04387a89ecd2",
            "last_seen_at": "2019-12-21 20:11:11",
            "last_studied_at": "2019-12-21 20:11:11"
          },
          {
            "id": "d92fefdc-f36a-489a-a8f7-b3b7dfd40c23",
            "user_id": "fca79fd1-8a5f-4135-b9ad-04387a89ecd2",
            "card_set_id": "6de9d5d0-678d-490c-ad32-e05858aae979",
            "creator_id": "fca79fd1-8a5f-4135-b9ad-04387a89ecd2",
            "last_seen_at": "2019-11-23 07:42:08",
            "last_studied_at": "2019-11-23 07:42:08"
          },
          {
            "id": "974a519b-b964-45fe-a731-1d8c94b8a8a1",
            "user_id": "fca79fd1-8a5f-4135-b9ad-04387a89ecd2",
            "card_set_id": "6a24c25f-71b1-4092-ab3e-f7340b959644",
            "creator_id": "fca79fd1-8a5f-4135-b9ad-04387a89ecd2",
            "last_seen_at": "2020-04-14 12:26:27",
            "last_studied_at": "2020-04-14 12:26:27"
          },
          {
            "id": "ba0fdf47-68f2-4bc3-ac50-c61c17ebc7cc",
            "user_id": "fca79fd1-8a5f-4135-b9ad-04387a89ecd2",
            "card_set_id": "ba8922e7-5ea2-4702-96d9-8488265eba65",
            "creator_id": "fca79fd1-8a5f-4135-b9ad-04387a89ecd2",
            "last_seen_at": "2019-12-30 07:14:35",
            "last_studied_at": "2019-12-30 07:14:35"
          },
          {
            "id": "a484213b-9621-40b8-ac70-e0270b746873",
            "user_id": "fca79fd1-8a5f-4135-b9ad-04387a89ecd2",
            "card_set_id": "ad390bf8-bcde-44ee-baeb-9ed71757196d",
            "creator_id": "fca79fd1-8a5f-4135-b9ad-04387a89ecd2",
            "last_seen_at": "2020-02-09 07:22:11",
            "last_studied_at": "2020-02-09 07:22:11"
          },
          {
            "id": "664eb17b-b742-44ad-b375-5d60737e9ac8",
            "user_id": "fca79fd1-8a5f-4135-b9ad-04387a89ecd2",
            "card_set_id": "1a1b112a-3e69-42f9-bc96-d9f1f1c123e6",
            "creator_id": "fca79fd1-8a5f-4135-b9ad-04387a89ecd2",
            "last_seen_at": "2019-11-23 19:02:15",
            "last_studied_at": "2019-11-23 19:02:15"
          },
          {
            "id": "9972315e-5750-4131-8453-9df398067760",
            "user_id": "fca79fd1-8a5f-4135-b9ad-04387a89ecd2",
            "card_set_id": "78b1aa15-c112-4704-b8e8-7691374147f0",
            "creator_id": "fca79fd1-8a5f-4135-b9ad-04387a89ecd2",
            "last_seen_at": "2019-12-23 16:34:00",
            "last_studied_at": "2019-12-23 16:34:00"
          },
          {
            "id": "6a9a5801-d25d-4a8e-8bd8-6ee37909702c",
            "user_id": "fca79fd1-8a5f-4135-b9ad-04387a89ecd2",
            "card_set_id": "18518e5e-5728-4cc2-896e-1e76dddf6ac4",
            "creator_id": "fca79fd1-8a5f-4135-b9ad-04387a89ecd2",
            "last_seen_at": "2020-04-15 12:00:53",
            "last_studied_at": "2020-04-15 12:00:53"
          },
          {
            "id": "10af3dab-753e-4377-b7f4-6de83446c1e0",
            "user_id": "fca79fd1-8a5f-4135-b9ad-04387a89ecd2",
            "card_set_id": "36336b0a-938b-48c6-be73-86c214bce504",
            "creator_id": "fca79fd1-8a5f-4135-b9ad-04387a89ecd2",
            "last_seen_at": "2019-11-16 14:07:32",
            "last_studied_at": "2019-11-16 14:07:32"
          },
          {
            "id": "00461b66-6e08-43d8-9fc3-45b2100307ba",
            "user_id": "fca79fd1-8a5f-4135-b9ad-04387a89ecd2",
            "card_set_id": "a2682a4d-3831-4a86-a6ef-fbc407620669",
            "creator_id": "fca79fd1-8a5f-4135-b9ad-04387a89ecd2",
            "last_seen_at": "2020-03-24 22:45:17",
            "last_studied_at": "2020-03-24 22:45:17"
          },
          {
            "id": "ccfe7b34-02a8-4161-869a-91bd5fae0427",
            "user_id": "fca79fd1-8a5f-4135-b9ad-04387a89ecd2",
            "card_set_id": "1b4a2418-61e8-4798-871f-85388edad55e",
            "creator_id": "fca79fd1-8a5f-4135-b9ad-04387a89ecd2",
            "last_seen_at": "2019-10-12 09:26:25",
            "last_studied_at": "2019-10-12 09:26:25"
          },
          {
            "id": "59023e36-8da1-417f-b1b4-1a381b7865a0",
            "user_id": "fca79fd1-8a5f-4135-b9ad-04387a89ecd2",
            "card_set_id": "cb951f1c-a5af-486f-86d0-0841de345a66",
            "creator_id": "fca79fd1-8a5f-4135-b9ad-04387a89ecd2",
            "last_seen_at": "2020-01-17 20:47:21",
            "last_studied_at": "2020-01-17 20:47:21"
          },
          {
            "id": "6e8cec9f-eee5-437f-b75b-064a14271720",
            "user_id": "fca79fd1-8a5f-4135-b9ad-04387a89ecd2",
            "card_set_id": "abae29fd-d3f4-4931-af6a-09e4e387a411",
            "creator_id": "fca79fd1-8a5f-4135-b9ad-04387a89ecd2",
            "last_seen_at": "2020-02-08 11:58:19",
            "last_studied_at": "2020-02-08 11:58:19"
          },
          {
            "id": "2d1530f9-7c6d-402c-a4fc-1e12d48d15f7",
            "user_id": "fca79fd1-8a5f-4135-b9ad-04387a89ecd2",
            "card_set_id": "e4afd113-64df-49c0-9ada-f2632171c1d1",
            "creator_id": "fca79fd1-8a5f-4135-b9ad-04387a89ecd2",
            "last_seen_at": "2020-04-04 19:24:14",
            "last_studied_at": "2020-04-04 19:24:14"
          },
          {
            "id": "0d7130c0-74ee-4a39-85fb-31bf73d99c4d",
            "user_id": "fca79fd1-8a5f-4135-b9ad-04387a89ecd2",
            "card_set_id": "bd1477bb-6849-499a-904f-1ddcef6ff61d",
            "creator_id": "fca79fd1-8a5f-4135-b9ad-04387a89ecd2",
            "last_seen_at": "2019-12-07 07:33:55",
            "last_studied_at": "2019-12-07 07:33:55"
          },
          {
            "id": "f67e34d9-3ce1-45d5-a77d-885ee60af623",
            "user_id": "fca79fd1-8a5f-4135-b9ad-04387a89ecd2",
            "card_set_id": "af173459-5db4-4452-aac1-a4da45102f3f",
            "creator_id": "fca79fd1-8a5f-4135-b9ad-04387a89ecd2",
            "last_seen_at": "2020-01-10 08:11:21",
            "last_studied_at": "2020-01-10 08:11:21"
          },
          {
            "id": "81da70a6-e36e-4f2c-84b8-5eecb91cb8e0",
            "user_id": "fca79fd1-8a5f-4135-b9ad-04387a89ecd2",
            "card_set_id": "c9dd7fe0-40e5-4bb1-ab27-541be44187b5",
            "creator_id": "fca79fd1-8a5f-4135-b9ad-04387a89ecd2",
            "last_seen_at": "2019-10-10 12:50:42",
            "last_studied_at": "2019-10-10 12:50:42"
          },
          {
            "id": "ce93040e-b2d9-4353-bb67-e2c25170b0a9",
            "user_id": "fca79fd1-8a5f-4135-b9ad-04387a89ecd2",
            "card_set_id": "6067b16b-e989-4b6f-9a50-48884fa1393e",
            "creator_id": "fca79fd1-8a5f-4135-b9ad-04387a89ecd2",
            "last_seen_at": "2020-04-02 03:58:12",
            "last_studied_at": "2020-04-02 03:58:12"
          },
          {
            "id": "b88bbbb2-f9bc-400c-83fb-b49e82c1b9f6",
            "user_id": "fca79fd1-8a5f-4135-b9ad-04387a89ecd2",
            "card_set_id": "b4b40695-d21a-4c61-904d-32975957d504",
            "creator_id": "fca79fd1-8a5f-4135-b9ad-04387a89ecd2",
            "last_seen_at": "2019-12-20 04:20:05",
            "last_studied_at": "2019-12-20 04:20:05"
          },
          {
            "id": "b886cf78-0012-4b12-9a62-8438209dfbf9",
            "user_id": "fca79fd1-8a5f-4135-b9ad-04387a89ecd2",
            "card_set_id": "405087a4-d79c-4a42-810a-afa0fc0c0dd0",
            "creator_id": "fca79fd1-8a5f-4135-b9ad-04387a89ecd2",
            "last_seen_at": "2020-02-05 19:58:50",
            "last_studied_at": "2020-02-05 19:58:50"
          },
          {
            "id": "6f15df1f-67c3-4dbe-b1cb-c5f6f0d0218f",
            "user_id": "fca79fd1-8a5f-4135-b9ad-04387a89ecd2",
            "card_set_id": "9bbee3d1-efe4-4fe8-ab2b-0913d66cf781",
            "creator_id": "fca79fd1-8a5f-4135-b9ad-04387a89ecd2",
            "last_seen_at": "2019-12-16 06:09:41",
            "last_studied_at": "2019-12-16 06:09:41"
          },
          {
            "id": "0d8eaf31-3475-408b-9151-d9e6dbb72dd0",
            "user_id": "fca79fd1-8a5f-4135-b9ad-04387a89ecd2",
            "card_set_id": "3613c980-6ea4-48f6-adc2-87fc6111b6ad",
            "creator_id": "fca79fd1-8a5f-4135-b9ad-04387a89ecd2",
            "last_seen_at": "2019-12-21 16:31:57",
            "last_studied_at": "2019-12-21 16:31:57"
          },
          {
            "id": "6b7606a5-06ea-4fa6-8a97-6bf97d123c42",
            "user_id": "fca79fd1-8a5f-4135-b9ad-04387a89ecd2",
            "card_set_id": "bb814e41-c7fd-44f3-a0c2-5a8d5d0019b4",
            "creator_id": "fca79fd1-8a5f-4135-b9ad-04387a89ecd2",
            "last_seen_at": "2019-12-28 04:18:33",
            "last_studied_at": "2019-12-28 04:18:33"
          },
          {
            "id": "d8b981c2-9fbc-4122-8101-e059f0c87827",
            "user_id": "fca79fd1-8a5f-4135-b9ad-04387a89ecd2",
            "card_set_id": "ec8970fb-ce9a-4f41-883b-c4bc03c39a4b",
            "creator_id": "fca79fd1-8a5f-4135-b9ad-04387a89ecd2",
            "last_seen_at": "2020-03-21 10:58:29",
            "last_studied_at": "2020-03-21 10:58:29"
          },
          {
            "id": "71e1c68e-4f1f-49fe-8803-19089768358f",
            "user_id": "fca79fd1-8a5f-4135-b9ad-04387a89ecd2",
            "card_set_id": "70d0405b-beea-4c3f-9e03-cbba5128436e",
            "creator_id": "fca79fd1-8a5f-4135-b9ad-04387a89ecd2",
            "last_seen_at": "2020-03-24 10:49:43",
            "last_studied_at": "2020-03-24 10:49:43"
          },
          {
            "id": "7b849bd4-0caf-4956-8fcc-3a5358478174",
            "user_id": "fca79fd1-8a5f-4135-b9ad-04387a89ecd2",
            "card_set_id": "b76ad730-6aa2-43cc-913d-d34ff8709d41",
            "creator_id": "fca79fd1-8a5f-4135-b9ad-04387a89ecd2",
            "last_seen_at": "2019-12-16 11:33:00",
            "last_studied_at": "2019-12-16 11:33:00"
          },
          {
            "id": "d86a18ac-3cba-4775-9592-3f4674320b7d",
            "user_id": "fca79fd1-8a5f-4135-b9ad-04387a89ecd2",
            "card_set_id": "73586b46-1334-4856-b044-7d25ae1d0f46",
            "creator_id": "fca79fd1-8a5f-4135-b9ad-04387a89ecd2",
            "last_seen_at": "2019-12-05 21:18:18",
            "last_studied_at": "2019-12-05 21:18:18"
          },
          {
            "id": "97c9107b-9ce8-43b0-8e5d-b96929fbb18c",
            "user_id": "fca79fd1-8a5f-4135-b9ad-04387a89ecd2",
            "card_set_id": "f9b8a4d1-fe07-497e-b850-e8067fcc89a9",
            "creator_id": "fca79fd1-8a5f-4135-b9ad-04387a89ecd2",
            "last_seen_at": "2019-11-20 04:34:11",
            "last_studied_at": "2019-11-20 04:34:11"
          },
          {
            "id": "6f510506-87e7-49d3-8b5e-eda3a028a028",
            "user_id": "fca79fd1-8a5f-4135-b9ad-04387a89ecd2",
            "card_set_id": "1fc1282b-93e4-4a6d-96df-a5d4a7e9d8f1",
            "creator_id": "fca79fd1-8a5f-4135-b9ad-04387a89ecd2",
            "last_seen_at": "2020-03-15 16:50:13",
            "last_studied_at": "2020-03-15 16:50:13"
          },
          {
            "id": "e8c2db12-3b55-4abd-85fc-d9b5174312cb",
            "user_id": "fca79fd1-8a5f-4135-b9ad-04387a89ecd2",
            "card_set_id": "54bf45eb-d844-44ce-a170-ebad43e8caa7",
            "creator_id": "fca79fd1-8a5f-4135-b9ad-04387a89ecd2",
            "last_seen_at": "2019-10-08 15:08:14",
            "last_studied_at": "2019-10-08 15:08:14"
          },
          {
            "id": "106db9c7-9ce0-429a-8fa0-68b2bc2ab56e",
            "user_id": "fca79fd1-8a5f-4135-b9ad-04387a89ecd2",
            "card_set_id": "f6896712-24be-404a-8584-307f40b60f7d",
            "creator_id": "fca79fd1-8a5f-4135-b9ad-04387a89ecd2",
            "last_seen_at": "2020-03-23 22:36:44",
            "last_studied_at": "2020-03-23 22:36:44"
          },
          {
            "id": "d464bc36-236a-434e-b601-70f5f220ce3a",
            "user_id": "fca79fd1-8a5f-4135-b9ad-04387a89ecd2",
            "card_set_id": "41c57ef6-2593-46a6-9e0d-083d518c2697",
            "creator_id": "fca79fd1-8a5f-4135-b9ad-04387a89ecd2",
            "last_seen_at": "2020-04-03 16:45:00",
            "last_studied_at": "2020-04-03 16:45:00"
          },
          {
            "id": "f57bfbb3-4fb9-4d4a-a1fa-9dd408acc4ef",
            "user_id": "fca79fd1-8a5f-4135-b9ad-04387a89ecd2",
            "card_set_id": "0df3077b-4f6e-4120-8565-1d07f0f348bf",
            "creator_id": "fca79fd1-8a5f-4135-b9ad-04387a89ecd2",
            "last_seen_at": "2019-12-21 05:19:10",
            "last_studied_at": "2019-12-21 05:19:10"
          },
          {
            "id": "467a4e69-22f6-4ce9-9df0-ac4fa352ed06",
            "user_id": "fca79fd1-8a5f-4135-b9ad-04387a89ecd2",
            "card_set_id": "9a34187e-d2f0-4896-b458-7120221bc22c",
            "creator_id": "fca79fd1-8a5f-4135-b9ad-04387a89ecd2",
            "last_seen_at": "2019-11-03 10:43:00",
            "last_studied_at": "2019-11-03 10:43:00"
          },
          {
            "id": "73425974-76ba-47de-99a4-1f7972658390",
            "user_id": "fca79fd1-8a5f-4135-b9ad-04387a89ecd2",
            "card_set_id": "d71aee50-d20e-4c94-b528-b51c5edb02af",
            "creator_id": "fca79fd1-8a5f-4135-b9ad-04387a89ecd2",
            "last_seen_at": "2019-10-12 04:21:46",
            "last_studied_at": "2019-10-12 04:21:46"
          },
          {
            "id": "bad44093-6768-4728-ad72-ece76967dc9d",
            "user_id": "fca79fd1-8a5f-4135-b9ad-04387a89ecd2",
            "card_set_id": "b3497bfc-9bbe-4f04-9d5e-f9674ccb08b4",
            "creator_id": "fca79fd1-8a5f-4135-b9ad-04387a89ecd2",
            "last_seen_at": "2020-01-20 01:29:54",
            "last_studied_at": "2020-01-20 01:29:54"
          },
          {
            "id": "8181226a-82dd-49a2-9517-05973ac7684e",
            "user_id": "fca79fd1-8a5f-4135-b9ad-04387a89ecd2",
            "card_set_id": "4d0d79c3-5208-4235-82f8-9315c43ce653",
            "creator_id": "fca79fd1-8a5f-4135-b9ad-04387a89ecd2",
            "last_seen_at": "2020-03-08 20:04:40",
            "last_studied_at": "2020-03-08 20:04:40"
          },
          {
            "id": "f98b9be2-264d-4f5d-99f6-bad5bf09935b",
            "user_id": "fca79fd1-8a5f-4135-b9ad-04387a89ecd2",
            "card_set_id": "cda9b6dc-bd3a-42b4-9fea-37ee35ecb226",
            "creator_id": "fca79fd1-8a5f-4135-b9ad-04387a89ecd2",
            "last_seen_at": "2019-10-23 16:07:04",
            "last_studied_at": "2019-10-23 16:07:04"
          },
          {
            "id": "36ecee69-fd15-408a-bbce-d17e3d3b2cf2",
            "user_id": "fca79fd1-8a5f-4135-b9ad-04387a89ecd2",
            "card_set_id": "da3fb977-c1bb-4b7a-8b14-c270bdf79f20",
            "creator_id": "fca79fd1-8a5f-4135-b9ad-04387a89ecd2",
            "last_seen_at": "2019-10-31 14:49:19",
            "last_studied_at": "2019-10-31 14:49:19"
          },
          {
            "id": "4ef65f77-281e-4099-a06c-a2ad036d3194",
            "user_id": "fca79fd1-8a5f-4135-b9ad-04387a89ecd2",
            "card_set_id": "da5bd82f-c7cd-460c-a4f7-52d35e0a2dd5",
            "creator_id": "fca79fd1-8a5f-4135-b9ad-04387a89ecd2",
            "last_seen_at": "2019-11-29 04:17:43",
            "last_studied_at": "2019-11-29 04:17:43"
          },
          {
            "id": "c46affd3-f0b5-41d3-bcb4-8298fa050a2e",
            "user_id": "fca79fd1-8a5f-4135-b9ad-04387a89ecd2",
            "card_set_id": "e90ab765-3f1f-4755-af89-1818c764dd7c",
            "creator_id": "fca79fd1-8a5f-4135-b9ad-04387a89ecd2",
            "last_seen_at": "2019-12-20 12:16:09",
            "last_studied_at": "2019-12-20 12:16:09"
          },
          {
            "id": "9c725084-7ef9-491f-bc75-c13596975faf",
            "user_id": "fca79fd1-8a5f-4135-b9ad-04387a89ecd2",
            "card_set_id": "4e6604dd-b9be-4310-b1f8-1de422ac7f16",
            "creator_id": "fca79fd1-8a5f-4135-b9ad-04387a89ecd2",
            "last_seen_at": "2019-12-03 00:46:55",
            "last_studied_at": "2019-12-03 00:46:55"
          },
          {
            "id": "2003ccf5-c674-4e58-8c92-f9a093bc5e16",
            "user_id": "fca79fd1-8a5f-4135-b9ad-04387a89ecd2",
            "card_set_id": "a85f2ebc-4b03-4fea-bd39-4b6a88acc5e8",
            "creator_id": "fca79fd1-8a5f-4135-b9ad-04387a89ecd2",
            "last_seen_at": "2020-04-05 05:26:31",
            "last_studied_at": "2020-04-05 05:26:31"
          },
          {
            "id": "93519d40-f9a1-4a5e-bb5b-ba1b7e984d8e",
            "user_id": "fca79fd1-8a5f-4135-b9ad-04387a89ecd2",
            "card_set_id": "9fb1e4c9-9bad-48bb-91ed-a74d9f8e4fad",
            "creator_id": "fca79fd1-8a5f-4135-b9ad-04387a89ecd2",
            "last_seen_at": "2019-12-07 08:17:24",
            "last_studied_at": "2019-12-07 08:17:24"
          },
          {
            "id": "8d3c3826-bac6-459c-a8e0-90e2f8ee78f6",
            "user_id": "fca79fd1-8a5f-4135-b9ad-04387a89ecd2",
            "card_set_id": "665a9e8b-06bd-4e6e-a60c-d83f47386192",
            "creator_id": "fca79fd1-8a5f-4135-b9ad-04387a89ecd2",
            "last_seen_at": "2020-04-14 12:09:35",
            "last_studied_at": "2020-04-14 12:09:35"
          },
          {
            "id": "97596274-677d-450d-b51c-46fd57fca5b3",
            "user_id": "fca79fd1-8a5f-4135-b9ad-04387a89ecd2",
            "card_set_id": "5bfcaed5-521d-4fb4-9d3f-9a0b22a5b770",
            "creator_id": "fca79fd1-8a5f-4135-b9ad-04387a89ecd2",
            "last_seen_at": "2020-03-09 11:52:15",
            "last_studied_at": "2020-03-09 11:52:15"
          },
          {
            "id": "1b36e6e2-a281-4624-9c48-0b4f68f31535",
            "user_id": "fca79fd1-8a5f-4135-b9ad-04387a89ecd2",
            "card_set_id": "1c876440-8139-46df-9717-65d6077ba4f7",
            "creator_id": "fca79fd1-8a5f-4135-b9ad-04387a89ecd2",
            "last_seen_at": "2019-12-07 08:49:12",
            "last_studied_at": "2019-12-07 08:49:12"
          },
          {
            "id": "ae004e4d-56e7-4729-b011-97c94898876f",
            "user_id": "fca79fd1-8a5f-4135-b9ad-04387a89ecd2",
            "card_set_id": "f4ae90c5-49d4-4052-8af7-e08ad6fc964c",
            "creator_id": "fca79fd1-8a5f-4135-b9ad-04387a89ecd2",
            "last_seen_at": "2020-04-07 12:46:46",
            "last_studied_at": "2020-04-07 12:46:46"
          },
          {
            "id": "75dcc70c-584f-4eb6-afe9-ef735a94c1de",
            "user_id": "fca79fd1-8a5f-4135-b9ad-04387a89ecd2",
            "card_set_id": "e578d223-a657-4548-bd2f-a6905bc99bba",
            "creator_id": "fca79fd1-8a5f-4135-b9ad-04387a89ecd2",
            "last_seen_at": "2020-01-14 10:54:25",
            "last_studied_at": "2020-01-14 10:54:25"
          },
          {
            "id": "72e351ba-6933-4301-8cf4-d5be08f752cf",
            "user_id": "fca79fd1-8a5f-4135-b9ad-04387a89ecd2",
            "card_set_id": "9ffe0679-9c11-4cb1-8818-f8e63d3befa2",
            "creator_id": "fca79fd1-8a5f-4135-b9ad-04387a89ecd2",
            "last_seen_at": "2020-02-06 22:38:51",
            "last_studied_at": "2020-02-06 22:38:51"
          },
          {
            "id": "287106dd-12f5-4d45-b5ab-1d5a8416aac0",
            "user_id": "fca79fd1-8a5f-4135-b9ad-04387a89ecd2",
            "card_set_id": "0f361da9-033c-484a-8334-77afba043e26",
            "creator_id": "fca79fd1-8a5f-4135-b9ad-04387a89ecd2",
            "last_seen_at": "2020-01-22 05:58:42",
            "last_studied_at": "2020-01-22 05:58:42"
          },
          {
            "id": "417d840d-de75-4cbc-9d35-4ee5d045ad08",
            "user_id": "fca79fd1-8a5f-4135-b9ad-04387a89ecd2",
            "card_set_id": "b5c773a8-e1ef-4461-9f6d-5feb5211d35c",
            "creator_id": "fca79fd1-8a5f-4135-b9ad-04387a89ecd2",
            "last_seen_at": "2020-03-24 01:35:43",
            "last_studied_at": "2020-03-24 01:35:43"
          },
          {
            "id": "e2e78b46-e7f9-46a9-9417-c1b6b5e05697",
            "user_id": "fca79fd1-8a5f-4135-b9ad-04387a89ecd2",
            "card_set_id": "4802b2b8-cd45-44ed-84cd-b0399087aee4",
            "creator_id": "fca79fd1-8a5f-4135-b9ad-04387a89ecd2",
            "last_seen_at": "2019-12-03 04:44:13",
            "last_studied_at": "2019-12-03 04:44:13"
          },
          {
            "id": "11ae41ae-2183-4231-b328-272807f042c3",
            "user_id": "fca79fd1-8a5f-4135-b9ad-04387a89ecd2",
            "card_set_id": "b03e8085-91ae-44a6-83aa-231c3f1227e6",
            "creator_id": "fca79fd1-8a5f-4135-b9ad-04387a89ecd2",
            "last_seen_at": "2020-03-24 16:15:53",
            "last_studied_at": "2020-03-24 16:15:53"
          },
          {
            "id": "f43e1609-eb77-4338-a0bd-564ae509875a",
            "user_id": "fca79fd1-8a5f-4135-b9ad-04387a89ecd2",
            "card_set_id": "c423f015-cafd-4951-8058-b636e8073a70",
            "creator_id": "fca79fd1-8a5f-4135-b9ad-04387a89ecd2",
            "last_seen_at": "2020-04-02 23:37:23",
            "last_studied_at": "2020-04-02 23:37:23"
          },
          {
            "id": "5c04404f-5755-40b9-8dea-c7c19fe0e144",
            "user_id": "fca79fd1-8a5f-4135-b9ad-04387a89ecd2",
            "card_set_id": "9b769f3a-b237-4b1e-9dfd-10c5ac011c89",
            "creator_id": "fca79fd1-8a5f-4135-b9ad-04387a89ecd2",
            "last_seen_at": "2019-12-17 16:44:54",
            "last_studied_at": "2019-12-17 16:44:54"
          },
          {
            "id": "d1d4a630-18fe-45b7-a727-07fb940800ea",
            "user_id": "fca79fd1-8a5f-4135-b9ad-04387a89ecd2",
            "card_set_id": "4d7829f4-f128-4948-830f-83e7c849a579",
            "creator_id": "fca79fd1-8a5f-4135-b9ad-04387a89ecd2",
            "last_seen_at": "2019-12-29 05:46:49",
            "last_studied_at": "2019-12-29 05:46:49"
          },
          {
            "id": "55262970-c112-4d02-af97-8f00b236a3e8",
            "user_id": "fca79fd1-8a5f-4135-b9ad-04387a89ecd2",
            "card_set_id": "a4658021-6f30-4d0a-938d-69927f955556",
            "creator_id": "fca79fd1-8a5f-4135-b9ad-04387a89ecd2",
            "last_seen_at": "2019-12-01 02:24:50",
            "last_studied_at": "2019-12-01 02:24:50"
          },
          {
            "id": "e9a090a1-1946-47bb-9e53-5bd5611a94c6",
            "user_id": "fca79fd1-8a5f-4135-b9ad-04387a89ecd2",
            "card_set_id": "61d63e1a-5c6d-425b-a70d-1a312f7065bc",
            "creator_id": "fca79fd1-8a5f-4135-b9ad-04387a89ecd2",
            "last_seen_at": "2020-01-06 23:12:34",
            "last_studied_at": "2020-01-06 23:12:34"
          },
          {
            "id": "471d8faf-3a91-4a37-8d37-c7b54da23334",
            "user_id": "fca79fd1-8a5f-4135-b9ad-04387a89ecd2",
            "card_set_id": "5629ef04-732f-4bff-b264-d05684cb0b3e",
            "creator_id": "fca79fd1-8a5f-4135-b9ad-04387a89ecd2",
            "last_seen_at": "2020-03-13 03:30:54",
            "last_studied_at": "2020-03-13 03:30:54"
          },
          {
            "id": "3d3c44e9-309a-4ad0-9544-d673df322a36",
            "user_id": "fca79fd1-8a5f-4135-b9ad-04387a89ecd2",
            "card_set_id": "3a624e4a-073b-4d9f-8eaf-7d55ec29e916",
            "creator_id": "fca79fd1-8a5f-4135-b9ad-04387a89ecd2",
            "last_seen_at": "2020-04-07 18:27:51",
            "last_studied_at": "2020-04-07 18:27:51"
          },
          {
            "id": "f82bffd6-3909-41da-a690-dcbc1535c6f4",
            "user_id": "fca79fd1-8a5f-4135-b9ad-04387a89ecd2",
            "card_set_id": "fb12c5a4-cef8-4e21-a11d-a1fc902dc028",
            "creator_id": "fca79fd1-8a5f-4135-b9ad-04387a89ecd2",
            "last_seen_at": "2019-10-30 20:11:03",
            "last_studied_at": "2019-10-30 20:11:03"
          },
          {
            "id": "791430d5-7b3a-4a6f-9d11-212f6b608d31",
            "user_id": "fca79fd1-8a5f-4135-b9ad-04387a89ecd2",
            "card_set_id": "6cde00c8-306e-41c6-9cfc-5e2c8a0c143c",
            "creator_id": "fca79fd1-8a5f-4135-b9ad-04387a89ecd2",
            "last_seen_at": "2020-03-29 02:55:13",
            "last_studied_at": "2020-03-29 02:55:13"
          },
          {
            "id": "3bff070c-363d-4516-8e83-e3dd6c761932",
            "user_id": "fca79fd1-8a5f-4135-b9ad-04387a89ecd2",
            "card_set_id": "7f902f38-dc59-47da-b332-dd5b9312e010",
            "creator_id": "fca79fd1-8a5f-4135-b9ad-04387a89ecd2",
            "last_seen_at": "2020-04-20 09:01:42",
            "last_studied_at": "2020-04-20 09:01:42"
          },
          {
            "id": "fe4e0cf3-fdf2-45b7-a70e-51f8281f292d",
            "user_id": "fca79fd1-8a5f-4135-b9ad-04387a89ecd2",
            "card_set_id": "ba570bab-173e-4c2b-aec7-27102ab2270c",
            "creator_id": "fca79fd1-8a5f-4135-b9ad-04387a89ecd2",
            "last_seen_at": "2019-11-21 10:33:13",
            "last_studied_at": "2019-11-21 10:33:13"
          },
          {
            "id": "d9117e11-e926-4ed1-abe7-ec2be675d2ef",
            "user_id": "fca79fd1-8a5f-4135-b9ad-04387a89ecd2",
            "card_set_id": "aac8bb4f-f738-45ae-b1de-994c9c74f071",
            "creator_id": "fca79fd1-8a5f-4135-b9ad-04387a89ecd2",
            "last_seen_at": "2019-12-17 02:37:18",
            "last_studied_at": "2019-12-17 02:37:18"
          },
          {
            "id": "efe2a30c-87c6-4b41-a3b8-b6ab2469d657",
            "user_id": "fca79fd1-8a5f-4135-b9ad-04387a89ecd2",
            "card_set_id": "c9edc971-47b6-4242-85d5-bef3401a6605",
            "creator_id": "fca79fd1-8a5f-4135-b9ad-04387a89ecd2",
            "last_seen_at": "2019-12-09 15:31:44",
            "last_studied_at": "2019-12-09 15:31:44"
          },
          {
            "id": "e8c105f3-0699-428e-849a-29e3476c833e",
            "user_id": "fca79fd1-8a5f-4135-b9ad-04387a89ecd2",
            "card_set_id": "f1378aa3-1924-4e85-b64a-967f8be9ef8d",
            "creator_id": "fca79fd1-8a5f-4135-b9ad-04387a89ecd2",
            "last_seen_at": "2020-03-10 14:31:50",
            "last_studied_at": "2020-03-10 14:31:50"
          },
          {
            "id": "6425cdce-a45d-4d1b-9c4c-098c5f72f468",
            "user_id": "fca79fd1-8a5f-4135-b9ad-04387a89ecd2",
            "card_set_id": "fb6e9a3e-5bd4-4ad1-b51b-0ab2ba624962",
            "creator_id": "fca79fd1-8a5f-4135-b9ad-04387a89ecd2",
            "last_seen_at": "2019-11-07 03:53:45",
            "last_studied_at": "2019-11-07 03:53:45"
          },
          {
            "id": "c27d1612-e3f6-4d74-8ff4-ff00d9b5b534",
            "user_id": "fca79fd1-8a5f-4135-b9ad-04387a89ecd2",
            "card_set_id": "e6299f94-9b7f-4a27-b670-6dcbdb76a0d8",
            "creator_id": "fca79fd1-8a5f-4135-b9ad-04387a89ecd2",
            "last_seen_at": "2019-10-13 09:42:40",
            "last_studied_at": "2019-10-13 09:42:40"
          },
          {
            "id": "fcfe79e4-8ed7-4dbc-ba9f-0d0c66fc2cd4",
            "user_id": "fca79fd1-8a5f-4135-b9ad-04387a89ecd2",
            "card_set_id": "498932d6-cc16-4236-bc11-a03e757fc9be",
            "creator_id": "fca79fd1-8a5f-4135-b9ad-04387a89ecd2",
            "last_seen_at": "2020-02-18 05:45:20",
            "last_studied_at": "2020-02-18 05:45:20"
          },
          {
            "id": "6c90553b-4dea-4221-848b-d0b3f555f1f3",
            "user_id": "fca79fd1-8a5f-4135-b9ad-04387a89ecd2",
            "card_set_id": "fa2f2088-0103-4e6f-a172-2390de307a29",
            "creator_id": "fca79fd1-8a5f-4135-b9ad-04387a89ecd2",
            "last_seen_at": "2020-02-06 05:36:37",
            "last_studied_at": "2020-02-06 05:36:37"
          },
          {
            "id": "fd7c1273-bedb-4c48-aa7e-287174738786",
            "user_id": "fca79fd1-8a5f-4135-b9ad-04387a89ecd2",
            "card_set_id": "ac4867b4-2123-4ad2-af6a-bcabb19f44a3",
            "creator_id": "fca79fd1-8a5f-4135-b9ad-04387a89ecd2",
            "last_seen_at": "2020-03-14 02:25:20",
            "last_studied_at": "2020-03-14 02:25:20"
          },
          {
            "id": "c971549e-96ba-4b9c-93d1-41b4474027dd",
            "user_id": "fca79fd1-8a5f-4135-b9ad-04387a89ecd2",
            "card_set_id": "23325e44-7970-4a48-8320-2e18bedd67ae",
            "creator_id": "fca79fd1-8a5f-4135-b9ad-04387a89ecd2",
            "last_seen_at": "2020-02-04 23:09:09",
            "last_studied_at": "2020-02-04 23:09:09"
          },
          {
            "id": "fff40a6b-0ff8-4ec2-96b4-fcba4292ccc3",
            "user_id": "fca79fd1-8a5f-4135-b9ad-04387a89ecd2",
            "card_set_id": "8a1db506-044b-47b6-a1cb-e43f3b882607",
            "creator_id": "fca79fd1-8a5f-4135-b9ad-04387a89ecd2",
            "last_seen_at": "2019-10-10 11:29:34",
            "last_studied_at": "2019-10-10 11:29:34"
          },
          {
            "id": "20cbefba-7114-4113-88be-e43f0bf13887",
            "user_id": "fca79fd1-8a5f-4135-b9ad-04387a89ecd2",
            "card_set_id": "06f12c85-3ff8-4bd3-83a2-2838fd7eaaee",
            "creator_id": "fca79fd1-8a5f-4135-b9ad-04387a89ecd2",
            "last_seen_at": "2020-04-05 21:21:03",
            "last_studied_at": "2020-04-05 21:21:03"
          },
          {
            "id": "9c0fed75-1828-42cf-99ce-5b910a22fe68",
            "user_id": "fca79fd1-8a5f-4135-b9ad-04387a89ecd2",
            "card_set_id": "93cf6cb3-e594-4fb6-8c54-05a04b62d383",
            "creator_id": "fca79fd1-8a5f-4135-b9ad-04387a89ecd2",
            "last_seen_at": "2019-12-26 23:48:50",
            "last_studied_at": "2019-12-26 23:48:50"
          },
          {
            "id": "9dc5b86b-98bd-4ba8-8e3d-0e0c5d47efaa",
            "user_id": "fca79fd1-8a5f-4135-b9ad-04387a89ecd2",
            "card_set_id": "d826376f-fa45-45bb-9f4e-a9535732d5ba",
            "creator_id": "fca79fd1-8a5f-4135-b9ad-04387a89ecd2",
            "last_seen_at": "2020-03-05 20:39:13",
            "last_studied_at": "2020-03-05 20:39:13"
          },
          {
            "id": "b3f4a495-1111-4845-ac08-2fb95671eb4e",
            "user_id": "fca79fd1-8a5f-4135-b9ad-04387a89ecd2",
            "card_set_id": "af86946a-0335-4353-b2b6-136ff4a30349",
            "creator_id": "fca79fd1-8a5f-4135-b9ad-04387a89ecd2",
            "last_seen_at": "2020-03-27 21:17:45",
            "last_studied_at": "2020-03-27 21:17:45"
          },
          {
            "id": "f68221ad-6e41-4143-981b-a82cd9bd3dc0",
            "user_id": "fca79fd1-8a5f-4135-b9ad-04387a89ecd2",
            "card_set_id": "41ec699a-cddf-4591-ba03-12c6e3b23257",
            "creator_id": "fca79fd1-8a5f-4135-b9ad-04387a89ecd2",
            "last_seen_at": "2020-02-11 03:09:08",
            "last_studied_at": "2020-02-11 03:09:08"
          },
          {
            "id": "db7d936e-8712-481b-b1af-4bc7f4b7af69",
            "user_id": "fca79fd1-8a5f-4135-b9ad-04387a89ecd2",
            "card_set_id": "10357b3c-b0fa-4830-a8bf-356595490a44",
            "creator_id": "fca79fd1-8a5f-4135-b9ad-04387a89ecd2",
            "last_seen_at": "2020-01-12 04:45:44",
            "last_studied_at": "2020-01-12 04:45:44"
          },
          {
            "id": "e037869e-cf64-4a77-b34a-8099100eb7bd",
            "user_id": "fca79fd1-8a5f-4135-b9ad-04387a89ecd2",
            "card_set_id": "84e3b574-9d09-4a2b-860b-0a4094036a52",
            "creator_id": "fca79fd1-8a5f-4135-b9ad-04387a89ecd2",
            "last_seen_at": "2019-10-25 09:33:07",
            "last_studied_at": "2019-10-25 09:33:07"
          },
          {
            "id": "76a1e5f4-1721-478b-a9ae-4891c1f1bedc",
            "user_id": "fca79fd1-8a5f-4135-b9ad-04387a89ecd2",
            "card_set_id": "cfeef99c-4cec-43e0-82fe-c9e93f55a695",
            "creator_id": "fca79fd1-8a5f-4135-b9ad-04387a89ecd2",
            "last_seen_at": "2020-01-17 12:22:18",
            "last_studied_at": "2020-01-17 12:22:18"
          },
          {
            "id": "1875f947-2e38-4800-afa5-b7da4b97d020",
            "user_id": "f1d0c186-53c1-4ca2-ac5f-cb3cc53a0675",
            "card_set_id": "904ab153-bb56-461f-bebc-a7453fc67ce5",
            "creator_id": "f1d0c186-53c1-4ca2-ac5f-cb3cc53a0675",
            "last_seen_at": "2020-03-02 05:49:08",
            "last_studied_at": "2020-03-02 05:49:08"
          },
          {
            "id": "68ef2434-c967-46c7-9490-ee45986a7298",
            "user_id": "f1d0c186-53c1-4ca2-ac5f-cb3cc53a0675",
            "card_set_id": "a6ec2673-e728-4800-ae30-2aef638c5185",
            "creator_id": "f1d0c186-53c1-4ca2-ac5f-cb3cc53a0675",
            "last_seen_at": "2019-12-17 11:56:51",
            "last_studied_at": "2019-12-17 11:56:51"
          },
          {
            "id": "bfa70b19-c4ae-4263-90b0-5bc9616f40dc",
            "user_id": "f1d0c186-53c1-4ca2-ac5f-cb3cc53a0675",
            "card_set_id": "ba10b4a0-72e3-4998-8c25-8e94bd49bea3",
            "creator_id": "f1d0c186-53c1-4ca2-ac5f-cb3cc53a0675",
            "last_seen_at": "2019-10-17 08:02:03",
            "last_studied_at": "2019-10-17 08:02:03"
          },
          {
            "id": "76209759-2ba0-4f13-98fb-ab325f5d16e5",
            "user_id": "f1d0c186-53c1-4ca2-ac5f-cb3cc53a0675",
            "card_set_id": "60977782-704c-403c-bd9f-5352337eaf75",
            "creator_id": "f1d0c186-53c1-4ca2-ac5f-cb3cc53a0675",
            "last_seen_at": "2019-10-28 03:47:20",
            "last_studied_at": "2019-10-28 03:47:20"
          },
          {
            "id": "ce61b7f1-a17c-40e4-a2ce-2788f0e8fd94",
            "user_id": "f1d0c186-53c1-4ca2-ac5f-cb3cc53a0675",
            "card_set_id": "7c423326-f417-43f8-8726-3020be76e96c",
            "creator_id": "f1d0c186-53c1-4ca2-ac5f-cb3cc53a0675",
            "last_seen_at": "2019-12-28 23:12:13",
            "last_studied_at": "2019-12-28 23:12:13"
          },
          {
            "id": "06ceb3b7-1fd2-4afa-a4a0-28c945a22c6c",
            "user_id": "f1d0c186-53c1-4ca2-ac5f-cb3cc53a0675",
            "card_set_id": "33a83bb9-da04-4826-a8aa-3a1d3b92fc2e",
            "creator_id": "f1d0c186-53c1-4ca2-ac5f-cb3cc53a0675",
            "last_seen_at": "2019-12-15 13:46:24",
            "last_studied_at": "2019-12-15 13:46:24"
          },
          {
            "id": "5b4b2f7a-920b-4f4d-b04f-15024b37c8cb",
            "user_id": "f1d0c186-53c1-4ca2-ac5f-cb3cc53a0675",
            "card_set_id": "acb080f6-9afe-40c6-9eb0-2ed94b99ec22",
            "creator_id": "f1d0c186-53c1-4ca2-ac5f-cb3cc53a0675",
            "last_seen_at": "2019-10-08 03:56:54",
            "last_studied_at": "2019-10-08 03:56:54"
          },
          {
            "id": "3b0356e9-268e-4ca9-b0fb-039deb3a1b3c",
            "user_id": "f1d0c186-53c1-4ca2-ac5f-cb3cc53a0675",
            "card_set_id": "324240a7-e94d-409b-b65b-9f30fad63432",
            "creator_id": "f1d0c186-53c1-4ca2-ac5f-cb3cc53a0675",
            "last_seen_at": "2020-03-29 05:29:44",
            "last_studied_at": "2020-03-29 05:29:44"
          },
          {
            "id": "cf662c89-f1b2-4672-b1f6-15f41d94b6f6",
            "user_id": "f1d0c186-53c1-4ca2-ac5f-cb3cc53a0675",
            "card_set_id": "e9694c70-f4d4-4c9d-a6ef-b510ca478dc0",
            "creator_id": "f1d0c186-53c1-4ca2-ac5f-cb3cc53a0675",
            "last_seen_at": "2020-01-26 03:48:04",
            "last_studied_at": "2020-01-26 03:48:04"
          },
          {
            "id": "165881c5-007d-4fcf-bb3d-d7975727532a",
            "user_id": "f1d0c186-53c1-4ca2-ac5f-cb3cc53a0675",
            "card_set_id": "eac6aa67-5695-47dc-abd7-286a6b01e957",
            "creator_id": "f1d0c186-53c1-4ca2-ac5f-cb3cc53a0675",
            "last_seen_at": "2020-01-29 19:27:49",
            "last_studied_at": "2020-01-29 19:27:49"
          },
          {
            "id": "2e5d63b5-593f-4275-8f28-a89a0a49a7c4",
            "user_id": "f1d0c186-53c1-4ca2-ac5f-cb3cc53a0675",
            "card_set_id": "b9a82c5b-92a2-448f-8eed-9a27141c360f",
            "creator_id": "f1d0c186-53c1-4ca2-ac5f-cb3cc53a0675",
            "last_seen_at": "2019-10-29 01:31:22",
            "last_studied_at": "2019-10-29 01:31:22"
          },
          {
            "id": "6643e2c8-6857-4254-b3e4-d85f3f01a904",
            "user_id": "f1d0c186-53c1-4ca2-ac5f-cb3cc53a0675",
            "card_set_id": "d7fb28b9-d2ea-4e34-9a5b-9a07ff05f6ea",
            "creator_id": "f1d0c186-53c1-4ca2-ac5f-cb3cc53a0675",
            "last_seen_at": "2019-12-24 14:11:18",
            "last_studied_at": "2019-12-24 14:11:18"
          },
          {
            "id": "94e479df-f4be-40e8-bd18-c93a0af4afc6",
            "user_id": "f1d0c186-53c1-4ca2-ac5f-cb3cc53a0675",
            "card_set_id": "c7a7bdd1-6c48-4f33-90e4-fac467af3311",
            "creator_id": "f1d0c186-53c1-4ca2-ac5f-cb3cc53a0675",
            "last_seen_at": "2020-02-05 05:52:09",
            "last_studied_at": "2020-02-05 05:52:09"
          },
          {
            "id": "0e7f3d80-f579-4252-b3e5-5f339751f9cb",
            "user_id": "f1d0c186-53c1-4ca2-ac5f-cb3cc53a0675",
            "card_set_id": "d9fbdf25-b911-4e7b-8ea5-bb0d2a915455",
            "creator_id": "f1d0c186-53c1-4ca2-ac5f-cb3cc53a0675",
            "last_seen_at": "2019-10-26 23:33:08",
            "last_studied_at": "2019-10-26 23:33:08"
          },
          {
            "id": "0ac24908-16c5-4921-ae17-46553731e4a7",
            "user_id": "f1d0c186-53c1-4ca2-ac5f-cb3cc53a0675",
            "card_set_id": "78156cc7-dba8-4930-8b4b-f48dd210390b",
            "creator_id": "f1d0c186-53c1-4ca2-ac5f-cb3cc53a0675",
            "last_seen_at": "2020-03-10 12:02:38",
            "last_studied_at": "2020-03-10 12:02:38"
          },
          {
            "id": "6cee61d6-8870-4829-85da-5d1416ab4d8d",
            "user_id": "f1d0c186-53c1-4ca2-ac5f-cb3cc53a0675",
            "card_set_id": "91134979-eaf8-4fda-9499-6cdb68c6479b",
            "creator_id": "f1d0c186-53c1-4ca2-ac5f-cb3cc53a0675",
            "last_seen_at": "2020-03-03 18:10:40",
            "last_studied_at": "2020-03-03 18:10:40"
          },
          {
            "id": "31deab20-5b12-43c1-8408-f9be7921c674",
            "user_id": "f1d0c186-53c1-4ca2-ac5f-cb3cc53a0675",
            "card_set_id": "ba571dbd-b623-454b-bffc-b3f3d0301e07",
            "creator_id": "f1d0c186-53c1-4ca2-ac5f-cb3cc53a0675",
            "last_seen_at": "2020-03-05 17:15:02",
            "last_studied_at": "2020-03-05 17:15:02"
          },
          {
            "id": "eb1dc2a4-9af0-45d1-b9a9-5635ab7c6a62",
            "user_id": "f1d0c186-53c1-4ca2-ac5f-cb3cc53a0675",
            "card_set_id": "f72cf413-5b15-4f25-973c-6f233f689256",
            "creator_id": "f1d0c186-53c1-4ca2-ac5f-cb3cc53a0675",
            "last_seen_at": "2020-03-16 00:33:14",
            "last_studied_at": "2020-03-16 00:33:14"
          },
          {
            "id": "9e53434d-9883-4e6c-baf1-aa6c942a8430",
            "user_id": "f1d0c186-53c1-4ca2-ac5f-cb3cc53a0675",
            "card_set_id": "661518b0-38f3-4742-b2d6-ab74dbb819c2",
            "creator_id": "f1d0c186-53c1-4ca2-ac5f-cb3cc53a0675",
            "last_seen_at": "2019-11-04 18:41:20",
            "last_studied_at": "2019-11-04 18:41:20"
          },
          {
            "id": "1041e31f-3c90-4578-a470-0c97257785e3",
            "user_id": "f1d0c186-53c1-4ca2-ac5f-cb3cc53a0675",
            "card_set_id": "8ad05211-51d8-44cc-812c-80f3148f6840",
            "creator_id": "f1d0c186-53c1-4ca2-ac5f-cb3cc53a0675",
            "last_seen_at": "2019-12-08 17:44:58",
            "last_studied_at": "2019-12-08 17:44:58"
          },
          {
            "id": "0a8eabe8-a8dc-41b2-be6b-0efa71ca8af9",
            "user_id": "f1d0c186-53c1-4ca2-ac5f-cb3cc53a0675",
            "card_set_id": "6d6de087-ebf0-47d8-9e11-e37779445173",
            "creator_id": "f1d0c186-53c1-4ca2-ac5f-cb3cc53a0675",
            "last_seen_at": "2020-03-13 18:17:58",
            "last_studied_at": "2020-03-13 18:17:58"
          },
          {
            "id": "f8d27fcd-8963-44e7-9ed8-66ade8026de9",
            "user_id": "f1d0c186-53c1-4ca2-ac5f-cb3cc53a0675",
            "card_set_id": "40db68bd-bec9-4807-92f7-70d4fe65b0cd",
            "creator_id": "f1d0c186-53c1-4ca2-ac5f-cb3cc53a0675",
            "last_seen_at": "2019-11-27 00:47:30",
            "last_studied_at": "2019-11-27 00:47:30"
          },
          {
            "id": "13271ecc-5466-4dc0-a8f6-1f698d1ed532",
            "user_id": "f1d0c186-53c1-4ca2-ac5f-cb3cc53a0675",
            "card_set_id": "fc52a975-be53-4a16-b3be-d3bb42f0e0e4",
            "creator_id": "f1d0c186-53c1-4ca2-ac5f-cb3cc53a0675",
            "last_seen_at": "2020-01-22 01:56:13",
            "last_studied_at": "2020-01-22 01:56:13"
          },
          {
            "id": "2f5a51bf-098c-4068-9e8c-8a705fc1b0ea",
            "user_id": "f1d0c186-53c1-4ca2-ac5f-cb3cc53a0675",
            "card_set_id": "2499cffa-f589-4395-a6c7-dbef53c9e598",
            "creator_id": "f1d0c186-53c1-4ca2-ac5f-cb3cc53a0675",
            "last_seen_at": "2020-04-04 19:03:34",
            "last_studied_at": "2020-04-04 19:03:34"
          },
          {
            "id": "e8d0bd32-1e40-425e-88a8-6ae23ddb66fc",
            "user_id": "f1d0c186-53c1-4ca2-ac5f-cb3cc53a0675",
            "card_set_id": "4540dacc-e08a-4cc8-88b0-0fe31fedc090",
            "creator_id": "f1d0c186-53c1-4ca2-ac5f-cb3cc53a0675",
            "last_seen_at": "2019-10-16 01:10:29",
            "last_studied_at": "2019-10-16 01:10:29"
          },
          {
            "id": "d0a6184a-14de-4247-969d-69ff6a3142b0",
            "user_id": "f1d0c186-53c1-4ca2-ac5f-cb3cc53a0675",
            "card_set_id": "4a88c52d-c4d5-417b-bd21-0d401ba4d559",
            "creator_id": "f1d0c186-53c1-4ca2-ac5f-cb3cc53a0675",
            "last_seen_at": "2020-02-20 02:49:16",
            "last_studied_at": "2020-02-20 02:49:16"
          },
          {
            "id": "e1489f0c-2e70-4c93-9e88-825b4ac41f90",
            "user_id": "f1d0c186-53c1-4ca2-ac5f-cb3cc53a0675",
            "card_set_id": "7ac2a1d0-e478-43b3-be7c-e9a2cf7adcd6",
            "creator_id": "f1d0c186-53c1-4ca2-ac5f-cb3cc53a0675",
            "last_seen_at": "2019-12-22 10:43:37",
            "last_studied_at": "2019-12-22 10:43:37"
          },
          {
            "id": "18c6636a-aaca-4a5d-8724-04db7495402b",
            "user_id": "f1d0c186-53c1-4ca2-ac5f-cb3cc53a0675",
            "card_set_id": "b01cc294-7808-4dea-b7db-6881288ec9fc",
            "creator_id": "f1d0c186-53c1-4ca2-ac5f-cb3cc53a0675",
            "last_seen_at": "2019-11-16 00:01:09",
            "last_studied_at": "2019-11-16 00:01:09"
          },
          {
            "id": "26e5b406-8585-4004-8e6e-9c3f211438b3",
            "user_id": "f1d0c186-53c1-4ca2-ac5f-cb3cc53a0675",
            "card_set_id": "8fb396c8-10df-4330-8e28-b85187d50f38",
            "creator_id": "f1d0c186-53c1-4ca2-ac5f-cb3cc53a0675",
            "last_seen_at": "2020-02-03 02:29:51",
            "last_studied_at": "2020-02-03 02:29:51"
          },
          {
            "id": "19fbd3f5-3207-46ad-846d-82839ab55b19",
            "user_id": "f1d0c186-53c1-4ca2-ac5f-cb3cc53a0675",
            "card_set_id": "1a24d0af-eea2-4342-a578-6b31903e2d14",
            "creator_id": "f1d0c186-53c1-4ca2-ac5f-cb3cc53a0675",
            "last_seen_at": "2020-03-30 08:50:33",
            "last_studied_at": "2020-03-30 08:50:33"
          },
          {
            "id": "c2a38cd3-7c38-4a2d-a82d-48d487fd29ad",
            "user_id": "f1d0c186-53c1-4ca2-ac5f-cb3cc53a0675",
            "card_set_id": "fff0bc89-b481-42b8-8954-4ebd0e018c91",
            "creator_id": "f1d0c186-53c1-4ca2-ac5f-cb3cc53a0675",
            "last_seen_at": "2020-03-28 01:31:50",
            "last_studied_at": "2020-03-28 01:31:50"
          },
          {
            "id": "6611e233-65d9-4fda-9793-aa4017d691cf",
            "user_id": "f1d0c186-53c1-4ca2-ac5f-cb3cc53a0675",
            "card_set_id": "0a66518f-1db9-48b4-9268-7de991f773a7",
            "creator_id": "f1d0c186-53c1-4ca2-ac5f-cb3cc53a0675",
            "last_seen_at": "2020-04-01 11:39:08",
            "last_studied_at": "2020-04-01 11:39:08"
          },
          {
            "id": "a94fb8a5-3a99-45f7-a7d4-bfda010fce90",
            "user_id": "f1d0c186-53c1-4ca2-ac5f-cb3cc53a0675",
            "card_set_id": "14c9a17a-1612-419f-b5c4-7d3729f2a958",
            "creator_id": "f1d0c186-53c1-4ca2-ac5f-cb3cc53a0675",
            "last_seen_at": "2020-03-07 16:11:24",
            "last_studied_at": "2020-03-07 16:11:24"
          },
          {
            "id": "485eebe5-2cb6-431e-92c8-d45d93dea54c",
            "user_id": "f1d0c186-53c1-4ca2-ac5f-cb3cc53a0675",
            "card_set_id": "29557c3c-32ee-4010-96f7-931277dd5c90",
            "creator_id": "f1d0c186-53c1-4ca2-ac5f-cb3cc53a0675",
            "last_seen_at": "2020-02-28 20:48:01",
            "last_studied_at": "2020-02-28 20:48:01"
          },
          {
            "id": "b2b3233b-5e72-45e1-8055-c9f149e4ab24",
            "user_id": "f1d0c186-53c1-4ca2-ac5f-cb3cc53a0675",
            "card_set_id": "dae9cdea-7a9f-4259-9692-76ab6ac51e94",
            "creator_id": "f1d0c186-53c1-4ca2-ac5f-cb3cc53a0675",
            "last_seen_at": "2020-03-18 20:02:49",
            "last_studied_at": "2020-03-18 20:02:49"
          },
          {
            "id": "932b8a1e-28ce-4745-889e-cc46962b11ae",
            "user_id": "f1d0c186-53c1-4ca2-ac5f-cb3cc53a0675",
            "card_set_id": "ecad3331-5973-43eb-9ec1-754d7c5da27f",
            "creator_id": "f1d0c186-53c1-4ca2-ac5f-cb3cc53a0675",
            "last_seen_at": "2019-12-26 02:22:17",
            "last_studied_at": "2019-12-26 02:22:17"
          },
          {
            "id": "956ba19a-f417-428c-9349-5c0c09fb3531",
            "user_id": "f1d0c186-53c1-4ca2-ac5f-cb3cc53a0675",
            "card_set_id": "d7f9c54c-e76a-4d60-ba83-95aa6e926348",
            "creator_id": "f1d0c186-53c1-4ca2-ac5f-cb3cc53a0675",
            "last_seen_at": "2020-02-19 05:06:01",
            "last_studied_at": "2020-02-19 05:06:01"
          },
          {
            "id": "29a67a6b-a24d-4a1a-a0bd-716e1034bc3c",
            "user_id": "f1d0c186-53c1-4ca2-ac5f-cb3cc53a0675",
            "card_set_id": "3a441bd8-f7e5-4aff-a36f-7e4fb05c7d6d",
            "creator_id": "f1d0c186-53c1-4ca2-ac5f-cb3cc53a0675",
            "last_seen_at": "2020-04-07 14:07:52",
            "last_studied_at": "2020-04-07 14:07:52"
          },
          {
            "id": "d3d62988-b3f9-4d1f-aa98-9916aaea8b63",
            "user_id": "f1d0c186-53c1-4ca2-ac5f-cb3cc53a0675",
            "card_set_id": "000f69da-bb77-42c3-a62a-862457ef14f0",
            "creator_id": "f1d0c186-53c1-4ca2-ac5f-cb3cc53a0675",
            "last_seen_at": "2019-11-17 07:23:15",
            "last_studied_at": "2019-11-17 07:23:15"
          },
          {
            "id": "8e9e31f9-a400-411b-aacc-c4519f9b342c",
            "user_id": "f1d0c186-53c1-4ca2-ac5f-cb3cc53a0675",
            "card_set_id": "d503203b-ef15-48e5-940c-150cea8bff50",
            "creator_id": "f1d0c186-53c1-4ca2-ac5f-cb3cc53a0675",
            "last_seen_at": "2019-11-28 14:33:43",
            "last_studied_at": "2019-11-28 14:33:43"
          },
          {
            "id": "11de7798-4b3e-4654-b5cf-287829931398",
            "user_id": "f1d0c186-53c1-4ca2-ac5f-cb3cc53a0675",
            "card_set_id": "dbae01a0-b0dc-42a5-a2d0-e20773389766",
            "creator_id": "f1d0c186-53c1-4ca2-ac5f-cb3cc53a0675",
            "last_seen_at": "2019-11-22 23:11:24",
            "last_studied_at": "2019-11-22 23:11:24"
          },
          {
            "id": "a7e7d5d8-8545-4791-b304-3e8a00ff3d47",
            "user_id": "f1d0c186-53c1-4ca2-ac5f-cb3cc53a0675",
            "card_set_id": "5b14b96a-8853-4e02-87a6-9ab896064362",
            "creator_id": "f1d0c186-53c1-4ca2-ac5f-cb3cc53a0675",
            "last_seen_at": "2020-03-29 09:42:33",
            "last_studied_at": "2020-03-29 09:42:33"
          },
          {
            "id": "865ca5bc-a03f-4eb5-94ce-2a854e8efb46",
            "user_id": "f1d0c186-53c1-4ca2-ac5f-cb3cc53a0675",
            "card_set_id": "ccfe966d-6209-4b42-8598-494177280d52",
            "creator_id": "f1d0c186-53c1-4ca2-ac5f-cb3cc53a0675",
            "last_seen_at": "2020-01-03 01:57:23",
            "last_studied_at": "2020-01-03 01:57:23"
          },
          {
            "id": "4f34faff-f644-43a9-b72f-f5de922758bc",
            "user_id": "f1d0c186-53c1-4ca2-ac5f-cb3cc53a0675",
            "card_set_id": "0155ba12-9f12-4e5c-bd2c-dc2f4c489310",
            "creator_id": "f1d0c186-53c1-4ca2-ac5f-cb3cc53a0675",
            "last_seen_at": "2020-04-02 06:02:19",
            "last_studied_at": "2020-04-02 06:02:19"
          },
          {
            "id": "60b829ae-76cc-4b19-8dc9-5ee51317df2c",
            "user_id": "f1d0c186-53c1-4ca2-ac5f-cb3cc53a0675",
            "card_set_id": "95148686-19e1-4738-9e0e-81bd6c057918",
            "creator_id": "f1d0c186-53c1-4ca2-ac5f-cb3cc53a0675",
            "last_seen_at": "2020-03-23 00:39:20",
            "last_studied_at": "2020-03-23 00:39:20"
          },
          {
            "id": "09946a13-f145-4c2b-b3a2-02326ac62619",
            "user_id": "f1d0c186-53c1-4ca2-ac5f-cb3cc53a0675",
            "card_set_id": "e565f397-079a-4f1a-8daa-179cefff3a7c",
            "creator_id": "f1d0c186-53c1-4ca2-ac5f-cb3cc53a0675",
            "last_seen_at": "2019-12-17 08:24:25",
            "last_studied_at": "2019-12-17 08:24:25"
          },
          {
            "id": "1d43de03-f292-4038-a4ff-24fc260bd027",
            "user_id": "f1d0c186-53c1-4ca2-ac5f-cb3cc53a0675",
            "card_set_id": "fdfc52b5-e6be-4fc0-8641-286d51e05b61",
            "creator_id": "f1d0c186-53c1-4ca2-ac5f-cb3cc53a0675",
            "last_seen_at": "2020-04-14 21:27:49",
            "last_studied_at": "2020-04-14 21:27:49"
          },
          {
            "id": "ed95d846-7a8f-4486-be26-04fb3382291f",
            "user_id": "f1d0c186-53c1-4ca2-ac5f-cb3cc53a0675",
            "card_set_id": "64032003-ded8-4971-8407-8f32e50ed735",
            "creator_id": "f1d0c186-53c1-4ca2-ac5f-cb3cc53a0675",
            "last_seen_at": "2020-01-31 18:59:43",
            "last_studied_at": "2020-01-31 18:59:43"
          },
          {
            "id": "66dc970a-ee4e-4d6d-80ff-47839813604f",
            "user_id": "f1d0c186-53c1-4ca2-ac5f-cb3cc53a0675",
            "card_set_id": "c23b1e4b-f18b-4866-897c-b4578dbfe113",
            "creator_id": "f1d0c186-53c1-4ca2-ac5f-cb3cc53a0675",
            "last_seen_at": "2019-10-30 04:59:25",
            "last_studied_at": "2019-10-30 04:59:25"
          },
          {
            "id": "b22bb9c2-fa01-4e4d-821c-f6725c988638",
            "user_id": "f1d0c186-53c1-4ca2-ac5f-cb3cc53a0675",
            "card_set_id": "9d1dfe13-f410-43a6-8a35-aaab231c77b7",
            "creator_id": "f1d0c186-53c1-4ca2-ac5f-cb3cc53a0675",
            "last_seen_at": "2019-10-27 00:02:37",
            "last_studied_at": "2019-10-27 00:02:37"
          },
          {
            "id": "f44929b5-e4cc-499a-bfdb-31678d353d1c",
            "user_id": "f1d0c186-53c1-4ca2-ac5f-cb3cc53a0675",
            "card_set_id": "5247e3ae-ca6c-4a7c-be42-d0ab62886153",
            "creator_id": "f1d0c186-53c1-4ca2-ac5f-cb3cc53a0675",
            "last_seen_at": "2020-04-13 04:51:34",
            "last_studied_at": "2020-04-13 04:51:34"
          },
          {
            "id": "e81c8abf-1d32-4048-ae24-9459ee31bf9d",
            "user_id": "f1d0c186-53c1-4ca2-ac5f-cb3cc53a0675",
            "card_set_id": "458f123c-7ee5-42b1-a2a9-f573909f2e0d",
            "creator_id": "f1d0c186-53c1-4ca2-ac5f-cb3cc53a0675",
            "last_seen_at": "2020-01-21 17:24:58",
            "last_studied_at": "2020-01-21 17:24:58"
          },
          {
            "id": "a8354f58-b56f-453a-9969-c57caa7f335e",
            "user_id": "f1d0c186-53c1-4ca2-ac5f-cb3cc53a0675",
            "card_set_id": "f8058ecd-ed42-4763-a51f-1c545b118a93",
            "creator_id": "f1d0c186-53c1-4ca2-ac5f-cb3cc53a0675",
            "last_seen_at": "2020-01-11 19:05:16",
            "last_studied_at": "2020-01-11 19:05:16"
          },
          {
            "id": "b93f46b0-6cde-4486-aebd-97af16a00439",
            "user_id": "f1d0c186-53c1-4ca2-ac5f-cb3cc53a0675",
            "card_set_id": "f8b7aa0b-caa2-4627-af8b-65519728e99a",
            "creator_id": "f1d0c186-53c1-4ca2-ac5f-cb3cc53a0675",
            "last_seen_at": "2020-03-03 14:18:03",
            "last_studied_at": "2020-03-03 14:18:03"
          },
          {
            "id": "bfe41c47-ccf9-4013-a19a-39c743ae19a9",
            "user_id": "f1d0c186-53c1-4ca2-ac5f-cb3cc53a0675",
            "card_set_id": "7afa9647-de8b-4eea-8ed9-79837ee70e65",
            "creator_id": "f1d0c186-53c1-4ca2-ac5f-cb3cc53a0675",
            "last_seen_at": "2019-11-06 10:10:38",
            "last_studied_at": "2019-11-06 10:10:38"
          },
          {
            "id": "a9a02817-f348-4ca1-b4d2-c6914198c58e",
            "user_id": "f1d0c186-53c1-4ca2-ac5f-cb3cc53a0675",
            "card_set_id": "b8802d38-c984-47b3-bd03-aeb209fb0f50",
            "creator_id": "f1d0c186-53c1-4ca2-ac5f-cb3cc53a0675",
            "last_seen_at": "2019-10-13 16:18:16",
            "last_studied_at": "2019-10-13 16:18:16"
          },
          {
            "id": "726e8524-5fd6-4e81-8624-698a02e81663",
            "user_id": "f1d0c186-53c1-4ca2-ac5f-cb3cc53a0675",
            "card_set_id": "dc845a10-b45a-4a0d-8277-b3f9261e10be",
            "creator_id": "f1d0c186-53c1-4ca2-ac5f-cb3cc53a0675",
            "last_seen_at": "2020-04-14 03:01:06",
            "last_studied_at": "2020-04-14 03:01:06"
          },
          {
            "id": "1ff2d312-4903-43af-a476-dce2f72f21b9",
            "user_id": "f1d0c186-53c1-4ca2-ac5f-cb3cc53a0675",
            "card_set_id": "88a839ee-47fa-4c29-a383-1ec3e319f7ff",
            "creator_id": "f1d0c186-53c1-4ca2-ac5f-cb3cc53a0675",
            "last_seen_at": "2020-02-24 07:12:31",
            "last_studied_at": "2020-02-24 07:12:31"
          },
          {
            "id": "56fa5fd7-492a-45c5-a465-8b94ea5d0540",
            "user_id": "f1d0c186-53c1-4ca2-ac5f-cb3cc53a0675",
            "card_set_id": "373b3a4f-fab1-4785-b334-b13b7739de0c",
            "creator_id": "f1d0c186-53c1-4ca2-ac5f-cb3cc53a0675",
            "last_seen_at": "2020-03-25 20:59:00",
            "last_studied_at": "2020-03-25 20:59:00"
          },
          {
            "id": "e4350dd7-65b9-4c2e-9f31-6c24d36b7be9",
            "user_id": "f1d0c186-53c1-4ca2-ac5f-cb3cc53a0675",
            "card_set_id": "c31487f4-ff81-4aed-9719-0055dd47c9b9",
            "creator_id": "f1d0c186-53c1-4ca2-ac5f-cb3cc53a0675",
            "last_seen_at": "2020-02-16 00:02:44",
            "last_studied_at": "2020-02-16 00:02:44"
          },
          {
            "id": "c6ceed2e-b370-4962-83ea-44a2757a0300",
            "user_id": "f1d0c186-53c1-4ca2-ac5f-cb3cc53a0675",
            "card_set_id": "dafb154d-f44b-4eb3-9f58-f6c96f47fbac",
            "creator_id": "f1d0c186-53c1-4ca2-ac5f-cb3cc53a0675",
            "last_seen_at": "2020-01-15 10:57:05",
            "last_studied_at": "2020-01-15 10:57:05"
          },
          {
            "id": "43d31e62-55ed-4dd1-8f53-b95527cb33f4",
            "user_id": "c360da6a-31cb-4823-8951-abebab0990ed",
            "card_set_id": "27fc9698-fcc9-428f-8416-4ff137163ceb",
            "creator_id": "c360da6a-31cb-4823-8951-abebab0990ed",
            "last_seen_at": "2020-01-31 17:38:13",
            "last_studied_at": "2020-01-31 17:38:13"
          },
          {
            "id": "998fe1dd-eb30-46a7-80b2-a6f092665cac",
            "user_id": "c360da6a-31cb-4823-8951-abebab0990ed",
            "card_set_id": "872b7400-2719-4d85-a5c3-b8ed92898ab2",
            "creator_id": "c360da6a-31cb-4823-8951-abebab0990ed",
            "last_seen_at": "2020-04-05 10:01:29",
            "last_studied_at": "2020-04-05 10:01:29"
          },
          {
            "id": "9ef548b8-0cae-4e99-b2cb-50dd5dbcee4b",
            "user_id": "c360da6a-31cb-4823-8951-abebab0990ed",
            "card_set_id": "7498c985-a6c2-4984-bc78-b8544ffca064",
            "creator_id": "c360da6a-31cb-4823-8951-abebab0990ed",
            "last_seen_at": "2020-01-16 21:32:55",
            "last_studied_at": "2020-01-16 21:32:55"
          },
          {
            "id": "77e7a393-261b-4980-b962-f7e25feadd14",
            "user_id": "c360da6a-31cb-4823-8951-abebab0990ed",
            "card_set_id": "d9227e81-f44c-4001-82f9-34240ddaca4b",
            "creator_id": "c360da6a-31cb-4823-8951-abebab0990ed",
            "last_seen_at": "2020-01-22 21:24:09",
            "last_studied_at": "2020-01-22 21:24:09"
          },
          {
            "id": "36a01b40-4107-4047-916b-a8cd5c1d31c7",
            "user_id": "c360da6a-31cb-4823-8951-abebab0990ed",
            "card_set_id": "6f0182d0-3263-4bec-a4c8-a8798e12c047",
            "creator_id": "c360da6a-31cb-4823-8951-abebab0990ed",
            "last_seen_at": "2019-12-04 08:57:17",
            "last_studied_at": "2019-12-04 08:57:17"
          },
          {
            "id": "1cba47e9-9e26-4e14-bb4f-2fd52ebbe06c",
            "user_id": "c360da6a-31cb-4823-8951-abebab0990ed",
            "card_set_id": "7851e237-f6d4-4b61-8fc7-f2f28d0fe5bd",
            "creator_id": "c360da6a-31cb-4823-8951-abebab0990ed",
            "last_seen_at": "2020-02-10 12:35:18",
            "last_studied_at": "2020-02-10 12:35:18"
          },
          {
            "id": "2a5165f5-2a4d-4e25-99e9-dd930dbf9be4",
            "user_id": "c360da6a-31cb-4823-8951-abebab0990ed",
            "card_set_id": "42112967-8354-4f51-acbe-81b3cd15f8ce",
            "creator_id": "c360da6a-31cb-4823-8951-abebab0990ed",
            "last_seen_at": "2019-12-24 02:27:16",
            "last_studied_at": "2019-12-24 02:27:16"
          },
          {
            "id": "4e41cdc1-50ba-4a17-92ce-51aa5fd48960",
            "user_id": "c360da6a-31cb-4823-8951-abebab0990ed",
            "card_set_id": "7d2a6587-ca63-4ee9-83b8-df0dbfacec58",
            "creator_id": "c360da6a-31cb-4823-8951-abebab0990ed",
            "last_seen_at": "2019-10-25 02:45:41",
            "last_studied_at": "2019-10-25 02:45:41"
          },
          {
            "id": "bb4efa73-559b-43dc-b405-de4d2dd4d74c",
            "user_id": "c360da6a-31cb-4823-8951-abebab0990ed",
            "card_set_id": "4d22ea3a-caea-450b-baf4-94396518e4b2",
            "creator_id": "c360da6a-31cb-4823-8951-abebab0990ed",
            "last_seen_at": "2020-01-04 19:48:49",
            "last_studied_at": "2020-01-04 19:48:49"
          },
          {
            "id": "9197203e-b70d-42f7-830a-a772751017cc",
            "user_id": "c360da6a-31cb-4823-8951-abebab0990ed",
            "card_set_id": "b7d19fc9-628b-4614-8019-fac834168aa5",
            "creator_id": "c360da6a-31cb-4823-8951-abebab0990ed",
            "last_seen_at": "2019-10-08 04:12:41",
            "last_studied_at": "2019-10-08 04:12:41"
          },
          {
            "id": "0e4e5414-1cfa-48b7-a476-0c18467d0030",
            "user_id": "c360da6a-31cb-4823-8951-abebab0990ed",
            "card_set_id": "507cfab2-0cf2-416d-b2ae-3e516332e219",
            "creator_id": "c360da6a-31cb-4823-8951-abebab0990ed",
            "last_seen_at": "2019-12-18 05:02:20",
            "last_studied_at": "2019-12-18 05:02:20"
          },
          {
            "id": "1168ee5a-d464-415e-847f-1add1c31a11f",
            "user_id": "c360da6a-31cb-4823-8951-abebab0990ed",
            "card_set_id": "844bd655-5bf6-423a-8185-078eff40c62c",
            "creator_id": "c360da6a-31cb-4823-8951-abebab0990ed",
            "last_seen_at": "2020-01-17 16:33:54",
            "last_studied_at": "2020-01-17 16:33:54"
          },
          {
            "id": "94947a2e-908b-4f10-89ec-7cb37400ce87",
            "user_id": "c360da6a-31cb-4823-8951-abebab0990ed",
            "card_set_id": "39280041-27cf-46c7-9f48-2192b0f0c615",
            "creator_id": "c360da6a-31cb-4823-8951-abebab0990ed",
            "last_seen_at": "2019-11-18 10:01:26",
            "last_studied_at": "2019-11-18 10:01:26"
          },
          {
            "id": "18e99006-06cd-4deb-925c-843271729347",
            "user_id": "c360da6a-31cb-4823-8951-abebab0990ed",
            "card_set_id": "317af8d3-a922-469d-8a03-2a31f7ccda52",
            "creator_id": "c360da6a-31cb-4823-8951-abebab0990ed",
            "last_seen_at": "2019-11-11 22:07:23",
            "last_studied_at": "2019-11-11 22:07:23"
          },
          {
            "id": "71075fd1-9b5f-4dbf-99c2-1b22f45221ba",
            "user_id": "c360da6a-31cb-4823-8951-abebab0990ed",
            "card_set_id": "360a39eb-1ac4-45ef-ba93-4e380dff8393",
            "creator_id": "c360da6a-31cb-4823-8951-abebab0990ed",
            "last_seen_at": "2019-11-27 04:21:55",
            "last_studied_at": "2019-11-27 04:21:55"
          },
          {
            "id": "395c9114-bbb0-4a2b-80e1-c8fc6f9b0b64",
            "user_id": "c360da6a-31cb-4823-8951-abebab0990ed",
            "card_set_id": "2615c103-9bf2-480f-9750-003d0164e31b",
            "creator_id": "c360da6a-31cb-4823-8951-abebab0990ed",
            "last_seen_at": "2019-12-06 07:23:01",
            "last_studied_at": "2019-12-06 07:23:01"
          },
          {
            "id": "ccdc38ee-2dd3-41bb-aca7-03f084a2f685",
            "user_id": "c360da6a-31cb-4823-8951-abebab0990ed",
            "card_set_id": "7a562839-4a60-48e0-aa40-7ef000c4bc2f",
            "creator_id": "c360da6a-31cb-4823-8951-abebab0990ed",
            "last_seen_at": "2019-11-22 06:11:41",
            "last_studied_at": "2019-11-22 06:11:41"
          },
          {
            "id": "d44213a0-d7d2-4561-9bc9-4a2a5de644b3",
            "user_id": "c360da6a-31cb-4823-8951-abebab0990ed",
            "card_set_id": "2566f62f-340f-40e7-884f-d3e23c716bea",
            "creator_id": "c360da6a-31cb-4823-8951-abebab0990ed",
            "last_seen_at": "2019-11-28 00:52:43",
            "last_studied_at": "2019-11-28 00:52:43"
          },
          {
            "id": "1d885983-f6d2-400f-bb13-c79d4e670a69",
            "user_id": "c360da6a-31cb-4823-8951-abebab0990ed",
            "card_set_id": "9139115f-4e3e-4ad6-a342-065270613438",
            "creator_id": "c360da6a-31cb-4823-8951-abebab0990ed",
            "last_seen_at": "2020-02-26 05:11:33",
            "last_studied_at": "2020-02-26 05:11:33"
          },
          {
            "id": "9b16581d-2375-4509-9c21-83ea7b6073c4",
            "user_id": "c360da6a-31cb-4823-8951-abebab0990ed",
            "card_set_id": "12b18887-6a52-49a5-be63-cb085634405b",
            "creator_id": "c360da6a-31cb-4823-8951-abebab0990ed",
            "last_seen_at": "2020-04-16 00:32:27",
            "last_studied_at": "2020-04-16 00:32:27"
          },
          {
            "id": "9b2069fd-e85f-4dee-8c02-423de39358f1",
            "user_id": "c360da6a-31cb-4823-8951-abebab0990ed",
            "card_set_id": "1162c551-ed7e-47c5-b0ba-fb16ff9a6f9e",
            "creator_id": "c360da6a-31cb-4823-8951-abebab0990ed",
            "last_seen_at": "2020-02-21 21:25:08",
            "last_studied_at": "2020-02-21 21:25:08"
          },
          {
            "id": "817d6c4e-7cf6-4034-9008-00c78cb75c39",
            "user_id": "c360da6a-31cb-4823-8951-abebab0990ed",
            "card_set_id": "783414ec-8380-4e7f-b9c0-e2a4cdf6b7cc",
            "creator_id": "c360da6a-31cb-4823-8951-abebab0990ed",
            "last_seen_at": "2019-12-16 20:23:31",
            "last_studied_at": "2019-12-16 20:23:31"
          },
          {
            "id": "956bae26-0706-4b98-a1d0-0c493eaf8cc7",
            "user_id": "c360da6a-31cb-4823-8951-abebab0990ed",
            "card_set_id": "ae229380-a5b1-4bf0-8f83-beee554fc09f",
            "creator_id": "c360da6a-31cb-4823-8951-abebab0990ed",
            "last_seen_at": "2020-01-04 22:30:13",
            "last_studied_at": "2020-01-04 22:30:13"
          },
          {
            "id": "4ad160a3-ac10-4b87-ae64-3aff6d59fb24",
            "user_id": "c360da6a-31cb-4823-8951-abebab0990ed",
            "card_set_id": "f9ee7ff0-797e-44bb-a97c-d2c440b7062f",
            "creator_id": "c360da6a-31cb-4823-8951-abebab0990ed",
            "last_seen_at": "2019-11-07 04:41:27",
            "last_studied_at": "2019-11-07 04:41:27"
          },
          {
            "id": "3699f6bd-ce0f-474e-bf9e-d9556c0cebc9",
            "user_id": "c360da6a-31cb-4823-8951-abebab0990ed",
            "card_set_id": "b4224956-1277-424f-b80a-b10d8ef832b1",
            "creator_id": "c360da6a-31cb-4823-8951-abebab0990ed",
            "last_seen_at": "2019-12-09 21:52:46",
            "last_studied_at": "2019-12-09 21:52:46"
          },
          {
            "id": "bd4035b6-66d3-4955-9f07-7d2100d02d65",
            "user_id": "c360da6a-31cb-4823-8951-abebab0990ed",
            "card_set_id": "fe9721c9-8015-4827-93a7-a6e55021c22c",
            "creator_id": "c360da6a-31cb-4823-8951-abebab0990ed",
            "last_seen_at": "2019-11-10 13:19:42",
            "last_studied_at": "2019-11-10 13:19:42"
          },
          {
            "id": "60774893-07ee-4b0f-af6d-da2a10b07d57",
            "user_id": "c360da6a-31cb-4823-8951-abebab0990ed",
            "card_set_id": "b4679c33-447c-481d-a857-3c1028f1b4a9",
            "creator_id": "c360da6a-31cb-4823-8951-abebab0990ed",
            "last_seen_at": "2020-03-16 20:50:45",
            "last_studied_at": "2020-03-16 20:50:45"
          },
          {
            "id": "b0c94228-a117-4902-b7e3-1eb3afcab8d1",
            "user_id": "c360da6a-31cb-4823-8951-abebab0990ed",
            "card_set_id": "e2a8eec9-4b91-4680-871c-0e430ed6aada",
            "creator_id": "c360da6a-31cb-4823-8951-abebab0990ed",
            "last_seen_at": "2019-11-21 14:43:07",
            "last_studied_at": "2019-11-21 14:43:07"
          },
          {
            "id": "ed70dd90-65c2-41c0-b8d3-6a774c277f53",
            "user_id": "c360da6a-31cb-4823-8951-abebab0990ed",
            "card_set_id": "6515a36f-5d36-47cf-863b-f9d9564432dd",
            "creator_id": "c360da6a-31cb-4823-8951-abebab0990ed",
            "last_seen_at": "2019-10-09 06:48:45",
            "last_studied_at": "2019-10-09 06:48:45"
          },
          {
            "id": "c5035e13-5293-4392-97e2-6bd184862433",
            "user_id": "c360da6a-31cb-4823-8951-abebab0990ed",
            "card_set_id": "35f82b97-22fb-4821-8fbe-5e0856c315b1",
            "creator_id": "c360da6a-31cb-4823-8951-abebab0990ed",
            "last_seen_at": "2020-02-08 11:42:54",
            "last_studied_at": "2020-02-08 11:42:54"
          },
          {
            "id": "e816ab8f-6abb-4115-827f-5023d8088ced",
            "user_id": "c360da6a-31cb-4823-8951-abebab0990ed",
            "card_set_id": "f728fcd8-e980-47f0-b6ca-ce50e899026c",
            "creator_id": "c360da6a-31cb-4823-8951-abebab0990ed",
            "last_seen_at": "2019-12-02 07:52:37",
            "last_studied_at": "2019-12-02 07:52:37"
          },
          {
            "id": "1e5cb80d-eed1-4c59-9abf-d9d18124a3c9",
            "user_id": "c360da6a-31cb-4823-8951-abebab0990ed",
            "card_set_id": "6d77d403-4857-4192-ad87-f937b0335cfc",
            "creator_id": "c360da6a-31cb-4823-8951-abebab0990ed",
            "last_seen_at": "2020-04-19 16:03:49",
            "last_studied_at": "2020-04-19 16:03:49"
          },
          {
            "id": "91853af0-f847-4ad1-963c-4aa1e1bfb5b0",
            "user_id": "c360da6a-31cb-4823-8951-abebab0990ed",
            "card_set_id": "d07e4099-4865-4dce-b7c2-a33b9ad3c9bb",
            "creator_id": "c360da6a-31cb-4823-8951-abebab0990ed",
            "last_seen_at": "2020-02-04 10:20:30",
            "last_studied_at": "2020-02-04 10:20:30"
          },
          {
            "id": "2d616b78-d5b5-4a10-86f5-90f790135f7b",
            "user_id": "c360da6a-31cb-4823-8951-abebab0990ed",
            "card_set_id": "324c97db-7b3f-426e-a4e5-9bb1c3195621",
            "creator_id": "c360da6a-31cb-4823-8951-abebab0990ed",
            "last_seen_at": "2020-02-08 18:29:06",
            "last_studied_at": "2020-02-08 18:29:06"
          },
          {
            "id": "33637060-1554-4772-927b-cc1a43122448",
            "user_id": "c360da6a-31cb-4823-8951-abebab0990ed",
            "card_set_id": "a01e2538-4a32-44a3-8b53-2027e67c2853",
            "creator_id": "c360da6a-31cb-4823-8951-abebab0990ed",
            "last_seen_at": "2019-11-03 20:22:57",
            "last_studied_at": "2019-11-03 20:22:57"
          },
          {
            "id": "970ab48d-174d-44a1-9025-99d8dae60a4d",
            "user_id": "c360da6a-31cb-4823-8951-abebab0990ed",
            "card_set_id": "ac06c11d-80cd-4ac2-82bd-26049d0d5751",
            "creator_id": "c360da6a-31cb-4823-8951-abebab0990ed",
            "last_seen_at": "2020-03-14 11:48:57",
            "last_studied_at": "2020-03-14 11:48:57"
          },
          {
            "id": "2bf7e2d8-88cc-4eaa-b50a-f0821ccc3d9d",
            "user_id": "c360da6a-31cb-4823-8951-abebab0990ed",
            "card_set_id": "de769d98-85be-4936-9014-f2ce8b4be327",
            "creator_id": "c360da6a-31cb-4823-8951-abebab0990ed",
            "last_seen_at": "2019-12-27 08:20:44",
            "last_studied_at": "2019-12-27 08:20:44"
          },
          {
            "id": "35b16cbc-fd55-45d5-900a-88b8fe72a72d",
            "user_id": "c360da6a-31cb-4823-8951-abebab0990ed",
            "card_set_id": "6f996c73-9e5e-4fda-b4b1-c68a8328e362",
            "creator_id": "c360da6a-31cb-4823-8951-abebab0990ed",
            "last_seen_at": "2019-12-05 21:26:24",
            "last_studied_at": "2019-12-05 21:26:24"
          },
          {
            "id": "f29c14b5-a2e1-49e3-b163-7dbd9a815544",
            "user_id": "c360da6a-31cb-4823-8951-abebab0990ed",
            "card_set_id": "770e48cb-2514-4b30-b8a9-8159362ff4bb",
            "creator_id": "c360da6a-31cb-4823-8951-abebab0990ed",
            "last_seen_at": "2019-12-03 21:26:11",
            "last_studied_at": "2019-12-03 21:26:11"
          },
          {
            "id": "3af9c25b-c484-450e-abc5-6abe5f653e16",
            "user_id": "c360da6a-31cb-4823-8951-abebab0990ed",
            "card_set_id": "8d878d9a-8de6-4d16-a3b5-67d9a9f8e20a",
            "creator_id": "c360da6a-31cb-4823-8951-abebab0990ed",
            "last_seen_at": "2019-10-21 10:41:40",
            "last_studied_at": "2019-10-21 10:41:40"
          },
          {
            "id": "9f4e038a-287e-43d4-81b3-ae6dedf044ec",
            "user_id": "c360da6a-31cb-4823-8951-abebab0990ed",
            "card_set_id": "681523f2-186e-49bb-8752-a83f048df37e",
            "creator_id": "c360da6a-31cb-4823-8951-abebab0990ed",
            "last_seen_at": "2020-01-02 07:28:40",
            "last_studied_at": "2020-01-02 07:28:40"
          },
          {
            "id": "ff6b5ff9-19a7-4db3-a14a-706f3db849e5",
            "user_id": "c360da6a-31cb-4823-8951-abebab0990ed",
            "card_set_id": "c7b86181-12c6-407a-a97d-fb33af51a561",
            "creator_id": "c360da6a-31cb-4823-8951-abebab0990ed",
            "last_seen_at": "2020-01-12 21:21:29",
            "last_studied_at": "2020-01-12 21:21:29"
          },
          {
            "id": "6287165c-3d5d-455c-b116-55d3241b630d",
            "user_id": "c360da6a-31cb-4823-8951-abebab0990ed",
            "card_set_id": "f355339d-b073-4506-9c14-87788c75e138",
            "creator_id": "c360da6a-31cb-4823-8951-abebab0990ed",
            "last_seen_at": "2019-10-17 21:01:10",
            "last_studied_at": "2019-10-17 21:01:10"
          },
          {
            "id": "256f74e3-0d14-4b4d-8620-9cace96d57f5",
            "user_id": "c360da6a-31cb-4823-8951-abebab0990ed",
            "card_set_id": "700b3d9e-89b0-429e-8025-693bac546f0e",
            "creator_id": "c360da6a-31cb-4823-8951-abebab0990ed",
            "last_seen_at": "2020-01-24 10:19:13",
            "last_studied_at": "2020-01-24 10:19:13"
          },
          {
            "id": "99efa21a-6572-4733-9a28-f68deb30a233",
            "user_id": "c360da6a-31cb-4823-8951-abebab0990ed",
            "card_set_id": "cc3ec654-c074-4433-a919-fb99e88bba70",
            "creator_id": "c360da6a-31cb-4823-8951-abebab0990ed",
            "last_seen_at": "2019-10-24 07:50:47",
            "last_studied_at": "2019-10-24 07:50:47"
          },
          {
            "id": "b054f081-1e9f-421b-b25e-267226a16b3a",
            "user_id": "c360da6a-31cb-4823-8951-abebab0990ed",
            "card_set_id": "7e20d806-6e7c-415b-b79f-c56aa0fb9607",
            "creator_id": "c360da6a-31cb-4823-8951-abebab0990ed",
            "last_seen_at": "2020-03-16 05:01:05",
            "last_studied_at": "2020-03-16 05:01:05"
          },
          {
            "id": "ee7eb912-8e66-404f-ab78-83121daab4a9",
            "user_id": "c360da6a-31cb-4823-8951-abebab0990ed",
            "card_set_id": "e657152e-969e-493a-a4c8-1075d153ea95",
            "creator_id": "c360da6a-31cb-4823-8951-abebab0990ed",
            "last_seen_at": "2019-11-04 15:13:43",
            "last_studied_at": "2019-11-04 15:13:43"
          },
          {
            "id": "8f63494a-db8d-45b6-8b96-0194c2a1ebe5",
            "user_id": "c360da6a-31cb-4823-8951-abebab0990ed",
            "card_set_id": "600185a7-83fb-4629-8ee2-b0f6e54c3110",
            "creator_id": "c360da6a-31cb-4823-8951-abebab0990ed",
            "last_seen_at": "2019-11-06 08:42:36",
            "last_studied_at": "2019-11-06 08:42:36"
          },
          {
            "id": "3692fd85-e513-4302-93aa-c9ebc421f5d0",
            "user_id": "c360da6a-31cb-4823-8951-abebab0990ed",
            "card_set_id": "a664931f-0394-4f5d-b32f-86c00f5e73cb",
            "creator_id": "c360da6a-31cb-4823-8951-abebab0990ed",
            "last_seen_at": "2020-01-13 09:33:15",
            "last_studied_at": "2020-01-13 09:33:15"
          },
          {
            "id": "f475269c-c4ef-40d5-bdf4-5e52e0c7ec34",
            "user_id": "c360da6a-31cb-4823-8951-abebab0990ed",
            "card_set_id": "c54c2593-2eda-4096-9584-34fe804644cd",
            "creator_id": "c360da6a-31cb-4823-8951-abebab0990ed",
            "last_seen_at": "2019-12-14 21:51:28",
            "last_studied_at": "2019-12-14 21:51:28"
          },
          {
            "id": "2d9536d2-e66d-42ec-8cd2-7f44284aac50",
            "user_id": "c360da6a-31cb-4823-8951-abebab0990ed",
            "card_set_id": "8f063a08-3539-4a58-ba3c-fa97a2f96b74",
            "creator_id": "c360da6a-31cb-4823-8951-abebab0990ed",
            "last_seen_at": "2020-04-12 13:22:12",
            "last_studied_at": "2020-04-12 13:22:12"
          },
          {
            "id": "566986cb-946f-4836-a074-002814945051",
            "user_id": "c360da6a-31cb-4823-8951-abebab0990ed",
            "card_set_id": "a80ddc4b-e851-49b3-bab3-1eac3220b56a",
            "creator_id": "c360da6a-31cb-4823-8951-abebab0990ed",
            "last_seen_at": "2020-03-23 06:21:40",
            "last_studied_at": "2020-03-23 06:21:40"
          },
          {
            "id": "a8565cc3-21d8-432f-8f26-ea9dc0d755a1",
            "user_id": "c360da6a-31cb-4823-8951-abebab0990ed",
            "card_set_id": "e8231c70-be5d-4a50-90d0-52749aa517cb",
            "creator_id": "c360da6a-31cb-4823-8951-abebab0990ed",
            "last_seen_at": "2019-11-03 04:49:44",
            "last_studied_at": "2019-11-03 04:49:44"
          },
          {
            "id": "66f3bd81-475f-4e35-a6f3-83aa4c5a40ed",
            "user_id": "c360da6a-31cb-4823-8951-abebab0990ed",
            "card_set_id": "ca123fed-e355-4663-95ca-7cb640a08f8c",
            "creator_id": "c360da6a-31cb-4823-8951-abebab0990ed",
            "last_seen_at": "2019-11-11 08:56:03",
            "last_studied_at": "2019-11-11 08:56:03"
          },
          {
            "id": "524d6885-b2a0-44a1-98c9-da69505bfd76",
            "user_id": "c360da6a-31cb-4823-8951-abebab0990ed",
            "card_set_id": "f2bc9c8a-bfab-46cf-a4dc-51fdf92d7043",
            "creator_id": "c360da6a-31cb-4823-8951-abebab0990ed",
            "last_seen_at": "2020-01-12 12:57:54",
            "last_studied_at": "2020-01-12 12:57:54"
          },
          {
            "id": "36f18c23-593c-4d56-869d-568036c24a5c",
            "user_id": "c360da6a-31cb-4823-8951-abebab0990ed",
            "card_set_id": "def51252-a5de-4c0b-9122-1f6a1d4de802",
            "creator_id": "c360da6a-31cb-4823-8951-abebab0990ed",
            "last_seen_at": "2020-01-16 03:33:38",
            "last_studied_at": "2020-01-16 03:33:38"
          },
          {
            "id": "fe8a5c38-5e18-46db-901f-18b48b4f4122",
            "user_id": "c360da6a-31cb-4823-8951-abebab0990ed",
            "card_set_id": "5ab7c195-057c-4539-9e33-b8a9d7140274",
            "creator_id": "c360da6a-31cb-4823-8951-abebab0990ed",
            "last_seen_at": "2019-12-05 15:44:27",
            "last_studied_at": "2019-12-05 15:44:27"
          },
          {
            "id": "b96fd199-f6e1-483f-b8eb-034b3a8f74c5",
            "user_id": "c360da6a-31cb-4823-8951-abebab0990ed",
            "card_set_id": "67d4e007-9251-4982-9de4-34cc1ea4fc00",
            "creator_id": "c360da6a-31cb-4823-8951-abebab0990ed",
            "last_seen_at": "2020-02-08 16:33:12",
            "last_studied_at": "2020-02-08 16:33:12"
          },
          {
            "id": "e90426b9-2617-4d1e-a3f2-9c3fb7836261",
            "user_id": "c360da6a-31cb-4823-8951-abebab0990ed",
            "card_set_id": "3d42b26c-6c54-4dc2-898f-6c17be10be3a",
            "creator_id": "c360da6a-31cb-4823-8951-abebab0990ed",
            "last_seen_at": "2019-12-02 19:16:38",
            "last_studied_at": "2019-12-02 19:16:38"
          },
          {
            "id": "f015ce52-98db-4d60-981f-2001ba439313",
            "user_id": "c360da6a-31cb-4823-8951-abebab0990ed",
            "card_set_id": "a85586da-792d-4d51-9403-9a5a2c3d067f",
            "creator_id": "c360da6a-31cb-4823-8951-abebab0990ed",
            "last_seen_at": "2020-04-14 17:00:31",
            "last_studied_at": "2020-04-14 17:00:31"
          },
          {
            "id": "80223c5f-4ea0-4d0b-88a5-cf8da6a8d83c",
            "user_id": "c360da6a-31cb-4823-8951-abebab0990ed",
            "card_set_id": "7a8c93b9-9b19-4289-b8e3-b3b589cfa4d8",
            "creator_id": "c360da6a-31cb-4823-8951-abebab0990ed",
            "last_seen_at": "2020-03-23 09:59:15",
            "last_studied_at": "2020-03-23 09:59:15"
          },
          {
            "id": "ff4b62bd-15ed-415b-b68e-05cb202c761b",
            "user_id": "c360da6a-31cb-4823-8951-abebab0990ed",
            "card_set_id": "6c52fa24-3ea2-488a-93e3-9fc49c23eb13",
            "creator_id": "c360da6a-31cb-4823-8951-abebab0990ed",
            "last_seen_at": "2020-01-12 02:24:55",
            "last_studied_at": "2020-01-12 02:24:55"
          },
          {
            "id": "719851a2-b176-4d78-b5f1-354f00921ac6",
            "user_id": "c360da6a-31cb-4823-8951-abebab0990ed",
            "card_set_id": "03bab132-5bae-4663-af1d-a98c6cea7a4d",
            "creator_id": "c360da6a-31cb-4823-8951-abebab0990ed",
            "last_seen_at": "2019-10-08 03:35:08",
            "last_studied_at": "2019-10-08 03:35:08"
          },
          {
            "id": "81de95f2-f13a-41c5-894c-e39bc7cfb20a",
            "user_id": "c360da6a-31cb-4823-8951-abebab0990ed",
            "card_set_id": "b4a8a048-fedc-4f8a-98ec-831d67494a74",
            "creator_id": "c360da6a-31cb-4823-8951-abebab0990ed",
            "last_seen_at": "2019-12-29 01:24:16",
            "last_studied_at": "2019-12-29 01:24:16"
          },
          {
            "id": "5997236c-08a5-4a33-b63a-18f215fd7a1e",
            "user_id": "c360da6a-31cb-4823-8951-abebab0990ed",
            "card_set_id": "9bf6bfd2-26bf-4ce7-a36a-0297320d2a41",
            "creator_id": "c360da6a-31cb-4823-8951-abebab0990ed",
            "last_seen_at": "2020-03-11 17:52:27",
            "last_studied_at": "2020-03-11 17:52:27"
          },
          {
            "id": "1bf24df1-05be-45e0-9e72-fa4b3bb38f85",
            "user_id": "c360da6a-31cb-4823-8951-abebab0990ed",
            "card_set_id": "24e9abb1-e6ed-4bfe-89fa-a4aaabed4855",
            "creator_id": "c360da6a-31cb-4823-8951-abebab0990ed",
            "last_seen_at": "2019-12-30 01:13:48",
            "last_studied_at": "2019-12-30 01:13:48"
          },
          {
            "id": "e97a6e21-9596-4122-a173-06d5a7e56f13",
            "user_id": "c360da6a-31cb-4823-8951-abebab0990ed",
            "card_set_id": "51bb5dd1-ae38-418b-b5fb-314154fe88fc",
            "creator_id": "c360da6a-31cb-4823-8951-abebab0990ed",
            "last_seen_at": "2020-01-11 15:56:06",
            "last_studied_at": "2020-01-11 15:56:06"
          },
          {
            "id": "511506a7-8606-4e95-b3fc-e991c4a691ff",
            "user_id": "c360da6a-31cb-4823-8951-abebab0990ed",
            "card_set_id": "f4e9d412-d816-4d87-b6ec-c08db464be2c",
            "creator_id": "c360da6a-31cb-4823-8951-abebab0990ed",
            "last_seen_at": "2020-01-16 00:44:52",
            "last_studied_at": "2020-01-16 00:44:52"
          },
          {
            "id": "5df07134-960d-4095-8a90-6d792ac7c401",
            "user_id": "c360da6a-31cb-4823-8951-abebab0990ed",
            "card_set_id": "1c487f68-7716-4215-b0ff-5fc07f631c4e",
            "creator_id": "c360da6a-31cb-4823-8951-abebab0990ed",
            "last_seen_at": "2020-03-22 06:40:09",
            "last_studied_at": "2020-03-22 06:40:09"
          },
          {
            "id": "48c09d06-b22c-46d5-8ee0-e6b97a56d8b4",
            "user_id": "c360da6a-31cb-4823-8951-abebab0990ed",
            "card_set_id": "39c36c05-9699-4b30-bd75-9fd0e3fea0df",
            "creator_id": "c360da6a-31cb-4823-8951-abebab0990ed",
            "last_seen_at": "2019-12-08 23:54:10",
            "last_studied_at": "2019-12-08 23:54:10"
          },
          {
            "id": "7dbd8edb-985d-4c05-bda8-1e4e4c976e50",
            "user_id": "c360da6a-31cb-4823-8951-abebab0990ed",
            "card_set_id": "3cc90cc2-4de0-418d-9741-bac5d2226669",
            "creator_id": "c360da6a-31cb-4823-8951-abebab0990ed",
            "last_seen_at": "2020-01-03 01:27:39",
            "last_studied_at": "2020-01-03 01:27:39"
          },
          {
            "id": "5111b6df-dd2a-48cf-849b-c5de2b797735",
            "user_id": "c360da6a-31cb-4823-8951-abebab0990ed",
            "card_set_id": "4d96fe8b-39ed-45a7-8d34-ab114b5047fb",
            "creator_id": "c360da6a-31cb-4823-8951-abebab0990ed",
            "last_seen_at": "2020-04-15 08:34:39",
            "last_studied_at": "2020-04-15 08:34:39"
          },
          {
            "id": "ea92c24c-c95c-41b8-957a-ed99018ed198",
            "user_id": "c360da6a-31cb-4823-8951-abebab0990ed",
            "card_set_id": "3ca7c027-e4ac-4d53-b115-c5590578cb65",
            "creator_id": "c360da6a-31cb-4823-8951-abebab0990ed",
            "last_seen_at": "2020-03-10 13:33:46",
            "last_studied_at": "2020-03-10 13:33:46"
          },
          {
            "id": "598cadcc-f8a6-4b9e-bf98-09a236bb64b4",
            "user_id": "c360da6a-31cb-4823-8951-abebab0990ed",
            "card_set_id": "f0bea834-095f-4808-8eb8-1267bc62efd4",
            "creator_id": "c360da6a-31cb-4823-8951-abebab0990ed",
            "last_seen_at": "2019-12-21 00:31:27",
            "last_studied_at": "2019-12-21 00:31:27"
          },
          {
            "id": "b7a3c622-c9d2-4b9a-bb44-bd1b949ef5a6",
            "user_id": "c360da6a-31cb-4823-8951-abebab0990ed",
            "card_set_id": "bb719d7e-8c08-4b50-b9cc-259ae4c69b52",
            "creator_id": "c360da6a-31cb-4823-8951-abebab0990ed",
            "last_seen_at": "2019-11-13 08:42:03",
            "last_studied_at": "2019-11-13 08:42:03"
          },
          {
            "id": "346e0264-7de5-453e-8ed7-ac700adb6afd",
            "user_id": "c360da6a-31cb-4823-8951-abebab0990ed",
            "card_set_id": "ad0dabac-c8ef-4af4-91f9-b7b3ae214a58",
            "creator_id": "c360da6a-31cb-4823-8951-abebab0990ed",
            "last_seen_at": "2020-01-10 16:56:33",
            "last_studied_at": "2020-01-10 16:56:33"
          },
          {
            "id": "1467972a-328b-4b91-bd59-af4d3833cb7e",
            "user_id": "c360da6a-31cb-4823-8951-abebab0990ed",
            "card_set_id": "10b573dd-1ebe-417e-89de-f810c124a33e",
            "creator_id": "c360da6a-31cb-4823-8951-abebab0990ed",
            "last_seen_at": "2020-02-26 09:49:16",
            "last_studied_at": "2020-02-26 09:49:16"
          },
          {
            "id": "8187fa16-bfa1-4fc1-9932-f5f85a2997ab",
            "user_id": "c360da6a-31cb-4823-8951-abebab0990ed",
            "card_set_id": "8eced926-1ff2-4637-9e7c-24d150e4c6a2",
            "creator_id": "c360da6a-31cb-4823-8951-abebab0990ed",
            "last_seen_at": "2019-11-30 10:31:37",
            "last_studied_at": "2019-11-30 10:31:37"
          },
          {
            "id": "659f9bb7-a6e0-4ede-8a91-f41dcc7abad6",
            "user_id": "c360da6a-31cb-4823-8951-abebab0990ed",
            "card_set_id": "188cc28b-a3d8-409a-b6f4-2e6a5935f0a1",
            "creator_id": "c360da6a-31cb-4823-8951-abebab0990ed",
            "last_seen_at": "2019-11-26 19:50:56",
            "last_studied_at": "2019-11-26 19:50:56"
          },
          {
            "id": "80e9ea40-deae-4d7f-bd9f-c44ea874b62b",
            "user_id": "c360da6a-31cb-4823-8951-abebab0990ed",
            "card_set_id": "f3df95be-d728-459c-91b2-880e3e677615",
            "creator_id": "c360da6a-31cb-4823-8951-abebab0990ed",
            "last_seen_at": "2020-03-09 13:29:59",
            "last_studied_at": "2020-03-09 13:29:59"
          },
          {
            "id": "504fdea0-60c3-4b9a-a0d4-bee2cd7635d0",
            "user_id": "c360da6a-31cb-4823-8951-abebab0990ed",
            "card_set_id": "57ac4cad-3f25-4006-996e-0697871bacd6",
            "creator_id": "c360da6a-31cb-4823-8951-abebab0990ed",
            "last_seen_at": "2020-01-29 20:01:44",
            "last_studied_at": "2020-01-29 20:01:44"
          },
          {
            "id": "9318750b-0f2a-4831-8199-9d47a03df599",
            "user_id": "c360da6a-31cb-4823-8951-abebab0990ed",
            "card_set_id": "7a345b7d-cdab-4d66-81de-1df07b7a1308",
            "creator_id": "c360da6a-31cb-4823-8951-abebab0990ed",
            "last_seen_at": "2019-12-15 01:24:26",
            "last_studied_at": "2019-12-15 01:24:26"
          },
          {
            "id": "815e5459-9ed8-4eff-b0fe-07d16baf1956",
            "user_id": "c360da6a-31cb-4823-8951-abebab0990ed",
            "card_set_id": "1764f964-3332-4d5d-bb50-555b7f7af564",
            "creator_id": "c360da6a-31cb-4823-8951-abebab0990ed",
            "last_seen_at": "2019-12-04 12:12:30",
            "last_studied_at": "2019-12-04 12:12:30"
          },
          {
            "id": "32157d16-faea-4f5b-bf81-1574f33fb500",
            "user_id": "c360da6a-31cb-4823-8951-abebab0990ed",
            "card_set_id": "79f40056-20fa-4d47-a183-b10516bc8d46",
            "creator_id": "c360da6a-31cb-4823-8951-abebab0990ed",
            "last_seen_at": "2020-02-03 17:35:37",
            "last_studied_at": "2020-02-03 17:35:37"
          },
          {
            "id": "36752e84-dc0d-4f4d-bf3d-82c9e9b74fc1",
            "user_id": "c360da6a-31cb-4823-8951-abebab0990ed",
            "card_set_id": "41d6d5d3-5ee7-45e7-ae1b-951edb5a1d80",
            "creator_id": "c360da6a-31cb-4823-8951-abebab0990ed",
            "last_seen_at": "2020-03-02 12:36:31",
            "last_studied_at": "2020-03-02 12:36:31"
          },
          {
            "id": "bda72b9f-0f6e-4d39-9438-0ce30aa693ff",
            "user_id": "c360da6a-31cb-4823-8951-abebab0990ed",
            "card_set_id": "519c7c75-1848-480e-8e23-929115ffec17",
            "creator_id": "c360da6a-31cb-4823-8951-abebab0990ed",
            "last_seen_at": "2020-02-26 16:45:48",
            "last_studied_at": "2020-02-26 16:45:48"
          },
          {
            "id": "847d0a7b-ef18-4366-8b4a-41904eab5e3c",
            "user_id": "c360da6a-31cb-4823-8951-abebab0990ed",
            "card_set_id": "5c68ab4c-fa84-433f-83c7-a63638bf6217",
            "creator_id": "c360da6a-31cb-4823-8951-abebab0990ed",
            "last_seen_at": "2020-02-01 14:15:33",
            "last_studied_at": "2020-02-01 14:15:33"
          },
          {
            "id": "6326615f-2999-4895-84a5-fac0ad5c0c8e",
            "user_id": "c360da6a-31cb-4823-8951-abebab0990ed",
            "card_set_id": "3fbbcc5b-0791-41b8-9194-da1c4ced6e8b",
            "creator_id": "c360da6a-31cb-4823-8951-abebab0990ed",
            "last_seen_at": "2020-04-13 07:43:06",
            "last_studied_at": "2020-04-13 07:43:06"
          },
          {
            "id": "a68a98a1-13cf-4359-a7c3-315e04b550be",
            "user_id": "c360da6a-31cb-4823-8951-abebab0990ed",
            "card_set_id": "6be31b99-f9e0-4334-bc09-24fcf49b11df",
            "creator_id": "c360da6a-31cb-4823-8951-abebab0990ed",
            "last_seen_at": "2019-11-10 21:20:30",
            "last_studied_at": "2019-11-10 21:20:30"
          },
          {
            "id": "7aaf54d5-3299-400b-a763-d5ee0ba6343a",
            "user_id": "c360da6a-31cb-4823-8951-abebab0990ed",
            "card_set_id": "760acf76-5756-4e55-9161-aa8c46865644",
            "creator_id": "c360da6a-31cb-4823-8951-abebab0990ed",
            "last_seen_at": "2020-01-26 01:04:54",
            "last_studied_at": "2020-01-26 01:04:54"
          },
          {
            "id": "cf503b7f-b56d-44bd-b158-e586a7bdcbd5",
            "user_id": "c360da6a-31cb-4823-8951-abebab0990ed",
            "card_set_id": "2f387f67-d32f-407a-8782-297eef0b20ee",
            "creator_id": "c360da6a-31cb-4823-8951-abebab0990ed",
            "last_seen_at": "2019-12-12 16:37:11",
            "last_studied_at": "2019-12-12 16:37:11"
          },
          {
            "id": "23a0b269-f1ba-4272-bd29-419b0d1aacc4",
            "user_id": "c360da6a-31cb-4823-8951-abebab0990ed",
            "card_set_id": "c9af36b3-0fd6-49c2-be81-26b1fee46027",
            "creator_id": "c360da6a-31cb-4823-8951-abebab0990ed",
            "last_seen_at": "2019-12-22 11:19:28",
            "last_studied_at": "2019-12-22 11:19:28"
          },
          {
            "id": "9fe8ec25-0c12-4f7f-ba05-780b7f13e3ec",
            "user_id": "c360da6a-31cb-4823-8951-abebab0990ed",
            "card_set_id": "85bebab8-688e-42c7-838e-35b7fc3c16cd",
            "creator_id": "c360da6a-31cb-4823-8951-abebab0990ed",
            "last_seen_at": "2019-10-27 22:49:30",
            "last_studied_at": "2019-10-27 22:49:30"
          },
          {
            "id": "12d13d88-108f-49d3-8bc0-f13cc6f5cfa9",
            "user_id": "c360da6a-31cb-4823-8951-abebab0990ed",
            "card_set_id": "6d001f38-df4a-4a66-bd7e-5b737f213d8d",
            "creator_id": "c360da6a-31cb-4823-8951-abebab0990ed",
            "last_seen_at": "2020-01-02 21:41:00",
            "last_studied_at": "2020-01-02 21:41:00"
          },
          {
            "id": "96b83621-17a8-4f5f-9908-19059fc24733",
            "user_id": "c360da6a-31cb-4823-8951-abebab0990ed",
            "card_set_id": "eb49a4eb-879b-4fa4-929b-3c68bbf99bfb",
            "creator_id": "c360da6a-31cb-4823-8951-abebab0990ed",
            "last_seen_at": "2019-11-22 03:43:59",
            "last_studied_at": "2019-11-22 03:43:59"
          },
          {
            "id": "914c5a79-87ba-4ac9-83e2-435767deb6d5",
            "user_id": "c360da6a-31cb-4823-8951-abebab0990ed",
            "card_set_id": "9aaa54f0-571d-4ce9-ae56-1a825368477b",
            "creator_id": "c360da6a-31cb-4823-8951-abebab0990ed",
            "last_seen_at": "2019-12-30 10:56:27",
            "last_studied_at": "2019-12-30 10:56:27"
          },
          {
            "id": "8d90fddd-6381-46a1-b419-64dc79301ec2",
            "user_id": "c360da6a-31cb-4823-8951-abebab0990ed",
            "card_set_id": "00b39e5e-b79c-42aa-a7ef-ff09f062a715",
            "creator_id": "c360da6a-31cb-4823-8951-abebab0990ed",
            "last_seen_at": "2019-10-30 09:03:34",
            "last_studied_at": "2019-10-30 09:03:34"
          },
          {
            "id": "d1d59969-3209-4113-b522-7aafbe582dc5",
            "user_id": "c360da6a-31cb-4823-8951-abebab0990ed",
            "card_set_id": "4737df7c-f2e6-43c2-9f80-060d208744dc",
            "creator_id": "c360da6a-31cb-4823-8951-abebab0990ed",
            "last_seen_at": "2019-10-27 10:12:50",
            "last_studied_at": "2019-10-27 10:12:50"
          },
          {
            "id": "fc99e7f7-3b27-4b16-bec4-6a97fad607ff",
            "user_id": "c360da6a-31cb-4823-8951-abebab0990ed",
            "card_set_id": "8840f2b9-6134-42bc-ab6c-a220bbde666e",
            "creator_id": "c360da6a-31cb-4823-8951-abebab0990ed",
            "last_seen_at": "2020-01-06 17:34:50",
            "last_studied_at": "2020-01-06 17:34:50"
          },
          {
            "id": "cd7b81df-7a84-4ec3-af84-dec93f6b83cc",
            "user_id": "c360da6a-31cb-4823-8951-abebab0990ed",
            "card_set_id": "c0cc7be5-b23e-443a-b464-3834118d195f",
            "creator_id": "c360da6a-31cb-4823-8951-abebab0990ed",
            "last_seen_at": "2019-11-02 14:45:03",
            "last_studied_at": "2019-11-02 14:45:03"
          },
          {
            "id": "fe36ed84-4c82-4e7f-ae34-7940586c62dd",
            "user_id": "c360da6a-31cb-4823-8951-abebab0990ed",
            "card_set_id": "d0eacdf6-21f7-4f13-a9b0-b7f519109f62",
            "creator_id": "c360da6a-31cb-4823-8951-abebab0990ed",
            "last_seen_at": "2020-01-06 11:05:38",
            "last_studied_at": "2020-01-06 11:05:38"
          },
          {
            "id": "d6c4ff9f-f544-41ad-b484-32234a416d87",
            "user_id": "c360da6a-31cb-4823-8951-abebab0990ed",
            "card_set_id": "f6f3ced6-ffea-4fb0-a536-c27fbeab4cb0",
            "creator_id": "c360da6a-31cb-4823-8951-abebab0990ed",
            "last_seen_at": "2020-04-14 20:55:29",
            "last_studied_at": "2020-04-14 20:55:29"
          },
          {
            "id": "6ae0a0a8-cdba-41bf-a2c3-9c454daf600f",
            "user_id": "c360da6a-31cb-4823-8951-abebab0990ed",
            "card_set_id": "5aaf6f1f-90c2-4925-946a-f76058e86c43",
            "creator_id": "c360da6a-31cb-4823-8951-abebab0990ed",
            "last_seen_at": "2020-01-17 19:22:54",
            "last_studied_at": "2020-01-17 19:22:54"
          },
          {
            "id": "91148c70-1ecf-41e8-b82a-1319279f8b4c",
            "user_id": "c360da6a-31cb-4823-8951-abebab0990ed",
            "card_set_id": "dc4235aa-bd8f-49ba-bd82-ccb0b07c657a",
            "creator_id": "c360da6a-31cb-4823-8951-abebab0990ed",
            "last_seen_at": "2019-12-06 15:23:21",
            "last_studied_at": "2019-12-06 15:23:21"
          },
          {
            "id": "afc4ab11-b915-4338-80f1-6296cdd23e37",
            "user_id": "c360da6a-31cb-4823-8951-abebab0990ed",
            "card_set_id": "d6b780d9-3f94-4ee8-9321-bbb739f61315",
            "creator_id": "c360da6a-31cb-4823-8951-abebab0990ed",
            "last_seen_at": "2019-10-28 21:38:18",
            "last_studied_at": "2019-10-28 21:38:18"
          },
          {
            "id": "7ef4c069-6b15-4f22-b934-868941662faa",
            "user_id": "c360da6a-31cb-4823-8951-abebab0990ed",
            "card_set_id": "2b556bec-10df-4684-be05-d5e34d72065a",
            "creator_id": "c360da6a-31cb-4823-8951-abebab0990ed",
            "last_seen_at": "2020-01-01 04:19:01",
            "last_studied_at": "2020-01-01 04:19:01"
          },
          {
            "id": "9ea95e99-11a5-4a40-ae73-c570db15ab95",
            "user_id": "c360da6a-31cb-4823-8951-abebab0990ed",
            "card_set_id": "d19abad1-0999-4dc2-9994-585cd241a562",
            "creator_id": "c360da6a-31cb-4823-8951-abebab0990ed",
            "last_seen_at": "2019-11-25 02:38:17",
            "last_studied_at": "2019-11-25 02:38:17"
          },
          {
            "id": "cf0026c8-a51f-403b-bccc-12626ebdc2dd",
            "user_id": "c360da6a-31cb-4823-8951-abebab0990ed",
            "card_set_id": "ad7a8c74-baac-4ffc-8076-5a975a04b31a",
            "creator_id": "c360da6a-31cb-4823-8951-abebab0990ed",
            "last_seen_at": "2020-01-17 00:51:29",
            "last_studied_at": "2020-01-17 00:51:29"
          },
          {
            "id": "a435e93f-119c-4f9a-bfc3-cff3d88ca3cf",
            "user_id": "c360da6a-31cb-4823-8951-abebab0990ed",
            "card_set_id": "ac30426c-a39e-4a48-b574-6fc83dc408a0",
            "creator_id": "c360da6a-31cb-4823-8951-abebab0990ed",
            "last_seen_at": "2020-02-04 11:24:07",
            "last_studied_at": "2020-02-04 11:24:07"
          },
          {
            "id": "5f10b810-aac6-4dbc-8708-c69944d2a9d1",
            "user_id": "c360da6a-31cb-4823-8951-abebab0990ed",
            "card_set_id": "21201ce7-9ad5-45f6-9c82-0b4e253c6526",
            "creator_id": "c360da6a-31cb-4823-8951-abebab0990ed",
            "last_seen_at": "2020-04-17 13:57:15",
            "last_studied_at": "2020-04-17 13:57:15"
          },
          {
            "id": "9102100f-bedd-4486-8f79-728102ffc82a",
            "user_id": "c360da6a-31cb-4823-8951-abebab0990ed",
            "card_set_id": "f800d34c-86ce-41cf-960b-0389bceb94a6",
            "creator_id": "c360da6a-31cb-4823-8951-abebab0990ed",
            "last_seen_at": "2019-11-17 08:43:08",
            "last_studied_at": "2019-11-17 08:43:08"
          },
          {
            "id": "202846bd-f6f0-4012-8a9f-61f58f7a17f4",
            "user_id": "c360da6a-31cb-4823-8951-abebab0990ed",
            "card_set_id": "16872f75-7192-4c5f-88ac-e168007970d5",
            "creator_id": "c360da6a-31cb-4823-8951-abebab0990ed",
            "last_seen_at": "2019-10-09 01:29:17",
            "last_studied_at": "2019-10-09 01:29:17"
          },
          {
            "id": "95611a53-8fc9-4899-9515-952fa23c76bd",
            "user_id": "c360da6a-31cb-4823-8951-abebab0990ed",
            "card_set_id": "4d8a0429-21fa-4649-b8dd-67d4e51c2f00",
            "creator_id": "c360da6a-31cb-4823-8951-abebab0990ed",
            "last_seen_at": "2020-02-12 03:23:02",
            "last_studied_at": "2020-02-12 03:23:02"
          },
          {
            "id": "41f3561a-b9f6-4cc0-b522-408a84d5180b",
            "user_id": "c360da6a-31cb-4823-8951-abebab0990ed",
            "card_set_id": "1761f38f-1a9d-4975-9dee-6636a42733f7",
            "creator_id": "c360da6a-31cb-4823-8951-abebab0990ed",
            "last_seen_at": "2019-10-16 21:31:02",
            "last_studied_at": "2019-10-16 21:31:02"
          },
          {
            "id": "3d76eee7-a75c-48c8-913d-f746dd5c27b1",
            "user_id": "c360da6a-31cb-4823-8951-abebab0990ed",
            "card_set_id": "f2ad0db6-8827-413f-900b-45c0c756fcc6",
            "creator_id": "c360da6a-31cb-4823-8951-abebab0990ed",
            "last_seen_at": "2020-04-02 05:44:47",
            "last_studied_at": "2020-04-02 05:44:47"
          },
          {
            "id": "e13a4dd9-28ea-4ca4-af3f-a6c3adb22a70",
            "user_id": "c360da6a-31cb-4823-8951-abebab0990ed",
            "card_set_id": "63f5cf74-6b3e-4c74-9709-8d1c46934e64",
            "creator_id": "c360da6a-31cb-4823-8951-abebab0990ed",
            "last_seen_at": "2020-03-16 22:07:52",
            "last_studied_at": "2020-03-16 22:07:52"
          },
          {
            "id": "8f558145-0bd4-4b7e-96f5-ae287f099f09",
            "user_id": "c360da6a-31cb-4823-8951-abebab0990ed",
            "card_set_id": "80eb77fb-7c0f-4799-9109-738d7b321f69",
            "creator_id": "c360da6a-31cb-4823-8951-abebab0990ed",
            "last_seen_at": "2020-02-14 10:11:38",
            "last_studied_at": "2020-02-14 10:11:38"
          },
          {
            "id": "ef790231-7bc8-4a14-a180-27dbbf75a416",
            "user_id": "c360da6a-31cb-4823-8951-abebab0990ed",
            "card_set_id": "61f04076-f983-41b4-b7ca-48bc675ab06e",
            "creator_id": "c360da6a-31cb-4823-8951-abebab0990ed",
            "last_seen_at": "2019-11-01 06:18:33",
            "last_studied_at": "2019-11-01 06:18:33"
          },
          {
            "id": "5b9a2d30-0f13-46b0-83fa-32edbe716b42",
            "user_id": "c360da6a-31cb-4823-8951-abebab0990ed",
            "card_set_id": "e498699e-7d5e-4606-aea4-dbf7d60233f1",
            "creator_id": "c360da6a-31cb-4823-8951-abebab0990ed",
            "last_seen_at": "2020-03-30 15:11:02",
            "last_studied_at": "2020-03-30 15:11:02"
          },
          {
            "id": "944a6223-6205-4b33-8c3c-6a0a03ac2276",
            "user_id": "c360da6a-31cb-4823-8951-abebab0990ed",
            "card_set_id": "0ff65d6e-b633-45db-9046-48c8037c339a",
            "creator_id": "c360da6a-31cb-4823-8951-abebab0990ed",
            "last_seen_at": "2020-02-10 10:33:09",
            "last_studied_at": "2020-02-10 10:33:09"
          },
          {
            "id": "0a26fb5e-4288-4a1d-ad2b-8142714e3cd9",
            "user_id": "c360da6a-31cb-4823-8951-abebab0990ed",
            "card_set_id": "b9b9a989-f098-41b3-8bda-4897797231a2",
            "creator_id": "c360da6a-31cb-4823-8951-abebab0990ed",
            "last_seen_at": "2019-12-27 03:40:00",
            "last_studied_at": "2019-12-27 03:40:00"
          },
          {
            "id": "5445116d-3eb8-4550-aa46-044ed9f49163",
            "user_id": "c360da6a-31cb-4823-8951-abebab0990ed",
            "card_set_id": "29677fce-d48a-41ce-9613-ffb1ab77e5b8",
            "creator_id": "c360da6a-31cb-4823-8951-abebab0990ed",
            "last_seen_at": "2020-01-01 20:18:10",
            "last_studied_at": "2020-01-01 20:18:10"
          },
          {
            "id": "e209e88d-06d8-4415-b708-9f3364135dff",
            "user_id": "c360da6a-31cb-4823-8951-abebab0990ed",
            "card_set_id": "9fa078db-ac50-4364-9b73-449f1d077bad",
            "creator_id": "c360da6a-31cb-4823-8951-abebab0990ed",
            "last_seen_at": "2020-02-28 09:04:49",
            "last_studied_at": "2020-02-28 09:04:49"
          },
          {
            "id": "2d60f654-1fe0-4596-9f16-4f9730387130",
            "user_id": "c360da6a-31cb-4823-8951-abebab0990ed",
            "card_set_id": "4164d650-e1a2-4497-bf9f-6da87f0c9176",
            "creator_id": "c360da6a-31cb-4823-8951-abebab0990ed",
            "last_seen_at": "2019-10-21 17:45:15",
            "last_studied_at": "2019-10-21 17:45:15"
          },
          {
            "id": "d2fb65f9-1856-458c-9575-a6192fb75827",
            "user_id": "c360da6a-31cb-4823-8951-abebab0990ed",
            "card_set_id": "e4cf8a1b-6cf0-4d80-b9dd-b41b279bcf7e",
            "creator_id": "c360da6a-31cb-4823-8951-abebab0990ed",
            "last_seen_at": "2019-10-17 15:02:15",
            "last_studied_at": "2019-10-17 15:02:15"
          },
          {
            "id": "f03a6c2c-5dbf-40af-a1fa-03e32c469194",
            "user_id": "c360da6a-31cb-4823-8951-abebab0990ed",
            "card_set_id": "54963f47-f1d8-4620-b8ac-29ad84ff9818",
            "creator_id": "c360da6a-31cb-4823-8951-abebab0990ed",
            "last_seen_at": "2020-02-10 07:21:25",
            "last_studied_at": "2020-02-10 07:21:25"
          },
          {
            "id": "789b70fc-b89f-42ab-83c9-5b20532226a3",
            "user_id": "c360da6a-31cb-4823-8951-abebab0990ed",
            "card_set_id": "6c09f1b8-044e-41a0-8602-080525c58b22",
            "creator_id": "c360da6a-31cb-4823-8951-abebab0990ed",
            "last_seen_at": "2019-12-07 15:22:42",
            "last_studied_at": "2019-12-07 15:22:42"
          },
          {
            "id": "2e73bd4c-6ca1-46c3-9218-67a28219b2a0",
            "user_id": "c360da6a-31cb-4823-8951-abebab0990ed",
            "card_set_id": "3feda6c6-90be-4ce3-8e0e-416719bba9e3",
            "creator_id": "c360da6a-31cb-4823-8951-abebab0990ed",
            "last_seen_at": "2020-04-11 06:09:23",
            "last_studied_at": "2020-04-11 06:09:23"
          },
          {
            "id": "55835ac8-8587-4450-9989-f599cbaac537",
            "user_id": "c360da6a-31cb-4823-8951-abebab0990ed",
            "card_set_id": "321b5906-171f-4808-8092-9708ae1f3a37",
            "creator_id": "c360da6a-31cb-4823-8951-abebab0990ed",
            "last_seen_at": "2019-11-08 15:06:29",
            "last_studied_at": "2019-11-08 15:06:29"
          },
          {
            "id": "fcf19581-a998-4722-bd01-17ee1c44f9f6",
            "user_id": "2aa763bd-4bf1-47a1-bc32-0a7e693ffdcf",
            "card_set_id": "e33b9b8d-ada1-47f1-9456-2b6232f97b87",
            "creator_id": "2aa763bd-4bf1-47a1-bc32-0a7e693ffdcf",
            "last_seen_at": "2019-11-13 19:59:50",
            "last_studied_at": "2019-11-13 19:59:50"
          },
          {
            "id": "20fbe165-1edf-4318-a736-5435fd1ce263",
            "user_id": "2aa763bd-4bf1-47a1-bc32-0a7e693ffdcf",
            "card_set_id": "2fd88f65-f809-4b5b-b2f8-754557818d7b",
            "creator_id": "2aa763bd-4bf1-47a1-bc32-0a7e693ffdcf",
            "last_seen_at": "2019-12-24 16:40:48",
            "last_studied_at": "2019-12-24 16:40:48"
          },
          {
            "id": "da467a5a-096b-4da2-8754-f66942b184b5",
            "user_id": "9234ae08-c6e9-46f9-a452-ac1bd1842b02",
            "card_set_id": "1cb48579-5511-47f5-9d76-3e52decf7267",
            "creator_id": "9234ae08-c6e9-46f9-a452-ac1bd1842b02",
            "last_seen_at": "2020-01-18 14:57:45",
            "last_studied_at": "2020-01-18 14:57:45"
          },
          {
            "id": "46792f97-a626-4409-8750-ed2688af8e65",
            "user_id": "9234ae08-c6e9-46f9-a452-ac1bd1842b02",
            "card_set_id": "4ba674f1-36c7-407f-8bd5-421de1559506",
            "creator_id": "9234ae08-c6e9-46f9-a452-ac1bd1842b02",
            "last_seen_at": "2019-10-11 17:25:07",
            "last_studied_at": "2019-10-11 17:25:07"
          },
          {
            "id": "3b015733-419e-4c40-a7ad-4632ba2f1049",
            "user_id": "9234ae08-c6e9-46f9-a452-ac1bd1842b02",
            "card_set_id": "f252078f-44bf-4f30-96a9-229eb86d2c8d",
            "creator_id": "9234ae08-c6e9-46f9-a452-ac1bd1842b02",
            "last_seen_at": "2019-12-24 20:18:08",
            "last_studied_at": "2019-12-24 20:18:08"
          },
          {
            "id": "d60f203c-6e10-4bfa-975c-2bbdad9d2bd9",
            "user_id": "9234ae08-c6e9-46f9-a452-ac1bd1842b02",
            "card_set_id": "0597608d-035e-4476-a664-6e413dc6e355",
            "creator_id": "9234ae08-c6e9-46f9-a452-ac1bd1842b02",
            "last_seen_at": "2020-04-07 22:55:45",
            "last_studied_at": "2020-04-07 22:55:45"
          },
          {
            "id": "a330e21a-969f-4fc7-bcb5-305f533647a9",
            "user_id": "9234ae08-c6e9-46f9-a452-ac1bd1842b02",
            "card_set_id": "50a9cbae-065b-4451-a887-507b959787dc",
            "creator_id": "9234ae08-c6e9-46f9-a452-ac1bd1842b02",
            "last_seen_at": "2020-01-04 05:50:57",
            "last_studied_at": "2020-01-04 05:50:57"
          }
        ])})}

