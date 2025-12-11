  const handleRemix = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/remix`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          track_id: 'neon-dreams-v2',
          style: style,
        }),
      });

      const data = await response.json();
      alert(data.message + "\nNew track: " + data.new_track_url);
    } catch (err) {
      alert("Remix failed – backend is waking up!");
    } finally {
      setLoading(false);
    }
  };
