---
title: Kuliah Pemrograman Game P7
published: true
---


## PERTEMUAN TUJUH 07 -Praktikum 6 :

|Status   | : Offline                      |
|Schedule | : Offline                      |
|Waktu    | : 08/12/2021                  |
|Tema     | : Praktikum 6 Pemrograman Game|

### Modul Praktikum 6

1. Diharapkan Mahasiswa mengikuti arahan yang ada di modul dalam mengerjakan praktikum setelah mendownload modulnya pada tautan dibawah ini
2. Doanload Modul berikut : [Modul Praktikum 6](assets/reff/pgame/Modul_Pgame_prak_6.pdf){:target="_blank"}


### HASIL Praktukum Kumpul ke dropbox

1. Mahasiswa diharapkan membaca Modul dan melakukan praktikum sesuai dengan arahan yang ada di modul,

2. Kerjakan praktikum bersama teman2 lebih bagus sehingga bisa bertanya bagian materi yang tidak dipahami ke teman belajarnya, atau bisa juga bertanya langsung ke saya bisa lewat grup WA atau langsung WA personal...

3. Lakukan praktikum dan usahakan hasil praktikum tidak error, setelah itu upload/kirim ke folder `Pgame` pada akun `dropbox` anda masing-masing !.


### Waktu Kumpul

- Diharapkan agar sudah mengumpulkan hasil praktikum Pemrograman Game ke folder `PGame` di `dropbox` nya masing2, paling lambat sebelum UTS


### Script di Modul : 

### CODE 22 : praktikum6_22_pgame_npm.py

```python 

# Simpan dengan nama : praktikum6_22_pgame_npm.py
# Pemrograman Game Praktikum 6
# latihan code 22 : Perulangan (Loop) while

batas='*'*30
# Contoh 1
x = 0
while (x < 5):		# jika x lebih kecil dari 5 maka ulangi
#	x = x + 1
	x += 1			# x + 1 
	print(" Praktikum 6 no.", x) 

print(batas)
# Contoh 2
# kombinasi while, if dan break
a = 0
while a < 6:
	print(" no a == ", a)
	if a == 3:	# kondisional, jika sampai angka 3 maka
		break	# berhenti perulangan
	a += 1

print(batas)
# Contoh 3
# kombinasi while, if dan continue
b = 0
while b < 6:
	b += 1
	if b == 3:
		print("B == ", b)
		continue	# lanjutkan perulangan
	print(b)


```

### CODE 23 : praktikum6_23_pgame_npm.py

```python 

# Simpan dengan nama : praktikum6_23_pgame_npm.py
# Pemrograman Game Praktikum 6
# latihan code 23 : Perulangan (Loop) for

batas='*'*30 

# Contoh 1
loyang = ["Apel", "Pisang", "Durian", "Melon"]
for buah in loyang:
	print(buah)

# Contoh 2
print(batas)
for x in range(5):
	print("Hallo Anak Info")
#	print(x)

# Contoh 3
print(batas)
jumlah = 5
teks = "Informatika "
for x in range(jumlah):
	print(teks, end=',')

# Contoh 4
print(batas)
for buah in loyang:
	print(buah)
	if buah == "Pisang":
		break

print(batas)
# Contoh 5
for x in range(10,0,-1):
	print(x)

print(batas)
# Contoh 6
for x in range(10,0,-2):
	print(x)

```


### CODE 24 : praktikum6_24_pgame_npm.py

```python 

# Simpan dengan nama : praktikum6_24_pgame_npm.py
# Pemrograman Game Praktikum 6
# latihan code 24 : Fungsi / Function

# Contoh Fungsi 1, nama fungsi : myfungsi
def myfungsi():
	print("Ini dicetak dari myfungsi") # isi fungsi

# Contoh Fungsi 2, nama fungsi : my_fungsi
def my_fungsi():
	print("Ini dicetak dari my_fungsi") # isi fungsi


# Contoh Fungsi 3, nama fungsi : tambah_1
def tambah_1():
	print("t1 :", 4+4)

# Contoh Fungsi 4, nama fungsi : tambah_2
def tambah_2(): 
	a=4
	b=4
	print("t2 :", a+b)

# Contoh Fungsi 5, menggunakan parameter
def cetak_kata(kata):
	print("Kata yang dicetak :", kata)

# Memanggil Fungsi, caranya :
# tulis nama fungsi diikuti dengan "()" 

myfungsi()	# Memanggil Fungsi myfungsi
my_fungsi()	# Memanggil Fungsi my_fungsi
tambah_1()	# Memanggil Fungsi tambah_1
tambah_2()	# Memanggil Fungsi tambah_2
# Memanggil Fungsi cetak_kata dengan parameter
cetak_kata("Hallo")

```


***
By: ikhwan@fedora-linux