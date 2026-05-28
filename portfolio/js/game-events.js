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

// Export events for use in main game logic
window.sprintEvents = events;