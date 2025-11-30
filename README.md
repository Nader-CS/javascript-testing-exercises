# JavaScript Testing Exercises (Vitest)

This repository contains **50 JavaScript testing exercises that I personally created and implemented** to practice, improve, and demonstrate my real-world experience with **Vitest**.  

Each exercise focuses on a different testing concept—starting from basic tests and progressing into advanced mocking, async behavior, timers, spying, and coverage.

These exercises serve as a practical portfolio of my testing skills.

---

## 📚 Contents Overview

The exercises cover:

- Basic tests  
- Async and Promise handling  
- Mocking modules  
- Spying and assertions  
- Timers, dates, and time control  
- Snapshot testing  
- Coverage and branching  
- Utility and edge case testing  
- Advanced mocking scenarios  
- Advanced async flows  

A total of **50 exercises**, grouped into 10 sections.

---

# 📌 **1. BASIC TESTS (BEGINNER)**

1. Simple addition function  
2. Object comparison matchers  
3. Array matchers  
4. Truthiness tests (`isAdult`)  
5. Thrown error testing (`divide`)  

---

# 📌 **2. ASYNC / PROMISE TESTS**

6. Async function returning data  
7. Async error handling  
8. Delayed promise (fake timers)  
9. Timeout rejection  
10. Multiple awaited promises  

---

# 📌 **3. MOCKING MODULES**

11. Mocking individual function (`tax`)  
12. Mock entire module  
13. Reset mocks  
14. Mock default export  
15. Mock `fetch` manually  

---

# 📌 **4. SPYING**

16. Spy on object method  
17. Spy + mock implementation  
18. Spy `Date.now`  
19. Spy on multiple functions  
20. Spy on class constructor  

---

# 📌 **5. TIME & TIMERS**

21. Test `setTimeout`  
22. Test `setInterval`  
23. `advanceTimersByTime`  
24. Mock `Date`  
25. Clear timers  

---

# 📌 **6. SNAPSHOTS**

26. Snapshot object  
27. Snapshot array  
28. Snapshot function output  
29. Snapshot stringified JSON  
30. Inline snapshot  

---

# 📌 **7. COVERAGE TARGETING**

31. Full branch coverage (`grade`)  
32. Error branch (`parse`)  
33. Fallback branch (`safeParse`)  
34. Default arguments  
35. Loop testing (`sumArray`)  

---

# 📌 **8. UTILITY & EDGE CASE TESTING**

36. Pure function tests  
37. Map/filter logic  
38. Mocking `Math.random`  
39. Generator function testing  
40. Testing global variables  

---

# 📌 **9. ADVANCED MOCKING & EDGE CASES**

41. Mocking private helpers  
42. Multi-module interactions  
43. Retry logic  
44. Rate limiter  
45. Virtual filesystem mock  

---

# 📌 **10. ADVANCED ASYNC**

46. `Promise.race`  
47. `Promise.allSettled`  
48. Recursive async (`countdown`)  
49. Throttled function  
50. Debounced function  

---

## 🎯 **Purpose of This Repository**

I built this repository to:

- Deepen my understanding of testing fundamentals  
- Showcase my practical experience with Vitest  
- Build a portfolio of meaningful testing examples  
- Strengthen problem-solving and edge-case coverage techniques  

---

## 🧪 **Running Tests**

Install dependencies:

```sh
npm install
npx vitest
