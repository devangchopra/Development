if __name__ == '__main__':
    n = int(input())
    student_marks = {}
    avg=0
    for _ in range(n):
        name, *line = input().split()
        scores = list(map(float, line))
        student_marks[name] = scores
    query_name = input()
    x=student_marks[query_name]
    for i in range(x):
        avg=avg+a[i]
    savg=avg/len(x)
    print(savg)
    



