#Dictionary adalah stuktur data yang bentuknya seperti kamus. 
#Ada kata kunci kemudian ada nilaninya. Kata kunci harus unik, 
#sedangkan nilai boleh diisi denga apa saja.

# Membuat Dictionary
ira_abri = {
    "nama": "ira abri",
    "umur": 19,
    "hobi": ["makan", "jalan", "ngemoll"],
    "menikah": False,
    "sosmed": {
        "facebook": "iraabri",
        "twitter": "@irakode"
    } 
}

# Mengakses isi dictionary
print("Nama saya adalah %s" % ira_abri["nama"])
print("Twitter: %s" % ira_abri["sosmed"]["twitter"])
