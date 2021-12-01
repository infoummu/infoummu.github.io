---
title: Kuliah Pemrograman Game P5
published: true
---

## PERTEMUAN ENAM 06 - Praktikum 5 :

|Status  | : Offline                      |
|Schedule | : Offline                     |
|Waktu   | : 01/12/2021                  |
|Tema    | : Praktikum 5 Pemrograman Game|

### Modul Praktikum 5

1. Doanload Modul berikut : [Modul Praktikum 5](assets/reff/pgame/Modul_Pgame_prak_5.pdf){:target="_blank"}

### HASIL Praktukum Kumpul ke dropbox

1. Mahasiswa diharapkan membaca Modul dan melakukan praktikum sesuai dengan arahan yang ada di modul,

2. Kerjakan praktikum bersama teman2 lebih bagus sehingga bisa bertanya bagian materi yang tidak dipahami ke teman belajarnya, atau bisa juga bertanya langsung ke saya bisa lewat grup WA atau langsung WA personal...

3. Lakukan praktikum dan usahakan hasil praktikum tidak error, setelah itu upload/kirim ke folder `Pgame` pada akun `dropbox` anda masing-masing !.


### Waktu Kumpul

- Diharapkan agar sudah mengumpulkan hasil praktikum Pemrograman Game ke folder `PGame` di `dropbox` nya masing2, paling lambat sebelum Pertemuan akan datang.

### File Script di Modul : 

#### Code 17 : praktikum5_17_pgame_npm.py

```python
# Simpan dengan nama : praktikum5_17_pgame_npm.py
# Pemrograman Game Praktikum 5
# latihan code 17 : List (lanjutan)

# Buat variabel dan memberikan elemen
buah=["Durian","Mangga","Rambutan"]

# print jumlah element list
print(“Jumlah Element :”, len(buah))

# tambah element yang sama 
buah.append("Mangga")

# hitung element “Mangga” → hasil 2 
print(“Jumlah Buah Mangga:”, buah.count("Mangga"))

# Tambah list ke dalam list buah
buah.append(["Salak","Nangka","Apel"])

# print list buah setelah ditambah
print(“List Buah :”, buah)
```

#### Code 18 : praktikum5_18_pgame_npm.py

```python

# Simpan dengan nama : praktikum5_18_pgame_npm.py
# Pemrograman Game Praktikum 5
# latihan code 18 : Tuple

# Buat variabel dan memberikan elemen
buah=('Durian', 'Mangga', 'Rambutan', 'Mangga')

# print jumlah element Tuple
print(“Jumlah Element :”, len(buah))

# tambah element yang sama 
buah.append("Mangga")

# hitung element “Mangga” → hasil 2 
print(“Jumlah Buah Mangga:”, buah.count("Mangga"))

# buat tuple dalam tuple
buah=('Durian', 'Mangga', 'Rambutan', 'Mangga','Salak', 		('Nangka', 'Apel'))

# print tuple buah posisi ke [-1][0] => “Nangka”
print(“Bauah [-1][0] :”, buah[-1][0])

# Mengubah element tuple
x_buah = list(buah)
x_buah[0] = “Melon”
Buah = tuple(x_buah)

# Print hasil yang diubah : element [0] => “Melon”
print(“Tuple :”, buah)


```


#### Code 19 : praktikum5_19_pgame_npm.py

```python

# Simpan dengan nama : praktikum5_19_pgame_npm.py
# Pemrograman Game Praktikum 5
# latihan code 19 : Dictionary

# Buat variabel dan memberikan nilai elemen
dc = { "Kampus":"UMMU", "Prodi":"Info", "Lokasi":"Ternate", 	  "Tahun":2019 }

# print elemen dengan key “Tahun”
print(dc["Tahun"])

# Cara lain untuk print element dengan key “Tahun”
print(dc.get("Tahun"))
 
# Mengubah nilai(value) dari sebuah key “tahun”
dc[“Tahun”]= 2020
dc[“Lokasi”] = “Sasa”

# print dc (dictionary) setelah perubahan
print(“Dictionary :”, dc)
```

#### Code 20 : praktikum5_20_pgame_npm.py

```python

# Simpan dengan nama : praktikum5_20_pgame_npm.py
# Pemrograman Game Praktikum 5
# latihan code 20 : Sets

# Buat variabel set dan memberikan nilai elemen
buah = {'Durian', 'Mangga', 'Salak', 'Mangga','Salak', 		   'Durian'}

# print set
print(“Element Set :”, buah)

# menambah satu elemen ke dalam set
buah.add(“Melon”)

# menambah lebih dari satu elemen ke set
buah.update([“Pepaya”, “Semangka”])

# print set setelah perubahan penambahan
print(“Element Set :”, buah)
```


#### Code 21 : praktikum5_21_pgame_npm.py

```python

# Simpan dengan nama : praktikum5_21_pgame_npm.py
# Pemrograman Game Praktikum 5
# latihan code 21 : Kondisional

# Buat variabel A dan B
A = 50
B = 20

# menggunakan kondisionak if
if A > B:
	print(“A lebih besar dari B”)
# setelah tanda “:” merupakan  awal blok, 
# penulisan harus masuk beberapa spasi
# atau menggunakan tab
 
# menggunakan kondisionak if, elif
if A > B:
	print(“A lebih besar dari B”)
elif A == B:
	print(“A sama dengan B”)

# menggunakan kondisionak if, elif, else
if A > B:
	print(“A lebih besar dari B”)
elif A == B:
	print(“A sama dengan B”)
else:
	print(“A Lebih Kecil dari B”)
```

***
By: ikhwan@fedora-linux
