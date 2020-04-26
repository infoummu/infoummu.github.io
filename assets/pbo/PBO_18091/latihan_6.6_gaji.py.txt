def hitung_gaji():
    nama=(input("masukan nama anda:"))
    gol=(input("masukan golongan anda:"))
    if gol=="1":
        gaji=1000000
        tunjangan=250000
        total=gaji+tunjangan
        print(f"total gaji anda adalah: {total}")
    elif gol=="2":
        gaji=2000000
        tunjangan=500000
        total=gaji+tujangan
        print(f"total gaji anda adalah: {total}")
    elif gol=="3":
        gaji=3000000
        tunjangan=750000
        total=gaji+tunjangan
        print(f"total gaji anda adalah: {total}")

    else:

        print("tolong masukan golongan anda")

#pemanggilan fungsi
print("selamat datang di program gaji")
print("----------------------------------------------------------------------")
devisi=input("masukan devisi anda: ")
if devisi=="kantor":
    hitung_gaji()
elif divisi=="lapangan":
    hitung_gaji()
    tranportasi=100000
    print("tambahan tunjangan lapangan",tranportasi)
else:
    print("devisi yang anda masukan salah")
