#konsep method Constructor
# Constructor bisa digunakan untu membuat proses awal dalam mempersiapkan objek,seperti memberi nilai awal kepada property,
# memanggil method internal dan beberapa proses lain yang digunakan untuk 'mempersiapkan' objek.

#konsep method Destructor
# Destructor biasanya digunakan untuk 'membersihkan' beberapa 'variabel' atau menjalankan proses tertentu sebelum objek dihapus.

#studi kasus
print("Selamat Datang di Program Pajak Bulanan")
print("-------------------------------------------")
pajak=input("masukan jenis pajak anda: ")
if pajak=="sepeda motor":
    print(f"pajak anda sebesar :Rp 1.000.000")
    
elif pajak=="mobil":
    print(f"pajak anda sebesar :Rp 2.500.000")
else:
    print("jenis pajak salah")