---
title: Kuliah Pemrograman Game P5
published: true
---

## PERTEMUAN LIMA 05 - Praktikum 4  :

|Status   | : Offline                      |
|Schedule | : Offline                      |
|Waktu    | : 24/11/2021                   |
|Tema     | : Praktikum 4 Pemrograman Game |

### Modul Praktikum 4

1. Doanload Modul berikut : [Modul Praktikum 4](assets/reff/pgame/Modul_Pgame_prak_4.pdf){:target="_blank"}

### HASIL Praktukum Kumpul ke dropbox

1. Mahasiswa diharapkan membaca Modul dan melakukan praktikum sesuai dengan arahan yang ada di modul,

2. Kerjakan praktikum bersama teman2 lebih bagus sehingga bisa bertanya bagian materi yang tidak dipahami ke teman belajarnya, atau bisa juga bertanya langsung ke saya bisa lewat grup WA atau langsung WA personal...

3. Lakukan praktikum dan usahakan hasil praktikum tidak error, setelah itu upload/kirim ke folder `Pgame` pada akun `dropbox` anda masing-masing !.


### Waktu Kumpul

- Diharapkan agar sudah mengumpulkan hasil praktikum Pemrograman Game ke folder `PGame` di `dropbox` nya masing2 SEBELUM Praktikum selanjutnya.S

### Script untuk di Filekan
 
#### 1. Code 14 - praktikum4_14_pgame_npm.py

```python


# Simpan dengan nama : praktikum4_14_pgame_npm.py
# Pemrograman Game Praktikum 4
# latihan code 14 : Numerik (integer dan float)

# buat variabel dan beri nilai
a = 4
b = 5
c = 6.3

# cetak variabel ke layar
print(a)
print(b)
print(c)

# cetak '*' sebanyak 35 kali
print('*'*35)

# cetak variabel dengan keterangan ke layar
print("Variable A :", a )
print("Variable B : %d " % b )
print("Variable C : %f " % c )
print('*'*35)

# cetak variabel dengan keterangan ke laya
# operasi + , * , / dan cetak ke layar
print("Variable A+B : ", a+b )
print("Variable A*B : ", a*b )
print("Variable C/3 : ", c/3 )

    
```

#### 1. Code 15 - praktikum4_15_pgame_npm.py

```python

# Simpan dengan nama file : praktikum4_15_pgame_npm.py
# Pemrograman Game Praktikum 4
# latihan code 15 : string

myvar="Informatika UMMU"
print(myvar)

# cetak colom 0 (pertama) dari variabel myvar
print(myvar[0]) 

# cetak colom 0 dengan keterangan
print("myvar  [0] : ", myvar[0])

# cetak colom awal sampai colom ke 4 
print(myvar[:3])

# cetak colom awal sampai colom ke 4 dengan keterangan
print("myvar  [:3] : ", myvar[:3])

# cetak semua kecuali colom 0 (pertama)
print(myvar[1:])

# cetak semua kecuali colom 0 (pertama) dengan keterangan
print("myvar  [1:] : ", myvar[1:])

# cetak semua kecuali colom terakhir
print(myvar[:-1])

# cetak semua kecuali colom terakhir dengan keterangan
print("myvar  [:-1] : ", myvar[:-1]) 

```

#### 1. Code 15 - praktikum4_151_pgame_npm.py

```python

# Simpan dengan nama : praktikum4_151_pgame_npm.py
# Pemrograman Game Praktikum 4
# latihan code 15 : string

# Buat variabel dan memberikan nilai
prodi = "Prodi Informatika"
konsen = "Jaringan"
mata_kuliah = "Pemrograman Game"
kampus = "UMMU"
lokasi = "Ternate"
tahun = 2019

# Menampilkan nilai variabel ke layar
print(prodi)
print(konsen)
print(mata_kuliah)
print(kampus)
print(lokasi)

# Cetak '*' sebanyak 35 kali
print( '*' * 35 )

# Cetak nilai variabel ke layar dengan keterangan
print("Prodi : ", prodi)
print("Konsentrasi : ", konsen)
print("Mata Kuliah : ", mata_kuliah)
print("Kampus : %s " % kampus)
print("Lokasi : %s " % lokasi)
print("Tahun  : %d " % tahun)

# Cetak '*' sebanyak 35 kali
print( '*' * 35 )

# Cetak variabel prodi dan kampus  
print("Prodi & Kampus : ", prodi, ",", kampus) 	    # cara 1
print("Prodi dan Kampus : ", prodi + ", " + kampus)   # cara 2
print("Prodi dan Kampus :  %s, %s " % (prodi, kampus))# cara 3

```

#### 1. Code 16 - praktikum4_16_pgame_npm.py

```python

# Simpan dengan nama : praktikum4_16_pgame_npm.py
# Pemrograman Game Praktikum 4
# latihan code 16 : List

# Buat variabel dan memberikan elemen
buah=["Durian","Mangga","Rambutan","Anggur","Pepaya"]

# cetak list buah 
print(buah)

# cetak elemen pertama list (elemen pertama adalah 0)
print("Buah [0] ", buah[0])

# cetak elemen kedua list (elemen kedua adalah 1)
print("Buah [1] ", buah[1])

# cetak elemen ketiga list sampai akhir elemen 
print("Buah [2:] ", buah[2:])

# cetak elemen terakhir list ( [-1] adalah elemen terakhir)
print("Buah [-1] ", buah[-1])

Print("*"*35)
# Silahkan Simpan dulu lalu Jalankan script anda,
# Lanjutkan setelah melihat hasil

# Buat variabel list mylist dan memberikan elemen
mylist=["Ternate", 1000, 2000, "Tidore", "Maitara", 3000]

# cetak list mylist
print("mylist : ", mylist)

# cetak list elemen pertama sampai elemen ke 3
print("mylist [:3] : ", mylist[:3])

# cetak list elemen ke 2 dan ke 3
print("mylist[1] : ", mylist[1])
print("mylist[2] : ", mylist[2])

# operasi antar elemen list : elemen ke 2 + elemen ke 3
print("mylist[1] + mylist[2] : ", mylist[1] + mylist[2])

```

#### 1. Code 16 - praktikum4_161_pgame_npm.py

```python

# Simpan dengan nama : praktikum4_161_pgame_npm.py
# Pemrograman Game Praktikum 4
# latihan code 16 : List

# Buat variabel dan memberikan elemen
buah=["Durian","Mangga","Rambutan"]

# cetak list buah 
print(buah)

print("Sebelum ditambah :", buah)
# tambah elemen ke dalam list buah di bagian akhir
buah.append("Anggur")
print("Setelah ditambah :", buah)

# tambah elemen ke list sesuai posisi (0 adalah diawal)
buah.insert(0, "Pepaya")
print("Setelah ditambah :", buah)

# hapus elemen list yang ke 1 (1 adalah bagian ke 2)
buah.remove(buah[1])
print("Setelah dihapus [1] :", buah)

# hapus elemen list yang bernilai "Anggur"
buah.remove("Anggur")
print("Setelah dihapus (Anggur) : ", buah)


```



***
By: Ikhwan.
