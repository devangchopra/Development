x=[]
a=int(input("Enter No. of Rows"))
b=int(input("Enter No. of Coloumns"))
for i in range(0,a):
    p=[]
    for j in range(0,b):
        n=int(input("Enter Elements"))
        p.append(n)
    x.append(p)



for i in range(0,a):
    for j in range(0,b):
        print(x[i][j],end="")
    print()
    
        
