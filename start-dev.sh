#!/bin/bash

# Main Site development environment launcher
# Usage: ./start-dev.sh

SESSION="main-site"
ROOT_DIR="$HOME/code/main-site"

# Kill existing session if it exists
tmux kill-session -t $SESSION 2>/dev/null

# Dev window: yarn start
tmux new-session -d -s $SESSION -n "dev" -c "$ROOT_DIR"
tmux send-keys -t $SESSION:dev 'yarn start' C-m

# Root window
tmux new-window -t $SESSION -n "root" -c "$ROOT_DIR"

# Set terminal tab title
tmux set-option -t $SESSION set-titles on
tmux set-option -t $SESSION set-titles-string "Main Site Dev"

# Key bindings: Alt+Arrow to navigate windows and panes
tmux bind-key -n M-Right next-window
tmux bind-key -n M-Left previous-window
tmux bind-key -n M-Up select-pane -t :.-
tmux bind-key -n M-Down select-pane -t :.+

# Select dev window and attach
tmux select-window -t $SESSION:dev
tmux attach -t $SESSION
