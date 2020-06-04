#Dictionary merupakan struktur data yang tidak berurutan, dapat diubah, dan diindeks.
#Dictionary di Python di tulis dengan curly brackets “{ }”. Struktur Dictionary terdiri dari key dan value yang dipisahkan oleh ” : “

#Berikut cara penulisan Dictionary di Python
variabel_dict = {"key": "value"}

#Atau dapat dapat ditulis seperti ini agar lebih mudah dibaca
variabel_dict = {
        "key": "value" 
}

#Contoh penulisan Dictionary di Python
student = {
  "nama" : "nurhumaira"
}

#Contoh dengan 2 baris data (dipisahkan dengan koma jika lebih dari 1 record
student = {
  "nama" : "nurhumaira",
  "alamat" : "sasa"
}

#Nilai di dalam Dictionary bisa berupa tipe data apapun seperti integer, float, string, list atau bahkan Dictionary sendiri.
#contoh
mahasiswa = {
  "nama" : "nurhumaira",
  "umur" : 19,
  "tinggi" : 155,
  "hobi" : ["olahraga", "jalan-jalan"],
  "kontak" : {
      "email" : "viviyantiiksansangadji21@gmail.com"
  }
}
print(mahasiswa["nama"])
print(mahasiswa["umur"])
print(mahasiswa["tinggi"])
print(mahasiswa["hobi"])
print(mahasiswa["kontak"])

#Operasi di Dictionary
#Operasi Dictionary antara lain :
#Menambah data
#Menghapus data
#Mengupdate data
#Menghitung jumlah data

#1) Menambah data
#Ada dua metode untuk menambah data (key dan value) di Dictionary

#a) Pertama, dengan menambah key dan value langsung di variabel dictionary
#dictionary awal
mahasiswa = {
  "nama" : "nurhumaira",
  "umur" : 19,
  "tinggi" : 155
}

#cetak dictionary
print(mahasiswa)

#tambah key dan value 
mahasiswa["hobi"] = "makan"

#cetak dictionary
print(mahasiswa)

#b) Kedua, dengan menggunakan fungsi update()
#dictionary awal
mahasiswa = {
  "nama" : "nurhumaira",
  "umur" : 19,
  "tinggi" : 155
}

#cetak dictionary
print(mahasiswa)

#fungsi update
mahasiswa.update({"hobi" : "makan"})

#cetak dictionary
print(mahasiswa)

#2 Menghapus data
#Ada dua metode untuk menghapus data di Dictionary yaitu menggunakan perintah del dan fungsi pop().
#Kedua fungsi ini menghapus data dengan menghapus key dictionary.

#a) Pertama, dengan perintah del
#dictionary awal
mahasiswa = {
  "nama" : "nurhumaira",
  "umur" : 19,
  "tinggi" : 155
}

#cetak dictionary
print(mahasiswa)

#menghapus key
del mahasiswa["umur"]

#cetak dictionary
print(mahasiswa)

#b) Kedua, dengan fungsi pop()
# dictionary awal
mahasiswa = {
  "nama" : "nurhumaira",
  "umur" : 19,
  "tinggi" : 155
}

#cetak dictionary
print(mahasiswa)

#menghapus key
mahasiswa.pop("umur")

#cetak dictionary
print(mahasiswa)

#3 Mengupdate data
#Jadi Dictionary bersifat mutable seperti List yaitu dapat dirubah nilainya.
#untuk merubah value dari Dictionary hanya perlu mengupdate nilai pada key.

#dictionary awal
mahasiswa = {
  "nama" : "nurhumaira",
  "umur" : 19,
  "tinggi" : 155
}

#cetak dictionary
print(mahasiswa)

#mengupdate value dari key 'nama'
mahasiswa["nama"] = "Nur humaira abri"

#cetak dictionary
print(mahasiswa)

#4 Menghitung jumlah data
#Untuk menghitung jumlah / panjang data gunakan fungsi len().

#dictionary
mahasiswa = {
  "nama" : "nurhumaira",
  "umur" : 19,
  "tinggi" : 155
}

#mencetak banyak data di dict
print(len(mahasiswa))

#Maka hasilnya adalah 3 karena dictionary terdiri dari 3 baris data

#SEKIAN, DAN TERIMKASIH
#SALAM HANGAT, NurHumaira
