import React from "react";
import { 
  ScrollView, 
  View, 
  Text, 
  Image, 
  StyleSheet 
} from "react-native";

export default function Index() {
  const profiles = [
    {
      name: "Raka Satya Wurya Andhika",
      info: "00000070105",
      imageUrl: "https://elearning.umn.ac.id/pluginfile.php/21753/user/icon/remui/f3?rev=4034400" 
    },
    {
      name: "Barack Obama",
      imageUrl: "data:image/webp;base64,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ZW1iZXIgNXRoLiAoUGhvdG8gYnkgU3BlbmNlciBQbGF0dC9HZXR0eSBJbWFnZXMpMjAyNCBHZXR0eSBJbWFnZXMsAQAAAQAAACwBAAABAAAAAFhNUCASBwAAaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/Pgo8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIj4KCTxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+CgkJPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczpJcHRjNHhtcENvcmU9Imh0dHA6Ly9pcHRjLm9yZy9zdGQvSXB0YzR4bXBDb3JlLzEuMC94bWxucy8iICAgeG1sbnM6R2V0dHlJbWFnZXNHSUZUPSJodHRwOi8veG1wLmdldHR5aW1hZ2VzLmNvbS9naWZ0LzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGx1cz0iaHR0cDovL25zLnVzZXBsdXMub3JnL2xkZi94bXAvMS4wLyIgIHhtbG5zOmlwdGNFeHQ9Imh0dHA6Ly9pcHRjLm9yZy9zdGQvSXB0YzR4bXBFeHQvMjAwOC0wMi0yOS8iIHhtbG5zOnhtcFJpZ2h0cz0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3JpZ2h0cy8iIGRjOlJpZ2h0cz0iMjAyNCBHZXR0eSBJbWFnZXMiIHBob3Rvc2hvcDpDcmVkaXQ9IkdldHR5IEltYWdlcyIgR2V0dHlJbWFnZXNHSUZUOkFzc2V0SUQ9IjIxODI3MjA2MTkiIHhtcFJpZ2h0czpXZWJTdGF0ZW1lbnQ9Imh0dHBzOi8vd3d3LmdldHR5aW1hZ2VzLmNvbS9ldWxhP3V0bV9tZWRpdW09b3JnYW5pYyZhbXA7dXRtX3NvdXJjZT1nb29nbGUmYW1wO3V0bV9jYW1wYWlnbj1pcHRjdXJsIiBwbHVzOkRhdGFNaW5pbmc9Imh0dHA6Ly9ucy51c2VwbHVzLm9yZy9sZGYvdm9jYWIvRE1JLVBST0hJQklURUQtRVhDRVBUU0VBUkNIRU5HSU5FSU5ERVhJTkciID4KPGRjOmNyZWF0b3I+PHJkZjpTZXE+PHJkZjpsaT5TcGVuY2VyIFBsYXR0PC9yZGY6bGk+PC9yZGY6U2VxPjwvZGM6Y3JlYXRvcj48ZGM6ZGVzY3JpcHRpb24+PHJkZjpBbHQ+PHJkZjpsaSB4bWw6bGFuZz0ieC1kZWZhdWx0Ij5NSUxXQVVLRUUsIFdJU0NPTlNJTiAtIE5PVkVNQkVSIDAzOiBGb3JtZXIgVS5TLiBQcmVzaWRlbnQgQmFyYWNrIE9iYW1hIHNwZWFrcyBkdXJpbmcgYSBjYW1wYWlnbiBldmVudCBpbiBzdXBwb3J0IG9mIERlbW9jcmF0aWMgUHJlc2lkZW50aWFsIG5vbWluZWUgVmljZSBQcmVzaWRlbnQgS2FtYWxhIEhhcnJpcywgYXQgdGhlIEJhaXJkIENlbnRlciBvbiBOb3ZlbWJlciAwMywgMjAyNCwgaW4gTWlsd2F1a2VlLCBXaXNjb25zaW4uIEhhcnJpcyBhbmQgaGVyIFJlcHVibGljYW4gb3Bwb25lbnQsIERvbmFsZCBUcnVtcCwgYXJlIGNhbXBhaWduaW5nIGluIGtleSBiYXR0bGVncm91bmQgc3RhdGVzIGFoZWFkIG9mIEVsZWN0aW9uIERheSBvbiBOb3ZlbWJlciA1dGguIChQaG90byBieSBTcGVuY2VyIFBsYXR0L0dldHR5IEltYWdlcyk8L3JkZjpsaT48L3JkZjpBbHQ+PC9kYzpkZXNjcmlwdGlvbj4KPHBsdXM6TGljZW5zb3I+PHJkZjpTZXE+PHJkZjpsaSByZGY6cGFyc2VUeXBlPSdSZXNvdXJjZSc+PHBsdXM6TGljZW5zb3JVUkw+aHR0cHM6Ly93d3cuZ2V0dHlpbWFnZXMuY29tL2RldGFpbC8yMTgyNzIwNjE5P3V0bV9tZWRpdW09b3JnYW5pYyZhbXA7dXRtX3NvdXJjZT1nb29nbGUmYW1wO3V0bV9jYW1wYWlnbj1pcHRjdXJsPC9wbHVzOkxpY2Vuc29yVVJMPjwvcmRmOmxpPjwvcmRmOlNlcT48L3BsdXM6TGljZW5zb3I+CgkJPC9yZGY6RGVzY3JpcHRpb24+Cgk8L3JkZjpSREY+CjwveDp4bXBtZXRhPgo8P3hwYWNrZXQgZW5kPSJ3Ij8+Cg=="
    },
    {
      name: "John Smith",
      info: "johnsmith@example.com",
      imageUrl: "https://mm.feb.uncen.ac.id/wp-content/uploads/2016/01/tutor-8.jpg"
    },
    {
      name: "Jane Doe",
      info: "janedoe@example.com",
      imageUrl: "https://media.istockphoto.com/id/1289220545/photo/beautiful-woman-smiling-with-crossed-arms.jpg?s=612x612&w=0&k=20&c=qmOTkGstKj1qN0zPVWj-n28oRA6_BHQN8uVLIXg0TF8="
    },
  ];

  return (
    <ScrollView style={styles.container}>
      {profiles.map((profile, index) => (
        <View key={index} style={styles.profileContainer}>
          {/* Gambar profil */}
          <Image 
            source={{ uri: profile.imageUrl }}
            style={styles.profileImage} 
          />
          {/* Info teks (nama & info lain) */}
          <View style={styles.textContainer}>
            <Text style={styles.name}>{profile.name}</Text>
            <Text style={styles.info}>{profile.info}</Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 50,
    paddingHorizontal: 20
  },
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    backgroundColor: "#f9f9f9",
    borderRadius: 10,
    padding: 10
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 10
  },
  textContainer: {
    flex: 1
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4
  },
  info: {
    fontSize: 14,
    color: "#666"
  }
});
