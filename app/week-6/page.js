
import Link from 'next/link';

export default function HomePage() {
  return (
    <main>
      <h1>Assignments</h1>
      <ul>
        {/* Other week links */}
        <li>
          <Link href="/week-6">Week 6</Link>
        </li>
      </ul>
    </main>
  );
}
import ItemList from './item-list';

export default function Page() {
  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Shopping List</h1>
      <ItemList />
    </main>
  );
}
