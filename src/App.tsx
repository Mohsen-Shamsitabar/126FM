import AnimatedText from "./components/AnimatedText";

const App = () => {
  return (
    <>
      <h1>126FM</h1>

      <AnimatedText
        text={`Another head hangs lowly
Child is slowly taken
And the violence caused such silence
Who are we mistaken?
But you see, it's not me, it's not my family
In your head, in your head, they are fightin'
With their tanks and their bombs
And their bombs and their guns
In your head, in your head, they are cryin'
In your head, in your head
Zombie, zombie, zombie-ie-ie
What's in your head, in your head?
Zombie, zombie, zombie-ie-ie-ie, oh
Doo, doo, doo-doo, doo
Doo, doo, doo-doo, doo
Doo, doo, doo-doo, doo
Doo, doo, doo-doo, doo
Another mother's breakin'
Heart is taking over
When the violence causes silence
We must be mistaken
It's the same old theme, since 1916
In your head, in your head, they're still fightin'
With their tanks and their bombs
And their bombs and their guns
In your head, in your head, they are dyin'
In your head, in your head
Zombie, zombie, zombie-ie-ie
What's in your head, in your head?
Zombie, zombie, zombie-ie-ie-ie
Oh-oh-oh-oh-oh-oh-oh
Eh-eh, oh, ya-ya
`}
        interval={15}
      />
    </>
  );
};

export default App;
