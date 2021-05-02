#include<iostream>
#include<fstream>
#include<strings.h>
#include<stdio.h>
using namespace std;
class dictionary
{
public:
    char word[50];
private:
    char meaning[150];
public:
    void accept()
    {
        cout<<"Enter Word";
        cin>>this->word;
        cout<<endl<<"Enter Meaning";
        cin>>this->meaning;
        cout<<endl<<"Successfully Added"<<endl;
    }
    void display()
    {
        cout<<endl<<word<<"\t\t"<<meaning;
    }
};
dictionary obj;
void addword()
{
    obj.accept();
    fstream writingobj;
    writingobj.open("d:\\File Handling\\dictionary.txt",ios::app);
    writingobj.write((char*)&obj,sizeof(obj));
    writingobj.close();
}
void readwords()
{
    fstream readingobj;
    readingobj.open("d:\\File Handling\\dictionary.txt",ios::in);
    readingobj.seekg(0,ios::end);
    int n=readingobj.tellg();
    int nwords=n/sizeof(obj);

    readingobj.seekg(0,ios::beg);
    for (int i=1;i<=nwords;i++)
    {
        readingobj.read((char*)&obj,sizeof(obj));
        obj.display();

    }
    cout<<endl;

}
void searchs()
{
    char ss[50];
    cout <<endl<<"Enter Word to be Searched";
    cin>>ss;
    fstream rd;
    rd.open("d:\\File Handling\\dictionary.txt",ios::in);
    rd.seekg(0,ios::end);
    int n=rd.tellg();
    int nwords=n/sizeof(obj);
    rd.seekg(0,ios::beg);
    for (int i=1;i<=nwords;i++)
    {
        rd.read((char*)&obj,sizeof(obj));
        if (strcmp(ss,obj.word)==0)
        {
            obj.display();

        }
    }
}
void removes()
{
    fstream rd;
    fstream wr;

    rd.open("d:\\File Handling\\dictionary.txt",ios::in);
    wr.open("d:\\File Handling\\temp.txt",ios::out);

    char s[50];
    cout<<endl<<"Enter Word to be Deleted";
    cin>>s;

    rd.seekg(0,ios::end);

    int n=rd.tellg();

    int nwords=n/sizeof(obj);

    rd.seekg(0,ios::beg);

    rd.read((char*)&obj,sizeof(obj));
    for (int i=1;i<=nwords;i++)
    {
        if (strcmp(obj.word,s))
        {
            wr.write((char*)&obj,sizeof(obj));
        }
        else if (strcmp(obj.word,s)==0)
        {
            cout<<"Word Deleted ";
        }
        rd.read((char*)&obj,sizeof(obj));
    }
    rd.close();

    wr.close();
    remove("d:\\File Handling\\dictionary.txt");
    rename("d:\\File Handling\\temp.txt","d:\\File Handling\\dictionary.txt");

}

void update_word()
{
    fstream read,write;
    read.open("d:\\File Handling\\dictionary.txt",ios::in);
    write.open("d:\\File Handling\\temp.txt",ios::out);
    char s[50];
    cout<<endl<<"Enter Word to be updated";
    cin>>s;
    read.seekg(0,ios::end);
    int n=read.tellg();
    int nwords=n/sizeof(obj);
    read.seekg(0,ios::beg);


    for (int i=1;i<=nwords;i++)
    {
        read.read((char*)&obj,sizeof(obj));
        if(strcmp(obj.word,s)==0)
        {
            obj.accept();
        }
        write.write((char*)&obj,sizeof(obj));
    }
    read.close();
    write.close();
    remove("d:\\File Handling\\dictionary.txt");
    rename("d:\\File Handling\\temp.txt","d:\\File Handling\\dictionary.txt");
}

int main()
{
    int flag=0;
    while(flag!=1)
    {

    cout<<"********************************************************************************"<<endl;
    cout<<"\t\t\t WELCOME TO DICTIONARY \t\t\t\t\t\t"<<endl; //ok
    cout<<"\t\t\t CHOOSE AN OPTION \t\t\t\t\t\t"<<endl;      //ok
    cout<<"Enter 1 to Add Word \t\t"<<endl;                  //ok

    cout<<"Enter 2 to Search Word \t\t"<<endl;               //ok
    cout<<"Enter 3 to Read Words \t\t"<<endl;                //ok
    cout<<"Enter 4 to Remove Word \t\t"<<endl;               //ok
    cout<<"Enter 5 to Update Word \t\t"<<endl;               //ok
    cout<<"Enter 6 to Exit        \t\t"<<endl;               //ok
    cout<<"********************************************************************************"<<endl;
    int n;
    cout<<"Enter :: ";
    cin>>n;
    cout<<endl;
    if (n==1)
    {
        addword();
    }
    else if (n==2)
    {
        searchs();
    }
    else if (n==3)
    {
        readwords();
    }
    else if (n==4)
    {
        removes();
    }
    else if(n==5)
    {
        update_word();
    }
    else if(n==6)
    {
        flag=1;
    }
    }

}
