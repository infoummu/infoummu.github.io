def hitung_gaji():
    nama=(input("masukan Nama anda: "))
    gol=(input("masukan golongan: "))
    if gol == "1":
            gaji=1000000
            tunjangan = 250000 
            total=gaji+tunjangan
            print(f"Total gaji yang  anda terima {total}")
    elif gol == "2":
             gaji=2000000
             tunjangan = 500000
             total=gaji+tunjangan
             print(f"Total gaji yang anda terima {total}")
    elif gol == "3":
             gaji=3000000
             tunjangan = 700000
             total=gaji+tunjangan
             print(f"Total gaji yang anda terima {total}")
    else:
             print("mohon masukan golongan anda")

