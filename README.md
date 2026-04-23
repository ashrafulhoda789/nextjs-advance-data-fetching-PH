### 🔹 Server-Side Data Fetching
- Fetching data directly inside **Server Components**
- Using `async/await` with `fetch()`

### 🔹 JSON Server Setup
- Created a **temporary API server** using JSON Server
- Used it as a mock backend for development and testing

### 🔹 Caching Strategies
- `force-cache` → Uses cached data for better performance  
- `no-store` → Always fetches fresh data  
- `revalidate` → Re-fetches data after a specified time  

### 🔹 Rendering Strategies
- **SSG (Static Site Generation)** → Build-time rendering  
- **ISR (Incremental Static Regeneration)** → Updates static pages after deployment  

### 🔹 Dynamic Routing Optimization
- Used `generateStaticParams()`  
- Pre-renders dynamic routes for better performance  
