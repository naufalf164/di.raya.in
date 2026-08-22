// clients.js - Data Master Portofolio Klien di.raya.in
const clientsData = [
  // 1. VELIN & DEVAN
  {
    id: "velin-devan",
    name: "Velin & Devan",
    date: "03 Juni 2026",
    venue: "Gedung Balai Pertemuan Farida, Cianjur",
    packageKey: "vow",
    packageName: "Vow Package (Akad ± 4 Jam)",
    cover: "https://lh3.googleusercontent.com/d/1Hp1AhwShB7BpmzD73bZP-AKfmZNpxo8f",
    editedVideos: [
      { url: "https://drive.google.com/file/d/1PvFpXSK1FTY8VDsE8rC8PEH4j2NATBLY/preview" },
      { url: "https://drive.google.com/file/d/1tCt9FQBR_lGCxhL4ur4rIRFiUe8MrkNo/preview" },
      { url: "https://drive.google.com/file/d/1aT8qLEf_3Clon8JiMzxyDL_Ugie8wFbk/preview" }
    ],
    randomPhotos: [
      "1Hp1AhwShB7BpmzD73bZP-AKfmZNpxo8f",
      "1AsNh_STG4fG6iJ-_Qw4a1GBt6iUPgHY3",
      "1sGYvuDRcHmV9b9JoMIMfaerd02_vcuGt",
      "1GLS7LPrX87ixYFBqfpLeLvaGXS1yzh3B"
    ].map(id => ({ url: `https://lh3.googleusercontent.com/d/${id}` }))
  },

  // 2. RACHMA & TAUFIK
  {
    id: "rachma-taufik",
    name: "Rachma & Taufik",
    date: "09 Mei 2026",
    venue: "Cibeber",
    packageKey: "vow",
    packageName: "Vow Package (Akad ± 4 Jam)",
    cover: "https://lh3.googleusercontent.com/d/1pJbXrKat0OvGZlVXlurwMuoYFfWTAfTS",
    editedVideos: [
      { url: "https://drive.google.com/file/d/1jZ2p6YINqrRwtuZ-KiA0iBcBWOKi-UP7/preview" },
      { url: "https://drive.google.com/file/d/111dt-aU-tL6jBiI9MhLLRYwjHCbWNuBp/preview" },
      { url: "https://drive.google.com/file/d/1n2IuyM9iwNOgEBGuRF2UfR__Uw3ty-_n/preview" },
      { url: "https://drive.google.com/file/d/1gGhljc7dvkb1tDUFptCzUFW_UwXBMu2W/preview" }
    ],
    randomPhotos: [
      "1pJbXrKat0OvGZlVXlurwMuoYFfWTAfTS",
      "1PHjTkvnaCt0vE7Nm78ooUlNvJ1cftbxS",
      "18yROVogUTcwaa7T5UIvhIlPvIyZNEUp7",
      "1U6hAcSU6LQt09s_ZwS-thSQIXLhGHJ2x"
    ].map(id => ({ url: `https://lh3.googleusercontent.com/d/${id}` }))
  },

  // 3. LINA & USMA
  {
    id: "lina-usma",
    name: "Lina & Usma",
    date: "12 Juli 2026",
    venue: "Cipanas",
    packageKey: "vow",
    packageName: "Vow Package (Akad ± 4 Jam)",
    cover: "https://lh3.googleusercontent.com/d/1tvzvSU6V_LfpqM5AJ8Z5D4Rmicjl4WZb",
    editedVideos: [
      { url: "https://drive.google.com/file/d/1mN42iH-d9qgruuCF-6Q8JRrIb2O-fSfQ/preview" },
      { url: "https://drive.google.com/file/d/1yXCIqQQN23hiXbcGR2tx-t9hu_WuSI2z/preview" },
      { url: "https://drive.google.com/file/d/1wpKfqFWXDajlxOa810S0ILzGes0N5lCZ/preview" },
      { url: "https://drive.google.com/file/d/1k-CvQz9R05MzDLLGjqSQldlHOjwXXiFF/preview" }
    ],
    randomPhotos: [
      "1ZiFgREz2cE2l8pSEUlb1VRlcNfijBcw2",
      "1tvzvSU6V_LfpqM5AJ8Z5D4Rmicjl4WZb",
      "1RkduhOykRXMPkW_35rkXdvefSUnRWmp4",
      "1L7Y5F1FYgle-1rvrqZ1EIqQGAeyo2mUP"
    ].map(id => ({ url: `https://lh3.googleusercontent.com/d/${id}` }))
  },

  // 4. NESA & ANDRI
  {
    id: "nesa-andri",
    name: "Nesa & Andri",
    date: "18 Agustus 2026",
    venue: "Rajamandala",
    packageKey: "eternal",
    packageName: "Eternal Package (± 8 Jam)",
    cover: "https://lh3.googleusercontent.com/d/10BZE_RaRKwoRS9SGBjABCzUefzsxoP31",
    editedVideos: [
      { url: "https://drive.google.com/file/d/1WjNqOG3YRle1VzvY7NwzpQ_cbJ3i6ofT/preview" },
      { url: "https://drive.google.com/file/d/1sjCEoP0sD49B-2N21lMLJkTCkUIBwyO7/preview" },
      { url: "https://drive.google.com/file/d/1lb-U5TWAVmNfuEf-L3yzjtEzw_QL7d7F/preview" },
      { url: "https://drive.google.com/file/d/1luYIGFYJkhxkSUtT4UH_JGPiHV_RXY21/preview" }
    ],
    randomPhotos: [
      "1ZiFgREz2cE2l8pSEUlb1VRlcNfijBcw2",
      "1tvzvSU6V_LfpqM5AJ8Z5D4Rmicjl4WZb",
      "1RkduhOykRXMPkW_35rkXdvefSUnRWmp4",
      "1L7Y5F1FYgle-1rvrqZ1EIqQGAeyo2mUP"
    ].map(id => ({ url: `https://lh3.googleusercontent.com/d/${id}` }))
  },

  // 5. LANI & SENO
  {
    id: "lani-seno",
    name: "Lani & Seno",
    date: "15 Agustus 2026",
    venue: "Villa Bukit Danau, Cipanas",
    packageKey: "eternal",
    packageName: "Eternal Package (± 8 Jam)",
    cover: "https://lh3.googleusercontent.com/d/10BZE_RaRKwoRS9SGBjABCzUefzsxoP31",
    editedVideos: [
      { url: "https://drive.google.com/file/d/1WjNqOG3YRle1VzvY7NwzpQ_cbJ3i6ofT/preview" },
      { url: "https://drive.google.com/file/d/1sjCEoP0sD49B-2N21lMLJkTCkUIBwyO7/preview" },
      { url: "https://drive.google.com/file/d/1lb-U5TWAVmNfuEf-L3yzjtEzw_QL7d7F/preview" },
      { url: "https://drive.google.com/file/d/1luYIGFYJkhxkSUtT4UH_JGPiHV_RXY21/preview" }
    ],
    randomPhotos: [
      "1ZiFgREz2cE2l8pSEUlb1VRlcNfijBcw2",
      "1tvzvSU6V_LfpqM5AJ8Z5D4Rmicjl4WZb",
      "1RkduhOykRXMPkW_35rkXdvefSUnRWmp4",
      "1L7Y5F1FYgle-1rvrqZ1EIqQGAeyo2mUP"
    ].map(id => ({ url: `https://lh3.googleusercontent.com/d/${id}` }))
  },

  // 6. DIAN & ISMA
  {
    id: "dian-isma",
    name: "Dian & Isma",
    date: "16 April 2026",
    venue: "Pasar Beas, Cianjur",
    packageKey: "vow",
    packageName: "Vow Package (Akad ± 4 Jam)",
    cover: "https://lh3.googleusercontent.com/d/10BZE_RaRKwoRS9SGBjABCzUefzsxoP31",
    editedVideos: [
      { url: "https://drive.google.com/file/d/1QEE2jxgCAcub421QVu9B2H5lj-wIYblQ/preview" },
      { url: "https://drive.google.com/file/d/1L1Mf1Rc4_h86LAJfzTIyjWwOyCg3IKfi/preview" },
      { url: "https://drive.google.com/file/d/10bajbU9i6Y0OXz2qDyANY_GeHaaW8eEl/preview" },
      { url: "https://drive.google.com/file/d/1x2PuRABz8gdrhJhrNpwmxk0-g6IMy194/preview" }
    ],
    randomPhotos: [
      "1ZiFgREz2cE2l8pSEUlb1VRlcNfijBcw2",
      "1tvzvSU6V_LfpqM5AJ8Z5D4Rmicjl4WZb",
      "1RkduhOykRXMPkW_35rkXdvefSUnRWmp4",
      "1L7Y5F1FYgle-1rvrqZ1EIqQGAeyo2mUP"
    ].map(id => ({ url: `https://lh3.googleusercontent.com/d/${id}` }))
  },

  // 7. DEON & IRDA
  {
    id: "deon-irda",
    name: "Deon & Irda",
    date: "07 Juni 2026",
    venue: "Artala, Cipanas",
    packageKey: "eternal",
    packageName: "Eternal Package (± 8 Jam)",
    cover: "https://lh3.googleusercontent.com/d/1CpMkvX4iUKk179CGZg77SU0KtHZc75xY",
    editedVideos: [
      { url: "https://drive.google.com/file/d/1b8_UUo7RQN5eYtw-ex7jw6_qqGvXuYsV/preview" },
      { url: "https://drive.google.com/file/d/1Eba2tKXkFGdtyAFpEHmhMe0VPPjh-9Op/preview" },
      { url: "https://drive.google.com/file/d/1_00VShHxERNgKGtDIcWvTC9OSQA-MFJI/preview" },
      { url: "https://drive.google.com/file/d/1vci4RFMwSBs1CChitSoWxU6f0DgYn7kM/preview" }
    ],
    randomPhotos: [
      "1CpMkvX4iUKk179CGZg77SU0KtHZc75xY",
      "1no9FEO59eoLg7Gi1Svd6TUEFasexE00k",
      "1edoI5izHV8MfmPRDzd5CWafNyVVujFYt",
      "1zxv9jM96NwrXYsKWbdtwxzzv3UJurTRB"
    ].map(id => ({ url: `https://lh3.googleusercontent.com/d/${id}` }))
  },

  // 8. ALDI & SYIFA
  {
    id: "aldi-syifa",
    name: "Aldi & Syifa",
    date: "17 Mei 2026",
    venue: "Jebrod, Cianjur",
    packageKey: "memory",
    packageName: "Memory Package (± 2 Jam)",
    cover: "https://lh3.googleusercontent.com/d/1NCcgv4cCwzrZ85gFAGAVL-aHCbbKJ1tO",
    editedVideos: [
      { url: "https://drive.google.com/file/d/1oWG0BMHgbgEqIPCbcvHkhztZjfLEN-gn/preview" },
      { url: "https://drive.google.com/file/d/1FGPS5Av2Bom1KNJm5FTMU1nh679WST3L/preview" },
      { url: "https://drive.google.com/file/d/1bP4u5zadAE3ivivhVN8keV1dcSQmDunq/preview" },
      { url: "https://drive.google.com/file/d/1rwLpUmceBU2u_rIfbkwoOuflzJ7N71pb/preview" }
    ],
    randomPhotos: [
      "1icrFk_3nMB3MzlaR_UBuRQZswBD1laEa",
      "1NCcgv4cCwzrZ85gFAGAVL-aHCbbKJ1tO",
      "1EsVIVdNnWbqEWa-vpSChcDpyEi5r1QP8",
      "1dw8YomebiVgFVVWUI8BbeKNVImWZgUP-"
    ].map(id => ({ url: `https://lh3.googleusercontent.com/d/${id}` }))
  },

  // 9. AIS & MAUL
  {
    id: "ais-maul",
    name: "Ais & Maul",
    date: "06 Juni 2026",
    venue: "Campaka, Cianjur",
    packageKey: "eternal",
    packageName: "Eternal Package (± 8 Jam)",
    cover: "https://lh3.googleusercontent.com/d/1X_FqvS6AxPxfGcPcvy8bpmyMddQjX3JE",
    editedVideos: [
      { url: "https://drive.google.com/file/d/1aWaqX4ZDyRk0L0Frz9Zo1N9VsZH6Z-qw/preview" },
      { url: "https://drive.google.com/file/d/1vQgDxBbJVpNHK3PWF9lQW0QGjk477dWw/preview" },
      { url: "https://drive.google.com/file/d/128wtr5AlsIdcZbL-5AeORJfj8IqNqHhu/preview" },
      { url: "https://drive.google.com/file/d/14QF93cDajW7o44uIYOtyglaWMSreECmo/preview" }
    ],
    randomPhotos: [
      { url: "https://lh3.googleusercontent.com/d/1X_FqvS6AxPxfGcPcvy8bpmyMddQjX3JE" },
      { url: "https://lh3.googleusercontent.com/d/1hJhD-zkTHacCtEmvBAxi3qml-xYcavbM" },
      { url: "https://lh3.googleusercontent.com/d/184aoskRRdnw2KTqqARPgKSLtnJV4UUDx" },
      { url: "https://lh3.googleusercontent.com/d/1OuDmeOHIackrHPO3k36o9N0e34r6NQjE" }
    ]
  },

    // 10. AIDA & LUTHFI
  {
    id: "aida-luthfi",
    name: "Aida & Luthfi",
    date: "14 Juni 2026",
    venue: "Warungkondang, Cianjur",
    packageKey: "eternal",
    packageName: "Eternal Package (± 8 Jam)",
    cover: "https://lh3.googleusercontent.com/d/1X_FqvS6AxPxfGcPcvy8bpmyMddQjX3JE",
    editedVideos: [
      { url: "https://drive.google.com/file/d/1aWaqX4ZDyRk0L0Frz9Zo1N9VsZH6Z-qw/preview" },
      { url: "https://drive.google.com/file/d/1vQgDxBbJVpNHK3PWF9lQW0QGjk477dWw/preview" },
      { url: "https://drive.google.com/file/d/128wtr5AlsIdcZbL-5AeORJfj8IqNqHhu/preview" },
      { url: "https://drive.google.com/file/d/14QF93cDajW7o44uIYOtyglaWMSreECmo/preview" }
    ],
    randomPhotos: [
      { url: "https://lh3.googleusercontent.com/d/1X_FqvS6AxPxfGcPcvy8bpmyMddQjX3JE" },
      { url: "https://lh3.googleusercontent.com/d/1hJhD-zkTHacCtEmvBAxi3qml-xYcavbM" },
      { url: "https://lh3.googleusercontent.com/d/184aoskRRdnw2KTqqARPgKSLtnJV4UUDx" },
      { url: "https://lh3.googleusercontent.com/d/1OuDmeOHIackrHPO3k36o9N0e34r6NQjE" }
    ]
  }
];
