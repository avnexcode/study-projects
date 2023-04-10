#include <iostream>
#include <array>
using namespace std;

int main()
{
    array<string, 5> nilai = {"Aziz", "Ichwan", "Amix", "Diki", "Rafa"};
    for (int i = 0; i <= 5; i++)
    {
        cout << nilai[i] << endl;
    }
    cout << nilai.size() << endl;
    cout << nilai.at(1) << endl;
    cin.get();
    return 0;
}