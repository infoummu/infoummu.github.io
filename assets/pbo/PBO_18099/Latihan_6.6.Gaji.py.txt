#pembuatan fungsi
def hitung_gaji():

    nama = (input("Masukan Nama Anda : "))
    gol = (input("Masukan Golongan : "))
    if gol == "1":
        gaji = 1000000
        tunjangan = 250000
        total = gaji + tunjangan
        print(f"Total Gaji Yang Anda Terima {total}")
    elif gol == "2":
        gaji = 2000000
        tunjangan = 500000
        total = gaji + tunjangan
        print(f"Total Gaji Yang Anda Terima {total}")
    elif gol == "3":
        gaji = 3000000
        tunjangan = 700000
        total = gaji + tunjangan
        print(f"Total Gaji Yang Anda Terima {total}")
    else:
        print("Mohon Masukan Golongan Anda")

#pemanggilan fungsi
    print("Selamat Datang Di Program Hitung Gaji")
    print("-------------------------------")
    devisi = input ("Masukan Devisi Anda : ")
    if devisi=="Lapangan":
        hitung_gaji()
        transportasi = 100000
        print("Tambah Tunjangan Lapangan", transportasi)
    else:
        print("Devisi Yang Anda Masukan Salah")