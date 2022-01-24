module.exports = {
    answers:[
       `#include <cmath>
        #include <cstdio>
        #include <vector>
        #include <iostream>
        #include <algorithm>
        using namespace std;

        int solveMeFirst(int a, int b) {
        // Hint: Type return a+b; below:
            return a+b;
        }

        int main() {
        int num1, num2;
        int sum;
        cin>>num1>>num2;
        sum = solveMeFirst(num1,num2);
        cout<<sum;
        return 0;
        }`,
        `#include <bits/stdc++.h>

        using namespace std;
        
        string ltrim(const string &);
        string rtrim(const string &);
        vector<string> split(const string &);
        
        /*
         * Complete the 'simpleArraySum' function below.
         *
         * The function is expected to return an INTEGER.
         * The function accepts INTEGER_ARRAY ar as parameter.
         */
        
        int simpleArraySum(vector<int> ar) {
            int sum = 0;
            for(int i=0; i<ar.size(); i++){
                sum+=ar[i];
            }
            return sum;
        }
        
        int main()
        {
            ofstream fout(getenv("OUTPUT_PATH"));
        
            string ar_count_temp;
            getline(cin, ar_count_temp);
        
            int ar_count = stoi(ltrim(rtrim(ar_count_temp)));
        
            string ar_temp_temp;
            getline(cin, ar_temp_temp);
        
            vector<string> ar_temp = split(rtrim(ar_temp_temp));
        
            vector<int> ar(ar_count);
        
            for (int i = 0; i < ar_count; i++) {
                int ar_item = stoi(ar_temp[i]);
        
                ar[i] = ar_item;
            }
        
            int result = simpleArraySum(ar);
        
            fout << result << "\n";
        
            fout.close();
        
            return 0;
        }
        
        string ltrim(const string &str) {
            string s(str);
        
            s.erase(
                s.begin(),
                find_if(s.begin(), s.end(), not1(ptr_fun<int, int>(isspace)))
            );
        
            return s;
        }
        
        string rtrim(const string &str) {
            string s(str);
        
            s.erase(
                find_if(s.rbegin(), s.rend(), not1(ptr_fun<int, int>(isspace))).base(),
                s.end()
            );
        
            return s;
        }
        
        vector<string> split(const string &str) {
            vector<string> tokens;
        
            string::size_type start = 0;
            string::size_type end = 0;
        
            while ((end = str.find(" ", start)) != string::npos) {
                tokens.push_back(str.substr(start, end - start));
        
                start = end + 1;
            }
        
            tokens.push_back(str.substr(start));
        
            return tokens;
        }
        `,
        `
        #include <bits/stdc++.h>

        using namespace std;

        string ltrim(const string &);
        string rtrim(const string &);
        vector<string> split(const string &);

        /*
        * Complete the 'compareTriplets' function below.
        *
        * The function is expected to return an INTEGER_ARRAY.
        * The function accepts following parameters:
        *  1. INTEGER_ARRAY a
        *  2. INTEGER_ARRAY b
        */

        vector<int> compareTriplets(vector<int> a, vector<int> b) {
            int x = 0;
            int y = 0;
            vector<int> v;
            for(int i=0; i<3; i++){
                if(a[i]>b[i]){
                    x++;
                }
                else if(a[i]<b[i]){
                    y++;
                }
                else{
                    
                }
            }
            v.push_back(x);
            v.push_back(y);
            return v;
            
        }

        int main()
        {
            ofstream fout(getenv("OUTPUT_PATH"));

            string a_temp_temp;
            getline(cin, a_temp_temp);

            vector<string> a_temp = split(rtrim(a_temp_temp));

            vector<int> a(3);

            for (int i = 0; i < 3; i++) {
                int a_item = stoi(a_temp[i]);

                a[i] = a_item;
            }

            string b_temp_temp;
            getline(cin, b_temp_temp);

            vector<string> b_temp = split(rtrim(b_temp_temp));

            vector<int> b(3);

            for (int i = 0; i < 3; i++) {
                int b_item = stoi(b_temp[i]);

                b[i] = b_item;
            }

            vector<int> result = compareTriplets(a, b);

            for (size_t i = 0; i < result.size(); i++) {
                fout << result[i];

                if (i != result.size() - 1) {
                    fout << " ";
                }
            }

            fout << "\n";

            fout.close();

            return 0;
        }

        string ltrim(const string &str) {
            string s(str);

            s.erase(
                s.begin(),
                find_if(s.begin(), s.end(), not1(ptr_fun<int, int>(isspace)))
            );

            return s;
        }

        string rtrim(const string &str) {
            string s(str);

            s.erase(
                find_if(s.rbegin(), s.rend(), not1(ptr_fun<int, int>(isspace))).base(),
                s.end()
            );

            return s;
        }

        vector<string> split(const string &str) {
            vector<string> tokens;

            string::size_type start = 0;
            string::size_type end = 0;

            while ((end = str.find(" ", start)) != string::npos) {
                tokens.push_back(str.substr(start, end - start));

                start = end + 1;
            }

            tokens.push_back(str.substr(start));

            return tokens;
        }
        `,
        `#include <bits/stdc++.h>

        using namespace std;
        
        string ltrim(const string &);
        string rtrim(const string &);
        vector<string> split(const string &);
        
        /*
         * Complete the 'aVeryBigSum' function below.
         *
         * The function is expected to return a LONG_INTEGER.
         * The function accepts LONG_INTEGER_ARRAY ar as parameter.
         */
        
        long aVeryBigSum(vector<long> ar) {
            long sum = 0;
            for(int i=0; i<ar.size(); i++){
                sum+=ar[i];
            }
            return sum;
        }
        
        int main()
        {
            ofstream fout(getenv("OUTPUT_PATH"));
        
            string ar_count_temp;
            getline(cin, ar_count_temp);
        
            int ar_count = stoi(ltrim(rtrim(ar_count_temp)));
        
            string ar_temp_temp;
            getline(cin, ar_temp_temp);
        
            vector<string> ar_temp = split(rtrim(ar_temp_temp));
        
            vector<long> ar(ar_count);
        
            for (int i = 0; i < ar_count; i++) {
                long ar_item = stol(ar_temp[i]);
        
                ar[i] = ar_item;
            }
        
            long result = aVeryBigSum(ar);
        
            fout << result << "\n";
        
            fout.close();
        
            return 0;
        }
        
        string ltrim(const string &str) {
            string s(str);
        
            s.erase(
                s.begin(),
                find_if(s.begin(), s.end(), not1(ptr_fun<int, int>(isspace)))
            );
        
            return s;
        }
        
        string rtrim(const string &str) {
            string s(str);
        
            s.erase(
                find_if(s.rbegin(), s.rend(), not1(ptr_fun<int, int>(isspace))).base(),
                s.end()
            );
        
            return s;
        }
        
        vector<string> split(const string &str) {
            vector<string> tokens;
        
            string::size_type start = 0;
            string::size_type end = 0;
        
            while ((end = str.find(" ", start)) != string::npos) {
                tokens.push_back(str.substr(start, end - start));
        
                start = end + 1;
            }
        
            tokens.push_back(str.substr(start));
        
            return tokens;
        }
        
        `,
        `#include <bits/stdc++.h>

        using namespace std;
        
        string ltrim(const string &);
        string rtrim(const string &);
        vector<string> split(const string &);
        
        /*
         * Complete the 'aVeryBigSum' function below.
         *
         * The function is expected to return a LONG_INTEGER.
         * The function accepts LONG_INTEGER_ARRAY ar as parameter.
         */
        
        long aVeryBigSum(vector<long> ar) {
            long sum = 0;
            for(int i=0; i<ar.size(); i++){
                sum+=ar[i];
            }
            return sum;
        }
        
        int main()
        {
            ofstream fout(getenv("OUTPUT_PATH"));
        
            string ar_count_temp;
            getline(cin, ar_count_temp);
        
            int ar_count = stoi(ltrim(rtrim(ar_count_temp)));
        
            string ar_temp_temp;
            getline(cin, ar_temp_temp);
        
            vector<string> ar_temp = split(rtrim(ar_temp_temp));
        
            vector<long> ar(ar_count);
        
            for (int i = 0; i < ar_count; i++) {
                long ar_item = stol(ar_temp[i]);
        
                ar[i] = ar_item;
            }
        
            long result = aVeryBigSum(ar);
        
            fout << result << "\n";
        
            fout.close();
        
            return 0;
        }
        
        string ltrim(const string &str) {
            string s(str);
        
            s.erase(
                s.begin(),
                find_if(s.begin(), s.end(), not1(ptr_fun<int, int>(isspace)))
            );
        
            return s;
        }
        
        string rtrim(const string &str) {
            string s(str);
        
            s.erase(
                find_if(s.rbegin(), s.rend(), not1(ptr_fun<int, int>(isspace))).base(),
                s.end()
            );
        
            return s;
        }
        
        vector<string> split(const string &str) {
            vector<string> tokens;
        
            string::size_type start = 0;
            string::size_type end = 0;
        
            while ((end = str.find(" ", start)) != string::npos) {
                tokens.push_back(str.substr(start, end - start));
        
                start = end + 1;
            }
        
            tokens.push_back(str.substr(start));
        
            return tokens;
        }
        `
    ]
}