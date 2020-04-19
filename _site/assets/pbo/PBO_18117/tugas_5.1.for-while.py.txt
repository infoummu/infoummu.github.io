
#mengihitungfaktorial
# Program menghitung faktorialsil = 1
n = input("Masukkan n: ")
for i in range(1, n+1):
  hasil = hasil * i
print "Faktorial: ", n, " = ", hasil
# menggunakan while
hasil = 1
counter = 1
n = input("Masukkan n: ")
while counter<=n:
hasil = hasil * counter
counter = counter + 1
print "Faktorial: ", n, " = ", hasil