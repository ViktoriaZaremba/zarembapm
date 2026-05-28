# Sprint From Hell — Events Dataset

Use this file as the source dataset for the PM mini-game.

Expected format:
- Vanilla JavaScript
- Exportable array
- Each event contains:
  - id
  - category
  - difficulty
  - text
  - options
  - effects

Metrics:
- budget
- timeline
- morale
- trust

Starting stats:
70 each

Maximum:
100
Minimum:
0

---

```js
export const events = [
  {
    id: 1,
    category: "scope",
    difficulty: "easy",
    text: "The client approved designs 2 weeks late but still expects the original release date.",
    options: [
      {
        label: "Re-estimate timeline",
        effects: {
          budget: 0,
          timeline: 5,
          morale: 0,
          trust: -5
        }
      },
      {
        label: "Reduce scope",
        effects: {
          budget: 0,
          timeline: 10,
          morale: 0,
          trust: -10
        }
      },
      {
        label: "Add contractors",
        effects: {
          budget: -15,
          timeline: 10,
          morale: -5,
          trust: 0
        }
      },
      {
        label: "Push team harder",
        effects: {
          budget: 0,
          timeline: 5,
          morale: -15,
          trust: 0
        }
      }
    ]
  },

  {
    id: 2,
    category: "ai",
    difficulty: "medium",
    text: "The AI model works well in demos but fails on real client data.",
    options: [
      {
        label: "Pause release for validation",
        effects: {
          budget: 0,
          timeline: -10,
          morale: 0,
          trust: 5
        }
      },
      {
        label: "Release MVP anyway",
        effects: {
          budget: 0,
          timeline: 5,
          morale: 0,
          trust: -15
        }
      },
      {
        label: "Buy external datasets",
        effects: {
          budget: -20,
          timeline: 0,
          morale: 0,
          trust: 10
        }
      },
      {
        label: "Limit supported use cases",
        effects: {
          budget: 0,
          timeline: 5,
          morale: 0,
          trust: -5
        }
      }
    ]
  },

  {
    id: 3,
    category: "delivery",
    difficulty: "medium",
    text: "Developers estimate 3 weeks. Sales already promised next Friday.",
    options: [
      {
        label: "Reduce scope",
        effects: {
          budget: 0,
          timeline: 10,
          morale: 0,
          trust: -5
        }
      },
      {
        label: "Negotiate delivery",
        effects: {
          budget: 0,
          timeline: 0,
          morale: 5,
          trust: -10
        }
      },
      {
        label: "Add parallel development",
        effects: {
          budget: -15,
          timeline: 5,
          morale: -5,
          trust: 0
        }
      },
      {
        label: "Accept delivery risk",
        effects: {
          budget: 0,
          timeline: 0,
          morale: -15,
          trust: 5
        }
      }
    ]
  },

  {
    id: 4,
    category: "qa",
    difficulty: "easy",
    text: "QA found regression bugs after the sprint was marked complete.",
    options: [
      {
        label: "Reopen sprint",
        effects: {
          budget: 0,
          timeline: -10,
          morale: -5,
          trust: 0
        }
      },
      {
        label: "Hotfix critical bugs only",
        effects: {
          budget: 0,
          timeline: 5,
          morale: 0,
          trust: -5
        }
      },
      {
        label: "Delay release",
        effects: {
          budget: 0,
          timeline: 0,
          morale: 5,
          trust: -10
        }
      },
      {
        label: "Deploy anyway",
        effects: {
          budget: 0,
          timeline: 10,
          morale: 0,
          trust: -20
        }
      }
    ]
  },

  {
    id: 5,
    category: "team",
    difficulty: "medium",
    text: "The only engineer who understands deployment resigned.",
    options: [
      {
        label: "Delay release",
        effects: {
          budget: 0,
          timeline: 10,
          morale: 0,
          trust: -10
        }
      },
      {
        label: "Start knowledge transfer",
        effects: {
          budget: 0,
          timeline: -5,
          morale: -5,
          trust: 0
        }
      },
      {
        label: "Hire DevOps contractor",
        effects: {
          budget: -20,
          timeline: 5,
          morale: 0,
          trust: 0
        }
      },
      {
        label: "Ask team to handle it",
        effects: {
          budget: 0,
          timeline: 0,
          morale: -15,
          trust: 0
        }
      }
    ]
  },

  {
    id: 6,
    category: "scope",
    difficulty: "easy",
    text: "The client wants multilingual AI support that was never scoped.",
    options: [
      {
        label: "Re-estimate scope",
        effects: {
          budget: 0,
          timeline: 5,
          morale: 0,
          trust: -5
        }
      },
      {
        label: "Limit supported languages",
        effects: {
          budget: 5,
          timeline: 0,
          morale: 0,
          trust: -10
        }
      },
      {
        label: "Add temporary resources",
        effects: {
          budget: -15,
          timeline: 5,
          morale: 0,
          trust: 0
        }
      },
      {
        label: "Move feature to Phase 2",
        effects: {
          budget: 0,
          timeline: 0,
          morale: 5,
          trust: -5
        }
      }
    ]
  },

  {
    id: 7,
    category: "burnout",
    difficulty: "medium",
    text: "Half the sprint team is overloaded across multiple projects.",
    options: [
      {
        label: "Reduce sprint commitment",
        effects: {
          budget: 0,
          timeline: 0,
          morale: 10,
          trust: -5
        }
      },
      {
        label: "Push for overtime",
        effects: {
          budget: 0,
          timeline: 5,
          morale: -20,
          trust: 0
        }
      },
      {
        label: "Escalate resource issue",
        effects: {
          budget: 0,
          timeline: 0,
          morale: -5,
          trust: 5
        }
      },
      {
        label: "Hire temporary support",
        effects: {
          budget: -15,
          timeline: 0,
          morale: 5,
          trust: 0
        }
      }
    ]
  },

  {
    id: 8,
    category: "infrastructure",
    difficulty: "medium",
    text: "AI inference costs doubled after enabling image processing.",
    options: [
      {
        label: "Increase client billing",
        effects: {
          budget: 15,
          timeline: 0,
          morale: 0,
          trust: -10
        }
      },
      {
        label: "Reduce usage limits",
        effects: {
          budget: 10,
          timeline: 0,
          morale: 0,
          trust: -5
        }
      },
      {
        label: "Switch infrastructure",
        effects: {
          budget: 5,
          timeline: -10,
          morale: 0,
          trust: 0
        }
      },
      {
        label: "Absorb costs temporarily",
        effects: {
          budget: -20,
          timeline: 0,
          morale: 0,
          trust: 5
        }
      }
    ]
  },

  {
    id: 9,
    category: "stakeholders",
    difficulty: "easy",
    text: "A stakeholder bypassed you and assigned tasks directly to developers.",
    options: [
      {
        label: "Clarify communication process",
        effects: {
          budget: 0,
          timeline: 0,
          morale: 5,
          trust: 5
        }
      },
      {
        label: "Ignore it",
        effects: {
          budget: 0,
          timeline: 0,
          morale: -10,
          trust: 0
        }
      },
      {
        label: "Escalate immediately",
        effects: {
          budget: 0,
          timeline: 0,
          morale: -5,
          trust: -5
        }
      },
      {
        label: "Reorganize priorities",
        effects: {
          budget: 0,
          timeline: -5,
          morale: 5,
          trust: 0
        }
      }
    ]
  },

  {
    id: 10,
    category: "ai",
    difficulty: "hard",
    text: "The client asks for real-time AI responses, but latency is 8 seconds.",
    options: [
      {
        label: "Optimize infrastructure",
        effects: {
          budget: -15,
          timeline: -5,
          morale: 0,
          trust: 0
        }
      },
      {
        label: "Reduce feature complexity",
        effects: {
          budget: 0,
          timeline: 5,
          morale: 0,
          trust: -5
        }
      },
      {
        label: "Adjust expectations",
        effects: {
          budget: 5,
          timeline: 0,
          morale: 0,
          trust: -10
        }
      },
      {
        label: "Use premium APIs",
        effects: {
          budget: -20,
          timeline: 0,
          morale: 0,
          trust: 10
        }
      }
    ]
  }

  // Continue remaining events in the same structure.
  // Use ids 11-50.
  // Keep categories such as:
  // ai, delivery, scope, qa, burnout, stakeholders,
  // infrastructure, production, leadership, roadmap.
];
```

---

# Additional Recommendations

Optional fields you can add later:

```js
quote: "Scope changes rarely stay small."
```

```js
resultText: "The client accepted reduced scope."
```

```js
difficultyWeight: 1.2
```

---

# Suggested Game Logic

```js
const stats = {
  budget: 70,
  timeline: 70,
  morale: 70,
  trust: 70
};
```

---

# Suggested Lose Conditions

Game ends when:

```js
budget <= 0
|| timeline <= 0
|| morale <= 0
|| trust <= 0
```

---

# Suggested Final Score Formula

```js
finalScore =
(daysSurvived * 10)
+ budget
+ timeline
+ morale
+ trust;
```

---

# Suggested PM Archetypes

```js
Firefighter PM
Budget Guardian
Client Pleaser
Chaos Survivor
Delivery Machine
```

