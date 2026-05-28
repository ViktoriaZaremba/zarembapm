// Sprint From Hell - Game Logic

const events = [
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
  },

  // Additional events to complete the dataset (11-40)
  {
    id: 11,
    category: "delivery",
    difficulty: "medium",
    text: "A critical dependency was deprecated mid-sprint.",
    options: [
      {
        label: "Replace dependency now",
        effects: {
          budget: -5,
          timeline: -10,
          morale: 0,
          trust: 0
        }
      },
      {
        label: "Delay migration",
        effects: {
          budget: 0,
          timeline: 5,
          morale: 0,
          trust: -5
        }
      },
      {
        label: "Use workaround",
        effects: {
          budget: 0,
          timeline: 5,
          morale: -5,
          trust: 0
        }
      },
      {
        label: "Reduce release scope",
        effects: {
          budget: 0,
          timeline: 10,
          morale: 0,
          trust: -10
        }
      }
    ]
  },

  {
    id: 12,
    category: "stakeholders",
    difficulty: "medium",
    text: "The client keeps changing reporting requirements during development.",
    options: [
      {
        label: "Freeze requirements",
        effects: {
          budget: 0,
          timeline: 10,
          morale: 0,
          trust: -10
        }
      },
      {
        label: "Re-estimate every change",
        effects: {
          budget: 0,
          timeline: 0,
          morale: -5,
          trust: 5
        }
      },
      {
        label: "Accept all requests",
        effects: {
          budget: 0,
          timeline: -10,
          morale: -15,
          trust: 10
        }
      },
      {
        label: "Move extras to backlog",
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
    id: 13,
    category: "production",
    difficulty: "hard",
    text: "Production broke 30 minutes before the investor demo.",
    options: [
      {
        label: "Delay demo",
        effects: {
          budget: 0,
          timeline: 0,
          morale: 5,
          trust: -15
        }
      },
      {
        label: "Demo limited functionality",
        effects: {
          budget: 0,
          timeline: 5,
          morale: 0,
          trust: -5
        }
      },
      {
        label: "Emergency fix sprint",
        effects: {
          budget: 0,
          timeline: 10,
          morale: -20,
          trust: 0
        }
      },
      {
        label: "Switch to recorded demo",
        effects: {
          budget: 5,
          timeline: 0,
          morale: 0,
          trust: -10
        }
      }
    ]
  },

  {
    id: 14,
    category: "planning",
    difficulty: "easy",
    text: "The team says requirements are too vague to estimate accurately.",
    options: [
      {
        label: "Run discovery workshop",
        effects: {
          budget: 0,
          timeline: -5,
          morale: 5,
          trust: 0
        }
      },
      {
        label: "Push for rough estimates",
        effects: {
          budget: 0,
          timeline: 5,
          morale: -10,
          trust: 0
        }
      },
      {
        label: "Delay planning",
        effects: {
          budget: 0,
          timeline: -5,
          morale: 0,
          trust: -5
        }
      },
      {
        label: "Reduce project scope",
        effects: {
          budget: 0,
          timeline: 10,
          morale: 0,
          trust: -10
        }
      }
    ]
  },

  {
    id: 15,
    category: "ai",
    difficulty: "medium",
    text: "The client expects GPT-4 quality using an open-source model.",
    options: [
      {
        label: "Reassess expectations",
        effects: {
          budget: 10,
          timeline: 0,
          morale: 0,
          trust: -10
        }
      },
      {
        label: "Increase infrastructure budget",
        effects: {
          budget: -20,
          timeline: 0,
          morale: 0,
          trust: 10
        }
      },
      {
        label: "Reduce AI functionality",
        effects: {
          budget: 0,
          timeline: 5,
          morale: 0,
          trust: -5
        }
      },
      {
        label: "Promise future improvements",
        effects: {
          budget: 0,
          timeline: -10,
          morale: 0,
          trust: 5
        }
      }
    ]
  },

  {
    id: 16,
    category: "team",
    difficulty: "medium",
    text: "A senior engineer says the current deadline is unrealistic.",
    options: [
      {
        label: "Re-estimate timeline",
        effects: {
          budget: 0,
          timeline: 0,
          morale: 5,
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
        label: "Push for overtime",
        effects: {
          budget: 0,
          timeline: 5,
          morale: -15,
          trust: 0
        }
      },
      {
        label: "Add developers",
        effects: {
          budget: -20,
          timeline: 5,
          morale: 0,
          trust: 0
        }
      }
    ]
  },

  {
    id: 17,
    category: "leadership",
    difficulty: "easy",
    text: "Leadership requested daily progress meetings.",
    options: [
      {
        label: "Accept new process",
        effects: {
          budget: 0,
          timeline: 0,
          morale: -10,
          trust: 5
        }
      },
      {
        label: "Suggest async updates",
        effects: {
          budget: 0,
          timeline: 0,
          morale: 5,
          trust: -5
        }
      },
      {
        label: "Reduce meeting duration",
        effects: {
          budget: 0,
          timeline: 0,
          morale: 5,
          trust: 0
        }
      },
      {
        label: "Push back",
        effects: {
          budget: 0,
          timeline: 0,
          morale: 5,
          trust: -10
        }
      }
    ]
  },

  {
    id: 18,
    category: "scope",
    difficulty: "easy",
    text: "The client asks for blockchain integration 'for future scalability'.",
    options: [
      {
        label: "Run assessment",
        effects: {
          budget: 0,
          timeline: -5,
          morale: 0,
          trust: 5
        }
      },
      {
        label: "Reject request",
        effects: {
          budget: 5,
          timeline: 0,
          morale: 0,
          trust: -15
        }
      },
      {
        label: "Add to roadmap",
        effects: {
          budget: 0,
          timeline: 0,
          morale: 5,
          trust: -5
        }
      },
      {
        label: "Start implementation",
        effects: {
          budget: -15,
          timeline: -10,
          morale: 0,
          trust: 0
        }
      }
    ]
  },

  {
    id: 19,
    category: "qa",
    difficulty: "medium",
    text: "QA environment stopped working during final testing.",
    options: [
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
        label: "Test in staging",
        effects: {
          budget: -5,
          timeline: 5,
          morale: 0,
          trust: 0
        }
      },
      {
        label: "Reduce testing scope",
        effects: {
          budget: 0,
          timeline: 10,
          morale: 0,
          trust: -15
        }
      },
      {
        label: "Emergency infra fix",
        effects: {
          budget: 0,
          timeline: 5,
          morale: -10,
          trust: 0
        }
      }
    ]
  },

  {
    id: 20,
    category: "stakeholders",
    difficulty: "medium",
    text: "A stakeholder joined sprint review and requested major UI redesigns.",
    options: [
      {
        label: "Schedule redesign phase",
        effects: {
          budget: 0,
          timeline: -10,
          morale: 0,
          trust: 5
        }
      },
      {
        label: "Reject late changes",
        effects: {
          budget: 0,
          timeline: 0,
          morale: 5,
          trust: -15
        }
      },
      {
        label: "Apply critical updates",
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
      }
    ]
  },

  {
    id: 21,
    category: "team",
    difficulty: "easy",
    text: "Developers complain meetings consume most of the sprint time.",
    options: [
      {
        label: "Introduce async updates",
        effects: { budget: 0, timeline: 0, morale: 10, trust: -5 }
      },
      {
        label: "Shorten ceremonies",
        effects: { budget: 0, timeline: 0, morale: 5, trust: 0 }
      },
      {
        label: "Keep process unchanged",
        effects: { budget: 0, timeline: 0, morale: -10, trust: 0 }
      },
      {
        label: "Remove non-essential meetings",
        effects: { budget: 0, timeline: 5, morale: 10, trust: 0 }
      }
    ]
  },

  {
    id: 22,
    category: "infrastructure",
    difficulty: "medium",
    text: "The cloud provider increased prices unexpectedly.",
    options: [
      {
        label: "Increase client billing",
        effects: { budget: 15, timeline: 0, morale: 0, trust: -10 }
      },
      {
        label: "Optimize infrastructure",
        effects: { budget: -5, timeline: -5, morale: 0, trust: 0 }
      },
      {
        label: "Reduce platform features",
        effects: { budget: 5, timeline: 0, morale: 0, trust: -5 }
      },
      {
        label: "Absorb the increase",
        effects: { budget: -20, timeline: 0, morale: 0, trust: 5 }
      }
    ]
  },

  {
    id: 23,
    category: "ai",
    difficulty: "medium",
    text: "The client asks if AI can fully automate manual review work.",
    options: [
      {
        label: "Explain limitations",
        effects: { budget: 5, timeline: 0, morale: 0, trust: -5 }
      },
      {
        label: "Offer hybrid workflow",
        effects: { budget: -5, timeline: 0, morale: 0, trust: 10 }
      },
      {
        label: "Promise future automation",
        effects: { budget: 0, timeline: -10, morale: 0, trust: 5 }
      },
      {
        label: "Start aggressive implementation",
        effects: { budget: -15, timeline: 0, morale: -10, trust: 0 }
      }
    ]
  },

  {
    id: 24,
    category: "process",
    difficulty: "easy",
    text: "Team velocity dropped significantly after process changes.",
    options: [
      {
        label: "Roll back changes",
        effects: { budget: 0, timeline: 0, morale: 10, trust: -5 }
      },
      {
        label: "Wait another sprint",
        effects: { budget: 0, timeline: 0, morale: -10, trust: 0 }
      },
      {
        label: "Simplify workflow",
        effects: { budget: 0, timeline: 5, morale: 5, trust: 0 }
      },
      {
        label: "Push adaptation",
        effects: { budget: 0, timeline: 0, morale: -15, trust: 0 }
      }
    ]
  },

  {
    id: 25,
    category: "stakeholders",
    difficulty: "easy",
    text: "The client invited 40 people to the sprint review unexpectedly.",
    options: [
      {
        label: "Expand demo scope",
        effects: { budget: 0, timeline: 0, morale: -10, trust: 10 }
      },
      {
        label: "Limit presentation topics",
        effects: { budget: 0, timeline: 5, morale: 0, trust: -5 }
      },
      {
        label: "Turn into roadmap session",
        effects: { budget: 0, timeline: 0, morale: -5, trust: 5 }
      },
      {
        label: "Postpone review",
        effects: { budget: 0, timeline: 0, morale: 0, trust: -15 }
      }
    ]
  },

  {
    id: 26,
    category: "ai",
    difficulty: "hard",
    text: "The AI feature generates inconsistent results between environments.",
    options: [
      {
        label: "Pause deployment",
        effects: { budget: 0, timeline: -10, morale: 0, trust: 5 }
      },
      {
        label: "Add manual validation",
        effects: { budget: -10, timeline: 0, morale: 0, trust: 10 }
      },
      {
        label: "Deploy stable features only",
        effects: { budget: 0, timeline: 5, morale: 0, trust: -5 }
      },
      {
        label: "Ignore rare issues",
        effects: { budget: 0, timeline: 10, morale: 0, trust: -20 }
      }
    ]
  },

  {
    id: 27,
    category: "finance",
    difficulty: "medium",
    text: "Finance froze contractor approvals mid-project.",
    options: [
      {
        label: "Reduce sprint scope",
        effects: { budget: 0, timeline: 10, morale: 0, trust: -5 }
      },
      {
        label: "Push internal team harder",
        effects: { budget: 0, timeline: 5, morale: -20, trust: 0 }
      },
      {
        label: "Escalate financial risk",
        effects: { budget: 0, timeline: 0, morale: -5, trust: 5 }
      },
      {
        label: "Delay milestones",
        effects: { budget: 0, timeline: 10, morale: 0, trust: -10 }
      }
    ]
  },

  {
    id: 28,
    category: "competition",
    difficulty: "medium",
    text: "The client discovered competitors launching similar AI products.",
    options: [
      {
        label: "Accelerate release",
        effects: { budget: 0, timeline: 10, morale: -15, trust: 0 }
      },
      {
        label: "Differentiate features",
        effects: { budget: -5, timeline: 0, morale: 0, trust: 5 }
      },
      {
        label: "Reduce scope for launch",
        effects: { budget: 0, timeline: 10, morale: 0, trust: -5 }
      },
      {
        label: "Reposition roadmap",
        effects: { budget: 0, timeline: -5, morale: 0, trust: 5 }
      }
    ]
  },

  {
    id: 29,
    category: "techdebt",
    difficulty: "medium",
    text: "Developers say technical debt is slowing every sprint.",
    options: [
      {
        label: "Schedule refactoring sprint",
        effects: { budget: 0, timeline: -10, morale: 5, trust: 0 }
      },
      {
        label: "Ignore for now",
        effects: { budget: 0, timeline: -10, morale: -10, trust: 0 }
      },
      {
        label: "Refactor critical modules",
        effects: { budget: -5, timeline: 5, morale: 0, trust: 0 }
      },
      {
        label: "Push deadline",
        effects: { budget: 0, timeline: 0, morale: 5, trust: -10 }
      }
    ]
  },

  {
    id: 30,
    category: "scope",
    difficulty: "easy",
    text: "The client asks for analytics nobody originally discussed.",
    options: [
      {
        label: "Re-estimate requirements",
        effects: { budget: 0, timeline: 5, morale: 0, trust: -5 }
      },
      {
        label: "Add simplified analytics",
        effects: { budget: -5, timeline: 0, morale: 0, trust: 5 }
      },
      {
        label: "Move to backlog",
        effects: { budget: 0, timeline: 0, morale: 5, trust: -10 }
      },
      {
        label: "Accept full request",
        effects: { budget: 0, timeline: -10, morale: -10, trust: 10 }
      }
    ]
  },

  {
    id: 31,
    category: "production",
    difficulty: "hard",
    text: "An engineer accidentally deleted production data.",
    options: [
      {
        label: "Start incident response",
        effects: { budget: 0, timeline: 0, morale: -10, trust: 5 }
      },
      {
        label: "Delay communication",
        effects: { budget: 0, timeline: 0, morale: 0, trust: -20 }
      },
      {
        label: "Restore from backup",
        effects: { budget: -5, timeline: -10, morale: 0, trust: 0 }
      },
      {
        label: "Limit client visibility",
        effects: { budget: 0, timeline: 5, morale: 0, trust: -10 }
      }
    ]
  },

  {
    id: 32,
    category: "delivery",
    difficulty: "medium",
    text: "The client demands weekend releases to move faster.",
    options: [
      {
        label: "Rotate on-call schedule",
        effects: { budget: 0, timeline: 0, morale: -5, trust: 5 }
      },
      {
        label: "Reject weekend deployments",
        effects: { budget: 0, timeline: 0, morale: 10, trust: -15 }
      },
      {
        label: "Offer biweekly releases",
        effects: { budget: 0, timeline: 0, morale: 5, trust: -5 }
      },
      {
        label: "Accept fully",
        effects: { budget: 0, timeline: 5, morale: -20, trust: 0 }
      }
    ]
  },

  {
    id: 33,
    category: "leadership",
    difficulty: "medium",
    text: "Leadership asks why velocity dropped while scope increased.",
    options: [
      {
        label: "Present delivery metrics",
        effects: { budget: 0, timeline: 0, morale: -5, trust: 10 }
      },
      {
        label: "Push team harder",
        effects: { budget: 0, timeline: 5, morale: -20, trust: 0 }
      },
      {
        label: "Reduce commitments",
        effects: { budget: 0, timeline: 10, morale: 0, trust: -5 }
      },
      {
        label: "Reassess roadmap",
        effects: { budget: 0, timeline: -5, morale: 0, trust: 5 }
      }
    ]
  },

  {
    id: 34,
    category: "ai",
    difficulty: "hard",
    text: "The AI model passes benchmarks but users hate the results.",
    options: [
      {
        label: "Collect user feedback",
        effects: { budget: 0, timeline: -5, morale: 0, trust: 10 }
      },
      {
        label: "Tune prompts only",
        effects: { budget: -5, timeline: 5, morale: 0, trust: 0 }
      },
      {
        label: "Delay rollout",
        effects: { budget: 0, timeline: 0, morale: 5, trust: -10 }
      },
      {
        label: "Keep release plan",
        effects: { budget: 0, timeline: 5, morale: 0, trust: -15 }
      }
    ]
  },

  {
    id: 35,
    category: "bugs",
    difficulty: "easy",
    text: "A developer says: 'It works on my machine.'",
    options: [
      {
        label: "Reproduce issue together",
        effects: { budget: 0, timeline: -5, morale: 5, trust: 0 }
      },
      {
        label: "Escalate bug priority",
        effects: { budget: 0, timeline: 0, morale: -5, trust: 5 }
      },
      {
        label: "Delay release",
        effects: { budget: 0, timeline: 10, morale: 0, trust: -10 }
      },
      {
        label: "Wait for client confirmation",
        effects: { budget: 0, timeline: 5, morale: 0, trust: -15 }
      }
    ]
  },

  {
    id: 36,
    category: "techdebt",
    difficulty: "medium",
    text: "The team asks for a sprint dedicated entirely to technical debt.",
    options: [
      {
        label: "Approve full sprint",
        effects: { budget: 0, timeline: -10, morale: 15, trust: 0 }
      },
      {
        label: "Allow partial refactoring",
        effects: { budget: 0, timeline: 5, morale: 5, trust: 0 }
      },
      {
        label: "Reject request",
        effects: { budget: 0, timeline: 0, morale: -15, trust: 0 }
      },
      {
        label: "Delay decision",
        effects: { budget: 0, timeline: 0, morale: -5, trust: -5 }
      }
    ]
  },

  {
    id: 37,
    category: "security",
    difficulty: "hard",
    text: "The client suddenly wants SOC2 compliance before launch.",
    options: [
      {
        label: "Delay launch",
        effects: { budget: 0, timeline: -15, morale: 0, trust: 5 }
      },
      {
        label: "Limit enterprise rollout",
        effects: { budget: 0, timeline: 5, morale: 0, trust: -5 }
      },
      {
        label: "Hire consultants",
        effects: { budget: -20, timeline: 0, morale: 0, trust: 10 }
      },
      {
        label: "Ignore temporarily",
        effects: { budget: 0, timeline: 10, morale: 0, trust: -20 }
      }
    ]
  },

  {
    id: 38,
    category: "priorities",
    difficulty: "medium",
    text: "Halfway through the sprint, priorities changed completely.",
    options: [
      {
        label: "Replan sprint",
        effects: { budget: 0, timeline: -5, morale: -5, trust: 0 }
      },
      {
        label: "Finish original scope",
        effects: { budget: 0, timeline: 5, morale: 0, trust: -10 }
      },
      {
        label: "Split priorities",
        effects: { budget: 0, timeline: 5, morale: -10, trust: 0 }
      },
      {
        label: "Escalate issue",
        effects: { budget: 0, timeline: 0, morale: -5, trust: 5 }
      }
    ]
  },

  {
    id: 39,
    category: "reporting",
    difficulty: "easy",
    text: "The client asks for detailed daily progress reports.",
    options: [
      {
        label: "Automate reporting",
        effects: { budget: -5, timeline: 0, morale: 5, trust: 0 }
      },
      {
        label: "Provide manual updates",
        effects: { budget: 0, timeline: 0, morale: -10, trust: 5 }
      },
      {
        label: "Push back",
        effects: { budget: 0, timeline: 0, morale: 5, trust: -10 }
      },
      {
        label: "Reduce meeting frequency",
        effects: { budget: 0, timeline: 0, morale: 5, trust: -5 }
      }
    ]
  },

  {
    id: 40,
    category: "production",
    difficulty: "hard",
    text: "A critical production bug appears right before weekend.",
    options: [
      {
        label: "Delay deployment",
        effects: { budget: 0, timeline: 0, morale: 5, trust: -10 }
      },
      {
        label: "Emergency fix",
        effects: { budget: 0, timeline: 10, morale: -20, trust: 0 }
      },
      {
        label: "Deploy partial release",
        effects: { budget: 0, timeline: 5, morale: 0, trust: -5 }
      },
      {
        label: "Escalate severity",
        effects: { budget: 0, timeline: 0, morale: -5, trust: 5 }
      }
    ]
  }
];

// Use the events from dataset
const allEvents = events;


// Game State
let gameState = {
  day: 0,
  budget: 70,
  timeline: 70,
  morale: 70,
  trust: 70,
  usedEvents: [],
  isGameOver: false
};

// DOM Elements
const screens = {
  intro: document.getElementById('intro-screen'),
  game: document.getElementById('game-screen'),
  gameover: document.getElementById('gameover-screen')
};

function showScreen(name) {
  Object.values(screens).forEach(s => s.classList.remove('active'));
  screens[name].classList.add('active');
}

function startGame() {
  gameState = {
    day: 0,
    budget: 70,
    timeline: 70,
    morale: 70,
    trust: 70,
    usedEvents: [],
    isGameOver: false
  };
  updateStats();
  showScreen('game');
  nextDay();
}

function updateStats() {
  const stats = ['budget', 'timeline', 'morale', 'trust'];
  stats.forEach(stat => {
    const value = gameState[stat];
    const el = document.getElementById(`${stat}-value`);
    const bar = document.getElementById(`${stat}-bar`);
    const item = document.getElementById(`stat-${stat}`);

    el.textContent = value;
    bar.style.width = `${value}%`;

    // Color classes
    bar.className = 'stat-bar-fill';
    item.className = 'stat-item';

    if (value > 70) {
      bar.classList.add('high');
    } else if (value <= 25) {
      bar.classList.add('low');
      item.classList.add('danger');
    } else if (value <= 40) {
      item.classList.add('warning');
    }
  });

  document.getElementById('day-number').textContent = `${gameState.day}/10`;
  
  // Update sprint progress bar
  const progressPercent = (gameState.day / 10) * 100;
  const progressBar = document.getElementById('sprint-progress');
  progressBar.style.width = `${progressPercent}%`;
  
  // Change progress bar color based on progress
  if (gameState.day <= 3) {
    progressBar.style.background = 'linear-gradient(90deg, #5cb85c, #4cae4c)'; // Green - early sprint
  } else if (gameState.day <= 7) {
    progressBar.style.background = 'linear-gradient(90deg, var(--soft-gold), #c4912e)'; // Gold - mid sprint
  } else {
    progressBar.style.background = 'linear-gradient(90deg, #dc3c3c, #c23321)'; // Red - late sprint
  }
}

function getAvailableEvents() {
  const day = gameState.day;
  let pool;

  if (day <= 3) {
    // Early sprint: easier events
    pool = allEvents.filter(e => e.difficulty === 'easy' || e.difficulty === 'medium');
  } else if (day <= 7) {
    // Mid sprint: mixed difficulty
    pool = allEvents.filter(e => e.difficulty === 'medium' || e.difficulty === 'hard');
  } else {
    // Late sprint: harder events
    pool = allEvents.filter(e => e.difficulty === 'hard' || e.difficulty === 'medium');
  }

  // Filter out recently used events
  const available = pool.filter(e => !gameState.usedEvents.includes(e.id));

  if (available.length === 0) {
    gameState.usedEvents = [];
    return pool;
  }

  return available;
}

function nextDay() {
  gameState.day++;
  updateStats();

  const available = getAvailableEvents();
  const event = available[Math.floor(Math.random() * available.length)];
  gameState.usedEvents.push(event.id);

  displayEvent(event);
}

function displayEvent(event) {
  document.getElementById('event-category').textContent = event.category;
  document.getElementById('event-text').textContent = event.text;

  const diffEl = document.getElementById('event-difficulty');
  diffEl.textContent = event.difficulty;
  diffEl.className = `event-difficulty ${event.difficulty}`;

  const optionsGrid = document.getElementById('options-grid');
  optionsGrid.innerHTML = '';

  event.options.forEach(option => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';

    btn.innerHTML = `
      <div>${option.label}</div>
    `;

    btn.addEventListener('click', () => selectOption(option));
    optionsGrid.appendChild(btn);
  });
}

function selectOption(option) {
  // Apply effects
  const stats = ['budget', 'timeline', 'morale', 'trust'];
  stats.forEach(stat => {
    const change = option.effects[stat];
    if (change !== 0) {
      gameState[stat] = Math.max(0, Math.min(100, gameState[stat] + change));
    }
  });

  updateStats();

  // Check win condition first
  if (gameState.day >= 10) {
    endGame("Sprint completed successfully!", true);
    return;
  }

  // Check lose condition
  const loseConditions = {
    budget: "Project exceeded budget.",
    timeline: "Deadline missed.",
    morale: "The team burned out.",
    trust: "Client terminated the contract."
  };

  for (const [stat, reason] of Object.entries(loseConditions)) {
    if (gameState[stat] <= 0) {
      endGame(reason, false);
      return;
    }
  }

  // Next day
  setTimeout(nextDay, 300);
}

function getArchetype() {
  const { budget, timeline, morale, trust } = gameState;
  const day = gameState.day;
  const stats = [budget, timeline, morale, trust];
  const statsUnder30 = stats.filter(s => s < 30).length;
  const avgStats = stats.reduce((a, b) => a + b, 0) / 4;

  // Special archetypes for completed sprint
  if (day >= 10) {
    if (stats.every(s => s > 70)) {
      return { icon: '🏆', name: 'Perfect PM', desc: 'Completed sprint with all metrics above 70!' };
    }
    if (avgStats > 60) {
      return { icon: '📊', name: 'Delivery Machine', desc: 'Balanced everything like a pro and delivered on time.' };
    }
    if (trust > 80) {
      return { icon: '🤝', name: 'Client Champion', desc: 'Maintained excellent client relationships throughout.' };
    }
    if (morale > 70) {
      return { icon: '😊', name: 'Team Hero', desc: 'Kept the team happy and motivated till the end.' };
    }
    if (budget > 70) {
      return { icon: '💰', name: 'Budget Master', desc: 'Delivered on time while staying within budget.' };
    }
    if (timeline > 70) {
      return { icon: '⏰', name: 'Time Keeper', desc: 'Managed timeline perfectly despite all challenges.' };
    }
    return { icon: '🎯', name: 'Sprint Survivor', desc: 'Made it through the full sprint - well done!' };
  }

  // Archetypes for failed sprints
  if (trust > 85 && budget < 30) {
    return { icon: '🤝', name: 'Client Pleaser', desc: 'Always protected client trust at any cost.' };
  }
  if (trust > 70 && morale < 30) {
    return { icon: '🔥', name: 'Firefighter PM', desc: 'High trust, but the team is exhausted.' };
  }
  if (budget > 70 && trust < 40) {
    return { icon: '💸', name: 'Budget Guardian', desc: 'Saved money, lost the client.' };
  }
  if (day >= 7 && statsUnder30 >= 2) {
    return { icon: '⚡', name: 'Chaos Survivor', desc: 'Survived sprint chaos with unstable stats.' };
  }
  
  return { icon: '🎯', name: 'Sprint Warrior', desc: 'Gave it your best shot.' };
}

function endGame(reason, isWin = false) {
  gameState.isGameOver = true;

  const score = (gameState.day * 20) + gameState.budget + gameState.timeline + gameState.morale + gameState.trust;
  const archetype = getArchetype();

  // Update title based on win/lose
  const titleElement = document.querySelector('.gameover-title');
  if (isWin) {
    titleElement.textContent = 'Sprint Success!';
    titleElement.style.color = '#5cb85c'; // Green for success
  } else {
    titleElement.textContent = 'Sprint Failed';
    titleElement.style.color = '#dc3c3c'; // Red for failure
  }

  document.getElementById('gameover-reason').textContent = reason;
  document.getElementById('final-days').textContent = gameState.day;
  document.getElementById('final-score').textContent = score;
  document.getElementById('archetype-icon').textContent = archetype.icon;
  document.getElementById('archetype-name').textContent = archetype.name;
  document.getElementById('archetype-desc').textContent = archetype.desc;

  showScreen('gameover');
}
